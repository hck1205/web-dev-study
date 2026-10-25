import type { QuizQuestion } from "../types";

export const SEARCH_TRAFFIC_MEASUREMENT: QuizQuestion[] = [
  {
    id: "search-traffic-measurement-1",
    post: "search-traffic-measurement",
    question: "Search Console 구글 클릭이 GA4의 구글 오가닉 세션보다 많을 때, 그 차이를 만드는 원인이 아닌 것은?",
    choices: [
      "페이지가 열리기 전에 뒤로 가서 분석 태그가 실행되지 않았다",
      "광고 차단기나 동의 거부로 GA4 태그가 막혔다",
      "구글이 Referer에 검색어까지 넘겨 GA4가 그 방문을 검색어별로 따로 센다",
      "출처를 잃은 방문이 Direct로 분류됐다",
    ],
    answer: 2,
    explanation:
      "구글은 Referer에 출처(https://www.google.com/)만 넘기고 검색어는 넘기지 않는다. 클릭은 구글 쪽에서 세고 세션은 태그가 실행되고 출처가 남아야 오가닉이 되니, 태그 전 이탈·차단·출처 손실이 차이를 만든다.",
    anchor: "클릭-하나가-두-도구에-기록되기까지",
  },
  {
    id: "search-traffic-measurement-2",
    post: "search-traffic-measurement",
    question: "새 글이 큰 쿼리에서 28위로 노출되기 시작한 달, 사이트 평균 게재순위가 4.7에서 19.3으로 나빠지고 클릭은 340에서 355로 늘었다. 어떻게 읽어야 하나?",
    choices: [
      "기존 쿼리들의 순위가 크게 떨어졌으니 원인을 찾아야 한다",
      "평균 게재순위는 노출 가중 평균이라 깊은 순위의 큰 쿼리가 새로 들어와 평균을 끌어내렸을 뿐이다",
      "클릭이 늘었으니 Search Console 집계 오류다",
      "CTR이 떨어졌으니 제목을 모두 바꿔야 한다",
    ],
    answer: 1,
    explanation:
      "평균 게재순위는 위치를 노출 수로 가중해 평균 내므로 노출 5,000의 28위 쿼리가 평균을 크게 끌어내린다. 기존 쿼리는 그대로였고 클릭은 늘었다. 그래서 사이트 전체 평균보다 쿼리나 페이지를 좁혀서 본다.",
    anchor: "평균-게재순위가-나빠졌는데-클릭은-늘었다",
  },
  {
    id: "search-traffic-measurement-3",
    post: "search-traffic-measurement",
    question: "Search Console 쿼리 표의 클릭을 다 더해도 위쪽 총 클릭보다 작다. 가장 직접적인 이유는?",
    choices: [
      "아주 적은 사용자만 검색한 쿼리가 익명화되어 표에서 빠지고 총계에만 들어가서다",
      "총 클릭에 광고 클릭이 섞여 있어서다",
      "쿼리 표는 모바일 검색만 보여 줘서다",
      "총계는 GA4 세션으로 계산돼서다",
    ],
    answer: 0,
    explanation:
      "구글은 개인 정보 보호를 위해 소수만 검색한 쿼리를 익명화해 쿼리 표에서 뺀다. 총계에는 포함되므로 합계가 맞지 않는다. 화면 표의 1,000행 제한도 겹치니 API나 BigQuery 내보내기로 표 밖 비중을 잰다.",
    anchor: "표에-안-나오는-쿼리",
  },
  {
    id: "search-traffic-measurement-4",
    post: "search-traffic-measurement",
    question: "홈 배너 링크에 ?utm_source=banner&utm_medium=internal 을 붙였다. 무엇이 문제인가?",
    choices: [
      "UTM은 내부 링크에서 무시되니 아무 영향이 없다",
      "배너 클릭 수가 Search Console에 따로 잡혀 순위가 떨어진다",
      "UTM이 붙은 주소는 크롤되지 않는다",
      "검색으로 들어와 배너를 누른 사람의 세션 출처가 배너로 바뀌어 오가닉 성과가 줄어 보인다",
    ],
    answer: 3,
    explanation:
      "UTM은 링크를 만든 쪽이 적은 출처라 가장 우선한다. 사이트 안 링크에 붙이면 이미 검색으로 들어온 방문의 출처를 덮어쓴다. UTM은 외부에서 들어오는 링크에만 쓴다.",
    anchor: "방문이-오가닉이-되는-원리",
  },
  {
    id: "search-traffic-measurement-5",
    post: "search-traffic-measurement",
    question: "깊은 상품 상세 페이지의 Direct 세션이 갑자기 늘었다. 가장 먼저 의심할 것은?",
    choices: [
      "사람들이 상품 주소를 외워서 직접 치기 시작했다",
      "출처를 잃은 방문이다. no-referrer 정책, HTTPS에서 HTTP로 가는 링크, 앱 내장 브라우저 공유 등을 본다",
      "구글이 그 페이지를 색인에서 뺐다",
      "GA4가 Direct를 오가닉으로 잘못 분류하고 있다",
    ],
    answer: 1,
    explanation:
      "Direct는 '직접 쳤다'보다 '출처를 모른다'에 가깝다. 깊은 상세 주소를 사람이 외워 칠 리는 드물어서 Referer가 지워진 다른 유입일 가능성이 크다. 우리가 만드는 공유 링크에는 UTM을 붙여 둔다.",
    anchor: "direct로-새는-트래픽",
  },
  {
    id: "search-traffic-measurement-6",
    post: "search-traffic-measurement",
    question: "GA4 맞춤 채널 그룹에 AI Assistants 규칙을 만들었는데 chatgpt.com 세션이 하나도 잡히지 않는다. 가장 그럴듯한 원인은?",
    choices: [
      "AI 규칙이 Referral 규칙 아래에 있어 이미 Referral로 정해진 뒤라서다",
      "ChatGPT는 Referer를 절대 보내지 않아서다",
      "맞춤 채널 그룹은 과거 데이터에 적용되지 않아서다",
      "정규식에 대소문자 무시 옵션이 있어서다",
    ],
    answer: 0,
    explanation:
      "채널 그룹은 위에서부터 처음 맞는 규칙 하나만 고른다. referral 매체 세션은 Referral 규칙에서 끝나니 AI 규칙을 그 위로 옮겨야 한다. ChatGPT는 utm_source를 붙이기도 해서 출처가 남는 경우가 많다.",
    anchor: "ai-답변에서-오는-유입을-따로-센다",
  },
  {
    id: "search-traffic-measurement-7",
    post: "search-traffic-measurement",
    question: "제목 형식을 바꾸는 SEO 변경의 효과를 재려 한다. 알맞은 실험 방법은?",
    choices: [
      "사용자마다 무작위로 다른 제목을 보여 주는 A/B 테스트를 한다",
      "구글봇에게만 새 제목을 주고 사람에게는 옛 제목을 준다",
      "같은 템플릿 페이지를 트래픽이 비슷한 두 묶음으로 나눠 한쪽만 바꾸고 전후 클릭 비율을 비교한다",
      "사이트 전체를 바꾸고 다음 날 클릭을 전날과 비교한다",
    ],
    answer: 2,
    explanation:
      "구글봇은 한 명이라 같은 주소에 사람마다 다른 내용을 주면 하나만 보고, 봇에게만 다르게 주면 클로킹에 가까워진다. 페이지 묶음으로 나누면 계절이나 업데이트 같은 공통 변화가 두 묶음에 함께 와서 상쇄된다.",
    anchor: "seo-변경은-페이지-묶음으로-실험한다",
  },
];
