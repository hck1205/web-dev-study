import type { QuizQuestion } from "../types";

export const LOAD_BALANCING_ALGORITHMS: QuizQuestion[] = [
  {
    id: "load-balancing-algorithms-1",
    post: "load-balancing-algorithms",
    question: "서버 셋이 요청을 정확히 3분의 1씩 받는데 한 대만 응답이 몇 초씩 늦다. 가장 그럴듯한 원인은?",
    choices: [
      "로드 밸런서의 CPU가 부족해서",
      "그 서버가 다른 서버보다 느려서, 같은 몫을 받으면 처리 속도보다 빨리 요청이 쌓여서",
      "라운드 로빈이 요청 순서를 섞어서",
      "헬스 체크 간격이 길어서",
    ],
    answer: 1,
    explanation:
      "라운드 로빈은 요청 수만 맞추고 서버의 처리 속도는 보지 않는다. 느린 서버로 들어오는 속도가 그 서버의 처리 속도를 넘으면 줄이 끝없이 길어진다. 실험에서도 전체 사용률은 80%였지만 절반 속도 서버의 p99가 10초를 넘었다.",
    anchor: "차례대로-돌리면-느린-서버가-무너진다",
  },
  {
    id: "load-balancing-algorithms-2",
    post: "load-balancing-algorithms",
    question: "모든 요청에 1ms 만에 500을 돌려주는 고장 난 서버가 있다. least connections 로드 밸런서에서 어떤 일이 생기기 쉬운가?",
    choices: [
      "처리 중인 요청이 늘 적어 보여 오히려 더 많은 요청을 받는다",
      "연결 수가 많아져 자동으로 빠진다",
      "라운드 로빈과 똑같이 3분의 1을 받는다",
      "로드 밸런서가 500을 보고 바로 뺀다",
    ],
    answer: 0,
    explanation:
      "빨리 실패하는 서버는 진행 중인 요청이 거의 0이라 가장 한가해 보인다. 그래서 least connections나 응답 시간 기반 방식은 장애 서버로 트래픽을 몰아줄 수 있다. 오류율을 따로 보는 헬스 체크나 outlier detection을 함께 써야 한다.",
    anchor: "지금-덜-바쁜-서버로",
  },
  {
    id: "load-balancing-algorithms-3",
    post: "load-balancing-algorithms",
    question: "로드 밸런서가 여러 대일 때 least connections보다 P2C가 덜 몰리는 이유는?",
    choices: [
      "P2C는 서버 전체의 부하를 더 자주 갱신하기 때문에",
      "P2C는 가장 한가한 서버를 항상 고르기 때문에",
      "무작위로 뽑은 두 후보만 비교하니 로드 밸런서마다 고르는 서버가 갈라지기 때문에",
      "P2C는 요청을 두 서버에 동시에 보내기 때문에",
    ],
    answer: 2,
    explanation:
      "least connections는 모두가 같은 정보를 보고 같은 최소 서버를 고르니 한곳으로 몰린다. P2C는 후보 둘을 무작위로 뽑아서 가장 바쁜 서버는 피하면서도 모두가 같은 서버를 고르지는 않는다. 요청을 두 번 보내는 방식(hedging)과는 다르다.",
    anchor: "모두가-같은-서버를-고를-때",
  },
  {
    id: "load-balancing-algorithms-4",
    post: "load-balancing-algorithms",
    question: "서버 4대에서 1대를 뺄 때 hash(key) % N 방식의 문제는?",
    choices: [
      "빠진 서버의 키가 갈 곳이 없어 오류가 난다",
      "빠진 서버와 상관없는 키까지 대부분 자리가 바뀐다",
      "남은 서버 중 하나에 모든 키가 몰린다",
      "해시 값이 바뀌어 키를 다시 계산해야 한다",
    ],
    answer: 1,
    explanation:
      "나누는 수가 4에서 3으로 바뀌면 나머지가 거의 모든 키에서 달라진다. 키 1만 개로 세면 7630개가 옮겨졌다. 일관 해싱은 빠진 서버가 맡던 2444개만 옮겨 서버마다 둔 캐시를 지킨다.",
    anchor: "같은-키는-같은-서버로",
  },
  {
    id: "load-balancing-algorithms-5",
    post: "load-balancing-algorithms",
    question: "IP 해시를 쓰는데 서버 한 대만 유난히 바쁘다. 로그에서 가장 먼저 확인할 것은?",
    choices: [
      "서버들의 커널 버전",
      "클라이언트 IP별 요청 수에서 상위 IP가 차지하는 비율",
      "TLS 인증서 만료일",
      "DNS TTL",
    ],
    answer: 1,
    explanation:
      "회사 NAT나 프록시처럼 많은 사용자가 IP 하나로 보이면 해시는 그들을 모두 한 서버로 보낸다. 상위 키 하나가 전체의 큰 몫을 차지하면 알고리즘이 아니라 키 선택을 바꿔야 한다. 실험에서는 30%를 차지하는 IP 하나 때문에 p99가 40초가 됐다.",
    anchor: "분배가-이상할-때-확인하는-순서",
  },
  {
    id: "load-balancing-algorithms-6",
    post: "load-balancing-algorithms",
    question: "gRPC 서비스를 쿠버네티스 기본 Service 뒤에 두었더니 Pod 하나만 CPU가 높다. 알맞은 처방은?",
    choices: [
      "Service의 알고리즘을 least connections로 바꾼다",
      "Pod 수를 늘린다",
      "요청 단위로 나누는 L7 프록시나 클라이언트 쪽 로드 밸런싱으로 바꾼다",
      "세션 고정을 끈다",
    ],
    answer: 2,
    explanation:
      "gRPC는 HTTP/2 연결 하나를 오래 쓰는데 기본 Service는 연결이 맺어질 때 한 번만 Pod를 고르는 L4 방식이다. 알고리즘을 바꾸거나 Pod를 늘려도 이미 맺은 연결은 그대로라 쏠림이 남는다. 요청마다 고르는 층으로 옮겨야 한다.",
    anchor: "같은-서버로-가야-하나-비용이-고르지-않나",
  },
];
