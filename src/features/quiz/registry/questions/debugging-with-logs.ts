import type { QuizQuestion } from "../types";

export const DEBUGGING_WITH_LOGS: QuizQuestion[] = [
  {
    id: "debugging-with-logs-1",
    post: "debugging-with-logs",
    question:
      "\"결제가 두 번 됐다\"는 문의를 받았다. payments 로그에서 그 사용자의 승인 줄 두 개를 찾았는데 trace_id가 같다. 이것이 알려 주는 것은?",
    choices: [
      "사용자가 버튼을 두 번 눌렀다",
      "요청 하나 안에서 결제가 두 번 일어났다",
      "로그 수집기가 같은 줄을 두 번 보냈다",
      "결제 서비스가 두 대라서 각각 승인했다",
    ],
    answer: 1,
    explanation:
      "trace_id는 요청 하나에 하나라서, 같다면 같은 요청 안에서 승인이 두 번 일어난 것이다. 사용자가 두 번 눌렀다면 요청이 둘이라 trace_id도 둘이다. 이 한 가지로 더블 클릭 가설이 지워진다.",
    anchor: "증상이-기록된-쪽에서-시작한다",
  },
  {
    id: "debugging-with-logs-2",
    post: "debugging-with-logs",
    question: "사용자 ID로 grep했더니 핵심 단서였던 warn 줄이 빠졌다. 왜 그럴까?",
    choices: [
      "warn 레벨은 grep에 걸리지 않기 때문",
      "로그 파일이 돌아가서 지워졌기 때문",
      "업무 필드는 그 자리에서 알던 값만 들어가, 그 줄에는 사용자 ID가 없었기 때문",
      "사용자 ID가 가리기 규칙으로 지워졌기 때문",
    ],
    answer: 2,
    explanation:
      "사용자 ID 같은 업무 값은 코드를 쓴 사람이 넣은 줄에만 있다. trace_id는 로거가 모든 줄에 자동으로 붙이니, 업무 값으로 첫 줄을 찾고 trace_id로 갈아타서 넓힌다.",
    anchor: "사용자-id로는-절반만-보인다",
  },
  {
    id: "debugging-with-logs-3",
    post: "debugging-with-logs",
    question:
      "orders가 1초 타임아웃으로 첫 결제 호출을 포기하고 재시도했다. 그런데 payments 로그에는 첫 요청도 1300ms 만에 승인되고 status 200으로 기록돼 있다. 어떻게 이런 일이 생기나?",
    choices: [
      "호출하는 쪽의 타임아웃은 상대의 작업을 취소하지 않아서, 받는 쪽은 끝까지 처리한다",
      "payments의 시계가 틀려서 그렇게 보일 뿐이다",
      "재시도 요청이 첫 요청을 다시 살렸다",
      "로그가 비동기로 써져서 순서가 바뀌었다",
    ],
    answer: 0,
    explanation:
      "타임아웃은 \"나는 더 안 기다린다\"는 뜻일 뿐이다. 받는 쪽은 연결이 끊긴 줄 모르고 승인까지 마쳤다. 그래서 타임아웃 난 호출은 실패가 아니라 결과를 모르는 상태로 다뤄야 한다.",
    anchor: "세-서비스의-줄을-시각순으로-세운다",
  },
  {
    id: "debugging-with-logs-4",
    post: "debugging-with-logs",
    question:
      "여러 서버 로그를 시각순으로 합쳤더니 결제 요청이 주문 요청보다 먼저 온 것처럼 보인다. 서비스를 건너는 순서를 바르게 맞추는 방법은?",
    choices: [
      "로그 저장소에 들어온 시각으로 다시 정렬한다",
      "메시지 이름을 알파벳순으로 정렬한다",
      "가장 늦은 서버 시계에 맞춰 일괄로 더한다",
      "부르는 쪽이 보낸 span ID와 받는 쪽의 부모 span ID를 짝지어 인과로 맞춘다",
    ],
    answer: 3,
    explanation:
      "서버마다 시계가 달라서 시각만으로는 서비스 사이 순서를 믿을 수 없다. client_span과 parent_span을 짝지으면 시계와 상관없이 어느 시도가 어느 처리였는지 나온다. 저장소에 들어온 시각은 수집 지연까지 섞여 더 부정확하다.",
    anchor: "시계가-틀린-서버의-줄은-순서를-속인다",
  },
  {
    id: "debugging-with-logs-5",
    post: "debugging-with-logs",
    question:
      "orders는 타임아웃 로그를 남겼는데 payments 쪽에는 그 호출을 부모로 가진 줄이 하나도 없다. 무엇을 뜻하나?",
    choices: [
      "payments가 늦게라도 처리했으니 재시도하면 중복이 생긴다",
      "요청이 payments에 닿지 않았을 가능성이 크다",
      "payments가 debug 레벨이라 줄이 안 보인다",
      "trace_id가 샘플링으로 버려졌다",
    ],
    answer: 1,
    explanation:
      "받는 쪽 로그가 아예 없으면 연결 거부나 DNS 실패처럼 요청이 서버까지 가지 못한 경우다. 받는 쪽 줄이 있는데 클라이언트가 타임아웃이면 늦게라도 처리된 경우라 재시도가 위험하다. 둘은 재시도가 안전한지가 다르다.",
    anchor: "시계가-틀린-서버의-줄은-순서를-속인다",
  },
  {
    id: "debugging-with-logs-6",
    post: "debugging-with-logs",
    question: "운영에서 한 사용자만 debug 로그를 켜는 방법으로 가장 알맞은 것은?",
    choices: [
      "LOG_LEVEL=debug로 전체를 재배포한다",
      "누구나 X-Debug: 1 헤더를 보내면 켜지게 한다",
      "기능 플래그로 대상인지 판단해 요청 문맥(AsyncLocalStorage)에 넣고, 로거가 요청마다 레벨을 정하게 한다",
      "debug 로그를 별도 파일에 써서 나중에 지운다",
    ],
    answer: 2,
    explanation:
      "요청 문맥에 debug 여부를 넣으면 그 요청의 로그 호출만 debug까지 남는다. 실습에서는 200건 중 한 요청에만 debug 줄 6개가 붙었다. 아무나 헤더로 켤 수 있게 하면 누구나 로그를 부풀릴 수 있어서, 헤더 방식은 내부 인증된 요청에만 허용한다.",
    anchor: "재배포-없이-한-사람만-debug로",
  },
  {
    id: "debugging-with-logs-7",
    post: "debugging-with-logs",
    question:
      "원인이 \"카드사 첫 승인이 1초를 넘으면 재시도로 두 번 승인된다\"로 밝혀졌다. 가장 근본적인 수정은?",
    choices: [
      "orders의 타임아웃을 2초로 늘린다",
      "결제 호출의 재시도를 없앤다",
      "카드사 응답 시간 알림을 건다",
      "주문 ID를 멱등 키로 보내고, payments가 같은 키의 결제를 한 번만 승인하게 한다",
    ],
    answer: 3,
    explanation:
      "타임아웃을 늘리는 건 이번 숫자에만 맞춘 땜질이라 카드사가 더 느린 날 다시 터진다. 재시도를 없애면 일시적 오류마다 결제가 실패한다. 같은 요청을 몇 번 받아도 한 번만 처리하게 만들면 재시도와 타임아웃이 그대로여도 안전하다.",
    anchor: "로그로-찾은-조건을-재현으로-옮긴다",
  },
];
