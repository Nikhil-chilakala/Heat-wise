import React, { useState } from 'react';
import { MYTH_FACTS } from '../data/heatData';
import { HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';

export const MythVsFact: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('myth-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Dispelling Misconceptions
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Myth vs. Fact in the Modern Kitchen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Everyday cooking is surrounded by folklore and fear-mongering. Let’s separate culinary fact from fiction using verified food safety science.
          </p>
        </div>

        {/* Myth Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MYTH_FACTS.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all flex flex-col justify-between"
              >
                <div className="p-6">
                  
                  {/* Myth Block */}
                  <div className="mb-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span>MYTH</span>
                    </div>
                    <p className="text-base font-bold text-stone-900 leading-snug">
                      "{item.myth}"
                    </p>
                  </div>

                  {/* Fact Block */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>FACT</span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-snug">
                      {item.fact}
                    </p>
                  </div>

                  {/* Expanded Explanation */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-3">
                      <p className="leading-relaxed">
                        {item.explanation}
                      </p>
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-stone-400" />
                        <span>Source: {item.sourceAuthority}</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Toggle Button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full px-6 py-3 bg-stone-50 hover:bg-stone-100 border-t border-stone-100 text-xs font-semibold text-stone-700 flex items-center justify-between transition-colors"
                >
                  <span>{isExpanded ? 'Hide scientific detail' : 'Why this is true'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  )}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
