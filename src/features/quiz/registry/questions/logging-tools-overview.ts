import type { QuizQuestion } from "../types";

export const LOGGING_TOOLS_OVERVIEW: QuizQuestion[] = [
  {
    id: "logging-tools-overview-1",
    post: "logging-tools-overview",
    question:
      "사용자는 504를 받았는데 같은 요청 ID의 앱 로그에는 status 200, duration_ms 2000이 남아 있다. nginx의 proxy_read_timeout은 1초다. 무슨 일이 일어났나?",
    choices: [
      "앱이 응답을 두 번 보냈다",
      "nginx가 1초 기다리다 포기하고 504를 만들었고, 앱은 그 사실을 모른 채 끝까지 처리했다",
      "앱 로그의 시계가 틀려서 200으로 보인다",
      "브라우저가 응답을 캐시에서 읽었다",
    ],
    answer: 1,
    explanation:
      "504는 앞단이 만든 응답이다. 실습에서 access 로그의 rt가 타임아웃과 같은 1.000초였고 error 로그에 upstream timed out이 남았다. 앱 로그만 보면 성공이라 앞단 로그를 함께 봐야 한다.",
    anchor: "프록시-로그-앱이-아니라-앞단이-만든-에러",
  },
  {
    id: "logging-tools-overview-2",
    post: "logging-tools-overview",
    question: "502가 났는데 앱 로그에 그 요청이 전혀 없다. 가장 먼저 볼 곳은?",
    choices: [
      "앱의 debug 로그를 켜고 다시 기다린다",
      "브라우저 콘솔의 경고",
      "프록시·로드 밸런서의 error 로그",
      "DB 슬로 쿼리 로그",
    ],
    answer: 2,
    explanation:
      "앱 로그에 없다면 요청이 앱까지 가지 못한 것이다. nginx error 로그의 connect() failed (111: Connection refused)처럼 연결 거부, DNS, TLS 실패가 앞단에 남는다. 앱 쪽 debug를 켜도 닿지 않은 요청은 찍히지 않는다.",
    anchor: "프록시-로그-앱이-아니라-앞단이-만든-에러",
  },
  {
    id: "logging-tools-overview-3",
    post: "logging-tools-overview",
    question:
      "앱을 node app.js > app.log 로 백그라운드에서 띄웠더니 에러 로그가 파일에 하나도 없다. 왜 그럴까?",
    choices: [
      "console.error는 stderr로 가는데 >는 stdout만 파일로 보내기 때문",
      "Node.js가 운영 모드에서 에러를 숨기기 때문",
      "파일 버퍼가 아직 비워지지 않았기 때문",
      "로그 회전으로 파일이 바뀌었기 때문",
    ],
    answer: 0,
    explanation:
      "실습에서 >만 쓰자 에러 줄이 0개였고 2>&1을 붙이자 1개가 됐다. 대부분의 기본 예외 출력도 stderr로 간다. systemd와 컨테이너 런타임은 둘 다 받지만 손으로 띄운 프로세스는 직접 챙겨야 한다.",
    anchor: "프로세스-하나-표준-출력과-표준-에러",
  },
  {
    id: "logging-tools-overview-4",
    post: "logging-tools-overview",
    question:
      "장애 중 tail -f로 로그를 보고 있는데 어느 순간부터 새 줄이 전혀 안 나온다. 앱은 정상적으로 쓰고 있다. 가장 그럴듯한 이유와 대책은?",
    choices: [
      "터미널 버퍼가 찼다. clear를 친다",
      "로그 레벨이 바뀌었다. LOG_LEVEL을 확인한다",
      "디스크가 찼다. 파일을 지운다",
      "로그 회전으로 새 파일이 생겼는데 -f는 옛 파일을 붙잡고 있다. tail -F로 다시 본다",
    ],
    answer: 3,
    explanation:
      "-f는 처음 연 파일(inode)을 따라가서 이름이 바뀐 옛 파일만 본다. -F는 이름을 따라가다 가리키는 파일이 바뀌면 다시 연다. 실습에서도 -F만 회전 뒤의 줄을 받았다.",
    anchor: "프로세스-하나-표준-출력과-표준-에러",
  },
  {
    id: "logging-tools-overview-5",
    post: "logging-tools-overview",
    question:
      "서버가 재부팅된 뒤 journalctl -k로 커널 메시지를 보려니 -- No entries --가 나온다. 저널 파일은 디스크에 남아 있다. 무엇을 해야 하나?",
    choices: [
      "journald를 재시작한다",
      "--list-boots로 부팅 목록을 보고 -b -1로 직전 부팅을 연다",
      "-o json으로 출력 형식을 바꾼다",
      "-p err로 우선순위를 높인다",
    ],
    answer: 1,
    explanation:
      "-k와 -b는 현재 부팅의 기록만 본다. 실습 VM에서도 커널 메시지 831줄이 이전 부팅 것이라 -k는 비어 있었다. 저널이 /var/log/journal에 남는 설정이면 -b -1로 직전 부팅을 볼 수 있다.",
    anchor: "서버-한-대-journalctl",
  },
  {
    id: "logging-tools-overview-6",
    post: "logging-tools-overview",
    question: "파드가 CrashLoopBackOff다. OOMKilled로 죽었다는 사실은 어디서 확인하나?",
    choices: [
      "kubectl describe pod의 Last State(Reason, Exit Code)",
      "kubectl logs의 마지막 줄",
      "kubectl logs --timestamps의 시각",
      "앱의 error 레벨 로그",
    ],
    answer: 0,
    explanation:
      "kubectl logs는 앱이 stdout·stderr에 쓴 것만 보여 준다. 커널이 메모리 초과로 죽인 사실은 앱이 남길 틈이 없고, 파드 상태의 Last State에 Reason: OOMKilled, Exit Code: 137로 남는다. 이벤트는 kubectl get events로 본다.",
    anchor: "컨테이너와-쿠버네티스-kubectl-logs",
  },
  {
    id: "logging-tools-overview-7",
    post: "logging-tools-overview",
    question: "사용자에게 받은 HAR 파일을 팀 채널에 그대로 올리면 안 되는 이유는?",
    choices: [
      "HAR은 브라우저마다 형식이 달라 열리지 않기 때문",
      "파일이 커서 채널에 올라가지 않기 때문",
      "쿠키와 Authorization 헤더, URL의 토큰이 그대로 들어 있어 그 사용자로 로그인할 수 있기 때문",
      "HAR에는 응답 본문이 없어 쓸모가 없기 때문",
    ],
    answer: 2,
    explanation:
      "실습 HAR에는 세션 쿠키가 여섯 번, 토큰이 다섯 번 들어 있었다. HttpOnly 쿠키도 JS는 못 읽지만 HAR에는 실린다. 받자마자 가리고 쓴 뒤 지우며, 필요하면 세션을 만료시킨다.",
    anchor: "브라우저-개발자-도구-사용자가-실제로-받은-것",
  },
];
