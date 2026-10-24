import type { QuizQuestion } from "../types";

export const REACT_SUSPENSE_ERROR_BOUNDARY: QuizQuestion[] = [
  {
    id: "react-suspense-error-boundary-1",
    post: "react-suspense-error-boundary",
    question: "use(fetch(url).then((r) => r.json()))처럼 렌더 중에 프로미스를 만들면 화면이 계속 fallback에 머문다. 왜 그런가?",
    choices: [
      "use는 fetch가 돌려준 프로미스를 지원하지 않기 때문이다",
      "Suspense 경계가 fallback을 300ms 이상 보여 주지 않기 때문이다",
      "프로미스가 끝나면 컴포넌트를 처음부터 다시 렌더링하는데, 그때마다 새 프로미스가 생겨 또 멈추기 때문이다",
      "브라우저가 같은 URL 요청을 막기 때문이다",
    ],
    answer: 2,
    explanation:
      "React는 멈춘 지점부터 이어 가지 않고 경계 안을 처음부터 다시 렌더링한다. 렌더 중에 만든 프로미스는 매번 새것이라 아직 끝나지 않았고, 실험에서도 300ms 동안 렌더링 12번에 화면은 loading이었다. 프로미스는 부모, 캐시, 라이브러리처럼 렌더 밖에서 만든다.",
    anchor: "프로미스는-렌더-밖에서-만들어-둔다",
  },
  {
    id: "react-suspense-error-boundary-2",
    post: "react-suspense-error-boundary",
    question: "옵션을 바꿀 때마다 이미 보이던 상품 정보가 스켈레톤으로 바뀌었다가 돌아온다. 업데이트 방식만 바꿔서 막으려면?",
    choices: [
      "옵션 변경을 startTransition으로 감싼다. 이미 보이던 경계는 fallback 대신 이전 내용을 유지한 채 기다린다",
      "Suspense 경계에 key={optionId}를 준다",
      "fallback을 null로 바꾼다",
      "flushSync로 업데이트를 감싼다",
    ],
    answer: 0,
    explanation:
      "transition 때문에 이미 보이던 내용을 fallback으로 바꿔야 하면 React는 fallback을 커밋하지 않고 이전 화면을 유지한다. 경계에 key를 바꿔 주면 새 경계가 되어 오히려 fallback이 보인다. fallback을 null로 하면 내용이 사라진 빈 자리가 된다.",
    anchor: "이미-보인-화면은-fallback으로-숨기지-않는다",
  },
  {
    id: "react-suspense-error-boundary-3",
    post: "react-suspense-error-boundary",
    question: "데이터가 100ms 만에 오는데 Suspense의 fallback이 300ms 넘게 보였다. 가장 그럴듯한 이유는?",
    choices: [
      "use가 프로미스를 두 번 기다리기 때문이다",
      "React가 fallback을 보여 준 뒤 내용 공개를 최대 300ms까지 모아서 한꺼번에 하기 때문이다",
      "Suspense는 항상 다음 프레임 이후에 내용을 보여 주기 때문이다",
      "개발 모드에서만 생기는 지연이다",
    ],
    answer: 1,
    explanation:
      "React는 FALLBACK_THROTTLE_MS(300ms) 동안 경계의 공개를 모아 화면이 여러 번 튀지 않게 한다. 실측에서도 100ms짜리 데이터가 약 356ms에 보였다. 데이터가 거의 늘 빨리 온다면 transition으로 fallback 자체를 피하는 편이 낫다.",
    anchor: "경계는-사용자가-한-덩어리로-보는-단위에",
  },
  {
    id: "react-suspense-error-boundary-4",
    post: "react-suspense-error-boundary",
    question: "에러 경계 안의 버튼 onClick에서 throw한 에러는 어떻게 되나?",
    choices: [
      "가장 가까운 에러 경계의 fallback이 보인다",
      "React가 루트 전체를 언마운트한다",
      "onCaughtError로 전달된다",
      "경계를 지나쳐 window의 error 이벤트로 가고 화면은 그대로다",
    ],
    answer: 3,
    explanation:
      "에러 경계는 렌더링과 커밋 중의 에러만 잡는다. 이벤트 핸들러는 렌더링이 끝난 뒤 브라우저가 따로 부르니 React가 트리를 거슬러 올라갈 문맥이 없다. 경계로 보내려면 setState(() => { throw e })나 showBoundary로 렌더링 안으로 끌고 들어온다.",
    anchor: "에러-경계는-렌더링-중의-에러만-잡는다",
  },
  {
    id: "react-suspense-error-boundary-5",
    post: "react-suspense-error-boundary",
    question: "에러 로그를 서버로 보내는 코드는 에러 경계의 어느 메서드에 두어야 하나?",
    choices: [
      "componentDidCatch. commit 단계에서 한 번 불리기 때문이다",
      "getDerivedStateFromError. 에러를 가장 먼저 받기 때문이다",
      "render. fallback을 그릴 때 함께 보낸다",
      "constructor. 경계가 만들어질 때 미리 연결해 둔다",
    ],
    answer: 0,
    explanation:
      "getDerivedStateFromError는 render 단계에서 불리는 정적 메서드라 여러 번 불릴 수 있고, 실험에서도 에러 한 번에 두 번 찍혔다. 상태만 돌려주고, 부작용은 commit 단계의 componentDidCatch에 둔다.",
    anchor: "에러-경계는-렌더링-중의-에러만-잡는다",
  },
  {
    id: "react-suspense-error-boundary-6",
    post: "react-suspense-error-boundary",
    question: "프로미스 캐시를 쓰는 리뷰 영역에서 \"다시 시도\"로 에러 경계를 리셋했는데 요청이 다시 나가지 않고 같은 에러가 난다. 원인은?",
    choices: [
      "에러 경계는 한 번 에러를 잡으면 다시 렌더링하지 않는다",
      "Suspense 경계가 에러 경계보다 바깥에 있어서다",
      "캐시에 실패한 프로미스가 남아 있어 use가 같은 에러를 바로 다시 던지기 때문이다",
      "React 19는 실패한 요청을 자동으로 막기 때문이다",
    ],
    answer: 2,
    explanation:
      "경계를 리셋하면 children을 다시 렌더링하지만, 캐시가 같은 실패한 프로미스를 돌려주면 결과도 같다. 실험에서 캐시를 지운 뒤 리셋했을 때만 요청이 다시 나가 성공했다. lazy도 실패한 import 결과를 기억하니 청크 로드 실패는 새로고침으로 푼다.",
    anchor: "다시-시도하려면-원인도-같이-비운다",
  },
];
