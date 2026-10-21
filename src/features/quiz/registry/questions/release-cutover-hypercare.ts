import type { QuizQuestion } from "../types";

export const RELEASE_CUTOVER_HYPERCARE: QuizQuestion[] = [
  {
    id: "release-cutover-hypercare-1",
    post: "release-cutover-hypercare",
    question: "업무 재개가 06:00이고 리허설에서 잰 되돌리기 시간이 90분이다. 돌아올 수 없는 지점 직전의 go/no-go는 늦어도 몇 시까지 내려야 하나?",
    choices: ["06:00", "05:30", "04:30", "03:00"],
    answer: 2,
    explanation:
      "되돌리기가 업무 재개 전에 끝나려면 06:00에서 90분을 뺀 04:30이 마지막 결정 시각이다. 그보다 늦게 NO-GO를 내면 옛 시스템이 업무 시작 시각까지 돌아오지 못한다.",
    anchor: "되돌릴-수-있는-마지막-시각을-거꾸로-센다",
  },
  {
    id: "release-cutover-hypercare-2",
    post: "release-cutover-hypercare",
    question: "적재가 5시간 반 걸린 밤, 게이트(S4)에서만 판단했더니 NO-GO를 냈는데도 업무 재개에 늦었다. 무엇이 부족했나?",
    choices: [
      "게이트를 하나 더 PONR 뒤에 두는 것",
      "단계마다 거꾸로 계산한 마감을 두고, 넘으면 그 자리에서 멈추는 규칙",
      "되돌리기 절차를 생략하는 것",
      "적재를 병렬로 돌리는 것",
    ],
    answer: 1,
    explanation:
      "게이트에 도착했을 때 이미 05:12라 되돌릴 시간이 없었다. S3에 04:00 마감을 걸었다면 그때 끊고 05:30에 복구를 마칠 수 있었다. 병렬 적재는 시간을 줄일 수는 있지만 결정 시점 문제를 풀지 않는다.",
    anchor: "되돌릴-수-있는-마지막-시각을-거꾸로-센다",
  },
  {
    id: "release-cutover-hypercare-3",
    post: "release-cutover-hypercare",
    question: "트래픽을 새 시스템으로 돌린 뒤 되돌리기가 어려워지는 이유는?",
    choices: [
      "로드 밸런서 설정을 바꿀 수 없어서",
      "옛 시스템의 코드를 지웠기 때문에",
      "DNS TTL이 무한대가 되어서",
      "새 시스템에만 있는 데이터가 쌓이기 시작해, 되돌리면 그 데이터를 잃거나 거꾸로 옮겨야 해서",
    ],
    answer: 3,
    explanation:
      "전환 순간부터 새 DB에만 있는 주문이 생긴다. 역방향 동기화를 미리 만들어 리허설하지 않았다면 그 뒤로는 고쳐서 앞으로 가는 길만 남는다. 그래서 이 순간을 돌아올 수 없는 지점이라 부른다.",
    anchor: "그-밤의-순서",
  },
  {
    id: "release-cutover-hypercare-4",
    post: "release-cutover-hypercare",
    question: "이관 뒤 건수와 합계가 어긋났고, 1만 건 구간 체크섬 21개 중 20개가 달랐다. 이 결과가 말해 주는 것은?",
    choices: [
      "빠진 행이 한 구간에 몰려 있다",
      "체크섬 계산이 틀렸다",
      "빠진 행이 고르게 퍼져 있어 특정 조건으로 걸러졌을 가능성이 크다",
      "금액 열만 잘못 옮겨졌다",
    ],
    answer: 2,
    explanation:
      "어긋남이 거의 모든 구간에 퍼졌다면 범위 하나가 빠진 게 아니라 조건으로 걸러진 것이다. 실제로 빠진 행을 직접 보니 모두 이메일이 비어 있었다.",
    anchor: "데이터-이관은-리허설에서-숫자를-얻는다",
  },
  {
    id: "release-cutover-hypercare-5",
    post: "release-cutover-hypercare",
    question: "옛 시스템의 서울 현지 시각을 `at time zone 'Asia/Seoul'` 없이 timestamptz로 옮겼다. 건수·합계 대조로 잡히나?",
    choices: [
      "잡히지 않는다. 시각만 9시간 밀리므로 샘플을 양쪽 화면에서 비교해야 보인다",
      "건수가 달라져서 잡힌다",
      "합계가 달라져서 잡힌다",
      "구간 체크섬이 모두 달라져서 반드시 잡힌다",
    ],
    answer: 0,
    explanation:
      "행 수와 금액은 그대로라 건수·합계 대조는 통과한다. 체크섬에 시각 열을 넣지 않았다면 그것도 통과한다. 숫자로 안 잡히는 것은 샘플을 눈으로 비교하는 단계가 잡는다.",
    anchor: "데이터-이관은-리허설에서-숫자를-얻는다",
  },
  {
    id: "release-cutover-hypercare-6",
    post: "release-cutover-hypercare",
    question: "개방 직후 새 시스템의 에러율이 0%이고 지연도 정상이다. 그래도 바로 확인해야 하는 것은?",
    choices: [
      "CPU 사용률",
      "시간당 주문 수 같은 업무 지표와 로드 밸런서의 요청 수",
      "GC 로그",
      "디스크 여유 공간",
    ],
    answer: 1,
    explanation:
      "요청이 새 시스템에 아예 오지 않으면 에러도 없으니 기술 지표는 초록색이다. 업무 지표가 0이면 DNS나 설정이 옛 주소를 보고 있는지 의심한다.",
    anchor: "사용자보다-먼저-보려면",
  },
  {
    id: "release-cutover-hypercare-7",
    post: "release-cutover-hypercare",
    question: "하이퍼케어를 끝내는 기준으로 가장 알맞은 것은?",
    choices: [
      "출시 후 정확히 1주가 지나면",
      "고객 문의가 하루 0건이 되면",
      "심각한 문제가 일정 기간 새로 없고, SLO를 연속으로 지키고, 첫 업무 주기를 넘기고, 운영팀이 넘겨받아 대응해 봤을 때",
      "만든 팀이 다음 프로젝트를 시작할 때",
    ],
    answer: 2,
    explanation:
      "기간만으로 정하면 월말 정산 같은 첫 업무 주기를 놓친다. 끝나는 조건을 미리 정해야 만든 팀이 몇 달째 알림을 받는 일도, 너무 일찍 손을 떼는 일도 막을 수 있다.",
    anchor: "하이퍼케어는-끝나는-날을-정하고-시작한다",
  },
];
