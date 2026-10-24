import type { QuizQuestion } from "../types";

export const FIREWALL_TYPES_NGFW: QuizQuestion[] = [
  {
    id: "firewall-types-ngfw-1",
    post: "firewall-types-ngfw",
    question:
      "방화벽 규칙 맨 위에 '모든 트래픽 허용', 그 아래에 '22번 거부'를 뒀다. 22번 요청은?",
    choices: [
      "거부된다 (더 구체적인 규칙이 이긴다)",
      "허용된다 (위의 규칙에 먼저 맞아 멈춘다)",
      "두 규칙이 충돌해 오류가 난다",
      "포트 번호 순으로 22번 규칙이 먼저 적용된다",
    ],
    answer: 1,
    explanation:
      "규칙은 위에서 아래로 훑어 처음 맞는 것에서 멈춘다. 넓은 허용이 위에 있으면 아래의 거부 규칙에는 닿지 못한다. 구체적인 규칙을 위에 둬야 한다.",
    anchor: "포트만-보는-가장-단순한-문-패킷-필터",
  },
  {
    id: "firewall-types-ngfw-2",
    post: "firewall-types-ngfw",
    question:
      "상태 추적 방화벽이 패킷 필터보다 '나간 연결의 답장 받기'를 쉽게 하는 이유는?",
    choices: [
      "모든 포트를 기본으로 열어 두기 때문에",
      "연결을 추적 표에 기록해 성립된 연결의 패킷만 통과시키기 때문에",
      "답장 패킷은 암호화돼 있어 자동 통과하기 때문에",
      "패킷을 재조립해 내용을 읽기 때문에",
    ],
    answer: 1,
    explanation:
      "상태 추적은 연결을 표에 기록하므로 'ESTABLISHED 연결 통과' 규칙 한 줄로 답장을 받는다. 패킷 필터는 상태를 모르니 돌아오는 포트를 넓게 열어야 했고, 그 구멍이 위험했다.",
    anchor: "나간-연결을-기억하는-문-상태-추적",
  },
  {
    id: "firewall-types-ngfw-3",
    post: "firewall-types-ngfw",
    question: "암묵적 거부(implicit deny)를 기본값으로 쓰는 이유로 맞는 것은?",
    choices: [
      "거부 규칙이 허용 규칙보다 빠르게 처리돼서",
      "허락한 것만 통과시키면 깜빡한 포트나 새 공격이 자동으로 막혀서",
      "로그를 남기지 않아 성능이 좋아서",
      "클라우드에서만 쓸 수 있는 방식이라서",
    ],
    answer: 1,
    explanation:
      "'좋은 것만 허용, 나머지 전부 거부'로 하면 예상 못 한 트래픽이 자동 차단된다. 반대로 '나쁜 것만 거부'는 알아야 할 나쁜 것의 목록이 늘 불완전해 구멍이 남는다.",
    anchor: "포트만-보는-가장-단순한-문-패킷-필터",
  },
  {
    id: "firewall-types-ngfw-4",
    post: "firewall-types-ngfw",
    question: "NGFW가 포트만 보는 방화벽과 근본적으로 다른 점은?",
    choices: [
      "연결 상태를 기억한다",
      "포트가 아니라 애플리케이션과 사용자를 식별해 정책을 쓴다",
      "패킷을 버리지 않고 모두 로그만 남긴다",
      "IPv6만 지원한다",
    ],
    answer: 1,
    explanation:
      "NGFW는 443번으로 들어온 트래픽이 어떤 앱인지 구분하고, 디렉터리와 연동해 사용자·팀 기준으로 정책을 쓴다. 상태 추적에 침입 방지·안티바이러스를 묶은 통합 장비다.",
    anchor: "앱과-사람까지-보는-문-차세대-방화벽",
  },
  {
    id: "firewall-types-ngfw-5",
    post: "firewall-types-ngfw",
    question: "NGFW가 TLS로 암호화된 트래픽 내용을 보려면 무엇이 필요하고, 그 비용은?",
    choices: [
      "서버의 개인 키를 받아야 하고, 비용은 없다",
      "내부 CA로 중간자처럼 복호화하며, 성능 저하와 직원 트래픽 감시라는 비용이 든다",
      "인증서 고정을 켜야 하고, 모든 앱이 더 빨라진다",
      "복호화 없이 포트만 보면 되고, 추가 비용이 없다",
    ],
    answer: 1,
    explanation:
      "방화벽이 연결을 끊고 사내 PC에 심은 내부 CA로 가짜 인증서를 만들어 평문을 본다. 모든 연결을 풀고 묶어 처리량이 떨어지고, 직원의 암호화 트래픽을 회사가 들여다보게 된다. 인증서 고정 앱은 깨진다.",
    anchor: "앱과-사람까지-보는-문-차세대-방화벽",
  },
  {
    id: "firewall-types-ngfw-6",
    post: "firewall-types-ngfw",
    question: "외부 공개 웹 서버를 DMZ에 두는 이유는?",
    choices: [
      "DMZ가 내부망보다 네트워크 속도가 빨라서",
      "공개 서버가 침해돼도 내부로 바로 넘어가지 못하게 완충 지대로 분리하려고",
      "DMZ 서버는 방화벽을 거치지 않아 관리가 쉬워서",
      "DMZ에 두면 TLS 복호화가 자동으로 되어서",
    ],
    answer: 1,
    explanation:
      "공개 서버를 내부망에 두면 뚫릴 때 내부가 통째로 노출된다. DMZ에 공개 서버만 두고 DMZ→내부를 좁게 열면, 침해돼도 공격자는 한 겹을 더 넘어야 하고 그 길목에 또 방화벽이 있다.",
    anchor: "어디에-세우느냐가-절반이다-dmz",
  },
  {
    id: "firewall-types-ngfw-7",
    post: "firewall-types-ngfw",
    question: "상태 추적 방화벽에서 '연결이 되다 말다 한다'는 증상의 유력한 원인은?",
    choices: [
      "TLS 인증서가 만료됐다",
      "연결 추적 표가 가득 차 새 연결이 조용히 버려진다",
      "DMZ 설정이 빠졌다",
      "규칙 순서가 바뀌었다",
    ],
    answer: 1,
    explanation:
      "상태 추적은 연결마다 표에 항목을 만든다. 동시 연결이 nf_conntrack_max를 넘으면 새 연결이 버려지고 'table full' 로그가 뜬다. conntrack -L 개수와 한도를 먼저 본다.",
    anchor: "나간-연결을-기억하는-문-상태-추적",
  },
];
