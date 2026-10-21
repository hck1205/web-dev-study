import type { QuizQuestion } from "../types";

export const SD_LEADERBOARD_SORTED_SET: QuizQuestion[] = [
  {
    id: "sd-leaderboard-sorted-set-1",
    post: "sd-leaderboard-sorted-set",
    question:
      "PostgreSQL에 (month, score DESC) 인덱스를 만든 뒤 상위 10명 조회는 0.08ms가 됐는데, 하위권 사용자의 순위 조회는 여전히 50ms가 걸린다. 왜 그런가?",
    choices: [
      "인덱스가 내림차순이라 오름차순 조회에는 쓰이지 않아서",
      "순위를 구하려면 나보다 점수가 높은 사람을 인덱스에서 하나씩 세야 해서",
      "count(*)는 항상 테이블 전체를 읽어서",
      "하위권 사용자는 인덱스에 들어 있지 않아서",
    ],
    answer: 1,
    explanation:
      "B-트리 인덱스는 어떤 점수가 어디서 시작하는지는 빨리 찾지만 그 앞에 몇 개가 있는지는 세어야 안다. 실행 계획에서도 97만 등의 순위를 구할 때 Index Only Scan이 97만 줄을 읽었다. 그래서 순위가 낮을수록 느리다.",
    anchor: "내-순위는-내-위에-몇-명이-있는지-세는-일",
  },
  {
    id: "sd-leaderboard-sorted-set-2",
    post: "sd-leaderboard-sorted-set",
    question: "Redis 정렬된 셋에서 ZREVRANK가 O(log N)인 이유로 가장 알맞은 것은?",
    choices: [
      "모든 멤버의 순위를 해시 테이블에 미리 저장해 두어서",
      "명령을 여러 스레드로 나눠 세어서",
      "스킵 리스트의 각 지름길이 건너뛰는 칸 수를 기록해, 내려가며 더하면 순위가 되어서",
      "점수가 바뀔 때마다 전체를 다시 정렬해 두어서",
    ],
    answer: 2,
    explanation:
      "Redis 스킵 리스트는 화살표마다 맨 아래층에서 몇 칸을 건너뛰는지(span)를 적어 둔다. 멤버를 찾아 내려가며 지나온 칸 수를 더하면 앞사람을 하나씩 세지 않고도 순위가 나온다. 순위를 해시에 저장하면 점수 하나가 바뀔 때 많은 순위를 고쳐야 한다.",
    anchor: "정렬된-셋이-늘-줄-서-있는-이유",
  },
  {
    id: "sd-leaderboard-sorted-set-3",
    post: "sd-leaderboard-sorted-set",
    question:
      "ZADD lb 30 amy 30 bob 30 cat 40 eve 후 ZREVRANK lb amy는 무엇을 돌려주나? 요구 사항은 '점수가 같으면 같은 순위'다.",
    choices: [
      "1을 돌려주고, 요구대로 공동 2위다",
      "0을 돌려준다. 동점이면 먼저 넣은 순서가 앞이다",
      "오류가 난다. 동점이 있으면 순위를 정할 수 없다",
      "3을 돌려주고, 요구대로라면 ZCOUNT lb (30 +inf에 1을 더한 공동 2위를 보여 줘야 한다",
    ],
    answer: 3,
    explanation:
      "동점은 멤버 이름 사전순으로 서고 REV가 그 순서를 뒤집어 cat, bob, amy가 된다. 그래서 amy는 0부터 세어 3, 화면으로는 4위가 된다. 같은 점수를 같은 순위로 보이려면 자기보다 큰 점수의 사람 수를 ZCOUNT로 세어 1을 더한다.",
    anchor: "0부터-세는-순위와-공동-순위",
  },
  {
    id: "sd-leaderboard-sorted-set-4",
    post: "sd-leaderboard-sorted-set",
    question:
      "운영 도구가 100만 명 순위표를 내려받으려고 ZREVRANGE lb 0 -1 WITHSCORES를 실행했다. 무슨 일이 생기나?",
    choices: [
      "명령이 끝날 때까지 다른 클라이언트의 요청이 모두 기다린다",
      "그 도구만 느리고 다른 요청에는 영향이 없다",
      "Redis가 자동으로 1,000개씩 나눠 보내 영향이 작다",
      "Redis가 메모리 부족으로 키를 지운다",
    ],
    answer: 0,
    explanation:
      "Redis는 명령을 한 줄로 세워 하나씩 처리하므로 0.6~0.8초 걸린 전체 조회 동안 다른 요청도 멈췄다. 실험에서 평소 0.24ms인 ZREVRANK가 최대 619ms를 기다렸다. 전체는 원본 DB에서 뽑거나 범위를 나눠 읽는다.",
    anchor: "한-번에-다-꺼내면-모두가-멈춘다",
  },
  {
    id: "sd-leaderboard-sorted-set-5",
    post: "sd-leaderboard-sorted-set",
    question: "게임 서버가 응답을 못 받아 같은 판 결과를 다시 보낼 때 점수가 두 번 오르지 않게 하는 방법은?",
    choices: [
      "ZINCRBY 대신 ZADD를 쓴다",
      "게임 서버의 재시도를 끈다",
      "판 ID로 SET NX 기록을 남기고, 그 확인과 ZINCRBY를 Lua 스크립트 하나로 묶는다",
      "ZINCRBY 전에 ZSCORE로 점수를 읽어 비교한다",
    ],
    answer: 2,
    explanation:
      "ZINCRBY는 같은 요청을 두 번 받으면 두 번 더한다. 판 ID 기록과 더하기를 한 스크립트로 묶으면 중간에 다른 명령이 끼지 못하고, 두 번째 요청은 기록이 있어 그냥 돌아간다. ZSCORE로 읽고 비교하는 방식은 두 요청이 동시에 오면 둘 다 통과한다.",
    anchor: "같은-판-결과가-두-번-오면",
  },
  {
    id: "sd-leaderboard-sorted-set-6",
    post: "sd-leaderboard-sorted-set",
    question: "앱이 '나 이겼어'라고 리더보드 서비스에 직접 점수를 올리는 설계의 가장 큰 문제는?",
    choices: [
      "앱과 서버 사이 요청을 사용자가 바꿔 점수를 조작할 수 있다",
      "Redis가 앱에서 오는 연결을 받지 못한다",
      "정렬된 셋의 점수가 실수라 정밀도가 떨어진다",
      "앱이 많아지면 순위가 0부터 세어진다",
    ],
    answer: 0,
    explanation:
      "프록시를 끼우면 앱이 보내는 요청은 얼마든지 고칠 수 있다. 그래서 승패는 판을 돌린 게임 서버가 판정하고, 점수 쓰기 API는 내부망에서만 부를 수 있게 막는다. 앱에는 읽기 API만 연다.",
    anchor: "점수는-게임-서버만-올린다",
  },
];
