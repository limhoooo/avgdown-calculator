'use client';

import Header from '@/components/Header';
import RealEstateTaxTab from './RealEstateTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RealEstateTaxClient() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/realestate-tax/guide', label: t.reNavGuide },
    { href: '/faq',                  label: t.navFaq },
    { href: '/about',                label: t.navAbout },
    { href: '/privacy',              label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.reSubtitle} description={t.reDesc} navLinks={navLinks} />
      <main className="container">
        <RealEstateTaxTab />
      </main>
    </>
  );
}
