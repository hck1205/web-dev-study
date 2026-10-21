import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_PARALLEL_AND_SCHEDULED: QuizQuestion[] = [
  {
    id: "claude-code-parallel-and-scheduled-1",
    post: "claude-code-parallel-and-scheduled",
    question: "세션 A가 worktree-fix-price 브랜치를 꺼내 둔 상태에서, 같은 브랜치로 worktree를 하나 더 만들면?",
    choices: [
      "두 폴더가 같은 브랜치를 공유하며 만들어진다",
      "새 브랜치 이름이 자동으로 붙는다",
      "이미 다른 worktree가 쓰고 있다는 fatal 오류로 거부된다",
      "기존 worktree가 지워지고 새로 만들어진다",
    ],
    answer: 2,
    explanation:
      "Git은 한 브랜치를 한 작업 폴더에서만 꺼내게 한다. 한쪽이 커밋할 때 다른 쪽 작업 폴더가 브랜치 끝과 어긋나는 일을 처음부터 막는 것이다. 그래서 세션마다 브랜치를 하나씩 준다.",
    anchor: "저장소-하나에-작업-폴더-셋",
  },
  {
    id: "claude-code-parallel-and-scheduled-2",
    post: "claude-code-parallel-and-scheduled",
    question: "두 worktree 세션이 각자 dev 서버를 18450 포트로 띄우려 한다. 무슨 일이 생기나?",
    choices: [
      "두 번째 서버가 EADDRINUSE로 실패한다",
      "worktree마다 네트워크가 분리되어 둘 다 뜬다",
      "Git이 두 번째 worktree 생성을 막는다",
      "첫 번째 서버가 자동으로 다른 포트로 옮겨 간다",
    ],
    answer: 0,
    explanation:
      "worktree는 작업 파일과 인덱스, HEAD만 나눈다. 포트, 로컬 DB, 컨테이너 이름처럼 컴퓨터 단위의 자원은 그대로 공유되니 세션마다 다른 값을 줘야 한다.",
    anchor: "파일은-갈라져도-포트와-db는-하나다",
  },
  {
    id: "claude-code-parallel-and-scheduled-3",
    post: "claude-code-parallel-and-scheduled",
    question: "claude --worktree로 만든 새 작업 폴더에서 앱이 DB 주소를 못 찾는다. 가장 알맞은 대처는?",
    choices: [
      ".env를 Git에 커밋한다",
      ".worktreeinclude에 .env를 적어 gitignore된 파일을 복사하게 한다",
      "worktree.baseRef를 head로 바꾼다",
      "원래 폴더의 .env를 심볼릭 링크로 건다",
    ],
    answer: 1,
    explanation:
      "worktree는 추적되는 파일만 꺼내는 새 checkout이라 gitignore된 .env가 없다. .worktreeinclude는 패턴과 맞고 gitignore된 파일만 새 worktree에 복사한다. 비밀값을 커밋하는 것은 해법이 아니다.",
    anchor: "파일은-갈라져도-포트와-db는-하나다",
  },
  {
    id: "claude-code-parallel-and-scheduled-4",
    post: "claude-code-parallel-and-scheduled",
    question: "테스트가 모두 통과할 때까지 Claude가 알아서 턴을 이어 가게 하려면 무엇이 맞나?",
    choices: [
      "/loop 5m으로 5분마다 테스트를 돌린다",
      "클라우드 예약 작업을 매시로 건다",
      "플랜 모드로 바꾼다",
      "/goal에 측정 가능한 완료 조건을 준다",
    ],
    answer: 3,
    explanation:
      "/goal은 턴이 끝날 때마다 작은 모델이 조건을 판정해 아직이면 바로 다음 턴을 시작한다. /loop는 시간 간격으로 다시 도는 것이라 끝 상태를 기준으로 멈추지 않는다.",
    anchor: "조건이-맞을-때까지-턴을-잇는다",
  },
  {
    id: "claude-code-parallel-and-scheduled-5",
    post: "claude-code-parallel-and-scheduled",
    question: "/goal 조건으로 '코드가 깔끔해질 때까지'를 줬더니 끝나지 않는다. 왜일까?",
    choices: [
      "평가 모델은 대화에 드러난 것만 보고 판정해서, 증명할 수 없는 조건은 판정이 안 된다",
      "/goal은 한 세션에 10턴까지만 돌기 때문이다",
      "평가 모델이 직접 lint를 돌리는데 lint가 설치되지 않았기 때문이다",
      "조건이 4,000자를 넘었기 때문이다",
    ],
    answer: 0,
    explanation:
      "평가 모델은 명령을 돌리거나 파일을 읽지 않는다. 그래서 테스트 결과, 종료 코드처럼 대화에 찍히는 끝 상태와 확인 방법, 턴 상한을 조건에 함께 적어야 한다.",
    anchor: "조건이-맞을-때까지-턴을-잇는다",
  },
  {
    id: "claude-code-parallel-and-scheduled-6",
    post: "claude-code-parallel-and-scheduled",
    question: "/loop로 매시 작업을 걸었는데 정각보다 20분 늦게 돌았다. 어떻게 봐야 하나?",
    choices: [
      "스케줄러가 고장 났으니 세션을 다시 연다",
      "시각을 흩는 jitter로, 매시 작업은 최대 30분까지 늦을 수 있다",
      "프롬프트 캐시가 만료돼서 기다린 것이다",
      "7일 만료가 가까워져서 느려진 것이다",
    ],
    answer: 1,
    explanation:
      "모든 세션이 같은 시각에 API를 부르지 않도록 반복 작업은 간격의 절반, 최대 30분까지 늦게 돈다. 5분 간격만 예외다. 시각이 중요하면 정각을 비켜 걸거나 다른 수단을 쓴다.",
    anchor: "세션이-열려-있는-동안-되풀이하기",
  },
  {
    id: "claude-code-parallel-and-scheduled-7",
    post: "claude-code-parallel-and-scheduled",
    question: "노트북을 덮어 둔 동안 매일 아침 저장소를 점검하고 PR을 열게 하려면?",
    choices: [
      "/loop 24h로 건다",
      "데스크톱 앱의 로컬 예약 작업으로 건다",
      "클라우드 예약 작업을 스케줄 트리거로 건다",
      "/goal에 '매일 아침'을 조건으로 넣는다",
    ],
    answer: 2,
    explanation:
      "/loop와 로컬 예약 작업은 내 컴퓨터가 켜져 있어야 돈다. 클라우드 예약 작업은 저장소를 새로 clone해 무인으로 일하고 claude/ 브랜치로 push한다. 무인이라 저장소와 커넥터 범위를 좁혀 둔다.",
    anchor: "노트북을-덮어도-도는-예약-작업",
  },
];
