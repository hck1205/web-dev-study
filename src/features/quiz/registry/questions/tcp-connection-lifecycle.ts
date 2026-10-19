import type { QuizQuestion } from "../types";

export const TCP_CONNECTION_LIFECYCLE: QuizQuestion[] = [
  {
    id: "tcp-connection-lifecycle-1",
    post: "tcp-connection-lifecycle",
    question: "API 서버에 CLOSE-WAIT 소켓이 시간이 지나도 줄지 않고 계속 늘어난다. 가장 먼저 의심할 곳은?",
    choices: [
      "커널의 tcp_fin_timeout 값이 너무 크다",
      "상대가 끊었는데 내 앱이 소켓을 close()하지 않는 코드 경로",
      "상대 서버가 마지막 ACK를 보내지 않는다",
      "TIME_WAIT를 재사용하는 tcp_tw_reuse가 꺼져 있다",
    ],
    answer: 1,
    explanation:
      "CLOSE-WAIT는 상대의 FIN에 커널이 ACK까지 했고 앱의 close()만 기다리는 상태라 커널 타임아웃이 없다. 예외 경로나 풀 반납 누락처럼 앱이 닫지 않는 곳을 찾아야 한다. tcp_fin_timeout은 FIN-WAIT-2 시간이라 상관없다.",
    anchor: "close_wait가-쌓이면-내-코드를-본다",
  },
  {
    id: "tcp-connection-lifecycle-2",
    post: "tcp-connection-lifecycle",
    question: "리눅스에서 TIME-WAIT가 남는 쪽과 그 시간으로 맞는 것은?",
    choices: [
      "나중에 끊은 쪽, tcp_fin_timeout만큼",
      "항상 서버 쪽, 2분",
      "먼저 끊은 쪽, 커널에 고정된 60초",
      "양쪽 모두, keepalive 시간만큼",
    ],
    answer: 2,
    explanation:
      "마지막 ACK를 보내는 쪽, 즉 먼저 FIN을 보낸 쪽이 TIME-WAIT를 진다. 리눅스는 이 시간을 60초 상수로 두었고, 이름이 비슷한 tcp_fin_timeout을 줄여도 TIME-WAIT 길이는 바뀌지 않는다.",
    anchor: "time_wait가-60초나-남는-이유",
  },
  {
    id: "tcp-connection-lifecycle-3",
    post: "tcp-connection-lifecycle",
    question: "curl이 한참 기다리다 'Timeout was reached'로 실패했다. 캡처에는 같은 번호의 SYN만 반복된다. 무엇을 의심하나?",
    choices: [
      "해당 포트에 듣는 프로세스가 없다",
      "서버 앱이 요청을 처리하다 예외가 났다",
      "TLS 인증서가 만료됐다",
      "방화벽·보안 그룹이 SYN을 버리거나 상대 accept 큐가 넘쳤다",
    ],
    answer: 3,
    explanation:
      "듣는 프로세스가 없으면 상대 커널이 RST로 바로 거절해 Connection refused가 난다. SYN에 아무 답이 없어 재전송만 반복된다는 건 SYN이 중간에서 버려지거나 상대가 큐가 차서 버리고 있다는 뜻이다.",
    anchor: "대답이-없을-때와-거절당할-때",
  },
  {
    id: "tcp-connection-lifecycle-4",
    post: "tcp-connection-lifecycle",
    question: "ss -ltn에서 LISTEN 줄의 Recv-Q가 Send-Q와 같거나 더 크다. 이게 뜻하는 것은?",
    choices: [
      "accept 큐가 차서 앱이 accept()를 따라가지 못하고 있다",
      "수신 버퍼에 읽지 않은 데이터가 쌓였다",
      "보낸 데이터의 ACK를 기다리고 있다",
      "SYN 쿠키가 꺼져 있다",
    ],
    answer: 0,
    explanation:
      "LISTEN 소켓에서 Send-Q는 accept 큐의 최대 길이, Recv-Q는 지금 줄 선 연결 수다. 둘이 같아지면 새 연결의 SYN이 버려지고 클라이언트는 재전송으로 1초쯤 늦게 붙는다. 다른 상태의 소켓처럼 바이트 수로 읽으면 안 된다.",
    anchor: "커널-안의-두-대기열",
  },
  {
    id: "tcp-connection-lifecycle-5",
    post: "tcp-connection-lifecycle",
    question: "서버가 요청 본문을 다 읽지 않은 채 소켓을 닫았다. 클라이언트에 보이는 것은?",
    choices: [
      "정상 종료(FIN)라서 아무 에러가 없다",
      "커널이 RST를 보내 Connection reset by peer가 난다",
      "TIME-WAIT가 끝날 때까지 응답을 기다린다",
      "커널이 남은 데이터를 대신 읽고 FIN을 보낸다",
    ],
    answer: 1,
    explanation:
      "읽지 않은 데이터가 남은 채 close()하면 리눅스는 FIN 대신 RST를 보낸다. 그래서 큰 업로드에 413을 보내고 바로 닫는 서버에서 클라이언트가 응답 대신 reset만 받는 일이 생긴다.",
    anchor: "rst는-대화를-끊는-비상-버튼",
  },
  {
    id: "tcp-connection-lifecycle-6",
    post: "tcp-connection-lifecycle",
    question: "ALB 뒤의 Node.js 서버에서 간헐적인 502가 난다. 연결 타임아웃 관점에서 맞는 해결은?",
    choices: [
      "커널의 tcp_keepalive_time을 2시간보다 길게 늘린다",
      "ALB 유휴 타임아웃을 Node의 keepAliveTimeout보다 길게 늘린다",
      "Node의 keepAliveTimeout을 ALB 유휴 타임아웃(기본 60초)보다 길게 잡는다",
      "SO_LINGER를 0으로 걸어 TIME-WAIT를 없앤다",
    ],
    answer: 2,
    explanation:
      "Node가 5초 쉰 연결을 먼저 닫는 순간 ALB가 그 연결로 요청을 보내면 RST를 받고 502가 된다. 뒤쪽 서버의 유휴 타임아웃을 앞단보다 길게 잡아 앞단이 먼저 닫게 해야 한다.",
    anchor: "조용히-죽은-연결을-찾는-keepalive",
  },
];
