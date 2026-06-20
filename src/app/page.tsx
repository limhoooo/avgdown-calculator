'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CurrencyToggle from '@/components/CurrencyToggle';
import KrwCalculator from '@/components/krw/KrwCalculator';
import UsdCalculator from '@/components/usd/UsdCalculator';
import type { Currency } from '@/types/calculator';

export default function Home() {
  const [currency, setCurrency] = useState<Currency>('krw');

  return (
    <>
      <Header />
      <main className="container">
        <CurrencyToggle currency={currency} onChange={setCurrency} />
        {currency === 'krw' ? <KrwCalculator /> : <UsdCalculator />}
      </main>
    </>
  );
}
