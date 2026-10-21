import type { QuizQuestion } from "../types";

export const SD_KV_STORE_VERSIONING: QuizQuestion[] = [
  {
    id: "sd-kv-store-versioning-1",
    post: "sd-kv-store-versioning",
    question: "복제본마다 쓰기가 도착한 순서로 최신 값을 정하면 안 되는 이유는?",
    choices: [
      "도착 순서는 노드마다 달라서 노드끼리 서로 다른 결론을 낼 수 있다",
      "도착 순서를 기록하는 데 디스크가 너무 많이 든다",
      "도착 순서는 항상 쓰기 시각과 같아서 의미가 없다",
      "코디네이터만 도착 순서를 알 수 있다",
    ],
    answer: 0,
    explanation:
      "휴대폰과 노트북의 쓰기가 서로 다른 경로로 퍼지면 Sx에는 노트북 쪽이, 다른 노드에는 휴대폰 쪽이 먼저 닿을 수 있다. 모든 노드가 같은 결론을 내리려면 값 자체에 판단 근거가 붙어 있어야 한다.",
    anchor: "같은-키에-쓰기-두-개가-엇갈리면",
  },
  {
    id: "sd-kv-store-versioning-2",
    post: "sd-kv-store-versioning",
    question: "마지막 쓰기 승리(LWW)를 쓰는 저장소에서 실제로 30ms 늦게 한 쓰기가 사라졌다. 가장 먼저 의심할 것은?",
    choices: [
      "복제 계수 N이 너무 작다",
      "블룸 필터의 거짓 양성",
      "쓰기에 시각을 붙인 쪽의 시계가 늦게 가고 있다",
      "읽기 쿼럼 R이 너무 크다",
    ],
    answer: 2,
    explanation:
      "LWW는 붙은 시각만 보고 큰 쪽을 남긴다. 시계가 80ms 늦은 노드가 붙인 시각은 실제보다 이르니, 나중에 한 쓰기가 오류 없이 진다. Cassandra는 드라이버가 시각을 붙이는 경우가 많아 앱 서버 시계도 본다.",
    anchor: "시각을-붙여-늦은-쪽을-남기면",
  },
  {
    id: "sd-kv-store-versioning-3",
    post: "sd-kv-store-versioning",
    question: "버전 {Sx:2, Sy:1}과 {Sx:2, Sz:1}을 비교한 결과는?",
    choices: [
      "앞의 것이 조상이다",
      "뒤의 것이 조상이다",
      "같은 버전이다",
      "서로를 보지 못한 동시 쓰기라서 둘 다 남긴다",
    ],
    answer: 3,
    explanation:
      "Sy 칸은 앞이 크고 Sz 칸은 뒤가 크다. 한쪽의 모든 칸이 작거나 같지 않으니 동시다. 둘 다 {Sx:2}를 보고 고친 형제 버전이고, 앱이 합칠 때까지 함께 남는다.",
    anchor: "서버마다-칸을-하나씩-둔-시계",
  },
  {
    id: "sd-kv-store-versioning-4",
    post: "sd-kv-store-versioning",
    question: "장바구니 형제 버전을 합집합으로 합쳤더니 지운 상품이 다시 나타났다. 왜인가?",
    choices: [
      "벡터 시계가 잘려서 조상을 형제로 봤다",
      "합집합은 넣은 것만 합치고 뺀 기록은 없어서, 다른 형제에 남은 상품이 되살아난다",
      "LWW가 삭제를 먼저 처리했다",
      "읽기 쿼럼이 부족해 옛 값을 읽었다",
    ],
    answer: 1,
    explanation:
      "노트북은 우유를 뺐지만 휴대폰 쪽 형제에는 우유가 남아 있어 합집합에 들어간다. 삭제까지 지키려면 원소마다 넣은 기록에 꼬리표를 붙이는 OR-Set 같은 CRDT를 쓴다.",
    anchor: "형제를-합치는-일은-누가-하나",
  },
  {
    id: "sd-kv-store-versioning-5",
    post: "sd-kv-store-versioning",
    question: "두 클라이언트가 같은 문맥 {Sx:2}를 들고 같은 서버 Sx로 동시에 쓴다. 서버 이름만 칸으로 쓰는 벡터 시계의 문제는?",
    choices: [
      "칸 수가 클라이언트 수만큼 늘어난다",
      "두 쓰기가 같은 시계를 받거나 {Sx:3}, {Sx:4}처럼 앞뒤로 보여서 하나가 사라진다",
      "두 쓰기가 모두 거절된다",
      "Sx의 칸이 0으로 초기화된다",
    ],
    answer: 1,
    explanation:
      "둘 다 Sx 2까지만 봤는데 시계로는 한쪽이 다른 쪽을 덮는 것처럼 보인다. 쓰기마다 dot이라는 고유 이름을 붙이고 본 문맥과 나누는 Dotted Version Vector가 둘 다 남긴다.",
    anchor: "칸에-누구-이름을-적을까",
  },
  {
    id: "sd-kv-store-versioning-6",
    post: "sd-kv-store-versioning",
    question: "벡터 시계의 칸이 상한을 넘어 오래된 칸을 잘랐을 때 생길 수 있는 일은?",
    choices: [
      "원래 조상이던 버전이 동시로 보여 불필요한 형제가 생긴다",
      "동시 쓰기를 앞뒤로 착각해 하나를 버린다",
      "모든 형제가 한꺼번에 지워진다",
      "읽기가 항상 실패한다",
    ],
    answer: 0,
    explanation:
      "칸을 지우면 그 칸에서 옛 버전이 더 커 보여 동시로 판정된다. 쓰기를 버리는 쪽이 아니라 형제가 늘어나는 쪽이라 대가는 앱이 한 번 더 합치는 정도다.",
    anchor: "시계가-길어지면-잘라야-한다",
  },
  {
    id: "sd-kv-store-versioning-7",
    post: "sd-kv-store-versioning",
    question: "재고 수량처럼 충돌을 아예 허용하면 안 되는 값에 가장 맞는 방법은?",
    choices: ["마지막 쓰기 승리", "벡터 시계와 형제", "합집합 병합", "읽은 버전일 때만 쓰는 조건부 쓰기"],
    answer: 3,
    explanation:
      "조건부 쓰기는 늦은 쪽을 거절하고 다시 읽어 시도하게 한다. 충돌한 두 값을 함께 남기지 않으니 재고나 잔액에 맞다. 대신 끊긴 쪽에서는 쓰기를 받지 못해 가용성을 일부 내준다.",
    anchor: "어떤-방법을-고르나",
  },
];
