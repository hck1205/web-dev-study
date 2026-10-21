import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_CONTEXT_WINDOW: QuizQuestion[] = [
  {
    id: "claude-code-context-window-1",
    post: "claude-code-context-window",
    question: "세션 초반에 대화로 말해 둔 테스트 규칙을 두 시간 뒤 Claude가 어긴다. 가장 먼저 의심할 것은?",
    choices: [
      "모델이 세션 도중에 다른 모델로 바뀌었다",
      "자동 압축이 돌면서 그 지시가 요약 속에서 흐려졌다",
      "프롬프트 캐시가 만료되어 규칙이 지워졌다",
      "CLAUDE.md가 압축 때 삭제되었다",
    ],
    answer: 1,
    explanation:
      "창이 한도에 가까워지면 대화가 요약으로 바뀌고, 초반의 세세한 지시는 빠질 수 있다. 캐시 만료는 비용과 속도만 바꾸고 내용은 그대로다. 끝까지 지킬 규칙은 압축 뒤 디스크에서 다시 읽히는 루트 CLAUDE.md에 둔다.",
    anchor: "창이-차면-요약이-대신한다",
  },
  {
    id: "claude-code-context-window-2",
    post: "claude-code-context-window",
    question: "세션 도중 프로젝트 루트 CLAUDE.md에 규칙을 추가했다. 이 규칙이 적용되는 시점은?",
    choices: [
      "파일을 저장하는 즉시",
      "다음 메시지를 보낼 때",
      "/clear, /compact, 재시작 중 하나를 한 뒤",
      "다음 날 자동 메모리가 갱신될 때",
    ],
    answer: 2,
    explanation:
      "루트와 사용자 수준 CLAUDE.md는 세션 시작 때 한 번 읽어 들고 있는다. 고쳐도 캐시는 깨지지 않지만 새 내용도 올라가지 않아서, 다시 읽게 하는 동작이 필요하다.",
    anchor: "요청마다-책상-전체를-다시-보낸다",
  },
  {
    id: "claude-code-context-window-3",
    post: "claude-code-context-window",
    question: "압축이 끝난 직후 다시 원문 그대로 올라오지 않는 것은?",
    choices: [
      "프로젝트 루트 CLAUDE.md",
      "자동 메모리 MEMORY.md",
      "플랜 모드에서 쓴 계획",
      "paths: 조건이 있는 rules 파일",
    ],
    answer: 3,
    explanation:
      "경로 조건이 있는 rules와 하위 폴더 CLAUDE.md는 대화 기록에 올라간 것이라 요약과 함께 사라지고, 그 파일을 다시 건드릴 때 다시 올라온다. 나머지 셋은 압축 직후 디스크에서 다시 읽어 넣는다.",
    anchor: "창이-차면-요약이-대신한다",
  },
  {
    id: "claude-code-context-window-4",
    post: "claude-code-context-window",
    question: "Claude가 Bash로 old.ts를 지우고, Edit 도구로 price.ts를 고친 뒤 /rewind로 코드를 되돌렸다. 결과는?",
    choices: [
      "price.ts만 되돌아오고 old.ts는 지워진 채로 남는다",
      "둘 다 원래대로 돌아온다",
      "둘 다 그대로 남는다",
      "old.ts만 되살아나고 price.ts는 그대로다",
    ],
    answer: 0,
    explanation:
      "체크포인트는 Claude의 파일 편집 도구가 만든 변경만 추적한다. rm, mv 같은 셸 명령으로 바뀐 파일은 되감기로 돌아오지 않으니 git으로 되돌린다.",
    anchor: "되돌리지-못하는-것들",
  },
  {
    id: "claude-code-context-window-5",
    post: "claude-code-context-window",
    question: "파일 30개를 읽어야 하는 조사를 서브에이전트에 맡기면 메인 세션의 컨텍스트에는 무엇이 남나?",
    choices: [
      "읽은 파일 30개의 내용 전부",
      "서브에이전트가 돌려준 요약과 작은 메타데이터",
      "아무것도 남지 않는다",
      "서브에이전트의 시스템 프롬프트 전체",
    ],
    answer: 1,
    explanation:
      "서브에이전트는 자기 컨텍스트 창에서 파일을 읽고, 끝나면 요약만 돌려준다. 그래서 메인 창이 거의 그대로 남는다. 대신 요약에 근거가 없으니 중요한 결론은 파일 경로와 줄 번호를 받아 확인한다.",
    anchor: "조사는-서브에이전트에게-맡긴다",
  },
  {
    id: "claude-code-context-window-6",
    post: "claude-code-context-window",
    question: "잘못된 방향으로 한참 디버깅했고 그 시도는 전부 버리고 싶다. 더 알맞은 선택은?",
    choices: [
      "/compact로 요약해 이어 간다",
      "모델을 바꿔 새 관점으로 이어 간다",
      "/rewind로 그 시도 전 프롬프트까지 되돌린다",
      "CLAUDE.md에 '앞의 시도는 무시하라'고 적는다",
    ],
    answer: 2,
    explanation:
      "압축은 실패한 시도까지 요약에 담아 새 prefix를 만들지만, 되감기는 그 시도를 지우고 이미 캐시된 앞부분으로 돌아간다. 모델을 바꾸면 캐시도 처음부터 다시 쌓인다.",
    anchor: "esc-두-번으로-되돌아가기",
  },
  {
    id: "claude-code-context-window-7",
    post: "claude-code-context-window",
    question: "플랜 모드에 대한 설명으로 맞는 것은?",
    choices: [
      "승인 전에는 셸 명령도 전혀 실행되지 않는다",
      "승인 전에는 소스 편집이 막히지만, 탐색용 셸 명령은 실행될 수 있다",
      "계획은 대화에만 있어서 압축되면 사라진다",
      "플랜 모드는 CLI 플래그로만 켤 수 있다",
    ],
    answer: 1,
    explanation:
      "플랜 모드는 파일을 읽고 탐색 명령을 돌려 계획을 쓰되, 승인 전까지 소스를 고치지 않는다. 명령은 분류기 검토나 확인 창을 거쳐 실행될 수 있어서 샌드박스가 아니다. 계획은 디스크에 저장돼 압축 뒤에도 다시 올라온다.",
    anchor: "손대기-전에-계획부터-받는다",
  },
];
