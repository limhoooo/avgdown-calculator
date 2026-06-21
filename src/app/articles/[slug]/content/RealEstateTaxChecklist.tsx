import Link from 'next/link';

export default function RealEstateTaxChecklist() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          부동산 세금 완전 정리: 취득·보유·양도세 한눈에
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          부동산을 거래할 때 가장 복잡하고 금액이 큰 것이 바로 세금입니다.
          사는 순간부터 파는 날까지 어떤 세금이 언제 발생하는지, 단계별로 정리했습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1단계. 취득 시 — 취득세</h2>
        <p className="privacy-text">
          부동산을 취득(매매, 증여, 상속 등)할 때 납부하는 지방세입니다.
          잔금 지급일 또는 등기일 중 빠른 날로부터 <strong>60일 이내</strong>에 신고·납부해야 합니다.
        </p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">1주택 (6억원 이하)</span>
            <span className="tax-value">1%</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">1주택 (6~9억원)</span>
            <span className="tax-value">1~3% (구간별)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">1주택 (9억원 초과)</span>
            <span className="tax-value">3%</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">2주택 (조정지역)</span>
            <span className="tax-value">8%</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">3주택 이상 / 법인</span>
            <span className="tax-value">12%</span>
          </div>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          취득세에는 농어촌특별세(0.2%)와 지방교육세(0.1~0.4%)가 추가로 붙습니다.
          생애최초 주택 구입 시 최대 200만원 감면 혜택이 적용될 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2단계. 보유 기간 — 재산세 + 종합부동산세</h2>
        <p className="privacy-text">
          부동산을 보유하는 동안 매년 납부하는 세금입니다. <strong>6월 1일 기준</strong> 소유자에게 과세됩니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>재산세</strong> — 모든 부동산 소유자에게 부과. 7월(건물), 9월(토지) 두 차례 납부.
            공시가격 × 공정시장가액비율(60%) 기준으로 0.1~0.4% 세율 적용.
          </li>
          <li>
            <strong>종합부동산세(종부세)</strong> — 주택 공시가격 합산이 9억원(1세대 1주택 12억원) 초과 시 추가 부과.
            12월에 일괄 납부. 보유 기간·연령에 따른 공제 혜택 있음.
          </li>
        </ul>
        <div className="info-box" style={{ marginTop: '12px' }}>
          1세대 1주택자이고 공시가격이 9억원 이하라면 종부세 대상이 아닙니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3단계. 매도 시 — 양도소득세</h2>
        <p className="privacy-text">
          부동산을 팔아 이익이 생겼을 때 납부하는 세금입니다. <strong>양도차익 = 매도가 − 취득가 − 필요경비</strong>에 세율을 적용합니다.
        </p>
        <ul className="privacy-list">
          <li><strong>1세대 1주택 비과세</strong> — 2년 이상 보유(조정지역은 2년 거주 추가) 시 12억원까지 비과세</li>
          <li><strong>장기보유특별공제</strong> — 3년 이상 보유 시 보유 기간에 따라 최대 80% 공제</li>
          <li><strong>기본세율</strong> — 과세표준 구간별 6~45% 누진세율 (2년 이상 보유 기준)</li>
          <li><strong>단기 양도 중과</strong> — 1년 미만 보유 70%, 1~2년 미만 60% 단일세율</li>
          <li><strong>다주택자 중과</strong> — 조정지역 내 2주택 +20%p, 3주택 이상 +30%p 가산</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 절세 포인트 요약</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>취득세 절감</strong><br />
            생애최초 주택 취득세 감면 대상 여부 확인. 주택 수·조정지역 여부에 따라 세율이 크게 달라지므로 취득 전 사전 계산 필수.
          </div>
          <div className="info-box">
            <strong>보유세 절감</strong><br />
            6월 1일 이전 매도 시 해당 연도 재산세·종부세 면제. 장기 보유 시 종부세 세액공제(최대 80%) 활용.
          </div>
          <div className="tax-success-box">
            <strong>양도세 절감</strong><br />
            1세대 1주택 비과세 요건(2년 보유·거주) 충족 후 매도. 장기보유특별공제 요건 확인. 필요경비(취득세, 중개수수료, 인테리어 비용 등) 빠짐없이 공제.
          </div>
        </div>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 2025년 기준 세법을 참고하여 작성된 교육 자료입니다. 세법은 자주 개정되므로 실제 납부 전 국세청 또는 세무사 상담을 통해 정확한 세액을 확인하시기 바랍니다.</p>
          <p>본 내용은 투자 조언 또는 세무 조언을 제공하지 않습니다.</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
        <Link
          href="/acquisition-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 24px', textDecoration: 'none' }}
        >
          취득세 계산기 →
        </Link>
        <Link
          href="/holding-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 24px', textDecoration: 'none', background: 'var(--success)' }}
        >
          보유세 계산기 →
        </Link>
        <Link
          href="/realestate-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 24px', textDecoration: 'none', background: '#9333ea' }}
        >
          양도소득세 계산기 →
        </Link>
      </div>
    </>
  );
}
