import React, { useState } from 'react';
import type { NavModule } from '../../types';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { MobileNav } from './MobileNav';

interface AppShellProps {
  activeModule: NavModule;
  onSelectModule: (module: NavModule) => void;
  onQuickSearch?: (query: string) => void;
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({
  activeModule,
  onSelectModule,
  onQuickSearch,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ivory flex">
      {/* Sidebar for Desktop & Mobile Drawer */}
      <Sidebar
        activeModule={activeModule}
        onSelectModule={onSelectModule}
        isOpenMobile={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 lg:pb-0">
        <TopNav
          activeModule={activeModule}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onSelectModule={onSelectModule}
          onQuickSearch={onQuickSearch}
        />

        <main className="flex-1 px-4 sm:px-8 py-6 max-w-7xl w-full mx-auto">
          {children}
        </main>

        {/* Mobile bottom navigation */}
        <MobileNav
          activeModule={activeModule}
          onSelectModule={onSelectModule}
        />
      </div>
    </div>
  );
};
