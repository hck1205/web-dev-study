import type { QuizQuestion } from "../types";

export const OPTIMISTIC_LOCKING: QuizQuestion[] = [
  {
    id: "optimistic-locking-1",
    post: "optimistic-locking",
    question:
      "버전 조건을 넣은 UPDATE ... WHERE product_id = 1001 AND version = 1이 UPDATE 0을 돌려줬다. 앱이 먼저 할 일은?",
    choices: [
      "같은 값으로 한 번 더 UPDATE한다",
      "다시 읽어서 행이 없는지(404), 버전만 다른지(충돌) 구분한다",
      "에러가 아니므로 저장 완료로 처리한다",
      "격리 수준을 SERIALIZABLE로 올려 다시 실행한다",
    ],
    answer: 1,
    explanation:
      "0행은 에러가 아니고, 그사이 누가 고쳤을 때와 행이 지워졌을 때 모두 나온다. 다시 읽어 행이 있으면 충돌, 없으면 404로 나눈다. 같은 값으로 다시 쓰면 처음의 덮어쓰기로 돌아간다.",
    anchor: "update-0이-오면-무엇을-하나",
  },
  {
    id: "optimistic-locking-2",
    post: "optimistic-locking",
    question:
      "A가 트랜잭션 안에서 버전 조건 UPDATE를 하고 커밋하지 않았다. B가 같은 조건으로 UPDATE하면 어떻게 되나? (PostgreSQL, READ COMMITTED)",
    choices: [
      "낙관적 잠금이라 B는 바로 UPDATE 1을 받는다",
      "B는 즉시 serialization 에러를 받는다",
      "B는 A가 끝날 때까지 기다렸다가, A가 커밋하면 최신 행으로 조건을 다시 검사해 UPDATE 0을 받는다",
      "B는 A의 커밋 전 값을 덮어쓴다",
    ],
    answer: 2,
    explanation:
      "UPDATE는 어떤 방식이든 쓰는 순간 행 잠금을 잡는다. B는 A의 커밋을 기다린 뒤 최신 버전에 WHERE를 다시 검사하고, 버전이 바뀌었으니 0행이 된다. 낙관적 잠금이 잠그지 않는 건 읽을 때뿐이다.",
    anchor: "잠그지-않는다더니-기다렸다",
  },
  {
    id: "optimistic-locking-3",
    post: "optimistic-locking",
    question:
      "updated_at을 버전으로 쓰는데, 아무도 안 고쳤는데도 브라우저에서 저장하면 항상 충돌이 난다. 가장 그럴듯한 원인은?",
    choices: [
      "자바스크립트 Date가 밀리초까지만 다뤄서 마이크로초가 잘린 값으로 비교한다",
      "now()가 트랜잭션마다 다른 값을 줘서",
      "timestamptz는 WHERE 조건에 쓸 수 없어서",
      "인덱스가 없어서 조건이 무시된다",
    ],
    answer: 0,
    explanation:
      "PostgreSQL의 timestamptz는 마이크로초까지 저장하지만 Date로 왕복하면 밀리초로 잘린다. 잘린 값과 원래 값이 같을 수 없어 항상 0행이 된다. 비교는 증가만 하는 정수 버전으로 하는 게 안전하다.",
    anchor: "버전-숫자-대신-쓸-수-있는-것들",
  },
  {
    id: "optimistic-locking-4",
    post: "optimistic-locking",
    question:
      "선착순 판매처럼 워커 수십 개가 같은 행 하나를 고치는 곳에 낙관적 잠금과 즉시 재시도를 쓰면 어떻게 되나?",
    choices: [
      "잠금이 없으니 처리량이 워커 수만큼 늘어난다",
      "충돌이 거의 없어 재시도가 일어나지 않는다",
      "DB가 자동으로 줄을 세워 비관적 잠금과 똑같이 동작한다",
      "대부분의 시도가 충돌로 버려져 SELECT와 UPDATE가 헛되이 반복되고, FOR UPDATE보다 느려질 수 있다",
    ],
    answer: 3,
    explanation:
      "한 행에 워커 32개를 몰았을 때 시도의 93%가 충돌로 버려졌고 FOR UPDATE보다 오래 걸렸다. 낙관적 잠금은 같은 행을 동시에 고칠 확률이 낮을 때 싸다. 쓰기가 몰리는 곳은 조건부 UPDATE나 비관적 잠금이 맞다.",
    anchor: "충돌이-잦으면-재시도가-일을-잡아먹는다",
  },
  {
    id: "optimistic-locking-5",
    post: "optimistic-locking",
    question: "HTTP API에서 낡은 If-Match 값으로 PUT이 왔을 때 서버가 돌려줄 응답으로 가장 알맞은 것은?",
    choices: [
      "304 Not Modified",
      "412 Precondition Failed와 지금 ETag",
      "428 Precondition Required",
      "200 OK로 저장하고 새 ETag",
    ],
    answer: 1,
    explanation:
      "If-Match 조건이 맞지 않으면 412로 거절하고 지금 ETag와 최신 값을 주면 클라이언트가 다시 읽는 왕복을 줄인다. 428은 If-Match 자체가 없을 때 조건부 요청을 강제하는 코드이고, 304는 읽기 쪽 캐시 재검증에 쓴다.",
    anchor: "브라우저까지-버전을-들고-가기",
  },
  {
    id: "optimistic-locking-6",
    post: "optimistic-locking",
    question:
      "관리자 수정 화면에서 충돌(412)이 났다. 서버가 최신 값을 다시 읽어 사용자의 입력으로 자동 재저장하게 만들면?",
    choices: [
      "다른 관리자의 변경을 덮어써서 처음의 갱신 손실로 돌아간다",
      "충돌이 해결되고 두 변경이 모두 남는다",
      "DB가 두 변경을 자동으로 합쳐 준다",
      "버전이 두 번 올라가 다음 저장이 항상 실패한다",
    ],
    answer: 0,
    explanation:
      "사람이 입력한 값은 다른 사람의 변경을 보지 못한 채 만들어졌다. 그대로 다시 쓰면 덮어쓰기다. 사람의 변경은 충돌을 알리고 최신 값을 보여 주거나, 겹치지 않는 칸만 합친다.",
    anchor: "update-0이-오면-무엇을-하나",
  },
];
