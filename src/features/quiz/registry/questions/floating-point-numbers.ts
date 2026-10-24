import type { QuizQuestion } from "../types";

export const FLOATING_POINT_NUMBERS: QuizQuestion[] = [
  {
    id: "floating-point-numbers-1",
    post: "floating-point-numbers",
    question: "0.5와 0.25는 double에 정확히 담기는데 0.1은 담기지 않는 이유는?",
    choices: [
      "0.1은 소수점 아래 자릿수가 적어서 오히려 반올림 대상이 되기 때문이다",
      "2진수는 분모가 2의 거듭제곱인 분수만 유한하게 적을 수 있는데, 0.1은 1/10이라 분모에 5가 있기 때문이다",
      "0.1은 지수 비트가 부족해서 담을 수 없기 때문이다",
      "자바스크립트가 0.1을 문자열로 저장하기 때문이다",
    ],
    answer: 1,
    explanation:
      "0.1에 2를 곱해 정수 부분을 떼는 과정을 반복하면 0.2가 다시 나와 0011이 끝없이 반복된다. 52비트에서 잘라 반올림하니 근삿값이 저장된다. 0.5와 0.25는 1/2, 1/4이라 딱 떨어진다.",
    anchor: "01은-2진수로-끝나지-않는다",
  },
  {
    id: "floating-point-numbers-2",
    post: "floating-point-numbers",
    question: "19.99 * 100을 Math.floor나 (int) 캐스팅으로 정수로 바꾸면 1998이 나온다. 왜 그럴까?",
    choices: [
      "곱셈이 정수 오버플로를 일으켰기 때문이다",
      "100이 double로 정확히 담기지 않기 때문이다",
      "19.99가 진짜 값보다 조금 작게 저장되어 곱한 결과가 1998.9999…가 되고, 자르면 1998이 되기 때문이다",
      "Math.floor가 은행가 반올림을 하기 때문이다",
    ],
    answer: 2,
    explanation:
      "근삿값끼리 곱한 결과가 1999보다 아주 조금 작아서 자르면 1센트가 사라진다. 반올림하면 1999가 되지만, 처음부터 문자열을 decimal로 파싱하거나 정수 센트로 주고받는 편이 안전하다.",
    anchor: "오차는-더할수록-쌓인다",
  },
  {
    id: "floating-point-numbers-3",
    post: "floating-point-numbers",
    question: "Math.abs(a - b) < Number.EPSILON으로 비교하는 코드가 1e10 근처 값에서 거의 항상 false를 낸다. 이유는?",
    choices: [
      "double 사이의 간격이 수의 크기에 비례해 커져서, 큰 수에서는 바로 옆 칸끼리의 차이도 EPSILON보다 크기 때문이다",
      "Number.EPSILON은 32비트 float 기준이라 double에 맞지 않기 때문이다",
      "큰 수에서는 뺄셈이 언제나 NaN을 내기 때문이다",
      "Math.abs가 큰 수에서 부호를 잃기 때문이다",
    ],
    answer: 0,
    explanation:
      "Number.EPSILON은 1 근처의 간격(2의 -52제곱)일 뿐이다. 1만 근처만 해도 간격이 약 1.8e-12라 이 문턱은 너무 엄격하다. 큰 쪽에 비례한 상대 허용치와 0 근처용 절대 허용치를 함께 쓴다.",
    anchor: "같은지-비교하는-법",
  },
  {
    id: "floating-point-numbers-4",
    post: "floating-point-numbers",
    question: "DB의 bigint 주문 ID를 JSON 숫자로 보냈더니 브라우저에서 다른 주문이 조회된다. 원인과 해법은?",
    choices: [
      "JSON은 정수를 지원하지 않으니 ID를 소수로 바꿔 보낸다",
      "ID가 음수가 됐으니 unsigned 타입으로 바꾼다",
      "브라우저 캐시 문제이니 Cache-Control을 끈다",
      "2의 53제곱을 넘는 정수는 double로 읽으면 끝자리가 바뀌므로 ID를 문자열로 보낸다",
    ],
    answer: 3,
    explanation:
      "double의 가수는 53비트라 2의 53제곱을 넘으면 칸 간격이 2 이상이 되어 홀수 같은 정수를 담지 못한다. JSON 숫자를 double로 읽는 클라이언트에서는 64비트 ID를 문자열로 주고받는다.",
    anchor: "2의-53제곱-너머의-정수",
  },
  {
    id: "floating-point-numbers-5",
    post: "floating-point-numbers",
    question: "파이썬 round(2.5)는 2, PostgreSQL round(2.5::numeric)은 3이다. 이 차이를 가장 잘 설명한 것은?",
    choices: [
      "파이썬은 2.5를 근삿값으로 저장해서 2.4999…를 반올림했기 때문이다",
      "파이썬은 절반일 때 짝수 쪽으로 가는 은행가 반올림을, numeric round는 0에서 멀어지는 쪽으로 가는 반올림을 쓰기 때문이다",
      "PostgreSQL이 항상 올림을 하기 때문이다",
      "파이썬 round는 버림이기 때문이다",
    ],
    answer: 1,
    explanation:
      "2.5는 2진수로 정확히 담기므로 오차 문제가 아니라 반올림 규칙 차이다. 은행가 반올림은 많이 더해도 위로 치우치지 않아 IEEE 754의 기본값이다. DB와 애플리케이션의 반올림 규칙이 다르면 합계가 어긋날 수 있다.",
    anchor: "반올림에는-방법이-여러-개다",
  },
  {
    id: "floating-point-numbers-6",
    post: "floating-point-numbers",
    question: "자바에서 금액을 BigDecimal로 바꿨는데도 0.1000000000000000055…가 나온다. 무엇이 잘못됐나?",
    choices: [
      "BigDecimal의 기본 정밀도가 부족했다",
      "RoundingMode를 지정하지 않았다",
      "new BigDecimal(0.1)처럼 이미 오차가 있는 double에서 만들었다. 문자열이나 BigDecimal.valueOf로 만들어야 한다",
      "equals 대신 compareTo를 써야 한다",
    ],
    answer: 2,
    explanation:
      "double 0.1이 담은 근삿값을 그대로 옮겨 오니 decimal로 바꾼 의미가 없다. 값 비교는 scale까지 보는 equals 대신 compareTo로 하고, 나눗셈에는 자릿수와 반올림 방식을 명시한다.",
    anchor: "돈은-정수로-세거나-decimal로-다룬다",
  },
  {
    id: "floating-point-numbers-7",
    post: "floating-point-numbers",
    question: "반복문으로 1e16, 1.0, -1e16을 차례로 더하면 0.0이 나온다. 1이 사라진 이유는?",
    choices: [
      "1e16 근처의 double 간격이 2라서 1e16 + 1이 1e16으로 반올림되기 때문이다",
      "-1e16이 NaN으로 바뀌기 때문이다",
      "더하기가 정수 나눗셈으로 바뀌기 때문이다",
      "1.0이 -0으로 저장되기 때문이다",
    ],
    answer: 0,
    explanation:
      "부동소수점 덧셈은 결합 법칙이 성립하지 않아 큰 수에 작은 수를 더하면 아랫자리가 밀려난다. 카한 합 같은 보정 합산은 잃은 부분을 따로 모아 돌려주고, 파이썬 3.12 이후의 sum과 math.fsum은 1.0을 살려 낸다.",
    anchor: "더하는-순서가-결과를-바꾼다",
  },
];
