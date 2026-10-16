import type { QuizQuestion } from "../types";

export const FRONTEND_BROWSER_CACHE: QuizQuestion[] = [
  {
    id: "frontend-browser-cache-1",
    post: "frontend-browser-cache",
    question: "Service Worker 안에서 fetch(request)로 네트워크에 보낸 요청은 어떻게 처리되나?",
    choices: [
      "Service Worker가 있으면 HTTP 캐시는 꺼지므로 항상 서버까지 간다",
      "같은 Service Worker의 fetch 이벤트로 다시 들어온다",
      "브라우저의 HTTP 캐시를 거치고, 신선한 사본이 있으면 거기서 응답한다",
      "Cache Storage에 자동으로 저장된다",
    ],
    answer: 2,
    explanation:
      "Service Worker가 보낸 fetch도 보통의 요청처럼 디스크의 HTTP 캐시를 지나간다. 그래서 Service Worker를 써도 캐시 헤더는 여전히 중요하다. Cache Storage에는 코드가 put한 것만 들어간다.",
    anchor: "요청-하나가-거치는-캐시들",
  },
  {
    id: "frontend-browser-cache-2",
    post: "frontend-browser-cache",
    question: "뒤로 가기를 눌러도 bfcache에서 즉시 복원되지 않고 페이지를 다시 불러온다. 가장 먼저 의심할 코드는?",
    choices: [
      "window에 등록한 unload 이벤트 리스너",
      "pagehide 이벤트 리스너",
      "해시가 든 정적 파일의 immutable 헤더",
      "localStorage에 값을 쓰는 코드",
    ],
    answer: 0,
    explanation:
      "unload는 페이지가 완전히 사라진다는 가정 위의 이벤트라 크롬과 파이어폭스는 이 리스너가 있는 페이지를 bfcache에 넣지 않는다. 떠날 때의 정리는 bfcache와 함께 쓸 수 있는 pagehide나 visibilitychange로 옮긴다.",
    anchor: "뒤로-가기가-즉시-뜨는-bfcache",
  },
  {
    id: "frontend-browser-cache-3",
    post: "frontend-browser-cache",
    question: "새 sw.js를 배포했는데 사용자가 새로고침해도 옛 Service Worker가 계속 응답한다. 이유는?",
    choices: [
      "sw.js가 HTTP 캐시에 1년 동안 저장돼 있어서",
      "새로고침은 Service Worker 업데이트 확인을 하지 않아서",
      "Cache Storage의 옛 캐시를 지우지 않아서",
      "옛 버전이 맡은 탭이 남아 있어 새 버전이 waiting 상태로 기다리기 때문에",
    ],
    answer: 3,
    explanation:
      "새 버전은 설치돼도 옛 버전이 맡은 탭이 모두 닫힐 때까지 활성화되지 않는다. 새로고침하는 동안에도 옛 페이지가 잠깐 겹쳐 있어서 옛 버전이 계속 맡는다. sw.js 자체는 기본값 updateViaCache 덕분에 HTTP 캐시를 거치지 않는다.",
    anchor: "새-service-worker는-기다린다",
  },
  {
    id: "frontend-browser-cache-4",
    post: "frontend-browser-cache",
    question: "HTML 페이지 요청에 캐시 우선(cache-first) 전략을 쓰면 생기는 문제는?",
    choices: [
      "오프라인에서 페이지가 열리지 않는다",
      "배포 뒤에도 캐시에 들어 있는 옛 HTML을 계속 보여 준다",
      "같은 페이지를 매번 서버에서 다시 받는다",
      "POST 요청이 캐시에 저장된다",
    ],
    answer: 1,
    explanation:
      "캐시 우선은 캐시에 있으면 네트워크에 묻지 않으니 같은 주소의 내용이 바뀌는 HTML에 쓰면 옛것을 계속 준다. 그래서 해시가 든 정적 파일에는 캐시 우선을, HTML에는 네트워크 우선을 쓴다.",
    anchor: "캐시를-먼저-볼까-네트워크를-먼저-볼까",
  },
  {
    id: "frontend-browser-cache-5",
    post: "frontend-browser-cache",
    question: "이 블로그의 sw.js에서 VERSION을 그대로 둔 채 Next.js만 다시 빌드해 여러 번 배포하면 어떻게 되나?",
    choices: [
      "배포마다 새 Service Worker가 설치되고 static-v1이 비워진다",
      "새 해시 파일 때문에 오프라인 페이지가 깨진다",
      "sw.js가 바뀌지 않아 업데이트가 없고, static-v1에 옛 해시 파일이 계속 쌓인다",
      "activate가 매번 돌아 pages-v1만 지워진다",
    ],
    answer: 2,
    explanation:
      "브라우저는 sw.js가 한 바이트라도 바뀌어야 새 버전으로 본다. VERSION이 그대로면 activate의 정리 코드도 돌지 않아서 static-v1에는 배포마다 새 파일이 더해지기만 한다. 빌드 ID를 넣어 버전을 바꾸거나 만료 규칙을 둬서 막는다.",
    anchor: "버전을-올리고-옛-캐시를-지운다",
  },
  {
    id: "frontend-browser-cache-6",
    post: "frontend-browser-cache",
    question: "오프라인 초안을 Service Worker에서도 읽고, 객체 그대로 넉넉한 용량으로 저장하려고 한다. 맞는 저장소는?",
    choices: ["localStorage", "sessionStorage", "쿠키", "IndexedDB"],
    answer: 3,
    explanation:
      "IndexedDB는 비동기이고 객체·Blob을 그대로 넣으며 워커에서도 쓸 수 있다. localStorage는 동기라 메인 스레드를 막고, 문자열만 출처당 5MB 정도까지 넣을 수 있으며 Service Worker에서는 쓸 수 없다.",
    anchor: "데이터는-어디에-저장하나",
  },
  {
    id: "frontend-browser-cache-7",
    post: "frontend-browser-cache",
    question: "다음 페이지에서 쓸 청크를 지금 페이지 로딩을 방해하지 않고 미리 받아 두려면?",
    choices: [
      '<link rel="prefetch">',
      '<link rel="preload">',
      '<link rel="preconnect">',
      '<link rel="dns-prefetch">',
    ],
    answer: 0,
    explanation:
      "prefetch는 다음 이동에서 쓸 리소스를 낮은 우선순위로 한가할 때 받아 둔다. preload는 지금 페이지가 곧 쓸 것을 높은 우선순위로 받으니 이 용도로 쓰면 현재 페이지와 대역폭을 다툰다. preconnect와 dns-prefetch는 연결만 미리 열 뿐 파일을 받지 않는다.",
    anchor: "다음에-필요한-것을-미리-받기",
  },
];
