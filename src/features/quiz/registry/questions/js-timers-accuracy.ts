import type { QuizQuestion } from "../types";

export const JS_TIMERS_ACCURACY: QuizQuestion[] = [
  {
    id: "js-timers-accuracy-1",
    post: "js-timers-accuracy",
    question: "setInterval(fn, 100)이 도는 중에 메인 스레드가 1초 동안 막혔다. 막힘이 풀린 뒤에는 어떻게 되나?",
    choices: [
      "놓친 열 번을 연달아 실행한다",
      "한 번 실행하고, 그 뒤로 다시 100ms 간격으로 돈다",
      "인터벌이 자동으로 취소된다",
      "다음 호출이 1초 더 미뤄진다",
    ],
    answer: 1,
    explanation:
      "반복 타이머는 놓친 호출을 쌓아 두지 않는다. Node.js와 크롬 모두 막힘이 풀리자 한 번 부르고 다시 원래 간격으로 돌았다. 그래서 호출 횟수로 시간을 세는 카운트다운은 막힌 만큼 영영 뒤처진다.",
    anchor: "setinterval은-밀린-호출을-몰아서-주지-않는다",
  },
  {
    id: "js-timers-accuracy-2",
    post: "js-timers-accuracy",
    question: "카운트다운이 탭 전환이나 긴 작업 뒤에도 제때 0이 되게 하려면?",
    choices: [
      "setInterval 간격을 더 짧게 잡는다",
      "콜백에서 남은 초를 1씩 빼되 visibilitychange에서 1을 더 뺀다",
      "Web Worker에서 setInterval을 돌린다",
      "끝나는 시각을 정해 두고 콜백마다 그 시각과 지금 시각으로 남은 시간을 다시 계산한다",
    ],
    answer: 3,
    explanation:
      "타이머는 늦게 불릴 수 있고 놓친 호출은 버려지니 횟수를 세면 틀린다. 끝나는 시각 기준으로 매번 계산하면 콜백이 늦어도 그 순간의 표시는 맞다. 간격을 줄이는 건 CPU만 더 쓰고 근본 원인을 고치지 못한다.",
    anchor: "setinterval은-밀린-호출을-몰아서-주지-않는다",
  },
  {
    id: "js-timers-accuracy-3",
    post: "js-timers-accuracy",
    question: "브라우저에서 setTimeout(0)으로 자기 자신을 계속 다시 예약하면 간격이 어떻게 되나?",
    choices: [
      "처음 몇 번은 거의 0ms이다가 중첩이 5단계를 넘으면 최소 4ms가 된다",
      "항상 정확히 0ms다",
      "처음부터 끝까지 16.7ms다",
      "매번 1ms씩 늘어난다",
    ],
    answer: 0,
    explanation:
      "HTML 명세는 타이머 안에서 타이머를 거는 중첩이 5단계를 넘으면 최소 지연을 4ms로 올린다. 크롬 141에서도 다섯 번까지는 0.0ms, 그다음부터 4ms 이상이 나왔다. 그래서 잘게 양보하는 데 setTimeout(0)을 쓰면 4ms가 쌓인다.",
    anchor: "0ms를-줘도-0ms가-아니다",
  },
  {
    id: "js-timers-accuracy-4",
    post: "js-timers-accuracy",
    question: "만료까지 30일 남은 토큰을 setTimeout(refresh, expiresAt - Date.now())로 예약했다. 무슨 일이 생기나?",
    choices: [
      "30일 뒤에 정확히 갱신된다",
      "브라우저가 최대 24.8일 뒤로 맞춰 준다",
      "지연이 32비트 정수를 넘쳐 거의 즉시 실행되고, 갱신이 반복될 수 있다",
      "TypeError가 나서 예약되지 않는다",
    ],
    answer: 2,
    explanation:
      "지연은 32비트 부호 있는 정수로 다뤄져 2^31 - 1ms(약 24.8일)를 넘으면 넘친다. 브라우저는 조용히 거의 즉시 실행하고 Node.js는 경고 후 1ms로 바꾼다. 긴 지연은 최댓값으로 잘라 나눠 기다려야 한다.",
    anchor: "너무-큰-값은-바로-울린다",
  },
  {
    id: "js-timers-accuracy-5",
    post: "js-timers-accuracy",
    question: "크롬에서 5분 넘게 숨겨진 탭의 연쇄 setTimeout이 1분에 한 번만 도는 이유는?",
    choices: [
      "메모리가 부족해서 브라우저가 탭을 얼렸다",
      "배터리와 CPU를 아끼려는 강한 스로틀링 때문이다",
      "타이머 지연이 32비트 범위를 넘어서",
      "rAF와 같은 주기로 묶였기 때문이다",
    ],
    answer: 1,
    explanation:
      "크롬 88부터 오래 숨겨져 있고 소리를 내지 않는 페이지의 연쇄 타이머는 1분에 한 번만 깨운다. 그보다 짧게 숨겨진 탭도 1초 단위로 묶인다. 그래서 돌아왔을 때 visibilitychange에서 다시 계산하고, 정확한 판정은 서버에 맡긴다.",
    anchor: "탭을-떠나면-브라우저가-일부러-늦춘다",
  },
  {
    id: "js-timers-accuracy-6",
    post: "js-timers-accuracy",
    question: "작업이 걸린 시간을 잴 때 Date.now()보다 performance.now()가 알맞은 이유는?",
    choices: [
      "Date.now()는 초 단위라서",
      "performance.now()는 서버 시각과 동기화돼서",
      "Date.now()는 마이크로태스크에서 호출할 수 없어서",
      "performance.now()는 뒤로 가지 않는 단조 시계라 NTP 보정이나 시계 변경에 흔들리지 않아서",
    ],
    answer: 3,
    explanation:
      "Date.now()는 벽시계라서 운영체제 시간이 보정되거나 사용자가 바꾸면 앞뒤로 뛴다. performance.now()는 페이지 시작 기준의 단조 시계라 경과 시간 측정에 맞다. 대신 보안 때문에 정밀도가 잘려 있다.",
    anchor: "어느-시계로-잴-것인가",
  },
  {
    id: "js-timers-accuracy-7",
    post: "js-timers-accuracy",
    question: "React 카운트다운에서 개발 모드일 때만 숫자가 두 배 빨리 줄어든다. 가장 먼저 의심할 것은?",
    choices: [
      "StrictMode가 effect를 한 번 더 실행했는데 정리 함수에서 타이머를 지우지 않아 두 개가 돈다",
      "개발 모드에서는 setInterval 간격이 절반이 된다",
      "useState가 개발 모드에서 값을 두 번 뺀다",
      "React DevTools가 타이머를 가속한다",
    ],
    answer: 0,
    explanation:
      "StrictMode는 개발 모드에서 effect를 실행했다 정리하고 다시 실행해 본다. 정리 함수에서 clearTimeout이나 clearInterval을 빼먹으면 타이머가 두 개 남는다. 운영 빌드에선 안 보여도 페이지를 떠난 뒤 setState가 불리는 같은 버그가 숨어 있다.",
    anchor: "react에서-카운트다운을-짤-때",
  },
];
