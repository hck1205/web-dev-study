import type { QuizQuestion } from "../types";

export const DEPENDENCY_HELL: QuizQuestion[] = [
  {
    id: "dependency-hell-1",
    post: "dependency-hell",
    question:
      "ui는 core ^1.2.0을, charts는 core ^2.0.0을 원한다. npm으로 설치한 뒤 ui가 만든 객체를 charts가 instanceof로 검사하면 false가 나오는 이유는?",
    choices: [
      "npm이 core를 한 벌만 깔고 한쪽 요구를 무시해서",
      "core가 두 벌 깔려 같은 이름의 클래스가 서로 다른 모듈에서 따로 평가돼서",
      "instanceof는 원래 다른 패키지 사이에서 동작하지 않아서",
      "lockfile이 없어서 버전이 섞여서",
    ],
    answer: 1,
    explanation:
      "두 범위를 함께 만족하는 버전이 없으면 npm은 한쪽을 최상위에, 다른 쪽을 그 패키지 폴더 안쪽에 따로 깐다. 두 벌은 다른 파일에서 평가된 다른 클래스라 instanceof가 거짓이 되고 모듈 단위 상태도 쪼개진다.",
    anchor: "다이아몬드-모양에서-두-벌이-깔린다",
  },
  {
    id: "dependency-hell-2",
    post: "dependency-hell",
    question:
      "package.json에 없는 @acme/core를 require하던 코드가, 상관없어 보이는 @acme/charts를 지운 뒤 Cannot find module로 깨졌다. 무엇이 원인인가?",
    choices: [
      "charts가 core의 peer dependency였다",
      "npm uninstall이 lockfile을 지웠다",
      "선언하지 않고 호이스팅 덕분에 쓰던 유령 의존성이어서, 최상위 core가 사라졌다",
      "core가 deprecated 처리됐다",
    ],
    answer: 2,
    explanation:
      "최상위의 core 2.0.0은 charts 때문에 올라와 있었다. charts를 지우자 그것이 사라졌고, ui 안쪽의 1.3.1은 자리로 올라오지 않았다. 쓰는 패키지는 직접 선언해야 하고, 새로 설치하면 또 다른 버전이 올라올 수 있다.",
    anchor: "선언하지-않은-패키지를-쓰는-유령-의존성",
  },
  {
    id: "dependency-hell-3",
    post: "dependency-hell",
    question: "같은 프로젝트를 pnpm으로 설치하면 유령 의존성 require가 바로 실패하는 이유는?",
    choices: [
      "최상위 node_modules에는 package.json에 선언한 패키지의 링크만 두기 때문에",
      "pnpm은 CommonJS require를 지원하지 않기 때문에",
      "pnpm은 간접 의존성을 설치하지 않기 때문에",
      "pnpm은 lockfile이 없으면 설치를 멈추기 때문에",
    ],
    answer: 0,
    explanation:
      "pnpm은 실제 파일을 .pnpm/이름@버전 아래에 두고, 각 패키지 옆에는 그 패키지가 선언한 의존성만 링크로 놓는다. 간접 의존성도 설치되지만 앱 코드에서는 보이지 않으니 선언 누락이 설치 직후 드러난다.",
    anchor: "pnpm은-링크로-경계를-세운다",
  },
  {
    id: "dependency-hell-4",
    post: "dependency-hell",
    question:
      "ERESOLVE 에러에서 Found: @acme/host@2.0.0, Could not resolve: peer @acme/host@\"^1.0.0\" from @acme/host-plugin@1.0.0이 보인다. 가장 먼저 할 일은?",
    choices: [
      ".npmrc에 legacy-peer-deps=true를 넣는다",
      "--force로 다시 설치한다",
      "package-lock.json을 지우고 다시 설치한다",
      "npm view로 host 2를 peer 범위에 포함한 플러그인 버전이 있는지 찾는다",
    ],
    answer: 3,
    explanation:
      "두 줄을 맞대면 충돌한 범위가 보인다. 플러그인의 다른 버전(예: 1.1.0의 ^1.0.0 || ^2.0.0)이 이미 지원하면 그것으로 올리는 게 정석이다. 강제 옵션은 선언 밖의 조합을 깔아 npm ls가 invalid를 표시하게 만든다.",
    anchor: "peer-dependency가-부딪히면-eresolve",
  },
  {
    id: "dependency-hell-5",
    post: "dependency-hell",
    question: "CI에서 npm install 대신 npm ci를 써야 하는 이유로 가장 알맞은 것은?",
    choices: [
      "npm ci가 항상 더 최신 버전을 받아서",
      "npm ci는 lockfile에 적힌 버전과 해시대로만 깔고, package.json과 어긋나면 고치지 않고 멈춰서",
      "npm ci는 peer dependency 검사를 건너뛰어서",
      "npm ci는 node_modules를 지우지 않아 빨라서",
    ],
    answer: 1,
    explanation:
      "npm install은 어긋난 부분의 범위를 다시 계산해 그날의 최신을 깔 수 있다. npm ci는 node_modules를 지우고 lockfile만 따르며, 어긋나면 EUSAGE로 멈추고 해시가 다르면 EINTEGRITY로 멈춘다. 그래서 로컬에서 테스트한 조합과 같은 것으로 빌드된다.",
    anchor: "lockfile이-기록하는-것",
  },
  {
    id: "dependency-hell-6",
    post: "dependency-hell",
    question:
      "overrides로 @acme/core를 2.0.0으로 강제했더니 npm ls에 overridden이 붙었다. ui는 ^1.2.0을 선언했다. 이 상태에서 조심할 점은?",
    choices: [
      "ui 작성자가 약속하지 않은 조합이니 ui 경로를 테스트로 확인하고, 상류가 고치면 override를 지운다",
      "overridden 표시는 설치 실패를 뜻하니 다시 설치한다",
      "override는 lockfile에 기록되지 않아 다른 머신에서는 무시된다",
      "아무것도 조심할 필요가 없다",
    ],
    answer: 0,
    explanation:
      "override는 선언된 범위를 넘어 버전을 박는다. 주 버전을 건너뛰면 런타임에 깨질 수 있으니 해당 경로를 직접 확인한다. 남겨 두면 나중에 진짜 새 버전이 필요할 때도 낡은 버전을 계속 강제하므로 이유를 기록하고 정기적으로 지운다.",
    anchor: "남의-의존성-버전을-바꾸는-overrides",
  },
  {
    id: "dependency-hell-7",
    post: "dependency-hell",
    question:
      "pnpm에 minimumReleaseAge를 걸었더니 범위 안의 1.3.2 대신 1.3.1이 설치됐다. 이 설정이 막으려는 위험은?",
    choices: [
      "주 버전이 바뀌는 업데이트",
      "lockfile 충돌",
      "계정 탈취 등으로 막 올라온 악성 버전을, 발견되어 내려가기 전에 받는 것",
      "peer dependency 충돌",
    ],
    answer: 2,
    explanation:
      "악성 버전은 대개 몇 시간 안에 발견되어 내려간다. 올라온 지 일정 시간이 안 된 버전을 받지 않으면 그 창을 피할 수 있다. 설치 스크립트를 허락한 패키지만 실행하는 설정과 함께 쓰면 설치 단계의 공급망 위험이 줄어든다.",
    anchor: "설치는-남의-코드를-실행하는-일이다",
  },
];
