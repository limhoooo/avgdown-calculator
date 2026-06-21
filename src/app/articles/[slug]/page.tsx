import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES, getArticle, categoryColor } from '@/lib/articles';
import LoanRepaymentComparison from './content/LoanRepaymentComparison';
import CompoundInterest72Rule from './content/CompoundInterest72Rule';
import RealEstateTaxChecklist from './content/RealEstateTaxChecklist';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | 자산인사이트`,
    description: article.description,
    alternates: { canonical: `${BASE_URL}/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      locale: 'ko_KR',
      url: `${BASE_URL}/articles/${slug}`,
      siteName: '자산인사이트',
    },
  };
}

const CONTENT_MAP: Record<string, React.ReactNode> = {
  'loan-repayment-comparison': <LoanRepaymentComparison />,
  'compound-interest-72-rule': <CompoundInterest72Rule />,
  'realestate-tax-checklist': <RealEstateTaxChecklist />,
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const content = CONTENT_MAP[slug];
  if (!content) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${BASE_URL}/articles/${slug}`,
    datePublished: article.publishedAt,
    inLanguage: 'ko-KR',
    author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
    publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/articles/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Link href="/articles" className="back-link" style={{ marginBottom: 0 }}>
            ← 아티클 목록
          </Link>
          <span style={{ color: 'var(--border)' }}>|</span>
          <span
            className="article-category-badge"
            style={{ background: categoryColor(article.category) }}
          >
            {article.category}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{article.publishedAt}</span>
        </div>

        {content}
      </main>
    </>
  );
}
