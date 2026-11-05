import React, { useState } from 'react';
import { CHECKLIST_ITEMS } from '../data/heatData';
import { CheckSquare, Square, RotateCcw, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

export const SafetyChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetChecklist = () => {
    setCheckedIds([]);
  };

  const percentage = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);

  const getStatusMessage = () => {
    if (percentage === 100) {
      return {
        title: 'Safe & Ready to Enjoy!',
        text: 'All six thermal safety benchmarks satisfied. Food is safe, delicious, and nutrient-protected.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
      };
    }
    if (percentage >= 50) {
      return {
        title: 'Good Progress — Almost Ready',
        text: 'Keep verifying the remaining points before serving, especially even heating and oil temperature.',
        color: 'text-amber-800 bg-amber-50 border-amber-200'
      };
    }
    return {
      title: 'Kitchen Verification in Progress',
      text: 'Run through each check below to ensure your meal was prepared and reheated safely.',
      color: 'text-stone-700 bg-stone-100 border-stone-200'
    };
  };

  const status = getStatusMessage();

  return (
    <section id="checklist" className="py-16 lg:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Kitchen Companion
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Before You Eat, Check These Things.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            A handy interactive checklist for everyday cooking, microwave reheating, and meal prep.
          </p>
        </div>

        {/* Checklist Container */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-6">
          
          {/* Progress Header Strip */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                Safety Verification Score
              </span>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono tabular-nums">
                  {percentage}%
                </span>
                <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${status.color}`}>
                  {status.title}
                </span>
              </div>
            </div>

            <button
              onClick={resetChecklist}
              disabled={checkedIds.length === 0}
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors self-end sm:self-center"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Checklist</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-4 cursor-pointer ${
                    isChecked
                      ? 'bg-emerald-50/60 border-emerald-300 text-stone-900'
                      : 'bg-white border-stone-200/80 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-stone-400" />
                      )}
                    </div>
                    <span className={isChecked ? 'line-through text-stone-500' : 'font-medium'}>
                      {item.text}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded shrink-0">
                    {item.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Supportive Kitchen Note */}
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-xs text-stone-600 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Kitchen Routine Tip:</strong> Make these 6 checks an unconscious reflex before serving meals to children, elderly family members, or students packing lunchboxes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
