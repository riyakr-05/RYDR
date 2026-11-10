import React from 'react';
import { 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Crown, 
  ChevronRight, 
  Zap, 
  PhoneCall,
  X
} from 'lucide-react';
import type { NavModule } from '../../types';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Badge } from '../ui/Badge';

interface SidebarProps {
  activeModule: NavModule;
  onSelectModule: (module: NavModule) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  onSelectModule,
  isOpenMobile,
  onCloseMobile,
}) => {
  const navItems = [
    {
      id: 'overview' as NavModule,
      label: 'Overview',
      subtitle: 'Portfolio & Telematics',
      icon: Compass,
    },
    {
      id: 'copilot' as NavModule,
      label: 'AI Buyer Co-Pilot',
      subtitle: 'Bespoke Consultation',
      icon: Sparkles,
      badge: 'Interactive',
      badgeVariant: 'lavender' as const,
    },
    {
      id: 'service' as NavModule,
      label: 'Service Companion',
      subtitle: 'White-Glove Telematics',
      icon: ShieldCheck,
      badge: 'Nominal',
      badgeVariant: 'sage' as const,
    },
    {
      id: 'showroom' as NavModule,
      label: 'Showroom Atelier',
      subtitle: '360° Studio & Spec',
      icon: Layers,
    },
    {
      id: 'loyalty' as NavModule,
      label: 'Ownership & Loyalty',
      subtitle: 'Obsidian Privileges',
      icon: Crown,
      badge: 'VIP',
      badgeVariant: 'peach' as const,
    },
  ];

  const handleNavClick = (moduleId: NavModule) => {
    onSelectModule(moduleId);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-plum/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-72 sm:w-80 bg-white/90 backdrop-blur-md border-r border-lavender/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-lavender/50">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => handleNavClick('overview')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {/* Crest Symbol */}
              <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-lavender-accent/60 flex items-center justify-center shadow-soft group-hover:border-lavender-deep transition-colors">
                <span className="font-serif font-bold text-xl text-plum tracking-tighter">R</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-semibold tracking-wider text-plum">
                    RYDR
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-lavender-deep px-1.5 py-0.5 rounded bg-lavender/70">
                    Atelier
                  </span>
                </div>
                <p className="text-[11px] font-medium tracking-wide text-plum-light/80 italic">
                  More than just a ride.
                </p>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onCloseMobile}
              className="p-1.5 rounded-lg text-plum-light hover:text-plum hover:bg-lavender/50 lg:hidden cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
          <div className="px-3 pb-2">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-plum-muted">
              Client Experiences
            </p>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 text-left cursor-pointer group ${
                  isActive
                    ? 'bg-lavender text-plum font-medium shadow-soft border border-lavender-accent/50'
                    : 'text-plum-light hover:bg-ivory-200/80 hover:text-plum'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-white text-plum shadow-soft'
                        : 'bg-ivory-200 text-plum-muted group-hover:text-plum group-hover:bg-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm tracking-tight truncate ${isActive ? 'font-semibold text-plum' : 'font-medium'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-plum-muted truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  {item.badge && (
                    <Badge variant={item.badgeVariant} size="sm">
                      {item.badge}
                    </Badge>
                  )}
                  {isActive && <ChevronRight className="w-4 h-4 text-plum-light" />}
                </div>
              </button>
            );
          })}

          {/* Active Vehicle Telematics Snapshot */}
          <div className="pt-6 px-1">
            <div className="p-4 rounded-2xl bg-ivory border border-lavender/80 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-plum-muted">
                  Active Vehicle
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-sage-text font-medium bg-sage/30 px-2 py-0.5 rounded-full border border-sage/50">
                  <Zap className="w-3 h-3 text-sage-dark fill-sage-dark" />
                  {CLIENT_PROFILE.primaryVehicle.batteryLevel}% Charge
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden h-24 mb-3 border border-lavender/50">
                <img
                  src={CLIENT_PROFILE.primaryVehicle.image}
                  alt={CLIENT_PROFILE.primaryVehicle.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent flex items-end p-2.5">
                  <p className="text-xs font-semibold text-white tracking-wide truncate">
                    {CLIENT_PROFILE.primaryVehicle.model}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-plum-light border-t border-lavender/40 pt-2.5">
                <span>Range: <strong className="text-plum font-semibold">{CLIENT_PROFILE.primaryVehicle.rangeRemaining} mi</strong></span>
                <button 
                  onClick={() => handleNavClick('service')}
                  className="text-plum hover:text-lavender-deep font-medium hover:underline text-[11px] cursor-pointer"
                >
                  Diagnostics →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Concierge Footer */}
        <div className="p-4 border-t border-lavender/50 bg-ivory/50">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-lavender/70 shadow-soft">
            <div className="relative">
              <img
                src={CLIENT_PROFILE.assignedConcierge.avatar}
                alt={CLIENT_PROFILE.assignedConcierge.name}
                className="w-10 h-10 rounded-full object-cover border border-lavender-accent"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-sage-dark border-2 border-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-plum truncate">
                  {CLIENT_PROFILE.assignedConcierge.name}
                </p>
                <span className="text-[10px] font-medium text-sage-dark bg-sage/20 px-1.5 py-0.2 rounded">
                  Live
                </span>
              </div>
              <p className="text-[10px] text-plum-muted truncate">
                {CLIENT_PROFILE.assignedConcierge.title}
              </p>
            </div>
            <button 
              onClick={() => handleNavClick('copilot')}
              className="p-1.5 rounded-lg bg-lavender/70 text-plum hover:bg-lavender hover:text-plum transition-colors cursor-pointer"
              title="Chat with Concierge"
            >
              <PhoneCall className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
