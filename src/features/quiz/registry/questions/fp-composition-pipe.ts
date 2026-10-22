import type { QuizQuestion } from "../types";

export const FP_COMPOSITION_PIPE: QuizQuestion[] = [
  {
    id: "fp-composition-pipe-1",
    post: "fp-composition-pipe",
    question: "`compose((s) => s + \"a\", (s) => s + \"b\")(\"x\")`의 결과는?",
    choices: ["\"xab\"", "\"xba\"", "\"abx\"", "\"x\""],
    answer: 1,
    explanation:
      "compose는 수학의 f ∘ g처럼 오른쪽 함수부터 실행한다. 그래서 먼저 b가 붙고 그다음 a가 붙어 \"xba\"다. 왼쪽부터 실행하는 pipe였다면 \"xab\"가 된다.",
    anchor: "수학의-합성은-오른쪽부터-읽는다",
  },
  {
    id: "fp-composition-pipe-2",
    post: "fp-composition-pipe",
    question: "`[\"10\", \"10\", \"10\"].map(parseInt)`가 `[10, NaN, 2]`가 되는 이유는?",
    choices: [
      "parseInt가 문자열을 캐시해서",
      "map이 콜백에 인덱스도 넘겨서 parseInt가 그것을 진법으로 읽어서",
      "\"10\"이 8진수로 해석돼서",
      "map이 원본 배열을 고쳐서",
    ],
    answer: 1,
    explanation:
      "map은 값, 인덱스, 배열 세 개를 넘기고 parseInt는 두 번째 인자를 진법으로 쓴다. parseInt(\"10\", 1)은 NaN, parseInt(\"10\", 2)는 2다. 포인트 프리로 넘기기 전에 함수가 인자를 몇 개 쓰는지 확인해야 한다.",
    anchor: "이어-붙일-수-있는-함수의-조건",
  },
  {
    id: "fp-composition-pipe-3",
    post: "fp-composition-pipe",
    question:
      "`pipe(split, trimAll, dropEmpty)`에서 trimAll이 return을 빠뜨렸다. 에러 스택은 어느 함수를 가리키나?",
    choices: [
      "trimAll",
      "split",
      "dropEmpty",
      "에러가 나지 않고 빈 배열이 나온다",
    ],
    answer: 2,
    explanation:
      "trimAll은 undefined를 돌려주고 정상적으로 끝나서 스택에 남지 않는다. undefined에서 filter를 찾는 dropEmpty에서 에러가 난다. 원인과 증상의 단계가 다르니 tap으로 중간값을 보거나 단계 결과를 검사하는 pipe를 쓴다.",
    anchor: "중간값을-엿보는-tap",
  },
  {
    id: "fp-composition-pipe-4",
    post: "fp-composition-pipe",
    question: "파이프 중간에 끼우는 `tap(label)`이 지켜야 할 성질은?",
    choices: [
      "받은 값을 그대로 돌려준다",
      "받은 값을 복사해서 돌려준다",
      "값을 문자열로 바꿔 돌려준다",
      "undefined를 돌려 파이프를 끝낸다",
    ],
    answer: 0,
    explanation:
      "tap은 받은 값으로 로그나 debugger 같은 일을 하고 값은 그대로 넘긴다. 그래서 파이프 어디에 끼우고 빼도 결과가 같다. undefined를 돌려주면 다음 단계가 망가진다.",
    anchor: "중간값을-엿보는-tap",
  },
  {
    id: "fp-composition-pipe-5",
    post: "fp-composition-pipe",
    question:
      "async 함수 fetchUser, fetchTeam과 동기 함수 toLabel을 일반 `pipe`로 이었다. 결과는?",
    choices: [
      "pipe가 자동으로 await해서 정상 결과가 나온다",
      "SyntaxError가 난다",
      "Promise가 값처럼 넘어가 에러 없이 틀린 값(\"undefined (undefined)\")이 나온다",
      "fetchTeam에서 TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "일반 pipe는 반환값을 그대로 넘기니 fetchTeam은 Promise를 받고, Promise에는 name 같은 속성이 없다. 시작값을 Promise.resolve로 감싸고 각 단계를 then으로 잇는 pipeAsync를 써야 값이 도착한 뒤에 넘어간다.",
    anchor: "비동기-단계가-섞이면-값-대신-promise가-흐른다",
  },
  {
    id: "fp-composition-pipe-6",
    post: "fp-composition-pipe",
    question:
      "오버로드로 타입을 잡은 `pipe(split, count, shout)`에서 count는 number를, shout는 string을 받는다. tsc 에러는 어디를 가리키나?",
    choices: [
      "shout 인자",
      "split 인자",
      "pipe 선언부",
      "count 인자",
    ],
    answer: 3,
    explanation:
      "TypeScript가 shout의 입력에서 C를 string으로 먼저 추론해서, count가 string[] → string이어야 한다고 보고 count 자리를 틀렸다고 한다. 오류 위치가 잘못 고른 함수의 앞 단계일 수 있으니 양쪽을 같이 본다.",
    anchor: "typescript에서-pipe의-타입",
  },
  {
    id: "fp-composition-pipe-7",
    post: "fp-composition-pipe",
    question: "Hack 방식 파이프라인 연산자 `x |> f(%, 10)`가 pipe 함수와 다른 점은?",
    choices: [
      "단계가 함수가 아니라 식이라 여러 인자, 메서드, await을 커링 없이 쓴다",
      "오른쪽부터 실행된다",
      "Node 22에서 기본으로 지원된다",
      "단계마다 새 함수를 만들어 호출 비용이 크다",
    ],
    answer: 0,
    explanation:
      "Hack 방식은 %가 앞 단계 값을 가리키는 식을 이어 쓴다. 그래서 커링하지 않은 함수와 await을 그대로 쓰고, Babel 변환 결과도 임시 변수 대입이라 함수 호출이 늘지 않는다. 아직 제안 단계라 Node 22는 SyntaxError를 낸다.",
    anchor: "표준에-들어오려는-파이프라인-연산자",
  },
];
