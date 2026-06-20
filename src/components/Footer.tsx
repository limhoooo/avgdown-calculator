import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/about" className="footer-link">서비스 소개</Link>
        <span className="footer-sep">·</span>
        <Link href="/privacy" className="footer-link">개인정보처리방침</Link>
      </nav>
      <p className="footer-disclaimer">
        본 서비스는 투자 참고용 계산 도구이며, 투자 조언을 제공하지 않습니다.<br />
        모든 투자 결정은 본인의 판단과 책임 하에 이루어져야 합니다.
      </p>
      <p className="footer-copy">© {new Date().getFullYear()} 물타기 계산기</p>
    </footer>
  );
}
