import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_COMMON_PREFIX: QuizQuestion[] = [
  {
    id: "leetcode-longest-common-prefix-1",
    post: "leetcode-longest-common-prefix",
    question: "세로로 훑는 풀이가 [interview, internet, interval, internal]에서 위치 5를 볼 때 일어나는 일은?",
    choices: [
      "네 문자열의 위치 5를 모두 본 뒤 inter를 돌려준다",
      "internet의 n이 v와 달라서, 나머지 두 문자열은 보지 않고 inter를 돌려준다",
      "interview가 가장 길어서 위치 8까지 계속 본다",
      "internal과 interval을 먼저 비교한다",
    ],
    answer: 1,
    explanation:
      "위치 5에서 첫 비교 대상인 internet의 n이 interview의 v와 다르다. 그 순간 앞 다섯 글자 inter를 돌려주고 끝나서 나머지 문자열과 뒤의 위치는 보지 않는다. 다른 글자를 만나면 즉시 멈추는 게 이 풀이의 장점이다.",
    anchor: "세로로-한-칸씩-훑는다",
  },
  {
    id: "leetcode-longest-common-prefix-2",
    post: "leetcode-longest-common-prefix",
    question: "사전 순으로 정렬한 뒤 맨 앞과 맨 뒤의 공통 접두사만 구해도 전체의 답이 되는 이유는?",
    choices: [
      "정렬하면 모든 문자열의 길이가 같아져서",
      "맨 앞과 맨 뒤가 가장 짧은 문자열이라서",
      "가운데 문자열이 그 공통 접두사 안에서 달라진다면 맨 앞보다 앞이나 맨 뒤보다 뒤에 와야 해서, 정렬 결과와 어긋나기 때문에",
      "정렬은 공통 접두사가 같은 문자열끼리만 붙여 놓아서",
    ],
    answer: 2,
    explanation:
      "맨 앞과 맨 뒤의 공통 접두사를 p라 하면, p 안에서 달라지는 가운데 문자열은 정렬 위치가 맞지 않는다. 그래서 가운데는 모두 p로 시작하고 답이 정확히 p다. 같은 이유로 정렬 없이 최솟값과 최댓값만 찾아도 된다.",
    anchor: "정렬하면-처음과-끝만-보면-된다",
  },
  {
    id: "leetcode-longest-common-prefix-3",
    post: "leetcode-longest-common-prefix",
    question: "트라이 풀이에서 자식이 하나뿐인 동안 내려가되 끝 표시에서도 멈춰야 하는 이유를 보여 주는 입력은?",
    choices: ["[ab, a]", "[apple, banana]", "[same, same]", "[\"\"]"],
    answer: 0,
    explanation:
      "[ab, a]를 넣으면 a 노드의 자식은 b 하나뿐이다. 끝 표시를 보지 않으면 b까지 내려가 ab를 돌려주지만, a가 거기서 끝나므로 답은 a다. 빈 문자열 하나는 뿌리에 끝 표시가 붙어 어느 쪽이든 빈 문자열이 나온다.",
    anchor: "짧은-문자열과-빈-문자열에서-틀린다",
  },
  {
    id: "leetcode-longest-common-prefix-4",
    post: "leetcode-longest-common-prefix",
    question: "공통 접두사를 한 번 구하는 데 트라이가 세로 훑기보다 나쁜 이유로 맞는 것은?",
    choices: [
      "트라이는 O(S²) 시간이 걸려서",
      "트라이는 빈 문자열을 넣을 수 없어서",
      "트라이는 사전 순 정렬이 필요해서",
      "시간은 O(S)로 같지만 메모리를 O(S) 쓰고, 모든 문자열을 끝까지 넣어야 해서 일찍 멈추지 못해서",
    ],
    answer: 3,
    explanation:
      "트라이를 만드는 데 모든 글자를 넣어야 하니 다른 글자를 일찍 만나도 멈출 수 없고, 노드 수만큼 메모리를 쓴다. 세로 훑기는 같은 O(S)에 추가 메모리가 없고 즉시 멈춘다. 트라이는 같은 집합에 질문이 여러 번 들어올 때 제값을 한다.",
    anchor: "트라이로-갈림길까지-내려가기",
  },
  {
    id: "leetcode-longest-common-prefix-5",
    post: "leetcode-longest-common-prefix",
    question: "Python의 os.path.commonprefix([\"/usr/lib\", \"/usr/local\"])의 결과는?",
    choices: ["/usr", "/usr/", "/usr/l", "에러가 난다"],
    answer: 2,
    explanation:
      "commonprefix는 이름과 달리 경로 조각이 아니라 글자 단위로 비교해서 /usr/l이 나온다. 공통 디렉터리를 원하면 Python 3.5부터 있는 os.path.commonpath를 쓰고, 그 답은 /usr다. 내부는 min과 max 두 문자열만 비교하는 방식이다.",
    anchor: "python과-java로-쓰면",
  },
];
