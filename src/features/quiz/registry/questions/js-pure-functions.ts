import type { QuizQuestion } from "../types";

export const JS_PURE_FUNCTIONS: QuizQuestion[] = [
  {
    id: "js-pure-functions-1",
    post: "js-pure-functions",
    question:
      "렌더링 중에 `cart.items.push(배송비)`를 하는 컴포넌트가 개발 서버에서만 배송비를 두 줄로 보여 준다. 왜 개발에서만 드러나나?",
    choices: [
      "개발 빌드는 props를 복사해서 넘기기 때문이다",
      "StrictMode가 개발 모드에서 컴포넌트 함수를 두 번 불러 부수 효과가 두 번 쌓이기 때문이다",
      "개발 서버의 핫 리로드가 상태를 두 번 만들기 때문이다",
      "프로덕션 빌드는 push를 무시하기 때문이다",
    ],
    answer: 1,
    explanation:
      "StrictMode는 순수하지 않은 렌더링을 드러내려고 개발 모드에서 컴포넌트를 일부러 두 번 부른다. 순수한 함수라면 차이가 없지만, 받은 배열을 고치는 함수는 호출 횟수만큼 줄이 늘어난다. 프로덕션도 부모가 다시 렌더링되면 같은 문제가 난다.",
    anchor: "같은-입력에-같은-결과-그리고-흔적-없음",
  },
  {
    id: "js-pure-functions-2",
    post: "js-pure-functions",
    question: "다음 중 순수 함수라고 할 수 있는 것은?",
    choices: [
      "안에서 새로 만든 배열에 push한 뒤 그 배열을 돌려주는 함수",
      "인자로 받은 객체의 속성을 고치고 그 객체를 돌려주는 함수",
      "결과를 계산하며 모듈 변수 callCount를 1 올리는 함수",
      "Math.random()으로 할인 쿠폰 번호를 만드는 함수",
    ],
    answer: 0,
    explanation:
      "순수함은 바깥에서 본 성질이라 함수 안에서 새로 만든 값을 고치는 건 부수 효과가 아니다. 인자 수정과 모듈 변수 변경은 숨은 출력이고, Math.random은 숨은 입력이라 같은 인자에 다른 결과를 낸다.",
    anchor: "안에서-고치는-건-괜찮다",
  },
  {
    id: "js-pure-functions-3",
    post: "js-pure-functions",
    question:
      "가격을 직접 고치는 `applyDiscount(cart, 0.1)`을 같은 cart로 두 번 부르면 결과는 어떻게 되나? (상품 1000원, 3000원)",
    choices: [
      "두 번 다 3600",
      "두 번째 호출에서 에러가 난다",
      "3600 다음에 3240. 첫 호출이 고친 가격이 두 번째 호출의 입력이 된다",
      "3600 다음에 4000. 두 번째 호출이 원래 가격으로 되돌린다",
    ],
    answer: 2,
    explanation:
      "첫 호출이 원본 가격을 900, 2700으로 덮어써서 두 번째 호출은 그 값에서 또 10%를 깎는다. 숨은 출력이 다음 호출의 숨은 입력이 된 것이다. 원본은 읽기만 하고 새 객체를 만들어 돌려주면 몇 번을 불러도 3600이다.",
    anchor: "숨은-출력은-두-번째-호출에서-드러난다",
  },
  {
    id: "js-pure-functions-4",
    post: "js-pure-functions",
    question:
      "`const copy = { ...cart }` 뒤에 `copy.items.forEach(i => i.price = ...)`를 했다. 원본 cart는?",
    choices: [
      "그대로다. 스프레드로 복사했으니까",
      "items 배열만 바뀌고 상품 객체는 그대로다",
      "에러가 난다. 복사본의 배열은 읽기 전용이다",
      "상품 가격이 바뀐다. 겉 객체만 새것이고 items와 상품은 원본과 같은 객체라서",
    ],
    answer: 3,
    explanation:
      "스프레드는 한 단계만 복사한다. copy.items와 cart.items는 같은 배열이고, 그 안의 상품도 같은 객체라 가격을 바꾸면 원본도 바뀐다. 바꾸려는 깊이까지 map과 스프레드로 새로 만들어야 한다.",
    anchor: "숨은-출력은-두-번째-호출에서-드러난다",
  },
  {
    id: "js-pure-functions-5",
    post: "js-pure-functions",
    question: "상반기에는 통과하던 `isUsable(coupon)` 테스트가 코드 변경 없이 10월에 실패했다. 가장 근본적인 해결은?",
    choices: [
      "테스트의 만료일을 먼 미래로 바꾼다",
      "함수가 현재 시각을 안에서 읽지 않고 인자 now로 받게 바꾼다",
      "CI 서버의 시간대를 고정한다",
      "실패하면 자동으로 재시도하게 한다",
    ],
    answer: 1,
    explanation:
      "Date.now()는 숨은 입력이라 같은 인자에 시간에 따라 다른 결과를 낸다. 시각을 인자로 받으면 테스트에서 만료 직전과 정각 같은 경계를 숫자 하나로 시험할 수 있다. 만료일을 미루는 건 언젠가 다시 실패할 날짜를 미루는 것뿐이다.",
    anchor: "숨은-입력은-테스트를-시간에-묶는다",
  },
  {
    id: "js-pure-functions-6",
    post: "js-pure-functions",
    question: "리듀서가 `state.items.push(item); return state;`로 상태를 고쳐 돌려줬다. 화면은?",
    choices: [
      "갱신되지 않는다. 같은 객체라 Object.is 비교에서 바뀐 게 없다고 본다",
      "정상적으로 갱신된다",
      "두 번 갱신된다",
      "React가 즉시 에러를 던진다",
    ],
    answer: 0,
    explanation:
      "React는 이전 상태와 다음 상태를 Object.is로 비교해 같으면 렌더링을 건너뛴다. 내용이 바뀌어도 참조가 같으니 화면은 그대로이고, 나중에 다른 이유로 렌더링될 때 값이 튄다. 바뀐 부분을 새 객체로 만들어 돌려줘야 한다.",
    anchor: "react가-순수함을-요구하는-세-자리",
  },
  {
    id: "js-pure-functions-7",
    post: "js-pure-functions",
    question: "HTTP PUT 요청 처리와 순수 함수의 관계로 맞는 것은?",
    choices: [
      "PUT은 멱등이니 순수 함수다",
      "순수 함수는 멱등하지 않을 수 있다",
      "PUT은 여러 번 해도 결과 상태가 같아 멱등이지만, DB를 바꾸니 순수하지는 않다",
      "멱등성과 순수성은 같은 개념이다",
    ],
    answer: 2,
    explanation:
      "멱등은 여러 번 해도 한 번 한 것과 결과 상태가 같다는 뜻이고, 순수는 상태를 아예 바꾸지 않는다는 뜻이다. 순수 함수는 항상 멱등이지만 멱등한 작업이 순수한 건 아니다.",
    anchor: "순수하면-얻는-것들",
  },
];
