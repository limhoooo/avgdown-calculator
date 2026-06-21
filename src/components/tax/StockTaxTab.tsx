'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BASIC_DEDUCTION = 2_500_000;

function fmt(n: number) {
  return Math.round(n).toLocaleString('ko-KR');
}

export default function StockTaxTab() {
  const { t } = useLanguage();
  const [sell, setSell] = useState('');
  const [buy, setBuy]   = useState('');
  const [fee, setFee]   = useState('');

  const r = useMemo(() => {
    const s = parseFloat(sell) || 0;
    const b = parseFloat(buy)  || 0;
    const f = parseFloat(fee)  || 0;
    if (!s && !b) return null;
    const gain    = s - b - f;
    const taxBase = gain > 0 ? Math.max(0, gain - BASIC_DEDUCTION) : 0;
    const tax20   = taxBase * 0.20;
    const tax2    = taxBase * 0.02;
    return { gain, taxBase, tax20, tax2, total: tax20 + tax2, isLoss: gain < 0 };
  }, [sell, buy, fee]);

  return (
    <>
      <div className="card">
        <div className="card-title">{t.stInputTitle}</div>
        <p className="tax-notice">{t.stNotice}</p>
        <div className="input-row">
          <div className="form-group">
            <label>{t.stSell}</label>
            <input type="number" placeholder="10000000" value={sell} onChange={e => setSell(e.target.value)} />
          </div>
          <div className="form-group">
            <label>{t.stCost}</label>
            <input type="number" placeholder="8000000" value={buy} onChange={e => setBuy(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>{t.stFee}</label>
          <input type="number" placeholder="50000" value={fee} onChange={e => setFee(e.target.value)} />
        </div>
      </div>

      {r && (
        <div className="card">
          <div className="card-title">{t.stResultTitle}</div>

          {r.isLoss ? (
            <div className="tax-info-box">{t.stLoss}</div>
          ) : r.gain <= 0 ? (
            <div className="tax-info-box">{t.stNoGain}</div>
          ) : (
            <>
              <div className="tax-result-grid">
                <div className="tax-row">
                  <span className="tax-label">{t.stGain}</span>
                  <span className="tax-value">{fmt(r.gain)}{t.stUnit}</span>
                </div>
                <div className="tax-row tax-row-sub">
                  <span className="tax-label">{t.stDeduction}</span>
                  <span className="tax-value">−{fmt(Math.min(r.gain, BASIC_DEDUCTION))}{t.stUnit}</span>
                </div>
                <div className="tax-row tax-row-emphasis">
                  <span className="tax-label">{t.stTaxBase}</span>
                  <span className="tax-value">{fmt(r.taxBase)}{t.stUnit}</span>
                </div>
                <div className="tax-row">
                  <span className="tax-label">{t.stTax20}</span>
                  <span className="tax-value">{fmt(r.tax20)}{t.stUnit}</span>
                </div>
                <div className="tax-row">
                  <span className="tax-label">{t.stLocalTax}</span>
                  <span className="tax-value">{fmt(r.tax2)}{t.stUnit}</span>
                </div>
                <div className="tax-row tax-row-total">
                  <span className="tax-label">{t.stTotal}</span>
                  <span className="tax-value">{fmt(r.total)}{t.stUnit}</span>
                </div>
              </div>
              {r.taxBase === 0 && (
                <div className="tax-info-box" style={{ marginTop: 12 }}>{t.stUnderDeduction}</div>
              )}
            </>
          )}
          <p className="tax-disclaimer">{t.stDisclaimer}</p>
        </div>
      )}
    </>
  );
}
