import type { QuizQuestion } from "../types";

export const LEETCODE_LETTER_COMBINATIONS_OF_A_PHONE_NUMBER: QuizQuestion[] = [
  {
    id: "leetcode-letter-combinations-of-a-phone-number-1",
    post: "leetcode-letter-combinations-of-a-phone-number",
    question: "한 자리씩 늘리는 반복문(`res = [\"\"]`에서 시작)에서 빈 입력 검사를 빼면 `digits = \"\"`의 결과는?",
    choices: ["`[]`", "`[\"\"]`", "`undefined`", "TypeError가 난다"],
    answer: 1,
    explanation:
      "for문이 한 번도 돌지 않아 시작값인 빈 문자열 하나가 그대로 나온다. \"아무것도 고르지 않은 방법 하나\"라 틀린 계산은 아니지만 이 문제는 빈 목록을 요구한다. 백트래킹도 `go(0)`에서 바로 끝에 닿아 같은 결과가 나온다.",
    anchor: "빈-문자열-하나가-답으로-나올-때",
  },
  {
    id: "leetcode-letter-combinations-of-a-phone-number-2",
    post: "leetcode-letter-combinations-of-a-phone-number",
    question: "\"7979\"를 백트래킹으로 풀 때 재귀 호출(go)은 모두 몇 번 일어나나?",
    choices: ["256번", "16번", "341번", "1024번"],
    answer: 2,
    explanation:
      "호출 수는 결정 트리의 마디 수다. 층마다 갈래가 넷이라 1 + 4 + 16 + 64 + 256 = 341이다. 잎 256개가 답이고, 안쪽 마디는 잎의 3분의 1 정도라 답을 만드는 비용이 시간을 정한다.",
    anchor: "한-자리씩-골라-끝까지-내려가기",
  },
  {
    id: "leetcode-letter-combinations-of-a-phone-number-3",
    post: "leetcode-letter-combinations-of-a-phone-number",
    question: "백트래킹에서 `path` 배열 대신 `go(i + 1, cur + ch)`처럼 문자열을 넘기면 pop이 필요 없는 이유는?",
    choices: [
      "문자열이 바꿀 수 없는 값이라 `cur + ch`가 새 문자열을 만들고, 돌아오면 원래 `cur`가 그대로 남기 때문이다",
      "JavaScript가 재귀가 끝날 때 문자열을 자동으로 되돌려 주기 때문이다",
      "문자열은 참조로 전달되기 때문이다",
      "답을 기록할 때 복사하기 때문이다",
    ],
    answer: 0,
    explanation:
      "다음 상태를 새 값으로 넘기면 이전 상태가 망가지지 않는다. 그래서 되돌리기도, 기록할 때의 복사도 필요 없다. 측정에서도 `path.join(\"\")`을 쓴 버전보다 빨랐다.",
    anchor: "한-자리씩-골라-끝까지-내려가기",
  },
  {
    id: "leetcode-letter-combinations-of-a-phone-number-4",
    post: "leetcode-letter-combinations-of-a-phone-number",
    question: "\"37\"의 조합을 백트래킹 순서로 늘어놓았을 때 5번째(0부터 셈)를 목록 없이 구하는 방법과 답은?",
    choices: [
      "5를 3으로 나눈 몫과 나머지로 정한다. \"fq\"",
      "5를 4로 나눈 나머지 1이 끝자리, 몫 1이 앞자리다. \"eq\"",
      "앞자리부터 5를 3으로 나눈다. \"ep\"",
      "목록 없이는 구할 수 없다",
    ],
    answer: 1,
    explanation:
      "자리마다 진법이 다른 수(혼합 기수)로 보고 끝자리부터 그 자리의 글자 수로 나눈다. 끝자리 7은 글자가 넷이라 5 % 4 = 1(q), 몫 1이 앞자리 번호(e)라 \"eq\"다. O(n)에 끝난다.",
    anchor: "자동차-주행-거리계처럼-끝자리부터-올린다",
  },
  {
    id: "leetcode-letter-combinations-of-a-phone-number-5",
    post: "leetcode-letter-combinations-of-a-phone-number",
    question: "T9 단어 추천처럼 숫자열에 맞는 사전 단어를 찾을 때, 조합을 다 만들어 거르는 것보다 나은 방법은?",
    choices: [
      "조합을 만들 때 사전순으로 정렬해 이진 탐색한다",
      "자릿수를 4 이하로 제한한다",
      "사전 단어마다 누를 숫자열을 미리 구해 그 숫자열을 키로 묶어 두고 조회한다",
      "조합을 만든 뒤 Set으로 중복을 지운다",
    ],
    answer: 2,
    explanation:
      "조합 수는 자릿수에 지수적이지만 사전은 크기가 정해져 있다. 사전을 한 번 훑어 숫자열 → 단어 목록 맵을 만들어 두면 추천은 해시맵 조회 한 번이다. 걸러 낼 기준이 작은 집합이면 그쪽에서 거꾸로 가는 게 싸다.",
    anchor: "피처폰-t9-단어-추천은-거꾸로-푼다",
  },
];
