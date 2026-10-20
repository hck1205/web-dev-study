import type { QuizQuestion } from "../types";

export const EVENTUAL_CONSISTENCY: QuizQuestion[] = [
  {
    id: "eventual-consistency-1",
    post: "eventual-consistency",
    question:
      "복제본 토큰으로 쓰려고 트랜잭션 안에서 pg_current_wal_lsn()을 읽었다. 복제본에서 '재생 위치 >= 토큰' 검사는 통과하는데 옛 값이 보인다. 왜인가?",
    choices: [
      "pg_current_wal_lsn()은 복제본에서만 정확한 값을 돌려주기 때문",
      "트랜잭션 안에서 읽은 위치는 커밋 기록보다 앞이라, 복제본이 UPDATE까지만 재생하고 커밋은 아직 재생하지 않았을 수 있기 때문",
      "LSN은 문자열이라 크기 비교가 사전 순으로 되기 때문",
      "복제본이 WAL을 받지 못했기 때문",
    ],
    answer: 1,
    explanation:
      "커밋 기록은 트랜잭션 안에서 읽은 위치보다 뒤에 쓰인다. 복제본은 UPDATE 기록까지 재생해도 커밋을 재생하기 전에는 새 값을 보여 주지 않는다. 토큰은 커밋이 끝난 뒤에 읽어야 한다.",
    anchor: "세션에-위치를-들고-다니게-한다",
  },
  {
    id: "eventual-consistency-2",
    post: "eventual-consistency",
    question:
      "프라이머리에서 새 닉네임을 본 직후, 새로고침하니 복제본에서 옛 닉네임이 나왔다. 어떤 세션 보장이 깨졌나?",
    choices: ["단조 쓰기", "쓰기가 읽기를 따른다", "단조 읽기", "선형화 가능성만 깨졌고 세션 보장은 지켜졌다"],
    answer: 2,
    explanation:
      "한 번 본 상태보다 옛 상태를 다시 보지 않는다는 단조 읽기가 깨졌다. 읽을 때도 본 위치로 세션 토큰을 앞으로 밀어 주면, 그보다 뒤처진 복제본을 건너뛰어 막을 수 있다.",
    anchor: "사용자-한-명이-기대하는-네-가지",
  },
  {
    id: "eventual-consistency-3",
    post: "eventual-consistency",
    question: "프라이머리 하나에 비동기 복제본 여럿인 구조에서 자동으로 지켜지는 세션 보장은?",
    choices: [
      "내 쓰기 읽기와 단조 읽기",
      "단조 쓰기와 쓰기가 읽기를 따른다",
      "네 가지 모두",
      "아무것도 지켜지지 않는다",
    ],
    answer: 1,
    explanation:
      "모든 쓰기가 프라이머리 한 곳의 WAL에 한 줄로 들어가고 복제본은 그 순서대로 재생하니 쓰기 순서와 관련된 두 보장은 공짜다. 반면 읽기를 복제본으로 보내면 내 쓰기 읽기와 단조 읽기는 깨질 수 있어 직접 챙겨야 한다.",
    anchor: "사용자-한-명이-기대하는-네-가지",
  },
  {
    id: "eventual-consistency-4",
    post: "eventual-consistency",
    question:
      "N=3, W=1, R=1인 저장소에서 쓰기 성공 직후 바로 읽으면 옛 값을 볼 확률이 약 2/3이다. 이 숫자가 뜻하는 것으로 가장 알맞은 것은?",
    choices: [
      "이 설정은 옛 값을 영원히 돌려줄 수 있으니 쓰면 안 된다",
      "성공 순간 새 값을 가진 복제본은 하나뿐이라 무작위 하나를 읽으면 대개 못 보지만, 시간이 조금 지나면 확률이 빠르게 떨어진다",
      "R + W > N이라서 항상 최신 값을 읽는다",
      "복제 지연과 상관없이 확률은 항상 2/3이다",
    ],
    answer: 1,
    explanation:
      "시뮬레이션에서 2/3이던 확률은 50ms 뒤 약 5%, 100ms 뒤 0.5% 아래로 떨어졌다. 그래서 위험은 쓴 직후 같은 사람이 다시 읽는 순간에 몰리고, 세션 토큰이 그 순간을 겨냥한다.",
    anchor: "여러-대가-쓰기를-받는-저장소에서는",
  },
  {
    id: "eventual-consistency-5",
    post: "eventual-consistency",
    question: "Cassandra에서 repair를 gc_grace_seconds보다 드물게 돌리면 생길 수 있는 사고는?",
    choices: [
      "힌트가 너무 많이 쌓여 쓰기가 거절된다",
      "읽기 복구가 꺼진다",
      "삭제를 못 받은 복제본의 옛 행이 톰스톤 정리 뒤 다시 퍼져 지운 데이터가 되살아난다",
      "복제본 수 N이 자동으로 줄어든다",
    ],
    answer: 2,
    explanation:
      "삭제는 톰스톤으로 퍼지고 gc_grace_seconds가 지나면 정리된다. 그 기간 안에 삭제를 받지 못한 복제본이 있으면, 톰스톤이 사라진 뒤 그 복제본의 옛 행이 안티 엔트로피로 다른 복제본에 다시 퍼진다.",
    anchor: "결국-같아지게-만드는-장치",
  },
  {
    id: "eventual-consistency-6",
    post: "eventual-consistency",
    question:
      "'저장했는데 가끔 반영이 안 된다'는 문의가 왔다. 요청 로그에 읽은 노드가 db=primary로 찍혀 있는데도 옛 값이었다. 먼저 의심할 곳은?",
    choices: [
      "복제 지연",
      "recovery_min_apply_delay가 걸린 복제본",
      "프라이머리 앞단의 캐시",
      "세션 토큰의 Max-Age",
    ],
    answer: 2,
    explanation:
      "프라이머리에서 읽었다면 복제 지연과는 상관이 없다. 쓰기 후 캐시를 지우는 순서가 꼬여 옛 값이 다시 들어간 경우처럼 앞단 캐시를 먼저 본다. 그래서 요청 로그에 읽은 노드를 남겨 두는 것이 첫 단계다.",
    anchor: "가끔-옛-값이-보인다는-문의가-오면",
  },
];
