import type { QuizQuestion } from "../types";

export const AI_CRAWLERS_BOT_CONTROL: QuizQuestion[] = [
  {
    id: "ai-crawlers-bot-control-1",
    post: "ai-crawlers-bot-control",
    question: "모델 학습에는 쓰이기 싫지만 ChatGPT 검색 결과에는 나오고 싶다. robots.txt에서 막을 봇은?",
    choices: [
      "OAI-SearchBot",
      "ChatGPT-User",
      "GPTBot",
      "셋 다 막아야 한다",
    ],
    answer: 2,
    explanation:
      "GPTBot은 학습용 수집, OAI-SearchBot은 ChatGPT 검색 색인, ChatGPT-User는 사용자 요청 시 한 번 읽는 요청이다. 검색에 나오려면 OAI-SearchBot은 열어 둬야 한다. OAI-SearchBot을 막으면 학습은 그대로 막지 못한 채 검색 유입만 잃는다.",
    anchor: "ai-봇은-세-종류다",
  },
  {
    id: "ai-crawlers-bot-control-2",
    post: "ai-crawlers-bot-control",
    question: "Google-Extended를 Disallow한 뒤에도 로그에 구글 요청이 그대로 찍힌다. 왜인가?",
    choices: [
      "Google-Extended는 별도 크롤러가 아니라 Googlebot이 가져간 내용의 사용 범위를 정하는 토큰이기 때문이다",
      "구글이 robots.txt를 무시하기 때문이다",
      "robots.txt 변경이 반영되는 데 30일이 걸리기 때문이다",
      "Google-Extended는 User-agent: * 그룹에 써야 하기 때문이다",
    ],
    answer: 0,
    explanation:
      "구글은 AI 학습 전용 크롤러가 없고 요청은 늘 Googlebot으로 온다. Google-Extended는 그 내용을 Gemini 학습과 일부 그라운딩에 쓸지 정할 뿐이고 검색 포함 여부에는 영향이 없다. Googlebot을 막으면 검색에서 사라진다.",
    anchor: "google-extended는-크롤러가-아니다",
  },
  {
    id: "ai-crawlers-bot-control-3",
    post: "ai-crawlers-bot-control",
    question: "robots.txt에 User-agent: * 그룹으로 /admin/을 막고, User-agent: PerplexityBot 그룹에는 Allow: /만 적었다. PerplexityBot에게 /admin/은?",
    choices: [
      "* 그룹 규칙이 함께 적용되어 막힌다",
      "자기 이름 그룹만 따르므로 열린다",
      "두 그룹이 충돌해 robots.txt 전체가 무시된다",
      "Allow가 Disallow보다 약해서 막힌다",
    ],
    answer: 1,
    explanation:
      "RFC 9309 기준으로 크롤러는 자기 이름과 맞는 그룹이 있으면 그 그룹만 따르고 * 그룹은 보지 않는다. 그래서 봇별 그룹에는 공통 규칙을 다시 적어야 한다.",
    anchor: "robotstxt로-용도별로-고르기",
  },
  {
    id: "ai-crawlers-bot-control-4",
    post: "ai-crawlers-bot-control",
    question: "역방향 DNS로 요청 IP의 이름이 crawl-...googlebot.com으로 나왔다. 여기서 확인을 끝내면 안 되는 이유는?",
    choices: [
      "googlebot.com은 구글이 더 이상 쓰지 않는 도메인이라서",
      "역방향 조회는 IPv6에서만 의미가 있어서",
      "DNS 응답은 항상 캐시되어 틀리기 때문에",
      "PTR 기록은 IP 주인이 아무 이름이나 적을 수 있어서, 그 이름을 정방향으로 다시 조회해 원래 IP가 나오는지 봐야 해서",
    ],
    answer: 3,
    explanation:
      "PTR은 IP를 가진 쪽이 정하는 값이라 남의 이름을 적어 둘 수 있다. 정방향 조회는 googlebot.com 도메인 주인인 구글만 설정할 수 있으니, 그 결과가 원래 IP와 같아야 진짜다.",
    anchor: "진짜-봇인지-확인하기",
  },
  {
    id: "ai-crawlers-bot-control-5",
    post: "ai-crawlers-bot-control",
    question: "Nginx에서 limit_req의 키를 User-Agent에서 뽑은 값으로 잡았다. 일반 브라우저 요청에는 제한이 걸리지 않는 이유는?",
    choices: [
      "limit_req는 봇에게만 동작하는 모듈이라서",
      "map의 default가 빈 문자열이고, 키가 비어 있으면 limit_req가 적용되지 않아서",
      "브라우저는 HTTP/2를 써서 limit_req를 우회하기 때문에",
      "burst 값이 브라우저 요청을 모두 흡수하기 때문에",
    ],
    answer: 1,
    explanation:
      "limit_req_zone의 키가 빈 문자열이면 그 요청은 계산하지 않는다. 그래서 map으로 제한할 봇에게만 키를 주고 나머지는 빈 값으로 두면 봇만 제한된다. 실험에서도 일반 UA는 10번 모두 200이었다.",
    anchor: "지키지-않는-봇은-서버에서-다룬다",
  },
  {
    id: "ai-crawlers-bot-control-6",
    post: "ai-crawlers-bot-control",
    question: "Cloudflare pay-per-crawl에서 크롤러가 가격을 처음 알게 되는 응답은?",
    choices: [
      "402 Payment Required와 crawler-price 헤더",
      "403 Forbidden과 robots.txt의 Price 줄",
      "429 Too Many Requests와 Retry-After",
      "200 OK와 llms.txt 안의 가격표",
    ],
    answer: 0,
    explanation:
      "Cloudflare가 설명한 흐름에서는 등록된 크롤러에게 402와 crawler-price 헤더로 가격을 알리고, 크롤러가 가격을 받아들이는 헤더를 붙여 다시 요청하면 결제와 함께 200을 준다. 크롤러 신원은 User-Agent가 아니라 HTTP 메시지 서명으로 확인한다.",
    anchor: "엣지에서-막기-waf와-cloudflare의-ai-봇-기능",
  },
  {
    id: "ai-crawlers-bot-control-7",
    post: "ai-crawlers-bot-control",
    question: "User-Agent 차단 정규식에 bot을 넣었다. 가장 큰 위험은?",
    choices: [
      "정규식이 느려 서버가 멈춘다",
      "AI 에이전트가 더 많이 들어온다",
      "Googlebot과 Bingbot까지 막혀 크롤링이 줄고 색인에서 빠질 수 있다",
      "robots.txt가 무효가 된다",
    ],
    answer: 2,
    explanation:
      "넓은 말은 검색 엔진 봇까지 잡는다. 검색 봇이 403이나 429를 오래 받으면 크롤링이 줄고 결국 색인에서 빠진다. 차단 목록은 정확한 봇 이름으로 쓰고 Googlebot UA로 200이 나오는지 확인한다.",
    anchor: "지키지-않는-봇은-서버에서-다룬다",
  },
];
