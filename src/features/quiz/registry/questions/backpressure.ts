import type { QuizQuestion } from "../types";

export const BACKPRESSURE: QuizQuestion[] = [
  {
    id: "backpressure-1",
    post: "backpressure",
    question: "Node Writable 스트림의 write()가 false를 돌려줬는데 계속 write()를 부르면 어떻게 되나?",
    choices: [
      "스트림이 에러를 던지고 데이터를 버린다",
      "write()가 블로킹되어 버퍼가 빌 때까지 멈춘다",
      "데이터를 모두 받아 내부 버퍼에 쌓아 두고, 메모리가 계속 늘어난다",
      "highWaterMark가 자동으로 두 배가 된다",
    ],
    answer: 2,
    explanation:
      "false는 버퍼가 highWaterMark에 닿았다는 신호일 뿐 쓰기를 거절하지 않는다. 무시하면 전부 메모리에 쌓여 실습에서는 RSS가 380MiB까지 올랐다. 생산자는 drain 이벤트를 기다렸다가 다시 써야 한다.",
    anchor: "node-스트림의-신호-write가-false를-돌려준다",
  },
  {
    id: "backpressure-2",
    post: "backpressure",
    question: "소비자가 초당 5개를 처리하는데 초당 10개가 계속 들어온다. 큐 크기를 8에서 100만으로 늘리면 처리량은?",
    choices: [
      "그대로다. 늘어나는 것은 쌓인 일과 대기 시간이다",
      "두 배로 는다",
      "큐가 커질수록 조금씩 는다",
      "오히려 절반으로 준다",
    ],
    answer: 0,
    explanation:
      "처리량은 소비자 속도로 정해지므로 큐 크기와 상관없다. 큰 큐는 버리는 양을 줄이는 대신 남은 일과 대기 시간을 늘린다. 큐가 도움이 되는 것은 잠깐 몰렸다 끝나는 순간 폭주다.",
    anchor: "버퍼만-두면-시간-문제다",
  },
  {
    id: "backpressure-3",
    post: "backpressure",
    question: "a.pipe(b) 대신 pipeline(a, b)를 쓰는 가장 큰 이유는?",
    choices: [
      "pipe()는 백프레셔를 지키지 않아서",
      "중간에 에러가 나거나 클라이언트가 끊으면 pipeline()이 모든 스트림을 정리하고 에러를 알려 줘서",
      "pipeline()이 highWaterMark를 자동으로 키워서",
      "pipe()는 Node 22에서 제거되어서",
    ],
    answer: 1,
    explanation:
      "pipe()도 백프레셔는 지키지만 한 스트림에서 에러가 나도 나머지를 닫지 않아 연결과 파일 핸들이 새기 쉽다. pipeline()은 모두 destroy하고 콜백이나 Promise로 에러를 넘긴다.",
    anchor: "pipeline이-대신-해-주는-것",
  },
  {
    id: "backpressure-4",
    post: "backpressure",
    question: "서버가 소켓을 읽지 않는 동안 클라이언트 앱이 계속 쓰면, 대부분의 데이터는 어디에 쌓이나?",
    choices: [
      "받는 쪽 커널 수신 버퍼",
      "보내는 쪽 커널 송신 버퍼",
      "네트워크 장비의 큐",
      "보내는 쪽 앱 프로세스 안의 소켓 버퍼",
    ],
    answer: 3,
    explanation:
      "커널 버퍼는 크기가 정해져 있고 수신 창이 0이 되면 커널은 전송을 멈춘다. 실습에서도 커널에는 수 MB만 있었고 나머지 103MiB는 write()의 신호를 무시한 Node 소켓 버퍼에 쌓였다.",
    anchor: "소켓-아래에서는-tcp가-같은-일을-한다",
  },
  {
    id: "backpressure-5",
    post: "backpressure",
    question: "초당 200건을 처리하는 서버에서 요청이 대기열에서 최대 0.1초만 기다리게 하려면 대기열 상한은?",
    choices: ["2개", "20개", "200개", "2000개"],
    answer: 1,
    explanation:
      "리틀의 법칙으로 대기 시간은 대기열 길이를 처리량으로 나눈 값이다. 0.1초 × 초당 200건 = 20개다. 넘치는 요청은 일을 시작하기 전에 503으로 빠르게 돌려보낸다.",
    anchor: "서비스-사이에서는-큐-길이로-말한다",
  },
  {
    id: "backpressure-6",
    post: "backpressure",
    question: "readable.on('data', async chunk => await db.insert(chunk)) 코드의 문제는?",
    choices: [
      "await가 읽기를 멈추지 못해 data 이벤트가 계속 오고 insert만 쌓인다",
      "data 이벤트에서는 async 함수를 쓸 수 없어 문법 오류가 난다",
      "청크 순서가 뒤바뀌어 DB에 저장된다",
      "스트림이 첫 청크 이후 멈춘다",
    ],
    answer: 0,
    explanation:
      "이벤트 리스너가 돌려준 Promise를 스트림은 기다리지 않는다. 그래서 읽기는 계속되고 처리 중인 insert가 끝없이 쌓인다. for await로 읽거나 pipeline에 Writable을 이으면 한 번 처리가 끝나야 다음 청크를 읽는다.",
    anchor: "pipeline이-대신-해-주는-것",
  },
];
