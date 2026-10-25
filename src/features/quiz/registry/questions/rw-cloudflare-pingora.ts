import type { QuizQuestion } from "../types";

export const RW_CLOUDFLARE_PINGORA: QuizQuestion[] = [
  {
    id: "rw-cloudflare-pingora-1",
    post: "rw-cloudflare-pingora",
    question: "클라우드플레어가 꼽은 NGINX 구조의 가장 큰 문제로, 워커를 늘릴수록 나빠진 것은?",
    choices: [
      "워커마다 따로 둔 연결 풀 때문에 떨어지는 원본 연결 재사용률",
      "TLS 인증서 갱신 주기",
      "설정 파일을 다시 읽는 데 걸리는 시간",
      "워커 사이 공유 메모리의 크기 제한",
    ],
    answer: 0,
    explanation:
      "NGINX의 연결 풀은 워커마다 있어서, 요청이 떨어진 워커의 풀만 쓸 수 있다. 워커를 늘리면 연결이 더 많은 고립된 풀로 흩어져 재사용률이 떨어지고 TTFB와 유지할 연결이 늘었다. 공유 메모리 제약도 언급됐지만 효율 쪽 이야기였다.",
    anchor: "요청-하나는-워커-하나에-묶인다",
  },
  {
    id: "rw-cloudflare-pingora-2",
    post: "rw-cloudflare-pingora",
    question: "Pingora로 바꾼 뒤 TTFB 중앙값이 5ms, 95번째 백분위가 80ms 줄어든 이유로 2022년 글이 든 것은?",
    choices: [
      "Rust 코드가 요청 하나를 Lua보다 수십 배 빨리 처리해서",
      "HTTP/3를 원본까지 쓰게 돼서",
      "스레드가 연결을 같이 써서 재사용률이 오르고 핸드셰이크가 줄어서",
      "캐시 적중률이 올라 원본에 갈 일이 줄어서",
    ],
    answer: 2,
    explanation:
      "글은 이전 서비스도 요청을 1ms 안쪽으로 처리했다며 코드 속도가 이유가 아니라고 적었다. 모든 스레드가 연결을 공유해 새 연결이 3분의 1로 줄었고, 그만큼 TCP·TLS 핸드셰이크 시간이 빠졌다.",
    anchor: "숫자로-본-결과-코드가-아니라-연결이-빨라졌다",
  },
  {
    id: "rw-cloudflare-pingora-3",
    post: "rw-cloudflare-pingora",
    question: "한 고객의 연결 재사용률이 87.1%에서 99.92%가 됐다. 그 고객 원본으로 가는 새 연결은 대략 몇 분의 1이 되나?",
    choices: ["약 13분의 1", "약 160분의 1", "약 1,000분의 1", "약 2분의 1"],
    answer: 1,
    explanation:
      "새 연결 비율은 12.9%에서 0.08%로 바뀐다. 12.9를 0.08로 나누면 약 161이라 글이 말한 160배 감소와 맞는다. 재사용률 숫자 차이(약 13%포인트)만 보고 판단하면 효과를 크게 과소평가한다.",
    anchor: "숫자로-본-결과-코드가-아니라-연결이-빨라졌다",
  },
  {
    id: "rw-cloudflare-pingora-4",
    post: "rw-cloudflare-pingora",
    question: "Ubuntu 24.04의 NGINX 1.24.0으로 0.1초 간격 요청 200개를 보냈을 때 워커 수가 늘수록 원본 새 연결이 늘어난 이유는?",
    choices: [
      "워커가 많을수록 keepalive 32의 한도가 줄어들어서",
      "reuseport가 연결을 한 워커에 몰아서",
      "워커 하나가 원본에 요청을 보내는 간격이 길어져, 그 사이 원본이 1초 유휴 제한으로 연결을 닫아서",
      "NGINX가 워커마다 원본 DNS를 다시 조회해서",
    ],
    answer: 2,
    explanation:
      "요청이 여러 워커로 흩어지면 워커 하나가 받는 요청이 드물어진다. 풀에 남겨 둔 연결이 다음 요청 전에 원본 쪽 유휴 제한으로 닫혀 매번 새로 열게 된다. keepalive 32는 워커마다 남겨 둘 수 있는 개수일 뿐, 원본이 닫은 연결을 살리지는 못한다.",
    anchor: "nginx-워커-수를-바꿔-가며-재-보기",
  },
  {
    id: "rw-cloudflare-pingora-5",
    post: "rw-cloudflare-pingora",
    question: "Pingora가 풀의 연결을 같은 Peer로 보고 재사용하려면 SNI와 인증서 검증 설정까지 모두 같아야 하는 이유는?",
    choices: [
      "연결 수를 줄이기 위해서",
      "TLS 세션 재개를 끄기 위해서",
      "다른 사이트나 다른 보안 설정으로 맺은 연결에 요청이 실리는 것을 막기 위해서",
      "HTTP/2 스트림 수를 맞추기 위해서",
    ],
    answer: 2,
    explanation:
      "풀을 공유하면 어떤 연결을 어떤 요청에 내줘도 되는지가 정확성과 보안 문제가 된다. SNI가 다르면 다른 사이트의 연결이고, 검증을 끈 연결을 검증이 필요한 요청에 주면 검증을 건너뛴 셈이다. 그래서 문서는 주소, 스킴, SNI, 인증서, 검증 설정, 프록시 설정이 모두 같아야 같은 Peer라고 정했다.",
    anchor: "공유-풀은-무엇을-같은-연결로-보나",
  },
  {
    id: "rw-cloudflare-pingora-6",
    post: "rw-cloudflare-pingora",
    question: "2025년 Pingora 요청 밀반입 취약점(CVE-2025-4366)이 생긴 직접적인 원인은?",
    choices: [
      "캐시 적중 때 요청 본문을 다 읽지 않은 채 연결을 다음 요청에 재사용해서",
      "HTTP/2 헤더 압축 테이블이 넘쳐서",
      "TLS 세션 티켓을 고객 사이에 공유해서",
      "Upgrade 요청에 101 응답을 보내지 않아서",
    ],
    answer: 0,
    explanation:
      "보통은 본문을 끝까지 읽거나 연결을 재사용하지 않는데, 캐시를 켜면 캐시 적중 때 그 로직을 건너뛰었다. 남은 본문이 다음 방문자의 요청 앞에 붙어 다른 Host의 요청처럼 읽혔다. Upgrade 문제는 2026년에 보고된 다른 취약점이다.",
    anchor: "너그러운-파서가-치른-값",
  },
  {
    id: "rw-cloudflare-pingora-7",
    post: "rw-cloudflare-pingora",
    question: "2026년에 보고된 Pingora 요청 밀반입 취약점들이 클라우드플레어 CDN에는 영향이 없었던 이유는?",
    choices: [
      "CDN은 HTTP/1.x를 전혀 쓰지 않아서",
      "CDN은 캐시 키 기본값을 그대로 썼기 때문에",
      "CDN의 Pingora는 이미 0.8.0보다 새 버전이어서",
      "CDN에서 Pingora는 진입 프록시가 아니고, 앞단 계층이 HTTP/1.1로만 넘기며 애매한 길이 표시를 거절해서",
    ],
    answer: 3,
    explanation:
      "글에 따르면 CDN에서 Pingora는 바깥 트래픽을 처음 받는 자리에 있지 않고, 앞단 프록시가 요청을 한 번 정리해 넘겼다. 그래서 같은 너그러운 파서가 안에서는 안전했고, Pingora를 인터넷에 직접 둔 사용자만 영향을 받았다. 클라우드플레어는 기본 캐시 키를 쓰지 않았다.",
    anchor: "너그러운-파서가-치른-값",
  },
];
