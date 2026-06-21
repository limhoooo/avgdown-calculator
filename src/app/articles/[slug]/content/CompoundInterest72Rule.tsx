import Link from 'next/link';

export default function CompoundInterest72Rule() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          복리의 힘: 72법칙으로 보는 투자 원금 2배 기간
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          아인슈타인이 "세계 8대 불가사의"라 불렀다는 복리. 왜 장기 투자자들이 복리 효과를 그토록 강조할까요?
          <strong>72법칙</strong>을 통해 복리의 위력을 직관적으로 이해해보겠습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 단리 vs 복리 차이</h2>
        <p className="privacy-text">
          <strong>단리</strong>는 원금에만 이자가 붙습니다. <strong>복리</strong>는 이자에도 이자가 붙어, 시간이 지날수록
          자산이 기하급수적으로 증가합니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>기간</th>
                <th>단리 (연 5%)</th>
                <th>복리 (연 5%)</th>
                <th>차이</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>10년</td><td>1,500만원</td><td>1,629만원</td><td>+129만원</td></tr>
              <tr><td>20년</td><td>2,000만원</td><td>2,653만원</td><td>+653만원</td></tr>
              <tr><td>30년</td><td>2,500만원</td><td>4,322만원</td><td>+1,822만원</td></tr>
              <tr><td>40년</td><td>3,000만원</td><td>7,040만원</td><td>+4,040만원</td></tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          원금 1,000만원 기준, 40년 후 단리는 3,000만원이지만 복리는 <strong>7,040만원</strong>으로 2배 이상 차이납니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 72법칙이란?</h2>
        <p className="privacy-text">
          복잡한 계산 없이 <strong>"원금이 2배 되는 기간"</strong>을 빠르게 추정하는 공식입니다.
        </p>
        <div className="guide-formula">원금 2배 기간(년) ≈ 72 ÷ 연 수익률(%)</div>
        <div className="table-wrap" style={{ marginTop: '14px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>연 수익률</th>
                <th>72법칙 (근사)</th>
                <th>실제 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>3% (예금 수준)</td><td>24년</td><td>23.4년</td></tr>
              <tr><td>5% (채권 수준)</td><td>14.4년</td><td>14.2년</td></tr>
              <tr><td>7% (주식 장기 평균)</td><td>10.3년</td><td>10.2년</td></tr>
              <tr><td>10%</td><td>7.2년</td><td>7.3년</td></tr>
              <tr><td>15%</td><td>4.8년</td><td>5.0년</td></tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          연 7% 수익률을 유지하면 약 <strong>10년마다 자산이 2배</strong>가 됩니다. 30년 후엔 8배, 40년 후엔 16배입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 복리 효과를 극대화하는 핵심 원칙</h2>
        <ul className="privacy-list">
          <li>
            <strong>일찍 시작할수록 유리합니다 — 시간이 가장 중요한 변수</strong><br />
            25세에 시작한 투자와 35세에 시작한 투자는 10년 차이지만, 60세 시점에서는 자산 규모가 2배 이상 달라질 수 있습니다.
          </li>
          <li>
            <strong>이자·배당을 재투자해야 복리 효과가 작동합니다</strong><br />
            이자를 소비하면 단리와 다를 바 없습니다. 배당 재투자, 자동 이자 합산 상품을 활용하세요.
          </li>
          <li>
            <strong>수익률 1~2%p 차이가 장기적으로 큰 격차를 만듭니다</strong><br />
            연 5%와 7% 차이는 작아 보이지만, 30년 후 각각 4.3배, 7.6배로 자산 규모가 크게 달라집니다.
          </li>
          <li>
            <strong>세금과 수수료를 최소화해야 실질 복리율이 유지됩니다</strong><br />
            수익률이 높아도 세금·운용보수로 1~2%p 손실되면 복리 효과가 크게 줄어듭니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 복리 계산기로 내 투자 시뮬레이션하기</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>미래가치 계산</strong>
              <p>원금, 연 수익률, 기간을 입력하면 복리 후 최종 금액과 이자를 즉시 확인합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>목표금액 역산</strong>
              <p>목표 금액을 달성하려면 지금 얼마를 투자해야 하는지 역으로 계산합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>단리 vs 복리 비교</strong>
              <p>같은 조건에서 단리와 복리의 수익 차이를 나란히 비교해 복리 효과를 시각적으로 확인합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 투자 교육 목적으로 작성된 참고 자료이며, 투자 조언이나 특정 상품 추천을 제공하지 않습니다.</p>
          <p>모든 투자에는 원금 손실 위험이 있으며, 투자 결정과 그 결과는 전적으로 투자자 본인의 책임입니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/compound"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          복리 계산기 바로 사용하기 →
        </Link>
      </div>
    </>
  );
}
