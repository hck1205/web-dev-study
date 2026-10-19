import type { QuizQuestion } from "../types";

export const CACHING_STRATEGIES: QuizQuestion[] = [
  {
    id: "caching-strategies-1",
    post: "caching-strategies",
    question: "cache-aside에서 Redis 호출에 짧은 타임아웃을 거는 이유는?",
    choices: [
      "Redis가 느려지거나 죽었을 때 캐시를 건너뛰고 DB로 서비스하기 위해",
      "캐시 히트율을 높이기 위해",
      "TTL이 정확히 지켜지게 하기 위해",
      "Redis가 DB를 대신 읽어 오게 하기 위해",
    ],
    answer: 0,
    explanation:
      "cache-aside는 캐시가 없어도 DB로 읽을 수 있다는 장점이 있지만, Redis 응답을 무한히 기다리면 캐시가 장애의 원인이 된다. 짧은 타임아웃 후 캐시를 건너뛰어야 그 장점이 산다. DB를 대신 읽어 오는 것은 read-through의 캐시 층이 하는 일이다.",
    anchor: "캐시를-먼저-보고-없으면-db에서-cache-aside",
  },
  {
    id: "caching-strategies-2",
    post: "caching-strategies",
    question: "상품 조회수를 Redis INCR로 세고 1분마다 DB에 모아 쓰는 방식은?",
    choices: ["write-through", "write-around", "write-behind", "read-through"],
    answer: 2,
    explanation:
      "캐시에만 쓰고 DB에는 나중에 모아서 쓰는 write-behind다. 쓰기 폭주를 흡수하지만 DB에 옮기기 전에 캐시가 죽으면 그 사이 값을 잃는다. 그래서 조회수처럼 잃어도 되는 값에 쓴다.",
    anchor: "쓰기는-어디로-먼저-보내나",
  },
  {
    id: "caching-strategies-3",
    post: "caching-strategies",
    question: "데이터를 고칠 때 캐시에 새 값을 쓰지 않고 키를 지우는 주된 이유는?",
    choices: [
      "삭제가 SET보다 메모리를 적게 쓰기 때문에",
      "동시 수정 시 캐시 쓰기 순서가 꼬여도 삭제는 결과가 같기 때문에",
      "삭제하면 TTL이 자동으로 늘어나기 때문에",
      "삭제하면 다음 읽기가 미스 없이 히트하기 때문에",
    ],
    answer: 1,
    explanation:
      "두 요청이 거의 동시에 고치면 캐시 SET이 DB 커밋과 다른 순서로 도착해 틀린 값이 남을 수 있다. 삭제는 몇 번을 어떤 순서로 해도 결과가 같고, 다음 읽기가 DB의 최신 값으로 채운다. 대가는 쓰기 직후의 미스 한 번이다.",
    anchor: "고칠-때-캐시를-지울까-같이-고칠까",
  },
  {
    id: "caching-strategies-4",
    post: "caching-strategies",
    question: "DB를 커밋한 뒤 캐시를 지웠는데도 옛 값이 캐시에 남을 수 있는 경우는?",
    choices: [
      "삭제 명령이 TTL을 늘려서",
      "Redis가 DEL을 비동기로 처리해서 항상 늦게 지워지므로",
      "쓰기 요청이 캐시를 두 번 지워서",
      "미스를 본 읽기가 커밋 전 값을 들고 있다가 삭제 뒤에 캐시에 넣어서",
    ],
    answer: 3,
    explanation:
      "읽기 요청이 커밋 전에 옛 값을 읽고, 쓰기 요청의 삭제가 끝난 뒤에 그 값을 SET하면 삭제보다 늦게 온 옛 값이 TTL까지 남는다. 레플리카에서 읽으면 복제 지연만큼 이 창이 넓어진다. 짧은 TTL, 지연 이중 삭제, CDC 기반 삭제로 줄인다.",
    anchor: "지웠는데-옛-값이-다시-들어가는-경우",
  },
  {
    id: "caching-strategies-5",
    post: "caching-strategies",
    question: "채우기 락(SET NX PX)으로 스탬피드를 막을 때 락 만료 시간을 채우는 시간보다 짧게 잡으면?",
    choices: [
      "채우는 도중 락이 풀려 다른 요청도 DB에 간다",
      "락을 잡은 요청이 캐시에 값을 쓸 수 없다",
      "기다리던 요청이 영원히 기다린다",
      "캐시 키의 TTL도 같이 짧아진다",
    ],
    answer: 0,
    explanation:
      "락이 먼저 만료되면 아직 채우는 중인데도 다른 요청이 NX에 성공해 같은 쿼리를 DB에 또 보낸다. 반대로 너무 길면 락을 잡은 요청이 죽었을 때 그동안 아무도 못 채운다. 그래서 채우는 시간보다 넉넉하되 지나치지 않게 잡는다.",
    anchor: "만료-순간-같은-키로-몰리는-요청",
  },
  {
    id: "caching-strategies-6",
    post: "caching-strategies",
    question: "공격자가 존재하지 않는 상품 번호를 매번 다르게 바꿔 요청할 때 가장 알맞은 대책은?",
    choices: [
      "TTL에 지터를 섞는다",
      "키를 여러 개로 복제해 무작위로 읽는다",
      "존재하는 번호를 블룸 필터에 넣고 없다고 하면 바로 거절한다",
      "로컬 캐시 TTL을 길게 늘린다",
    ],
    answer: 2,
    explanation:
      "없음을 캐시하는 방법은 번호가 매번 바뀌면 표시값이 계속 쌓인다. 블룸 필터는 없다는 답이 항상 맞으므로 없는 번호를 캐시와 DB 앞에서 걸러 낸다. 지터는 눈사태, 키 복제는 핫 키 대책이다.",
    anchor: "없는-데이터를-계속-물어볼-때",
  },
  {
    id: "caching-strategies-7",
    post: "caching-strategies",
    question: "초당 1만 요청에서 히트율이 95%에서 99%로 오르면 DB로 가는 요청은?",
    choices: [
      "4%쯤 줄어든다",
      "초당 500개에서 100개로 다섯 배 줄어든다",
      "변하지 않는다. 히트율은 응답 시간에만 영향을 준다",
      "초당 9,500개에서 9,900개로 늘어난다",
    ],
    answer: 1,
    explanation:
      "DB로 가는 것은 미스 비율이라 5%에서 1%가 되면 500개에서 100개가 된다. 히트율 몇 %p 차이가 DB 부하로는 몇 배 차이가 된다. 히트율 95%면 p99 응답 시간도 미스 경로가 정한다.",
    anchor: "캐시가-일하는지-숫자로-본다",
  },
  {
    id: "caching-strategies-8",
    post: "caching-strategies",
    question: "가격을 고쳤는데 옛 가격이 계속 보인다. 캐시 키의 TTL을 확인했더니 -1이 나왔다. 가장 그럴듯한 원인은?",
    choices: [
      "키가 이미 만료되어 사라졌다",
      "쓰기 경로의 DEL이 몇 초 늦었다",
      "누군가 EX 없이 SET을 써서 남아 있던 TTL이 지워져 만료 없는 키가 됐다",
      "Redis가 메모리가 부족해 키를 축출했다",
    ],
    answer: 2,
    explanation:
      "TTL -1은 만료가 없는 키라는 뜻이다. SET은 값을 바꾸면서 기존 TTL도 지우기 때문에 EX를 빠뜨리면 키가 영구가 된다. 키가 없으면 -2가 나오고, 수명을 유지하려면 KEEPTTL을 쓴다.",
    anchor: "고친-값이-안-바뀐다는-문의가-오면",
  },
];
