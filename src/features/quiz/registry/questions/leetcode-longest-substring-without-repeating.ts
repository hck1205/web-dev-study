import type { QuizQuestion } from "../types";

export const LEETCODE_LONGEST_SUBSTRING_WITHOUT_REPEATING: QuizQuestion[] = [
  {
    id: "leetcode-longest-substring-without-repeating-1",
    post: "leetcode-longest-substring-without-repeating",
    question: "마지막 위치 해시맵 풀이에서 `if (last.has(c)) l = last.get(c) + 1;`처럼 창 안인지 확인하지 않으면 `\"abba\"`의 결과는?",
    choices: ["2", "4", "3", "1"],
    answer: 2,
    explanation:
      "3번 칸의 a에서 오래된 위치 0을 보고 l을 1로 옮기면, 이미 2였던 왼쪽 끝이 뒤로 간다. 창 bba에 b가 두 개인데도 길이 3이 답으로 잡힌다. last >= l일 때만 옮기거나 l = max(l, last + 1)로 써야 2가 나온다.",
    anchor: "왼쪽-끝이-뒤로-가는-버그",
  },
  {
    id: "leetcode-longest-substring-without-repeating-2",
    post: "leetcode-longest-substring-without-repeating",
    question: "Set 창 풀이는 for 안에 while이 있다. 그래도 시간 복잡도가 O(n)인 이유는?",
    choices: [
      "while은 많아야 한 번만 돌기 때문이다",
      "문자 종류가 128개 이하라 while이 상수 번만 돈다",
      "Set의 has가 O(1)이라서 while 전체가 O(1)이다",
      "각 문자는 창에 한 번 들어오고 많아야 한 번 나가며, l과 r이 앞으로만 가서 전체 이동이 2n 이하다",
    ],
    answer: 3,
    explanation:
      "한 번의 while이 여러 번 돌 수는 있지만 l은 뒤로 가지 않으니 전체를 통틀어 n번 넘게 움직일 수 없다. 반복 횟수를 포인터가 움직인 총거리로 세면 2n 이하다. while이 한 번만 도는 건 아니다(abcb에서 두 번 돈다).",
    anchor: "겹치면-왼쪽을-한-칸씩-당긴다",
  },
  {
    id: "leetcode-longest-substring-without-repeating-3",
    post: "leetcode-longest-substring-without-repeating",
    question: "`\"abcbdca\"`를 해시맵 풀이로 훑을 때 6번 칸의 a에서 l은 어떻게 되나?",
    choices: [
      "a를 0번에서 봤지만 0은 l(3)보다 앞이라 l은 3 그대로다",
      "a를 0번에서 봤으니 l을 1로 옮긴다",
      "a가 중복이니 l을 6으로 옮긴다",
      "a를 처음 보니 l을 0으로 되돌린다",
    ],
    answer: 0,
    explanation:
      "해시맵은 창 밖으로 밀려난 문자의 위치도 지우지 않는다. 0번 a는 지금 창 [3, 5] 밖이라 겹침이 아니고, l은 그대로 3이다. 그래서 창 bdca의 길이 4가 답이 된다.",
    anchor: "마지막으로-본-자리로-한-번에-점프한다",
  },
  {
    id: "leetcode-longest-substring-without-repeating-4",
    post: "leetcode-longest-substring-without-repeating",
    question: "\"서로 다른 문자가 k종류 이하인 가장 긴 조각\"으로 바뀌면 마지막 위치로 점프하는 방법을 쓰기 어려운 이유는?",
    choices: [
      "해시맵에 k개보다 많은 문자를 넣을 수 없어서",
      "어느 문자를 빼야 종류가 줄어드는지 위치 하나로 알 수 없어서, 카운트를 두고 조건이 맞을 때까지 한 칸씩 당겨야 한다",
      "k가 크면 점프 거리가 음수가 되어서",
      "종류 수는 이분 탐색으로만 구할 수 있어서",
    ],
    answer: 1,
    explanation:
      "중복 0개 조건에서는 겹친 문자의 다음 칸이 새 시작점이라고 바로 정해진다. 종류 수 조건에서는 왼쪽에서 어떤 문자의 개수가 0이 될 때까지 빼야 해서, 카운트 맵으로 한 칸씩 당기는 일반적인 창으로 돌아간다.",
    anchor: "조건이-바뀌면-창이-어떻게-바뀌나",
  },
  {
    id: "leetcode-longest-substring-without-repeating-5",
    post: "leetcode-longest-substring-without-repeating",
    question: "Java에서 `int[] last = new int[128]` 풀이에 `\"café\"` 같은 문자열이 들어오면?",
    choices: [
      "é는 자동으로 e로 바뀌어 정상 동작한다",
      "é가 128칸을 덮어써서 답이 1 커진다",
      "é의 코드가 233이라 배열 범위를 벗어나 ArrayIndexOutOfBoundsException이 난다",
      "컴파일 오류가 난다",
    ],
    answer: 2,
    explanation:
      "char는 배열 인덱스로 쓰일 때 코드 값이 그대로 들어가는데, é는 233이라 128칸 배열을 벗어난다. 입력 범위를 확신할 수 없으면 HashMap이나 int[65536]을 쓴다. 128칸 배열은 ASCII로 제한된다는 제약이 있을 때만 안전하다.",
    anchor: "세-언어로-쓴-최종-코드",
  },
];
