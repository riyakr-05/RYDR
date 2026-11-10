import React from 'react';
import { 
  Crown, 
  ShieldCheck, 
  Plane, 
  MapPin, 
  Award, 
  Key, 
  FileCheck, 
  TreePine,
  ArrowUpRight
} from 'lucide-react';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const OwnershipLoyaltyModule: React.FC = () => {
  const privileges = [
    {
      title: 'Transalpine Grand Tour',
      subtitle: 'Annual Obsidian Rally',
      desc: 'Exclusive private passage across the Furka and Julier Passes in Switzerland, featuring boutique 5-star châteaux and factory support mechanics.',
      date: 'September 12 - 18, 2026',
      status: 'Waitlist Reserved',
      icon: MapPin,
    },
    {
      title: 'Private Airfield Track Days',
      subtitle: 'Unlimited Telemetry Support',
      desc: 'Private track sessions at Laguna Seca and Thermal Club with dedicated Michelin tire technicians and factory test drivers.',
      date: 'Bi-Monthly Access',
      status: 'Active Pass',
      icon: Crown,
    },
    {
      title: 'NetJets Chauffeur Tarmac Transfer',
      subtitle: 'Aviation Partnership',
      desc: 'Direct tarmac access. Your RYDR vehicle meets your private aircraft stairs with luggage seamlessly transferred by white-glove security.',
      date: 'On-Demand Global Hubs',
      status: 'Included',
      icon: Plane,
    },
    {
      title: 'White-Glove Airport Valet',
      subtitle: 'LAX, JFK, SFO & LHR',
      desc: 'Leave your keys at the VIP curbside. Your vehicle is charged, ceramic-washed, and pre-warmed for your return.',
      date: 'Unlimited Usage',
      status: 'Included',
      icon: Key,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-lavender/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-plum">
                Ownership & Loyalty
              </span>
              <Badge variant="peach" size="sm" icon={<Crown className="w-3.5 h-3.5 text-peach-dark" />}>
                Obsidian Tier
              </Badge>
              <Badge variant="sage" size="sm">
                Member #RYDR-OBS-8842
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-plum-light max-w-2xl leading-relaxed">
              Welcome to the inner circle of RYDR ownership. Privileges designed to elevate your transcontinental lifestyle far beyond the open road.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="primary"
              size="sm"
              icon={<Award className="w-3.5 h-3.5 text-peach" />}
              onClick={() => alert("Digital Concierge Pass exported to Apple Wallet / Google Wallet.")}
            >
              Add to Mobile Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Holographic Obsidian Membership Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum via-plum-dark to-[#100D15] text-white p-7 sm:p-8 shadow-soft-lg border border-lavender-accent/40 aspect-[16/10] flex flex-col justify-between group">
            {/* Subtle holographic sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-lavender-accent/15 to-peach/20 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-peach/10 blur-2xl pointer-events-none" />

            {/* Card Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold tracking-widest text-ivory">
                    RYDR
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-peach bg-peach/10 border border-peach/30 px-2 py-0.5 rounded-full">
                    Obsidian Circle
                  </span>
                </div>
                <p className="text-[10px] text-ivory/60 tracking-wider uppercase mt-1">
                  Private Client Membership
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-peach" />
              </div>
            </div>

            {/* Chip & NFC Graphic */}
            <div className="relative z-10 my-4 flex items-center gap-3">
              <div className="w-11 h-8 rounded-lg bg-gradient-to-r from-amber-200 to-amber-400 border border-amber-500/40 shadow-inner flex items-center justify-center">
                <div className="w-8 h-5 border border-amber-700/30 rounded-xs" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-ivory/70">
                SECURE NFC PASSPORT
              </span>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 flex items-end justify-between border-t border-white/10 pt-4">
              <div>
                <p className="text-[10px] text-ivory/60 uppercase tracking-widest font-mono">
                  Cardholder
                </p>
                <p className="font-serif text-lg font-medium tracking-wide text-ivory">
                  {CLIENT_PROFILE.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-ivory/60 uppercase tracking-widest font-mono">
                  Member ID
                </p>
                <p className="font-mono text-xs font-semibold text-peach tracking-wider">
                  {CLIENT_PROFILE.memberId}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Member Tier Benefits Summary */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-lavender/80 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-plum-muted block">
                  Obsidian Tier Status
                </span>
                <h4 className="font-serif text-xl font-semibold text-plum">
                  Julian Vance • Elite Status
                </h4>
              </div>
              <Badge variant="sage" size="sm">
                Active Through 2028
              </Badge>
            </div>

            <p className="text-xs text-plum-light leading-relaxed">
              Your membership privileges renew annually with zero maintenance fees for all verified RYDR owners. All experiences include personal concierge dispatch.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-ivory border border-lavender/50">
                <span className="text-[10px] uppercase font-semibold text-plum-muted block">
                  Concierge Desk
                </span>
                <span className="text-xs font-semibold text-plum block">24/7 Dedicated</span>
              </div>
              <div className="p-3 rounded-2xl bg-ivory border border-lavender/50">
                <span className="text-[10px] uppercase font-semibold text-plum-muted block">
                  Valet Dispatches
                </span>
                <span className="text-xs font-semibold text-plum block">Unlimited Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Obsidian Privileges Grid */}
      <div className="space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-plum tracking-tight">
            Curated Member Privileges
          </h3>
          <p className="text-xs text-plum-light">
            Exclusive gatherings and bespoke partnerships reserved for Obsidian tier owners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {privileges.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-lavender/80 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-ivory flex items-center justify-center text-plum border border-lavender/60">
                      <Icon className="w-5 h-5 text-lavender-deep" />
                    </div>
                    <Badge variant={p.status === 'Active Pass' ? 'sage' : 'lavender'} size="sm">
                      {p.status}
                    </Badge>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-plum-muted tracking-wider block mb-1">
                    {p.subtitle}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-plum mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-plum-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-lavender/40 flex items-center justify-between text-xs font-semibold text-plum">
                  <span className="text-plum-muted font-normal">{p.date}</span>
                  <button 
                    onClick={() => alert(`RSVP requested for ${p.title}. Clara Beauchamp will confirm your credentials.`)}
                    className="text-plum hover:text-lavender-deep flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reserve Privilege</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Digital Vehicle Passport & Carbon Offset */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-lavender/80 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-lavender/60">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-plum tracking-tight">
              Digital Vehicle Passport
            </h3>
            <p className="text-xs text-plum-light">
              Immutable provenance, residual equity certificate & sustainability telemetry
            </p>
          </div>
          <Badge variant="plum" size="sm" icon={<FileCheck className="w-3.5 h-3.5" />}>
            Verified Cryptographic Certificate
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-ivory border border-lavender/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-plum">
              <TreePine className="w-4 h-4 text-sage-dark" />
              <span>Carbon Offset Neutrality</span>
            </div>
            <div className="font-serif text-2xl font-bold text-plum">
              14.8 Metric Tons
            </div>
            <p className="text-[11px] text-plum-light">
              100% neutralized via RYDR Scandinavian Reforestation Fund in northern Sweden.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-ivory border border-lavender/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-plum">
              <Award className="w-4 h-4 text-peach-dark" />
              <span>Guaranteed Residual Equity</span>
            </div>
            <div className="font-serif text-2xl font-bold text-plum">
              $114,200 USD
            </div>
            <p className="text-[11px] text-plum-light">
              Guaranteed factory trade-in equity under Obsidian Portfolio terms through 2028.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-ivory border border-lavender/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-plum">
              <ShieldCheck className="w-4 h-4 text-lavender-deep" />
              <span>Factory Warranty</span>
            </div>
            <div className="font-serif text-2xl font-bold text-plum">
              Bumper-to-Bumper
            </div>
            <p className="text-[11px] text-plum-light">
              8-Year / 100,000-Mile comprehensive high-voltage battery & inverter coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
