import React from 'react';
import { Sparkles, Calendar, BatteryCharging, Shield, ArrowRight, Gauge } from 'lucide-react';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import type { NavModule } from '../../types';

interface HeroWelcomeProps {
  onNavigate: (module: NavModule) => void;
}

export const HeroWelcome: React.FC<HeroWelcomeProps> = ({
  onNavigate,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-lavender/30 to-ivory border border-lavender/80 shadow-soft-lg p-6 sm:p-10 mb-8">
      {/* Subtle background ambient blur circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-peach/20 blur-3xl pointer-events-none" />
      <div className="absolute right-40 -bottom-20 w-96 h-96 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Greeting & Telematics Digest */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="plum" size="sm">
              Obsidian Client Portal
            </Badge>
            <Badge variant="sage" size="sm" icon={<Shield className="w-3 h-3 text-sage-dark" />}>
              Valet Telematics Active
            </Badge>
            <span className="text-xs text-plum-muted">
              Member since 2024
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-plum tracking-tight text-balance">
              Good afternoon, <span className="italic">{CLIENT_PROFILE.name}</span>.
            </h2>
            <p className="text-sm sm:text-base text-plum-light max-w-xl leading-relaxed">
              Your <strong className="text-plum font-semibold">{CLIENT_PROFILE.primaryVehicle.model}</strong> is preconditioned and awaiting your next transcontinental journey. All onboard telemetry is within optimal tolerances.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white/80 border border-lavender/60 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-plum-muted mb-1">
                <BatteryCharging className="w-3.5 h-3.5 text-sage-dark" />
                <span>Battery Level</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-plum">
                  {CLIENT_PROFILE.primaryVehicle.batteryLevel}%
                </span>
                <span className="text-[11px] font-medium text-sage-text">
                  318 mi range
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-lavender/60 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-plum-muted mb-1">
                <Gauge className="w-3.5 h-3.5 text-lavender-deep" />
                <span>Diagnostics</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-plum">
                  Optimal
                </span>
                <span className="text-[11px] font-medium text-plum-muted">
                  36 PSI all
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-lavender/60 shadow-xs col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-plum-muted mb-1">
                <Calendar className="w-3.5 h-3.5 text-peach-dark" />
                <span>Next Service</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-plum">
                  Apr 28
                </span>
                <span className="text-[11px] font-medium text-peach-dark">
                  Atelier Valet
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              icon={<Sparkles className="w-4 h-4 text-peach" />}
              onClick={() => onNavigate('copilot')}
            >
              Consult AI Co-Pilot
            </Button>
            <Button
              variant="lavender"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => onNavigate('showroom')}
            >
              Explore Showroom
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Vehicle Visual */}
        <div className="lg:col-span-5">
          <div className="relative group rounded-3xl overflow-hidden shadow-soft-lg border border-lavender/80 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
            <img
              src={CLIENT_PROFILE.primaryVehicle.image}
              alt={CLIENT_PROFILE.primaryVehicle.model}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/20 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-lavender-accent">
                Registered In Garage
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
                {CLIENT_PROFILE.primaryVehicle.model}
              </h3>
              <div className="flex items-center justify-between text-xs text-white/80 mt-1">
                <span>VIN: {CLIENT_PROFILE.primaryVehicle.vin}</span>
                <button
                  onClick={() => onNavigate('service')}
                  className="text-lavender-accent hover:text-white font-medium underline text-[11px] cursor-pointer"
                >
                  View Telematics Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
