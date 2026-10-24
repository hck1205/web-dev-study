import type { QuizQuestion } from "../types";

export const NODEJS_CLI_PROCESS: QuizQuestion[] = [
  {
    id: "nodejs-cli-process-1",
    post: "nodejs-cli-process",
    question: "CLI가 진행 상황 로그는 stderr로, 결과 JSON은 stdout으로 내보내야 하는 이유는?",
    choices: [
      "stderr가 stdout보다 빠르게 출력되어서",
      "stderr로 쓴 내용은 종료 코드에 반영되어서",
      "stdout은 한 번에 64KB까지만 쓸 수 있어서",
      "파이프는 stdout만 다음 명령으로 넘기므로, 로그가 섞이면 다음 명령의 파서가 깨지기 때문에",
    ],
    answer: 3,
    explanation:
      "`tool | jq`처럼 이을 때 파이프는 stdout만 넘기고 stderr는 터미널에 그대로 남긴다. 그래서 사람에게 하는 말은 stderr, 결과는 stdout으로 나누면 파서가 안내 문구에서 깨지지 않는다. 사용자는 `2>/dev/null`로 소음만 끌 수도 있다.",
    anchor: "stdout은-데이터-stderr는-사람에게",
  },
  {
    id: "nodejs-cli-process-2",
    post: "nodejs-cli-process",
    question: "리눅스에서 200만 바이트를 stdout에 쓰고 process.exit(0)을 부른 스크립트를 `| (sleep 1; wc -c)`로 받았더니 64000바이트만 남았다. 파일로 리다이렉트하면 멀쩡하다. 이유는?",
    choices: [
      "파이프로 가는 stdout 쓰기는 비동기라 커널로 못 넘긴 데이터가 process.exit와 함께 사라져서",
      "wc가 64000바이트까지만 셀 수 있어서",
      "process.exit(0)은 종료 코드 0일 때만 출력을 버려서",
      "파일 쓰기도 비동기지만 디스크가 더 빨라서",
    ],
    answer: 0,
    explanation:
      "리눅스에서 파일과 터미널로의 쓰기는 동기지만 파이프로의 쓰기는 비동기다. write는 데이터를 Node 안에 들고 바로 돌아오므로, 파이프 버퍼에 들어간 만큼만 살아남고 나머지는 process.exit와 함께 사라진다. process.exitCode를 적고 자연스럽게 끝내면 된다.",
    anchor: "파이프에-붙은-stdout은-기다려-주지-않는다",
  },
  {
    id: "nodejs-cli-process-3",
    post: "nodejs-cli-process",
    question: "`node tool.mjs | head -2`에서 두 줄은 잘 나왔는데 뒤에 Error: write EPIPE 스택이 찍혔다. 가장 알맞은 대응은?",
    choices: [
      "head 대신 tail을 쓴다",
      "console.log 대신 process.stdout.write를 쓴다",
      "process.stdout에 error 리스너를 달고 EPIPE면 0으로 끝낸다",
      "SIGPIPE 리스너를 달아 무시한다",
    ],
    answer: 2,
    explanation:
      "head가 먼저 끝나 읽는 쪽이 닫힌 파이프에 쓰면 커널이 EPIPE를 돌려준다. Node는 SIGPIPE를 무시하도록 되어 있어서 이걸 stdout의 error 이벤트로 받고, 리스너가 없으면 종료 코드 1로 죽는다. console.log도 내부적으로 같은 stdout에 쓰니 바꿔도 소용없다.",
    anchor: "받는-쪽이-먼저-끝나면-epipe",
  },
  {
    id: "nodejs-cli-process-4",
    post: "nodejs-cli-process",
    question: "출력이 파이프로 갈 때 process.stdout.isTTY의 값은?",
    choices: ["false", "undefined", "0", "\"pipe\""],
    answer: 1,
    explanation:
      "isTTY는 터미널 스트림에만 붙는 속성이라 파이프나 파일이면 false가 아니라 undefined다. 그래서 `=== false`로 비교하면 늘 거짓이 되고, 참·거짓으로만 판단해야 한다. 색과 진행 막대는 이 값이 참일 때만 켠다.",
    anchor: "stdin이-터미널인지-파이프인지",
  },
  {
    id: "nodejs-cli-process-5",
    post: "nodejs-cli-process",
    question: "readline/promises로 확인 질문을 하는 스크립트를 stdin이 닫힌 CI에서 돌렸더니 종료 코드 13으로 끝났다. 무슨 일인가?",
    choices: [
      "질문 문구를 stderr로 써서 권한 오류가 났다",
      "readline이 TTY가 아니면 자동으로 \"n\"을 답해서",
      "질문의 Promise가 영원히 풀리지 않아 Node가 끝나지 않은 최상위 await로 보고 종료했다",
      "CI가 SIGINT를 보내서",
    ],
    answer: 2,
    explanation:
      "입력이 닫히면 question()이 돌려준 Promise가 풀리지 않고, 할 일이 없어진 Node는 unsettled top-level await 경고와 함께 13으로 끝난다. 그래서 --yes 플래그를 두고, stdin이 TTY가 아니면 질문 대신 필요한 플래그를 알려 주고 2로 끝낸다.",
    anchor: "대화형-프롬프트는-입력이-없을-때를-대비한다",
  },
  {
    id: "nodejs-cli-process-6",
    post: "nodejs-cli-process",
    question: "셸에서 API_URL=override를 주고 `node --env-file=.env`로 실행했다. .env에도 API_URL이 있다면 process.env.API_URL은?",
    choices: [
      ".env 파일의 값",
      "충돌이라 Node가 시작하지 않는다",
      "두 값이 쉼표로 이어진 문자열",
      "override",
    ],
    answer: 3,
    explanation:
      "이미 프로세스 환경에 있는 변수가 .env 파일 값보다 이긴다. 그래서 CI나 쿠버네티스가 주입한 값이 로컬 파일에 덮이지 않는다. 파일이 없을 때 실패하지 않게 하려면 --env-file-if-exists를 쓴다.",
    anchor: "환경-변수와-작업-디렉터리",
  },
  {
    id: "nodejs-cli-process-7",
    post: "nodejs-cli-process",
    question: "package.json의 scripts에 \"deploy\": \"deploy --env prod\"가 있다. `npm run deploy --dry-run`으로 실행하면 --dry-run이 스크립트에 전달되지 않는 이유는?",
    choices: [
      "npm이 --dry-run을 자기 옵션으로 가져가기 때문에, 스크립트에 넘기려면 -- 뒤에 써야 한다",
      "bin 필드가 없어서",
      "--dry-run은 Node 옵션이라 execArgv로 가서",
      "npm run은 인자를 아예 넘기지 않아서",
    ],
    answer: 0,
    explanation:
      "npm run 뒤의 --는 여기부터는 npm 옵션이 아니라 스크립트 인자라는 표시다. 빼먹으면 npm이 옵션을 가져간다. `npm run -s deploy -- --dry-run`으로 실행하면 스크립트가 [--env, prod, --dry-run]을 받는다.",
    anchor: "bin-필드로-명령어가-된다",
  },
];
