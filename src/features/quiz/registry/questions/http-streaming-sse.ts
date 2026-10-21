import type { QuizQuestion } from "../types";

export const HTTP_STREAMING_SSE: QuizQuestion[] = [
  {
    id: "http-streaming-sse-1",
    post: "http-streaming-sse",
    question: "HTTP/1.1 chunked 응답에서 '안녕\\n'을 담은 조각의 길이 줄에는 무엇이 적히나?",
    choices: ["3", "7", "a", "2"],
    answer: 1,
    explanation:
      "조각 길이는 글자 수가 아니라 바이트 수를 16진수로 쓴다. 한글 두 글자는 UTF-8로 3바이트씩이고 줄바꿈 1바이트를 더해 7이다.",
    anchor: "길이를-모르는-본문은-조각으로-간다",
  },
  {
    id: "http-streaming-sse-2",
    post: "http-streaming-sse",
    question: "로컬에서는 `JSON.parse(value)`로 read() 조각을 바로 파싱해도 잘 됐는데 운영에서 큰 응답을 받자 파싱 에러가 났다. 왜인가?",
    choices: [
      "운영 서버가 NDJSON 대신 SSE로 보냈기 때문에",
      "HTTP/2에서는 read()가 항상 한 바이트씩 오기 때문에",
      "조각 경계는 네트워크와 버퍼가 정해서 줄 중간에서 잘릴 수 있기 때문에",
      "TextDecoderStream이 줄바꿈을 지우기 때문에",
    ],
    answer: 2,
    explanation:
      "느린 스트림에서는 read 한 번이 우연히 줄 하나와 맞지만, 빠른 스트림에서는 64KB 안팎으로 묶여 와서 줄 중간에서 잘린다. 버퍼에 이어 붙이고 줄바꿈에서 잘라야 한다.",
    anchor: "조각-경계는-메시지-경계가-아니다",
  },
  {
    id: "http-streaming-sse-3",
    post: "http-streaming-sse",
    question: "내보내기 스트림 도중 DB 에러가 났다. 서버가 예외를 잡고 res.end()로 닫았다면 클라이언트에서는 어떻게 보이나?",
    choices: [
      "상태 코드가 500으로 바뀌어 보인다",
      "fetch의 read()가 TypeError를 던진다",
      "정상 종료와 똑같이 보여서, 끝 메시지가 없으면 구분할 수 없다",
      "브라우저가 자동으로 요청을 다시 보낸다",
    ],
    answer: 2,
    explanation:
      "200과 헤더는 이미 나갔고, 서버가 깔끔하게 닫으면 마지막 0 조각까지 정상으로 도착한다. 그래서 프로토콜에 done 같은 끝 메시지를 두고, 그게 없이 끝나면 실패로 처리한다.",
    anchor: "200을-보낸-뒤에-실패하면",
  },
  {
    id: "http-streaming-sse-4",
    post: "http-streaming-sse",
    question: "`if (!res.write(buf)) await once(res, \"drain\")`로 배압을 지키는 내보내기 코드가 있다. 사용자가 중간에 탭을 닫으면?",
    choices: [
      "once가 error로 거절되어 핸들러가 바로 끝난다",
      "close만 오고 drain은 오지 않아 핸들러가 영원히 대기한다",
      "Node가 자동으로 남은 행을 버리고 정상 종료한다",
      "res.write가 예외를 던져 프로세스가 죽는다",
    ],
    answer: 1,
    explanation:
      "클라이언트가 떠나면 응답 객체는 error가 아니라 close를 내므로 drain을 기다리는 Promise가 풀리지 않는다. stream.pipeline으로 이으면 끊김을 ERR_STREAM_PREMATURE_CLOSE로 알려 주고 생성기를 정리한다.",
    anchor: "받는-쪽이-느리면-보내는-쪽이-멈춰야-한다",
  },
  {
    id: "http-streaming-sse-5",
    post: "http-streaming-sse",
    question: "LLM 답변 스트리밍에서 사용자가 중지를 눌렀다. 앱 서버가 꼭 해야 할 일은?",
    choices: [
      "남은 토큰을 모았다가 한 번에 보낸다",
      "응답의 close를 보고 LLM API 쪽 요청도 끊는다",
      "EventSource로 바꿔 자동 재연결을 켠다",
      "상태 코드를 499로 바꿔 보낸다",
    ],
    answer: 1,
    explanation:
      "브라우저가 끊어도 앱 서버가 LLM API 호출을 이어 가면 아무도 안 보는 답을 끝까지 만들고 그 비용을 낸다. 응답의 close를 감지해 SDK 호출의 AbortSignal로 끊는다.",
    anchor: "llm-답변을-흘려보낼-때",
  },
  {
    id: "http-streaming-sse-6",
    post: "http-streaming-sse",
    question: "95MB 내보내기를 느린 클라이언트가 받을 때 nginx의 proxy_buffering을 켜 두면 생기는 일은?",
    choices: [
      "앱이 클라이언트 속도에 묶여 연결을 오래 붙잡는다",
      "nginx가 응답을 버리고 502를 돌려준다",
      "nginx가 임시 파일에 받아 두고, 앱은 빨리 응답을 끝내고 손을 뗀다",
      "응답이 자동으로 gzip 압축된다",
    ],
    answer: 2,
    explanation:
      "버퍼링이 켜져 있으면 nginx가 업스트림 응답을 빠르게 받아 메모리를 넘는 부분은 임시 파일에 쓰고, 느린 전송은 자기가 맡는다. 실습에서 앱은 0.9초 만에 끝났고, 버퍼링을 끄자 3.9초 동안 묶였다.",
    anchor: "프록시는-느린-클라이언트를-대신-받아-준다",
  },
  {
    id: "http-streaming-sse-7",
    post: "http-streaming-sse",
    question: "Chromium에서 http:// 주소로 ReadableStream 본문과 duplex: 'half'를 준 fetch가 실패했다. 이유는?",
    choices: [
      "크롬 계열은 요청 스트리밍을 HTTPS 위의 HTTP/2 이상에서만 허용하기 때문에",
      "duplex 옵션은 GET에만 쓸 수 있기 때문에",
      "서버가 Content-Length를 요구했기 때문에",
      "ReadableStream은 문자열만 담을 수 있기 때문에",
    ],
    answer: 0,
    explanation:
      "Node.js의 fetch는 HTTP/1.1에서도 chunked로 요청을 흘려보내지만, 크롬 계열은 HTTP/2 이상을 요구한다. HTTP/2 협상은 TLS 안의 ALPN으로 하므로 평문 주소에서는 ERR_ALPN_NEGOTIATION_FAILED로 막혔다.",
    anchor: "llm-답변을-흘려보낼-때",
  },
];
