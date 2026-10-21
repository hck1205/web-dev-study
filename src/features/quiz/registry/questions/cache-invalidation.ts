import type { QuizQuestion } from "../types";

export const CACHE_INVALIDATION: QuizQuestion[] = [
  {
    id: "cache-invalidation-1",
    post: "cache-invalidation",
    question: "상품 42번 가격을 바꾸고 CDN에서 /product/42를 퍼지했다. 상품 상세는 새 가격인데 카테고리 목록은 옛 가격이다. 가장 알맞은 해결은?",
    choices: [
      "퍼지를 한 번 더 보낸다",
      "응답에 들어간 데이터를 태그(Surrogate-Key)로 붙이고 product-42 태그로 지운다",
      "브라우저 캐시를 지우라고 안내한다",
      "상품 상세의 s-maxage를 늘린다",
    ],
    answer: 1,
    explanation:
      "퍼지는 정확히 그 주소 하나만 지워서, 같은 상품이 든 목록이나 메인 페이지는 남는다. 응답에 데이터 태그를 붙여 두면 쓰는 쪽은 바뀐 데이터만 알리면 되고, 실험에서도 42번이 든 페이지만 정확히 다시 받았다.",
    anchor: "데이터에-붙인-태그로-지우기",
  },
  {
    id: "cache-invalidation-2",
    post: "cache-invalidation",
    question: "Varnish에서 req.url 조건으로 건 ban이 시간이 지나도 ban 목록에서 사라지지 않는다. 왜 그런가?",
    choices: [
      "ban lurker는 사본에 저장된 obj.* 값만 볼 수 있어 req.* 조건은 사본이 요청될 때만 대조되기 때문이다",
      "req.url ban은 Varnish 재시작 전까지 적용되지 않기 때문이다",
      "ban 목록은 원래 지워지지 않는다",
      "ban_lurker_age가 0이라서",
    ],
    answer: 0,
    explanation:
      "lurker는 요청 없이 사본만 훑으므로 요청 정보가 필요한 조건을 평가할 수 없다. 실험에서 obj.http 조건의 ban은 60초 뒤 완료됐고 req.url ban은 남았다. 그래서 URL을 사본 헤더에 적어 두고 obj.* 형태로 ban을 쓴다.",
    anchor: "조건으로-지우는-ban",
  },
  {
    id: "cache-invalidation-3",
    post: "cache-invalidation",
    question: "카테고리 목록 캐시가 페이지마다 따로 있다. 키를 SCAN으로 찾아 지우는 대신 세대 번호를 키에 넣고 INCR하는 방식의 장점은?",
    choices: [
      "옛 사본이 즉시 메모리에서 사라진다",
      "읽을 때 왕복이 줄어든다",
      "페이지가 몇 장이든 한 번의 원자적 명령으로 모두 무효가 된다",
      "TTL이 필요 없어진다",
    ],
    answer: 2,
    explanation:
      "읽는 쪽이 세대 번호로 키를 만들기 때문에 번호만 올리면 옛 키는 아무도 읽지 않는다. 대신 읽을 때 세대 번호를 한 번 더 읽어야 하고 옛 사본은 TTL까지 메모리에 남는다.",
    anchor: "지울-필요를-없애는-버전",
  },
  {
    id: "cache-invalidation-4",
    post: "cache-invalidation",
    question: "앱 서버 세 대가 Redis pub/sub으로 로컬 캐시 무효화를 받는다. PUBLISH가 2를 돌려줬고, 한 대는 계속 옛 값을 준다. 무엇을 고쳐야 하나?",
    choices: [
      "PUBLISH를 세 번 보낸다",
      "로컬 캐시 TTL을 없앤다",
      "구독 연결이 다시 붙을 때 로컬 캐시를 통째로 비우고, TTL은 안전망으로 남긴다",
      "Redis를 클러스터로 바꾼다",
    ],
    answer: 2,
    explanation:
      "PUBLISH는 그 순간 연결된 구독자에게만 전달되고 쌓이지 않아, 끊겼던 서버는 메시지를 영영 받지 못한다. 메시지를 놓쳤을 수 있는 재연결 순간에 가진 것을 버리면 이 창이 사라진다. TTL을 없애면 알림이 빠졌을 때 옛 값이 영원히 남는다.",
    anchor: "ttl에-맡길까-변경을-알릴까",
  },
  {
    id: "cache-invalidation-5",
    post: "cache-invalidation",
    question: "쓰기가 DB를 고치고 캐시를 지웠는데, 그보다 먼저 DB를 읽은 요청이 옛 값을 늦게 캐시에 넣었다. 리스(lease)는 이를 어떻게 막나?",
    choices: [
      "미스 때 채울 권리 토큰을 받고, 쓰기가 캐시와 함께 토큰도 지워서 늦게 온 채우기를 거절한다",
      "캐시를 지우기 전에 DB를 잠근다",
      "읽기 요청을 모두 프라이머리로 보낸다",
      "캐시 키에 타임스탬프를 넣어 매번 새 키를 만든다",
    ],
    answer: 0,
    explanation:
      "채우기는 토큰이 그대로일 때만 값을 넣는다. 삭제보다 먼저 시작된 채우기는 토큰을 잃어 실험에서도 rejected가 됐다. 그냥 DEL한 키에는 비교할 버전이 없어서 버전 비교만으로는 이 경쟁을 막지 못한다.",
    anchor: "지운-직후-옛-값이-다시-들어온다",
  },
  {
    id: "cache-invalidation-6",
    post: "cache-invalidation",
    question: "가격을 고치자마자 CDN 퍼지를 보냈는데, 오리진은 새 값인데도 엣지가 몇 분째 옛 가격을 HIT로 준다. 오리진은 읽기 복제본에서 값을 읽는다. 가장 그럴듯한 원인은?",
    choices: [
      "퍼지 API가 실패했다",
      "퍼지 직후 들어온 요청이 아직 반영되지 않은 복제본에서 옛 값을 받아 엣지에 다시 저장했다",
      "브라우저가 옛 값을 캐시했다",
      "엣지의 디스크가 가득 찼다",
    ],
    answer: 1,
    explanation:
      "퍼지가 복제보다 빨라서 다음 미스가 옛 값을 다시 채웠다. 그 사본은 s-maxage가 끝날 때까지 남는다. 퍼지는 오리진이 새 값을 줄 수 있게 된 뒤에 보내거나, 복제 이벤트로 퍼지하거나, 지연된 두 번째 퍼지를 둔다.",
    anchor: "cdn-퍼지가-복제본보다-빠를-때",
  },
];
