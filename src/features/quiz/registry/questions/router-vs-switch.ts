import type { QuizQuestion } from "../types";

export const ROUTER_VS_SWITCH: QuizQuestion[] = [
  {
    id: "router-vs-switch-1",
    post: "router-vs-switch",
    question: "같은 대역의 A에서 B로 간 ping을 스위치 양쪽 포트에서 찍었다. 두 캡처에서 달라지는 것은?",
    choices: [
      "보내는 MAC이 스위치 MAC으로 바뀐다",
      "TTL이 하나 줄어든다",
      "캡처 시각 말고는 달라지는 것이 없다",
      "IP 체크섬이 다시 계산된다",
    ],
    answer: 2,
    explanation:
      "스위치는 받는 MAC을 표에서 찾아 그 포트로 넘길 뿐 프레임을 고치지 않는다. MAC을 갈아 끼우고 TTL을 줄이며 체크섬을 다시 계산하는 건 라우터가 하는 일이다.",
    anchor: "스위치는-봉투를-뜯지-않는다",
  },
  {
    id: "router-vs-switch-2",
    post: "router-vs-switch",
    question: "A(10.0.1.11)가 다른 대역의 C(10.0.2.13)로 처음 패킷을 보낼 때 ARP로 묻는 대상은?",
    choices: [
      "C의 MAC",
      "게이트웨이(라우터) 10.0.1.1의 MAC",
      "스위치의 MAC",
      "DNS 서버의 MAC",
    ],
    answer: 1,
    explanation:
      "다른 대역이면 다음 칸은 게이트웨이라서 A는 라우터의 MAC만 알면 된다. 안쪽 IP 목적지는 C 그대로이고, C의 MAC은 라우터가 자기 이웃 표에서 찾는다.",
    anchor: "라우터는-봉투를-갈아-끼운다",
  },
  {
    id: "router-vs-switch-3",
    post: "router-vs-switch",
    question: "A가 보낸 ARP 브로드캐스트를 같은 스위치의 B는 받고 라우터 너머의 C는 받지 못했다. 이유는?",
    choices: [
      "라우터는 브로드캐스트를 다른 인터페이스로 넘기지 않아서",
      "C의 방화벽이 ARP를 막아서",
      "스위치가 라우터 포트로는 브로드캐스트를 보내지 않아서",
      "ARP는 TTL이 1이라서",
    ],
    answer: 0,
    explanation:
      "스위치는 라우터 포트로도 브로드캐스트를 보내지만, 라우터는 그것을 다른 다리로 넘기지 않는다. 그래서 라우터가 브로드캐스트 도메인의 경계가 된다. ARP는 IP 패킷이 아니라 TTL이 없다.",
    anchor: "브로드캐스트는-라우터-앞에서-멈춘다",
  },
  {
    id: "router-vs-switch-4",
    post: "router-vs-switch",
    question: "STP가 꺼진 두 스위치 사이에 선을 하나 더 꽂으면 망 전체가 멈추지만, 라우터 경로가 서로를 가리키면 그 대역만 안 된다. 차이를 만드는 것은?",
    choices: [
      "스위치가 라우터보다 처리 속도가 느려서",
      "이더넷 헤더에는 TTL이 없어서 고리 속 프레임이 끝나지 않아서",
      "라우터는 고리를 감지하면 경로를 자동으로 지워서",
      "스위치는 유니캐스트도 모두 브로드캐스트로 바꿔서",
    ],
    answer: 1,
    explanation:
      "L2 프레임에는 TTL이 없어 브로드캐스트가 고리를 끝없이 돌고, 실습에서는 ARP 한 장이 3초 동안 1490번 도착했다. IP 패킷은 라우터를 지날 때마다 TTL이 줄어 63번 오간 뒤 Time Exceeded로 끝났다.",
    anchor: "고리가-생기면-갈리는-운명",
  },
  {
    id: "router-vs-switch-5",
    post: "router-vs-switch",
    question: "STP 망에서 쓰던 링크가 끊긴 뒤 막혀 있던 포트가 바로 열리지 않고 listening, learning을 거치는 이유는?",
    choices: [
      "새 포트의 MAC 표를 비우는 데 시간이 걸려서",
      "BPDU를 암호화하는 데 시간이 걸려서",
      "다른 스위치들이 새 나무 모양을 알기 전에 열면 잠깐이라도 고리가 생길 수 있어서",
      "링크 속도를 협상하는 시간이라서",
    ],
    answer: 2,
    explanation:
      "802.1D는 forward_delay 동안 두 단계를 기다려 모든 스위치가 바뀐 구성을 알아차린 뒤에 포트를 연다. 그 대가로 실습에서는 8초, 기본값이면 30~50초 동안 통신이 끊기고, 이를 줄이려고 RSTP가 나왔다.",
    anchor: "고리를-끊어-두는-stp",
  },
  {
    id: "router-vs-switch-6",
    post: "router-vs-switch",
    question: "사무실 안에서 VLAN 사이 트래픽은 L3 스위치가 맡는데도 인터넷과 맞닿는 곳에 라우터를 두는 이유로 가장 알맞은 것은?",
    choices: [
      "L3 스위치는 TTL을 줄이지 못해서",
      "L3 스위치는 경로 표가 작고 NAT, VPN, WAN 인터페이스, 깊은 버퍼 같은 기능이 빠져 있거나 제한된 경우가 많아서",
      "L3 스위치는 IP 주소를 가질 수 없어서",
      "라우터만 VLAN을 이해해서",
    ],
    answer: 1,
    explanation:
      "L3 스위치는 SVI로 VLAN 사이를 칩에서 빠르게 라우팅하지만 TCAM에 담을 경로 수가 적고 가장자리에서 필요한 기능이 부족한 경우가 많다. 그래서 안쪽은 L3 스위치, 바깥과의 경계는 라우터가 맡는 구성이 흔하다.",
    anchor: "l3-스위치는-어느-쪽인가",
  },
  {
    id: "router-vs-switch-7",
    post: "router-vs-switch",
    question: "다른 대역 서버로 요청은 도착하는데(상대 쪽 캡처에 보임) 응답이 오지 않는다. 가장 먼저 의심할 것은?",
    choices: [
      "스위치의 MAC 표가 가득 찼다",
      "내 쪽 ARP 캐시가 오래됐다",
      "STP가 포트를 막았다",
      "상대 쪽에 내 대역으로 돌아오는 경로가 없거나 다른 길로 간다",
    ],
    answer: 3,
    explanation:
      "요청이 도착했다면 가는 길은 맞다. 다른 대역 통신에서 흔한 실수는 돌아오는 길을 빠뜨리는 것이라서, 상대 쪽 라우팅 테이블과 중간 장비의 포워딩을 확인한다.",
    anchor: "어느-쪽이-문제인지-가르는-순서",
  },
];
