import type { QuizQuestion } from "../types";

export const SHELL_REDIRECTION_PIPES: QuizQuestion[] = [
  {
    id: "shell-redirection-pipes-1",
    post: "shell-redirection-pipes",
    question: "크론에 `job.sh 2>&1 > /var/log/job.log`로 걸었더니 오류가 로그에 안 남는다. 이유는?",
    choices: [
      "크론은 stderr를 항상 버리기 때문이다",
      "> 는 stderr를 덮어쓰기 때문이다",
      "2>&1은 파이프가 있을 때만 동작하기 때문이다",
      "2>&1이 그 순간 1번이 가리키던 곳(원래 출력)을 2번에 복사했고, 그 뒤 > 는 1번만 파일로 바꿨기 때문이다",
    ],
    answer: 3,
    explanation:
      "리다이렉션은 왼쪽부터 적용되고 2>&1은 dup2(1, 2)처럼 지금 1번의 대상을 복사할 뿐이다. 1번이 나중에 바뀌어도 2번은 따라가지 않는다. 둘 다 파일로 보내려면 > 파일 2>&1 순서로 쓴다.",
    anchor: "리다이렉션은-왼쪽부터-표의-칸을-바꾼다",
  },
  {
    id: "shell-redirection-pipes-2",
    post: "shell-redirection-pipes",
    question: "일반 사용자로 `sudo echo x > /etc/foo.conf`를 쳤더니 Permission denied가 났다. 왜인가?",
    choices: [
      "echo는 sudo로 실행할 수 없는 셸 내장 명령이라서",
      "> 리다이렉션은 sudo가 실행되기 전에 일반 사용자 권한의 셸이 처리해서",
      "/etc 아래 파일은 root도 리다이렉션으로 쓸 수 없어서",
      "sudo가 env_reset으로 리다이렉션을 지워서",
    ],
    answer: 1,
    explanation:
      "오류를 낸 주체가 bash라는 점이 단서다. 셸이 먼저 파일을 열려다 실패했고, root가 되는 것은 echo뿐이다. echo x | sudo tee /etc/foo.conf처럼 파일을 여는 프로그램을 root로 띄우면 된다.",
    anchor: "sudo-echo가-permission-denied를-내는-이유",
  },
  {
    id: "shell-redirection-pipes-3",
    post: "shell-redirection-pipes",
    question: "`sort list.txt > list.txt`를 실행했더니 list.txt가 빈 파일이 됐다. 이유는?",
    choices: [
      "셸이 sort를 실행하기 전에 > 로 list.txt를 0바이트로 잘라 열었고, sort는 빈 파일을 읽었기 때문에",
      "sort가 같은 파일에 쓰면 내용을 지우도록 만들어져 있어서",
      "파이프 버퍼가 64KiB라 넘친 내용이 버려져서",
      "noclobber가 기본으로 켜져 있어서",
    ],
    answer: 0,
    explanation:
      "출력 리다이렉션은 명령보다 먼저 파일을 만들거나 잘라서 연다. 그래서 같은 파일을 읽고 쓰면 읽을 내용이 이미 사라진다. sort -o list.txt list.txt처럼 명령이 다 읽은 뒤 쓰게 하거나 임시 파일과 mv를 쓴다.",
    anchor: "출력-리다이렉션은-명령보다-먼저-파일을-연다",
  },
  {
    id: "shell-redirection-pipes-4",
    post: "shell-redirection-pipes",
    question: "아무것도 읽지 않는 프로그램 앞에 파이프로 1KiB씩 쓰는 프로그램을 붙였더니 64KiB를 쓰고 멈췄다. 이때 쓰는 쪽은 어떤 상태인가?",
    choices: [
      "SIGPIPE를 받고 141로 종료했다",
      "CPU를 100% 쓰며 재시도하고 있다",
      "파이프 버퍼가 가득 차 write가 돌아오지 않아 잠들어 있다",
      "남는 데이터를 임시 파일로 옮기고 있다",
    ],
    answer: 2,
    explanation:
      "리눅스 파이프의 기본 버퍼는 64KiB이고, 가득 차면 쓰는 쪽은 읽는 쪽이 비울 때까지 블록되어 잠든다. SIGPIPE는 읽는 쪽이 파이프를 닫았을 때 받는다. 느린 로그 수집기가 앱의 쓰기를 막는 것도 같은 원리다.",
    anchor: "파이프는-두-프로세스를-동시에-띄운다",
  },
  {
    id: "shell-redirection-pipes-5",
    post: "shell-redirection-pipes",
    question: "`printf 'a\\nb\\n' | while read -r l; do n=$((n+1)); done; echo $n`이 빈 값이나 0을 찍는 이유와 고치는 방법은?",
    choices: [
      "read가 줄바꿈을 읽지 못해서다. read -d ''로 바꾼다",
      "파이프의 while이 서브셸에서 돌아 변수가 사라진다. done < <(printf ...)처럼 프로세스 치환으로 입력을 준다",
      "$((n+1))은 파이프 안에서 동작하지 않는다. let을 쓴다",
      "printf의 출력이 버퍼에 남아서다. stdbuf -o0을 붙인다",
    ],
    answer: 1,
    explanation:
      "bash는 파이프의 각 명령을 별도 프로세스에서 실행해서, 루프에서 바꾼 변수는 서브셸과 함께 사라진다. 프로세스 치환으로 입력만 받게 하면 while이 현재 셸에서 돌아 값이 남는다. 스크립트에서는 shopt -s lastpipe도 방법이다.",
    anchor: "파이프는-두-프로세스를-동시에-띄운다",
  },
  {
    id: "shell-redirection-pipes-6",
    post: "shell-redirection-pipes",
    question: "here document의 끝표시를 `<<'EOF'`처럼 따옴표로 감싸면 무엇이 달라지나?",
    choices: [
      "본문 줄 앞의 탭이 지워진다",
      "본문 끝에 줄바꿈이 붙지 않는다",
      "본문 안의 $변수와 명령 치환이 펼쳐지지 않고 글자 그대로 전달된다",
      "본문이 stdin이 아니라 파일 인자로 전달된다",
    ],
    answer: 2,
    explanation:
      "따옴표 없는 끝표시는 본문에서 변수, 명령 치환, 산술 확장을 펼치고, 따옴표를 붙이면 아무것도 펼치지 않는다. $가 많은 nginx 설정을 파일로 쓸 때 쓴다. 탭을 지우는 것은 <<- 다.",
    anchor: "here-document와-here-string",
  },
];
