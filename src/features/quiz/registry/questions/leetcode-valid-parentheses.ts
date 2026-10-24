import type { QuizQuestion } from "../types";

export const LEETCODE_VALID_PARENTHESES: QuizQuestion[] = [
  {
    id: "leetcode-valid-parentheses-1",
    post: "leetcode-valid-parentheses",
    question: "괄호 종류마다 카운터를 하나씩 두고, 여는 괄호에서 +1, 닫는 괄호에서 -1을 하며 음수가 되면 false를 내는 풀이가 있다. 이 풀이가 틀리게 true를 내는 입력은?",
    choices: ["`((`", "`]`", "`([)]`", "`()[]{}`"],
    answer: 2,
    explanation:
      "`([)]`는 종류별 개수가 모두 맞고 중간에 음수가 되지도 않아서 카운터를 통과한다. 하지만 `)`가 나올 때 가장 최근에 연 괄호는 `[`라서 실제로는 틀린 문자열이다. 카운터는 개수만 기억하고 연 순서를 잊기 때문에, 여러 종류에서는 스택이 필요하다.",
    anchor: "한-종류라면-숫자-하나로-충분하다",
  },
  {
    id: "leetcode-valid-parentheses-2",
    post: "leetcode-valid-parentheses",
    question: "스택 풀이에서 반복문이 끝난 뒤 `return true`로 끝내고 스택이 비었는지 확인하지 않았다. 어떤 입력에서 틀린 답이 나오나?",
    choices: [
      "`]`처럼 열지 않은 괄호를 닫는 입력",
      "`((`처럼 여는 괄호가 닫히지 않고 끝나는 입력",
      "`(]`처럼 종류가 다른 입력",
      "`{[()]}`처럼 깊게 겹친 입력",
    ],
    answer: 1,
    explanation:
      "반복문 안에서는 닫는 괄호가 맨 위와 맞는지만 보므로, 여는 괄호만 있는 입력은 한 번도 걸리지 않고 통과한다. 끝에 스택에 남은 괄호가 바로 닫히지 않은 괄호라서 `stack.length === 0`을 꼭 확인해야 한다. `]`와 `(]`는 반복문 안의 비교에서 이미 false가 된다.",
    anchor: "틀리기-쉬운-입력들",
  },
  {
    id: "leetcode-valid-parentheses-3",
    post: "leetcode-valid-parentheses",
    question: "붙어 있는 짝(`()`, `[]`, `{}`)을 더 지울 수 없을 때까지 지우는 풀이가 O(n²)이 되는 이유로 가장 알맞은 것은?",
    choices: [
      "`replace`가 정규식을 컴파일해서 느리다",
      "빈 문자열이 남는지 확인하는 데 O(n²)이 든다",
      "괄호 종류가 세 가지라 세 번씩 반복한다",
      "`(((...)))`처럼 겹친 입력에서는 한 바퀴에 한 쌍만 지워지고, 한 바퀴마다 문자열 전체를 훑는다",
    ],
    answer: 3,
    explanation:
      "겹친 입력에서는 가장 안쪽 한 쌍만 붙어 있어서 바퀴당 한 쌍씩 지워지고, n/2바퀴를 돈다. 바퀴마다 `replace`가 O(n)으로 문자열을 훑고 새로 만드니 전체가 O(n²)이다. 스택은 가장 안쪽 쌍이 생기는 위치를 기억해 두어 다시 뒤질 필요가 없다.",
    anchor: "붙어-있는-짝부터-지워-나가기",
  },
  {
    id: "leetcode-valid-parentheses-4",
    post: "leetcode-valid-parentheses",
    question: "재귀 하강 방식으로 푼 코드를 Python에서 `\"(\" * 5000 + \")\" * 5000`에 돌리면 어떻게 되나?",
    choices: [
      "기본 재귀 한도(1000)를 넘어서 RecursionError가 난다",
      "꼬리 재귀 최적화 덕분에 True가 나온다",
      "O(n²)이라 시간 초과가 난다",
      "문자열이 짝수 길이라 바로 True가 나온다",
    ],
    answer: 0,
    explanation:
      "재귀 풀이는 여는 괄호 하나마다 호출이 하나 쌓이므로 깊이 5000이면 호출도 5000겹이다. Python의 기본 재귀 한도는 1000이라 RecursionError가 나고, Python은 꼬리 재귀 최적화도 하지 않는다. 그래서 이 문제는 힙에 만드는 명시적 스택이 기본 답이다.",
    anchor: "재귀로-읽으면-콜-스택이-스택-노릇을-한다",
  },
  {
    id: "leetcode-valid-parentheses-5",
    post: "leetcode-valid-parentheses",
    question: "괄호가 `(`와 `)` 한 종류뿐이고, 어떤 글자로든 바뀔 수 있는 `*`가 섞여 있다(LeetCode 678). O(n) 시간, O(1) 공간으로 푸는 방법은?",
    choices: [
      "`*`마다 세 가지 경우를 모두 시도하는 백트래킹",
      "`*`를 모두 빈칸으로 보고 일반 스택 검사를 한다",
      "열린 괄호 개수가 될 수 있는 최솟값과 최댓값을 함께 들고 다닌다",
      "문자열을 뒤집어서 한 번 더 스택 검사를 한다",
    ],
    answer: 2,
    explanation:
      "`(`는 범위를 둘 다 올리고 `)`는 둘 다 내리며, `*`는 최솟값을 내리고 최댓값을 올린다. 최댓값이 음수가 되면 실패, 최솟값은 0 밑으로 내려가지 않게 하고 끝에 최솟값이 0이면 성공이다. 백트래킹은 3^k가지를 보게 되고, `*`를 빈칸으로만 보면 `(*`처럼 `*`가 `)` 노릇을 해야 하는 입력을 틀린다.",
    anchor: "면접관이-조건을-바꾸면",
  },
];
