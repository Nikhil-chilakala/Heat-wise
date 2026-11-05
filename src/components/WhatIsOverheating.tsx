import React from 'react';
import { Timer, Flame, Waves, AlertCircle, ArrowUpRight } from 'lucide-react';

export const WhatIsOverheating: React.FC = () => {
  const cards = [
    {
      title: 'Excessive Cooking',
      shortDesc: 'Heating food for too long can make it dry, tough, burnt, or less enjoyable.',
      detail: 'Prolonged thermal exposure forces out internal moisture, collapses cellular structure, and breaks down heat-sensitive vitamins like C and B-complex.',
      icon: Timer,
      accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
      example: 'Over-boiled broccoli turning dull olive mush; chicken breast cooked to stringy dryness.'
    },
    {
      title: 'Burning or Charring',
      shortDesc: 'Very high temperatures can produce unwanted compounds in certain foods.',
      detail: 'When surface heat exceeds 120°C on starches or proteins, delicate caramelization degrades into pyrolysis, forming acrylamide or aromatic hydrocarbons.',
      icon: Flame,
      accentColor: 'text-orange-600 bg-orange-50 border-orange-200',
      example: 'Blackened toast crusts, deeply charred french fries, and burnt meat crusts.'
    },
    {
      title: 'Unsafe Reheating',
      shortDesc: 'Uneven or improper reheating can leave some parts insufficiently heated.',
      detail: 'Microwaving without stirring creates cold pockets where harmful microorganisms survive, even while steam billows off the edge of the plate.',
      icon: Waves,
      accentColor: 'text-sky-600 bg-sky-50 border-sky-200',
      example: 'Reheating rice or stew without stirring, leaving the core lukewarm at 45°C.'
    }
  ];

  return (
    <section id="what-is-it" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Core Fundamentals
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            First, Understand What Overheating Means.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Food overheating happens when food is exposed to excessive heat or heated for longer than necessary. It can affect its texture, taste, nutritional quality, and, in certain situations, food safety.
          </p>
        </div>

        {/* 3 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.accentColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-stone-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-sm font-medium text-stone-700 leading-relaxed mb-4">
                    {card.shortDesc}
                  </p>

                  <p className="text-xs text-stone-500 leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 bg-stone-50/60 -mx-7 -mb-7 px-7 py-3 rounded-b-2xl">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block mb-1">
                    Everyday Example:
                  </span>
                  <span className="text-xs text-stone-700">
                    {card.example}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
