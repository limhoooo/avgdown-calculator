'use client';

import { useState } from 'react';
import { calcNeededShares } from '@/lib/calc';
import { fmt, fmtUSD } from '@/lib/fmt';

interface Props {
  initPrice: number;
  initShares: number;
  exchangeRate: number;
}

export default function DollarRevTab({ initPrice, initShares, exchangeRate }: Props) {
  const [revPrice, setRevPrice] = useState('');
  const [revTarget, setRevTarget] = useState('');

  const rp = parseFloat(revPrice) || 0;
  const rt = parseFloat(revTarget) || 0;
  const hasInit = initPrice > 0 && initShares > 0;
  const krw = (v: number) => exchangeRate > 0 ? fmt(v * exchangeRate) + '원' : '-';

  let error = '';
  let result: { needShares: number; needUSD: number; totalShares: number; totalUSD: number; actualAvg: number } | null = null;

  if (!hasInit) {
    error = '먼저 달러 보유 현황(평균 매수가, 보유 수량)을 입력하세요.';
  } else if (rp > 0 && rt > 0) {
    if (rp >= initPrice) error = '⚠️ 추가 매수가는 현재 평균단가보다 낮아야 합니다.';
    else if (rt >= initPrice) error = '⚠️ 목표 평균단가는 현재 평균단가보다 낮아야 합니다.';
    else if (rt <= rp) error = '⚠️ 목표 평균단가는 추가 매수가보다 높아야 합니다.';
    else {
      const needShares = calcNeededShares(initShares, initPrice, rp, rt);
      const needUSD = needShares * rp;
      const totalShares = initShares + needShares;
      const totalUSD = initPrice * initShares + needUSD;
      result = { needShares, needUSD, totalShares, totalUSD, actualAvg: totalUSD / totalShares };
    }
  }

  return (
    <div className="card">
      <div className="card-title">🎯 목표단가 역산 (USD)</div>
      <div className="info-box">
        원하는 평균단가가 되려면 얼마나 더 매수해야 하는지 계산합니다.<br />
        위에서 달러 보유 현황을 먼저 입력하세요.
      </div>
      <div className="input-row">
        <div className="form-group">
          <label>추가 매수 예정가 (USD)</label>
          <input type="number" placeholder="120.00" step="0.01" value={revPrice} onChange={(e) => setRevPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>목표 평균단가 (USD)</label>
          <input type="number" placeholder="135.00" step="0.01" value={revTarget} onChange={(e) => setRevTarget(e.target.value)} />
        </div>
      </div>
      {error && <div className="error-box">{error}</div>}
      {result && (
        <>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item accent">
              <div className="result-label">필요 추가 수량</div>
              <div className="result-value xl">{fmt(result.needShares)}주</div>
            </div>
            <div className="result-item accent">
              <div className="result-label">필요 추가 금액 (USD)</div>
              <div className="result-value xl">{fmtUSD(result.needUSD)}</div>
            </div>
            <div className="result-item accent">
              <div className="result-label">필요 추가 금액 (KRW)</div>
              <div className="result-value">{krw(result.needUSD)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">물타기 후 총 수량</div>
              <div className="result-value">{fmt(result.totalShares)}주</div>
            </div>
            <div className="result-item">
              <div className="result-label">물타기 후 총 투자금 (USD)</div>
              <div className="result-value">{fmtUSD(result.totalUSD)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">물타기 후 총 투자금 (KRW)</div>
              <div className="result-value">{krw(result.totalUSD)}</div>
            </div>
          </div>
          <div className="divider" />
          <div className="result-item">
            <div className="result-label">검증</div>
            <div className="result-sub">
              물타기 후 실제 평균단가: {fmtUSD(result.actualAvg)} (목표: {fmtUSD(rt)})
            </div>
          </div>
        </>
      )}
    </div>
  );
}
