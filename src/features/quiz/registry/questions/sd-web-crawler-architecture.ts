import type { QuizQuestion } from "../types";

export const SD_WEB_CRAWLER_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "sd-web-crawler-architecture-1",
    post: "sd-web-crawler-architecture",
    question:
      "작은 사이트를 크롤링했더니 /docs/intro와 /docs/intro?ref=nav가 둘 다 내려받아졌고, 두 번째는 저장되지 않았다. 무엇이 두 번째를 걸렀나?",
    choices: [
      "URL 중복 확인. 두 주소가 같은 URL로 판단됐다",
      "URL 필터. 쿼리 문자열이 붙은 주소를 막았다",
      "콘텐츠 중복 확인. 주소는 달라도 본문 해시가 같았다",
      "robots.txt. ref 매개변수를 금지했다",
    ],
    answer: 2,
    explanation:
      "두 주소는 문자열이 달라서 URL 중복 확인을 통과했고 둘 다 내려받아졌다. 서버가 ref를 무시하고 같은 HTML을 줬기 때문에 본문 해시가 같았고, 콘텐츠 중복 확인이 두 번째를 걸렀다. 내려받기 전에는 알 수 없는 중복이라 두 확인이 모두 필요하다.",
    anchor: "서버-한-대-반복문-하나로-만든-크롤러",
  },
  {
    id: "sd-web-crawler-architecture-2",
    post: "sd-web-crawler-architecture",
    question: "크롤러가 그래프 탐색으로 DFS보다 BFS를 기본으로 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "BFS는 같은 사이트의 링크를 몰아서 내려받아 빠르다",
      "웹은 깊이에 끝이 없어 DFS는 함정에 빠지기 쉽고, 시드 가까운 페이지가 대체로 더 중요하다",
      "BFS는 URL 중복 확인이 필요 없다",
      "DFS는 프런티어를 디스크에 둘 수 없다",
    ],
    answer: 1,
    explanation:
      "달력처럼 끝없이 이어지는 링크에 DFS가 들어가면 나오지 못하고, 시드에서 가까운 페이지일수록 중요한 경우가 많다. 오히려 BFS는 같은 사이트 링크가 줄줄이 붙어 한 사이트에 요청이 몰리는 문제가 있어서, 호스트별 줄로 보완한다.",
    anchor: "넓게-먼저-도는-이유",
  },
  {
    id: "sd-web-crawler-architecture-3",
    post: "sd-web-crawler-architecture",
    question:
      "다운로더에 연결 시간 제한만 걸어 두었다. 헤더만 보내고 본문을 10초 뒤에 보내는 서버를 만나면 어떻게 되나?",
    choices: [
      "연결은 금방 맺어졌으니 연결 제한으로는 못 끊고, 다운로더가 붙잡힌다",
      "연결 제한이 본문까지 감시하므로 바로 끊긴다",
      "fetch가 자동으로 1초 뒤 끊는다",
      "DNS 캐시가 그 서버를 건너뛴다",
    ],
    answer: 0,
    explanation:
      "연결 단계는 이미 끝났기 때문에 연결 시간 제한은 아무 역할을 하지 못한다. 그래서 응답 전체를 정해진 시간 안에 받도록 AbortController 같은 전체 기한을 따로 건다. 크기 제한도 함께 걸어 끝없이 흘러나오는 페이지를 막는다.",
    anchor: "다운로더는-느리고-이상한-서버를-만난다",
  },
  {
    id: "sd-web-crawler-architecture-4",
    post: "sd-web-crawler-architecture",
    question: "크롤 서버를 여러 대로 늘릴 때 URL을 무작위가 아니라 호스트 이름의 해시로 나누는 가장 큰 이유는?",
    choices: [
      "URL 문자열보다 호스트 이름이 짧아 해시가 빠르다",
      "같은 사이트의 요청이 한 서버로 모여야 사이트별 요청 속도를 한 곳에서 지킬 수 있다",
      "호스트별로 나누면 콘텐츠 중복 확인이 필요 없어진다",
      "DNS 서버가 호스트별 요청만 받아 준다",
    ],
    answer: 1,
    explanation:
      "무작위로 나누면 서버마다 따로 속도를 지켜도 사이트는 여러 서버에서 동시에 요청을 받는다. 호스트 해시로 나누면 한 사이트로 가는 요청이 늘 같은 서버를 거치므로 그 서버만 속도를 지키면 된다. DNS 캐시 적중률이 오르는 것은 덤이다.",
    anchor: "서버-여러-대로-나누는-기준은-호스트다",
  },
  {
    id: "sd-web-crawler-architecture-5",
    post: "sd-web-crawler-architecture",
    question:
      "프런티어에서 꺼낸 URL을 바로 지우지 않고 기한을 건 임대 상태로 두었다. 이 방식에서 저장을 URL 해시 키 덮어쓰기로 만들어야 하는 이유는?",
    choices: [
      "덮어쓰기가 추가 쓰기보다 디스크를 덜 쓴다",
      "URL 해시를 키로 쓰면 robots.txt를 지킬 수 있어서",
      "임대 기한이 지나면 저장소가 자동으로 지워져서",
      "기한이 지나 다른 서버가 다시 처리하면 같은 URL이 두 번 저장될 수 있어서",
    ],
    answer: 3,
    explanation:
      "임대 방식은 적어도 한 번 처리를 보장하지만, 저장까지 마치고 완료 신호 직전에 죽으면 같은 URL을 다른 서버가 또 처리한다. 같은 키로 덮어쓰면 두 번 처리돼도 결과가 하나라 문제가 없다.",
    anchor: "서버가-죽어도-처음부터-다시-하지-않게",
  },
  {
    id: "sd-web-crawler-architecture-6",
    post: "sd-web-crawler-architecture",
    question:
      "한 달 3억 페이지(평균 80KB)를 내려받는 크롤러에서 먼저 신경 써야 할 병목으로 글이 짚은 것은?",
    choices: [
      "평균 74Mbps 대역폭이라 네트워크 카드가 먼저 찬다",
      "초당 116개 쓰기라 DB가 먼저 찬다",
      "페이지당 지연 때문에 동시에 수백 개의 서로 다른 사이트에 요청을 열어 둬야 한다",
      "CPU가 HTML 해시를 계산하느라 먼저 찬다",
    ],
    answer: 2,
    explanation:
      "대역폭은 74Mbps 정도라 서버 한 대로도 버틴다. 페이지 하나에 1초쯤 걸리는데 최대 초당 232개를 받으려면 동시에 그만큼 요청이 떠 있어야 하고, 사이트마다 한 번에 하나만 보내야 하니 서로 다른 사이트 수백 개를 동시에 돌아야 한다.",
    anchor: "몇-대가-필요한지-계산해-보기",
  },
];
