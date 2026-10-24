import type { QuizQuestion } from "../types";

export const FRONTEND_FIRST_STEPS: QuizQuestion[] = [
  {
    id: "frontend-first-steps-1",
    post: "frontend-first-steps",
    question:
      "head 안에 평범한 script 태그로 main.js를 넣었더니 document.querySelector(\"#add\").addEventListener에서 null 오류가 난다. 가장 그럴듯한 원인은?",
    choices: [
      "CSS 파일이 아직 도착하지 않아 버튼이 화면에 그려지지 않았다",
      "스크립트가 실행되는 순간 파서가 아직 body를 읽지 않아 DOM에 버튼이 없다",
      "querySelector는 id 선택자를 지원하지 않는다",
      "head 안의 스크립트는 보안상 DOM에 접근할 수 없다",
    ],
    answer: 1,
    explanation:
      "평범한 스크립트는 파서를 멈추고 그 자리에서 실행된다. head에서 실행되면 body 아래 요소는 아직 DOM에 없어 null이 돌아온다. 화면에 그려졌는지와는 상관없이 DOM에 있는지가 문제다.",
    anchor: "브라우저가-세-파일을-읽는-순서",
  },
  {
    id: "frontend-first-steps-2",
    post: "frontend-first-steps",
    question:
      "DOM을 다루는 앱 스크립트 a.js와, a.js에 의존하는 b.js가 있다. 둘 다 head에 두려면 어떤 속성이 맞나?",
    choices: [
      "둘 다 defer. 파싱을 막지 않고, DOM이 다 만들어진 뒤 적힌 순서대로 실행된다",
      "둘 다 async. 받는 대로 실행되니 가장 빠르다",
      "a.js는 async, b.js는 defer",
      "속성 없이 두면 순서와 DOM 모두 보장된다",
    ],
    answer: 0,
    explanation:
      "defer 스크립트는 파싱이 끝난 뒤 문서에 적힌 순서대로 실행되니 의존 관계와 DOM 접근이 모두 안전하다. async는 먼저 도착한 쪽부터 실행해 순서를 믿을 수 없고, 속성이 없으면 head에서 실행돼 DOM이 아직 없다.",
    anchor: "브라우저가-세-파일을-읽는-순서",
  },
  {
    id: "frontend-first-steps-3",
    post: "frontend-first-steps",
    question: "div에 click 처리기를 달아 버튼처럼 쓰면 무엇을 잃나?",
    choices: [
      "클릭 이벤트가 버블링되지 않는다",
      "CSS로 모양을 바꿀 수 없다",
      "키보드 포커스와 Enter·Space 동작, 스크린 리더가 알려 주는 버튼 역할",
      "모바일에서 터치가 인식되지 않는다",
    ],
    answer: 2,
    explanation:
      "button 요소는 키보드로 포커스를 받고 Enter·Space로 눌리며, 접근성 트리에 버튼으로 나타난다. div는 이것을 하나도 기본으로 주지 않는다. 클릭과 터치, 스타일은 div에서도 동작한다.",
    anchor: "버튼-하나를-세-파일로-나눈다",
  },
  {
    id: "frontend-first-steps-4",
    post: "frontend-first-steps",
    question:
      "React로 넘어가면 HTML, CSS, JS를 파일로 나누지 않고 한 컴포넌트에 둔다. 관심사 분리 관점에서 이걸 어떻게 보는 게 맞나?",
    choices: [
      "관심사 분리를 포기한 것이라 큰 프로젝트에는 맞지 않는다",
      "자르는 축이 언어에서 화면 조각(기능)으로 바뀐 것이고, 바뀌는 이유가 다른 것을 떼어 둔다는 원칙은 같다",
      "브라우저가 한 파일만 읽을 수 있어서 어쩔 수 없이 합친 것이다",
      "CSS를 쓰지 않게 되었으니 관심사가 두 개로 줄었다",
    ],
    answer: 1,
    explanation:
      "관심사 분리의 기준은 언어가 아니라 바뀌는 이유다. React는 버튼, 목록처럼 함께 바뀌는 마크업과 동작을 한 컴포넌트로 묶고, 다른 기능과는 떼어 둔다. 스타일도 여전히 CSS로 남는다.",
    anchor: "왜-세-파일로-나누나",
  },
  {
    id: "frontend-first-steps-5",
    post: "frontend-first-steps",
    question:
      "더하기·빼기 처리기가 각자 textContent를 고치다 보니 빼기에서 '남음' 문구를 빠뜨렸다. 글에서 제안한 고치는 방향은?",
    choices: [
      "처리기마다 고칠 요소 목록을 주석으로 적어 둔다",
      "빼기 버튼을 없애고 새로고침으로 초기화한다",
      "숫자를 화면에서 읽어 와 계산한다",
      "상태를 받아 화면 내용을 돌려주는 함수 하나를 두고, 처리기는 상태만 바꾼 뒤 그 함수를 부른다",
    ],
    answer: 3,
    explanation:
      "화면을 고치는 코드를 한 곳에 모으면 상태가 바뀔 때 고칠 곳을 사람이 기억하지 않아도 된다. 같은 상태를 넣으면 같은 화면이 나오는 이 방식이 React의 출발점이다. 화면에서 숫자를 다시 읽는 방식은 상태의 원천이 둘이 되어 더 어긋나기 쉽다.",
    anchor: "숫자와-화면이-어긋나기-시작할-때",
  },
  {
    id: "frontend-first-steps-6",
    post: "frontend-first-steps",
    question: "npm 프로젝트에서 git에 올리는 것과 올리지 않는 것을 바르게 짝지은 것은?",
    choices: [
      "package.json과 package-lock.json은 올리고 node_modules는 올리지 않는다",
      "package.json만 올리고 package-lock.json과 node_modules는 올리지 않는다",
      "node_modules까지 올려야 다른 사람이 설치 없이 바로 쓴다",
      "package-lock.json만 올리면 package.json은 자동으로 만들어진다",
    ],
    answer: 0,
    explanation:
      "package.json은 쓰려는 패키지와 버전 범위를, package-lock.json은 실제로 설치된 정확한 버전을 기록한다. 잠금 파일까지 올려야 다른 사람과 CI가 npm ci로 같은 버전을 받는다. node_modules는 그 기록으로 언제든 다시 만들 수 있다.",
    anchor: "npm으로-도구를-들이는-순간",
  },
];
