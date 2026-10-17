import type { QuizQuestion } from "../types";

export const CLIENT_DATA_CACHE: QuizQuestion[] = [
  {
    id: "client-data-cache-1",
    post: "client-data-cache",
    question: "Header, Sidebar, 설정 메뉴가 같은 queryKey ['me']로 거의 동시에 마운트됐다. 요청은 몇 번 나가나?",
    choices: [
      "세 번. 컴포넌트마다 자기 요청을 보낸다",
      "한 번. 진행 중인 요청이 있으면 나중 컴포넌트는 구독자로만 붙는다",
      "staleTime이 0이면 세 번, 0보다 크면 한 번",
      "브라우저 HTTP 캐시가 막아 주므로 한 번",
    ],
    answer: 1,
    explanation:
      "같은 키의 칸이 이미 받는 중이면 새 요청을 보내지 않고 그 결과를 함께 받는다. staleTime은 응답이 온 뒤에 마운트된 컴포넌트가 다시 받을지를 정할 뿐이다. 거의 동시에 출발한 요청은 HTTP 캐시가 막지 못한다.",
    anchor: "쿼리-키-하나가-캐시-한-칸이다",
  },
  {
    id: "client-data-cache-2",
    post: "client-data-cache",
    question: "staleTime 30초, gcTime 5분인 쿼리의 페이지를 떠났다가 2분 뒤 돌아왔다. 어떻게 보이나?",
    choices: [
      "캐시가 지워져 스피너부터 다시 돈다",
      "캐시를 바로 보여 주고, 아직 신선하니 요청하지 않는다",
      "캐시를 바로 보여 주고, 상했으니 뒤에서 다시 받아 바꾼다",
      "새 데이터가 올 때까지 빈 화면을 보여 준다",
    ],
    answer: 2,
    explanation:
      "구독자가 없어도 gcTime 5분 동안은 칸이 남으니 돌아오자마자 그린다. 받은 지 30초가 지났으니 상한 데이터라 마운트 계기로 뒤에서 다시 받는다. 데이터를 useState에 뒀다면 떠날 때 사라져 스피너부터 다시 돌았을 것이다.",
    anchor: "신선한-시간과-남겨-두는-시간",
  },
  {
    id: "client-data-cache-3",
    post: "client-data-cache",
    question: "다른 창에 갔다 올 때마다 같은 요청이 다시 나간다. 가장 알맞은 설명은?",
    choices: [
      "기본값 staleTime 0 때문에 데이터가 늘 상해 있고, refetchOnWindowFocus가 기본으로 켜져 있어서",
      "gcTime이 지나 캐시가 지워졌기 때문에",
      "queryKey가 렌더링마다 새 배열이라서",
      "retry가 기본 3번이라서",
    ],
    answer: 0,
    explanation:
      "포커스, 마운트, 재연결 계기는 데이터가 상했을 때만 다시 받는다. staleTime이 0이면 받자마자 상하니 포커스마다 요청이 나간다. 키는 배열 내용으로 해시하므로 새 배열이어도 같은 칸이다.",
    anchor: "언제-다시-받아-오나",
  },
  {
    id: "client-data-cache-4",
    post: "client-data-cache",
    question: "낙관적 업데이트의 onMutate에서 cancelQueries를 먼저 부르는 이유는?",
    choices: [
      "서버로 보낼 뮤테이션 요청을 취소하려고",
      "gcTime 타이머를 초기화하려고",
      "실패했을 때 자동으로 롤백되게 하려고",
      "진행 중이던 옛 조회 응답이 늦게 도착해 방금 바꾼 캐시를 덮어쓰지 않게 하려고",
    ],
    answer: 3,
    explanation:
      "캐시를 먼저 바꿨는데 그 전에 출발한 조회 요청이 뒤늦게 오면 옛 값으로 덮인다. 그래서 같은 키의 진행 중인 요청을 먼저 취소한다. 롤백은 자동이 아니라 onMutate가 돌려준 스냅숏으로 onError에서 직접 한다.",
    anchor: "누르자마자-바뀌는-화면",
  },
  {
    id: "client-data-cache-5",
    post: "client-data-cache",
    question: "initialData와 placeholderData의 차이로 맞는 것은?",
    choices: [
      "둘 다 캐시에 저장되지만 placeholderData는 staleTime을 무시한다",
      "initialData는 진짜 데이터로 캐시에 들어가고, placeholderData는 캐시에 들어가지 않는 임시 값이라 쿼리가 곧바로 받으러 간다",
      "initialData는 서버에서만, placeholderData는 클라이언트에서만 쓸 수 있다",
      "placeholderData를 주면 queryFn이 실행되지 않는다",
    ],
    answer: 1,
    explanation:
      "initialData는 캐시에 저장되어 다른 컴포넌트도 보고 staleTime 안이면 다시 받지 않으니, 받은 시각을 initialDataUpdatedAt으로 알려 주는 게 좋다. placeholderData는 화면을 비워 두지 않으려는 임시 값이고 isPlaceholderData로 구분한다.",
    anchor: "처음-값을-미리-넣어-두기",
  },
  {
    id: "client-data-cache-6",
    post: "client-data-cache",
    question: "useQuery({ queryKey: ['todos'], queryFn: () => getTodos(filter) })에서 필터를 바꾸면 어떻게 되나?",
    choices: [
      "키가 같아서 다시 받지 않고 이전 필터의 데이터를 그대로 보여 준다",
      "queryFn이 바뀌었으니 자동으로 다시 받는다",
      "에러가 나서 쿼리가 실패한다",
      "캐시가 지워지고 로딩부터 다시 시작한다",
    ],
    answer: 0,
    explanation:
      "캐시 칸을 가르는 건 queryKey뿐이라 queryFn이 쓰는 filter가 키에 없으면 같은 칸으로 본다. queryFn이 쓰는 값은 모두 키에 넣어야 하고, eslint 플러그인의 exhaustive-deps 규칙이 이 실수를 잡아 준다.",
    anchor: "캐시가-틀린-값을-보여-주는-경우",
  },
  {
    id: "client-data-cache-7",
    post: "client-data-cache",
    question: "서버에서 prefetch한 쿼리를 하이드레이션했는데, 클라이언트에서 마운트하자마자 같은 요청이 또 나간다. 원인은?",
    choices: [
      "서버의 QueryClient를 요청마다 새로 만들어서",
      "HydrationBoundary가 캐시를 비워서",
      "클라이언트의 staleTime이 0이라 하이드레이션한 데이터가 받자마자 상한 것으로 보여서",
      "gcTime이 5분이라서",
    ],
    answer: 2,
    explanation:
      "staleTime이 0이면 서버에서 받아 온 데이터도 곧바로 상한 것이 되어 마운트 계기로 다시 받는다. 그래서 SSR과 함께 쓸 때는 staleTime을 0보다 크게 준다. 서버의 QueryClient를 요청마다 새로 만드는 건 사용자 사이에 데이터가 섞이지 않게 하는 올바른 방법이다.",
    anchor: "서버가-받아-둔-데이터를-넘겨받기",
  },
];
