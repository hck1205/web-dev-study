import type { QuizQuestion } from "../types";

export const JS_SHALLOW_DEEP_COPY: QuizQuestion[] = [
  {
    id: "js-shallow-deep-copy-1",
    post: "js-shallow-deep-copy",
    question:
      "const draft = { ...item }; draft.name = \"바닐라\"; draft.options.shots = 2; 이후 원본 item에서 바뀐 것은?",
    choices: ["아무것도 바뀌지 않는다", "name만 바뀐다", "options.shots만 바뀐다", "name과 options.shots 둘 다 바뀐다"],
    answer: 2,
    explanation:
      "전개는 바깥 객체만 새로 만들고 options 칸에는 원본과 같은 객체의 참조를 넣는다. draft의 name 칸에 새 값을 넣는 건 사본만 바꾸지만, draft.options를 따라 들어가 고치면 원본의 options가 바뀐다.",
    anchor: "사본의-첫-층만-따로다",
  },
  {
    id: "js-shallow-deep-copy-2",
    post: "js-shallow-deep-copy",
    question: "주문 배열을 orders.map((o) => ({ ...o }))로 복사했다. 원본과 같이 쓰는 것은?",
    choices: ["배열 자체", "각 주문 객체", "각 주문 안의 items 배열", "아무것도 같이 쓰지 않는다"],
    answer: 2,
    explanation:
      "map이 배열을 새로 만들고, 콜백의 전개가 주문 객체를 새로 만든다. 전개 한 번에 한 층이니 세 번째 층인 items 배열은 원본과 같은 참조다. slice나 Array.from은 배열 한 층만 새로 만든다.",
    anchor: "복사-방법마다-몇-층을-새로-만드나",
  },
  {
    id: "js-shallow-deep-copy-3",
    post: "js-shallow-deep-copy",
    question: "const grid = new Array(3).fill([]); grid[0].push(\"x\"); 이후 grid는?",
    choices: ['[["x"], [], []]', '[["x"], ["x"], ["x"]]', '["x", [], []]', "TypeError가 난다"],
    answer: 1,
    explanation:
      "fill의 인자 []는 한 번만 평가돼 배열 하나가 생기고, 그 참조가 세 칸에 들어간다. 그래서 한 칸에 push하면 세 칸이 모두 같은 배열을 보여 준다. 칸마다 새 배열이 필요하면 Array.from({ length: 3 }, () => [])를 쓴다.",
    anchor: "복사-방법마다-몇-층을-새로-만드나",
  },
  {
    id: "js-shallow-deep-copy-4",
    post: "js-shallow-deep-copy",
    question: "structuredClone으로 복사했을 때 사본에 그대로 유지되는 것은?",
    choices: [
      "원본에서 a와 b가 같은 객체를 가리키던 관계",
      "getter 함수",
      "Object.freeze로 얼린 상태",
      "심볼 키 속성",
    ],
    answer: 0,
    explanation:
      "구조화된 복제는 이미 복사한 객체를 기억해 두므로, 같은 객체를 가리키던 두 속성은 사본에서도 같은 사본 하나를 가리킨다. 반면 getter는 그 순간의 값으로 바뀌고, freeze 상태와 설명자는 따라오지 않으며, 심볼 키는 빠진다.",
    anchor: "structuredclone이-바꿔-놓는-것들",
  },
  {
    id: "js-shallow-deep-copy-5",
    post: "js-shallow-deep-copy",
    question: "structuredClone(pixels, { transfer: [pixels.buffer] }) 이후 원본 pixels는?",
    choices: [
      "사본과 같은 메모리를 함께 쓴다",
      "그대로 남고 사본만 새로 생긴다",
      "읽기 전용이 된다",
      "버퍼가 떨어져 나가 byteLength가 0이 된다",
    ],
    answer: 3,
    explanation:
      "transfer는 메모리를 복사하지 않고 소유권을 사본 쪽으로 넘긴다. 그래서 거의 즉시 끝나지만 원본 버퍼는 떨어져 나가 길이가 0이 되고, 이후 쓰기는 무시되고 읽으면 undefined가 나온다.",
    anchor: "복사하지-않고-넘겨주는-transfer",
  },
  {
    id: "js-shallow-deep-copy-6",
    post: "js-shallow-deep-copy",
    question: "주문 하나의 상태만 바꾸면서 매번 structuredClone(prev)로 복사한 뒤 고치면 React.memo로 감싼 행들은 어떻게 되나?",
    choices: [
      "바뀐 주문의 행만 다시 그린다",
      "내용이 그대로인 행까지 모두 다시 그린다",
      "아무 행도 다시 그리지 않는다",
      "memo가 깊은 비교로 바꿔서 바뀐 행만 찾아낸다",
    ],
    answer: 1,
    explanation:
      "깊은 복사는 바뀌지 않은 주문까지 새 객체로 만든다. memo는 props를 참조로 비교하니 모든 행이 바뀌었다고 판단해 다시 그린다. 바뀐 주문만 새로 만들고 나머지는 같이 쓰면 그 행만 다시 그려진다.",
    anchor: "react-코드에서-복사가-문제를-만드는-곳",
  },
  {
    id: "js-shallow-deep-copy-7",
    post: "js-shallow-deep-copy",
    question: "const EMPTY_FORM = { tags: [] }를 useState 초깃값으로 쓰고 form.tags.push(x)를 했다. 무엇이 문제인가?",
    choices: [
      "useState가 초깃값을 깊게 복사하느라 느려진다",
      "push가 React에 의해 막혀 에러가 난다",
      "모듈 상수의 배열이 바뀌어 다음에 마운트되는 컴포넌트가 그 값을 물려받는다",
      "첫 렌더에서만 문제가 생기고 이후에는 괜찮다",
    ],
    answer: 2,
    explanation:
      "useState는 초깃값을 복사하지 않고 그 참조를 상태로 쓴다. 상태의 안쪽 배열을 고치면 모듈 상수 자체가 바뀌고, 컴포넌트가 사라져도 상수는 남아 다음 인스턴스와 다음 테스트가 오염된 값을 받는다.",
    anchor: "react-코드에서-복사가-문제를-만드는-곳",
  },
];
