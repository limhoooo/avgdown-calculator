'use client';

import { useState, useCallback } from 'react';

export type RateStatus = 'idle' | 'loading' | 'success' | 'error';

export function useExchangeRate() {
  const [rate, setRate] = useState(0);
  const [status, setStatus] = useState<RateStatus>('idle');
  const [updatedAt, setUpdatedAt] = useState('');

  const refetch = useCallback(async () => {
    setStatus('loading');
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      const data = await res.json();
      if (data.result !== 'success') throw new Error('API error');
      const krw = data.rates.KRW as number;
      const d = new Date(data.time_last_update_utc as string);
      const dateStr = d.toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
      setRate(krw);
      setUpdatedAt(dateStr);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  const updateRate = useCallback((val: number) => {
    if (val > 0) setRate(val);
  }, []);

  return { rate, updateRate, status, updatedAt, refetch };
}
