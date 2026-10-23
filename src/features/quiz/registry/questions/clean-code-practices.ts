import type { QuizQuestion } from "../types";

export const CLEAN_CODE_PRACTICES: QuizQuestion[] = [
  {
    id: "clean-code-practices-1",
    post: "clean-code-practices",
    question: "다음 중 남겨 둘 가치가 가장 큰 주석은?",
    choices: [
      "// 저장 (바로 아래 줄이 await save(order))",
      "// 예전 계산 방식 (주석 처리된 코드 20줄)",
      "// 결제사 웹훅은 같은 이벤트를 최대 3번 보낸다. 그래서 eventId로 중복을 거른다",
      "// i를 1 증가시킨다",
    ],
    answer: 2,
    explanation:
      "주석은 코드로 표현할 수 없는 \"왜\"를 적을 때 가치가 있다. 외부 시스템의 동작 때문에 중복을 거른다는 이유는 코드만 봐서는 알 수 없다. 코드를 반복하는 주석과 지운 코드는 git이 이미 기억하고, 코드가 바뀌면 거짓말이 되기 쉽다.",
    anchor: "주석이-하던-일을-이름에게-넘긴다",
  },
  {
    id: "clean-code-practices-2",
    post: "clean-code-practices",
    question: "if 네 개, else if 하나, && 하나, 삼항 연산자 하나가 있는 함수의 순환 복잡도는? (else는 따로 세지 않는다)",
    choices: ["8", "7", "6", "4"],
    answer: 0,
    explanation:
      "순환 복잡도는 1에서 시작해 분기마다 1을 더한다. 1 + if 4 + else if 1 + && 1 + 삼항 1 = 8이고, 실제로 ESLint complexity 규칙도 이 배송비 함수에 8을 보고했다. 7은 시작값 1을 빼먹은 값이다.",
    anchor: "갈림길을-세는-숫자-순환-복잡도",
  },
  {
    id: "clean-code-practices-3",
    post: "clean-code-practices",
    question: "복잡도 8인 함수를 조기 반환과 함수 추출로 4, 4, 2짜리 세 함수로 나눴다. 이 결과를 가장 정확하게 설명한 것은?",
    choices: [
      "업무 규칙의 갈래 수가 8에서 4로 줄었다",
      "리팩터링이 실패했다. 합이 10으로 늘었으니 되돌려야 한다",
      "ESLint가 옵셔널 체이닝을 잘못 세서 생긴 오차다",
      "전체 갈래는 줄지 않았지만 한 함수를 읽을 때 머리에 담아야 할 갈래 수가 줄었다",
    ],
    answer: 3,
    explanation:
      "업무 규칙이 가진 갈래는 리팩터링으로 사라지지 않고, ?.도 분기로 세어 합은 오히려 10이 됐다. 줄어든 것은 한 함수 안에서 동시에 생각해야 하는 경로다. 복잡도 지표는 전체가 아니라 함수 하나를 작게 만드는 도구다.",
    anchor: "조기-반환으로-들여쓰기를-걷어-낸다",
  },
  {
    id: "clean-code-practices-4",
    post: "clean-code-practices",
    question: "ids.forEach(async (id) => { await save(id); }) 다음 줄에서 저장이 모두 끝났다고 가정하고 응답을 보냈다. 무슨 일이 생기나?",
    choices: [
      "forEach가 Promise를 모아 기다리므로 문제없다",
      "forEach는 콜백이 돌려준 Promise를 무시해서, 저장이 끝나기 전에 응답이 나간다",
      "첫 번째 저장만 기다리고 나머지는 건너뛴다",
      "async 콜백을 넘기면 TypeError가 난다",
    ],
    answer: 1,
    explanation:
      "forEach는 콜백의 반환값을 쓰지 않으므로 await가 바깥 흐름을 멈추지 않는다. 실제로 돌려 보면 forEach 직후 배열은 비어 있다. 차례로 기다리려면 for...of, 동시에 돌리고 모두 기다리려면 Promise.all과 map을 쓴다.",
    anchor: "언어가-준-도구를-맞는-자리에-쓴다",
  },
  {
    id: "clean-code-practices-5",
    post: "clean-code-practices",
    question: "getUser(email)이 회원이 없으면 새로 만들어 돌려준다. 관리자 검색 화면에서 이 함수를 쓰면 생기는 문제와 위반한 원칙은?",
    choices: [
      "검색만 했는데 유령 계정이 생긴다. 조회가 상태를 바꿔 명령과 조회의 분리를 어겼다",
      "응답이 느려진다. 디미터 법칙을 어겼다",
      "타입 에러가 난다. 개방 폐쇄 원칙을 어겼다",
      "문제없다. 없으면 만드는 것은 조회의 일부다",
    ],
    answer: 0,
    explanation:
      "CQS는 값을 돌려주는 조회가 상태를 바꾸지 않아야 한다고 말한다. 조회처럼 보이는 함수가 생성까지 하면 로그나 검색처럼 그냥 보는 곳에서 데이터가 바뀐다. findUser와 registerUser로 나누면 어디서 불러도 안전하다.",
    anchor: "바꾸는-함수와-묻는-함수를-나눈다",
  },
  {
    id: "clean-code-practices-6",
    post: "clean-code-practices",
    question: "\"재고가 있는지 묻고, 있으면 줄인다\"를 CQS대로 hasStock()과 decrease() 두 호출로 나누면 생기는 문제는?",
    choices: [
      "문제없다. CQS를 지켰으니 항상 안전하다",
      "두 호출 사이에 다른 요청이 끼어들어 재고가 음수가 될 수 있어, 바꾸면서 결과를 돌려주는 원자적 연산 하나가 맞다",
      "조회가 두 번 일어나 DB 부하가 두 배가 된다",
      "decrease가 값을 돌려주지 않아 컴파일되지 않는다",
    ],
    answer: 1,
    explanation:
      "묻는 것과 바꾸는 것 사이에 시간 차가 생기면 경쟁 조건이 생긴다. 이럴 때는 UPDATE ... WHERE stock > 0 RETURNING이나 Redis INCR처럼 한 번에 바꾸고 결과를 받는 연산이 CQS보다 우선이다. stack.pop()처럼 관례로 받아들이는 예외도 있다.",
    anchor: "바꾸는-함수와-묻는-함수를-나눈다",
  },
  {
    id: "clean-code-practices-7",
    post: "clean-code-practices",
    question: "급여 계산과 근무 보고가 같은 regularHours 함수를 쓴다. 재무팀 요청으로 이 함수를 고친 뒤 생길 수 있는 일과 해결로 맞는 것은?",
    choices: [
      "아무 일도 없다. 중복을 없앤 좋은 설계다",
      "운영팀이 요청하지 않았는데 근무 보고서 숫자가 바뀐다. 바뀌는 이유가 다른 액터별로 계산을 나눠 각자 갖게 한다",
      "급여 계산이 느려진다. regularHours를 캐시한다",
      "저장 방식이 바뀐다. save를 regularHours 안으로 옮긴다",
    ],
    answer: 1,
    explanation:
      "지금 모양이 같아도 재무팀과 운영팀은 서로 다른 이유로 이 계산을 바꾼다. 한 함수에 묶어 두면 한 액터의 변경이 다른 액터의 결과를 바꾼다. 액터마다 코드를 나누는 것이 단일 책임 원칙의 원래 뜻이다.",
    anchor: "누가-바꿔-달라고-하는지로-묶는다",
  },
];
