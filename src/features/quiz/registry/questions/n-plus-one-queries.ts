import type { QuizQuestion } from "../types";

export const N_PLUS_ONE_QUERIES: QuizQuestion[] = [
  {
    id: "n-plus-one-queries-1",
    post: "n-plus-one-queries",
    question: "ORM의 지연 로딩이 반복문 안에서 N+1을 만드는 근본 이유는?",
    choices: [
      "ORM이 쿼리를 캐시하지 않아서",
      "ORM은 지금 손댄 객체 하나만 보고 쿼리를 보내서, 옆 객체들도 곧 같은 걸 물을 거라는 걸 모른다",
      "외래 키에 인덱스가 없어서",
      "커넥션 풀이 작아서 쿼리가 나뉘어 나가서",
    ],
    answer: 1,
    explanation:
      "반복문은 앱 코드에 있고 ORM은 불린 객체 하나만 본다. 그래서 스스로 묶지 못하고 손댈 때마다 쿼리를 하나씩 보낸다. 인덱스가 있어도 쿼리 하나가 빨라질 뿐 횟수는 그대로다.",
    anchor: "orm은-객체에-손을-댈-때-쿼리를-보낸다",
  },
  {
    id: "n-plus-one-queries-2",
    post: "n-plus-one-queries",
    question:
      "같은 코드가 개발 노트북에서는 80ms인데, 앱과 DB가 떨어진 운영 환경에서는 400ms가 넘는다. 쿼리 수는 101개로 같다. 가장 그럴듯한 설명은?",
    choices: [
      "운영 DB의 실행 계획이 달라서",
      "운영 데이터가 많아서 쿼리 하나하나가 느려져서",
      "쿼리마다 붙는 네트워크 왕복 시간이 101번 쌓여서",
      "운영 환경의 로그 레벨이 높아서",
    ],
    answer: 2,
    explanation:
      "N+1의 시간은 쿼리 실행보다 왕복 횟수에 비례한다. 지연을 넣은 연결에서 쿼리 수는 그대로인데 시간만 다섯 배쯤 늘었다. 왕복이 한두 번인 고친 버전은 거의 영향을 받지 않았다.",
    anchor: "가까운-db에서는-안-보이는-이유",
  },
  {
    id: "n-plus-one-queries-3",
    post: "n-plus-one-queries",
    question: "주문(부모)과 주문 상품(여러 개짜리 자식)을 JOIN한 결과에 LIMIT 20을 걸면 생기는 일은?",
    choices: [
      "주문 20건과 그 상품이 모두 정확히 나온다",
      "PostgreSQL이 에러를 낸다",
      "자동으로 서브쿼리로 바뀌어 주문 20건이 나온다",
      "행 20개에서 잘려서 주문이 20건보다 적게, 마지막 주문은 상품 일부만 나온다",
    ],
    answer: 3,
    explanation:
      "LIMIT은 JOIN 결과 행에 걸리니 주문 하나가 상품 수만큼 행을 차지한다. 실험에서는 주문 7건만 나왔다. Sequelize처럼 부모를 먼저 서브쿼리로 자르거나, 자식은 IN으로 따로 가져온다.",
    anchor: "미리-가져오는-두-가지-방법",
  },
  {
    id: "n-plus-one-queries-4",
    post: "n-plus-one-queries",
    question: "DataLoader를 모듈 전역에 하나만 만들어 모든 요청이 같이 쓰면 생기는 문제는?",
    choices: [
      "캐시가 요청을 넘어 남아 낡은 데이터나 다른 사용자의 권한으로 가져온 데이터가 나간다",
      "배치가 너무 커져서 쿼리가 실패한다",
      "키 중복 제거가 동작하지 않는다",
      "리졸버가 동시에 불리지 않는다",
    ],
    answer: 0,
    explanation:
      "DataLoader의 캐시는 지우지 않으면 계속 남는다. 실험에서 이메일을 바꾼 뒤에도 전역 로더는 배치 함수를 부르지 않고 옛 값을 돌려줬다. 로더는 요청마다 만들어 context에 넣는다.",
    anchor: "dataloader를-잘못-쓰면-생기는-일",
  },
  {
    id: "n-plus-one-queries-5",
    post: "n-plus-one-queries",
    question: "DataLoader의 배치 함수가 WHERE id = ANY($1) 결과를 그대로 돌려주면 안 되는 이유는?",
    choices: [
      "결과가 문자열이라서",
      "DB 결과 순서는 키 순서와 다르고 없는 키는 빠지는데, 배치 함수는 키와 같은 길이·순서로 돌려줘야 해서",
      "DataLoader는 배열이 아니라 Map만 받아서",
      "ANY는 인덱스를 쓰지 못해서",
    ],
    answer: 1,
    explanation:
      "DataLoader는 돌려받은 배열의 i번째를 i번째 키의 값으로 쓴다. 순서가 다르면 엉뚱한 회원이 엉뚱한 주문에 붙고, 길이가 다르면 에러가 난다. 키로 맵을 만들어 다시 늘어놓고 없는 키에는 null이나 Error를 넣는다.",
    anchor: "dataloader를-잘못-쓰면-생기는-일",
  },
  {
    id: "n-plus-one-queries-6",
    post: "n-plus-one-queries",
    question: "pg_stat_statements에서 N+1을 의심할 수 있는 모양은?",
    choices: [
      "mean_exec_time이 가장 큰 쿼리",
      "rows가 가장 많은 쿼리",
      "목록 쿼리보다 calls가 수십 배 많고, 평균 시간이 아주 작으며 rows가 calls와 같은 단건 조회",
      "calls가 1인 쿼리",
    ],
    answer: 2,
    explanation:
      "N+1의 쿼리 하나는 빨라서 시간 순으로는 위에 안 올라온다. 목록 50번에 상품 조회 3,000번처럼 호출 비율이 행 수만큼 크고, 한 번에 한 줄씩 가져오는 모양이 지문이다. 어느 API인지는 트레이싱의 span 목록으로 좁힌다.",
    anchor: "운영-중인-서비스에서-n1-찾기",
  },
  {
    id: "n-plus-one-queries-7",
    post: "n-plus-one-queries",
    question: "쿼리 수 상한 테스트가 N+1을 놓치기 쉬운 경우는?",
    choices: [
      "테스트 데이터가 1~2건뿐일 때",
      "테스트를 CI에서 돌릴 때",
      "ORM 로깅 훅으로 쿼리를 셀 때",
      "상한을 3으로 잡았을 때",
    ],
    answer: 0,
    explanation:
      "데이터가 1건이면 N+1이어도 쿼리가 몇 개뿐이라 상한을 넘지 않는다. 데이터가 늘어도 쿼리 수가 일정한지를 보려면 목록 테스트에 최소 몇십 건을 넣는다.",
    anchor: "운영-중인-서비스에서-n1-찾기",
  },
];
