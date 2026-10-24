import type { QuizQuestion } from "../types";

export const DYNAMODB_MODELING_CAPACITY: QuizQuestion[] = [
  {
    id: "dynamodb-modeling-capacity-1",
    post: "dynamodb-modeling-capacity",
    question: "Scan에 FilterExpression을 걸었더니 Count는 2, ScannedCount는 6이다. 요금은 무엇을 기준으로 나가나?",
    choices: [
      "돌려준 2건의 크기",
      "필터 조건에 쓴 속성의 크기",
      "응답 JSON의 크기",
      "필터를 거르기 전에 읽은 6건의 크기",
    ],
    answer: 3,
    explanation:
      "FilterExpression은 항목을 읽은 다음 응답을 보내기 전에 거르는 단계라 읽은 양은 줄지 않는다. 용량은 ScannedCount에 해당하는 읽은 크기만큼 쓴다. 자주 거르는 조건이라면 키나 GSI로 옮겨 Query가 되게 한다.",
    anchor: "필터는-읽은-뒤에-거른다",
  },
  {
    id: "dynamodb-modeling-capacity-2",
    post: "dynamodb-modeling-capacity",
    question: "1KB짜리 항목 10개를 강한 일관성으로 읽는다. GetItem 10번과 같은 파티션의 Query 1번은 RCU가 각각 얼마인가?",
    choices: [
      "둘 다 10",
      "GetItem 10, Query 3",
      "GetItem 3, Query 10",
      "둘 다 3",
    ],
    answer: 1,
    explanation:
      "GetItem은 항목마다 4KB 단위로 올림해서 1KB 항목 하나가 1단위라 10번이면 10이다. Query는 읽은 크기를 모두 더한 10KB를 한 번 올림해 3단위다. 같은 파티션에 모아 Query로 읽는 설계가 비용에서도 이득인 이유다.",
    anchor: "읽기쓰기-용량을-세는-법",
  },
  {
    id: "dynamodb-modeling-capacity-3",
    post: "dynamodb-modeling-capacity",
    question: "회원 이메일 중복 가입을 막으려고 이메일을 키로 하는 GSI를 만들었다. 이 방법의 문제는?",
    choices: [
      "GSI는 키 유일성을 보장하지 않고 비동기로 갱신되어 중복을 막지 못한다",
      "GSI는 테이블을 만들 때만 정의할 수 있다",
      "GSI에는 문자열 키를 쓸 수 없다",
      "GSI를 만들면 테이블에서 강한 일관성 읽기를 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "GSI는 같은 키 값을 가진 항목이 여럿이어도 되고 테이블에서 비동기로 복제된다. 중복을 막으려면 이메일을 파티션 키로 하는 항목을 따로 두고 회원 항목과 TransactWriteItems로 묶어 둘 다 attribute_not_exists 조건을 건다.",
    anchor: "조건부-쓰기로-경쟁을-막는다",
  },
  {
    id: "dynamodb-modeling-capacity-4",
    post: "dynamodb-modeling-capacity",
    question: "LSI를 둔 테이블에서 특정 회원 키로 쓰기가 갑자기 거절되기 시작했다. 가장 그럴듯한 원인은?",
    choices: [
      "LSI가 최종 일관성만 지원하기 때문이다",
      "LSI의 쓰기 용량이 테이블과 따로 바닥났기 때문이다",
      "같은 파티션 키의 항목 묶음이 테이블과 인덱스를 합쳐 10GB를 넘었기 때문이다",
      "LSI가 5개를 넘었기 때문이다",
    ],
    answer: 2,
    explanation:
      "LSI가 있으면 같은 파티션 키 값을 가진 항목 묶음(item collection)이 10GB를 넘을 수 없다. LSI는 테이블과 같은 파티션에 저장되고 용량도 나눠 쓰며 강한 일관성 읽기를 지원한다. 한 키에 항목이 끝없이 쌓이는 설계라면 LSI 대신 GSI를 고른다.",
    anchor: "lsi와-gsi는-다른-물건이다",
  },
  {
    id: "dynamodb-modeling-capacity-5",
    post: "dynamodb-modeling-capacity",
    question: "테이블 전체 용량 사용률은 20%인데 블랙프라이데이에 GSI 쓰기가 스로틀된다. 키는 STATUS#paid#날짜 하나에 초당 3,000건이 몰린다. 알맞은 해결은?",
    choices: [
      "테이블의 프로비저닝 WCU를 두 배로 올린다",
      "키 끝에 0~2 접미사를 붙여 쓰기를 셋으로 나누고, 읽을 때 셋을 모아 합친다",
      "GSI 프로젝션을 ALL로 바꾼다",
      "강한 일관성 쓰기로 바꾼다",
    ],
    answer: 1,
    explanation:
      "파티션 키 하나는 초당 1,000 WCU를 넘지 못하고 적응형 용량도 이 한도는 못 넘는다. 테이블 용량을 올려도 한 키의 한도는 그대로다. 쓰기 샤딩으로 키를 나누면 각 키가 1,000 안쪽이 되고, 대신 읽을 때 여러 키를 모은다.",
    anchor: "파티션-하나가-견디는-양",
  },
  {
    id: "dynamodb-modeling-capacity-6",
    post: "dynamodb-modeling-capacity",
    question: "정렬 키를 ORDER#9, ORDER#10, ORDER#100으로 지었더니 최신 주문 순서가 엉켰다. 왜 그런가?",
    choices: [
      "정렬 키는 넣은 순서대로 정렬되기 때문이다",
      "정렬 키는 해시로 흩어지기 때문이다",
      "숫자가 들어간 정렬 키는 정렬되지 않기 때문이다",
      "문자열 정렬 키는 글자 순서로 정렬되어 ORDER#9가 ORDER#100보다 뒤에 오기 때문이다",
    ],
    answer: 3,
    explanation:
      "문자열 정렬 키는 숫자 크기가 아니라 글자 순서로 비교한다. 자릿수를 0으로 채우거나 ISO 8601 시각을 앞에 두면 문자열 순서가 곧 원하는 순서가 된다. 해시로 흩어지는 건 파티션 키 쪽이다.",
    anchor: "정렬-키는-글자-순서로-정렬된다",
  },
  {
    id: "dynamodb-modeling-capacity-7",
    post: "dynamodb-modeling-capacity",
    question: "Streams를 Lambda로 읽어 검색 인덱스를 갱신하는데, Lambda가 이틀 동안 실패만 했다. 무슨 일이 생기나?",
    choices: [
      "스트림 기록은 24시간 보관이라 그보다 오래된 변경은 잃는다",
      "DynamoDB가 테이블 쓰기를 멈추고 기다린다",
      "실패한 기록은 자동으로 다음 날 다시 쌓인다",
      "TTL이 꺼져 항목이 지워지지 않는다",
    ],
    answer: 0,
    explanation:
      "DynamoDB Streams는 기록을 24시간만 보관한다. 소비자가 그보다 오래 막히면 변경을 잃으니 IteratorAge를 경보로 걸고, 계속 실패하는 기록은 재시도 한도와 실패 기록을 보낼 곳을 정해 샤드가 막히지 않게 한다. 더 오래 보관하려면 Kinesis Data Streams로 내보낸다.",
    anchor: "streams와-ttl로-변경을-흘린다",
  },
];
