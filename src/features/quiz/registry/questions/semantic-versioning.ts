import type { QuizQuestion } from "../types";

export const SEMANTIC_VERSIONING: QuizQuestion[] = [
  {
    id: "semantic-versioning-1",
    post: "semantic-versioning",
    question:
      "package.json에 \"^0.4.2\"를 적었고 레지스트리에 0.4.9와 0.5.0이 있다. npm install은 무엇을 설치하나?",
    choices: ["0.5.0", "0.4.9", "0.4.2", "설치에 실패한다"],
    answer: 1,
    explanation:
      "캐럿은 가장 왼쪽의 0이 아닌 자리를 고정하므로 ^0.4.2는 >=0.4.2 <0.5.0-0이다. 0.x 라이브러리가 부 버전에서 API를 깨는 관례 때문에 npm이 한 칸 좁혀 보호한다. 그래서 0.5.0은 범위 밖이고 범위 안의 최고인 0.4.9가 깔린다.",
    anchor: "0x에서-캐럿은-한-칸-더-좁아진다",
  },
  {
    id: "semantic-versioning-2",
    post: "semantic-versioning",
    question: "1.0.0-beta.2, 1.0.0-beta.11, 1.0.0을 SemVer 순서로 올바르게 나열한 것은?",
    choices: [
      "1.0.0-beta.11 < 1.0.0-beta.2 < 1.0.0",
      "1.0.0 < 1.0.0-beta.2 < 1.0.0-beta.11",
      "1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0",
      "1.0.0-beta.2 < 1.0.0 < 1.0.0-beta.11",
    ],
    answer: 2,
    explanation:
      "사전 배포 식별자는 점으로 나눠 비교하고, 둘 다 숫자면 숫자로 비교하므로 11이 2보다 크다. 사전 배포 버전은 같은 숫자의 정식 버전보다 항상 앞선다. 문자열로 비교하면 \"11\" < \"2\"가 되지만 명세는 그렇게 하지 않는다.",
    anchor: "사전-배포-버전은-어떤-순서로-줄을-서나",
  },
  {
    id: "semantic-versioning-3",
    post: "semantic-versioning",
    question: "node-semver가 ^1.4.2를 >=1.4.2 <2.0.0-0으로 푸는 이유는?",
    choices: [
      "2.0.0-rc.1 같은 다음 주 버전의 사전 배포가 범위에 섞이지 않게 하려고",
      "2.0.0을 범위에 포함하려고",
      "빌드 메타데이터가 붙은 버전을 제외하려고",
      "0.x 버전과 구분하려고",
    ],
    answer: 0,
    explanation:
      "<2.0.0이라고만 쓰면 2.0.0-rc.1은 2.0.0보다 작으므로 범위 안에 들어온다. 가장 작은 사전 배포 버전인 2.0.0-0을 경계로 잡으면 2.x의 후보 버전이 모두 막힌다.",
    anchor: "캐럿과-물결표가-실제로-여는-범위",
  },
  {
    id: "semantic-versioning-4",
    post: "semantic-versioning",
    question:
      "범위 ^1.5.0-beta.1이 받아들이지 않는 버전은? (npm의 node-semver 기준)",
    choices: ["1.5.0-beta.2", "1.5.0", "1.6.0", "1.6.0-beta.1"],
    answer: 3,
    explanation:
      "범위에 사전 배포가 있으면 숫자 세 자리가 같은 줄(1.5.0)의 사전 배포만 후보가 된다. 정식 1.5.0과 1.6.0은 일반 규칙대로 들어오지만 다른 줄의 베타인 1.6.0-beta.1은 거절된다. 1.5.0 베타에 동의한 사람에게 다른 베타까지 떠넘기지 않으려는 규칙이다.",
    anchor: "범위-안의-사전-배포-버전은-같은-줄에서만",
  },
  {
    id: "semantic-versioning-5",
    post: "semantic-versioning",
    question:
      "날짜 라이브러리가 함수 이름과 인자는 그대로 두고 기본 출력 형식만 2026-10-21에서 10/21/2026으로 바꿨다. SemVer로 보면 몇 번째 자리를 올려야 하나?",
    choices: [
      "PATCH, 시그니처가 같으니까",
      "MINOR, 새 형식이 추가된 것이니까",
      "MAJOR, 옵션을 안 준 사용자가 받는 결과가 바뀌었으니까",
      "올리지 않아도 된다",
    ],
    answer: 2,
    explanation:
      "공개 API에는 시그니처뿐 아니라 기본값과 출력 형식도 들어간다. 결과를 문자열로 비교하던 코드가 모두 깨지므로 호환을 깨는 변경이다. 시그니처만 보고 패치로 내면 범위로 받던 사용자의 CI가 아무 코드 변경 없이 깨진다.",
    anchor: "무엇이-깨지는-변경인가",
  },
  {
    id: "semantic-versioning-6",
    post: "semantic-versioning",
    question:
      "2.0.0이 latest인 상태에서 1.x 사용자를 위한 1.5.1을 npm publish로 그냥 올렸다. 무엇이 문제인가?",
    choices: [
      "1.5.1이 2.0.0보다 작아서 올라가지 않는다",
      "^2.0.0 사용자가 1.5.1을 받는다",
      "아무 문제도 없다",
      "latest 태그가 1.5.1로 옮겨져 새로 설치하는 사람이 1.x를 받는다",
    ],
    answer: 3,
    explanation:
      "npm publish는 --tag가 없으면 올린 버전에 latest를 붙인다. dist-tag는 SemVer 순서와 상관없는 별명이라 범위 없이 설치하는 사람이 1.5.1을 받게 된다. 옛 줄은 다른 태그로 올리고, 옮겨졌다면 npm dist-tag add로 되돌린다.",
    anchor: "dist-tag가-가리키는-곳",
  },
  {
    id: "semantic-versioning-7",
    post: "semantic-versioning",
    question:
      "Changesets로 date-fmt에 major를 넣었더니, 이를 쓰는 ui는 범위만 ^2.0.0으로 바뀌고 수 버전만 올랐다. ui가 date-fmt의 타입을 그대로 다시 내보낸다면 무엇을 해야 하나?",
    choices: [
      "아무것도 안 해도 된다. 도구가 알아서 판단했다",
      "ui의 범위를 ^1.5.0으로 되돌린다",
      "ui에도 major changeset을 직접 넣는다",
      "date-fmt의 changeset을 minor로 낮춘다",
    ],
    answer: 2,
    explanation:
      "도구는 의존 범위만 보고 번호를 맞출 뿐, ui의 공개 API가 date-fmt의 타입을 품고 있는지는 모른다. 다시 내보낸 타입이 바뀌면 ui 사용자에게도 깨는 변경이므로 사람이 ui에 major를 넣어야 한다.",
    anchor: "버전-번호를-사람이-고르지-않게",
  },
];
