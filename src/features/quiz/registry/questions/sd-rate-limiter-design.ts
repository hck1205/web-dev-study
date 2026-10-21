import type { QuizQuestion } from "../types";

export const SD_RATE_LIMITER_DESIGN: QuizQuestion[] = [
  {
    id: "sd-rate-limiter-design-1",
    post: "sd-rate-limiter-design",
    question: "리뷰 작성 버튼을 앱에서 1분에 10번까지만 누를 수 있게 막았다. 스크립트 공격이 계속 들어오는 이유는?",
    choices: [
      "앱의 타이머가 부정확해서",
      "스크립트는 앱을 거치지 않고 API를 바로 부르니 클라이언트 제한은 보안 장치가 아니라서",
      "한도 10이 너무 높아서",
      "Redis에 카운터를 두지 않아서",
    ],
    answer: 1,
    explanation:
      "클라이언트 쪽 제한은 사용자 경험을 돕지만 앱을 거치지 않는 요청은 막지 못한다. 그래서 요청 수 제한은 게이트웨이나 API 서버처럼 서버 쪽에서 건다.",
    anchor: "문지기를-어디에-세울까",
  },
  {
    id: "sd-rate-limiter-design-2",
    post: "sd-rate-limiter-design",
    question: "서버 세 대가 Redis에서 GET으로 읽고 1을 더해 SET으로 쓰게 했더니 한도 10인데 30개가 모두 통과했다. 왜 그럴까?",
    choices: [
      "Redis가 SET을 무시해서",
      "서버마다 자기 메모리에서 세서",
      "읽기와 쓰기 사이에 다른 서버가 같은 값을 읽어 같은 숫자를 다시 써서",
      "키의 수명이 너무 짧아서",
    ],
    answer: 2,
    explanation:
      "Redis 하나에 모아 세도 읽고 더하고 쓰는 사이에 틈이 있으면 여러 서버가 같은 값을 읽는다. INCR처럼 Redis가 더하기까지 하는 명령 하나로 바꾸면 틈이 없어져 정확히 10개만 통과했다.",
    anchor: "서버-세-대가-따로-세면",
  },
  {
    id: "sd-rate-limiter-design-3",
    post: "sd-rate-limiter-design",
    question: "INCR 뒤에 EXPIRE를 따로 보내는 코드에서, 둘 사이에 서버가 죽으면 생기는 일은?",
    choices: [
      "카운터가 0으로 돌아간다",
      "수명이 없는 키가 남아 지워지지 않는다",
      "Redis가 자동으로 60초 수명을 건다",
      "다음 INCR이 실패한다",
    ],
    answer: 1,
    explanation:
      "INCR만 실행된 키는 TTL이 -1, 즉 수명이 없다. 창 번호를 키에 넣지 않는 구현이면 그 사용자는 영원히 막히고, 넣더라도 키가 계속 쌓인다. MULTI나 Lua로 묶거나 EXPIRE ... NX를 매번 함께 보낸다.",
    anchor: "incr과-수명-사이의-틈",
  },
  {
    id: "sd-rate-limiter-design-4",
    post: "sd-rate-limiter-design",
    question: "Redis를 멈췄더니 리뷰 작성 요청이 아예 응답하지 않았다. 가장 알맞은 원인과 대응은?",
    choices: [
      "리뷰 API의 DB가 죽었다. DB를 재시작한다",
      "클라이언트 라이브러리가 끊긴 동안 명령을 쌓아 두고 기다린다. 대기열을 끄고 짧은 타임아웃 뒤 규칙에 따라 통과시키거나 막는다",
      "429를 돌려줘야 하는데 503을 돌려줬다. 상태 코드를 바꾼다",
      "Redis 메모리가 가득 찼다. 메모리를 늘린다",
    ],
    answer: 1,
    explanation:
      "ioredis는 기본값으로 연결이 끊긴 동안 명령을 대기열에 쌓아서 제한기가 Redis를 기다린다. enableOfflineQueue를 끄고 commandTimeout을 짧게 둔 뒤, 실패하면 리뷰는 통과시키고 로그인 같은 보안 규칙은 막도록 정한다.",
    anchor: "redis가-멈추면-요청도-멈춘다",
  },
  {
    id: "sd-rate-limiter-design-5",
    post: "sd-rate-limiter-design",
    question: "규칙(무엇으로 셀지, 한도, 창 길이)을 코드가 아니라 설정 저장소에 두고 서버 메모리에 읽어 두는 이유는?",
    choices: [
      "공격이 들어올 때 배포 없이 한도를 바꾸고, 요청마다 규칙을 다시 읽지 않으려고",
      "Redis가 규칙을 저장할 수 없어서",
      "규칙이 많으면 코드가 컴파일되지 않아서",
      "클라이언트가 규칙을 내려받아야 해서",
    ],
    answer: 0,
    explanation:
      "규칙은 운영하면서 계속 바뀌니 설정으로 빼 두고 주기적으로 다시 읽는다. 메모리에 읽어 두면 요청마다 규칙 저장소를 부르지 않고, 규칙 저장소가 잠깐 죽어도 마지막 규칙으로 계속 일한다.",
    anchor: "규칙은-코드-밖에-둔다",
  },
  {
    id: "sd-rate-limiter-design-6",
    post: "sd-rate-limiter-design",
    question: "서울과 버지니아에 서버가 있고 \"가끔 한도를 조금 넘어도 된다, 지연은 1ms 안쪽\"이라는 요구다. 카운터는 어떻게 두나?",
    choices: [
      "버지니아 Redis 한 곳에서만 센다",
      "카운터를 쓰지 않는다",
      "지역마다 따로 센다",
      "요청마다 두 지역 Redis에 모두 동기로 쓴다",
    ],
    answer: 2,
    explanation:
      "한 곳에서만 세면 먼 지역의 요청마다 대륙 왕복 180ms가 붙어 지연 요구를 못 지킨다. 지역마다 따로 세면 빠르고, 사용자가 보통 가까운 한 지역에만 붙으니 한도가 늘어나는 경우도 드물다.",
    anchor: "데이터-센터가-여러-곳이면",
  },
  {
    id: "sd-rate-limiter-design-7",
    post: "sd-rate-limiter-design",
    question: "한도 2, 첫 요청에 열리는 60초 창에서 0초, 59초, 60초, 61초에 요청하면 어떻게 되나?",
    choices: [
      "0초와 59초만 통과한다",
      "0초, 59초, 61초가 통과한다",
      "0초만 통과한다",
      "네 개 모두 통과한다",
    ],
    answer: 3,
    explanation:
      "0초와 59초는 첫 창의 1, 2번째이고, 60초에 첫 창이 닫혀 60초와 61초가 새 창의 1, 2번째가 된다. 3초 사이에 3개가 통과하는 고정 창의 경계 문제라서, 이게 문제가 되면 슬라이딩 윈도나 토큰 버킷을 쓴다.",
    anchor: "직접-짜-보기",
  },
];
