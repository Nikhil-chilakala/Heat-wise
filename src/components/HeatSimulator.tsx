import React, { useState } from 'react';
import { Thermometer, Timer, Sparkles, AlertTriangle, CheckCircle2, Flame, RefreshCw } from 'lucide-react';

interface SimFood {
  id: string;
  name: string;
  defaultTemp: number; // in Celsius
  defaultTime: number; // in Minutes
  tempMin: number;
  tempMax: number;
  timeMin: number;
  timeMax: number;
  type: 'starch' | 'vegetable' | 'oil' | 'leftover';
}

const SIM_FOODS: SimFood[] = [
  {
    id: 'bread',
    name: 'Artisan Bread Slice',
    defaultTemp: 140,
    defaultTime: 3,
    tempMin: 80,
    tempMax: 260,
    timeMin: 1,
    timeMax: 10,
    type: 'starch'
  },
  {
    id: 'vegetables',
    name: 'Fresh Broccoli Florets',
    defaultTemp: 95,
    defaultTime: 4,
    tempMin: 60,
    tempMax: 180,
    timeMin: 1,
    timeMax: 20,
    type: 'vegetable'
  },
  {
    id: 'oil',
    name: 'Cooking Oil in Pan',
    defaultTemp: 175,
    defaultTime: 5,
    tempMin: 100,
    tempMax: 260,
    timeMin: 1,
    timeMax: 15,
    type: 'oil'
  },
  {
    id: 'curry',
    name: 'Leftover Vegetable Curry',
    defaultTemp: 75,
    defaultTime: 3,
    tempMin: 40,
    tempMax: 140,
    timeMin: 1,
    timeMax: 12,
    type: 'leftover'
  }
];

