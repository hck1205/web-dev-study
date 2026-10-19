import type { QuizQuestion } from "../types";

export const NETWORK_LAYERS_OVERVIEW: QuizQuestion[] = [
  {
    id: "network-layers-overview-1",
    post: "network-layers-overview",
    question: "노트북에서 다른 망에 있는 서버로 요청을 보낼 때, 첫 이더넷 프레임의 받는 쪽 MAC 주소에는 무엇이 적히나?",
    choices: [
      "최종 목적지 서버의 MAC 주소",
      "기본 게이트웨이(라우터)의 MAC 주소",
      "브로드캐스트 주소 ff:ff:ff:ff:ff:ff",
      "DNS 서버의 MAC 주소",
    ],
    answer: 1,
    explanation:
      "MAC 주소는 한 구간 안에서만 쓰이는 주소라서 다른 망으로 갈 때는 이번 구간에서 받을 게이트웨이의 MAC을 적는다. 라우터는 IP는 그대로 두고 다음 구간용 이더넷 헤더를 새로 단다. 브로드캐스트는 ARP 요청처럼 주소를 모를 때 쓴다.",
    anchor: "장비는-자기-층까지만-뜯어-본다",
  },
  {
    id: "network-layers-overview-2",
    post: "network-layers-overview",
    question: "받는 쪽 커널이 이더넷 프레임을 뜯은 뒤 안쪽 내용을 IPv4 처리기로 넘길지 정하는 근거는?",
    choices: [
      "IP 헤더의 TTL 값",
      "TCP 목적지 포트",
      "이더넷 헤더의 EtherType 값(0x0800)",
      "프레임 끝의 FCS",
    ],
    answer: 2,
    explanation:
      "각 헤더에는 안에 든 것이 무엇인지 알리는 칸이 있다. 이더넷은 EtherType(0x0800이면 IPv4), IP는 프로토콜 번호(6이면 TCP), TCP는 포트로 다음 처리기를 고른다. FCS는 프레임이 깨졌는지 검사하는 값이다.",
    anchor: "실제-프레임-한-장을-벗겨-보면",
  },
  {
    id: "network-layers-overview-3",
    post: "network-layers-overview",
    question: "\"L4 헬스 체크는 통과하는데 L7에서 502가 난다\"는 말을 가장 잘 풀어 쓴 것은?",
    choices: [
      "서버의 랜선이 빠졌다",
      "라우팅 테이블에 서버로 가는 경로가 없다",
      "TCP 포트 연결은 맺어지지만 HTTP로 물으면 프록시가 뒤쪽에서 제대로 된 응답을 받지 못한다",
      "DNS가 엉뚱한 IP를 돌려준다",
    ],
    answer: 2,
    explanation:
      "L4 헬스 체크는 포트에 TCP 연결이 되는지만 보므로 앱이 멈춰 있어도 통과할 수 있다. 502는 프록시 같은 L7 장비가 뒤쪽에서 잘못된 응답을 받았을 때 만드는 코드다. 랜선이나 경로 문제였다면 L4 체크부터 실패했을 것이다.",
    anchor: "l4-l7이라고-부를-때",
  },
  {
    id: "network-layers-overview-4",
    post: "network-layers-overview",
    question: "nc로 서버 포트를 확인했더니 바로 \"Connection refused\"가 나왔다. 가장 그럴듯한 해석은?",
    choices: [
      "중간 방화벽이 패킷을 조용히 버렸다",
      "패킷은 서버까지 갔고, 그 포트를 듣는 프로세스가 없어 서버 커널이 RST로 답했다",
      "서버로 가는 경로가 없다",
      "케이블 건너편 신호가 끊겼다",
    ],
    answer: 1,
    explanation:
      "refused는 서버 커널이 RST로 바로 거절한 것이라 경로(L3)는 살아 있고 L4에서 듣는 프로그램이 없다는 뜻이다. 방화벽이 DROP하면 응답이 없어서 timed out이 난다. 경로가 없으면 Network is unreachable 같은 메시지가 나온다.",
    anchor: "현장에서-계층-번호가-쓰이는-순간",
  },
  {
    id: "network-layers-overview-5",
    post: "network-layers-overview",
    question: "OSI 7계층과 TCP/IP 4계층의 관계로 맞는 것은?",
    choices: [
      "TCP/IP는 OSI의 세션·표현·응용 계층을 응용 계층 하나로 묶었다",
      "TCP/IP에는 전송 계층이 없다",
      "OSI의 네트워크 계층은 TCP/IP의 링크 계층에 해당한다",
      "실무에서 말하는 L7은 TCP/IP 모델의 일곱 번째 층이다",
    ],
    answer: 0,
    explanation:
      "아래쪽 층은 거의 그대로 맞고, OSI의 5·6·7이 TCP/IP에서는 응용 계층으로 합쳐졌다. TCP/IP 모델에는 7번째 층이 없어서 L3, L4, L7 같은 번호는 OSI 번호를 빌려 쓰는 것이다.",
    anchor: "일곱-층과-네-층",
  },
  {
    id: "network-layers-overview-6",
    post: "network-layers-overview",
    question: "NAT 장비가 IP 주소를 바꿀 때 TCP 체크섬까지 다시 계산해야 하는 이유는?",
    choices: [
      "TCP 체크섬이 MAC 주소를 포함하기 때문에",
      "TCP 체크섬이 IP 주소가 든 가짜 헤더(pseudo-header)까지 넣고 계산되기 때문에",
      "IP 헤더에 체크섬이 없기 때문에",
      "TCP는 패킷마다 암호화되기 때문에",
    ],
    answer: 1,
    explanation:
      "TCP 체크섬은 출발지·목적지 IP가 든 pseudo-header까지 포함하므로 L3 주소가 바뀌면 L4 체크섬도 틀어진다. 계층이 완전히 독립적이지 않은 대표적인 예다. IP 헤더에도 따로 체크섬이 있어서 그것도 함께 고친다.",
    anchor: "층이-깔끔하게-나뉘지-않는-곳",
  },
];
