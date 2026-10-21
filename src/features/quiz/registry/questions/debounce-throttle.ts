import type { QuizQuestion } from "../types";

export const DEBOUNCE_THROTTLE: QuizQuestion[] = [
  {
    id: "debounce-throttle-1",
    post: "debounce-throttle",
    question: "이벤트가 0, 100, 200, 300ms에 왔다. 250ms 디바운스(trailing)라면 핸들러는 언제 실행되나?",
    choices: ["250ms 한 번", "0ms와 550ms", "550ms 한 번", "250ms, 350ms, 450ms, 550ms"],
    answer: 2,
    explanation:
      "디바운스는 호출될 때마다 예약을 지우고 다시 건다. 마지막 호출이 300ms이므로 그로부터 250ms 뒤인 550ms에 한 번만 실행된다. 0ms에 바로 실행하는 건 leading 옵션을 켰을 때다.",
    anchor: "조용해질-때까지-기다린다",
  },
  {
    id: "debounce-throttle-2",
    post: "debounce-throttle",
    question: "50ms마다 계속 오는 이벤트에 100ms를 걸었다. 이벤트가 오는 동안에도 일정하게 실행되는 것은?",
    choices: [
      "디바운스. 100ms마다 예약이 끝나기 때문이다",
      "스로틀. 간격마다 한 번씩 통과시킨다",
      "둘 다 이벤트가 멈출 때까지 실행되지 않는다",
      "둘 다 50ms마다 실행된다",
    ],
    answer: 1,
    explanation:
      "디바운스는 조용한 시간이 대기 시간만큼 생겨야 실행되므로 이벤트가 계속 오면 끝날 때까지 기다린다. 스로틀은 간격마다 한 번씩 실행해서 0, 100, 200, 300, 400ms에 실행됐다. 그래서 스크롤 진행 표시처럼 움직이는 동안 반응해야 하면 스로틀을 쓴다.",
    anchor: "일정-간격마다-한-번만-통과시킨다",
  },
  {
    id: "debounce-throttle-3",
    post: "debounce-throttle",
    question:
      "React 컴포넌트 본문에서 const debouncedSearch = debounce(search, 300)으로 만들어 onChange에서 불렀다. react를 빠르게 치면?",
    choices: [
      "search가 한 번만 불린다",
      "search가 한 번도 불리지 않는다",
      "렌더마다 새 디바운스 함수가 생겨 이전 예약을 못 지우므로 다섯 번 모두 불린다",
      "React가 경고를 띄우고 첫 글자만 처리한다",
    ],
    answer: 2,
    explanation:
      "글자마다 setState로 다시 렌더링되고, 렌더링마다 새 timer를 가진 새 함수가 만들어진다. 이전 함수의 타이머를 취소할 길이 없어 실제로 다섯 번 호출됐다. useMemo나 useRef로 하나만 만들고 언마운트 때 cancel한다.",
    anchor: "react에서-디바운스가-안-먹는-이유",
  },
  {
    id: "debounce-throttle-4",
    post: "debounce-throttle",
    question:
      "useMemo(() => debounce(() => console.log(text), 300), [])로 고정한 함수가 입력 후 빈 문자열만 찍는다. 이유는?",
    choices: [
      "debounce가 인자를 지운다",
      "useMemo가 첫 렌더 때 만든 함수가 그때의 text를 클로저로 잡고 있다",
      "setText가 비동기라 아직 반영되지 않았다",
      "300ms가 너무 짧다",
    ],
    answer: 1,
    explanation:
      "의존성 배열이 비어 있으니 함수는 첫 렌더에서 한 번만 만들어지고, 그때의 text인 빈 문자열을 계속 본다. 오래된 클로저 문제다. 값을 인자로 넘기거나, 최신 콜백을 ref에 담아 두고 디바운스 함수가 ref를 부르게 한다.",
    anchor: "react에서-디바운스가-안-먹는-이유",
  },
  {
    id: "debounce-throttle-5",
    post: "debounce-throttle",
    question: "검색창에 디바운스를 걸었는데도 가끔 이전 검색어의 결과가 화면에 남는다. 맞는 해결은?",
    choices: [
      "디바운스 시간을 1초로 늘린다",
      "디바운스를 스로틀로 바꾼다",
      "새 요청 전에 이전 요청을 AbortController로 취소하거나, 응답이 현재 검색어의 것인지 확인한다",
      "응답을 받을 때마다 stopPropagation을 부른다",
    ],
    answer: 2,
    explanation:
      "디바운스는 요청 수를 줄일 뿐 응답 순서를 보장하지 않는다. 중간에 잠깐 쉬면 요청이 두 번 나가고, 먼저 보낸 요청이 늦게 오면 최신 결과를 덮는다. 시간을 늘리면 빈도만 줄 뿐 문제는 남는다.",
    anchor: "디바운스로는-풀리지-않는-것",
  },
  {
    id: "debounce-throttle-6",
    post: "debounce-throttle",
    question: "크롬에서 scroll 리스너를 requestAnimationFrame으로 묶었더니 실행 횟수가 scroll 이벤트 수와 같았다. 왜인가?",
    choices: [
      "requestAnimationFrame이 헤드리스에서는 동작하지 않는다",
      "passive 리스너라서 rAF가 무시된다",
      "scroll 이벤트가 이미 렌더링 단계에서 프레임당 한 번만 보내진다",
      "ticking 변수를 초기화하지 않았다",
    ],
    answer: 2,
    explanation:
      "scroll 이벤트는 그리기 직전 단계에서 프레임당 한 번 보내지므로 rAF로 묶어도 횟수가 줄지 않는다. 실제로 60번 대 60번이었고, 100ms 스로틀은 21번이었다. rAF는 DOM 쓰기를 그리기 직전으로 모으는 의미가 크다.",
    anchor: "스크롤에는-프레임이라는-기준이-이미-있다",
  },
  {
    id: "debounce-throttle-7",
    post: "debounce-throttle",
    question: "디바운스로 만든 자동 저장에서 탭을 바로 닫으면 마지막 입력이 사라진다. 알맞은 대응은?",
    choices: [
      "visibilitychange나 pagehide에서 flush로 바로 저장하고 sendBeacon이나 keepalive fetch로 보낸다",
      "디바운스 대기 시간을 0으로 바꾼다",
      "beforeunload에서 alert를 띄운다",
      "저장을 setInterval로 1분마다 한다",
    ],
    answer: 0,
    explanation:
      "대기 중에 페이지가 닫히면 예약된 실행이 영영 돌지 않는다. 페이지가 숨겨질 때 flush로 기다리던 저장을 바로 실행하고, 닫혀도 끝나는 전송 방법을 쓴다. 모바일에서는 beforeunload가 잘 오지 않는다.",
    anchor: "현장에서-자주-보는-증상",
  },
];
