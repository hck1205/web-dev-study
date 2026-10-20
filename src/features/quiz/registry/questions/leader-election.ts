import type { QuizQuestion } from "../types";

export const LEADER_ELECTION: QuizQuestion[] = [
  {
    id: "leader-election-1",
    post: "leader-election",
    question: "etcd 선출 레시피에서 여러 후보 중 리더를 정하는 기준은?",
    choices: [
      "키 이름(임대 ID)을 사전순으로 정렬했을 때 첫 번째",
      "값에 적힌 후보 이름이 가장 큰 것",
      "선출 키의 생성 리비전(CreateRevision)이 가장 작은 것",
      "임대 TTL이 가장 긴 것",
    ],
    answer: 2,
    explanation:
      "가장 먼저 만들어진 키, 곧 생성 리비전이 가장 작은 키의 주인이 리더다. 키 이름은 임대 ID라 정렬 순서가 리더 순서와 다르고, 실습에서도 worker-b의 키가 먼저 정렬됐지만 리더는 worker-a였다.",
    anchor: "임대를-쥔-쪽이-리더다",
  },
  {
    id: "leader-election-2",
    post: "leader-election",
    question: "GC로 9초 멈췄던 옛 리더가 깨어나 새 리더와 같은 키에 번갈아 쓰고 있다. 가장 확실한 대책은?",
    choices: [
      "임대 TTL을 1초로 줄인다",
      "쓰기 직전에 '내가 리더인가'를 한 번 더 조회한다",
      "후보 수를 홀수로 맞춘다",
      "리더 자격을 쓰기와 함께 검사하게 한다(선출 키 조건부 트랜잭션이나 펜싱 토큰)",
    ],
    answer: 3,
    explanation:
      "미리 조회하고 쓰면 그 사이에 다시 멈출 수 있어 틈이 남는다. 받는 쪽이 쓰는 순간 리비전이나 토큰으로 확인해야 멈춘 시간과 상관없이 낡은 쓰기가 거절된다.",
    anchor: "리더-자격을-쓰기와-함께-검사한다",
  },
  {
    id: "leader-election-3",
    post: "leader-election",
    question: "3대짜리 etcd가 1대와 2대로 갈라졌을 때 1대 쪽에서 리더가 나오지 않는 이유는?",
    choices: [
      "1대 쪽은 과반(2표)을 얻을 수 없어서",
      "1대 쪽의 임기 번호가 더 작아서",
      "1대 쪽의 하트비트 간격이 더 길어서",
      "1대 쪽에는 임대가 없어서",
    ],
    answer: 0,
    explanation:
      "Raft는 과반의 표를 얻어야 리더가 되므로 갈라진 두 쪽 중 과반을 가진 한쪽에서만 리더가 나온다. 그래서 합의 그룹은 3대, 5대처럼 홀수로 둔다.",
    anchor: "etcd-자신은-어떻게-리더를-뽑나",
  },
  {
    id: "leader-election-4",
    post: "leader-election",
    question: "client-go leaderelection에서 다른 후보가 Lease를 빼앗을 수 있는 시점을 재는 기준은?",
    choices: [
      "Lease의 renewTime 값에 LeaseDuration을 더한 시각",
      "자기가 레코드의 마지막 변화를 본 시각에 LeaseDuration을 더한 시각(자기 시계)",
      "acquireTime에 RenewDeadline을 더한 시각",
      "API 서버가 Lease를 만료시키는 시각",
    ],
    answer: 1,
    explanation:
      "후보는 상대가 적은 renewTime이 아니라 자기 시계로 경과 시간을 잰다. 그래서 노드 사이 시계가 맞지 않아도 되고, 시계가 흐르는 속도만 비슷하면 된다. API 서버가 Lease를 스스로 만료시키지는 않는다.",
    anchor: "세-숫자-사이의-관계",
  },
  {
    id: "leader-election-5",
    post: "leader-election",
    question: "롤링 배포 때마다 리더가 약 15초씩 비어 작업이 멈춘다. 가장 알맞은 수정은?",
    choices: [
      "LeaseDuration을 60초로 늘린다",
      "레플리카를 하나로 줄인다",
      "SIGTERM에서 컨텍스트를 취소하고 ReleaseOnCancel로 Lease를 비우고 내려오게 한다",
      "RetryPeriod를 RenewDeadline보다 크게 잡는다",
    ],
    answer: 2,
    explanation:
      "스스로 물러나면 홀더가 비고 기간이 1초로 바뀌어 다음 후보가 바로 잡는다. 실습에서는 kill -9 뒤 18.6초 걸리던 인계가 SIGTERM에서는 0.6초로 줄었다.",
    anchor: "쿠버네티스에서는-lease-객체로",
  },
  {
    id: "leader-election-6",
    post: "leader-election",
    question: "Lease의 leaseTransitions가 계속 오른다. 먼저 의심할 것은?",
    choices: [
      "리더가 RenewDeadline 안에 갱신을 못 한다(API 서버나 etcd 지연, CPU 스로틀링, 긴 GC)",
      "후보 Pod에 leases 권한이 없다",
      "holderIdentity가 너무 길다",
      "Lease 객체가 다른 네임스페이스에 있다",
    ],
    answer: 0,
    explanation:
      "leaseTransitions는 자리가 다른 후보로 넘어갈 때마다 오르므로 리더가 갱신에 실패해 자주 바뀐다는 신호다. 권한이 없으면 아무도 리더가 되지 못해 오히려 값이 오르지 않는다.",
    anchor: "리더가-자꾸-바뀌거나-아예-없을-때",
  },
  {
    id: "leader-election-7",
    post: "leader-election",
    question: "불리 알고리즘이 네트워크 분할에서 약한 이유는?",
    choices: [
      "노드 번호가 고유하지 않아서",
      "과반 개념 없이 타임아웃만으로 판단해 갈라진 양쪽에서 각자 리더가 나와서",
      "메시지를 한 방향으로만 보내서",
      "리더가 임대를 갱신하지 않아서",
    ],
    answer: 1,
    explanation:
      "불리 알고리즘은 응답이 없으면 죽었다고 보고 살아 있는 가장 큰 번호를 리더로 삼는다. 갈라진 양쪽이 서로를 죽었다고 보면 각자 리더를 뽑게 된다.",
    anchor: "합의-저장소-없이-뽑는-고전적인-방법",
  },
];
