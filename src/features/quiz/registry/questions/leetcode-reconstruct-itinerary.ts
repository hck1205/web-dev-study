import type { QuizQuestion } from "../types";

export const LEETCODE_RECONSTRUCT_ITINERARY: QuizQuestion[] = [
  {
    id: "leetcode-reconstruct-itinerary-1",
    post: "leetcode-reconstruct-itinerary",
    question:
      "표가 JFK→BOS, JFK→LAX, LAX→DEN, DEN→JFK, BOS→MIA일 때 매번 이름이 가장 앞선 공항으로만 가면 어떻게 되나?",
    choices: [
      "JFK, BOS, MIA에서 표 세 장이 남은 채 막힌다",
      "JFK, BOS, MIA, LAX, DEN, JFK가 나오고 정답이다",
      "JFK, LAX, DEN, JFK, BOS, MIA가 나오고 정답이다",
      "BOS에서 무한히 돈다",
    ],
    answer: 0,
    explanation:
      "BOS가 LAX보다 앞서서 BOS로 가고, BOS에서는 MIA행밖에 없다. MIA는 나가는 표가 없는 막다른 공항이라 표 세 장이 남은 채 멈춘다. 막다른 곳은 일정의 끝에만 와야 하는데 탐욕은 그걸 너무 일찍 밟는다.",
    anchor: "이름순으로만-가면-표가-남는다",
  },
  {
    id: "leetcode-reconstruct-itinerary-2",
    post: "leetcode-reconstruct-itinerary",
    question: "히어홀처 알고리즘에서 공항을 route에 적는 시점은 언제이고, 그래서 마지막에 무엇을 하나?",
    choices: [
      "공항에 처음 들어갈 때 적고, 그대로 돌려준다",
      "공항에 처음 들어갈 때 적고, 정렬해서 돌려준다",
      "그 공항에서 나갈 표를 다 쓴 뒤에 적고, 마지막에 뒤집는다",
      "표를 쓸 때마다 출발 공항을 적고, 마지막에 도착 공항을 붙인다",
    ],
    answer: 2,
    explanation:
      "더 나갈 표가 없을 때 적으니 막다른 갈래가 먼저 적힌다. 먼저 적힌 것이 일정의 뒤쪽이라 마지막에 뒤집는다. 들어갈 때 적는 전위 순서로 바꾸면 예시에서 MIA 다음에 LAX가 오는, 이어지지도 않는 일정이 나온다.",
    anchor: "막다른-곳을-일정-끝에-적는-히어홀처",
  },
  {
    id: "leetcode-reconstruct-itinerary-3",
    post: "leetcode-reconstruct-itinerary",
    question: "백트래킹 풀이에서 공항이 아니라 표에 '썼다' 표시를 해야 하는 이유는?",
    choices: [
      "공항 이름이 세 글자라 해시가 충돌해서",
      "일정은 같은 공항을 여러 번 지나고, 같은 구간 표도 여러 장일 수 있어서",
      "표를 표시하면 정렬을 안 해도 돼서",
      "공항에 표시하면 사전 순이 깨져서",
    ],
    answer: 1,
    explanation:
      "예시만 봐도 JFK를 두 번 지나야 한다. 공항에 표시하면 DEN에서 JFK로 돌아갈 수 없어 일정을 하나도 완성하지 못한다. 모든 '간선'을 한 번씩 쓰는 문제라 표시도 간선에 한다.",
    anchor: "공항-표시와-문자열-정렬에서-틀린다",
  },
  {
    id: "leetcode-reconstruct-itinerary-4",
    post: "leetcode-reconstruct-itinerary",
    question: "JavaScript에서 공항 목록을 list.sort((a, b) => b - a)로 정렬하면 어떻게 되나?",
    choices: [
      "내림차순으로 잘 정렬된다",
      "TypeError가 난다",
      "오름차순으로 정렬된다",
      "문자열끼리 빼면 NaN이 나와 같다고 취급되어 원래 순서가 그대로 남는다",
    ],
    answer: 3,
    explanation:
      "문자열 뺄셈은 NaN이고, 비교 함수가 NaN을 돌려주면 V8은 같은 것으로 보고 순서를 바꾸지 않는다. 에러가 없어서 찾기 어렵다. (a, b) => (a < b ? 1 : a > b ? -1 : 0)이나 sort().reverse()를 쓴다.",
    anchor: "공항-표시와-문자열-정렬에서-틀린다",
  },
  {
    id: "leetcode-reconstruct-itinerary-5",
    post: "leetcode-reconstruct-itinerary",
    question: "방향 그래프에 출발점과 도착점이 다른 오일러 경로가 있을 차수 조건은?",
    choices: [
      "모든 노드의 진입 차수와 진출 차수가 같다",
      "출발점은 진출이 하나 많고, 도착점은 진입이 하나 많고, 나머지는 같다",
      "모든 노드의 차수가 짝수다",
      "진입 차수가 0인 노드가 정확히 하나다",
    ],
    answer: 1,
    explanation:
      "출발점에서는 한 번 더 나가고 도착점에서는 한 번 더 들어오니 그 둘만 하나씩 어긋난다. 모두 같으면 출발점으로 돌아오는 오일러 회로다. 짝수 차수 조건은 방향이 없는 그래프의 회로 조건이다.",
    anchor: "모든-간선을-한-번씩-지나는-길",
  },
];
