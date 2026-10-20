import type { QuizQuestion } from "../types";

export const ZERO_TRUST_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "zero-trust-architecture-1",
    post: "zero-trust-architecture",
    question: "관리자 앱이 사내 IP 대역에서 온 요청을 모두 허락한다. 회의실 프린터가 감염됐을 때 무슨 일이 생기나?",
    choices: [
      "경계 방화벽이 프린터의 요청을 막는다",
      "프린터도 사내 IP라서 관리자 페이지가 열린다",
      "VPN을 거치지 않았으니 앱이 거부한다",
      "프린터는 HTTP를 보낼 수 없어서 영향이 없다",
    ],
    answer: 1,
    explanation:
      "경계 모델은 안에 들어온 것을 위치만으로 믿는다. 경계 방화벽은 이미 안쪽에 있는 기기를 막지 않고, 앱은 10.77.0.20과 직원 노트북을 구분하지 못한다. 실습에서도 두 요청이 똑같이 열렸다.",
    anchor: "성벽-안은-안전하다는-가정",
  },
  {
    id: "zero-trust-architecture-2",
    post: "zero-trust-architecture",
    question: "NIST SP 800-207의 구성에서 요청 길목에서 실제로 막거나 통과시키는 부품은?",
    choices: ["정책 엔진(PE)", "정책 관리자(PA)", "정책 집행 지점(PEP)", "SIEM"],
    answer: 2,
    explanation:
      "PE가 판단하고 PA가 그 결과로 연결을 열고 닫으라고 지시하며, 실제 길목에서 집행하는 건 PEP다. identity-aware proxy가 대표적인 PEP다. SIEM은 판단에 쓰는 정보를 대는 쪽이다.",
    anchor: "정책을-정하는-곳과-지키는-곳",
  },
  {
    id: "zero-trust-architecture-3",
    post: "zero-trust-architecture",
    question: "앱이 프록시가 붙인 x-auth-user 헤더로 사용자를 판단한다. 가장 위험한 설정은?",
    choices: [
      "앱 포트가 프록시 말고 다른 곳에서도 닿게 열려 있다",
      "프록시가 거부 로그를 남긴다",
      "앱이 127.0.0.1에만 열려 있다",
      "프록시와 앱 사이를 mTLS로 묶었다",
    ],
    answer: 0,
    explanation:
      "앱 포트에 직접 닿을 수 있으면 공격자가 같은 헤더를 붙여 보내 프록시를 건너뛴다. 그래서 앱을 프록시만 닿는 주소에 열거나, 프록시와 앱 사이를 mTLS나 서명된 토큰으로 묶는다.",
    anchor: "사용자-앞에-서는-프록시",
  },
  {
    id: "zero-trust-architecture-4",
    post: "zero-trust-architecture",
    question: "admin 그룹인 bob이 /wiki는 열리는데 /admin은 막혔다. 판정 로그 이유가 \"os patch age 47d > 14d\"다. 어떻게 읽나?",
    choices: [
      "bob의 계정이 잠겼다",
      "토큰이 다른 기기에서 발급됐다",
      "자원 민감도에 따라 기기 상태 조건이 달라서, 패치를 하면 /admin도 열린다",
      "/admin 정책이 없어서 기본 거부됐다",
    ],
    answer: 2,
    explanation:
      "같은 사용자와 기기라도 자원마다 요구하는 기기 상태가 다르다. /admin은 패치 14일 이내를 요구하고 /wiki는 관리 기기이기만 하면 된다. 이유가 로그에 남아 있으니 사용자에게 무엇을 하면 되는지 안내할 수 있다.",
    anchor: "기기도-신원이-있다",
  },
  {
    id: "zero-trust-architecture-5",
    post: "zero-trust-architecture",
    question: "alice의 토큰을 훔친 공격자가 다른 회사 노트북에서 그 토큰을 쓴다. 실습의 프록시는 무엇으로 막았나?",
    choices: [
      "토큰 만료 시간이 지나서",
      "토큰에 묶인 기기와 지금 연결한 기기 인증서가 달라서",
      "공격자의 IP가 사내 대역이 아니어서",
      "alice가 admin 그룹이 아니어서",
    ],
    answer: 1,
    explanation:
      "토큰에 발급받은 기기(cnf_device)를 적어 두고, 프록시가 mTLS로 받은 기기 인증서와 맞춰 봤다. 사용자 확인은 통과해도 기기가 다르면 거부된다. 표준으로는 OAuth mTLS 바인딩이나 DPoP가 같은 일을 한다.",
    anchor: "기기도-신원이-있다",
  },
  {
    id: "zero-trust-architecture-6",
    post: "zero-trust-architecture",
    question: "앱을 identity-aware proxy 뒤로 옮길 때 처음부터 차단 모드로 켜지 않고 기록만 하는 이유는?",
    choices: [
      "기록 모드가 더 안전한 암호화를 써서",
      "차단 모드는 SSO 없이 동작하지 않아서",
      "VPN을 먼저 없애야 차단 모드를 켤 수 있어서",
      "거부될 뻔한 정상 요청을 보며 정책을 다듬어, 정상 사용자가 한꺼번에 막히는 걸 피하려고",
    ],
    answer: 3,
    explanation:
      "정책은 처음부터 맞기 어렵고, 너무 빡빡하면 정상 사용자가 막혀 우회로가 생긴다. 판정만 기록하며 거부될 요청을 확인하고 고친 뒤 집행으로 바꾼다. 마이크로세그멘테이션도 같은 순서로 한다.",
    anchor: "한-번에-바꾸지-않는다",
  },
  {
    id: "zero-trust-architecture-7",
    post: "zero-trust-architecture",
    question: "제로 트러스트 전환 뒤 IdP가 한 시간 동안 죽었다. 미리 준비했어야 할 것은?",
    choices: [
      "경보가 울리는 비상 접근 경로(break-glass)와 여러 지역에 둔 프록시",
      "모든 앱을 다시 사내 IP 허용으로 바꾸는 스크립트",
      "토큰 만료 시간을 무제한으로 늘리는 설정",
      "MFA를 끄는 절차",
    ],
    answer: 0,
    explanation:
      "프록시와 IdP는 새로운 단일 장애 지점이다. 미리 정해 두고 시험한 비상 경로가 있어야 장애 중에도 복구 작업을 할 수 있고, 그 사용은 경보로 감시한다. 신뢰를 다시 IP에 거는 건 문제를 되돌릴 뿐이다.",
    anchor: "제로-트러스트를-들일-때-생기는-문제",
  },
];
