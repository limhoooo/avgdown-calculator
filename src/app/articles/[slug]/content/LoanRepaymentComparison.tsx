import Link from 'next/link';

export default function LoanRepaymentComparison() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          원리금균등 vs 원금균등 상환, 어떤 게 더 유리할까?
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          주택담보대출, 전세자금대출 등을 받을 때 반드시 선택해야 하는 것이 <strong>상환 방식</strong>입니다.
          원리금균등상환과 원금균등상환은 이름은 비슷하지만 월 납입금 구조와 총 이자 부담이 다릅니다.
          두 방식을 정확히 이해하고 내 상황에 맞는 선택을 해보세요.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 원리금균등상환이란?</h2>
        <p className="privacy-text">
          매달 납입하는 금액(원금 + 이자)이 <strong>처음부터 끝까지 동일</strong>한 방식입니다.
          초기에는 이자 비중이 높고, 갚을수록 원금 비중이 늘어납니다.
        </p>
        <div className="guide-formula">월 납입금 = 대출원금 × [월이율 × (1+월이율)ⁿ] ÷ [(1+월이율)ⁿ − 1]</div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>매달 같은 금액을 납부하므로 <strong>가계 예산 관리가 쉽습니다.</strong></li>
          <li>초기 원금 상환 속도가 느려 총 이자 부담이 원금균등보다 많습니다.</li>
          <li>직장인처럼 매달 일정 소득이 있는 경우 선호합니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 원금균등상환이란?</h2>
        <p className="privacy-text">
          매달 갚는 <strong>원금은 동일</strong>하고, 이자는 잔여 원금에 비례해 점점 줄어드는 방식입니다.
          초기 납입금이 가장 높고 갚을수록 월 납입액이 낮아집니다.
        </p>
        <div className="guide-formula">월 납입금 = (대출원금 ÷ 총 상환 횟수) + 잔여원금 × 월이율</div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>원금을 빠르게 줄이므로 <strong>총 이자 부담이 적습니다.</strong></li>
          <li>초기 납입금이 높아 소득이 충분해야 부담 없이 유지할 수 있습니다.</li>
          <li>시간이 지날수록 월 부담이 줄어들어 여유 자금이 생깁니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 실제 비교 예시 (3억원, 연 4%, 30년)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>항목</th>
                <th>원리금균등</th>
                <th>원금균등</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>첫 달 납입금</td>
                <td>약 143만원</td>
                <td>약 183만원</td>
              </tr>
              <tr>
                <td>마지막 달 납입금</td>
                <td>약 143만원</td>
                <td>약 83만원</td>
              </tr>
              <tr>
                <td>총 납입 이자</td>
                <td>약 2억 1,600만원</td>
                <td>약 1억 8,025만원</td>
              </tr>
              <tr>
                <td>이자 절감액</td>
                <td>—</td>
                <td>약 3,575만원 절감</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          동일 조건에서 <strong>원금균등이 약 3,500만원 이상 이자를 아낄 수 있습니다.</strong>
          다만 초기 납입금이 약 40만원 높아지므로 소득 여력을 먼저 점검해야 합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 내 상황에 맞는 선택 기준</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="info-box">
            <strong>원리금균등이 유리한 경우</strong><br />
            · 매달 납입 금액을 고정해 가계 예산을 관리하고 싶을 때<br />
            · 초기 여유 자금이 부족해 높은 초기 납입금이 부담될 때<br />
            · 남은 대출 기간이 짧아 이자 차이가 크지 않을 때
          </div>
          <div className="tax-success-box">
            <strong>원금균등이 유리한 경우</strong><br />
            · 소득이 충분해 초기 높은 납입금을 감당할 수 있을 때<br />
            · 대출 기간이 길어 총 이자 절감 효과가 클 때<br />
            · 시간이 지나면서 월 부담을 줄이고 싶을 때
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 만기일시상환은?</h2>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          매달 이자만 납부하고 만기에 원금 전액을 일시 상환하는 방식입니다.
          월 납입금이 가장 낮아 단기 자금이 필요할 때 유리하지만, <strong>총 이자 부담이 세 방식 중 가장 큽니다.</strong>
          주로 기업 대출이나 전세자금대출 일부에서 활용됩니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 투자 교육 목적으로 작성된 참고 자료이며, 투자 조언이나 금융 상품 추천을 제공하지 않습니다.</p>
          <p>실제 대출 결정 시 금융기관 상담을 통해 본인 상황에 맞는 조건을 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/loan"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          대출 이자 계산기 바로 사용하기 →
        </Link>
      </div>
    </>
  );
}
