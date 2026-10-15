/** 점수에 따라 짧은 한마디. 칭찬보다 다음에 할 일을 말한다. */
export function resultMessage(score: number, total: number) {
  if (score === total) return "전부 맞혔다. 아래 해설을 자기 말로 설명할 수 있는지만 확인해 보자.";
  if (score / total >= 0.7) return "대부분 맞혔다. 틀린 문제의 해설과 글 위치를 다시 보고 한 번 더 풀어 보자.";
  return "틀린 문제가 꽤 있다. 관련 글을 먼저 다시 읽고 틀린 문제만 다시 풀어 보자.";
}
