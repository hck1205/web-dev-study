import type { QuizQuestion } from "../types";

export const SERVER_SENT_EVENTS: QuizQuestion[] = [
  {
    id: "server-sent-events-1",
    post: "server-sent-events",
    question: "배포 중에 앞단이 잠깐 502를 돌려줬다. 그 뒤로 일부 사용자의 SSE 화면이 영영 갱신되지 않는다. 왜 그럴까?",
    choices: [
      "EventSource는 200이 아닌 응답을 받으면 연결을 실패로 끝내고 다시 붙지 않기 때문이다",
      "Last-Event-ID가 502 응답에 덮어쓰였기 때문이다",
      "retry 값이 0으로 초기화되기 때문이다",
      "HTTP/2 스트림 한도를 넘었기 때문이다",
    ],
    answer: 0,
    explanation:
      "EventSource는 네트워크 오류에만 다시 연결하고, 200이 아닌 응답이나 다른 Content-Type에는 CLOSED가 된다. 실습에서도 500과 204에 readyState=2가 되고 요청이 한 번만 찍혔다. onerror에서 CLOSED를 확인해 앱이 백오프를 두고 새로 연결해야 한다.",
    anchor: "끊기면-다시-붙고-어떤-응답에는-포기한다",
  },
  {
    id: "server-sent-events-2",
    post: "server-sent-events",
    question: "일부 이벤트에만 id를 붙이는 SSE 서버에서, 재연결 뒤 이미 받은 이벤트가 다시 오는 이유는?",
    choices: [
      "브라우저가 id 없는 이벤트를 받으면 lastEventId를 비우기 때문이다",
      "id 없는 이벤트를 받아도 lastEventId는 마지막 id로 남아, 재연결 때 그 뒤의 이벤트를 서버가 다시 보내기 때문이다",
      "retry 필드가 id를 덮어쓰기 때문이다",
      "주석 줄이 lastEventId를 바꾸기 때문이다",
    ],
    answer: 1,
    explanation:
      "lastEventId는 이벤트가 끝나도 남고, id 필드가 올 때만 바뀐다. 그래서 id 없는 이벤트를 여러 개 받은 뒤 끊기면 Last-Event-ID는 그보다 앞을 가리킨다. 이어 받기가 필요하면 모든 이벤트에 id를 붙인다. 값이 빈 id: 줄은 lastEventId를 비운다.",
    anchor: "id와-retry는-다음-이벤트까지-남는다",
  },
  {
    id: "server-sent-events-3",
    post: "server-sent-events",
    question: "사용자가 쓴 채팅 내용을 `data: ${text}\\n\\n`으로 그대로 보내는 SSE 서버의 문제는?",
    choices: [
      "한글이 깨진다",
      "data가 125바이트를 넘으면 잘린다",
      "내용에 빈 줄과 'event: admin' 같은 줄이 있으면 받는 쪽에서 가짜 이벤트가 생긴다",
      "브라우저가 data를 JSON으로만 해석한다",
    ],
    answer: 2,
    explanation:
      "빈 줄은 이벤트의 끝이라서, 내용 속 빈 줄 뒤의 줄들이 새 이벤트의 필드로 해석된다. data는 줄마다 'data:'를 붙여 나누고, id와 event에는 줄바꿈이 들어가지 못하게 막는다. SSE는 항상 UTF-8로 해석하니 한글 자체는 문제가 아니다.",
    anchor: "id와-retry는-다음-이벤트까지-남는다",
  },
  {
    id: "server-sent-events-4",
    post: "server-sent-events",
    question: "HTTP/1.1로 서비스하는 사이트에서 한 페이지가 SSE를 7개 열자 일반 API 호출까지 멈췄다. 가장 근본적인 해결은?",
    choices: [
      "SSE 응답에 Content-Length를 붙인다",
      "retry 값을 늘린다",
      "SSE마다 다른 이벤트 이름을 쓴다",
      "HTTP/2로 서비스해 연결 하나에 스트림을 여러 개 싣는다",
    ],
    answer: 3,
    explanation:
      "브라우저는 HTTP/1.1에서 출처당 연결을 6개까지만 열고, 끝나지 않는 SSE 응답이 하나씩 차지한다. 실습에서 HTTP/1.1은 TCP 6개에 일곱째와 fetch가 대기했고, HTTP/2는 TCP 1개로 전부 처리해 fetch가 10ms에 끝났다. HTTP/1.1로 남는다면 페이지당 스트림 하나로 합친다.",
    anchor: "탭-일곱-개째에서-사이트가-멈춘다",
  },
  {
    id: "server-sent-events-5",
    post: "server-sent-events",
    question: "앱에 직접 붙어도 SSE 이벤트가 몇 초씩 묶여서 온다. 응답 헤더에 Content-Encoding: gzip이 있다. 가장 먼저 의심할 것은?",
    choices: [
      "압축 미들웨어가 이벤트마다 flush하지 않고 출력을 모으고 있다",
      "nginx의 proxy_buffering이 켜져 있다",
      "브라우저의 연결 6개 제한에 걸렸다",
      "retry 값이 너무 크다",
    ],
    answer: 0,
    explanation:
      "앱에 직접 붙었는데도 몰린다면 프록시가 아니라 앱 쪽이다. gzip은 효율을 위해 입력을 모으므로, 실습에서 flush 없는 앱 압축은 3초 동안 아무것도 내보내지 않았고 이벤트마다 flush하자 제때 왔다. Express compression이라면 res.flush()를 부른다.",
    anchor: "프록시와-압축이-이벤트를-붙잡는-곳",
  },
  {
    id: "server-sent-events-6",
    post: "server-sent-events",
    question: "SSE 경로의 access.log에 200 응답이 rt=60.0 근처로 줄줄이 쌓인다. 화면은 멀쩡하다. 무슨 일인가?",
    choices: [
      "정상이다. SSE는 원래 60초마다 응답을 끝낸다",
      "조용한 스트림이 유휴 한도에 끊기고 EventSource가 자동으로 다시 붙고 있다. 한도보다 짧은 하트비트가 필요하다",
      "서버가 204를 보내 재연결을 멈추고 있다",
      "압축 미들웨어가 응답을 버퍼링하고 있다",
    ],
    answer: 1,
    explanation:
      "헤더를 이미 보낸 뒤라 상태 코드는 200으로 남아 오류율에 잡히지 않는다. EventSource가 다시 붙으니 화면은 멀쩡하지만 재연결과 인증, 구독 등록이 계속 반복된다. 경로의 가장 짧은 유휴 한도보다 짧은 간격으로 ': ping' 주석을 보내면 막힌다.",
    anchor: "조용한-스트림은-끊기고-끊긴-줄도-모른다",
  },
  {
    id: "server-sent-events-7",
    post: "server-sent-events",
    question: "LLM 답변 스트리밍에서 EventSource 대신 fetch로 응답 본문을 직접 읽는 이유는?",
    choices: [
      "EventSource는 text/event-stream을 해석하지 못해서",
      "fetch가 자동으로 재연결과 Last-Event-ID를 처리해 줘서",
      "EventSource는 GET만 보내고 요청 헤더를 붙일 수 없어서 POST 본문과 Authorization이 필요한 호출에 맞지 않아서",
      "EventSource는 HTTP/2에서 동작하지 않아서",
    ],
    answer: 2,
    explanation:
      "LLM 호출은 긴 질문을 본문으로 보내고 인증 헤더를 붙여야 한다. 그래서 fetch로 POST를 보내고 본문 스트림을 빈 줄 단위로 자른다. 대신 EventSource가 해 주던 재연결과 Last-Event-ID, 조각 경계 처리는 직접 해야 한다.",
    anchor: "llm-답변-스트리밍은-eventsource를-쓰지-않는다",
  },
];
