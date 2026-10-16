import type { QuizQuestion } from "../types";

export const IPTABLES_BASICS: QuizQuestion[] = [
  {
    id: "iptables-basics-1",
    post: "iptables-basics",
    question: "밖에서 서버로 들어온 패킷이 INPUT과 FORWARD 중 어디로 갈지는 무엇이 정하나?",
    choices: [
      "패킷의 목적지 포트 번호",
      "filter 테이블의 기본 정책",
      "PREROUTING 다음의 라우팅 결정에서 목적지 IP가 이 서버 주소인지",
      "conntrack 상태가 NEW인지 ESTABLISHED인지",
    ],
    answer: 2,
    explanation:
      "PREROUTING을 지난 뒤 라우팅 결정에서 목적지 IP가 자기 주소면 INPUT, 아니면 FORWARD로 간다. 그래서 Docker 컨테이너로 DNAT된 패킷은 INPUT이 아니라 FORWARD를 지난다.",
    anchor: "커널-안의-다섯-검문소",
  },
  {
    id: "iptables-basics-2",
    post: "iptables-basics",
    question:
      "체인 맨 끝에 `-j DROP` 규칙이 명시적으로 있는 서버에서 `iptables -A INPUT -p tcp --dport 8080 -j ACCEPT`를 추가했다. 어떻게 되나?",
    choices: [
      "새 규칙이 DROP 규칙 아래에 붙어서 8080은 계속 막힌다",
      "ACCEPT 규칙이 DROP보다 우선하므로 8080이 열린다",
      "같은 체인에 DROP이 있으면 -A가 오류를 낸다",
      "기본 정책이 ACCEPT로 바뀐다",
    ],
    answer: 0,
    explanation:
      "규칙은 위에서부터 처음 맞는 하나로 결론이 나고, -A는 맨 끝에 붙인다. DROP 규칙이 먼저 맞으니 새 규칙에는 닿지 않는다. 위치를 정하려면 -I로 끼워 넣는다.",
    anchor: "위에서부터-처음-맞는-규칙에서-끝난다",
  },
  {
    id: "iptables-basics-3",
    post: "iptables-basics",
    question: "INPUT 정책을 DROP으로 둘 때 ESTABLISHED,RELATED 허용 규칙이 꼭 필요한 이유는?",
    choices: [
      "SSH 새 접속은 ESTABLISHED 상태로 들어오기 때문에",
      "서버가 밖으로 보낸 요청의 응답과 ICMP 오류도 INPUT을 지나기 때문에",
      "OUTPUT 체인이 이 규칙을 참조하기 때문에",
      "루프백 통신이 RELATED로 분류되기 때문에",
    ],
    answer: 1,
    explanation:
      "apt나 DNS 질의의 응답도 INPUT으로 들어오므로 이 규칙이 없으면 나가는 통신이 반쪽이 된다. RELATED는 PMTUD에 쓰이는 ICMP 오류를 받아 준다. 대부분의 패킷이 여기서 빠져나가 성능에도 좋다.",
    anchor: "연결을-기억하는-conntrack",
  },
  {
    id: "iptables-basics-4",
    post: "iptables-basics",
    question: "INPUT 정책이 DROP인 원격 서버에서 `iptables -F`를 치면 어떻게 되나?",
    choices: [
      "규칙과 함께 정책도 ACCEPT로 초기화되어 안전하다",
      "규칙은 비워지지만 정책은 DROP으로 남아 SSH가 끊길 수 있다",
      "nat 테이블만 비워진다",
      "재부팅 전까지는 아무 변화가 없다",
    ],
    answer: 1,
    explanation:
      "-F는 체인의 규칙만 지우고 정책은 바꾸지 않는다. 허용 규칙이 사라지니 정책 DROP이 모든 패킷에 적용된다. 그래서 백업과 자동 원복 예약을 먼저 걸고 작업한다.",
    anchor: "ssh와-웹만-여는-규칙-세트",
  },
  {
    id: "iptables-basics-5",
    post: "iptables-basics",
    question: "공인 IPv6 주소가 있는 서버에 iptables 규칙만 만들어 두면 어떻게 되나?",
    choices: [
      "iptables 규칙이 IPv6에도 자동으로 적용된다",
      "IPv6 통신이 전부 차단된다",
      "IPv6로는 모든 포트가 열려 있다",
      "ufw가 IPv6 규칙을 자동으로 만들어 준다",
    ],
    answer: 2,
    explanation:
      "iptables는 IPv4만 다루고 IPv6는 ip6tables가 따로 맡는다. 같은 규칙을 ip6tables로도 만들어야 하고, 이웃 탐색에 필요한 ICMPv6는 막지 않는다.",
    anchor: "ipv6는-따로-막아야-한다",
  },
  {
    id: "iptables-basics-6",
    post: "iptables-basics",
    question: "Ubuntu 24.04에서 `iptables -V`에 `(nf_tables)`가 보인다. 이것이 뜻하는 것은?",
    choices: [
      "iptables 명령이 동작하지 않으니 nft만 써야 한다",
      "ufw가 켜져 있다는 뜻이다",
      "iptables 문법으로 넣은 규칙이 커널의 nftables 쪽에 들어간다",
      "legacy 백엔드와 규칙을 자동으로 공유한다",
    ],
    answer: 2,
    explanation:
      "기본 iptables는 iptables-nft라서 문법은 그대로지만 규칙은 nftables에 들어가고 `nft list ruleset`으로도 보인다. legacy와 섞으면 서로의 규칙이 보이지 않으니 도구는 하나만 쓴다.",
    anchor: "ufw-nftables-iptables는-같은-걸-만진다",
  },
  {
    id: "iptables-basics-7",
    post: "iptables-basics",
    question: "SSH 무차별 대입을 늦출 때 `-m limit`보다 recent나 hashlimit을 쓰는 이유는?",
    choices: [
      "limit은 TCP에서 쓸 수 없어서",
      "limit은 IP 구분 없이 규칙 전체에 한도를 걸어 공격자 하나가 정상 사용자까지 막을 수 있어서",
      "recent와 hashlimit은 이미 맺어진 세션도 끊어 주어서",
      "limit은 재부팅하면 설정이 사라져서",
    ],
    answer: 1,
    explanation:
      "limit은 규칙 하나에 속도 제한 하나라 한도를 공격자가 다 써 버리면 모두가 막힌다. recent와 hashlimit은 출발지 IP별로 센다. limit은 LOG의 양을 줄이는 데 쓴다.",
    anchor: "ssh-무차별-대입-늦추기",
  },
];
