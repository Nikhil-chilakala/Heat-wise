import React, { useState } from 'react';
import { FOOD_CATEGORIES } from '../data/heatData';
import { FoodCategory } from '../types';
import { 
  Wheat, 
  Sandwich, 
  Carrot, 
  Milk, 
  Droplets, 
  Package, 
  AlertCircle, 
  XCircle, 
  CheckCircle2, 
  Thermometer, 
  Lightbulb,
  Camera
} from 'lucide-react';

export const FoodGuide: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('rice-grains');

  const selectedCategory = FOOD_CATEGORIES.find((cat) => cat.id === selectedId) || FOOD_CATEGORIES[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wheat':
        return <Wheat className="w-5 h-5" />;
      case 'Sandwich':
        return <Sandwich className="w-5 h-5" />;
      case 'Carrot':
        return <Carrot className="w-5 h-5" />;
      case 'Milk':
        return <Milk className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      default:
        return <Wheat className="w-5 h-5" />;
    }
  };

  // Associated high-fidelity educational reference images for all categories
  const getCategoryImage = (id: string) => {
    switch (id) {
      case 'rice-grains':
        return {
          src: '/src/assets/images/rice_steaming_bowl_1793904002698.jpg',
          alt: 'Steaming fluffy white basmati rice in a ceramic bowl with tender grains',
          title: 'Steaming & Moist Grains (Optimal)',
          caption: 'Tender distinct grains with gentle visible steam. Adding 1–2 tbsp of water and covering tightly traps hot steam to heat to 74°C throughout without drying.'
        };
      case 'bread-potatoes':
        return {
          src: '/src/assets/images/roasted_potatoes_golden_1793904003408.jpg',
          alt: 'Golden roasted potato wedges on parchment paper with rosemary',
          title: '"Go for Gold" Standard (Low Acrylamide)',
          caption: 'Crisp golden-yellow crust with tender interior. Stopping heat before dark black carbonization preserves rich caramelized flavor with minimal process contaminants.'
        };
      case 'vegetables':
        return {
          src: '/src/assets/images/food_vegetables_cooking_1793902554223.jpg',
          alt: 'Fresh crisp vegetables tenderly steamed in stainless steel pan',
          title: 'Crisp-Tender Steaming (Peak Nutrients)',
          caption: 'Bright natural green chlorophyll and intact cell walls. Gentle 3–5 min steaming preserves up to 85–90% of heat-sensitive Vitamin C and folate.'
        };
      case 'milk-liquids':
        return {
          src: '/src/assets/images/milk_gentle_simmer_1793904002166.jpg',
          alt: 'Fresh milk warming in saucepan with tiny bubbles along perimeter',
          title: 'Gentle Scalding Point (75°C–80°C)',
          caption: 'Smooth milk surface with tiny micro-bubbles forming along the pan rim. Medium-low heat prevents whey protein skin from scorching to the base.'
        };
      case 'oils-fats':
        return {
          src: '/src/assets/images/oil_heating_pan_1793902554711.jpg',
          alt: 'Cooking oil shimmering gently in a modern chef pan below smoke point',
          title: 'Clean Shimmering Pan (Below Smoke Point)',
          caption: 'Heated to safe frying temperature (175°C–190°C) without blueish haze. Oil remains chemically stable without acrolein vapor or polar compound degradation.'
        };
      case 'leftovers':
        return {
          src: '/src/assets/images/leftovers_stir_soup_1793904003954.jpg',
          alt: 'Hearty steaming vegetable lentil stew being stirred with wooden spoon',
          title: 'Stirred & Evenly Heated (No Cold Spots)',
          caption: 'Stirring stews and casseroles midway through heating redistributes thermal energy, eliminating microbial cold pockets where bacteria can survive.'
        };
      default:
        return null;
    }
  };

  const categoryImage = getCategoryImage(selectedCategory.id);

  return (
    <section id="food-guide" className="py-16 lg:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Awareness Guide
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Different Foods. Different Heating Needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Every staple in your pantry reacts to heat differently. Explore tailored guidelines with high-resolution visual references to protect taste, prevent process contaminants, and maintain food safety.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {FOOD_CATEGORIES.map((cat) => {
            const isActive = cat.id === selectedCategory.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-[#FAF8F5] text-stone-700 border-stone-200/80 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <span>{getCategoryIcon(cat.icon)}</span>
                <span>{cat.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content Card */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-xs space-y-8">
          
          {/* Header Strip with Summary & Target Temp */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200/80">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500">
                <span>Category Overview</span>
                <span>·</span>
                <span className="text-amber-700 font-semibold">{selectedCategory.name}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-display">
                {selectedCategory.name}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {selectedCategory.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
              <div className="px-3.5 py-2 rounded-xl bg-white border border-stone-200/80 flex items-center gap-2 text-xs shadow-xs">
                <Thermometer className="w-4 h-4 text-orange-600" />
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Target Thermal Goal</span>
                  <span className="font-bold text-stone-900">{selectedCategory.idealTemp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Reference Picture Spotlight for every Category */}
          {categoryImage && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
              <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200/60 shadow-inner">
                <img
                  src={categoryImage.src}
                  alt={categoryImage.alt}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-7 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                    <Camera className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Visual Reference Benchmark</span>
                  </span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  {categoryImage.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {categoryImage.caption}
                </p>
                <div className="pt-2 text-[11px] text-stone-500 font-medium border-t border-stone-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Look for this visual standard in your kitchen for the healthiest results.</span>
                </div>
              </div>
            </div>
          )}

          {/* 3 Core Columns: Watch For / Avoid / Do Instead */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: What to Watch For */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-amber-900">
                  <div className="w-8 h-8 rounded-lg bg-amber-100/70 flex items-center justify-center text-amber-700">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    What to Watch For
                  </h4>
                </div>

                <ul className="space-y-3">
                  {selectedCategory.whatToWatchFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-amber-800 font-medium">
                Sensory cues of thermal distress
              </div>
            </div>

            {/* Column 2: What to Avoid */}
            <div className="bg-white rounded-2xl p-6 border border-rose-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-rose-900">
                  <div className="w-8 h-8 rounded-lg bg-rose-100/70 flex items-center justify-center text-rose-700">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    What to Avoid
                  </h4>
                </div>

                <ul className="space-y-3">
                  {selectedCategory.whatToAvoid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-rose-800 font-medium">
                Unsafe or destructive kitchen practices
              </div>
            </div>

            {/* Column 3: What to Do Instead */}
            <div className="bg-white rounded-2xl p-6 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-emerald-900">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900">
                    What to Do Instead
                  </h4>
                </div>

                <ul className="space-y-3">
                  {selectedCategory.whatToDoInstead.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-emerald-800 font-medium">
                Practical, science-aligned solution
              </div>
            </div>

          </div>

          {/* Science Deep Dive Callout */}
          <div className="p-4 rounded-xl bg-white border border-stone-200/80 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-600 leading-relaxed">
              <strong className="text-stone-900">Scientific Context: </strong>
              {selectedCategory.scienceNote}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