export const HeatSimulator: React.FC = () => {
  const [selectedFood, setSelectedFood] = useState<SimFood>(SIM_FOODS[0]);
  const [temperature, setTemperature] = useState<number>(SIM_FOODS[0].defaultTemp);
  const [duration, setDuration] = useState<number>(SIM_FOODS[0].defaultTime);

  const handleSelectFood = (food: SimFood) => {
    setSelectedFood(food);
    setTemperature(food.defaultTemp);
    setDuration(food.defaultTime);
  };

  const handleReset = () => {
    setTemperature(selectedFood.defaultTemp);
    setDuration(selectedFood.defaultTime);
  };

  // Evaluate simulation state
  const evaluateState = () => {
    const { type } = selectedFood;

    if (type === 'starch') {
      // Bread: ideal is 130C-160C, 2-4 mins
      if (temperature < 110 || duration < 2) {
        return {
          stage: 'Under-toasted / Soft',
          colorStyle: 'bg-amber-100 border-amber-300',
          textColor: 'text-amber-800',
          status: 'low',
          nutrientScore: 95,
          acrylamideRisk: 'Negligible',
          chemicalNote: 'Maillard reaction has not initiated; sugars remain intact.',
          verdict: 'Soft and pale. Safe, but lacks crispy texture.'
        };
      }
      if (temperature <= 175 && duration <= 5) {
        return {
          stage: 'Golden Crisp (Optimal)',
          colorStyle: 'bg-amber-400 border-amber-600',
          textColor: 'text-emerald-800',
          status: 'optimal',
          nutrientScore: 88,
          acrylamideRisk: 'Low (Within benchmark)',
          chemicalNote: 'Balanced Maillard browning produces delicious aromatic aldehydes without high acrylamide.',
          verdict: 'Perfect "Go for Gold" state: delicious, crisp, and safe.'
        };
      }
      return {
        stage: 'Severe Charring / Burnt',
        colorStyle: 'bg-stone-900 border-red-600',
        textColor: 'text-red-600',
        status: 'high',
        nutrientScore: 50,
        acrylamideRisk: 'Elevated / High',
        chemicalNote: 'Thermal pyrolysis of asparagine and glucose creates high acrylamide levels and bitter carbon.',
        verdict: 'Overheated! Discard blackened crusts to avoid ingesting process contaminants.'
      };
    }

    if (type === 'vegetable') {
      // Broccoli: ideal is 90C-100C steam, 3-6 mins
      if (temperature < 80 || duration < 2) {
        return {
          stage: 'Raw / Crunchy',
          colorStyle: 'bg-emerald-300 border-emerald-500',
          textColor: 'text-emerald-900',
          status: 'low',
          nutrientScore: 98,
          acrylamideRisk: 'None',
          chemicalNote: 'Plant cellulose is rigid; cell walls un-softened.',
          verdict: 'Nutrients pristine, but fibers remain tough to chew.'
        };
      }
      if (temperature <= 105 && duration <= 6) {
        return {
          stage: 'Crisp-Tender (Peak Nutrients)',
          colorStyle: 'bg-emerald-500 border-emerald-700',
          textColor: 'text-emerald-800',
          status: 'optimal',
          nutrientScore: 85,
          acrylamideRisk: 'None',
          chemicalNote: 'Chlorophyll is vibrant; gentle heat tenderizes cell walls while retaining 85%+ Vitamin C.',
          verdict: 'Culinary perfection! Bright color and maximum vitamin retention.'
        };
      }
      return {
        stage: 'Over-boiled / Mushy & Leached',
        colorStyle: 'bg-yellow-800 border-stone-800',
        textColor: 'text-red-700',
        status: 'high',
        nutrientScore: 35,
        acrylamideRisk: 'None',
        chemicalNote: 'Chlorophyll degrades to olive-drab pheophytin. Heat-labile Vitamin C and folate heavily degraded.',
        verdict: 'Overheated! Nutrients have leached into discard water and texture is soggy.'
      };
    }

    if (type === 'oil') {
      // Oil: ideal frying 170C-190C, smoke starts at ~210C+
      if (temperature < 150) {
        return {
          stage: 'Tepid / Greasy Absorption',
          colorStyle: 'bg-amber-200 border-amber-400',
          textColor: 'text-amber-800',
          status: 'low',
          nutrientScore: 90,
          acrylamideRisk: 'None',
          chemicalNote: 'Oil cannot form an immediate protective steam crust on food, soaking deeply into meals.',
          verdict: 'Too cold for frying; results in heavy, soggy food.'
        };
      }
      if (temperature <= 195) {
        return {
          stage: 'Clean Shimmer (Safe Fry Range)',
          colorStyle: 'bg-amber-500 border-amber-700',
          textColor: 'text-emerald-800',
          status: 'optimal',
          nutrientScore: 80,
          acrylamideRisk: 'Low',
          chemicalNote: 'Lipid triglycerides remain stable. Heat creates an instant exterior steam seal.',
          verdict: 'Safe frying range. Minimal lipid oxidation and no irritating smoke.'
        };
      }
      return {
        stage: 'Smoking Oil / Thermal Breakdown',
        colorStyle: 'bg-stone-800 border-red-600',
        textColor: 'text-red-600',
        status: 'high',
        nutrientScore: 20,
        acrylamideRisk: 'Elevated Polar Compounds',
        chemicalNote: 'Smoke point exceeded! Triglycerides fracture into acrolein vapor, free fatty acids, and trans fats.',
        verdict: 'Danger! Turn off stove immediately. Inhaling oil smoke irritates lungs.'
      };
    }

    // Leftovers: ideal is 74C-85C, 2-5 mins
    if (temperature < 70 || duration < 2) {
      return {
        stage: 'Danger Zone / Cold Spots',
        colorStyle: 'bg-amber-100 border-sky-300',
        textColor: 'text-sky-800',
        status: 'low',
        nutrientScore: 85,
        acrylamideRisk: 'None',
        chemicalNote: 'Temperature in food center remains between 5°C and 60°C where bacteria can multiply rapidly.',
        verdict: 'Microbially unsafe! Food must reach 74°C (165°F) throughout.'
      };
    }
    if (temperature <= 90 && duration <= 6) {
      return {
        stage: 'Thoroughly Reheated & Safe',
        colorStyle: 'bg-amber-600 border-emerald-600',
        textColor: 'text-emerald-800',
        status: 'optimal',
        nutrientScore: 80,
        acrylamideRisk: 'Low',
        chemicalNote: 'Internal temperature reaches 74°C (165°F), neutralizing pathogens while keeping sauce emulsified.',
        verdict: 'Food is thoroughly heated, pathogen-free, and tastes freshly prepared.'
      };
    }
    return {
      stage: 'Separated & Scorched',
      colorStyle: 'bg-stone-800 border-red-600',
      textColor: 'text-red-600',
      status: 'high',
      nutrientScore: 55,
      acrylamideRisk: 'Low',
      chemicalNote: 'Excessive boiling separates oil-water emulsion, scorches pan bottom, and makes vegetables mushy.',
      verdict: 'Sauce has broken and pan bottom is scorched. Avoid repeated boil cycles.'
    };
  };

  const currentResult = evaluateState();

  return (
    <section id="simulator" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Interactive Culinary Sandbox
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Interactive Heat & Temperature Simulator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Adjust cooking heat and duration to witness how thermal chemistry shifts between underdone, optimal safety, and destructive overheating.
          </p>
        </div>

        {/* Two-Zone Simulation Sandbox */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Zone: Interactive Controls & Food Select */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Food selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                1. Select Food Item
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SIM_FOODS.map((food) => {
                  const isSelected = selectedFood.id === food.id;
                  return (
                    <button
                      key={food.id}
                      onClick={() => handleSelectFood(food)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left border transition-all ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 text-stone-700 border-stone-200/80 hover:bg-stone-100'
                      }`}
                    >
                      {food.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider 1: Temperature */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-700 flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-orange-600" />
                  Heat Temperature
                </span>
                <span className="font-mono text-sm font-bold text-stone-900">
                  {temperature}°C <span className="text-xs text-stone-400 font-normal">({Math.round((temperature * 9) / 5 + 32)}°F)</span>
                </span>
              </div>

              <input
                type="range"
                min={selectedFood.tempMin}
                max={selectedFood.tempMax}
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-stone-400">
                <span>{selectedFood.tempMin}°C</span>
                <span className="text-stone-600 font-sans">Slide heat</span>
                <span>{selectedFood.tempMax}°C</span>
              </div>
            </div>

            {/* Slider 2: Duration */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-700 flex items-center gap-1.5">
                  <Timer className="w-4 h-4 text-amber-600" />
                  Cooking / Reheating Duration
                </span>
                <span className="font-mono text-sm font-bold text-stone-900">
                  {duration} minutes
                </span>
              </div>

              <input
                type="range"
                min={selectedFood.timeMin}
                max={selectedFood.timeMax}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-stone-400">
                <span>{selectedFood.timeMin} min</span>
                <span className="text-stone-600 font-sans">Slide time</span>
                <span>{selectedFood.timeMax} mins</span>
              </div>
            </div>

            {/* Reset helper button */}
            <div className="flex justify-end">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 font-medium transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset to standard settings</span>
              </button>
            </div>

          </div>

          {/* Right Zone: Live Thermal Outcome Canvas */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-stone-50 rounded-2xl p-6 border border-stone-200/90 space-y-6">
            
            {/* Stage Tag & Title */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Thermal State
                </span>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
                  currentResult.status === 'optimal'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : currentResult.status === 'low'
                    ? 'bg-sky-100 text-sky-800 border-sky-300'
                    : 'bg-red-100 text-red-800 border-red-300'
                }`}>
                  {currentResult.stage}
                </span>
              </div>

              {/* Visual simulated food swatch */}
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl border-2 transition-all duration-300 shadow-inner shrink-0 ${currentResult.colorStyle}`} />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {selectedFood.name}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {currentResult.verdict}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Ticker */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white border border-stone-200/80">
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Estimated Nutrient Retention
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xl font-extrabold text-stone-900 tabular-nums">
                    {currentResult.nutrientScore}%
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {currentResult.nutrientScore >= 80 ? 'Preserved' : 'Degraded'}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200/80">
                <span className="text-[10px] uppercase font-bold text-stone-400 block mb-1">
                  Chemical Process Contaminants
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-xs font-bold ${
                    currentResult.status === 'high' ? 'text-red-600' : 'text-emerald-700'
                  }`}>
                    {currentResult.acrylamideRisk}
                  </span>
                </div>
              </div>
            </div>

            {/* Scientific Explanation of current simulation point */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 space-y-1">
              <span className="font-bold text-stone-800 block">
                Thermal Reaction in Progress:
              </span>
              <p className="leading-relaxed">
                {currentResult.chemicalNote}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
