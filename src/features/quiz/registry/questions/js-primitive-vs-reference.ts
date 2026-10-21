import type { QuizQuestion } from "../types";

export const JS_PRIMITIVE_VS_REFERENCE: QuizQuestion[] = [
  {
    id: "js-primitive-vs-reference-1",
    post: "js-primitive-vs-reference",
    question:
      "function replace(u) { u = { name: \"park\" }; } 를 const user = { name: \"kim\" }; replace(user); 로 부른 뒤 user.name은?",
    choices: ["\"park\"", "\"kim\"", "undefined", "TypeError가 난다"],
    answer: 1,
    explanation:
      "매개변수 u는 user가 들고 있던 참조의 복사본을 받는다. u에 새 객체를 대입하면 u 칸만 바뀌고 user 칸은 그대로라서 \"kim\"이 남는다. 진짜 참조 전달이었다면 park이 됐을 것이다.",
    anchor: "함수에-넘길-때도-같은-규칙이다",
  },
  {
    id: "js-primitive-vs-reference-2",
    post: "js-primitive-vs-reference",
    question: "const grid = Array(3).fill([]); grid[0].push(\"x\"); 뒤 grid의 모습은?",
    choices: [
      "[[\"x\"], [], []]",
      "[\"x\", [], []]",
      "[[\"x\"], [\"x\"], [\"x\"]]",
      "TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "fill의 인수 []는 한 번만 평가되고 그 배열의 참조가 세 칸에 복사된다. 세 칸이 같은 배열을 가리키니 하나를 고치면 모두 바뀌어 보인다. 칸마다 새 배열이 필요하면 Array.from({ length: 3 }, () => [])을 쓴다.",
    anchor: "현장에서-이-규칙을-만나는-증상",
  },
  {
    id: "js-primitive-vs-reference-3",
    post: "js-primitive-vs-reference",
    question: "React에서 todos.push(item); setTodos(todos); 를 했더니 화면이 바뀌지 않았다. 이유는?",
    choices: [
      "setTodos는 다음 렌더까지 값을 반영하지 않아서",
      "push가 배열을 고치기만 해서 참조가 그대로이고, React는 Object.is로 같다고 판단해서",
      "useState에는 배열을 넣을 수 없어서",
      "push가 새 배열을 돌려주는데 그 값을 버려서",
    ],
    answer: 1,
    explanation:
      "React는 새 state를 이전 state와 Object.is로 비교한다. push는 같은 배열을 고칠 뿐 참조를 바꾸지 않으니 변화가 없다고 보고 렌더링을 건너뛴다. [...prev, item]처럼 새 배열을 넘겨야 한다.",
    anchor: "react가-화면을-바꾸지-않을-때",
  },
  {
    id: "js-primitive-vs-reference-4",
    post: "js-primitive-vs-reference",
    question:
      "const s = Object.freeze({ theme: \"dark\", flags: { beta: false } }); s.flags.beta = true; 뒤 s.flags.beta는?",
    choices: ["true", "false", "undefined", "항상 TypeError가 난다"],
    answer: 0,
    explanation:
      "Object.freeze는 한 단계만 얼린다. flags 칸을 다른 참조로 바꿀 수는 없지만, 그 참조가 가리키는 안쪽 객체는 얼지 않은 별개의 객체라 고칠 수 있다.",
    anchor: "const는-객체를-얼리지-않는다",
  },
  {
    id: "js-primitive-vs-reference-5",
    post: "js-primitive-vs-reference",
    question:
      "Node 서버에서 모듈 최상단 객체 DEFAULT_FILTER를 요청마다 꺼내 tags에 push했다. 운영에서 생길 증상은?",
    choices: [
      "요청마다 모듈이 다시 로드되니 문제없다",
      "첫 요청만 성공하고 나머지는 오류가 난다",
      "앞선 요청들의 값이 쌓여 다른 요청 결과에 섞인다",
      "Node가 객체를 자동으로 복사해 주니 문제없다",
    ],
    answer: 2,
    explanation:
      "모듈 스코프 객체는 프로세스가 살아 있는 동안 하나라서 모든 요청이 같은 객체를 고친다. 그래서 tags가 계속 길어지고 다른 사용자의 값이 섞인다. 기본값은 매번 새 객체를 만드는 함수로 둔다.",
    anchor: "현장에서-이-규칙을-만나는-증상",
  },
  {
    id: "js-primitive-vs-reference-6",
    post: "js-primitive-vs-reference",
    question: "원시값이 공유되어도 복사한 것처럼 안전하게 동작하는 진짜 이유는?",
    choices: [
      "원시값은 항상 스택에 저장되어서",
      "엔진이 대입할 때마다 원시값의 메모리를 새로 잡아서",
      "원시값은 가비지 컬렉션 대상이 아니어서",
      "원시값은 바꿀 수 없어서 공유와 복사를 구분할 방법이 없기 때문에",
    ],
    answer: 3,
    explanation:
      "V8도 문자열이나 소수점 숫자는 힙에 둔다. 그래도 원시값은 불변이라 누구도 고칠 수 없으니, 같은 값을 가리켜도 복사본과 차이가 드러나지 않는다. 스택·힙 설명은 단순화한 모델일 뿐이다.",
    anchor: "변수-칸에-들어-있는-것",
  },
];
