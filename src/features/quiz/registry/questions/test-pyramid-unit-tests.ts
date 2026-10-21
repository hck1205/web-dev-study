import type { QuizQuestion } from "../types";

export const TEST_PYRAMID_UNIT_TESTS: QuizQuestion[] = [
  {
    id: "test-pyramid-unit-tests-1",
    post: "test-pyramid-unit-tests",
    question:
      "가입 코드의 저장소를 스텁으로 바꾼 테스트는 모두 통과했는데, 운영에서 대소문자만 다른 이메일로 가입하면 500이 난다. 테스트가 이 버그를 못 잡은 가장 큰 이유는?",
    choices: [
      "node:test가 비동기 함수의 에러를 잡지 못해서",
      "스텁은 작성자가 상상한 대로 답할 뿐 진짜 DB의 유니크 인덱스를 거치지 않아서",
      "테스트가 병렬로 돌아 순서가 섞여서",
      "커버리지가 100%에 못 미쳐서",
    ],
    answer: 1,
    explanation:
      "스텁은 정해 둔 null을 돌려줄 뿐 DB에 묻지 않으니, 진짜 저장소가 대소문자를 구분해 찾고 INSERT에서 23505로 거절되는 흐름이 테스트에 한 번도 나타나지 않는다. 병렬 실행이나 커버리지와는 상관없는 문제이고, 진짜 DB로 도는 통합 테스트나 계약 테스트가 필요하다.",
    anchor: "목이-거짓말을-하는-두-가지-방식",
  },
  {
    id: "test-pyramid-unit-tests-2",
    post: "test-pyramid-unit-tests",
    question:
      "찾기와 넣기를 insertIfAbsent 한 번으로 바꾸는 리팩터링을 했다. 사용자에게 보이는 동작은 같은데 어떤 테스트가 깨질 가능성이 가장 큰가?",
    choices: [
      "가짜 저장소에 가입시킨 뒤 결과와 저장된 행 수를 확인하는 테스트",
      "두 번 가입하면 두 번째가 TAKEN인지 확인하는 테스트",
      "findByEmail이 한 번 불렸는지 호출 횟수를 확인하는 목 테스트",
      "환영 메일이 한 통 나갔는지 세는 테스트",
    ],
    answer: 2,
    explanation:
      "호출 횟수를 확인하는 목 테스트는 무엇을 하는지가 아니라 어떻게 하는지를 고정한다. 그래서 동작이 같아도 내부 호출 구조가 바뀌면 깨진다. 결과 상태를 보는 테스트는 그대로 통과한다.",
    anchor: "목이-거짓말을-하는-두-가지-방식",
  },
  {
    id: "test-pyramid-unit-tests-3",
    post: "test-pyramid-unit-tests",
    question: "테스트 대역 중 '정해 둔 값을 돌려줘서 코드로 들어가는 간접 입력을 통제하는 것'은?",
    choices: ["더미", "스파이", "가짜", "스텁"],
    answer: 3,
    explanation:
      "스텁은 '저장소가 null을 준다면' 같은 상황을 만드는 대역이다. 스파이는 나가는 호출을 기록하고, 가짜는 메모리 Map 저장소처럼 진짜와 같은 일을 단순하게 해내는 구현이다.",
    anchor: "진짜-대신-세우는-것들",
  },
  {
    id: "test-pyramid-unit-tests-4",
    post: "test-pyramid-unit-tests",
    question:
      "limiter.test.js에서 '첫 요청은 허용한다'가 전체 실행에서는 실패하고 --test-name-pattern으로 혼자 돌리면 통과한다. 가장 그럴듯한 원인은?",
    choices: [
      "모듈 수준의 Map을 앞 테스트가 채워 두고 가서 같은 파일의 테스트끼리 상태를 공유했다",
      "Node 22가 같은 파일의 테스트를 각각 다른 프로세스에서 돌렸다",
      "--test-name-pattern이 단언을 건너뛰었다",
      "assert/strict가 true와 false를 느슨하게 비교했다",
    ],
    answer: 0,
    explanation:
      "Node 22 러너는 파일 단위로 프로세스를 나누지만, 한 파일 안의 테스트는 같은 모듈 인스턴스를 공유한다. 앞 테스트가 u1의 카운터를 3으로 올려 두었으니 네 번째 호출은 false가 된다. 상태를 인스턴스로 꺼내 테스트마다 새로 만들면 사라진다.",
    anchor: "혼자-돌리면-통과하는-테스트",
  },
  {
    id: "test-pyramid-unit-tests-5",
    post: "test-pyramid-unit-tests",
    question: "단언이 하나도 없는 테스트로 cart.js의 줄·분기·함수 커버리지가 모두 100%가 나왔다. 여기서 알 수 있는 것은?",
    choices: [
      "cart.js에는 버그가 없다",
      "모든 분기가 올바른 값을 돌려준다",
      "테스트가 코드를 실행하기는 했지만, 결과가 맞는지는 아무것도 확인하지 않았을 수 있다",
      "변이 테스트를 돌릴 필요가 없다",
    ],
    answer: 2,
    explanation:
      "커버리지는 실행했는지를 잴 뿐 확인했는지는 재지 않는다. 실제로 무료 배송 조건을 틀리게 바꿔도 이 테스트는 통과한다. 테스트가 버그를 잡는 힘을 보려면 코드를 일부러 바꿔 보는 변이 테스트를 쓴다.",
    anchor: "커버리지-100인데-버그가-그대로다",
  },
  {
    id: "test-pyramid-unit-tests-6",
    post: "test-pyramid-unit-tests",
    question:
      "가짜 시계에 a를 100ms 뒤, b를 50ms 뒤로 예약하고 tick(60)을 부르면 어떻게 되나?",
    choices: [
      "아무것도 울리지 않고 시계는 60이 된다",
      "b가 울리고 시계는 60에서 멈춘다",
      "a와 b가 예약한 순서대로 둘 다 울린다",
      "b가 울리고 시계는 50에서 멈춘다",
    ],
    answer: 1,
    explanation:
      "tick은 넘기는 범위 안에 닿는 타이머를 시각순으로 꺼내 울린다. 50에 예약된 b만 범위 안이라 울리고, 시계는 요청한 만큼인 60까지 간다. a는 100에 닿아야 울린다.",
    anchor: "시계와-난수를-테스트-손에-쥐여-준다",
  },
  {
    id: "test-pyramid-unit-tests-7",
    post: "test-pyramid-unit-tests",
    question:
      "로직은 얇고 대부분이 DB와 다른 서비스와의 대화인 마이크로서비스라면 테스트 비중을 어떻게 두는 게 자연스러운가?",
    choices: [
      "작은 함수마다 목을 꽂은 단위 테스트를 가장 많이 둔다",
      "브라우저로 도는 E2E 테스트를 가장 많이 둔다",
      "테스트 없이 커버리지 목표만 건다",
      "서비스를 통째로 띄워 확인하는 통합 테스트를 가운데 두껍게 둔다",
    ],
    answer: 3,
    explanation:
      "스포티파이의 벌집 모양처럼, 로직이 얇은 서비스에서는 버그가 대부분 경계에서 생기니 서비스 단위 통합 테스트가 값을 한다. 목을 꽂은 작은 단위 테스트는 경계의 버그를 못 보고, E2E는 느리고 원인을 짚기 어려워 꼭대기에 조금만 둔다.",
    anchor: "피라미드와-트로피가-다투는-것",
  },
];
