import type { QuizQuestion } from "../types";

export const CACHING_CONCEPTS_MAP: QuizQuestion[] = [
  {
    id: "caching-concepts-map-1",
    post: "caching-concepts-map",
    question: "히트 1ms, 미스 50ms일 때 히트율을 95%에서 99%로 올리면 평균 응답 시간은?",
    choices: [
      "3.45ms에서 1.49ms로, 절반 이하가 된다",
      "4% 정도만 줄어든다",
      "변하지 않는다. 히트 시간이 그대로라서",
      "10.8ms에서 3.45ms로 준다",
    ],
    answer: 0,
    explanation:
      "평균은 히트율 × 히트 시간 + 미스율 × 미스 시간이라 미스 쪽에 크게 끌려간다. 0.95 × 1 + 0.05 × 50 = 3.45ms, 0.99 × 1 + 0.01 × 50 = 1.49ms다. 10.8ms는 히트율 80%일 때 값이다.",
    anchor: "1-히트와-2-미스",
  },
  {
    id: "caching-concepts-map-2",
    post: "caching-concepts-map",
    question:
      "통계를 지운 뒤 `GET`(미스), `SET`, `GET`(히트), `TTL`을 실행했더니 keyspace_hits가 2였다. 이유는?",
    choices: [
      "SET도 히트로 센다",
      "redis-cli가 GET을 두 번 보낸다",
      "TTL도 키를 찾아본 명령이라 히트로 센다",
      "통계 초기화가 늦게 반영됐다",
    ],
    answer: 2,
    explanation:
      "Redis는 키를 찾아보는 명령마다 히트나 미스를 센다. 그래서 서버 통계는 캐시 조회만의 히트율이 아니고, 정확한 값이 필요하면 앱에서 따로 센다.",
    anchor: "1-히트와-2-미스",
  },
  {
    id: "caching-concepts-map-3",
    post: "caching-concepts-map",
    question: "TTL을 길게 잡을 때 얻는 것과 잃는 것으로 맞는 것은?",
    choices: [
      "메모리를 아끼고, 히트율을 잃는다",
      "히트율이 오르고, 상한 데이터를 더 오래 보여 줄 수 있다",
      "상한 데이터가 줄고, 쓰기가 느려진다",
      "스탬피드가 사라지고, 축출이 늘어난다",
    ],
    answer: 1,
    explanation:
      "TTL은 사본의 유통기한이다. 길수록 같은 사본을 오래 쓰니 히트율이 오르지만, 원본이 바뀐 뒤에도 옛 값을 오래 내줄 수 있다. 그래서 TTL은 데이터가 얼마나 낡아도 되는지로 정한다.",
    anchor: "3-ttl과-4-상한-데이터",
  },
  {
    id: "caching-concepts-map-4",
    post: "caching-concepts-map",
    question:
      "용량 2인 LRU 캐시에 a, b, c, a, b, c 순서로 요청하면 히트는 몇 번인가?",
    choices: ["3번", "2번", "1번", "0번"],
    answer: 3,
    explanation:
      "c가 들어올 때 a를 버리고, a가 다시 오면 b를 버리는 식으로 매번 다음에 쓸 키를 막 버린 참이 된다. 용량 3이면 같은 순서에서 히트율 67%가 나오는데, 하나 모자라서 0%가 된다.",
    anchor: "히트율과-평균-응답-시간을-직접-계산하기",
  },
  {
    id: "caching-concepts-map-5",
    post: "caching-concepts-map",
    question: "Redis의 히트율이 서서히 떨어지고 INFO stats의 evicted_keys가 계속 오른다. 가장 먼저 의심할 것은?",
    choices: [
      "메모리가 모자라 아직 쓸 키까지 축출되고 있다",
      "TTL이 너무 길다",
      "핫 키가 생겼다",
      "CDN 캐시 키에 쿼리 문자열이 섞였다",
    ],
    answer: 0,
    explanation:
      "evicted_keys는 maxmemory를 넘어서 정책대로 버린 키의 수다. 이게 늘면서 히트율이 떨어지면 메모리를 늘리거나 값을 줄여야 한다. TTL이 길면 오히려 히트율은 오른다.",
    anchor: "5-꽉-차면-lru로-버린다",
  },
  {
    id: "caching-concepts-map-6",
    post: "caching-concepts-map",
    question: "인기 상품 키의 TTL이 끝나는 순간 같은 쿼리 수백 개가 DB로 몰렸다. 이 현상과 대표적인 방어는?",
    choices: [
      "핫 키, 키를 여러 개로 복제",
      "캐시 스탬피드, 한 요청만 락을 잡고 원본을 읽게 하기",
      "상한 데이터, TTL을 더 길게",
      "축출, maxmemory 늘리기",
    ],
    answer: 1,
    explanation:
      "만료 순간 동시에 미스를 본 요청들이 모두 원본으로 가는 게 스탬피드다. `SET NX`로 락을 잡은 하나만 DB에 가고 나머지는 기다리거나 옛 값을 받는다. 핫 키는 만료와 상관없이 평소에 한 키로 몰리는 문제라 대책이 다르다.",
    anchor: "11-만료-순간의-스탬피드와-12-핫-키",
  },
];
