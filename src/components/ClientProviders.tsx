'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import NavSidebar from '@/components/NavSidebar';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <NavSidebar />
      {children}
    </LanguageProvider>
  );
}
