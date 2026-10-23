import type { QuizQuestion } from "../types";

export const NETWORK_DESIGN_THREE_TIER_SPINE_LEAF: QuizQuestion[] = [
  {
    id: "network-design-three-tier-spine-leaf-1",
    post: "network-design-three-tier-spine-leaf",
    question: "3계층 구조에서 VLAN 간 라우팅, 게이트웨이 이중화, ACL, 대역 요약을 주로 맡는 계층은?",
    choices: [
      "액세스",
      "코어",
      "디스트리뷰션",
      "경계 리프",
    ],
    answer: 2,
    explanation:
      "디스트리뷰션은 액세스 스위치를 모으는 자리이자 보통 L2와 L3의 경계라, 정책과 게이트웨이, 요약이 여기 모인다. 코어는 정책을 빼고 빠르게 나르는 일만 하도록 둔다.",
    anchor: "액세스-디스트리뷰션-코어",
  },
  {
    id: "network-design-three-tier-spine-leaf-2",
    post: "network-design-three-tier-spine-leaf",
    question: "서버 포트는 한가한데 디스트리뷰션-코어 업링크가 먼저 포화됐다. 3계층 구조에서 이런 일이 생기는 근본 이유는?",
    choices: [
      "액세스 스위치의 포트 수가 모자라서",
      "다른 pod 사이 동서 트래픽이 모두 코어를 지나기 때문에",
      "남북 트래픽이 경계 리프로 몰려서",
      "VRRP 광고가 업링크 대역을 차지해서",
    ],
    answer: 1,
    explanation:
      "3계층은 주로 바깥을 오가는 남북 트래픽을 가정한다. 서버끼리의 동서 트래픽이 커지면 다른 디스트리뷰션 아래 서버 사이 흐름이 모두 코어로 올라갔다 내려와 그 링크가 먼저 찬다.",
    anchor: "남북에서-동서로",
  },
  {
    id: "network-design-three-tier-spine-leaf-3",
    post: "network-design-three-tier-spine-leaf",
    question: "64포트 스파인과 업링크 8개짜리 리프로 2단 스파인-리프를 만들 때, 리프와 스파인의 최대 대수는?",
    choices: [
      "리프 8대, 스파인 64대",
      "리프 64대, 스파인 64대",
      "리프 512대, 스파인 8대",
      "리프 64대, 스파인 8대",
    ],
    answer: 3,
    explanation:
      "모든 리프가 모든 스파인에 하나씩 이어지므로 리프 수는 스파인 한 대의 포트 수(64)를, 스파인 수는 리프의 업링크 수(8)를 넘을 수 없다. 더 커지려면 pod를 나누고 슈퍼 스파인을 얹는다.",
    anchor: "스파인-리프-어디서-어디로-가든-홉-수가-같다",
  },
  {
    id: "network-design-three-tier-spine-leaf-4",
    post: "network-design-three-tier-spine-leaf",
    question: "리프에 25G 서버 포트 48개, 100G 스파인 업링크 4개가 있다. 스파인 한 대가 죽으면 오버서브스크립션은?",
    choices: [
      "3:1에서 4:1로 나빠진다",
      "2:1 그대로다",
      "3:1에서 2:1로 좋아진다",
      "4:1에서 6:1로 나빠진다",
    ],
    answer: 0,
    explanation:
      "서버 쪽은 48 × 25 = 1,200G, 업링크는 4 × 100 = 400G라 평소 3:1이다. 한 대가 빠지면 300G가 남아 4:1이 된다. 스파인이 많을수록 한 대가 빠질 때 잃는 몫이 작다.",
    anchor: "업링크가-얼마나-모자란가-오버서브스크립션",
  },
  {
    id: "network-design-three-tier-spine-leaf-5",
    post: "network-design-three-tier-spine-leaf",
    question: "리눅스 ECMP 경로에서 같은 두 호스트 사이 연결이 포트와 상관없이 모두 한 다음 홉으로만 갔다. 가장 그럴듯한 원인은?",
    choices: [
      "다음 홉의 weight가 서로 달라서",
      "fib_multipath_hash_policy가 0이라 IP 쌍만 해시해서",
      "스파인 하나가 죽어서",
      "/31 링크 주소를 써서",
    ],
    answer: 1,
    explanation:
      "정책 0은 출발지·목적지 IP만 해시하므로 같은 IP 쌍이면 언제나 같은 길이다. 실습에서 정책 1로 바꾸자 포트에 따라 두 스파인으로 갈렸고, 1,000개 포트가 506 대 494로 나뉘었다.",
    anchor: "ecmp는-흐름을-해시로-나눈다",
  },
  {
    id: "network-design-three-tier-spine-leaf-6",
    post: "network-design-three-tier-spine-leaf",
    question: "스파인-리프 패브릭 안에서 STP가 고리를 막을 일이 없어지는 이유는?",
    choices: [
      "모든 스위치에 BPDU Guard를 켜기 때문이다",
      "리프와 스파인 사이 링크가 하나뿐이기 때문이다",
      "리프-스파인 사이를 L3로 라우팅해 L2 고리가 생기지 않고, 같은 비용 길은 ECMP로 다 쓰기 때문이다",
      "VXLAN이 STP를 대신 실행하기 때문이다",
    ],
    answer: 2,
    explanation:
      "각 리프-스파인 링크가 독립된 IP 망이라 브로드캐스트가 리프를 넘지 않고, 라우팅은 TTL과 최단 경로로 고리를 다룬다. 그래서 링크를 막는 STP의 역할이 사라진다. BPDU Guard는 서버 포트 쪽에 남는 보조 장치일 뿐이다.",
    anchor: "스파인-리프에서-stp가-사라지는-이유",
  },
  {
    id: "network-design-three-tier-spine-leaf-7",
    post: "network-design-three-tier-spine-leaf",
    question: "리프-스파인 링크 주소에 /30 대신 /31을 쓰는 이유는?",
    choices: [
      "/31이어야 BGP 세션을 맺을 수 있어서",
      "두 장비만 있는 링크에는 망 주소와 브로드캐스트 주소가 필요 없어 주소를 절반만 쓰기 때문이다",
      "/31이 요약하기 더 쉬워서",
      "/30은 ECMP를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "RFC 3021은 점대점 링크에 /31을 허용한다. 두 주소를 모두 장비에 주니 /30보다 주소가 절반만 든다. 128개 링크면 정확히 /24 하나에 들어간다.",
    anchor: "주소-계획은-요약을-위해-한다",
  },
];
