import Link from 'next/link';

export default function SavingsVsDeposit() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          정기예금 vs 적금, 이자를 더 많이 주는 건 어느 쪽일까?
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          은행 창구나 앱에서 "연 3.5% 정기예금"과 "연 3.5% 적금"을 나란히 보면 같은 금리처럼 느껴집니다.
          하지만 실제로 받는 이자는 크게 다릅니다. 두 상품의 구조적 차이를 이해하면 내 상황에 맞는 선택을 할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 정기예금이란?</h2>
        <p className="privacy-text">
          목돈을 한 번에 맡기고 만기에 원금 + 이자를 받는 상품입니다.
          가입 시점에 <strong>원금 전액에 대해 계약 기간 내내 이자가 붙습니다.</strong>
        </p>
        <div className="guide-formula">이자 = 원금 × 연이율 × (기간/12)</div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>목돈이 있을 때 활용하기 좋습니다.</li>
          <li>매달 추가 입금이 없어 관리가 단순합니다.</li>
          <li>중도 해지 시 약정 금리보다 낮은 이율이 적용됩니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 적금이란?</h2>
        <p className="privacy-text">
          매달 일정 금액을 납입하고 만기에 원금 + 이자를 받는 상품입니다.
          <strong>매달 납입한 금액에 대해 남은 기간만큼만 이자가 붙습니다.</strong>
          처음 납입한 돈은 12개월치 이자가 붙지만, 마지막 달 납입분은 1개월치 이자만 붙습니다.
        </p>
        <div className="guide-formula">실효 이자 ≈ 월 납입금 × n개월 × 연이율 × (n+1)/(2×12)</div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>매달 소액을 꾸준히 저축하는 습관을 만들 때 적합합니다.</li>
          <li>목돈이 없어도 시작할 수 있습니다.</li>
          <li>같은 금리라도 정기예금보다 실제 이자가 약 절반 수준입니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 실제 이자 비교 (연 4%, 12개월, 1,200만원)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>항목</th>
                <th>정기예금</th>
                <th>적금 (월 100만원)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>총 납입 원금</td>
                <td>1,200만원 (일시납)</td>
                <td>1,200만원 (월 100만원)</td>
              </tr>
              <tr>
                <td>세전 이자</td>
                <td>약 48만원</td>
                <td>약 26만원</td>
              </tr>
              <tr>
                <td>이자소득세 (15.4%)</td>
                <td>약 7.4만원</td>
                <td>약 4만원</td>
              </tr>
              <tr>
                <td>세후 수령 이자</td>
                <td><strong>약 40.6만원</strong></td>
                <td><strong>약 22만원</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          같은 금리·같은 원금이라도 <strong>정기예금 이자가 적금의 약 1.8배</strong>입니다.
          적금 금리가 예금보다 높게 책정되는 이유가 여기 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 이자소득세와 비과세</h2>
        <ul className="privacy-list">
          <li>
            <strong>일반 이자소득세: 15.4%</strong> (소득세 14% + 지방소득세 1.4%)<br />
            은행이 이자 지급 시 자동으로 원천징수합니다.
          </li>
          <li>
            <strong>세금우대: 9.5%</strong><br />
            조합·신협·저축은행 등 상호금융기관 상품에서 원금 3,000만원 한도로 적용.
          </li>
          <li>
            <strong>비과세: 0%</strong><br />
            ISA 계좌(연간 2,000만원 한도, 3년 이상 유지 시 200만원 비과세), 비과세종합저축(가입 요건 있음).
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 내 상황에 맞는 선택</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>정기예금이 유리한 경우</strong><br />
            · 이미 목돈이 있고 일정 기간 사용할 계획이 없을 때<br />
            · 이자 수익을 극대화하고 싶을 때<br />
            · 관리가 단순한 상품을 원할 때
          </div>
          <div className="info-box">
            <strong>적금이 유리한 경우</strong><br />
            · 목돈이 없고 매달 저축 습관을 만들고 싶을 때<br />
            · 매달 여유 자금이 생기는 직장인<br />
            · 목표 금액을 향해 꾸준히 모아가는 단계
          </div>
        </div>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 투자 교육 목적으로 작성된 참고 자료이며, 특정 금융 상품 추천을 제공하지 않습니다.</p>
          <p>실제 금리·세율은 금융기관 및 시기에 따라 다를 수 있으니 가입 전 반드시 확인하세요.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/savings"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          예적금 계산기 바로 사용하기 →
        </Link>
      </div>
    </>
  );
}
