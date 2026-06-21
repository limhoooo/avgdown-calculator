import Link from 'next/link';

export default function SamsungStockAnalysis() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          삼성전자 주식 완전 분석: 사업 구조·배당·반도체 사이클
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          삼성전자(005930)는 시가총액 기준 국내 1위 기업이자 글로벌 반도체·스마트폰 시장의 핵심 플레이어입니다.
          하지만 "삼성전자는 무조건 오른다"는 막연한 믿음만으로 투자했다가 손실을 보는 경우도 많습니다.
          사업 구조부터 배당 이력, 반도체 사이클 연동까지 <strong>투자 판단에 필요한 핵심 정보를 정리</strong>합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 삼성전자 사업 구조 한눈에</h2>
        <p className="privacy-text">삼성전자는 크게 세 개 부문으로 나뉩니다. 매출 비중과 이익 기여도가 다르므로 구분해서 이해해야 합니다.</p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">DS (반도체)</span>
            <span className="tax-value">D램·낸드·파운드리 — 영업이익의 핵심</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">MX (모바일·네트워크)</span>
            <span className="tax-value">갤럭시 스마트폰·태블릿·웨어러블</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">VD/DA (가전)</span>
            <span className="tax-value">TV·냉장고·세탁기 등 생활가전</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">수익 구조 핵심</span>
            <span className="tax-value">반도체(DS) 부문이 호황 때 전사 이익의 70% 이상 담당</span>
          </div>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          ⚠️ 반도체 업황이 나쁠 때 삼성전자 주가가 크게 빠지는 이유가 여기 있습니다. DS 부문의 적자가 전체 실적을 끌어내립니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 반도체 사이클과 삼성전자 주가 연동</h2>
        <p className="privacy-text">
          반도체는 <strong>공급 과잉 → 가격 하락 → 감산 → 공급 부족 → 가격 상승</strong>의 사이클을 반복합니다.
          삼성전자 주가는 이 사이클의 선행지표 역할을 합니다.
        </p>
        <ul className="privacy-list">
          <li><strong>업황 피크 신호</strong> — D램 현물가 하락 전환, 재고 증가, 고객사 주문 감소</li>
          <li><strong>저점 신호</strong> — 주요 업체 감산 발표, 재고 소진, 현물가 반등 시작</li>
          <li><strong>주가 선행</strong> — 실적 개선보다 3~6개월 먼저 주가가 움직이는 경향</li>
          <li><strong>AI 수요 변수</strong> — HBM(고대역폭메모리) 수요로 전통 D램 사이클과 다른 흐름도 발생</li>
        </ul>
        <div className="guide-formula">
          투자 관전 포인트: D램 현물가(DRAMeXchange) + 삼성 재고자산 추이 + DS 부문 영업이익률
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 배당 현황과 주주환원 정책</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">배당 기준일</span>
            <span className="tax-value">12월 31일 (보통주·우선주 동일)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">배당 지급일</span>
            <span className="tax-value">익년 4월 (중간배당 8월)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">2024년 연간 배당금</span>
            <span className="tax-value">보통주 기준 약 1,444원 (특별배당 포함)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">배당수익률</span>
            <span className="tax-value">주가 수준에 따라 2~4% 내외</span>
          </div>
        </div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>삼성전자는 <strong>3개년 주주환원 계획</strong>을 공시하며 배당 예측 가능성을 높이고 있습니다.</li>
          <li>우선주(005935)는 보통주보다 배당이 약간 높고 의결권이 없는 대신 할인 거래됩니다.</li>
          <li>실적이 나쁜 해에도 최소 배당을 유지하는 경향이 있어 배당 안정성이 높은 편입니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 투자 시 체크해야 할 핵심 지표</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>PBR(주가순자산비율)</strong><br />
            삼성전자는 역사적으로 PBR 1~1.5배 구간에서 저점 형성, 2배 이상에서 고점 형성하는 경향. 업황 악화 시 PBR 1배 이하도 가능.
          </div>
          <div className="info-box">
            <strong>DS 부문 영업이익률</strong><br />
            분기 실적 발표 시 DS 부문 이익률이 플러스로 전환하는 시점이 주가 반등의 핵심 트리거입니다.
          </div>
          <div className="tax-success-box">
            <strong>파운드리 수율·고객 확보</strong><br />
            TSMC와의 파운드리 격차가 중요한 관전 포인트. 엔비디아·퀄컴 등 주요 고객 수주 여부를 확인하세요.
          </div>
          <div className="info-box">
            <strong>HBM 공급 현황</strong><br />
            AI 가속기 시장에서 HBM3E 공급 비중이 늘수록 삼성전자 DS 부문 수익성이 개선됩니다. 엔비디아 HBM 퀄 통과 여부가 핵심 이벤트.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 삼성전자 투자 시 주의사항</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>분할 매수 전략</strong>
              <p>반도체 사이클의 바닥을 정확히 맞추기 어렵습니다. 일정 구간에서 나눠 매수해 평단가를 낮추는 방식이 유효합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>외국인 수급 확인</strong>
              <p>삼성전자는 외국인 지분율이 50% 내외로 높아 원달러 환율과 글로벌 증시 영향을 크게 받습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>장기 보유 전제</strong>
              <p>단기 트레이딩보다 업황 저점 매수 후 업황 회복까지 기다리는 중장기 전략이 유리한 종목입니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 공개된 정보를 바탕으로 작성된 교육 자료이며, 특정 주식의 매수·매도를 권유하지 않습니다.</p>
          <p>투자 판단은 본인 책임 하에 이루어져야 하며, 전문 투자 상담사와 상의하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/avgdown"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          삼성전자 평단가 계산기 →
        </Link>
      </div>
    </>
  );
}
