import type { QuizQuestion } from "../types";

export const SHELLS_POSIX_COMPAT: QuizQuestion[] = [
  {
    id: "shells-posix-compat-1",
    post: "shells-posix-compat",
    question: "첫 줄이 #!/bin/bash인 스크립트를 Ubuntu에서 `sh deploy.sh`로 실행했다. 누가 이 파일을 읽나?",
    choices: [
      "shebang에 적힌 bash",
      "/bin/sh가 가리키는 dash",
      "로그인 셸인 $SHELL",
      "커널이 두 셸 중 버전이 높은 쪽을 고른다",
    ],
    answer: 1,
    explanation:
      "셸 이름을 앞에 적으면 커널은 그 셸만 띄우고, shebang 줄은 그 셸에게 주석일 뿐이다. shebang은 ./deploy.sh처럼 파일 자체를 실행할 때 커널이 읽는다. Ubuntu의 /bin/sh는 dash다.",
    anchor: "누가-스크립트를-읽을지는-실행하는-방법이-정한다",
  },
  {
    id: "shells-posix-compat-2",
    post: "shells-posix-compat",
    question: "dash가 `if [[ \"$1\" == prod* ]]; then ...` 줄을 만나면 어떻게 되나?",
    choices: [
      "문법 오류로 스크립트가 바로 멈춘다",
      "[[를 [로 바꿔 POSIX 방식으로 실행한다",
      "[[를 명령 이름으로 찾다가 not found로 실패하고, if는 거짓으로 처리해 계속 간다",
      "bash를 자동으로 불러 그 줄만 대신 실행한다",
    ],
    answer: 2,
    explanation:
      "dash에게 [[는 문법이 아니라 그냥 명령 이름이라 127로 실패한다. if는 그 실패를 거짓으로 보고 다음으로 넘어가서, 오류 한 줄만 남기고 다른 분기를 탄다. 배열처럼 문법 단계에서 멈추는 경우보다 찾기 어렵다.",
    anchor: "같은-줄이-셸마다-다르게-깨진다",
  },
  {
    id: "shells-posix-compat-3",
    post: "shells-posix-compat",
    question: "zsh에서 잘 돌던 `for w in $f` 반복이 bash에서 파일 이름을 둘로 쪼갰다. 왜인가?",
    choices: [
      "zsh는 따옴표 없는 변수를 공백에서 쪼개지 않지만 bash는 쪼개기 때문이다",
      "bash는 for 반복에서 배열 번호를 1부터 세기 때문이다",
      "zsh가 $f를 자동으로 배열로 바꿨기 때문이다",
      "bash는 공백이 든 파일 이름을 지원하지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "zsh는 기본으로 따옴표 없는 $var를 단어로 쪼개지 않는다. bash는 공백에서 쪼갠다. 그래서 zsh에서 안 보이던 따옴표 누락이 bash에서 버그로 드러난다. 배열 번호도 zsh는 1, bash는 0부터 시작한다.",
    anchor: "같은-줄이-셸마다-다르게-깨진다",
  },
  {
    id: "shells-posix-compat-4",
    post: "shells-posix-compat",
    question: "bash의 `${x^^}`와 `echo -e`를 POSIX sh로 옮길 때 가장 알맞은 대체는?",
    choices: [
      "${x^}와 echo -n",
      "printf와 tr '[:lower:]' '[:upper:]'",
      "source와 [[ ]]",
      "function 키워드와 $'...' 따옴표",
    ],
    answer: 1,
    explanation:
      "대소문자 변환 확장은 bash 4의 것이라 tr로 바꾸고, echo의 옵션은 셸마다 달라서 printf로 쓴다. 보기의 나머지는 모두 bash나 ksh 확장이라 POSIX sh에서 깨진다.",
    anchor: "posix-sh가-약속하는-것",
  },
  {
    id: "shells-posix-compat-5",
    post: "shells-posix-compat",
    question: "팀의 Ubuntu 서버와 CI에서만 도는 운영 스크립트를 새로 쓴다. 어떻게 하는 것이 가장 맞나?",
    choices: [
      "어디서든 돌도록 반드시 POSIX sh로 쓴다",
      "개발자 대화형 셸이 zsh라면 #!/bin/zsh로 쓴다",
      "#!/usr/bin/env bash로 못박고 배열과 pipefail을 쓴다",
      "shebang 없이 두고 crontab에서 sh로 부른다",
    ],
    answer: 2,
    explanation:
      "bash가 늘 있는 환경이면 bash로 못박는 편이 안전하다. 억지로 POSIX에 맞추면 배열 대신 위치 매개변수를 쓰는 묘기 때문에 실수가 는다. POSIX가 필요한 것은 Alpine 같은 작은 이미지나 여러 유닉스에 배포할 때다.",
    anchor: "posix-sh가-약속하는-것",
  },
  {
    id: "shells-posix-compat-6",
    post: "shells-posix-compat",
    question: "#!/bin/sh 스크립트의 이식성을 검사했다. 실험에서 checkbashisms가 놓치고 shellcheck --shell=sh가 잡은 것은?",
    choices: [
      "[[ ]] 테스트",
      "{1..3} 중괄호 확장",
      "files=(a.txt b.txt) 배열 대입",
      "source 명령",
    ],
    answer: 2,
    explanation:
      "checkbashisms는 배열 참조 ${files[0]}는 잡았지만 dash를 멈춘 배열 대입 줄은 놓쳤다. shellcheck는 SC3030으로 잡았다. 도구 검사 뒤에도 실제 이미지에서 돌려 보는 이유다.",
    anchor: "사투리를-기계에게-찾게-한다",
  },
  {
    id: "shells-posix-compat-7",
    post: "shells-posix-compat",
    question: "PowerShell의 `Get-Process | Where-Object CPU -gt 100`이 bash의 `ps aux | awk '$3 > 50'`보다 출력 형식 변화에 강한 이유는?",
    choices: [
      "PowerShell은 출력을 자동으로 표 형식으로 고정하기 때문이다",
      "파이프로 텍스트가 아니라 객체가 흘러 속성 이름으로 고르기 때문이다",
      "awk가 숫자 비교를 지원하지 않기 때문이다",
      "PowerShell은 외부 프로그램 출력도 객체로 바꿔 주기 때문이다",
    ],
    answer: 1,
    explanation:
      "유닉스 파이프에는 바이트가 흘러 칸 번호로 잘라야 하니 출력 모양이 바뀌면 깨진다. PowerShell 파이프에는 .NET 객체가 흘러 CPU 같은 속성으로 고른다. 다만 git 같은 외부 프로그램 출력은 문자열로 들어오니 JSON으로 받아 변환한다.",
    anchor: "powershell과-cmd는-텍스트가-아니라-다른-것을-넘긴다",
  },
];
