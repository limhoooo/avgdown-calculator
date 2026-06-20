'use client';

import { useState } from 'react';
import TabBar from '@/components/ui/TabBar';
import KrwHoldingCard from './KrwHoldingCard';
import SimulationTab from './SimulationTab';
import ReverseTab from './ReverseTab';
import PnlTab from './PnlTab';
import type { KrwTab, Round } from '@/types/calculator';

const TABS = [
  { id: 'simulation', label: '🔁 물타기 시뮬' },
  { id: 'reverse', label: '🎯 목표단가 역산' },
  { id: 'pnl', label: '💰 손익 현황' },
];

export default function KrwCalculator() {
  const [initPrice, setInitPrice] = useState('');
  const [initShares, setInitShares] = useState('');
  const [rounds, setRounds] = useState<Round[]>([]);
  const [activeTab, setActiveTab] = useState<KrwTab>('simulation');

  const initPriceNum = parseFloat(initPrice) || 0;
  const initSharesNum = parseFloat(initShares) || 0;

  return (
    <div>
      <KrwHoldingCard
        price={initPrice}
        shares={initShares}
        onPriceChange={setInitPrice}
        onSharesChange={setInitShares}
      />
      <TabBar tabs={TABS} activeId={activeTab} onChange={(id) => setActiveTab(id as KrwTab)} />

      {activeTab === 'simulation' && (
        <SimulationTab
          initPrice={initPriceNum}
          initShares={initSharesNum}
          rounds={rounds}
          onAdd={(r) => setRounds((prev) => [...prev, r])}
          onRemove={(idx) => setRounds((prev) => prev.filter((_, i) => i !== idx))}
          onClear={() => setRounds([])}
        />
      )}
      {activeTab === 'reverse' && (
        <ReverseTab initPrice={initPriceNum} initShares={initSharesNum} />
      )}
      {activeTab === 'pnl' && (
        <PnlTab initPrice={initPriceNum} initShares={initSharesNum} rounds={rounds} />
      )}
    </div>
  );
}
