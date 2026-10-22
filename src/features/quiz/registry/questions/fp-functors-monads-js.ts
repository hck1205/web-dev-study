import type { QuizQuestion } from "../types";

export const FP_FUNCTORS_MONADS_JS: QuizQuestion[] = [
  {
    id: "fp-functors-monads-js-1",
    post: "fp-functors-monads-js",
    question:
      "`?page=two`로 들어오면 `parseInt`가 NaN을 만들고 `items.slice((page - 1) * 20, page * 20)`이 실행된다. 화면에는 무엇이 보이나?",
    choices: [
      "TypeError가 나서 에러 화면이 뜬다",
      "첫 페이지 20개가 보인다",
      "에러 없이 빈 목록이 보인다",
      "마지막 페이지가 보인다",
    ],
    answer: 2,
    explanation:
      "NaN은 숫자 타입의 값이라 계산을 멈추지 않고 흘러간다. slice는 NaN을 0으로 다뤄 slice(0, 0)이 되니 빈 배열이 나온다. 실패를 값 하나로 숨기면 증상은 화면에서만 드러난다.",
    anchor: "상자-안의-값을-꺼내지-않고-바꾼다",
  },
  {
    id: "fp-functors-monads-js-2",
    post: "fp-functors-monads-js",
    question: "`[\"a b\", \"c\"].map((s) => s.split(\" \"))`와 같은 콜백으로 flatMap을 쓰면 결과는?",
    choices: [
      "map은 [[\"a\",\"b\"],[\"c\"]], flatMap은 [\"a\",\"b\",\"c\"]",
      "둘 다 [\"a\",\"b\",\"c\"]",
      "map은 [\"a\",\"b\",\"c\"], flatMap은 [[\"a\",\"b\"],[\"c\"]]",
      "flatMap은 [\"a b\", \"c\"]를 그대로 돌려준다",
    ],
    answer: 0,
    explanation:
      "콜백이 배열(상자)을 돌려주니 map은 상자 안에 상자를 만든다. flatMap은 한 겹을 벗겨 이어 붙인다. 상자를 돌려주는 함수를 이어 붙일 때 flatMap이 필요한 이유다.",
    anchor: "상자가-두-겹이-될-때",
  },
  {
    id: "fp-functors-monads-js-3",
    post: "fp-functors-monads-js",
    question:
      "async 함수에서 then 메서드를 가진 쿼리 빌더를 return했다. `await buildUserQuery()`가 받는 것은?",
    choices: [
      "쿼리 빌더 객체 그대로",
      "Promise를 담은 Promise",
      "빌더의 then이 불려 실행된 쿼리 결과",
      "TypeError",
    ],
    answer: 2,
    explanation:
      "Promise는 then이 있는 객체(thenable)를 아직 끝나지 않은 값으로 보고 그 then을 부른다. 그래서 빌더가 그 자리에서 실행되고 결과 배열이 온다. Promise가 엄밀한 모나드가 아닌 이유이기도 하다.",
    anchor: "상자가-두-겹이-될-때",
  },
  {
    id: "fp-functors-monads-js-4",
    post: "fp-functors-monads-js",
    question: "`map(flatMap(parsePage(q), inRange(3)), toRange)`에서 inRange가 err를 돌려주면?",
    choices: [
      "map이 toRange를 err 값에 적용한다",
      "map은 toRange를 부르지 않고 err를 그대로 돌려준다",
      "예외가 던져진다",
      "ok(undefined)가 된다",
    ],
    answer: 1,
    explanation:
      "Result의 map과 flatMap은 실패를 만나면 함수를 부르지 않고 그대로 넘긴다. 실패는 남은 단계를 건너뛰어 끝에서 한 번에 처리되고, 이유(code, n, max)도 함께 실려 온다.",
    anchor: "실패에-이유를-붙이면-result가-된다",
  },
  {
    id: "fp-functors-monads-js-5",
    post: "fp-functors-monads-js",
    question: "TypeScript에서 Result 유니온이 throw보다 실패를 잘 드러내는 이유는?",
    choices: [
      "Result가 런타임에 더 빠르다",
      "TypeScript는 함수가 던지는 예외 타입을 시그니처에 적을 수 없지만, Result는 ok 확인 전에 value를 못 꺼내게 막는다",
      "Result는 스택 트레이스를 자동으로 남긴다",
      "throw는 strict 모드에서 금지된다",
    ],
    answer: 1,
    explanation:
      "던질 수 있다는 사실은 타입에 없고 catch의 에러는 unknown이다. Result는 if (r.ok)로 좁히기 전에 r.value에 접근하면 TS2339 에러를 내서 실패 처리를 강제한다. 오히려 평범한 객체 에러에는 스택이 없다는 단점이 있다.",
    anchor: "예외와-무엇이-다른가",
  },
  {
    id: "fp-functors-monads-js-6",
    post: "fp-functors-monads-js",
    question: "다음 중 Result가 아니라 예외로 던지는 게 맞는 경우는?",
    choices: [
      "사용자가 이메일 형식을 틀렸다",
      "쿠폰이 만료됐다",
      "외부 API가 404를 줬다",
      "불변식이 깨져 undefined에서 속성을 읽게 됐다",
    ],
    answer: 3,
    explanation:
      "예상할 수 있고 처리 방법이 정해진 실패는 Result로 돌려주고, 코드가 틀린 버그는 던져서 빨리 드러나게 한다. 버그까지 Result로 감싸면 스택 없이 조용히 실패가 흘러가 찾기 어렵다.",
    anchor: "예외와-무엇이-다른가",
  },
  {
    id: "fp-functors-monads-js-7",
    post: "fp-functors-monads-js",
    question: "가입 폼에서 email, password, age 검사를 flatMap으로 이었다. 셋 다 틀린 입력이면 사용자 경험은?",
    choices: [
      "세 에러를 한 번에 본다",
      "첫 에러(email)만 보고, 고칠 때마다 다음 에러를 본다",
      "마지막 에러(age)만 본다",
      "에러 없이 통과한다",
    ],
    answer: 1,
    explanation:
      "flatMap은 첫 실패에서 멈추니 이메일 에러만 돌아온다. 서로 기대지 않는 필드는 모두 검사해 실패를 모아야 한 번에 고칠 수 있다. 앞 결과가 필요한 검사만 이어서 한다.",
    anchor: "첫-실패에서-멈추지-않아야-할-때",
  },
];
