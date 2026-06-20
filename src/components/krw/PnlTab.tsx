'use client';

import { useState } from 'react';
import { calcAvg } from '@/lib/calc';
import { fmt, fmtP } from '@/lib/fmt';
import type { Round } from '@/types/calculator';

interface Props {
  initPrice: number;
  initShares: number;
  rounds: Round[];
}

export default function PnlTab({ initPrice, initShares, rounds }: Props) {
  const [curPrice, setCurPrice] = useState('');
  const cur = parseFloat(curPrice) || 0;
  const hasInit = initPrice > 0 && initShares > 0;

  let result: {
    avg: number; totalShares: number; totalAmt: number;
    evalAmt: number; profit: number; rate: number; isProfit: boolean;
  } | null = null;

  if (hasInit && cur > 0) {
    const { avg, totalShares, totalAmt } = calcAvg([{ price: initPrice, shares: initShares }, ...rounds]);
    const evalAmt = cur * totalShares;
    const profit = evalAmt - totalAmt;
    result = { avg, totalShares, totalAmt, evalAmt, profit, rate: (profit / totalAmt) * 100, isProfit: profit >= 0 };
  }

  return (
    <div className="card">
      <div className="card-title">💰 손익 현황</div>
      <div className="info-box">
        현재 주가를 입력하면 평가손익을 계산합니다.<br />
        물타기 시뮬레이션 결과가 있으면 그 기준으로 계산됩니다.
      </div>
      <div className="form-group">
        <label>현재 주가 (원)</label>
        <input type="number" placeholder="42,000" value={curPrice} onChange={(e) => setCurPrice(e.target.value)} />
      </div>
      {result && (
        <>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item">
              <div className="result-label">평균단가 기준</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmt(result.avg)}원</div>
              <div className="result-sub">{fmt(result.totalShares)}주 보유</div>
            </div>
            <div className="result-item">
              <div className="result-label">총 투자금액</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmt(result.totalAmt)}원</div>
            </div>
            <div className="result-item">
              <div className="result-label">평가금액</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmt(result.evalAmt)}원</div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : 'red'}`}>
              <div className="result-label">평가손익</div>
              <div className={`result-value xl ${result.isProfit ? 'up' : 'down'}`}>
                {(result.profit > 0 ? '+' : '') + fmt(result.profit)}원
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="result-grid">
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
                  <div className="result-value up">
                    +{(((cur - result.avg) / result.avg) * 100).toFixed(2)}%
                  </div>
                  <div className="result-sub">평균단가({fmt(result.avg)}원) 대비 {fmt(cur - result.avg)}원 초과</div>
                </>
              ) : (
                <>
                  <div className="result-value down">
                    +{(((result.avg - cur) / cur) * 100).toFixed(2)}%
                  </div>
                  <div className="result-sub">현재가 {fmt(cur)}원 → {fmt(result.avg)}원까지 상승 필요</div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
