import type { QuizQuestion } from "../types";

export const JS_ARRAY_MUTATION: QuizQuestion[] = [
  {
    id: "js-array-mutation-1",
    post: "js-array-mutation",
    question: "`const sorted = items.sort((a, b) => a.id - b.id)` 다음에 `sorted === items`는?",
    choices: [
      "false: sort는 정렬된 새 배열을 돌려준다",
      "true: sort는 원본을 정렬하고 원본 자신을 돌려준다",
      "false: 원소 객체가 복사되기 때문이다",
      "items가 객체 배열이면 TypeError가 난다",
    ],
    answer: 1,
    explanation:
      "sort, reverse, fill, copyWithin은 원본을 고친 뒤 원본의 참조를 돌려준다. 그래서 결과를 새 변수에 담아도 사본이 아니다. 원본을 두려면 toSorted를 쓴다.",
    anchor: "sort가-돌려준-배열은-원본이다",
  },
  {
    id: "js-array-mutation-2",
    post: "js-array-mutation",
    question: "`[10, 9, 1, 100, 25].sort()`의 결과는?",
    choices: ["[1, 9, 10, 25, 100]", "[100, 25, 10, 9, 1]", "[1, 10, 100, 25, 9]", "[10, 9, 1, 100, 25]"],
    answer: 2,
    explanation:
      "비교 함수가 없으면 원소를 문자열로 바꿔 코드 단위 순서로 비교한다. \"100\"은 '1'로 시작해서 '2'로 시작하는 \"25\"보다 앞이다. 숫자 정렬은 (a, b) => a - b를 넘긴다.",
    anchor: "숫자를-정렬했더니-100이-25보다-앞선다",
  },
  {
    id: "js-array-mutation-3",
    post: "js-array-mutation",
    question: "비교 함수로 `(a, b) => a > b`를 쓰면 왜 위험한가?",
    choices: [
      "불리언은 1과 0뿐이라 '앞에 와야 한다'는 음수 신호를 줄 수 없어서 결과가 엔진과 길이에 따라 달라진다",
      "불리언을 돌려주면 내림차순으로 정렬된다",
      "sort가 TypeError를 던진다",
      "안정 정렬이 깨질 뿐 순서는 항상 맞다",
    ],
    answer: 0,
    explanation:
      "비교 함수는 음수, 0, 양수 세 가지로 순서를 알려야 한다. true/false는 1/0이라 음수가 없고, Node 22에서는 배열이 하나도 정렬되지 않았다. 작은 데이터에서 우연히 맞아 보이다가 운영에서 틀릴 수 있다.",
    anchor: "숫자를-정렬했더니-100이-25보다-앞선다",
  },
  {
    id: "js-array-mutation-4",
    post: "js-array-mutation",
    question: "`const copy = todos.toSorted(fn); copy[0].done = true;` 다음에 원본 todos는?",
    choices: [
      "배열 순서와 원소 모두 그대로다",
      "배열 순서도 바뀐다",
      "copy와 todos가 같은 배열이라 둘 다 바뀐다",
      "순서는 그대로지만 copy[0]과 같은 원소 객체의 done이 true로 바뀌어 있다",
    ],
    answer: 3,
    explanation:
      "toSorted는 바깥 배열만 새로 만드는 얕은 복사라서 안의 객체는 원본과 공유한다. 원본의 순서는 그대로지만 공유하는 객체를 고치면 원본에서도 보인다. 원소를 바꿀 땐 { ...t, done: true }처럼 새 객체를 만든다.",
    anchor: "사본을-돌려주는-es2023-메서드",
  },
  {
    id: "js-array-mutation-5",
    post: "js-array-mutation",
    question: "`items.push(x); setItems(items)` 후 화면이 바뀌지 않다가, 다른 상태 변경 때 x가 갑자기 나타났다. 이유는?",
    choices: [
      "setItems가 비동기라 한 번 늦게 반영되기 때문이다",
      "React가 Object.is로 같은 배열이라 판단해 건너뛰었고, 숨어 있던 변경이 다음 렌더링에 함께 그려졌기 때문이다",
      "push가 새 배열을 돌려줬는데 그 값을 버렸기 때문이다",
      "key가 없어서 React가 목록을 그리지 못했기 때문이다",
    ],
    answer: 1,
    explanation:
      "React는 상태를 참조로만 비교한다. push는 같은 배열을 고치니 바뀐 게 없다고 보고 렌더링을 건너뛴다. 나중에 다른 이유로 렌더링되면 그때 고쳐져 있던 내용까지 한꺼번에 나타난다.",
    anchor: "react는-같은-배열이면-다시-그리지-않는다",
  },
  {
    id: "js-array-mutation-6",
    post: "js-array-mutation",
    question: "자식 컴포넌트가 렌더링 중에 `props.players.sort(...)`를 부른다. 어떤 증상이 나올 수 있나?",
    choices: [
      "자식만 정렬되고 부모 데이터는 안전하다",
      "React가 props 변경을 막아서 TypeError가 난다",
      "같은 배열을 쓰는 다른 컴포넌트의 순서가 다음 렌더링에서 바뀐다",
      "StrictMode에서만 정렬이 두 번 되어 원래 순서로 돌아온다",
    ],
    answer: 2,
    explanation:
      "props 배열은 부모 상태와 같은 배열이라 sort가 부모 데이터를 고친다. 그 배열을 다른 순서로 보여 주던 컴포넌트가 엉뚱하게 바뀐다. 렌더링은 바깥을 바꾸면 안 되니 toSorted로 사본을 정렬한다.",
    anchor: "렌더링-중에-sort를-부르면",
  },
  {
    id: "js-array-mutation-7",
    post: "js-array-mutation",
    question: "작업 대기열을 배열로 만들고 `shift()`로 꺼낸다. 테스트에선 빨랐는데 운영에서 대기열이 10만 개로 쌓이자 느려졌다. 알맞은 설명과 처방은?",
    choices: [
      "shift는 나머지 원소를 당겨서 꺼낼 때마다 O(n)이다. 읽을 위치(head)만 옮기는 방식으로 바꾼다",
      "shift는 GC를 부르기 때문이다. pop으로 바꾸면 순서도 그대로다",
      "배열 길이가 2¹⁶을 넘으면 shift가 금지된다. Map으로 바꾼다",
      "shift는 O(1)이라 원인은 다른 곳이다",
    ],
    answer: 0,
    explanation:
      "shift는 맨 앞을 빼고 뒤를 한 칸씩 옮기니 전부 비우면 n의 제곱이다. Node 22에서 1만 개는 1ms였지만 10만 개는 900ms를 넘었다. pop은 뒤에서 빼니 큐의 순서가 바뀐다.",
    anchor: "큐로-쓴-배열이-느려지는-순간",
  },
];
