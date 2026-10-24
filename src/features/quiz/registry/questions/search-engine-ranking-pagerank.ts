import type { QuizQuestion } from "../types";

export const SEARCH_ENGINE_RANKING_PAGERANK: QuizQuestion[] = [
  {
    id: "search-engine-ranking-pagerank-1",
    post: "search-engine-ranking-pagerank",
    question: "정확한 제목으로 검색해도 내 글이 아예 나오지 않는다. 글이 말하는 순서로 먼저 의심할 곳은?",
    choices: [
      "순위 신호 중 링크 점수가 낮은 것",
      "색인 또는 후보 검색 단계에 들지 못한 것",
      "meta description이 너무 짧은 것",
      "도메인 권위(DA)가 30 미만인 것",
    ],
    answer: 1,
    explanation:
      "후보 검색 단계에 못 들어온 문서는 순위 신호가 아무리 좋아도 결과에 나올 수 없다. 2페이지에라도 있다면 후보에는 든 것이니 순위 신호를 보고, 아예 없으면 색인과 후보 단계를 먼저 본다. DA는 구글 지표가 아니다.",
    anchor: "검색어가-들어온-뒤의-두-단계",
  },
  {
    id: "search-engine-ranking-pagerank-2",
    post: "search-engine-ranking-pagerank",
    question: "글의 예제 그래프에서 A는 링크를 하나(C에서)만 받는데도 PageRank가 2위였다. 이유는?",
    choices: [
      "A가 링크를 두 개 걸어서 점수를 더 받았기 때문이다",
      "홈 페이지는 PageRank 계산에서 가중치를 따로 받기 때문이다",
      "점수가 높은 C가 링크를 A 하나에만 걸어 자기 몫을 통째로 넘기기 때문이다",
      "감쇠 계수가 A에만 적용되지 않기 때문이다",
    ],
    answer: 2,
    explanation:
      "PageRank에서 링크 하나가 넘기는 몫은 거는 페이지의 점수를 그 페이지의 링크 수로 나눈 값이다. C는 점수가 가장 높고 링크가 하나뿐이라 A에 큰 몫을 준다. 링크는 개수보다 누가, 몇 개 중 하나로 걸었느냐가 중요하다.",
    anchor: "작은-링크-그래프에서-직접-돌려-보기",
  },
  {
    id: "search-engine-ranking-pagerank-3",
    post: "search-engine-ranking-pagerank",
    question: "PageRank에 감쇠 계수(무작위 순간이동)를 두는 가장 큰 이유는?",
    choices: [
      "서로만 가리키는 페이지 무리에 점수가 갇히지 않고 한 값으로 수렴하게 하려고",
      "계산 속도를 높이려고 반복 횟수를 줄이기 위해",
      "외부 링크보다 내부 링크에 가중치를 더 주려고",
      "nofollow 링크를 계산에서 빼기 위해",
    ],
    answer: 0,
    explanation:
      "순간이동이 없으면 밖으로 나가는 링크가 없는 무리에 점수가 쌓여 빠져나오지 못한다. 1-d 확률로 아무 페이지에나 가게 하면 어디서든 빠져나갈 길이 생겨 유일한 값으로 수렴한다. d를 0으로 두면 모든 페이지 점수가 같아진다.",
    anchor: "마구-클릭하는-사람으로-생각하기",
  },
  {
    id: "search-engine-ranking-pagerank-4",
    post: "search-engine-ranking-pagerank",
    question: "지금 구글에서 rel=\"nofollow\"를 다루는 방식으로 맞는 것은?",
    choices: [
      "점수를 절대 넘기지 않는 지시라서 내부 링크에 붙여 점수를 몰아줄 수 있다",
      "링크를 크롤링하지 못하게 막는 robots.txt와 같은 지시다",
      "2019년에 폐지돼 sponsored와 ugc로 대체됐다",
      "순위와 크롤링·색인에서 모두 힌트로 다뤄, 구글이 쓸지 말지 스스로 정한다",
    ],
    answer: 3,
    explanation:
      "2019년 9월 sponsored와 ugc가 추가되며 셋 다 순위 판단에서 힌트가 됐고, 2020년 3월부터 크롤링과 색인에서도 힌트다. nofollow는 폐지되지 않았다. 내부 링크에 붙여 점수를 몰아주는 방법은 2009년 무렵부터 효과가 없다.",
    anchor: "nofollow-sponsored-ugc는-힌트다",
  },
  {
    id: "search-engine-ranking-pagerank-5",
    post: "search-engine-ranking-pagerank",
    question: "블로그에 협찬을 받고 쓴 리뷰 글 안에 브랜드 링크를 걸었다. 구글 스팸 정책상 해야 할 일은?",
    choices: [
      "아무것도 붙이지 않는다. 협찬 링크도 자연스러운 추천이다",
      "링크에 rel=\"sponsored\"(또는 nofollow)를 붙인다",
      "링크 텍스트를 '여기'로 바꿔 키워드를 숨긴다",
      "robots.txt로 그 글을 막는다",
    ],
    answer: 1,
    explanation:
      "대가를 받고 건 링크가 점수를 넘기면 링크 스킴에 해당한다. sponsored로 표시하면 대가 있는 링크라는 걸 알려 위반을 피한다. 앵커를 바꾸거나 글을 막는 건 해결이 아니다.",
    anchor: "nofollow-sponsored-ugc는-힌트다",
  },
  {
    id: "search-engine-ranking-pagerank-6",
    post: "search-engine-ranking-pagerank",
    question: "목록 3페이지에 묻힌 오래된 글의 링크 점수를 올리는 방법으로 글의 계산이 보여 준 것은?",
    choices: [
      "글마다 관련 글 링크를 걸어 최근 글과 오래된 글을 서로 잇는다",
      "오래된 글에 nofollow를 붙여 점수를 아낀다",
      "목록 페이지를 noindex로 바꾼다",
      "sitemap의 priority를 1.0으로 올린다",
    ],
    answer: 0,
    explanation:
      "관련 글 링크를 더하자 3페이지 글의 점수가 0.0114에서 0.0406으로 3.6배가 됐고 최근 글은 조금만 줄었다. 내부 링크는 내가 통제할 수 있는 링크 신호다. 구글은 sitemap의 priority를 무시한다.",
    anchor: "목록-3페이지에-묻힌-글",
  },
  {
    id: "search-engine-ranking-pagerank-7",
    post: "search-engine-ranking-pagerank",
    question: "관련도 0~3 등급의 결과 다섯 개를 NDCG로 채점할 때, 같은 결과라도 점수가 크게 떨어지는 경우는?",
    choices: [
      "5위에 관련도 0인 결과가 있을 때",
      "결과 다섯 개의 관련도가 모두 같을 때",
      "1위에 관련도가 낮은 결과가 올 때",
      "관련도 3인 결과가 두 개 이상일 때",
    ],
    answer: 2,
    explanation:
      "NDCG는 i번째 자리의 이득을 log2(i+1)로 나눠 아래로 갈수록 덜 쳐준다. 그래서 위쪽 자리의 실수가 가장 비싸다. 글의 예에서 1위에 등급 1이 오자 0.765로 떨어졌다. 관련도가 모두 같은 양수 등급이면 어떤 순서든 1이다.",
    anchor: "순위가-좋은지는-어떻게-재나",
  },
];
