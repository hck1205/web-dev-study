import type { QuizQuestion } from "../types";

export const SD_CACHE_AND_CDN_TIER: QuizQuestion[] = [
  {
    id: "sd-cache-and-cdn-tier-1",
    post: "sd-cache-and-cdn-tier",
    question: "cache-aside 방식에서 캐시 서버가 갑자기 응답하지 않으면 어떻게 되나?",
    choices: [
      "모든 읽기 요청이 오류로 끝난다",
      "웹 서버가 DB에서 읽으므로 서비스는 돌지만 DB로 가는 읽기가 크게 늘어난다",
      "DB가 자동으로 캐시 역할을 넘겨받아 부하는 그대로다",
      "쓰기 요청만 실패하고 읽기는 영향이 없다",
    ],
    answer: 1,
    explanation:
      "cache-aside는 캐시에 없으면 애플리케이션이 DB에서 읽는 방식이라 캐시가 없어도 답은 나온다. 대신 캐시가 막아 주던 읽기가 모두 DB로 가서, 히트율 90%였다면 DB 읽기가 약 열 배가 된다.",
    anchor: "캐시-서버가-멈추는-날",
  },
  {
    id: "sd-cache-and-cdn-tier-2",
    post: "sd-cache-and-cdn-tier",
    question: "초당 읽기 2,000건, 쓰기 50건이고 캐시 히트율이 90%일 때 DB가 받는 요청은 초당 몇 건인가?",
    choices: ["200건", "205건", "250건", "2,050건"],
    answer: 2,
    explanation:
      "읽기 중 캐시에서 끝나지 못한 10%인 200건에 쓰기 50건이 더해져 250건이다. 쓰기는 히트율과 상관없이 전부 DB로 간다는 점을 빼먹으면 200건으로 잘못 계산한다.",
    anchor: "어떤-데이터를-캐시에-둘까",
  },
  {
    id: "sd-cache-and-cdn-tier-3",
    post: "sd-cache-and-cdn-tier",
    question: "식당 영업시간을 DB에서 고쳤는데 앱에는 한동안 옛 시간이 보였다. 가장 기본적인 대처는?",
    choices: [
      "TTL을 없애 캐시가 영원히 유지되게 한다",
      "캐시 서버를 한 대 더 늘린다",
      "DB를 고칠 때 해당 캐시 키를 지우고, TTL은 안전망으로 둔다",
      "영업시간을 CDN에 올린다",
    ],
    answer: 2,
    explanation:
      "캐시는 DB의 사본이라 원본이 바뀌어도 TTL이 끝날 때까지 옛 값을 준다. 고칠 때 키를 지우면 다음 읽기가 새 값을 채우고, 삭제가 실패해도 TTL이 어긋남의 상한이 된다. TTL을 없애면 삭제가 한 번만 빠져도 옛 값이 영원히 남는다.",
    anchor: "캐시는-언제까지-믿을까-ttl",
  },
  {
    id: "sd-cache-and-cdn-tier-4",
    post: "sd-cache-and-cdn-tier",
    question: "maxmemory에 도달한 Redis가 새 SET에 OOM 오류를 돌려준다. 캐시 용도라면 무엇을 확인해야 하나?",
    choices: [
      "maxmemory-policy가 noeviction으로 남아 있는지",
      "TTL이 너무 짧은지",
      "복제본이 몇 대인지",
      "클라이언트 타임아웃이 너무 긴지",
    ],
    answer: 0,
    explanation:
      "noeviction은 아무것도 버리지 않고 새 쓰기를 거절하는 정책이다. 캐시 전용 Redis라면 allkeys-lru 같은 축출 정책으로 바꿔 오래 안 읽힌 키부터 버리게 해야 한다.",
    anchor: "메모리가-차면-무엇을-버리나",
  },
  {
    id: "sd-cache-and-cdn-tier-5",
    post: "sd-cache-and-cdn-tier",
    question: "칸이 셋인 LRU 캐시에 A, B, C를 넣고 A를 한 번 읽은 뒤 D를 넣으면 무엇이 빠지나?",
    choices: ["A", "B", "C", "D"],
    answer: 1,
    explanation:
      "A를 읽는 순간 A는 가장 최근에 쓰인 쪽으로 옮겨진다. 그러면 가장 오래 안 쓰인 것은 B라서 D가 들어올 때 B가 나간다. 먼저 넣은 A가 빠진다고 생각하면 LRU가 아니라 FIFO로 계산한 것이다.",
    anchor: "메모리가-차면-무엇을-버리나",
  },
  {
    id: "sd-cache-and-cdn-tier-6",
    post: "sd-cache-and-cdn-tier",
    question: "엣지를 거친 요청 중 내 정보 API는 매번 오리진까지 갔다. 이유로 맞는 것은?",
    choices: [
      "엣지의 저장 공간이 가득 찼기 때문이다",
      "JSON 응답은 CDN이 원래 저장하지 못하기 때문이다",
      "오리진이 Cache-Control: private, no-store를 보내 공유 캐시가 저장하지 않았기 때문이다",
      "첫 요청이라 미스가 났기 때문이다",
    ],
    answer: 2,
    explanation:
      "엣지는 오리진의 Cache-Control을 보고 저장 여부를 정한다. 사람마다 다른 응답을 공유 캐시에 저장하면 남의 정보가 보이므로 private로 표시해 매번 오리진에서 받게 한 것이다.",
    anchor: "사진과-js-파일은-사용자-가까이에-cdn",
  },
  {
    id: "sd-cache-and-cdn-tier-7",
    post: "sd-cache-and-cdn-tier",
    question: "정적 JS 파일을 max-age 1년, immutable로 캐시해도 배포 후 새 코드가 바로 반영되게 하는 방법은?",
    choices: [
      "배포할 때마다 모든 엣지를 퍼지한다",
      "파일 이름에 내용 해시를 넣어 내용이 바뀌면 주소가 바뀌게 한다",
      "max-age를 0으로 바꾼다",
      "CDN을 끄고 오리진에서 직접 내보낸다",
    ],
    answer: 1,
    explanation:
      "app.3f9a1c.js처럼 이름에 해시가 있으면 내용이 바뀔 때 이름도 바뀌고, HTML이 새 이름을 가리키므로 사용자는 새 파일을 받는다. 퍼지는 고정 이름 파일에 쓰는 방법이고 모든 엣지에 퍼지는 데 시간이 걸린다.",
    anchor: "cdn에-맡기기-전에-정할-것",
  },
];
