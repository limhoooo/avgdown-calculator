'use client';

import { useState, useEffect } from 'react';
import TabBar from '@/components/ui/TabBar';
import ExchangeRateCard from './ExchangeRateCard';
import UsdHoldingCard from './UsdHoldingCard';
import DollarSimTab from './DollarSimTab';
import DollarRevTab from './DollarRevTab';
import DollarPnlTab from './DollarPnlTab';
import { useExchangeRate } from '@/hooks/useExchangeRate';
import type { UsdTab, Round } from '@/types/calculator';

const TABS = [
  { id: 'd-simulation', label: '🔁 물타기 시뮬' },
  { id: 'd-reverse', label: '🎯 목표단가 역산' },
  { id: 'd-pnl', label: '💰 손익 현황' },
];

export default function UsdCalculator() {
  const { rate, updateRate, status, updatedAt, refetch } = useExchangeRate();
  const [initPrice, setInitPrice] = useState('');
  const [initShares, setInitShares] = useState('');
  const [rounds, setRounds] = useState<Round[]>([]);
  const [activeTab, setActiveTab] = useState<UsdTab>('d-simulation');

  useEffect(() => { refetch(); }, [refetch]);

  const initPriceNum = parseFloat(initPrice) || 0;
  const initSharesNum = parseFloat(initShares) || 0;

  return (
    <div>
      <ExchangeRateCard rate={rate} status={status} updatedAt={updatedAt} onRefetch={refetch} onRateChange={updateRate} />
      <UsdHoldingCard
        price={initPrice}
        shares={initShares}
        exchangeRate={rate}
        onPriceChange={setInitPrice}
        onSharesChange={setInitShares}
      />
      <TabBar tabs={TABS} activeId={activeTab} onChange={(id) => setActiveTab(id as UsdTab)} />

      {activeTab === 'd-simulation' && (
        <DollarSimTab
          initPrice={initPriceNum}
          initShares={initSharesNum}
          rounds={rounds}
          exchangeRate={rate}
          onAdd={(r) => setRounds((prev) => [...prev, r])}
          onRemove={(idx) => setRounds((prev) => prev.filter((_, i) => i !== idx))}
          onClear={() => setRounds([])}
        />
      )}
      {activeTab === 'd-reverse' && (
        <DollarRevTab initPrice={initPriceNum} initShares={initSharesNum} exchangeRate={rate} />
      )}
      {activeTab === 'd-pnl' && (
        <DollarPnlTab initPrice={initPriceNum} initShares={initSharesNum} rounds={rounds} exchangeRate={rate} />
      )}
    </div>
  );
}
