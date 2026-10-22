import type { QuizQuestion } from "../types";

export const MONOREPO_BUILD_CACHE: QuizQuestion[] = [
  {
    id: "monorepo-build-cache-1",
    post: "monorepo-build-cache",
    question: "turbo.json에서 build의 `dependsOn: [\"^build\"]`와 test의 `dependsOn: [\"build\"]`는 각각 무엇을 기다리나?",
    choices: [
      "둘 다 저장소 전체의 build가 끝나기를 기다린다",
      "^build는 내가 의존하는 패키지들의 build를, build는 같은 패키지의 build를 기다린다",
      "^build는 같은 패키지의 build를, build는 의존하는 패키지들의 build를 기다린다",
      "^build는 루트 패키지의 build만 기다린다",
    ],
    answer: 1,
    explanation:
      "^는 \"내가 의존하는 패키지의\"라는 뜻이라 앱의 build는 공용 패키지의 dist가 생긴 뒤에 시작한다. ^가 없으면 같은 패키지 안의 작업이라, 내 dist를 불러 쓰는 test가 내 build 뒤에 돈다.",
    anchor: "패키지-그래프에서-작업-그래프로",
  },
  {
    id: "monorepo-build-cache-2",
    post: "monorepo-build-cache",
    question:
      "analytics만 바뀐 커밋에서 `turbo run build typecheck test --filter=...[HEAD^]`를 돌렸다. analytics와 web만 뽑혔는데 format과 api-client의 build도 실행된 이유는?",
    choices: [
      "--filter가 의존하는 패키지까지 자동으로 넓히기 때문이다",
      "lockfile이 바뀌어 전체가 다시 빌드됐기 때문이다",
      "web의 build가 ^build를 요구해서, web이 쓰는 패키지의 build가 선행 작업으로 붙었기 때문이다",
      "turbo가 캐시를 확인하려고 모든 build를 한 번씩 돌리기 때문이다",
    ],
    answer: 2,
    explanation:
      "선택자는 어느 패키지의 작업을 돌릴지를 고르고, dependsOn은 그 작업 전에 무엇이 있어야 하는지를 채운다. 그래서 7개 작업이 계획됐고 format의 test나 admin 작업은 빠졌다. 이 선행 빌드까지 줄이려면 캐시가 필요하다.",
    anchor: "바뀐-것과-그-위쪽만-고르기",
  },
  {
    id: "monorepo-build-cache-3",
    post: "monorepo-build-cache",
    question:
      "PR에 커밋이 두 개 있다. 첫 커밋은 format 테스트를 깨뜨렸고, 두 번째 커밋은 analytics에 주석만 달았다. CI가 `turbo run test --filter=...[HEAD^]`로 돌면?",
    choices: [
      "마지막 커밋만 비교하므로 format이 뽑히지 않고 CI가 통과한다",
      "format 테스트가 실패해 CI가 빨간불이 된다",
      "기준을 찾지 못해 모든 패키지를 돌린다",
      "turbo가 PR의 모든 커밋을 자동으로 비교한다",
    ],
    answer: 0,
    explanation:
      "[HEAD^]는 바로 앞 커밋과만 비교해서 analytics와 web만 뽑혔고, 깨진 format 테스트는 돌지 않은 채 5개 작업이 성공했다. main과의 merge base(origin/main...HEAD나 TURBO_SCM_BASE와 --affected)를 기준으로 잡아야 format과 api-client의 실패가 잡힌다.",
    anchor: "기준-커밋을-잘못-고르면-테스트가-통과해-버린다",
  },
  {
    id: "monorepo-build-cache-4",
    post: "monorepo-build-cache",
    question: "커밋 하나만 받은 얕은 clone에서 `turbo run build --affected`를 돌리면 실습에서 어떻게 됐나?",
    choices: [
      "바뀐 패키지만 정확히 뽑혔다",
      "아무 작업도 실행하지 않고 성공했다",
      "에러를 내고 즉시 멈췄다",
      "기준 브랜치를 찾지 못했다는 경고를 남기고 모든 패키지를 돌렸다",
    ],
    answer: 3,
    explanation:
      "--affected는 기준이나 merge base를 못 찾으면 모든 파일이 바뀌었다고 가정한다. 결과는 맞지만 빠르지 않고, 경고 한 줄은 로그에 묻히기 쉽다. 반면 [HEAD^] 필터는 HEAD^가 없어서 바로 에러가 났다. fetch-depth: 0이나 deepen으로 merge base까지 받는다.",
    anchor: "얕은-clone에서는-기준을-찾지-못한다",
  },
  {
    id: "monorepo-build-cache-5",
    post: "monorepo-build-cache",
    question: "format 폴더에 README.md 하나를 추가했더니 format을 쓰는 앱의 build까지 캐시가 빗나갔다. 왜 그런가?",
    choices: [
      "README가 dist에 복사돼 결과물이 바뀌었기 때문이다",
      "기본 입력이 패키지 폴더의 모든 파일이라 format의 해시가 바뀌고, 의존 패키지의 해시가 그 해시를 입력으로 쓰기 때문이다",
      "turbo는 새 파일이 생기면 캐시를 모두 지우기 때문이다",
      "git에 커밋하지 않은 파일이 있으면 캐시를 쓰지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "dist는 그대로였지만 입력 해시가 바뀌어 작업 11개가 빗나갔다. inputs에 $TURBO_DEFAULT$와 !**/*.md를 적자 README를 고쳐도 14개가 모두 적중했다. 단, 빌드가 실제로 읽는 파일을 빼면 틀린 적중이 나니 확실한 것만 뺀다.",
    anchor: "해시를-흔드는-파일들",
  },
  {
    id: "monorepo-build-cache-6",
    post: "monorepo-build-cache",
    question: "바뀐 것만 고르기(--filter, --affected)와 작업 결과 캐시 중 무엇을 기본으로 두는 게 안전한가?",
    choices: [
      "캐시. 입력 해시가 정확한 한 돌아야 할 작업을 빠뜨리지 않고, 의존 해시 덕분에 바뀐 것과 그 위쪽이 저절로 가려진다",
      "고르기. git이 바뀐 파일을 정확히 알기 때문이다",
      "둘 다 쓰면 결과가 틀리므로 하나만 쓴다",
      "고르기. 캐시는 원격 서버가 없으면 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "공유 캐시만 붙여도 14개 중 9개가 적중해 2.68초였고, 고르기를 더해도 2.63초로 거의 같았다. 고르기는 기준 커밋이 틀리면 작업을 빼먹으니, 캐시로 줄일 수 없는 배포나 E2E 같은 비싼 작업을 거르는 데 얹어 쓴다.",
    anchor: "다섯-가지-방법으로-재-본-ci-시간",
  },
  {
    id: "monorepo-build-cache-7",
    post: "monorepo-build-cache",
    question: "모든 패키지가 쓰는 공용 tsconfig/base.json에 옵션 하나를 넣었다. 다음 turbo 실행에서 일어나는 일은?",
    choices: [
      "tsconfig 패키지에는 build 스크립트가 없으므로 아무것도 빗나가지 않는다",
      "tsconfig를 직접 고친 패키지만 빗나간다",
      "모든 작업이 빗나간다. 정확한 동작이며, 이런 바닥 패키지가 자주 바뀌면 캐시 효과가 작아진다",
      "turbo가 tsconfig 변경을 감지하지 못해 틀린 적중이 난다",
    ],
    answer: 2,
    explanation:
      "모든 패키지가 tsconfig에 의존하니 해시가 전부 바뀌어 적중이 0개가 됐다. 컴파일 옵션은 모든 결과를 바꿀 수 있으니 맞는 판단이다. 그래서 바닥 패키지는 안정적으로 두고, 자주 바뀌는 값은 쓰는 쪽으로 내린다.",
    anchor: "해시를-흔드는-파일들",
  },
];
