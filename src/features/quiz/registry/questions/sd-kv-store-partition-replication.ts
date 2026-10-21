import type { QuizQuestion } from "../types";

export const SD_KV_STORE_PARTITION_REPLICATION: QuizQuestion[] = [
  {
    id: "sd-kv-store-partition-replication-1",
    post: "sd-kv-store-partition-replication",
    question: "키를 서버에 나눌 때 hash(key) % 서버 수 대신 일관된 해싱을 쓰는 이유는?",
    choices: [
      "해시 계산이 더 빨라서",
      "서버 수가 바뀔 때 옮겨야 하는 키를 이웃 구간으로 줄이려고",
      "키를 정렬된 순서로 저장하려고",
      "복제본을 만들 필요가 없어져서",
    ],
    answer: 1,
    explanation:
      "나머지 연산은 서버 수가 4에서 5로만 바뀌어도 거의 모든 키의 자리가 바뀐다. 링을 쓰면 새 서버와 그 앞 서버 사이 구간의 키만 옮긴다. 복제는 여전히 따로 필요하다.",
    anchor: "키를-서버에-나눠-주는-규칙",
  },
  {
    id: "sd-kv-store-partition-replication-2",
    post: "sd-kv-store-partition-replication",
    question: "가상 노드를 쓰는 링에서 키 위치 다음의 가상 노드 세 개를 그대로 복제본으로 고르면 생길 수 있는 문제는?",
    choices: [
      "키가 링 끝을 넘으면 복제본을 못 찾는다",
      "쓰기 쿼럼 W를 계산할 수 없다",
      "같은 물리 서버가 두 번 뽑혀 그 서버 하나가 죽을 때 두 벌을 함께 잃는다",
      "가상 노드가 많을수록 읽기가 느려진다",
    ],
    answer: 2,
    explanation:
      "B#2, D#0, B#0처럼 같은 서버의 가상 노드가 연달아 나올 수 있다. 그래서 선호 목록을 만들 때 이미 고른 물리 서버는 건너뛰고, 운영에서는 랙이나 AZ까지 나눈다.",
    anchor: "같은-키를-세-대에-둔다",
  },
  {
    id: "sd-kv-store-partition-replication-3",
    post: "sd-kv-store-partition-replication",
    question: "N=3에서 쓰기 직후 읽기가 쓴 복제본을 반드시 하나 이상 만나는 조합은?",
    choices: ["W=1, R=1", "W=2, R=1", "W=1, R=2", "W=2, R=2"],
    answer: 3,
    explanation:
      "W + R > N이어야 쓴 집합과 읽는 집합이 겹친다. 2 + 2 = 4 > 3이라 어떤 두 대를 읽어도 새 값을 가진 복제본이 섞인다. W=2, R=1은 9가지 중 6가지만 겹쳤다.",
    anchor: "세-대-모두-기다려야-하나-n-w-r",
  },
  {
    id: "sd-kv-store-partition-replication-4",
    post: "sd-kv-store-partition-replication",
    question: "N=3에서 W=3 대신 W=2를 고를 때 가장 크게 얻는 것은?",
    choices: [
      "느린 복제본 하나를 기다리지 않아 꼬리 지연이 줄고, 한 대가 죽어도 쓸 수 있다",
      "평균 응답 시간이 절반으로 준다",
      "동시 쓰기 충돌이 사라진다",
      "디스크 사용량이 3분의 2로 준다",
    ],
    answer: 0,
    explanation:
      "W=2는 세 응답 중 두 번째로 빠른 것만 기다린다. 시뮬레이션에서 p50은 비슷했지만 p99는 72.9ms에서 2.9ms로 내려왔다. 요청은 세 대 모두에 가므로 저장량은 그대로다.",
    anchor: "w를-정하면-기다리는-시간도-정해진다",
  },
  {
    id: "sd-kv-store-partition-replication-5",
    post: "sd-kv-store-partition-replication",
    question: "W=2로 쓰는데 한 대만 확인하고 나머지는 시간 초과가 났다. 무슨 일이 생기나?",
    choices: [
      "확인한 한 대의 값도 자동으로 되돌려진다",
      "코디네이터가 W를 1로 낮춰 성공을 돌려준다",
      "모든 복제본이 잠겨 다음 쓰기를 거절한다",
      "클라이언트는 실패를 받지만 그 한 대에는 값이 남아 다음 읽기에 보일 수 있다",
    ],
    answer: 3,
    explanation:
      "쿼럼 쓰기는 실패해도 이미 들어간 복제본을 되돌리지 않는다. 그래서 실패로 끝난 값이 나중에 읽힐 수 있고, W + R > N만으로 강한 일관성이 된다고 말할 수 없는 이유 중 하나다.",
    anchor: "쿼럼을-맞춰도-남는-틈",
  },
  {
    id: "sd-kv-store-partition-replication-6",
    post: "sd-kv-store-partition-replication",
    question: "키 10억 개, 평균 1KB, N=3, 서버당 2TB 디스크를 절반만 채운다면 저장 용량 기준으로 몇 대가 필요한가?",
    choices: ["2대", "6대", "3대", "1대"],
    answer: 2,
    explanation:
      "원본 1TB에 세 벌이면 3TB이고, 한 대가 안전하게 담는 양은 2TB의 절반인 1TB라서 3대다. 복제본이 서로 다른 서버에 있어야 하니 N=3보다 적을 수도 없다.",
    anchor: "몇-대가-필요한지-직접-세-보기",
  },
];
