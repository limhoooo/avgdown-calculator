import type { Currency } from '@/types/calculator';

interface Props {
  currency: Currency;
  onChange: (c: Currency) => void;
}

export default function CurrencyToggle({ currency, onChange }: Props) {
  return (
    <div className="card" style={{ padding: '14px 20px' }}>
      <div className="toggle-group">
        <button
          className={`toggle-btn${currency === 'krw' ? ' active' : ''}`}
          onClick={() => onChange('krw')}
        >
          🇰🇷 원화 (KRW)
        </button>
        <button
          className={`toggle-btn${currency === 'usd' ? ' active' : ''}`}
          onClick={() => onChange('usd')}
        >
          🇺🇸 달러 (USD)
        </button>
      </div>
    </div>
  );
}
