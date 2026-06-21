import Link from 'next/link';

export default function SemiconductorEtfGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          반도체 ETF 투자 가이드: 국내·미국 주요 ETF 비교와 선택법
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          삼성전자·SK하이닉스·마이크론 같은 개별 반도체 주식은 종목 선택 리스크가 큽니다.
          반도체 ETF는 여러 종목에 분산 투자하면서 업황 사이클 수혜를 받는 방법입니다.
          <strong>국내 상장 반도체 ETF와 미국 상장 ETF의 특징과 차이</strong>를 비교합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 반도체 ETF 투자의 장단점</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>장점: 분산 효과</strong><br />
            삼성전자가 부진해도 SK하이닉스가 선방하면 전체 손실을 줄일 수 있습니다. 반도체 산업 전체에 베팅하는 효과입니다.
          </div>
          <div className="tax-success-box">
            <strong>장점: 종목 분석 부담 감소</strong><br />
            개별 기업 실적·기술 분석 없이 업황 방향성만 보고 투자할 수 있어 진입 장벽이 낮습니다.
          </div>
          <div className="info-box">
            <strong>단점: 집중 수익 기회 제한</strong><br />
            HBM 테마로 SK하이닉스가 독주할 때, ETF는 상승폭이 희석됩니다. 개별 종목 대비 알파 수익은 제한됩니다.
          </div>
          <div className="info-box">
            <strong>단점: 운용 보수</strong><br />
            ETF는 연간 운용 보수(TER)가 있어 장기 보유 시 수익률에 영향을 줍니다. 보수율 확인이 중요합니다.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 국내 상장 반도체 ETF 주요 상품</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">KODEX 반도체</span>
            <span className="tax-value">KRX 반도체 지수 추종, 삼성전자·SK하이닉스 등 국내 주식</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">TIGER 반도체</span>
            <span className="tax-value">KRX 반도체 지수 추종, KODEX와 유사한 구성</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">TIGER 미국필라델피아반도체나스닥</span>
            <span className="tax-value">미국 SOX 지수 추종, 엔비디아·TSMC·마이크론 포함</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">KODEX 미국반도체MV</span>
            <span className="tax-value">미국 반도체 기업 추종, 원화 투자로 환전 불필요</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">세금 처리</span>
            <span className="tax-value">국내 ETF: 매매차익 비과세 (단, 배당소득세 15.4%)</span>
          </div>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          ⚠️ 국내 상장 미국 반도체 ETF는 환율 변동 리스크가 있습니다(원화 매수이나 기초자산이 달러). 환헤지 여부를 상품 명칭에서 확인하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 미국 상장 반도체 ETF 주요 상품</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">SOXX (iShares)</span>
            <span className="tax-value">필라델피아 반도체 지수(SOX) 추종, 30개 종목</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">SMH (VanEck)</span>
            <span className="tax-value">글로벌 반도체 25개 대형주, 거래량 가장 많음</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">SOXL (Direxion)</span>
            <span className="tax-value">SOX 3배 레버리지, 단기 트레이딩용 — 장기 보유 비추천</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">세금 처리</span>
            <span className="tax-value">해외 ETF 매도차익: 양도소득세 22%, 연 250만원 공제</span>
          </div>
        </div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>SMH는 TSMC 비중이 높아 파운드리·AI 반도체 설계 분야에 넓게 분산됩니다.</li>
          <li>SOXX는 TSMC 비중 제한(5%)으로 팹리스(설계) 비중이 상대적으로 높습니다.</li>
          <li>미국 ETF는 증권사 해외주식 계좌를 별도로 개설하거나 MTS에서 직접 매수합니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 국내 ETF vs 미국 ETF 비교</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">투자 편의성</span>
            <span className="tax-value">국내 ETF 유리 (원화 매수, 홈트레이딩 간편)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">세금</span>
            <span className="tax-value">국내 ETF: 배당소득세 / 미국 ETF: 양도소득세 22%</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">구성 종목</span>
            <span className="tax-value">국내 ETF: 국내 반도체 주 / 미국 ETF: 글로벌 반도체</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">운용 보수</span>
            <span className="tax-value">미국 ETF가 일반적으로 낮음 (SOXX: 0.35%, SMH: 0.35%)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">손실 공제</span>
            <span className="tax-value">미국 ETF: 손실 종목과 상계 가능 (국내는 분리과세)</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. ETF 선택 시 체크리스트</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>국내 반도체 집중 vs 글로벌 반도체 분산</strong>
              <p>삼성전자·SK하이닉스에 집중 베팅하고 싶다면 KODEX/TIGER 반도체. 엔비디아·TSMC까지 포함하려면 미국 SOX 추종 ETF를 선택하세요.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>레버리지 ETF는 단기 트레이딩용</strong>
              <p>SOXL(3배 레버리지) 등 레버리지 ETF는 변동성 감소 효과(Volatility Decay)로 장기 보유 시 수익률이 기대치보다 낮아집니다. 단기 이외에는 권장하지 않습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>세금과 환율을 동시에 고려</strong>
              <p>미국 ETF 매도 차익에 대한 양도소득세 신고를 잊지 마세요. 국내 상장 미국 반도체 ETF는 환헤지 여부를 확인해야 합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 공개된 정보를 바탕으로 작성된 교육 자료이며, 특정 ETF·상품의 매수·매도를 권유하지 않습니다.</p>
          <p>ETF 구성 종목·보수율은 변경될 수 있으며, 투자 전 해당 ETF의 투자설명서를 반드시 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/us-stocks"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          미국 주식·ETF 수익률 계산기 →
        </Link>
      </div>
    </>
  );
}
