import type { QuizQuestion } from "../types";

export const SD_START_SINGLE_SERVER: QuizQuestion[] = [
  {
    id: "sd-start-single-server-1",
    post: "sd-start-single-server",
    question: "curl --resolve로 이름을 127.0.0.1에 연결해 요청했다. 요청 안의 Host 헤더에는 무엇이 실리나?",
    choices: [
      "127.0.0.1:8080",
      "www.matjip.example:8080",
      "아무것도 실리지 않는다",
      "DNS 서버의 주소",
    ],
    answer: 1,
    explanation:
      "연결은 IP로 맺지만 HTTP 요청 안에는 이름이 그대로 Host 헤더로 실려 간다. 그래서 서버 한 대가 여러 도메인을 받아도 어느 사이트 요청인지 구분할 수 있다.",
    anchor: "실제로-요청을-보내-보면",
  },
  {
    id: "sd-start-single-server-2",
    post: "sd-start-single-server",
    question: "같은 순위 데이터를 브라우저는 HTML로, 휴대폰 앱은 JSON으로 받는 이유로 가장 알맞은 것은?",
    choices: [
      "앱은 HTTP를 쓰지 않기 때문에",
      "JSON이 HTML보다 항상 보안이 강해서",
      "앱은 화면을 그리는 코드가 이미 설치돼 있어 데이터만 필요하기 때문에",
      "서버가 클라이언트 IP를 보고 형식을 정하기 때문에",
    ],
    answer: 2,
    explanation:
      "앱은 화면 코드가 휴대폰에 이미 있으니 서버에게서 데이터만 받으면 된다. 둘 다 같은 HTTP로 같은 서버에 들어오며, 형식은 요청한 경로가 정한다.",
    anchor: "웹과-앱은-받는-모양이-다르다",
  },
  {
    id: "sd-start-single-server-3",
    post: "sd-start-single-server",
    question: "Node.js 서버 한 대에서 400ms짜리 동기 리포트 계산이 도는 동안 가벼운 API가 380ms까지 느려졌다. 왜인가?",
    choices: [
      "리포트가 DB 연결을 모두 가져가서",
      "자바스크립트가 한 스레드에서 돌아 계산이 끝날 때까지 다른 요청이 기다려서",
      "DNS 캐시가 만료돼서",
      "브라우저가 요청을 한 번에 하나만 보내서",
    ],
    answer: 1,
    explanation:
      "동기 계산이 CPU를 잡고 있으면 이벤트 루프가 다음 요청을 처리하지 못한다. 그래서 늦게 온 요청일수록 대기 시간이 30ms씩 줄며 모두 리포트가 끝나는 순간 풀려났다.",
    anchor: "가장-먼저-무너지는-곳-1-무거운-요청-하나",
  },
  {
    id: "sd-start-single-server-4",
    post: "sd-start-single-server",
    question: "서버가 한 대뿐일 때 새 버전을 배포하면 어떤 일이 생기나?",
    choices: [
      "기존 연결은 유지되고 새 연결만 새 버전으로 간다",
      "DNS가 자동으로 다른 서버를 알려 준다",
      "프로세스가 다시 뜰 때까지 들어온 요청이 모두 실패한다",
      "요청이 큐에 쌓였다가 나중에 모두 처리된다",
    ],
    answer: 2,
    explanation:
      "갈 곳이 그 서버 하나뿐이라 프로세스를 내린 순간부터 연결이 거부된다. 데모에서는 약 3.8초 동안 요청 181개가 실패했다. 이를 피하려면 서버를 여러 대 두고 로드 밸런서로 나눠야 한다.",
    anchor: "가장-먼저-무너지는-곳-2-서버가-꺼지는-순간",
  },
  {
    id: "sd-start-single-server-5",
    post: "sd-start-single-server",
    question: "DAU 20만, 1인당 하루 30요청, 피크 배율 3, 서버 한 대가 초당 300개를 버틴다. 안전선을 70%로 잡으면?",
    choices: [
      "피크 약 210 QPS로 안전선 안이다",
      "피크 약 70 QPS로 여유가 매우 크다",
      "피크 약 630 QPS로 두 대가 필요하다",
      "피크 약 300 QPS로 정확히 한계다",
    ],
    answer: 0,
    explanation:
      "하루 600만 요청을 86,400초로 나누면 평균 70 QPS이고, 피크 배율 3을 곱하면 210이다. 300의 70%인 210 이하이므로 아직 한 대로 버틴다. 70은 피크 배율을 빼먹은 숫자다.",
    anchor: "한-대로-얼마나-버틸까-계산해-보기",
  },
  {
    id: "sd-start-single-server-6",
    post: "sd-start-single-server",
    question: "서버 한 대로 시작할 때 나중에 나누기 쉽게 미리 해 둘 일로 가장 알맞은 것은?",
    choices: [
      "처음부터 DB를 샤딩해 둔다",
      "DB 주소를 코드에 상수로 박아 둔다",
      "로그인 세션을 웹 앱 프로세스 메모리에만 둔다",
      "DB 주소를 환경 변수로 받고 백업을 다른 곳에 둔다",
    ],
    answer: 3,
    explanation:
      "DB 주소가 설정으로 빠져 있으면 DB를 다른 서버로 옮길 때 한 줄만 바꾸면 된다. 백업은 서버 디스크와 함께 사라지지 않도록 처음부터 다른 곳에 둔다. 세션을 프로세스 메모리에만 두면 서버가 두 대가 되는 순간 문제가 된다.",
    anchor: "처음부터-크게-만들면-안-되나",
  },
];
