import type { QuizQuestion } from "../types";

export const THREAT_MODELING_STRIDE: QuizQuestion[] = [
  {
    id: "threat-modeling-stride-1",
    post: "threat-modeling-stride",
    question: "위험 = 위협 × 취약점 × 영향이라는 식에서 '모든 위협을 없앤다'가 목표가 될 수 없는 이유는?",
    choices: [
      "위협은 측정할 수 없어서",
      "위협은 거의 항상 1 이상이고 셋 중 하나만 0이면 위험이 낮아지므로, 큰 자리부터 막는 게 현실적이기 때문",
      "취약점이 더 중요하기 때문",
      "영향은 통제할 수 없기 때문",
    ],
    answer: 1,
    explanation:
      "자동 스캐너는 이유를 가리지 않고 열린 엔드포인트를 탐색하므로 위협은 거의 항상 1 이상이다. 그래서 위협을 0으로 만드는 대신, 위협·취약점·영향의 곱이 큰 자리부터 막는 것이 목표다.",
    anchor: "위험은-세-가지가-곱해져-나온다",
  },
  {
    id: "threat-modeling-stride-2",
    post: "threat-modeling-stride",
    question: "데이터 흐름도를 그린 뒤 신뢰 경계를 긋는 이유는?",
    choices: [
      "그림을 보기 좋게 만들려고",
      "믿는 쪽과 못 믿는 쪽이 갈리는 선을 넘는 화살표가 공격 표면이고 위협이 거기서 생기기 때문",
      "데이터 저장소를 세기 위해",
      "성능 병목을 찾기 위해",
    ],
    answer: 1,
    explanation:
      "위협은 거의 전부 신뢰 경계를 넘는 자리에서 생긴다. 경계를 그어 두면 어느 화살표에 STRIDE를 집중할지 정해진다. 경계 안에서만 도는 흐름은 우선순위가 낮다.",
    anchor: "데이터가-흐르는-길부터-그린다",
  },
  {
    id: "threat-modeling-stride-3",
    post: "threat-modeling-stride",
    question: "공유 링크 토큰이 순번(/s/1001, /s/1002)이면 STRIDE 중 어느 위협에 해당하고, 대응 통제는?",
    choices: [
      "Tampering — HTTPS를 쓴다",
      "Denial of Service — 요청 수를 제한한다",
      "Spoofing — 토큰을 추측 불가능한 난수로 만든다",
      "Repudiation — 접근 로그를 남긴다",
    ],
    answer: 2,
    explanation:
      "다음 번호를 맞혀 남의 링크 행세를 하는 것은 신분 위장(Spoofing)이다. 대응은 128비트 이상 추측 불가능한 난수 토큰이다. 로그·요청 제한·HTTPS는 다른 칸(R·D·T)의 통제다.",
    anchor: "여섯-글자로-위협을-빠짐없이-센다",
  },
  {
    id: "threat-modeling-stride-4",
    post: "threat-modeling-stride",
    question: "가능성×영향 점수가 똑같이 10인 위협 A(가능성 5·영향 2)와 B(가능성 2·영향 5)가 있다. 보통 어느 쪽을 먼저 처리하나?",
    choices: [
      "A — 자주 일어나므로",
      "B — 가능성은 통제로 낮추기 쉽지만 영향은 터진 뒤 되돌리기 어렵기 때문",
      "둘은 완전히 같아 순서가 의미 없다",
      "id가 앞서는 쪽",
    ],
    answer: 1,
    explanation:
      "곱이 같아도 영향이 큰 쪽을 앞에 둔다. 가능성은 통제로 낮추기 쉽지만 영향은 터진 뒤 되돌리기 어렵기 때문이다. 글의 정렬 규칙도 동점이면 impact가 큰 쪽을 먼저 둔다.",
    anchor: "찾은-위협을-줄-세운다",
  },
  {
    id: "threat-modeling-stride-5",
    post: "threat-modeling-stride",
    question: "위협 점수(가능성×영향)의 한계를 바르게 설명한 것은?",
    choices: [
      "점수가 높으면 반드시 먼저 터진다",
      "점수는 측정값이 아니라 팀의 합의라 정확한 순위가 아니라 높음·중간·낮음 같은 대략의 묶음으로 써야 한다",
      "점수는 항상 정확하므로 소수점까지 비교해야 한다",
      "점수는 영향만 반영하므로 쓸모없다",
    ],
    answer: 1,
    explanation:
      "likelihood 4와 5의 차이는 느낌이지 측정값이 아니다. 그래서 점수는 높음·중간·낮음으로 묶어 쓰고, 소수점까지 비교하면 숫자에 속는다.",
    anchor: "찾은-위협을-줄-세운다",
  },
  {
    id: "threat-modeling-stride-6",
    post: "threat-modeling-stride",
    question: "STRIDE와 PASTA의 차이로 맞는 것은?",
    choices: [
      "STRIDE는 사업 목표에서, PASTA는 시스템에서 출발한다",
      "STRIDE는 시스템에서 출발해 빠짐없이 세고, PASTA는 사업 목표와 공격자에서 출발하는 위험 중심 방식이라 더 무겁다",
      "둘은 완전히 같은 방법이다",
      "PASTA는 코드 스캔 도구다",
    ],
    answer: 1,
    explanation:
      "STRIDE는 그림의 각 요소에서 위협을 빠짐없이 세는 시스템 중심이고, PASTA는 사업 목표와 공격자 시나리오에서 거꾸로 위협을 끌어내는 위험 중심이라 크고 길게 보는 분석에 맞는다.",
    anchor: "stride-말고-다른-길-pasta",
  },
  {
    id: "threat-modeling-stride-7",
    post: "threat-modeling-stride",
    question: "위협 모델이 낡지 않게 하는 가장 현실적인 방법은?",
    choices: [
      "분기마다 전체 시스템을 한 번에 다시 모델링한다",
      "모델을 저장소 안 텍스트로 두고 설계가 바뀌는 PR에서 함께 갱신하며, PR 템플릿에 신뢰 경계 변화 체크를 넣는다",
      "보안팀에만 맡기고 개발팀은 신경 쓰지 않는다",
      "그림 파일로 만들어 위키에 올려 둔다",
    ],
    answer: 1,
    explanation:
      "그림 파일로 묻어 두면 설계가 바뀌어도 모델은 첫날에 멈춘다. 저장소 안 텍스트로 두고 같은 PR에서 바뀌게 하고, PR 템플릿의 체크 한 줄로 리뷰어가 멈추게 하는 작고 잦은 방식이 가장 현실적이다.",
    anchor: "모델이-낡지-않게-한다",
  },
];
