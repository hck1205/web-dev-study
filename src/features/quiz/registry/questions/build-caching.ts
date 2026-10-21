import type { QuizQuestion } from "../types";

export const BUILD_CACHING: QuizQuestion[] = [
  {
    id: "build-caching-1",
    post: "build-caching",
    question: "CI에서 pnpm 의존성 캐시를 걸 때 보통 무엇을 캐시하나?",
    choices: [
      "node_modules 디렉터리 전체",
      "pnpm store(내용 해시로 저장된 패키지 원본)",
      "package.json 파일",
      "dist 디렉터리",
    ],
    answer: 1,
    explanation:
      "store만 있으면 node_modules는 링크를 거는 것이라 다시 받을 게 없다. node_modules는 Node 버전과 OS에 묶인 네이티브 빌드와 설치 스크립트 결과가 섞여 환경이 바뀌면 깨지기 쉽다.",
    anchor: "의존성-설치는-무엇을-캐시해야-빨라지나",
  },
  {
    id: "build-caching-2",
    post: "build-caching",
    question: "lockfile이 바뀐 커밋에서 actions/cache가 restore-keys 접두사로 이전 캐시를 복원했다. 이 잡에서 일어나는 일은?",
    choices: [
      "cache-hit이 true가 되고 저장을 건너뛴다",
      "기존 키의 캐시를 새 내용으로 덮어쓴다",
      "cache-hit이 false가 되고 잡이 끝날 때 새 primary key로 저장한다",
      "캐시를 버리고 아무것도 저장하지 않는다",
    ],
    answer: 2,
    explanation:
      "restore-keys로 찾은 것은 부분 적중이라 cache-hit이 false다. Post 단계가 새 키로 저장하고, 같은 키의 캐시는 덮어쓸 수 없으므로 기존 항목은 그대로 남는다.",
    anchor: "정확히-맞지-않으면-비슷한-것이라도",
  },
  {
    id: "build-caching-3",
    post: "build-caching",
    question: "feat/pay 브랜치의 잡이 캐시를 찾을 때 볼 수 없는 캐시는?",
    choices: [
      "feat/pay 브랜치가 만든 캐시",
      "기본 브랜치 main이 만든 캐시",
      "feat/pay에서 이전 실행이 만든 캐시",
      "형제 브랜치 feat/cart가 만든 캐시",
    ],
    answer: 3,
    explanation:
      "캐시는 만든 브랜치 범위에 묶이고, 브랜치는 자기 캐시와 기본 브랜치의 캐시만 읽는다. 형제 브랜치의 캐시는 보이지 않고, main도 기능 브랜치의 캐시를 읽지 못한다.",
    anchor: "키는-어떤-순서로-맞춰-보나",
  },
  {
    id: "build-caching-4",
    post: "build-caching",
    question: "Turbo를 loose 모드로 쓰면서 API_URL을 env에 선언하지 않았다. 스테이징 주소로 빌드했더니 어떤 일이 생겼나?",
    choices: [
      "해시가 같아 캐시에서 운영 주소가 박힌 결과물을 받아 왔다",
      "빌드가 실패했다",
      "API_URL이 작업에 전달되지 않아 localhost가 들어갔다",
      "Turbo가 자동으로 API_URL을 해시에 넣었다",
    ],
    answer: 0,
    explanation:
      "loose 모드는 변수를 작업에 넘기지만 해시에는 넣지 않는다. 그래서 운영 주소로 만든 결과물이 그대로 적중했다. localhost가 들어간 것은 변수를 아예 넘기지 않는 strict 모드에서의 일이다.",
    anchor: "해시에-없는-입력이-만드는-틀린-적중",
  },
  {
    id: "build-caching-5",
    post: "build-caching",
    question: "packages/price의 소스를 고쳤더니 그것을 쓰는 apps/web까지 다시 빌드됐다. 이유는?",
    choices: [
      "Turbo는 파일 하나만 바뀌어도 모든 작업을 다시 돌려서",
      "의존하는 패키지 작업의 해시가 내 작업 해시의 입력이라서",
      "web의 dist가 지워져서",
      "루트 README도 같이 바뀌어서",
    ],
    answer: 1,
    explanation:
      "price의 해시가 바뀌면 그것을 입력으로 쓰는 web의 해시도 바뀐다. web의 소스만 고쳤을 때는 price가 적중하고 web만 다시 빌드됐고, 루트 README 변경은 어느 작업의 입력도 아니라 둘 다 적중했다.",
    anchor: "작업-결과까지-캐시하는-도구들",
  },
  {
    id: "build-caching-6",
    post: "build-caching",
    question: "원격 캐시에 같은 해시로 변조된 결과물이 올라왔다. 이를 막는 가장 직접적인 방법은?",
    choices: [
      "캐시 키에 날짜를 넣는다",
      "로컬 캐시를 자주 지운다",
      "결과물에 서명을 달고 받을 때 검증하며, 신뢰하지 않는 잡에는 쓰기 권한을 주지 않는다",
      "restore-keys를 더 길게 쓴다",
    ],
    answer: 2,
    explanation:
      "해시는 이름표일 뿐 내용의 증명이 아니라서, 쓰기 권한만 있으면 같은 이름으로 다른 파일을 올릴 수 있다. 서명을 켜자 변조된 결과물은 검증에 실패해 버려지고 직접 빌드했다.",
    anchor: "남이-올린-결과물을-믿어도-되나",
  },
  {
    id: "build-caching-7",
    post: "build-caching",
    question: "로컬에서는 잘 먹던 Dockerfile의 RUN --mount=type=cache가 CI의 새 러너에서는 효과가 없는 이유는?",
    choices: [
      "캐시 마운트는 레이어가 아니라서 --cache-to로 내보내지지 않는다",
      "CI에서는 BuildKit을 쓸 수 없다",
      "캐시 마운트는 root 사용자에서만 동작한다",
      "GitHub Actions 캐시 용량이 1GB로 제한돼서",
    ],
    answer: 0,
    explanation:
      "캐시 마운트는 BuildKit이 따로 관리하는 디렉터리라 레이어 캐시를 내보낼 때 함께 가지 않는다. 그래서 CI에서는 lockfile만 먼저 복사해 설치하는 레이어 순서로 레이어 캐시에 기대는 편이 확실하다.",
    anchor: "docker-빌드의-캐시는-어디에-두나",
  },
];
