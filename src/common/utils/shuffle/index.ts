/** Fisher–Yates. 원본은 건드리지 않는다. 퀴즈·어휘 학습에서 순서를 섞을 때 쓴다. */
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
