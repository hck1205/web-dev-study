import type { QuizQuestion } from "../types";

export const BASH_SCRIPTING: QuizQuestion[] = [
  {
    id: "bash-scripting-1",
    post: "bash-scripting",
    question: "`pg_dump shop | gzip > shop.sql.gz`에서 pg_dump가 실패했다. pipefail 없이 이 줄의 종료 코드는?",
    choices: [
      "pg_dump의 실패 코드 1",
      "두 코드를 더한 값",
      "마지막 명령 gzip의 0",
      "파이프는 종료 코드를 남기지 않는다",
    ],
    answer: 2,
    explanation:
      "파이프의 종료 코드는 기본적으로 맨 오른쪽 명령의 것이고, gzip은 빈 입력을 받아도 성공한다. set -o pipefail을 켜야 0이 아닌 가장 오른쪽 값인 1이 된다. 각 명령의 값은 PIPESTATUS에 남는다.",
    anchor: "파이프는-마지막-명령의-성적만-낸다",
  },
  {
    id: "bash-scripting-2",
    post: "bash-scripting",
    question: "set -e를 켠 스크립트에서 함수 check 안의 `false`가 무시되고 끝까지 실행됐다. check를 어떻게 불렀을 때 이런 일이 생기나?",
    choices: [
      "`if check; then ... fi`처럼 조건으로 불렀을 때",
      "`check` 한 줄로 불렀을 때",
      "`check > /dev/null`로 불렀을 때",
      "백틱으로 감싸 불렀을 때",
    ],
    answer: 0,
    explanation:
      "if, while의 조건이나 &&, ||의 왼쪽처럼 종료 코드를 검사하는 자리에서는 errexit가 꺼지고, 그 안에서 부른 함수 속 실패까지 무시된다. 함수는 마지막 echo의 0을 돌려주어 if는 성공으로 본다. 함수 안에서 `|| return 1`로 직접 실패를 알려야 한다.",
    anchor: "set--e가-멈추지-않는-자리",
  },
  {
    id: "bash-scripting-3",
    post: "bash-scripting",
    question: "set -e 아래의 `count=0; ((count++)); echo done`은 어떻게 끝나나?",
    choices: [
      "done을 찍고 0으로 끝난다",
      "done을 찍고 1로 끝난다",
      "문법 오류 메시지를 찍고 2로 끝난다",
      "메시지 없이 1로 끝난다",
    ],
    answer: 3,
    explanation:
      "((count++))는 증가하기 전 값 0을 산술 결과로 쓰고, 산술 결과가 0이면 종료 코드가 1이다. set -e가 이걸 실패로 보고 아무 말 없이 스크립트를 끝낸다. count=$((count + 1))로 쓰면 이 문제가 없다.",
    anchor: "set--e가-멈추지-않는-자리",
  },
  {
    id: "bash-scripting-4",
    post: "bash-scripting",
    question: "`B=\"\"`일 때 `${B:-d}`와 `${B-d}`는 각각 무엇으로 펼쳐지나?",
    choices: [
      "둘 다 d",
      "d와 빈 문자열",
      "빈 문자열과 d",
      "둘 다 빈 문자열",
    ],
    answer: 1,
    explanation:
      "콜론이 있으면 정의되지 않았거나 비어 있을 때 기본값을 쓰고, 콜론이 없으면 정의되지 않았을 때만 쓴다. B는 빈 문자열로 정의되어 있으니 :-는 d, -는 빈 값 그대로다.",
    anchor: "없는-변수는-빈-문자열로-펼쳐진다",
  },
  {
    id: "bash-scripting-5",
    post: "bash-scripting",
    question: "`opts=\"-H 'Content-Type: application/json'\"`을 만들고 `curl $opts`로 넘겼더니 헤더가 깨졌다. 왜인가?",
    choices: [
      "curl이 작은따옴표를 지원하지 않아서",
      "변수를 펼친 결과에서는 따옴표가 다시 해석되지 않고 공백에서 잘려서",
      "-H 옵션은 변수로 넘길 수 없어서",
      "IFS가 콜론으로 설정되어 있어서",
    ],
    answer: 1,
    explanation:
      "펼친 값 안의 작은따옴표는 글자일 뿐이라 'Content-Type:과 application/json'이 따로 잘린 인자가 된다. 옵션 목록은 배열에 담아 \"${args[@]}\"로 넘기면 원소 하나가 인자 하나로 간다.",
    anchor: "옵션-목록은-배열에-담는다",
  },
  {
    id: "bash-scripting-6",
    post: "bash-scripting",
    question: "TERM trap을 건 스크립트가 `sleep 5`를 실행하는 중에 SIGTERM을 받았다. trap은 언제 도나?",
    choices: [
      "sleep 5가 끝난 뒤에",
      "신호를 받자마자 sleep을 끊고",
      "trap은 돌지 않고 스크립트가 바로 죽는다",
      "다음 SIGTERM을 받았을 때",
    ],
    answer: 0,
    explanation:
      "bash는 앞에서 돌고 있는 명령이 끝나기 전에는 trap을 실행하지 않는다. 실습에서 같은 스크립트가 sleep 5 & wait 형태일 때는 0.51초, 그냥 sleep 5일 때는 5.01초 뒤에 정리했다. 엔트리포인트라면 exec로 셸을 앱으로 바꿔 시그널이 앱에 바로 가게 한다.",
    anchor: "trap으로-뒷정리를-맡긴다",
  },
  {
    id: "bash-scripting-7",
    post: "bash-scripting",
    question: "고쳐 쓴 백업 스크립트가 `> \"$out\"`로 바로 쓰지 않고 mktemp로 만든 임시 파일에 쓴 뒤 mv하는 이유는?",
    choices: [
      "gzip이 임시 파일에만 쓸 수 있어서",
      "mv가 압축률을 높여 주어서",
      "실패하면 빈 파일이 남지 않고, 같은 파일 시스템의 mv는 원자적이라 완성된 파일만 보이게 하려고",
      "mktemp 파일이 더 빨리 써져서",
    ],
    answer: 2,
    explanation:
      "리다이렉션은 파이프가 돌기 전에 파일을 만들어서, 덤프가 실패해도 20바이트짜리 빈 파일이 남는다. 임시 파일에 쓰고 성공했을 때만 mv하면, 실패 시 EXIT trap이 임시 파일을 지우고 다른 프로그램은 반쪽짜리 파일을 보지 못한다.",
    anchor: "고쳐-쓴-백업-스크립트",
  },
];
