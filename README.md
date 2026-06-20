# 물타기 계산기 - 기능 정리

주식 평균단가 계산 · 시뮬레이션 · 손익 분석을 위한 Next.js 웹 앱입니다.

---

## 공통 기능

### 통화 모드 전환
- 헤더 아래 토글로 **KRW(원화)** / **USD(달러)** 모드 전환
- 모드별로 완전히 독립된 보유 현황 및 계산 흐름 유지

### 다크/라이트 테마
- 헤더 우상단 버튼으로 테마 전환
- 시스템 설정(prefers-color-scheme) 자동 감지로 초기 테마 결정
- 선택한 테마는 `localStorage`에 저장되어 새로고침 후에도 유지
- 다크모드 전용 CSS 변수 체계(`--card-border`, `--toggle-active-bg`, `--border-accent/danger/success`, `--info-text` 등)로 카드·버튼·뱃지·안내박스 색상이 다크 배경에 맞게 독립 적용됨

### 파비콘
- 파란 배경에 주가 하락 차트 + 노란 평균단가 점선 + 진입/현재가 표시 SVG 아이콘
- `src/app/icon.svg` (Next.js App Router 파일 기반 자동 등록)

---

## KRW(원화) 모드

### 보유 현황 입력
- 현재 평균 매수가(원), 보유 수량(주) 입력

### 탭 1 — 물타기 시뮬레이션
- 추가 매수 정보 입력 후 회차별 물타기 시뮬레이션
- **입력 방식 토글**: 수량 입력 / 금액 입력(원) 선택 가능
- 회차별 결과 테이블: 매수가, 수량, 투자금액, 누적 평균단가, 최초단가 대비 % 표시
- 요약 결과: 최종 평균단가, 평균단가 변화(금액 + %), 총 보유 수량, 총 투자금액
- 개별 회차 삭제 및 전체 초기화 지원

### 탭 2 — 목표단가 역산
- 원하는 평균단가에 도달하기 위해 필요한 추가 매수 수량·금액 역산
- 입력: 추가 매수 예정가(원), 목표 평균단가(원)
- 출력: 필요 추가 수량(주), 필요 추가 금액(원), 물타기 후 총 수량·총 투자금
- 목표 달성 검증값(실제 평균단가) 함께 표시
- 조건 오류 메시지 (추가 매수가 > 현재 평균단가 등)

### 탭 3 — 손익 현황
- 현재 주가(원) 입력 시 평가손익 계산
- 물타기 시뮬레이션 결과가 있으면 해당 평균단가 기준으로 계산
- 출력: 평균단가, 총 투자금액, 평가금액, 평가손익(원), 수익률(%)
- 수익 시: 평균단가 대비 현재가 상승률 표시
- 손실 시: 본전까지 필요 상승률 표시

---

## USD(달러) 모드

### 환율 카드
- 앱 진입 시 `open.er-api.com` API를 통해 USD/KRW 실시간 환율 자동 조회
- 환율 갱신 버튼으로 수동 재조회 가능
- 환율 직접 수정 입력 지원 (API 오류 또는 임의값 사용 시)
- 조회 상태 표시: 로딩 / 성공(마지막 업데이트 시각) / 오류

### 보유 현황 입력
- 현재 평균 매수가(USD), 보유 수량(주) 입력
- KRW 환산 금액 자동 표시

### 탭 1 — 달러 물타기 시뮬레이션
- KRW 모드와 동일한 시뮬레이션 구조
- **입력 방식 토글**: 수량 입력 / 금액 입력(USD) 선택 가능
- 결과 테이블에 투자금 USD / KRW 환산 동시 표시
- 요약 결과: 최종 평균단가(USD), 최종 평균단가(KRW), 총 투자금액(USD/KRW), 평균단가 변화

### 탭 2 — 목표단가 역산 (USD)
- KRW 모드와 동일한 역산 로직, USD 기준
- 필요 추가 금액을 USD / KRW 동시 표시
- 물타기 후 총 투자금액 USD / KRW 동시 표시

