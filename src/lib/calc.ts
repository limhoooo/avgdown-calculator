import type { Round, CalcResult } from '@/types/calculator';

export function calcAvg(holdings: Round[]): CalcResult {
  const totalAmt = holdings.reduce((s, h) => s + h.price * h.shares, 0);
  const totalShares = holdings.reduce((s, h) => s + h.shares, 0);
  return {
    avg: totalShares > 0 ? totalAmt / totalShares : 0,
    totalShares,
    totalAmt,
  };
}

export function calcNeededShares(
  initShares: number,
  initPrice: number,
  addPrice: number,
  targetPrice: number,
): number {
  return Math.ceil(
    (initShares * (targetPrice - initPrice)) / (addPrice - targetPrice),
  );
}
