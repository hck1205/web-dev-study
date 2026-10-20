import type { QuizQuestion } from "../types";

export const VLAN_BASICS: QuizQuestion[] = [
  {
    id: "vlan-basics-1",
    post: "vlan-basics",
    question: "같은 스위치에 꽂힌 두 서버에 10.0.10.11/24, 10.0.10.12/24를 줬는데 ping이 안 되고 ip neigh에 FAILED가 남는다. 가장 먼저 의심할 것은?",
    choices: [
      "두 서버의 기본 게이트웨이가 다르다",
      "두 포트가 서로 다른 VLAN의 액세스 포트다",
      "서브넷 마스크가 /24라서 너무 좁다",
      "스위치의 MAC 표가 가득 찼다",
    ],
    answer: 1,
    explanation:
      "VLAN이 다르면 ARP 브로드캐스트가 상대 포트로 가지 않아 MAC을 못 알아내고 FAILED가 된다. 같은 대역이라 라우터로 보내지도 않으니 게이트웨이 설정과는 상관이 없다.",
    anchor: "직접-만들어-본-vlan-스위치",
  },
  {
    id: "vlan-basics-2",
    post: "vlan-basics",
    question: "액세스 포트에 꽂힌 서버가 보내는 프레임에 대한 설명으로 맞는 것은?",
    choices: [
      "서버는 태그 없이 보내고, 스위치가 포트 설정을 보고 VLAN을 정한다",
      "서버가 802.1Q 태그를 붙여야 스위치가 받아 준다",
      "스위치는 태그를 붙여서 서버에게 돌려준다",
      "서버의 IP 대역을 보고 스위치가 VLAN을 고른다",
    ],
    answer: 0,
    explanation:
      "액세스 포트에 꽂힌 기기는 VLAN을 모른 채 평범한 프레임을 주고받는다. VLAN 분류는 스위치가 포트 설정으로 하고, 태그는 트렁크를 지날 때만 붙는다. 스위치는 L2 장비라 IP 대역으로 VLAN을 고르지 않는다.",
    anchor: "액세스-포트와-트렁크-포트",
  },
  {
    id: "vlan-basics-3",
    post: "vlan-basics",
    question: "VLAN 10의 A가 VLAN 20의 B에게 ping을 보낼 때, 라우터를 지난 뒤 바뀌는 것은?",
    choices: [
      "출발지 IP가 라우터 주소로 바뀐다",
      "목적지 IP가 B의 게이트웨이로 바뀐다",
      "IP 헤더는 그대로고 TCP 포트만 바뀐다",
      "L2 헤더(출발지·목적지 MAC과 VLAN)가 새로 쓰이고 TTL이 하나 줄어든다",
    ],
    answer: 3,
    explanation:
      "라우터는 IP 주소를 바꾸지 않고 TTL만 줄인 뒤, VLAN 20 쪽 인터페이스의 MAC을 출발지로 새 프레임을 만든다. 주소를 바꾸는 건 NAT의 일이고, 라우팅 자체는 L2 헤더를 갈아 끼우는 일이다.",
    anchor: "vlan-사이를-잇는-라우터",
  },
  {
    id: "vlan-basics-4",
    post: "vlan-basics",
    question: "이중 태깅 VLAN 호핑 공격이 가능한 조건으로 가장 중요한 것은?",
    choices: [
      "공격자가 트렁크 포트의 비밀번호를 안다",
      "VLAN ID가 4094를 넘는다",
      "공격자의 포트가 트렁크의 네이티브 VLAN에 속한다",
      "스위치가 L3 스위치다",
    ],
    answer: 2,
    explanation:
      "첫 스위치가 네이티브 VLAN 프레임을 태그 없이 내보내는 동작 때문에 바깥 태그만 떨어지고 안쪽 태그가 남는다. 그래서 네이티브 VLAN을 아무도 쓰지 않는 번호로 바꾸는 것이 기본 대책이다.",
    anchor: "태그-없는-프레임은-어느-vlan인가",
  },
  {
    id: "vlan-basics-5",
    post: "vlan-basics",
    question: "시스코 트렁크에 VLAN 30을 추가하려고 switchport trunk allowed vlan 30을 입력했더니 다른 VLAN이 모두 끊겼다. 왜인가?",
    choices: [
      "VLAN 30이 네이티브 VLAN으로 바뀌었다",
      "허용 목록이 30 하나로 덮어써졌다",
      "트렁크가 액세스 포트로 바뀌었다",
      "STP가 트렁크를 막았다",
    ],
    answer: 1,
    explanation:
      "allowed vlan 뒤에 번호만 쓰면 목록 전체를 바꾼다. 기존 목록에 더하려면 allowed vlan add 30을 써야 한다. 이 한 단어 차이로 트렁크의 다른 VLAN이 모두 끊기는 사고가 흔하다.",
    anchor: "현장에서-vlan을-의심하는-순간",
  },
  {
    id: "vlan-basics-6",
    post: "vlan-basics",
    question: "원격 서버의 eth0을 VLAN 하위 인터페이스 구성으로 바꾸려 한다. 가장 안전한 방법은?",
    choices: [
      "netplan apply로 바로 적용하고 안 되면 재부팅한다",
      "ip link 명령으로만 바꿔서 재부팅하면 원래대로 돌아가게 한다",
      "스위치 포트를 먼저 트렁크로 바꾼 뒤 서버를 고친다",
      "스위치 설정과 순서를 맞추고 콘솔 경로를 확보한 뒤 netplan try로 적용한다",
    ],
    answer: 3,
    explanation:
      "netplan try는 확인을 못 받으면 120초 뒤 이전 설정으로 돌아가서 SSH가 끊겨도 복구된다. 스위치만 먼저 트렁크로 바꾸면 그 순간 서버의 태그 없는 트래픽이 네이티브 VLAN으로 가서 접속이 끊길 수 있다.",
    anchor: "리눅스-서버에서-vlan-다루기",
  },
];
