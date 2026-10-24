import type { QuizQuestion } from "../types";

export const LEETCODE_MEETING_ROOMS: QuizQuestion[] = [
  {
    id: "leetcode-meeting-rooms-1",
    post: "leetcode-meeting-rooms",
    question: "시작 순으로 정렬한 뒤 바로 앞 회의와만 비교해도 겹침을 놓치지 않는 이유는?",
    choices: [
      "정렬하면 겹치는 회의가 항상 정확히 두 개씩 붙어 있어서",
      "겹치는 짝 (i, j)가 있으면 i와 i + 1도 반드시 겹쳐서",
      "회의 길이가 모두 같다고 가정하기 때문에",
      "끝 시각도 함께 정렬되기 때문에",
    ],
    answer: 1,
    explanation:
      "i + 1은 i 이후, j 이전에 시작한다. i + 1이 i가 끝난 뒤 시작한다면 j도 그 뒤에 시작해야 해서 i와 j가 겹친다는 가정과 어긋난다. 그래서 어딘가 겹치면 이웃도 겹치고, 이웃이 모두 괜찮으면 전체가 괜찮다.",
    anchor: "시작-순으로-세우고-이웃만-본다",
  },
  {
    id: "leetcode-meeting-rooms-2",
    post: "leetcode-meeting-rooms",
    question: "`[[0, 3], [3, 5]]`에 대해 비교를 `a[i][0] <= a[i - 1][1]`로 쓴 코드와 원래 코드(`<`)의 결과는?",
    choices: [
      "둘 다 true",
      "둘 다 false",
      "등호 버전은 false, 원래 코드는 true",
      "등호 버전은 true, 원래 코드는 false",
    ],
    answer: 2,
    explanation:
      "회의는 반쯤 열린 구간이라 3시에 끝나고 3시에 시작해도 된다. 정답은 true다. 등호를 넣으면 닿기만 하는 회의를 겹친다고 보고 false를 낸다.",
    anchor: "비교에-등호를-넣는다",
  },
  {
    id: "leetcode-meeting-rooms-3",
    post: "leetcode-meeting-rooms",
    question: "사건 스위프에서 같은 시각이면 끝(−1)을 시작(+1)보다 먼저 처리하는 이유는?",
    choices: [
      "끝점만 닿는 회의가 순간적으로 동시 진행 2로 세어지지 않게 하려고",
      "정렬이 안정 정렬이 되게 하려고",
      "음수 누적 합이 나오지 않게 하려고",
      "사건 수를 줄이려고",
    ],
    answer: 0,
    explanation:
      "3시에 끝나는 회의를 먼저 빼야 3시에 시작하는 회의를 더해도 1에 머문다. 시작을 먼저 더하면 `[[0, 3], [3, 5]]`가 순간 2가 되어 false가 나온다. 차분 배열은 같은 칸에서 둘이 한꺼번에 반영돼 이 문제가 없다.",
    anchor: "스위프에서-같은-시각의-시작을-먼저-처리한다",
  },
  {
    id: "leetcode-meeting-rooms-4",
    post: "leetcode-meeting-rooms",
    question: "정렬을 빠뜨리고 입력 순서대로 이웃만 비교하면 어떤 오류가 생기나?",
    choices: [
      "겹치는데 true를 내는 경우가 생긴다",
      "빈 목록에서 예외가 난다",
      "항상 true를 낸다",
      "겹치지 않는데 false를 내는 경우가 생긴다",
    ],
    answer: 3,
    explanation:
      "`[[5, 8], [0, 3]]`은 떨어져 있지만 입력 순서로 보면 0이 8보다 작아 false가 나온다. 반대로 모든 이웃이 '앞이 끝난 뒤 시작'을 만족하면 그 자체로 정렬돼 있고 겹치지 않으니, 겹치는데 true가 나오는 경우는 없다.",
    anchor: "정렬을-빠뜨린다",
  },
  {
    id: "leetcode-meeting-rooms-5",
    post: "leetcode-meeting-rooms",
    question: "이 문제를 '회의실이 최소 몇 개 필요한가'(253번)로 넓힐 때 그대로 확장되는 풀이는?",
    choices: [
      "시작 순 정렬 후 이웃 비교",
      "사건 스위프에서 진행 중인 회의 수의 최댓값을 구하는 것",
      "모든 짝 비교에서 겹치는 짝의 수를 세는 것",
      "끝 순 정렬 후 겹치지 않는 회의만 남기는 것",
    ],
    answer: 1,
    explanation:
      "이웃 비교는 겹치는지만 알려 주고 몇 개가 동시에 겹치는지는 모른다. 스위프는 `cur > 1`에서 멈추는 대신 최댓값을 끝까지 구하면 그게 방 수다. 겹치는 짝의 수는 방 수와 다르다.",
    anchor: "방이-몇-개-필요한가로-넘어가기",
  },
];
