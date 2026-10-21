import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_PROJECT_STRUCTURE: QuizQuestion[] = [
  {
    id: "claude-code-project-structure-1",
    post: "claude-code-project-structure",
    question: "팀이 .env 파일을 Claude Code가 절대 읽지 못하게 하고 싶다. 어디에 적어야 하나?",
    choices: [
      "CLAUDE.md에 \"`.env`는 읽지 마라\"라고 굵게 적는다",
      ".claude/rules/security.md에 paths 없이 같은 문장을 적는다",
      ".claude/settings.json의 permissions.deny에 Read(./.env)를 넣는다",
      "CLAUDE.local.md에 적어 내 세션에서만 지키게 한다",
    ],
    answer: 2,
    explanation:
      "CLAUDE.md와 rules는 모델이 참고하는 컨텍스트라 지켜진다는 보장이 없다. 권한 규칙은 Claude Code 클라이언트가 모델의 판단과 상관없이 적용하므로, 반드시 막아야 하는 것은 deny 규칙이나 PreToolUse 훅으로 건다.",
    anchor: "글로-부탁하는-것과-클라이언트가-막는-것",
  },
  {
    id: "claude-code-project-structure-2",
    post: "claude-code-project-structure",
    question:
      "저장소 루트 CLAUDE.md에는 \"npm을 쓴다\", api/CLAUDE.md에는 \"pnpm을 쓴다\"가 있다. api/에서 claude를 띄우면?",
    choices: [
      "작업 디렉터리에 가까운 api/CLAUDE.md가 루트 파일을 덮어써서 pnpm만 남는다",
      "두 파일이 모두 이어 붙어 들어가고, 어느 쪽을 따를지는 모델의 판단이라 충돌을 정리해야 한다",
      "루트 파일이 우선이라 npm만 남는다",
      "충돌을 감지하면 Claude Code가 시작을 멈추고 오류를 낸다",
    ],
    answer: 1,
    explanation:
      "CLAUDE.md들은 서로 덮어쓰지 않고 루트 쪽부터 작업 디렉터리 쪽으로 이어 붙는다. 그래서 모순되는 지시가 둘 다 컨텍스트에 있고 모델이 아무거나 고를 수 있으니, 사람이 지시를 정리해야 한다.",
    anchor: "claudemd가-쌓이는-순서",
  },
  {
    id: "claude-code-project-structure-3",
    post: "claude-code-project-structure",
    question:
      "user 설정 allow에 Bash(git log *), project 설정 allow에 Bash(pnpm test *)가 있다. 프로젝트 세션에서 허용되는 것은?",
    choices: [
      "두 규칙 모두. 목록 키는 높은 층이 고르지 않고 모든 층의 항목을 합친다",
      "pnpm test만. project가 user보다 높은 층이라 user의 목록을 대체한다",
      "git log만. 개인 설정이 팀 설정보다 우선한다",
      "둘 다 아니다. allow는 local 설정에만 적을 수 있다",
    ],
    answer: 0,
    explanation:
      "값 하나짜리 키는 관리형 > --settings > local > project > user 순서로 높은 쪽이 이기지만, permissions.allow 같은 배열은 모든 층을 합친다. 그래서 어느 층도 다른 층의 항목을 지우지 못한다.",
    anchor: "settingsjson은-네-겹이다",
  },
  {
    id: "claude-code-project-structure-4",
    post: "claude-code-project-structure",
    question:
      "deny에 Bash(git push *), allow에 Bash(git push origin feature)가 있다. Claude가 git push origin feature를 실행하려 하면?",
    choices: [
      "더 구체적인 allow가 이겨서 묻지 않고 실행된다",
      "allow와 deny가 부딪쳐서 매번 사용자에게 묻는다",
      "같은 파일에 있으면 allow, 다른 파일이면 deny가 이긴다",
      "deny가 먼저 맞아서 막힌다. allow로 deny에 예외를 낼 수 없다",
    ],
    answer: 3,
    explanation:
      "권한은 deny → ask → allow 순서로 보고 처음 맞는 규칙이 결과를 정하며, 규칙의 구체성은 순서를 바꾸지 않는다. 예외가 필요하면 deny 규칙 자체를 좁게 다시 쓰거나 훅으로 판단한다.",
    anchor: "허용-확인-거부",
  },
  {
    id: "claude-code-project-structure-5",
    post: "claude-code-project-structure",
    question:
      ".claude/settings.local.json이 이미 커밋된 저장소에서 .gitignore에 그 경로를 추가했다. 왜 여전히 문제가 남나?",
    choices: [
      ".gitignore는 .claude 폴더 안에서 동작하지 않기 때문에",
      "Claude Code가 settings.local.json을 매번 다시 커밋하기 때문에",
      "이미 추적 중인 파일에는 .gitignore가 효과가 없어서, git rm --cached로 추적을 끊어야 하기 때문에",
      "전역 제외 파일이 .gitignore보다 우선해서 규칙이 무시되기 때문에",
    ],
    answer: 2,
    explanation:
      "무시 규칙은 추적되지 않은 파일에만 적용된다. 그래서 git check-ignore도 아무것도 출력하지 않고, --no-index를 붙여야 규칙이 맞는다는 것이 드러난다. git rm --cached로 추적만 끊으면 디스크의 파일은 남는다.",
    anchor: "저장소에-올릴-것과-내-컴퓨터에-둘-것",
  },
  {
    id: "claude-code-project-structure-6",
    post: "claude-code-project-structure",
    question:
      "CI에서 남이 만든 저장소에 claude -p를 돌리려 한다. 대화형 세션과 비교해 가장 주의할 점은?",
    choices: [
      "claude -p는 CLAUDE.md를 읽지 않아서 지시가 빠진다",
      "신뢰 확인 창이 없어서 폴더를 신뢰한 것으로 치고, 저장소의 훅이 돌고 .mcp.json 서버가 묻지 않고 붙는다",
      "claude -p는 deny 규칙을 무시하고 모든 도구를 허용한다",
      "claude -p는 사용자 설정만 읽어서 저장소 설정이 아예 적용되지 않는다",
    ],
    answer: 1,
    explanation:
      "대화형 세션은 신뢰 전에는 설정 파일의 훅을 돌리지 않고 .mcp.json 서버도 승인을 받는다. claude -p와 SDK는 확인 창이 없어서 이 단계를 건너뛰므로, --setting-sources user, --bare, --settings로 disableAllHooks를 주는 식으로 미리 막는다.",
    anchor: "남이-만든-저장소를-열-때",
  },
  {
    id: "claude-code-project-structure-7",
    post: "claude-code-project-structure",
    question:
      "팀 .mcp.json에 Authorization: Bearer ${ANTHROPIC_API_KEY}를 적었더니 서버가 401을 돌려준다. 이유는?",
    choices: [
      ".mcp.json은 환경 변수 확장을 지원하지 않아서 글자 그대로 보내기 때문에",
      "ANTHROPIC_API_KEY는 settings.json의 env 블록에만 적을 수 있기 때문에",
      "http 서버는 headers 필드를 읽지 않기 때문에",
      "원격 서버의 url과 headers에서는 Claude Code 자신의 키 같은 자격 증명 변수를 일부러 빈 값으로 읽기 때문에",
    ],
    answer: 3,
    explanation:
      "남의 저장소가 .mcp.json으로 내 자격 증명을 자기 서버로 보내지 못하게, 원격 서버의 url·headers에서는 ANTHROPIC_API_KEY, HTTPS_PROXY 같은 이름이 빈 값이 된다. 다른 이름의 변수는 그대로 확장되므로 키를 넘겨야 하면 직접 지은 이름에 옮겨 담는다.",
    anchor: "팀이-함께-쓰는-mcp-서버",
  },
];
