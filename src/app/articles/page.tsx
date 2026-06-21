import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES, categoryColor } from '@/lib/articles';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '투자·금융 가이드 아티클 | 자산인사이트',
  description: '대출 상환 방식 비교, 복리 투자 원리, 부동산 세금 정리 등 투자자에게 꼭 필요한 금융 정보를 알기 쉽게 설명합니다.',
  keywords: ['투자 가이드', '금융 정보', '대출 상환', '복리 투자', '부동산 세금', '재테크'],
  alternates: { canonical: `${BASE_URL}/articles` },
};

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <Link href="/" className="back-link">← 홈으로</Link>

      <div style={{ marginTop: '16px', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text)', marginBottom: '6px' }}>
          투자·금융 가이드
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          계산기 사용법부터 세금·대출·투자 개념까지, 투자자에게 꼭 필요한 정보를 정리했습니다.
        </p>
      </div>

      <div className="article-list">
        {sorted.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="article-card">
            <div className="article-card-meta">
              <span
                className="article-category-badge"
                style={{ background: categoryColor(article.category) }}
              >
                {article.category}
              </span>
              <span className="article-date">{article.publishedAt}</span>
            </div>
            <h2 className="article-card-title">{article.title}</h2>
            <p className="article-card-desc">{article.description}</p>
            <span className="article-card-more">자세히 보기 →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
