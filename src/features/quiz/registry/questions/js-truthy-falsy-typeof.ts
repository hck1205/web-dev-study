import type { QuizQuestion } from "../types";

export const JS_TRUTHY_FALSY_TYPEOF: QuizQuestion[] = [
  {
    id: "js-truthy-falsy-typeof-1",
    post: "js-truthy-falsy-typeof",
    question: "if (typeof data === \"object\") { data.items } 가 TypeError를 내는 data 값은?",
    choices: ["undefined", "[]", "null", "{}"],
    answer: 2,
    explanation:
      "typeof null은 역사적인 이유로 \"object\"라서 조건을 통과하고, null의 속성을 읽는 순간 TypeError가 난다. undefined는 typeof가 \"undefined\"라 걸러지고, 빈 배열과 빈 객체는 속성을 읽어도 undefined가 나올 뿐 오류는 아니다.",
    anchor: "typeof가-돌려주는-여덟-가지",
  },
  {
    id: "js-truthy-falsy-typeof-2",
    post: "js-truthy-falsy-typeof",
    question: "다음 중 truthy인 값은?",
    choices: ["0n", "\"\"", "NaN", "\"0\""],
    answer: 3,
    explanation:
      "falsy는 false, 0, -0, 0n, 빈 문자열, null, undefined, NaN 여덟 개뿐이다. 문자열 \"0\"은 비어 있지 않은 문자열이라 truthy다. 내용이 0처럼 보여도 문자열이면 길이만 본다.",
    anchor: "거짓으로-취급되는-값은-여덟-개뿐이다",
  },
  {
    id: "js-truthy-falsy-typeof-3",
    post: "js-truthy-falsy-typeof",
    question: "items가 빈 배열일 때 React에서 <div>{items.length && <ul>...</ul>}</div> 는 무엇을 그리나?",
    choices: ["<div>0</div>", "<div></div>", "<div><ul></ul></div>", "오류가 난다"],
    answer: 0,
    explanation:
      "&&는 왼쪽이 falsy면 왼쪽 값을 그대로 돌려주므로 숫자 0이 자식이 된다. React는 false, null, undefined는 그리지 않지만 숫자 0은 그린다. 조건을 items.length > 0처럼 불리언으로 만들어야 한다.",
    anchor: "react에서-0이-화면에-찍힌다",
  },
  {
    id: "js-truthy-falsy-typeof-4",
    post: "js-truthy-falsy-typeof",
    question: "function page(size = 20) { return size; } 에서 page(null)의 결과는?",
    choices: ["20", "null", "0", "undefined"],
    answer: 1,
    explanation:
      "기본 매개변수는 인수가 undefined일 때만 적용된다. null은 일부러 넘긴 값으로 보고 그대로 쓴다. API가 값 없음을 null로 보내면 기본 매개변수가 작동하지 않는 이유다.",
    anchor: "null과-undefined는-어디서-오나",
  },
  {
    id: "js-truthy-falsy-typeof-5",
    post: "js-truthy-falsy-typeof",
    question: "다른 iframe(또는 Node의 vm)에서 만든 배열 arr에 대해 맞는 것은?",
    choices: [
      "arr instanceof Array와 Array.isArray(arr) 모두 true",
      "arr instanceof Array와 Array.isArray(arr) 모두 false",
      "typeof arr가 \"array\"",
      "arr instanceof Array는 false, Array.isArray(arr)는 true",
    ],
    answer: 3,
    explanation:
      "instanceof는 프로토타입 체인에 지금 환경의 Array.prototype이 있는지 보는데, 다른 realm의 배열은 그 realm의 Array.prototype을 가진다. Array.isArray는 realm과 상관없이 배열을 알아본다. typeof는 배열에도 \"object\"를 돌려준다.",
    anchor: "종류를-정확히-가려내는-조합",
  },
  {
    id: "js-truthy-falsy-typeof-6",
    post: "js-truthy-falsy-typeof",
    question: "장바구니 합계가 NaN이 됐는데 if (total < 0) throw 검사도 통과했다. 이유는?",
    choices: [
      "NaN은 음수로 취급되지만 throw가 무시되어서",
      "NaN과의 크기 비교는 모두 false라서 범위 검사를 그냥 지나친다",
      "reduce가 NaN을 0으로 바꿔서",
      "typeof NaN이 \"undefined\"라서",
    ],
    answer: 1,
    explanation:
      "NaN은 어떤 값과 비교해도 크지도 작지도 같지도 않아 total < 0과 total > 0이 모두 false다. 그래서 범위 검사로는 잡히지 않고 Number.isNaN이나 Number.isFinite로 확인해야 한다. typeof NaN은 \"number\"다.",
    anchor: "nan은-조용히-퍼진다",
  },
  {
    id: "js-truthy-falsy-typeof-7",
    post: "js-truthy-falsy-typeof",
    question: "할인율 discount가 0인 상품에 res.discount || 10 을 썼다. 결과와 고칠 방법은?",
    choices: [
      "0이 나오므로 고칠 필요가 없다",
      "NaN이 나온다. Number()로 감싼다",
      "10이 나온다. null·undefined만 기본값으로 바꾸려면 ??를 쓴다",
      "10이 나온다. &&로 바꾼다",
    ],
    answer: 2,
    explanation:
      "||는 왼쪽이 falsy면 오른쪽을 고르므로 0도 값 없음으로 보고 10을 고른다. ??는 왼쪽이 null이나 undefined일 때만 오른쪽을 골라 0을 그대로 둔다.",
    anchor: "if-하나에-숨은-버그들",
  },
];
