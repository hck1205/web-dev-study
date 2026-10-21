import type { QuizQuestion } from "../types";

export const SD_STOCK_EXCHANGE_LOW_LATENCY: QuizQuestion[] = [
  {
    id: "sd-stock-exchange-low-latency-1",
    post: "sd-stock-exchange-low-latency",
    question:
      "게이트웨이 두 대가 같은 주문 1,000건을 보냈는데 실행할 때마다 체결 건수가 달랐다(796건, 803건). 무엇이 달랐기 때문인가?",
    choices: [
      "매칭 엔진의 가격-시간 우선 규칙",
      "주문이 시퀀서에 도착한 순서",
      "주문의 가격과 수량",
      "체결 기록의 해시 함수",
    ],
    answer: 1,
    explanation:
      "주문 내용은 같았지만 도착 순서가 실행마다 달라졌고, 순서가 바뀌면 누가 누구와 체결되는지도 바뀐다. 그래서 순서를 한 곳(시퀀서)에서 정해 일지로 남기고, 그 뒤로는 모두가 그 순번만 따른다.",
    anchor: "모든-입력에-번호를-찍는-단-하나의-작성자",
  },
  {
    id: "sd-stock-exchange-low-latency-2",
    post: "sd-stock-exchange-low-latency",
    question: "매칭 엔진이 체결 시각을 Date.now()로 찍으면 장애 조치 때 어떤 문제가 생기나?",
    choices: [
      "체결 가격이 달라진다",
      "대기 엔진이 일지를 읽지 못한다",
      "같은 일지를 재생해도 출력이 달라져 같은 체결이 다르게 나갈 수 있다",
      "아무 문제 없다. 시각은 체결 결과와 무관하다",
    ],
    answer: 2,
    explanation:
      "실험에서 같은 일지를 두 번 돌리자 가격과 수량은 같아도 출력 해시가 달랐다. 대기 엔진이 이어받은 뒤 같은 체결에 다른 시각이 붙으면 받는 쪽이 다른 체결로 볼 수 있다. 시각은 시퀀서가 일지에 찍은 값을 쓴다.",
    anchor: "같은-일지면-같은-호가창",
  },
  {
    id: "sd-stock-exchange-low-latency-3",
    post: "sd-stock-exchange-low-latency",
    question: "대기 엔진이 300번을 건너뛰고 301번 메시지를 받았다. 올바른 처리는?",
    choices: [
      "301번을 처리하지 않고 붙들어 둔 채 300번을 다시 요청한다",
      "301번을 먼저 처리하고 300번은 나중에 오면 처리한다",
      "300번은 잃어버린 것으로 보고 넘어간다",
      "주 엔진에게 발행을 멈추라고 한다",
    ],
    answer: 0,
    explanation:
      "순서를 바꿔 처리하거나 건너뛰면 그 엔진의 호가창은 주 엔진과 영영 달라진다. 빠진 순번을 다시 받아 300, 301 순으로 처리하면 결과가 같다. 실험에서도 재전송 뒤 출력 해시가 빠짐없이 받은 경우와 같았다.",
    anchor: "순번이-비면-멈추고-다시-달라고-한다",
  },
  {
    id: "sd-stock-exchange-low-latency-4",
    post: "sd-stock-exchange-low-latency",
    question:
      "잠금도 컨텍스트 스위치도 없는 Node 단일 스레드 엔진에서 가끔 수십 밀리초짜리 지연이 나온다. 가장 먼저 의심할 것은?",
    choices: [
      "CPU 코어 수가 부족하다",
      "시퀀서의 순번이 겹쳤다",
      "가격 단계 목록의 이진 탐색",
      "주문마다 새 객체를 만들어 생긴 가비지 컬렉션 멈춤",
    ],
    answer: 3,
    explanation:
      "스레드 하나로 돌면 잠금 경합은 없지만 런타임의 GC 멈춤은 남는다. 같은 스레드 실험에서 객체를 만드는 큐는 GC가 수백 번 일어났고, 미리 할당한 링 버퍼는 한 번도 없었다. 그래서 거래 경로에서는 새로 할당하지 않는 식으로 짠다.",
    anchor: "한-스레드가-쉬지-않고-도는-루프",
  },
  {
    id: "sd-stock-exchange-low-latency-5",
    post: "sd-stock-exchange-low-latency",
    question: "단일 생산자-단일 소비자 링 버퍼에서 쓰는 쪽이 값을 칸에 쓰기 전에 쓰기 순번부터 올리면?",
    choices: [
      "버퍼가 두 배로 커진다",
      "읽는 쪽이 아직 값이 들어오지 않은 칸을 읽을 수 있다",
      "꽉 찬 상태를 알아챌 수 없다",
      "순번이 줄어든다",
    ],
    answer: 1,
    explanation:
      "읽는 쪽은 쓰기 순번이 읽기 순번보다 크면 그 칸에 값이 있다고 믿는다. 순번을 먼저 올리면 그 믿음이 깨진다. 그래서 값을 쓴 뒤에 Atomics.store로 순번을 올리고, 이 순서가 다른 스레드에서도 그대로 보이게 한다.",
    anchor: "스레드-사이는-링-버퍼로-잇는다",
  },
  {
    id: "sd-stock-exchange-low-latency-6",
    post: "sd-stock-exchange-low-latency",
    question: "링 버퍼 왕복이 postMessage보다 훨씬 빨랐는데도 웹 서비스에 그대로 쓰기 어려운 이유는?",
    choices: [
      "받는 쪽이 바쁜 대기를 하면 메시지가 없어도 코어 하나를 거의 다 쓴다",
      "SharedArrayBuffer는 숫자를 담을 수 없다",
      "p99 지연이 postMessage보다 나쁘다",
      "메시지 순서가 바뀐다",
    ],
    answer: 0,
    explanation:
      "메시지 없이 1초를 기다리는 동안 CPU를 974ms 썼다. 마이크로초가 돈이 되는 거래소는 코어를 바치는 게 남는 장사지만 대부분의 웹 서비스는 손해다. 측정에서 링 버퍼는 p99도 postMessage보다 100배 넘게 좋았다.",
    anchor: "스레드-사이는-링-버퍼로-잇는다",
  },
  {
    id: "sd-stock-exchange-low-latency-7",
    post: "sd-stock-exchange-low-latency",
    question: "시장 데이터를 구독자마다 따로(유니캐스트) 보내지 않고 멀티캐스트로 보내는 주된 이유는?",
    choices: [
      "멀티캐스트는 패킷이 빠지지 않아서",
      "구독자 인증을 생략할 수 있어서",
      "모든 구독자가 거의 같은 순간에 받게 해 먼저 받는 쪽이 이득을 보지 않게 하려고",
      "데이터를 압축해 주어서",
    ],
    answer: 2,
    explanation:
      "따로 보내면 목록 앞쪽이 먼저 받아 그 차이만큼 먼저 주문을 낼 수 있다. 멀티캐스트는 네트워크가 한 번에 복제해 주니 받는 시각이 고르다. 다만 UDP라 패킷이 빠질 수 있어 순번과 재전송을 붙인다.",
    anchor: "시장-데이터를-모두에게-같은-순간에",
  },
];
