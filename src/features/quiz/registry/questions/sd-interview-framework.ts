import type { QuizQuestion } from "../types";

export const SD_INTERVIEW_FRAMEWORK: QuizQuestion[] = [
  {
    id: "sd-interview-framework-1",
    post: "sd-interview-framework",
    question: "조회수 세기 문제를 받자마자 Kafka와 스트림 처리기를 그렸다. 이 진행에서 가장 큰 문제는?",
    choices: [
      "Kafka 대신 RabbitMQ를 골라야 했다",
      "규모와 정확도 요구를 묻지 않아 부품을 고를 근거가 없다",
      "그림에 로드 밸런서가 빠졌다",
      "API를 REST가 아닌 gRPC로 정해야 했다",
    ],
    answer: 1,
    explanation:
      "같은 조회수 문제도 하루 수만 건짜리 사내 블로그라면 UPDATE 한 줄로 충분하다. 규모와 정확도를 먼저 묻지 않으면 과잉 설계인지 부족한 설계인지 판단할 수 없다. 기술 이름을 바꾸는 것은 문제의 핵심이 아니다.",
    anchor: "첫-토막-무엇을-만들지-좁힌다",
  },
  {
    id: "sd-interview-framework-2",
    post: "sd-interview-framework",
    question: "\"표시용이라 몇 초 늦거나 장애 때 조금 잃어도 된다\"는 답을 받았다. 이 답이 설계에서 가능하게 만드는 것은?",
    choices: [
      "조회마다 DB 행을 직접 고치는 것",
      "모든 조회를 큐에 남기고 나중에 정확히 집계하는 것",
      "Redis에서 세고 몇 초마다 DB에 몰아서 쓰는 것",
      "조회수를 클라이언트에서만 세는 것",
    ],
    answer: 2,
    explanation:
      "메모리 카운터에 모았다가 몰아 쓰면 Redis가 죽을 때 몇 초 치 조회를 잃는다. 조금 잃어도 된다는 답이 있어야 이 대가를 받아들일 수 있다. 한 건도 틀리면 안 되는 문제라면 큐에 기록을 남기는 무거운 구조를 고른다.",
    anchor: "셋째-토막-숫자가-가리키는-곳을-판다",
  },
  {
    id: "sd-interview-framework-3",
    post: "sd-interview-framework",
    question: "pgbench로 연결 20개가 같은 행만 고치면 초당 714번, 10만 행에 퍼지면 7,810번이었다. 왜 이렇게 차이 날까?",
    choices: [
      "같은 행을 고치는 트랜잭션은 행 잠금 때문에 한 줄로 서서 하나씩 처리돼서",
      "같은 행을 고치면 인덱스가 매번 새로 만들어져서",
      "pgbench가 같은 행에는 연결을 하나만 써서",
      "10만 행에 퍼지면 PostgreSQL이 쓰기를 건너뛰어서",
    ],
    answer: 0,
    explanation:
      "같은 행을 고치려는 트랜잭션은 앞 트랜잭션이 커밋할 때까지 기다린다. 연결이 많아도 일하는 것은 하나라서 처리량이 커밋 한 번의 시간으로 정해진다. 행이 다르면 서로 기다리지 않고 동시에 진행된다.",
    anchor: "셋째-토막-숫자가-가리키는-곳을-판다",
  },
  {
    id: "sd-interview-framework-4",
    post: "sd-interview-framework",
    question: "작업자가 Redis 카운터를 GET으로 읽고 DEL로 지우는 대신 GETDEL을 쓰는 이유는?",
    choices: [
      "GETDEL이 더 적은 메모리를 써서",
      "읽기와 지우기 사이에 들어온 조회가 사라지지 않게 하려고",
      "GET은 Redis 7에서 없어져서",
      "GETDEL은 결과를 DB에 자동으로 써 주어서",
    ],
    answer: 1,
    explanation:
      "GET과 DEL을 따로 보내면 그 사이에 들어온 INCR이 DEL에 같이 지워진다. GETDEL은 꺼내기와 지우기를 명령 하나로 해서 그 틈이 없다. DB에 쓰는 일은 여전히 작업자가 한다.",
    anchor: "셋째-토막-숫자가-가리키는-곳을-판다",
  },
  {
    id: "sd-interview-framework-5",
    post: "sd-interview-framework",
    question: "큰 그림 단계에서 해야 할 일로 가장 알맞은 것은?",
    choices: [
      "모든 부품의 세부 구현을 다 설명한다",
      "가장 단순한 구조로 요청이 처음부터 끝까지 가는 길을 그리고 동의를 받는다",
      "가능한 한 많은 기술 이름을 상자에 적는다",
      "면접관에게 질문하지 않고 혼자 완성한다",
    ],
    answer: 1,
    explanation:
      "큰 그림은 상자 몇 개와 핵심 API, 각 상자가 받는 숫자로 끝까지 이어진 길이면 된다. 동의를 받아야 다음 단계에서 어디를 깊이 팔지 면접관과 함께 정할 수 있다. 세부 구현은 그 뒤에 한두 곳만 판다.",
    anchor: "둘째-토막-상자-몇-개로-끝까지-그린다",
  },
  {
    id: "sd-interview-framework-6",
    post: "sd-interview-framework",
    question: "마지막 5분에 면접관이 묻기 전에 꺼내면 좋은 것은?",
    choices: [
      "처음 그림을 다시 깨끗하게 그리기",
      "다른 회사에서 쓰는 기술 목록",
      "부품이 죽을 때 잃는 것, 10배일 때 먼저 막히는 곳, 지켜볼 지표",
      "면접 문제가 너무 쉬웠다는 의견",
    ],
    answer: 2,
    explanation:
      "완벽한 설계는 없어서 약점을 알고 있다는 것 자체가 평가된다. Redis가 죽으면 몇 초 치 조회를 잃는다, 10배면 키 범위로 나눈다, 작업자 지연을 지표로 본다처럼 장애, 확장, 관찰을 구체적으로 말한다.",
    anchor: "마지막-토막-약점을-먼저-말한다",
  },
];
