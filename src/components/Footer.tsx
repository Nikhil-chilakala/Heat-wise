import React from 'react';
import { Flame, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-sm">
              <Flame className="w-4 h-4 fill-white/20" />
            </span>
            <span className="text-xl font-bold tracking-tight text-white font-display">
              HeatWise
            </span>
            <span className="text-xs text-stone-400 font-medium ml-2">
              · Heat Smart. Eat Safe.
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs text-stone-400 font-medium">
            <a href="#what-is-it" className="hover:text-white transition-colors">Overview</a>
            <a href="#risks" className="hover:text-white transition-colors">Science & Risks</a>
            <a href="#warning-signs" className="hover:text-white transition-colors">Warning Signals</a>
            <a href="#visual-gallery" className="hover:text-white transition-colors">Visual Gallery</a>
            <a href="#food-guide" className="hover:text-white transition-colors">Food Guide</a>
            <a href="#simulator" className="hover:text-white transition-colors">Simulator</a>
            <a href="#safe-practices" className="hover:text-white transition-colors">Safe Habits</a>
            <a href="#quiz" className="hover:text-white transition-colors">Quiz</a>
            <a href="#checklist" className="hover:text-white transition-colors">Kitchen Checklist</a>
          </nav>

        </div>

        {/* Disclaimer & Educational Mandate */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-stone-400 leading-relaxed">
          <div className="md:col-span-8 space-y-2">
            <h4 className="text-stone-300 font-semibold uppercase tracking-wider text-[11px]">
              Educational Purpose & Public Health Notice
            </h4>
            <p>
              HeatWise is an interactive educational platform designed to empower students, families, and everyday home cooks with foundational knowledge about thermal cooking and reheating safety. This platform translates published guidelines from the World Health Organization (WHO), USDA Food Safety and Inspection Service, and FSSAI into accessible everyday habits.
            </p>
            <p className="text-stone-500 text-[11px]">
              This resource is provided strictly for educational purposes and does not substitute for certified clinical dietetics, commercial hazard analysis critical control point (HACCP) training, or specialized medical advice.
            </p>
          </div>

          <div className="md:col-span-4 md:text-right space-y-2 self-end">
            <p className="text-stone-400 text-xs">
              Heat Smart. Preserve Nutrients. Eat Safe.
            </p>
            <p className="text-stone-600 text-[11px]">
              © {new Date().getFullYear()} HeatWise Educational Initiative.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
