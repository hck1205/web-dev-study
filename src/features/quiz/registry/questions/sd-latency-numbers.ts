import type { QuizQuestion } from "../types";

export const SD_LATENCY_NUMBERS: QuizQuestion[] = [
  {
    id: "sd-latency-numbers-1",
    post: "sd-latency-numbers",
    question: "식당 상세 API가 요청 하나에 DB 쿼리를 21번 보내 120ms가 걸린다. 가장 먼저 해 볼 일은?",
    choices: [
      "DB 서버를 두 배 빠른 사양으로 바꾼다",
      "웹 서버 대수를 늘린다",
      "쿼리를 묶어 왕복 횟수를 줄인다",
      "DB 디스크를 HDD에서 SSD로 바꾼다",
    ],
    answer: 2,
    explanation:
      "쿼리 하나는 수 ms지만 21번 차례로 하면 왕복 시간이 그대로 곱해진다. DB를 키워도 네트워크 왕복은 줄지 않으니 쿼리를 두 번 정도로 묶는 편이 훨씬 크게 줄인다.",
    anchor: "왕복-횟수가-응답-시간을-정한다",
  },
  {
    id: "sd-latency-numbers-2",
    post: "sd-latency-numbers",
    question: "1Gbps 회선으로 1GB 파일을 보낼 때, 이상적인 경우에도 걸리는 시간에 가장 가까운 것은?",
    choices: ["약 1초", "약 8초", "약 0.125초", "약 80초"],
    answer: 1,
    explanation:
      "네트워크 속도는 비트, 파일 크기는 바이트로 센다. 1Gbps는 초당 125MB라서 1GB에는 8초 남짓 걸린다. 1초라고 답하면 단위에서 8배가 어긋난 것이다.",
    anchor: "바이트를-세는-두-가지-자",
  },
  {
    id: "sd-latency-numbers-3",
    post: "sd-latency-numbers",
    question: "미국 사용자의 응답이 느려서 서울 데이터 센터의 서버를 더 좋은 사양으로 바꿨는데 거의 그대로다. 왜 그럴까?",
    choices: [
      "새 서버의 CPU 캐시가 더 작아서",
      "지연 대부분이 대륙 사이 왕복이라 서버 성능과 상관없어서",
      "2의 거듭제곱 단위를 잘못 계산해서",
      "서버가 바뀌면 DNS 캐시가 초기화되어서",
    ],
    answer: 1,
    explanation:
      "광섬유 속에서 신호는 초당 약 20만 km로 가니 서울-버지니아 왕복은 이론상으로도 110ms가 넘고 실제로는 150~200ms다. 이 시간은 서버를 바꿔도 줄지 않아서 사용자 가까이에 사본을 두거나 왕복 횟수를 줄여야 한다.",
    anchor: "거리는-빛의-속도가-정한다",
  },
  {
    id: "sd-latency-numbers-4",
    post: "sd-latency-numbers",
    question: "같은 디스크에서 4KB씩 읽을 때는 72.7MB/s, 1MB씩 읽을 때는 1.6GB/s가 나왔다. 이 차이가 알려 주는 것은?",
    choices: [
      "작은 조각을 여러 번 읽으면 매번 기다림이 붙어 처리량이 크게 떨어진다",
      "1MB 단위로 읽으면 운영체제 캐시가 대신 답한다",
      "4KB 읽기는 디스크를 망가뜨린다",
      "디스크 속도는 요청 크기와 상관없다",
    ],
    answer: 0,
    explanation:
      "두 측정 모두 iflag=direct로 운영체제 캐시를 건너뛰었다. 읽기 한 번마다 고정된 기다림이 있어서 작은 조각을 여러 번 읽으면 처리량이 스무 배 넘게 떨어진다. DB가 페이지로 묶어 읽고 로그를 이어 쓰는 이유다.",
    anchor: "이-컴퓨터에서-직접-재-보기",
  },
  {
    id: "sd-latency-numbers-5",
    post: "sd-latency-numbers",
    question: "가용성 목표를 99.9%에서 99.99%로 올리면 30일 동안 허용되는 멈춤 시간은 어떻게 바뀌나?",
    choices: [
      "43분에서 4분 남짓으로 열 배 준다",
      "43분에서 39분으로 조금 준다",
      "8.76시간에서 52분으로 준다",
      "변하지 않는다",
    ],
    answer: 0,
    explanation:
      "9가 하나 늘 때마다 허용 시간이 10분의 1이 된다. 30일 기준 43.2분이 4.32분이 되니, 사람이 알림을 받고 고치기 전에 자동 전환이 끝나야 한다. 8.76시간과 52분은 1년 기준 값이다.",
    anchor: "아홉-개수와-멈춰도-되는-시간",
  },
  {
    id: "sd-latency-numbers-6",
    post: "sd-latency-numbers",
    question: "같은 서버 안에서 잰 Redis 왕복이 약 16µs였다. 운영에서 웹 서버가 다른 서버의 Redis를 부를 때 어림값으로 더 알맞은 것은?",
    choices: ["2~3µs", "16µs 그대로", "0.2~0.5ms", "150ms"],
    answer: 2,
    explanation:
      "같은 서버 안에서는 네트워크 장비를 거치지 않는다. 다른 서버에 있으면 데이터 센터 안 네트워크 왕복이 더해져 0.2~0.5ms 정도가 되니, 개발 PC나 같은 서버에서 잰 값을 운영 값으로 쓰면 열 배 넘게 어긋난다.",
    anchor: "숫자를-외울-때-자주-하는-실수",
  },
];
