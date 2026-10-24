import type { QuizQuestion } from "../types";

export const JS_ERROR_HANDLING: QuizQuestion[] = [
  {
    id: "js-error-handling-1",
    post: "js-error-handling",
    question: "submitOrder 안에 try/finally만 있고 catch는 없다. 그 안에서 에러가 나면 어떻게 되나?",
    choices: [
      "finally가 에러를 처리한 것으로 보고 정상 종료된다",
      "finally는 건너뛰고 바로 위의 catch로 간다",
      "finally가 실행된 뒤 에러는 계속 부른 쪽으로 올라간다",
      "catch가 없으니 그 자리에서 프로그램이 멈춘다",
    ],
    answer: 2,
    explanation:
      "throw는 콜 스택을 되감으며 가장 가까운 catch를 찾고, 올라가는 길의 finally는 모두 실행한다. finally는 에러를 잡지 않으니 정리만 하고 에러는 그대로 위로 간다. 그래서 로딩 끄기 같은 정리에 try/finally를 쓴다.",
    anchor: "던진-순간-함수는-거기서-멈춘다",
  },
  {
    id: "js-error-handling-2",
    post: "js-error-handling",
    question: "try에서 에러를 던졌는데 finally에서 return \"ok\"를 했다. 호출한 쪽은 무엇을 받나?",
    choices: [
      "원래 에러가 던져진다",
      "\"ok\"를 받고, 에러는 사라진다",
      "AggregateError로 둘 다 받는다",
      "undefined를 받는다",
    ],
    answer: 1,
    explanation:
      "finally의 return은 try의 반환값과 던져진 에러를 모두 덮어쓴다. 실패했는데 정상 값이 돌아가니 호출한 쪽은 실패를 모른다. 그래서 finally에서는 정리만 하고 no-unsafe-finally 규칙으로 막는다.",
    anchor: "finally가-결과를-덮어쓴다",
  },
  {
    id: "js-error-handling-3",
    post: "js-error-handling",
    question: "에러 로그를 JSON.stringify(err)로 보냈더니 {}만 찍혔다. 왜인가?",
    choices: [
      "message와 stack이 열거되지 않는 속성이라 JSON.stringify가 무시하기 때문이다",
      "Error 객체는 순환 참조를 갖고 있기 때문이다",
      "stack이 너무 길어서 잘리기 때문이다",
      "Error는 클래스 인스턴스라 직렬화할 수 없기 때문이다",
    ],
    answer: 0,
    explanation:
      "Error의 message와 stack은 열거되지 않는 속성이라 Object.keys에도 JSON.stringify에도 나오지 않는다. 직접 붙인 필드는 나온다. 보낼 때는 name, message, stack, cause를 꺼내 새 객체로 만든다.",
    anchor: "error-객체가-들고-다니는-것",
  },
  {
    id: "js-error-handling-4",
    post: "js-error-handling",
    question: "JSON.parse와 applyConfig를 한 try로 감싸고 catch에서 기본 설정을 돌려준다. 무엇이 문제인가?",
    choices: [
      "JSON.parse의 에러는 catch로 잡을 수 없다",
      "catch에서 return하면 finally가 실행되지 않는다",
      "기본 설정 객체가 공유되어 바뀔 수 있다",
      "applyConfig의 버그로 난 TypeError까지 삼켜서 원인이 숨는다",
    ],
    answer: 3,
    explanation:
      "넓게 감싼 catch는 예상한 SyntaxError뿐 아니라 다른 줄의 버그도 같이 받는다. try는 실패를 예상하는 한 줄만 감싸고, catch에서 예상한 종류가 아니면 다시 던져야 한다. 그래야 버그가 \"가끔 설정이 안 먹는다\" 같은 증상으로 숨지 않는다.",
    anchor: "삼킨-에러는-어디에도-남지-않는다",
  },
  {
    id: "js-error-handling-5",
    post: "js-error-handling",
    question: "try { load(); } catch (e) { ... } 에서 async 함수 load가 던진 에러가 catch에 오지 않는 이유는?",
    choices: [
      "async 함수는 에러를 던질 수 없기 때문이다",
      "load()는 거부된 Promise를 돌려줄 뿐 그 자리에서 던지지 않아, await 없이는 try가 정상으로 끝나기 때문이다",
      "catch가 비동기 에러를 받으려면 catch(async e)로 써야 하기 때문이다",
      "에러가 마이크로태스크 큐에서 사라지기 때문이다",
    ],
    answer: 1,
    explanation:
      "async 함수 안의 throw는 반환된 Promise를 거부할 뿐이다. await를 붙여야 거부가 그 자리에서 던진 에러로 바뀌어 catch에 온다. 놓친 거부는 unhandledrejection 이벤트로 간다.",
    anchor: "trycatch가-닿지-않는-곳",
  },
  {
    id: "js-error-handling-6",
    post: "js-error-handling",
    question: "iframe에서 만든 에러를 바깥 페이지에서 e instanceof Error로 검사했더니 false다. 이유와 대안은?",
    choices: [
      "iframe 안에서는 Error를 상속할 수 없다. 문자열로 던져야 한다",
      "postMessage로 오면서 에러가 문자열이 되었다. JSON.parse로 되돌린다",
      "실행 환경마다 Error 생성자가 따로 있어 프로토타입이 다르다. name이나 code 필드로 판별한다",
      "instanceof는 내장 에러에만 동작한다. typeof로 검사한다",
    ],
    answer: 2,
    explanation:
      "iframe은 자기만의 전역과 Error를 갖는 다른 realm이라, 그 안의 에러는 바깥 Error의 인스턴스가 아니다. 라이브러리가 번들에 두 벌 들어가도 같은 일이 생긴다. 경계를 넘는 에러는 name이나 code처럼 값으로 판별한다.",
    anchor: "내-에러-클래스-만들기",
  },
  {
    id: "js-error-handling-7",
    post: "js-error-handling",
    question: "fetch로 요청했는데 서버가 404를 돌려줬다. 기본 동작은?",
    choices: [
      "Promise가 이행되고 res.ok가 false다. 직접 확인해서 에러로 바꿔야 한다",
      "TypeError로 거부된다",
      "HttpError로 거부되고 status가 404다",
      "AbortError로 거부된다",
    ],
    answer: 0,
    explanation:
      "fetch는 응답을 받기만 하면 상태 코드와 상관없이 이행되고, 네트워크 실패나 취소일 때만 거부된다. 그래서 API 클라이언트 같은 경계에서 res.ok를 보고 내 에러 종류로 바꿔 둔다. HttpError는 직접 만든 클래스다.",
    anchor: "경계에서-한-번-바꾼다",
  },
];
