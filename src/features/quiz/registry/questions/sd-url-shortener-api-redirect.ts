import type { QuizQuestion } from "../types";

export const SD_URL_SHORTENER_API_REDIRECT: QuizQuestion[] = [
  {
    id: "sd-url-shortener-api-redirect-1",
    post: "sd-url-shortener-api-redirect",
    question: "단축 API가 `javascript:alert(1)` 같은 주소를 거절하는 이유는?",
    choices: [
      "주소가 너무 짧아 키를 만들 수 없기 때문이다",
      "62진수로 바꿀 수 없는 글자가 들어 있기 때문이다",
      "단축 링크를 누른 사람의 브라우저에서 스크립트가 실행될 수 있기 때문이다",
      "DB의 UNIQUE 제약을 어기기 때문이다",
    ],
    answer: 2,
    explanation:
      "리다이렉트는 사용자의 브라우저를 목적지로 보내므로, 목적지가 스크립트면 그 사용자에게서 실행될 수 있다. 그래서 http와 https 절대 주소만 받는다.",
    anchor: "서버-한-대와-표-하나로-시작하기",
  },
  {
    id: "sd-url-shortener-api-redirect-2",
    post: "sd-url-shortener-api-redirect",
    question: "Cache-Control 없이 301을 돌려주는 단축 링크를 같은 사람이 세 번 눌렀다. Chromium 실험에서 서버는 몇 번 요청을 받았나?",
    choices: ["0번", "1번", "3번", "6번"],
    answer: 1,
    explanation:
      "301은 기한을 말하지 않아도 브라우저가 저장해도 되는 응답이라, 두 번째부터는 저장된 답으로 바로 긴 주소로 간다. 헤더 없는 302는 저장되지 않아 세 번 다 서버에 왔다.",
    anchor: "301을-줄까-302를-줄까",
  },
  {
    id: "sd-url-shortener-api-redirect-3",
    post: "sd-url-shortener-api-redirect",
    question: "클릭을 매번 세고 싶어 302를 줬는데 `Cache-Control: max-age=60`도 함께 붙였다. 어떻게 될까?",
    choices: [
      "302는 절대 저장되지 않으니 클릭마다 서버에 온다",
      "브라우저가 302를 301로 바꿔 영구히 저장한다",
      "Cache-Control은 리다이렉트에 적용되지 않아 아무 변화가 없다",
      "60초 안의 클릭은 브라우저가 저장한 답을 써서 서버에 오지 않는다",
    ],
    answer: 3,
    explanation:
      "상태 코드는 헤더가 없을 때의 기본값만 정하고, 실제 저장 여부는 Cache-Control이 정한다. 실험에서도 max-age를 붙인 302는 세 번 중 한 번만, no-store를 붙인 301은 세 번 다 서버에 왔다.",
    anchor: "301을-줄까-302를-줄까",
  },
  {
    id: "sd-url-shortener-api-redirect-4",
    post: "sd-url-shortener-api-redirect",
    question: "하루 864만 개 생성, 링크 하나당 평균 20번 클릭이다. 리다이렉트의 평균 QPS는?",
    choices: ["100", "864", "2,000", "17,280"],
    answer: 2,
    explanation:
      "8,640,000을 하루 86,400초로 나누면 쓰기가 초당 100개고, 읽기는 그 20배인 2,000이다. 피크가 평균의 두 배라면 4,000으로 잡는다.",
    anchor: "하루-864만-개를-만든다면",
  },
  {
    id: "sd-url-shortener-api-redirect-5",
    post: "sd-url-shortener-api-redirect",
    question: "\"이 긴 주소가 이미 있나\" 조회가 Parallel Seq Scan으로 28ms 걸렸다. 본문에서 고른 해결과 그 한계로 맞는 것은?",
    choices: [
      "long_url에 해시 인덱스를 걸어 0.037ms로 줄었지만, 해시 인덱스는 UNIQUE로 만들 수 없다",
      "long_url에 B-tree UNIQUE 인덱스를 걸어 길이에 상관없이 해결했다",
      "short_key 인덱스를 지우고 다시 만들어 해결했다",
      "복제본을 늘려 Seq Scan을 나눠 처리했다",
    ],
    answer: 0,
    explanation:
      "긴 주소 전체를 B-tree에 넣으면 인덱스가 커지고 너무 긴 값은 넣지 못한다. 해시 인덱스는 같음 비교에 빠르지만 UNIQUE가 안 되니, 동시 중복까지 막으려면 해시 열을 따로 두고 UNIQUE를 건다.",
    anchor: "테이블은-키-하나로-찾게-만든다",
  },
  {
    id: "sd-url-shortener-api-redirect-6",
    post: "sd-url-shortener-api-redirect",
    question: "링크를 만든 직후 바로 눌렀더니 가끔 404가 난다. 가장 그럴듯한 원인은?",
    choices: [
      "301이 브라우저에 저장되어 있어서다",
      "읽기가 아직 새 행을 받지 못한 DB 복제본으로 갔기 때문이다",
      "62진수 키가 대소문자를 구분하지 않아서다",
      "로드 밸런서가 POST와 GET을 다른 서버로 보내서다",
    ],
    answer: 1,
    explanation:
      "새 링크는 주 DB에 쓰이고 복제본에는 잠깐 뒤에 도착한다. 만든 직후 캐시에 미리 넣거나 복제본에서 못 찾으면 주 DB에 다시 묻는다. 웹 서버는 무상태라 어느 서버로 가도 문제가 아니다.",
    anchor: "읽기가-쏟아질-때-리다이렉트-경로",
  },
  {
    id: "sd-url-shortener-api-redirect-7",
    post: "sd-url-shortener-api-redirect",
    question: "단축 서비스가 다른 단축 서비스의 링크를 목적지로 받지 않도록 막는 이유로 맞는 것은?",
    choices: [
      "다른 서비스의 키와 우리 키가 겹치기 때문이다",
      "301과 302를 섞어 쓰면 브라우저가 거절하기 때문이다",
      "목적지 도메인이 짧아 저장 공간이 낭비되기 때문이다",
      "리다이렉트가 이어져 목적지를 더 숨기고, 서로를 가리키면 끝없이 돌기 때문이다",
    ],
    answer: 3,
    explanation:
      "단축 링크를 겹치면 악성 목적지를 감추기 쉬워지고, 두 링크가 서로를 가리키면 리다이렉트가 반복된다. 피싱이 쌓이면 우리 도메인이 차단 목록에 올라 정상 링크까지 막힐 수 있다.",
    anchor: "남의-피싱-링크를-대신-보내-주지-않으려면",
  },
];
