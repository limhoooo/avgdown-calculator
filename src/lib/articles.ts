export type ArticleCategory = '대출' | '투자' | '부동산' | '세금' | '예적금';

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  relatedCalc?: { label: string; href: string };
}

export const ARTICLES: Article[] = [
  {
    slug: 'loan-repayment-comparison',
    title: '원리금균등 vs 원금균등 상환, 어떤 게 더 유리할까?',
    description: '두 상환 방식의 이자 총액·월 납입금 차이를 비교하고, 내 상황에 맞는 방식을 선택하는 기준을 안내합니다.',
    category: '대출',
    publishedAt: '2025-06-01',
    relatedCalc: { label: '대출 이자 계산기', href: '/loan' },
  },
  {
    slug: 'compound-interest-72-rule',
    title: '복리의 힘: 72법칙으로 보는 투자 원금 2배 기간',
    description: '복리 효과가 왜 강력한지, 72법칙으로 원금이 두 배 되는 기간을 계산하는 방법을 쉽게 설명합니다.',
    category: '투자',
    publishedAt: '2025-06-10',
    relatedCalc: { label: '복리 계산기', href: '/compound' },
  },
  {
    slug: 'realestate-tax-checklist',
    title: '부동산 세금 완전 정리: 취득·보유·양도세 한눈에',
    description: '부동산을 사고·보유하고·팔 때 내야 하는 세금을 단계별로 정리했습니다. 절세 포인트까지 함께 확인하세요.',
    category: '부동산',
    publishedAt: '2025-06-18',
    relatedCalc: { label: '취득세 계산기', href: '/acquisition-tax' },
  },
  {
    slug: 'savings-vs-deposit',
    title: '정기예금 vs 적금, 이자를 더 많이 주는 건 어느 쪽일까?',
    description: '같은 금리라도 실제 받는 이자가 다릅니다. 예금과 적금의 구조적 차이와 세후 수익 비교법을 알기 쉽게 설명합니다.',
    category: '예적금',
    publishedAt: '2025-06-23',
    relatedCalc: { label: '예적금 계산기', href: '/savings' },
  },
  {
    slug: 'overseas-stock-tax-guide',
    title: '해외주식 양도소득세 신고 방법과 절세 전략',
    description: '해외주식 매도 시 꼭 알아야 할 양도소득세 신고 시기·방법·계산법과 기본공제 250만원 활용 절세 전략을 정리합니다.',
    category: '세금',
    publishedAt: '2025-06-28',
    relatedCalc: { label: '해외주식 양도소득세 계산기', href: '/stock-tax' },
  },
  {
    slug: 'jongbu-tax-guide',
    title: '종합부동산세(종부세) 완벽 가이드: 계산부터 절세까지',
    description: '종부세 과세 기준, 세율, 계산 방법을 쉽게 설명하고 1세대 1주택자 공제·고령자 세액공제 등 절세 방법을 안내합니다.',
    category: '부동산',
    publishedAt: '2025-07-02',
    relatedCalc: { label: '보유세 계산기', href: '/holding-tax' },
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getLatestArticles(n = 3): Article[] {
  return [...ARTICLES]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, n);
}

const CATEGORY_COLOR: Record<ArticleCategory, string> = {
  '대출': '#2563eb',
  '투자': '#16a34a',
  '부동산': '#9333ea',
  '세금': '#dc2626',
  '예적금': '#0891b2',
};

export function categoryColor(cat: ArticleCategory): string {
  return CATEGORY_COLOR[cat];
}
