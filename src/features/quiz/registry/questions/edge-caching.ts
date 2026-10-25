import type { QuizQuestion } from "../types";

export const EDGE_CACHING: QuizQuestion[] = [
  {
    id: "edge-caching-1",
    post: "edge-caching",
    question: "상품 페이지는 사람마다 같고 Cache-Control도 public인데 CDN 히트율이 50%대다. 로그에는 같은 상품 URL 뒤에 utm_campaign 값이 수백 가지로 붙어 있다. 무엇을 고쳐야 하나?",
    choices: [
      "s-maxage를 1초로 줄인다",
      "응답을 바꾸는 쿼리만 허용 목록으로 골라 정해진 순서로 캐시 키를 만든다",
      "Vary: User-Agent를 붙인다",
      "오리진 서버를 늘린다",
    ],
    answer: 1,
    explanation:
      "기본 캐시 키에는 쿼리 문자열 전체가 들어가서 추적 파라미터가 다를 때마다 다른 키가 된다. 실험에서 상품 469개가 키 2,313개로 쪼개졌다. 응답을 바꾸는 쿼리만 키에 넣으면 같은 사본으로 모인다.",
    anchor: "캐시-키에-무엇을-넣을까",
  },
  {
    id: "edge-caching-2",
    post: "edge-caching",
    question: "캐시 키를 허용 목록 방식으로 바꾼 뒤, 정렬 기준을 바꿔도 검색 결과 순서가 바뀌지 않는다는 문의가 왔다. 가장 그럴듯한 원인은?",
    choices: [
      "오리진이 sort 파라미터를 무시한다",
      "엣지가 쿼리를 알파벳순으로 정렬해서",
      "응답을 바꾸는 sort 파라미터가 허용 목록에 빠져 서로 다른 응답이 같은 키를 쓰고 있다",
      "stale-while-revalidate가 너무 길어서",
    ],
    answer: 2,
    explanation:
      "허용 목록 방식은 히트율에는 안전하지만 응답을 바꾸는 파라미터를 빠뜨리면 다른 응답이 같은 사본을 공유한다. 정렬 결과가 기본 순서 사본으로 나간다. 새 파라미터를 추가할 때 키 목록도 함께 고친다.",
    anchor: "캐시-키에-무엇을-넣을까",
  },
  {
    id: "edge-caching-3",
    post: "edge-caching",
    question: "엣지 로그의 히트율(HIT+STALE+UPDATING)은 97.7%인데 오리진이 받은 요청은 사용자 요청의 13%였다. 차이의 원인은?",
    choices: [
      "로그 포맷이 잘못되어 일부 요청이 빠졌다",
      "상한 사본을 주면서 뒤에서 보내는 갱신 요청이 오리진으로 가지만 사용자 요청의 미스로는 세지지 않는다",
      "오리진이 재시도를 해서 요청이 두 번씩 들어갔다",
      "바이트 히트율과 요청 히트율이 같기 때문이다",
    ],
    answer: 1,
    explanation:
      "STALE이나 UPDATING으로 끝난 사용자 요청은 히트로 세지만, 그때마다 갱신 요청이 하나씩 오리진에 간다. 그래서 요청 히트율과 오리진 오프로드는 다르다. 오리진 용량은 오리진이 실제로 받은 요청 수로 판단한다.",
    anchor: "히트율은-로그에서-센다",
  },
  {
    id: "edge-caching-4",
    post: "edge-caching",
    question: "오리진이 stale-while-revalidate=30을 보내는데도, nginx 엣지에서 만료 직후 첫 요청이 오리진을 300ms 기다렸다(EXPIRED). 첫 요청도 바로 상한 사본을 받게 하려면?",
    choices: [
      "proxy_cache_background_update on을 켠다",
      "proxy_cache_lock off로 바꾼다",
      "s-maxage를 0으로 바꾼다",
      "Vary 헤더를 제거한다",
    ],
    answer: 0,
    explanation:
      "이 nginx에서 헤더만으로는 갱신을 시작한 요청 자신이 오리진을 기다리고, 그동안 온 다른 요청만 상한 사본을 받았다. background_update를 켜자 만료 뒤 첫 요청도 0.4ms 만에 STALE로 받고 갱신은 뒤에서 일어났다.",
    anchor: "상한-사본을-내주면-오리진이-쉰다",
  },
  {
    id: "edge-caching-5",
    post: "edge-caching",
    question: "오리진 헤더에 stale-if-error=300이 있는데, 오리진이 500을 돌려주자 기본 설정 nginx 엣지가 500을 그대로 내보냈다. 왜인가?",
    choices: [
      "stale-if-error는 브라우저 캐시에만 적용되는 지시어라서",
      "500 응답이 캐시에 저장되어 옛 사본을 덮어써서",
      "이 nginx에서 헤더의 stale-if-error는 연결 실패 같은 오류에만 적용되고, 500 응답은 proxy_cache_use_stale에 http_500을 적어야 오류로 다룬다",
      "사본의 수명이 아직 남아 있어서",
    ],
    answer: 2,
    explanation:
      "오리진 프로세스를 내려 연결이 거부되자 같은 엣지가 STALE을 줬다. 오리진이 정상적으로 돌려준 500은 따로 지정해야 했다. 실제 장애는 500, 502로 나타나는 경우가 많아 상태 코드까지 명시한다.",
    anchor: "상한-사본을-내주면-오리진이-쉰다",
  },
  {
    id: "edge-caching-6",
    post: "edge-caching",
    question: "히트율을 올리려고 엣지 전체에 Set-Cookie를 무시하고 캐시하는 설정을 넣었다. 생길 수 있는 가장 심각한 일은?",
    choices: [
      "쿠키가 사라져 모든 사용자가 로그아웃된다",
      "첫 사용자의 응답과 세션 쿠키가 공유 사본이 되어 다음 사용자가 그 사람으로 로그인된다",
      "엣지의 디스크가 쿠키로 가득 찬다",
      "응답이 압축되지 않는다",
    ],
    answer: 1,
    explanation:
      "실험에서 두 번째 방문자가 첫 방문자의 sid 쿠키와 응답을 그대로 받았다. 이런 설정은 개인 응답이 나갈 수 없는 정적 경로에만 걸고, 개인 응답에는 오리진이 private나 no-store를 붙인다.",
    anchor: "사람마다-다른-응답과-공유-캐시",
  },
  {
    id: "edge-caching-7",
    post: "edge-caching",
    question: "매장마다 카메라 열 대의 영상을 분석해야 한다. 현장(엣지) 서버에서 분석하고 이벤트만 클라우드로 올리는 이유로 가장 알맞은 것은?",
    choices: [
      "영상 원본을 모두 올리면 회선과 전송량이 감당이 안 되고, 회선이 끊겨도 현장 판단은 계속돼야 해서",
      "클라우드에서는 영상 분석 모델을 돌릴 수 없어서",
      "엣지 서버는 운영과 패치가 필요 없어서",
      "CDN 엣지 함수가 영상 분석을 대신해 주기 때문에",
    ],
    answer: 0,
    explanation:
      "열 대가 4Mbps씩이면 하루 432GB라 매장마다 원본을 올리기 어렵고, 현장 판단은 리전 왕복 지연과 회선 장애에 묶이면 안 된다. 대신 흩어진 장비의 패치와 물리 보안이라는 운영 부담을 진다. CDN 엣지 함수는 요청·응답을 다듬는 얇은 층이다.",
    anchor: "엣지에서-코드를-돌린다",
  },
];
