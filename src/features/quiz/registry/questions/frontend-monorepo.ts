import type { QuizQuestion } from "../types";

export const FRONTEND_MONOREPO: QuizQuestion[] = [
  {
    id: "frontend-monorepo-1",
    post: "frontend-monorepo",
    question:
      "pnpm 10 워크스페이스에서 앱의 의존성에 `\"@shop/format\": \"^1.2.0\"`이라고 적었다. 저장소 안에 @shop/format@1.2.0이 있는데 설치하면 어떻게 되나?",
    choices: [
      "저장소 안의 packages/format으로 링크된다",
      "npm 레지스트리에서 찾으러 가고, 없으면 404로 실패한다",
      "lockfile에 기록된 버전을 복사해 온다",
      "경고만 띄우고 의존성을 건너뛴다",
    ],
    answer: 1,
    explanation:
      "pnpm 9부터 link-workspace-packages 기본값이 false라서 일반 범위는 레지스트리에서 찾는다. 실습에서는 404가 났고, 같은 이름의 공개 패키지가 있었다면 그게 설치되는 의존성 혼동이 생길 수 있다. 저장소 안을 가리키려면 workspace: 프로토콜을 쓴다.",
    anchor: "workspace-프로토콜은-레지스트리에-묻지-않는다",
  },
  {
    id: "frontend-monorepo-2",
    post: "frontend-monorepo",
    question: "packages/format의 버전이 1.2.0일 때, `\"@shop/format\": \"workspace:^\"`는 pnpm pack으로 묶은 tarball 안에서 무엇으로 바뀌나?",
    choices: ["workspace:^ 그대로", "1.2.0", "^1.2.0", "*"],
    answer: 2,
    explanation:
      "pack이나 publish를 할 때 pnpm은 현재 버전을 읽어 workspace:^를 ^1.2.0으로 바꾼다. workspace:*는 정확한 버전 1.2.0이 되고, workspace:~는 ~1.2.0이 된다. 원본 package.json은 그대로 두고 tarball 안의 파일만 바꾼다.",
    anchor: "workspace-프로토콜은-레지스트리에-묻지-않는다",
  },
  {
    id: "frontend-monorepo-3",
    post: "frontend-monorepo",
    question:
      "공용 ui 패키지가 exports로 TS 소스(src/index.ts)를 바로 내보낸다. 빌드해서 dist를 내보내는 방식과 비교해 생기는 비용은?",
    choices: [
      "ui를 쓰는 앱마다 그 소스를 다시 변환하고 타입 검사한다",
      "ui를 먼저 빌드하지 않으면 앱 빌드가 항상 실패한다",
      "ui를 수정해도 앱이 다시 설치하기 전까지 바뀐 내용을 보지 못한다",
      "앱이 ui의 .d.ts만 읽어서 타입 오류를 놓친다",
    ],
    answer: 0,
    explanation:
      "소스형 패키지는 빌드 단계가 없어서 수정이 바로 보이지만, 앱의 tsc와 번들러가 ui의 TS·JSX를 직접 처리한다. 실습에서 web의 tsc는 ui 소스 파일 셋을 모두 읽었고 format은 .d.ts 한 장만 읽었다. 먼저 빌드해야 실패하지 않는 쪽은 dist를 내보내는 빌드형이다.",
    anchor: "공용-패키지를-빌드할까-소스로-둘까",
  },
  {
    id: "frontend-monorepo-4",
    post: "frontend-monorepo",
    question:
      "관리자 앱만 React를 19.2.9로 고정했더니 공용 Button에서 `Cannot read properties of null (reading 'useState')`가 났다. 원인은?",
    choices: [
      "19.2.9에는 useState가 없다",
      "Button이 peerDependencies에 React를 적지 않았다",
      "링크된 ui 폴더는 자기 위치에서 React를 찾아 19.3.1을 불러오고, 번들에 React가 두 벌 들어갔다",
      "Vite가 TSX를 변환하지 못해 hook이 사라졌다",
    ],
    answer: 2,
    explanation:
      "링크는 실제 경로로 풀리기 때문에 packages/ui/src의 import는 ui 폴더 기준으로 react를 찾는다. 렌더러는 19.2.9 쪽에만 현재 컴포넌트 정보를 채우니, 19.3.1 쪽 useState는 빈 디스패처를 읽는다. dedupe로 급히 막을 수 있지만 카탈로그로 버전을 하나로 맞추는 것이 해결이다.",
    anchor: "react가-두-벌-들어가는-순간",
  },
  {
    id: "frontend-monorepo-5",
    post: "frontend-monorepo",
    question:
      "앱이 다른 패키지의 소스를 tsconfig paths 별칭으로만 불러오고 package.json에는 의존성을 적지 않았다. 가장 큰 문제는?",
    choices: [
      "tsc 타입 검사가 항상 실패한다",
      "패키지 매니저와 빌드 도구가 두 패키지의 관계를 몰라 빌드 순서와 캐시 무효화가 틀어진다",
      "번들 크기가 두 배가 된다",
      "별칭 이름이 npm 레지스트리와 충돌한다",
    ],
    answer: 1,
    explanation:
      "실습에서 tsc와 Vite 8은 통과했지만 Node 실행은 ERR_MODULE_NOT_FOUND로 깨졌다. 더 큰 문제는 package.json에 관계가 없어 pnpm은 빌드 순서를, Turborepo는 다시 빌드할 대상을 판단하지 못한다는 점이다. 패키지 사이 연결은 의존성으로 적는다.",
    anchor: "tsconfig-paths로-지름길을-내면",
  },
  {
    id: "frontend-monorepo-6",
    post: "frontend-monorepo",
    question:
      "Changesets로 @shop/format에 major 변경을 넣고 changeset version을 돌렸다. format에 workspace:^로 의존하는 ui는 어떻게 되나?",
    choices: [
      "아무 변화가 없다. ui에는 changeset이 없기 때문이다",
      "ui도 major로 올라간다",
      "ui의 의존성 표기가 workspace:*로 바뀐다",
      "format 2.0.0이 기존 범위 ^1.2.0을 벗어나므로 ui가 patch로 올라가고 CHANGELOG에 이유가 남는다",
    ],
    answer: 3,
    explanation:
      "Changesets는 새 버전이 의존 패키지의 범위를 벗어나면 그 패키지도 다시 내야 한다고 보고 기본값대로 patch를 올린다. 실습에서 minor로 바꾼 1.3.0은 ^1.2.0 안이라 ui가 그대로였고, major인 2.0.0일 때만 ui 0.4.1과 두 앱이 따라 올라갔다.",
    anchor: "버전을-하나로-묶을지-패키지마다-따로-올릴지",
  },
  {
    id: "frontend-monorepo-7",
    post: "frontend-monorepo",
    question: "관리자 앱이 ui가 쓰는 clsx를 package.json에 적지 않고 import했다. pnpm 저장소에서 빌드하면?",
    choices: [
      "루트 node_modules에 호이스팅된 clsx를 찾아 빌드가 된다",
      "pnpm이 자동으로 clsx를 admin 의존성에 추가한다",
      "admin 폴더의 node_modules에 clsx 링크가 없어서 import를 풀지 못하고 빌드가 실패한다",
      "ui의 clsx를 복사해 번들에 넣는다",
    ],
    answer: 2,
    explanation:
      "pnpm은 각 패키지 옆에 그 패키지가 선언한 의존성만 링크한다. clsx는 ui/node_modules에만 있어서 admin에서는 Rolldown이 resolve하지 못했다. npm처럼 평평한 구조였다면 우연히 통과했을 유령 의존성이 바로 드러난 것이다.",
    anchor: "설치하면-폴더-사이에-링크가-생긴다",
  },
];
