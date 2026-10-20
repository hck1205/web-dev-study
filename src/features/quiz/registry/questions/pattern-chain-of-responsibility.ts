import type { QuizQuestion } from "../types";

export const PATTERN_CHAIN_OF_RESPONSIBILITY: QuizQuestion[] = [
  {
    id: "pattern-chain-of-responsibility-1",
    post: "pattern-chain-of-responsibility",
    question: "에러를 사용자 문구로 바꾸는 if/else에 팀마다 분기를 추가하려 한다. 각 경우를 '내 것이면 처리, 아니면 다음으로' 넘기는 처리기들로 나누는 패턴은?",
    choices: ["옵서버", "전략", "책임 연쇄", "퍼사드"],
    answer: 2,
    explanation:
      "책임 연쇄는 처리기들을 줄로 세우고 각자 처리할 수 있으면 처리하고 아니면 다음으로 넘긴다. 보내는 쪽은 누가 처리했는지 모른다. 전략은 하나를 골라 갈아 끼우는 것이라 '누가 처리할지 차례로 묻는' 구조가 아니다.",
    anchor: "내-일이-아니면-다음-처리기로-넘긴다",
  },
  {
    id: "pattern-chain-of-responsibility-2",
    post: "pattern-chain-of-responsibility",
    question: "`status >= 500` 처리기 뒤에 503 전용 처리기를 추가했는데 503 문구가 한 번도 나오지 않는다. 원인은?",
    choices: [
      "503 처리기가 undefined를 돌려줘서",
      "앞에 있는 넓은 처리기가 503을 먼저 처리해 사슬이 거기서 끝나서",
      "배열에 push한 처리기는 비동기로 실행되어서",
      "Fallback 처리기가 먼저 실행되어서",
    ],
    answer: 1,
    explanation:
      "책임 연쇄는 처음 처리한 곳에서 멈추니 순서가 곧 규칙이다. 구체적인 처리기를 앞에, 넓게 받는 처리기를 뒤에 둬야 한다. 처리기 하나만 떼어 테스트하면 통과하니 줄 전체를 검증하는 테스트가 필요하다.",
    anchor: "줄의-순서가-곧-규칙이다",
  },
  {
    id: "pattern-chain-of-responsibility-3",
    post: "pattern-chain-of-responsibility",
    question: "Koa에서 캐시 미들웨어가 next()를 부르지 않고 ctx.body를 정했다. 맨 앞 타이머 미들웨어의 `await next()` 뒤 코드는?",
    choices: [
      "실행되지 않는다. 사슬이 끊겼기 때문이다",
      "에러가 나서 500이 된다",
      "다음 요청 때 실행된다",
      "실행된다. 끊긴 지점에서 앞쪽 처리기들로 다시 돌아 나오기 때문이다",
    ],
    answer: 3,
    explanation:
      "Koa의 await next()는 뒤쪽 사슬이 끝날 때까지 기다린다는 뜻이다. 캐시가 끊으면 뒤쪽이 없을 뿐 앞쪽은 들어간 반대 순서로 뒤 코드를 실행한다. 그래서 타이머를 맨 앞에 두면 캐시 적중까지 잰다.",
    anchor: "모두-거쳐-가는-사슬-미들웨어",
  },
  {
    id: "pattern-chain-of-responsibility-4",
    post: "pattern-chain-of-responsibility",
    question: "로드 밸런서에서 504가 나는데 앱 로그에는 첫 미들웨어 로그 한 줄뿐이고 에러가 없다. 먼저 의심할 것은?",
    choices: [
      "응답도 next()도 부르지 않고 return하는 미들웨어 분기",
      "에러 처리 미들웨어의 인자 개수",
      "데이터베이스 인덱스",
      "CORS 설정",
    ],
    answer: 0,
    explanation:
      "Express에서 미들웨어가 응답하지 않고 next()도 부르지 않으면 요청이 에러 없이 멈춘다. 클라이언트나 로드 밸런서가 기다리다 타임아웃을 낸다. 일찍 return하는 분기부터 살핀다.",
    anchor: "next를-잊거나-두-번-부르면",
  },
  {
    id: "pattern-chain-of-responsibility-5",
    post: "pattern-chain-of-responsibility",
    question: "axios에서 인증 인터셉터를 먼저, 서명 인터셉터를 나중에 request.use로 등록했다. 실제 실행 순서는?",
    choices: [
      "인증 → 서명 (등록 순서)",
      "서명 → 인증 (나중에 등록한 것부터)",
      "둘이 동시에 실행된다",
      "매번 무작위다",
    ],
    answer: 1,
    explanation:
      "axios는 요청 인터셉터를 사슬 앞에 끼워 넣어서 나중에 등록한 것이 먼저 돈다. 응답 인터셉터는 등록 순서대로다. 서명이 먼저 돌면 인증 헤더가 없는 요청에 서명하게 된다.",
    anchor: "등록-순서와-실행-순서가-다른-곳",
  },
  {
    id: "pattern-chain-of-responsibility-6",
    post: "pattern-chain-of-responsibility",
    question: "책임 연쇄와 데코레이터를 가르는 가장 중요한 질문은?",
    choices: [
      "인터페이스가 같은가",
      "다음 객체를 필드로 들고 있는가",
      "처리기가 요청을 처리하고 사슬을 끝낼 수 있는가",
      "클래스로 구현했는가",
    ],
    answer: 2,
    explanation:
      "둘 다 같은 모양으로 다음 객체를 부르니 구조만으로는 구분하기 어렵다. 데코레이터는 원칙적으로 항상 안쪽을 부르고 기능을 더한다. 책임 연쇄는 처리할 하나를 찾아 거기서 끝내는 것이 목적이다.",
    anchor: "데코레이터-커맨드와-헷갈릴-때",
  },
];
