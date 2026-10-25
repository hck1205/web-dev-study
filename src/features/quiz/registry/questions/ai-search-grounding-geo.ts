import type { QuizQuestion } from "../types";

export const AI_SEARCH_GROUNDING_GEO: QuizQuestion[] = [
  {
    id: "ai-search-grounding-geo-1",
    post: "ai-search-grounding-geo",
    question: "검색 순위 2페이지에 있던 글이 AI 답변의 출처로 인용됐다. 가장 그럴듯한 이유는?",
    choices: [
      "AI 검색은 순위가 낮은 글을 일부러 섞어 다양성을 맞추기 때문이다",
      "AI가 질문을 하위 질의로 쪼개 검색했고, 그중 하나에 딱 맞는 단락이 그 글에 있었기 때문이다",
      "AI 검색은 학습 데이터에 있는 글만 인용하기 때문이다",
      "llms.txt를 둔 사이트를 우선 인용하기 때문이다",
    ],
    answer: 1,
    explanation:
      "쿼리 팬아웃으로 원래 질문이 여러 하위 질의가 되고, 각 질의에서 청크 단위로 근거를 고른다. 원래 검색어 순위가 낮아도 한 하위 질의에 맞는 단락이 있으면 뽑힌다. 출처가 붙는 답은 학습 데이터가 아니라 그라운딩에서 나온다.",
    anchor: "질문-하나가-여러-검색이-된다",
  },
  {
    id: "ai-search-grounding-geo-2",
    post: "ai-search-grounding-geo",
    question: "학습용 크롤러는 막고 AI 검색 답변의 출처로는 계속 쓰이고 싶다. 이게 가능한 이유는?",
    choices: [
      "학습 데이터와 그라운딩은 다른 경로이고, 서비스들이 학습용 봇과 검색용 봇을 나눠 두었기 때문이다",
      "AI 검색은 robots.txt를 전혀 읽지 않기 때문이다",
      "학습용 봇을 막으면 자동으로 검색용 봇 우선순위가 올라가기 때문이다",
      "불가능하다. 학습을 막으면 검색에서도 빠진다",
    ],
    answer: 0,
    explanation:
      "학습 데이터는 학습 시점에 모은 기억이고, 그라운딩은 질문 순간 검색해 가져온 근거다. 서비스마다 두 용도의 봇이 나뉘어 있어 학습용(GPTBot 등)만 막고 검색용(OAI-SearchBot 등)은 열어 둘 수 있다.",
    anchor: "학습-데이터와-그라운딩은-다른-길이다",
  },
  {
    id: "ai-search-grounding-geo-3",
    post: "ai-search-grounding-geo",
    question: "같은 내용을 '시작하며' 한 단락에 몰아 쓴 글이 소제목마다 하나씩 답한 글보다 불리한 이유는?",
    choices: [
      "긴 단락은 크롤러가 잘라서 버리기 때문이다",
      "검색 엔진이 '시작하며'라는 소제목을 스팸으로 보기 때문이다",
      "AI 검색은 소제목이 없는 글을 읽지 않기 때문이다",
      "한 청크에 여러 이야기가 섞여 어느 질의에도 어중간하게 맞고, 어떤 질의에는 아예 답하지 못하기 때문이다",
    ],
    answer: 3,
    explanation:
      "그라운딩은 청크 단위로 경쟁한다. 한 청크가 한 질문에 답하면 그 질문에 가까워지고, 섞인 청크는 여러 질의에 같은 긴 조각으로 뽑히거나 아예 뽑히지 않는다. 같은 지식이라도 문서 모양 때문에 기회를 잃는다.",
    anchor: "문서는-청크로-잘려서-뽑힌다",
  },
  {
    id: "ai-search-grounding-geo-4",
    post: "ai-search-grounding-geo",
    question: "CSR로 만든 글이 구글 검색에는 잘 나오는데 여러 AI 검색에서는 인용되지 않는다. 먼저 의심할 것은?",
    choices: [
      "구조화 데이터가 없어서다",
      "llms.txt가 없어서다",
      "AI 크롤러 상당수가 자바스크립트를 실행하지 않아 빈 HTML만 읽었을 가능성이다",
      "글이 너무 길어서다",
    ],
    answer: 2,
    explanation:
      "구글봇은 렌더링하지만 GPTBot, ClaudeBot, PerplexityBot 같은 봇은 자바스크립트를 실행하지 않는다는 분석이 있다. CSR 페이지는 이들에게 빈 div다. curl로 첫 HTML에 본문이 있는지 보고 SSR이나 SSG로 바꾼다.",
    anchor: "첫-html에-본문이-없으면-시작도-못-한다",
  },
  {
    id: "ai-search-grounding-geo-5",
    post: "ai-search-grounding-geo",
    question: "robots.txt에 User-agent: Google-Extended / Disallow: /를 넣었다. 구글 AI 개요에는 어떤 영향이 있나?",
    choices: [
      "AI 개요에서 즉시 빠진다",
      "영향이 없다. Google-Extended는 Gemini 학습과 일부 그라운딩용 토큰이고 검색과 AI 개요 포함 여부와는 별개다",
      "구글 검색 전체에서 빠진다",
      "AI 개요에는 나오지만 출처 링크가 사라진다",
    ],
    answer: 1,
    explanation:
      "구글은 Google-Extended가 검색 포함 여부나 순위에 영향을 주지 않는다고 밝혔다. AI 개요는 검색 기능이라 nosnippet, max-snippet, data-nosnippet 같은 스니펫 제어로 다룬다. 이 경우 일반 검색 설명도 함께 영향을 받는다.",
    anchor: "구글-ai-기능에서-내-페이지를-다루는-스위치",
  },
  {
    id: "ai-search-grounding-geo-6",
    post: "ai-search-grounding-geo",
    question: "접근 로그로 AI 검색 유입을 셀 때 실제보다 적게 잡히는 주된 이유는?",
    choices: [
      "AI 서비스가 방문자를 프록시로 숨기기 때문이다",
      "AI 유입은 모두 봇 트래픽으로 분류되기 때문이다",
      "Search Console이 AI 유입을 로그에서 지우기 때문이다",
      "앱에서 열리거나 브라우저 정책으로 리퍼러가 빠지면 직접 방문으로 잡히기 때문이다",
    ],
    answer: 3,
    explanation:
      "리퍼러가 없으면 출처를 알 수 없어 직접 방문으로 집계된다. ChatGPT 검색처럼 utm_source를 붙여 주는 경우는 리퍼러가 없어도 잡히지만 모든 서비스가 그렇지는 않다. 구글 AI 기능은 Search Console 웹 실적에 합쳐져 따로 볼 수 없다.",
    anchor: "인용률과-ai-유입은-어떻게-재나",
  },
  {
    id: "ai-search-grounding-geo-7",
    post: "ai-search-grounding-geo",
    question: "llms.txt에 대한 설명으로 가장 정확한 것은?",
    choices: [
      "2024년에 나온 제안 형식으로, 코딩 에이전트의 문서 목록 용도는 분명하지만 AI 검색 노출을 늘린다는 근거는 약하다",
      "W3C 표준이며 모든 AI 검색이 robots.txt보다 먼저 읽는다",
      "구글이 AI 개요의 출처를 고를 때 쓰는 파일이다",
      "AI 크롤러의 접근을 막는 파일이다",
    ],
    answer: 0,
    explanation:
      "llms.txt는 Answer.AI의 제러미 하워드가 제안한 마크다운 파일이다. 구글은 쓰지 않는다고 밝혔고 주요 AI 검색이 인용에 쓴다고 공식 발표한 곳도 확인되지 않는다. 접근 제어 기능도 없어서 막는 일은 robots.txt와 WAF의 몫이다.",
    anchor: "llmstxt는-무엇을-해-주나",
  },
];
