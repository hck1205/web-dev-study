import type { QuizQuestion } from "../types";

export const PATTERN_BRIDGE: QuizQuestion[] = [
  {
    id: "pattern-bridge-1",
    post: "pattern-bridge",
    question: "SvgBarChart, CanvasBarChart, SvgLineChart…처럼 클래스 이름이 두 단어의 조합으로 늘고 있다. 브리지로 나누면 무엇이 달라지나?",
    choices: [
      "클래스 수가 차트 종류 × 그리는 방식에서 차트 종류 + 그리는 방식으로 준다",
      "클래스가 하나로 합쳐진다",
      "그리는 방식을 실행 중에 자주 바꿀 수 있게 된다",
      "차트 종류를 더할 때 렌더러도 함께 고쳐야 한다",
    ],
    answer: 0,
    explanation:
      "차트 종류와 그리는 방식을 따로 계층으로 두고 차트가 렌더러를 참조하게 하면, 한쪽에 클래스를 더해도 다른 쪽은 그대로다. 3 × 4 = 12개가 3 + 4 = 7개가 된다. 다만 축이 하나뿐일 때는 상속보다 클래스가 오히려 많다.",
    anchor: "두-방향으로-갈라지는-상속",
  },
  {
    id: "pattern-bridge-2",
    post: "pattern-bridge",
    question: "브리지에서 막대 높이를 계산하는 코드는 어디에 두나?",
    choices: [
      "각 렌더러 안에",
      "BarChart 같은 추상 쪽에 한 번만",
      "렌더러 인터페이스의 기본 구현에",
      "차트를 만드는 화면 코드에",
    ],
    answer: 1,
    explanation:
      "무엇을 어디에 그릴지는 추상 쪽이, 받은 좌표를 어떻게 그릴지는 구현 쪽이 맡는다. 높이 계산이 BarChart 한곳에 있으니 반올림 버그도 한 번만 고치면 되고, 렌더러는 rect와 text만 안다.",
    anchor: "무엇을-그릴지와-어떻게-그릴지를-떼어-놓는다",
  },
  {
    id: "pattern-bridge-3",
    post: "pattern-bridge",
    question: "\"추상을 구현에서 분리한다\"에서 구현이 뜻하는 것은?",
    choices: [
      "implements 키워드로 인터페이스를 구현한 클래스",
      "abstract 메서드의 본문",
      "추상 쪽 개념을 실제로 해내는 저수준 수단(SVG, 표준 출력, DB 드라이버)",
      "테스트용 가짜 객체",
    ],
    answer: 2,
    explanation:
      "브리지의 추상은 클라이언트가 쓰는 고수준 개념이고, 구현은 그걸 해내는 수단이다. slog의 Logger와 Handler, database/sql과 드라이버가 그 예다. 보통의 인터페이스 구현과 달리 추상 쪽도 하위 클래스로 따로 확장된다.",
    anchor: "여기서-말하는-구현은-implements가-아니다",
  },
  {
    id: "pattern-bridge-4",
    post: "pattern-bridge",
    question: "slog에서 JSONHandler의 Level을 Warn으로 두고 logger.Info를 부르면 어떻게 되나?",
    choices: [
      "Logger가 Record를 만든 뒤 Handler가 버린다",
      "Logger가 먼저 Handler의 Enabled를 묻고, false라서 Record도 만들지 않는다",
      "Warn 레벨로 바뀌어 출력된다",
      "에러를 돌려준다",
    ],
    answer: 1,
    explanation:
      "걸러 내는 기준은 구현 쪽 Handler의 Enabled가 판단하고, 추상 쪽 Logger는 출력 전에 그걸 먼저 물어본다. 그래서 걸러질 로그는 Record를 만드는 비용도 들지 않는다.",
    anchor: "go의-slog가-나눠-놓은-두-쪽",
  },
  {
    id: "pattern-bridge-5",
    post: "pattern-bridge",
    question: "브리지와 전략 패턴을 가르는 질문으로 가장 알맞은 것은?",
    choices: [
      "인터페이스 타입의 필드를 들고 위임하는가",
      "구현 클래스가 둘 이상인가",
      "생성자에서 의존성을 받는가",
      "쓰는 쪽도 하위 클래스로 따로 늘어나는가",
    ],
    answer: 3,
    explanation:
      "위임하는 구조는 둘이 같다. 전략은 알고리즘 하나를 갈아 끼우는 게 목적이고 쓰는 쪽은 보통 계층이 없다. 브리지는 추상과 구현 두 계층이 각자 확장되는 구조를 처음부터 설계한다.",
    anchor: "전략-어댑터와-무엇이-다른가",
  },
  {
    id: "pattern-bridge-6",
    post: "pattern-bridge",
    question: "첫 렌더러가 SVG라서 Renderer 인터페이스를 SVG 기능 목록대로 만들었다. 나중에 생길 문제는?",
    choices: [
      "SVG 렌더러가 느려진다",
      "텍스트 렌더러처럼 나중 구현이 그라데이션 같은 메서드를 표현할 방법이 없다",
      "차트 종류를 더할 수 없게 된다",
      "타입스크립트가 인터페이스를 거부한다",
    ],
    answer: 1,
    explanation:
      "구현 쪽 인터페이스를 첫 구현에 맞추면 다른 구현이 지킬 수 없는 메서드가 생긴다. 인터페이스는 추상 쪽이 실제로 필요로 하는 동작으로 정하고, 특정 구현만 가능한 기능은 그 구현의 옵션으로 둔다.",
    anchor: "미리-나눴다가-후회하는-경우",
  },
];
