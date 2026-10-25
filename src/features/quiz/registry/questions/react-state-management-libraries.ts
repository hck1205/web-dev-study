import type { QuizQuestion } from "../types";

export const REACT_STATE_MANAGEMENT_LIBRARIES: QuizQuestion[] = [
  {
    id: "react-state-management-libraries-1",
    post: "react-state-management-libraries",
    question: "useSyncExternalStore에 selector로 count만 골라 넘긴 CartBadge는 저장소의 theme이 바뀌면 어떻게 되나?",
    choices: [
      "저장소가 바뀌었으니 무조건 다시 렌더링된다",
      "구독이 끊어져 이후 count 변경도 받지 못한다",
      "getSnapshot이 돌려준 count가 이전과 Object.is로 같으니 렌더링을 건너뛴다",
      "theme 변경은 transition으로 처리되어 나중에 렌더링된다",
    ],
    answer: 2,
    explanation:
      "React는 저장소가 알리면 getSnapshot을 불러 지난 값과 Object.is로 비교하고, 다를 때만 렌더링한다. count가 그대로면 건너뛴다. 값 객체 전체를 구독하는 Context와 다른 점이 이것이다.",
    anchor: "모든-저장소는-세-함수로-시작한다",
  },
  {
    id: "react-state-management-libraries-2",
    post: "react-state-management-libraries",
    question: "Redux에서 useSelector((s) => ({ name: s.user.name, theme: s.ui.theme }))를 쓰면 생기는 일은?",
    choices: [
      "아무 상관없는 액션이 dispatch되어도 매번 새 객체라 다시 렌더링된다",
      "name이나 theme이 바뀔 때만 다시 렌더링된다",
      "Redux가 에러를 던진다",
      "처음 한 번만 렌더링되고 이후 값이 바뀌지 않는다",
    ],
    answer: 0,
    explanation:
      "useSelector는 액션마다 셀렉터를 다시 돌리고 결과를 ===로 비교한다. 객체 리터럴은 매번 새 참조라 늘 바뀐 것으로 보인다. 원시값을 따로 고르거나 shallowEqual을 두 번째 인자로 준다.",
    anchor: "useselector는-액션마다-모든-셀렉터를-돈다",
  },
  {
    id: "react-state-management-libraries-3",
    post: "react-state-management-libraries",
    question: "Zustand 4에서 잘 돌던 useCart((s) => ({ coupon: s.coupon, add: s.add }))가 5로 올리자 Maximum update depth exceeded로 멈췄다. 이유와 고침은?",
    choices: [
      "5에서 set이 비동기가 되어서다. await set(...)으로 바꾼다",
      "5는 Provider가 필요해져서다. 앱을 Provider로 감싼다",
      "5에서 셀렉터 함수는 한 번만 실행되어서다. 셀렉터를 useCallback으로 감싼다",
      "5는 useSyncExternalStore를 그대로 써서 매번 새 객체가 바뀐 상태로 보인다. useShallow로 감싼다",
    ],
    answer: 3,
    explanation:
      "React는 렌더링 중 스냅숏을 다시 읽어 Object.is로 비교하는데, 셀렉터가 부를 때마다 새 객체를 만들면 계속 달라 보여 렌더링을 반복한다. useShallow로 최상위 값을 얕게 비교하거나 원시값을 하나씩 고른다. useCallback은 결과 객체가 새로 만들어지는 걸 막지 못한다.",
    anchor: "zustand-훅-하나로-끝나는-바깥-저장소",
  },
  {
    id: "react-state-management-libraries-4",
    post: "react-state-management-libraries",
    question: "Jotai에서 couponAtom만 바꿨을 때 subtotalAtom(get(itemsAtom)만 읽음)을 구독하는 컴포넌트는?",
    choices: [
      "저장소 전체가 바뀌었으니 다시 렌더링된다",
      "subtotalAtom은 couponAtom에 의존하지 않으니 다시 계산되지도, 렌더링되지도 않는다",
      "subtotalAtom이 다시 계산되고 결과가 같아도 렌더링된다",
      "Provider가 없으면 아무 atom도 바뀌지 않는다",
    ],
    answer: 1,
    explanation:
      "계산 atom은 get으로 읽은 atom을 기록해 의존 그래프를 만든다. couponAtom을 읽는 totalAtom과 그 구독자만 다시 계산된다. 결과가 이전과 같으면 구독자도 깨우지 않는다.",
    anchor: "jotai-상태를-원자로-쪼개고-의존을-따라간다",
  },
  {
    id: "react-state-management-libraries-5",
    post: "react-state-management-libraries",
    question: "동시성 렌더링 도중 바깥 저장소의 theme이 바뀌었다. useSyncExternalStore로 구독한 컴포넌트들에서 React는 어떻게 하나?",
    choices: [
      "앞의 컴포넌트는 옛 값, 뒤의 컴포넌트는 새 값으로 그대로 커밋한다",
      "변경을 무시하고 다음 transition까지 미룬다",
      "커밋 전에 스냅숏이 달라진 걸 알아채고 동기 렌더링으로 다시 그려 모두 같은 값을 보게 한다",
      "Error Boundary로 에러를 던진다",
    ],
    answer: 2,
    explanation:
      "구독 없이 읽으면 한 커밋에 두 시점의 값이 섞이는 tearing이 생긴다. useSyncExternalStore는 렌더링 도중의 변경을 발견하면 막는 동기 렌더링으로 다시 그린다. 그래서 저장소 변경으로 생긴 렌더링은 transition으로 미룰 수 없다.",
    anchor: "렌더링-도중에-저장소가-바뀌면",
  },
  {
    id: "react-state-management-libraries-6",
    post: "react-state-management-libraries",
    question: "MobX의 observer 컴포넌트가 셀렉터 없이도 필요한 값이 바뀔 때만 렌더링되는 이유는?",
    choices: [
      "렌더링하는 동안 읽은 관찰 가능한 속성을 기록해 두고 그 속성이 바뀔 때만 다시 렌더링해서",
      "모든 상태를 불변 객체로 바꿔 참조를 비교해서",
      "컴포넌트를 자동으로 memo로 감싸 props를 비교해서",
      "상태가 바뀌면 DOM만 직접 고치고 렌더링은 하지 않아서",
    ],
    answer: 0,
    explanation:
      "MobX는 observer 컴포넌트가 렌더링 중에 어떤 속성을 읽었는지 추적한다. 그 속성이 바뀌면 그 컴포넌트만 다시 렌더링한다. 상태는 제자리에서 고치며, 불변 객체 비교 방식이 아니다.",
    anchor: "mobx와-시그널-읽은-것을-기억해-두는-방식",
  },
  {
    id: "react-state-management-libraries-7",
    post: "react-state-management-libraries",
    question: "서버 데이터는 TanStack Query로 빼고 나니 전역 값이 테마와 로그인 사용자 두 개만 남았다. 가장 알맞은 선택은?",
    choices: [
      "변경 추적을 위해 Redux Toolkit을 들인다",
      "Context로 충분하다. 드물게 바뀌는 값이라 리렌더링 문제가 거의 없다",
      "값마다 Zustand 저장소를 하나씩 만든다",
      "MobX로 객체 모델을 만든다",
    ],
    answer: 1,
    explanation:
      "드물게 바뀌는 값 몇 개라면 Context의 전체 구독이 문제가 되지 않고, 라이브러리를 더하지 않는 게 가장 싸다. 자주 바뀌는 값이 섞여 렌더링이 보이기 시작할 때 셀렉터가 있는 저장소로 옮긴다.",
    anchor: "서버-상태를-빼고-남은-전역-값부터-센다",
  },
];
