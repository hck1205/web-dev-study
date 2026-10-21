import type { QuizQuestion } from "../types";

export const JS_SHORT_CIRCUIT: QuizQuestion[] = [
  {
    id: "js-short-circuit-1",
    post: "js-short-circuit",
    question:
      "const ok = validateName(form) && validateEmail(form); 에서 이름과 이메일이 모두 틀렸는데 오류 메시지가 이름 것 하나만 쌓였다. 왜인가?",
    choices: [
      "validateEmail이 오류를 던졌기 때문이다",
      "&&는 왼쪽이 false면 오른쪽 함수를 아예 부르지 않기 때문이다",
      "&&는 두 함수를 동시에 실행해서 결과가 덮어써졌기 때문이다",
      "validateEmail의 반환값이 불리언이 아니기 때문이다",
    ],
    answer: 1,
    explanation:
      "단락 평가는 왼쪽만으로 결과가 정해지면 오른쪽 식을 평가하지 않는다. 결과 값은 맞지만 오른쪽 함수의 부수 효과(오류 쌓기)도 일어나지 않는다. 모든 오류를 모으려면 먼저 전부 부른 뒤 결과를 합친다.",
    anchor: "오른쪽은-필요할-때만-실행된다",
  },
  {
    id: "js-short-circuit-2",
    post: "js-short-circuit",
    question: 'console.log(1 && 0 && "x", "" || null)의 출력은?',
    choices: ["false false", "0 null", '"x" null', 'false ""'],
    answer: 1,
    explanation:
      "&&는 첫 falsy 값인 0을, ||는 끝까지 truthy를 못 찾아 마지막 값인 null을 그대로 돌려준다. 두 연산자는 참·거짓을 판정에만 쓰고 결과로는 피연산자 중 하나를 돌려준다.",
    anchor: "연산자가-돌려주는-것은-불리언이-아니다",
  },
  {
    id: "js-short-circuit-3",
    post: "js-short-circuit",
    question: 'const a = "A", b = "B", c = "C"; 일 때 a || b && c의 결과는?',
    choices: ['"C"', '"B"', "true", '"A"'],
    answer: 3,
    explanation:
      "&&가 ||보다 먼저 묶여 a || (b && c)가 된다. a가 truthy라 괄호 안은 평가하지 않고 \"A\"를 돌려준다. (a || b) && c였다면 \"C\"가 나온다.",
    anchor: "and가-or보다-먼저-묶인다",
  },
  {
    id: "js-short-circuit-4",
    post: "js-short-circuit",
    question: "cfg = { retries: 0 }에서 cfg.retries ||= 3을 실행하면?",
    choices: [
      "retries가 3이 된다. 0을 비었다고 보기 때문이다",
      "retries는 0으로 남는다",
      "0은 숫자라서 TypeError가 난다",
      "retries가 undefined가 된다",
    ],
    answer: 0,
    explanation:
      "||=는 왼쪽이 falsy일 때 대입한다. 재시도를 끄려고 넣은 0이 무시되고 3이 들어간다. 0, false, 빈 문자열이 정상 값인 설정에는 ??=를 쓴다.",
    anchor: "기본값으로-쓸-때는-0을-조심한다",
  },
  {
    id: "js-short-circuit-5",
    post: "js-short-circuit",
    question: "const onClose = 0; 일 때 onClose && onClose()와 onClose?.()의 결과는?",
    choices: [
      "둘 다 undefined",
      "둘 다 TypeError",
      "앞쪽은 0, 뒤쪽은 TypeError",
      "앞쪽은 TypeError, 뒤쪽은 undefined",
    ],
    answer: 2,
    explanation:
      "&&는 falsy면 멈추니 0에서 멈추고 0을 돌려준다. ?.는 null과 undefined에서만 멈추니 0을 함수로 부르려다 TypeError가 난다. 판정 기준이 falsy인지 null·undefined인지가 다르다.",
    anchor: "가드로-쓸-때-옵셔널-호출과-다른-점",
  },
  {
    id: "js-short-circuit-6",
    post: "js-short-circuit",
    question: "React에서 {error || <List />}를 그렸는데 error에 Error 객체가 들어 있었다. 무슨 일이 생기나?",
    choices: [
      "React가 error.message를 자동으로 그린다",
      "Error 객체가 자식이 되어 Objects are not valid as a React child로 렌더링이 실패한다",
      "아무것도 그리지 않는다",
      "<List />가 그려진다",
    ],
    answer: 1,
    explanation:
      "||는 truthy인 왼쪽 값을 그대로 돌려주니 Error 객체가 자식이 된다. React는 일반 객체를 그릴 수 없어 렌더링 전체가 실패한다. 삼항으로 나누고 그릴 때는 문자열인 error.message를 쓴다.",
    anchor: "jsx-안에서-새어-나오는-값",
  },
  {
    id: "js-short-circuit-7",
    post: "js-short-circuit",
    question: "컴포넌트 안에 isOpen && useEffect(...)를 썼다. isOpen이 false에서 true로 바뀌면?",
    choices: [
      "effect가 정상적으로 한 번 실행된다",
      "React가 조건을 기억해 두었다가 알아서 맞춰 준다",
      "아무 일도 일어나지 않는다",
      "훅 호출 순서가 바뀌어 경고가 뜨고 뒤쪽 훅이 다른 칸을 읽어 상태가 엉킨다",
    ],
    answer: 3,
    explanation:
      "React는 훅을 호출 순서로 구분한다. &&가 렌더링마다 훅 하나를 넣었다 뺐다 하면 뒤의 훅들이 밀려 다른 훅의 칸을 읽는다. 조건은 effect 안으로 옮기고 rules-of-hooks 린트로 막는다.",
    anchor: "조건-뒤에-훅을-부르면-순서가-깨진다",
  },
];
