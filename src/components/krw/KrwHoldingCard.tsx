import { fmt } from '@/lib/fmt';

interface Props {
  price: string;
  shares: string;
  onPriceChange: (v: string) => void;
  onSharesChange: (v: string) => void;
}

export default function KrwHoldingCard({ price, shares, onPriceChange, onSharesChange }: Props) {
  const priceNum = parseFloat(price) || 0;
  const sharesNum = parseFloat(shares) || 0;
  const hasData = priceNum > 0 && sharesNum > 0;

  return (
    <div className="card">
      <div className="card-title">📋 현재 보유 현황</div>
      <div className="input-row">
        <div className="form-group">
          <label>평균 매수가 (원)</label>
          <input
            type="number"
            placeholder="50,000"
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>보유 수량 (주)</label>
          <input
            type="number"
            placeholder="100"
            value={shares}
            onChange={(e) => onSharesChange(e.target.value)}
          />
        </div>
      </div>
      {hasData && (
        <div className="result-grid">
          <div className="result-item">
            <div className="result-label">현재 투자금액</div>
            <div className="result-value" style={{ fontSize: '18px' }}>
              {fmt(priceNum * sharesNum)}원
            </div>
          </div>
          <div className="result-item">
            <div className="result-label">현재 평균단가</div>
            <div className="result-value" style={{ fontSize: '18px' }}>
              {fmt(priceNum)}원
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
