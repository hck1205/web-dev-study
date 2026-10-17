import type { QuizQuestion } from "../types";

export const DB_TYPE_KEY_VALUE: QuizQuestion[] = [
  {
    id: "db-type-key-value-1",
    post: "db-type-key-value",
    question: "DynamoDB 테이블 전체 용량은 넉넉한데 베스트셀러 한 권의 요청에서만 스로틀이 걸린다. 원인은?",
    choices: [
      "같은 파티션 키는 늘 같은 물리 파티션으로 가서 그 파티션 하나의 처리량 한도에 걸렸다",
      "정렬 키를 지정하지 않았다",
      "GSI가 너무 많아서 쓰기가 느려졌다",
      "항목 크기가 400KB를 넘었다",
    ],
    answer: 0,
    explanation:
      "파티션 키를 해시해 파티션을 고르니 키 하나는 결국 한 파티션에 산다. 파티션마다 초당 처리량 한도가 있어서 테이블 전체가 남아도 핫 파티션에서 막힌다. 쓰기가 몰리면 키에 접미사를 붙여 흩고, 읽기가 몰리면 캐시를 둔다.",
    anchor: "키를-해시해서-파티션을-고른다",
  },
  {
    id: "db-type-key-value-2",
    post: "db-type-key-value",
    question: "DynamoDB Query에 필터 표현식으로 status = paid를 걸었더니 Count는 3, ScannedCount는 4였다. 무엇을 뜻하나?",
    choices: [
      "4건 중 1건은 읽기에 실패했다",
      "필터가 인덱스를 써서 3건만 읽었다",
      "4건을 읽은 뒤 1건을 걸렀으므로 비용은 4건만큼 나간다",
      "강한 일관성 읽기로 바뀌었다",
    ],
    answer: 2,
    explanation:
      "필터는 읽은 뒤에 거르는 것이라 결과 수는 줄어도 읽은 양과 비용은 그대로다. 자주 거르는 조건이라면 필터가 아니라 정렬 키나 GSI의 키로 만들어야 한다.",
    anchor: "파티션-키와-정렬-키",
  },
  {
    id: "db-type-key-value-3",
    post: "db-type-key-value",
    question: "정렬 키를 ORDER#2026-10-05#9006 처럼 날짜를 연-월-일 순서로 넣는 이유는?",
    choices: [
      "파티션을 날짜별로 나누려고",
      "문자열 정렬이 곧 시간 순서가 되어 범위와 접두사 조회가 가능해지게",
      "항목 크기를 줄이려고",
      "GSI 없이 status로 찾으려고",
    ],
    answer: 1,
    explanation:
      "같은 파티션 키 안의 항목은 정렬 키 순서로 놓인다. ISO 형식 날짜는 문자열 순서와 시간 순서가 같아서 begins_with나 BETWEEN으로 회원의 특정 달 주문을 한 번에 읽는다. 파티션을 고르는 건 정렬 키가 아니라 파티션 키다.",
    anchor: "파티션-키와-정렬-키",
  },
  {
    id: "db-type-key-value-4",
    post: "db-type-key-value",
    question: "etcd를 3대에서 4대로 늘리면 견딜 수 있는 장애 노드 수는?",
    choices: [
      "2대로 늘어난다",
      "3대로 늘어난다",
      "0대로 줄어든다",
      "1대 그대로다",
    ],
    answer: 3,
    explanation:
      "Raft는 과반이 로그를 받아야 커밋한다. 3대의 과반은 2라 1대까지, 4대의 과반은 3이라 여전히 1대까지만 견딘다. 견디는 수는 그대로인데 과반만 커지니 3대나 5대처럼 홀수로 둔다.",
    anchor: "etcd-작지만-틀리면-안-되는-값",
  },
  {
    id: "db-type-key-value-5",
    post: "db-type-key-value",
    question: "서비스 데이터를 Kubernetes가 쓰는 etcd에 함께 넣으면 안 되는 이유로 가장 알맞은 것은?",
    choices: [
      "etcd는 키 이름에 슬래시를 쓸 수 없어서",
      "쓰기마다 과반의 fsync를 기다려 처리량이 낮고 저장 한도도 작아서, 클러스터 전체가 느려질 수 있어서",
      "etcd는 재시작하면 데이터가 사라져서",
      "etcd 읽기는 늘 옛 값을 돌려줘서",
    ],
    answer: 1,
    explanation:
      "etcd는 빠름보다 틀리지 않음을 고른 저장소다. 요청은 기본 1.5MiB, 전체는 기본 2GB로 제한되고 쓰기마다 합의를 거친다. 기본 읽기는 오히려 선형화 가능해서 마지막 커밋 값을 돌려준다.",
    anchor: "etcd-작지만-틀리면-안-되는-값",
  },
  {
    id: "db-type-key-value-6",
    post: "db-type-key-value",
    question: "키-값 저장소를 주 저장소로 쓸 때 가장 약한 상황은?",
    choices: [
      "회원 id로 장바구니를 꺼낼 때",
      "세션을 만료 시간과 함께 저장할 때",
      "처음엔 없던 조건 조합 질문(예: 지난달 주문이 없는 회원 전부)이 새로 생겼을 때",
      "요청 수 제한 카운터를 올릴 때",
    ],
    answer: 2,
    explanation:
      "키를 아는 질문만 하겠다는 약속으로 속도와 확장을 얻었으니, 목록에 없던 질문은 인덱스를 추가하고 데이터를 다시 채우거나 전체를 읽어야 한다. 이런 질문은 다른 저장소로 데이터를 흘려보내 답하는 경우가 많다.",
    anchor: "키-값-저장소가-맞는-곳과-아닌-곳",
  },
];
