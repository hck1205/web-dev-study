import type { QuizQuestion } from "../types";

export const NODEJS_SERVER_RUNTIME: QuizQuestion[] = [
  {
    id: "nodejs-server-runtime-1",
    post: "nodejs-server-runtime",
    question: "Node.js 서버에서 TCP 소켓으로 들어오는 요청 데이터를 기다리는 주체는?",
    choices: [
      "libuv 스레드 풀의 스레드 하나가 소켓마다 붙는다",
      "worker_threads가 연결마다 하나씩 생긴다",
      "epoll 같은 OS 알림 기능이 기다리고 메인 스레드가 이벤트를 받는다",
      "V8의 가비지 컬렉션 스레드가 대신 읽는다",
    ],
    answer: 2,
    explanation:
      "네트워크 소켓은 epoll·kqueue 같은 OS 기능으로 스레드 없이 기다린다. 스레드 풀은 파일, dns.lookup, 일부 암호화와 압축처럼 OS 알림으로 기다릴 수 없는 일에 쓴다.",
    anchor: "요청-하나가-node-안에서-지나가는-길",
  },
  {
    id: "nodejs-server-runtime-2",
    post: "nodejs-server-runtime",
    question:
      "코어 4개, 기본 풀 크기에서 300ms짜리 crypto.pbkdf2를 동시에 8개 시작했다. 끝나는 시각은 대략 어떻게 나오나?",
    choices: [
      "8개 모두 300ms 근처에 끝난다",
      "넷은 300ms대, 넷은 600ms대로 두 무리가 된다",
      "300ms씩 밀려 2400ms에 마지막이 끝난다",
      "메인 스레드가 막혀 모두 2400ms에 한꺼번에 끝난다",
    ],
    answer: 1,
    explanation:
      "기본 풀은 스레드 4개라 넷이 먼저 돌고 나머지 넷은 큐에서 기다린다. 한 줄로 300ms씩 밀리는 건 pbkdf2Sync처럼 메인 스레드에서 돌 때의 모습이다.",
    anchor: "풀에-자리가-네-개뿐이다",
  },
  {
    id: "nodejs-server-runtime-3",
    post: "nodejs-server-runtime",
    question:
      "로그인 해시가 몰리자 /file과 외부 API 호출은 0.5초씩 늦는데 /ping과 이벤트 루프 지연은 정상이다. 가장 그럴듯한 원인은?",
    choices: [
      "이벤트 루프가 동기 코드로 막혔다",
      "디스크가 느려졌다",
      "외부 API 서버가 느려졌다",
      "libuv 스레드 풀이 해시로 꽉 차서 파일 읽기와 dns.lookup이 큐에서 기다린다",
    ],
    answer: 3,
    explanation:
      "파일 읽기와 호스트 이름 풀이(dns.lookup)는 해시와 같은 스레드 풀을 쓴다. 루프가 막혔다면 /ping도 같이 늦었을 것이다.",
    anchor: "로그인-때문에-파일-읽기가-느려진다",
  },
  {
    id: "nodejs-server-runtime-4",
    post: "nodejs-server-runtime",
    question: "코어 4개에서 UV_THREADPOOL_SIZE를 4에서 8로 올렸을 때 해시 8개의 결과로 맞는 것은?",
    choices: [
      "마지막 해시가 끝나는 시각은 거의 같고, 대신 모든 해시가 함께 느리게 진행된다",
      "모든 해시가 300ms에 끝나 전체 시간이 절반이 된다",
      "스레드가 늘어 메인 스레드가 막힌다",
      "값이 8이면 풀이 만들어지지 않아 동기로 돈다",
    ],
    answer: 0,
    explanation:
      "CPU를 쓰는 일은 코어 수가 상한이라 스레드를 늘려도 총 시간이 줄지 않는다. 풀을 키워서 얻는 건 짧은 I/O가 긴 계산 뒤에 줄 서지 않는 효과다.",
    anchor: "uv_threadpool_size를-올리면-생기는-일",
  },
  {
    id: "nodejs-server-runtime-5",
    post: "nodejs-server-runtime",
    question: "요청 핸들러에서 crypto.pbkdf2를 crypto.pbkdf2Sync로 바꾸면 어떤 일이 생기나?",
    choices: [
      "풀을 쓰지 않으니 더 빨라진다",
      "해시가 메인 스레드에서 돌아 /ping 같은 모든 요청이 그동안 기다린다",
      "await를 붙이면 다른 스레드로 넘어가므로 차이가 없다",
      "파일 읽기만 느려진다",
    ],
    answer: 1,
    explanation:
      "Sync 버전은 이벤트 루프 위에서 끝까지 돈다. 실험에서는 /ping이 283ms 늦었고 로그인 4개가 300ms씩 한 줄로 밀렸다.",
    anchor: "sync를-붙이면-풀-대신-루프가-막힌다",
  },
  {
    id: "nodejs-server-runtime-6",
    post: "nodejs-server-runtime",
    question: "worker_threads를 요청마다 새로 만들면 생기는 문제로 가장 알맞은 것은?",
    choices: [
      "워커가 메인 스레드의 변수를 공유해 경쟁 상태가 생긴다",
      "워커는 libuv 풀 자리를 차지해 파일 읽기가 막힌다",
      "워커마다 V8과 Node 환경을 새로 만들어 수십 ms와 수십 MB가 든다",
      "워커 안에서는 비동기 API를 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "측정에서 0.5ms짜리 작업에 생성 비용이 40ms 들었다. 그래서 워커는 미리 띄워 재사용하는 풀로 쓴다.",
    anchor: "자바스크립트-계산은-worker_threads로",
  },
  {
    id: "nodejs-server-runtime-7",
    post: "nodejs-server-runtime",
    question: "cluster로 워커 4개를 띄운 뒤 메모리에 둔 '분당 100회' 속도 제한이 실제로는 어떻게 동작하나?",
    choices: [
      "primary가 카운터를 모아 정확히 100회에서 막는다",
      "워커마다 따로 세서 전체로는 최대 400회 가까이 통과한다",
      "카운터가 공유되어 25회에서 막힌다",
      "cluster는 같은 포트를 못 써서 속도 제한이 아예 동작하지 않는다",
    ],
    answer: 1,
    explanation:
      "cluster 워커는 별도 프로세스라 메모리를 공유하지 않는다. 연결이 라운드 로빈으로 나뉘니 각 워커가 따로 100회를 센다. 이런 상태는 Redis 같은 공유 저장소로 옮긴다.",
    anchor: "코어를-다-쓰려면-프로세스를-늘린다",
  },
];
