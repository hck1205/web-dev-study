import type { QuizQuestion } from "../types";

export const LEETCODE_DESIGN_TWITTER: QuizQuestion[] = [
  {
    id: "leetcode-design-twitter-1",
    post: "leetcode-design-twitter",
    question: "피드를 만들 때 팔로우한 사람마다 가장 최근 트윗 하나씩만 힙에 넣어도 되는 이유는?",
    choices: [
      "힙의 크기에 제한이 있어서",
      "사람별 목록이 이미 시각순이라, 그 사람의 가장 최근 트윗이 꺼내지기 전에는 그다음 트윗이 나올 수 없어서",
      "한 사람의 트윗은 피드에 하나만 나오기 때문에",
      "트윗 id가 클수록 최근이기 때문에",
    ],
    answer: 1,
    explanation:
      "각 사람의 두 번째로 최근 트윗은 그 사람의 가장 최근 트윗보다 먼저 나올 수 없다. 그래서 후보만 힙에 두고, 하나를 꺼낼 때 같은 사람의 바로 앞 트윗을 넣으면 된다. 트윗 id는 쓴 순서와 관계가 없다.",
    anchor: "왜-사람마다-하나씩만-힙에-넣나",
  },
  {
    id: "leetcode-design-twitter-2",
    post: "leetcode-design-twitter",
    question: "사용자 1이 7, 42 순서로, 사용자 2가 15, 3 순서로 번갈아 썼다(7, 15, 3, 42 순). 1이 2를 팔로우하면 피드는?",
    choices: ["[42, 15, 7, 3]", "[42, 3, 15, 7]", "[3, 7, 15, 42]", "[15, 3, 42, 7]"],
    answer: 1,
    explanation:
      "쓴 순서는 7, 15, 3, 42라서 최근부터 읽으면 42, 3, 15, 7이다. id로 정렬한 [42, 15, 7, 3]이 가장 흔한 오답이다. 최근은 쓴 순서이지 id의 크기가 아니다.",
    anchor: "시각-대신-트윗-id로-정렬하면-틀린다",
  },
  {
    id: "leetcode-design-twitter-3",
    post: "leetcode-design-twitter",
    question: "팔로우 Set에 자기 자신을 미리 넣어 두는 설계에서 unfollow(1, 1)이 들어오면?",
    choices: [
      "아무 일도 일어나지 않는다",
      "피드에 내 트윗이 두 번씩 나온다",
      "피드에서 내 트윗이 사라진다",
      "오류가 나서 멈춘다",
    ],
    answer: 2,
    explanation:
      "자기 자신이 팔로우 Set에서 빠지니 피드를 모을 때 내 목록을 보지 않는다. 그래서 자기 자신은 팔로우 목록 밖에서 따로 넣고, 자기 자신에 대한 팔로우와 언팔로우는 무시한다. 두 번씩 나오는 건 자기 팔로우를 막지 않았을 때의 증상이다.",
    anchor: "시각-대신-트윗-id로-정렬하면-틀린다",
  },
  {
    id: "leetcode-design-twitter-4",
    post: "leetcode-design-twitter",
    question: "모든 트윗을 한 배열에 쌓고 뒤에서 거르는 설계가 가장 느려지는 상황은?",
    choices: [
      "500명이 서로 모두 팔로우할 때",
      "사용자가 트윗을 한 번도 안 썼을 때",
      "팔로우 수가 많을 때",
      "오래전에 한 번 쓰고 조용한 사람만 팔로우하고, 다른 사람들이 계속 쓸 때",
    ],
    answer: 3,
    explanation:
      "피드를 열 때마다 팔로우하지 않는 사람들의 트윗을 끝까지 훑어야 10개를 못 채운 채 배열 처음에 닿는다. 실제로 피드 1만 번이 2.2초였다. 모두가 서로 팔로우하면 끝의 10개가 바로 답이라 오히려 가장 빨랐다.",
    anchor: "모든-트윗을-한-줄에-쌓고-뒤에서-거른다",
  },
  {
    id: "leetcode-design-twitter-5",
    post: "leetcode-design-twitter",
    question: "트윗을 쓸 때 팔로워 피드에 미리 넣는 push 방식의 대가가 아닌 것은?",
    choices: [
      "피드 열기가 팔로우 수에 비례해 느려진다",
      "쓰기 한 번이 팔로워 수만큼 비싸진다",
      "같은 트윗의 참조가 팔로워 수만큼 저장된다",
      "팔로우와 언팔로우 때 피드를 다시 섞거나 걸러 내야 한다",
    ],
    answer: 0,
    explanation:
      "push 방식은 피드를 미리 만들어 두어서 열기가 O(10)이다. 대신 쓰기, 공간, 팔로우 변경에서 비용을 치른다. 피드 열기가 팔로우 수에 끌려가는 것은 힙으로 합치는 pull 방식 쪽이다.",
    anchor: "쓸-때-팔로워-피드에-미리-꽂아-둔다",
  },
];
