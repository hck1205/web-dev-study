import type { QuizQuestion } from "../types";

export const SCHEMA_VERSIONING: QuizQuestion[] = [
  {
    id: "schema-versioning-1",
    post: "schema-versioning",
    question: "Avro 메시지를 읽으려면 쓴 쪽(writer) 스키마가 꼭 필요한 이유는?",
    choices: [
      "Avro 바이트가 압축되어 있어서",
      "바이트에 필드 이름도 번호도 없이 값만 순서대로 있어서, 쓴 쪽 스키마 없이는 필드 경계를 알 수 없어서",
      "Avro는 JSON으로만 읽을 수 있어서",
      "Kafka 브로커가 스키마를 검사해서",
    ],
    answer: 1,
    explanation:
      "Avro는 값만 스키마 순서대로 붙여 써서 작다. 그래서 읽을 때 쓴 쪽 스키마와 읽는 쪽 스키마를 이름으로 맞춰 읽는다. 스키마 전체를 메시지마다 붙일 수 없으니 레지스트리에 두고 id만 붙인다.",
    anchor: "avro는-스키마-없이는-한-바이트도-못-읽는다",
  },
  {
    id: "schema-versioning-2",
    post: "schema-versioning",
    question: "Confluent 형식으로 감싼 Kafka 메시지 값의 앞 5바이트에 들어 있는 것은?",
    choices: [
      "매직 바이트 0과 4바이트 스키마 id",
      "메시지 길이와 압축 여부",
      "토픽 이름의 해시",
      "스키마 버전 번호와 체크섬",
    ],
    answer: 0,
    explanation:
      "첫 바이트는 항상 0인 매직 바이트, 다음 4바이트가 레지스트리의 스키마 id다. 소비자는 이 id로 쓴 쪽 스키마를 받아 캐시한다. 브로커는 이 바이트를 해석하지 않는다.",
    anchor: "메시지에는-스키마-번호만-붙는다",
  },
  {
    id: "schema-versioning-3",
    post: "schema-versioning",
    question: "BACKWARD 규칙이 걸린 주제에 기본값 없는 필드를 추가한 스키마를 등록하면?",
    choices: [
      "옛 소비자가 새 데이터를 못 읽으니 거절된다",
      "통과한다. 필드 추가는 항상 안전하다",
      "새 스키마로 옛 데이터를 읽을 때 채울 값이 없으니 거절된다",
      "통과하지만 생산자가 자동으로 기본값을 넣는다",
    ],
    answer: 2,
    explanation:
      "BACKWARD는 새 스키마로 옛 데이터를 읽을 수 있어야 한다. 옛 데이터에 없는 필드는 기본값으로 채워야 하는데 기본값이 없다. 옛 소비자가 새 데이터를 읽는 건 모르는 필드를 건너뛰면 되니 FORWARD로는 괜찮다.",
    anchor: "레지스트리가-거절하는-변경",
  },
  {
    id: "schema-versioning-4",
    post: "schema-versioning",
    question:
      "v2에서 기본값 있는 currency를 추가하고 v3에서 그 기본값을 지웠다. BACKWARD 검사는 모두 통과했는데 오프셋을 되돌려 재처리하자 소비자가 죽었다. 왜인가?",
    choices: [
      "v3이 v2 데이터를 못 읽어서",
      "레지스트리가 캐시를 잃어서",
      "v2 생산자가 currency를 비워 보내서",
      "BACKWARD는 바로 앞 버전과만 비교해서, v3이 currency 없는 v1 데이터를 못 읽는 걸 놓쳐서",
    ],
    answer: 3,
    explanation:
      "v3 ← v2는 v2 데이터에 currency가 있으니 통과한다. 하지만 토픽에 남은 v1 데이터에는 currency도 기본값도 없다. 옛 데이터가 오래 남거나 재처리를 한다면 BACKWARD_TRANSITIVE로 모든 이전 버전과 비교한다.",
    anchor: "최신-버전-하나와만-비교하면-놓치는-것",
  },
  {
    id: "schema-versioning-5",
    post: "schema-versioning",
    question: "protobuf에서 user_id를 int64에서 string으로 바꾼 메시지를 옛 소비자(protobufjs)가 읽었을 때 일어난 일은?",
    choices: [
      "역직렬화 에러가 났다",
      "에러 없이 userId가 0으로 읽혔다",
      "문자열이 숫자로 자동 변환됐다",
      "메시지 전체가 건너뛰어졌다",
    ],
    answer: 1,
    explanation:
      "전송 형식이 정수에서 길이 붙은 바이트로 바뀌어 옛 소비자가 값을 못 읽고 기본값 0을 냈다. 에러가 안 나서 가장 늦게 발견되는 종류다. buf breaking 같은 비교 도구를 CI에 둔다.",
    anchor: "protobuf와-json-schema에서-조용히-깨지는-것",
  },
  {
    id: "schema-versioning-6",
    post: "schema-versioning",
    question: "이벤트 소비자가 JSON Schema로 메시지를 검증할 때 additionalProperties: false를 두면 생기는 문제는?",
    choices: [
      "생산자가 필드 하나만 추가해도 옛 소비자가 메시지를 거절한다",
      "필수 필드 검사가 꺼진다",
      "검증이 느려진다",
      "새 소비자가 옛 메시지를 거절한다",
    ],
    answer: 0,
    explanation:
      "닫힌 스키마는 모르는 필드를 허용하지 않으니 필드 추가가 곧 깨는 변경이 된다. 이벤트 소비자는 모르는 필드를 허용해야 생산자가 필드를 늘릴 수 있다. 새 필드를 required로 넣으면 반대로 옛 메시지가 거절된다.",
    anchor: "protobuf와-json-schema에서-조용히-깨지는-것",
  },
  {
    id: "schema-versioning-7",
    post: "schema-versioning",
    question: "이벤트 소싱에서 업캐스터를 '바로 다음 버전으로만 올리는 순수 함수'로 짜는 이유는?",
    choices: [
      "저장된 이벤트를 덮어쓰기 위해",
      "레지스트리에 등록하기 위해",
      "버전이 늘어도 함수가 하나씩만 늘고, 재처리할 때마다 같은 결과가 나오게 하려고",
      "이벤트 크기를 줄이기 위해",
    ],
    answer: 2,
    explanation:
      "이어 붙이면 v1→v3 같은 조합을 따로 만들 필요가 없다. 외부 API나 DB를 부르면 재처리할 때마다 결과가 달라지니 순수 함수로 둔다. 저장된 이벤트 자체는 고치지 않는다.",
    anchor: "이미-저장된-이벤트는-읽을-때-올린다",
  },
];
