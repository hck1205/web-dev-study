import type { QuizQuestion } from "../types";

export const JS_EXECUTION_CONTEXT: QuizQuestion[] = [
  {
    id: "js-execution-context-1",
    post: "js-execution-context",
    question:
      "function order(qty) { console.log(typeof price, typeof calc); var price = 1200; function calc() {} } 를 order(3)으로 부르면 첫 줄은 무엇을 출력하나?",
    choices: [
      "ReferenceError가 난다",
      "undefined undefined",
      "undefined function",
      "number function",
    ],
    answer: 2,
    explanation:
      "실행 컨텍스트를 만드는 단계에서 var는 undefined로, 함수 선언은 함수 객체로 미리 채워 둔다. 그래서 대입 전의 price는 undefined, calc는 이미 function이다. let이나 const였다면 초기화 전이라 에러가 났다.",
    anchor: "만들어질-때-한-번-실행할-때-한-번",
  },
  {
    id: "js-execution-context-2",
    post: "js-execution-context",
    question: "함수가 끝나 실행 컨텍스트가 콜 스택에서 빠졌는데도 그 지역 변수가 살아 있을 수 있는 이유는?",
    choices: [
      "콜 스택은 함수가 끝나도 비워지지 않기 때문에",
      "환경 레코드는 힙에 있어서 누군가 참조하면 남기 때문에",
      "지역 변수는 모두 전역 객체에 복사되기 때문에",
      "엔진이 마지막 호출의 변수를 캐시하기 때문에",
    ],
    answer: 1,
    explanation:
      "스택에서 내려오는 건 실행 컨텍스트이고, 이름과 값을 담은 환경 레코드는 참조가 남아 있는 한 힙에 남는다. 안에서 만든 함수를 밖으로 돌려주면 그 함수가 레코드를 잡고 있어서 클로저가 된다.",
    anchor: "만들어질-때-한-번-실행할-때-한-번",
  },
  {
    id: "js-execution-context-3",
    post: "js-execution-context",
    question:
      "Node.js에서 재귀 함수에 지역 변수를 10개 추가했더니 최대 재귀 깊이가 약 절반으로 줄었다. 이유로 가장 알맞은 것은?",
    choices: [
      "스택 한도가 호출 횟수가 아니라 바이트 단위라서 프레임이 커지면 덜 쌓인다",
      "지역 변수가 많으면 GC가 더 자주 돌아서",
      "const로 선언한 변수는 힙에 할당되어서",
      "V8이 지역 변수 수만큼 호출 횟수를 제한해서",
    ],
    answer: 0,
    explanation:
      "V8은 콜 스택 크기를 바이트로 제한한다. 한 프레임이 커지면 같은 공간에 쌓을 수 있는 호출 수가 줄어든다. 그래서 몇 번까지 된다는 숫자는 함수와 엔진 버전마다 다르다.",
    anchor: "몇-장까지-쌓이나",
  },
  {
    id: "js-execution-context-4",
    post: "js-execution-context",
    question:
      "class User { set name(v) { this.name = v.trim(); } } 에서 user.name = 'kim'을 하면 어떻게 되나?",
    choices: [
      "name 속성에 'kim'이 저장된다",
      "세터가 무시되고 undefined가 저장된다",
      "TypeError: Cannot set property가 난다",
      "세터가 자기 자신을 계속 불러 RangeError가 난다",
    ],
    answer: 3,
    explanation:
      "세터 안의 this.name 대입은 다시 같은 세터를 부른다. 종료 조건이 없으니 콜 스택이 넘쳐 Maximum call stack size exceeded가 나고, 트레이스에 set name 줄이 반복된다. 값은 #name이나 _name처럼 다른 이름에 저장해야 한다.",
    anchor: "넘치는-곳은-재귀만이-아니다",
  },
  {
    id: "js-execution-context-5",
    post: "js-execution-context",
    question: "운영 에러 트레이스가 프레임워크 내부 함수 10줄로만 채워져 내 코드가 보이지 않는다. 먼저 의심할 것은?",
    choices: [
      "소스맵이 없어서 줄 번호가 틀렸다",
      "V8이 기본으로 프레임 10개만 기록하는 Error.stackTraceLimit",
      "콜 스택이 넘쳐서 앞부분이 지워졌다",
      "에러가 마이크로태스크에서 나서 스택이 비었다",
    ],
    answer: 1,
    explanation:
      "V8은 Error를 만들 때 스택 프레임을 기본 10개까지만 기록한다. Error.stackTraceLimit이나 node --stack-trace-limit로 올리면 더 아래의 호출자까지 보인다. 너무 크게 올리면 에러를 만들 때마다 비용이 커진다.",
    anchor: "스택-트레이스는-콜-스택의-사진이다",
  },
  {
    id: "js-execution-context-6",
    post: "js-execution-context",
    question: "setTimeout 콜백 안에서 만든 Error의 스택 트레이스가 타이머 내부 함수에서 끝나고, 예약한 함수가 보이지 않는 이유는?",
    choices: [
      "타이머 콜백은 새 태스크로 빈 콜 스택 위에서 실행되고, V8은 예약 지점을 이어 붙이지 않기 때문에",
      "setTimeout이 에러를 삼키기 때문에",
      "Error.stackTraceLimit이 0으로 바뀌기 때문에",
      "타이머 콜백은 엄격 모드로 실행되기 때문에",
    ],
    answer: 0,
    explanation:
      "콜백은 나중에 빈 스택 위에서 새로 실행되니 예약한 함수는 이미 스택에 없다. await 체인은 V8이 at async 줄로 이어 붙여 주지만 타이머와 이벤트 리스너는 그런 기록이 없다. 개발자 도구를 연 디버깅 중에만 예약 지점이 보인다.",
    anchor: "await-너머의-스택",
  },
  {
    id: "js-execution-context-7",
    post: "js-execution-context",
    question: "사용자가 보낸 깊이가 정해지지 않은 트리를 처리하는 재귀 함수가 크롬과 Node.js에서 넘친다. 알맞은 고침은?",
    choices: [
      "return f(x) 꼬리 호출 형태로 바꾼다",
      "--stack-size를 크게 올린다",
      "배열을 스택으로 직접 관리하는 반복문으로 바꾸고 깊이 제한을 둔다",
      "try/catch로 RangeError를 잡고 다시 재귀한다",
    ],
    answer: 2,
    explanation:
      "꼬리 호출 최적화는 사파리만 구현해서 V8에서는 효과가 없다. --stack-size는 실제 스레드 스택을 늘리지 않아 프로세스가 죽을 수 있고 브라우저에선 쓸 수 없다. 깊이를 힙의 배열에 맡기는 게 확실하다.",
    anchor: "깊이를-스택에서-빼내는-방법",
  },
];
