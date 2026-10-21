import type { QuizQuestion } from "../types";

export const SD_AUTOCOMPLETE_TRIE: QuizQuestion[] = [
  {
    id: "sd-autocomplete-trie-1",
    post: "sd-autocomplete-trie",
    question: "text_pattern_ops 인덱스를 건 뒤에도 `LIKE 'r%' ORDER BY cnt DESC LIMIT 5`가 비싼 이유는?",
    choices: [
      "LIKE는 인덱스를 전혀 쓰지 못하기 때문이다",
      "인덱스로 r로 시작하는 범위는 찾지만, 그 안의 1만 7천여 줄을 횟수로 정렬해야 다섯 개를 고를 수 있기 때문이다",
      "LIMIT 5가 무시되기 때문이다",
      "cnt 열이 bigint라 비교가 느리기 때문이다",
    ],
    answer: 1,
    explanation:
      "실행 계획에서 인덱스는 'r' 이상 's' 미만 범위를 잘라 17,208줄을 찾았지만, 인덱스는 횟수 순서를 모르니 모두 정렬했다. 그래서 가장 먼저 치는 짧은 접두사가 가장 비싸다.",
    anchor: "빈도표-하나와-like-하나로-시작하기",
  },
  {
    id: "sd-autocomplete-trie-2",
    post: "sd-autocomplete-trie",
    question: "노드 목록 없이 접두사 노드 아래를 전부 뒤지는 트라이에서 `r` 질의가 61ms나 걸린 이유는?",
    choices: [
      "r 노드를 찾는 데 오래 걸렸기 때문이다",
      "자식을 해시 맵으로 두었기 때문이다",
      "r 아래의 노드 8만여 개를 모두 돌고 정렬했기 때문이다",
      "Node가 트라이를 디스크에서 읽었기 때문이다",
    ],
    answer: 2,
    explanation:
      "출발 노드는 한 번 내려가면 찾지만, 그 아래가 넓으면 모두 돌아야 한다. r은 88,862개 노드를 방문했다. 노드마다 상위 목록을 적어 두면 아래가 얼마나 넓든 목록만 읽는다.",
    anchor: "접두사-아래를-전부-뒤지면",
  },
  {
    id: "sd-autocomplete-trie-3",
    post: "sd-autocomplete-trie",
    question: "부모 노드의 상위 5개를 만들 때 자식마다 그 자식의 상위 5개만 보면 충분한 이유는?",
    choices: [
      "자식의 목록 밖에 있는 검색어는 그 자식 아래에서 이미 5등 밖이라 부모에서도 5등 안에 들 수 없기 때문이다",
      "자식이 5개를 넘지 않기 때문이다",
      "부모는 자기 검색어만 보면 되기 때문이다",
      "검색어 횟수가 모두 다르기 때문이다",
    ],
    answer: 0,
    explanation:
      "부모 아래의 검색어는 모두 어느 한 자식 아래에 있다. 그 자식 안에서 5등 밖이면 위에 5개가 이미 있으니 부모에서도 5등 밖이다. 그래서 목록을 아래에서 위로 쌓을 수 있다.",
    anchor: "노드마다-상위-5개를-적어-둔다",
  },
  {
    id: "sd-autocomplete-trie-4",
    post: "sd-autocomplete-trie",
    question: "노드마다 상위 목록을 둔 트라이를 검색이 들어올 때마다 고치지 않고 주기적으로 새로 만드는 이유는?",
    choices: [
      "트라이는 한 번 만들면 고칠 수 없는 구조이기 때문이다",
      "검색어 하나의 횟수가 바뀌면 그 경로의 모든 노드 목록을 다시 계산해야 할 수 있어, 초당 수천 번 고치면 쓰기가 읽기보다 바빠지기 때문이다",
      "메모리를 아끼기 위해서다",
      "브라우저 캐시와 맞추기 위해서다",
    ],
    answer: 1,
    explanation:
      "redis kubernetes의 횟수가 늘면 r, re, red부터 끝까지 16개 노드의 목록이 바뀔 수 있다. 그래서 검색 기록을 모아 두었다가 새 트라이를 통째로 만들어 바꿔 끼운다.",
    anchor: "노드마다-상위-5개를-적어-둔다",
  },
  {
    id: "sd-autocomplete-trie-5",
    post: "sd-autocomplete-trie",
    question: "`닭갈비`를 치는 중 입력창이 `달`일 때 음절 문자열로 접두사를 비교하면 어떻게 되나?",
    choices: [
      "닭갈비가 정상적으로 추천된다",
      "오류가 난다",
      "달은 닭갈비의 접두사가 아니라 그 순간 닭갈비 추천이 사라진다",
      "모든 ㄷ 검색어가 추천된다",
    ],
    answer: 2,
    explanation:
      "두벌식 입력에서는 ㄷ, 다, 달, 닭 순으로 글자가 바뀐다. 문자열로는 달과 닭이 다른 글자라 추천이 끊긴다. NFD로도 겹받침 ㄺ이 부호 하나라 부족하고, 키보드 입력 순서의 자모로 풀어야 모든 순간에 맞는다.",
    anchor: "한글은-치는-동안-글자가-바뀐다",
  },
  {
    id: "sd-autocomplete-trie-6",
    post: "sd-autocomplete-trie",
    question: "re 요청의 응답이 redis 요청의 응답보다 늦게 도착했다. 브라우저는 어떻게 해야 하나?",
    choices: [
      "도착한 순서대로 화면을 갱신한다",
      "응답에 담긴 접두사가 지금 입력과 다르면 버린다",
      "두 응답을 합쳐서 보여 준다",
      "서버에 re를 다시 요청한다",
    ],
    answer: 1,
    explanation:
      "응답이 보낸 순서대로 온다는 보장이 없어 늦은 답이 최신 답을 덮어쓸 수 있다. 이전 요청을 AbortController로 취소하고, 응답의 접두사가 입력창과 같을 때만 그린다.",
    anchor: "키를-누를-때마다-요청을-보내지-않는다",
  },
  {
    id: "sd-autocomplete-trie-7",
    post: "sd-autocomplete-trie",
    question: "부적절한 검색어가 추천에 떴다. 다음 주 재생성을 기다리지 않고 바로 막는 방법은?",
    choices: [
      "질의 결과와 응답 사이에 둔 차단 목록에 추가한다",
      "브라우저 캐시를 지운다",
      "그 검색어의 횟수를 0으로 바꿔 트라이를 즉시 수정한다",
      "질의 서버를 재시작한다",
    ],
    answer: 0,
    explanation:
      "거르기 단계는 트라이와 따로 있어서 목록에 넣는 즉시 반영된다. 트라이 데이터에서는 다음 재생성 때 지운다. 거르면 개수가 줄 수 있어 노드에는 넉넉히 적어 둔다.",
    anchor: "서버-쪽-경로와-거르는-단계",
  },
];
