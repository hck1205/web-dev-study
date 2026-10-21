import type { QuizQuestion } from "../types";

export const JS_PROMISE_COMBINATORS: QuizQuestion[] = [
  {
    id: "js-promise-combinators-1",
    post: "js-promise-combinators",
    question:
      "프로필(100ms 성공), 주문(300ms 성공), 추천(200ms 실패)을 Promise.all로 기다렸다. all은 언제 어떻게 끝나고 주문 요청은 어떻게 되나?",
    choices: [
      "300ms에 거부되고, 주문 요청은 취소된다",
      "200ms에 거부되고, 주문 요청은 계속 돌아 300ms에 응답한 뒤 버려진다",
      "300ms에 프로필과 주문만 담아 이행된다",
      "200ms에 거부되고, 주문 요청도 그 순간 자동으로 취소된다",
    ],
    answer: 1,
    explanation:
      "all은 첫 거부가 오는 순간 그 이유로 거부된다. Promise에는 취소 개념이 없어서 이미 출발한 주문 요청은 끝까지 돌고 그 결과는 아무도 쓰지 않는다. 끊으려면 AbortController가 필요하다.",
    anchor: "하나가-실패하면-all은-바로-포기한다",
  },
  {
    id: "js-promise-combinators-2",
    post: "js-promise-combinators",
    question: "위젯 셋 중 추천 위젯만 실패해도 나머지는 보여 줘야 한다. 가장 맞는 선택은?",
    choices: [
      "Promise.race",
      "Promise.any",
      "Promise.allSettled로 받아 status별로 그린다",
      "Promise.all에 catch를 붙인다",
    ],
    answer: 2,
    explanation:
      "allSettled는 거부되지 않고 모든 결과를 { status, value } 또는 { status, reason }으로 담아 준다. all에 catch를 붙이면 성공한 위젯 값까지 잃는다. 실패한 항목은 조용히 묻히지 않게 로그로 남긴다.",
    anchor: "부분-실패를-받아들이는-allsettled",
  },
  {
    id: "js-promise-combinators-3",
    post: "js-promise-combinators",
    question:
      "Promise.race([slowQuery(), timeout(500)])로 타임아웃을 걸었다. 500ms에 타임아웃이 이긴 뒤 slowQuery는?",
    choices: [
      "race가 거부되는 순간 함께 중단된다",
      "자동으로 재시도된다",
      "처리되지 않은 거부 경고를 낸다",
      "계속 실행되어 DB 커넥션 같은 자원을 끝날 때까지 잡고 있는다",
    ],
    answer: 3,
    explanation:
      "race는 먼저 확정된 쪽을 따를 뿐 진 쪽 작업을 멈추지 않는다. 그래서 부하가 몰릴 때 포기한 쿼리가 뒤에서 쌓인다. 작업 자체를 끊으려면 AbortSignal 같은 취소 신호를 넘기고, DB라면 서버 쪽 타임아웃도 둔다.",
    anchor: "race로-건-타임아웃은-아무것도-멈추지-않는다",
  },
  {
    id: "js-promise-combinators-4",
    post: "js-promise-combinators",
    question: "요청은 200ms에 끝났는데 race에 넣은 5초 타이머를 지우지 않았다. Node.js에서 생기는 일은?",
    choices: [
      "타이머가 이벤트 루프를 붙잡아 프로세스가 5초 뒤에야 끝난다",
      "5초 뒤 처리되지 않은 거부로 프로세스가 죽는다",
      "race 결과가 5초 뒤 거부로 바뀐다",
      "아무 영향이 없다",
    ],
    answer: 0,
    explanation:
      "진 타이머도 살아 있어서 이벤트 루프가 끝나지 않는다. race가 모든 입력에 핸들러를 붙이므로 처리되지 않은 거부 경고는 나지 않고, 이미 확정된 결과도 바뀌지 않는다. finally에서 clearTimeout으로 정리한다.",
    anchor: "race로-건-타임아웃은-아무것도-멈추지-않는다",
  },
  {
    id: "js-promise-combinators-5",
    post: "js-promise-combinators",
    question: "kr(100ms 실패), jp(250ms 성공), us(400ms 성공) 미러에 같은 요청을 보냈다. race와 any의 결과는?",
    choices: [
      "둘 다 jp로 이행",
      "race는 kr 실패로 거부, any는 jp로 이행",
      "race는 jp로 이행, any는 kr 실패로 거부",
      "둘 다 kr 실패로 거부",
    ],
    answer: 1,
    explanation:
      "race는 이행이든 거부든 가장 먼저 확정된 것을 따르므로 100ms의 kr 실패를 따른다. any는 거부를 건너뛰고 첫 이행인 jp를 기다린다. 모두 실패해야 AggregateError로 거부된다.",
    anchor: "any는-첫-성공을-기다린다",
  },
  {
    id: "js-promise-combinators-6",
    post: "js-promise-combinators",
    question: "입력 배열이 비어 있을 때 영원히 pending으로 남는 것은?",
    choices: ["Promise.all([])", "Promise.allSettled([])", "Promise.any([])", "Promise.race([])"],
    answer: 3,
    explanation:
      "race는 참가자가 없으니 확정될 일이 없다. all과 allSettled는 빈 배열로 바로 이행되고, any는 성공할 후보가 없어 빈 errors의 AggregateError로 바로 거부된다.",
    anchor: "빈-배열을-넣으면-생기는-일",
  },
  {
    id: "js-promise-combinators-7",
    post: "js-promise-combinators",
    question: "Promise.all을 직접 구현할 때 끝났는지를 results.length가 아니라 남은 개수로 판단하는 이유는?",
    choices: [
      "results.length는 계산이 느려서",
      "new Array(n)으로 만든 배열은 처음부터 길이가 n이라 다 찼는지 알 수 없어서",
      "results가 끝난 순서대로 채워져서",
      "reject가 여러 번 불릴 수 있어서",
    ],
    answer: 1,
    explanation:
      "입력 순서를 지키려고 results[i]로 자리에 넣으니 배열 길이는 처음부터 입력 개수다. 그래서 끝난 개수를 따로 세야 한다. reject가 여러 번 불리는 건 Promise가 처음 한 번만 받아들여서 문제가 되지 않는다.",
    anchor: "promiseall을-직접-만들어-보면",
  },
];
