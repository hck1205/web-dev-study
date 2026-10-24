import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_HOOKS_DEEP_DIVE: QuizQuestion[] = [
  {
    id: "claude-code-hooks-deep-dive-1",
    post: "claude-code-hooks-deep-dive",
    question: "세션마다 DEPLOY_TARGET=staging을 Claude가 실행하는 Bash에 심고 싶다. 가장 맞는 방법은?",
    choices: [
      "UserPromptSubmit 훅의 additionalContext에 export 문을 적는다",
      "SessionStart 훅에서 CLAUDE_ENV_FILE 경로의 파일에 export 줄을 덧붙인다",
      "PreToolUse 훅에서 매번 updatedInput으로 명령 앞에 export를 붙인다",
      "SessionEnd 훅에서 다음 세션용 변수를 ~/.bashrc에 쓴다",
    ],
    answer: 1,
    explanation:
      "SessionStart 훅은 CLAUDE_ENV_FILE을 받고, 그 파일의 내용은 세션의 Bash 명령마다 먼저 실행된다. additionalContext는 Claude가 읽는 글일 뿐 셸 환경을 바꾸지 않는다. 다른 훅의 줄을 지우지 않게 >>로 덧붙인다.",
    anchor: "손으로-넣던-환경-변수를-sessionstart로",
  },
  {
    id: "claude-code-hooks-deep-dive-2",
    post: "claude-code-hooks-deep-dive",
    question: "기록 훅을 보니 한 턴에 PreToolUse는 있는데 PostToolUse가 없었다. 가장 그럴듯한 이유는?",
    choices: [
      "PostToolUse 훅은 -p 모드에서 불리지 않는다",
      "PostToolUse는 Stop 뒤에 한꺼번에 불린다",
      "매처가 PreToolUse에만 적용되고 PostToolUse에는 적용되지 않는다",
      "PreToolUse가 권한 확인보다 먼저 돌고, 명령이 권한에서 막혀 실행되지 않았다",
    ],
    answer: 3,
    explanation:
      "PreToolUse는 권한 확인 전에 불리므로 막힌 명령에도 기록이 남는다. PostToolUse는 도구가 성공한 뒤에만 온다. 그래서 두 사건의 수가 같다고 가정한 집계는 틀릴 수 있다.",
    anchor: "사건은-이-순서로-온다",
  },
  {
    id: "claude-code-hooks-deep-dive-3",
    post: "claude-code-hooks-deep-dive",
    question: "프롬프트에 섞여 들어온 API 키를 모델에 보내기 전에 지우려고 UserPromptSubmit 훅을 만들려 한다. 이 계획의 문제는?",
    choices: [
      "UserPromptSubmit은 프롬프트를 바꿀 수 없고, 막아도 글이 대화 기록 파일과 입력 기록에 남는다",
      "UserPromptSubmit은 command 타입 훅을 받지 않는다",
      "UserPromptSubmit의 stdout은 모두 버려진다",
      "UserPromptSubmit은 세션당 한 번만 불린다",
    ],
    answer: 0,
    explanation:
      "UserPromptSubmit은 막거나 additionalContext를 덧붙일 수만 있다. 프롬프트를 고쳐 쓰는 필드가 없고, 막더라도 원문은 로컬 파일에 남을 수 있다. 도구로 나가는 값은 PreToolUse의 updatedInput, 도구 결과는 PostToolUse의 updatedToolOutput으로 다룬다.",
    anchor: "stdout으로-돌려주는-json",
  },
  {
    id: "claude-code-hooks-deep-dive-4",
    post: "claude-code-hooks-deep-dive",
    question: "timeout: 3을 준 UserPromptSubmit 훅이 5초 걸렸다. 기본 동작은?",
    choices: [
      "프롬프트가 막히고 사용자에게 오류가 뜬다",
      "훅이 끝날 때까지 기다린 뒤 컨텍스트를 붙여 보낸다",
      "훅 출력이 버려지고 프롬프트는 컨텍스트 없이 그대로 간다",
      "세션이 종료된다",
    ],
    answer: 2,
    explanation:
      "시간을 넘긴 훅은 취소되고 출력도 버려지며, 동작은 그대로 진행된다. 실험에서도 당번 정보가 빠진 채 질문이 가서 Claude가 UNKNOWN이라고 답했다. 정책 검사 훅이라면 onFailure: \"block\"으로 실패 시 막게 한다.",
    anchor: "느린-훅은-세션을-멈춘다",
  },
  {
    id: "claude-code-hooks-deep-dive-5",
    post: "claude-code-hooks-deep-dive",
    question: "stop_hook_active 검사 없이 늘 block하는 Stop 훅을 걸었더니 Stop이 9번이 아니라 18번 불렸다. 왜인가?",
    choices: [
      "상한이 8이 아니라 16이기 때문이다",
      "연속 이어 붙인 횟수가 Claude가 도구를 부를 때마다 0으로 돌아가기 때문이다",
      "-p 모드에서는 상한이 두 배가 되기 때문이다",
      "Stop 훅이 두 개 등록되어 있었기 때문이다",
    ],
    answer: 1,
    explanation:
      "Claude Code는 도구 없이 연달아 8번 이어 붙이면 턴을 끝낸다. 그런데 Claude가 원인을 찾으려고 Bash를 부르자 카운트가 초기화되어 다시 쌓였다. 상한에 기대지 말고 stop_hook_active를 확인해야 한다.",
    anchor: "stop-훅이-끝나지-않을-때",
  },
  {
    id: "claude-code-hooks-deep-dive-6",
    post: "claude-code-hooks-deep-dive",
    question: "\".env 내용을 출력하는 명령은 막아라\"를 prompt 훅으로 걸었더니 wc -l .env는 통과했다. 이 결과가 보여 주는 prompt 훅의 성격은?",
    choices: [
      "prompt 훅은 Bash 매처에서 동작하지 않는다",
      "prompt 훅은 항상 허용으로 넘어진다",
      "prompt 훅은 PreToolUse에서 ok: false를 무시한다",
      "모델이 규칙의 의도를 읽고 판단하므로 유연하지만, 같은 입력에 늘 같은 답을 낸다는 보장이 없다",
    ],
    answer: 3,
    explanation:
      "wc -l은 파일을 읽지만 내용은 출력하지 않아 모델이 허용했다. 정규식이었다면 .env가 들어간 명령을 모두 막았을 것이다. 반드시 지킬 경계는 deny 규칙과 command 훅에 두고 prompt 훅은 글을 읽고 판단할 곳에 쓴다.",
    anchor: "command-prompt-agent-훅",
  },
  {
    id: "claude-code-hooks-deep-dive-7",
    post: "claude-code-hooks-deep-dive",
    question: "훅 JSON을 돌려줬는데 아무 효과가 없다. 디버그 로그에 \"Hook output does not start with {\"가 보인다. 원인은?",
    choices: [
      "stdout에 JSON 말고 다른 글(셸 인사말 등)이 먼저 찍혔다",
      "종료 코드를 2로 끝내야 JSON이 읽힌다",
      "suppressOutput을 true로 주지 않았다",
      "JSON은 stderr로 보내야 한다",
    ],
    answer: 0,
    explanation:
      "JSON 판정은 stdout에 객체 하나만 있을 때 읽힌다. 앞에 다른 글이 섞이면 일반 텍스트로 처리된다. JSON으로 판정할 때는 0으로 끝내고, suppressOutput은 받기만 하고 효과가 없다.",
    anchor: "훅이-안-먹을-때-보는-순서",
  },
];
