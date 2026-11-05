import React, { useState } from 'react';
import { ArrowRight, Flame, ShieldCheck, AlertTriangle, Thermometer, Sparkles, Check, Info } from 'lucide-react';

export const Hero: React.FC = () => {
  const [selectedHeatLevel, setSelectedHeatLevel] = useState<'low' | 'optimal' | 'high'>('optimal');

  const heatData = {
    low: {
      label: 'LOW HEAT',
      status: 'Underheated / Cold Spots',
      tagColor: 'text-sky-800 bg-sky-50 border-sky-200',
      barColor: 'from-sky-400 to-blue-500',
      temp: 'Below 60°C (140°F)',
      culinaryEffect: 'Food remains lukewarm or uneven. Microorganisms may linger in the danger zone if not heated past 74°C.',
      safetyNote: 'Insufficient heat does not adequately pasteurize stored leftovers.',
      indicatorPosition: 'w-1/3',
      texture: 'Firm, cold center or soggy grains'
    },
    optimal: {
      label: 'JUST RIGHT',
      status: 'Safe Cooking & Gentle Heat',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      barColor: 'from-amber-400 to-emerald-500',
      temp: '74°C – 120°C (165°F – 248°F)',
      culinaryEffect: 'Pathogens destroyed, heat-sensitive vitamins preserved, golden Maillard aroma, juicy moisture retained.',
      safetyNote: 'Optimal microbial safety with peak nutrient retention and no charred by-products.',
      indicatorPosition: 'w-2/3',
      texture: 'Golden-brown, tender, juicy, aromatic'
    },
    high: {
      label: 'TOO MUCH HEAT',
      status: 'Excessive Cooking / Pyrolysis',
      tagColor: 'text-red-800 bg-red-50 border-red-200',
      barColor: 'from-orange-500 to-red-600',
      temp: 'Exceeding 175°C+ / Smoking oil',
      culinaryEffect: 'Nutrients and moisture lost, bitter taste, scorched lactose, oil decomposition, and formation of acrylamide or PAHs.',
      safetyNote: 'Thermal degradation reduces food quality and generates avoidable chemical process contaminants.',
      indicatorPosition: 'w-full',
      texture: 'Blackened, dry, bitter, leathery or acrid'
    }
  };

  const current = heatData[selectedHeatLevel];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80">
      {/* Subtle warm background radial light */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-100/60 via-orange-100/30 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro banner */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-100/90 text-stone-700 text-xs font-medium border border-stone-200/60">
          <Info className="w-3.5 h-3.5 text-amber-600" />
          <span>Not all hot food is harmful. The problem is excessive heating, burning, and unsafe heating practices.</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 font-display leading-[1.15] text-balance">
              Too Much Heat Can Change More Than Just Your Food.
            </h1>
            
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              Discover what happens when food is overheated, learn to spot the warning signs, and make smarter choices in your kitchen for better nutrition, safer leftovers, and better flavor.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#risks"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 transition-colors shadow-sm shadow-orange-600/20"
              >
                <span>Explore the Risks</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#safe-practices"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 transition-colors shadow-xs"
              >
                <span>Learn Safe Heating</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs text-stone-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Evidence-based guidance</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-amber-600" />
                <span>WHO & USDA standards</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Practical everyday kitchen habits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Heat Indicator & Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/90 space-y-5">
              
              {/* Image banner with overlay */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-stone-100 border border-stone-200/60">
                <img
                  src="/src/assets/images/hero_cooking_heat_balance_1793902553367.jpg"
                  alt="Culinary balance of gentle roasting and safe heat on countertop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-medium">
                    The difference between culinary perfection and heat damage is measured in temperature and time.
                  </p>
                </div>
              </div>

              {/* Interactive Heat Continuum Slider / Switcher */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-500 tracking-wider">
                  <span>THERMAL SPECTRUM</span>
                  <span className="font-mono text-stone-700">{current.temp}</span>
                </div>

                {/* 3 Step Interactive Toggle Buttons */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/80 text-xs font-semibold">
                  <button
                    onClick={() => setSelectedHeatLevel('low')}
                    className={`py-2 px-2 rounded-lg text-center transition-all ${
                      selectedHeatLevel === 'low'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                    }`}
                  >
                    LOW HEAT
                  </button>

                  <button
                    onClick={() => setSelectedHeatLevel('optimal')}
                    className={`py-2 px-2 rounded-lg text-center transition-all ${
                      selectedHeatLevel === 'optimal'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                    }`}
                  >
                    JUST RIGHT
                  </button>

                  <button
                    onClick={() => setSelectedHeatLevel('high')}
                    className={`py-2 px-2 rounded-lg text-center transition-all ${
                      selectedHeatLevel === 'high'
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                    }`}
                  >
                    TOO MUCH
                  </button>
                </div>

                {/* Continuum Progress Bar */}
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden relative">
                  <div 
                    className={`h-full bg-gradient-to-r transition-all duration-300 ${
                      selectedHeatLevel === 'low'
                        ? 'w-1/3 from-sky-400 to-sky-500'
                        : selectedHeatLevel === 'optimal'
                        ? 'w-2/3 from-amber-400 via-emerald-500 to-emerald-600'
                        : 'w-full from-orange-400 via-red-500 to-red-700'
                    }`}
                  />
                </div>

                {/* Dynamic Feedback Card */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-stone-900 text-sm">
                      {current.status}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-medium border ${current.tagColor}`}>
                      {current.label}
                    </span>
                  </div>

                  <p className="text-stone-600 leading-relaxed">
                    {current.culinaryEffect}
                  </p>

                  <div className="pt-1.5 border-t border-stone-200/60 flex items-center gap-1.5 text-stone-500 text-[11px]">
                    <span className="font-semibold text-stone-700">Texture outcome:</span>
                    <span>{current.texture}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
