import type { QuizQuestion } from "../types";

export const BASH_EXPANSIONS_VARIABLES: QuizQuestion[] = [
  {
    id: "bash-expansions-variables-1",
    post: "bash-expansions-variables",
    question: "`n=3; echo {1..$n}`이 `{1..3}`을 그대로 찍는 이유는?",
    choices: [
      "중괄호 범위는 숫자 리터럴에서 0으로 시작해야 해서",
      "중괄호 확장이 변수 확장보다 먼저 일어나서, 그 시점의 {1..$n}은 올바른 범위가 아니기 때문에",
      "echo가 중괄호를 특수 문자로 취급하지 않아서",
      "n이 export되지 않은 변수라서",
    ],
    answer: 1,
    explanation:
      "bash는 중괄호 확장을 가장 먼저 하고 그다음에 변수를 펼친다. 중괄호 단계에서 $n은 아직 글자라 범위로 인식되지 않고, 이후 $n만 3으로 바뀌어 {1..3}이라는 글자가 남는다. 변수 범위는 for ((...))나 seq로 만든다.",
    anchor: "중괄호-확장은-변수보다-먼저-펼쳐진다",
  },
  {
    id: "bash-expansions-variables-2",
    post: "bash-expansions-variables",
    question: "환경 변수를 `PORT=`처럼 빈 값으로 넘겼다. `${PORT:-8080}`과 `${PORT-8080}`의 결과는?",
    choices: [
      "둘 다 8080",
      "둘 다 빈 문자열",
      "앞은 8080, 뒤는 빈 문자열",
      "앞은 빈 문자열, 뒤는 8080",
    ],
    answer: 2,
    explanation:
      "콜론이 있으면 없거나 빈 값일 때 기본값을 쓰고, 콜론이 없으면 아예 정의되지 않았을 때만 쓴다. PORT는 빈 값으로 정의되어 있으니 콜론 없는 쪽은 빈 값을 그대로 쓴다. 이 실수가 흔해서 보통 콜론을 붙인다.",
    anchor: "매개변수-확장으로-기본값과-필수값을-정한다",
  },
  {
    id: "bash-expansions-variables-3",
    post: "bash-expansions-variables",
    question: "`p=/var/log/nginx/access.log.2.gz`일 때 `${p%%.*}`의 결과는?",
    choices: [
      "/var/log/nginx/access.log.2",
      "access.log.2.gz",
      "/var/log/nginx/access",
      "/var/log/nginx",
    ],
    answer: 2,
    explanation:
      "%는 뒤에서 패턴에 맞는 부분을 자르고, 두 개(%%)면 가장 길게 맞춘다. .*에 가장 길게 맞는 것은 첫 점부터 끝까지인 .log.2.gz라서 /var/log/nginx/access가 남는다. % 하나면 .gz만 잘린다.",
    anchor: "문자열은-앞뒤를-자르고-바꿔서-다룬다",
  },
  {
    id: "bash-expansions-variables-4",
    post: "bash-expansions-variables",
    question: "`set -e`를 켠 스크립트가 `i=0; (( i++ ))` 줄에서 조용히 끝났다. 왜인가?",
    choices: [
      "i++는 증가 전 값 0을 결과로 내고, (( ))는 결과가 0이면 종료 코드 1을 내서",
      "(( ))는 서브셸에서 실행되어 i가 바뀌지 않아서",
      "산술 확장은 set -e와 함께 쓸 수 없어서",
      "i가 문자열로 선언되어 산술 오류가 나서",
    ],
    answer: 0,
    explanation:
      "(( 식 ))은 식의 값이 0이면 실패(1)로 끝나는 명령이다. 후위 증가 i++의 값은 증가 전의 0이라 실패로 보이고, set -e가 그 자리에서 스크립트를 멈춘다. (( ++i ))나 i=$((i+1))로 쓴다.",
    anchor: "산술-확장은-정수만-안다",
  },
  {
    id: "bash-expansions-variables-5",
    post: "bash-expansions-variables",
    question: "`declare -A` 없이 `h[web]=1; h[api]=2`를 실행한 뒤 `declare -p h`를 보면?",
    choices: [
      "연관 배열로 web=1, api=2가 들어 있다",
      "오류가 나서 h가 만들어지지 않는다",
      "일반 배열의 0번에 1, 1번에 2가 들어 있다",
      "일반 배열의 0번 칸에 2만 들어 있다",
    ],
    answer: 3,
    explanation:
      "선언 없이 쓰면 일반 배열로 취급되어 첨자 web, api가 산술식으로 풀린다. 그런 변수가 없으니 둘 다 0이 되고, 0번 칸에 나중 값 2가 덮어써진다. 오류나 경고가 없어서 찾기 어렵다.",
    anchor: "배열과-연관-배열",
  },
  {
    id: "bash-expansions-variables-6",
    post: "bash-expansions-variables",
    question: "다른 명령에 인자를 그대로 넘기는 래퍼 스크립트에서 `exec real-cmd \"$@\"`를 쓰는 이유는?",
    choices: [
      "\"$@\"는 인자를 하나의 문자열로 합쳐 넘기기 때문이다",
      "\"$@\"만 받은 인자를 개수와 경계 그대로 넘겨서 공백 있는 인자가 깨지지 않기 때문이다",
      "\"$@\"는 $0까지 포함해서 넘기기 때문이다",
      "\"$@\"는 IFS를 무시하고 쉼표로 이어 붙이기 때문이다",
    ],
    answer: 1,
    explanation:
      "\"$@\"는 \"a b\" 같은 인자를 하나로 유지한 채 원래 개수대로 넘긴다. \"$*\"는 IFS 첫 글자로 이어 붙인 문자열 하나를 만들고, 따옴표 없는 $@는 다시 단어 분할된다. $0은 어느 쪽에도 들어가지 않는다.",
    anchor: "위치-매개변수와-shift",
  },
];
