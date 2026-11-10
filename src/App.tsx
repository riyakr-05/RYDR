import { useState } from 'react';
import type { NavModule, Vehicle } from './types';
import { AppShell } from './components/layout/AppShell';
import { OverviewModule } from './components/overview/OverviewModule';
import { AICoPilotModule } from './components/copilot/AICoPilotModule';
import { ServiceCompanionModule } from './components/service/ServiceCompanionModule';
import { ShowroomModule } from './components/showroom/ShowroomModule';
import { OwnershipLoyaltyModule } from './components/loyalty/OwnershipLoyaltyModule';

export function App() {
  const [activeModule, setActiveModule] = useState<NavModule>('overview');
  const [coPilotInitialPrompt, setCoPilotInitialPrompt] = useState<string | undefined>(undefined);

  const handleStartCoPilotChat = (prompt?: string) => {
    setCoPilotInitialPrompt(prompt);
    setActiveModule('copilot');
  };

  const handleConsultFromShowroom = (vehicle: Vehicle) => {
    const prompt = `Tell me more about the bespoke configurations, acceleration dynamics, and private lease terms for the ${vehicle.name}.`;
    setCoPilotInitialPrompt(prompt);
    setActiveModule('copilot');
  };

  const handleQuickSearch = (query: string) => {
    setCoPilotInitialPrompt(query);
    setActiveModule('copilot');
  };

  return (
    <AppShell
      activeModule={activeModule}
      onSelectModule={(module) => {
        if (module !== 'copilot') {
          // Clear initial prompt when navigating away so it doesn't re-trigger
          setCoPilotInitialPrompt(undefined);
        }
        setActiveModule(module);
      }}
      onQuickSearch={handleQuickSearch}
    >
      {activeModule === 'overview' && (
        <OverviewModule
          onNavigate={setActiveModule}
          onStartCoPilotChat={handleStartCoPilotChat}
        />
      )}

      {activeModule === 'copilot' && (
        <AICoPilotModule initialPrompt={coPilotInitialPrompt} />
      )}

      {activeModule === 'service' && (
        <ServiceCompanionModule />
      )}

      {activeModule === 'showroom' && (
        <ShowroomModule onConsultCoPilot={handleConsultFromShowroom} />
      )}

      {activeModule === 'loyalty' && (
        <OwnershipLoyaltyModule />
      )}
    </AppShell>
  );
}

export default App;
