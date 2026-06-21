import Link from 'next/link';

export default function JongbuTaxGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          종합부동산세(종부세) 완벽 가이드: 계산부터 절세까지
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          종합부동산세는 일정 기준을 넘는 부동산을 보유한 사람에게 부과되는 국세입니다.
          "나는 종부세 대상일까?" "종부세가 얼마나 나올까?" 계산 기준부터 절세 방법까지 핵심만 정리합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 종부세란?</h2>
        <p className="privacy-text">
          종합부동산세는 <strong>매년 6월 1일 기준</strong>으로 보유 부동산의 공시가격 합산액이 기준금액을 초과할 때 부과되는 세금입니다.
          재산세와 별도로 부과되며, <strong>매년 12월</strong>에 국세청에서 고지서를 발송합니다.
        </p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">과세 기준일</span>
            <span className="tax-value">매년 6월 1일 소유자</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">납부 시기</span>
            <span className="tax-value">매년 12월 1~15일</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">주택 기본공제 (일반)</span>
            <span className="tax-value">9억원</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">1세대 1주택 기본공제</span>
            <span className="tax-value">12억원</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 종부세 계산 구조</h2>
        <div className="guide-formula">과세표준 = (공시가격 합산 − 기본공제액) × 공정시장가액비율(60%)</div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          과세표준에 주택 수와 구간별 세율을 적용한 뒤, 이미 납부한 재산세를 공제합니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>과세표준</th>
                <th>일반 (2주택 이하)</th>
                <th>3주택 이상·조정 2주택</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>3억원 이하</td><td>0.5%</td><td>0.5%</td></tr>
              <tr><td>3~6억원</td><td>0.7%</td><td>0.7%</td></tr>
              <tr><td>6~12억원</td><td>1.0%</td><td>1.0%</td></tr>
              <tr><td>12~25억원</td><td>1.3%</td><td>2.0%</td></tr>
              <tr><td>25~50억원</td><td>1.5%</td><td>3.0%</td></tr>
              <tr><td>50~94억원</td><td>2.0%</td><td>4.0%</td></tr>
              <tr><td>94억원 초과</td><td>2.7%</td><td>5.0%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          산출세액에서 재산세 납부액을 공제하고, 농어촌특별세(종부세의 20%)가 추가됩니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 1세대 1주택자 특별 혜택</h2>
        <ul className="privacy-list">
          <li>
            <strong>기본공제 12억원</strong> (일반 9억원보다 3억원 추가 공제)<br />
            공시가격 12억원 이하 1주택자는 종부세 납부 대상이 아닙니다.
          </li>
          <li>
            <strong>고령자 세액공제</strong><br />
            만 60세 이상: 20%, 만 65세 이상: 30%, 만 70세 이상: 40% 공제
          </li>
          <li>
            <strong>장기보유 세액공제</strong><br />
            5년 이상: 20%, 10년 이상: 40%, 15년 이상: 50% 공제
          </li>
          <li>
            <strong>고령자 + 장기보유 합산 공제 한도: 80%</strong>
          </li>
        </ul>
        <div className="info-box" style={{ marginTop: '12px' }}>
          1세대 1주택자이고 공시가격 12억원 이하라면 종부세 납부 의무가 없습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 종부세 절세 포인트</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>6월 1일 전 매도</strong><br />
            매도 예정이라면 6월 1일 이전에 잔금을 완료하면 해당 연도 종부세를 피할 수 있습니다. 반대로 매수는 6월 2일 이후가 유리합니다.
          </div>
          <div className="info-box">
            <strong>1세대 1주택 요건 유지</strong><br />
            일시적 2주택(이사·상속 등)은 요건 충족 시 1주택자로 인정받아 12억원 공제를 유지할 수 있습니다.
          </div>
          <div className="tax-success-box">
            <strong>장기 보유 계획 세우기</strong><br />
            장기보유 세액공제는 15년 이상이면 50%까지 공제됩니다. 고령자 공제와 합산하면 최대 80%까지 절세 가능합니다.
          </div>
          <div className="info-box">
            <strong>공시가격 이의신청</strong><br />
            공시가격이 실거래가나 시세 대비 과도하게 높게 책정됐다면 이의신청을 통해 조정받을 수 있습니다. 매년 4~5월 공시가격 열람 기간을 활용하세요.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 재산세와 종부세 차이</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>항목</th>
                <th>재산세</th>
                <th>종합부동산세</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>과세 주체</td><td>지방세 (시·군·구)</td><td>국세 (국세청)</td></tr>
              <tr><td>납부 시기</td><td>7월, 9월</td><td>12월</td></tr>
              <tr><td>대상</td><td>모든 부동산 소유자</td><td>기준 초과자만</td></tr>
              <tr><td>기준</td><td>개별 물건별</td><td>인별 합산</td></tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          재산세는 종부세 계산 시 공제되므로 이중과세는 아닙니다. 총 보유세 = 재산세 + 종부세(있는 경우)입니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 2025년 기준 세법을 참고한 교육 자료이며, 세무 조언을 제공하지 않습니다.</p>
          <p>세법은 매년 개정될 수 있으므로 실제 납부 전 국세청 또는 세무사 상담을 통해 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/holding-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          보유세 계산기 바로 사용하기 →
        </Link>
      </div>
    </>
  );
}
