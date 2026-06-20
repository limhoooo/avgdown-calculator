'use client';

import { useState, useEffect } from 'react';
import type { SavedStock } from '@/types/calculator';

const KEY = 'portfolio_v1';

export function usePortfolio() {
  const [stocks, setStocks] = useState<SavedStock[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setStocks(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (next: SavedStock[]) => {
    setStocks(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const save = (data: Omit<SavedStock, 'id' | 'savedAt'>) => {
    const entry: SavedStock = { ...data, id: Date.now().toString(), savedAt: Date.now() };
    persist([entry, ...stocks]);
  };

  const remove = (id: string) => {
    persist(stocks.filter((s) => s.id !== id));
  };

  return { stocks, save, remove };
}
