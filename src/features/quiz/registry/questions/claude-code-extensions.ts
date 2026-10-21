import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_EXTENSIONS: QuizQuestion[] = [
  {
    id: "claude-code-extensions-1",
    post: "claude-code-extensions",
    question:
      "\"끝내기 전에 테스트를 돌려라\"를 CLAUDE.md와 스킬에 적었는데 긴 세션에서 가끔 건너뛴다. 매번 확실히 지키게 하려면?",
    choices: [
      "스킬의 description에 \"반드시\"를 여러 번 넣는다",
      "Stop 훅에서 테스트를 돌리고 실패하면 decision: block을 돌려준다",
      "같은 문장을 rules 폴더에도 복사해 둔다",
      "테스트를 서브에이전트에게 맡기도록 CLAUDE.md에 적는다",
    ],
    answer: 1,
    explanation:
      "CLAUDE.md, rules, 스킬은 모두 모델의 판단을 거치는 컨텍스트라 건너뛸 수 있다. 훅은 사건이 일어날 때마다 Claude Code가 실행하므로, Stop 훅이 테스트 실패를 block으로 돌려주면 Claude가 이어서 고치게 된다.",
    anchor: "누가-방아쇠를-당기나",
  },
  {
    id: "claude-code-extensions-2",
    post: "claude-code-extensions",
    question: "배포 스킬에 disable-model-invocation: true를 넣었다. 무엇이 달라지나?",
    choices: [
      "Claude가 스스로 부르지 못하고, 설명도 컨텍스트에 올라가지 않아 내가 /deploy로 부를 때만 본문이 들어온다",
      "/ 메뉴에서 숨겨지고 Claude만 부를 수 있다",
      "스킬이 서브에이전트에서 따로 실행된다",
      "스킬 안의 Bash 명령이 모두 권한 확인 없이 실행된다",
    ],
    answer: 0,
    explanation:
      "disable-model-invocation은 Claude의 자동 호출을 막고 설명도 컨텍스트에서 뺀다. 부작용이 있는 배포·커밋 같은 절차에 쓴다. / 메뉴에서 숨기고 Claude만 부르게 하는 것은 반대 필드인 user-invocable: false다.",
    anchor: "skillmd-한-장-뜯어보기",
  },
  {
    id: "claude-code-extensions-3",
    post: "claude-code-extensions",
    question:
      "SKILL.md 본문의 !`./scripts/check.sh` 줄에서 스크립트가 문제를 찾아 exit 1로 끝났다. 어떻게 되나?",
    choices: [
      "그 줄만 빈 문자열로 바뀌고 나머지 본문은 Claude에게 간다",
      "Claude가 그 명령을 다시 실행해 보라는 안내를 받는다",
      "스킬 호출 전체가 취소되어 Claude는 본문을 보지 못한다",
      "exit 1은 경고라 출력이 그대로 들어간다",
    ],
    answer: 2,
    explanation:
      "느낌표 명령은 Claude보다 먼저 Claude Code가 실행하고, 명령 하나가 실패하면 스킬 호출 전체가 취소된다. 문제를 찾으면 1로 끝나는 검사 스크립트라면 || true를 붙여 출력이 들어가게 한다.",
    anchor: "skillmd-한-장-뜯어보기",
  },
  {
    id: "claude-code-extensions-4",
    post: "claude-code-extensions",
    question: "코드 리뷰를 code-reviewer 서브에이전트에게 넘기면 메인 대화의 컨텍스트에는 무엇이 남나?",
    choices: [
      "서브에이전트가 읽은 diff와 파일 내용 전체",
      "서브에이전트의 시스템 프롬프트와 도구 목록",
      "아무것도 남지 않는다. 결과는 파일로만 저장된다",
      "서브에이전트가 돌려준 요약",
    ],
    answer: 3,
    explanation:
      "서브에이전트는 자기 컨텍스트 창에서 diff와 파일을 읽고 요약 하나만 돌려준다. 그래서 긴 출력이 메인 컨텍스트를 채우지 않는다. 대신 대화 이력을 모르고 시작하므로 위임 메시지에 필요한 내용이 들어가야 한다.",
    anchor: "서브에이전트는-따로-쓰는-작업-공간",
  },
  {
    id: "claude-code-extensions-5",
    post: "claude-code-extensions",
    question:
      "PreToolUse 훅이 위험한 명령을 찾고 echo \"blocked\" >&2; exit 1 로 끝난다. 결과는?",
    choices: [
      "도구 호출이 막히고 stderr가 Claude에게 간다",
      "막지 않는 오류라 명령은 그대로 실행되고 hook error 알림만 뜬다",
      "사용자에게 허용할지 묻는 창이 뜬다",
      "세션이 멈추고 훅을 고칠 때까지 진행하지 않는다",
    ],
    answer: 1,
    explanation:
      "막는 종료 코드는 2다. 1을 포함한 다른 코드는 막지 않는 오류로 처리되어 호출이 진행된다. 스크립트 경로가 틀려 훅이 못 뜰 때도 마찬가지라, 2.1.295 이상에서는 onFailure: \"block\"을 줄 수 있다.",
    anchor: "훅은-매번-실행된다",
  },
  {
    id: "claude-code-extensions-6",
    post: "claude-code-extensions",
    question:
      "직접 만든 validate-bash.sh가 rm -rf build는 막았지만 bash -c 'rm -rf /'는 통과시켰다. 여기서 얻을 교훈은?",
    choices: [
      "정규식 훅은 흔한 모양을 거르는 안전망일 뿐이라, 꼭 지킬 경계는 샌드박스와 deny 규칙으로 만든다",
      "정규식을 조금 더 고치면 모든 우회를 막을 수 있다",
      "훅 대신 CLAUDE.md에 금지 명령 목록을 적으면 해결된다",
      "PostToolUse 훅으로 옮기면 실행 뒤에 되돌릴 수 있다",
    ],
    answer: 0,
    explanation:
      "명령 글자를 정규식으로 보는 검사는 bash -c, /bin/rm, 나눠 쓴 플래그처럼 모양이 다른 명령을 놓친다. PostToolUse는 이미 실행된 뒤라 되돌리지 못하고, CLAUDE.md는 강제력이 없다. 운영체제 수준의 경계는 샌드박스가 맡는다.",
    anchor: "훅은-매번-실행된다",
  },
  {
    id: "claude-code-extensions-7",
    post: "claude-code-extensions",
    question:
      "남이 만든 저장소에서 claude -p를 돌리려 한다. 확장 쪽에서 신뢰 확인과 상관없이 적용되는 것은?",
    choices: [
      "프로젝트 서브에이전트 앞머리의 hooks",
      "플러그인 서브에이전트의 permissionMode",
      "프로젝트 스킬의 allowed-tools",
      ".claude/settings.json의 permissions.allow",
    ],
    answer: 2,
    explanation:
      "프로젝트 스킬의 allowed-tools는 신뢰하지 않은 폴더의 -p 실행에서도 적용되니 커밋된 스킬을 먼저 읽어야 한다. 프로젝트 서브에이전트 앞머리 훅은 신뢰한 뒤에만 돌고, 플러그인 서브에이전트는 permissionMode를 아예 무시한다.",
    anchor: "남이-만든-확장을-돌리기-전에",
  },
];
