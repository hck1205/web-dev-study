import type { QuizQuestion } from "../types";

export const RW_SEGMENT_GOODBYE_MICROSERVICES: QuizQuestion[] = [
  {
    id: "rw-segment-goodbye-microservices-1",
    post: "rw-segment-goodbye-microservices",
    question: "2013년 Segment의 모놀리스에서 Salesforce 하나가 멈추자 모든 목적지 전송이 늦어진 직접적인 이유는?",
    choices: [
      "워커가 Salesforce용 메모리를 너무 많이 써서",
      "실패한 이벤트를 같은 큐 뒤에 다시 넣어 새 이벤트와 재시도가 한 줄에 섞였기 때문에",
      "Salesforce가 다른 목적지의 API 키까지 막았기 때문에",
      "라우터가 모든 이벤트를 Salesforce로 먼저 보냈기 때문에",
    ],
    answer: 1,
    explanation:
      "큐 하나에 모든 고객과 목적지의 새 이벤트와 재시도가 섞여 있어서, 막힌 목적지의 이벤트가 앞을 막을 때마다 뒤가 다 기다렸다. 이것이 head-of-line blocking이다. 라우터는 2014년 구조에서 처음 생겼다.",
    anchor: "처음엔-큐-하나-워커-하나",
  },
  {
    id: "rw-segment-goodbye-microservices-2",
    post: "rw-segment-goodbye-microservices",
    question: "목적지마다 저장소를 나눈 뒤 공유 라이브러리의 버전이 서비스마다 갈라진 이유로 가장 알맞은 것은?",
    choices: [
      "라이브러리 하나를 고치면 수십 개 서비스를 따로 테스트·배포해야 해서, 급할 때 한 서비스에만 새 버전을 올렸기 때문에",
      "패키지 관리자가 같은 라이브러리의 여러 버전을 허용하지 않아서",
      "목적지마다 다른 언어로 작성되어 있어서",
      "공유 라이브러리를 목적지 회사들이 직접 관리해서",
    ],
    answer: 0,
    explanation:
      "서비스 하나에 반영하는 데 한 시간쯤, 50개가 넘으면 일주일 일이었다. 그래서 고칠 때도 미루거나 지금 손대는 목적지에만 올렸고, 결국 모든 목적지가 서로 다른 버전을 쓰게 됐다.",
    anchor: "저장소를-쪼개자-공유-라이브러리가-갈라졌다",
  },
  {
    id: "rw-segment-goodbye-microservices-3",
    post: "rw-segment-goodbye-microservices",
    question: "발표에서 \"마이크로서비스는 head-of-line blocking을 풀지 않고 터지는 범위만 줄였다\"고 한 까닭은?",
    choices: [
      "마이크로서비스로 나눈 뒤 큐를 아예 쓰지 않게 되어서",
      "목적지 서비스들이 같은 데이터베이스를 공유해서",
      "목적지별 큐 안에서도 고객들의 새 이벤트와 재시도가 섞여, 큰 고객의 레이트 리밋이 같은 목적지의 다른 고객을 늦췄기 때문에",
      "라우터가 모든 목적지 큐를 순서대로 하나씩만 처리해서",
    ],
    answer: 2,
    explanation:
      "막힘이 전체에서 목적지 단위로 좁혀졌을 뿐, 한 큐 안의 줄서기는 그대로였다. 제대로 격리하려면 고객 × 목적지 짝마다 큐가 필요했고 그 수가 8만 개를 넘었다.",
    anchor: "쪼개도-남은-줄서기-문제",
  },
  {
    id: "rw-segment-goodbye-microservices-4",
    post: "rw-segment-goodbye-microservices",
    question: "Centrifuge가 큐 대신 MySQL 테이블에 작업을 저장한 가장 큰 이유는?",
    choices: [
      "MySQL이 Kafka보다 초당 쓰기 처리량이 높아서",
      "작업끼리 조인해서 고객별 통계를 내야 해서",
      "큐는 넣은 순서대로만 꺼낼 수 있지만, DB는 쿼리 한 번으로 실행 순서를 바꿀 수 있어서",
      "S3에 보관하려면 관계형 DB를 거쳐야 해서",
    ],
    answer: 2,
    explanation:
      "원문은 큐가 push와 pop만 지원해서 순서를 바꾸려면 데이터를 다시 써야 한다고 짚는다. DB에 실행 순서를 두면 데이터를 복사하지 않고 SQL로 우선순위를 바꿀 수 있다. 원문은 오히려 조인이 없다는 점을 설계 조건으로 꼽는다.",
    anchor: "centrifuge-큐-대신-mysql-표에-순서를-적는다",
  },
  {
    id: "rw-segment-goodbye-microservices-5",
    post: "rw-segment-goodbye-microservices",
    question: "저장소를 하나로 합치기 전에 Segment가 Traffic Recorder를 만든 이유는?",
    choices: [
      "운영 트래픽을 녹화해 장애를 재현하려고",
      "외부 API에 실제로 요청하는 테스트가 자격 증명 만료나 느린 응답으로 자주 깨져서, 합치면 남의 실패가 다시 모두를 막을 것이기 때문에",
      "목적지 회사들이 테스트 요청을 금지해서",
      "Centrifuge의 재시도 간격을 정하려고",
    ],
    answer: 1,
    explanation:
      "저장소를 나눈 원래 이유가 남의 테스트 실패였는데, 그 실패는 대부분 외부 HTTP 요청에서 나왔다. 요청과 응답을 녹음해 재생하자 140개 넘는 목적지 테스트가 밀리초 만에 끝났고, 합칠 수 있는 조건이 갖춰졌다.",
    anchor: "하나로-합치기-의존성-한-벌-녹음해-둔-테스트",
  },
  {
    id: "rw-segment-goodbye-microservices-6",
    post: "rw-segment-goodbye-microservices",
    question: "하나로 합친 뒤 Node 워커의 잡히지 않은 예외가 연쇄 장애로 커진 과정으로 맞는 것은?",
    choices: [
      "예외가 JobDB를 잠가 모든 Director가 멈췄다",
      "예외가 Consul 잠금을 풀어 두 Director가 같은 DB에 썼다",
      "예외가 S3 보관을 막아 메모리가 넘쳤다",
      "예외로 워커가 죽고, Centrifuge가 그 이벤트를 재시도해 다른 워커도 죽였으며, ECS가 새 워커를 충분히 빨리 띄우지 못해 풀이 줄었다",
    ],
    answer: 3,
    explanation:
      "발표에 따르면 죽은 워커의 이벤트는 실패로 처리되어 재시도됐고, 같은 코드 경로가 다른 워커도 죽였다. 교체가 잦자 ECS가 새 작업 배치를 멈추기까지 해서 풀은 줄고 재시도는 늘었다. 래퍼로 예외를 잡아 재시작하는 우회책을 썼다.",
    anchor: "합친-뒤-잃은-것",
  },
  {
    id: "rw-segment-goodbye-microservices-7",
    post: "rw-segment-goodbye-microservices",
    question: "이 사례를 \"마이크로서비스는 틀렸다\"의 근거로 쓰기 어려운 이유로 가장 알맞은 것은?",
    choices: [
      "서비스들이 같은 일을 대상만 바꿔 하던 것이라 팀별 독립 배포의 이득이 없었고, 격리는 Centrifuge로 옮겨 유지했기 때문에",
      "Segment가 결국 다시 140개 서비스로 돌아갔기 때문에",
      "합친 뒤 성능이 더 나빠졌기 때문에",
      "Centrifuge 자체가 마이크로서비스 140개로 이루어져 있기 때문에",
    ],
    answer: 0,
    explanation:
      "목적지 서비스들은 코드 모양이 거의 같고 한 팀이 맡았다. 나누는 비용은 냈지만 얻을 이득이 적었다. 그리고 원문은 다른 부분에서는 마이크로서비스가 잘 맞는다고 쓴다. 다시 140개로 돌아갔다는 자료는 없다.",
    anchor: "이-사례를-마이크로서비스는-나쁘다로-읽으면",
  },
];