### 탭 3 — 달러 손익 현황
- 현재 주가(USD) 입력 시 평가손익 계산
- 출력: 기준 평균단가(USD), 총 투자금액(USD/KRW), 평가금액(USD/KRW), 평가손익(USD/KRW), 수익률(%)
- 수익 시: 평균단가 대비 현재가 상승률 표시
- 손실 시: 본전까지 필요 상승률 표시

---

## SEO / AdSense 관련

### 페이지 구성
- `/` — 메인 계산기
- `/about` — 서비스 소개 + 문의 + 면책조항
- `/privacy` — 개인정보처리방침 (Google AdSense 쿠키 고지 포함)

### 자동 생성 라우트
- `/sitemap.xml` — Next.js `src/app/sitemap.ts` 동적 생성
- `/robots.txt` — Next.js `src/app/robots.ts` 동적 생성

### Google AdSense 연동
- `layout.tsx`에 AdSense 스크립트(`next/script afterInteractive`) 삽입
- `<meta name="google-adsense-account">` 메타태그 자동 삽입
- 실제 게시자 ID 교체 방법:
  1. 환경변수 `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-실제ID` 설정
  2. 또는 `layout.tsx`의 `ADSENSE_CLIENT` 상수를 직접 수정
- 실제 도메인 반영: `NEXT_PUBLIC_BASE_URL=https://실제도메인.com` 설정

### Footer
- 모든 페이지 하단에 서비스 소개 · 개인정보처리방침 링크 노출
- 투자 면책조항 표시

## 기술 스택

| 항목 | 내용 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) |
| 언어 | TypeScript |
| 스타일 | CSS Variables (globals.css) |
| 상태관리 | React useState / Custom Hooks |
| 외부 API | open.er-api.com (환율 조회) |

---

## 파일 구조 요약

```
src/
├── app/
│   ├── page.tsx          # 루트 페이지 (통화 토글, 계산기 분기)
│   ├── layout.tsx        # 공통 레이아웃 (AdSense 스크립트, Footer 포함)
│   ├── globals.css       # 전역 스타일 / CSS 변수 / 다크 테마
│   ├── icon.svg          # 파비콘 (Next.js 자동 등록)
│   ├── robots.ts         # robots.txt 동적 생성
│   ├── sitemap.ts        # sitemap.xml 동적 생성
│   ├── about/
│   │   └── page.tsx      # 서비스 소개 + 문의 + 면책조항
│   └── privacy/
│       └── page.tsx      # 개인정보처리방침 (AdSense 쿠키 고지 포함)
├── types/
│   └── calculator.ts     # 공통 타입 정의 (Currency, Round, CalcResult 등)
├── lib/
│   ├── calc.ts           # 핵심 계산 로직 (평균단가, 역산 수량)
│   └── fmt.ts            # 숫자 포매터 (원화, USD, 퍼센트)
├── hooks/
│   ├── useTheme.ts       # 다크/라이트 테마 관리
│   └── useExchangeRate.ts # 환율 조회 및 상태 관리
└── components/
    ├── Header.tsx         # 헤더 + 테마 토글 버튼
    ├── Footer.tsx         # 공통 푸터 (소개/개인정보 링크, 면책조항)
    ├── CurrencyToggle.tsx # KRW/USD 모드 전환
    ├── ui/
    │   ├── TabBar.tsx     # 탭 네비게이션
    │   └── ToggleGroup.tsx # 입력 방식 선택 토글
    ├── krw/
    │   ├── KrwCalculator.tsx  # KRW 모드 루트
    │   ├── KrwHoldingCard.tsx # 보유 현황 입력
    │   ├── SimulationTab.tsx  # 물타기 시뮬레이션
    │   ├── ReverseTab.tsx     # 목표단가 역산
    │   └── PnlTab.tsx         # 손익 현황
    └── usd/
        ├── UsdCalculator.tsx  # USD 모드 루트
        ├── ExchangeRateCard.tsx # 환율 카드
        ├── UsdHoldingCard.tsx   # 보유 현황 입력 (USD)
        ├── DollarSimTab.tsx     # 달러 물타기 시뮬레이션
        ├── DollarRevTab.tsx     # 달러 목표단가 역산
        └── DollarPnlTab.tsx     # 달러 손익 현황
```
