import type { QuizQuestion } from "../types";

export const API_PAGINATION_SORTING: QuizQuestion[] = [
  {
    id: "api-pagination-sorting-1",
    post: "api-pagination-sorting",
    question: "데이터 변경이 없었는데 ORDER BY price LIMIT 20 OFFSET 20 페이지에 1페이지 상품이 또 나온다. 가장 먼저 고칠 것은?",
    choices: [
      "OFFSET을 키셋으로 바꾼다",
      "정렬 키 끝에 id 같은 유일한 열을 붙인다",
      "price에 인덱스를 만든다",
      "트랜잭션 격리 수준을 올린다",
    ],
    answer: 1,
    explanation:
      "가격이 같은 행끼리의 순서는 DB가 보장하지 않아서 페이지마다 다른 순서가 나올 수 있다. 실제로 50페이지 중 455행이 중복됐고, ORDER BY price, id로 바꾸자 0행이 됐다. 키셋으로 바꿔도 동점 처리 열이 없으면 같은 문제가 남는다.",
    anchor: "데이터가-그대로인데-페이지가-겹친다",
  },
  {
    id: "api-pagination-sorting-2",
    post: "api-pagination-sorting",
    question: "ORDER BY price DESC, id ASC 정렬의 다음 페이지를 WHERE price < $1 OR (price = $1 AND id > $2)로 받았더니 느리다. 실행 계획에서 확인할 것은?",
    choices: [
      "조건이 Index Cond가 아니라 Filter에 있어서 인덱스 맨 앞부터 걸러 내는지",
      "병렬 작업자 수",
      "Planning Time이 긴지",
      "Sort Method가 quicksort인지",
    ],
    answer: 0,
    explanation:
      "OR로 묶인 조건은 인덱스의 시작점으로 쓰지 못해 50만 행을 Filter로 버렸다. price <= $1 같은 범위 조건을 덧붙이거나 (-price, id) 식 인덱스로 방향을 맞추면 시작점으로 바로 내려간다.",
    anchor: "정렬-방향이-섞이면-행-비교를-못-쓴다",
  },
  {
    id: "api-pagination-sorting-3",
    post: "api-pagination-sorting",
    question: "평점 높은 순(NULLS LAST) 목록을 키셋으로 넘기다 평점 있는 마지막 상품에서 \"목록 끝\"이 됐다. 리뷰 없는 상품 20만 개가 남아 있다면 원인은?",
    choices: [
      "LIMIT이 너무 작아서",
      "NULL 행이 인덱스에 들어가지 않아서",
      "(rating, id) < (1.0, 48) 비교가 NULL 행에서 NULL이 되어 WHERE를 통과하지 못해서",
      "커서 서명이 틀려서",
    ],
    answer: 2,
    explanation:
      "NULL과의 비교는 참도 거짓도 아닌 NULL이라 조건을 통과하지 못한다. coalesce(rating, -1)처럼 정렬 가능한 값으로 바꾼 식으로 정렬하고 같은 식 인덱스를 만들면 NULL 행도 이어서 나온다.",
    anchor: "null이-섞인-열로-정렬하면-행이-사라진다",
  },
  {
    id: "api-pagination-sorting-4",
    post: "api-pagination-sorting",
    question: "키셋으로 이전 페이지를 받을 때 맞는 방법은?",
    choices: [
      "같은 비교와 정렬로 OFFSET만 빼서 읽는다",
      "비교 방향만 뒤집고 정렬은 그대로 둔다",
      "첫 페이지부터 다시 읽어 앞 페이지를 찾는다",
      "현재 페이지 첫 행 기준으로 비교와 정렬 방향을 모두 뒤집어 읽은 뒤 결과를 다시 뒤집는다",
    ],
    answer: 3,
    explanation:
      "비교만 뒤집고 정렬을 그대로 두면 커서 가까이가 아니라 목록 맨 처음 행들이 온다. 정렬까지 뒤집어 커서에서 가까운 것부터 LIMIT만큼 읽고, 화면에 주기 전에 원래 순서로 되돌린다.",
    anchor: "이전-페이지로-돌아가기",
  },
  {
    id: "api-pagination-sorting-5",
    post: "api-pagination-sorting",
    question: "커서에 정렬 이름과 필터 해시를 함께 넣고 서명하는 이유로 가장 알맞은 것은?",
    choices: [
      "다른 정렬이나 필터 요청에 옛 커서가 붙어 오거나 변조된 커서가 오면 알아보고 거절하려고",
      "커서 길이를 줄이려고",
      "base64url 인코딩이 암호화가 되게 하려고",
      "DB 인덱스를 고르게 하려고",
    ],
    answer: 0,
    explanation:
      "가격순 커서를 평점순 요청에 쓰면 엉뚱한 값을 비교하게 되고, 서명이 없으면 누구나 커서를 풀어 고칠 수 있다. 서명은 클라이언트가 커서 형식에 기대지 못하게 해서 나중에 정렬 키를 바꿀 수 있게도 한다.",
    anchor: "커서에-담을-것과-지킬-것",
  },
  {
    id: "api-pagination-sorting-6",
    post: "api-pagination-sorting",
    question: "같은 50만 행을 건너뛰는 OFFSET인데 가격순이 id순보다 버퍼를 훨씬 많이 읽은 이유는?",
    choices: [
      "가격 인덱스가 더 커서",
      "가격 순서가 테이블에 행이 놓인 순서와 달라 행마다 다른 페이지를 찾아가서",
      "가격 열이 int라서",
      "가격순은 병렬 스캔을 못 해서",
    ],
    answer: 1,
    explanation:
      "id 순서는 입력 순서와 같아 같은 테이블 페이지를 연달아 읽지만, 가격 순서는 행이 여기저기 흩어져 있다. 그래서 OFFSET 500000에 버퍼를 42만 번 건드렸다. 키셋은 시작점으로 바로 내려가 19번 만에 끝났다.",
    anchor: "인덱스-순서와-테이블-순서가-다르면-offset은-더-비싸다",
  },
];
