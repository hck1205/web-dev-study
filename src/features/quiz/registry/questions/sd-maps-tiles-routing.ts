import type { QuizQuestion } from "../types";

export const SD_MAPS_TILES_ROUTING: QuizQuestion[] = [
  {
    id: "sd-maps-tiles-routing-1",
    post: "sd-maps-tiles-routing",
    question: "웹 메르카토르 지도가 위도 약 85.0511도에서 잘리는 이유는?",
    choices: [
      "그보다 북쪽에는 도로 데이터가 없어서",
      "극으로 갈수록 무한히 늘어나니, 지도 전체가 정확히 정사각형이 되는 위도에서 잘라서",
      "GPS가 그 위도 위에서는 동작하지 않아서",
      "타일 번호가 정수로 떨어지지 않아서",
    ],
    answer: 1,
    explanation:
      "메르카토르는 극에서 무한히 늘어나서 어딘가에서 잘라야 한다. 85.0511도에서 자르면 세계가 정사각형이 되어 줌마다 반씩 자르기 좋다. 도로나 GPS와는 상관없는 값이다.",
    anchor: "둥근-지구를-네모로-펴기",
  },
  {
    id: "sd-maps-tiles-routing-2",
    post: "sd-maps-tiles-routing",
    question: "줌 레벨을 10에서 12로 올리면 세계 전체의 타일 수는 몇 배가 되나?",
    choices: ["2배", "4배", "16배", "8배"],
    answer: 2,
    explanation:
      "한 단계마다 가로세로가 반씩 나뉘어 타일 수가 4배가 된다. 두 단계면 4 × 4 = 16배다. z=10은 약 105만 장, z=12는 약 1,678만 장이다.",
    anchor: "확대-단계마다-넷으로-쪼갠다",
  },
  {
    id: "sd-maps-tiles-routing-3",
    post: "sd-maps-tiles-routing",
    question: "앱이 서울 타일을 요청했는데 바다나 남반구 그림이 뜬다. 가장 먼저 의심할 것은?",
    choices: [
      "CDN 캐시가 오래됐다",
      "줌 레벨이 너무 높다",
      "경도와 위도의 소수점 자리가 모자라다",
      "서버와 앱이 y를 세는 방향(XYZ와 TMS)이 달라 위아래가 뒤집혔다",
    ],
    answer: 3,
    explanation:
      "XYZ는 y를 북쪽에서, TMS는 남쪽에서 센다. 둘을 섞으면 y가 2^z − 1 − y로 뒤집혀 엉뚱한 위도의 타일이 뜬다. 오래된 캐시라면 서울의 옛 그림이 뜰 뿐 다른 땅이 뜨지는 않는다.",
    anchor: "확대-단계마다-넷으로-쪼갠다",
  },
  {
    id: "sd-maps-tiles-routing-4",
    post: "sd-maps-tiles-routing",
    question: "타일 주소에 지도 버전(v42 같은)을 넣는 이유는?",
    choices: [
      "긴 캐시 기한을 걸어 두고도, 지도를 다시 그리면 새 주소로 새 그림을 받게 하려고",
      "사용자별로 다른 타일을 주려고",
      "타일 파일 크기를 줄이려고",
      "CDN이 버전 없는 주소를 거부해서",
    ],
    answer: 0,
    explanation:
      "주소가 바뀌면 CDN과 앱의 캐시에서 다른 파일이 된다. 그래서 무효화 요청 없이 1년짜리 기한을 걸 수 있다. 버전은 크기나 사용자 구분과는 상관없다.",
    anchor: "타일은-미리-그려-cdn에-둔다",
  },
  {
    id: "sd-maps-tiles-routing-5",
    post: "sd-maps-tiles-routing",
    question: "길 찾기 그래프의 간선 무게로 거리 대신 지나가는 시간을 쓰면 예제 도로망에서 어떤 길이 뽑히나?",
    choices: [
      "거리가 가장 짧은 아래쪽 골목 S→A→C→F→G (14.23분)",
      "S→A→B→E→G (약 11.6분)",
      "거리는 더 길어도 고속도로를 타는 S→H→D→G (10.15분)",
      "어떤 길도 못 찾는다",
    ],
    answer: 2,
    explanation:
      "시간 기준이라 시속 90km 고속도로가 든 S→H→D→G가 가장 빠르다. 골목 길은 거리는 짧아도 시속 30km라 14.23분이 걸린다. 사용자가 원하는 건 대개 가장 빨리 도착하는 길이다.",
    anchor: "교차로는-점-도로는-선",
  },
  {
    id: "sd-maps-tiles-routing-6",
    post: "sd-maps-tiles-routing",
    question: "다익스트라 코드에서 대기열에서 꺼낸 노드가 이미 확정됐으면 건너뛰는 줄이 필요한 이유는?",
    choices: [
      "음수 무게를 처리하려고",
      "이진 힙은 든 값을 고치기 어려워 더 짧은 값을 새로 넣으니, 낡은 값이 나중에 다시 꺼내지기 때문에",
      "목적지에 빨리 닿으려고",
      "대기열이 비지 않게 하려고",
    ],
    answer: 1,
    explanation:
      "예제에서 E는 10.65로 들어갔다가 B를 거친 10.02로 한 번 더 들어갔다. 10.65는 나중에 꺼낼 때 버려야 한다. 이 줄이 없으면 같은 노드를 여러 번 처리해 큰 그래프에서 느려진다.",
    anchor: "가까운-곳부터-확정하는-다익스트라",
  },
  {
    id: "sd-maps-tiles-routing-7",
    post: "sd-maps-tiles-routing",
    question: "A*의 추정값으로 \"직선거리 ÷ 최고 속도\"를 쓰는 이유는?",
    choices: [
      "실제 남은 시간보다 절대 크지 않아서 최단 경로를 보장하면서도 목적지 쪽부터 뒤지게 하려고",
      "계산이 가장 정확해서",
      "추정이 실제보다 커야 최단 경로를 보장해서",
      "다익스트라와 같은 순서로 뒤지게 하려고",
    ],
    answer: 0,
    explanation:
      "직선보다 짧은 길도, 최고 속도보다 빠른 도로도 없으니 이 추정은 실제보다 작거나 같다. 그래서 A*가 답을 놓치지 않는다. 추정이 실제보다 커지면 빨라지지만 가장 빠른 길을 놓칠 수 있다.",
    anchor: "목적지-쪽으로-기울이는-a",
  },
];
