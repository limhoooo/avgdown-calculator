import { fmt, fmtUSD } from '@/lib/fmt';

interface Props {
  price: string;
  shares: string;
  exchangeRate: number;
  onPriceChange: (v: string) => void;
  onSharesChange: (v: string) => void;
}

export default function UsdHoldingCard({ price, shares, exchangeRate, onPriceChange, onSharesChange }: Props) {
  const priceNum = parseFloat(price) || 0;
  const sharesNum = parseFloat(shares) || 0;
  const hasData = priceNum > 0 && sharesNum > 0;
  const totalUSD = priceNum * sharesNum;

  return (
    <div className="card">
      <div className="card-title">📋 달러 보유 현황</div>
      <div className="input-row">
        <div className="form-group">
          <label>평균 매수가 (USD)</label>
          <input
            type="number"
            placeholder="150.00"
            step="0.01"
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>보유 수량 (주)</label>
          <input
            type="number"
            placeholder="10"
            value={shares}
            onChange={(e) => onSharesChange(e.target.value)}
          />
        </div>
      </div>
      {hasData && (
        <div className="result-grid">
          <div className="result-item">
            <div className="result-label">투자금액 (USD)</div>
            <div className="result-value" style={{ fontSize: '18px' }}>{fmtUSD(totalUSD)}</div>
          </div>
          <div className="result-item">
            <div className="result-label">투자금액 (KRW)</div>
            <div className="result-value" style={{ fontSize: '18px' }}>
              {exchangeRate > 0 ? fmt(totalUSD * exchangeRate) + '원' : '환율 입력 필요'}
            </div>
            {exchangeRate > 0 && (
              <div className="result-sub">환율 {fmt(exchangeRate)}원 기준</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
