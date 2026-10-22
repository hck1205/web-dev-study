import type { QuizQuestion } from "../types";

export const DATA_FETCHING_OPTIMIZATION: QuizQuestion[] = [
  {
    id: "data-fetching-optimization-1",
    post: "data-fetching-optimization",
    question: "Profile이 사용자를 받은 뒤 Orders를 그리고, Orders가 /api/users/7/orders를 부른다. 사용자 id 7은 주소에 이미 있다. 이 계단을 어떻게 보는 게 맞을까?",
    choices: [
      "주문이 사용자에 속하니 없앨 수 없는 진짜 의존이다",
      "서버가 느려서 생긴 계단이다",
      "코드 구조가 만든 가짜 의존이라, 진입 시점에 두 요청을 함께 출발시키면 없어진다",
      "HTTP/2로 바꾸면 저절로 없어진다",
    ],
    answer: 2,
    explanation:
      "주문 목록 요청에 필요한 건 사용자 id뿐인데 그 값은 주소에 처음부터 있었다. 요청이 컴포넌트 안에 있어서 트리 깊이를 따라 줄을 선 것이다. 반면 품목 요청은 주문 id가 있어야 하니 진짜 의존이다.",
    anchor: "폭포는-컴포넌트-트리를-따라-생긴다",
  },
  {
    id: "data-fetching-optimization-2",
    post: "data-fetching-optimization",
    question: "Header와 Profile이 동시에 /api/user/7을 fetch했는데 두 번째 요청이 첫 번째가 끝난 뒤에야 나갔다. 연결은 남아 있었다. 크롬에서 가장 그럴듯한 원인은?",
    choices: [
      "같은 주소의 GET을 HTTP 캐시가 첫 응답을 쓸 수 있는지 보려고 붙잡아 둔다",
      "React가 같은 effect를 순서대로 실행한다",
      "서버가 같은 클라이언트의 요청을 한 번에 하나만 처리한다",
      "CORS 사전 요청이 끼어들었다",
    ],
    answer: 0,
    explanation:
      "기본 설정에서는 두 번째 요청이 첫 응답이 끝난 뒤 나갔고, cache: \"no-store\"로 HTTP 캐시를 건너뛰자 둘이 나란히 나갔다. 해결은 캐시를 끄는 게 아니라 진행 중인 요청을 키로 합치는 것이다.",
    anchor: "같은-요청이-두-번-나가면",
  },
  {
    id: "data-fetching-optimization-3",
    post: "data-fetching-optimization",
    question: "진행 중인 요청을 Map에 넣어 합치는 getOnce에서 finally로 항목을 지우지 않으면?",
    choices: [
      "요청이 두 번씩 나간다",
      "첫 응답을 영원히 돌려주는 캐시가 되고 실패한 Promise도 계속 남는다",
      "Map이 자동으로 비워져 문제없다",
      "AbortController가 동작하지 않는다",
    ],
    answer: 1,
    explanation:
      "진행 중 합치기는 끝나면 손을 떼야 한다. 지우지 않으면 신선한 시간 개념 없이 옛 값과 실패를 계속 돌려준다. 끝난 뒤에도 다시 쓰려면 staleTime을 정하는 캐시가 필요하다.",
    anchor: "같은-요청이-두-번-나가면",
  },
  {
    id: "data-fetching-optimization-4",
    post: "data-fetching-optimization",
    question: "같은 HTTP/1.1 서버에 200ms 걸리는 요청 12개를 동시에 보냈다. 일곱 번째 요청은 어떻게 되나?",
    choices: [
      "바로 나가고 응답만 늦게 온다",
      "브라우저가 오류를 낸다",
      "다른 요청과 한 연결에 섞여 나간다",
      "연결 6개가 다 차서 앞 요청이 끝나 연결이 빌 때까지 기다린다",
    ],
    answer: 3,
    explanation:
      "크롬은 HTTP/1.1에서 호스트당 연결을 6개까지만 연다. 측정에서 일곱 번째 요청은 55ms에 만들어졌지만 첫 요청이 끝난 408ms에 나갔다. 한 연결에 여러 요청을 섞는 건 HTTP/2의 방식이다.",
    anchor: "연결-여섯-개의-줄",
  },
  {
    id: "data-fetching-optimization-5",
    post: "data-fetching-optimization",
    question: "BFF로 바꿨더니 화면이 빨라졌다. 가장 큰 이유는?",
    choices: [
      "서비스들의 처리 시간이 짧아졌다",
      "요청 조립을 왕복이 싼 서버 안쪽으로 옮겨 휴대폰은 한 번만 왕복한다",
      "BFF 응답은 브라우저가 캐시하기 쉽다",
      "BFF가 데이터를 미리 계산해 둔다",
    ],
    answer: 1,
    explanation:
      "서비스 처리 시간은 그대로지만, 휴대폰과 서버 사이의 비싼 왕복이 두 번에서 한 번으로 줄었다. 서버 안의 왕복은 1ms 안쪽이라 진짜 의존이 남아도 거의 공짜다. 화면 단위 응답이라 캐시 재사용은 오히려 어려워진다.",
    anchor: "화면-하나에-맞춘-응답-bff",
  },
  {
    id: "data-fetching-optimization-6",
    post: "data-fetching-optimization",
    question: "주문 데이터와 함께 추천 상품(600ms)까지 Promise.all로 묶었다. 추천 서버가 장애로 실패하면?",
    choices: [
      "추천 칸만 비고 주문 내역은 보인다",
      "Promise.all이 실패를 무시하고 나머지를 돌려준다",
      "주문 내역까지 실패해 에러 화면이 된다",
      "브라우저가 자동으로 재시도한다",
    ],
    answer: 2,
    explanation:
      "Promise.all은 하나라도 실패하면 전체가 실패하고, 성공해도 가장 늦은 것을 기다린다. 핵심이 아닌 데이터는 자기 경계와 로딩 상태를 따로 두거나 첫 화면 뒤로 미뤄야 지연과 실패가 그 칸 안에서 끝난다.",
    anchor: "급하지-않은-데이터를-기다리게-하지-않는다",
  },
  {
    id: "data-fetching-optimization-7",
    post: "data-fetching-optimization",
    question: "요청마다 만드는 API 응답에 brotli 최고 단계(11) 대신 4~6을 쓰는 이유는?",
    choices: [
      "11은 압축하는 데 gzip보다 100배 넘게 오래 걸려 요청마다 쓰기엔 비싸다",
      "11은 브라우저가 풀지 못한다",
      "11은 gzip보다 결과가 크다",
      "11은 JSON에는 쓸 수 없다",
    ],
    answer: 0,
    explanation:
      "68KB JSON을 br(11)로 압축하는 데 48ms가 들었고 gzip(6)은 0.39ms였다. 결과는 15% 정도 작을 뿐이라, 빌드 때 한 번 압축하는 정적 파일에만 11을 쓴다.",
    anchor: "덜-받는-응답",
  },
];
