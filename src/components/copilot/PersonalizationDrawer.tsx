import React from 'react';
import { SlidersHorizontal, RotateCcw, Check } from 'lucide-react';
import type { PersonalizationFilters } from '../../types';
import { Badge } from '../ui/Badge';

interface PersonalizationDrawerProps {
  filters: PersonalizationFilters;
  onChangeFilters: (newFilters: PersonalizationFilters) => void;
  onReset: () => void;
  matchCount: number;
}

export const PersonalizationDrawer: React.FC<PersonalizationDrawerProps> = ({
  filters,
  onChangeFilters,
  onReset,
  matchCount,
}) => {
  const propulsionOptions = ['All', 'Pure Electric', 'Hybrid V8', 'Twin-Turbo V6'];
  const categoryOptions = ['All', 'Grand Tourer', 'Executive Sedan', 'Luxury SUV', 'Track Roadster'];
  const priorityOptions = [
    'Serenity & Luxury',
    'Track Dynamics',
    'Autonomous Tech',
    'Sustainable Atelier Materials',
  ];

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-lavender/90 p-5 sm:p-6 shadow-soft space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-lavender/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-lavender flex items-center justify-center text-plum">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-plum">
              Bespoke Personalization Filter
            </h4>
            <p className="text-[11px] text-plum-light">
              Tailor the Co-Pilot's vehicle curation matrix
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="sage" size="sm">
            {matchCount} Matches
          </Badge>
          <button
            onClick={onReset}
            className="p-1.5 rounded-lg text-plum-muted hover:text-plum hover:bg-lavender/50 transition-colors cursor-pointer text-xs flex items-center gap-1"
            title="Reset filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Propulsion Type */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider font-semibold text-plum-muted mb-2">
          Propulsion Architecture
        </label>
        <div className="flex flex-wrap gap-1.5">
          {propulsionOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => onChangeFilters({ ...filters, propulsion: opt })}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                filters.propulsion === opt
                  ? 'bg-plum text-ivory border-plum shadow-xs font-semibold'
                  : 'bg-ivory text-plum-light border-lavender/60 hover:bg-lavender/40 hover:text-plum'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Category */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider font-semibold text-plum-muted mb-2">
          Body Style & Persona
        </label>
        <div className="flex flex-wrap gap-1.5">
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => onChangeFilters({ ...filters, category: cat })}
              className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                filters.category === cat
                  ? 'bg-plum text-ivory border-plum shadow-xs font-semibold'
                  : 'bg-ivory text-plum-light border-lavender/60 hover:bg-lavender/40 hover:text-plum'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Maximum Investment Budget Slider */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-plum-muted">
            Max Budget Ceiling
          </span>
          <span className="font-serif font-bold text-plum text-sm">
            ${filters.budgetMax.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="120000"
          max="250000"
          step="10000"
          value={filters.budgetMax}
          onChange={(e) => onChangeFilters({ ...filters, budgetMax: Number(e.target.value) })}
          className="w-full accent-plum cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-plum-muted mt-1">
          <span>$120,000</span>
          <span>$185,000</span>
          <span>$250,000+</span>
        </div>
      </div>

      {/* Lifestyle Priority */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider font-semibold text-plum-muted mb-2">
          Primary Lifestyle Focus
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {priorityOptions.map((p) => (
            <button
              key={p}
              onClick={() => onChangeFilters({ ...filters, primaryPriority: p })}
              className={`text-xs px-3 py-2 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                filters.primaryPriority === p
                  ? 'bg-lavender text-plum border-lavender-deep font-semibold shadow-xs'
                  : 'bg-ivory text-plum-light border-lavender/60 hover:bg-lavender/30 hover:text-plum'
              }`}
            >
              <span className="truncate">{p}</span>
              {filters.primaryPriority === p && <Check className="w-3.5 h-3.5 text-plum shrink-0" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
