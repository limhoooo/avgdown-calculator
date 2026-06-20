'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CurrencyToggle from '@/components/CurrencyToggle';
import PortfolioCard from '@/components/PortfolioCard';
import KrwCalculator from '@/components/krw/KrwCalculator';
import UsdCalculator from '@/components/usd/UsdCalculator';
import { usePortfolio } from '@/hooks/usePortfolio';
import type { Currency, Round, SavedStock } from '@/types/calculator';

export default function Home() {
  const [currency, setCurrency] = useState<Currency>('krw');

  const [krwPrice, setKrwPrice] = useState('');
  const [krwShares, setKrwShares] = useState('');
  const [krwRounds, setKrwRounds] = useState<Round[]>([]);

  const [usdPrice, setUsdPrice] = useState('');
  const [usdShares, setUsdShares] = useState('');
  const [usdRounds, setUsdRounds] = useState<Round[]>([]);

  const { stocks, save, remove } = usePortfolio();

  const currentPrice = currency === 'krw' ? krwPrice : usdPrice;
  const currentShares = currency === 'krw' ? krwShares : usdShares;
  const currentRounds = currency === 'krw' ? krwRounds : usdRounds;
  const canSave = parseFloat(currentPrice) > 0 && parseFloat(currentShares) > 0;

  const handleSave = (name: string) => {
    save({
      name,
      currency,
      initPrice: parseFloat(currentPrice) || 0,
      initShares: parseFloat(currentShares) || 0,
      rounds: currentRounds,
    });
  };

  const handleLoad = (stock: SavedStock) => {
    setCurrency(stock.currency);
    if (stock.currency === 'krw') {
      setKrwPrice(String(stock.initPrice));
      setKrwShares(String(stock.initShares));
      setKrwRounds(stock.rounds);
    } else {
      setUsdPrice(String(stock.initPrice));
      setUsdShares(String(stock.initShares));
      setUsdRounds(stock.rounds);
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <CurrencyToggle currency={currency} onChange={setCurrency} />
        <PortfolioCard
          stocks={stocks}
          canSave={canSave}
          onSave={handleSave}
          onLoad={handleLoad}
          onRemove={remove}
        />
        {currency === 'krw' ? (
          <KrwCalculator
            initPrice={krwPrice}
            initShares={krwShares}
            rounds={krwRounds}
            onInitPriceChange={setKrwPrice}
            onInitSharesChange={setKrwShares}
            onRoundsChange={setKrwRounds}
          />
        ) : (
          <UsdCalculator
            initPrice={usdPrice}
            initShares={usdShares}
            rounds={usdRounds}
            onInitPriceChange={setUsdPrice}
            onInitSharesChange={setUsdShares}
            onRoundsChange={setUsdRounds}
          />
        )}
      </main>
    </>
  );
}
