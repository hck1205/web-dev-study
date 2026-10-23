import type { QuizQuestion } from "../types";

export const REACT_STATE_SNAPSHOT_BATCHING: QuizQuestion[] = [
  {
    id: "react-state-snapshot-batching-1",
    post: "react-state-snapshot-batching",
    question: "count가 0일 때 핸들러에서 `setCount(count + 1)`을 세 번 부르고 바로 `console.log(count)`를 했다. 화면과 콘솔은?",
    choices: [
      "화면 3, 콘솔 3",
      "화면 3, 콘솔 0",
      "화면 1, 콘솔 0",
      "화면 1, 콘솔 1",
    ],
    answer: 2,
    explanation:
      "이 핸들러는 count가 0인 렌더링에서 만들어졌고, 그 렌더링의 count는 const라 핸들러가 끝날 때까지 0이다. 세 호출 모두 '다음 값은 1'이라는 같은 요청이라 다음 렌더링에서 1이 된다. 이어서 더하려면 업데이터 함수를 넘긴다.",
    anchor: "렌더링-한-번은-사진-한-장이다",
  },
  {
    id: "react-state-snapshot-batching-2",
    post: "react-state-snapshot-batching",
    question: "count가 20일 때 한 핸들러에서 `setCount((c) => c + 1)`, `setCount(0)`, `setCount((c) => c + 10)`을 차례로 불렀다. 다음 렌더링의 count는?",
    choices: ["31", "10", "21", "0"],
    answer: 1,
    explanation:
      "React는 큐를 넣은 순서대로 처리한다. 업데이터가 20을 21로 만들고, 값 0이 그 결과를 덮고, 마지막 업데이터가 0에 10을 더해 10이 된다. 값을 넣는 건 직전 값을 무시하는 업데이터를 넣은 것과 같다.",
    anchor: "요청은-큐에-쌓였다가-다음-렌더링에서-풀린다",
  },
  {
    id: "react-state-snapshot-batching-3",
    post: "react-state-snapshot-batching",
    question: "`await setCount(count + 1); console.log(count);`에서 이전 값이 찍히는 이유로 가장 정확한 것은?",
    choices: [
      "setCount가 Promise를 돌려주지 않고, 이 함수가 이전 렌더링의 스냅샷 count를 보고 있어서",
      "setCount의 Promise가 렌더링보다 먼저 resolve되어서",
      "자동 배칭이 await 뒤의 업데이트를 버려서",
      "StrictMode가 업데이트를 한 번 더 미뤄서",
    ],
    answer: 0,
    explanation:
      "setCount는 undefined를 돌려주니 await는 기다릴 게 없다. 더 근본적으로 이 함수 안의 count는 이전 렌더링의 const라서, 렌더링이 끝난 뒤에 읽어도 바뀌지 않는다. 새 값이 필요하면 계산한 값을 변수에 담아 쓴다.",
    anchor: "비동기가-아니라-다음-렌더링에-반영된다",
  },
  {
    id: "react-state-snapshot-batching-4",
    post: "react-state-snapshot-batching",
    question: "`user.age = 21; setUser(user);`를 했더니 화면이 그대로다. 이유는?",
    choices: [
      "setUser가 객체의 필드 하나만 바뀐 건 무시하도록 되어 있어서",
      "age가 숫자라 문자열로 바꿔 넣어야 해서",
      "자동 배칭이 다음 이벤트까지 렌더링을 미뤄서",
      "같은 객체 참조를 넣어 Object.is 비교가 같다고 판단해 렌더링을 건너뛰어서",
    ],
    answer: 3,
    explanation:
      "React는 다음 state를 지금 값과 Object.is로 비교하고, 객체는 참조가 같으면 같다고 본다. 안을 고쳐 같은 객체를 넣었으니 렌더링이 일어나지 않고, 데이터와 화면이 어긋난다. `setUser({ ...user, age: 21 })`처럼 새 객체를 만들어 넣는다.",
    anchor: "같은-값이면-렌더링을-건너뛴다",
  },
  {
    id: "react-state-snapshot-batching-5",
    post: "react-state-snapshot-batching",
    question: "`const [form, setForm] = useState({ name: \"\", email: \"\" })`에서 `setForm({ email: \"a@b.c\" })`를 하면?",
    choices: [
      "클래스의 setState처럼 email만 바뀌고 name은 남는다",
      "form이 `{ email: \"a@b.c\" }`가 되어 name이 사라진다",
      "타입이 달라 React가 오류를 던진다",
      "name과 email이 모두 빈 문자열로 돌아간다",
    ],
    answer: 1,
    explanation:
      "useState의 setter는 객체를 합치지 않고 넘긴 값을 통째로 다음 state로 쓴다. name을 지키려면 `{ ...form, email }`처럼 나머지를 펼치거나 업데이터로 직전 값을 받아 합친다. 합쳐 주는 건 클래스 컴포넌트의 this.setState였다.",
    anchor: "객체-state는-합쳐지지-않는다",
  },
  {
    id: "react-state-snapshot-batching-6",
    post: "react-state-snapshot-batching",
    question: "`useState(loadDraft())`와 `useState(() => loadDraft())`의 차이는?",
    choices: [
      "앞은 렌더링마다 loadDraft를 부르고 결과를 버리며, 뒤는 첫 렌더링에만 부른다",
      "앞은 첫 렌더링에만 부르고, 뒤는 렌더링마다 부른다",
      "둘 다 첫 렌더링에만 부르고 결과도 같다",
      "뒤는 state에 함수가 저장되어 호출해야 값을 얻는다",
    ],
    answer: 0,
    explanation:
      "useState의 인자는 첫 렌더링에만 쓰이지만, 인자를 계산하는 `loadDraft()` 호출은 렌더링마다 일어난다. 함수를 넘기면 React가 첫 렌더링에만 그 함수를 불러 초깃값으로 쓴다(지연 초기화). 실험에서는 다섯 번 렌더링에 5번 대 1번이었다.",
    anchor: "초깃값은-처음-한-번만-읽는다",
  },
  {
    id: "react-state-snapshot-batching-7",
    post: "react-state-snapshot-batching",
    question: "패널 두 개가 각자 isOpen state를 갖는데 '한 번에 하나만 열린다'로 바꿔야 한다. 알맞은 방법은?",
    choices: [
      "패널마다 effect로 다른 패널의 isOpen을 감시해 닫는다",
      "isOpen을 전역 변수로 옮겨 두 패널이 함께 읽게 한다",
      "열린 패널 번호를 공통 부모의 state로 올리고, 패널은 isOpen과 onOpen을 props로 받는다",
      "패널에 같은 key를 줘서 state를 공유하게 한다",
    ],
    answer: 2,
    explanation:
      "state는 선언한 컴포넌트 자리에 붙어 있어서 형제끼리 서로 볼 수 없다. 두 패널이 함께 봐야 하는 값은 가장 가까운 공통 부모로 올려 원천을 한 곳으로 만든다. 전역 변수는 바뀌어도 React가 렌더링하지 않고, effect로 맞추면 한 박자 늦게 어긋난다.",
    anchor: "두-컴포넌트가-같은-값을-봐야-할-때",
  },
];
