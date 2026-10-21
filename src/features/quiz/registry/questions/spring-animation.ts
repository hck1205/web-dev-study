import type { QuizQuestion } from "../types";

export const SPRING_ANIMATION: QuizQuestion[] = [
  {
    id: "spring-animation-1",
    post: "spring-animation",
    question: "메뉴가 열리는 도중에 다시 눌러 닫으면 CSS transition은 뚝 끊겨 보이고 스프링은 매끄럽다. 가장 큰 이유는?",
    choices: [
      "스프링은 GPU에서 계산되기 때문이다",
      "CSS transition은 새 시간표를 시작하며 이전 속도를 버리지만, 스프링은 위치와 속도를 그대로 두고 목표만 바꾸기 때문이다",
      "CSS transition은 60fps보다 느리게 그려지기 때문이다",
      "스프링은 끝나는 시간이 항상 더 짧기 때문이다",
    ],
    answer: 1,
    explanation:
      "스프링은 매 프레임 위치와 속도를 상태로 들고 적분한다. 목표가 바뀌어도 속도가 이어지니 +3.60/s가 1.86, −0.57로 부드럽게 꺾인다. 같은 순간 ease-out 전환을 새로 시작하면 시작 속도가 −8.88/s로 튄다.",
    anchor: "중간에-목표가-바뀌는-순간",
  },
  {
    id: "spring-animation-2",
    post: "spring-animation",
    question: "stiffness 300·damping 10·mass 1과 stiffness 100·damping 10·mass 3은 넘침이 둘 다 38.7%였다. 왜 같은가?",
    choices: [
      "damping이 같아서",
      "둘 다 고유 진동수가 같아서",
      "감쇠비 ζ가 둘 다 약 0.289로 같고, 넘침은 ζ만으로 정해지기 때문에",
      "1ms 적분 오차 때문에 우연히 같아졌다",
    ],
    answer: 2,
    explanation:
      "첫 넘침 비율은 exp(−ζπ / √(1 − ζ²))로 ζ만의 함수다. ζ = damping / (2√(stiffness × mass))가 둘 다 0.289라서 넘침이 같다. 대신 고유 진동수가 달라 멈추는 시간은 827ms와 2489ms로 크게 다르다.",
    anchor: "얼마나-넘치나",
  },
  {
    id: "spring-animation-3",
    post: "spring-animation",
    question: "출렁임이 너무 오래 남는 스프링을 빨리 멈추게 하고 싶다. 글의 계산에 따르면 무엇을 바꿔야 하나?",
    choices: [
      "stiffness를 크게 올린다",
      "damping을 올리거나 mass를 내린다",
      "duration을 줄인다",
      "목표 값을 1보다 작게 한다",
    ],
    answer: 1,
    explanation:
      "진폭이 줄어드는 속도 ζω₀는 풀어 쓰면 damping / (2 × mass)라서 stiffness가 들어 있지 않다. 실제로 stiffness를 100에서 300으로 올려도 정착 시간은 875ms에서 827ms로 거의 그대로였다.",
    anchor: "세-숫자가-정하는-성격",
  },
  {
    id: "spring-animation-4",
    post: "spring-animation",
    question: "react-spring의 default 프리셋(tension 170, friction 26, mass 1)을 적분해 보면 어떻게 움직이나?",
    choices: [
      "약 20% 넘쳤다가 여러 번 출렁인다",
      "ζ가 약 0.997이라 사실상 넘치지 않고 509ms쯤에 1% 안으로 들어온다",
      "목표에 영영 도달하지 못한다",
      "정확히 300ms에 끝난다",
    ],
    answer: 1,
    explanation:
      "ζ = 26 / (2√170) ≈ 0.997로 거의 임계감쇠다. 그래서 넘침은 0%이고 1% 안에 드는 시간은 509ms였다. 스프링 라이브러리를 쓴다고 다 출렁이는 게 아니라서, 톡 튀는 느낌을 원하면 ζ를 0.5~0.7로 내려야 한다.",
    anchor: "얼마나-넘치나",
  },
  {
    id: "spring-animation-5",
    post: "spring-animation",
    question: "`cubic-bezier(0.34, 1.56, 0.64, 1)`과 스프링을 적분해 만든 `linear()`의 차이로 맞는 것은?",
    choices: [
      "cubic-bezier도 목표 아래로 다시 내려가는 출렁임을 만들 수 있다",
      "linear()은 브라우저에서 지원하지 않는 비표준 함수다",
      "cubic-bezier는 한 번만 넘치고 끝나지만 linear()은 목표 위아래로 출렁일 수 있다. 둘 다 길이가 고정된 시간표다",
      "linear()을 쓰면 중간에 목표가 바뀌어도 속도가 이어진다",
    ],
    answer: 2,
    explanation:
      "크로미움에서 재 보면 cubic-bezier는 109.3까지 한 번 올라갔다 내려오고, linear()은 120.4까지 넘쳤다가 95.9까지 내려간다. 하지만 둘 다 미리 그린 시간표라서 중간에 목표가 바뀌는 상황은 진짜 스프링만 매끄럽게 처리한다.",
    anchor: "css만으로-흉내-내기",
  },
  {
    id: "spring-animation-6",
    post: "spring-animation",
    question: "디자이너가 SwiftUI에서 dampingFraction 0.7로 맞췄다고 한다. stiffness 100·mass 1인 웹 스프링 라이브러리에서 damping은 얼마로 옮기나?",
    choices: ["0.7", "7", "14", "70"],
    answer: 2,
    explanation:
      "dampingFraction은 감쇠비 ζ다. damping 계수는 2 × ζ × √(stiffness × mass)이므로 2 × 0.7 × √100 = 14다. damping에 0.7을 그대로 넣으면 브레이크가 거의 없어 크게 출렁인다.",
    anchor: "라이브러리마다-부르는-이름",
  },
];
