import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '자산인사이트 - 투자자를 위한 스마트 계산기 모음',
  description: '물타기 계산기, 양도소득세 계산기 등 투자에 필요한 계산을 한 곳에서. 자산인사이트에서 스마트하게 투자하세요.',
  keywords: ['자산인사이트', '투자 계산기', '물타기 계산기', '양도소득세 계산기', '주식 계산기'],
  alternates: { canonical: BASE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '자산인사이트',
  url: BASE_URL,
  description: '투자자를 위한 스마트 계산기 모음',
  inLanguage: 'ko-KR',
};

const CALCULATORS = [
  {
    emoji: '📉',
    name: '물타기 계산기',
    nameEn: 'Avg. Down Calculator',
    desc: '주식 평균단가 낮추기 시뮬레이션 · 목표단가 역산 · 손익 현황',
    href: '/avgdown',
    ready: true,
  },
  {
    emoji: '📈',
    name: '해외주식 양도소득세 계산기',
    nameEn: 'Foreign Stock Tax',
    desc: '해외주식 매도 시 양도세 계산. 기본공제 250만원 · 22% 세율 자동 적용',
    href: '/stock-tax',
    ready: true,
  },
  {
    emoji: '🏠',
    name: '부동산 양도소득세 계산기',
    nameEn: 'Real Estate Tax',
    desc: '부동산 양도세 계산. 장기보유특별공제 · 1세대1주택 비과세 · 누진세율 자동 적용',
    href: '/realestate-tax',
    ready: true,
  },
];

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hub-page">
        <header className="hub-header">
          <h1 className="hub-title">자산인사이트</h1>
          <p className="hub-subtitle">투자자를 위한 스마트 계산기 모음</p>
        </header>

        <main className="container">
          <div className="hub-section-title">계산기 목록</div>
          <div className="hub-grid">
            {CALCULATORS.map((calc) =>
              calc.ready ? (
                <Link key={calc.name} href={calc.href!} className="hub-card hub-card-link">
                  <div className="hub-card-emoji">{calc.emoji}</div>
                  <div className="hub-card-body">
                    <div className="hub-card-name">{calc.name}</div>
                    <div className="hub-card-desc">{calc.desc}</div>
                  </div>
                  <div className="hub-card-arrow">→</div>
                </Link>
              ) : (
                <div key={calc.name} className="hub-card hub-card-soon">
                  <div className="hub-card-emoji">{calc.emoji}</div>
                  <div className="hub-card-body">
                    <div className="hub-card-name">{calc.name}</div>
                    <div className="hub-card-desc">{calc.desc}</div>
                  </div>
                  <div className="hub-card-badge">준비중</div>
                </div>
              )
            )}
          </div>
        </main>

        <footer className="hub-footer">
          <nav className="footer-nav">
            <Link href="/about" className="footer-link">서비스 소개</Link>
            <span className="footer-sep">·</span>
            <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} 자산인사이트</p>
        </footer>
      </div>
    </>
  );
}
