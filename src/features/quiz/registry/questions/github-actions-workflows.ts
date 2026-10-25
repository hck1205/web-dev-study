import type { QuizQuestion } from "../types";

export const GITHUB_ACTIONS_WORKFLOWS: QuizQuestion[] = [
  {
    id: "github-actions-workflows-1",
    post: "github-actions-workflows",
    question: "외부 기여자의 포크 PR에서만 `API_KEY is not set`으로 테스트가 실패한다. 원인은?",
    choices: [
      "포크 PR의 pull_request 실행에는 저장소 secrets가 전달되지 않고 토큰도 읽기 전용이라서",
      "secrets 이름이 대소문자를 구분해서",
      "포크 PR은 다른 러너 이미지를 써서 환경 변수가 지워져서",
      "secrets는 기본 브랜치 푸시에서만 읽히도록 저장소 설정이 되어 있어서",
    ],
    answer: 0,
    explanation:
      "pull_request는 PR의 머지 커밋에 있는 워크플로 파일로 돈다. 포크라면 외부인이 그 파일과 코드를 바꿀 수 있으니 GitHub이 secrets를 주지 않고 GITHUB_TOKEN도 읽기 전용으로 준다. 버그가 아니라 의도된 보호다.",
    anchor: "이벤트는-어느-커밋을-돌릴지까지-정한다",
  },
  {
    id: "github-actions-workflows-2",
    post: "github-actions-workflows",
    question: "pull_request_target 워크플로는 base 브랜치의 파일로 돈다. 그런데도 PR의 head 커밋을 체크아웃해 `npm ci && npm test`를 돌리면 위험한 이유는?",
    choices: [
      "pull_request_target은 러너를 재사용해서 앞 실행의 파일이 남아서",
      "head 커밋을 체크아웃하면 워크플로 파일도 PR 것으로 바뀌어서",
      "npm ci가 lockfile을 무시해서",
      "PR이 고친 package.json 스크립트와 테스트 코드가 secrets와 쓰기 토큰을 가진 채 실행되어서",
    ],
    answer: 3,
    explanation:
      "워크플로 파일은 base의 것이지만, 그 안에서 실행하는 npm 스크립트와 테스트는 PR이 고친 코드다. 공격자는 워크플로를 건드리지 않고도 postinstall 한 줄로 비밀 값과 토큰을 빼낼 수 있다. 권한이 필요한 일은 PR 코드가 없는 workflow_run 쪽으로 옮긴다.",
    anchor: "이벤트는-어느-커밋을-돌릴지까지-정한다",
  },
  {
    id: "github-actions-workflows-3",
    post: "github-actions-workflows",
    question: "`run: echo \"$PR_TITLE\"`처럼 PR 제목을 env로 받아 쓰면 직접 `${{ github.event.pull_request.title }}`를 넣을 때보다 안전한 이유는?",
    choices: [
      "env 값은 GitHub이 자동으로 따옴표를 이스케이프해 주어서",
      "표현식은 셸 실행 전에 문자열로 치환되어 코드가 되지만, 환경 변수는 셸이 값으로만 펼치기 때문에",
      "env로 받으면 값이 로그에서 *** 로 가려져서",
      "env는 포크 PR에서 비어 있어서",
    ],
    answer: 1,
    explanation:
      "GitHub은 표현식을 먼저 계산해 스크립트에 문자열로 박아 넣는다. 제목에 따옴표와 세미콜론이 있으면 스크립트 문법이 바뀌어 명령이 끼어든다. 환경 변수는 셸이 값으로만 확장하니 다시 코드로 읽히지 않는다.",
    anchor: "표현식과-컨텍스트-값은-어디서-오나",
  },
  {
    id: "github-actions-workflows-4",
    post: "github-actions-workflows",
    question: "build → test → deploy로 needs가 이어지고, deploy 뒤에 `if: failure()`인 notify 잡이 있다. build가 실패하면 notify는?",
    choices: [
      "deploy가 실패하지 않고 건너뛰었으니 notify도 건너뛴다",
      "failure()는 직접 적은 needs만 보므로 돌지 않는다",
      "조상 잡인 build가 실패했으니 failure()가 참이 되어 돈다",
      "build가 실패하면 워크플로 전체가 취소되어 아무 잡도 돌지 않는다",
    ],
    answer: 2,
    explanation:
      "test와 deploy는 앞 잡이 성공하지 않아 건너뛰지만, failure()는 이어진 조상 잡 중 하나라도 실패했으면 참이다. 그래서 notify는 build 실패를 알리러 돈다. 기본 조건 success()였다면 건너뛰었을 것이다.",
    anchor: "표현식과-컨텍스트-값은-어디서-오나",
  },
  {
    id: "github-actions-workflows-5",
    post: "github-actions-workflows",
    question: "빌드 결과물을 actions/cache로 저장해 배포 잡에서 꺼내 쓰고 있다. 어떤 문제가 생길 수 있나?",
    choices: [
      "캐시는 언제든 밀려나거나 지워질 수 있어서, 그런 날 배포 잡이 결과물 없이 출발한다",
      "캐시는 같은 잡 안에서만 읽을 수 있어서 처음부터 동작하지 않는다",
      "캐시는 90일 동안 바꿀 수 없어 새 결과물을 넣지 못한다",
      "캐시에 넣은 파일은 자동으로 암호화되어 배포 잡이 읽지 못한다",
    ],
    answer: 0,
    explanation:
      "캐시는 있으면 빠르고 없어도 맞아야 하는 가속 장치라 7일 미사용이나 용량 한도로 지워질 수 있다. 이 실행이 만든 결과물을 잡 사이에 넘기는 건 아티팩트의 일이다. 90일 보관과 변경 불가는 아티팩트 쪽 성질이다.",
    anchor: "잡-사이에-값과-파일을-넘기는-법",
  },
  {
    id: "github-actions-workflows-6",
    post: "github-actions-workflows",
    question: "체크아웃·Node 설치·의존성 설치를 여러 워크플로에서 반복한다. 이 준비 동작만 묶기에 알맞은 것과 그 이유는?",
    choices: [
      "재사용 워크플로. 부르는 잡의 env가 그대로 넘어가서",
      "composite 액션. 부르는 잡의 러너 안에서 스텝으로 펼쳐져 앞뒤 스텝과 파일 시스템을 함께 써서",
      "재사용 워크플로. 스텝 자리에서 부를 수 있어서",
      "composite 액션. 자기 러너를 따로 받아 격리되어서",
    ],
    answer: 1,
    explanation:
      "composite 액션은 스텝 단위라 부른 잡의 러너에서 돌고, 설치한 node_modules를 뒤 스텝이 그대로 쓴다. 재사용 워크플로는 잡 단위로 자기 러너를 받아서 파일을 공유하지 않고, 부르는 쪽의 env도 넘어가지 않는다.",
    anchor: "같은-스텝을-여러-저장소에서-쓰기",
  },
  {
    id: "github-actions-workflows-7",
    post: "github-actions-workflows",
    question: "서드파티 액션을 `@v3` 태그 대신 40자리 커밋 SHA로 부르는 이유는?",
    choices: [
      "SHA로 부르면 액션이 더 빨리 내려받아져서",
      "태그로 부르면 GITHUB_TOKEN 권한이 자동으로 쓰기로 바뀌어서",
      "태그는 다른 커밋으로 옮길 수 있어 저장소가 탈취되면 내 워크플로가 바뀐 코드를 돌지만, 커밋 SHA는 옮길 수 없어서",
      "SHA로 고정하면 그 액션이 안에서 부르는 도커 이미지와 다른 액션까지 모두 고정되어서",
    ],
    answer: 2,
    explanation:
      "git 태그는 움직일 수 있어서 2025년 tj-actions/changed-files 사고처럼 태그가 악성 커밋으로 옮겨지면 태그로 부르던 저장소가 모두 영향을 받는다. 커밋 SHA는 내용의 해시라 옮길 수 없다. 다만 액션 안에서 태그나 latest를 쓰는 부분은 여전히 움직인다.",
    anchor: "마켓플레이스-액션은-남의-코드다",
  },
];
