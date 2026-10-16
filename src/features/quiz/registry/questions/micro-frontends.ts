import type { QuizQuestion } from "../types";

export const MICRO_FRONTENDS: QuizQuestion[] = [
  {
    id: "micro-frontends-1",
    post: "micro-frontends",
    question: "마이크로 프런트엔드가 주로 풀려는 문제에 가장 가까운 것은?",
    choices: [
      "자바스크립트 실행 속도가 느린 문제",
      "여러 팀의 변경이 같은 빌드와 배포에 묶여 서로를 기다리는 문제",
      "서버 렌더링이 안 되는 문제",
      "CSS 파일이 너무 큰 문제",
    ],
    answer: 1,
    explanation:
      "마이크로 프런트엔드는 기술보다 조직 문제를 푼다. 팀별로 화면을 나눠 따로 배포하게 해서 릴리스 결합을 끊는 게 목적이고, 오히려 번들 중복 같은 성능 비용이 생긴다.",
    anchor: "같은-배포-열차에-모두-타고-있다",
  },
  {
    id: "micro-frontends-2",
    post: "micro-frontends",
    question: "각 팀 화면을 npm 패키지로 만들어 셸이 함께 빌드하는 방식의 가장 큰 한계는?",
    choices: [
      "React를 쓸 수 없다",
      "검색 엔진이 화면을 읽지 못한다",
      "리모트가 새 버전을 내도 셸을 다시 빌드·배포해야 반영된다",
      "브라우저마다 동작이 다르다",
    ],
    answer: 2,
    explanation:
      "빌드 타임 조합은 코드는 깔끔하게 나뉘지만 셸이 버전을 올리고 다시 배포해야 변경이 나간다. 처음 문제였던 릴리스 결합이 그대로 남아서 잘 나눈 모듈에 가깝다.",
    anchor: "언제-합치느냐가-갈림길이다",
  },
  {
    id: "micro-frontends-3",
    post: "micro-frontends",
    question: "Module Federation에서 remoteEntry.js를 1년짜리로 캐시하면 어떻게 되나?",
    choices: [
      "리모트가 새로 배포돼도 사용자는 옛 화면을 계속 본다",
      "셸이 리모트를 아예 불러오지 못한다",
      "공유 의존성 협상이 생략되어 더 빨라진다",
      "청크 파일 이름의 해시가 깨진다",
    ],
    answer: 0,
    explanation:
      "진입 파일은 최신 청크를 가리키는 포인터라서 고정 이름으로 배포된다. 길게 캐시하면 새 배포를 알 수 없으니 짧게 캐시하거나 매번 재검증하고, 해시가 붙은 청크만 오래 캐시한다.",
    anchor: "런타임에-리모트를-불러오는-과정",
  },
  {
    id: "micro-frontends-4",
    post: "micro-frontends",
    question: "셸과 리모트가 React 사본을 각각 띄우면 생기는 문제로 알맞은 것은?",
    choices: [
      "번들이 조금 커질 뿐 동작은 똑같다",
      "CSS가 서로 덮어써진다",
      "라우터가 주소창을 두 번 바꾼다",
      "Invalid hook call 에러가 나거나 셸의 Context가 리모트에 전달되지 않는다",
    ],
    answer: 3,
    explanation:
      "훅과 Context는 React 모듈 안의 전역 상태에 기대기 때문에 사본이 다르면 서로를 모른다. 그래서 React 같은 라이브러리는 shared에 singleton으로 선언해 하나만 띄운다.",
    anchor: "react가-두-개-뜨면-생기는-일",
  },
  {
    id: "micro-frontends-5",
    post: "micro-frontends",
    question: "리모트끼리 상태를 주고받을 때 셸의 전역 스토어를 직접 공유하는 방식을 피하는 이유는?",
    choices: [
      "브라우저가 전역 객체 공유를 막기 때문에",
      "스토어 구조가 숨은 계약이 되어 한쪽 변경이 다른 팀을 조용히 깨뜨리기 때문에",
      "전역 스토어는 서버 렌더링에서만 동작하기 때문에",
      "CustomEvent보다 항상 느리기 때문에",
    ],
    answer: 1,
    explanation:
      "스토어 모양을 여러 팀이 직접 만지면 그 모양 자체가 문서에 없는 공개 API가 된다. URL이나 이름과 payload가 정해진 이벤트처럼 작고 눈에 보이는 계약을 쓰면 변경의 영향을 추적하기 쉽다.",
    anchor: "앱끼리-말을-거는-방법",
  },
  {
    id: "micro-frontends-6",
    post: "micro-frontends",
    question: "리모트 배포 결과물을 버전 경로에 쌓아 두고 옛 파일을 바로 지우지 않는 이유로 가장 알맞은 것은?",
    choices: [
      "CDN 비용을 줄이려고",
      "빌드 시간을 줄이려고",
      "포인터만 바꿔 롤백하고, 열려 있던 탭이 옛 청크를 요청해도 ChunkLoadError가 나지 않게 하려고",
      "검색 엔진이 옛 버전을 색인하게 하려고",
    ],
    answer: 2,
    explanation:
      "설정의 포인터만 이전 버전으로 돌리면 다시 빌드하지 않고 롤백이 끝난다. 또 배포 직전에 열린 탭은 옛 진입 파일을 들고 있어서, 옛 청크가 지워져 있으면 로딩에 실패한다.",
    anchor: "따로-배포하면-따로-되돌린다",
  },
  {
    id: "micro-frontends-7",
    post: "micro-frontends",
    question: "팀이 적고 배포 대기가 큰 병목이 아닐 때 먼저 해 볼 만한 것은?",
    choices: [
      "모노레포에서 영역별 패키지를 나누고 린트 규칙과 CODEOWNERS로 경계를 강제한다",
      "모든 화면을 iframe으로 나눈다",
      "처음부터 모든 화면을 Module Federation 리모트로 쪼갠다",
      "디자인 시스템을 없애고 팀마다 스타일을 따로 만든다",
    ],
    answer: 0,
    explanation:
      "마이크로 프런트엔드는 공유 의존성, 계약 테스트, 배포 포인터 같은 운영 비용이 크다. 모노레포 안에서 경계를 먼저 그어 두면 대부분의 문제가 풀리고, 나중에 필요할 때 한 영역씩 떼어 내기도 쉽다.",
    anchor: "대부분은-모노레포로-충분하다",
  },
];
