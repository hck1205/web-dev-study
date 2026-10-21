import type { QuizQuestion } from "../types";

export const BROWSER_STORAGE: QuizQuestion[] = [
  {
    id: "browser-storage-1",
    post: "browser-storage",
    question:
      'localStorage.setItem("flag", false) 뒤에 if (localStorage.getItem("flag")) 안쪽 코드는 실행되나?',
    choices: [
      "실행되지 않는다. false가 그대로 저장된다",
      "실행된다. 문자열 \"false\"가 저장되고 빈 문자열이 아닌 문자열은 참이다",
      "setItem에서 TypeError가 난다",
      "getItem이 null을 돌려줘서 실행되지 않는다",
    ],
    answer: 1,
    explanation:
      "Web Storage는 문자열만 저장해서 false를 String(false)인 \"false\"로 바꿔 넣는다. 빈 문자열이 아닌 문자열은 참이라 if 안이 실행된다. 값은 JSON으로 넣고 꺼낼 때 파싱해야 한다.",
    anchor: "문자열만-받는-상자",
  },
  {
    id: "browser-storage-2",
    post: "browser-storage",
    question: "탭 A에서 localStorage.setItem(\"theme\", \"dark\")를 부르면 storage 이벤트는 어디서 발생하나?",
    choices: [
      "탭 A와 같은 출처의 모든 탭",
      "탭 A에서만",
      "같은 출처의 다른 탭들에서만. 탭 A 자신은 받지 않는다",
      "브라우저의 모든 탭",
    ],
    answer: 2,
    explanation:
      "storage 이벤트는 다른 문서에 변경을 알리는 장치라서 값을 바꾼 탭에는 오지 않는다. 같은 탭의 다른 컴포넌트에 알리려면 직접 이벤트를 쏘거나 상태 관리 도구를 써야 한다.",
    anchor: "다른-탭이-바꾼-값을-듣는-storage-이벤트",
  },
  {
    id: "browser-storage-3",
    post: "browser-storage",
    question:
      "http://blog.test:8123에서 저장한 localStorage 값과 Domain 없이 받은 쿠키를 http://blog.test:8124에서 읽으면?",
    choices: [
      "둘 다 읽힌다",
      "둘 다 안 읽힌다",
      "localStorage는 읽히고 쿠키는 안 읽힌다",
      "localStorage는 비어 있고 쿠키는 읽힌다",
    ],
    answer: 3,
    explanation:
      "localStorage는 스킴, 호스트, 포트가 모두 같은 출처끼리만 공유한다. 쿠키는 포트를 보지 않고 도메인과 경로로 묶이니 포트만 다른 페이지에도 그대로 간다.",
    anchor: "출처마다-칸이-나뉘고-쿠키는-다르게-나뉜다",
  },
  {
    id: "browser-storage-4",
    post: "browser-storage",
    question: "페이지에 XSS가 생겼을 때 HttpOnly 세션 쿠키는 어떻게 되나?",
    choices: [
      "스크립트가 쿠키 값을 읽어 갈 수는 없지만, 스크립트가 보낸 요청에도 쿠키는 붙는다",
      "스크립트가 쿠키 값을 읽어 갈 수 있다",
      "스크립트가 요청을 보내면 쿠키가 빠진다",
      "HttpOnly 쿠키가 있으면 XSS 스크립트는 실행되지 않는다",
    ],
    answer: 0,
    explanation:
      "HttpOnly는 document.cookie로 읽는 것만 막아서 토큰이 밖으로 새지는 않는다. 하지만 같은 출처에서 도는 스크립트의 요청에도 브라우저가 쿠키를 붙이므로, 탭이 열린 동안은 피해자 대신 요청할 수 있다. 피해를 줄이는 장치이지 XSS를 막는 장치는 아니다.",
    anchor: "xss-하나면-localstorage는-통째로-읽힌다",
  },
  {
    id: "browser-storage-5",
    post: "browser-storage",
    question:
      "IndexedDB readwrite 트랜잭션에서 put을 하나 걸고 await fetch(...) 후 다시 put을 걸었다. 두 번째 put은 어떻게 되나?",
    choices: [
      "fetch가 끝날 때까지 트랜잭션이 기다렸다가 정상 저장된다",
      "TransactionInactiveError가 난다. 할 일이 없는 틈에 트랜잭션이 이미 커밋됐다",
      "첫 번째 put까지 함께 롤백된다",
      "DataCloneError가 난다",
    ],
    answer: 1,
    explanation:
      "트랜잭션은 걸린 요청이 다 끝나고 새 요청이 없으면 스스로 커밋한다. 네트워크를 기다리는 동안 트랜잭션은 할 일이 없다고 보고 닫히므로 돌아와 건 요청은 실패한다. 첫 번째 put은 이미 커밋돼 남아 있다.",
    anchor: "크고-구조가-있는-데이터는-indexeddb",
  },
  {
    id: "browser-storage-6",
    post: "browser-storage",
    question: "4MB짜리 목록을 상태가 바뀔 때마다 JSON.stringify 후 localStorage에 저장했더니 클릭 반응이 늦다. 이유와 대책으로 맞는 것은?",
    choices: [
      "localStorage가 비동기라 저장 순서가 꼬였다. await를 붙인다",
      "용량 초과로 매번 재시도한다. 용량을 늘려 달라고 요청한다",
      "동기 API라 직렬화와 저장 동안 메인 스레드가 멈춘다. 저장 횟수를 줄이거나 IndexedDB로 옮긴다",
      "storage 이벤트가 매번 자기 탭을 다시 그린다. 이벤트를 끈다",
    ],
    answer: 2,
    explanation:
      "Web Storage는 동기라서 stringify와 setItem이 끝날 때까지 다음 프레임을 그리지 못한다. 실험에서는 한 번에 50ms를 넘겨 긴 작업이 됐다. 디바운스로 저장 횟수를 줄이거나 비동기 저장소인 IndexedDB로 옮긴다.",
    anchor: "쓰는-동안-화면이-멈춘다",
  },
  {
    id: "browser-storage-7",
    post: "browser-storage",
    question: "useSyncExternalStore의 스냅숏 함수에서 JSON.parse(localStorage.getItem(key))를 돌려주면 생기는 문제는?",
    choices: [
      "서버 렌더링에서만 에러가 난다",
      "다른 탭의 변경을 받지 못한다",
      "문제없다. 파싱한 값이 같으면 React가 같은 값으로 본다",
      "호출할 때마다 새 객체가 나와 React가 값이 계속 바뀐다고 보고 무한히 다시 그린다",
    ],
    answer: 3,
    explanation:
      "useSyncExternalStore는 스냅숏을 참조로 비교한다. 파싱하면 내용이 같아도 매번 다른 객체라 바뀐 것으로 본다. 스냅숏은 문자열 그대로 돌려주고 파싱은 문자열이 바뀔 때만 한다.",
    anchor: "react에서-저장소-값을-읽을-때",
  },
];
