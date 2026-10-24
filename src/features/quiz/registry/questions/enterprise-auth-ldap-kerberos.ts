import type { QuizQuestion } from "../types";

export const ENTERPRISE_AUTH_LDAP_KERBEROS: QuizQuestion[] = [
  {
    id: "enterprise-auth-ldap-kerberos-1",
    post: "enterprise-auth-ldap-kerberos",
    question: "LDAP bind로 로그인을 받는 앱이 비밀번호가 빈 문자열일 때 반드시 먼저 막아야 하는 이유는?",
    choices: [
      "빈 비밀번호는 서버에서 항상 49(invalid credentials)를 돌려줘서",
      "DN은 있고 비밀번호가 비면 익명 bind로 처리되어 성공할 수 있어, 비밀번호 없이 로그인되기 때문에",
      "빈 비밀번호는 LDAP 필터를 깨뜨리기 때문에",
      "빈 비밀번호는 서비스 계정 bind까지 실패시키기 때문에",
    ],
    answer: 1,
    explanation:
      "LDAP 명세상 DN은 있는데 비밀번호가 빈 문자열이면 익명 bind가 되고, 익명 bind는 보통 성공한다. 로그인 코드가 bind 성공만 보면 비밀번호 없이 통과된다. 그래서 앱이 빈 비밀번호를 서버에 보내기 전에 거절해야 한다.",
    anchor: "빈-비밀번호가-통과하는-함정",
  },
  {
    id: "enterprise-auth-ldap-kerberos-2",
    post: "enterprise-auth-ldap-kerberos",
    question: "사용자 입력을 LDAP 필터에 그대로 이어 붙일 때, 입력 *(별표)가 일으키는 문제는?",
    choices: [
      "서버가 구문 오류로 연결을 끊는다",
      "(uid=*)가 되어 모든 사용자에 맞으면서 조회 조건이 무력화된다",
      "별표는 비밀번호 칸에서만 위험하다",
      "별표는 자동으로 \\2a로 바뀌어 안전하다",
    ],
    answer: 1,
    explanation:
      "필터가 (uid=*)가 되면 모든 사용자에 맞는다. 괄호가 섞이면 필터 구조까지 바뀐다. RFC 4515 이스케이프로 *를 \\2a, 괄호를 \\28 \\29로 바꾸면 그냥 그런 이름을 찾는 평범한 검색이 된다.",
    anchor: "아이디-칸에-필터를-끼워-넣기",
  },
  {
    id: "enterprise-auth-ldap-kerberos-3",
    post: "enterprise-auth-ldap-kerberos",
    question: "Kerberos에서 비밀번호를 서비스마다 보내지 않을 수 있는 이유는?",
    choices: [
      "서비스 티켓이 LDAP에 비밀번호를 대신 저장해 줘서",
      "로그인 때 KDC에 한 번 인증해 TGT를 받고, 이후엔 TGT로 서비스별 티켓을 받아 제시하기 때문에",
      "Kerberos가 비밀번호를 모든 서비스에 미리 복제해 둬서",
      "서비스가 KDC에 매번 비밀번호를 물어봐서",
    ],
    answer: 1,
    explanation:
      "비밀번호는 AS-REQ에서 TGT를 받을 때만 쓴다. 이후 서비스에 붙을 땐 TGT로 그 서비스의 티켓을 받아 제시하고, 비밀번호는 쓰지 않는다. 서비스 티켓은 그 서비스의 키로 봉인돼 있어 서비스가 자기 키로 검증한다.",
    anchor: "비밀번호를-한-번만-보내는-방식",
  },
  {
    id: "enterprise-auth-ldap-kerberos-4",
    post: "enterprise-auth-ldap-kerberos",
    question: "한 서버에서만 Kerberos 로그인이 'Clock skew too great'로 실패한다. 가장 먼저 볼 곳은?",
    choices: [
      "그 서버의 시계가 KDC와 기본 5분 넘게 벌어졌는지",
      "그 서버의 디스크 용량",
      "사용자의 비밀번호 만료 여부",
      "LDAP 필터 이스케이프 설정",
    ],
    answer: 0,
    explanation:
      "인증 요청에 암호화된 현재 시각이 들어가고, KDC는 자기 시계와 기본 5분 넘게 벌어지면 재전송 공격으로 보고 거절한다. 한 서버만 실패하면 그 서버 시계를 NTP로 맞춘다.",
    anchor: "시계가-어긋나면-로그인이-안-된다",
  },
  {
    id: "enterprise-auth-ldap-kerberos-5",
    post: "enterprise-auth-ldap-kerberos",
    question: "pass-the-hash 공격이 비밀번호를 길고 복잡하게 만드는 것으로 막히지 않는 이유는?",
    choices: [
      "긴 비밀번호는 해시가 더 짧아져서",
      "NTLM 인증이 NT 해시 자체를 자격 증명으로 쓰기 때문에, 해시만 손에 넣으면 원문 길이와 무관하다",
      "공격자가 항상 원문 비밀번호를 복원하기 때문에",
      "긴 비밀번호는 Kerberos에서만 유효하기 때문에",
    ],
    answer: 1,
    explanation:
      "NTLM은 비밀번호의 NT 해시로 인증한다. 공격자는 해시를 깨지 않고 그대로 다른 서버에 제시하고, 서버는 올바른 해시를 봤으니 통과시킨다. 비밀번호 길이는 해시 복원을 어렵게 할 뿐, 이미 꺼낸 해시에는 의미가 없다.",
    anchor: "로컬-계정-공유와-pass-the-hash",
  },
  {
    id: "enterprise-auth-ldap-kerberos-6",
    post: "enterprise-auth-ldap-kerberos",
    question: "모든 PC의 로컬 관리자 비밀번호를 똑같이 두면 생기는 위험은?",
    choices: [
      "비밀번호가 평문으로 저장된다",
      "로컬 관리자의 NT 해시도 모든 PC에서 같아져, PC 하나에서 꺼낸 해시로 전부에 수평 이동할 수 있다",
      "Kerberos 티켓이 발급되지 않는다",
      "RADIUS 서버가 과부하된다",
    ],
    answer: 1,
    explanation:
      "같은 비밀번호는 같은 NT 해시를 낳는다. PC 하나를 뚫어 그 해시를 꺼내면 같은 로컬 관리자를 가진 모든 PC에 pass-the-hash로 번진다. LAPS가 PC마다 로컬 관리자 비밀번호를 다르게 자동 관리해 이 연쇄를 끊는다.",
    anchor: "로컬-계정-공유와-pass-the-hash",
  },
  {
    id: "enterprise-auth-ldap-kerberos-7",
    post: "enterprise-auth-ldap-kerberos",
    question: "RADIUS를 와이파이 AP나 VPN 게이트웨이 뒤에 두는 주된 이유는?",
    choices: [
      "장비가 사용자 명부를 직접 들지 않고, 여러 종류의 장비가 같은 말로 물어 인증 정책을 한곳에서 관리하려고",
      "RADIUS가 비밀번호를 평문으로 가장 안전하게 전송해서",
      "RADIUS가 Kerberos 티켓을 발급할 수 있어서",
      "AP가 LDAP를 이해하지 못해서 RADIUS로만 조회할 수 있어서",
    ],
    answer: 0,
    explanation:
      "AP, 스위치, VPN이 모두 RADIUS 말로 물으면 뒤의 LDAP나 AD에 다시 확인해 인증, 인가, 과금(AAA)을 한곳에서 다룬다. 전통적 RADIUS는 UDP 위에서 돌고 보호가 약해 보통 RadSec이나 EAP 터널 안에서 쓴다.",
    anchor: "와이파이와-vpn은-왜-radius인가",
  },
];
