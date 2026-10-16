import type { QuizQuestion } from "../types";

export const HTTP_CACHING_CDN: QuizQuestion[] = [
  {
    id: "http-caching-cdn-1",
    post: "http-caching-cdn",
    question: "Cache-Control: no-cache의 뜻으로 맞는 것은?",
    choices: [
      "어떤 캐시도 응답을 저장하면 안 된다",
      "저장은 하되 쓰기 전에 매번 서버에 재검증한다",
      "브라우저에만 저장하고 CDN은 저장하지 않는다",
      "신선한 시간을 0초로 두고 상한 사본도 그냥 쓴다",
    ],
    answer: 1,
    explanation:
      "no-cache는 이름과 달리 저장을 막지 않는다. 쓸 때마다 확인하라는 뜻이라 바뀌지 않았으면 304로 본문 없이 끝난다. 저장 자체를 막는 건 no-store다.",
    anchor: "cache-control-한-줄-뜯어-보기",
  },
  {
    id: "http-caching-cdn-2",
    post: "http-caching-cdn",
    question: "CDN이 Age: 540과 함께 max-age=600인 응답을 내줬다. 브라우저에서 이 응답은 얼마 동안 신선한가?",
    choices: ["600초", "540초", "1140초", "60초"],
    answer: 3,
    explanation:
      "브라우저는 Age 값을 사본의 나이에 더한다. 이미 540초가 지난 사본이니 600초 중 60초만 남는다.",
    anchor: "신선한-동안은-묻지도-않는다",
  },
  {
    id: "http-caching-cdn-3",
    post: "http-caching-cdn",
    question: "상한 사본을 가진 캐시가 If-None-Match를 보냈고 내용이 그대로일 때 서버의 응답은?",
    choices: [
      "본문 없이 304 Not Modified",
      "같은 본문을 담은 200 OK",
      "본문 없이 204 No Content",
      "새 ETag를 담은 302 리다이렉트",
    ],
    answer: 0,
    explanation:
      "ETag가 현재 버전과 같으면 서버는 본문 없이 304를 돌려주고, 캐시는 사본의 신선도를 갱신해 그대로 쓴다. 본문을 다시 보내지 않아 대역폭을 아낀다.",
    anchor: "상한-사본이-아직-맞는지-묻기",
  },
  {
    id: "http-caching-cdn-4",
    post: "http-caching-cdn",
    question: "응답에 Vary: User-Agent를 붙이면 공유 캐시에서 어떤 일이 생기나?",
    choices: [
      "모바일과 PC에 같은 사본을 나눠 쓴다",
      "User-Agent가 없는 요청만 캐시된다",
      "브라우저 버전마다 사본이 따로 생겨 적중률이 크게 떨어진다",
      "CDN이 User-Agent를 지우고 하나로 합친다",
    ],
    answer: 2,
    explanation:
      "Vary에 적은 요청 헤더는 캐시 키에 들어간다. User-Agent는 값이 매우 다양해서 키가 잘게 쪼개지고 사실상 캐시가 안 된다.",
    anchor: "무엇을-같은-요청으로-보나",
  },
  {
    id: "http-caching-cdn-5",
    post: "http-caching-cdn",
    question: "main.3f9c2b1e.css처럼 내용 해시가 든 파일에 max-age=31536000, immutable을 줘도 되는 이유는?",
    choices: [
      "CDN이 배포 때마다 자동으로 무효화해 주기 때문에",
      "내용이 바뀌면 이름도 바뀌어 새 캐시 키로 받아 가기 때문에",
      "브라우저가 CSS 파일은 1년이 지나도 재검증하기 때문에",
      "immutable이 붙으면 서버가 변경 시 알림을 보내기 때문에",
    ],
    answer: 1,
    explanation:
      "이름이 같으면 내용도 같다는 보장이 생기니 오래 캐시해도 옛 내용과 충돌하지 않는다. 대신 그 이름을 담은 HTML은 no-cache처럼 짧게 캐시해야 새 이름을 받아 간다.",
    anchor: "이름에-해시를-넣으면-영원히-캐시할-수-있다",
  },
  {
    id: "http-caching-cdn-6",
    post: "http-caching-cdn",
    question: "CloudFront에서 /*를 무효화했는데도 일부 사용자가 계속 옛 버전을 보는 가장 그럴듯한 이유는?",
    choices: [
      "와일드카드 무효화는 HTML에 적용되지 않아서",
      "무효화 요청이 매달 1,000개를 넘어 거절되어서",
      "Origin Shield가 무효화를 막아서",
      "브라우저 캐시에 긴 max-age로 저장된 사본은 무효화로 지워지지 않아서",
    ],
    answer: 3,
    explanation:
      "무효화는 CDN 엣지의 사본만 지운다. 브라우저에 이미 들어간 사본은 서버가 지울 방법이 없어서 max-age가 끝날 때까지 옛 버전이 보인다. 1,000개를 넘으면 거절이 아니라 요금이 붙을 뿐이다.",
    anchor: "지우는-데도-시간이-걸린다",
  },
  {
    id: "http-caching-cdn-7",
    post: "http-caching-cdn",
    question: "로그인 직후 Set-Cookie가 붙은 응답이 public, max-age=300으로 나가면 생길 수 있는 사고는?",
    choices: [
      "공유 캐시가 쿠키까지 저장해 다른 사용자가 그 세션을 받는다",
      "브라우저가 쿠키를 무시해 로그인이 풀린다",
      "CDN이 응답을 거절하고 502를 낸다",
      "Set-Cookie가 있으면 어떤 캐시도 저장하지 않으니 문제없다",
    ],
    answer: 0,
    explanation:
      "HTTP 캐시 명세는 Set-Cookie가 있다고 캐시를 막지 않는다. 사용자마다 다른 응답에는 private나 no-store를 명시해 공유 캐시에 들어가지 않게 한다.",
    anchor: "사람마다-다른-페이지를-공유-캐시에-두면",
  },
];
