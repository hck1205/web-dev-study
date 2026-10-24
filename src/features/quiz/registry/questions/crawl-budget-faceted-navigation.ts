import type { QuizQuestion } from "../types";

export const CRAWL_BUDGET_FACETED_NAVIGATION: QuizQuestion[] = [
  {
    id: "crawl-budget-faceted-navigation-1",
    post: "crawl-budget-faceted-navigation",
    question: "정렬·사이즈 필터 주소 수십만 개에 canonical을 걸어 두었는데도 구글봇 요청 대부분이 여전히 그 주소들로 간다. 이유는?",
    choices: [
      "canonical은 페이지를 가져가야 읽을 수 있어서 크롤링 자체는 줄지 않기 때문이다",
      "canonical은 상대 주소로만 써야 효과가 있기 때문이다",
      "canonical을 쓰면 구글봇이 그 주소를 더 자주 확인하러 오기 때문이다",
      "canonical은 sitemap에 넣어야만 적용되기 때문이다",
    ],
    answer: 0,
    explanation:
      "canonical과 noindex는 페이지 안에 있는 신호라 가져간 뒤에야 작동한다. 신호를 대표로 모으고 색인을 정리하지만 크롤링을 직접 줄이지는 않는다. 크롤링을 줄이는 건 링크를 만들지 않거나 robots.txt로 막는 쪽이다.",
    anchor: "네-가지-도구는-하는-일이-다르다",
  },
  {
    id: "crawl-budget-faceted-navigation-2",
    post: "crawl-budget-faceted-navigation",
    question: "이미 색인된 필터 주소들을 검색 결과에서 빼려고 noindex를 넣고 같은 날 robots.txt로도 막았다. 어떻게 될까?",
    choices: [
      "두 신호가 겹쳐 더 빨리 빠진다",
      "robots.txt가 우선이라 다음 크롤링에서 바로 빠진다",
      "크롤러가 페이지를 가져가지 않아 noindex를 읽지 못하고, 주소가 색인에 남을 수 있다",
      "robots.txt로 막은 주소는 자동으로 noindex 처리된다",
    ],
    answer: 2,
    explanation:
      "Disallow는 가져가지 말라는 요청이라 페이지 안의 noindex가 읽히지 않는다. 외부 링크가 있으면 내용 없이 주소만 색인된 채 남는다. 먼저 크롤링을 허락한 채 noindex로 빠지는 걸 확인하고, 그다음에 막는다.",
    anchor: "네-가지-도구는-하는-일이-다르다",
  },
  {
    id: "crawl-budget-faceted-navigation-3",
    post: "crawl-budget-faceted-navigation",
    question: "색 12, 사이즈 8, 브랜드 40, 가격대 6(모두 하나만 선택)과 정렬 5가지가 있는 목록에서, 색을 여러 개 동시에 고를 수 있게 바꾸면 주소 수가 크게 늘어나는 이유는?",
    choices: [
      "색 파라미터 이름이 길어지기 때문이다",
      "색 패싯의 경우의 수가 '안 고름 포함 13가지'에서 '선택지마다 고르거나 말거나'인 2의 12제곱(4,096가지)으로 바뀌기 때문이다",
      "다중 선택을 하면 정렬 방식이 두 배로 늘기 때문이다",
      "다중 선택 주소는 세션 ID가 붙기 때문이다",
    ],
    answer: 1,
    explanation:
      "하나만 고르는 패싯은 선택지 수에 '안 고름'을 더한 경우가 있고, 여러 개 고르는 패싯은 선택지마다 두 경우라 2의 거듭제곱이 된다. 글의 계산에서 카테고리 하나가 16만 7,895개에서 5,290만 개로 늘었다.",
    anchor: "필터-조합을-세어-보면",
  },
  {
    id: "crawl-budget-faceted-navigation-4",
    post: "crawl-budget-faceted-navigation",
    question: "목록 2페이지, 3페이지의 canonical을 모두 1페이지로 걸었다. 어떤 문제가 생기나?",
    choices: [
      "1페이지가 중복으로 판정돼 색인에서 빠진다",
      "rel=next가 없어 구글이 페이지 순서를 모르게 된다",
      "아무 문제도 없다. 구글이 권하는 방식이다",
      "2페이지 이후는 다른 상품이 있는 다른 페이지인데 사본이라고 말하게 돼, 뒤쪽 상품으로 가는 길이 약해진다",
    ],
    answer: 3,
    explanation:
      "페이지 번호마다 보여 주는 상품이 다르므로 각 페이지는 자기 자신을 canonical로 가져야 한다. rel=next/prev는 구글이 2019년에 이미 쓰지 않는다고 밝혔다. 페이지끼리는 일반 a href로 잇는다.",
    anchor: "페이지네이션은-각자-자기-주소다",
  },
  {
    id: "crawl-budget-faceted-navigation-5",
    post: "crawl-budget-faceted-navigation",
    question: "무한 스크롤 목록이 크롤러에게도 모든 상품을 보여 주게 하는 방법으로 가장 알맞은 것은?",
    choices: [
      "구글 렌더러가 끝까지 스크롤하므로 따로 할 일이 없다",
      "'더 보기'를 실제 다음 페이지 주소를 가진 링크로 만들고, 자바스크립트로 가로채 이어 붙이며 주소를 갱신한다",
      "페이지 번호를 #page=2처럼 해시에 넣는다",
      "모든 상품을 sitemap에 넣었으니 목록은 1페이지만 있어도 된다",
    ],
    answer: 1,
    explanation:
      "구글 렌더러는 스크롤하거나 버튼을 누르지 않는다. 링크에 ?page=2 같은 주소가 있으면 크롤러가 따라가고, 사람은 자바스크립트로 끊김 없이 본다. 해시 뒤는 구글이 무시해 새 주소가 되지 않는다.",
    anchor: "페이지네이션은-각자-자기-주소다",
  },
  {
    id: "crawl-budget-faceted-navigation-6",
    post: "crawl-budget-faceted-navigation",
    question: "다음 달 재입고 예정인 인기 상품 페이지를 어떻게 처리하는 게 맞나?",
    choices: [
      "200으로 남기고 품절과 입고 예정을 알리며, 구조화 데이터의 availability를 OutOfStock으로 바꾼다",
      "재입고 때까지 404를 준다",
      "홈으로 301을 건다",
      "noindex를 넣었다가 재입고 때 뺀다",
    ],
    answer: 0,
    explanation:
      "일시 품절마다 페이지를 지우거나 빼면 쌓아 둔 순위와 링크를 매번 버린다. 영구 단종일 때만 후속 모델로 301을 걸거나 404·410을 준다. 무관한 홈으로의 일괄 리디렉션은 소프트 404로 처리될 수 있다.",
    anchor: "품절과-단종은-다르게-처리한다",
  },
  {
    id: "crawl-budget-faceted-navigation-7",
    post: "crawl-budget-faceted-navigation",
    question: "접근 로그에서 User-Agent가 Googlebot인 요청이 진짜 구글봇인지 확인하는 방법은?",
    choices: [
      "User-Agent 문자열에 google.com/bot.html이 들어 있는지 본다",
      "요청에 Referer 헤더가 없는지 본다",
      "IP를 역방향 DNS로 조회해 googlebot.com이나 google.com으로 끝나는지 보고, 그 이름을 정방향으로 다시 조회해 같은 IP인지 확인한다",
      "robots.txt를 먼저 요청했는지 본다",
    ],
    answer: 2,
    explanation:
      "User-Agent는 누구나 흉내 낼 수 있다. 역방향과 정방향 조회가 서로 맞아야 구글 크롤러다. 구글이 공개하는 크롤러 IP 대역 JSON과 대조하는 방법도 있다.",
    anchor: "바꾼-뒤-확인하는-순서",
  },
];
