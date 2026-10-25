import type { QuizQuestion } from "../types";

export const NETWORK_ATTACKS_L2_L3: QuizQuestion[] = [
  {
    id: "network-attacks-l2-l3-1",
    post: "network-attacks-l2-l3",
    question: "ARP 스푸핑이 성립하는 근본 이유는?",
    choices: [
      "ARP 응답에 서명이나 인증이 없어 묻지 않은 응답도 캐시에 덮어써서",
      "ARP가 암호화되지 않아서",
      "게이트웨이가 ARP를 지원하지 않아서",
      "같은 네트워크에서는 MAC 주소가 중복되어서",
    ],
    answer: 0,
    explanation:
      "ARP는 상대를 인증하지 않는다. 공격자가 '게이트웨이는 내 MAC'이라는 거짓 응답(gratuitous ARP)을 뿌리면 받은 쪽이 그대로 캐시에 덮어써 트래픽이 공격자를 거친다.",
    anchor: "아무나-그-주소-나야라고-말할-수-있다-arp-스푸핑",
  },
  {
    id: "network-attacks-l2-l3-2",
    post: "network-attacks-l2-l3",
    question: "'스위치를 쓰면 스니핑이 안 된다'는 믿음이 MAC 플러딩으로 깨지는 이유는?",
    choices: [
      "플러딩이 스위치를 재부팅시켜서",
      "CAM 표가 가득 차면 스위치가 모르는 목적지 프레임을 모든 포트로 흘려보내 허브처럼 동작해서",
      "플러딩이 모든 포트의 암호화를 해제해서",
      "MAC 주소가 초기화되어 통신이 끊겨서",
    ],
    answer: 1,
    explanation:
      "스위치는 MAC-포트 매핑을 CAM 표에 기억해 해당 포트로만 보낸다. 무작위 MAC으로 표를 넘치게 하면 알 수 없는 목적지 프레임을 전 포트로 흘려보내, 공격자가 전체 트래픽을 엿볼 수 있다.",
    anchor: "스위치의-기억을-넘치게-만든다-mac-플러딩",
  },
  {
    id: "network-attacks-l2-l3-3",
    post: "network-attacks-l2-l3",
    question: "가짜 DHCP 서버(rogue DHCP)가 특히 위험한 이유는?",
    choices: [
      "PC를 재부팅시켜서",
      "ARP를 건드리지 않고도 게이트웨이와 DNS를 한 번에 공격자 주소로 바꿔서",
      "DHCP 서버만 공격해 IP 풀을 비워서",
      "스위치의 CAM 표를 넘치게 해서",
    ],
    answer: 1,
    explanation:
      "PC의 주소 요청에 진짜 서버보다 먼저 응답해 게이트웨이·DNS를 공격자 주소로 넣으면, 그 PC의 모든 트래픽과 이름 조회가 공격자를 거친다. ARP 조작 없이 경로를 장악한다.",
    anchor: "가짜-dhcp-서버가-먼저-대답한다-dhcp-공격",
  },
  {
    id: "network-attacks-l2-l3-4",
    post: "network-attacks-l2-l3",
    question: "DHCP 스누핑과 Dynamic ARP Inspection(DAI)의 관계로 맞는 것은?",
    choices: [
      "둘은 같은 기능의 다른 이름이다",
      "DHCP 스누핑이 IP·MAC·포트 바인딩 표를 만들고, DAI가 그 표로 ARP 응답을 검증한다",
      "DAI가 먼저 동작하고 DHCP 스누핑이 그 결과를 쓴다",
      "둘 다 라우터에서만 동작한다",
    ],
    answer: 1,
    explanation:
      "DHCP 스누핑은 신뢰 포트의 응답만 통과시키며 바인딩 표를 만들고, DAI는 그 표와 다른 ARP를 버린다. 함께 켜야 가짜 DHCP와 ARP 스푸핑이 동시에 막힌다.",
    anchor: "공격과-방어를-한눈에-짝짓기",
  },
  {
    id: "network-attacks-l2-l3-5",
    post: "network-attacks-l2-l3",
    question: "DNS 캐시 포이즈닝을 근본적으로 막는 DNSSEC의 한계는?",
    choices: [
      "질의 속도를 크게 떨어뜨린다",
      "응답의 진위는 보장하지만 질의·응답 내용을 숨기지는 못한다",
      "재귀 서버에서만 쓸 수 있다",
      "IPv6에서는 동작하지 않는다",
    ],
    answer: 1,
    explanation:
      "DNSSEC는 응답에 서명을 붙여 위조를 걸러내지만 내용은 평문이다. 질의 내용까지 가리려면 DoH나 DoT가 따로 필요하다.",
    anchor: "이름-조회의-답을-가로챈다-dns-위조",
  },
  {
    id: "network-attacks-l2-l3-6",
    post: "network-attacks-l2-l3",
    question: "ARP 스푸핑으로 중간자가 됐어도 HTTPS가 있으면 피해가 줄어드는 이유는?",
    choices: [
      "HTTPS가 ARP 캐시를 복구해서",
      "TLS 인증서 검증 때문에 중간자가 내용을 읽거나 바꾸면 경고가 떠서",
      "HTTPS가 공격자의 MAC을 차단해서",
      "HTTPS 트래픽은 스위치가 별도 포트로 보내서",
    ],
    answer: 1,
    explanation:
      "TLS는 서버 인증서를 검증하므로 공격자는 유효 인증서 없이 내용을 복호화하지 못하고, 변조하면 불일치로 걸린다. HSTS로 평문 시작 구간을 없애면 다운그레이드 틈까지 막는다.",
    anchor: "아무나-그-주소-나야라고-말할-수-있다-arp-스푸핑",
  },
  {
    id: "network-attacks-l2-l3-7",
    post: "network-attacks-l2-l3",
    question: "클라우드 VPC에서 ARP 스푸핑·MAC 플러딩이 대부분 통하지 않는 이유는?",
    choices: [
      "VPC가 모든 트래픽을 암호화해서",
      "가상 네트워크라 인스턴스의 출발지 IP·MAC이 고정돼 사칭 프레임을 하이퍼바이저가 버려서",
      "VPC에는 스위치가 없어서",
      "보안 그룹이 ARP를 차단해서",
    ],
    answer: 1,
    explanation:
      "VPC는 소프트웨어 가상 네트워크라 인스턴스가 보낼 IP·MAC이 제어 평면에 묶여 있다. 남의 주소를 사칭한 프레임은 버려져 L2 공격 전제가 사라진다. DHCP·DNS도 관리형이라 가짜 서버를 끼울 수 없다.",
    anchor: "클라우드-vpc에서는-왜-대부분-막혀-있나",
  },
];
