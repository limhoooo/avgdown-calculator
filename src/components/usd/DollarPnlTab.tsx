'use client';

import { useState } from 'react';
import { calcAvg } from '@/lib/calc';
import { fmt, fmtUSD, fmtP } from '@/lib/fmt';
import type { Round } from '@/types/calculator';

interface Props {
  initPrice: number;
  initShares: number;
  rounds: Round[];
  exchangeRate: number;
}

export default function DollarPnlTab({ initPrice, initShares, rounds, exchangeRate }: Props) {
  const [curPrice, setCurPrice] = useState('');
  const cur = parseFloat(curPrice) || 0;
  const hasInit = initPrice > 0 && initShares > 0;
  const krw = (v: number) => exchangeRate > 0 ? fmt(v * exchangeRate) + '원' : '-';

  let result: {
    avg: number; totalShares: number; totalAmt: number;
    evalUSD: number; profitUSD: number; rate: number; isProfit: boolean;
  } | null = null;

  if (hasInit && cur > 0) {
    const { avg, totalShares, totalAmt } = calcAvg([{ price: initPrice, shares: initShares }, ...rounds]);
    const evalUSD = cur * totalShares;
    const profitUSD = evalUSD - totalAmt;
    result = { avg, totalShares, totalAmt, evalUSD, profitUSD, rate: (profitUSD / totalAmt) * 100, isProfit: profitUSD >= 0 };
  }

  return (
    <div className="card">
      <div className="card-title">💰 달러 손익 현황</div>
      <div className="info-box">
        현재 주가(USD)를 입력하면 평가손익을 계산합니다.<br />
        물타기 결과가 있으면 그 기준으로 계산됩니다.
      </div>
      <div className="form-group">
        <label>현재 주가 (USD)</label>
        <input type="number" placeholder="145.00" step="0.01" value={curPrice} onChange={(e) => setCurPrice(e.target.value)} />
      </div>
      {result && (
        <>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item">
              <div className="result-label">기준 평균단가 (USD)</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmtUSD(result.avg)}</div>
              <div className="result-sub">{fmt(result.totalShares)}주 보유</div>
            </div>
            <div className="result-item">
              <div className="result-label">총 투자금액 (USD)</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmtUSD(result.totalAmt)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">총 투자금액 (KRW)</div>
              <div className="result-value" style={{ fontSize: '15px' }}>{krw(result.totalAmt)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">평가금액 (USD)</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmtUSD(result.evalUSD)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">평가금액 (KRW)</div>
              <div className="result-value" style={{ fontSize: '15px' }}>{krw(result.evalUSD)}</div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : 'red'}`}>
              <div className="result-label">평가손익 (USD)</div>
              <div className={`result-value xl ${result.isProfit ? 'up' : 'down'}`}>
                {(result.profitUSD > 0 ? '+' : '') + fmtUSD(result.profitUSD)}
              </div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : 'red'}`}>
              <div className="result-label">평가손익 (KRW)</div>
              <div className={`result-value ${result.isProfit ? 'up' : 'down'}`} style={{ fontSize: '16px' }}>
                {exchangeRate > 0
                  ? (result.profitUSD > 0 ? '+' : '') + fmt(result.profitUSD * exchangeRate) + '원'
                  : '-'}
              </div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : 'red'}`}>
              <div className="result-label">수익률</div>
              <div className={`result-value xl ${result.isProfit ? 'up' : 'down'}`}>{fmtP(result.rate, 2)}</div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : ''}`}>
              <div className="result-label">
                {result.isProfit ? '평균단가 대비 현재가 상승률' : '본전까지 필요 상승률'}
              </div>
              {result.isProfit ? (
                <>
                  <div className="result-value up">+{(((cur - result.avg) / result.avg) * 100).toFixed(2)}%</div>
                  <div className="result-sub">평균단가({fmtUSD(result.avg)}) 대비 {fmtUSD(cur - result.avg)} 초과</div>
                </>
              ) : (
                <>
                  <div className="result-value down">+{(((result.avg - cur) / cur) * 100).toFixed(2)}%</div>
                  <div className="result-sub">{fmtUSD(cur)} → {fmtUSD(result.avg)} 상승 필요</div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
