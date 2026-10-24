import type { QuizQuestion } from "../types";

export const LEETCODE_VALID_PALINDROME: QuizQuestion[] = [
  {
    id: "leetcode-valid-palindrome-1",
    post: "leetcode-valid-palindrome",
    question: "원본 위 투 포인터 풀이는 바깥 while 안에 while이 두 개 더 있다. 그런데도 시간 복잡도가 O(n)인 이유는?",
    choices: [
      "안쪽 while은 기호가 있을 때만 돌아서 평균적으로 거의 돌지 않기 때문에",
      "l은 오른쪽으로만, r은 왼쪽으로만 움직여 두 포인터가 움직인 거리의 합이 n을 넘지 않기 때문에",
      "바깥 while이 매번 두 칸씩 줄어들어 반복 횟수가 n/2로 정해지기 때문에",
      "toLowerCase가 상수 시간이라 비교 비용이 사라지기 때문에",
    ],
    answer: 1,
    explanation:
      "포인터가 되돌아가지 않으니 바깥과 안쪽 반복을 모두 합쳐도 l과 r의 이동 횟수 합은 문자열 길이 이하다. 기호가 많은 입력에서는 안쪽 while이 많이 돌지만, 그만큼 바깥 반복이 줄어든다. 중첩 깊이가 아니라 포인터의 총 이동량을 세야 한다.",
    anchor: "원본-위에서-건너뛰며-비교한다",
  },
  {
    id: "leetcode-valid-palindrome-2",
    post: "leetcode-valid-palindrome",
    question: "`s.toLowerCase().replace(/\\W/g, \"\")`로 정리한 뒤 뒤집어 비교하면 `\"ab_a\"`의 결과는 어떻게 되나?",
    choices: [
      "true. 밑줄이 지워져 aba가 남는다",
      "에러. \\W가 밑줄에서 예외를 던진다",
      "false. \\w에 밑줄이 들어 있어 ab_a가 그대로 남는다",
      "true. 밑줄은 대칭인 문자라 뒤집어도 같다",
    ],
    answer: 2,
    explanation:
      "\\w는 [A-Za-z0-9_]라서 밑줄을 단어 글자로 친다. 그래서 \\W로 지우면 밑줄이 남고, ab_a와 뒤집은 a_ba가 달라 false가 나온다. 정답은 true이므로 [^a-z0-9]나 [\\W_]로 밑줄까지 지워야 한다.",
    anchor: "여기서-자주-틀린다",
  },
  {
    id: "leetcode-valid-palindrome-3",
    post: "leetcode-valid-palindrome",
    question: "안쪽 while에서 `l < r` 조건을 빼고 `while (!isAlnum(s[l])) l++`로 쓰면 어떤 입력에서 문제가 생기나?",
    choices: [
      "\".,\"처럼 기호만 있는 입력에서 l이 문자열 끝을 넘어가 undefined를 읽는다",
      "\"aA\"처럼 대소문자만 다른 입력에서 false가 나온다",
      "\"race a car\"처럼 회문이 아닌 입력에서 무한 루프에 빠진다",
      "빈 문자열에서 r이 -1이라 바로 에러가 난다",
    ],
    answer: 0,
    explanation:
      "기호만 있으면 l이 계속 밀려 s.length 자리까지 가고, s[2]는 undefined라 charCodeAt 호출에서 에러가 난다. 빈 문자열은 바깥 while의 l < r이 처음부터 거짓이라 안쪽에 들어가지도 않는다. 기호로 시작하거나 끝나는 입력을 테스트에 넣어야 하는 이유다.",
    anchor: "여기서-자주-틀린다",
  },
  {
    id: "leetcode-valid-palindrome-4",
    post: "leetcode-valid-palindrome",
    question: "영문자와 숫자로 걸러 낸 뒤 문자 코드에 `| 32`를 해서 비교하는 방법이 숫자에도 안전한 이유는?",
    choices: [
      "| 32가 숫자를 대응하는 영문자로 바꿔 주기 때문에",
      "JavaScript가 숫자 문자에는 비트 연산을 적용하지 않기 때문에",
      "숫자는 isAlnum에서 이미 소문자로 바뀌어 있기 때문에",
      "'0'~'9'(48~57)는 32 비트가 이미 켜져 있어 값이 그대로이고, 소문자(97~122)와 겹치지 않기 때문에",
    ],
    answer: 3,
    explanation:
      "48은 이진수 110000이라 32에 해당하는 비트가 이미 1이다. 그래서 숫자는 | 32를 해도 변하지 않고, 대문자만 32가 더해져 소문자가 된다. 다만 @(64)처럼 기호는 | 32로 다른 기호가 되니 반드시 거른 뒤에 써야 한다.",
    anchor: "tolowercase도-빼고-숫자로만-비교한다",
  },
  {
    id: "leetcode-valid-palindrome-5",
    post: "leetcode-valid-palindrome",
    question: "한 글자까지 지워도 되는 회문(LeetCode 680)을 O(n)에 푸는 방법으로 맞는 것은?",
    choices: [
      "글자를 하나씩 지워 보며 n번 회문 검사를 한다",
      "처음 다른 글자를 만났을 때 왼쪽을 지운 구간과 오른쪽을 지운 구간만 각각 회문인지 확인한다",
      "글자 빈도를 세어 홀수 개인 글자가 하나 이하인지 본다",
      "문자열을 정렬한 뒤 양 끝을 비교한다",
    ],
    answer: 1,
    explanation:
      "처음 다른 곳 앞부분은 이미 같다고 확인했으니, 갈림길은 그 두 글자 중 하나를 지우는 두 경우뿐이다. 각각 O(n) 검사라 전체도 O(n)이다. 하나씩 지워 보는 방법은 O(n²)이고, 빈도 세기는 순서를 바꿀 수 있는 문제(회문 순열)에 맞는 방법이다.",
    anchor: "면접관이-이어서-바꾸는-문제들",
  },
];
