'use client';

import { useState } from 'react';
import type { SavedStock } from '@/types/calculator';
import { fmt, fmtUSD } from '@/lib/fmt';

interface Props {
  stocks: SavedStock[];
  canSave: boolean;
  onSave: (name: string) => void;
  onLoad: (stock: SavedStock) => void;
  onRemove: (id: string) => void;
}

export default function PortfolioCard({ stocks, canSave, onSave, onLoad, onRemove }: Props) {
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState('');

  const handleSave = () => {
    if (!name.trim()) return;
    onSave(name.trim());
    setName('');
    setSaving(false);
  };

  const handleCancel = () => {
    setSaving(false);
    setName('');
  };

  return (
    <div className="card portfolio-card">
      <div className="portfolio-header">
        <span className="card-title" style={{ margin: 0 }}>📁 포트폴리오</span>
        {!saving && (
          <button
            className="btn-portfolio-save"
            onClick={() => setSaving(true)}
            disabled={!canSave}
            title={!canSave ? '보유 현황을 먼저 입력하세요' : '현재 종목 저장'}
          >
            + 종목 저장
          </button>
        )}
      </div>

      {saving && (
        <div className="portfolio-save-form">
          <input
            type="text"
            className="portfolio-name-input"
            placeholder="종목명 입력 (예: 삼성전자, NVDA)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            autoFocus
            maxLength={20}
          />
          <div className="portfolio-save-actions">
            <button className="btn btn-primary" style={{ flex: 1, padding: '9px', fontSize: '14px' }} onClick={handleSave} disabled={!name.trim()}>
              저장
            </button>
            <button className="btn btn-ghost" style={{ flex: 1, padding: '9px', fontSize: '14px' }} onClick={handleCancel}>
              취소
            </button>
          </div>
        </div>
      )}

      {stocks.length === 0 ? (
        <p className="portfolio-empty">
          보유 현황 입력 후 <strong>+ 종목 저장</strong>을 누르면<br />여기서 빠르게 불러올 수 있습니다
        </p>
      ) : (
        <ul className="stock-list">
          {stocks.map((stock) => (
            <li key={stock.id} className="stock-item">
              <div className="stock-info">
                <div className="stock-row-top">
                  <span className="stock-name">{stock.name}</span>
                  <span className={`stock-badge stock-badge-${stock.currency}`}>
                    {stock.currency.toUpperCase()}
                  </span>
                  {stock.rounds.length > 0 && (
                    <span className="stock-rounds-badge">물타기 {stock.rounds.length}회</span>
                  )}
                </div>
                <div className="stock-detail">
                  {stock.currency === 'krw'
                    ? `평균 ${fmt(stock.initPrice)}원 · ${fmt(stock.initShares)}주`
                    : `평균 ${fmtUSD(stock.initPrice)} · ${fmt(stock.initShares)}주`}
                </div>
                <div className="stock-date">
                  {new Date(stock.savedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
              </div>
              <div className="stock-actions">
                <button className="btn-load" onClick={() => onLoad(stock)}>불러오기</button>
                <button className="btn-del" onClick={() => onRemove(stock.id)} aria-label="삭제">×</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
