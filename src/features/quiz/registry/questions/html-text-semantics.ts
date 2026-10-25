import type { QuizQuestion } from "../types";

export const HTML_TEXT_SEMANTICS: QuizQuestion[] = [
  {
    id: "html-text-semantics-1",
    post: "html-text-semantics",
    question: "결제 화면의 \"주소를 꼭 확인한다\"는 경고와 요약문 속 제품 이름을 둘 다 굵게 보이고 싶다. 알맞은 조합은?",
    choices: [
      "경고는 b, 제품 이름은 strong",
      "둘 다 strong",
      "경고는 strong, 제품 이름은 b나 CSS font-weight",
      "둘 다 span에 font-weight: 700",
    ],
    answer: 2,
    explanation:
      "strong은 중요함·급함이라는 의미를 담아 접근성 트리에 strong으로 남는다. 제품 이름처럼 눈길만 끌면 되는 곳은 관례적 표시인 b나 CSS가 맞다. 둘 다 strong으로 하면 정말 중요한 경고가 묻히고, 둘 다 CSS로 하면 경고의 의미가 HTML에서 사라진다.",
    anchor: "강조와-관례-em-strong-i-b",
  },
  {
    id: "html-text-semantics-2",
    post: "html-text-semantics",
    question: "<abbr title=\"Content Delivery Network\">CDN</abbr>만 쓰고 본문에서 풀어 쓰지 않았다. 무엇이 문제인가?",
    choices: [
      "title은 마우스를 올려야 보여서 키보드·터치 사용자는 풀어 쓴 말을 보기 어렵다",
      "abbr 안에는 대문자를 쓸 수 없다",
      "검색 엔진이 abbr 안의 글자를 색인하지 않는다",
      "title이 있으면 스크린리더가 CDN을 읽지 않는다",
    ],
    answer: 0,
    explanation:
      "Chromium 접근성 트리에도 CDN이라는 글자만 남고 title은 마우스 툴팁으로만 드러난다. 그래서 처음 나올 때 본문에 풀어 쓰는 편이 모두에게 확실하다. abbr 자체가 글자를 숨기거나 색인을 막지는 않는다.",
    anchor: "짧은-말에-붙이는-태그들",
  },
  {
    id: "html-text-semantics-3",
    post: "html-text-semantics",
    question: "문장 속 짧은 인용을 <q>\"배포는 금요일에 하지 않는다\"</q>처럼 썼더니 화면이 어색하다. 왜일까?",
    choices: [
      "q는 블록 요소라 줄이 바뀐다",
      "q는 브라우저가 따옴표를 자동으로 붙여서 따옴표가 두 번 찍힌다",
      "q 안에는 한글을 쓸 수 없다",
      "q는 cite 속성이 없으면 렌더링되지 않는다",
    ],
    answer: 1,
    explanation:
      "q는 언어에 맞는 따옴표를 브라우저가 붙여 준다. 그래서 안에 따옴표를 또 쓰면 겹친다. 긴 인용은 blockquote로 떼고 출처는 figcaption처럼 보이는 글자로 적는다.",
    anchor: "인용은-짧으면-q-길면-blockquote",
  },
  {
    id: "html-text-semantics-4",
    post: "html-text-semantics",
    question: "태그 묶음 ul에 list-style: none을 줬다. 크롬에서 접근성 트리를 보니 list로 나온다. 이걸로 충분할까?",
    choices: [
      "충분하다. 모든 브라우저가 같은 트리를 만든다",
      "list-style이 none이면 어떤 브라우저도 목록으로 알리지 않으니 div로 바꾼다",
      "aria-hidden을 붙여 목록을 숨겨야 한다",
      "사파리 VoiceOver는 글머리표를 지운 목록을 목록으로 알리지 않으니 role=\"list\"를 덧붙인다",
    ],
    answer: 3,
    explanation:
      "Chromium은 그대로 list로 남기지만 WebKit은 글머리표를 지운 목록을 일부러 목록으로 알리지 않는다. 크롬에서만 확인하면 이 차이를 놓친다. 목록이라는 사실이 중요하면 role=\"list\"로 의미를 되살린다.",
    anchor: "목록-세-가지",
  },
  {
    id: "html-text-semantics-5",
    post: "html-text-semantics",
    question: "요즘 브라우저에서 target=\"_blank\"만 쓰고 rel을 빼면 어떻게 되나?",
    choices: [
      "새 탭의 window.opener가 원래 탭을 가리켜 탭내빙에 바로 노출된다",
      "기본으로 noopener처럼 동작해 window.opener가 null이다. 그래도 오래된 환경과 린트 때문에 rel을 적어 둔다",
      "링크가 새 탭이 아니라 같은 탭에서 열린다",
      "Referer 헤더가 항상 빠진다",
    ],
    answer: 1,
    explanation:
      "크롬 88, 파이어폭스 79, 사파리 12.1부터 target=\"_blank\"는 noopener를 기본으로 갖고, 측정에서도 opener가 null이었다. rel=\"opener\"를 적어야 다시 열린다. Referer를 지우는 건 noreferrer의 일이다.",
    anchor: "링크와-버튼-그리고-새-창",
  },
  {
    id: "html-text-semantics-6",
    post: "html-text-semantics",
    question: "사용자가 줄을 바꿔 쓴 메모를 화면에 그대로 보여 주려 한다. 가장 알맞은 방법은?",
    choices: [
      "서버에서 줄바꿈을 br로 바꿔 innerHTML로 넣는다",
      "공백마다 &nbsp;로 바꿔 넣는다",
      "글은 그대로 두고 CSS white-space: pre-wrap을 준다",
      "textContent 대신 innerText로 넣는다",
    ],
    answer: 2,
    explanation:
      "줄바꿈과 공백이 한 칸으로 접히는 건 CSS white-space: normal 때문이고 DOM에는 원문이 그대로 있다. 그래서 표시 규칙만 pre-wrap으로 바꾸면 된다. br로 바꿔 innerHTML에 넣으면 사용자 글이 HTML로 해석돼 XSS 통로가 될 수 있다.",
    anchor: "파서가-글자를-읽는-규칙",
  },
  {
    id: "html-text-semantics-7",
    post: "html-text-semantics",
    question: "href=\"/s?x=1&lang=ko&reg_id=3\"으로 적었더니 서버가 reg_id 파라미터를 받지 못했다. 이유는?",
    choices: [
      "&reg가 세미콜론 없이도 문자 참조로 읽혀 ®로 바뀌어서",
      "속성 값에서 밑줄은 쓸 수 없어서",
      "href는 대소문자를 구분해서",
      "쿼리 파라미터는 두 개까지만 전달돼서",
    ],
    answer: 0,
    explanation:
      "일부 오래된 이름은 호환 때문에 세미콜론이 없어도 문자 참조로 읽힌다. 속성 값에서는 뒤에 =나 영문·숫자가 오면 예외로 두지만 밑줄은 예외가 아니라서 &reg가 ®가 된다. 속성 값 안의 &는 &amp;로 쓰는 게 안전하다.",
    anchor: "파서가-글자를-읽는-규칙",
  },
];
