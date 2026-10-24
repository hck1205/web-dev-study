import type { QuizQuestion } from "../types";

export const PERFORMANCE_ANTIPATTERNS: QuizQuestion[] = [
  {
    id: "performance-antipatterns-1",
    post: "performance-antipatterns",
    question: "처리 시간 20ms인 단순 대기열 모델에서 사용률이 47.5%에서 95%로 오르면 평균 응답 시간은 대략 어떻게 되나?",
    choices: ["두 배가 된다", "그대로다", "열 배쯤 된다", "절반이 된다"],
    answer: 2,
    explanation:
      "평균 응답 시간은 처리 시간 ÷ (1 - 사용률)이라 20 ÷ 0.525 ≈ 38ms에서 20 ÷ 0.05 = 400ms가 된다. 사용률이 100%에 가까워질수록 분모가 0으로 가서 대기 시간이 폭발한다.",
    anchor: "두-배를-받았는데-열-배가-느린-이유",
  },
  {
    id: "performance-antipatterns-2",
    post: "performance-antipatterns",
    question: "앱 서버 CPU는 20%로 한가한데 응답이 느리고 스레드 풀이 가득 찼다. 먼저 의심할 모양은?",
    choices: [
      "바쁜 프런트엔드",
      "동기 I/O나 수다스러운 I/O처럼 무언가를 기다리는 모양",
      "바쁜 데이터베이스",
      "캐시 없음",
    ],
    answer: 1,
    explanation:
      "CPU가 낮은데 느리면 스레드가 일을 하는 게 아니라 기다리고 있다는 뜻이다. 블로킹 외부 호출, 많은 왕복, 커넥션 대기를 본다. 바쁜 프런트엔드라면 앱 CPU가 높게 나온다.",
    anchor: "증상에서-거꾸로-찾아가기",
  },
  {
    id: "performance-antipatterns-3",
    post: "performance-antipatterns",
    question: "Node 서버에서 300ms짜리 계산을 요청 처리 함수 안에서 돌리자 /health가 1.5초를 기다렸다. 이유는?",
    choices: [
      "/health가 같은 DB 커넥션을 기다렸기 때문이다",
      "Node가 요청마다 새 프로세스를 띄우기 때문이다",
      "계산이 이벤트 루프를 붙잡아 다른 요청의 콜백이 실행되지 못했기 때문이다",
      "HTTP keep-alive가 꺼져 있었기 때문이다",
    ],
    answer: 2,
    explanation:
      "Node의 요청 처리는 한 스레드의 이벤트 루프에서 돈다. 계산 다섯 개가 줄줄이 루프를 막아 /health는 그 뒤를 기다렸고, 워커 스레드로 넘기자 10ms 안으로 돌아왔다.",
    anchor: "2-바쁜-프런트엔드",
  },
  {
    id: "performance-antipatterns-4",
    post: "performance-antipatterns",
    question: "요청마다 HTTP 클라이언트(Agent)를 새로 만들 때 지연 말고도 생기는 운영 문제는?",
    choices: [
      "닫힌 연결이 TIME_WAIT로 쌓여 임시 포트가 고갈될 수 있다",
      "응답 본문이 압축되지 않는다",
      "DNS 캐시가 지워져 다른 서버로 간다",
      "요청 헤더가 두 번 붙는다",
    ],
    answer: 0,
    explanation:
      "새 연결마다 닫힌 소켓이 TIME_WAIT로 남고, 트래픽이 많으면 임시 포트를 다 써서 cannot assign requested address 같은 에러가 난다. 실험에서도 2,000번 요청에 연결 2,000개가 생겼다.",
    anchor: "6-매번-새로-만드는-클라이언트",
  },
  {
    id: "performance-antipatterns-5",
    post: "performance-antipatterns",
    question: "바쁜 데이터베이스를 고치려고 모든 행을 앱으로 가져와 거르게 바꿨다. 무엇이 문제인가?",
    choices: [
      "문제없다. DB 일을 줄이는 게 항상 맞다",
      "앱 서버에서는 정렬을 할 수 없다",
      "트랜잭션이 깨진다",
      "불필요한 데이터 가져오기로 넘어가 디스크·네트워크·메모리를 낭비한다",
    ],
    answer: 3,
    explanation:
      "거르고 모으고 페이지를 나누는 일은 DB가 가장 잘한다. DB에서 빼야 하는 건 문자열 조립이나 무거운 계산처럼 데이터 일이 아닌 것이고, 전체 행을 옮기면 반대쪽 안티패턴이 된다.",
    anchor: "5-불필요한-데이터-가져오기",
  },
  {
    id: "performance-antipatterns-6",
    post: "performance-antipatterns",
    question: "부하 테스트에서 동시 사용자 수 대신 도착률(초당 요청 수)을 정해 올리는 이유는?",
    choices: [
      "k6가 동시 사용자 수를 지원하지 않기 때문이다",
      "서버가 느려질 때 부하도 함께 줄어드는 착시를 피하기 위해서다",
      "도착률 방식이 부하 생성기 CPU를 덜 쓰기 때문이다",
      "동시 사용자 방식은 p99를 계산하지 못하기 때문이다",
    ],
    answer: 1,
    explanation:
      "동시 사용자 수를 고정하면 각 사용자가 응답을 기다리는 동안 다음 요청을 못 보내서, 서버가 느려질수록 들어오는 요청도 줄어든다. 도착률을 정하면 운영에서처럼 느려져도 요청이 계속 들어온다.",
    anchor: "부하-테스트로-범인을-재현하는-순서",
  },
];
