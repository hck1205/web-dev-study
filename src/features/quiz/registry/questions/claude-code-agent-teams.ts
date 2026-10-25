import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_AGENT_TEAMS: QuizQuestion[] = [
  {
    id: "claude-code-agent-teams-1",
    post: "claude-code-agent-teams",
    question: "서브에이전트와 에이전트 팀을 가르는 가장 큰 구조적 차이는?",
    choices: [
      "서브에이전트는 자기 컨텍스트가 없고 팀원만 따로 컨텍스트를 가진다",
      "서브에이전트는 요약을 부른 쪽에 돌려주고, 팀원은 공유 작업 목록과 직접 메시지로 서로 조율한다",
      "서브에이전트는 다른 모델을 쓸 수 없고 팀원만 모델을 고를 수 있다",
      "팀원은 같은 세션의 대화 이력을 모두 물려받는다",
    ],
    answer: 1,
    explanation:
      "둘 다 자기 컨텍스트 창을 가진다. 차이는 조율 방식이다. 서브에이전트는 메인이 조율하고 결과만 돌려받으며, 팀원은 작업 목록에서 일을 가져가고 리더를 거치지 않고 서로 말한다.",
    anchor: "세-가지-구조",
  },
  {
    id: "claude-code-agent-teams-2",
    post: "claude-code-agent-teams",
    question: "300줄 파일 세 개에서 export 함수를 뽑는 일을 서브에이전트 셋으로 나눴더니 비용이 2배를 넘었다. 주된 이유가 아닌 것은?",
    choices: [
      "서브에이전트마다 시스템 프롬프트와 도구 정의를 새로 싣고 시작한다",
      "서브에이전트는 메인 대화의 캐시를 읽지 못한다",
      "서브에이전트는 항상 Opus로 돌기 때문이다",
      "메인이 받은 결과를 원본과 다시 확인했다",
    ],
    answer: 2,
    explanation:
      "실험은 모두 Haiku로 돌렸으니 모델 탓이 아니다. 시작할 때마다 실리는 고정 비용, 캐시를 못 나누는 점, 결과를 다시 확인하는 조율 비용이 작은 일에서는 나눠서 얻는 시간보다 컸다.",
    anchor: "결과만-필요하면-서브에이전트",
  },
  {
    id: "claude-code-agent-teams-3",
    post: "claude-code-agent-teams",
    question: "claude --bg -p \"리뷰해 줘\"를 실행하면 어떻게 되나?",
    choices: [
      "백그라운드에서 -p 결과를 파일로 남긴다",
      "--bg가 무시되고 일반 -p로 돈다",
      "팀 리더 세션으로 시작한다",
      "세션을 만들기 전에 거부된다. -p는 agent view가 붙을 대화형 세션을 만들지 않기 때문이다",
    ],
    answer: 3,
    explanation:
      "--bg는 대화형 세션을 백그라운드로 보내는 것이라 --print와 함께 쓸 수 없다. 프롬프트는 -p 값이 아니라 위치 인자로 준다. 띄운 세션은 claude agents에서 본다.",
    anchor: "서로-모르는-일은-백그라운드-세션",
  },
  {
    id: "claude-code-agent-teams-4",
    post: "claude-code-agent-teams",
    question: "리더와 한 시간 동안 \"금액은 센트 정수\"를 정했는데 새 팀원이 원 단위로 코드를 짰다. 왜인가?",
    choices: [
      "팀원은 CLAUDE.md와 스킬, 띄우기 프롬프트만 받고 리더의 대화 이력은 받지 않기 때문이다",
      "팀원은 CLAUDE.md를 읽지 않기 때문이다",
      "팀원은 리더와 다른 저장소에서 돌기 때문이다",
      "팀원은 메시지를 받을 수 없기 때문이다",
    ],
    answer: 0,
    explanation:
      "팀원은 일반 세션과 같은 프로젝트 컨텍스트와 리더가 쓴 띄우기 프롬프트로 시작하고 대화 이력은 넘어가지 않는다. 정한 결정은 프롬프트에 적거나 파일로 남겨 먼저 읽게 한다.",
    anchor: "팀원은-리더의-대화를-모른다",
  },
  {
    id: "claude-code-agent-teams-5",
    post: "claude-code-agent-teams",
    question: "api와 ui 팀원이 둘 다 src/types.ts를 고쳐야 한다. 가장 나은 처리는?",
    choices: [
      "둘 다 고치게 두고 나중에 git이 병합하게 한다",
      "팀원을 각자 worktree로 나누는 설정을 켠다",
      "types.ts의 주인을 한 명 정하고, 다른 팀원은 바꿀 내용을 메시지로 요청하게 한다",
      "types.ts를 작업 목록에서 빼고 아무도 고치지 않게 한다",
    ],
    answer: 2,
    explanation:
      "팀원은 같은 작업 폴더를 쓰고 worktree로 나뉘지 않아 동시에 고치면 나중 것이 덮는다. 공유 파일은 주인을 정해 변경을 한곳으로 모은다. 파일을 나눌 수 없는 일이면 팀 대신 세션 하나가 맞다.",
    anchor: "같은-파일을-건드리면",
  },
  {
    id: "claude-code-agent-teams-6",
    post: "claude-code-agent-teams",
    question: "리더를 플랜 모드로 두고 띄운 팀원이 계획을 마쳤다. 팀원의 권한 모드를 따로 바꾸지 않았다면 그 계획은?",
    choices: [
      "리더가 검토한 뒤에만 승인된다",
      "검토 없이 바로 승인되어 팀원이 구현에 들어간다",
      "사람이 승인할 때까지 영원히 기다린다",
      "자동으로 거부되어 팀원이 종료된다",
    ],
    answer: 1,
    explanation:
      "문서 기준으로 띄운 뒤 모드를 바꾸지 않은 팀원의 계획 승인 요청은 Claude Code가 바로 승인한다. 계획을 실제로 검토하려면 그 팀원 화면에서 Shift+Tab으로 플랜 모드를 다시 걸어야 리더가 검토한다. 편집과 명령은 여전히 권한 확인을 거친다.",
    anchor: "사람이-검토할-자리",
  },
  {
    id: "claude-code-agent-teams-7",
    post: "claude-code-agent-teams",
    question: "독립된 작업이 15개 있다. 문서의 권고에 가장 가까운 팀 구성은?",
    choices: [
      "작업마다 팀원 한 명씩 15명",
      "팀원 한 명에 작업 15개",
      "팀원 10명에 Opus, 띄우기 프롬프트에 대화 전체를 붙여 넣기",
      "팀원 3명을 Sonnet으로, 팀원당 작업 5개 정도",
    ],
    answer: 3,
    explanation:
      "토큰은 활성 팀원 수에 거의 비례하고 조율 비용도 늘어난다. 문서는 3~5명으로 시작하고, 작업 15개면 3명이 좋은 출발점이며 팀원당 5~6개가 적당하다고 적는다. 팀원은 Sonnet으로 띄우고 끝나면 종료시킨다.",
    anchor: "리더의-조율-비용과-팀-크기",
  },
];
