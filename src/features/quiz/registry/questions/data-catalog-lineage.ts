import type { QuizQuestion } from "../types";

export const DATA_CATALOG_LINEAGE: QuizQuestion[] = [
  {
    id: "data-catalog-lineage-1",
    post: "data-catalog-lineage",
    question: "원본 컬럼 하나를 지우기 전에 영향 범위를 찾으려 한다. 테이블 단위 계보만으로 부족한 이유는?",
    choices: [
      "테이블 단위 계보는 대시보드를 노드로 둘 수 없기 때문이다",
      "그 테이블을 읽는 모든 테이블이 다 걸려 나와서 결국 SQL을 하나씩 열어 봐야 하기 때문이다",
      "테이블 단위 계보는 실행 이벤트로만 만들 수 있기 때문이다",
      "테이블 단위 계보는 순환을 허용해서 탐색이 끝나지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "테이블 단위로는 orders를 읽는 테이블 서른 개가 모두 영향권으로 나온다. 실제로 그 컬럼을 쓰는 곳만 추리려면 출력 컬럼이 어느 입력 컬럼에서 왔는지 잇는 컬럼 단위 계보가 필요하다.",
    anchor: "계보를-만드는-첫-번째-방법-sql을-읽는다",
  },
  {
    id: "data-catalog-lineage-2",
    post: "data-catalog-lineage",
    question: "sqlglot으로 fct_daily_sales의 컬럼 계보를 뽑았더니 WHERE o.status = 'paid'의 status가 어느 출력 컬럼의 재료로도 나오지 않았다. 이게 뜻하는 것은?",
    choices: [
      "status는 지워도 이 쿼리에 아무 영향이 없다",
      "파서가 WHERE 절을 읽지 못하는 버그다",
      "status는 값을 만들지 않고 행을 거르는 데만 쓰여 값의 계보에는 없지만, 지우면 쿼리는 깨진다",
      "status는 stg_customers의 컬럼이라 다른 그래프에 있다",
    ],
    answer: 2,
    explanation:
      "필터·조인 조건에만 쓰인 컬럼은 출력 값으로 흘러가지 않으니 값의 계보에서 빠진다. 그래도 쿼리가 참조하므로 지우면 실패한다. 그래서 영향 분석은 직접 쓰임과 간접 쓰임을 함께 본다.",
    anchor: "계보를-만드는-첫-번째-방법-sql을-읽는다",
  },
  {
    id: "data-catalog-lineage-3",
    post: "data-catalog-lineage",
    question: "SQL 파싱 대신 실행 이벤트(OpenLineage)로 계보를 모을 때 새로 잡히는 것과 여전히 못 잡는 것으로 알맞은 짝은?",
    choices: [
      "잡히는 것: Python Spark 잡의 실제 입출력 / 못 잡는 것: 아직 한 번도 실행되지 않은 경로",
      "잡히는 것: 실행되지 않은 분기의 코드 / 못 잡는 것: 동적으로 조립된 SQL",
      "잡히는 것: 컬럼 설명과 담당자 / 못 잡는 것: 테이블 이름",
      "잡히는 것: select * 의 컬럼 / 못 잡는 것: 실행 시각",
    ],
    answer: 0,
    explanation:
      "실행 엔진이 실제로 읽고 쓴 것을 알리니 SQL이 없는 잡이나 변수로 정한 테이블도 잡힌다. 대신 실행된 것만 선이 되므로 월말에만 도는 잡 같은 경로는 실행 전까지 그래프에 없다. 그래서 정적 그래프 위에 실행 이벤트를 덧붙인다.",
    anchor: "두-번째-방법-실행하면서-알린다",
  },
  {
    id: "data-catalog-lineage-4",
    post: "data-catalog-lineage",
    question: "Spark 잡은 s3://lake/orders로, dbt는 analytics.orders로 같은 데이터를 OpenLineage 이벤트에 실었다. 카탈로그 계보는 어떻게 보이나?",
    choices: [
      "카탈로그가 같은 데이터임을 알아서 하나로 합친다",
      "두 이벤트 중 나중 것만 남는다",
      "Spark 쪽 이벤트가 거절된다",
      "namespace와 name이 달라 노드가 둘 생기고 그 사이 선이 끊긴다",
    ],
    answer: 3,
    explanation:
      "OpenLineage 데이터셋은 namespace와 name으로 구별되니 이름이 다르면 다른 노드다. 계보가 군데군데 끊겨 보이는 흔한 원인이 이 이름 불일치라서, 처음에 이름 규칙부터 맞추거나 둘을 잇는 작업을 따로 한다.",
    anchor: "두-번째-방법-실행하면서-알린다",
  },
  {
    id: "data-catalog-lineage-5",
    post: "data-catalog-lineage",
    question: "대시보드 숫자가 어제 그대로라는 문의가 왔다. 계보를 거꾸로 따라 올라갈 때 노드마다 함께 봐야 원인을 바로 찾을 수 있는 것은?",
    choices: [
      "각 테이블의 컬럼 설명",
      "마지막 실행 상태, 갱신 시각, 테스트 결과 같은 운영 메타데이터",
      "테이블 담당자의 이름",
      "각 테이블의 파티션 키",
    ],
    answer: 1,
    explanation:
      "계보는 어디서 왔는지만 알려 주고 어디서 멈췄는지는 모른다. 실험에서 fct_daily_sales가 skipped였고, 위의 stg_orders에 붙은 테스트가 실패했다는 게 운영 메타데이터를 붙여야 보였다.",
    anchor: "틀린-숫자에서-거꾸로-올라간다",
  },
  {
    id: "data-catalog-lineage-6",
    post: "data-catalog-lineage",
    question: "카탈로그 도입 석 달 뒤 사람들이 카탈로그를 믿지 않게 됐다. 메타데이터 우선 설계가 내놓는 처방으로 가장 알맞은 것은?",
    choices: [
      "데이터 팀이 분기마다 모든 테이블 설명을 다시 적는다",
      "카탈로그 검색 화면을 더 보기 좋게 만든다",
      "설명과 담당자는 코드 옆 YAML에 두고 빌드 때 올리며, 계보는 실행이 내보내고, 빠지면 CI가 막는다",
      "카탈로그를 없애고 슬랙 채널로 대신한다",
    ],
    answer: 2,
    explanation:
      "카탈로그가 실패하는 주된 이유는 아무도 갱신하지 않아서다. 메타데이터를 나중에 손으로 적는 문서로 두지 않고 파이프라인이 일하면서 내보내게 하면, 코드가 바뀔 때 같은 PR에서 메타데이터도 바뀐다.",
    anchor: "메타데이터를-나중에-적지-않고-먼저-내보낸다",
  },
  {
    id: "data-catalog-lineage-7",
    post: "data-catalog-lineage",
    question: "ML 모델의 학습 데이터 계보에 테이블 이름만 남기면 부족한 이유는?",
    choices: [
      "테이블은 계속 바뀌어서, 학습에 쓴 시점의 데이터(스냅숏 id, 해시 등)를 모르면 다시 꺼내 비교할 수 없기 때문이다",
      "ML 모델은 테이블을 읽지 않고 파일만 읽기 때문이다",
      "테이블 이름은 OpenLineage 이벤트에 실을 수 없기 때문이다",
      "모델 레지스트리가 테이블 이름을 저장하지 못하기 때문이다",
    ],
    answer: 0,
    explanation:
      "같은 테이블이라도 학습한 날과 지금의 내용이 다르다. 테이블 포맷의 스냅숏 id나 파일 해시까지 남기고 데이터셋 버전, 학습 실행, 모델 버전, 배포를 이어야 원본 버그가 어느 모델에 들어갔는지 찾을 수 있다.",
    anchor: "모델-학습-데이터의-계보",
  },
];
