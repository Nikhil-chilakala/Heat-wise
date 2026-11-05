import React, { useState } from 'react';
import { CONCERN_CARDS } from '../data/heatData';
import { ConcernCard } from '../types';
import { Apple, Flame, Sparkles, ShieldAlert, X, ArrowRight, CheckCircle2, FlaskConical } from 'lucide-react';

export const WhyBeConcerned: React.FC = () => {
  const [activeModalCard, setActiveModalCard] = useState<ConcernCard | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple':
        return <Apple className="w-6 h-6 text-emerald-600" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-600" />;
      default:
        return <Flame className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section id="risks" className="py-16 lg:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Science & Consequences
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Why Should We Be Concerned?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Understanding the effects of excessive heat helps you make informed choices without unnecessary panic. Good food safety balances thermal protection with culinary quality.
          </p>
        </div>

        {/* 4 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONCERN_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center shadow-xs">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1 mb-3">
                  {card.subtitle}
                </p>

                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <button
                onClick={() => setActiveModalCard(card)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200/90 transition-colors shadow-xs"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Informative Sub-banner */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-950">
              Clear Perspective: Risk vs. Panic
            </h4>
            <p className="text-xs text-amber-800/90 max-w-3xl leading-relaxed">
              Occasional slightly over-toasted bread or well-done stir-fry will not cause acute illness. The goal of HeatWise is building sustainable kitchen awareness so everyday cooking protects natural vitamins, reduces process contaminants, and eliminates microbial cold spots.
            </p>
          </div>
          <a
            href="#food-guide"
            className="px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-200/70 hover:bg-amber-200 rounded-lg whitespace-nowrap shrink-0 transition-colors"
          >
            Explore Food Guide
          </a>
        </div>

      </div>

      {/* Modal Dialog for Learn More */}
      {activeModalCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-stone-200 shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-xs">
                  {getIcon(activeModalCard.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    {activeModalCard.title}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {activeModalCard.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModalCard(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700 leading-relaxed">
              
              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                  What Happens Here
                </h4>
                <p className="text-stone-600 bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                  {activeModalCard.extendedDetails.overview}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FlaskConical className="w-4 h-4 text-orange-600" />
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    The Science Behind It
                  </h4>
                </div>
                <p className="text-stone-600">
                  {activeModalCard.extendedDetails.chemicalOrBiologicalProcess}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                  Practical Real-Life Impact
                </h4>
                <p className="text-stone-600">
                  {activeModalCard.extendedDetails.practicalImpact}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80">
                <div className="flex items-center gap-2 mb-1.5 text-emerald-900 font-semibold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Actionable Kitchen Remedy</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                  {activeModalCard.extendedDetails.actionableAdvice}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-stone-200 bg-stone-50 flex justify-end">
              <button
                onClick={() => setActiveModalCard(null)}
                className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
              >
                Understood
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
