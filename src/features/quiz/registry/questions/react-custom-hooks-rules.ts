import type { QuizQuestion } from "../types";

export const REACT_CUSTOM_HOOKS_RULES: QuizQuestion[] = [
  {
    id: "react-custom-hooks-rules-1",
    post: "react-custom-hooks-rules",
    question: "name, count, open 순서로 useState를 부르던 컴포넌트가 다음 렌더링에서 name의 useState를 건너뛰었다. count는 어떤 값을 받나?",
    choices: [
      "0. React가 변수 이름으로 상태를 찾는다",
      "undefined. 건너뛴 다음 칸은 비워 둔다",
      "초깃값 0으로 새로 만들어진다",
      "'Kim'. 첫 번째로 불린 훅이라 name이 쓰던 칸 0을 받는다",
    ],
    answer: 3,
    explanation:
      "React는 훅을 이름이 아니라 불린 순서로 찾는다. 이번 렌더링에서 첫 번째로 불린 훅은 count라서 칸 0의 'Kim'을 받고, open은 칸 1의 0을 받는다. 렌더링이 끝나고 칸이 남은 걸 보고서야 에러를 던진다.",
    anchor: "훅은-이름이-아니라-순서로-찾는다",
  },
  {
    id: "react-custom-hooks-rules-2",
    post: "react-custom-hooks-rules",
    question: "if (advanced) useState('고급') else useState('기본')처럼 갈래마다 다른 useState를 하나씩 부른다. advanced를 false에서 true로 바꾸면?",
    choices: [
      "'고급'이 나오고 경고도 없다",
      "에러도 경고도 없이 '기본'이 계속 나온다",
      "Rendered more hooks 에러가 난다",
      "change in the order of Hooks 경고가 나온다",
    ],
    answer: 1,
    explanation:
      "두 갈래 모두 훅 하나, 같은 종류라서 React가 어긋남을 알아챌 방법이 없다. 두 번째 렌더링의 useState는 초깃값을 무시하고 칸 0의 '기본'을 돌려준다. 순서 경고는 훅 종류가 달라질 때만 나온다.",
    anchor: "에러가-나는-경우와-안-나는-경우",
  },
  {
    id: "react-custom-hooks-rules-3",
    post: "react-custom-hooks-rules",
    question: "useState를 부르는 함수 getTheme에 린트가 에러를 낸다. 이름을 useTheme으로 바꾸면 왜 해결되나?",
    choices: [
      "린트가 이름으로 훅을 알아보고, 대신 useTheme을 부르는 쪽이 규칙을 지키는지 검사하기 때문에",
      "use로 시작하면 React가 훅 순서 검사를 건너뛰기 때문에",
      "use로 시작하는 함수는 자동으로 메모이제이션되기 때문에",
      "use 접두사는 관례일 뿐이고 린트 설정에서 예외를 둔 것이다",
    ],
    answer: 0,
    explanation:
      "rules-of-hooks는 대문자로 시작하면 컴포넌트, use 다음 대문자면 훅으로 본다. 둘 다 아닌 함수 안의 훅 호출은 어디서 불릴지 확인할 수 없어 에러다. 이름을 바꾸면 검사 대상이 그 함수를 부르는 곳으로 옮겨 간다.",
    anchor: "린트가-미리-잡는-것",
  },
  {
    id: "react-custom-hooks-rules-4",
    post: "react-custom-hooks-rules",
    question: "헤더와 상품 카드가 각각 useCart()를 부르는데, 카드에서 담아도 헤더의 개수가 바뀌지 않는다. useCart 안에는 useState가 있다. 원인은?",
    choices: [
      "헤더가 memo로 감싸져 있어서",
      "useCart가 useCallback을 쓰지 않아서",
      "커스텀 훅은 로직만 나누고, 안의 useState는 부른 컴포넌트마다 따로 생겨서",
      "커스텀 훅은 한 앱에서 한 번만 부를 수 있어서",
    ],
    answer: 2,
    explanation:
      "커스텀 훅 안의 훅은 부른 컴포넌트의 훅 목록에 칸을 만든다. 헤더와 카드는 각자 자기 장바구니를 갖고 있다. 같은 상태를 보려면 공통 부모, context, 외부 저장소 중 하나에 두어야 한다.",
    anchor: "커스텀-훅은-상태를-나누지-않는다",
  },
  {
    id: "react-custom-hooks-rules-5",
    post: "react-custom-hooks-rules",
    question: "간단한 useFetch(url)에서 검색어를 빠르게 바꾸면 이전 검색어의 결과가 보인다. 이 버그의 원인과 직접적인 해결은?",
    choices: [
      "fetch가 캐시를 써서. no-store 옵션을 준다",
      "먼저 보낸 요청의 응답이 늦게 와서 최신 결과를 덮어쓴다. 정리 함수에서 이전 요청을 abort한다",
      "의존성 배열에 url이 없어서. url을 넣는다",
      "useState가 비동기라서. useRef로 바꾼다",
    ],
    answer: 1,
    explanation:
      "요청 두 개가 동시에 나가면 응답 순서는 보장되지 않는다. 늦게 온 이전 응답이 setData를 부르면 화면이 과거로 돌아간다. effect 정리 함수에서 AbortController로 이전 요청을 끊으면 막을 수 있지만, 중복 요청과 캐시 같은 문제가 계속 따라와 전용 라이브러리를 쓰는 편이 낫다.",
    anchor: "경계가-맞는-훅-새는-훅",
  },
  {
    id: "react-custom-hooks-rules-6",
    post: "react-custom-hooks-rules",
    question: "useSyncExternalStore의 getSnapshot을 () => ({ width: innerWidth, height: innerHeight })로 만들었다. 무슨 일이 생기나?",
    choices: [
      "창 크기가 바뀔 때만 정확히 다시 렌더링된다",
      "서버 렌더링에서만 에러가 난다",
      "React가 객체를 깊게 비교해서 문제없다",
      "부를 때마다 새 객체라 매번 바뀐 것으로 보고 다시 렌더링해 무한 루프가 된다",
    ],
    answer: 3,
    explanation:
      "React는 getSnapshot 결과를 Object.is로 비교한다. 새 객체는 늘 다르니 렌더링 → 다시 읽기 → 다르다를 반복하고, 'The result of getSnapshot should be cached' 경고 뒤 Maximum update depth exceeded로 끝난다. 원시값 하나만 돌려주는 훅으로 나눈다.",
    anchor: "브라우저-값을-구독하는-훅",
  },
  {
    id: "react-custom-hooks-rules-7",
    post: "react-custom-hooks-rules",
    question: "renderHook으로 훅을 테스트할 때 상태를 바꾸는 코드를 act로 감싸는 이유는?",
    choices: [
      "act가 없으면 훅을 부를 수 없어서",
      "act가 네트워크 요청을 가짜로 바꿔 주어서",
      "React가 그 안에서 생긴 렌더링과 effect를 모두 처리한 뒤 다음 줄로 넘어가게 하려고",
      "act가 StrictMode를 꺼 주어서",
    ],
    answer: 2,
    explanation:
      "상태 변경은 렌더링을 예약할 뿐이라, 바로 다음 줄에서 result.current를 보면 아직 이전 값일 수 있다. act는 그 안의 업데이트와 effect를 다 반영한 뒤 돌아온다. result.current는 마지막 렌더링에서 훅이 돌려준 값이다.",
    anchor: "훅을-테스트하는-법",
  },
];
