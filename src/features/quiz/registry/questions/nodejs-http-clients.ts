import type { QuizQuestion } from "../types";

export const NODEJS_HTTP_CLIENTS: QuizQuestion[] = [
  {
    id: "nodejs-http-clients-1",
    post: "nodejs-http-clients",
    question:
      "같은 서버로 요청 200개를 차례로 보냈다. http.globalAgent는 연결 1개, keepAlive: false 에이전트는 200개를 열었다. loopback에서 시간 차이가 거의 없었는데도 운영에서 keep-alive를 켜야 하는 이유는?",
    choices: [
      "keep-alive를 켜면 서버의 응답 처리 시간이 줄어들기 때문이다",
      "실제 네트워크는 RTT가 커서 핸드셰이크 비용이 쌓이고, 닫힌 연결이 TIME-WAIT로 남아 포트를 소모하기 때문이다",
      "keep-alive가 없으면 HTTP/1.1 요청을 보낼 수 없기 때문이다",
      "keep-alive를 끄면 응답 본문이 압축되지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "loopback은 RTT가 0.1ms도 안 돼서 차이가 숨는다. 실제로는 연결마다 TCP와 TLS 핸드셰이크 왕복이 붙고, 실험에서처럼 닫힌 연결 199개가 TIME-WAIT로 남는다. 많아지면 출발지 포트가 모자란다.",
    anchor: "연결을-다시-쓰는-일-agent와-keep-alive",
  },
  {
    id: "nodejs-http-clients-2",
    post: "nodejs-http-clients",
    question:
      "maxSockets: 2인 http.Agent로 요청 세 개를 보내고 상태 코드만 찍은 채 응답 본문은 읽지 않았다. 세 번째 요청은 어떻게 되나?",
    choices: [
      "새 소켓을 열어 바로 보내진다",
      "에러 ECONNRESET으로 실패한다",
      "앞의 두 응답이 자동으로 버려진 뒤 보내진다",
      "읽히지 않은 본문이 소켓을 붙잡고 있어 대기열에서 출발하지 못한다",
    ],
    answer: 3,
    explanation:
      "HTTP/1.1 연결은 앞 응답의 본문이 다 빠져야 다음 요청에 쓸 수 있다. 소켓 두 개가 모두 사용 중이라 세 번째는 agent의 대기열에 남았다. 본문이 필요 없으면 res.resume()으로 흘려 버린다.",
    anchor: "응답을-읽지-않으면-연결이-돌아오지-않는다",
  },
  {
    id: "nodejs-http-clients-3",
    post: "nodejs-http-clients",
    question:
      "내장 fetch로 외부 API를 부르는데 에러 응답일 때 본문을 읽지 않고 반환했다. 시간이 갈수록 그 API로 가는 ESTAB 연결이 늘어나는 이유는?",
    choices: [
      "fetch는 요청마다 반드시 새 연결을 만들기 때문이다",
      "에러 응답은 서버가 연결을 끊지 않기 때문이다",
      "본문이 남은 연결은 다시 쓸 수 없고, undici는 목적지당 연결 수 한도가 기본으로 없어 새 연결을 계속 열기 때문이다",
      "http.globalAgent의 maxSockets가 무제한이기 때문이다",
    ],
    answer: 2,
    explanation:
      "읽지 않은 응답은 가비지 컬렉션이 치울 때까지 연결을 붙잡는다. undici는 한도가 없으니 기다리지 않고 새로 연다. fetch는 http.Agent를 쓰지 않으므로 globalAgent 설정과는 상관이 없다.",
    anchor: "응답을-읽지-않으면-연결이-돌아오지-않는다",
  },
  {
    id: "nodejs-http-clients-4",
    post: "nodejs-http-clients",
    question:
      "응답하지 않는 서버를 fetch로 불렀더니 요청이 거의 정확히 5분 뒤에 실패했다. 무엇을 뜻하나?",
    choices: [
      "내 코드에 타임아웃이 없어 undici 기본 headersTimeout(300초)에 걸렸다",
      "OS의 TCP 재전송 한도가 5분이다",
      "서버의 requestTimeout 기본값 5분이 클라이언트에 적용됐다",
      "AbortSignal.timeout의 기본값이 5분이다",
    ],
    answer: 0,
    explanation:
      "fetch에는 timeout 옵션이 없고, undici 기본 에이전트가 응답 헤더를 300초까지 기다린다. 서비스에는 너무 길어서 요청마다 AbortSignal.timeout으로 전체 한도를 건다. AbortSignal.timeout에는 기본값이 없다.",
    anchor: "기다림에-한도를-건다",
  },
  {
    id: "nodejs-http-clients-5",
    post: "nodejs-http-clients",
    question:
      "fetch가 TypeError: fetch failed만 던져서 로그로는 원인을 알 수 없다. 진짜 원인은 어디서 보나?",
    choices: [
      "err.stack의 첫 줄",
      "err.cause의 code와 syscall",
      "res.status",
      "process.exitCode",
    ],
    answer: 1,
    explanation:
      "fetch는 네트워크 에러를 모두 같은 TypeError로 감싸고 실제 시스템 에러를 cause에 넣는다. ECONNREFUSED와 connect, ENOTFOUND와 getaddrinfo처럼 cause를 봐야 갈린다. 연결 실패라 응답 객체는 없다.",
    anchor: "fetch는-undici다",
  },
  {
    id: "nodejs-http-clients-6",
    post: "nodejs-http-clients",
    question:
      "요청 함수 안에서 매번 axios.create({ httpsAgent: new https.Agent({ keepAlive: true }) })를 부르는 코드가 있다. 무엇이 문제인가?",
    choices: [
      "axios는 keepAlive 에이전트를 받을 수 없다",
      "https.Agent는 요청이 끝나면 프로세스를 종료시킨다",
      "인터셉터가 두 번씩 실행된다",
      "요청마다 연결 풀이 새로 생겨 다시 쓸 연결이 없으니 keep-alive가 의미 없어진다",
    ],
    answer: 3,
    explanation:
      "연결은 에이전트 안의 풀에 있어서 에이전트를 매번 만들면 매번 빈 풀에서 시작한다. 그러면 요청마다 새 연결과 TIME-WAIT가 생긴다. 클라이언트와 에이전트는 모듈 수준에서 한 번 만들어 재사용한다.",
    anchor: "현장에서-http-클라이언트를-의심하는-순간",
  },
];
