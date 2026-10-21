import type { QuizQuestion } from "../types";

export const JS_EQUALITY_COERCION: QuizQuestion[] = [
  {
    id: "js-equality-coercion-1",
    post: "js-equality-coercion",
    question: "true == \"true\" 의 결과와 그 이유로 맞는 것은?",
    choices: [
      "true. 두 값 모두 참이라서",
      "true. 문자열 \"true\"가 불리언 true로 바뀌어서",
      "false. true가 숫자 1로 바뀌고 \"true\"는 숫자로 바꾸면 NaN이라서",
      "false. ==는 타입이 다르면 바로 false라서",
    ],
    answer: 2,
    explanation:
      "==는 한쪽이 불리언이면 그 불리언을 숫자로 바꾼다. 그래서 1 == \"true\"가 되고, 문자열을 숫자로 바꾸면 NaN이라 같지 않다. 타입이 다르면 바로 false인 것은 ===의 규칙이다.",
    anchor: "느슨한-비교가-값을-바꾸는-순서",
  },
  {
    id: "js-equality-coercion-2",
    post: "js-equality-coercion",
    question: "[] == false 가 true가 되는 과정에서 빈 배열은 무엇으로 바뀌나?",
    choices: [
      "valueOf가 배열 자신을 돌려주니 toString이 불려 빈 문자열 \"\"",
      "배열은 객체라 true",
      "배열 길이인 숫자 0",
      "undefined",
    ],
    answer: 0,
    explanation:
      "객체를 원시값으로 바꾸는 ToPrimitive는 valueOf를 먼저 부르는데 배열은 자기 자신을 돌려줘 원시값이 아니다. 그래서 toString이 불리고 빈 배열은 빈 문자열이 된다. 그 뒤 \"\" == 0에서 빈 문자열이 0으로 바뀐다.",
    anchor: "객체가-원시값으로-바뀌는-길",
  },
  {
    id: "js-equality-coercion-3",
    post: "js-equality-coercion",
    question: "<select>의 값으로 숫자 id를 가진 상품을 find했는데 늘 undefined다. 가장 알맞은 해결은?",
    choices: [
      "비교를 ==로 바꾼다",
      "products의 id를 모두 문자열로 바꿔 저장한다",
      "find 대신 filter를 쓴다",
      "이벤트 핸들러에서 Number(e.target.value)로 한 번 바꾸고 안쪽은 ===로 비교한다",
    ],
    answer: 3,
    explanation:
      "DOM 값은 늘 문자열이라 숫자 id와 ===로 비교하면 같지 않다. ==로 바꾸면 당장은 되지만 예측하기 어려운 변환 규칙을 코드 곳곳에 들이게 된다. 경계에서 한 번 타입을 맞추고 안쪽은 ===로 비교하는 쪽이 낫다.",
    anchor: "값이-경계를-넘을-때마다-문자열이-된다",
  },
  {
    id: "js-equality-coercion-4",
    post: "js-equality-coercion",
    question: "[NaN].indexOf(NaN)과 [NaN].includes(NaN)의 결과는?",
    choices: ["-1, true", "0, true", "-1, false", "0, false"],
    answer: 0,
    explanation:
      "indexOf는 ===를 쓰는데 NaN은 자기 자신과도 같지 않아 찾지 못한다. includes는 SameValueZero를 써서 NaN끼리 같다고 본다. NaN 검사에는 Number.isNaN을 쓴다.",
    anchor: "nan과--0-엄격한-비교의-구멍",
  },
  {
    id: "js-equality-coercion-5",
    post: "js-equality-coercion",
    question: "null >= 0 은 true인데 null == 0 은 false인 이유는?",
    choices: [
      "null은 숫자로 바꾸면 NaN이라서",
      "관계 연산자는 null을 0으로 바꾸지만 ==는 null을 undefined하고만 같게 보기 때문에",
      ">=는 타입이 달라도 항상 true를 돌려주기 때문에",
      "엔진 버그로 브라우저마다 결과가 달라서",
    ],
    answer: 1,
    explanation:
      "<, >=같은 관계 연산자는 null을 숫자 0으로 바꿔 0 >= 0이 된다. ==는 null과 undefined를 다른 어떤 값으로도 바꾸지 않고 서로만 같다고 보는 규칙이 먼저 적용된다.",
    anchor: "크다-작다도-타입을-바꾼다",
  },
  {
    id: "js-equality-coercion-6",
    post: "js-equality-coercion",
    question: "ESLint eqeqeq를 켠 팀에서도 흔히 허용하는 == 패턴은?",
    choices: [
      "x == 0 으로 0과 빈 문자열을 함께 검사",
      "x == true 로 참인 값 검사",
      "x == null 로 null과 undefined를 함께 검사",
      "x == \"\" 로 빈 값 검사",
    ],
    answer: 2,
    explanation:
      "x == null은 null과 undefined에만 true이고 0이나 빈 문자열은 통과시킨다. 규칙이 하나뿐이라 예측하기 쉬워서 eqeqeq의 null: ignore 옵션으로 허용하곤 한다. !x로 쓰면 0과 빈 문자열까지 걸러진다.",
    anchor: "느슨한-비교를-써도-되는-곳은-한-군데",
  },
  {
    id: "js-equality-coercion-7",
    post: "js-equality-coercion",
    question: "[10, 9, 1].sort()의 결과는?",
    choices: ["[1, 9, 10]", "[1, 10, 9]", "[10, 9, 1]", "[9, 10, 1]"],
    answer: 1,
    explanation:
      "비교 함수 없이 sort를 부르면 요소를 문자열로 바꿔 사전 순으로 비교한다. \"10\"은 첫 글자 \"1\"이 \"9\"보다 앞이라 9보다 먼저 온다. 숫자 정렬은 (a, b) => a - b를 넘긴다.",
    anchor: "크다-작다도-타입을-바꾼다",
  },
];
