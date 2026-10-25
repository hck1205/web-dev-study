import type { QuizQuestion } from "../types";

export const ROUTING_PROTOCOLS_OSPF_RIP_EIGRP: QuizQuestion[] = [
  {
    id: "routing-protocols-ospf-rip-eigrp-1",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "라우터 사이에 스위치가 끼어 있는 링크에서 건너편 라우터만 멈췄다. 플로팅 정적 경로가 예비 길로 넘어가지 못하는 이유는?",
    choices: [
      "정적 경로는 관리 거리가 1이라 다른 경로에 지지 않는다",
      "내 쪽 인터페이스가 계속 up이라 주 경로가 테이블에서 사라지지 않는다",
      "플로팅 정적 경로는 OSPF가 켜져 있어야만 동작한다",
      "스위치가 예비 경로의 ARP를 막는다",
    ],
    answer: 1,
    explanation:
      "정적 경로는 나가는 인터페이스가 내려갈 때만 사라진다. 중간 스위치 때문에 포트가 살아 있으면 주 경로가 그대로 남아 죽은 곳을 가리키고, 예비 경로는 끝까지 숨어 있다.",
    anchor: "손으로-적은-길은-스스로-바뀌지-않는다",
  },
  {
    id: "routing-protocols-ospf-rip-eigrp-2",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "A-B-C로 이어진 RIP 망에서 B-C 링크가 끊긴 뒤 A와 B가 X까지의 거리를 3, 4, 5로 계속 올린다. 이 현상을 직접 막는 규칙은?",
    choices: [
      "어떤 이웃에게서 배운 경로는 그 이웃에게 다시 광고하지 않는다",
      "홉 수 대신 대역폭으로 비용을 계산한다",
      "갱신 주기를 30초에서 10초로 줄인다",
      "경로를 /16 하나로 요약해 광고한다",
    ],
    answer: 0,
    explanation:
      "A가 B에게서 배운 X 경로를 B에게 되돌려 광고했기 때문에 B가 그 길을 믿은 것이다. 분할 수평은 이 되돌려 주기를 막는다. 갱신을 빠르게 해도 거리가 오르는 속도만 빨라질 뿐 고리는 그대로다.",
    anchor: "나쁜-소식은-천천히-퍼진다",
  },
  {
    id: "routing-protocols-ospf-rip-eigrp-3",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "OSPF 이웃이 ExStart/Exchange 상태에서 더 넘어가지 않는다. 가장 먼저 의심할 것은?",
    choices: [
      "기준 대역폭이 두 라우터에서 다르다",
      "한쪽 인터페이스가 passive로 설정됐다",
      "양쪽 인터페이스의 MTU가 다르다",
      "관리 거리가 RIP보다 크다",
    ],
    answer: 2,
    explanation:
      "ExStart와 Exchange는 DBD로 LSA 목차를 주고받는 단계인데 DBD에 인터페이스 MTU가 들어 있어서, 다르면 여기서 멈춘다. passive면 Hello 자체가 안 가서 이웃 목록에 나타나지도 않는다.",
    anchor: "현장에서-라우팅-프로토콜을-의심하는-순간",
  },
  {
    id: "routing-protocols-ospf-rip-eigrp-4",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "r1이 192.168.3.0/24를 OSPF(비용 30, r2 경유)와 RIP(홉 2, r3 경유)에게서 동시에 들었다. 실제로 쓰이는 경로와 그 이유는?",
    choices: [
      "RIP 경로, 홉 수 2가 비용 30보다 작다",
      "OSPF 경로, 관리 거리 110이 RIP의 120보다 작다",
      "두 경로를 ECMP로 나눠 쓴다",
      "먼저 배운 쪽을 쓴다",
    ],
    answer: 1,
    explanation:
      "다른 프로토콜의 메트릭은 서로 비교할 수 없어서, 같은 접두사라면 관리 거리로 출처를 먼저 고른다. OSPF 110이 RIP 120보다 작아 OSPF가 이긴다. ECMP는 같은 프로토콜 안에서 비용이 같은 길끼리만 한다.",
    anchor: "같은-목적지를-여러-프로토콜이-말할-때",
  },
  {
    id: "routing-protocols-ospf-rip-eigrp-5",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "링크는 up인 채로 패킷만 버려지는 장애에서 기본 OSPF는 약 39초 끊겼다. 끊김을 1초 아래로 줄이는 데 가장 효과가 큰 변경은?",
    choices: [
      "SPF throttle 대기 시간을 0으로 줄인다",
      "auto-cost reference-bandwidth를 올린다",
      "영역을 둘로 나눈다",
      "BFD를 켜서 링크 생존 감지를 따로 맡긴다",
    ],
    answer: 3,
    explanation:
      "이 장애에서 시간 대부분은 Dead 간격 40초를 기다리는 감지 단계에 쓰였다. BFD 300ms×3으로 감지를 맡기면 실습에서 0.7초로 줄었다. SPF 계산과 전파는 작은 망에서 이미 밀리초 단위라 줄일 것이 거의 없다.",
    anchor: "링크를-끊어-수렴을-잰다",
  },
  {
    id: "routing-protocols-ospf-rip-eigrp-6",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "OSPF 영역을 나누고 ABR에서 영역 1의 대역을 요약했다. 영역 1 안에서 링크가 흔들릴 때 영역 0 라우터에 생기는 변화는?",
    choices: [
      "요약 경로가 그대로라 SPF를 전부 다시 돌릴 일이 없다",
      "영역 1의 Router LSA를 받아 SPF를 다시 돈다",
      "영역 1 전체로 가는 경로가 잠시 사라진다",
      "ABR과의 이웃 관계가 다시 맺어진다",
    ],
    answer: 0,
    explanation:
      "Router LSA는 영역 안에서만 퍼지고, ABR은 다른 영역에 요약 정보만 넘긴다. 요약 블록이 그대로면 영역 0 라우터는 아무것도 다시 계산하지 않는다. 흔들림을 영역 안에 가두는 것이 영역과 요약을 쓰는 이유다.",
    anchor: "영역을-나누는-이유",
  },
  {
    id: "routing-protocols-ospf-rip-eigrp-7",
    post: "routing-protocols-ospf-rip-eigrp",
    question: "EIGRP에서 FD가 10인 라우터에게 이웃 N이 목적지까지 보고된 거리(RD) 12를 알려 왔다. N에 대한 판단으로 맞는 것은?",
    choices: [
      "RD가 FD보다 크니 feasible successor로 적어 둔다",
      "보고된 거리와 상관없이 모든 이웃이 예비 경로가 된다",
      "N의 경로가 나를 거쳐 올 수 있으니 feasible successor가 될 수 없다",
      "N이 곧바로 successor가 된다",
    ],
    answer: 2,
    explanation:
      "feasibility condition은 RD가 내 FD보다 작아야 한다는 것이다. RD 12는 FD 10보다 크니 N이 나보다 목적지에 확실히 가깝다고 말할 수 없고, 그 길이 나를 거쳐 돌아올 가능성을 배제하지 못한다. 그래서 예비로 믿지 않는다.",
    anchor: "eigrp는-예비-경로를-미리-들고-있다",
  },
];
