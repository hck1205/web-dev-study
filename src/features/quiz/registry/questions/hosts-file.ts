import type { QuizQuestion } from "../types";

export const HOSTS_FILE: QuizQuestion[] = [
  {
    id: "hosts-file-1",
    post: "hosts-file",
    question: "리눅스에서 hosts 파일과 DNS 중 무엇을 먼저 볼지 정하는 설정은?",
    choices: ["/etc/resolv.conf", "/etc/hostname", "/etc/nsswitch.conf의 hosts: 줄", "/etc/hosts.allow"],
    answer: 2,
    explanation:
      "glibc의 NSS가 /etc/nsswitch.conf의 hosts: 줄을 읽어 순서를 정한다. 보통 files dns라서 hosts 파일이 먼저다. resolv.conf는 물어볼 DNS 서버를 정하는 파일이다.",
    anchor: "이름을-찾는-순서",
  },
  {
    id: "hosts-file-2",
    post: "hosts-file",
    question: "hosts에 줄을 추가했는데 nslookup 결과에는 그 IP가 나오지 않는다. 이유는?",
    choices: [
      "hosts 파일 형식이 틀렸기 때문이다",
      "nslookup은 DNS 서버에 직접 묻는 도구라 hosts 파일을 보지 않기 때문이다",
      "hosts 변경은 재부팅해야 반영되기 때문이다",
      "nslookup은 IPv6만 조회하기 때문이다",
    ],
    answer: 1,
    explanation:
      "nslookup과 dig는 DNS 서버에 직접 질의하므로 hosts를 거치지 않는 게 정상이다. 적용 여부는 getent hosts, dscacheutil, Resolve-DnsName처럼 OS 이름 해석을 거치는 명령으로 확인한다.",
    anchor: "이름을-찾는-순서",
  },
  {
    id: "hosts-file-3",
    post: "hosts-file",
    question: "hosts를 고친 뒤 새로고침해도 크롬이 옛 서버로 간다. 가장 먼저 의심할 것은?",
    choices: [
      "브라우저의 자체 DNS 캐시와 이미 열려 재사용 중인 연결",
      "DNS 서버의 TTL",
      "hosts 파일의 줄바꿈 문자",
      "서버의 HTTP 캐시 헤더",
    ],
    answer: 0,
    explanation:
      "열린 keep-alive 연결은 이름을 다시 조회하지 않고, 브라우저 캐시에 옛 IP가 남아 있으면 OS까지 가지 않는다. chrome://net-internals에서 host cache를 비우고 socket pool을 정리하면 새로 조회한다.",
    anchor: "고쳤는데-그대로인-이유",
  },
  {
    id: "hosts-file-4",
    post: "hosts-file",
    question: "회사 HTTP 프록시를 쓰는 브라우저에서 hosts 설정이 먹지 않는 이유는?",
    choices: [
      "프록시가 hosts 파일을 덮어쓰기 때문이다",
      "프록시 환경에서는 HTTPS를 쓸 수 없기 때문이다",
      "브라우저가 hosts 파일을 읽을 권한이 없기 때문이다",
      "브라우저가 도메인 이름을 그대로 프록시에 넘기고, 이름 해석은 프록시 서버가 하기 때문이다",
    ],
    answer: 3,
    explanation:
      "프록시를 쓰면 브라우저는 이름을 직접 풀지 않고 프록시에 도메인을 넘긴다. 이름 해석이 프록시 서버에서 일어나니 내 PC의 hosts는 끼어들 틈이 없고, 테스트할 도메인을 프록시 예외에 넣어야 한다.",
    anchor: "고쳤는데-그대로인-이유",
  },
  {
    id: "hosts-file-5",
    post: "hosts-file",
    question: "hosts 파일로 할 수 없는 것은?",
    choices: [
      "특정 도메인을 0.0.0.0으로 보내 차단하기",
      "한 줄에 여러 이름을 같은 IP로 연결하기",
      "myapp.test를 127.0.0.1의 3000번 포트로 보내기",
      "IPv6 주소를 지정하기",
    ],
    answer: 2,
    explanation:
      "hosts는 이름을 IP 주소로 바꿀 뿐이고, 이름 해석 결과에는 포트를 실을 자리가 없다. 포트는 URL이나 스킴 기본값이 정하므로, 포트를 숨기려면 Host 헤더로 나눠 주는 리버스 프록시를 쓴다.",
    anchor: "포트도-와일드카드도-안-된다",
  },
  {
    id: "hosts-file-6",
    post: "hosts-file",
    question: "로컬 개발용 이름으로 myapp.dev를 hosts에 등록했더니 HTTP로 열리지 않는다. 이유는?",
    choices: [
      ".dev는 실제 최상위 도메인이고 HSTS 프리로드 목록에 있어 브라우저가 HTTPS만 쓰기 때문이다",
      ".dev는 hosts 파일에 쓸 수 없는 예약어이기 때문이다",
      ".dev는 멀티캐스트 DNS로만 조회되기 때문이다",
      "hosts는 세 글자 TLD를 지원하지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      ".dev는 구글이 운영하는 실제 TLD이고 도메인 전체가 HSTS 프리로드 목록에 올라 있다. 그래서 브라우저가 HTTP 접속을 하지 않는다. 개발용으로는 예약된 .test를 쓰는 게 안전하다.",
    anchor: "어디에-쓰나",
  },
  {
    id: "hosts-file-7",
    post: "hosts-file",
    question: "악성코드가 hosts로 은행 도메인을 가짜 서버로 돌려도 HTTPS 사이트라면 대개 경고가 뜨는 이유는?",
    choices: [
      "은행 서버가 hosts 변조를 감지하기 때문이다",
      "가짜 서버가 그 도메인의 정상 인증서를 갖고 있지 않아 인증서 검증에 실패하기 때문이다",
      "HTTPS는 hosts 파일을 무시하기 때문이다",
      "브라우저가 hosts 파일의 해시를 검사하기 때문이다",
    ],
    answer: 1,
    explanation:
      "hosts는 HTTPS에도 그대로 적용되지만, 가짜 서버는 신뢰할 수 있는 CA가 발급한 그 도메인의 인증서를 내밀 수 없다. 그래서 공격자는 자기 루트 인증서까지 설치하려 하고, 둘 다 관리자 권한이 필요하다.",
    anchor: "악성코드가-노리는-파일",
  },
];
