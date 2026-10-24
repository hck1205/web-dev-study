import type { QuizQuestion } from "../types";

export const STRUCTURED_DATA_JSON_LD: QuizQuestion[] = [
  {
    id: "structured-data-json-ld-1",
    post: "structured-data-json-ld",
    question: "상품 JSON-LD의 offers.price에 \"89,000원\"을 넣었다. 리치 결과 테스트에서 가격이 인식되지 않는 이유는?",
    choices: [
      "price는 숫자만 써야 하고 통화는 priceCurrency로 따로 적기 때문이다",
      "price는 반드시 숫자 타입이어야 하고 문자열 \"89000\"도 거부되기 때문이다",
      "한국 원화는 구조화 데이터에서 지원하지 않기 때문이다",
      "Offer 안에서는 price 대신 cost를 써야 하기 때문이다",
    ],
    answer: 0,
    explanation:
      "price에는 쉼표나 통화 글자 없이 숫자 모양만 넣고, 통화는 priceCurrency에 KRW처럼 ISO 4217 세 글자로 적는다. 문자열 \"89000\"은 숫자 모양이라 괜찮다. 형식이 틀리면 가격으로 읽지 못해 리치 결과에서 빠진다.",
    anchor: "상품-객체를-조각으로-읽기",
  },
  {
    id: "structured-data-json-ld-2",
    post: "structured-data-json-ld",
    question: "블로그 글의 author에 { \"@id\": \"https://site/about/#me\" }를 넣었는데 소개 페이지 Person의 @id는 https://site/about#me다. 어떻게 되나?",
    choices: [
      "리치 결과 테스트가 오류를 내고 글이 색인에서 빠진다",
      "검색 엔진이 슬래시 차이를 무시하고 같은 사람으로 본다",
      "author가 Organization으로 바뀐다",
      "문법 오류는 없지만 author가 이름 없는 다른 사물을 가리켜 글쓴이 연결이 끊긴다",
    ],
    answer: 3,
    explanation:
      "@id는 문자열이 정확히 같아야 같은 사물이다. 다른 값을 가리키면 문법상으로는 이름 없는 어떤 사물일 뿐이라 검증 도구도 오류를 내지 않는다. 그래서 사이트 공통 사물의 @id는 상수로 한 곳에 두고, HTML에서 참조를 뽑아 검사한다.",
    anchor: "페이지-여러-개를-하나의-그래프로-잇기",
  },
  {
    id: "structured-data-json-ld-3",
    post: "structured-data-json-ld",
    question: "sameAs에 Wikidata 항목 주소를 넣는 가장 큰 이유는?",
    choices: [
      "Wikidata에서 백링크를 받아 순위가 오르기 때문이다",
      "같은 이름의 여러 엔티티 중 어느 것인지 고유 번호로 가려 주기 때문이다",
      "지식 패널이 자동으로 만들어지기 때문이다",
      "Wikidata가 리치 결과의 필수 속성이기 때문이다",
    ],
    answer: 1,
    explanation:
      "sameAs는 이 사물이 저 주소가 설명하는 사물과 같다는 뜻이고, Wikidata 항목은 엔티티마다 고유한 번호라 중의성 해소에 강하다. 지식 패널은 구글이 자동으로 만들며 마크업으로 만들 수 없다.",
    anchor: "엔티티-검색-엔진이-아는-사물",
  },
  {
    id: "structured-data-json-ld-4",
    post: "structured-data-json-ld",
    question: "Next.js 예시에서 JSON.stringify 결과의 <를 \\u003c로 바꾸는 이유는?",
    choices: [
      "검색 엔진이 < 문자를 읽지 못하기 때문이다",
      "JSON 표준이 < 문자를 금지하기 때문이다",
      "사용자 입력에 </script>가 있으면 스크립트 태그가 닫혀 뒤의 내용이 실행되기 때문이다",
      "React가 dangerouslySetInnerHTML에서 <를 지우기 때문이다",
    ],
    answer: 2,
    explanation:
      "JSON.stringify는 <를 이스케이프하지 않는다. 리뷰 본문 같은 사용자 값에 </script>가 들어가면 HTML 파서가 그 자리에서 스크립트를 끝내고 뒤의 태그를 실행해 저장형 XSS가 된다. \\u003c는 HTML 파서에게 태그가 아니고 JSON으로 읽으면 원래 값이다.",
    anchor: "nextjs에서-만들기",
  },
  {
    id: "structured-data-json-ld-5",
    post: "structured-data-json-ld",
    question: "리치 결과 테스트를 통과했는데도 검색 결과에 별점이 붙지 않는다. 가장 맞는 설명은?",
    choices: [
      "구조화 데이터는 표시 자격을 줄 뿐이고, 보여 줄지는 구글이 검색어와 품질을 보고 정한다",
      "테스트를 통과하면 반드시 다음 크롤링부터 표시된다",
      "구조화 데이터가 순위를 올린 뒤에야 별점이 붙는다",
      "Schema Markup Validator도 통과해야 표시된다",
    ],
    answer: 0,
    explanation:
      "구조화 데이터는 순위 신호가 아니라 리치 결과에 나올 자격이다. 자격이 있어도 표시는 구글이 정한다. Schema Markup Validator는 schema.org 문법 검사기라 리치 결과 자격과는 다른 질문에 답한다.",
    anchor: "순위-신호가-아니라-표시-자격이다",
  },
  {
    id: "structured-data-json-ld-6",
    post: "structured-data-json-ld",
    question: "화면에는 품절로 보이는 상품의 JSON-LD에 availability: InStock을 계속 넣었다. 생길 수 있는 결과는?",
    choices: [
      "검색 순위가 떨어지는 수동 조치가 걸린다",
      "구글이 화면 값을 우선해 자동으로 고쳐 표시한다",
      "구조화된 데이터 문제 수동 조치로 리치 결과 자격이 빠질 수 있다",
      "아무 영향이 없다. 재고는 Merchant Center에서만 쓴다",
    ],
    answer: 2,
    explanation:
      "마크업은 사용자에게 보이는 내용을 나타내야 한다는 지침을 어긴 것이다. 알고리즘이 마크업을 무시하거나, 심하면 구조화된 데이터 문제 수동 조치가 걸려 리치 결과가 빠진다. 이 조치는 순위가 아니라 리치 결과 자격을 뺀다.",
    anchor: "보이는-내용과-다른-마크업",
  },
];
