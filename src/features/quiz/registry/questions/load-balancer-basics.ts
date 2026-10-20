import type { QuizQuestion } from "../types";

export const LOAD_BALANCER_BASICS: QuizQuestion[] = [
  {
    id: "load-balancer-basics-1",
    post: "load-balancer-basics",
    question: "배포할 때마다 몇 초씩 502가 섞여 나온다. 가장 먼저 의심할 것은?",
    choices: [
      "로드 밸런서의 알고리즘이 라운드 로빈이라서",
      "서버를 로드 밸런서에서 빼기 전에 프로세스가 처리 중인 요청을 버리고 내려가서",
      "DNS TTL이 너무 길어서",
      "헬스 체크 간격이 너무 짧아서",
    ],
    answer: 1,
    explanation:
      "드레이닝 없이 내리면 처리 중이던 요청이 끊기고, 로드 밸런서가 빼기 전에 앱이 닫히면 그 사이 요청도 거절된다. 새 요청을 먼저 끊고 남은 요청이 끝난 뒤에 내려야 한다. 알고리즘 종류는 이 증상과 관계가 없다.",
    anchor: "서버를-뺄-때는-드레이닝부터",
  },
  {
    id: "load-balancer-basics-2",
    post: "load-balancer-basics",
    question: "헬스 체크가 interval 1초, fall 3, rise 2일 때 서버가 아파진 뒤 빠지기까지 걸리는 시간에 가장 가까운 것은?",
    choices: [
      "바로 다음 요청에서 빠진다",
      "약 1초",
      "약 3초 안팎",
      "약 6초",
    ],
    answer: 2,
    explanation:
      "세 번 연속 실패해야 빼므로 최악의 경우 대략 interval × fall에 마지막 검사의 timeout을 더한 시간이 걸린다. 실습에서도 1.2초쯤 아파진 서버가 4.0초에 빠졌다. 그 사이 요청은 아픈 서버로 간다.",
    anchor: "살아-있는지-묻는-법-수동과-능동",
  },
  {
    id: "load-balancer-basics-3",
    post: "load-balancer-basics",
    question: "오픈 소스 nginx의 수동 헬스 체크가 놓치기 쉬운 상황은?",
    choices: [
      "백엔드 프로세스가 죽어 연결이 거절되는 경우",
      "백엔드가 살아 있지만 DB가 끊겨 500을 빠르게 내는 경우",
      "백엔드 포트가 바뀐 경우",
      "백엔드 서버의 전원이 꺼진 경우",
    ],
    answer: 1,
    explanation:
      "수동 방식은 실제 요청의 실패를 세는데, 기본 proxy_next_upstream은 연결 오류와 타임아웃만 실패로 친다. 500을 빠르게 돌려주는 서버는 정상 응답으로 보여서 빠지지 않는다. 연결 거절은 바로 실패로 잡혀 다른 서버로 재시도된다.",
    anchor: "살아-있는지-묻는-법-수동과-능동",
  },
  {
    id: "load-balancer-basics-4",
    post: "load-balancer-basics",
    question: "DSR 방식에서 응답이 로드 밸런서를 거치지 않아도 되는 이유는?",
    choices: [
      "서버가 응답을 터널로 감싸 로드 밸런서에 돌려주기 때문에",
      "로드 밸런서가 목적지 IP를 서버 IP로 바꿔 두었기 때문에",
      "IP는 VIP 그대로 두고 MAC만 바꿔 넘겨서, 서버가 VIP를 출발지로 바로 응답할 수 있기 때문에",
      "클라이언트가 서버의 실제 IP를 미리 알고 있기 때문에",
    ],
    answer: 2,
    explanation:
      "DSR은 IP 헤더를 고치지 않으니 서버가 루프백의 VIP로 패킷을 받고, 응답의 출발지도 VIP가 된다. 그래서 라우터로 바로 보내도 클라이언트가 받아들인다. 목적지 IP를 바꾸는 건 NAT 방식이고, 그때는 응답이 로드 밸런서를 지나야 한다.",
    anchor: "패킷이-서버까지-가는-길",
  },
  {
    id: "load-balancer-basics-5",
    post: "load-balancer-basics",
    question: "업스트림 keepalive 없이 프록시 로드 밸런서가 서버 한 대로 초당 수천 개의 새 연결을 열 때 생기기 쉬운 문제는?",
    choices: [
      "출발지 포트가 TIME_WAIT에 묶여 새 연결을 열지 못한다",
      "서버의 수신 버퍼가 넘쳐 패킷이 순서가 바뀐다",
      "VIP의 ARP 항목이 자주 바뀐다",
      "TLS 인증서가 만료된다",
    ],
    answer: 0,
    explanation:
      "로드 밸런서 IP 하나에서 같은 서버 주소로 가는 연결은 출발지 포트만 다를 수 있다. 기본 범위 28232개를 TIME_WAIT 60초가 묶으면 초당 약 470개에서 막힌다. 연결 재사용이 먼저 할 처방이다.",
    anchor: "앞에서-받은-연결과-뒤로-여는-연결",
  },
  {
    id: "load-balancer-basics-6",
    post: "load-balancer-basics",
    question: "쿠키로 세션을 고정한 서버가 죽었을 때 일어나는 일로 맞는 것은?",
    choices: [
      "로드 밸런서가 그 서버의 세션을 다른 서버로 복사한다",
      "판정이 나기 전까지 그 쿠키를 가진 요청은 죽은 서버로 가고, 판정 뒤에는 다른 서버로 가지만 세션은 사라진다",
      "클라이언트가 쿠키를 지울 때까지 계속 실패한다",
      "아무 영향이 없다",
    ],
    answer: 1,
    explanation:
      "쿠키 고정은 그 서버로만 보내기 때문에 DOWN 판정까지는 피해 가지 못한다. 판정 뒤에는 로드 밸런서가 새 서버를 골라 쿠키를 다시 쓰지만, 옛 서버 메모리에 있던 세션은 남아 있지 않다. 세션을 공유 저장소로 빼야 하는 이유다.",
    anchor: "같은-손님을-같은-서버로",
  },
  {
    id: "load-balancer-basics-7",
    post: "load-balancer-basics",
    question: "VRRP로 이중화한 로드 밸런서에서 마스터가 죽으면 백업은 클라이언트 트래픽을 어떻게 끌어오나?",
    choices: [
      "DNS 레코드를 자기 IP로 고친다",
      "클라이언트에게 리다이렉트 응답을 보낸다",
      "VIP를 자기 인터페이스에 붙이고 GARP로 VIP의 MAC이 바뀌었다고 알린다",
      "마스터의 TCP 연결 표를 받아 그대로 이어 간다",
    ],
    answer: 2,
    explanation:
      "백업은 광고가 끊기면 VIP를 가져가고, 묻지 않은 ARP 응답으로 스위치와 이웃의 표를 고친다. 클라이언트는 같은 주소로 계속 보내면 된다. 다만 프록시 방식에서는 연결 상태가 옮겨 가지 않아 기존 연결은 다시 맺어야 한다.",
    anchor: "로드-밸런서가-죽으면",
  },
];
