import type { QuizQuestion } from "../types";

export const NODEJS_DEBUGGING_PROFILING: QuizQuestion[] = [
  {
    id: "nodejs-debugging-profiling-1",
    post: "nodejs-debugging-profiling",
    question:
      "p99가 크게 올랐는데 monitorEventLoopDelay의 p99는 평소와 같다. 다음에 볼 곳으로 가장 알맞은 것은?",
    choices: [
      "CPU 프로파일을 떠서 self time이 큰 함수를 찾는다",
      "DB, 외부 API, 커넥션 풀 대기처럼 이벤트 루프 바깥을 APM span으로 본다",
      "힙 스냅샷을 떠서 늘어난 객체를 찾는다",
      "인스턴스 수를 늘린다",
    ],
    answer: 1,
    explanation:
      "루프 지연이 그대로면 자바스크립트 계산이 루프를 막고 있지 않다는 뜻이다. 요청은 루프 바깥의 무언가를 기다리고 있으니 DB나 외부 호출 구간을 본다. 루프 지연이 튀었을 때 CPU 프로파일로 간다.",
    anchor: "먼저-이벤트-루프가-밀리는지-잰다",
  },
  {
    id: "nodejs-debugging-profiling-2",
    post: "nodejs-debugging-profiling",
    question:
      "--inspect 없이 띄운 운영 Node 프로세스를 재시작하지 않고 DevTools로 들여다보려면?",
    choices: [
      "SIGHUP을 보내 설정을 다시 읽게 한다",
      "SIGTERM을 보내면 인스펙터가 켜진 채로 다시 뜬다",
      "SIGUSR1을 보내 127.0.0.1:9229에 인스펙터를 열고, SSH 터널이나 port-forward로 붙는다",
      "--inspect=0.0.0.0:9229 환경 변수를 주면 실행 중에도 적용된다",
    ],
    answer: 2,
    explanation:
      "Node는 SIGUSR1을 받으면 인스펙터를 루프백에 연다. 원격 서버는 인증이 있는 터널로 노트북까지 끌어와 chrome://inspect로 붙는다. 실행 중인 프로세스의 옵션은 환경 변수로 바뀌지 않는다.",
    anchor: "실행-중인-프로세스에-붙는다-sigusr1",
  },
  {
    id: "nodejs-debugging-profiling-3",
    post: "nodejs-debugging-profiling",
    question: "인스펙터 포트를 0.0.0.0에 열거나 컨테이너 포트로 내보내면 안 되는 가장 큰 이유는?",
    choices: [
      "인스펙터가 켜지면 프로세스가 단일 코어만 쓰게 되기 때문이다",
      "인증 없이 붙은 쪽이 프로세스 안에서 임의 코드를 실행해 비밀을 읽고 명령을 돌릴 수 있기 때문이다",
      "9229 포트가 HTTP 서버 포트와 충돌하기 때문이다",
      "DevTools가 붙으면 GC가 꺼지기 때문이다",
    ],
    answer: 1,
    explanation:
      "인스펙터는 디버깅 프로토콜이라 붙은 쪽에 코드 실행 권한을 준다. 인증도 없다. 그래서 루프백에만 열고 밖에서는 SSH나 kubectl처럼 인증이 있는 터널로 들어간다.",
    anchor: "실행-중인-프로세스에-붙는다-sigusr1",
  },
  {
    id: "nodejs-debugging-profiling-4",
    post: "nodejs-debugging-profiling",
    question:
      "node --cpu-prof로 띄운 서버를 kill -INT로 끝냈는데 .cpuprofile 파일이 생기지 않았다. 이유는?",
    choices: [
      "--cpu-prof는 SIGUSR2를 받아야 파일을 쓴다",
      "--cpu-prof-dir을 주지 않으면 프로파일을 메모리에만 둔다",
      "CPU 사용률이 낮으면 프로파일을 버린다",
      "프로파일은 정상 종료할 때 쓰는데, 핸들러 없는 SIGINT는 기본 동작으로 바로 죽어 쓸 기회가 없다",
    ],
    answer: 3,
    explanation:
      "--cpu-prof는 프로세스가 끝나는 과정에서 파일을 쓴다. 신호의 기본 동작으로 죽으면 그 과정이 없다. 종료 신호 핸들러에서 server.close 후 process.exit를 부르게 하자 파일이 생겼다.",
    anchor: "cpu-프로파일을-뜬다",
  },
  {
    id: "nodejs-debugging-profiling-5",
    post: "nodejs-debugging-profiling",
    question:
      "플레임 그래프에서 HTTP 핸들러 칸은 거의 100% 폭인데 self time은 0에 가깝다. 어떻게 해석하나?",
    choices: [
      "핸들러 자체가 아니라 핸들러가 부른 함수들이 시간을 썼다. self time이 큰 칸을 찾아 고친다",
      "핸들러가 가장 느린 함수이니 핸들러를 먼저 고친다",
      "프로파일이 잘못 뜬 것이니 다시 뜬다",
      "핸들러가 비동기라 시간이 측정되지 않았다",
    ],
    answer: 0,
    explanation:
      "total time은 스택 어딘가에 있던 시간이라 부른 함수까지 포함한다. 핸들러는 늘 스택 아래에 있으니 넓게 보일 뿐이다. 자기 몸에서 쓴 self time이 큰 renderCatalog 같은 칸이 고칠 곳이다.",
    anchor: "플레임-그래프에서-넓은-칸을-찾는다",
  },
  {
    id: "nodejs-debugging-profiling-6",
    post: "nodejs-debugging-profiling",
    question:
      "메모리 한도 1GiB 컨테이너에서 힙이 850MB일 때 힙 스냅샷을 뜨려 한다. 가장 걱정할 일은?",
    choices: [
      "스냅샷 파일에 비밀번호가 평문으로 남아 바로 유출된다",
      "스냅샷을 뜨면 힙이 자동으로 비워진다",
      "뜨는 동안 메인 스레드가 멈추고 힙 크기의 두 배쯤 메모리가 더 필요해 OOM으로 죽을 수 있다",
      "스냅샷은 CPU 프로파일과 함께만 뜰 수 있다",
    ],
    answer: 2,
    explanation:
      "스냅샷은 동기 작업이라 요청 처리가 멈추고, 힙 크기에 비례한 메모리를 더 쓴다. 한도에 가까우면 스냅샷 도중 죽는다. 트래픽을 뺀 한 대에서 뜨거나 --heapsnapshot-near-heap-limit로 죽기 직전을 남긴다.",
    anchor: "메모리가-늘면-힙-스냅샷을-뜬다",
  },
  {
    id: "nodejs-debugging-profiling-7",
    post: "nodejs-debugging-profiling",
    question:
      "APM에서 가벼운 /health 요청이 '앱 안에서 380ms'로 보인다. 그런데 그 핸들러는 아무 일도 안 한다. 무슨 일일 가능성이 큰가?",
    choices: [
      "APM 에이전트가 /health 요청만 느리게 만든다",
      "다른 요청의 무거운 계산이 이벤트 루프를 붙잡아, 그 기다림이 /health의 span에 섞여 들어갔다",
      "/health가 DB를 몰래 부르고 있다",
      "span 시간은 밀리초가 아니라 마이크로초다",
    ],
    answer: 1,
    explanation:
      "자동 계측은 라이브러리 경계에 span을 만들 뿐 루프를 누가 막았는지는 모른다. 루프를 기다린 시간은 그냥 내 요청의 시간으로 보인다. 그래서 APM 옆에 이벤트 루프 지연 지표를 두고, 튀면 CPU 프로파일로 범인을 찾는다.",
    anchor: "apm과-opentelemetry가-주는-것과-못-주는-것",
  },
];
