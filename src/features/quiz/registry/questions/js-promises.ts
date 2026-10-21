import type { QuizQuestion } from "../types";

export const JS_PROMISES: QuizQuestion[] = [
  {
    id: "js-promises-1",
    post: "js-promises",
    question:
      "saveDraft().then((d) => { fetchPost(d.id); }).then((post) => console.log(post))가 undefined를 찍는 이유는?",
    choices: [
      "fetchPost가 실패했기 때문",
      "then은 같은 Promise를 돌려주기 때문",
      "첫 then의 핸들러가 아무것도 return하지 않아 새 Promise가 undefined로 바로 이행됐기 때문",
      "두 번째 then이 첫 번째보다 먼저 실행됐기 때문",
    ],
    answer: 2,
    explanation:
      "then은 핸들러의 반환값으로 채워질 새 Promise를 돌려준다. 중괄호 화살표 함수에서 return을 빠뜨리면 undefined가 반환되어, 다음 then은 fetchPost를 기다리지 않고 undefined를 받는다.",
    anchor: "then이-돌려주는-건-새-상자다",
  },
  {
    id: "js-promises-2",
    post: "js-promises",
    question: "executor 안에서 resolve(\"첫 값\") 뒤에 resolve(\"두 번째 값\")과 reject(err)를 연달아 부르면?",
    choices: [
      "Promise는 '첫 값'으로 이행되고 나머지 호출은 조용히 무시된다",
      "두 번째 resolve에서 에러가 난다",
      "마지막 reject가 이겨서 거부된다",
      "then 핸들러가 세 번 불린다",
    ],
    answer: 0,
    explanation:
      "Promise는 한 번 settled되면 상태가 바뀌지 않는다. 이후 resolve·reject 호출은 에러 없이 무시된다. 다만 resolve는 return이 아니어서 그 뒤의 코드는 계속 실행된다.",
    anchor: "결과를-담을-상자를-먼저-받는다",
  },
  {
    id: "js-promises-3",
    post: "js-promises",
    question:
      "parse(json).then(onOk, onFail)에서 onOk가 에러를 던졌다. 이 에러는 어디로 가나?",
    choices: [
      "같은 then의 onFail이 받는다",
      "then이 만든 새 Promise를 거부하므로 그 뒤에 붙은 catch가 받는다",
      "에러가 무시되고 체인은 이행된다",
      "parse가 만든 Promise를 거부 상태로 바꾼다",
    ],
    answer: 1,
    explanation:
      "then의 두 번째 인자는 앞 Promise의 거부만 받는다. 첫 번째 인자가 던진 에러는 then이 돌려준 새 Promise를 거부하므로 뒤의 catch가 있어야 잡힌다. 이미 정해진 parse의 Promise는 바뀌지 않는다.",
    anchor: "실패는-다음-catch까지-미끄러진다",
  },
  {
    id: "js-promises-4",
    post: "js-promises",
    question: "catch에서 \"기본값\"을 돌려주고 뒤에 .then(v => v + \"!\").finally(() => \"무시\").then(console.log)를 붙였다. 마지막에 찍히는 것은?",
    choices: ["무시", "undefined", "기본값", "기본값!"],
    answer: 3,
    explanation:
      "catch가 값을 돌려주면 체인은 이행 상태로 돌아온다. finally는 반환값을 버리고 앞의 결과를 그대로 통과시키므로 마지막 then은 '기본값!'을 받는다.",
    anchor: "실패는-다음-catch까지-미끄러진다",
  },
  {
    id: "js-promises-5",
    post: "js-promises",
    question: "Node.js 22에서 async 함수를 await도 catch도 없이 불렀는데 그 함수가 던졌다. 무슨 일이 일어나나?",
    choices: [
      "경고만 한 줄 찍히고 계속 돈다",
      "아무 일도 일어나지 않는다",
      "처리되지 않은 거부가 예외로 바뀌어 프로세스가 종료 코드 1로 끝난다",
      "함수가 자동으로 재시도된다",
    ],
    answer: 2,
    explanation:
      "Node.js 15부터 기본 모드가 --unhandled-rejections=throw라서 처리되지 않은 거부는 잡히지 않은 예외처럼 프로세스를 끝낸다. 실패해도 되는 호출이라면 .catch로 무시한다는 뜻을 코드에 적어야 한다.",
    anchor: "아무도-받지-않은-거부",
  },
  {
    id: "js-promises-6",
    post: "js-promises",
    question:
      "fetchJson().then(u => resolve(u))만 하는 new Promise 래퍼에서 fetchJson이 거부되면 바깥 Promise는?",
    choices: [
      "자동으로 같은 이유로 거부된다",
      "undefined로 이행된다",
      "영원히 pending으로 남고, 안쪽 거부는 처리되지 않은 거부가 된다",
      "executor가 다시 실행된다",
    ],
    answer: 2,
    explanation:
      "바깥 Promise를 끝낼 수 있는 건 executor가 받은 resolve·reject뿐인데 거부 경로에서 아무것도 부르지 않았다. 이미 Promise를 돌려주는 함수는 감싸지 말고 그대로 return하면 된다.",
    anchor: "상자를-하나-더-씌울-때-흔한-실수",
  },
  {
    id: "js-promises-7",
    post: "js-promises",
    question: "onClick 핸들러에서 save().then(...)이 거부됐다. React 에러 바운더리가 이걸 잡아 대체 화면을 보여 주나?",
    choices: [
      "잡는다. 컴포넌트 안에서 난 에러는 모두 잡는다",
      "잡지 않는다. 에러 바운더리는 렌더링 중 에러만 받으므로 catch에서 에러 상태를 직접 세팅해야 한다",
      "Strict Mode에서만 잡는다",
      "Suspense가 대신 잡는다",
    ],
    answer: 1,
    explanation:
      "에러 바운더리는 렌더링 중에 던진 에러를 받는다. 이벤트 핸들러의 비동기 실패는 범위 밖이라 콘솔과 에러 수집기에만 남는다. 사용자에게 보이려면 catch에서 상태를 바꿔야 한다.",
    anchor: "react에서-promise를-만나는-자리",
  },
];
