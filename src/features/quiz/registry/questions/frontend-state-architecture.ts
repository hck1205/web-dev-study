import type { QuizQuestion } from "../types";

export const FRONTEND_STATE_ARCHITECTURE: QuizQuestion[] = [
  {
    id: "frontend-state-architecture-1",
    post: "frontend-state-architecture",
    question: "목록 컴포넌트의 useState에 둔 카테고리 필터가 상세 화면에 갔다가 뒤로 가기를 누르면 초기값으로 돌아간다. 왜 그런가?",
    choices: [
      "뒤로 가기가 페이지를 새로고침해서",
      "상세로 갈 때 목록 컴포넌트가 화면에서 빠지며 상태가 버려지고, 돌아오면 새로 만들어지기 때문에",
      "popstate 이벤트가 상태를 지워서",
      "React가 뒤로 가기마다 캐시를 비워서",
    ],
    answer: 1,
    explanation:
      "SPA의 뒤로 가기는 새로고침이 아니라 주소를 되돌리고 라우터가 화면을 다시 고르는 것이다. 목록 컴포넌트가 언마운트되며 useState 값이 사라졌고, 다시 마운트될 때 초기값으로 시작했다. 주소에 둔 필터는 다시 읽으니 그대로 남았다.",
    anchor: "필터를-컴포넌트-안에-두면-뒤로-가기에-사라진다",
  },
  {
    id: "frontend-state-architecture-2",
    post: "frontend-state-architecture",
    question: "가격 슬라이더를 끌 때마다 pushState로 주소를 바꾸면 생기는 문제는?",
    choices: [
      "주소가 너무 길어져 요청이 실패한다",
      "슬라이더 값이 주소에 반영되지 않는다",
      "history 칸이 계속 쌓여 사용자가 목록을 벗어나려면 뒤로 가기를 여러 번 눌러야 한다",
      "새로고침하면 값이 사라진다",
    ],
    answer: 2,
    explanation:
      "pushState는 바꿀 때마다 기록을 하나씩 쌓는다. 실험에서 필터를 다섯 번 바꾸자 history.length가 2에서 7이 됐다. 연속으로 바뀌는 값은 replaceState로 지금 칸을 바꿔 쓰고, 다른 화면으로 느끼는 변화만 쌓는다.",
    anchor: "필터를-컴포넌트-안에-두면-뒤로-가기에-사라진다",
  },
  {
    id: "frontend-state-architecture-3",
    post: "frontend-state-architecture",
    question: "선택한 상품을 상태에 객체로 넣어 두었다. 목록을 다시 받아 가격이 바뀌면 상세 패널은?",
    choices: [
      "고를 때 복사한 옛 가격을 계속 보여 준다",
      "자동으로 새 가격을 보여 준다",
      "에러가 난다",
      "빈 화면이 된다",
    ],
    answer: 0,
    explanation:
      "객체를 상태에 넣으면 고르는 순간의 사본을 따로 들고 있게 되어 원본이 바뀐 걸 모른다. id만 상태에 두고 목록에서 찾아 쓰면 목록과 상세가 어긋날 수 없다.",
    anchor: "같은-상품이-두-곳에-살면-어긋난다",
  },
  {
    id: "frontend-state-architecture-4",
    post: "frontend-state-architecture",
    question: "필터된 목록을 useState에 두고 useEffect로 맞추는 방식이 렌더링 중 계산보다 나쁜 이유는?",
    choices: [
      "useEffect는 서버에서 실행되지 않아서",
      "렌더링이 한 번 더 일어나고, 그 사이 한 번은 필터와 목록이 어긋난 채로 그려져서",
      "useState는 배열을 담을 수 없어서",
      "계산 결과가 메모리에서 지워져서",
    ],
    answer: 1,
    explanation:
      "카테고리가 바뀐 렌더링이 먼저 일어나고, effect가 목록을 바꾸며 한 번 더 렌더링한다. 실험에서 클릭 한 번에 두 번 렌더링했고 그중 한 번은 카테고리와 목록이 달랐다. 계산할 수 있는 값은 저장하지 않고 필요하면 useMemo로 감싼다.",
    anchor: "계산할-수-있는-값은-저장하지-않는다",
  },
  {
    id: "frontend-state-architecture-5",
    post: "frontend-state-architecture",
    question: "사용자 이름, 테마, 장바구니 개수를 객체 하나로 묶어 Context로 내려보냈다. 장바구니만 바뀌면 memo로 감싼 Header는?",
    choices: [
      "props가 같으니 다시 그리지 않는다",
      "장바구니를 읽지 않으니 다시 그리지 않는다",
      "처음 한 번만 다시 그린다",
      "Context 값 객체가 바뀌었으니 다시 그린다",
    ],
    answer: 3,
    explanation:
      "Context를 읽는 컴포넌트는 값 객체가 바뀌면 props와 상관없이 다시 그린다. memo는 props만 비교해서 막지 못한다. 셀렉터로 필요한 칸만 구독하는 저장소에서는 고른 값이 그대로면 건너뛴다.",
    anchor: "전역-저장소-하나에-다-넣으면-다-같이-깨어난다",
  },
  {
    id: "frontend-state-architecture-6",
    post: "frontend-state-architecture",
    question: "30칸 폼에서 칸마다 memo를 붙였는데도 글자 하나에 30칸이 모두 다시 그린다. 가장 그럴듯한 원인은?",
    choices: [
      "onChange를 칸마다 인라인 함수로 넘겨 렌더링마다 새 함수가 되기 때문에",
      "input 요소는 memo가 적용되지 않아서",
      "폼 태그가 모든 자식을 다시 그리게 해서",
      "value 속성이 문자열이라서",
    ],
    answer: 0,
    explanation:
      "memo는 props를 얕게 비교하는데 인라인 함수는 렌더링마다 새로 만들어져 비교가 늘 실패한다. 실험에서 onChange를 useCallback으로 고정하자 다섯 글자에 칸 렌더링이 150번에서 5번으로 줄었고, 비제어 폼은 0번이었다.",
    anchor: "폼-상태는-제출하기-전까지-초안이다",
  },
  {
    id: "frontend-state-architecture-7",
    post: "frontend-state-architecture",
    question: "새 값의 자리를 고를 때 전역 저장소를 고려하는 시점으로 알맞은 것은?",
    choices: [
      "가장 먼저. 일단 전역에 두면 어디서든 쓸 수 있다",
      "계산할 수 없고, 서버 값도 아니고, 주소나 폼에 둘 값도 아니면서 여러 화면이 같이 쓸 때",
      "값이 객체일 때",
      "값이 자주 바뀔 때",
    ],
    answer: 1,
    explanation:
      "앞의 질문에서 자리가 정해지면 거기서 멈춘다. 계산할 값은 저장하지 않고, 서버 값은 쿼리 캐시에, 공유해야 하면 주소에, 초안은 폼에 둔다. 전역 저장소부터 시작하면 낡은 사본, 사라지는 필터, 넓은 리렌더링이 함께 생긴다.",
    anchor: "값-하나의-자리를-고르는-순서",
  },
];
