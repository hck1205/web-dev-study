import type { QuizQuestion } from "../types";

export const TYPESCRIPT_ROADMAP: QuizQuestion[] = [
  {
    id: "typescript-roadmap-1",
    post: "typescript-roadmap",
    question: "Next.js 빌드는 성공했는데 `tsc --noEmit`에서는 타입 에러가 나왔다. 어떻게 된 일인가?",
    choices: [
      "번들러는 파일마다 타입을 지우기만 하고 검사하지 않아서, 타입이 틀려도 자바스크립트를 만든다",
      "tsc가 번들러보다 최신 문법을 몰라서 잘못된 에러를 낸다",
      "빌드할 때는 skipLibCheck가 자동으로 꺼져서 결과가 다르다",
      "noEmit을 켜면 strict가 함께 켜져 더 엄격해진다",
    ],
    answer: 0,
    explanation:
      "타입 검사와 변환은 다른 도구가 한다. 번들러는 빠르게 타입만 지워 자바스크립트를 만들고, 타입이 맞는지는 tsc가 따로 확인해야 안다. 그래서 CI에 tsc --noEmit을 별도 단계로 둔다.",
    anchor: "타입은-어디에서-일하고-어디에서-사라지나",
  },
  {
    id: "typescript-roadmap-2",
    post: "typescript-roadmap",
    question: "`interface User`가 있을 때 API 응답이 정말 User 모양인지 런타임에 확인하려면?",
    choices: [
      "`response instanceof User`로 검사한다",
      "`response as User`로 단언하면 검사가 함께 일어난다",
      "unknown으로 받고 타입 가드나 스키마 검증으로 확인한다",
      "tsconfig에서 strict를 켜면 런타임 검사 코드가 생성된다",
    ],
    answer: 2,
    explanation:
      "interface는 컴파일 뒤에 사라져서 instanceof로 검사할 수 없고, as는 검사 없이 타입만 바꾸는 단언이다. 바깥에서 오는 값은 unknown으로 받아 직접 좁히거나 스키마로 검증해야 한다. strict는 컴파일 시점의 검사만 바꾼다.",
    anchor: "타입은-어디에서-일하고-어디에서-사라지나",
  },
  {
    id: "typescript-roadmap-3",
    post: "typescript-roadmap",
    question: "TS2322(Type 'X' is not assignable to type 'Y')를 만났을 때 원인을 빨리 찾는 방법으로 알맞은 것은?",
    choices: [
      "2322는 항상 strict 옵션 문제이므로 tsconfig부터 본다",
      "번호로 범위를 정하고, 들여 쓴 메시지의 마지막 줄에서 구체적인 원인을 찾는다",
      "첫 줄 메시지만 검색하고 아래 줄은 무시한다",
      "줄과 열이 가리키는 위치가 항상 고칠 곳이다",
    ],
    answer: 1,
    explanation:
      "2322는 할당 실패를 뜻하는 흔한 번호라 번호만으로는 원인이 갈리지 않는다. 들여 쓴 줄들이 이유를 한 단계씩 자세히 말하므로 맨 아래 줄이 가장 구체적이다. 표시된 위치는 에러가 드러난 곳이고 고칠 곳은 선언부일 때가 많다.",
    anchor: "에러-코드에서-글-찾기",
  },
  {
    id: "typescript-roadmap-4",
    post: "typescript-roadmap",
    question: "JS 저장소를 TypeScript로 옮길 때 처음부터 strict를 켜고 모든 파일 이름을 한 번에 바꾸면 흔히 어떻게 되나?",
    choices: [
      "에러가 너무 많아 any와 as로 덮고 끝나기 쉽다",
      "strict는 .js 파일에는 적용되지 않아 아무 변화가 없다",
      "tsc가 자동으로 타입을 추론해 에러가 거의 없다",
      "번들러가 빌드를 거부해서 배포가 막힌다",
    ],
    answer: 0,
    explanation:
      "한꺼번에 바꾸면 수천 개의 에러가 나와 any와 as로 덮게 되고, 그렇게 들어온 any는 검사를 끈 구멍으로 남는다. allowJs와 checkJs로 시작해 경계 파일부터 옮기고, strict 플래그를 하나씩 켜며 에러를 0으로 만드는 순서가 현실적이다.",
    anchor: "자바스크립트-프로젝트를-옮기는-순서",
  },
  {
    id: "typescript-roadmap-5",
    post: "typescript-roadmap",
    question: "갑자기 TS18048(possibly 'undefined') 에러가 수십 개 늘었는데 코드는 거의 안 바뀌었다. 먼저 확인할 것은?",
    choices: [
      "React 버전이 올라갔는지",
      "node_modules를 다시 설치했는지",
      "파일 확장자가 .tsx로 바뀌었는지",
      "누군가 tsconfig에서 noUncheckedIndexedAccess 같은 옵션을 켰는지",
    ],
    answer: 3,
    explanation:
      "코드가 그대로인데 undefined 관련 에러가 한꺼번에 늘면 검사 옵션이 바뀐 경우가 많다. noUncheckedIndexedAccess는 인덱스 접근마다 | undefined를 붙여서 맞는 코드에도 에러를 많이 낸다. TypeScript를 올려 strict 묶음에 새 검사가 들어온 경우도 비슷한 증상을 낸다.",
    anchor: "에러-코드에서-글-찾기",
  },
];
