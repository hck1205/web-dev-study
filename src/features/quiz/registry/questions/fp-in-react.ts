import type { QuizQuestion } from "../types";

export const FP_IN_REACT: QuizQuestion[] = [
  {
    id: "fp-in-react-1",
    post: "fp-in-react",
    question:
      "`const [name, setName] = useState(user.name)`인 폼에서 부모가 user를 김하나에서 이두리로 바꿨다. key는 없다. 입력칸에는?",
    choices: [
      "이두리로 바뀐다",
      "김하나가 남는다",
      "빈 문자열이 된다",
      "개발 모드에서만 이두리로 바뀐다",
    ],
    answer: 1,
    explanation:
      "useState의 인자는 처음 마운트할 때만 쓰이고, 같은 자리의 같은 컴포넌트는 상태를 유지한다. 대상이 바뀔 때 새로 시작하려면 key={user.id}로 다시 마운트하고, 늘 따라가야 하면 상태를 두지 않는다.",
    anchor: "같은-값이-두-곳에-살면-어긋난다",
  },
  {
    id: "fp-in-react-2",
    post: "fp-in-react",
    question:
      "거른 목록을 useState에 담고 `useEffect(() => setFiltered(...), [query])`로 맞춘다. query가 바뀌면 무슨 일이 생기나?",
    choices: [
      "한 번만 렌더링되고 결과가 바로 맞는다",
      "effect가 렌더링 전에 돌아 결과를 먼저 맞춘다",
      "무한 루프가 난다",
      "새 query와 옛 결과로 한 번 렌더링된 뒤 effect가 상태를 바꿔 다시 렌더링된다",
    ],
    answer: 3,
    explanation:
      "effect는 커밋 뒤에 돌아서 첫 렌더링은 query='re'인데 목록은 6개인 어긋난 조합으로 그려진다. 다른 값으로 계산할 수 있는 값은 렌더링 중에 바로 계산하고, 무거울 때만 useMemo로 감싼다.",
    anchor: "계산할-수-있으면-상태로-두지-않는다",
  },
  {
    id: "fp-in-react-3",
    post: "fp-in-react",
    question: "결제 상태를 isSubmitting, isDone, hasError 불리언 대신 `status` 하나로 두는 이유는?",
    choices: [
      "\"결제 중이면서 완료\" 같은 말이 안 되는 조합이 처음부터 생기지 않는다",
      "불리언은 useReducer에서 쓸 수 없다",
      "렌더링 횟수가 절반으로 준다",
      "StrictMode 경고를 피한다",
    ],
    answer: 0,
    explanation:
      "불리언 세 개는 8가지 조합을 만들고 그중 상당수는 불가능한 상태다. 가능한 값만 나열한 status 하나로 두면 그런 조합이 없고, 전이 규칙도 리듀서 한 곳에 모인다.",
    anchor: "상태-변화는-리듀서라는-순수-함수로-모은다",
  },
  {
    id: "fp-in-react-4",
    post: "fp-in-react",
    question: "리듀서를 React 없이 Node 테스트 러너만으로 시험할 수 있는 이유는?",
    choices: [
      "Node에 React가 내장돼 있어서",
      "useReducer가 서버에서도 돌아서",
      "리듀서가 (state, action) → 다음 상태인 순수 함수라 액션 배열을 reduce로 흘려보내면 되어서",
      "jsdom이 자동으로 켜져서",
    ],
    answer: 2,
    explanation:
      "리듀서는 React API를 쓰지 않는 순수 함수다. 액션 목록을 actions.reduce(reducer, initialState)로 흘려보내면 사용자의 조작 순서를 그대로 재현하고, 이전 상태를 고치지 않는지도 검사할 수 있다.",
    anchor: "상태-변화는-리듀서라는-순수-함수로-모은다",
  },
  {
    id: "fp-in-react-5",
    post: "fp-in-react",
    question:
      "\"상품을 담으면 토스트\"를 `useEffect(() => { if (items.length) showToast() }, [items])`로 만들었다. 저장된 장바구니를 마운트 때 복원하면?",
    choices: [
      "아무도 누르지 않았는데 토스트가 뜬다",
      "토스트가 영원히 뜨지 않는다",
      "복원이 실패한다",
      "StrictMode에서만 토스트가 두 번 뜨고 프로덕션에서는 안 뜬다",
    ],
    answer: 0,
    explanation:
      "effect는 사용자가 담았다는 사실이 아니라 items가 바뀌었다는 것만 안다. 복원도 같은 신호라 토스트가 떴다. 사용자 행동의 결과는 원인이 있는 이벤트 핸들러에서 처리한다.",
    anchor: "효과는-원인이-있는-자리에-둔다",
  },
  {
    id: "fp-in-react-6",
    post: "fp-in-react",
    question:
      "`useSyncExternalStore(subscribe, () => store.getState().cart.filter(...))`를 쓰면 React 19 개발 빌드에서 무엇이 나오나?",
    choices: [
      "아무 문제 없이 동작한다",
      "\"The result of getSnapshot should be cached\" 경고 뒤 Maximum update depth exceeded로 멈춘다",
      "subscribe가 호출되지 않는다는 에러",
      "Hydration mismatch 경고",
    ],
    answer: 1,
    explanation:
      "filter는 매번 새 배열을 만들어 Object.is 비교가 늘 다르니 React는 스토어가 바뀐 줄 알고 계속 다시 렌더링한다. 입력 참조가 같으면 지난 결과를 돌려주는 메모 셀렉터로 고친다.",
    anchor: "셀렉터는-같은-입력에-같은-참조를-돌려줘야-한다",
  },
  {
    id: "fp-in-react-7",
    post: "fp-in-react",
    question: "`createSelector((s) => s.cart, compute)`를 쓰는데 cart를 제자리에서 `push`로 고쳤다. 배지는?",
    choices: [
      "새 개수로 바로 바뀐다",
      "두 번 렌더링된다",
      "cart 참조가 같아 셀렉터가 옛 결과를 돌려주고 배지가 바뀌지 않는다",
      "셀렉터가 에러를 던진다",
    ],
    answer: 2,
    explanation:
      "메모 셀렉터는 같은 참조면 같은 내용이라고 보고 계산을 건너뛴다. 제자리에서 고치면 그 약속이 깨져 옛 결과가 남는다. 불변 업데이트가 메모이제이션의 전제다.",
    anchor: "셀렉터는-같은-입력에-같은-참조를-돌려줘야-한다",
  },
];
