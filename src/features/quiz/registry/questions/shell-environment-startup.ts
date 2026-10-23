import type { QuizQuestion } from "../types";

export const SHELL_ENVIRONMENT_STARTUP: QuizQuestion[] = [
  {
    id: "shell-environment-startup-1",
    post: "shell-environment-startup",
    question: "셸에서 `APP_ENV=prod`만 쓰고 `bash -c 'echo $APP_ENV'`를 실행하면 빈 줄이 나온다. 왜인가?",
    choices: [
      "bash -c는 원래 변수를 읽지 못한다",
      "작은따옴표 때문에 변수가 펼쳐지지 않았다",
      "export하지 않은 셸 변수는 bash 메모리에만 있고 자식 프로세스의 환경 목록에 들어가지 않는다",
      "자식 셸은 .bashrc를 다시 읽으면서 값을 지운다",
    ],
    answer: 2,
    explanation:
      "자식에게 넘어가는 건 운영체제의 환경 목록이고, 거기에는 export한 변수만 올라간다. 작은따옴표는 부모가 펼치지 않게 막을 뿐이고 자식 셸이 $APP_ENV를 펼치는데, 자식의 환경에 그 이름이 없어 빈 값이 나온다.",
    anchor: "셸-변수와-환경-변수는-사는-곳이-다르다",
  },
  {
    id: "shell-environment-startup-2",
    post: "shell-environment-startup",
    question: "앱을 띄운 셸에서 `export DB_HOST=새값`으로 바꿨다. 실행 중인 앱의 `/proc/PID/environ`은?",
    choices: [
      "옛 값 그대로다. 환경은 실행하는 순간 복사되고 그 뒤로 부모와 자식은 따로다",
      "새 값으로 바뀐다. 자식은 부모의 환경을 계속 참조한다",
      "DB_HOST 항목이 지워진다",
      "앱이 다음 요청을 받을 때 새 값을 다시 읽는다",
    ],
    answer: 0,
    explanation:
      "환경은 execve 때 사본으로 넘어가고 이후 부모의 변경은 이미 뜬 프로세스에 닿지 않는다. 그래서 환경 변수로 준 설정을 바꾸면 프로세스를 재시작해야 반영된다.",
    anchor: "자식은-복사본을-받는다",
  },
  {
    id: "shell-environment-startup-3",
    post: "shell-environment-startup",
    question: "`mytool`을 지우고 다른 디렉터리에 다시 깔았더니, 같은 터미널에서 `No such file or directory`가 난다. 가장 가능성 높은 원인은?",
    choices: [
      "새 디렉터리가 PATH에 없다",
      "bash가 해시 테이블에 기억해 둔 옛 경로로 바로 실행하려 했다",
      "실행 권한이 빠졌다",
      "alias가 옛 경로를 가리키고 있다",
    ],
    answer: 1,
    explanation:
      "PATH에서 찾지 못했다면 command not found가 나온다. No such file or directory는 bash가 PATH를 다시 뒤지지 않고 해시에 남은 경로를 실행하다 실패했다는 뜻이고, hash -r이나 새 셸로 풀린다.",
    anchor: "명령-이름이-파일이-되기까지",
  },
  {
    id: "shell-environment-startup-4",
    post: "shell-environment-startup",
    question: "Ubuntu 서버에 `~/.bash_profile`을 새로 만들었더니 ssh 로그인 뒤 alias와 `~/.local/bin` 도구가 사라졌다. 왜인가?",
    choices: [
      ".bash_profile은 비대화형 셸에서만 읽혀서다",
      ".bash_profile이 .bashrc를 덮어써서다",
      "ssh 로그인은 시작 파일을 하나도 읽지 않아서다",
      "로그인 셸은 .bash_profile, .bash_login, .profile 중 처음 있는 하나만 읽어서 .profile을 건너뛰었기 때문이다",
    ],
    answer: 3,
    explanation:
      "로그인 bash는 세 파일 중 처음 찾은 것만 읽는다. PATH를 늘리고 .bashrc를 불러 주던 .profile이 무시되니 둘 다 사라진다. .bash_profile 첫 줄에서 .profile을 불러 주면 된다.",
    anchor: "로그인-셸과-대화형-셸이-읽는-파일",
  },
  {
    id: "shell-environment-startup-5",
    post: "shell-environment-startup",
    question: "`export`와 `cd`를 하는 스크립트를 실행한 뒤에도 현재 셸에 그 변화가 남게 하려면?",
    choices: [
      "chmod +x 후 ./script.sh로 실행한다",
      "bash script.sh로 실행한다",
      "source script.sh(또는 . script.sh)로 현재 셸에서 실행한다",
      "스크립트 끝에 exit 0을 붙인다",
    ],
    answer: 2,
    explanation:
      "./script와 bash script는 새 프로세스에서 돌아 그 안의 export와 cd가 프로세스와 함께 사라진다. source는 현재 셸에서 줄을 그대로 실행하니 변화가 남는다. 대신 그 안의 exit은 현재 셸을 닫는다.",
    anchor: "스크립트를-실행하는-세-가지-방법",
  },
  {
    id: "shell-environment-startup-6",
    post: "shell-environment-startup",
    question: "윈도에서 저장한 스크립트를 `./deploy.sh`로 실행하니 `cannot execute: required file not found`가 난다. 무엇이 없다는 뜻인가?",
    choices: [
      "스크립트 파일 자체",
      "shebang이 가리키는 해석기. 줄 끝의 \\r까지 붙어 /bin/bash\\r을 찾는다",
      "스크립트가 부르는 첫 번째 외부 명령",
      "실행 권한",
    ],
    answer: 1,
    explanation:
      "CRLF로 저장하면 첫 줄이 #!/bin/bash\\r이 되어 커널이 그런 이름의 해석기를 찾다 실패한다. file 명령이 CRLF line terminators를 알려 주고, sed로 \\r을 지우거나 .gitattributes로 막는다.",
    anchor: "shebang과-실행-권한",
  },
  {
    id: "shell-environment-startup-7",
    post: "shell-environment-startup",
    question: "crontab 맨 위에 `PATH=$HOME/.local/bin:$PATH`라고 적었는데도 도구를 못 찾는다. 이유는?",
    choices: [
      "crontab의 변수 줄은 셸이 아니라 cron이 읽어서 $HOME과 $PATH가 펼쳐지지 않고 글자 그대로 들어간다",
      "cron은 PATH 줄을 아예 무시한다",
      "PATH는 crontab 맨 아래에만 적을 수 있다",
      "cron은 로그인 셸이라 .profile이 이 값을 덮어쓴다",
    ],
    answer: 0,
    explanation:
      "crontab의 이름=값 줄은 cron이 직접 해석하고 셸 확장을 하지 않는다. 경로를 글자 그대로 적거나 명령을 절대 경로로 쓴다. cron은 로그인 셸이 아니어서 .profile도 읽지 않는다.",
    anchor: "cron과-systemd에는-내-셸이-없다",
  },
];
