'use client';

import { useTheme } from '@/hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ 라이트' : '🌙 다크'}
      </button>
      <h1>📉 물타기 계산기</h1>
      <p>주식 평균단가 계산 · 시뮬레이션 · 손익 분석</p>
    </header>
  );
}
