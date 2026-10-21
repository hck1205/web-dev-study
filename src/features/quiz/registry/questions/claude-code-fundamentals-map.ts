import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_FUNDAMENTALS_MAP: QuizQuestion[] = [
  {
    id: "claude-code-fundamentals-map-1",
    post: "claude-code-fundamentals-map",
    question: "Claude가 .env를 절대 읽지 못하게 하고 싶다. 가장 알맞은 곳은?",
    choices: [
      "CLAUDE.md에 '읽지 마라'라고 적는다",
      "스킬 설명에 적어 둔다",
      "권한 deny 규칙이나 PreToolUse 훅으로 막는다",
      "/goal 조건에 넣는다",
    ],
    answer: 2,
    explanation:
      "CLAUDE.md는 모델이 참고하는 지시라서 판단에 따라 어기거나 압축 뒤에 흐려질 수 있다. 권한 규칙과 PreToolUse 훅은 클라이언트가 도구 호출 자체를 막으므로 모델의 판단과 상관없다.",
    anchor: "어떤-카드를-꺼낼까",
  },
  {
    id: "claude-code-fundamentals-map-2",
    post: "claude-code-fundamentals-map",
    question: "그림의 Routines 카드를 공식 문서와 맞춰 보면 맞는 설명은?",
    choices: [
      "지금은 cloud scheduled tasks라고 부르고, 최소 간격이 1시간이다",
      "세션이 열려 있는 동안만 도는 /loop의 다른 이름이다",
      "내 컴퓨터의 커밋 안 한 파일까지 보고 일한다",
      "정각 9:00에 정확히 실행되도록 보장한다",
    ],
    answer: 0,
    explanation:
      "Routines는 cloud scheduled tasks의 예전 이름이고 research preview다. 클라우드에서 저장소를 새로 clone해 돌고 최소 간격은 1시간이다. 정각에 걸면 몇 분 늦을 수 있어 문서는 9:07처럼 비켜 걸라고 한다.",
    anchor: "열두-장을-문서에-맞춰-보면",
  },
  {
    id: "claude-code-fundamentals-map-3",
    post: "claude-code-fundamentals-map",
    question: "프로젝트 구조 그림의 .claude/hooks/에 validate-bash.sh를 넣기만 했다. 무슨 일이 생기나?",
    choices: [
      "모든 Bash 명령 전에 자동으로 돈다",
      "세션을 다시 열면 자동으로 등록된다",
      "Stop 이벤트에서만 돈다",
      "settings.json의 hooks 키에 등록하기 전에는 아무 일도 없다",
    ],
    answer: 3,
    explanation:
      "hooks/는 정해진 폴더가 아니라 스크립트를 두는 관례일 뿐이다. 훅은 settings.json의 hooks 키에 이벤트와 매처, 명령을 등록해야 돈다. 스크립트 위치는 어디든 상관없다.",
    anchor: "열두-장을-문서에-맞춰-보면",
  },
  {
    id: "claude-code-fundamentals-map-4",
    post: "claude-code-fundamentals-map",
    question: "열두 카드 대부분이 생겨난 공통의 제약으로 가장 알맞은 것은?",
    choices: [
      "모델의 응답 속도",
      "컨텍스트 창의 크기와, 창이 찰수록 떨어지는 품질",
      "git 저장소의 크기",
      "API 호출 횟수 제한",
    ],
    answer: 1,
    explanation:
      "스킬은 본문을 필요할 때만 올리고, 서브에이전트는 창을 따로 쓰고, 되감기와 플랜 모드는 실패한 시도로 창을 채우지 않게 한다. 모두 모델이 요청에 실린 것만 보고 창이 차면 압축된다는 사실에서 나온다.",
    anchor: "카드들을-한-장에-겹쳐-보기",
  },
  {
    id: "claude-code-fundamentals-map-5",
    post: "claude-code-fundamentals-map",
    question: "그림의 '설정·규칙·스킬을 불러오고 → … → 훅을 돌린다'를 실제 동작으로 읽으면?",
    choices: [
      "다섯 단계가 세션 시작 때 한 번씩 순서대로 끝난다",
      "훅은 세션 마지막에 한 번만 돈다",
      "일부는 시작 때 깔리고, 스킬 본문·경로 조건 rules·훅은 일하는 내내 그때그때 일어난다",
      "MCP 도구 정의 전체가 시작 때 모두 올라간다",
    ],
    answer: 2,
    explanation:
      "시작할 때는 설정의 층, 위 폴더의 CLAUDE.md, 스킬 설명, MCP 도구 이름이 깔린다. 스킬 본문과 경로 조건 rules, MCP 도구 정의는 필요할 때 올라오고, 훅은 SessionStart, 도구 호출, 턴 종료처럼 이벤트마다 돈다.",
    anchor: "열두-장을-문서에-맞춰-보면",
  },
  {
    id: "claude-code-fundamentals-map-6",
    post: "claude-code-fundamentals-map",
    question: "매번 하는 대규모 코드 조사가 내 컨텍스트를 가득 채운다. 가장 먼저 꺼낼 카드는?",
    choices: [
      "서브에이전트에 맡긴다",
      "CLAUDE.md에 조사 결과를 붙여 둔다",
      "/loop로 나눠 돌린다",
      "아티팩트로 올린다",
    ],
    answer: 0,
    explanation:
      "서브에이전트는 자기 컨텍스트 창에서 파일을 읽고 요약만 돌려주므로 내 창이 거의 그대로 남는다. 같은 절차를 자주 하면 그 절차를 스킬로 만들어 서브에이전트에서 돌리게 할 수도 있다.",
    anchor: "어떤-카드를-꺼낼까",
  },
];
