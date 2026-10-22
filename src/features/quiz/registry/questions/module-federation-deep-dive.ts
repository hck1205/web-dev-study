import type { QuizQuestion } from "../types";

export const MODULE_FEDERATION_DEEP_DIVE: QuizQuestion[] = [
  {
    id: "module-federation-deep-dive-1",
    post: "module-federation-deep-dive",
    question:
      "셸에 정적 remotes로 리모트 두 개를 적었다. 그중 하나의 CDN이 연결은 받아 놓고 응답을 주지 않는다. webpack 5 기본 설정이라면 어떻게 되나?",
    choices: [
      "그 리모트 영역만 비고 셸은 바로 뜬다",
      "셸 전체가 약 120초 동안 그려지지 않다가 그 영역만 대체 화면으로 뜬다",
      "브라우저가 즉시 ChunkLoadError를 던지고 페이지가 하얗게 남는다",
      "다른 리모트의 React를 빌려 와서 정상적으로 뜬다",
    ],
    answer: 1,
    explanation:
      "정적 리모트의 진입 파일은 공유 스코프 초기화 단계에서 받기 때문에, 그 요청이 끝나지 않으면 React를 쓰는 셸 코드도 실행되지 않는다. chunkLoadTimeout 기본값 120000ms가 지나야 실패로 처리된다. 연결 거부처럼 바로 실패하는 경우와 달리 매달리는 경우가 더 위험하다.",
    anchor: "리모트가-죽었을-때와-멈췄을-때",
  },
  {
    id: "module-federation-deep-dive-2",
    post: "module-federation-deep-dive",
    question:
      "셸은 React 18.2.0, 리모트 catalog는 React 18.3.1을 들고 와서 둘 다 singleton으로 공유한다. 아직 아무 버전도 받지 않았을 때 페이지에서 쓰이는 React는?",
    choices: [
      "셸이 우선이라 18.2.0",
      "먼저 등록된 쪽이라 실행마다 다르다",
      "가장 높은 버전인 catalog의 18.3.1이고, 그 청크도 catalog 서버에서 받는다",
      "두 버전이 각자 하나씩 뜬다",
    ],
    answer: 2,
    explanation:
      "singleton 선택 규칙은 이미 loaded인 버전이 없으면 후보 중 가장 높은 버전을 고르고, 셸인지 리모트인지는 따지지 않는다. 실험에서도 셸 제목에 18.3.1이 찍혔고 React 청크가 catalog 서버에서 내려왔다.",
    anchor: "어느-react가-이기는가",
  },
  {
    id: "module-federation-deep-dive-3",
    post: "module-federation-deep-dive",
    question: "리모트가 페이지의 React 버전을 바꾸지 못하게 하려면 리모트의 shared 설정에 무엇을 주나?",
    choices: [
      "import: false",
      "eager: true",
      "strictVersion: true",
      "requiredVersion: false",
    ],
    answer: 0,
    explanation:
      "import: false는 그 패키지를 리모트 번들에 넣지 않고 공유 스코프에 있는 것만 쓰게 한다. 후보로 올라가지 않으니 셸의 버전이 쓰인다. 대신 리모트를 단독으로 띄울 때 React를 넣어 줄 쪽이 없어 별도 설정이 필요하다.",
    anchor: "어느-react가-이기는가",
  },
  {
    id: "module-federation-deep-dive-4",
    post: "module-federation-deep-dive",
    question:
      "콘솔에 `Unsatisfied version 18.3.1 from host of shared singleton module react (required ^17.0.0)`이 찍혔다. 이 리모트는 지금 어떤 상태인가?",
    choices: [
      "React 17 사본을 따로 띄워 쓰고 있다",
      "로드에 실패해서 Error Boundary가 잡았다",
      "빌드가 실패해서 옛 버전이 떠 있다",
      "원하는 범위 밖이지만 셸이 올린 18.3.1을 그대로 쓰며 실행 중이다",
    ],
    answer: 3,
    explanation:
      "singleton 범위 불일치는 기본적으로 경고만 내고 고른 버전을 쓴다. 그래서 겉으로는 멀쩡해 보여도 17의 동작에 기대는 코드라면 조용히 어긋날 수 있다. 에러로 바꾸려면 strictVersion: true를 준다.",
    anchor: "경고-한-줄을-뜯어-읽기",
  },
  {
    id: "module-federation-deep-dive-5",
    post: "module-federation-deep-dive",
    question:
      "리모트 package.json에 \"react\": \"18.2.0\"으로 정확한 버전이 적혀 있고, shared에 requiredVersion을 쓰지 않았다. 셸이 React 18.3.1을 제공하면?",
    choices: [
      "requiredVersion이 없으니 검사하지 않는다",
      "required =18.2.0으로 추론되어 범위 불일치 경고가 뜬다",
      "^18.2.0으로 추론되어 아무 일도 없다",
      "빌드 단계에서 에러가 난다",
    ],
    answer: 1,
    explanation:
      "requiredVersion을 생략하면 webpack은 package.json의 의존성 문자열을 그대로 범위로 쓴다. 정확한 버전이면 =18.2.0이 되어 패치만 달라도 경고가 뜬다. 버전을 고정하는 저장소라면 shared마다 범위를 직접 적는다.",
    anchor: "경고-한-줄을-뜯어-읽기",
  },
  {
    id: "module-federation-deep-dive-6",
    post: "module-federation-deep-dive",
    question: "셸의 eager consumption 에러를 bootstrap 대신 eager: true로 고칠 때 생기는 대가로 가장 알맞은 것은?",
    choices: [
      "리모트를 더 이상 불러올 수 없다",
      "React가 두 개 뜬다",
      "공유 모듈이 진입 파일에 들어가 초기 청크가 커지고, 협상 없이 그 버전으로 고정된다",
      "strictVersion이 강제로 켜진다",
    ],
    answer: 2,
    explanation:
      "eager 모듈은 초기 청크에 들어가 바로 실행되니 기다릴 필요가 없지만, 실험에서 진입 파일이 8KB에서 148KB로 커졌다. 이미 실행된 버전이라 리모트가 더 맞는 버전을 들고 와도 고를 여지가 없다.",
    anchor: "eager가-필요한-순간과-그-값",
  },
  {
    id: "module-federation-deep-dive-7",
    post: "module-federation-deep-dive",
    question: "정적 리모트 구성에서 첫 화면까지 걸리는 시간을 가장 싸게 줄이는 방법은?",
    choices: [
      "리모트 진입 파일을 1년 캐시한다",
      "모든 라이브러리를 shared에 넣는다",
      "chunkLoadTimeout을 늘린다",
      "자주 가는 경로의 리모트 진입 파일을 HTML에서 preload한다",
    ],
    answer: 3,
    explanation:
      "main.js를 받아야 진입 파일 주소를 아는 왕복 하나를 preload가 없앤다. 실험에서 중앙값이 533ms에서 459ms로 줄었다. 진입 파일을 길게 캐시하면 배포가 반영되지 않는 다른 사고가 난다.",
    anchor: "요청이-몇-번-왕복하는가",
  },
];
