import React, { useState } from 'react';
import { WARNING_SIGNS } from '../data/heatData';
import { WarningSign } from '../types';
import { Wind, Eye, Sparkles, AlertTriangle, Check, ShieldAlert, Info, ZoomIn } from 'lucide-react';

export const WarningSigns: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<WarningSign>(WARNING_SIGNS[0]);
  const [comparisonMode, setComparisonMode] = useState<'side-by-side' | 'golden' | 'burnt'>('side-by-side');
  const [activeTooltip, setActiveTooltip] = useState<'golden' | 'burnt' | null>('golden');

  const getSensoryIcon = (cue: string) => {
    switch (cue) {
      case 'Smoke':
        return <Wind className="w-4 h-4 text-orange-600" />;
      case 'Sight':
        return <Eye className="w-4 h-4 text-amber-600" />;
      case 'Texture':
        return <Sparkles className="w-4 h-4 text-rose-600" />;
      case 'Smell':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="warning-signs" className="py-16 lg:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Sensory Detection
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Your Food Is Giving You Signals. Are You Noticing Them?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Your eyes, nose, and kitchen senses provide immediate clues to whether heat is enhancing your meal or damaging it. Learn to recognize these five universal signals.
          </p>
        </div>

        {/* Visual Inspection Split: Before vs After */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-100">
            <div>
              <h3 className="text-xl font-bold text-stone-900 font-display">
                Visual Comparison: The "Go for Gold" Principle
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Tap or hover over each side to examine chemical and textural differences.
              </p>
            </div>

            {/* Interactive View Filter */}
            <div className="inline-flex p-1 bg-stone-100 rounded-lg text-xs font-medium self-start sm:self-auto">
              <button
                onClick={() => setComparisonMode('side-by-side')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  comparisonMode === 'side-by-side' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Split View
              </button>
              <button
                onClick={() => { setComparisonMode('golden'); setActiveTooltip('golden'); }}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  comparisonMode === 'golden' ? 'bg-emerald-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Safe Golden
              </button>
              <button
                onClick={() => { setComparisonMode('burnt'); setActiveTooltip('burnt'); }}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  comparisonMode === 'burnt' ? 'bg-red-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Overheated / Charred
              </button>
            </div>
          </div>

          {/* Interactive Visual Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
              <img
                src="/src/assets/images/food_toast_comparison_1793902553753.jpg"
                alt="Split comparison of toast: perfectly golden brown on left vs severely burnt and charred on right"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />

              {/* Interactive Inspection Overlay Badges */}
              <div className="absolute inset-0 pointer-events-none flex">
                {/* Left Side (Golden) */}
                <div 
                  className={`w-1/2 h-full transition-opacity duration-200 pointer-events-auto p-4 flex flex-col justify-between ${
                    comparisonMode === 'burnt' ? 'opacity-20' : 'opacity-100'
                  }`}
                  onMouseEnter={() => setActiveTooltip('golden')}
                  onClick={() => setActiveTooltip('golden')}
                >
                  <span className="self-start px-2.5 py-1 rounded-md bg-emerald-700/90 text-white text-[11px] font-bold tracking-wide backdrop-blur-xs shadow-xs">
                    ✓ SAFE: GOLDEN BROWN
                  </span>
                  <div className="p-2.5 rounded-lg bg-stone-900/80 backdrop-blur-md text-white text-[11px] max-w-xs shadow-md">
                    Maillard reaction sweet spot. Safe, crisp surface, tender crumb, minimal acrylamide.
                  </div>
                </div>

                {/* Right Side (Burnt) */}
                <div 
                  className={`w-1/2 h-full transition-opacity duration-200 pointer-events-auto p-4 flex flex-col justify-between items-end text-right border-l border-white/40 ${
                    comparisonMode === 'golden' ? 'opacity-20' : 'opacity-100'
                  }`}
                  onMouseEnter={() => setActiveTooltip('burnt')}
                  onClick={() => setActiveTooltip('burnt')}
                >
                  <span className="px-2.5 py-1 rounded-md bg-red-700/90 text-white text-[11px] font-bold tracking-wide backdrop-blur-xs shadow-xs">
                    ✕ OVERHEATED: CHARRED
                  </span>
                  <div className="p-2.5 rounded-lg bg-stone-900/80 backdrop-blur-md text-white text-[11px] max-w-xs text-left shadow-md">
                    Pyrolysis & carbonization. Bitter taste, moisture evaporated, high acrylamide formation.
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Callout Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Properly Cooked (Golden Standard)
                  </h4>
                </div>
                <ul className="text-xs text-emerald-800 space-y-1.5 list-disc list-inside">
                  <li>Natural aromatic golden crust created by amino acids and sugars.</li>
                  <li>Inner moisture and tender cellular elasticity maintained.</li>
                  <li>Minimal chemical process contaminants.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-red-50/80 border border-red-200/80 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">
                    ✕
                  </div>
                  <h4 className="text-sm font-bold text-red-950">
                    Overheated & Burnt (Carbonized)
                  </h4>
                </div>
                <ul className="text-xs text-red-800 space-y-1.5 list-disc list-inside">
                  <li>Black, brittle carbonized layer formed above 120°C+.</li>
                  <li>Extremely dry, hard, mouth-scratching texture with bitter notes.</li>
                  <li>Elevated levels of dietary process contaminants like acrylamide.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 text-[11px] flex items-start gap-2.5">
                <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <p>
                  <strong>Kitchen Rule of Thumb:</strong> When toast, potatoes, or pastries are light golden, take them out. If black spots appear, scrape or trim them away before eating.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#visual-gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Explore full Visual Reference Gallery with food photos</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Sensory Signs Interactive Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-stone-900">
              The 5 Common Sensory Warning Signals
            </h3>
            <span className="text-xs text-stone-500">
              Click any sign to view safety correction
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {WARNING_SIGNS.map((sign) => {
              const isSelected = selectedSign.id === sign.id;
              return (
                <button
                  key={sign.id}
                  onClick={() => setSelectedSign(sign)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-orange-500 shadow-md ring-2 ring-orange-400/20'
                      : 'bg-white/80 border-stone-200/90 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center">
                        {getSensoryIcon(sign.sensoryCue)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                        {sign.sensoryCue}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-stone-900 mb-1 leading-snug">
                      {sign.title}
                    </h4>

                    <p className="text-[11px] text-stone-500 line-clamp-2">
                      {sign.indicator}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold">
                    <span className={
                      sign.dangerLevel === 'critical' ? 'text-red-600' :
                      sign.dangerLevel === 'warning' ? 'text-orange-600' : 'text-amber-600'
                    }>
                      {sign.dangerLevel.toUpperCase()}
                    </span>
                    <span className="text-stone-400">→</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                  Sensory Indicator: {selectedSign.sensoryCue}
                </span>
                <span className="text-xs font-semibold text-stone-400">·</span>
                <h4 className="text-sm font-bold text-stone-900">
                  {selectedSign.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {selectedSign.description}
              </p>
            </div>

            <div className="md:w-72 shrink-0 p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 text-xs">
              <div className="flex items-center gap-1.5 text-orange-950 font-semibold mb-1">
                <ShieldAlert className="w-4 h-4 text-orange-600 shrink-0" />
                <span>What to do immediately:</span>
              </div>
              <p className="text-orange-900 leading-relaxed">
                {selectedSign.correction}
              </p>
            </div>
          </div>
        </div>

        {/* Critical Food Safety Caveat Notice */}
        <div className="mt-8 p-4 rounded-xl bg-stone-100/90 border border-stone-200/80 flex items-start gap-3">
          <Info className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
          <p className="text-xs text-stone-600 leading-relaxed">
            <strong className="text-stone-900">Important Safety Principle:</strong> While sensory signals reveal physical and chemical overheating, appearance or smell alone <em>cannot</em> establish whether food is microbiologically safe. Pathogens such as Salmonella, E. coli, and Listeria do not change appearance or produce foul odors. Always verify thorough, even internal heating (74°C / 165°F) for refrigerated leftovers.
          </p>
        </div>

      </div>
    </section>
  );
};
