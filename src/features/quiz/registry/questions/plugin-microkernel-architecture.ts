import type { QuizQuestion } from "../types";

export const PLUGIN_MICROKERNEL_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "plugin-microkernel-architecture-1",
    post: "plugin-microkernel-architecture",
    question: "플러그인에 코어 내부 객체를 통째로 넘기지 않고 좁은 api 객체만 넘기는 가장 큰 이유는?",
    choices: [
      "객체를 넘길 때 복사 비용이 줄어서",
      "플러그인이 쓰는 필드가 사실상 공개 API가 되어 코어를 리팩터링할 수 없게 되는 것을 막으려고",
      "플러그인이 코어보다 먼저 로딩되는 것을 막으려고",
      "자바스크립트에서는 내부 객체를 다른 모듈에 넘길 수 없어서",
    ],
    answer: 1,
    explanation:
      "플러그인에 넘긴 것은 무엇이든 플러그인이 쓰기 시작하고, 쓰이는 순간 계약이 된다. 좁은 api 객체만 넘기면 코어 내부 구조를 바꿔도 플러그인은 모른다. 복사 비용은 같은 프로세스 안에서는 거의 문제가 되지 않는다.",
    anchor: "작은-마크다운-도구로-만들어-보기",
  },
  {
    id: "plugin-microkernel-architecture-2",
    post: "plugin-microkernel-architecture",
    question: "렌더 훅을 폭포수형(앞 플러그인의 결과를 다음 플러그인이 받는 방식)으로 만들면 생기기 쉬운 문제는?",
    choices: [
      "플러그인이 반환값을 돌려줄 수 없다",
      "모든 플러그인이 병렬로 돌아 결과가 섞인다",
      "플러그인 순서에 따라 결과가 달라져, 순서를 정하지 않으면 설치 순서가 버그를 만든다",
      "한 플러그인이 값을 돌려주면 나머지가 실행되지 않는다",
    ],
    answer: 2,
    explanation:
      "폭포수형은 앞 결과가 다음 입력이 되므로 순서가 결과를 바꾼다. 그래서 Vite의 enforce처럼 순서를 드러난 설정으로 만든다. 값을 돌려주면 멈추는 건 먼저 답한 쪽이 이기는 형(bail)이다.",
    anchor: "훅은-부르는-방식이-여러-가지다",
  },
  {
    id: "plugin-microkernel-architecture-3",
    post: "plugin-microkernel-architecture",
    question: "VS Code가 시작할 때 확장 코드를 바로 실행하지 않고 매니페스트만 읽는 이유는?",
    choices: [
      "확장이 수십 개여도 쓰지 않는 확장 코드를 돌리지 않아 시작이 빨라지도록",
      "확장 코드가 서명 검증을 통과해야만 실행할 수 있어서",
      "매니페스트를 읽어야 확장의 의존을 설치할 수 있어서",
      "확장 호스트 프로세스가 에디터보다 늦게 떠서",
    ],
    answer: 0,
    explanation:
      "매니페스트의 contributes로 메뉴와 명령을 먼저 그리고, activationEvents 조건이 생길 때 처음 코드를 불러온다. 늦게 깨우기 덕분에 쓰지 않는 확장은 메모리에 올라오지 않는다. 대신 처음 쓰는 순간 활성화 시간이 붙는다.",
    anchor: "발견하고-늦게-깨운다",
  },
  {
    id: "plugin-microkernel-architecture-4",
    post: "plugin-microkernel-architecture",
    question: "ESLint 플러그인이 eslint를 dependencies가 아니라 peerDependencies로 선언하는 이유로 가장 알맞은 것은?",
    choices: [
      "peerDependencies는 설치가 더 빨라서",
      "플러그인이 eslint 없이도 혼자 돌 수 있게 하려고",
      "dependencies에는 버전 범위를 적을 수 없어서",
      "사용자 프로젝트에 깔린 그 코어에 끼워져야 해서, 코어 사본이 두 벌 깔리는 것을 피하려고",
    ],
    answer: 3,
    explanation:
      "플러그인이 코어를 일반 의존으로 들고 오면 코어가 중복 설치될 수 있고, 레지스트리나 instanceof 검사가 서로 다른 사본을 보게 된다. peer로 두면 맞는 범위만 선언하고 실제 코어는 사용자 쪽 것을 쓴다.",
    anchor: "계약의-판을-어떻게-올리나",
  },
  {
    id: "plugin-microkernel-architecture-5",
    post: "plugin-microkernel-architecture",
    question: "react가 typescript와 eslint에, prettier가 eslint에 의존할 때 순환이 있는 경우 코어가 해야 할 일은?",
    choices: [
      "이름순으로 아무 쪽이나 먼저 올린다",
      "순서를 정할 수 없으니 로딩 전에 거부한다",
      "순환하는 플러그인을 동시에 활성화한다",
      "나중에 설치된 플러그인을 먼저 올린다",
    ],
    answer: 1,
    explanation:
      "위상 정렬은 순환이 있으면 순서를 만들 수 없다. 억지로 한쪽을 먼저 올리면 그 플러그인이 아직 없는 상대를 부르다 실패한다. 그래서 로딩 전에 순환과 없는 의존을 찾아 거부한다.",
    anchor: "플러그인이-다른-플러그인을-필요로-할-때",
  },
  {
    id: "plugin-microkernel-architecture-6",
    post: "plugin-microkernel-architecture",
    question: "플러그인을 워커로 떼면서 호출마다 워커를 새로 띄우지 않고 오래 살려 두는 이유는?",
    choices: [
      "워커는 한 번 종료하면 다시 만들 수 없어서",
      "워커를 오래 살려야 권한이 제한되어서",
      "워커 기동 비용(실험에서 약 67ms)이 메시지 왕복(약 24us)보다 훨씬 커서",
      "워커를 새로 띄우면 메인 스레드가 멈춰서",
    ],
    answer: 2,
    explanation:
      "같은 컨테이너에서 호출마다 워커를 띄우면 중간값 67ms였고, 띄워 둔 워커와 메시지만 주고받으면 24us였다. 그래서 VS Code의 확장 호스트처럼 오래 사는 프로세스를 두고 메시지로 대화한다. 워커로 떼어도 파일·네트워크 권한은 그대로라 권한 격리는 별개의 문제다.",
    anchor: "느린-플러그인-하나가-전체를-멈춘다",
  },
  {
    id: "plugin-microkernel-architecture-7",
    post: "plugin-microkernel-architecture",
    question: "리눅스 커널 모듈이 실행 중에 넣고 뺄 수 있는데도 마이크로커널 구조가 아니라고 하는 이유는?",
    choices: [
      "모듈이 커널과 같은 주소 공간에서 돌아, 잘못된 모듈이 커널 전체를 멈출 수 있어서",
      "모듈은 C로만 작성해야 해서",
      "모듈은 재부팅해야만 적용되어서",
      "리눅스 모듈은 사용자 공간 프로세스라서 IPC 비용이 커서",
    ],
    answer: 0,
    explanation:
      "마이크로커널은 드라이버와 파일 시스템을 사용자 공간의 별도 프로세스로 빼서 하나가 죽어도 커널이 산다. 리눅스 모듈은 커널 공간에서 함께 돌아 격리가 없다. 꽂을 수 있느냐가 아니라 떼어져 있느냐가 차이다.",
    anchor: "운영체제의-마이크로커널과-같은-이름인-이유",
  },
];
