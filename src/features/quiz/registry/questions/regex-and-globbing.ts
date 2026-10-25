import type { QuizQuestion } from "../types";

export const REGEX_AND_GLOBBING: QuizQuestion[] = [
  {
    id: "regex-and-globbing-1",
    post: "regex-and-globbing",
    question:
      "현재 디렉터리에 app-1.log 하나만 있을 때 find . -name *.log 를 따옴표 없이 실행하면 어떻게 되나?",
    choices: [
      "find가 하위 디렉터리까지 모든 .log 파일을 찾는다",
      "find가 'paths must precede expression' 에러를 낸다",
      "에러 없이 app-1.log라는 이름 하나만 찾는다",
      "bash가 no match 에러를 내고 find를 실행하지 않는다",
    ],
    answer: 2,
    explanation:
      "따옴표가 없으면 bash가 find를 실행하기 전에 *.log를 현재 디렉터리의 이름으로 펼친다. 맞는 파일이 하나면 -name app-1.log가 되어 에러 없이 그 이름만 찾는다. 에러는 맞는 파일이 여러 개일 때 나고, no match는 failglob을 켰을 때만 난다.",
    anchor: "따옴표-밖의-별표는-셸이-먼저-펼친다",
  },
  {
    id: "regex-and-globbing-2",
    post: "regex-and-globbing",
    question:
      "for f in /data/*.csv; do process \"$f\"; done 에서 CSV 파일이 하나도 없으면 bash 기본 설정에서 무슨 일이 생기나?",
    choices: [
      "반복문이 한 번도 돌지 않는다",
      "/data/*.csv 라는 글자 그대로 한 번 돈다",
      "bash가 에러를 내고 스크립트가 멈춘다",
      "/data 디렉터리 이름으로 한 번 돈다",
    ],
    answer: 1,
    explanation:
      "기본 설정에서 맞는 이름이 없으면 패턴을 그대로 남겨 둔다. 그래서 존재하지 않는 /data/*.csv로 process가 한 번 불린다. 반복을 건너뛰게 하려면 nullglob을 켜거나 [ -e \"$f\" ] || continue로 거른다.",
    anchor: "glob이-아는-기호는-몇-개-안-된다",
  },
  {
    id: "regex-and-globbing-3",
    post: "regex-and-globbing",
    question: "grep 'took=[0-9]+ms' app.log 가 0건인데 grep -E 로 바꾸면 결과가 나온다. 이유는?",
    choices: [
      "기본 grep은 BRE라서 +를 반복이 아닌 글자 그대로 읽는다",
      "기본 grep은 대괄호 문자 클래스를 지원하지 않는다",
      "작은따옴표 때문에 셸이 + 를 지웠다",
      "-E가 없으면 grep은 줄 전체가 패턴과 같아야 맞는다",
    ],
    answer: 0,
    explanation:
      "BRE에서 +는 특수 기호가 아니라서 숫자 하나 뒤에 + 글자가 오는 줄을 찾게 된다. ERE에서는 +가 한 번 이상 반복이다. GNU grep은 BRE에서도 \\+로 쓰면 반복으로 받지만 이건 GNU 확장이다.",
    anchor: "bre와-ere는-같은-기호를-반대로-읽는다",
  },
  {
    id: "regex-and-globbing-4",
    post: "regex-and-globbing",
    question: "grep -E 'took=\\d+ms' 를 실행하면 GNU grep 3.11은 어떻게 동작하나?",
    choices: [
      "\\d를 숫자로 해석해 정상적으로 찾는다",
      "알 수 없는 이스케이프라며 에러를 내고 종료한다",
      "\\d를 글자 d로 맞춰서 took=dms 같은 줄만 찾는다",
      "자동으로 PCRE 모드로 바꿔서 실행한다",
    ],
    answer: 2,
    explanation:
      "\\d는 Perl 계열 문법이라 POSIX ERE에는 없다. GNU grep -E는 경고 없이 글자 d로 맞춰서 결과만 0건이 된다. [0-9]나 [[:digit:]]로 쓰거나 -P를 준다.",
    anchor: "perl-계열은-d와-전후방-탐색을-더한다",
  },
  {
    id: "regex-and-globbing-5",
    post: "regex-and-globbing",
    question: "echo 'status=502 took=3012ms' | grep -oE 's.*?=' 의 결과는?",
    choices: [
      "status=",
      "status=502 took=",
      "아무것도 출력하지 않는다",
      "? at start of expression 경고만 낸다",
    ],
    answer: 1,
    explanation:
      "게으른 반복 *?는 Perl 계열에만 있다. ERE에서는 * 뒤에 ?가 붙은 것으로 읽혀 그냥 탐욕적으로 동작하고, 마지막 = 까지 맞는다. 방언에 상관없이 짧게 맞추려면 [^=]*= 처럼 부정 문자 클래스를 쓴다.",
    anchor: "탐욕적-매칭과-게으른-매칭",
  },
  {
    id: "regex-and-globbing-6",
    post: "regex-and-globbing",
    question:
      "^(a+)+$ 에 'aaaa...a!' 를 넣으면 Node에서는 시간이 급격히 늘지만 grep -E는 바로 끝난다. 가장 정확한 이유는?",
    choices: [
      "grep은 C로 짜여 있어서 JavaScript보다 빠를 뿐이다",
      "grep -E는 패턴을 상태 기계로 바꿔 입력을 한 번만 훑고, Node의 엔진은 실패할 때까지 나누는 방법을 모두 되돌아가며 시도한다",
      "grep은 줄 끝의 ! 를 먼저 보고 바로 포기하도록 최적화되어 있다",
      "Node는 정규식을 매번 다시 컴파일하기 때문이다",
    ],
    answer: 1,
    explanation:
      "백트래킹 엔진은 바깥과 안쪽 +가 a들을 나누는 2의 n-1제곱가지를 모두 시도한 뒤에야 실패를 낸다. GNU grep은 역참조가 없으면 DFA로 돌아서 입력 길이에 비례하는 시간만 쓴다. 언어 차이가 아니라 엔진 방식의 차이다.",
    anchor: "되돌아가는-엔진과-한-번에-훑는-엔진",
  },
  {
    id: "regex-and-globbing-7",
    post: "regex-and-globbing",
    question: "사용자가 검색 필터용 정규식을 직접 입력하는 기능을 만든다. 가장 알맞은 방어는?",
    choices: [
      "입력된 패턴을 RE2 같은 선형 시간 엔진으로 실행한다",
      "패턴 앞뒤에 ^ 와 $ 를 붙여서 실행한다",
      "게으른 반복만 쓰도록 안내 문구를 붙인다",
      "패턴을 캐시해서 같은 패턴은 한 번만 컴파일한다",
    ],
    answer: 0,
    explanation:
      "패턴 자체를 사용자가 정하면 중첩 반복을 막을 방법이 없으니 엔진이 지수 시간으로 갈 수 없게 해야 한다. RE2 계열은 역참조와 전후방 탐색을 포기하는 대신 선형 시간을 보장한다. 앵커나 캐시는 파국적 백트래킹을 막지 못한다.",
    anchor: "되돌아가는-엔진과-한-번에-훑는-엔진",
  },
];
