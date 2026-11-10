import React from 'react';
import { Sparkles, Calendar, Scale, Calculator, Check } from 'lucide-react';
import type { Vehicle } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface VehicleRecommendationCardProps {
  vehicle: Vehicle;
  onCompare?: (vehicle: Vehicle) => void;
  onCalculateFinance?: (vehicle: Vehicle) => void;
  onBookTestDrive?: (vehicle: Vehicle) => void;
}

export const VehicleRecommendationCard: React.FC<VehicleRecommendationCardProps> = ({
  vehicle,
  onCompare,
  onCalculateFinance,
  onBookTestDrive,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-lavender/90 shadow-soft overflow-hidden my-3 max-w-2xl transition-all hover:shadow-soft-lg">
      {/* Vehicle Photography Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-ivory">
        <img
          src={vehicle.exteriorImage}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {vehicle.statusBadge && (
            <Badge variant="plum" size="sm">
              {vehicle.statusBadge}
            </Badge>
          )}
          {vehicle.matchScore && (
            <Badge variant="sage" size="sm" icon={<Sparkles className="w-3 h-3 text-sage-dark" />}>
              {vehicle.matchScore}% Lifestyle Match
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="lavender" size="sm">
            {vehicle.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent flex items-end p-4 text-white">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
              {vehicle.name}
            </h4>
            <p className="text-xs text-lavender-accent font-medium">
              {vehicle.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content & Specs */}
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-lavender/40 pb-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-plum-muted block">
              Acquisition From
            </span>
            <span className="font-serif text-2xl font-bold text-plum">
              ${vehicle.startingPrice.toLocaleString()}
            </span>
            <span className="text-xs text-plum-light ml-1.5">MSRP / Bespoke Atelier Spec</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] uppercase tracking-wider text-plum-muted block">
              Estimated Lease
            </span>
            <span className="text-sm font-semibold text-plum">
              ~${Math.round(vehicle.startingPrice * 0.012).toLocaleString()}/mo
            </span>
          </div>
        </div>

        {/* Highlight Spec Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-2.5 rounded-xl bg-ivory border border-lavender/40 text-center">
            <span className="text-[10px] uppercase text-plum-muted block">Propulsion</span>
            <span className="text-xs font-semibold text-plum truncate block">{vehicle.propulsion}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-ivory border border-lavender/40 text-center">
            <span className="text-[10px] uppercase text-plum-muted block">Acceleration</span>
            <span className="text-xs font-semibold text-plum truncate block">{vehicle.acceleration}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-ivory border border-lavender/40 text-center">
            <span className="text-[10px] uppercase text-plum-muted block">Range / Power</span>
            <span className="text-xs font-semibold text-plum truncate block">{vehicle.rangeOrMpg}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-ivory border border-lavender/40 text-center">
            <span className="text-[10px] uppercase text-plum-muted block">Cabin Suite</span>
            <span className="text-xs font-semibold text-plum truncate block">{vehicle.seating}</span>
          </div>
        </div>

        {/* Description snippet */}
        <p className="text-xs text-plum-light leading-relaxed">
          {vehicle.description}
        </p>

        {/* Curated Features */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-semibold text-plum tracking-wide block">
            Signature Atelier Appointments:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {vehicle.curatedFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-plum-light">
                <Check className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-lavender/50">
          <Button
            variant="primary"
            size="sm"
            icon={<Calendar className="w-3.5 h-3.5 text-peach" />}
            onClick={() => onBookTestDrive?.(vehicle)}
          >
            Book Private Test Drive
          </Button>

          <Button
            variant="lavender"
            size="sm"
            icon={<Calculator className="w-3.5 h-3.5 text-plum" />}
            onClick={() => onCalculateFinance?.(vehicle)}
          >
            Lease & Financing
          </Button>

          <Button
            variant="outline"
            size="sm"
            icon={<Scale className="w-3.5 h-3.5" />}
            onClick={() => onCompare?.(vehicle)}
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
};
