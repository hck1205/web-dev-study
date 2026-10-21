import type { QuizQuestion } from "../types";

export const JS_IMMUTABILITY_REACT: QuizQuestion[] = [
  {
    id: "js-immutability-react-1",
    post: "js-immutability-react",
    question:
      "user.settings.notifications.email을 직접 바꾸고 setUser({ ...user })를 불렀다. settings를 prop으로 받는 memo 컴포넌트는 어떻게 되나?",
    choices: [
      "부모가 다시 그려지니 함께 다시 그려져 새 값을 보여 준다",
      "settings 참조가 그대로라 렌더를 건너뛰고 옛 값을 보여 준다",
      "React가 안쪽 값을 깊게 비교해 바뀐 것을 찾아낸다",
      "setUser가 같은 객체라고 판단해 부모도 다시 그리지 않는다",
    ],
    answer: 1,
    explanation:
      "user는 새 객체라 부모는 다시 그려지지만, settings 칸에는 예전과 같은 객체가 들어 있다. memo는 props를 Object.is로 비교하니 바뀐 게 없다고 보고 건너뛴다. 바뀐 값에서 루트까지의 객체를 모두 새로 만들어야 한다.",
    anchor: "바깥만-새로-만들면-안쪽-컴포넌트가-놓친다",
  },
  {
    id: "js-immutability-react-2",
    post: "js-immutability-react",
    question: "user.settings.notifications.email 하나를 불변으로 바꿀 때 새로 만들어야 하는 객체는?",
    choices: [
      "notifications만",
      "user만",
      "user, settings, notifications 그리고 orders까지 전부",
      "user, settings, notifications",
    ],
    answer: 3,
    explanation:
      "바뀐 값에서 루트까지의 경로에 있는 객체만 새로 만들고, 경로 밖의 orders는 이전 상태의 참조를 그대로 쓴다. 이렇게 해야 orders를 그리는 컴포넌트가 렌더를 건너뛸 수 있다. 이 방식을 구조 공유라고 한다.",
    anchor: "바뀐-길만-새로-만든다",
  },
  {
    id: "js-immutability-react-3",
    post: "js-immutability-react",
    question: "개발 모드 StrictMode에서만 setItems((prev) => { prev.push(x); return [...prev]; })가 항목을 더 넣는 이유는?",
    choices: [
      "StrictMode가 업데이트 함수를 두 번 불러 순수하지 않은 함수를 드러내기 때문에",
      "StrictMode가 상태를 두 번 저장하기 때문에",
      "전개 연산자가 개발 모드에서 깊은 복사로 바뀌기 때문에",
      "프로덕션 빌드에는 push가 없기 때문에",
    ],
    answer: 0,
    explanation:
      "StrictMode는 개발 모드에서 업데이트 함수를 한 번 더 불러 결과가 같은지 드러낸다. prev를 고치는 함수는 두 번째 호출이 이미 고쳐진 prev를 받아 항목이 더 들어간다. [...prev, x]처럼 새 배열을 만들면 몇 번 불러도 같다.",
    anchor: "업데이트-함수가-두-번-불리는-이유",
  },
  {
    id: "js-immutability-react-4",
    post: "js-immutability-react",
    question: "같은 사용자가 여러 댓글 안에 복사돼 있는 상태를 종류별 사전과 id 참조로 바꾸면 좋아지는 점은?",
    choices: [
      "화면에 그릴 때 조립하는 코드가 필요 없어진다",
      "모든 업데이트가 깊은 복사로 바뀌어 안전해진다",
      "이름을 바꿀 때 users 경로만 새로 만들면 되고 댓글과 글은 그대로 남는다",
      "상태가 자동으로 서버와 동기화된다",
    ],
    answer: 2,
    explanation:
      "사용자가 한 곳에만 있으니 이름을 바꿀 때 users 경로 몇 층만 새로 만들면 되고, 댓글과 글 객체는 참조가 그대로라 그 컴포넌트가 다시 그려지지 않는다. 대신 그릴 때 id로 찾아 조립하는 코드가 필요하다.",
    anchor: "상태를-평평하게-펴면-경로가-짧아진다",
  },
  {
    id: "js-immutability-react-5",
    post: "js-immutability-react",
    question: "Immer의 produce가 '어디가 바뀌었는지'를 아는 방법은?",
    choices: [
      "recipe 실행 전후 상태를 깊게 비교한다",
      "초안이 Proxy라서 쓰기를 가로채고, 처음 쓰인 객체와 그 부모만 얕게 복사해 표시한다",
      "recipe 시작 전에 상태 전체를 structuredClone으로 복사한다",
      "Object.observe로 변경 이벤트를 받는다",
    ],
    answer: 1,
    explanation:
      "초안은 원본을 감싼 Proxy라 읽기와 쓰기가 모두 Immer를 거친다. 처음 쓰기가 일어난 객체만 copy-on-write로 복사하고 부모에 표시를 남긴 뒤, 끝나면 표시된 경로만 새로 조립한다. 전체를 복사하거나 비교하지 않는다.",
    anchor: "immer는-초안을-고치게-해-준다",
  },
  {
    id: "js-immutability-react-6",
    post: "js-immutability-react",
    question: "produce(base, (d) => { leaked = d.a; }) 이후 setTimeout 안에서 leaked.b를 읽으면?",
    choices: [
      "원본 base.a.b 값이 나온다",
      "undefined가 나온다",
      "TypeError: Cannot perform 'get' on a proxy that has been revoked가 난다",
      "새 상태의 값이 나온다",
    ],
    answer: 2,
    explanation:
      "produce가 끝나면 초안 Proxy는 폐기된다. 그래서 비동기 콜백에서 초안을 만지면 revoked proxy 에러가 난다. 비동기 작업이 끝난 뒤 새로 produce를 부르거나, 중간 값이 필요하면 current(draft)로 일반 객체를 꺼낸다.",
    anchor: "immer를-쓰다-만나는-에러들",
  },
  {
    id: "js-immutability-react-7",
    post: "js-immutability-react",
    question: "Immer를 도입한 뒤 원본 상태의 orders에 push하던 다른 코드가 'object is not extensible'로 터지기 시작했다. 이유는?",
    choices: [
      "Immer가 원본 상태 전체를 지워 버려서",
      "Immer가 orders를 깊게 복사하면서 원본을 비워서",
      "orders에 Map이 들어 있어서 enableMapSet이 필요해서",
      "새 상태를 얼릴 때 원본과 같이 쓰는 orders 가지도 함께 얼려서",
    ],
    answer: 3,
    explanation:
      "Immer는 바뀌지 않은 orders를 새 상태에서 같은 참조로 공유하고, 결과를 얼리면서 그 배열도 얼린다. 그 배열은 원본의 것이기도 하니 원본 쪽에서 고치던 코드가 막힌다. Immer 밖에서 상태를 고치던 코드가 드러난 것이니 그 코드를 고친다.",
    anchor: "immer를-쓰다-만나는-에러들",
  },
];
