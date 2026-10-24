import type { QuizQuestion } from "../types";

export const SEARCH_SPAM_POLICIES_CLOAKING: QuizQuestion[] = [
  {
    id: "search-spam-policies-cloaking-1",
    post: "search-spam-policies-cloaking",
    question: "UA를 보고 구글봇에게만 프리렌더 HTML을 주는 동적 렌더링은 클로킹인가?",
    choices: [
      "봇과 사람에게 다른 응답을 주니 항상 클로킹이다",
      "구글이 공식으로 권장하는 방식이라 어떤 내용이든 괜찮다",
      "사람이 보는 것과 내용이 같으면 클로킹이 아니지만, 구글은 임시 해결책으로 보고 권하지 않는다",
      "robots.txt에 프리렌더 서버를 적어 두면 클로킹이 아니다",
    ],
    answer: 2,
    explanation:
      "클로킹의 기준은 기술이 아니라 검색 엔진과 사람이 다른 내용을 보느냐와 그 의도다. 구글 문서는 비슷한 내용을 주는 동적 렌더링을 클로킹으로 보지 않지만 장기 해법으로는 SSR·SSG를 권한다.",
    anchor: "봇에게만-다른-html을-주면-클로킹일까",
  },
  {
    id: "search-spam-policies-cloaking-2",
    post: "search-spam-policies-cloaking",
    question: "동적 렌더링을 CDN 뒤에 붙였는데 Vary: User-Agent를 빠뜨렸다. 어떤 문제가 생길 수 있나?",
    choices: [
      "CDN이 봇용 HTML을 사람에게, 사람용 빈 HTML을 봇에게 캐시로 줘서 사람과 봇이 보는 내용이 엉킨다",
      "구글봇이 Vary 헤더가 없는 페이지를 색인하지 않는다",
      "브라우저가 페이지를 캐시하지 못해 느려질 뿐 SEO와는 상관없다",
      "프리렌더 서버가 무한 루프에 빠진다",
    ],
    answer: 0,
    explanation:
      "Vary가 없으면 캐시는 같은 주소의 응답을 UA와 상관없이 재사용한다. 그러면 봇이 빈 HTML을 받거나 사람이 프리렌더 결과를 받는 식으로 응답이 섞인다. UA를 봇/사람 두 값으로 정규화해 캐시 키에 넣는 방법도 있다.",
    anchor: "동적-렌더링을-붙인다면-지킬-것",
  },
  {
    id: "search-spam-policies-cloaking-3",
    post: "search-spam-policies-cloaking",
    question: "구글봇 UA로 curl을 보내 봤더니 정상 페이지가 왔다. 그래도 검색 결과에는 스팸 제목이 뜬다. 다음으로 할 일은?",
    choices: [
      "curl 결과가 정상이니 구글 쪽 오류로 보고 기다린다",
      "UA를 Bingbot으로 바꿔 다시 보낸다",
      "robots.txt로 그 주소를 막아 검색 결과에서 지운다",
      "Search Console URL 검사의 실제 URL 테스트로 구글 IP에서 가져간 HTML을 확인한다",
    ],
    answer: 3,
    explanation:
      "정교한 해킹 코드는 UA뿐 아니라 IP가 구글 대역인지까지 확인해서 내 컴퓨터에서 UA만 바꾼 요청에는 정상 페이지를 준다. 구글이 실제로 가져간 HTML은 URL 검사로 봐야 한다. robots.txt로 막으면 오히려 고친 결과를 구글이 다시 읽지 못한다.",
    anchor: "해킹된-사이트는-봇에게만-스팸을-보여-준다",
  },
  {
    id: "search-spam-policies-cloaking-4",
    post: "search-spam-policies-cloaking",
    question: "IP로 국가를 판단해 미국 사용자에게 미국 페이지를 주는 사이트에서, 미국 IP로 오는 구글봇이 미국 페이지를 받는다. 이것은?",
    choices: [
      "클로킹이다. 구글봇에게는 늘 한국 페이지를 줘야 한다",
      "클로킹이 아니다. 같은 조건의 미국 사용자와 같은 대우를 받기 때문이다",
      "클로킹이다. IP 분기는 무조건 금지다",
      "도어웨이 정책 위반이다",
    ],
    answer: 1,
    explanation:
      "판단 기준은 구글봇과 같은 조건의 사람이 같은 내용을 보느냐다. 미국 사람과 똑같이 대우하면 문제없고, 오히려 봇만 따로 한국 페이지로 보내는 규칙이 봇과 사람을 다르게 대한다. 언어별 페이지는 주소를 나누고 hreflang으로 잇는 게 정석이다.",
    anchor: "사람과-봇이-같은-것을-보는가",
  },
  {
    id: "search-spam-policies-cloaking-5",
    post: "search-spam-policies-cloaking",
    question: "지역 × 서비스 조합으로 페이지 수천 개를 만들었는데 지역 이름만 바뀌고 문단은 같다. 어떤 정책에 걸릴 수 있나?",
    choices: [
      "만료 도메인 악용",
      "사이트 평판 악용",
      "대량 생성 콘텐츠 악용, 그리고 한 곳으로 몰아 보내는 구조라면 도어웨이",
      "AI로 만들지 않았다면 어떤 정책에도 걸리지 않는다",
    ],
    answer: 2,
    explanation:
      "대량 생성 콘텐츠 악용은 만드는 방법과 상관없이 순위를 얻으려고 가치 없는 페이지를 대량으로 만드는 것을 겨냥한다. 사람이 만들었어도 해당될 수 있다. 지역마다 실제로 다른 정보가 있으면 유용한 페이지가 된다.",
    anchor: "대량-생성-만료-도메인-평판-악용",
  },
  {
    id: "search-spam-policies-cloaking-6",
    post: "search-spam-policies-cloaking",
    question: "유입이 반으로 줄었는데 Search Console의 직접 조치 보고서가 비어 있다. 바르게 판단한 것은?",
    choices: [
      "수동 조치는 아니니, 업데이트 날짜와 맞춰 보고 사이트를 개선한 뒤 시스템의 재평가를 기다린다",
      "재검토 요청을 보내면 사람이 다시 봐 준다",
      "보고서가 늦게 뜨는 것이니 재검토 요청부터 보낸다",
      "링크 거부 파일을 올리면 바로 회복된다",
    ],
    answer: 0,
    explanation:
      "수동 조치는 보고서에 종류와 범위가 나오고 재검토 요청이라는 길이 있다. 보고서가 비어 있으면 알고리즘 하락이라 요청할 곳이 없고, 고친 뒤 몇 달에 걸친 재평가나 다음 핵심 업데이트를 기다린다.",
    anchor: "벌을-받았다-수동-조치와-알고리즘-하락",
  },
  {
    id: "search-spam-policies-cloaking-7",
    post: "search-spam-policies-cloaking",
    question: "E-E-A-T에 대한 설명으로 맞는 것은?",
    choices: [
      "구글이 페이지마다 매기는 점수이고 저자 소개 박스를 달면 오른다",
      "품질 평가자가 낮게 평가하면 그 사이트의 순위가 바로 떨어진다",
      "2024년 3월 핵심 순위 시스템에 합쳐진 별도 시스템이다",
      "품질 평가자 가이드라인의 개념으로 직접적인 순위 요소가 아니며, 넷 중 신뢰를 가장 중요하게 둔다",
    ],
    answer: 3,
    explanation:
      "E-E-A-T는 평가자 가이드라인의 개념이고, 평가자 결과는 순위 변경 실험을 판단하는 데 쓰일 뿐 개별 사이트 순위를 직접 바꾸지 않는다. 2024년 3월 핵심 시스템에 합쳐진 건 유용한 콘텐츠 시스템이다.",
    anchor: "유용한-콘텐츠-시스템과-e-e-a-t가-아닌-것",
  },
];
