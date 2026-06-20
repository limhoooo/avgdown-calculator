export function fmt(n: number): string {
  return Math.round(n).toLocaleString('ko-KR');
}

export function fmtP(n: number, d = 2): string {
  return (n > 0 ? '+' : '') + n.toFixed(d) + '%';
}

export function fmtUSD(n: number): string {
  const abs = Math.abs(n).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (n < 0 ? '-$' : '$') + abs;
}
