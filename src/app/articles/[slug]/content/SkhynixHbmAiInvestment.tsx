import Link from 'next/link';

export default function SkhynixHbmAiInvestment() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          SK하이닉스 HBM 투자 포인트: AI 반도체 시대의 최대 수혜주
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          SK하이닉스(000660)는 HBM(고대역폭메모리) 시장에서 엔비디아의 핵심 공급사로 자리잡으며 AI 반도체 붐의 최대 수혜주로 떠올랐습니다.
          HBM이 무엇인지, SK하이닉스가 왜 경쟁사보다 앞서 있는지, <strong>투자자 관점에서 꼭 알아야 할 핵심을 정리</strong>합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. HBM(고대역폭메모리)이란?</h2>
        <p className="privacy-text">
          HBM은 D램 칩을 수직으로 쌓아 올려(TSV 공정) 한 번에 대용량 데이터를 처리할 수 있도록 만든 고성능 메모리입니다.
          AI 모델 학습·추론에서 GPU가 초당 수 테라바이트의 데이터를 처리해야 하기 때문에 <strong>기존 D램으로는 속도 한계</strong>가 있습니다.
        </p>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">HBM vs 일반 D램</span>
            <span className="tax-value">대역폭 최대 10~15배, 소비전력 절감</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">주요 탑재 제품</span>
            <span className="tax-value">엔비디아 H100/H200/B200 GPU</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">HBM 세대</span>
            <span className="tax-value">HBM2E → HBM3 → HBM3E → HBM4(개발 중)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">SK하이닉스 점유율</span>
            <span className="tax-value">HBM 시장 50% 이상 (2024년 기준 선두)</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. SK하이닉스가 HBM에서 앞선 이유</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>엔비디아와의 조기 협력</strong>
              <p>2021년부터 엔비디아와 긴밀히 협력하며 HBM3를 선제적으로 양산, 경쟁사보다 1~2세대 앞선 공급을 시작했습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>TSV(실리콘 관통 전극) 공정 기술력</strong>
              <p>HBM은 칩을 수천 개의 미세 구멍으로 연결하는 TSV 기술이 핵심입니다. SK하이닉스는 이 공정의 수율과 품질에서 우위를 점하고 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>MR-MUF 패키징 기술</strong>
              <p>독자 개발한 열 관리 소재 기술로 발열 문제를 해결, 고성능 AI 칩에 적합한 안정성을 확보했습니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 실적 구조와 투자 포인트</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">HBM 평균판매가(ASP)</span>
            <span className="tax-value">일반 D램 대비 5~8배 높은 수준</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">HBM 매출 비중</span>
            <span className="tax-value">2024년 기준 전체 D램 매출의 30% 이상</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">영업이익률</span>
            <span className="tax-value">HBM 비중 증가에 따라 구조적 개선 중</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">HBM4 전환</span>
            <span className="tax-value">2025~2026년 HBM4 양산이 차세대 성장 동력</span>
          </div>
        </div>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          핵심 관전 지표: HBM 출하량(GB) + HBM ASP 추이 + 엔비디아 GPU 출하 가이던스
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 리스크 요인</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="guide-warning-box">
            <strong>⚠️ 삼성전자·마이크론의 추격</strong><br />
            삼성전자와 마이크론 모두 HBM3E 퀄 통과 후 점유율 회복을 노리고 있습니다. 독주 체제가 얼마나 유지될지가 관건입니다.
          </div>
          <div className="guide-warning-box">
            <strong>⚠️ AI 설비투자(CAPEX) 감소 우려</strong><br />
            빅테크의 AI 투자 속도가 둔화되면 HBM 수요도 타격을 받습니다. 마이크로소프트·구글·아마존의 GPU 투자 계획을 모니터링해야 합니다.
          </div>
          <div className="guide-warning-box">
            <strong>⚠️ 미·중 반도체 수출 규제</strong><br />
            대중국 HBM 수출 규제 강화 시 중국 시장 매출이 제한됩니다. 미국 수출 통제 정책 변화에 주의가 필요합니다.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. SK하이닉스 투자 체크리스트</h2>
        <ul className="privacy-list">
          <li>분기 실적 발표 시 <strong>HBM 매출 비중·출하량 가이던스</strong> 확인</li>
          <li>엔비디아 실적 발표에서 <strong>데이터센터 GPU 매출·재고 수준</strong> 체크</li>
          <li>주요 빅테크의 연간 CAPEX 발표 내용 모니터링</li>
          <li>삼성전자 HBM3E/4 퀄 테스트 통과 여부 — 시장 점유율 변동 신호</li>
          <li>일반 D램·낸드 업황도 전체 실적에 영향을 주므로 DRAMeXchange 가격 동향 병행 확인</li>
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
          SK하이닉스 평단가 계산기 →
        </Link>
      </div>
    </>
  );
}
