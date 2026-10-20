import type { QuizQuestion } from "../types";

export const SECURITY_GROUPS_NACL: QuizQuestion[] = [
  {
    id: "security-groups-nacl-1",
    post: "security-groups-nacl",
    question: "새 NACL에 인바운드 tcp 80, 아웃바운드 tcp 80만 허용했더니 웹이 안 열린다. 응답이 막히는 이유는?",
    choices: [
      "보안 그룹이 응답을 막는다",
      "응답 패킷의 목적지 포트가 클라이언트의 임시 포트라서 아웃바운드 80 규칙에 맞지 않는다",
      "NACL은 TCP를 지원하지 않는다",
      "응답 패킷은 인바운드 규칙으로 검사된다",
    ],
    answer: 1,
    explanation:
      "NACL은 연결을 기억하지 못해 응답을 새 패킷으로 보고 아웃바운드 규칙을 처음부터 적용한다. 응답의 목적지 포트는 44988 같은 임시 포트라 80번 규칙에 맞지 않고 * 거부에 걸린다.",
    anchor: "응답-패킷은-포트가-다르다",
  },
  {
    id: "security-groups-nacl-2",
    post: "security-groups-nacl",
    question: "보안 그룹에서 9000번 허용 규칙을 연결 도중에 지웠다. 기존 연결과 새 연결은 각각 어떻게 될까?",
    choices: [
      "둘 다 즉시 끊긴다",
      "기존 연결은 계속되고, 새 연결은 timeout이 난다",
      "기존 연결은 끊기고, 새 연결은 된다",
      "둘 다 계속된다. 보안 그룹 변경은 재부팅해야 적용된다",
    ],
    answer: 1,
    explanation:
      "보안 그룹은 이미 추적 중인 연결을 기억으로 통과시키고, 새 연결만 규칙으로 판단한다. 실습에서도 규칙을 지운 뒤 기존 연결은 끝까지 답을 받았고 새 연결은 timeout이 났다.",
    anchor: "규칙을-지웠는데-연결이-살아-있다",
  },
  {
    id: "security-groups-nacl-3",
    post: "security-groups-nacl",
    question: "NACL 인바운드에 200 allow tcp 443 0.0.0.0/0, 100 deny all 198.51.100.0/24가 있다. 198.51.100.80에서 443으로 온 패킷은?",
    choices: [
      "200번에서 허용된다. 허용 규칙이 거부보다 우선이다",
      "100번에서 거부된다. 번호가 작은 규칙을 먼저 본다",
      "두 규칙이 충돌해 보안 그룹이 판단한다",
      "* 규칙까지 내려가 거부된다",
    ],
    answer: 1,
    explanation:
      "NACL은 번호가 작은 규칙부터 보고 처음 맞는 규칙에서 멈춘다. 100번 deny가 먼저 맞으니 200번은 보지 않는다. 적힌 순서가 아니라 번호가 기준이다.",
    anchor: "nacl은-패킷-하나하나를-본다",
  },
  {
    id: "security-groups-nacl-4",
    post: "security-groups-nacl",
    question: "같은 서브넷에 있는 web과 batch 사이의 9100번 트래픽을 막고 싶다. 무엇을 써야 하나?",
    choices: [
      "서브넷의 NACL 인바운드에 deny를 넣는다",
      "batch의 보안 그룹에서 허용하지 않는다",
      "라우트 테이블에서 local 경로를 지운다",
      "NACL 아웃바운드에 deny를 넣는다",
    ],
    answer: 1,
    explanation:
      "NACL은 서브넷 경계를 드나드는 트래픽만 보고 같은 서브넷 안의 트래픽은 지나가지 않는다. local 경로는 지울 수 없다. 같은 서브넷 안은 받는 쪽 보안 그룹으로만 막을 수 있다.",
    anchor: "두-방화벽이-서-있는-자리",
  },
  {
    id: "security-groups-nacl-5",
    post: "security-groups-nacl",
    question: "퍼블릭 서브넷 NACL의 인바운드에 임시 포트를 열지 않았다. 프라이빗 서브넷 서버의 외부 호출은 어떻게 될까?",
    choices: [
      "영향이 없다. 프라이빗 서브넷에는 다른 NACL이 붙어 있으니까",
      "NAT 게이트웨이로 돌아오는 응답이 퍼블릭 서브넷 NACL에서 막혀 timeout이 난다",
      "NAT 게이트웨이가 자동으로 포트를 바꿔 통과한다",
      "DNS 조회만 막힌다",
    ],
    answer: 1,
    explanation:
      "프라이빗 서버의 트래픽은 퍼블릭 서브넷의 NAT 게이트웨이를 지나고, NAT로 돌아오는 응답도 그 서브넷의 NACL 인바운드를 지난다. 실습에서도 이때 vc-app의 외부 호출이 함께 막혔다.",
    anchor: "응답-패킷은-포트가-다르다",
  },
  {
    id: "security-groups-nacl-6",
    post: "security-groups-nacl",
    question: "흐름 로그에서 같은 연결의 들어오는 줄은 ACCEPT, 나가는 응답 줄은 REJECT다. 어디를 먼저 고칠까?",
    choices: [
      "보안 그룹 아웃바운드",
      "NACL 아웃바운드",
      "라우트 테이블",
      "보안 그룹 인바운드",
    ],
    answer: 1,
    explanation:
      "보안 그룹은 들어온 연결의 응답을 규칙 없이 기억으로 내보내므로 응답을 막지 않는다. 응답만 거부됐다면 상태가 없는 NACL의 아웃바운드에 임시 포트 범위가 빠진 경우가 대부분이다.",
    anchor: "어디서-막혔는지-확인하기",
  },
  {
    id: "security-groups-nacl-7",
    post: "security-groups-nacl",
    question: "공격 중인 대역을 지금 당장, 이미 맺어진 연결까지 끊고 싶다. 알맞은 조치는?",
    choices: [
      "보안 그룹에서 그 대역을 허용하던 규칙을 지운다",
      "보안 그룹에 거부 규칙을 추가한다",
      "NACL 인바운드의 낮은 번호에 그 대역 deny 규칙을 넣는다",
      "라우트 테이블에 그 대역 blackhole을 넣는다",
    ],
    answer: 2,
    explanation:
      "NACL은 상태가 없어서 규칙이 바로 다음 패킷부터 적용된다. 보안 그룹에는 거부 규칙이 없고, 허용 규칙을 지워도 추적 중인 연결은 남는다.",
    anchor: "규칙을-지웠는데-연결이-살아-있다",
  },
];
