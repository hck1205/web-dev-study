import type { QuizQuestion } from "../types";

export const LIGHTHOUSE_EXPLAINED: QuizQuestion[] = [
  {
    id: "lighthouse-explained-1",
    post: "lighthouse-explained",
    question: "기본 설정(simulate)의 Lighthouse가 모바일 성능을 재는 방식으로 맞는 것은?",
    choices: [
      "크롬에 네트워크와 CPU 제한을 걸고 느린 상태로 페이지를 연다",
      "실제 안드로이드 기기를 원격으로 연결해서 잰다",
      "페이지를 빠르게 연 뒤, 기록으로 만든 의존 그래프를 느린 조건에서 다시 계산한다",
      "CrUX에 쌓인 실제 사용자 값을 가져와 보여 준다",
    ],
    answer: 2,
    explanation:
      "simulate는 페이지를 내 컴퓨터 속도로 열고, 기록에서 요청과 작업의 의존 그래프를 만들어 Lantern으로 RTT 150ms, 1.6Mbps, CPU 4배 감속 조건을 계산한다. 크롬에 실제로 제한을 거는 건 devtools 방식이다.",
    anchor: "lighthouse가-페이지를-여는-순서",
  },
  {
    id: "lighthouse-explained-2",
    post: "lighthouse-explained",
    question: "설치한 Lighthouse 13.5.0의 모바일 성능 점수에서 가중치가 가장 큰 지표는?",
    choices: ["LCP", "TBT", "CLS", "INP"],
    answer: 1,
    explanation:
      "가중치는 FCP 10, Speed Index 10, LCP 25, TBT 30, CLS 25다. INP는 목록에 있지만 navigation 측정에서는 아무도 누르지 않아 가중치가 0이고, TBT가 그 자리를 대신한다.",
    anchor: "다섯-개의-시간을-점수-하나로",
  },
  {
    id: "lighthouse-explained-3",
    post: "lighthouse-explained",
    question:
      "FCP 뒤에 30ms짜리 작업 네 개가 도는 페이지를 simulate로 쟀더니 TBT가 280ms였다. 어떻게 나온 값인가?",
    choices: [
      "30ms × 4 = 120ms에 기본 지연 160ms를 더했다",
      "네 작업을 하나로 합친 120ms에서 50ms를 빼고 4배 했다",
      "작업마다 CPU 4배 감속으로 120ms가 되고, 50ms를 넘는 70ms씩 네 번 더했다",
      "TBT는 실측값이라 기계가 느려서 그렇게 나왔다",
    ],
    answer: 2,
    explanation:
      "simulate는 관찰한 작업 시간에 CPU 배수 4를 곱한다. 30ms 작업은 120ms가 되고, 50ms를 넘은 70ms가 막힌 시간이라 70 × 4 = 280ms다. 내 노트북에서는 긴 작업이 아니었던 코드도 느린 폰 기준으로는 긴 작업이 된다.",
    anchor: "느린-폰을-흉내-내는-세-가지-방법",
  },
  {
    id: "lighthouse-explained-4",
    post: "lighthouse-explained",
    question: "같은 페이지의 Lighthouse 점수가 28점에서 51점까지 흔들린다. 가장 먼저 의심할 원인은?",
    choices: [
      "Lighthouse의 점수 곡선이 실행마다 무작위로 바뀐다",
      "타이머와 네트워크 응답이 경주하는 코드처럼 페이지 자체가 매번 다르게 동작한다",
      "가중치가 실행마다 다시 계산된다",
      "CLS는 항상 시뮬레이션 값이라 오차가 크다",
    ],
    answer: 1,
    explanation:
      "글의 데모에서 고친 페이지는 여섯 번 모두 94점이었고, 흔들린 건 타이머로 배너를 넣고 lazy 이미지가 늦게 자리를 잡는 페이지뿐이었다. 관찰한 기록이 달라지면 시뮬레이션 결과도 갈린다. CLS는 시뮬레이션하지 않고 관찰값을 쓴다.",
    anchor: "같은-페이지가-28점과-51점을-오간다",
  },
  {
    id: "lighthouse-explained-5",
    post: "lighthouse-explained",
    question:
      "Lighthouse CI에서 점수 단언을 minScore 0.9로 걸었고, 세 번 측정한 점수가 0.5, 0.54, 0.36이었다. 기본 설정에서 로그의 found에 찍히는 값은?",
    choices: ["0.36", "0.47", "0.5", "0.54"],
    answer: 3,
    explanation:
      "LHCI 단언의 기본 집계 방식은 optimistic이라 하한 검사에는 가장 좋은 값(최댓값)을 쓴다. 한 번만 좋아도 통과하는 쪽으로 기울어서, 가운데 값으로 보려면 aggregationMethod를 median으로 준다. median이면 0.5다.",
    anchor: "pr마다-lighthouse를-돌린다",
  },
  {
    id: "lighthouse-explained-6",
    post: "lighthouse-explained",
    question: "보고서의 LCP 분해(lcp-breakdown) 조각을 더하면 지표 칸의 LCP보다 작게 나온다. 왜인가?",
    choices: [
      "분해 값은 시뮬레이션 전에 실제로 관찰한 기록에서 계산했기 때문이다",
      "렌더 지연이 분해에서 빠져 있기 때문이다",
      "LCP 지표는 여러 번 잰 값의 평균이기 때문이다",
      "분해 값은 CrUX의 p75이기 때문이다",
    ],
    answer: 0,
    explanation:
      "인사이트는 관찰한 trace에서 나오고, 지표 칸의 LCP는 Lantern이 느린 조건으로 계산한 값이다. 분해 합은 JSON의 observedLargestContentfulPaint와 같다. 그래서 분해는 조각 사이 비율로 원인을 찾는 데 쓴다.",
    anchor: "보고서에서-먼저-볼-곳",
  },
  {
    id: "lighthouse-explained-7",
    post: "lighthouse-explained",
    question: "모바일로 42점이던 페이지를 --preset=desktop으로 쟀더니 94점이 나왔다. 이 결과를 어떻게 읽어야 하나?",
    choices: [
      "데스크톱에서 고쳐진 것이니 모바일도 곧 좋아진다",
      "CPU 감속이 없고 네트워크가 빠르며 점수 곡선도 다른 측정이라 모바일 점수와 비교할 수 없다",
      "데스크톱이 더 정확한 측정이라 이 점수를 기준으로 삼는다",
      "가중치만 다르고 나머지는 같으니 두 점수의 평균을 쓴다",
    ],
    answer: 1,
    explanation:
      "데스크톱 프리셋은 CPU 감속 없이 RTT 40ms, 10Mbps 네트워크로 재고 지표 곡선의 기준점도 더 엄격한 값으로 바꾼다. 같은 측정값이라도 곡선이 다르면 점수가 달라지니 두 점수는 같은 자로 잰 숫자가 아니다. 사용자가 주로 모바일이라면 모바일 결과와 현장 데이터를 본다.",
    anchor: "점수를-잘못-읽는-흔한-경우",
  },
];
