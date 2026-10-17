import type { QuizQuestion } from "../types";

export const DB_TYPE_TIME_SERIES: QuizQuestion[] = [
  {
    id: "db-type-time-series-1",
    post: "db-type-time-series",
    question: "시간 순서로 쌓이는 page_views 테이블에서 BRIN 인덱스가 B-tree보다 수천 배 작아도 쓸 만한 이유는?",
    choices: [
      "BRIN은 값을 압축해서 B-tree와 같은 항목을 더 작게 저장하기 때문에",
      "행이 시각 순서대로 디스크에 놓여 블록 묶음마다 최솟값·최댓값만 알아도 찾을 곳이 좁혀지기 때문에",
      "BRIN은 메모리에만 있어서 디스크 크기에 잡히지 않기 때문에",
      "BRIN은 최근 데이터만 색인하고 오래된 데이터는 건너뛰기 때문에",
    ],
    answer: 1,
    explanation:
      "BRIN은 행마다 항목을 두지 않고 블록 묶음마다 범위만 적는다. 시계열은 물리적 순서와 시간 순서가 같아 범위가 겹치지 않으니 필요한 블록만 고를 수 있다. 대신 블록 단위라 다시 거르는 비용이 있고, 순서가 흐트러지면 효과가 줄어든다.",
    anchor: "시간-순서로-쌓이면-범위만-적어-둬도-된다",
  },
  {
    id: "db-type-time-series-2",
    post: "db-type-time-series",
    question: "5분 요약 테이블에 평균(avg) 대신 합계와 건수를 저장하는 이유는?",
    choices: [
      "합계가 평균보다 저장 공간을 덜 차지해서",
      "평균은 정수로 저장할 수 없어서",
      "구간마다 건수가 다르면 평균의 평균이 실제 평균과 달라지기 때문에",
      "PostgreSQL의 date_bin이 평균을 지원하지 않아서",
    ],
    answer: 2,
    explanation:
      "1시간 평균을 5분 평균 12개의 평균으로 내면 건수가 많은 구간과 적은 구간이 같은 무게로 섞인다. 합계의 합을 건수의 합으로 나누면 어떤 구간으로 다시 묶어도 원본과 같은 값이 나온다.",
    anchor: "오래된-데이터는-요약으로-바꾼다",
  },
  {
    id: "db-type-time-series-3",
    post: "db-type-time-series",
    question: "보존 기간이 지난 하루치 데이터를 지울 때 날짜별 파티션을 DROP하는 쪽이 DELETE보다 나은 이유로 가장 알맞은 것은?",
    choices: [
      "DROP은 행마다 WAL과 죽은 행을 남기지 않고 파일을 통째로 떼어 내기 때문에",
      "DELETE는 트랜잭션 안에서 실행할 수 없기 때문에",
      "DROP은 복제본에 전달되지 않아 복제 지연이 없기 때문에",
      "DELETE는 인덱스가 있으면 실패하기 때문에",
    ],
    answer: 0,
    explanation:
      "실험에서 8만 6천 줄 DELETE는 WAL 4.7MB와 VACUUM을 기다리는 죽은 행 8만 6천 개를 남겼고, 파티션 DROP은 WAL 12kB로 끝났다. DROP도 복제본에 전달되지만 기록할 양이 아주 작다.",
    anchor: "기간-통째로-버리기",
  },
  {
    id: "db-type-time-series-4",
    post: "db-type-time-series",
    question: "Prometheus 지표에 user_id 레이블을 붙이면 생기는 문제는?",
    choices: [
      "레이블 값은 숫자가 될 수 없어서 수집이 실패한다",
      "PromQL에서 user_id로 거를 수 없게 된다",
      "샘플 하나의 크기가 커져 압축이 되지 않는다",
      "레이블 값 조합마다 시계열이 생겨 시계열 수와 메모리가 폭발한다",
    ],
    answer: 3,
    explanation:
      "시계열 수는 레이블 값 종류의 곱이라 회원 수만큼 시계열이 늘어난다. 시계열마다 메모리에 청크와 색인이 생기니 메모리 부족이나 느린 쿼리로 이어진다. 회원별 분석은 로그나 이벤트로 남겨 분석 DB에서 집계한다.",
    anchor: "레이블-하나가-시계열을-수백만-개로-만든다",
  },
  {
    id: "db-type-time-series-5",
    post: "db-type-time-series",
    question: "Gorilla 방식에서 15초마다 긁은 시각이 대부분 비트 하나로 저장될 수 있는 이유는?",
    choices: [
      "시각을 초가 아니라 분 단위로 반올림해서 저장하기 때문에",
      "간격이 일정하면 앞 시각과의 차이의 차이가 0이 되고, 0을 비트 하나로 적기 때문에",
      "같은 시각을 가진 샘플을 하나로 합치기 때문에",
      "시각은 저장하지 않고 긁은 순서만 저장하기 때문에",
    ],
    answer: 1,
    explanation:
      "첫 시각만 통째로 적고, 다음은 차이, 그다음부터는 차이의 차이를 적는다. 간격이 늘 15초면 차이의 차이는 0이라 '0' 비트 하나다. 1초 늦게 온 값처럼 작은 차이는 9비트 정도로 적는다.",
    anchor: "같은-시계열끼리-붙이면-잘-눌린다",
  },
  {
    id: "db-type-time-series-6",
    post: "db-type-time-series",
    question: "Prometheus를 몇 년치 지표를 보관하는 유일한 저장소로 쓰기 어려운 이유는?",
    choices: [
      "로컬 디스크에 저장하고 복제나 장기 보관을 스스로 하지 않기 때문에",
      "PromQL이 7일보다 긴 구간을 지원하지 않기 때문에",
      "Head 블록이 디스크에 저장되지 않아 재시작하면 모두 사라지기 때문에",
      "2시간이 지나면 원본 샘플을 자동으로 평균으로 바꾸기 때문에",
    ],
    answer: 0,
    explanation:
      "Prometheus는 서버 한 대의 로컬 TSDB에 저장하고 기본 보존 기간은 15일이다. 오래 보관하거나 여러 대를 모아 보려면 remote_write로 Thanos, Mimir 같은 장기 저장소에 보낸다. Head 블록은 WAL로 재시작 후 복구된다.",
    anchor: "prometheus는-최근-몇-시간을-메모리에-둔다",
  },
];
