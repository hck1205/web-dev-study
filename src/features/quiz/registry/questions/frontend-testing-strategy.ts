import type { QuizQuestion } from "../types";

export const FRONTEND_TESTING_STRATEGY: QuizQuestion[] = [
  {
    id: "frontend-testing-strategy-1",
    post: "frontend-testing-strategy",
    question: "장바구니의 useState 네 개를 useReducer 하나로 바꿨더니 화면 동작은 같은데 테스트 스무 개가 깨졌다. 테스트의 문제로 가장 알맞은 것은?",
    choices: [
      "테스트가 훅 이름, 내부 함수 호출, CSS 클래스처럼 구현을 직접 확인하고 있었다",
      "useReducer는 jsdom에서 지원되지 않는다",
      "리팩터링하면 스냅샷을 항상 다시 만들어야 한다",
      "useReducer는 렌더링을 두 번 일으켜 단언 시점이 어긋난다",
    ],
    answer: 0,
    explanation:
      "리팩터링은 바로 훅 이름과 내부 구조를 바꾸는 일이라, 그것을 확인하는 테스트는 동작이 같아도 깨진다. 역할과 이름으로 버튼을 찾아 누르고 화면 값을 확인하면 구현이 바뀌어도 통과하고, 화면이 안 바뀌는 버그에는 깨진다.",
    anchor: "사용자가-보는-것으로-확인한다",
  },
  {
    id: "frontend-testing-strategy-2",
    post: "frontend-testing-strategy",
    question: "div에 onClick을 달아 만든 버튼을 getByRole(\"button\", { name: \"저장\" })으로 찾지 못했다. 이 실패가 알려 주는 것은?",
    choices: [
      "Testing Library가 div 요소를 검색 대상에서 빼서다",
      "name 옵션은 정규식만 받아서다",
      "그 요소는 접근성 트리에서 버튼이 아니라서 스크린 리더에도 저장 버튼으로 전달되지 않는다",
      "getByRole은 비동기 쿼리라 await가 필요해서다",
    ],
    answer: 2,
    explanation:
      "getByRole은 접근성 트리의 역할과 이름으로 찾기 때문에, 역할이 없는 가짜 버튼은 찾지 못한다. 보조 기술도 같은 트리를 읽으니 접근성 버그를 함께 드러낸 것이다. testid를 붙여 넘어가면 이 문제를 덮게 된다.",
    anchor: "요소를-찾는-순서에-접근성이-들어-있다",
  },
  {
    id: "frontend-testing-strategy-3",
    post: "frontend-testing-strategy",
    question: "검색 버튼을 누른 직후 getByRole로 결과 목록을 확인하는 테스트가 로컬에서는 통과하고 CI에서만 가끔 깨진다. 어떻게 고치나?",
    choices: [
      "테스트 앞에 setTimeout으로 500ms를 기다린다",
      "응답 뒤에 생기는 목록은 findByRole로 찾아 나타날 때까지 기다린다",
      "getByRole 대신 getByTestId를 쓴다",
      "CI에서 재시도를 켜서 통과시킨다",
    ],
    answer: 1,
    explanation:
      "getBy는 지금 이 순간만 보므로, 응답이 빠른 기계에서만 우연히 통과한다. findBy는 getBy를 waitFor로 감싸 50ms마다 다시 찾고 기본 1초까지 기다린다. 고정 대기는 느린 기계에서 모자라고 빠른 기계에서 시간만 버린다.",
    anchor: "getby로-찾으면-운에-맡기게-된다",
  },
  {
    id: "frontend-testing-strategy-4",
    post: "frontend-testing-strategy",
    question: "pointer-events: none으로 가려진 버튼을 fireEvent.click은 눌렀고 userEvent.click은 에러를 냈다. 이 차이에서 userEvent를 권하는 이유는?",
    choices: [
      "userEvent가 fireEvent보다 실행 속도가 빨라서",
      "userEvent는 React 이벤트 시스템을 거치지 않아서",
      "fireEvent는 act로 감싸지지 않아서",
      "userEvent는 사람이 할 때의 이벤트 순서를 흉내 내고, 사람이 할 수 없는 동작은 거부해서",
    ],
    answer: 3,
    explanation:
      "fireEvent는 이벤트 하나를 요소에 바로 보내서 사용자가 누를 수 없는 버튼도 눌러 버린다. userEvent는 pointer, mouse, focus, click을 차례로 일으키고 가려진 요소는 누를 수 없다고 알려 주어 실제 버그를 잡는다. 둘 다 Testing Library가 act로 감싼다.",
    anchor: "userevent는-사람처럼-누른다",
  },
  {
    id: "frontend-testing-strategy-5",
    post: "frontend-testing-strategy",
    question: "테스트는 통과했는데 \"An update to UserSearch inside a test was not wrapped in act(...)\" 경고가 났다. 가장 알맞은 처방은?",
    choices: [
      "테스트 본문 전체를 act로 감싼다",
      "console.error를 목으로 바꿔 경고를 숨긴다",
      "응답 뒤의 결과를 findBy나 waitFor로 기다리도록 고쳐, 그 상태 변화를 테스트가 확인하게 한다",
      "IS_REACT_ACT_ENVIRONMENT를 false로 바꾼다",
    ],
    answer: 2,
    explanation:
      "경고는 테스트가 기다리지 않은 시점에 상태가 바뀌었다는 신호다. 무엇을 기다리는지 findBy나 waitFor로 적으면 Testing Library가 그 동안을 act로 감싸 경고가 사라진다. 경고를 끄거나 숨기면 보지 못한 변화가 그대로 남는다.",
    anchor: "act-경고는-보지-않은-변화를-알린다",
  },
  {
    id: "frontend-testing-strategy-6",
    post: "frontend-testing-strategy",
    question: "MSW의 server.listen에 onUnhandledRequest: \"error\"를 켜 두는 이유는?",
    choices: [
      "핸들러가 없는 요청이 경고만 남기고 진짜 네트워크로 나가 우연히 통과하거나 엉뚱한 곳에서 실패하는 것을 막으려고",
      "에러 응답 핸들러를 따로 만들지 않아도 500을 돌려주게 하려고",
      "테스트 사이에 덮어쓴 핸들러를 자동으로 되돌리려고",
      "브라우저에서도 Service Worker 없이 동작하게 하려고",
    ],
    answer: 0,
    explanation:
      "기본값은 경고만 찍고 요청을 실제 네트워크로 흘려보낸다. 새 API에 핸들러를 빠뜨려도 테스트가 모르고 지나갈 수 있다. 덮어쓴 핸들러를 되돌리는 것은 resetHandlers가 하는 일이다.",
    anchor: "네트워크는-경계에서-가로챈다",
  },
  {
    id: "frontend-testing-strategy-7",
    post: "frontend-testing-strategy",
    question: "Playwright에서 expect(await locator.textContent()).toBe(\"1\")은 실패하고 await expect(locator).toHaveText(\"1\")은 통과했다. 왜 그런가?",
    choices: [
      "textContent는 숨은 요소의 글자를 읽지 못해서",
      "toHaveText는 웹 우선 단언이라 조건이 맞을 때까지 다시 확인하고, textContent는 한 번 읽은 값을 비교해서",
      "toHaveText는 공백을 무시하고 비교해서",
      "textContent는 click이 끝나기 전에 실행되어서",
    ],
    answer: 1,
    explanation:
      "textContent()는 그 순간 한 번 읽어 오고, 값이 300ms 뒤에 바뀌면 일반 expect는 이전 값을 비교한다. 웹 우선 단언은 기본 5초 동안 다시 확인한다. click 자체는 요소가 준비될 때까지 기다린 뒤 끝나므로 원인이 아니다.",
    anchor: "브라우저에서만-보이는-버그는-e2e로",
  },
];
