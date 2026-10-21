import type { QuizQuestion } from "../types";

export const NAT_TRAVERSAL: QuizQuestion[] = [
  {
    id: "nat-traversal-1",
    post: "nat-traversal",
    question: "STUN 서버의 두 IP에 각각 물었더니 바깥 주소가 203.0.113.1:45170과 203.0.113.1:31287로 달랐다. 이 NAT의 성격은?",
    choices: [
      "Full cone",
      "Port restricted cone",
      "Symmetric",
      "NAT가 없다",
    ],
    answer: 2,
    explanation:
      "같은 내부 포트인데 목적지마다 다른 공인 포트를 쓰는 것이 symmetric NAT다. cone 계열은 목적지와 무관하게 같은 공인 포트를 쓰고, 필터링 방식만 다르다.",
    anchor: "매핑과-필터링-두-가지로-성격이-갈린다",
  },
  {
    id: "nat-traversal-2",
    post: "nat-traversal",
    question: "STUN 답에 MappedAddress와 함께 XorMappedAddress를 따로 싣는 이유는?",
    choices: [
      "주소를 암호화해서 도청을 막으려고",
      "IPv6 주소를 담기 위해서",
      "패킷 크기를 줄이려고",
      "패킷 속 IP를 고쳐 쓰는 오래된 공유기(ALG)가 답 속 주소까지 바꾸지 못하게 하려고",
    ],
    answer: 3,
    explanation:
      "일부 NAT 장비는 패킷 본문에 든 IP 주소까지 사설 주소로 바꿔 쓴다. 주소를 매직 쿠키와 XOR해 실으면 장비가 알아보지 못해 그대로 전달된다. 암호화가 아니라 단순한 섞기다.",
    anchor: "stun으로-내-바깥-주소를-알아낸다",
  },
  {
    id: "nat-traversal-3",
    post: "nat-traversal",
    question: "두 피어가 홀 펀칭을 할 때 A가 보낸 첫 패킷이 B의 NAT에서 버려졌다. 그런데도 결국 연결이 되는 이유는?",
    choices: [
      "버려진 패킷이 나가면서 A의 NAT에 B가 기록돼, B의 패킷이 A의 NAT를 통과하고 그때 B의 NAT에도 A가 기록되기 때문에",
      "B의 NAT가 버린 패킷을 잠시 보관했다가 나중에 전달하기 때문에",
      "랑데부 서버가 버려진 패킷을 대신 전달하기 때문에",
      "UDP는 NAT의 영향을 받지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "나가는 패킷은 상대 NAT에서 버려져도 내 NAT의 변환 표에는 상대를 남긴다. 양쪽이 동시에 보내면 서로의 표가 채워져 양방향이 열리고, 실습에서도 A의 #0만 버려지고 #1부터 통했다.",
    anchor: "동시에-보내서-길을-뚫는다",
  },
  {
    id: "nat-traversal-4",
    post: "nat-traversal",
    question: "리눅스 NAT 두 대 사이에서 홀 펀칭을 했는데 한쪽 NAT가 원래 포트 대신 엉뚱한 포트로 내보내 실패했다. 실습에서 확인한 원인은?",
    choices: [
      "MASQUERADE가 항상 포트를 무작위로 바꾸기 때문에",
      "상대 패킷이 먼저 도착해 NAT 자신에게 온 연결로 conntrack에 기록됐고, 그 항목과 충돌을 피하려고 포트를 바꿨기 때문에",
      "UDP 매핑 시간이 30초로 짧아서",
      "랑데부 서버가 주소를 잘못 알려 줘서",
    ],
    answer: 1,
    explanation:
      "밖에서 먼저 온 패킷이 버려지지 않고 NAT 장비 자신에게 전달되면 그 연결이 conntrack에 남는다. 내 패킷의 변환이 그 항목과 겹치니 커널이 다른 포트를 골랐다. 밖에서 먼저 오는 새 연결을 버리는 규칙을 넣자 성공했다.",
    anchor: "동시에-보내서-길을-뚫는다",
  },
  {
    id: "nat-traversal-5",
    post: "nat-traversal",
    question: "TURN 서버를 운영할 때 앱 코드에 고정 사용자 이름과 비밀번호를 넣으면 생기는 문제는?",
    choices: [
      "STUN 요청이 실패한다",
      "relay 포트가 바닥나서 ICE가 host 후보만 쓴다",
      "누구나 그 자격 증명을 꺼내 TURN 서버를 공짜 중계기로 쓸 수 있다",
      "첫 Allocate에서 401 대신 403이 나온다",
    ],
    answer: 2,
    explanation:
      "TURN은 모든 트래픽이 서버 대역폭을 쓰는 중계기라 자격 증명이 새면 비용과 악용으로 이어진다. 그래서 서버가 사용자마다 짧은 수명의 임시 자격 증명을 발급한다. 첫 Allocate의 401은 nonce를 받는 정상 과정이다.",
    anchor: "길이-안-뚫리면-turn이-대신-나른다",
  },
  {
    id: "nat-traversal-6",
    post: "nat-traversal",
    question: "webrtc-internals를 보니 host와 srflx 후보는 있는데 모든 후보 짝이 failed이고 relay 후보가 없다. 가장 그럴듯한 원인과 조치는?",
    choices: [
      "STUN 서버 주소가 틀렸다. STUN 서버를 바꾼다",
      "양쪽 NAT 성격 때문에 홀 펀칭이 안 되는데 TURN이 설정되지 않았다. TURN 서버를 iceServers에 넣는다",
      "시그널링 서버가 죽었다. 시그널링 서버를 재시작한다",
      "브라우저가 mDNS 후보를 지원하지 않는다. mDNS를 끈다",
    ],
    answer: 1,
    explanation:
      "srflx가 있으니 STUN은 동작했고, 후보를 주고받았으니 시그널링도 됐다. 직접 연결 검사가 모두 실패했는데 relay 후보가 없으면 내려갈 곳이 없으니 TURN을 넣어야 한다.",
    anchor: "연결이-안-될-때-어디서부터-보나",
  },
  {
    id: "nat-traversal-7",
    post: "nat-traversal",
    question: "NAT의 공인 포트가 두 개뿐일 때, 같은 서버(203.0.113.10:7)로 세 번째 UDP 흐름을 열면 어떻게 되나?",
    choices: [
      "기존 흐름 하나가 끊기고 새 흐름이 그 포트를 쓴다",
      "NAT가 ICMP 오류를 보내 앱이 바로 실패를 안다",
      "세 흐름이 같은 공인 포트를 나눠 쓴다",
      "변환 표에 넣지 못해 오류 없이 버려지고 conntrack 통계의 insert_failed가 오른다",
    ],
    answer: 3,
    explanation:
      "같은 상대 주소와 포트로 가는 흐름은 NAT 공인 포트로만 구별되니 포트가 바닥나면 새 흐름은 들어갈 자리가 없다. 실습에서 패킷은 조용히 버려졌고 insert_failed=1, drop=1이 찍혔다. 상대가 다르면 같은 공인 포트를 겹쳐 쓸 수 있다.",
    anchor: "주소-하나를-수천-명이-나눌-때",
  },
];
