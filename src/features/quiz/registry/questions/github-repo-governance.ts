import type { QuizQuestion } from "../types";

export const GITHUB_REPO_GOVERNANCE: QuizQuestion[] = [
  {
    id: "github-repo-governance-1",
    post: "github-repo-governance",
    question: "팀 규칙으로 'main에는 PR로만 넣는다'를 정하고 각자 pre-push 훅도 깔았다. 그래도 서버의 규칙이 필요한 이유는?",
    choices: [
      "훅은 각자 컴퓨터에 있어서 --no-verify 한 번이면 건너뛰고, 쓰기 권한이 있으면 Git 자체는 푸시를 막지 않기 때문이다",
      "pre-push 훅은 main 브랜치에서는 실행되지 않기 때문이다",
      "GitHub은 훅이 있는 저장소의 푸시를 거절하기 때문이다",
      "훅은 CI가 끝난 뒤에만 실행되기 때문이다",
    ],
    answer: 0,
    explanation:
      "Git에는 리뷰를 거친 커밋만 받는다는 개념이 없고, 로컬 훅은 우회할 수 있다. 푸시를 받는 서버가 ruleset이나 브랜치 보호로 막아야 급할 때도 규칙이 지켜진다.",
    anchor: "규칙은-사람보다-서버가-지킨다",
  },
  {
    id: "github-repo-governance-2",
    post: "github-repo-governance",
    question:
      "ruleset의 bypass_mode를 always 대신 pull_request로 두면 관리자에게 무엇이 달라지나?",
    choices: [
      "관리자도 규칙을 전혀 우회할 수 없다",
      "관리자는 main에 직접 푸시할 수 있지만 알림이 간다",
      "관리자도 PR을 열어야 하고, 그 PR 안에서만 규칙을 건너뛰어 기록이 남는다",
      "관리자의 PR은 CI를 건너뛴다",
    ],
    answer: 2,
    explanation:
      "pull_request 모드는 직접 푸시는 막고 PR을 통한 우회만 허용한다. 급한 경우를 막지 않으면서 우회가 PR 기록으로 남는다. 우회 자체를 막는 것은 bypass 목록에서 빼는 것이다.",
    anchor: "브랜치-보호-규칙과-ruleset",
  },
  {
    id: "github-repo-governance-3",
    post: "github-repo-governance",
    question:
      "A가 승인한 PR에 B가 커밋을 하나 더 올리고 바로 합치는 일을 막는 데 가장 직접적인 설정은?",
    choices: [
      "required linear history",
      "require approval of the most recent reviewable push",
      "required conversation resolution",
      "required signed commits",
    ],
    answer: 1,
    explanation:
      "최근 푸시 승인 옵션은 마지막으로 푸시한 사람이 아닌 누군가가 그 푸시를 승인해야 합치게 한다. B가 올린 커밋은 B 말고 다른 사람이 승인해야 한다. 선형 히스토리나 서명은 누가 승인했는지와 상관이 없다.",
    anchor: "승인-뒤에-커밋이-또-올라오면",
  },
  {
    id: "github-repo-governance-4",
    post: "github-repo-governance",
    question:
      "필수 검사 test를 걸어 둔 뒤 워크플로에 node 20, 22 matrix를 추가했더니 모든 PR이 머지 대기로 멈췄다. 이유는?",
    choices: [
      "matrix job은 필수 검사로 쓸 수 없다",
      "검사 이름이 test (20), test (22)로 바뀌어 규칙이 기다리는 test라는 이름의 결과가 오지 않는다",
      "matrix를 쓰면 워크플로가 pull_request 이벤트에서 돌지 않는다",
      "두 job이 서로 다른 결과를 내서 GitHub이 판단을 보류한다",
    ],
    answer: 1,
    explanation:
      "필수 검사는 이름으로 걸리므로 이름이 바뀌면 옛 이름을 영원히 기다린다. 모든 matrix가 끝난 뒤 if: always()로 도는 요약 job 하나를 필수로 거는 방식이 흔하다.",
    anchor: "필수-상태-검사가-영원히-기다리는-이유",
  },
  {
    id: "github-repo-governance-5",
    post: "github-repo-governance",
    question:
      "필수 검사가 걸린 워크플로에 on.pull_request.paths: ['src/**']를 걸었다. 문서만 바꾼 PR은 어떻게 되나?",
    choices: [
      "워크플로가 시작하지 않아 검사가 Pending으로 남고 머지가 막힌다",
      "검사가 자동으로 성공 처리되어 바로 합칠 수 있다",
      "GitHub이 경로 필터를 무시하고 워크플로를 돌린다",
      "PR을 열 수 없다는 에러가 난다",
    ],
    answer: 0,
    explanation:
      "트리거 단계의 경로·브랜치 필터로 건너뛴 워크플로는 결과를 보고하지 않아 필수 검사가 Pending으로 남는다. job 단위 if 조건으로 건너뛴 것은 성공으로 보고되니, 경로 판단은 워크플로 안으로 옮긴다.",
    anchor: "필수-상태-검사가-영원히-기다리는-이유",
  },
  {
    id: "github-repo-governance-6",
    post: "github-repo-governance",
    question:
      "CODEOWNERS가 '* @acme/platform', '*.md @acme/docs', '/apps/web/ @acme/frontend' 순서일 때 apps/web/README.md의 오너는?",
    choices: ["@acme/platform", "@acme/docs", "@acme/frontend", "@acme/docs와 @acme/frontend 모두"],
    answer: 2,
    explanation:
      "CODEOWNERS는 맞는 줄이 여러 개면 마지막에 맞은 줄이 이긴다. 세 줄 모두 맞지만 마지막인 /apps/web/ 줄의 프런트엔드 팀이 오너가 된다. 문서 팀이 모든 md를 보게 하려면 *.md 줄을 맨 아래로 내린다.",
    anchor: "codeowners는-마지막-줄이-이긴다",
  },
  {
    id: "github-repo-governance-7",
    post: "github-repo-governance",
    question:
      "fork PR에서 시크릿이 필요해 워크플로를 pull_request_target으로 바꾸고 PR head를 체크아웃해 테스트를 돌렸다. 무엇이 문제인가?",
    choices: [
      "pull_request_target은 fork PR에서 실행되지 않는다",
      "테스트 결과가 PR에 표시되지 않는다",
      "외부인이 쓴 코드가 base 저장소의 시크릿과 쓰기 토큰을 가진 채 실행된다",
      "체크아웃이 base 브랜치로 고정되어 PR 코드를 테스트할 수 없다",
    ],
    answer: 2,
    explanation:
      "pull_request_target은 base 저장소의 권한과 시크릿으로 돈다. 여기서 PR 코드를 실행하면 외부인이 시크릿을 빼 갈 수 있다. fork PR에 읽기 전용 토큰만 주는 pull_request의 동작이 의도된 보호다.",
    anchor: "공개-저장소와-비공개-저장소",
  },
];
