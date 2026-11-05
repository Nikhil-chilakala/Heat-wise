import React, { useState } from 'react';
import { Eye, CheckCircle2, AlertTriangle, ShieldCheck, ZoomIn, ArrowRight } from 'lucide-react';

interface ReferenceCard {
  id: string;
  title: string;
  foodType: string;
  image: string;
  alt: string;
  safeSign: string;
  dangerSign: string;
  targetMetric: string;
  scientificReason: string;
}

const VISUAL_REFERENCES: ReferenceCard[] = [
  {
    id: 'ref-toast',
    title: 'Artisan Bread & Toasting',
    foodType: 'Starches',
    image: '/src/assets/images/food_toast_comparison_1793902553753.jpg',
    alt: 'Toast comparison: golden brown on left vs burnt charred black on right',
    safeSign: 'Even golden-yellow to warm amber color with crispy surface.',
    dangerSign: 'Blackened, carbonized spots or dark brown edges.',
    targetMetric: 'Golden hue (under 160°C / 320°F)',
    scientificReason: 'Pyrolysis above 120°C converts natural sugars and asparagine into acrylamide. "Go for Gold" minimizes process contaminants.'
  },
  {
    id: 'ref-potatoes',
    title: 'Oven-Roasted Potatoes',
    foodType: 'Tubers & Roots',
    image: '/src/assets/images/roasted_potatoes_golden_1793904003408.jpg',
    alt: 'Golden roasted potato wedges on baking paper with rosemary',
    safeSign: 'Warm golden exterior with fluffy, tender potato interior.',
    dangerSign: 'Charred tips, bitter brown skin, and excessive dehydration.',
    targetMetric: '175°C–190°C baking target',
    scientificReason: 'Soaking potato wedges for 20 minutes before roasting washes off excess surface sugars, preventing scorching and bitter compounds.'
  },
  {
    id: 'ref-veggies',
    title: 'Fresh Greens & Vegetables',
    foodType: 'Leafy Greens & Brassicas',
    image: '/src/assets/images/food_vegetables_cooking_1793902554223.jpg',
    alt: 'Fresh crisp vegetables tenderly steamed with light vapor in pan',
    safeSign: 'Vivid, bright green chlorophyll with a crisp-tender crunch.',
    dangerSign: 'Dull drab olive-brown color, mushy texture, and waterlogged appearance.',
    targetMetric: '3–5 mins gentle steam (85°C–90°C)',
    scientificReason: 'Heat-sensitive Vitamin C and folate degrade rapidly under prolonged boiling. Steaming protects up to 90% of micronutrients.'
  },
  {
    id: 'ref-oil',
    title: 'Cooking Oil in Skillet',
    foodType: 'Fats & Lipids',
    image: '/src/assets/images/oil_heating_pan_1793902554711.jpg',
    alt: 'Cooking oil shimmering gently in chef skillet on induction stovetop',
    safeSign: 'Smooth, shimmering liquid with faint convection ripples.',
    dangerSign: 'Blueish haze or wispy white smoke rising from pan surface.',
    targetMetric: 'Below smoke point (175°C–190°C)',
    scientificReason: 'When oils smoke, triglycerides crack into irritating acrolein vapor and free fatty acids, creating unwanted trans fats and off-flavors.'
  },
  {
    id: 'ref-milk',
    title: 'Milk & Dairy Liquids',
    foodType: 'Dairy',
    image: '/src/assets/images/milk_gentle_simmer_1793904002166.jpg',
    alt: 'Milk gently warming in saucepan with tiny bubbles along perimeter',
    safeSign: 'Tiny, gentle micro-bubbles forming only around the perimeter rim.',
    dangerSign: 'Violent rolling boil with brown sediment baked to pan bottom.',
    targetMetric: 'Scald at 75°C–80°C (165°F–175°F)',
    scientificReason: 'Medium-low heat with continuous stirring stops whey proteins from settling and burning onto the cookware base.'
  },
  {
    id: 'ref-leftovers',
    title: 'Cooked Stews & Leftovers',
    foodType: 'Prepared Meals',
    image: '/src/assets/images/leftovers_stir_soup_1793904003954.jpg',
    alt: 'Hearty steaming vegetable lentil stew being stirred with wooden spoon',
    safeSign: 'Stirred thoroughly with steam rising uniformly across entire dish.',
    dangerSign: 'Bubbling scorching edges with a cold or lukewarm center pocket.',
    targetMetric: '74°C (165°F) throughout dish',
    scientificReason: 'Stirring midway eliminates cold spots where bacteria like Salmonella or Bacillus cereus can survive inside microwave-heated meals.'
  }
];

export const VisualReferenceGallery: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<ReferenceCard>(VISUAL_REFERENCES[0]);

  return (
    <section id="visual-gallery" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Visual Reference Library
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Real Kitchen Pictures: What "Safe Heat" Looks Like
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Compare actual visual cues across every major food category so you can immediately spot the difference between healthy cooking and thermal overheating.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISUAL_REFERENCES.map((item) => {
            const isSelected = selectedCard.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between cursor-pointer group shadow-2xs hover:shadow-md ${
                  isSelected ? 'border-orange-500 ring-2 ring-orange-200' : 'border-stone-200/90 hover:border-stone-300'
                }`}
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-900/80 text-white backdrop-blur-xs">
                        {item.foodType}
                      </span>
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Safe vs Danger comparison */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-emerald-800 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200/70">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[10px] uppercase font-bold text-emerald-950">Safe Standard:</strong>
                          <span>{item.safeSign}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-rose-800 bg-rose-50/80 p-2.5 rounded-lg border border-rose-200/70">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[10px] uppercase font-bold text-rose-950">Overheated Sign:</strong>
                          <span>{item.dangerSign}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer benchmark */}
                <div className="px-5 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-semibold text-stone-700">Goal: {item.targetMetric}</span>
                  <span className="text-orange-600 font-bold group-hover:translate-x-0.5 transition-transform">
                    View Science →
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Picture Deep-Dive Inspector Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-72 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-stone-200 shadow-inner">
            <img
              src={selectedCard.image}
              alt={selectedCard.alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">
                Selected Reference: {selectedCard.foodType}
              </span>
              <span className="text-xs text-stone-400">·</span>
              <span className="text-xs font-semibold text-stone-600">{selectedCard.targetMetric}</span>
            </div>

            <h3 className="text-xl font-bold text-stone-900 font-display">
              {selectedCard.title} — Chemical & Nutritional Context
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {selectedCard.scientificReason}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-stone-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Easy visual identification in everyday cooking
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
