import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  MapPin, 
  Bell, 
  Sparkles, 
  Crown, 
} from 'lucide-react';
import type { NavModule } from '../../types';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Button } from '../ui/Button';

interface TopNavProps {
  activeModule: NavModule;
  onOpenMobileMenu: () => void;
  onSelectModule: (module: NavModule) => void;
  onQuickSearch?: (query: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeModule,
  onOpenMobileMenu,
  onSelectModule,
  onQuickSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const selectedAtelier = 'Beverly Hills Atelier';

  const moduleTitles: Record<NavModule, { title: string; subtitle: string }> = {
    overview: {
      title: 'Executive Portfolio',
      subtitle: 'Vehicle telematics, concierge status, and atelier digest',
    },
    copilot: {
      title: 'AI Buyer Co-Pilot',
      subtitle: 'Intelligent automotive concierge & bespoke vehicle consultation',
    },
    service: {
      title: 'Service Companion',
      subtitle: 'White-Glove predictive maintenance & telematics diagnostics',
    },
    showroom: {
      title: 'Showroom Atelier',
      subtitle: '360° virtual studio, bespoke upholstery & acoustic previews',
    },
    loyalty: {
      title: 'Ownership & Loyalty',
      subtitle: 'Obsidian tier privileges, digital ledger & private invitations',
    },
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSelectModule('copilot');
      if (onQuickSearch) {
        onQuickSearch(searchQuery);
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-lavender/70 px-4 sm:px-8 py-3.5 transition-all">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenMobileMenu}
            className="p-2 rounded-xl text-plum-light hover:text-plum hover:bg-lavender/60 lg:hidden cursor-pointer"
            aria-label="Toggle navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg sm:text-xl font-semibold text-plum tracking-tight">
                {moduleTitles[activeModule].title}
              </h1>
              {activeModule === 'copilot' && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium bg-lavender text-plum px-2.5 py-0.5 rounded-full border border-lavender-accent/60">
                  <Sparkles className="w-3 h-3 text-lavender-deep" />
                  Simulated Concierge
                </span>
              )}
            </div>
            <p className="text-xs text-plum-light hidden md:block">
              {moduleTitles[activeModule].subtitle}
            </p>
          </div>
        </div>

        {/* Middle: Atelier Quick Search (Desktop) */}
        <div className="hidden xl:flex items-center flex-1 max-w-md mx-6">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask Co-Pilot (e.g. 'Compare Spectre GT vs Lumina SUV')..."
              className="w-full bg-ivory-200/80 hover:bg-ivory-200 focus:bg-white text-xs text-plum placeholder-plum-muted/80 pl-10 pr-16 py-2.5 rounded-full border border-lavender focus:border-lavender-deep focus:outline-none focus:ring-2 focus:ring-lavender-accent/20 transition-all"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-plum-muted bg-white/80 border border-lavender/80 px-1.5 py-0.5 rounded shadow-xs">
              ⏎
            </span>
          </form>
        </div>

        {/* Right: Atelier Location, Notifications & Obsidian Profile */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Atelier Location Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory-200 border border-lavender/60 text-xs text-plum-light font-medium">
            <MapPin className="w-3.5 h-3.5 text-lavender-deep" />
            <span>{selectedAtelier}</span>
          </div>

          {/* Quick AI Launch Button (if not on copilot) */}
          {activeModule !== 'copilot' && (
            <Button
              variant="lavender"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5 text-lavender-deep" />}
              onClick={() => onSelectModule('copilot')}
              className="hidden sm:inline-flex shadow-xs"
            >
              Ask Co-Pilot
            </Button>
          )}

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-full text-plum-light hover:text-plum hover:bg-lavender/50 transition-colors cursor-pointer"
              aria-label="View notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-peach-dark" />
            </button>

            {/* Notification Drawer Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-soft-lg border border-lavender/80 p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-lavender/50">
                  <h4 className="text-xs font-semibold text-plum uppercase tracking-wider">
                    Concierge Alerts
                  </h4>
                  <span className="text-[10px] text-plum-muted">2 New</span>
                </div>
                <div className="space-y-3 py-3">
                  <div className="p-2.5 rounded-xl bg-ivory border border-lavender/40 text-xs">
                    <p className="font-semibold text-plum">Spring Track Day Invitation</p>
                    <p className="text-plum-light text-[11px] mt-0.5">
                      Laguna Seca private session reservations are now open for Obsidian members.
                    </p>
                    <span className="text-[10px] text-plum-muted mt-1 block">2 hours ago</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-ivory border border-lavender/40 text-xs">
                    <p className="font-semibold text-plum">OTA Firmware v4.2 Ready</p>
                    <p className="text-plum-light text-[11px] mt-0.5">
                      Adds intelligent active range optimizer and new cabin acoustic presets.
                    </p>
                    <span className="text-[10px] text-plum-muted mt-1 block">Yesterday</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-full text-center text-xs font-medium text-plum-light hover:text-plum pt-2 border-t border-lavender/40 cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>

          {/* Client Profile Pill */}
          <div 
            onClick={() => onSelectModule('loyalty')}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full bg-ivory hover:bg-lavender/30 border border-lavender/80 cursor-pointer transition-colors shadow-soft"
          >
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-plum text-ivory flex items-center justify-center font-serif text-xs font-semibold">
                JV
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-peach flex items-center justify-center">
                <Crown className="w-2 h-2 text-peach-dark" />
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-plum leading-tight">
                {CLIENT_PROFILE.name}
              </p>
              <p className="text-[10px] font-medium text-peach-dark tracking-wide uppercase">
                {CLIENT_PROFILE.tier} Tier
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
