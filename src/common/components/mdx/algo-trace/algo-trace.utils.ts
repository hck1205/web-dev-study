/** 이전 단계와 비교해 새로 들어온 값(entering)과 빠져나간 값(leaving)을 구한다. 스택·큐처럼 앞부분이 유지되는 구조를 가정한다. */
export function diffMemory(prev: string[], next: string[]) {
  let common = 0;
  while (common < prev.length && common < next.length && prev[common] === next[common]) common += 1;

  return {
    items: next.map((value, index) => ({ value, entering: index >= common })),
    leaving: prev.slice(common),
  };
}
