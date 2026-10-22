import type { QuizQuestion } from "../types";

export const FRONTEND_PERFORMANCE_MAP: QuizQuestion[] = [
  {
    id: "frontend-performance-map-1",
    post: "frontend-performance-map",
    question: "망만 느리게 하자 LCP가 260ms에서 3912ms로, CPU만 느리게 하자 660ms가 됐다. 이 페이지의 LCP를 줄이려면 어디부터 보는 게 맞을까?",
    choices: [
      "긴 작업을 쪼개 입력에 양보한다",
      "첫 로드 바이트와 요청 순서(덜 보내기, 일찍 보내기)",
      "애니메이션을 transform으로 바꾼다",
      "React.memo로 리렌더링을 줄인다",
    ],
    answer: 1,
    explanation:
      "조건을 하나씩 켜 보니 LCP는 망에 묶여 있었다. 망에 묶인 지표는 바이트를 줄이고 핵심 리소스를 일찍 출발시켜야 움직인다. 긴 작업 쪼개기나 리렌더링 줄이기는 CPU에 묶인 지표에 듣는다.",
    anchor: "노트북에서는-아무도-느리다고-하지-않는다",
  },
  {
    id: "frontend-performance-map-2",
    post: "frontend-performance-map",
    question: "실사용자 측정(RUM)과 실험실 측정을 함께 쓰는 방식으로 가장 알맞은 것은?",
    choices: [
      "실험실 점수만 올리면 실사용자 숫자도 같이 오른다",
      "실사용자 측정은 원인 추적용, 실험실 측정은 분포 확인용이다",
      "실사용자 숫자로 나쁜 페이지와 기기층을 찾고, 실험실에서 재현해 고친 뒤 다시 실사용자 숫자로 확인한다",
      "둘 중 하나만 있으면 충분하다",
    ],
    answer: 2,
    explanation:
      "실사용자 측정은 진짜 분포를 보여 주지만 원인을 바로 알려 주지 않고, 실험실 측정은 조건이 고정되어 비교와 추적이 쉽지만 실제 기기와 망을 모른다. 그래서 찾기는 실사용자, 고치기는 실험실, 확인은 다시 실사용자로 나눈다.",
    anchor: "고치기-전에-재는-것",
  },
  {
    id: "frontend-performance-map-3",
    post: "frontend-performance-map",
    question: "실사용자 LCP를 평균 대신 p75로 보는 이유는?",
    choices: [
      "평균은 빠른 다수가 느린 소수를 가려서 하위 사용자의 느림을 놓친다",
      "p75가 계산하기 더 쉽다",
      "브라우저가 평균값을 제공하지 않는다",
      "p75는 항상 평균보다 작아서 보기 좋다",
    ],
    answer: 0,
    explanation:
      "고성능 기기 사용자가 많으면 평균은 좋아 보여도 느린 사용자는 그대로다. p75는 넷 중 셋이 그보다 빠르다는 뜻이라 느린 쪽을 놓치지 않으면서 극단값에 덜 흔들린다.",
    anchor: "고치기-전에-재는-것",
  },
  {
    id: "frontend-performance-map-4",
    post: "frontend-performance-map",
    question: "다섯 손잡이 중 '덜 보내기'가 '덜 실행하기'보다 효과가 넓게 번지는 이유는?",
    choices: [
      "덜 보내면 서버 비용이 줄기 때문이다",
      "보내지 않은 바이트는 받을 필요도, 파싱하고 실행할 필요도 없어서 뒤 단계 비용까지 사라진다",
      "브라우저가 작은 파일을 더 높은 우선순위로 받기 때문이다",
      "INP는 바이트 수로만 결정되기 때문이다",
    ],
    answer: 1,
    explanation:
      "앞쪽 손잡이일수록 그 뒤 단계의 일까지 함께 없앤다. 예제에서 덜 보내기 하나로 LCP와 긴 작업이 함께 줄었다. 다만 INP처럼 상호작용 중의 문제는 메인 스레드 쪽에서만 풀린다.",
    anchor: "다섯-개의-손잡이",
  },
  {
    id: "frontend-performance-map-5",
    post: "frontend-performance-map",
    question: "모든 폰트와 이미지, 스크립트에 preload를 붙였더니 LCP가 오히려 나빠졌다. 왜일까?",
    choices: [
      "preload된 리소스는 캐시되지 않는다",
      "preload는 HTTP/2에서 동작하지 않는다",
      "모든 것이 같은 회선을 다투면서 진짜 급한 LCP 이미지가 그 사이에 끼어 늦어졌다",
      "preload가 렌더링을 막는 스크립트로 바뀐다",
    ],
    answer: 2,
    explanation:
      "일찍 보내기는 늦게 발견되는 핵심 리소스 몇 개에만 써야 한다. 모두 앞당기면 결국 모두가 대역폭을 나눠 쓰고, 정작 LCP 요소의 순서가 밀린다.",
    anchor: "일찍-보내기",
  },
  {
    id: "frontend-performance-map-6",
    post: "frontend-performance-map",
    question: "몇 달에 걸쳐 조금씩 느려지는 것을 막는 방법으로 가장 알맞은 것은?",
    choices: [
      "분기마다 한 번 Lighthouse를 돌려 본다",
      "새 라이브러리 추가를 금지한다",
      "개발자 노트북에서 체감으로 확인한다",
      "종류별 바이트와 지표에 성능 예산을 정하고 CI에서 넘으면 실패시킨다",
    ],
    answer: 3,
    explanation:
      "기능 하나가 더하는 느림은 티가 안 나서 아무도 눈치채지 못한다. 숫자로 한도를 정하고 빌드마다 자동으로 검사해야 되돌아가지 않는다. 실사용자 숫자는 배포 버전별로 나눠 본다.",
    anchor: "좋아진-숫자가-되돌아가지-않게",
  },
];
