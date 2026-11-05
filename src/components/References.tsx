import React from 'react';
import { REFERENCES_DATA } from '../data/heatData';
import { ExternalLink, ShieldCheck, BookOpen, Check } from 'lucide-react';

export const References: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Authoritative Sources
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Learn More. Stay Informed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            All educational guidance on HeatWise is derived directly from empirical food-safety guidelines issued by national and international health agencies.
          </p>
        </div>

        {/* Reference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REFERENCES_DATA.map((ref) => (
            <div
              key={ref.shortCode}
              className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-stone-700 bg-white px-2.5 py-1 rounded-md border border-stone-200/80 shadow-2xs">
                    {ref.shortCode}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Guidelines</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-1">
                  {ref.organization}
                </h3>
                <h4 className="text-xs font-semibold text-stone-500 mb-3">
                  {ref.title}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed mb-5">
                  {ref.description}
                </p>

                {/* Topics covered */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {ref.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium text-stone-600 bg-white px-2.5 py-1 rounded-md border border-stone-200/60"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified External Link */}
              <a
                href={ref.verifiedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-200/90 transition-colors shadow-2xs"
              >
                <span>Read Official Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
