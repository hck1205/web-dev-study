import type { QuizQuestion } from "../types";

export const BASH_CONTROL_FLOW_FUNCTIONS: QuizQuestion[] = [
  {
    id: "bash-control-flow-functions-1",
    post: "bash-control-flow-functions",
    question: "`a=\"\"`일 때 `if [ $a == prod ]; then A; else B; fi`는 어떻게 끝나나?",
    choices: [
      "빈 문자열과 prod를 비교해 B로 가고 아무 메시지도 없다",
      "[가 인자 두 개를 받아 unary operator expected를 찍고 종료 코드 2를 내며, if는 그것을 실패로 보고 B로 간다",
      "문법 오류라서 스크립트 전체가 즉시 멈춘다",
      "빈 변수는 무시되고 prod 하나만 검사해 참이 되어 A로 간다",
    ],
    answer: 1,
    explanation:
      "따옴표 없는 빈 변수는 인자를 남기지 않아 [가 == prod 두 개만 받고, 첫째를 단항 연산자로 읽다 실패해 2를 낸다. if는 0이 아닌 값을 모두 같은 실패로 보므로 오류인데도 else로 가고 스크립트는 계속 간다.",
    anchor: "대괄호-하나는-명령이고-두-개는-문법이다",
  },
  {
    id: "bash-control-flow-functions-2",
    post: "bash-control-flow-functions",
    question: "`v=\"\"`일 때 `[ -n $v ]`가 참이 되는 이유는?",
    choices: [
      "인자가 -n 하나만 남고, 인자 하나짜리 검사는 그 문자열이 비어 있지 않은지를 보기 때문이다",
      "-n은 원래 빈 문자열일 때 참이 되는 연산자이기 때문이다",
      "bash가 빈 변수를 공백 한 칸으로 바꿔 넘기기 때문이다",
      "[ 안에서는 변수가 펼쳐지지 않아 $v라는 글자를 검사하기 때문이다",
    ],
    answer: 0,
    explanation:
      "따옴표가 없으면 빈 $v는 사라지고 [ -n ]이 된다. 인자가 하나면 [는 그 글자 -n이 비어 있지 않은지만 보니 참이다. \"$v\"로 감싸거나 [[ -n $v ]]를 쓰면 거짓이 나온다.",
    anchor: "대괄호-하나는-명령이고-두-개는-문법이다",
  },
  {
    id: "bash-control-flow-functions-3",
    post: "bash-control-flow-functions",
    question: "`[ 10 > 9 ]`를 실행하면 무슨 일이 생기나?",
    choices: [
      "숫자 비교로 참이 되어 0을 낸다",
      "문자열 비교로 거짓이 되어 1을 낸다",
      "> 가 리다이렉션으로 읽혀 9라는 빈 파일이 생기고, [ 10 ]의 결과인 0을 낸다",
      "[ 안에서는 > 를 쓸 수 없어 문법 오류 2를 낸다",
    ],
    answer: 2,
    explanation:
      "[는 명령이라서 > 는 인자가 아니라 출력 리다이렉션으로 처리된다. 비교는 하지 않고 9라는 파일을 만든 뒤 인자 10 하나만 받아 참이 된다. 숫자 비교는 -gt나 (( 10 > 9 ))로 한다.",
    anchor: "숫자-문자열-파일을-묻는-연산자",
  },
  {
    id: "bash-control-flow-functions-4",
    post: "bash-control-flow-functions",
    question: "`deploy && notify || rollback`에서 deploy는 성공하고 notify만 실패했다. 결과는?",
    choices: [
      "deploy가 성공했으니 rollback은 돌지 않는다",
      "rollback이 돈다. && 와 || 는 왼쪽부터 묶여 notify의 실패도 || 오른쪽을 부른다",
      "notify가 실패하면 스크립트가 멈춰 rollback까지 가지 않는다",
      "|| 는 첫 번째 명령의 결과만 보므로 rollback은 돌지 않는다",
    ],
    answer: 1,
    explanation:
      "A && B || C는 A가 실패하거나, A는 성공했지만 B가 실패하면 C를 실행한다. if-else와 다르게 B의 실패도 C로 이어지므로 배포가 성공했는데 롤백이 돈다. 세 덩어리 분기는 if로 쓴다.",
    anchor: "a--b--c는-if-else가-아니다",
  },
  {
    id: "bash-control-flow-functions-5",
    post: "bash-control-flow-functions",
    question: "`cat hosts.txt | while read -r l; do count=$((count+1)); done` 뒤에 `echo $count`가 0을 찍는 이유는?",
    choices: [
      "read -r이 줄을 하나도 읽지 못했기 때문이다",
      "while 안에서는 산술 확장이 동작하지 않기 때문이다",
      "cat이 파일을 다 읽기 전에 루프가 끝났기 때문이다",
      "파이프 오른쪽 while이 서브셸에서 돌아, 바뀐 count가 서브셸과 함께 사라지기 때문이다",
    ],
    answer: 3,
    explanation:
      "파이프의 각 부분은 별도 프로세스에서 돈다. 루프는 부모 셸의 복사본 count를 올리고, 끝나면 종료 코드만 남긴다. done < hosts.txt나 프로세스 치환 < <(cmd)로 쓰면 루프가 현재 셸에서 돈다.",
    anchor: "while-read는-생각보다-많이-틀린다",
  },
  {
    id: "bash-control-flow-functions-6",
    post: "bash-control-flow-functions",
    question: "`v=$(get)`에서 get 안의 오류 처리 함수가 `exit 1`을 불렀다. 스크립트는 어떻게 되나?",
    choices: [
      "스크립트 전체가 종료 코드 1로 끝난다",
      "명령 치환 안의 서브셸만 끝나고, 부모는 빈 값을 받아 다음 줄로 계속 간다",
      "exit은 함수 안에서 return과 같아서 get만 끝난다",
      "bash가 exit을 무시하고 get의 나머지 줄을 실행한다",
    ],
    answer: 1,
    explanation:
      "$(...) 안은 서브셸이라 exit은 그 서브셸만 끝낸다. 부모 스크립트는 빈 값과 종료 코드 1을 받고, set -e가 없거나 local v=$(get)처럼 가려지면 그대로 계속 간다. 그래서 명령 치환으로 부르는 함수는 return 1로 알리고 부른 쪽이 || exit 1로 받는다.",
    anchor: "함수는-값을-돌려주지-않는다",
  },
  {
    id: "bash-control-flow-functions-7",
    post: "bash-control-flow-functions",
    question: "counter가 `local count=100`을 선언하고 inner를 부른다. inner는 local 없이 `count=999`를 쓴다. 바뀌는 것은?",
    choices: [
      "counter의 지역 변수 count. bash는 호출 순서를 거슬러 변수를 찾는 동적 스코프라서다",
      "전역 count. local이 없으면 언제나 전역을 쓰기 때문이다",
      "inner 안에 새 지역 변수가 생기고 아무것도 바뀌지 않는다",
      "이름이 겹쳐서 bash가 오류를 낸다",
    ],
    answer: 0,
    explanation:
      "bash는 변수를 코드 위치가 아니라 지금의 호출 스택에서 찾는다. inner를 부른 counter에 count가 있으니 그 칸을 읽고 쓴다. 전역은 그대로라서, 함수의 임시 변수는 모두 local로 선언해야 남의 변수를 덮어쓰지 않는다.",
    anchor: "local은-부른-쪽까지-보인다",
  },
];
