'use client';

import { useState } from 'react';
import { calcNeededShares } from '@/lib/calc';
import { fmt } from '@/lib/fmt';

interface Props {
  initPrice: number;
  initShares: number;
}

export default function ReverseTab({ initPrice, initShares }: Props) {
  const [revPrice, setRevPrice] = useState('');
  const [revTarget, setRevTarget] = useState('');

  const rp = parseFloat(revPrice) || 0;
  const rt = parseFloat(revTarget) || 0;
  const hasInit = initPrice > 0 && initShares > 0;

  let error = '';
  let result: { needShares: number; needAmt: number; totalShares: number; totalAmt: number; actualAvg: number } | null = null;

  if (!hasInit) {
    error = '먼저 현재 보유 현황(평균 매수가, 보유 수량)을 입력하세요.';
  } else if (rp > 0 && rt > 0) {
    if (rp >= initPrice) error = '⚠️ 추가 매수가는 현재 평균단가보다 낮아야 합니다.';
    else if (rt >= initPrice) error = '⚠️ 목표 평균단가는 현재 평균단가보다 낮아야 합니다.';
    else if (rt <= rp) error = '⚠️ 목표 평균단가는 추가 매수가보다 높아야 합니다.';
    else {
      const needShares = calcNeededShares(initShares, initPrice, rp, rt);
      const needAmt = needShares * rp;
      const totalShares = initShares + needShares;
      const totalAmt = initPrice * initShares + needAmt;
      result = { needShares, needAmt, totalShares, totalAmt, actualAvg: totalAmt / totalShares };
    }
  }

  return (
    <div className="card">
      <div className="card-title">🎯 목표단가 역산</div>
      <div className="info-box">
        원하는 평균단가가 되려면 얼마나 더 매수해야 하는지 계산합니다.<br />
        위에서 현재 보유 현황을 먼저 입력하세요.
      </div>
      <div className="input-row">
        <div className="form-group">
          <label>추가 매수 예정가 (원)</label>
          <input type="number" placeholder="38,000" value={revPrice} onChange={(e) => setRevPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>목표 평균단가 (원)</label>
          <input type="number" placeholder="44,000" value={revTarget} onChange={(e) => setRevTarget(e.target.value)} />
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
              <div className="result-label">필요 추가 금액</div>
              <div className="result-value xl">{fmt(result.needAmt)}원</div>
            </div>
            <div className="result-item">
              <div className="result-label">물타기 후 총 수량</div>
              <div className="result-value">{fmt(result.totalShares)}주</div>
            </div>
            <div className="result-item">
              <div className="result-label">물타기 후 총 투자금</div>
              <div className="result-value">{fmt(result.totalAmt)}원</div>
            </div>
          </div>
          <div className="divider" />
          <div className="result-item">
            <div className="result-label">검증</div>
            <div className="result-sub">
              물타기 후 실제 평균단가: {fmt(result.actualAvg)}원 (목표: {fmt(rt)}원)
            </div>
          </div>
        </>
      )}
    </div>
  );
}
