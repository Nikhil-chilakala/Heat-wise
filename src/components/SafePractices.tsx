import React from 'react';
import { SAFE_PRACTICES } from '../data/heatData';
import { Check, ShieldCheck, Flame, Compass } from 'lucide-react';

export const SafePractices: React.FC = () => {
  return (
    <section id="safe-practices" className="py-16 lg:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            The Practical Solution
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            A Few Smart Habits Can Make a Difference.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Safe heating isn’t complicated or time-consuming. Integrating these eight straightforward kitchen rules preserves nutritional vitality, protects flavor, and keeps your family safe.
          </p>
        </div>

        {/* Golden Rule Highlight Card */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-300/80 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-700" />
              The Core Takeaway
            </span>
            <blockquote className="text-xl sm:text-2xl font-extrabold text-stone-900 font-display leading-snug">
              “Don’t just focus on how hot your food gets. Focus on how evenly and properly it is heated.”
            </blockquote>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Excessive surface heat burns food while leaving centers cold. Uniform, gentle heat destroys foodborne bacteria throughout while keeping delicate vitamins and moisture intact.
            </p>
          </div>
        </div>

        {/* 8 Practical Habits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFE_PRACTICES.map((habit) => (
            <div
              key={habit.number}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    Habit {habit.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center text-emerald-600 shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                  {habit.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {habit.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200/60 text-[11px] text-stone-400 font-medium">
                Everyday kitchen practice
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
