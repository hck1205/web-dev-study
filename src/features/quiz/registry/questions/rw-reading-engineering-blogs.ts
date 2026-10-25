import type { QuizQuestion } from "../types";

export const RW_READING_ENGINEERING_BLOGS: QuizQuestion[] = [
  {
    id: "rw-reading-engineering-blogs-1",
    post: "rw-reading-engineering-blogs",
    question: "Netflix Hystrix README의 유지보수 모드 공지가 말하는 것으로 맞는 것은?",
    choices: [
      "서킷 브레이커라는 개념이 더는 쓸모없어서 Netflix가 모든 서비스에서 걷어 냈다",
      "Netflix는 기존 앱에는 계속 쓰되, 적응형 구현으로 관심을 옮기고 새 프로젝트에는 resilience4j 같은 활발한 프로젝트를 쓴다",
      "Hystrix 2.0이 사내에서 개발 중이라 공개 판만 멈췄다",
      "보안 취약점 때문에 모든 사용자가 즉시 옮겨야 한다",
    ],
    answer: 1,
    explanation:
      "README는 개념의 가치가 사라진 게 아니라고 분명히 적는다. 바뀐 것은 미리 정한 설정 대신 실시간 성능에 반응하는 구현으로의 방향이고, 새 내부 프로젝트에는 resilience4j 같은 활발한 프로젝트를 쓴다고 했다.",
    anchor: "날짜가-지나면-정답이-바뀐다",
  },
  {
    id: "rw-reading-engineering-blogs-2",
    post: "rw-reading-engineering-blogs",
    question: "Actionbase 성능 문서의 \"60k\"를 인용하려 한다. 가장 정확한 인용 방식은?",
    choices: [
      "\"Actionbase는 운영에서 60k TPS를 처리한다\"",
      "\"Actionbase는 초당 수십만 건을 처리한다\"",
      "\"2026년 1월 19일 이후 판 기준 운영 최대 약 33k RPS, 60k 이상은 내부 시험 값\"",
      "숫자가 여러 번 바뀌었으니 어느 숫자든 출처가 있으므로 상관없다",
    ],
    answer: 2,
    explanation:
      "같은 문서가 공개 직후 몇 주 사이에 바뀌었다. 1월 5일 판은 60k+ TPS를 운영 값처럼 적었고, 이후 판은 운영 최대 약 33k RPS와 내부 시험 60k 이상을 갈라 적는다. 숫자는 판의 날짜와 운영·시험 구분과 함께 옮겨야 한다.",
    anchor: "같은-문서-안에서도-숫자가-바뀐다",
  },
  {
    id: "rw-reading-engineering-blogs-3",
    post: "rw-reading-engineering-blogs",
    question: "Actionbase의 설계 문서는 쓰기가 원자적이라고 하고, 운영 사례 문서는 HBase 배치가 원자적이지 않다고 한다. 어떻게 읽는 게 맞나?",
    choices: [
      "설계 문서가 먼저 나왔으니 설계 문서를 믿는다",
      "두 문서가 모순이니 둘 다 근거로 쓰지 않는다",
      "설계 문서가 공식 문서이고 사례는 개인 의견이다",
      "운영 사례는 겪은 일을 적으니 실제에 더 가깝고, 어긋남은 원자성의 범위를 따져 보라는 신호로 읽는다",
    ],
    answer: 3,
    explanation:
      "설계 문서는 의도와 기대를, 운영 사례는 실제로 겪은 일을 적는 경우가 많다. 둘이 어긋난다는 사실은 \"원자적\"이 행 하나인지 배치 전체인지 범위를 확인하라는 정보다. 두 문서 모두 같은 회사의 공식 저장소에 있다.",
    anchor: "설계-문서와-운영-사례가-다른-말을-할-때",
  },
  {
    id: "rw-reading-engineering-blogs-4",
    post: "rw-reading-engineering-blogs",
    question: "Twitter Snowflake 저장소의 2010년 코드를 \"Twitter가 지금 쓰는 ID 생성기\"라고 소개하면 왜 틀리나?",
    choices: [
      "2014년 README가 사내 Snowflake는 완전히 다시 쓴 판이고 공개된 것은 은퇴한 2010년 첫 판이라고 밝혔기 때문이다",
      "Twitter가 Snowflake를 만든 적이 없기 때문이다",
      "2010년 코드는 Finagle 위에서만 돌기 때문이다",
      "Snowflake는 처음부터 다른 회사의 코드였기 때문이다",
    ],
    answer: 0,
    explanation:
      "README는 Thrift 기반의 2010년 첫 판을 은퇴시켰고, 사내 판은 Twitter 내부 인프라에 크게 기대는 완전한 재작성이라고 적었다. 2010년 판은 Finagle보다 먼저 나왔다. 공개 코드와 사내 판의 관계는 회사가 명시한 문장으로 확인해야 한다.",
    anchor: "공개된-코드는-사내에서-도는-코드인가",
  },
  {
    id: "rw-reading-engineering-blogs-5",
    post: "rw-reading-engineering-blogs",
    question: "README에 특정 문구(예: \"maintenance mode\")가 언제 들어갔는지 확인하는 가장 직접적인 방법은?",
    choices: [
      "그 회사를 다룬 뉴스 기사의 날짜를 본다",
      "git log -S\"문구\" -- README.md로 그 문자열의 개수가 바뀐 커밋을 찾는다",
      "README 파일의 마지막 수정 날짜만 본다",
      "저장소의 별 개수가 줄어든 시점을 찾는다",
    ],
    answer: 1,
    explanation:
      "-S 옵션은 지정한 문자열이 추가되거나 빠진 커밋만 골라 준다. README의 마지막 수정일은 다른 변경 때문에 바뀌었을 수 있어서 그 문구의 시점을 알려 주지 않는다. Hystrix의 문구는 이렇게 2018년 11월 19일 커밋으로 확인된다.",
    anchor: "저장소-이력으로-옛-판을-꺼내-보기",
  },
  {
    id: "rw-reading-engineering-blogs-6",
    post: "rw-reading-engineering-blogs",
    question: "Actionbase README의 구조 그림(클라이언트 → Actionbase → HBase·JDBC·Kafka)만 보고 놓치기 쉬운 것은?",
    choices: [
      "HBase가 저장소라는 사실",
      "Kafka로 변경을 내보낸다는 사실",
      "Ingress·Worker로 나뉜 배포, Spark 비동기 처리기, 정기 검증 작업 같은 운영 구성 요소",
      "REST API로 접근한다는 사실",
    ],
    answer: 2,
    explanation:
      "README 그림에는 세 갈래 저장소만 있다. 같은 저장소의 Benchmarks와 사례 문서를 모으면 두 종류의 배포, WAL을 읽는 Spark Streaming 처리기, 섀도 테스트 환경, 스냅숏 대조 작업이 나온다. 그림에 없는 상자가 운영의 큰 몫일 때가 많다.",
    anchor: "구조-그림-한-장이-숨기는-것",
  },
  {
    id: "rw-reading-engineering-blogs-7",
    post: "rw-reading-engineering-blogs",
    question: "팀원이 \"Netflix도 이렇게 한다\"며 구조 변경을 제안했다. 이 글이 권하는 첫 확인은?",
    choices: [
      "그 사례의 날짜와 현재 상태, 그 회사가 겪은 증상, 우리 지표에서 같은 증상이 보이는지를 확인한다",
      "Netflix 기술 블로그의 최신 글 제목을 확인한다",
      "그 구조를 쓰는 오픈소스의 별 개수를 확인한다",
      "경쟁사도 같은 구조를 쓰는지 확인한다",
    ],
    answer: 0,
    explanation:
      "해법은 그 회사가 만난 증상을 풀려고 나왔으니, 같은 증상이 우리에게 없으면 비용만 먼저 온다. 사례의 날짜와 지금 상태, 원래 증상, 우리 지표 세 가지 중 하나라도 비면 결정을 미룬다.",
    anchor: "우리-팀이-netflix-구조를-따라-하고-싶어질-때",
  },
];
