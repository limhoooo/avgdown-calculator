import Link from 'next/link';

export default function OverseasStockTaxGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          해외주식 양도소득세 신고 방법과 절세 전략
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          미국 주식, ETF 등 해외주식을 매도해 수익이 났다면 <strong>양도소득세를 직접 신고·납부</strong>해야 합니다.
          국내 주식과 달리 증권사가 대신 처리해주지 않아 많은 투자자들이 놓치는 의무입니다.
          신고 시기부터 계산법, 절세 전략까지 한 번에 정리합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 해외주식 양도소득세 기본 구조</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">과세 대상</span>
            <span className="tax-value">해외 상장주식 매도 차익</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">기본공제</span>
            <span className="tax-value">연간 250만원</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">세율</span>
            <span className="tax-value">22% (소득세 20% + 지방소득세 2%)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">신고·납부 시기</span>
            <span className="tax-value">매년 5월 (전년도 분)</span>
          </div>
        </div>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          납부세액 = (양도차익 − 250만원) × 22%
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 양도차익 계산 방법</h2>
        <p className="privacy-text">
          양도차익은 단순히 매도가 − 매수가가 아닙니다. <strong>원화 환산 기준</strong>으로 계산하며 필요경비를 공제할 수 있습니다.
        </p>
        <div className="guide-formula">양도차익 = 매도금액 − 취득금액 − 필요경비</div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li><strong>매도금액</strong> — 매도일 기준 원화 환산액 (매도 당일 기준환율 적용)</li>
          <li><strong>취득금액</strong> — 매수일 기준 원화 환산액 (매수 당일 기준환율 적용)</li>
          <li><strong>필요경비</strong> — 매매 수수료, 증권거래세 등 (증권사 거래내역서 확인)</li>
          <li>동일 종목을 여러 번 매수했다면 <strong>선입선출(FIFO)</strong> 방식으로 취득단가를 계산합니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 신고 방법</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>증권사 거래내역서 수령</strong>
              <p>매년 1~2월 중 이용 중인 증권사 앱·홈페이지에서 전년도 해외주식 거래내역서를 발급받습니다. 일부 증권사는 양도소득세 계산 서비스를 제공합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>홈택스에서 신고</strong>
              <p>국세청 홈택스(hometax.go.kr) → 세금신고 → 양도소득세 신고 메뉴에서 직접 입력합니다. 5월 1일~31일이 신고 기간입니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>세액 납부</strong>
              <p>신고 후 계산된 세액을 홈택스에서 바로 납부하거나 가상계좌로 이체합니다.</p>
            </div>
          </li>
        </ul>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          ⚠️ 무신고 시 납부세액의 20%, 과소신고 시 10%의 가산세가 부과됩니다. 기한을 꼭 지키세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 절세 전략</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>기본공제 250만원 활용</strong><br />
            연간 양도차익이 250만원 이하라면 세금이 0원입니다. 수익 실현 시기를 조절해 해마다 250만원씩 분산 매도하면 절세 효과가 있습니다.
          </div>
          <div className="info-box">
            <strong>손실 종목과 상계</strong><br />
            같은 해에 수익 종목과 손실 종목을 함께 정리하면 손익을 통산해 과세표준을 낮출 수 있습니다. 연말에 보유 종목의 손익 현황을 점검하세요.
          </div>
          <div className="tax-success-box">
            <strong>배우자·가족과 분산</strong><br />
            배우자나 가족이 각자 계좌에서 해외주식을 거래하면 각자 250만원씩 기본공제를 받을 수 있습니다.
          </div>
          <div className="info-box">
            <strong>ISA 계좌 활용</strong><br />
            ISA(개인종합자산관리계좌) 내에서 해외 ETF 거래 시 비과세 혜택(200만원, 서민형 400만원)을 받을 수 있습니다. 단, 해외 직접투자는 불가합니다.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 자주 묻는 질문</h2>
        <ul className="privacy-list">
          <li>
            <strong>미국 주식 배당금도 신고해야 하나요?</strong><br />
            배당금은 양도소득세가 아닌 배당소득세(15.4%) 대상으로, 증권사가 원천징수합니다. 별도 신고는 불필요합니다(금융소득 2,000만원 초과 시 종합소득세 신고 필요).
          </li>
          <li>
            <strong>환차익도 과세되나요?</strong><br />
            해외주식 매도 시 환율 차이는 양도차익 계산에 자동 반영됩니다. 별도 환차익 과세는 없습니다.
          </li>
          <li>
            <strong>해외 ETF도 동일하게 신고하나요?</strong><br />
            국내 증권사를 통해 거래한 해외 상장 ETF는 동일하게 연 250만원 공제, 22% 세율이 적용됩니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 2025년 기준 세법을 참고한 교육 자료이며, 세무 조언을 제공하지 않습니다.</p>
          <p>실제 신고 전 국세청 홈택스 안내 또는 세무사 상담을 통해 정확한 세액을 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/stock-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          해외주식 양도소득세 계산기 →
        </Link>
      </div>
    </>
  );
}
