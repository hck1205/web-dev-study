import type { QuizQuestion } from "../types";

export const RW_CLOUDFLARE_OUTAGE_REGEX: QuizQuestion[] = [
  {
    id: "rw-cloudflare-outage-regex-1",
    post: "rw-cloudflare-outage-regex",
    question: "문제의 WAF 규칙은 요청을 막지 않는 simulate 모드로 배포됐다. 그런데도 장애가 난 이유는?",
    choices: [
      "simulate 모드에 버그가 있어 실제로 요청을 막았다",
      "simulate 모드에서도 오탐률을 재려고 규칙을 모든 요청에 실제로 실행했다",
      "simulate 모드는 로그를 너무 많이 남겨 디스크가 찼다",
      "simulate 모드가 Quicksilver를 과부하시켰다",
    ],
    answer: 1,
    explanation:
      "simulate 모드는 결과로 요청을 막지 않을 뿐, 오탐·미탐 비율을 재려면 규칙을 실제로 돌려야 한다. 그 규칙의 정규식이 CPU를 다 먹었다. 영향을 줄이는 모드가 실행 비용까지 줄여 주지는 않는다.",
    anchor: "13시-42분-규칙-하나가-배포됐다",
  },
  {
    id: "rw-cloudflare-outage-regex-2",
    post: "rw-cloudflare-outage-regex",
    question: "보고서에 따르면 .*.*=.* 를 x 20개(= 없음)에 돌릴 때가 x= 뒤에 x 20개일 때보다 훨씬 오래 걸린다. 이유는?",
    choices: [
      "= 가 없으면 엔진이 입력을 두 번 읽어서",
      "일치하는 경우 엔진이 캐시를 써서",
      "실패하려면 두 .* 가 글자를 나눠 갖는 모든 경우와 모든 시작 위치를 다 시도해야 해서",
      "= 가 없으면 PCRE가 다른 알고리즘으로 바꿔서",
    ],
    answer: 2,
    explanation:
      "백트래킹 엔진은 일치하면 그 자리에서 멈추지만, 실패를 확정하려면 갈림길을 전부 시도해야 한다. 보고서는 555단계와 4,067단계를 든다. WAF에서는 대부분의 요청이 규칙에 걸리지 않으니 이 비싼 실패 경로가 평소 경로다.",
    anchor: "정규식-하나가-cpu를-다-먹는-이유",
  },
  {
    id: "rw-cloudflare-outage-regex-3",
    post: "rw-cloudflare-outage-regex",
    question: "보고서가 백트래킹 문제의 근본 해법으로 든 것은?",
    choices: [
      "탐욕적 매칭을 모두 게으른 매칭으로 바꾸기",
      "정규식 실행에 타임아웃만 두기",
      "WAF를 C로 다시 쓰기",
      "백트래킹하지 않고 입력 길이에 선형인 시간을 보장하는 엔진(RE2나 Rust regex)으로 옮기기",
    ],
    answer: 3,
    explanation:
      "게으른 매칭은 일부 패턴에서만 도움이 되고, 끝에 세미콜론이 붙은 패턴은 실행 시간이 그대로였다. 보고서는 패턴을 아주 구체적으로 다시 쓰지 않는 한 백트래킹 엔진을 떠나는 게 해법이라고 적고, 2020년 글은 2019년 7월에 RE2에서 영감을 받은 DFA 기반 엔진으로 옮겼다고 확인한다.",
    anchor: "정규식-하나가-cpu를-다-먹는-이유",
  },
  {
    id: "rw-cloudflare-outage-regex-4",
    post: "rw-cloudflare-outage-regex",
    question: "보고서의 기여 요인 중, 몇 주 전 WAF 리팩터링과 관련된 것은?",
    choices: [
      "과도한 CPU 사용을 막던 보호 장치가 CPU를 줄이려던 리팩터링 중 실수로 빠졌다",
      "리팩터링으로 테스트 묶음이 삭제됐다",
      "리팩터링으로 규칙 수가 두 배가 됐다",
      "리팩터링 때문에 Quicksilver 복제가 멈췄다",
    ],
    answer: 0,
    explanation:
      "정규식의 과도한 CPU 사용을 막아 줄 장치가 WAF의 CPU 사용을 줄이려던 리팩터링에서 실수로 제거됐다. 사고 뒤 첫 조치가 이 보호 장치를 되살린 것이다. 한 원인만 찾았다면 놓쳤을 시스템 쪽 구멍이다.",
    anchor: "여러-구멍이-한-줄로-섰다",
  },
  {
    id: "rw-cloudflare-outage-regex-5",
    post: "rw-cloudflare-outage-regex",
    question: "2019년 당시 WAF 규칙이 DOG·PIG·Canary 단계 배포를 거치지 않은 이유는?",
    choices: [
      "WAF 규칙은 코드가 아니라 테스트가 필요 없다고 봐서",
      "새 취약점에 대한 공격이 금방 쏟아져 몇 분 안에 전역으로 막아야 해서",
      "동물 PoP에 WAF가 설치돼 있지 않아서",
      "Quicksilver가 단계 배포를 지원하지 않아서",
    ],
    answer: 1,
    explanation:
      "취약점이 공개되면 개념 증명 코드가 금방 퍼지고 공격 시도가 급증해서, WAF는 설계상 빠른 전역 배포를 썼다. 문제는 긴급하지 않은 변경까지 같은 길을 타게 한 SOP였고, 사고 뒤 단계 배포를 기본으로 하고 긴급 전역 배포 능력만 남겼다.",
    anchor: "빠른-배포가-빠른-장애가-된-길-quicksilver",
  },
  {
    id: "rw-cloudflare-outage-regex-6",
    post: "rw-cloudflare-outage-regex",
    question: "애니캐스트로 같은 IP를 180개 넘는 도시에서 내는데도 모든 도시가 함께 멈춘 이유로 가장 맞는 것은?",
    choices: [
      "모든 도시가 같은 규칙을 같은 순간 받아 같은 원인으로 동시에 아팠기 때문에",
      "애니캐스트 라우팅이 장애 도시로만 트래픽을 보내서",
      "BGP 경로가 한 도시로 모였기 때문에",
      "DNS가 모든 도시에서 실패해서",
    ],
    answer: 0,
    explanation:
      "애니캐스트는 한 도시가 빠지면 다른 도시로 돌리는 지역 장애 대비다. Quicksilver가 같은 규칙을 몇 초 만에 모든 기계에 둬서 모든 도시가 같은 원인으로 동시에 CPU가 찼다. 지리적 이중화는 이런 공통 원인 장애를 막지 못한다.",
    anchor: "빠른-배포가-빠른-장애가-된-길-quicksilver",
  },
  {
    id: "rw-cloudflare-outage-regex-7",
    post: "rw-cloudflare-outage-regex",
    question: "14:02에 전역 종료가 제안됐는데 14:07에야 실행된 이유는?",
    choices: [
      "전역 종료 기능을 그때 새로 만들어야 해서",
      "승인권자가 자리에 없어서",
      "Access가 내려가 내부 관리 패널 인증이 막혔고, 일부는 자격 증명이 만료돼 잘 안 쓰던 우회 경로를 써야 해서",
      "Quicksilver가 꺼져 있어서",
    ],
    answer: 2,
    explanation:
      "Cloudflare는 자기 제품으로 내부 시스템을 보호했기 때문에 장애가 내부 접근까지 막았다. 자주 안 쓰면 자격 증명을 끄는 보안 기능 때문에 접근을 잃은 사람도 있었다. 그래서 장애 때 쓸 경로가 장애 난 시스템에 기대지 않는지가 중요한 점검 항목이 된다.",
    anchor: "13시-42분-규칙-하나가-배포됐다",
  },
];
