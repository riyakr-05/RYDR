import React from 'react';
import { HeroWelcome } from './HeroWelcome';
import { ConciergeStatusCard } from './ConciergeStatusCard';
import { ModuleFeatureGrid } from './ModuleFeatureGrid';
import { CuratedStories } from './CuratedStories';
import type { NavModule } from '../../types';

interface OverviewModuleProps {
  onNavigate: (module: NavModule) => void;
  onStartCoPilotChat: (initialPrompt?: string) => void;
}

export const OverviewModule: React.FC<OverviewModuleProps> = ({
  onNavigate,
  onStartCoPilotChat,
}) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Welcome & Telematics Overview */}
      <HeroWelcome onNavigate={onNavigate} />

      {/* Concierge Desk & Status */}
      <ConciergeStatusCard onStartChat={onStartCoPilotChat} />

      {/* 4 Interactive Feature Modules */}
      <ModuleFeatureGrid onSelectModule={onNavigate} />

      {/* Curated Atelier Journal */}
      <CuratedStories />
    </div>
  );
};
