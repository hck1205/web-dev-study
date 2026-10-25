import type { QuizQuestion } from "../types";

export const NODEJS_ERROR_HANDLING: QuizQuestion[] = [
  {
    id: "nodejs-error-handling-1",
    post: "nodejs-error-handling",
    question:
      "fs.readFile 콜백에서 ENOENT가 났는데 err를 보지 않고 JSON.parse(text)를 불렀다. 로그에 남는 에러는 무엇이고, 왜 원인을 찾기 어려워지나?",
    choices: [
      "ENOENT가 그대로 찍힌다. 콜백의 err는 자동으로 다시 던져지기 때문이다",
      "SyntaxError가 찍힌다. err가 버려지고 text가 undefined라 엉뚱한 곳에서 다른 에러가 났기 때문이다",
      "아무것도 찍히지 않는다. 콜백 안의 에러는 항상 조용히 무시된다",
      "TypeError가 찍힌다. readFile이 실패하면 text 대신 null이 들어오기 때문이다",
    ],
    answer: 1,
    explanation:
      "error-first 콜백은 실패를 첫 인자로 넘길 뿐 다시 던지지 않는다. err를 확인하지 않으면 원인인 ENOENT는 사라지고, undefined를 파싱한 SyntaxError만 남는다.",
    anchor: "에러가-새는-자리-콜백-promise-이벤트",
  },
  {
    id: "nodejs-error-handling-2",
    post: "nodejs-error-handling",
    question:
      "uncaughtException 리스너에서 로그만 찍고 서버를 계속 돌렸더니, 헬스 체크는 통과하는데 요청이 끝없이 대기한다. 가장 그럴듯한 이유는?",
    choices: [
      "리스너를 달면 이벤트 루프가 멈추기 때문이다",
      "Node가 리스너가 있는 프로세스의 소켓을 닫아 버리기 때문이다",
      "에러 이후 코드가 실행되지 않아 빌린 연결이나 잠금이 반납되지 않았기 때문이다",
      "uncaughtException 리스너는 한 번만 호출되고 그 뒤로는 에러가 무시되기 때문이다",
    ],
    answer: 2,
    explanation:
      "에러가 난 지점 뒤의 release 같은 정리 코드가 돌지 않아서 상태가 반쯤 바뀐 채 남는다. 프로세스는 살아 있으니 재시작도 안 된다. 그래서 이 리스너는 기록하고 종료하는 자리로 쓴다.",
    anchor: "버그와-예상한-실패는-다르게-다룬다",
  },
  {
    id: "nodejs-error-handling-3",
    post: "nodejs-error-handling",
    question:
      "Node 14에서 잘 돌던 서비스를 Node 22로 올리자, await 없이 부른 async 함수가 실패할 때마다 프로세스가 종료 코드 1로 죽는다. 무엇이 바뀌었나?",
    choices: [
      "--unhandled-rejections 기본값이 warn에서 throw로 바뀌었다",
      "async 함수가 동기 예외를 던지도록 바뀌었다",
      "Promise.reject가 기본으로 process.exit(1)을 부르도록 바뀌었다",
      "Error.stackTraceLimit 기본값이 줄어 스택이 넘쳤다",
    ],
    answer: 0,
    explanation:
      "Node 15부터 처리되지 않은 거부를 잡히지 않은 예외처럼 다룬다. 그 전에는 경고만 찍고 계속 돌았다. 플래그로 되돌리기보다 새는 거부를 찾아 막는 게 맞다.",
    anchor: "에러가-새는-자리-콜백-promise-이벤트",
  },
  {
    id: "nodejs-error-handling-4",
    post: "nodejs-error-handling",
    question:
      "배포할 때마다 이전 파드가 종료 코드 143으로 끝난다. 이 숫자로 알 수 있는 것은?",
    choices: [
      "메모리 한도를 넘어 OOM killer가 죽였다",
      "잡히지 않은 예외가 143개 쌓였다",
      "uncaughtException 리스너 안에서 또 예외가 났다",
      "SIGTERM에 핸들러가 없어 기본 동작으로 바로 끝났다",
    ],
    answer: 3,
    explanation:
      "시그널로 끝나면 128에 시그널 번호를 더해 보여 준다. 143은 SIGTERM(15)이고 핸들러가 없어서 정리 없이 끝났다는 뜻이다. OOM killer의 SIGKILL은 137, 리스너 안의 재예외는 7이다.",
    anchor: "종료-코드로-누가-끝냈는지-읽는다",
  },
  {
    id: "nodejs-error-handling-5",
    post: "nodejs-error-handling",
    question:
      "감사 로그를 appendFile로 쓰고 바로 process.exit(1)을 불렀더니 0바이트 파일만 남았다. process.exitCode = 1로 바꾸면 왜 내용이 남나?",
    choices: [
      "exitCode는 파일 쓰기를 동기로 바꿔 주기 때문이다",
      "exitCode는 종료 코드만 정해 두고 남은 비동기 작업이 끝나 루프가 빌 때까지 기다리기 때문이다",
      "exit(1)은 파일을 열지 못하게 막기 때문이다",
      "exitCode를 쓰면 Node가 버퍼를 디스크에 fsync하기 때문이다",
    ],
    answer: 1,
    explanation:
      "process.exit는 스레드 풀에서 open까지만 끝난 쓰기를 기다리지 않고 바로 끝낸다. exitCode는 숫자만 적어 두고 자연스럽게 끝나게 둔다. 그래서 CLI의 실패 처리는 exitCode로 적는 편이 낫다.",
    anchor: "processexit는-기다려-주지-않는다",
  },
  {
    id: "nodejs-error-handling-6",
    post: "nodejs-error-handling",
    question:
      "하위 에러를 감쌀 때 new Error(\"load failed: \" + err.message) 대신 new Error(\"load failed\", { cause: err })를 쓰면 무엇이 달라지나?",
    choices: [
      "원래 에러의 code와 스택이 남아 위쪽에서 err.cause.code로 분기할 수 있다",
      "스택 트레이스가 짧아져 로그 크기가 줄어든다",
      "cause를 넣으면 에러가 자동으로 재시도된다",
      "JSON.stringify(err)에 message와 stack이 포함된다",
    ],
    answer: 0,
    explanation:
      "메시지만 이어 붙이면 code, errno, 원래 스택이 사라진다. cause로 감싸면 바깥은 무엇을 하다 실패했는지, 안쪽은 운영체제가 왜 거절했는지를 함께 남긴다. JSON 직렬화 문제는 cause와 상관없다.",
    anchor: "스택-트레이스는-어디까지-따라가나",
  },
];
