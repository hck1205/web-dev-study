import type { QuizQuestion } from "../types";

export const SD_WEB_CRAWLER_POLITENESS_DEDUP: QuizQuestion[] = [
  {
    id: "sd-web-crawler-politeness-dedup-1",
    post: "sd-web-crawler-politeness-dedup",
    question:
      "호스트별 줄을 두고 같은 호스트에는 한 번에 하나만 보내도록 바꿨다. 쉬는 줄을 만났을 때 큐 선택기가 해야 할 일은?",
    choices: [
      "그 줄의 허용 시각이 될 때까지 기다린다",
      "기다리지 않고 지금 보낼 수 있는 다른 호스트의 줄을 고른다",
      "그 줄의 URL을 앞쪽 큐로 되돌린다",
      "쉬는 시간을 무시하고 한 번만 더 보낸다",
    ],
    answer: 1,
    explanation:
      "선택기가 쉬는 줄 앞에서 기다리면 워커가 놀아서 전체 속도가 떨어진다. 다음 허용 시각이 가장 이른 줄을 꺼내면 사이트 하나에는 천천히, 전체로는 넓게 돌 수 있다. 줄을 최소 힙에 넣으면 이 선택이 빠르다.",
    anchor: "호스트마다-줄을-하나씩-두는-구조",
  },
  {
    id: "sd-web-crawler-politeness-dedup-2",
    post: "sd-web-crawler-politeness-dedup",
    question: "우선순위(앞쪽 큐)와 예의(뒤쪽 큐)를 따로 두는 이유로 알맞은 것은?",
    choices: [
      "한 줄로 처리하면 점수가 높은 사이트의 URL이 앞에 몰려 그 사이트에 요청이 몰린다",
      "앞쪽 큐는 메모리에, 뒤쪽 큐는 디스크에 둬야 해서",
      "뒤쪽 큐만으로는 robots.txt를 확인할 수 없어서",
      "앞쪽 큐가 URL 중복 확인을 대신하기 때문에",
    ],
    answer: 0,
    explanation:
      "중요한 사이트일수록 점수가 높은 URL이 많아서, 점수 순서만 따르면 그 사이트에 요청이 쏠린다. 앞쪽 큐는 무엇을 먼저 꺼낼지, 뒤쪽 큐는 같은 호스트에 얼마나 자주 갈지를 맡는다.",
    anchor: "중요한-페이지를-먼저-꺼내는-앞쪽-큐",
  },
  {
    id: "sd-web-crawler-politeness-dedup-3",
    post: "sd-web-crawler-politeness-dedup",
    question:
      "robots.txt에 `User-agent: *` 그룹(Disallow: /private/)과 `User-agent: studybot` 그룹(Disallow: /tmp/)이 있다. studybot이 /private/memo를 요청하면?",
    choices: [
      "두 그룹을 합쳐 적용하므로 금지된다",
      "더 긴 그룹이 이기므로 금지된다",
      "자기 이름과 맞는 그룹만 따르므로 허용된다",
      "그룹이 둘이면 파일 전체를 무시하고 금지로 본다",
    ],
    answer: 2,
    explanation:
      "크롤러는 자기 이름과 맞는 그룹이 있으면 그 그룹만 쓰고 `*` 그룹은 보지 않는다. 그래서 studybot에게는 /private/가 열린다. 운영자가 공통 규칙도 지키게 하려면 studybot 그룹에 다시 적어야 한다.",
    anchor: "robotstxt를-먼저-읽는다",
  },
  {
    id: "sd-web-crawler-politeness-dedup-4",
    post: "sd-web-crawler-politeness-dedup",
    question: "robots.txt를 요청했더니 503이 돌아왔다. 표준(RFC 9309)이 권하는 처리는?",
    choices: [
      "파일이 없는 것으로 보고 제한 없이 크롤링한다",
      "사이트 전체를 금지로 보고 크롤링하지 않는다",
      "지난번 파일을 무기한 계속 쓴다",
      "Crawl-delay를 10초로 두고 크롤링한다",
    ],
    answer: 1,
    explanation:
      "5xx는 서버가 아프다는 뜻이라 규칙을 모르는 채로 내려받으면 안 되니 전체 금지로 본다. 404처럼 파일이 없는 경우와 다르다. 받아 둔 파일은 24시간 넘게 캐시하지 않는 것이 권장이다.",
    anchor: "robotstxt를-먼저-읽는다",
  },
  {
    id: "sd-web-crawler-politeness-dedup-5",
    post: "sd-web-crawler-politeness-dedup",
    question: "URL 방문 기록을 블룸 필터로 바꿨다. 블룸 필터의 오답이 크롤러에 주는 영향은?",
    choices: [
      "같은 URL을 두 번 내려받게 된다",
      "넣은 URL을 없다고 해서 무한 루프에 빠진다",
      "콘텐츠 중복 확인이 틀리게 된다",
      "본 적 없는 URL을 봤다고 해서, 그 페이지를 영영 내려받지 못할 수 있다",
    ],
    answer: 3,
    explanation:
      "블룸 필터는 넣은 것을 없다고 하지 않고, 넣지 않은 것을 있다고 가끔 잘못 답한다. 크롤러에서는 처음 보는 URL이 프런티어에 못 들어가 페이지를 놓친다는 뜻이다. 놓치면 안 되면 있다고 할 때만 디스크 기록을 한 번 더 본다.",
    anchor: "수십억-개-url을-봤는지-기억하기",
  },
  {
    id: "sd-web-crawler-politeness-dedup-6",
    post: "sd-web-crawler-politeness-dedup",
    question: "조회수 숫자만 다른 두 페이지를 중복으로 거르고 싶다. 어떤 방법이 맞나?",
    choices: [
      "SHA-256 본문 해시를 비교한다",
      "URL을 한 모양으로 맞춘 뒤 비교한다",
      "SimHash 지문을 만들어 다른 비트 수가 작으면 같은 페이지로 본다",
      "ETag를 비교한다",
    ],
    answer: 2,
    explanation:
      "SHA-256은 한 글자만 달라도 완전히 다른 값이 나와 못 거른다. SimHash는 조각 해시의 다수결로 만들어서 내용이 조금 바뀌면 지문도 몇 비트만 바뀐다. 실험에서 조회수만 다른 페이지는 64비트 중 3비트, 다른 기사는 37비트가 달랐다.",
    anchor: "내용이-거의-같은-페이지",
  },
  {
    id: "sd-web-crawler-politeness-dedup-7",
    post: "sd-web-crawler-politeness-dedup",
    question: "\"다음 달\" 링크가 끝없이 이어지는 달력 페이지에 URL 중복 확인이 도움이 안 되는 이유는?",
    choices: [
      "모든 URL이 정말로 처음 보는 주소라서",
      "달력 페이지는 robots.txt로 막혀 있어서",
      "쿼리 문자열이 있는 URL은 중복 확인을 건너뛰어서",
      "달력 페이지의 본문 해시가 모두 같아서",
    ],
    answer: 0,
    explanation:
      "트랩은 내려받을 때마다 새 주소를 만들어서 중복 확인을 늘 통과한다. 그래서 깊이, 길이, 경로 반복 같은 규칙과 호스트별 페이지 예산으로 따로 끊는다.",
    anchor: "끝없이-새-주소를-만드는-페이지",
  },
];
