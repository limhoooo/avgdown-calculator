export type Currency = 'krw' | 'usd';
export type KrwTab = 'simulation' | 'reverse' | 'pnl';
export type UsdTab = 'd-simulation' | 'd-reverse' | 'd-pnl';
export type InputMode = 'shares' | 'amount';

export interface Round {
  price: number;
  shares: number;
}

export interface CalcResult {
  avg: number;
  totalShares: number;
  totalAmt: number;
}

export interface TabDef {
  id: string;
  label: string;
}
