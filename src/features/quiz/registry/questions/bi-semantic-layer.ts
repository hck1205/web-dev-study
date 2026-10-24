import type { QuizQuestion } from "../types";

export const BI_SEMANTIC_LAYER: QuizQuestion[] = [
  {
    id: "bi-semantic-layer-1",
    post: "bi-semantic-layer",
    question: "같은 events 테이블을 보는 세 대시보드의 10월 활성 사용자가 78,053, 49,197, 58,800으로 달랐다. 가장 근본적인 원인은?",
    choices: [
      "세 대시보드가 서로 다른 시각에 새로 고침을 해서",
      "웨어하우스의 count(DISTINCT)가 근사값을 돌려줘서",
      "활성의 정의(어떤 이벤트를 세나, 테스트 계정, 시간대)가 대시보드마다 SQL 안에 따로 있어서",
      "BI 도구마다 집계 함수 구현이 달라서",
    ],
    answer: 2,
    explanation:
      "A는 푸시 열기까지, B는 로그인만, C는 푸시를 빼고 한국 시각으로 셌다. 누구도 틀리지 않았지만 정의가 흩어져 있어 차이를 아무도 몰랐다. 시맨틱 레이어는 이 정의를 한곳으로 모은다.",
    anchor: "같은-테이블에서-활성-사용자가-셋",
  },
  {
    id: "bi-semantic-layer-2",
    post: "bi-semantic-layer",
    question: "하루에 한 번 갱신되는 데이터를 아침마다 백 명이 여는 대시보드라면, 라이브 연결보다 추출이 나은 이유는?",
    choices: [
      "추출은 항상 실시간 숫자를 보여 주기 때문에",
      "적재 뒤 한 번 복사해 두면 백 명이 열 때마다 웨어하우스에 묻지 않아 빠르고 비용이 일정하기 때문에",
      "추출을 쓰면 시맨틱 레이어가 필요 없어지기 때문에",
      "라이브 연결은 필터를 지원하지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "라이브 연결은 열 때마다, 필터를 바꿀 때마다 SQL을 보내 웨어하우스 속도와 비용에 묶인다. 데이터가 하루 한 번 바뀐다면 적재 뒤 추출해 두는 편이 싸다. 대신 숫자는 마지막 새로 고침 시점에 머문다.",
    anchor: "bi-도구가-웨어하우스에-묻는-방식",
  },
  {
    id: "bi-semantic-layer-3",
    post: "bi-semantic-layer",
    question: "실험에서 원본 events 대신 user_daily로 일별·플랫폼별 DAU를 구하자 2,913ms에서 120ms로 줄었다. 큰 이유 두 가지는?",
    choices: [
      "인덱스가 자동으로 생겨서, 그리고 캐시가 먹어서",
      "결과 행이 줄어서, 그리고 스레드를 더 써서",
      "타임존 변환이 사라져서, 그리고 JOIN이 INNER에서 LEFT로 바뀌어서",
      "읽는 행이 6분의 1로 줄고, count(DISTINCT)가 단순한 count(*)로 바뀌어서",
    ],
    answer: 3,
    explanation:
      "user_daily는 사용자 한 명이 하루에 한 행이라 2,012만 행이 347만 행이 됐고, 이미 사용자 단위로 묶여 있어 중복 제거 없이 행을 세면 된다. 결과 90행은 원본과 똑같았고, 같은 조건으로 다섯 번 돌린 최솟값을 비교했다.",
    anchor: "대시보드가-느릴-때-먼저-보는-곳",
  },
  {
    id: "bi-semantic-layer-4",
    post: "bi-semantic-layer",
    question: "일별 DAU 테이블만 있을 때 30일치를 더해 MAU를 구하면 어떻게 되나?",
    choices: [
      "여러 날 활동한 사람이 중복으로 세어져 훨씬 큰 숫자가 나온다",
      "정확한 MAU가 나온다",
      "주말이 빠져서 조금 작은 숫자가 나온다",
      "테스트 계정이 다시 포함된다",
    ],
    answer: 0,
    explanation:
      "실험에서 30일 DAU 합은 1,656,845였고 실제 MAU는 58,800이었다. 고유 수는 더할 수 없는 지표라 user_id를 남긴 테이블에서 다시 세거나 HyperLogLog 스케치를 합쳐야 한다.",
    anchor: "고유-사용자-수는-더할-수-없다",
  },
  {
    id: "bi-semantic-layer-5",
    post: "bi-semantic-layer",
    question: "집계 인식으로 월별·플랫폼별 활성 사용자를 물었는데 월 단위 표가 없다. 90행짜리 일별 DAU 표와 347만 행짜리 user_daily 중 무엇을 골라야 하나?",
    choices: [
      "행이 적은 일별 DAU 표를 골라 30일을 더한다",
      "어느 표도 못 쓰니 항상 오류를 낸다",
      "user_id를 남겨 다시 묶을 수 있는 user_daily를 고른다",
      "두 표의 결과를 평균 낸다",
    ],
    answer: 2,
    explanation:
      "고유 수만 남긴 일별 DAU 표는 단위와 차원이 질문과 정확히 같을 때만 쓸 수 있다. 더 굵은 단위 질문은 user_id를 남긴 표에서 다시 세야 정확하다. 행이 적다는 이유로 고르면 틀린 숫자가 나온다.",
    anchor: "질문마다-가장-작은-표를-고른다",
  },
  {
    id: "bi-semantic-layer-6",
    post: "bi-semantic-layer",
    question: "BigQuery에서 대시보드 쿼리의 결과 캐시가 거의 먹히지 않는다. 먼저 의심할 것은?",
    choices: [
      "테이블에 파티션이 너무 많다",
      "쿼리에 CURRENT_TIMESTAMP() 같은 비결정 함수가 들어 있다",
      "대시보드 타일이 너무 적다",
      "결과 행이 1,000행을 넘는다",
    ],
    answer: 1,
    explanation:
      "BigQuery는 비결정 함수가 든 쿼리를 캐시하지 않고, 참조 테이블이 바뀌면 캐시가 무효가 된다. 최근 30일을 now()로 계산하는 대신 날짜를 값으로 넘기면 같은 SQL이 반복되어 캐시를 탄다.",
    anchor: "캐시-추출-파티션-나머지-손잡이",
  },
  {
    id: "bi-semantic-layer-7",
    post: "bi-semantic-layer",
    question: "Streamlit 내부 대시보드에서 선택 상자를 바꿀 때마다 웨어하우스 쿼리가 다시 나간다. 왜 그런가?",
    choices: [
      "Streamlit은 위젯마다 별도 서버를 띄우기 때문에",
      "선택 상자가 자동으로 라이브 연결을 새로 만들기 때문에",
      "DuckDB가 읽기 전용 연결을 캐시하지 않기 때문에",
      "Streamlit은 위젯이 바뀔 때마다 스크립트를 처음부터 다시 실행하는데 쿼리를 st.cache_data로 캐시하지 않았기 때문에",
    ],
    answer: 3,
    explanation:
      "Streamlit은 상호작용마다 스크립트 전체를 다시 돌린다. 쿼리 함수를 st.cache_data로 감싸 같은 인자면 결과를 재사용하고, 필터는 메모리에서 거르면 웨어하우스에 매번 묻지 않는다.",
    anchor: "개발자가-직접-만드는-대시보드",
  },
];
