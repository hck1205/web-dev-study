import type { QuizQuestion } from "../types";

export const WEB_SERVER_VS_WAS: QuizQuestion[] = [
  {
    id: "web-server-vs-was-1",
    post: "web-server-vs-was",
    question: "maxThreads=4인 Tomcat에 본문을 1초에 100바이트씩 보내는 업로드 4개를 직접 붙였더니 /hello가 8초 걸렸다. CPU는 거의 놀고 있었다. 왜 그럴까?",
    choices: [
      "업로드 데이터를 디스크에 쓰느라 I/O가 막혀서",
      "서블릿이 본문을 읽는 동안 exec 스레드 4개가 모두 다음 바이트를 기다리며 묶여 있어서",
      "NIO 커넥터의 maxConnections 8192가 가득 차서",
      "GC가 업로드 버퍼를 치우느라 전체가 멈춰서",
    ],
    answer: 1,
    explanation:
      "Tomcat은 서블릿이 도는 동안 실행기 스레드 하나를 쓰고, 본문을 천천히 받는 시간도 거기에 들어간다. 스레드 4개가 모두 소켓 읽기에서 기다리니 /hello는 큐에서 줄을 섰다. 연결 수 한도는 8192라서 연결 4개로는 근처에도 가지 않는다.",
    anchor: "느린-업로드-네-개로-tomcat을-세운다",
  },
  {
    id: "web-server-vs-was-2",
    post: "web-server-vs-was",
    question: "같은 실험을 nginx 뒤에 두었더니 /hello가 2ms에 끝나고 Tomcat의 본문 읽기 시간이 0ms가 됐다. 그런데 proxy_request_buffering off를 넣자 다시 8초가 됐다. 무엇을 알 수 있나?",
    choices: [
      "Tomcat을 보호한 것은 nginx가 앞에 있다는 사실이 아니라 본문을 다 받은 뒤 넘기는 요청 버퍼링이다",
      "proxy_request_buffering off는 keepalive 연결을 끊어서 느려진다",
      "nginx는 응답 버퍼링으로만 Tomcat을 보호한다",
      "버퍼링을 끄면 nginx가 요청을 413으로 거절한다",
    ],
    answer: 0,
    explanation:
      "요청 버퍼링이 켜져 있으면 느린 클라이언트를 기다리는 일은 nginx의 이벤트 루프가 맡고 Tomcat은 다 모인 본문만 받는다. 끄면 nginx가 받는 대로 흘려보내므로 Tomcat 스레드가 다시 9초씩 묶인다. 응답 버퍼링은 반대 방향인 느린 수신을 막는 설정이다.",
    anchor: "nginx가-본문을-다-받은-뒤에-넘긴다",
  },
  {
    id: "web-server-vs-was-3",
    post: "web-server-vs-was",
    question: "운영 중 서비스가 느려졌다. CPU는 낮고, jstack을 떠 보니 http-nio-8080-exec 스레드가 전부 TIMED_WAITING 상태로 NioSocketWrapper.read 안에 있다. 먼저 의심할 곳은?",
    choices: [
      "JDBC 커넥션 풀이 바닥나 DB를 기다리는 중이다",
      "무한 루프가 도는 코드가 있다",
      "클라이언트에서 요청 본문이 느리게 들어오고 있다",
      "힙이 가득 차 GC가 계속 돈다",
    ],
    answer: 2,
    explanation:
      "NioSocketWrapper.read에서 기다린다는 건 클라이언트 소켓에서 다음 바이트를 기다린다는 뜻이다. DB를 기다리면 JDBC 드라이버의 소켓 읽기가 스택에 보이고, 무한 루프나 GC라면 CPU가 높아야 한다.",
    anchor: "느린-업로드-네-개로-tomcat을-세운다",
  },
  {
    id: "web-server-vs-was-4",
    post: "web-server-vs-was",
    question: "Apache event MPM이 worker MPM보다 나아진 점은?",
    choices: [
      "프로세스 하나에 스레드 하나만 두어 스레드 안전 문제를 없앴다",
      "요청 본문을 읽는 동안에도 일꾼 스레드를 쓰지 않는다",
      ".htaccess 파일을 시작할 때 한 번만 읽는다",
      "놀고 있는 keep-alive 연결을 리스너 스레드가 맡아 일꾼 스레드를 붙잡지 않는다",
    ],
    answer: 3,
    explanation:
      "worker는 keep-alive로 놀고 있는 연결도 스레드 하나를 붙잡지만, event는 그 대기를 리스너 스레드에 넘기고 일꾼 스레드는 요청을 처리할 때만 쓴다. 요청을 처리하는 동안에는 본문 읽기까지 포함해 여전히 일꾼 스레드를 쓰기 때문에 mod_reqtimeout 같은 대책이 따로 필요하다.",
    anchor: "apache는-연결을-다루는-방식을-고를-수-있다",
  },
  {
    id: "web-server-vs-was-5",
    post: "web-server-vs-was",
    question: "AllowOverride All을 준 디렉터리에서 /a/b/c/page.html 하나를 요청했다. .htaccess 파일은 하나도 없다. strace로 보면 무슨 일이 일어나나?",
    choices: [
      "파일이 없으니 .htaccess를 찾는 시스템 콜이 나가지 않는다",
      "경로의 디렉터리마다 .htaccess를 열어 보려다 ENOENT를 받는다",
      "시작할 때 한 번 찾아 두고 요청마다 다시 찾지 않는다",
      "문서 루트의 .htaccess 하나만 확인한다",
    ],
    answer: 1,
    explanation:
      "AllowOverride가 켜져 있으면 Apache는 요청마다 경로를 따라 내려가며 디렉터리마다 .htaccess를 열어 본다. 실습에서는 파일이 없는데도 다섯 번 시도했다. 서버 설정은 시작할 때 읽지만 .htaccess는 요청마다 확인하므로 규칙을 Directory 블록으로 옮기고 AllowOverride None으로 둔다.",
    anchor: "htaccess는-요청마다-디렉터리를-거슬러-올라간다",
  },
  {
    id: "web-server-vs-was-6",
    post: "web-server-vs-was",
    question: "Caddyfile에 localhost 사이트를 적고 띄웠더니 인증서를 받았다는 로그가 나왔다. 이 인증서는 어디서 왔나?",
    choices: [
      "Caddy가 만든 로컬 CA가 찍어 준 짧은 인증서다",
      "Let's Encrypt가 ACME로 발급한 공인 인증서다",
      "운영체제 신뢰 저장소에 있던 인증서를 가져왔다",
      "ZeroSSL이 localhost용으로 미리 발급해 둔 인증서다",
    ],
    answer: 0,
    explanation:
      "localhost처럼 공인 인증서를 받을 수 없는 이름에는 Caddy가 자기 로컬 CA를 만들어 인증서를 찍는다. 실습에서는 issuer가 local이었고 유효 기간이 12시간이었다. 공개 도메인을 적을 때만 ACME로 Let's Encrypt나 ZeroSSL에 요청한다.",
    anchor: "caddy는-인증서를-스스로-받는다",
  },
  {
    id: "web-server-vs-was-7",
    post: "web-server-vs-was",
    question: "nginx가 504를 돌려주는데 Tomcat 로그에는 그 요청이 늦게 찍히거나 아예 없다. 가장 먼저 확인할 것은?",
    choices: [
      "nginx의 client_max_body_size",
      "Tomcat 프로세스가 8080을 듣고 있는지",
      "Tomcat exec 스레드가 모두 무엇을 기다리고 있는지",
      "정적 파일 디렉터리의 권한",
    ],
    answer: 2,
    explanation:
      "504는 nginx가 업스트림 응답을 기다리다 시간이 다 된 것이고, Tomcat 로그에 늦게 찍힌다면 스레드가 다 차서 요청이 큐에서 기다렸을 가능성이 크다. jstack으로 스레드가 소켓 읽기, JDBC 중 어디서 기다리는지 본다. 포트를 듣지 않으면 502가 나고, 본문 크기 초과는 413이다.",
    anchor: "장애-때-어느-서버를-먼저-볼까",
  },
];
