import type { QuizQuestion } from "../types";

export const BROWSER_FETCH: QuizQuestion[] = [
  {
    id: "browser-fetch-1",
    post: "browser-fetch",
    question: "fetch로 보낸 요청에 서버가 500을 돌려줬다. fetch가 돌려준 Promise는 어떻게 되나?",
    choices: [
      "TypeError로 reject된다",
      "res.ok가 false인 Response로 resolve된다",
      "HttpError로 reject된다",
      "본문을 읽을 때까지 pending으로 남는다",
    ],
    answer: 1,
    explanation:
      "fetch는 응답을 받지 못했을 때만 reject한다. 500도 HTTP 응답을 받은 것이라 resolve되고, 상태 확인은 res.ok나 res.status로 직접 해야 한다. 2xx가 아니면 reject하는 건 axios의 동작이다.",
    anchor: "500이-와도-fetch는-성공한다",
  },
  {
    id: "browser-fetch-2",
    post: "browser-fetch",
    question: "에러 로그를 남기려고 res.text()를 부른 뒤 같은 응답에 res.json()을 부르면?",
    choices: [
      "캐시된 본문으로 JSON을 다시 파싱한다",
      "빈 객체를 돌려준다",
      "본문을 이미 읽었다는 TypeError가 난다",
      "서버에 같은 요청을 다시 보낸다",
    ],
    answer: 2,
    explanation:
      "Response의 본문은 스트림이라 한 번 끝까지 읽으면 다시 읽을 수 없고 bodyUsed가 true가 된다. 두 번 써야 하면 읽기 전에 res.clone()으로 복사해 둔다.",
    anchor: "본문은-한-번만-읽힌다",
  },
  {
    id: "browser-fetch-3",
    post: "browser-fetch",
    question: "FormData로 파일을 업로드하면서 Content-Type을 multipart/form-data로 직접 적었다. 무슨 문제가 생기나?",
    choices: [
      "boundary 값이 빠져서 서버가 본문을 나누지 못한다",
      "브라우저가 preflight를 두 번 보낸다",
      "파일이 base64로 인코딩되어 커진다",
      "아무 문제 없다. 브라우저가 적는 값과 같다",
    ],
    answer: 0,
    explanation:
      "FormData를 body로 넘기면 브라우저가 boundary까지 담은 Content-Type을 알아서 붙인다. 직접 적으면 boundary가 없는 값으로 덮어써서 서버가 각 부분을 구분하지 못한다.",
    anchor: "fetch-옵션-하나씩",
  },
  {
    id: "browser-fetch-4",
    post: "browser-fetch",
    question: "검색창에서 re 요청이 rea 요청보다 늦게 도착해 화면이 re 결과로 바뀌었다. 가장 알맞은 해결은?",
    choices: [
      "디바운스 시간을 늘린다",
      "응답이 도착한 순서대로 화면에 그린다",
      "서버가 짧은 검색어를 더 빨리 처리하게 한다",
      "마지막으로 보낸 요청의 응답만 반영하고 이전 요청은 취소하거나 무시한다",
    ],
    answer: 3,
    explanation:
      "네트워크는 보낸 순서대로 응답이 온다고 보장하지 않는다. 디바운스는 요청 수를 줄일 뿐 두 요청이 겹치는 순간은 여전히 생긴다. 새 요청을 보낼 때 이전 요청을 AbortController로 취소하거나 최신이 아닌 응답을 버려야 한다.",
    anchor: "늦게-온-응답이-화면을-덮는다",
  },
  {
    id: "browser-fetch-5",
    post: "browser-fetch",
    question: "결제 요청을 AbortController로 취소했다. 이때 말할 수 있는 것은?",
    choices: [
      "서버의 결제 처리도 함께 취소된다",
      "브라우저가 응답을 기다리지 않을 뿐, 서버는 이미 결제를 처리했을 수 있다",
      "서버에 자동으로 취소 요청이 간다",
      "요청이 서버에 닿지 않았음이 보장된다",
    ],
    answer: 1,
    explanation:
      "abort는 브라우저 쪽에서 응답을 더 기다리지 않겠다는 뜻이다. 요청이 이미 서버에 닿았다면 서버는 하던 일을 끝낼 수 있어서, 취소를 실패로 단정하지 말고 결과를 다시 확인해야 한다.",
    anchor: "지난-요청은-취소한다",
  },
  {
    id: "browser-fetch-6",
    post: "browser-fetch",
    question: "탭을 닫을 때 읽은 시간을 서버로 보내려 한다. 가장 알맞은 방법은?",
    choices: [
      "unload 이벤트에서 동기 XHR을 보낸다",
      "beforeunload에서 평범한 fetch를 await한다",
      "visibilitychange가 hidden일 때 keepalive fetch나 sendBeacon으로 보낸다",
      "setTimeout으로 1초 뒤에 보낸다",
    ],
    answer: 2,
    explanation:
      "keepalive fetch와 sendBeacon은 페이지가 사라진 뒤에도 요청이 끝까지 가게 해 준다. 모바일에서는 unload가 불리지 않는 경우가 많고, 크롬 계열은 페이지를 닫을 때의 동기 XHR을 막아서 visibilitychange의 hidden 시점에 보내는 게 맞다.",
    anchor: "페이지를-닫을-때-보내는-요청",
  },
  {
    id: "browser-fetch-7",
    post: "browser-fetch",
    question: "큰 파일 업로드 화면에 업로드 진행 막대가 필요하다. 어떤 선택이 맞나?",
    choices: [
      "XHR이나 XHR 기반 axios의 업로드 진행률 이벤트를 쓴다",
      "fetch의 res.body 스트림으로 보낸 바이트를 센다",
      "fetch에 keepalive를 켜면 진행률 이벤트가 생긴다",
      "AbortSignal.timeout으로 진행 시간을 잰다",
    ],
    answer: 0,
    explanation:
      "fetch는 받는 쪽 진행률은 응답 스트림으로 만들 수 있지만 보내는 쪽 진행률을 알려 주는 API가 없다. xhr.upload.onprogress나 axios의 onUploadProgress를 쓴다.",
    anchor: "xhr-fetch-axios",
  },
];
