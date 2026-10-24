import type { QuizQuestion } from "../types";

export const PRODUCT_ANALYTICS_FUNNELS: QuizQuestion[] = [
  {
    id: "product-analytics-funnels-1",
    post: "product-analytics-funnels",
    question: "가입 버튼 문구 실험의 효과를 볼 때 \"버튼 클릭 수\"만 주 지표로 삼으면 생기는 문제는?",
    choices: [
      "클릭은 서버에서만 셀 수 있어서 클라이언트 실험에 쓸 수 없다",
      "문구를 과장하면 클릭은 늘어도 가입 완료나 첫 사용은 줄 수 있어 가치와 어긋난다",
      "클릭 수는 표본 크기 계산에 쓸 수 없다",
      "클릭 이벤트는 동의 배너의 영향을 받지 않아 과대 추정된다",
    ],
    answer: 1,
    explanation:
      "클릭은 목표 결과로 가는 중간 지표일 뿐이다. 목표 결과는 \"7일 안에 첫 프로젝트를 만든 비율\"처럼 서비스가 가치를 준 순간에 가깝게 잡아야, 클릭만 늘고 실제 사용은 줄어드는 변경을 이겼다고 착각하지 않는다.",
    anchor: "결과-행동-행위자를-먼저-적는다",
  },
  {
    id: "product-analytics-funnels-2",
    post: "product-analytics-funnels",
    question: "요금제 선택을 기록할 때 `Plan Pro Selected`, `Plan Free Selected`처럼 값을 이벤트 이름에 넣지 않는 이유는?",
    choices: [
      "이벤트 이름에는 영어 대문자를 쓸 수 없어서",
      "수집 도구가 이벤트 이름 길이를 20자로 제한해서",
      "요금제가 늘 때마다 이벤트가 늘어나고, 한 행동을 합쳐 보려면 이벤트를 매번 모아야 해서",
      "값을 이름에 넣으면 eventId 중복 제거가 동작하지 않아서",
    ],
    answer: 2,
    explanation:
      "값은 속성으로 빼서 `Plan Selected`에 `plan: \"pro\"`를 둔다. 그래야 선택지가 바뀌어도 이벤트 정의는 그대로고, 요금제 선택 전체를 하나의 이벤트로 셀 수 있다.",
    anchor: "이벤트-이름은-대상과-과거형-동사로",
  },
  {
    id: "product-analytics-funnels-3",
    post: "product-analytics-funnels",
    question: "`Signup Completed`를 가입 버튼을 누를 때 브라우저에서 보내면 어떤 일이 생기나?",
    choices: [
      "서버에서 이메일 중복 등으로 실패한 사람까지 가입으로 세고, 차단기에 막힌 사람은 빠진다",
      "같은 사용자의 userId가 두 개로 갈라진다",
      "전환 기간 계산이 UTC가 아니라 기기 시간대로 바뀐다",
      "이벤트 이름 규칙을 어긴 것으로 스키마 검사에 걸린다",
    ],
    answer: 0,
    explanation:
      "성공이 확정되는 곳은 서버다. 버튼 클릭 시점에 보내면 실패한 시도도 완료로 세고, 광고 차단기나 탭 닫기로 일부가 사라진다. 확정된 결과 이벤트는 계정을 저장한 뒤 서버에서 보낸다.",
    anchor: "트래킹-플랜을-코드보다-먼저-쓴다",
  },
  {
    id: "product-analytics-funnels-4",
    post: "product-analytics-funnels",
    question: "탭을 닫을 때 큐에 남은 분석 이벤트를 보내는 방법으로 가장 알맞은 것은?",
    choices: [
      "`unload` 이벤트에서 일반 `fetch`로 보낸다",
      "`beforeunload`에서 `alert`로 사용자를 잠깐 붙잡고 보낸다",
      "다음 방문 때 localStorage에 남은 것을 보낸다는 가정으로 아무것도 하지 않는다",
      "`visibilitychange`에서 화면이 hidden이 될 때 `sendBeacon`이나 `keepalive` fetch로 보낸다",
    ],
    answer: 3,
    explanation:
      "모바일 브라우저는 앱 전환 뒤 `unload` 없이 탭을 정리하는 일이 많아 `unload`는 믿을 수 없다. 화면이 가려지는 순간 페이지가 닫혀도 브라우저가 대신 보내 주는 `sendBeacon`이나 `keepalive` 요청을 쓴다.",
    anchor: "브라우저에서-보낸-이벤트는-다-도착하지-않는다",
  },
  {
    id: "product-analytics-funnels-5",
    post: "product-analytics-funnels",
    question: "조회 → 폼 시작 → 가입 퍼널(전환 기간 24시간)에서, 조회 1분 뒤 폼을 시작하고 조회 26시간 뒤 가입한 사람은 어떻게 세나?",
    choices: [
      "가입했으니 세 단계 모두 전환으로 센다",
      "폼 시작 단계까지 온 것으로 센다",
      "전환 기간을 넘겼으니 조회 단계에도 넣지 않는다",
      "가입 단계만 센다",
    ],
    answer: 1,
    explanation:
      "전환 기간은 첫 단계 시각부터 잰다. 가입이 24시간을 넘겨 일어났으니 이 시도에서는 두 번째 단계까지만 도달한 것이다. 기간을 48시간으로 늘리면 같은 기록이 전환이 되므로 정의를 함께 적어야 한다.",
    anchor: "퍼널은-단계를-어떻게-정의하느냐가-반이다",
  },
  {
    id: "product-analytics-funnels-6",
    post: "product-analytics-funnels",
    question: "여섯 명의 활동일이 [0,1,2,7], [0,1], [0,8], [0], [0,3,7,14], [0,1,30]일 때 \"7일째 이후 언제든\" 리텐션은?",
    choices: ["33.3%", "50.0%", "66.7%", "16.7%"],
    answer: 2,
    explanation:
      "7일째나 그 뒤에 한 번이라도 온 사람은 7일, 8일, 14일, 30일에 온 네 명이라 4/6 = 66.7%다. 정확히 7일째만 세면 두 명이라 33.3%로, 같은 데이터에서 두 배 차이가 난다.",
    anchor: "처음-온-날로-묶어-리텐션을-본다",
  },
  {
    id: "product-analytics-funnels-7",
    post: "product-analytics-funnels",
    question: "2 × 2 × 2 다변량 테스트에서 8개 조합을 각각 대조군과 비교하며 본페로니 보정을 하면 필요한 전체 표본이 크게 늘어나는 이유는?",
    choices: [
      "무리가 8개로 늘고, 비교마다 기준을 0.05/7로 엄격하게 잡아 무리당 인원도 늘어서",
      "다변량 테스트는 검정력을 99%로 잡아야 해서",
      "조합이 많으면 해시 버킷이 고르게 나뉘지 않아서",
      "요인 설계에서는 주효과를 계산할 수 없어서",
    ],
    answer: 0,
    explanation:
      "보정 없이도 무리가 네 배라 전체가 A/B의 4배다. 일곱 번 비교하면 우연히 이긴 조합이 나올 확률이 커지니 비교 기준을 엄격하게 잡는데, 그러면 무리당 31,234명이 49,636명으로 늘어 전체가 약 6.4배가 된다.",
    anchor: "다변량-테스트는-표본을-몇-배로-먹는다",
  },
];
