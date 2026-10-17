import type { QuizQuestion } from "../types";

export const REDIS_MEMORY_EVICTION: QuizQuestion[] = [
  {
    id: "redis-memory-eviction-1",
    post: "redis-memory-eviction",
    question: "maxmemory-policy가 기본값 noeviction인 서버가 maxmemory를 넘으면 어떻게 되나?",
    choices: [
      "가장 오래된 키부터 자동으로 지운다",
      "메모리를 늘리는 쓰기는 OOM 에러로 거절하고, 읽기와 DEL은 계속 된다",
      "모든 명령을 거절하고 서버가 읽기 전용 레플리카로 바뀐다",
      "리눅스 OOM 킬러가 redis-server를 종료한다",
    ],
    answer: 1,
    explanation:
      "noeviction은 아무 키도 지우지 않고 메모리를 늘리는 쓰기 명령만 거절한다. 그래서 상품 목록은 보이는데 장바구니 담기만 실패하는 장애가 된다. OOM 킬러는 maxmemory를 아예 정하지 않았을 때 나서는 쪽이다.",
    anchor: "info-memory를-한-줄씩-읽기",
  },
  {
    id: "redis-memory-eviction-2",
    post: "redis-memory-eviction",
    question: "관리자 배치가 상품 10만 개를 한 번씩 읽고 지나가도 인기 상품 캐시가 덜 밀려나게 하려면 어떤 정책이 맞나?",
    choices: [
      "allkeys-lru",
      "volatile-ttl",
      "allkeys-lfu",
      "allkeys-random",
    ],
    answer: 2,
    explanation:
      "LRU는 마지막 사용 시각만 보니 한 번 훑고 지나간 키들이 모두 최근 키가 되어 인기 키를 밀어낸다. LFU는 접근 빈도를 보므로 한 번 읽힌 키는 오래 버티지 못한다.",
    anchor: "가득-찼을-때-지울-키를-고르는-정책",
  },
  {
    id: "redis-memory-eviction-3",
    post: "redis-memory-eviction",
    question: "volatile-lru 정책인데 TTL이 걸린 키가 하나도 없을 때 메모리가 가득 차면?",
    choices: [
      "noeviction처럼 쓰기를 거절한다",
      "자동으로 allkeys-lru로 동작한다",
      "TTL이 없는 키에 임시 TTL을 붙여 지운다",
      "가장 큰 키를 지운다",
    ],
    answer: 0,
    explanation:
      "volatile-* 정책은 TTL이 걸린 키 중에서만 지울 후보를 고른다. 후보가 없으면 지울 게 없으니 noeviction과 같이 OOM 에러를 낸다. 캐시 키에 TTL을 깜빡하면 이렇게 된다.",
    anchor: "가득-찼을-때-지울-키를-고르는-정책",
  },
  {
    id: "redis-memory-eviction-4",
    post: "redis-memory-eviction",
    question: "Redis가 정확한 LRU 대신 표본을 뽑는 근사 LRU를 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "단일 스레드에서는 정렬을 할 수 없어서",
      "키마다 연결 리스트 포인터를 두고 읽을 때마다 고치는 비용에 비해 적중률 차이가 작아서",
      "LRU가 특허로 묶여 있어서",
      "만료 시각과 사용 시각을 구분할 수 없어서",
    ],
    answer: 1,
    explanation:
      "정확한 LRU는 키마다 앞뒤 포인터가 붙고 읽기마다 리스트를 고쳐야 한다. Redis는 키마다 24비트 시각만 두고 maxmemory-samples개를 뽑아 가장 오래 쉰 키를 지우며, 후보 풀로 정확도를 보완한다.",
    anchor: "lru를-정확하게-하지-않는-이유",
  },
  {
    id: "redis-memory-eviction-5",
    post: "redis-memory-eviction",
    question: "LFU에서 새로 넣은 키의 카운터가 0이 아니라 5에서 시작하는 이유는?",
    choices: [
      "8비트 카운터의 최솟값이 5라서",
      "로그 카운터 계산에서 0으로 나누는 것을 피하려고",
      "방금 넣은 키가 다음 축출에서 바로 지워지지 않게 하려고",
      "lfu-decay-time의 기본값과 맞추려고",
    ],
    answer: 2,
    explanation:
      "0에서 시작하면 새 키는 언제나 가장 드물게 쓰인 키라 곧바로 축출 대상이 된다. 5에서 시작해 기회를 주고, 이후 접근이 없으면 lfu-decay-time마다 카운터가 내려간다.",
    anchor: "lfu-카운터는-로그로-오르고-시간이-지나면-내려간다",
  },
  {
    id: "redis-memory-eviction-6",
    post: "redis-memory-eviction",
    question: "TTL이 지난 키가 잠깐 메모리에 남아 있을 수 있는 이유는?",
    choices: [
      "만료된 키는 다음 RDB 저장 때만 지워져서",
      "레플리카가 DEL을 보내 줄 때까지 기다려서",
      "축출 정책이 만료 키를 먼저 지우지 않도록 막아서",
      "접근할 때 지우는 방식과 시간 제한이 있는 주기적 정리만 있어서",
    ],
    answer: 3,
    explanation:
      "만료 키는 누가 접근할 때 지우거나, 1초에 hz번 조금씩 훑어 지운다. 주기적 정리는 CPU 25% 시간 제한이 있어 한꺼번에 많이 만료되면 일부가 늦게 빠진다. DEL을 기다리는 건 레플리카 쪽이다.",
    anchor: "만료된-키가-바로-사라지지-않는-이유",
  },
  {
    id: "redis-memory-eviction-7",
    post: "redis-memory-eviction",
    question: "RDB 저장과 레플리카가 있는 8GB 서버에서 maxmemory를 8gb로 잡으면 안 되는 이유가 아닌 것은?",
    choices: [
      "fork 뒤 copy-on-write로 복사되는 메모리가 maxmemory 밖에서 늘어난다",
      "maxmemory를 넘으면 Redis가 자동으로 RDB 저장을 멈춘다",
      "레플리카 출력 버퍼와 backlog는 축출 계산에서 빠진다",
      "단편화로 rss가 used_memory보다 커진다",
    ],
    answer: 1,
    explanation:
      "maxmemory는 데이터 쪽만 다스린다. fork 복사, 복제 버퍼, 클라이언트 버퍼, 단편화가 그 위에 얹히니 쓰기가 많은 서버는 물리 메모리의 50~60% 정도부터 시작한다. maxmemory를 넘었다고 RDB 저장이 멈추지는 않는다.",
    anchor: "서버-메모리의-몇-퍼센트를-maxmemory로-줄까",
  },
];
