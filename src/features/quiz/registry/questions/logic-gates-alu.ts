import type { QuizQuestion } from "../types";

export const LOGIC_GATES_ALU: QuizQuestion[] = [
  {
    id: "logic-gates-alu-1",
    post: "logic-gates-alu",
    question: "거의 모든 CPU가 음수를 2의 보수로 표현하는 가장 큰 이유는?",
    choices: [
      "부호 비트를 따로 두어 사람이 읽기 쉬워서",
      "같은 덧셈기로 양수·음수 덧셈과 뺄셈을 모두 처리할 수 있어서",
      "양수와 음수의 표현 범위가 정확히 같아서",
      "+0과 -0을 구분할 수 있어서",
    ],
    answer: 1,
    explanation:
      "맨 윗자리 무게를 음수로 읽으면 5 + (-5)를 그냥 비트로 더해도 0이 되고, 빼기는 a + ~b + 1로 바뀐다. 0은 하나뿐이고 범위는 -128~127처럼 음수 쪽이 하나 더 많다.",
    anchor: "음수는-뒤집고-1을-더한다",
  },
  {
    id: "logic-gates-alu-2",
    post: "logic-gates-alu",
    question: "8비트 덧셈 200 + 100의 결과로 맞는 플래그 조합은? (CF는 부호 없는 넘침, OF는 부호 있는 넘침)",
    choices: [
      "CF=0, OF=1",
      "CF=1, OF=1",
      "CF=1, OF=0",
      "CF=0, OF=0",
    ],
    answer: 2,
    explanation:
      "부호 없이 보면 300이 255를 넘어 CF=1이고 결과는 44다. 2의 보수로 보면 -56 + 100 = 44라서 범위 안이므로 OF=0이다. 두 플래그는 같은 덧셈을 서로 다르게 읽은 결과다.",
    anchor: "alu는-답과-함께-표시를-남긴다",
  },
  {
    id: "logic-gates-alu-3",
    post: "logic-gates-alu",
    question: "n비트 리플 캐리 덧셈기가 비트 수가 늘수록 느려지는 이유는?",
    choices: [
      "자리마다 메모리에서 값을 다시 읽어서",
      "전가산기가 비트 수만큼 더 많은 트랜지스터를 써서",
      "윗자리가 아랫자리의 올림이 도착할 때까지 기다려야 해서",
      "부호 비트를 따로 계산해야 해서",
    ],
    answer: 2,
    explanation:
      "올림이 0번 자리부터 한 칸씩 번져 올라가서 최악의 경우 지연이 비트 수에 비례한다. 실제 CPU는 generate와 propagate를 먼저 구해 올림을 나무 모양으로 한꺼번에 계산해 지연을 log n 수준으로 줄인다.",
    anchor: "올림이-줄을-서서-지나간다",
  },
  {
    id: "logic-gates-alu-4",
    post: "logic-gates-alu",
    question: "C에서 int x에 대해 x + 1 > x를 돌려주는 함수를 gcc -O2로 컴파일하면 늘 1을 돌려준다. 이유는?",
    choices: [
      "부호 있는 정수 넘침은 정의되지 않은 동작이라 컴파일러가 넘침이 없다고 가정해서",
      "x86의 add 명령이 넘침을 일으키지 않아서",
      "int가 64비트로 자동 확장되어서",
      "컴파일러가 비교 명령을 지원하지 않아서",
    ],
    answer: 0,
    explanation:
      "C 표준에서 signed overflow는 UB라서 컴파일러는 x + 1이 언제나 x보다 크다고 보고 비교를 지운다. -fwrapv를 주면 순환이 정의되어 x가 INT_MAX일 때만 거짓인 코드가 나온다. unsigned로 쓰면 처음부터 비교가 남는다.",
    anchor: "넘쳤을-때-언어가-하는-일",
  },
  {
    id: "logic-gates-alu-5",
    post: "logic-gates-alu",
    question: "부호 있는 비교 a < b를 x86에서 cmp 뒤 setl로 계산할 때 setl이 보는 조건은?",
    choices: [
      "CF가 1인가",
      "ZF가 1인가",
      "SF가 1인가",
      "SF와 OF가 서로 다른가",
    ],
    answer: 3,
    explanation:
      "빼다가 부호 있는 넘침이 나면 결과의 부호가 뒤집혀 보이므로 SF만으로는 판단할 수 없다. 그래서 SF와 OF가 다를 때 a < b로 본다. 부호 없는 비교는 CF만 보는 setb를 쓴다.",
    anchor: "alu는-답과-함께-표시를-남긴다",
  },
  {
    id: "logic-gates-alu-6",
    post: "logic-gates-alu",
    question: "서버가 64비트 정수 id 9007199254740993을 JSON 숫자로 보냈다. 브라우저의 JSON.parse 결과는?",
    choices: [
      "SyntaxError가 난다",
      "9007199254740992로 조용히 바뀐다",
      "BigInt로 자동 변환된다",
      "Infinity가 된다",
    ],
    answer: 1,
    explanation:
      "자바스크립트 number는 64비트 부동소수점이라 2^53을 넘는 정수는 가장 가까운 표현 가능한 값으로 바뀐다. 에러가 나지 않아 늦게 발견되므로 큰 id는 문자열로 주고받고 계산할 때만 BigInt를 쓴다.",
    anchor: "현장에서-넘침을-만나는-곳",
  },
  {
    id: "logic-gates-alu-7",
    post: "logic-gates-alu",
    question: "NAND만으로 NOT 게이트를 만드는 방법은?",
    choices: [
      "NAND 두 개를 직렬로 잇는다",
      "한 입력을 항상 0으로 묶는다",
      "같은 신호를 NAND의 두 입력에 모두 넣는다",
      "NAND 출력에 OR를 붙인다",
    ],
    answer: 2,
    explanation:
      "NAND(a, a)는 a가 1이면 0, 0이면 1이 되어 NOT과 같다. 한 입력을 0으로 묶으면 출력은 늘 1이 된다. 이렇게 NOT, AND, OR를 만들 수 있어서 NAND를 범용 게이트라고 부른다.",
    anchor: "nand-하나로-나머지를-다-만든다",
  },
];
