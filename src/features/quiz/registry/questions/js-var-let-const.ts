import type { QuizQuestion } from "../types";

export const JS_VAR_LET_CONST: QuizQuestion[] = [
  {
    id: "js-var-let-const-1",
    post: "js-var-let-const",
    question:
      "for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0) 은 무엇을 출력하고, 왜 그런가?",
    choices: [
      "0 1 2. 콜백이 등록될 때의 i 값을 복사해 두기 때문이다",
      "3 3 3. 세 콜백이 반복 전체에 하나뿐인 i를 함께 기억하기 때문이다",
      "undefined 세 번. setTimeout 콜백에서는 바깥 변수가 보이지 않기 때문이다",
      "0 0 0. 첫 반복의 값이 고정되기 때문이다",
    ],
    answer: 1,
    explanation:
      "var는 함수 범위에 칸을 하나만 만들고 화살표 함수는 값이 아니라 그 칸을 기억한다. 타이머가 실행될 때는 반복이 끝나 i가 3이다. 값을 복사해 두는 것처럼 보이는 건 let이 반복마다 새 환경을 만들 때다.",
    anchor: "var는-함수-하나에-상자-하나다",
  },
  {
    id: "js-var-let-const-2",
    post: "js-var-let-const",
    question:
      "for (let j = 0; j < 3; j++) 에서 콜백 0이 기억한 j가 증가식 j++ 뒤에도 0으로 남는 이유는?",
    choices: [
      "let 변수는 숫자를 바꿀 수 없기 때문이다",
      "증가식이 반복문이 다 끝난 뒤에 한꺼번에 실행되기 때문이다",
      "다음 반복 전에 환경을 복사해 새로 만들고, 증가식은 그 새 환경에서 실행되기 때문이다",
      "콜백이 만들어질 때 j를 문자열로 바꿔 저장하기 때문이다",
    ],
    answer: 2,
    explanation:
      "명세의 CreatePerIterationEnvironment가 반복마다 새 환경을 만들어 직전 값을 복사한다. 복사가 증가식보다 먼저라서 이전 반복의 j는 건드려지지 않는다. let도 재할당은 가능하니 첫 보기는 틀렸다.",
    anchor: "let은-반복마다-새-i를-만든다",
  },
  {
    id: "js-var-let-const-3",
    post: "js-var-let-const",
    question:
      "const user = { name: \"kim\" }; user.name = \"lee\"; 를 실행하면 어떻게 되나?",
    choices: [
      "TypeError: Assignment to constant variable.이 난다",
      "오류 없이 name이 lee로 바뀐다",
      "오류는 없지만 name은 kim으로 남는다",
      "SyntaxError가 나서 첫 줄도 실행되지 않는다",
    ],
    answer: 1,
    explanation:
      "const가 막는 것은 user라는 이름에 다른 값을 다시 연결하는 일뿐이다. 이름이 가리키는 객체의 속성을 고치는 건 막지 않는다. user = {}처럼 다시 대입할 때만 TypeError가 난다.",
    anchor: "const가-막는-것은-재할당뿐이다",
  },
  {
    id: "js-var-let-const-4",
    post: "js-var-let-const",
    question:
      "클래식 <script> 최상위에서 var a = 1; let b = 2; 를 선언했다. window.a와 window.b는 각각 무엇인가?",
    choices: [
      "1과 2",
      "undefined와 undefined",
      "undefined와 2",
      "1과 undefined",
    ],
    answer: 3,
    explanation:
      "전역의 var와 함수 선언은 전역 객체를 쓰는 객체 레코드에 들어가 window 속성이 된다. let, const, class는 별도의 선언용 레코드에 들어가서 b로는 읽히지만 window.b로는 보이지 않는다.",
    anchor: "전역에서-var는-window의-속성이-된다",
  },
  {
    id: "js-var-let-const-5",
    post: "js-var-let-const",
    question:
      "레거시 함수의 for (var k = 0; ...) 를 let으로 바꿨더니 루프 뒤의 return k 에서 오류가 났다. 원인은?",
    choices: [
      "let은 블록 범위라 for 블록 밖에서는 k가 없기 때문이다",
      "let은 숫자 변수에 쓸 수 없기 때문이다",
      "let은 return 문에서 읽을 수 없기 때문이다",
      "let은 같은 이름을 다시 선언했기 때문이다",
    ],
    answer: 0,
    explanation:
      "var는 함수 범위라 루프 밖에서도 k가 살아 있었지만 let은 for 블록 안에만 있다. 그래서 ReferenceError: k is not defined가 난다. ESLint no-var의 자동 수정도 이런 경우는 건너뛰고 남겨 둔다.",
    anchor: "오래된-var를-let으로-바꿀-때",
  },
  {
    id: "js-var-let-const-6",
    post: "js-var-let-const",
    question:
      "React 컴포넌트에서 const [count, setCount] = useState(0) 로 받은 count가 클릭 후 화면에서 1로 보이는 이유는?",
    choices: [
      "React가 const 변수의 값을 직접 바꿔 주기 때문이다",
      "useState가 count를 let으로 바꿔 선언하기 때문이다",
      "렌더링마다 컴포넌트 함수가 다시 호출되어 새 const count가 생기기 때문이다",
      "count가 원시 값이라 const 규칙이 적용되지 않기 때문이다",
    ],
    answer: 2,
    explanation:
      "렌더 한 번마다 컴포넌트 함수가 새로 호출되고 새 환경에 새 count가 생긴다. 이전 렌더의 count는 그대로라서 그 렌더에서 만든 핸들러는 계속 예전 값을 본다. 이게 stale closure가 생기는 이유다.",
    anchor: "react-컴포넌트-안의-const",
  },
];
