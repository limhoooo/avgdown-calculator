import Link from 'next/link';

export default function SemiconductorCycleStrategy() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          반도체 업황 사이클 완전 분석: 저점 매수·고점 매도 타이밍 잡는 법
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          삼성전자·SK하이닉스·마이크론 같은 메모리 반도체 주식은 <strong>업황 사이클에 따라 주가가 2~3배씩 오르내리는</strong> 특성이 있습니다.
          업황 사이클의 구조를 이해하고, 어떤 지표를 보면서 타이밍을 잡아야 하는지 투자자 관점에서 정리합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 반도체 사이클의 4단계</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>① 회복기 (Recovery)</strong><br />
            재고 소진, 현물가 반등 시작, 업체 감산 효과 가시화. 주가는 실적 개선 전에 먼저 오르기 시작합니다.
          </div>
          <div className="info-box">
            <strong>② 호황기 (Boom)</strong><br />
            공급 부족으로 가격 급등, 업체 실적 대폭 개선, 시설투자 집중. 주가가 고점을 향해 달립니다.
          </div>
          <div className="tax-success-box">
            <strong>③ 조정기 (Correction)</strong><br />
            시설투자 확대로 공급 증가, 수요 증가 속도 둔화. 가격이 꺾이기 시작하고 주가는 이미 하락 중입니다.
          </div>
          <div className="guide-warning-box">
            <strong>④ 침체기 (Downturn)</strong><br />
            공급 과잉으로 가격 급락, 업체 적자 전환, 감산 발표 잇따름. 주가 바닥권이지만 투자 심리는 최악입니다.
          </div>
        </div>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          사이클 전체 기간: 평균 3~5년 (D램 기준, AI 수요 등장으로 주기 변동 가능)
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 업황 판단을 위한 핵심 지표</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>D램 현물가 (Spot Price)</strong>
              <p>DRAMeXchange(트렌드포스)에서 실시간 확인 가능. 현물가 상승 전환이 업황 회복의 첫 신호입니다. 고정거래가보다 현물가가 먼저 움직입니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>주요 업체 재고 수준</strong>
              <p>삼성전자·SK하이닉스 분기 실적에서 재고자산 추이를 확인합니다. 재고 감소 = 수요 회복 신호입니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>시설투자(CAPEX) 방향</strong>
              <p>업체들이 CAPEX를 줄이기 시작하면 공급 증가 속도가 꺾입니다. CAPEX 삭감 발표가 반등 신호가 될 수 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">④</span>
            <div>
              <strong>PC·스마트폰·서버 출하량 전망</strong>
              <p>IDC, 가트너 등의 분기별 출하량 전망치 변화가 메모리 수요 방향을 보여줍니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. AI 수요가 바꾼 사이클의 특성</h2>
        <p className="privacy-text">
          2023년 이후 AI 서버용 HBM 수요가 급증하면서 전통적인 반도체 사이클의 패턴이 일부 달라졌습니다.
        </p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">전통 D램 사이클</span>
            <span className="tax-value">PC·스마트폰 수요에 연동, 3~4년 주기</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">AI HBM 수요</span>
            <span className="tax-value">GPU 출하량에 연동, 빅테크 CAPEX가 핵심</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">낸드 사이클</span>
            <span className="tax-value">D램보다 변동성 크고 수익성 낮은 경향</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">2024~2025 특징</span>
            <span className="tax-value">HBM 공급 부족 + 일반 D램 공급 과잉 이중 구조</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 사이클에 따른 투자 전략</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>침체기 후반 ~ 회복기 초반 분할 매수</strong><br />
            현물가 하락이 멈추고, 업체들의 감산 발표가 잇따를 때 서서히 매수 비중을 늘립니다. 한 번에 몰빵하기보다 3~6개월에 걸쳐 분할 진입이 유리합니다.
          </div>
          <div className="info-box">
            <strong>호황기 후반 분할 매도</strong><br />
            D램 현물가가 고점 대비 하락 전환하거나, 업체들이 CAPEX를 대폭 늘린다는 발표가 나오면 수익 실현을 고려합니다.
          </div>
          <div className="tax-success-box">
            <strong>반도체 ETF 활용</strong><br />
            개별 종목 선택이 어렵다면 KODEX 반도체, TIGER 미국필라델피아반도체나스닥 등 ETF를 통해 사이클 전체에 분산 투자하는 방법도 있습니다.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 사이클 파악을 위한 자료 소스</h2>
        <ul className="privacy-list">
          <li><strong>트렌드포스(TrendForce)</strong> — D램·낸드 현물가, 고정거래가, 공급업체 점유율 리포트</li>
          <li><strong>삼성전자·SK하이닉스·마이크론 분기 실적 발표</strong> — 재고, CAPEX, 출하 가이던스</li>
          <li><strong>엔비디아 실적 발표</strong> — AI GPU 출하량, 데이터센터 매출로 HBM 수요 가늠</li>
          <li><strong>IDC·가트너 보고서</strong> — PC·스마트폰·서버 출하량 분기 전망</li>
          <li><strong>미국 필라델피아 반도체 지수(SOX)</strong> — 반도체 섹터 전반 투자 심리 지표</li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 공개된 정보를 바탕으로 작성된 교육 자료이며, 특정 주식의 매수·매도를 권유하지 않습니다.</p>
          <p>과거 사이클 패턴이 미래를 보장하지 않습니다. 투자 판단은 반드시 본인의 판단과 책임 하에 이루어져야 합니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/avgdown"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          반도체 주식 평단가 계산기 →
        </Link>
      </div>
    </>
  );
}
