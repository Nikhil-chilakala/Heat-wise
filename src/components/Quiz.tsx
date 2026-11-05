import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/heatData';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, HelpCircle, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

interface QuizProps {
  onOpenLogin?: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ onOpenLogin }) => {
  const { user } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [savedToAccount, setSavedToAccount] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      // Auto-save if user is logged in
      if (user) {
        saveScoreToAccount(score);
      }
    }
  };

  const saveScoreToAccount = async (finalScore: number) => {
    if (!user) return;
    try {
      const historyId = `attempt_${Date.now()}`;
      await setDoc(doc(db, 'users', user.uid, 'quizHistory', historyId), {
        score: finalScore,
        total: QUIZ_QUESTIONS.length,
        badge: finalScore === 5 ? 'Master Food Heater' : finalScore >= 3 ? 'Savvy Cook' : 'Learning Cook',
        completedAt: new Date().toISOString()
      });
      setSavedToAccount(true);
    } catch (err) {
      console.warn('Could not save quiz score to account:', err);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
    setSavedToAccount(false);
  };

  const getScoreFeedback = () => {
    if (score === 5) {
      return {
        badge: 'Master Food Heater',
        message: 'Outstanding! You have a crystal-clear understanding of thermal food safety, nutrient preservation, and heating habits.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
      };
    }
    if (score >= 3) {
      return {
        badge: 'Savvy Cook',
        message: 'Great job! You know the core principles of safe heating. Review a few of the tips in the guide to reach perfection.',
        color: 'text-amber-700 bg-amber-50 border-amber-200'
      };
    }
    return {
      badge: 'Learning Cook',
      message: 'Good effort! Exploring the food guide will quickly help you master safe heating times, temperatures, and microwave habits.',
      color: 'text-stone-700 bg-stone-100 border-stone-200'
    };
  };

  return (
    <section id="quiz" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Interactive Assessment
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Are You a Smart Food Heater?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Test your everyday kitchen instincts with 5 quick scenarios and receive instant scientific feedback.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm">
          
          {!isQuizCompleted ? (
            <div className="space-y-6">
              
              {/* Question Progress & Live Score */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 text-xs text-stone-500 font-medium">
                <span>
                  Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono bg-stone-100 px-2.5 py-1 rounded-md text-stone-700">
                  Current Score: {score} / {QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-600 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="py-2">
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswerSubmitted && idx === currentQ.correctIndex;
                  const isWrong = isAnswerSubmitted && isSelected && idx !== currentQ.correctIndex;

                  let optionStyle = 'bg-stone-50 border-stone-200 hover:bg-stone-100 text-stone-800';

                  if (isSelected && !isAnswerSubmitted) {
                    optionStyle = 'bg-orange-50/80 border-orange-500 text-stone-900 ring-2 ring-orange-200';
                  }

                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-200 font-medium';
                  } else if (isWrong) {
                    optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-200';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle} ${
                        isAnswerSubmitted ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-white border border-stone-200/90 flex items-center justify-center font-mono font-bold text-xs text-stone-600 shrink-0 shadow-2xs">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isWrong && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Box */}
              {isAnswerSubmitted && (
                <div
                  className={`p-4 rounded-xl border space-y-2 animate-fadeIn text-xs sm:text-sm ${
                    selectedOption === currentQ.correctIndex
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/80 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    {selectedOption === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Correct!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Not quite right</span>
                      </>
                    )}
                  </div>
                  <p className="leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  <p className="text-xs text-stone-500 pt-1 font-medium">
                    💡 Kitchen Tip: {currentQ.tip}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end pt-4 border-t border-stone-100">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-stone-900 hover:bg-orange-600 disabled:opacity-40 disabled:hover:bg-stone-900 transition-colors shadow-xs"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-xs"
                  >
                    <span>
                      {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Quiz Completion Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center shadow-xs">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold border ${getScoreFeedback().color}`}>
                  {getScoreFeedback().badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
                  You Scored {score} out of {QUIZ_QUESTIONS.length}!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  {getScoreFeedback().message}
                </p>

                {/* Account Sync status */}
                {user ? (
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 inline-block mt-2">
                    ✓ Score saved to Google Account ({user.displayName || user.email})
                  </p>
                ) : (
                  <div className="pt-2">
                    <button
                      onClick={onOpenLogin}
                      className="text-xs text-orange-700 hover:text-orange-800 font-semibold underline"
                    >
                      Sign in with Google to save this badge & score →
                    </button>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-stone-900 hover:bg-orange-600 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>

                <a
                  href="#checklist"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  <span>Kitchen Safety Checklist</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
