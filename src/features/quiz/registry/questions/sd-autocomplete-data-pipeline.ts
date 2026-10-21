import type { QuizQuestion } from "../types";

export const SD_AUTOCOMPLETE_DATA_PIPELINE: QuizQuestion[] = [
  {
    id: "sd-autocomplete-data-pipeline-1",
    post: "sd-autocomplete-data-pipeline",
    question: "검색이 들어올 때마다 트라이를 고치지 않고 로그만 남기는 이유로 가장 알맞은 것은?",
    choices: [
      "검색 API가 트라이에 접근할 권한이 없기 때문이다",
      "검색 하나가 경로의 여러 노드 목록을 고쳐 질의와 부딪히고, 상위 목록은 천천히 바뀌어 대부분의 수정이 결과를 바꾸지 않기 때문이다",
      "로그가 트라이보다 빠르게 검색되기 때문이다",
      "트라이는 디스크에만 저장할 수 있기 때문이다",
    ],
    answer: 1,
    explanation:
      "초당 463번의 검색이 평균 15개 노드를 고치면 초당 7천 번 가까운 수정이 질의와 엇갈린다. 여러 질의 서버의 상태를 맞추기도 어렵다. 그래서 기록만 남기고 주기적으로 새로 굽는다.",
    anchor: "검색할-때마다-트라이를-고치면",
  },
  {
    id: "sd-autocomplete-data-pipeline-2",
    post: "sd-autocomplete-data-pipeline",
    question: "집계에서 정규화를 빼먹으면 어떤 일이 생기나?",
    choices: [
      "json, JSON, Json이 따로 세져 같은 검색어가 추천에 여러 번 뜨거나 표가 갈려 순위가 낮아진다",
      "집계가 더 빨라질 뿐 결과는 같다",
      "봇의 검색어가 자동으로 걸러진다",
      "접두사 표의 키 수가 줄어든다",
    ],
    answer: 0,
    explanation:
      "실험에서 친 그대로 세면 17만 개였던 검색어가 정규화 뒤 11만 6천 개로 줄었고, json은 여러 형태가 37,735 하나로 합쳐졌다. 정규화 규칙은 질의 서버와 똑같아야 한다.",
    anchor: "같은-검색어를-하나로-센다",
  },
  {
    id: "sd-autocomplete-data-pipeline-3",
    post: "sd-autocomplete-data-pipeline",
    question: "봇 하나가 같은 검색어를 5만 번 쳤다. 서로 다른 사용자 수로 세면 어떻게 되나?",
    choices: [
      "5만으로 세져 1등이 된다",
      "봇 계정이 자동으로 차단된다",
      "1명으로 세져 최소 사람 수 기준에 걸려 사라진다",
      "다른 검색어의 사람 수도 함께 줄어든다",
    ],
    answer: 2,
    explanation:
      "횟수로는 2등이었지만 사람 수는 1명이었다. 같은 사람의 반복은 한 번으로 치고, 최소 사람 수를 두면 반복 조작과 한두 명만 친 개인 정보가 추천에 뜨는 것을 함께 막는다.",
    anchor: "몇-번이-아니라-몇-명이-찾았나",
  },
  {
    id: "sd-autocomplete-data-pipeline-4",
    post: "sd-autocomplete-data-pipeline",
    question: "로그를 여러 대가 나눠 셀 때 시간순이 아니라 검색어 해시로 조각을 나누는 이유는?",
    choices: [
      "해시가 시간보다 계산이 빠르기 때문이다",
      "같은 검색어가 늘 같은 조각으로 가서, 조각별 결과를 이어 붙이기만 하면 되기 때문이다",
      "봇을 한 조각에 모으기 위해서다",
      "조각 수를 줄이기 위해서다",
    ],
    answer: 1,
    explanation:
      "시간순으로 나누면 같은 검색어가 모든 조각에 흩어져 숫자와 사용자 집합을 다시 합쳐야 한다. 해시로 나누면 조각끼리 검색어가 겹치지 않는다. 실험에서도 조각 크기가 고르게 나뉘었고 합친 결과가 한 번에 센 결과와 같았다.",
    anchor: "한-대로-안-되면-조각으로-나눠-센다",
  },
  {
    id: "sd-autocomplete-data-pipeline-5",
    post: "sd-autocomplete-data-pipeline",
    question: "새 접두사 표를 기존 키에 하나씩 덮어쓰며 올리면 어떤 문제가 생기나?",
    choices: [
      "Redis 메모리가 두 배로 늘어난다",
      "올리는 동안 re는 새 버전, red는 옛 버전처럼 섞여 한 글자 칠 때마다 추천이 들쭉날쭉해진다",
      "옛 버전으로 되돌리기가 더 쉬워진다",
      "질의 서버가 재시작해야 한다",
    ],
    answer: 1,
    explanation:
      "그래서 새 버전을 다른 이름(ac:v43:*)으로 다 올리고 검사한 뒤 포인터 하나만 바꾼다. 옛 버전을 남겨 두면 포인터만 되돌려 복구할 수 있다.",
    anchor: "새-버전으로-한-번에-바꾼다",
  },
  {
    id: "sd-autocomplete-data-pipeline-6",
    post: "sd-autocomplete-data-pipeline",
    question: "접두사 첫 글자로 네 샤드를 나누려 했더니 고르게 되지 않았다. 가장 알맞은 대응은?",
    choices: [
      "샤드를 둘로 줄인다",
      "알파벳 순서로 똑같이 6~7글자씩 나눈다",
      "무거운 글자는 둘째 글자까지 보고 더 나누고, 실제 비중을 재서 정한 경계를 샤드 지도로 관리한다",
      "가장 무거운 글자의 검색어를 버린다",
    ],
    answer: 2,
    explanation:
      "실험에서 s 하나가 17.9%라 글자 단위 경계로는 39.1%와 9.5% 같은 조각이 생겼다. sa~sl, sm~sz처럼 더 나누고, 경계가 주마다 바뀔 수 있으니 버전을 붙인 샤드 지도로 관리한다.",
    anchor: "접두사로-나눠-여러-서버에",
  },
  {
    id: "sd-autocomplete-data-pipeline-7",
    post: "sd-autocomplete-data-pipeline",
    question: "추천이 몇 주째 똑같은데 에러는 하나도 없다. 무엇을 의심해야 하나?",
    choices: [
      "굽는 작업이 실패해 포인터가 옛 버전을 계속 가리키고 있다",
      "브라우저 캐시 기한이 너무 짧다",
      "질의 서버의 디바운스가 길다",
      "정규화 규칙이 너무 엄격하다",
    ],
    answer: 0,
    explanation:
      "데이터 쪽 장애는 조용히 낡는 모습으로 나타난다. 현재 버전이 만들어진 시각을 지표로 두고 주기의 두 배를 넘으면 알림을 건다. 집계 입력 줄 수와 결과 검색어 수도 함께 기록한다.",
    anchor: "파이프라인이-고장-나면-보이는-것",
  },
];
