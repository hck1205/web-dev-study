import type { QuizQuestion } from "../types";

export const SD_NEWS_FEED_RETRIEVAL: QuizQuestion[] = [
  {
    id: "sd-news-feed-retrieval-1",
    post: "sd-news-feed-retrieval",
    question: "피드 ID 20개를 받아 본문을 하나씩 GET하던 코드를 MGET으로 바꿨더니 빨라졌다. 가장 큰 이유는?",
    choices: [
      "MGET은 본문을 압축해서 돌려주기 때문이다",
      "왕복이 21번에서 2번으로 줄었기 때문이다",
      "MGET은 Redis가 여러 스레드로 처리하기 때문이다",
      "MGET은 캐시에 없는 글을 DB에서 자동으로 채워 주기 때문이다",
    ],
    answer: 1,
    explanation:
      "목록을 받은 뒤 항목마다 다시 묻는 N+1 모양은 왕복 수가 페이지 크기만큼 늘어난다. 로컬에서도 1.114ms가 0.176ms로 줄었고, 기계 사이라면 차이가 더 벌어진다. MGET은 없는 키에 nil을 줄 뿐 DB를 대신 읽지 않는다.",
    anchor: "하나씩-물으면-왕복이-스물한-번",
  },
  {
    id: "sd-news-feed-retrieval-2",
    post: "sd-news-feed-retrieval",
    question: "1페이지를 읽는 사이 새 글 5개가 들어왔다. offset 20으로 2페이지를 요청하면 어떻게 되나?",
    choices: [
      "1페이지 끝의 글 5개가 다시 나온다",
      "새 글 5개가 2페이지 맨 앞에 나온다",
      "2페이지가 5개 적게 나온다",
      "아무 변화가 없다",
    ],
    answer: 0,
    explanation:
      "새 글이 맨 앞에 끼면 모든 글이 다섯 칸씩 뒤로 밀려서, 20번째 칸에 이미 본 글이 온다. 실험에서도 1085~1081 다섯 개가 겹쳤다. 커서는 마지막으로 본 글을 기억하므로 앞에 무엇이 끼든 겹치지 않는다.",
    anchor: "스크롤하는-동안-새-글이-들어오면",
  },
  {
    id: "sd-news-feed-retrieval-3",
    post: "sd-news-feed-retrieval",
    question: "정렬된 셋의 점수와 멤버를 모두 19자리 Snowflake ID로 두고 BYSCORE 커서를 썼더니 가끔 글이 사라진다. 원인은?",
    choices: [
      "ZRANGE가 LIMIT을 무시하기 때문이다",
      "멤버 문자열이 너무 길어 잘리기 때문이다",
      "점수가 배정밀도 실수라 같은 밀리초의 ID들이 같은 점수로 반올림되고, 커서보다 작은 점수를 찾을 때 함께 빠지기 때문이다",
      "Snowflake ID가 시간순이 아니기 때문이다",
    ],
    answer: 2,
    explanation:
      "double은 2의 53제곱까지만 정수를 정확히 담는다. …272와 …273이 같은 점수가 되어 '(…273' 조건에서 …272도 빠졌다. 점수는 밀리초 시각, 멤버는 ID로 나누고 커서 멤버의 순위로 다음 페이지를 찾는다.",
    anchor: "redis-점수에-64비트-id를-넣으면",
  },
  {
    id: "sd-news-feed-retrieval-4",
    post: "sd-news-feed-retrieval",
    question: "글 ID 500개짜리 피드를 정렬된 셋으로 두었더니 리스트보다 메모리를 12배 썼다. zset-max-listpack-entries를 512로 올리면?",
    choices: [
      "메모리도 줄고 쓰기도 빨라진다",
      "메모리는 크게 줄지만 ZADD가 느려진다",
      "메모리는 그대로고 읽기만 빨라진다",
      "정렬이 깨져서 쓸 수 없다",
    ],
    answer: 1,
    explanation:
      "항목이 기준 이하면 빽빽한 listpack에 담겨 항목당 127바이트가 21바이트로 줄었다. 대신 중간에 넣을 때 뒤를 밀어야 해서 ZADD가 0.55µs에서 14.37µs로 느려졌다. 쓰기가 많은 피드라면 이 차이를 함께 따진다.",
    anchor: "피드-하나가-쓰는-메모리",
  },
  {
    id: "sd-news-feed-retrieval-5",
    post: "sd-news-feed-retrieval",
    question: "한 달 만에 돌아온 사용자의 피드 캐시가 비어 있다. 피드를 다시 만들 때 짧은 락(SET NX)을 거는 이유는?",
    choices: [
      "다른 사용자가 그 피드를 읽지 못하게 하려고",
      "팬아웃 작업자가 그 피드에 쓰지 못하게 영구히 막으려고",
      "같은 사용자의 재구성이 여러 요청에서 동시에 돌아 DB로 몰리는 것을 막으려고",
      "커서를 서명하려고",
    ],
    answer: 2,
    explanation:
      "앱이 여러 요청을 동시에 보내거나 캐시 장애로 많은 피드가 한꺼번에 비면 같은 재구성이 겹쳐 DB가 몰린다. 한 요청만 재구성하고 나머지는 잠깐 기다렸다 캐시를 읽게 한다.",
    anchor: "500개-너머로-내려가면",
  },
  {
    id: "sd-news-feed-retrieval-6",
    post: "sd-news-feed-retrieval",
    question: "새 글이 생길 때마다 화면 맨 위에 바로 끼워 넣지 않고 '새 글 5개' 띠만 보여 주는 이유는?",
    choices: [
      "읽던 글이 아래로 밀려 사용자가 자리를 잃지 않게 하려고",
      "새 글의 본문을 가져올 수 없어서",
      "커서가 새 글을 가리킬 수 없어서",
      "서버가 새 글 수를 셀 수 없어서",
    ],
    answer: 0,
    explanation:
      "새 글을 바로 끼우면 읽던 위치가 밀린다. 개수만 싸게 세어 띠로 알리고, 사용자가 누를 때 새 글을 가져와 붙인다. 아래쪽 커서는 그대로라 계속 내려도 겹치지 않는다.",
    anchor: "맨-위로-당겨-새-글을-볼-때",
  },
];
