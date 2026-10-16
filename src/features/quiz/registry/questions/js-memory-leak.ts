import type { QuizQuestion } from "../types";

export const JS_MEMORY_LEAK: QuizQuestion[] = [
  {
    id: "js-memory-leak-1",
    post: "js-memory-leak",
    question: "서로를 참조하지만 루트에서는 닿지 않는 두 객체는 mark-and-sweep GC에서 어떻게 되나?",
    choices: [
      "참조 카운트가 1이라 영원히 남는다",
      "한쪽이 null이 될 때까지 남는다",
      "루트에서 닿지 않으니 둘 다 회수된다",
      "old generation으로 승격된다",
    ],
    answer: 2,
    explanation:
      "mark-and-sweep은 루트에서 닿는지만 보기 때문에 순환 참조라도 루트에서 끊기면 표시되지 않고 치워진다. 순환 참조가 문제가 되는 건 참조 수를 세는 참조 카운팅 방식이다.",
    anchor: "쓰레기의-기준은-닿을-수-있느냐다",
  },
  {
    id: "js-memory-leak-2",
    post: "js-memory-leak",
    question: "메모리 그래프를 보고 누수를 의심해야 하는 모양은?",
    choices: [
      "같은 동작을 반복할 때 GC 직후의 바닥이 계속 오른다",
      "할당이 많아 톱니의 꼭대기가 높다",
      "GC가 자주 일어나 톱니가 촘촘하다",
      "앱을 처음 열었을 때 메모리 사용량이 크다",
    ],
    answer: 0,
    explanation:
      "많이 쓰는 것과 새는 것은 다르다. 같은 동작을 반복했는데 GC 뒤에도 남는 양이 계속 늘어난다면 어딘가에 참조가 쌓이고 있다는 신호다.",
    anchor: "누수는-잊어버린-참조다",
  },
  {
    id: "js-memory-leak-3",
    post: "js-memory-leak",
    question:
      "window.addEventListener(\"resize\", () => draw())로 붙인 뒤 언마운트 때 removeEventListener(\"resize\", () => draw())를 불렀다. 결과는?",
    choices: [
      "정상적으로 떼진다",
      "다른 함수 참조라 떼지지 않고, 리스너가 잡은 데이터와 DOM이 계속 남는다",
      "브라우저가 오류를 던진다",
      "언마운트 시 브라우저가 자동으로 떼 준다",
    ],
    answer: 1,
    explanation:
      "removeEventListener는 붙일 때와 같은 함수 참조여야 동작한다. 똑같이 생긴 화살표 함수라도 새로 만든 함수라 아무것도 떼지 않는다. 함수를 변수에 담아 두거나 AbortController의 signal로 붙이고 abort()로 한 번에 뗀다.",
    anchor: "페이지를-떠나도-남는-리스너",
  },
  {
    id: "js-memory-leak-4",
    post: "js-memory-leak",
    question: "한 함수 안에서 big을 쓰는 클로저 report와, big을 쓰지 않는 클로저를 만들어 후자만 반환했다. V8에서 big은?",
    choices: [
      "반환된 함수가 big을 쓰지 않으니 바로 회수된다",
      "report가 호출되지 않았으니 회수된다",
      "같은 스코프의 클로저들이 context를 공유해서, 반환된 함수가 살아 있는 동안 big도 남는다",
      "big은 원시값이 아니라서 언제나 전역으로 옮겨진다",
    ],
    answer: 2,
    explanation:
      "V8은 한 스코프의 클로저들이 쓰는 바깥 변수를 하나의 context에 담고 모든 클로저가 그 context를 잡는다. 그래서 big을 쓰지 않는 함수도 big을 살려 둔다. 큰 데이터는 필요한 값만 꺼내 두거나 다 쓴 뒤 참조를 끊는다.",
    anchor: "클로저는-생각보다-많이-잡는다",
  },
  {
    id: "js-memory-leak-5",
    post: "js-memory-leak",
    question: "검색어 문자열을 키로 결과를 담는 캐시가 계속 커진다. 알맞은 해결책은?",
    choices: [
      "Map을 WeakMap으로 바꾼다",
      "값을 WeakRef로 감싸고 FinalizationRegistry로 지운다",
      "--max-old-space-size를 늘린다",
      "크기 제한을 두고 가장 오래 안 쓴 항목부터 버리는 LRU로 바꾼다",
    ],
    answer: 3,
    explanation:
      "WeakMap은 키가 객체여야 해서 문자열 키에는 쓸 수 없고, GC 시점에 기대는 WeakRef 정리는 보장이 없다. 일부러 참조를 남기는 캐시에는 크기 제한이나 TTL 같은 명시적인 비우기 규칙이 필요하다.",
    anchor: "끝없이-자라는-캐시",
  },
  {
    id: "js-memory-leak-6",
    post: "js-memory-leak",
    question: "힙 스냅샷 세 장을 찍고 스냅샷 3에서 'Objects allocated between Snapshot 1 and Snapshot 2'를 보는 이유는?",
    choices: [
      "반복 동작 중에 생겨 나중까지 살아남은 객체만 걸러 보려고",
      "스냅샷 1보다 먼저 생긴 캐시를 찾으려고",
      "GC를 거치지 않은 객체를 보려고",
      "Shallow size가 가장 큰 객체를 찾으려고",
    ],
    answer: 0,
    explanation:
      "워밍업에서 생긴 정상적인 캐시는 스냅샷 1 이전이라 빠지고, 반복할 때마다 새로 생겨 죽지 않는 객체만 남는다. 스냅샷은 찍기 전에 항상 GC를 돌리니 남은 것은 실제로 살아 있는 객체다.",
    anchor: "크롬-개발자-도구로-범인-찾기",
  },
  {
    id: "js-memory-leak-7",
    post: "js-memory-leak",
    question: "Node.js 서버에서 GC 직후 heapUsed는 평평한데 rss만 계속 오른다. 먼저 의심할 곳은?",
    choices: [
      "모듈 최상위 Map에 쌓이는 캐시",
      "Buffer 같은 V8 힙 밖 메모리나 네이티브 모듈, 단편화",
      "removeEventListener를 빠뜨린 리스너",
      "클로저가 공유하는 context",
    ],
    answer: 1,
    explanation:
      "자바스크립트 객체가 새면 heapUsed의 바닥이 오른다. heapUsed가 그대로인데 rss만 오르면 힙 밖이라서 힙 스냅샷을 뒤져도 원인이 잘 안 나온다. 나머지 보기는 모두 힙 안의 누수다.",
    anchor: "nodejs-서버가-점점-무거워질-때",
  },
];
