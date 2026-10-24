import type { QuizQuestion } from "../types";

export const LEETCODE_STUDY_GUIDE: QuizQuestion[] = [
  {
    id: "leetcode-study-guide-1",
    post: "leetcode-study-guide",
    question: "LeetCode 문제를 번호 순서 대신 패턴 순서로 묶어 푸는 이유로 가장 알맞은 것은?",
    choices: [
      "같은 생각을 연달아 여러 번 써서, 조건이 바뀐 변형에서도 어디를 고칠지 보이게 하려고",
      "번호가 낮은 문제는 면접에 나오지 않아서",
      "패턴 순서로 풀면 문제 수를 절반으로 줄일 수 있어서",
      "LeetCode가 번호 순서로 풀면 점수를 덜 주기 때문에",
    ],
    answer: 0,
    explanation:
      "번호 순서는 매번 다른 생각을 요구해 같은 생각을 다시 쓸 일이 드물다. 패턴으로 묶으면 틀을 익히고 변형을 연달아 보니 오래 남는다. 면접에는 같은 문제보다 조건을 바꾼 변형이 나오기 때문에 이 차이가 중요하다.",
    anchor: "번호-순서-대신-패턴-순서로",
  },
  {
    id: "leetcode-study-guide-2",
    post: "leetcode-study-guide",
    question:
      "원형 배열에서 이전 칸의 인덱스를 (i - 1) % n으로 구했다. i = 0일 때 자바스크립트와 Java에서 생기는 문제는?",
    choices: [
      "결과가 n이 되어 배열 끝을 넘는다",
      "결과가 -1이 되어 배열 밖을 읽는다. Python만 n - 1이 나온다",
      "0으로 나누기 예외가 난다",
      "세 언어 모두 n - 1이 나와서 문제가 없다",
    ],
    answer: 1,
    explanation:
      "자바스크립트와 Java의 %는 나머지 부호가 나눠지는 수를 따르니 -1 % n은 -1이다. Python의 %는 늘 0 이상이라 n - 1이 된다. ((i - 1) % n + n) % n으로 쓰면 어느 언어에서든 맞다.",
    anchor: "어떤-언어로-풀까",
  },
  {
    id: "leetcode-study-guide-3",
    post: "leetcode-study-guide",
    question:
      "Python으로 노드 10만 개짜리 한쪽으로 치우친 트리를 재귀 DFS로 돌렸더니 RecursionError가 났다. 가장 안전한 대응은?",
    choices: [
      "sys.setrecursionlimit을 아주 크게 올린다",
      "재귀 함수 이름을 짧게 바꾼다",
      "명시적인 스택을 쓰는 반복문으로 바꾼다",
      "트리를 정렬한 뒤 다시 재귀로 돈다",
    ],
    answer: 2,
    explanation:
      "Python의 기본 재귀 한도는 1000이다. 한도를 올려도 실제 스택 크기를 넘으면 프로세스가 죽을 수 있다. 깊어질 수 있는 탐색은 스택을 직접 들고 도는 반복문으로 바꾸는 편이 안전하다.",
    anchor: "어떤-언어로-풀까",
  },
  {
    id: "leetcode-study-guide-4",
    post: "leetcode-study-guide",
    question: "한 문제를 푸는 여섯 단계 중, 경계 사례 예시를 만드는 시점으로 가장 좋은 때는?",
    choices: [
      "코드를 다 쓰고 제출하기 직전",
      "숨은 테스트에서 떨어진 뒤",
      "풀이를 떠올린 다음, 그 풀이가 통과하는지 확인하려고",
      "문제를 읽은 직후, 풀이가 머리에 박히기 전",
    ],
    answer: 3,
    explanation:
      "풀이를 먼저 생각하면 그 풀이가 통과하는 예시만 떠오른다. 문제를 읽자마자 가장 짧은 입력, 0이나 음수, 중복 같은 경계를 적어 두면 풀이를 고를 때와 마지막 검증에 모두 쓰인다.",
    anchor: "한-문제를-푸는-여섯-단계",
  },
  {
    id: "leetcode-study-guide-5",
    post: "leetcode-study-guide",
    question:
      "빠른 풀이를 느린 풀이와 무작위 입력으로 대조할 때, 입력 값 범위와 길이를 작게 잡는 이유는?",
    choices: [
      "작은 입력에서 찾은 반례는 손으로 따라가며 버그 위치를 찾을 수 있어서",
      "큰 입력에서는 두 풀이의 결과가 항상 같아서",
      "느린 풀이는 작은 입력에서만 정답을 내기 때문에",
      "LeetCode가 작은 입력만 테스트하기 때문에",
    ],
    answer: 0,
    explanation:
      "값을 -3에서 3, 길이를 2에서 5로 잡으면 [3, 0] 같은 짧은 반례가 나온다. 이런 반례는 손으로 실행해 볼 수 있어서 어디서 틀렸는지 바로 보인다. 작은 범위는 0이나 중복 같은 경계값이 자주 나오게 하는 효과도 있다.",
    anchor: "막혔을-때",
  },
  {
    id: "leetcode-study-guide-6",
    post: "leetcode-study-guide",
    question: "면접에서 코드를 쓰기 전에 개선 방향과 복잡도를 먼저 말하고 반응을 보는 이유는?",
    choices: [
      "면접관이 코드를 대신 써 주기 때문에",
      "틀린 방향이면 코드를 오래 쓰기 전에 바로잡을 기회가 생기기 때문에",
      "말을 많이 할수록 점수가 올라가기 때문에",
      "복잡도를 말하면 코드를 쓰지 않아도 되기 때문에",
    ],
    answer: 1,
    explanation:
      "방향을 먼저 맞추면 틀린 방향으로 20분을 쓰는 일을 막는다. 면접관은 머릿속을 볼 수 없으니 말한 생각만 평가할 수 있고, 막힌 지점을 말해야 힌트도 받을 수 있다.",
    anchor: "면접장에서-말하며-풀기",
  },
];
