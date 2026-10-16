import type { QuizQuestion } from "../types";

export const IPTABLES_NAT: QuizQuestion[] = [
  {
    id: "iptables-nat-1",
    post: "iptables-nat",
    question: "nat 테이블 규칙을 바꿨는데 이미 맺어진 연결은 예전 변환을 계속 쓴다. 왜 그런가?",
    choices: [
      "nat 규칙은 재부팅해야 적용되기 때문에",
      "nat 테이블은 연결의 첫 패킷만 보고, 나머지는 conntrack이 기억한 변환을 따르기 때문에",
      "FORWARD 체인이 예전 규칙을 캐시하기 때문에",
      "ip_forward가 꺼져 있기 때문에",
    ],
    answer: 1,
    explanation:
      "첫 패킷에서 정한 변환을 conntrack이 기록하고, 이후 패킷과 응답은 nat 규칙을 다시 보지 않는다. 새 규칙을 바로 적용하려면 `conntrack -D`로 해당 항목을 지운다.",
    anchor: "주소를-바꿔-쓰는-세-가지-방법",
  },
  {
    id: "iptables-nat-2",
    post: "iptables-nat",
    question: "공인 IP 8443을 내부 서버 443으로 DNAT했다. FORWARD 허용 규칙의 목적지 포트는 무엇으로 써야 하나?",
    choices: ["8443", "443", "둘 다 써야 한다", "포트 조건을 쓸 수 없다"],
    answer: 1,
    explanation:
      "DNAT은 PREROUTING에서 일어나고 filter의 FORWARD는 그 뒤라서 이미 바뀐 포트 443을 본다. 원래 포트로 걸러야 하면 `--ctorigdstport 8443`을 쓴다.",
    anchor: "바깥-포트를-내부-서버로-넘기는-포트-포워딩",
  },
  {
    id: "iptables-nat-3",
    post: "iptables-nat",
    question: "DNAT 카운터는 오르고 tcpdump에 내부 쪽으로 나가는 SYN도 보이는데 conntrack에 [UNREPLIED]가 남는다. 가장 먼저 의심할 것은?",
    choices: [
      "MASQUERADE 규칙이 빠졌다",
      "ip_forward가 0이다",
      "내부 서버의 응답이 게이트웨이로 돌아오지 않는다 (기본 게이트웨이가 다른 장비 등)",
      "DNAT 규칙의 -t nat이 빠졌다",
    ],
    answer: 2,
    explanation:
      "내부 쪽으로 SYN이 나갔다면 DNAT과 FORWARD는 제대로 일했다. [UNREPLIED]는 응답 방향 패킷을 못 봤다는 뜻이라 내부 서버의 라우팅, 방화벽, 리스닝 여부를 본다.",
    anchor: "nat가-안-될-때-따라가는-순서",
  },
  {
    id: "iptables-nat-4",
    post: "iptables-nat",
    question: "내부망 PC가 같은 내부망 서버를 공인 IP와 포워딩 포트로 접속할 때(헤어핀) SNAT까지 해야 하는 이유는?",
    choices: [
      "내부 서버가 같은 망의 PC에게 직접 답해서 PC가 그 응답을 버리기 때문에",
      "내부 IP는 DNAT할 수 없기 때문에",
      "conntrack이 내부망 패킷을 추적하지 않기 때문에",
      "공인 IP로는 TCP 연결을 열 수 없기 때문에",
    ],
    answer: 0,
    explanation:
      "DNAT만 하면 응답이 게이트웨이를 거치지 않아서, PC는 접속한 적 없는 주소에서 온 SYN-ACK을 받는다. 출발지를 게이트웨이로 바꾸면 응답이 게이트웨이로 돌아와 원래 주소로 되돌려진다.",
    anchor: "바깥-포트를-내부-서버로-넘기는-포트-포워딩",
  },
  {
    id: "iptables-nat-5",
    post: "iptables-nat",
    question: "`ufw deny 8080`을 했는데도 `docker run -p 8080:80`으로 게시한 포트가 밖에서 열린다. 왜 그런가?",
    choices: [
      "ufw가 TCP만 막고 Docker는 UDP를 쓰기 때문에",
      "Docker가 ufw를 끄기 때문에",
      "게시 포트로 온 패킷은 PREROUTING에서 컨테이너로 DNAT되어 FORWARD로 가고, ufw 규칙은 INPUT 쪽에 있기 때문에",
      "Docker는 iptables를 쓰지 않기 때문에",
    ],
    answer: 2,
    explanation:
      "DNAT 뒤 목적지가 컨테이너 IP라 라우팅 결정에서 FORWARD로 가서 INPUT의 ufw 규칙을 지나지 않는다. 막으려면 127.0.0.1로만 게시하거나 DOCKER-USER 체인에 규칙을 넣는다.",
    anchor: "docker가-만드는-규칙",
  },
  {
    id: "iptables-nat-6",
    post: "iptables-nat",
    question: "kube-proxy iptables 모드에서 엔드포인트가 3개일 때 KUBE-SVC 체인의 확률 규칙은 어떻게 되나?",
    choices: [
      "1/3, 1/3, 1/3",
      "1/3, 1/2, 나머지 전부",
      "1/2, 1/2, 나머지 전부",
      "라운드 로빈 카운터로 순서대로",
    ],
    answer: 1,
    explanation:
      "규칙마다 난수를 새로 뽑으니 첫 규칙 1/3, 둘째 1/2, 마지막은 조건 없이 두어야 각각 1/3이 된다. 모두 1/3로 두면 뒤쪽 엔드포인트가 더 많이 걸린다.",
    anchor: "쿠버네티스-service는-nat-규칙-묶음이다",
  },
  {
    id: "iptables-nat-7",
    post: "iptables-nat",
    question: "공인 IP 하나로 SNAT하는 게이트웨이에서 같은 외부 API로의 새 연결이 간헐적으로 실패한다. 알맞은 대처는?",
    choices: [
      "MASQUERADE를 SNAT으로 바꾼다",
      "FORWARD 정책을 ACCEPT로 바꾼다",
      "ip_forward를 다시 켠다",
      "SNAT 주소를 여러 개로 늘리거나 커넥션 풀로 연결을 재사용한다",
    ],
    answer: 3,
    explanation:
      "출발지 IP가 하나면 같은 목적지로 열 수 있는 동시 연결이 출발지 포트 수만큼으로 제한된다. MASQUERADE를 SNAT으로 바꿔도 주소가 하나면 한계는 같다.",
    anchor: "바꾼-주소는-conntrack이-기억한다",
  },
];
