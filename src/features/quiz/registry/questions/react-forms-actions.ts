import type { QuizQuestion } from "../types";

export const REACT_FORMS_ACTIONS: QuizQuestion[] = [
  {
    id: "react-forms-actions-1",
    post: "react-forms-actions",
    question: "제어 입력에서 onChange 안의 setState 호출을 지웠다. 사용자가 글자를 치면 어떻게 되나?",
    choices: [
      "DOM에는 글자가 남고 state만 이전 값으로 남는다",
      "React가 에러를 던지고 렌더링을 멈춘다",
      "커밋할 때 React가 DOM 값을 state에 맞춰 되돌려서 칸이 바뀌지 않는다",
      "입력칸이 자동으로 비제어로 바뀌어 글자가 그대로 남는다",
    ],
    answer: 2,
    explanation:
      "제어 입력은 값의 원본이 state라서, React는 렌더가 끝나면 DOM의 value를 state와 같게 다시 써 넣는다. state가 그대로면 브라우저가 넣은 글자가 지워진다. 제어에서 비제어로 저절로 바뀌는 일은 없다.",
    anchor: "입력값을-누가-들고-있나",
  },
  {
    id: "react-forms-actions-2",
    post: "react-forms-actions",
    question: "React Hook Form 폼의 꼭대기에서 watch(\"country\")로 값을 읽었더니 타자가 느려졌다. 가장 알맞은 고침은?",
    choices: [
      "country를 쓰는 부분만 작은 컴포넌트로 떼고 그 안에서 useWatch로 구독한다",
      "모든 칸을 Controller로 감싼다",
      "mode를 onChange로 바꾼다",
      "폼 컴포넌트를 memo로 감싼다",
    ],
    answer: 0,
    explanation:
      "watch를 useForm을 부른 컴포넌트에서 쓰면 그 칸이 바뀔 때마다 폼 전체가 렌더링된다. useWatch로 작은 컴포넌트 안에서만 구독하면 렌더링이 거기서 끝난다. 모든 칸을 Controller로 감싸면 오히려 제어 입력이 늘어난다.",
    anchor: "react-hook-form이-빠른-이유",
  },
  {
    id: "react-forms-actions-3",
    post: "react-forms-actions",
    question: "가입 검증 규칙을 Zod 스키마 하나로 써서 클라이언트와 서버가 함께 import하는 가장 큰 이유는?",
    choices: [
      "서버 검증을 생략해도 되기 때문에",
      "번들 크기가 줄어들기 때문에",
      "Zod가 FormData를 자동으로 서버에 보내 주기 때문에",
      "규칙을 따로 쓰면 어긋나서 화면에서 통과한 값을 서버가 거절하는 일이 생기기 때문에",
    ],
    answer: 3,
    explanation:
      "같은 규칙을 양쪽에 따로 쓰면 언젠가 길이 제한 같은 값이 달라진다. 스키마 하나를 공유하면 같은 값에 같은 결과가 나온다. 클라이언트 검증은 우회될 수 있어서 서버 검증은 여전히 해야 한다.",
    anchor: "검증-규칙은-한-곳에-쓴다",
  },
  {
    id: "react-forms-actions-4",
    post: "react-forms-actions",
    question: "화면 낭독기 사용자가 비밀번호 칸에 포커스했을 때 '8자 이상이어야 한다'는 에러도 함께 듣게 하려면?",
    choices: [
      "에러 문구를 빨간색으로 칠한다",
      "에러 문구 요소의 id를 입력칸의 aria-describedby에 넣고, 칸에 aria-invalid를 준다",
      "모든 칸의 에러 문구에 role=\"alert\"를 붙인다",
      "에러 문구를 placeholder에 넣는다",
    ],
    answer: 1,
    explanation:
      "aria-describedby로 연결하면 포커스가 갈 때 칸 이름 다음에 그 문구를 읽고, aria-invalid가 '잘못됨' 상태를 알린다. 칸마다 role=alert를 붙이면 입력할 때마다 여러 문구가 한꺼번에 읽혀 시끄럽다. 색은 화면 낭독기에 전달되지 않는다.",
    anchor: "빨간-글씨는-화면-낭독기에-들리지-않는다",
  },
  {
    id: "react-forms-actions-5",
    post: "react-forms-actions",
    question: "클릭 핸들러에서 setSubmitting(true)로 버튼을 막았는데도 아주 빠른 더블 클릭에 요청이 두 번 갔다. 왜 그런가?",
    choices: [
      "state 변경은 다음 렌더링에서야 버튼에 반영되어, 그 전에 들어온 두 번째 클릭은 아직 활성 버튼을 눌렀기 때문에",
      "disabled 속성은 클릭을 막지 못하기 때문에",
      "React 18부터 배칭이 꺼졌기 때문에",
      "fetch가 자동으로 재시도하기 때문에",
    ],
    answer: 0,
    explanation:
      "setState는 렌더링을 예약할 뿐이라 버튼이 실제로 disabled가 되기 전에 이벤트가 하나 더 들어올 수 있다. ref로 진행 중을 기록해 핸들러 첫 줄에서 확인하거나, 서버가 멱등성 키로 같은 제출을 한 번만 처리하게 한다. fetch는 스스로 재시도하지 않는다.",
    anchor: "두-번-누르면-두-번-가입된다",
  },
  {
    id: "react-forms-actions-6",
    post: "react-forms-actions",
    question: "useActionState로 만든 폼에서 액션이 검증 에러를 상태로 돌려줬는데 사용자가 친 값이 모두 사라졌다. 이유는?",
    choices: [
      "useActionState가 에러가 나면 컴포넌트를 다시 마운트하기 때문에",
      "FormData는 한 번 읽으면 비워지기 때문에",
      "액션이 예외 없이 끝나 React가 성공으로 보고 비제어 칸을 기본값으로 초기화했기 때문에",
      "useFormStatus의 pending이 false가 되며 값을 지우기 때문에",
    ],
    answer: 2,
    explanation:
      "React 19는 form action이 예외 없이 끝나면 폼의 비제어 칸을 초기화한다. 에러를 상태로 돌려준 것도 예외가 아니라서 초기화된다. 받은 값을 상태로 돌려주고 defaultValue로 다시 넣거나, onSubmit에서 직접 액션을 부른다.",
    anchor: "form의-action에-함수를-넘긴다",
  },
  {
    id: "react-forms-actions-7",
    post: "react-forms-actions",
    question: "useOptimistic으로 댓글을 먼저 보여 줬는데 서버가 거절했다. 화면은 어떻게 되나?",
    choices: [
      "직접 이전 목록으로 setState하지 않으면 낙관적 댓글이 계속 남는다",
      "액션이 끝나며 낙관적 층이 걷히고, 실제 목록이 바뀌지 않았으니 원래 목록이 보인다",
      "React가 자동으로 같은 요청을 한 번 더 보낸다",
      "낙관적 댓글이 실제 목록에 합쳐져 저장된다",
    ],
    answer: 1,
    explanation:
      "낙관적 값은 진행 중인 액션이 있는 동안만 실제 값 위에 덮이는 층이다. 액션이 끝나면 걷히고 그 아래 실제 값이 보이니 되돌리는 코드가 필요 없다. 다만 실패를 알리고 입력을 되살리는 건 직접 해야 한다.",
    anchor: "누르자마자-보이고-실패하면-돌아간다",
  },
];
