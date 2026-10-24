import type { QuizQuestion } from "../types";

export const HTML_FORM_VALIDATION: QuizQuestion[] = [
  {
    id: "html-form-validation-1",
    post: "html-form-validation",
    question: "우편번호 칸에서 모바일 숫자 키패드를 띄우면서 앞자리 0과 maxlength를 지키려면 어떤 조합이 맞나?",
    choices: [
      "type=\"number\" maxlength=\"5\"",
      "type=\"tel\" pattern=\"[0-9]{5}\"",
      "type=\"text\" inputmode=\"numeric\" maxlength=\"5\"",
      "type=\"number\" inputmode=\"text\"",
    ],
    answer: 2,
    explanation:
      "우편번호는 계산하는 수가 아니라 숫자로 된 글자라 type=\"text\"로 두고, inputmode로 자판만 숫자로 바꾼다. type=\"number\"는 maxlength가 적용되지 않고 숫자로 다루면 앞자리 0이 사라진다. tel은 전화 자판이 뜨고 형식 검사를 하지 않는다.",
    anchor: "칸의-종류가-자판과-검증을-정한다",
  },
  {
    id: "html-form-validation-2",
    post: "html-form-validation",
    question: "가격 칸을 type=\"number\"로 만들었더니 19.99를 넣으면 제출이 막힌다. 왜인가?",
    choices: [
      "type=\"number\"는 정수만 받는 타입이기 때문이다",
      "step 기본값이 1이라 19.99가 stepMismatch가 되기 때문이다",
      "소수점이 badInput으로 처리되기 때문이다",
      "max를 주지 않으면 rangeOverflow가 되기 때문이다",
    ],
    answer: 1,
    explanation:
      "type=\"number\"의 step 기본값은 1이라 1 단위가 아닌 값은 stepMismatch로 막힌다. 소수는 받을 수 있으니 step=\"0.01\"이나 step=\"any\"를 주면 된다. badInput은 숫자로 읽지 못한 글자일 때다.",
    anchor: "브라우저가-칸마다-검사하는-것",
  },
  {
    id: "html-form-validation-3",
    post: "html-form-validation",
    question: "비밀번호 확인 칸에 setCustomValidity(\"다르다\")를 한 뒤, 사용자가 값을 맞게 고쳤는데도 제출이 안 된다. 원인은?",
    choices: [
      "setCustomValidity는 한 번만 부를 수 있기 때문이다",
      "reportValidity를 부르지 않았기 때문이다",
      "novalidate가 없어서 브라우저가 막기 때문이다",
      "setCustomValidity(\"\")로 풀어 주기 전까지 customError 상태가 남기 때문이다",
    ],
    answer: 3,
    explanation:
      "빈 문자열이 아닌 문구를 넣으면 그 칸은 다시 빈 문자열로 부를 때까지 계속 틀린 상태다. 그래서 input 이벤트마다 규칙을 다시 계산해 맞으면 \"\"를, 틀리면 문구를 넣는다.",
    anchor: "직접-만든-규칙은-setcustomvalidity로-끼운다",
  },
  {
    id: "html-form-validation-4",
    post: "html-form-validation",
    question: "input:invalid에 빨간 테두리를 줬더니 페이지를 열자마자 필수 칸이 모두 빨갛다. 어떻게 고치나?",
    choices: [
      ":user-invalid를 써서 사용자가 상호작용한 뒤에만 스타일이 걸리게 한다",
      "required를 지우고 자바스크립트로만 검사한다",
      "form에 novalidate를 붙이면 :invalid가 꺼진다",
      ":focus:invalid로 바꿔 포커스가 있을 때만 보인다",
    ],
    answer: 0,
    explanation:
      "비어 있는 필수 칸은 처음부터 valueMissing이라 :invalid가 바로 걸린다. :user-invalid는 사용자가 값을 바꾸고 떠나거나 제출을 시도한 뒤부터만 걸린다. novalidate는 제출 차단과 말풍선만 끄고 :invalid 상태는 그대로다.",
    anchor: "처음부터-빨간-칸이-되지-않게",
  },
  {
    id: "html-form-validation-5",
    post: "html-form-validation",
    question: "스크립트에서 form.submit()을 불렀더니 검증도 submit 핸들러도 거치지 않고 페이지가 이동했다. 무엇을 써야 하나?",
    choices: [
      "form.dispatchEvent(new Event(\"change\"))",
      "form.requestSubmit()",
      "form.checkValidity()만 부르면 제출까지 된다",
      "form.reset() 후 form.submit()",
    ],
    answer: 1,
    explanation:
      "form.submit()은 제약 검증과 submit 이벤트를 건너뛰고 바로 전송한다. requestSubmit()은 사용자가 제출 버튼을 누른 것과 같은 경로라 검증과 submit 이벤트를 거친다. checkValidity()는 검사만 하고 제출하지 않는다.",
    anchor: "제출-버튼을-누르면-일어나는-일",
  },
  {
    id: "html-form-validation-6",
    post: "html-form-validation",
    question: "pattern=\"[a-z-]+\"를 줬는데 최신 브라우저에서 아무 값이나 통과한다. 가장 그럴듯한 이유는?",
    choices: [
      "pattern은 required가 있어야만 동작한다",
      "pattern은 앞뒤에 ^와 $를 써야 한다",
      "pattern이 v 플래그로 컴파일되면서 문자 클래스 안의 맨 하이픈이 문법 오류가 되어 무시됐다",
      "pattern은 type=\"text\"에서는 동작하지 않는다",
    ],
    answer: 2,
    explanation:
      "최신 브라우저는 pattern을 v 플래그 정규식으로 컴파일하고, 그 모드에서는 문자 클래스 안의 이스케이프하지 않은 하이픈이 오류다. 컴파일에 실패한 pattern은 없는 것처럼 취급되고 콘솔 경고만 남는다. pattern은 원래 값 전체와 맞춰 보니 ^와 $가 필요 없다.",
    anchor: "pattern이-조용히-무시될-때",
  },
  {
    id: "html-form-validation-7",
    post: "html-form-validation",
    question: "novalidate 폼에서 직접 그린 오류 문구를 화면 낭독기가 읽게 하려면?",
    choices: [
      "오류 문구를 빨간색으로 칠하고 칸 바로 아래에 둔다",
      "모든 칸의 오류 문구에 role=\"alert\"를 붙인다",
      "placeholder에 오류 문구를 넣는다",
      "칸에 aria-invalid=\"true\"를 주고 오류 문구의 id를 aria-describedby로 잇는다",
    ],
    answer: 3,
    explanation:
      "aria-describedby로 이으면 칸에 포커스가 갈 때 이름 다음에 오류 문구를 읽고, aria-invalid는 틀린 상태를 알린다. 색과 위치는 화면 낭독기에 전달되지 않는다. 칸마다 alert를 붙이면 여러 문구가 한꺼번에 소리를 내니 요약 하나에만 쓴다.",
    anchor: "직접-그리는-오류는-칸에-잇는다",
  },
];
