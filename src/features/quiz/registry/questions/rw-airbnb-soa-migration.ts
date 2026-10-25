import type { QuizQuestion } from "../types";

export const RW_AIRBNB_SOA_MIGRATION: QuizQuestion[] = [
  {
    id: "rw-airbnb-soa-migration-1",
    post: "rw-airbnb-soa-migration",
    question: "Airbnb가 서비스 설계 원칙으로 '서비스가 자기 데이터의 읽기와 쓰기를 모두 가진다'를 정한 이유는?",
    choices: [
      "서비스마다 다른 DB 엔진을 쓰려고",
      "여러 서비스가 같은 데이터를 원하면 주인 서비스의 API를 거치게 해 일관성과 캡슐화를 지키려고",
      "읽기 성능을 높이려고 모든 서비스가 같은 DB를 공유하려고",
      "Rails 콜백을 계속 쓰려고",
    ],
    answer: 1,
    explanation:
      "발표는 데이터를 가진 gatekeeper 서비스만 그 데이터를 읽고 쓰고, 다른 서비스는 그 API를 거치게 했다. 데이터 일관성과 캡슐화, 격리를 위해서다. Rails 콜백은 서비스로 나누며 쓸 수 없게 되어 SpinalTap 이벤트로 바꿨다.",
    anchor: "나누기-전에-정한-세-가지-원칙",
  },
  {
    id: "rw-airbnb-soa-migration-2",
    post: "rw-airbnb-soa-migration",
    question: "숙소 데이터 접근 지점이 수천 개였을 때 Airbnb가 고른 방법은?",
    choices: [
      "호출 지점을 하나씩 손으로 서비스 호출로 바꿨다",
      "Monorail을 멈추고 한 번에 서비스로 옮겼다",
      "ActiveRecord 어댑터를 직접 만들어 SQL을 쿼리 객체로 쪼개고 서비스 요청으로 바꿨다",
      "숙소 데이터를 모든 서비스에 복사했다",
    ],
    answer: 2,
    explanation:
      "메타프로그래밍으로 메서드를 덮어쓰는 방법은 다른 모델과의 관계 때문에 어려웠다. 맨 아래 어댑터에서 SQL을 종류·테이블·필터·필드로 나눠 home 서비스 요청으로 보내니, 위의 호출 지점을 바꾸지 않아도 됐고 실제 SQL 패턴도 모두 잡혔다.",
    anchor: "수천-개-호출-지점을-고치지-않은-방법",
  },
  {
    id: "rw-airbnb-soa-migration-3",
    post: "rw-airbnb-soa-migration",
    question: "Airbnb가 읽기는 이중 읽기로, 쓰기는 그림자 DB로 비교한 이유는?",
    choices: [
      "읽기는 멱등해서 두 경로로 동시에 해도 되지만, 같은 DB에 쓰기를 두 번 하면 데이터가 망가지기 때문에",
      "쓰기가 읽기보다 훨씬 많아서",
      "그림자 DB가 운영 DB보다 빨라서",
      "읽기는 비교할 필요가 없어서",
    ],
    answer: 0,
    explanation:
      "같은 요청을 두 번 읽어도 결과는 같으니 옛 경로와 새 경로의 응답을 바로 비교할 수 있다. 쓰기는 같은 DB에 두 번 할 수 없어서 새 경로가 별도 그림자 DB에 쓰고, 두 DB를 강한 일관성으로 읽어 비교했다. 둘 다 관리 UI 게이트로 1%부터 올렸다.",
    anchor: "읽기는-두-길로-비교하고-쓰기는-그림자-db에",
  },
  {
    id: "rw-airbnb-soa-migration-4",
    post: "rw-airbnb-soa-migration",
    question: "Diffy가 같은 옛 코드를 primary와 secondary 두 곳에 돌리는 이유는?",
    choices: [
      "부하를 나눠 받으려고",
      "한쪽이 죽어도 비교를 계속하려고",
      "같은 코드끼리의 차이를 잡음으로 보고, 새 코드와의 차이에서 빼려고",
      "새 코드와 옛 코드를 번갈아 배포하려고",
    ],
    answer: 2,
    explanation:
      "primary와 secondary는 같은 코드라서 둘의 차이는 타임스탬프나 요청 ID 같은 잡음이다. 새 코드와 primary의 차이에서 이 잡음을 빼면 변경이 만든 차이만 남는다. 다만 원래 값이 들쭉날쭉한 필드는 통째로 빠져 그 필드의 회귀는 놓칠 수 있다.",
    anchor: "서비스를-쉽게-만드는-쪽에-투자했다",
  },
  {
    id: "rw-airbnb-soa-migration-5",
    post: "rw-airbnb-soa-migration",
    question: "2018년 발표가 검색 페이지 3배, 숙소 설명 페이지 10배 이상 빨라진 이유로 든 것은?",
    choices: [
      "SOA가 원래 성능을 높이는 구조라서",
      "단일 스레드 Ruby에서 멀티스레드 Java로 많이 옮겨 요청을 병렬로 처리하게 돼서",
      "캐시 서버를 늘려서",
      "데이터베이스를 하나로 합쳐서",
    ],
    answer: 1,
    explanation:
      "발표는 SOA 자체가 성능 때문에 할 일은 아니라고 분명히 한다. 빨라진 건 Ruby 모놀리스에서 Java 서비스로 옮기며 요청을 병렬로 처리할 수 있게 된 덕이라고 설명한다.",
    anchor: "2018년의-결과와-발표가-붙인-경고",
  },
  {
    id: "rw-airbnb-soa-migration-6",
    post: "rw-airbnb-soa-migration",
    question: "SOA v2에서 서비스 블록 앞에 파사드를 두면 한 홉이 늘어나는데도 둔 이유로 발표가 든 것은?",
    choices: [
      "파사드가 모든 데이터를 캐시해서 DB를 안 써도 돼서",
      "같은 엔터티 데이터는 함께 조회되는 일이 많아 파사드가 최적으로 펼칠 수 있고, 클라이언트 영향 없이 안쪽을 고칠 수 있어서",
      "Thrift를 GraphQL로 모두 바꾸려고",
      "서비스를 하나로 합쳐 모놀리스로 돌아가려고",
    ],
    answer: 1,
    explanation:
      "발표는 같은 핵심 엔터티를 다루는 서비스들이 함께 조회되는 일이 많아, 파사드가 질의를 받아 효율적으로 펼칠 수 있다고 답한다. 수백 개 클라이언트는 파사드만 알기 때문에 안쪽 서비스를 합치거나 바꿔도 영향이 없다. 블록 안에서는 Thrift를 그대로 쓴다.",
    anchor: "soa-v2-데이터-집계기와-서비스-블록",
  },
  {
    id: "rw-airbnb-soa-migration-7",
    post: "rw-airbnb-soa-migration",
    question: "Airbnb가 마이크로서비스 초기에 표준으로 정하지 않아 나중에 가장 아쉬워한 것 중 하나는?",
    choices: [
      "서비스 이름 규칙",
      "로그 보관 기간",
      "호출한 쪽의 ID를 요청 맥락으로 넘기는 방식",
      "서버 운영체제 버전",
    ],
    answer: 2,
    explanation:
      "호출자 ID를 넘기는 방식이 서비스마다 달라 표준 지표가 없었고, 누가 부르는지 모르는 unknown 호출을 추적하기 어려웠다. 2021년 발표는 요청 맥락을 미리 정하고 표준화하라고 조언한다.",
    anchor: "서비스-500개가-다시-만든-매듭",
  },
];
