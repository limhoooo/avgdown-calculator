import Link from 'next/link';

export default function MicronTechnologyInvestment() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          마이크론 테크놀로지(MU) 투자 분석: 미국 유일의 D램 대표주
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          마이크론 테크놀로지(Micron Technology, 나스닥: MU)는 삼성전자·SK하이닉스와 함께 글로벌 D램 3강을 형성하는 미국의 유일한 메모리 반도체 기업입니다.
          CHIPS Act 보조금 수혜와 HBM 시장 추격, 낸드 사업 구조조정 등 <strong>미국 반도체 투자를 고려하는 투자자라면 반드시 이해해야 할 기업</strong>입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 마이크론 기본 정보</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">설립·본사</span>
            <span className="tax-value">1978년, 미국 아이다호주 보이시</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">주요 제품</span>
            <span className="tax-value">D램(DRAM), 낸드(NAND), HBM, LPDDR</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">글로벌 D램 점유율</span>
            <span className="tax-value">약 22~25% (3위, 삼성·SK하이닉스에 이어)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">회계연도</span>
            <span className="tax-value">9월 마감 (FY 기준, 국내 기업과 다름)</span>
          </div>
        </div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          마이크론은 미국 내 유일한 D램 제조사라는 지정학적 위치 덕분에 <strong>미국 정부의 반도체 자국 생산 정책</strong>의 최대 수혜기업 중 하나로 꼽힙니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. CHIPS Act 보조금과 생산 확대</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>미국 정부 보조금 61억 달러 확보</strong>
              <p>2024년 미국 CHIPS Act를 통해 61억 달러(약 8조 원)의 직접 보조금을 받기로 했습니다. 아이다호·뉴욕주에 신규 팹 건설이 예정되어 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>일본 히로시마 팹 확장</strong>
              <p>일본 정부 지원을 받아 히로시마 팹을 증설 중입니다. LPDDR5X 및 차세대 D램 생산 능력을 강화하고 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>중장기 공급 능력 확대</strong>
              <p>2030년까지 미국 내 반도체 생산 능력을 대폭 확대하는 계획으로, 공급 증가가 가격에 미치는 영향도 고려해야 합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. HBM 시장 추격 현황</h2>
        <p className="privacy-text">마이크론은 SK하이닉스·삼성전자 대비 HBM 시장 진입이 늦었지만 빠른 속도로 따라붙고 있습니다.</p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">HBM3E 8단 양산</span>
            <span className="tax-value">2024년 엔비디아 H200에 공급 시작</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">HBM3E 12단</span>
            <span className="tax-value">경쟁사 대비 빠른 양산으로 점유율 확대 중</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">HBM4 개발</span>
            <span className="tax-value">TSMC와 협력해 선진 패키징 기술 적용 예정</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">HBM 수익성</span>
            <span className="tax-value">HBM 비중 증가 시 전사 마진 구조적 개선 기대</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 실적 변동성과 투자 주의사항</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>높은 실적 변동성</strong><br />
            메모리 반도체 사이클에 따라 영업이익이 수조 원 흑자에서 수조 원 적자로 급변합니다. 2023년 큰 적자를 기록한 뒤 2024년 급격히 회복된 바 있습니다.
          </div>
          <div className="info-box">
            <strong>낸드(NAND) 사업 부담</strong><br />
            마이크론은 D램 대비 낸드 비중이 높아 낸드 가격 하락 시 수익성 타격이 크게 옵니다. 낸드 사업의 수익성 개선 여부를 함께 확인해야 합니다.
          </div>
          <div className="tax-success-box">
            <strong>중국 리스크</strong><br />
            중국 정부가 마이크론 제품 일부에 사용 제한 조치를 취한 바 있습니다. 중국 매출 비중 감소에 따른 영향을 고려해야 합니다.
          </div>
          <div className="info-box">
            <strong>달러 기반 투자</strong><br />
            나스닥 상장 주식이므로 원달러 환율 변동이 수익률에 영향을 줍니다. 환헤지 여부를 결정하고 투자하는 것이 좋습니다.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 마이크론 투자 지표 체크리스트</h2>
        <ul className="privacy-list">
          <li>분기 실적: <strong>비트 성장률(bit growth)과 평균판매가(ASP)</strong> 추이</li>
          <li>가이던스: 다음 분기 매출·마진 전망이 시장 예상치를 상회하는지 여부</li>
          <li>재고 수준: 마이크론 채널 재고 증감 (재고 증가 = 가격 하락 선행 신호)</li>
          <li>HBM 출하량 및 엔비디아·AMD GPU 출하 계획</li>
          <li>미국 CHIPS Act 집행 일정 및 추가 정책 지원 내용</li>
        </ul>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          마이크론 실적 발표 주기: 분기별 (3·6·9·12월 말 마감 기준, 익월 발표)
        </div>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 공개된 정보를 바탕으로 작성된 교육 자료이며, 특정 주식의 매수·매도를 권유하지 않습니다.</p>
          <p>해외주식 투자 시 환율 리스크와 양도소득세 신고 의무가 있습니다. 전문가 상담을 권장합니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/us-stocks"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          미국 주식 수익률 계산기 →
        </Link>
      </div>
    </>
  );
}
