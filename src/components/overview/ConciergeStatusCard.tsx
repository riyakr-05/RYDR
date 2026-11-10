import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface ConciergeStatusCardProps {
  onStartChat: (initialPrompt?: string) => void;
}

export const ConciergeStatusCard: React.FC<ConciergeStatusCardProps> = ({
  onStartChat,
}) => {
  return (
    <Card variant="glass" className="p-6 mb-8 border border-lavender/90">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Advisor Details */}
        <div className="lg:col-span-5 flex items-center gap-4">
          <div className="relative">
            <img
              src={CLIENT_PROFILE.assignedConcierge.avatar}
              alt={CLIENT_PROFILE.assignedConcierge.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-lavender-accent shadow-soft"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-sage-dark border-2 border-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Badge variant="sage" size="sm">
                Assigned Bespoke Concierge
              </Badge>
              <span className="text-[10px] text-sage-text font-semibold flex items-center gap-1">
                ● Live & On-Call
              </span>
            </div>
            <h4 className="font-serif text-lg font-semibold text-plum">
              {CLIENT_PROFILE.assignedConcierge.name}
            </h4>
            <p className="text-xs text-plum-light">
              {CLIENT_PROFILE.assignedConcierge.title} • Private Client Desk
            </p>
          </div>
        </div>

        {/* Quick Query Bar */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 p-3 rounded-2xl bg-ivory border border-lavender/70 flex items-center gap-2 text-xs text-plum-light">
            <Sparkles className="w-4 h-4 text-lavender-deep shrink-0" />
            <span className="italic truncate">
              "Clara, prepare an acquisition comparison for the Spectre GT and Lumina SUV."
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5" />}
              onClick={() => onStartChat("Clara, prepare an acquisition comparison for the Spectre GT and Lumina SUV.")}
            >
              Ask AI Co-Pilot
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<Phone className="w-3.5 h-3.5 text-plum" />}
              onClick={() => alert(`Connecting directly to Clara Beauchamp at RYDR Beverly Hills Atelier Desk (+1-800-RYDR-VIP).`)}
            >
              Direct Call
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
