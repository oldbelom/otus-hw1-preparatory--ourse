export function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

export function isWord(str) {
  return !str.trim().includes(" ");
}

export function pow(a, x) {
  let num = 0;

  if (x === 1) {
    return a;
  }

  if (x === 0) {
    return 1;
  }

  for (let i = 1; i <= x; i += 1) {
    num += a * a;
  }

  return num;
}
