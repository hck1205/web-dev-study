import type { QuizQuestion } from "../types";

export const BLUE_GREEN_DEPLOYMENT: QuizQuestion[] = [
  {
    id: "blue-green-deployment-1",
    post: "blue-green-deployment",
    question: "nginx upstream을 그린으로 바꾸고 `nginx -s reload` 했을 때 처리 중이던 요청이 끊기지 않는 이유는?",
    choices: [
      "reload가 요청을 큐에 모았다가 새 워커가 다시 보내기 때문에",
      "마스터가 듣는 소켓을 쥔 채 새 워커를 띄우고, 옛 워커는 하던 요청을 옛 설정대로 끝낸 뒤 나가기 때문에",
      "reload 중에는 nginx가 모든 요청을 블루와 그린에 동시에 보내기 때문에",
      "클라이언트가 실패한 요청을 자동으로 다시 보내기 때문에",
    ],
    answer: 1,
    explanation:
      "reload는 프로세스를 내리지 않는다. 마스터가 새 설정으로 워커를 띄우고 옛 워커는 새 연결을 받지 않은 채 남은 요청만 마친다. 그래서 전환한 1초 안에 옛 버전 응답이 조금 섞이고 실패는 없다.",
    anchor: "reload가-요청을-떨어뜨리지-않는-이유",
  },
  {
    id: "blue-green-deployment-2",
    post: "blue-green-deployment",
    question:
      "전환할 때 `systemctl restart nginx`를 썼더니 클라이언트 쪽에서만 실패가 보이고 nginx 접근 로그에는 아무것도 없다. 왜 그런가?",
    choices: [
      "nginx가 실패한 요청을 로그에서 지우기 때문에",
      "앱 서버가 응답을 늦게 보냈기 때문에",
      "프로세스가 내려간 동안 포트가 닫혀 요청이 nginx에 닿지도 못했기 때문에",
      "접근 로그 버퍼가 꽉 찼기 때문에",
    ],
    answer: 2,
    explanation:
      "restart는 프로세스를 내렸다 올리니 그 사이 포트가 닫혀 연결 자체가 거절된다. 받지도 못한 요청이라 nginx와 앱 로그에는 남지 않는다. 전환은 reload로 한다.",
    anchor: "바꾸는-방법을-틀리면-실패가-생긴다",
  },
  {
    id: "blue-green-deployment-3",
    post: "blue-green-deployment",
    question: "reload 직후 스크립트가 바로 블루를 내렸더니 502가 수백 건 났다. 무엇을 고쳐야 하나?",
    choices: [
      "옛 워커가 처리 중인 요청을 다 끝낸 뒤에 블루를 내리도록 기다린다",
      "upstream에 keepalive를 끈다",
      "그린의 worker_processes를 늘린다",
      "nginx를 reload 대신 restart 한다",
    ],
    answer: 0,
    explanation:
      "reload 뒤에도 옛 워커는 잠깐 블루로 요청을 보낸다. 그 블루가 사라지면 그 요청이 502가 된다. 옛 워커가 모두 나간 것을 확인하고, 가장 긴 요청 시간보다 길게 기다린 뒤 블루를 정리한다.",
    anchor: "바꾸는-방법을-틀리면-실패가-생긴다",
  },
  {
    id: "blue-green-deployment-4",
    post: "blue-green-deployment",
    question: "평소 TTL이 3600초인 레코드를 바꿔 DNS로 블루그린 전환을 하려 한다. 가장 먼저 할 일은?",
    choices: [
      "전환 직후 권한 DNS 서버를 재시작한다",
      "하루쯤 전에 TTL을 60초 정도로 낮춰 두고 옛 TTL만큼 기다린다",
      "블루를 전환과 동시에 내려 클라이언트가 빨리 다시 묻게 한다",
      "TTL을 0으로 두면 모든 리졸버가 즉시 따르니 바로 바꾼다",
    ],
    answer: 1,
    explanation:
      "리졸버는 받은 답을 TTL 동안 쥐고 있어서 TTL이 1시간이면 10분 뒤에도 80% 넘게 블루로 간다. TTL을 미리 낮춰 두어야 섞이는 시간이 줄어든다. TTL을 무시하는 클라이언트도 있어서 블루는 바로 내리지 않는다.",
    anchor: "dns로-바꾸면-ttl만큼-섞인다",
  },
  {
    id: "blue-green-deployment-5",
    post: "blue-green-deployment",
    question: "블루그린으로 `users.name`을 `full_name`으로 바꾸려 한다. 전환과 같은 배포에 넣으면 안 되는 단계는?",
    choices: [
      "full_name 열을 nullable로 추가하기",
      "두 열에 모두 쓰는 버전으로 전환하기",
      "옛 행의 full_name을 나눠 채우기",
      "옛 열 name을 지우기",
    ],
    answer: 3,
    explanation:
      "DB는 한 벌이라 블루와 그린이 같은 스키마를 견뎌야 한다. 열을 지우면 블루로 되돌렸을 때 블루가 깨지니, 옛 버전으로 돌아갈 일이 없어진 뒤 따로 한다. 나머지 단계는 바로 앞 버전으로 돌아가도 깨지지 않는다.",
    anchor: "데이터베이스는-한-벌뿐이다",
  },
  {
    id: "blue-green-deployment-6",
    post: "blue-green-deployment",
    question: "블루로 되돌렸는데도 에러가 계속된다. 가장 먼저 의심할 것은?",
    choices: [
      "nginx reload가 실패했다",
      "그린이 그사이 새 형식으로 쓴 캐시·DB·메시지를 블루가 읽지 못한다",
      "블루의 CPU가 부족하다",
      "DNS TTL이 너무 짧다",
    ],
    answer: 1,
    explanation:
      "블루그린의 빠른 되돌리기에는 블루가 지금 데이터를 읽을 수 있어야 한다는 조건이 붙는다. 그린이 쓴 새 형식의 값이 남아 있으면 방향을 돌려도 에러가 이어진다. 데이터 형식도 스키마처럼 두 버전을 오가도 깨지지 않게 바꾼다.",
    anchor: "되돌리기가-빠른-이유와-그-조건",
  },
];
