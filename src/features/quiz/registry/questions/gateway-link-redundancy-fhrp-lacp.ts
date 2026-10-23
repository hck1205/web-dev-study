import type { QuizQuestion } from "../types";

export const GATEWAY_LINK_REDUNDANCY_FHRP_LACP: QuizQuestion[] = [
  {
    id: "gateway-link-redundancy-fhrp-lacp-1",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "게이트웨이 라우터가 재부팅되는 동안 옆의 예비 라우터가 있는데도 층 전체가 바깥으로 못 나갔다. FHRP가 이 문제를 푸는 방식은?",
    choices: [
      "호스트마다 라우팅 데몬을 띄워 예비 라우터를 찾게 한다",
      "DHCP가 게이트웨이 주소를 몇 초마다 다시 나눠 준다",
      "라우터들이 가상 IP 하나를 나눠 갖고 살아 있는 쪽이 그 주소를 맡는다",
      "예비 라우터가 ICMP redirect로 호스트를 불러온다",
    ],
    answer: 2,
    explanation:
      "호스트는 기본 게이트웨이 IP 하나만 알고 라우팅 프로토콜을 하지 않는다. FHRP는 호스트를 바꾸지 않고 그 주소를 장비에서 떼어 내 살아 있는 라우터가 맡게 한다.",
    anchor: "호스트는-게이트웨이를-하나만-안다",
  },
  {
    id: "gateway-link-redundancy-fhrp-lacp-2",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "VRRPv2, 광고 간격 1초, 백업 우선순위 100일 때 마스터 전원이 나가면 백업은 마지막 광고 뒤 얼마 만에 마스터가 되나?",
    choices: [
      "약 3.6초",
      "1초",
      "약 0.6초",
      "10초",
    ],
    answer: 0,
    explanation:
      "Master_Down_Interval은 3 × 광고 간격 + (256 − 우선순위)/256이라 3 + 0.609 = 3.609초다. 0.6초는 마스터가 정상 종료하며 우선순위 0 광고를 보냈을 때 스큐 시간만 기다리는 경우다.",
    anchor: "keepalived로-전환-시간을-잰다",
  },
  {
    id: "gateway-link-redundancy-fhrp-lacp-3",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "keepalived 기본 설정(use_vmac 없음)에서 전환 직후 새 마스터가 Gratuitous ARP를 여러 번 보내는 이유는?",
    choices: [
      "VRRP 광고를 대신하기 위해",
      "가상 IP의 MAC이 새 마스터의 실제 MAC으로 바뀌어 호스트 ARP 표와 스위치 MAC 표를 고쳐야 해서",
      "백업에게 마스터가 바뀌었다고 알리기 위해",
      "DHCP 서버에 새 게이트웨이를 등록하기 위해",
    ],
    answer: 1,
    explanation:
      "keepalived는 기본으로 가상 MAC을 쓰지 않아 가상 IP에 대한 ARP 응답이 장비의 실제 MAC으로 나간다. 마스터가 바뀌면 그 MAC이 바뀌니, 묻지 않은 ARP로 이웃의 표를 고친다. 실습에서도 클라이언트의 ARP 항목이 gw2의 MAC으로 바뀌었다.",
    anchor: "keepalived로-전환-시간을-잰다",
  },
  {
    id: "gateway-link-redundancy-fhrp-lacp-4",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "마스터 150, 백업 100에서 마스터의 업링크 추적에 weight -40을 걸었다. 업링크가 끊기면 어떻게 되나?",
    choices: [
      "마스터가 110이 되어 백업에게 넘어간다",
      "백업이 140이 되어 마스터가 된다",
      "마스터가 우선순위 0 광고를 보낸다",
      "마스터는 110으로 여전히 백업보다 높아 전환이 일어나지 않는다",
    ],
    answer: 3,
    explanation:
      "추적은 자기 우선순위를 깎을 뿐이고 깎인 값이 백업보다 낮아져야 전환이 일어난다. 150 − 40 = 110은 백업 100보다 높아서 마스터가 그대로 남는다. 깎는 폭은 백업보다 낮아질 만큼(-60 같은) 줘야 한다.",
    anchor: "살아-있어도-쓸모없는-마스터",
  },
  {
    id: "gateway-link-redundancy-fhrp-lacp-5",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "두 게이트웨이가 모두 살아 있는데 같은 가상 IP를 동시에 갖게 됐다. 가장 흔한 원인은?",
    choices: [
      "한쪽의 우선순위가 255로 설정됐다",
      "선점이 꺼져 있다",
      "한쪽 방화벽이 VRRP(프로토콜 112) 광고를 막아 서로를 못 듣는다",
      "광고 간격이 1초로 너무 짧다",
    ],
    answer: 2,
    explanation:
      "VRRP는 광고가 안 들리면 상대가 죽었다고 판단한다. 광고만 막히면 둘 다 마스터가 되는 스플릿 브레인이 생긴다. 광고 길을 여러 개 두거나 유니캐스트 피어를 함께 두고, 양쪽 정책을 같이 배포해 막는다.",
    anchor: "둘-다-마스터가-되면",
  },
  {
    id: "gateway-link-redundancy-fhrp-lacp-6",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "10G 두 개를 LACP로 묶은 서버에서 파일 하나를 복사하면 10G에서 멈춘다. 왜 그런가?",
    choices: [
      "LACP가 한 번에 한 포트만 활성화하기 때문이다",
      "같은 흐름은 해시로 한 포트에 고정되어 순서 뒤바뀜을 막기 때문이다",
      "LACPDU가 대역폭의 절반을 쓰기 때문이다",
      "802.3ad는 수신 방향만 묶기 때문이다",
    ],
    answer: 1,
    explanation:
      "같은 연결의 패킷이 여러 선으로 나뉘면 도착 순서가 바뀌고 TCP가 손실로 오해해 느려진다. 그래서 LAG는 흐름 단위로 해시해 한 포트에 고정하고, 연결 하나의 상한은 선 하나다. 한 포트만 쓰는 것은 active-backup 모드다.",
    anchor: "한-흐름은-한-링크만-쓴다",
  },
  {
    id: "gateway-link-redundancy-fhrp-lacp-7",
    post: "gateway-link-redundancy-fhrp-lacp",
    question: "bond0의 두 포트에서 Aggregator ID가 서로 다르게 나온다. 무엇을 뜻하나?",
    choices: [
      "스위치가 두 포트를 한 묶음으로 받아들이지 않았다",
      "해시 정책이 layer3+4로 바뀌었다",
      "두 포트가 정상적으로 부하를 나누고 있다",
      "MII 감시 간격이 0이다",
    ],
    answer: 0,
    explanation:
      "802.3ad에서 같은 묶음에 들어간 포트는 Aggregator ID가 같다. 다르면 스위치 쪽 port-channel 설정이 빠졌거나 포트가 다른 묶음, 다른 스위치에 꽂혀 각자 따로 묶인 것이다. 파트너 MAC이 0인지도 함께 본다.",
    anchor: "리눅스-bonding-모드",
  },
];
