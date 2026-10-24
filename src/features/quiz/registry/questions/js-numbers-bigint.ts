import type { QuizQuestion } from "../types";

export const JS_NUMBERS_BIGINT: QuizQuestion[] = [
  {
    id: "js-numbers-bigint-1",
    post: "js-numbers-bigint",
    question: "0.1 + 0.2 === 0.3 이 false인 이유로 가장 정확한 것은?",
    choices: [
      "V8 엔진의 덧셈 최적화 버그라서 다른 엔진에서는 true다",
      "0.1과 0.2가 이진수로 끝나지 않아 근삿값으로 저장되고, 그 오차가 더해지기 때문이다",
      "number가 32비트 정수로 바뀐 뒤 더해지기 때문이다",
      "===가 소수를 비교할 때 타입을 바꾸기 때문이다",
    ],
    answer: 1,
    explanation:
      "1/10은 분모에 5가 섞여 이진수로 끝나지 않아 52비트 가수에서 반올림된다. 두 값 모두 조금 크게 저장되어 합이 0.3에 가장 가까운 값보다 한 칸 위가 된다. IEEE 754를 쓰는 모든 언어에서 같고, 32비트 변환은 비트 연산자에서만 일어난다.",
    anchor: "01은-이진수로-끝나지-않는다",
  },
  {
    id: "js-numbers-bigint-2",
    post: "js-numbers-bigint",
    question: "Math.abs(a - b) < Number.EPSILON 으로 소수를 비교하는 방법의 한계는?",
    choices: [
      "음수끼리는 비교할 수 없다",
      "NaN이 섞이면 항상 true가 된다",
      "EPSILON은 1 근처의 간격이라 값이 커지면 실제 오차가 더 커서 같은 값도 다르다고 판단한다",
      "EPSILON이 너무 커서 다른 값도 같다고 판단한다",
    ],
    answer: 2,
    explanation:
      "Number.EPSILON은 1과 그 다음 표현 가능한 수 사이의 간격이다. 1000.1 + 1000.2와 2000.3의 차이는 이보다 커서 비교가 실패한다. 값의 크기에 비례해 허용 오차를 키우거나, 돈처럼 정확해야 하면 정수로 계산한다.",
    anchor: "같은지-비교할-때는-오차를-허용한다",
  },
  {
    id: "js-numbers-bigint-3",
    post: "js-numbers-bigint",
    question: "서버가 {\"id\": 9007199254740993}을 보냈고 브라우저에서 JSON.parse로 읽었다. 어떻게 되나?",
    choices: [
      "에러 없이 9007199254740992가 되어 다른 번호로 바뀐다",
      "RangeError가 나서 파싱이 실패한다",
      "자동으로 BigInt 9007199254740993n이 된다",
      "문자열 \"9007199254740993\"으로 바뀐다",
    ],
    answer: 0,
    explanation:
      "JSON.parse는 숫자를 모두 number로 만들고, 2^53을 넘는 홀수는 담을 수 없어 가까운 짝수로 반올림된다. 에러도 경고도 없어서 일부 ID에서만 조용히 틀린다. 그래서 64비트 ID는 문자열로 주고받는다.",
    anchor: "json으로-받은-주문-번호가-바뀐다",
  },
  {
    id: "js-numbers-bigint-4",
    post: "js-numbers-bigint",
    question: "(1.005).toFixed(2)가 \"1.01\"이 아니라 \"1.00\"인 이유는?",
    choices: [
      "toFixed는 항상 내림을 하기 때문이다",
      "toFixed는 짝수 쪽으로 반올림(은행가 반올림)을 하기 때문이다",
      "toFixed는 셋째 자리를 보지 않고 잘라 내기 때문이다",
      "1.005가 실제로는 1.00499...로 저장되어 있고 toFixed는 저장된 값을 반올림하기 때문이다",
    ],
    answer: 3,
    explanation:
      "toPrecision(20)으로 찍으면 1.0049999999999998934가 나온다. toFixed는 화면에 보이는 1.005가 아니라 이 값을 반올림하니 내림이 맞다. (2.5).toFixed(0)이 \"3\"인 걸 보면 은행가 반올림도 아니다.",
    anchor: "tofixed의-반올림은-보이는-숫자를-따르지-않는다",
  },
  {
    id: "js-numbers-bigint-5",
    post: "js-numbers-bigint",
    question: "[\"1\", \"2\", \"3\"].map(parseInt)의 결과가 [1, NaN, NaN]인 이유는?",
    choices: [
      "parseInt는 배열 안에서 this를 잃기 때문이다",
      "map이 넘기는 두 번째 인자(인덱스)를 parseInt가 진법으로 받기 때문이다",
      "parseInt는 첫 번째 호출 뒤 내부 상태가 바뀌기 때문이다",
      "문자열 \"2\"와 \"3\"에 공백이 섞여 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "map은 콜백에 (값, 인덱스)를 넘긴다. parseInt(\"2\", 1)은 1진법이라 NaN, parseInt(\"3\", 2)는 2진법에 3이 없어 NaN이다. 진법은 parseInt(s, 10)처럼 항상 직접 적는다.",
    anchor: "문자열을-숫자로-바꾸는-길은-여러-개다",
  },
  {
    id: "js-numbers-bigint-6",
    post: "js-numbers-bigint",
    question: "BigInt(9007199254740993)이 9007199254740992n이 되는 이유와 올바른 방법은?",
    choices: [
      "BigInt는 홀수를 담지 못한다. 2를 곱해 저장한다",
      "BigInt 생성자에 버그가 있다. 1n을 더해 보정한다",
      "괄호 안의 리터럴이 먼저 number로 읽히며 반올림된다. BigInt(\"9007199254740993\")처럼 문자열로 만든다",
      "BigInt는 MAX_SAFE_INTEGER까지만 정확하다. 더 큰 값은 문자열로만 다룬다",
    ],
    answer: 2,
    explanation:
      "인자는 BigInt가 받기 전에 이미 number 리터럴이라 2^53을 넘는 순간 반올림된다. 문자열에서 만들거나 9007199254740993n처럼 n 리터럴로 쓰면 정확하다. BigInt 자체에는 사실상 크기 제한이 없다.",
    anchor: "bigint는-다른-규칙으로-계산한다",
  },
  {
    id: "js-numbers-bigint-7",
    post: "js-numbers-bigint",
    question: "Date.now() | 0 으로 소수점을 버리려 했더니 엉뚱한 값이 나왔다. 왜인가?",
    choices: [
      "비트 연산자는 값을 32비트 정수로 바꾸는데 밀리초 타임스탬프는 그 범위를 넘어 앞자리가 잘리기 때문이다",
      "Date.now()가 문자열을 돌려주기 때문이다",
      "| 연산자가 BigInt로 바꾸기 때문이다",
      "0과 OR하면 항상 0이 되기 때문이다",
    ],
    answer: 0,
    explanation:
      "비트 연산자는 피연산자를 부호 있는 32비트 정수(약 ±21억)로 바꾼다. 타임스탬프는 1.7조가 넘어서 아래 32비트만 남는다. 소수점을 버릴 때는 Math.trunc나 Math.floor를 쓴다.",
    anchor: "비트-연산은-32비트-정수로-접는다",
  },
];
