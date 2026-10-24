import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_CLI_AND_SESSIONS: QuizQuestion[] = [
  {
    id: "claude-code-cli-and-sessions-1",
    post: "claude-code-cli-and-sessions",
    question:
      "어제 저장소 루트에서 하던 대화를 이어 가려고 오늘 src/ 폴더 안에서 claude -c를 쳤더니 새 대화가 열렸다. 가장 그럴듯한 이유는?",
    choices: [
      "세션은 하루가 지나면 자동으로 지워진다",
      "세션은 작업 폴더별로 저장되고, -c는 지금 폴더의 가장 최근 세션만 찾는다",
      "-c는 -p와 함께 쓸 때만 동작한다",
      "모델이 어제 대화를 잊어버렸다",
    ],
    answer: 1,
    explanation:
      "세션 파일은 ~/.claude/projects/ 아래 작업 폴더 경로별 폴더에 쌓인다. 하위 폴더에서 켜면 다른 세션 폴더를 보니 이어 갈 세션이 없다. 저장소 루트로 가거나 claude -r로 목록을 보면 된다.",
    anchor: "어제-대화를-다시-여는-법",
  },
  {
    id: "claude-code-cli-and-sessions-2",
    post: "claude-code-cli-and-sessions",
    question: "세션을 이어 간 직후 모델이 밤사이 동료가 고친 coupon.ts를 옛 내용으로 말한다. 왜 그런가?",
    choices: [
      "이어 가기는 저장된 대화 기록을 다시 싣는데, 그 안의 파일 내용은 읽었던 시점의 버전이기 때문이다",
      "Claude Code가 파일을 캐시 디렉터리에 복사해 두고 거기서만 읽기 때문이다",
      "git pull을 하면 세션이 자동으로 포크되기 때문이다",
      "프롬프트 캐시가 디스크의 파일 내용을 덮어쓰기 때문이다",
    ],
    answer: 0,
    explanation:
      "모델이 기억하는 게 아니라 기록 전체를 다음 요청에 다시 보낸다. 기록 속 도구 결과는 어제 읽은 그대로라서 그 뒤의 변경을 모른다. 이어 간 직후 첫 지시로 지금 파일과 git 상태를 다시 읽게 한다.",
    anchor: "이어-가기가-다시-싣는-것과-다시-읽는-것",
  },
  {
    id: "claude-code-cli-and-sessions-3",
    post: "claude-code-cli-and-sessions",
    question: "claude \"테스트 왜 깨지는지 봐 줘\"와 claude -p \"테스트 왜 깨지는지 봐 줘\"의 차이로 맞는 것은?",
    choices: [
      "앞쪽은 세션을 저장하지 않고 뒤쪽만 저장한다",
      "둘은 완전히 같고 -p는 예전 이름일 뿐이다",
      "앞쪽은 대화형 세션을 열어 첫 메시지로 넣고, 뒤쪽은 답을 출력하고 끝나며 확인 창을 띄울 수 없다",
      "뒤쪽은 도구를 절대 쓰지 못한다",
    ],
    answer: 2,
    explanation:
      "앞쪽은 답이 나온 뒤에도 세션이 열려 있고 권한 확인 창도 뜬다. -p는 비대화형이라 허용 도구와 권한 모드를 미리 정해 줘야 한다. -p도 기본으로 세션을 저장해서 나중에 -c로 이어 열 수 있다.",
    anchor: "켜는-방법은-네-가지다",
  },
  {
    id: "claude-code-cli-and-sessions-4",
    post: "claude-code-cli-and-sessions",
    question:
      "방향이 맞는 걸 확인한 뒤 파일 수정은 묻지 않고 받되, 셸 명령은 계속 확인하고 싶다. Shift+Tab으로 맞출 모드는?",
    choices: ["plan", "bypassPermissions", "dontAsk", "acceptEdits"],
    answer: 3,
    explanation:
      "acceptEdits는 파일 수정만 묻지 않고 셸 명령은 여전히 묻는다. plan은 소스를 고치지 않고, bypassPermissions는 셸 명령까지 확인 없이 돌린다. dontAsk는 허용 규칙에 없는 걸 묻지 않고 거부한다.",
    anchor: "권한-모드-얼마나-맡길지-정하는-스위치",
  },
  {
    id: "claude-code-cli-and-sessions-5",
    post: "claude-code-cli-and-sessions",
    question: "세션 중에 ! cat .env로 값을 확인했다. 이 행동의 뒷일로 맞는 것은?",
    choices: [
      "! 명령은 모델을 거치지 않으니 아무 데도 남지 않는다",
      "출력이 대화에 남아 다음 요청부터 모델에 보내지고, 세션 jsonl 파일에도 평문으로 저장된다",
      "Claude Code가 비밀 값을 자동으로 가려서 저장한다",
      "세션 파일은 암호화되어 있어 신경 쓸 필요가 없다",
    ],
    answer: 1,
    explanation:
      "셸 모드는 명령을 직접 돌리지만 출력은 대화에 남아 모델이 볼 수 있다. 세션 파일은 내 계정 전용 권한이지만 평문 JSON Lines다. 노출된 키는 파일을 지워도 노출된 것이니 교체한다.",
    anchor: "입력창에-쓰는-특수-문자-세-개",
  },
  {
    id: "claude-code-cli-and-sessions-6",
    post: "claude-code-cli-and-sessions",
    question:
      "프런트 저장소에서 시작한 세션에 --add-dir ../api를 줬다. api 저장소의 CLAUDE.md 규칙이 적용되지 않는 것 같다. 왜인가?",
    choices: [
      "--add-dir은 접근 범위만 넓히고 더한 폴더의 CLAUDE.md는 기본으로 읽지 않기 때문이다",
      "--add-dir로 더한 폴더는 읽기 전용이라서다",
      "CLAUDE.md는 홈 디렉터리에만 둘 수 있어서다",
      "--add-dir은 plan 모드에서만 동작해서다",
    ],
    answer: 0,
    explanation:
      "더한 폴더는 파일 도구가 읽고 고칠 수 있는 범위에 들어갈 뿐이다. 그 폴더의 CLAUDE.md까지 읽게 하려면 CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1을 켠다. 범위를 넓히는 옵션이니 필요한 폴더만 더한다.",
    anchor: "켜는-방법은-네-가지다",
  },
  {
    id: "claude-code-cli-and-sessions-7",
    post: "claude-code-cli-and-sessions",
    question: "업데이트를 했는데 claude --version이 셸마다 다르게 나온다. claude doctor에서 먼저 확인할 것은?",
    choices: [
      "Organization policy가 로드됐는지",
      "Search가 OK인지",
      "실행 중인 경로와 설치 방식, 그리고 남아 있는 다른 설치본 경고",
      "Remote Control 사용 가능 여부",
    ],
    answer: 2,
    explanation:
      "네이티브 설치와 npm 전역 설치가 함께 남아 있으면 PATH 순서에 따라 다른 버전이 뜬다. doctor는 Running, Path와 함께 남은 설치본을 경고로 알려 준다. 나머지 항목은 버전 차이와 관련이 없다.",
    anchor: "설치가-이상하면-doctor부터",
  },
];
