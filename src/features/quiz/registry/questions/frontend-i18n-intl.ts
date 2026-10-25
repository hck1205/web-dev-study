import type { QuizQuestion } from "../types";

export const FRONTEND_I18N_INTL: QuizQuestion[] = [
  {
    id: "frontend-i18n-intl-1",
    post: "frontend-i18n-intl",
    question: "복수형을 n === 1 ? 'item' : 'items'로 처리하면 어떤 언어에서 틀리나?",
    choices: [
      "영어에서만 틀리고 나머지 언어는 맞는다",
      "러시아어처럼 21이 단수 범주이고 11은 다른 범주인 언어, 아랍어처럼 범주가 여섯인 언어에서 틀린다",
      "숫자가 1000을 넘으면 모든 언어에서 틀린다",
      "한국어에서만 틀린다",
    ],
    answer: 1,
    explanation:
      "Intl.PluralRules로 보면 영어는 one/other 둘, 한국어는 other 하나, 러시아어는 21이 one이고 11은 many, 아랍어는 zero부터 other까지 여섯 범주다. 그래서 번역문은 ICU 메시지의 plural로 범주별 문장을 둔다.",
    anchor: "1-items는-복수-규칙의-문제다",
  },
  {
    id: "frontend-i18n-intl-2",
    post: "frontend-i18n-intl",
    question: "긴 표의 셀마다 price.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })를 부르니 느리다. 가장 효과적인 개선은?",
    choices: [
      "Intl.NumberFormat을 로케일·옵션별로 한 번 만들어 두고 format만 반복해서 부른다",
      "toLocaleString 대신 문자열 연결로 쉼표를 직접 넣는다",
      "Number를 BigInt로 바꿔 포맷한다",
      "옵션을 빼고 toLocaleString()만 부른다",
    ],
    answer: 0,
    explanation:
      "포매터를 만들 때 로케일 데이터를 찾고 옵션을 해석하는 비용이 크다. 10만 번 측정에서 매번 만들면 약 2.8초, 재사용하면 33ms였다. 문자열 연결은 로케일 규칙을 하드코딩하게 되고, 옵션을 빼면 실행 환경 로케일에 기대게 된다.",
    anchor: "숫자와-통화는-intlnumberformat에-맡긴다",
  },
  {
    id: "frontend-i18n-intl-3",
    post: "frontend-i18n-intl",
    question: "Accept-Language가 'de;q=0.1,ja;q=0.8'이고 지원 로케일이 en, ko, ja일 때 협상 결과는?",
    choices: [
      "de가 먼저 적혔으니 기본값으로 떨어진다",
      "q가 낮은 de부터 보고 없으면 en",
      "q가 높은 ja부터 보므로 ja",
      "독일어와 가장 가까운 en",
    ],
    answer: 2,
    explanation:
      "Accept-Language는 적힌 순서가 아니라 q 값이 높은 순으로 본다. ja가 0.8로 가장 높고 지원 목록에 있으니 ja가 골라진다. q=0은 원하지 않는다는 뜻이라 제외한다.",
    anchor: "사용자-언어는-accept-language가-알려-준다",
  },
  {
    id: "frontend-i18n-intl-4",
    post: "frontend-i18n-intl",
    question: "proxy에서 로케일 협상 리다이렉트를 /ko/products 같은 로케일이 붙은 주소에도 적용하면 생기는 문제로 알맞은 것은?",
    choices: [
      "정적 페이지 생성이 꺼져 모든 페이지가 동적으로 바뀐다",
      "번역 사전이 클라이언트 번들에 실린다",
      "html lang 속성이 빠진다",
      "공유된 링크가 다른 언어로 열리고, Accept-Language 없이 오는 크롤러가 다른 언어 버전을 보지 못한다",
    ],
    answer: 3,
    explanation:
      "로케일이 붙은 주소는 이미 언어가 정해진 주소라 그대로 열어야 한다. 루트처럼 로케일이 없는 주소에서만 쿠키와 Accept-Language로 협상한다. 그래야 크롤러도 /en/ 링크를 따라 모든 언어 버전을 색인한다.",
    anchor: "ko와-en으로-주소를-나누는-이유",
  },
  {
    id: "frontend-i18n-intl-5",
    post: "frontend-i18n-intl",
    question: "App Router에서 번역 사전을 server-only 파일에서 동적 import로 불러 서버 컴포넌트에서 쓰는 이유는?",
    choices: [
      "클라이언트 컴포넌트는 JSON을 import할 수 없어서",
      "결과 HTML만 내려가고 사전 자체는 클라이언트 번들에 실리지 않게 하려고",
      "동적 import를 쓰면 하이드레이션 불일치가 사라져서",
      "proxy가 사전을 읽어 리다이렉트를 결정해야 해서",
    ],
    answer: 1,
    explanation:
      "서버 컴포넌트가 사전을 읽으면 번역된 결과만 HTML과 RSC 페이로드로 간다. 언어별 동적 import라 요청한 언어 하나만 불러온다. 클라이언트 컴포넌트에는 그 화면에 필요한 문구만 넘겨야 페이로드가 커지지 않는다.",
    anchor: "사전은-서버-컴포넌트에서-불러온다",
  },
  {
    id: "frontend-i18n-intl-6",
    post: "frontend-i18n-intl",
    question: "서버에서 '10월 23일'로 그린 날짜가 서울 브라우저에서 '10월 24일'로 바뀌며 하이드레이션 경고가 뜬다. 가장 확실한 해결은?",
    choices: [
      "날짜를 표시하는 모든 요소에 suppressHydrationWarning을 붙인다",
      "toLocaleString 대신 toString을 쓴다",
      "포매터에 로케일과 시간대(예: Asia/Seoul)를 명시해 서버와 브라우저가 같은 값을 쓰게 한다",
      "서버 컴포넌트를 모두 클라이언트 컴포넌트로 바꾼다",
    ],
    answer: 2,
    explanation:
      "서버(대개 UTC)와 브라우저의 시간대가 달라 같은 순간이 다른 날짜가 된다. 로케일과 시간대를 명시하면 양쪽이 같은 문자열을 만든다. suppressHydrationWarning은 계속 바뀌는 상대 시간 같은 요소에만 쓰는 탈출구다.",
    anchor: "서버와-브라우저의-시간대가-다르면-하이드레이션이-깨진다",
  },
  {
    id: "frontend-i18n-intl-7",
    post: "frontend-i18n-intl",
    question: "아랍어 지원을 위해 html에 dir='rtl'을 줬는데 배지 간격이 여전히 왼쪽에 붙어 있다. 무엇을 바꿔야 하나?",
    choices: [
      "margin-left를 margin-inline-start 같은 논리 속성으로 바꾼다",
      "모든 아이콘과 로고에 transform: scaleX(-1)을 준다",
      "body에 direction: ltr을 준다",
      "flex-direction을 column으로 바꾼다",
    ],
    answer: 0,
    explanation:
      "margin-left 같은 물리 방향은 dir이 바뀌어도 그대로다. 논리 속성은 글이 시작하는 쪽 기준이라 RTL에서 자동으로 뒤집힌다. 아이콘은 화살표처럼 방향을 뜻하는 것만 뒤집는다.",
    anchor: "오른쪽에서-왼쪽으로-쓰는-언어",
  },
];
