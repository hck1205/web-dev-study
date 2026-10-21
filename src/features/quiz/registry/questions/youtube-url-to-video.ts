import type { QuizQuestion } from "../types";

export const YOUTUBE_URL_TO_VIDEO: QuizQuestion[] = [
  {
    id: "youtube-url-to-video-1",
    post: "youtube-url-to-video",
    question: "회사망에서 dig 결과가 Query time 0 msec, SERVER 8.8.8.8로 NXDOMAIN이 왔다. 가장 먼저 의심할 것은?",
    choices: [
      "유튜브의 권한 있는 네임서버가 이름을 지웠다",
      "중간 장비가 DNS 질의를 가로채 대신 답했다",
      "8.8.8.8이 같은 건물 안에 있어서 빨랐다",
      "TTL이 0이라 캐시가 없었다",
    ],
    answer: 1,
    explanation:
      "8.8.8.8까지 실제로 갔다 왔다면 0ms일 수 없으니 중간에서 누군가 답한 것이다. 이런 경우 요청은 서비스까지 가지도 않았으니 서비스가 아니라 중간 장비의 정책을 봐야 한다.",
    anchor: "이-글에서-직접-잰-것과-못-잰-것",
  },
  {
    id: "youtube-url-to-video-2",
    post: "youtube-url-to-video",
    question: "큰 서비스를 방화벽에서 IP 목록으로 허용하거나 막는 규칙이 금방 틀어지는 이유는?",
    choices: [
      "IPv6 주소는 방화벽에 적을 수 없어서",
      "HTTPS 트래픽은 IP가 암호화되어서",
      "DNS가 위치와 시점에 따라 다른 엣지 주소를 짧은 TTL로 돌려주어서",
      "브라우저가 IP 대신 도메인으로만 연결해서",
    ],
    answer: 2,
    explanation:
      "GeoDNS나 애니캐스트로 사람마다, 장소마다, 몇 분마다 받는 주소가 달라진다. 고정된 \"그 서비스의 IP\"가 없으니 IP 목록 규칙은 금방 낡는다.",
    anchor: "이름-하나에-답이-여러-개",
  },
  {
    id: "youtube-url-to-video-3",
    post: "youtube-url-to-video",
    question: "첫 방문의 첫 요청은 h2였는데 새로고침하니 h3가 되었다. 왜인가?",
    choices: [
      "첫 응답의 Alt-Svc 헤더를 보고서야 서버가 HTTP/3를 한다는 걸 알았기 때문이다",
      "HTTP/3는 캐시된 자원에만 쓰이기 때문이다",
      "TLS 세션 티켓이 있어야만 UDP를 쓸 수 있기 때문이다",
      "서버가 두 번째 요청부터 HTTP/2를 꺼 버리기 때문이다",
    ],
    answer: 0,
    explanation:
      "브라우저는 연결 전에는 서버의 HTTP/3 지원 여부를 모르고, 응답의 alt-svc: h3를 받은 뒤 다음 요청부터 QUIC을 시도한다. DNS HTTPS 레코드가 있으면 첫 요청부터 h3도 가능하다.",
    anchor: "두-번째-방문은-quic으로-간다",
  },
  {
    id: "youtube-url-to-video-4",
    post: "youtube-url-to-video",
    question: "openssl s_client를 echo | 로 바로 끊고 -sess_out으로 저장한 세션으로 재접속하니 재개가 안 됐다. TLS 1.3에서 흔한 원인은?",
    choices: [
      "TLS 1.3은 세션 재개를 지원하지 않는다",
      "ALPN을 h2로 지정하면 재개가 꺼진다",
      "자체 서명 인증서는 재개할 수 없다",
      "티켓이 핸드셰이크 뒤에 따로 오는데 그 전에 연결을 끊었다",
    ],
    answer: 3,
    explanation:
      "TLS 1.3의 NewSessionTicket은 핸드셰이크가 끝난 뒤 따로 온다. 바로 끊으면 티켓을 받기 전에 닫혀서, sleep 1 처럼 잠깐 붙잡아 두어야 Reused가 나온다.",
    anchor: "두-번째-방문은-quic으로-간다",
  },
  {
    id: "youtube-url-to-video-5",
    post: "youtube-url-to-video",
    question: "페이지 HTML, 스크립트, API는 모두 200인데 영상만 돈다. 데모에서 이 증상이 난 원인과 같은 종류는?",
    choices: [
      "www 호스트의 인증서가 만료되었다",
      "미디어 전용 호스트 이름만 DNS에서 풀리지 않았다",
      "HSTS가 http 요청을 막았다",
      "API 서버가 404를 돌려주었다",
    ],
    answer: 1,
    explanation:
      "영상은 페이지와 다른 이름의 미디어 호스트로 가니 DNS, 연결, TLS가 따로 일어난다. 그 이름만 막히면 페이지는 멀쩡하고 영상 요청만 ERR_NAME_NOT_RESOLVED로 실패한다.",
    anchor: "영상만-안-나올-때와-페이지가-안-뜰-때",
  },
  {
    id: "youtube-url-to-video-6",
    post: "youtube-url-to-video",
    question: "Range: bytes=99999999-99999999 처럼 파일 크기를 넘는 구간을 요청하면 서버는 무엇을 돌려주나?",
    choices: [
      "200과 파일 전체",
      "206과 빈 본문",
      "416과 Content-Range: bytes */전체크기",
      "404 Not Found",
    ],
    answer: 2,
    explanation:
      "만족할 수 없는 구간에는 416 Range Not Satisfiable과 함께 전체 크기만 알려 준다. 정상 구간이면 206과 Content-Range: bytes 시작-끝/전체크기가 온다.",
    anchor: "영상은-다른-이름에서-조각으로-온다",
  },
  {
    id: "youtube-url-to-video-7",
    post: "youtube-url-to-video",
    question: "같은 회선에서 \"직전 속도 이하의 가장 높은 화질, 버퍼 무시\" 규칙이 두 번 멈춘 가장 큰 이유는?",
    choices: [
      "회선을 거의 다 쓰는 화질을 골라 버퍼가 조각마다 0.3초밖에 쌓이지 않았다",
      "조화 평균이 너무 낮게 추정했다",
      "한 번에 한 칸씩만 올려서 화질이 낮았다",
      "Range 요청이 캐시되지 않았다",
    ],
    answer: 0,
    explanation:
      "720p를 바로 골라 회선 여유가 없으니 버퍼가 3초대에 머물렀고, 회선이 떨어지자 버틸 여유가 없었다. 버퍼에 따라 추정치를 깎은 규칙은 같은 회선에서 한 번도 멈추지 않았다.",
    anchor: "화질은-처리량과-버퍼가-같이-정한다",
  },
];
