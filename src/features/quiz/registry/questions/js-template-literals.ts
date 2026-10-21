import type { QuizQuestion } from "../types";

export const JS_TEMPLATE_LITERALS: QuizQuestion[] = [
  {
    id: "js-template-literals-1",
    post: "js-template-literals",
    question:
      'const v = { valueOf() { return 42; }, toString() { return "사십이"; } }; 일 때 `${v}`와 "" + v의 결과는?',
    choices: ['"42"와 "42"', '"사십이"와 "사십이"', '"사십이"와 "42"', '"42"와 "사십이"'],
    answer: 2,
    explanation:
      "템플릿은 String(v)처럼 string 힌트로 바꿔서 toString을 먼저 부르고, + 연산자는 default 힌트라 valueOf를 먼저 부른다. 그래서 같은 객체가 두 방식에서 다른 글자가 된다.",
    anchor: "백틱-안의-값은-문자열로-바뀐다",
  },
  {
    id: "js-template-literals-2",
    post: "js-template-literals",
    question: "tag`${a} 그리고 ${b}`를 호출하면 태그 함수가 받는 첫 인자(strings)는?",
    choices: ['[" 그리고 "]', '["", " 그리고 ", ""]', '[a, " 그리고 ", b]', '"${a} 그리고 ${b}"'],
    answer: 1,
    explanation:
      "조각은 언제나 값보다 하나 많다. 값이 맨 앞과 맨 끝에 있으면 그 바깥에 빈 문자열 조각이 생긴다. 값 a와 b는 strings가 아니라 나머지 인자로 따로 온다.",
    anchor: "태그-함수는-조각과-값을-따로-받는다",
  },
  {
    id: "js-template-literals-3",
    post: "js-template-literals",
    question: "반복문 안의 같은 태그된 템플릿을 세 번 실행했다. 태그가 받은 strings 배열 셋의 관계는?",
    choices: [
      "소스의 같은 자리라서 셋 다 같은 객체이고, 얼어 있다",
      "글자가 같으니 매번 새로 만든 같은 내용의 배열이다",
      "첫 번째만 얼어 있고 나머지는 복사본이다",
      "값이 다르면 strings도 다른 객체가 된다",
    ],
    answer: 0,
    explanation:
      "엔진은 소스 위치마다 템플릿 객체를 한 번만 만들어 얼려 두고 다시 넘긴다. 그래서 라이브러리가 이 배열을 캐시 키로 쓸 수 있다. 글자가 같아도 다른 줄의 템플릿은 다른 객체다.",
    anchor: "같은-자리의-strings는-한-번만-만들어진다",
  },
  {
    id: "js-template-literals-4",
    post: "js-template-literals",
    question: "sql 태그를 쓰는 코드에서 sql(`... WHERE email = ${email}`)처럼 괄호로 부르면 어떻게 되나?",
    choices: [
      "템플릿이 먼저 문자열 하나로 합쳐져서 값과 문법을 구분할 수 없다",
      "태그로 부른 것과 똑같이 매개변수화된다",
      "문법 오류라서 실행되지 않는다",
      "값이 두 번 이스케이프된다",
    ],
    answer: 0,
    explanation:
      "괄호 안의 템플릿은 태그가 없는 평범한 템플릿이라 값이 끼워진 문자열 하나로 넘어간다. 태그 함수는 어디까지가 사용자 입력인지 알 수 없으니 인젝션을 막지 못한다. 직접 만든 태그라면 strings에 raw가 있는지 검사해 막는다.",
    anchor: "쿼리를-문자열로-만들면-생기는-일",
  },
  {
    id: "js-template-literals-5",
    post: "js-template-literals",
    question: "정렬 기준 컬럼 이름을 사용자에게 받아 ORDER BY에 넣어야 한다. 가장 알맞은 방법은?",
    choices: [
      "sql 태그의 값 자리에 넣어 $1로 보낸다",
      "encodeURIComponent로 바꿔 넣는다",
      "허용된 컬럼 이름 목록 중 하나인지 검사한 뒤 넣는다",
      "작은따옴표로 감싸 문자열로 넣는다",
    ],
    answer: 2,
    explanation:
      "매개변수는 값 자리에만 쓸 수 있어서 테이블·컬럼 이름 같은 식별자는 $1로 보낼 수 없다. 정해진 몇 개 중 하나인지 허용 목록으로 검사하거나 라이브러리의 식별자 함수를 쓴다. 작은따옴표로 감싸면 컬럼이 아니라 문자열 상수가 된다.",
    anchor: "쿼리를-문자열로-만들면-생기는-일",
  },
  {
    id: "js-template-literals-6",
    post: "js-template-literals",
    question: 'const isActive = false; 일 때 `btn ${isActive && "active"}`의 결과는?',
    choices: ['"btn "', '"btn active"', '"btn undefined"', '"btn false"'],
    answer: 3,
    explanation:
      "&&는 왼쪽이 거짓이면 불리언이 아니라 왼쪽 값 false를 그대로 돌려주고, 템플릿은 그 값을 글자 false로 바꾼다. 화면이 깨지지 않아 오래 남는 실수라서 filter(Boolean)이나 삼항 연산자, clsx로 막는다.",
    anchor: "react-코드에서-템플릿-문자열을-만나는-자리",
  },
  {
    id: "js-template-literals-7",
    post: "js-template-literals",
    question: "String.raw`C:\\new` 와 `C:\\new`(태그 없음)의 차이는?",
    choices: [
      "둘 다 C:\\new를 그대로 보여 준다",
      "String.raw는 값 자리 ${ }를 평가하지 않는다",
      "일반 템플릿은 문법 오류가 난다",
      "String.raw는 역슬래시를 해석하지 않아 그대로 남고, 일반 템플릿은 \\n이 줄바꿈이 된다",
    ],
    answer: 3,
    explanation:
      "String.raw는 조각 배열의 raw, 즉 이스케이프를 해석하기 전 원본을 이어 준다. 일반 템플릿에서는 \\n이 줄바꿈으로 바뀌어 경로가 부서진다. 값 자리는 String.raw에서도 평가된다.",
    anchor: "이스케이프를-해석하지-않은-원본-raw",
  },
];
