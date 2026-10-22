import type { QuizQuestion } from "../types";

export const FRONTEND_AS_DISTRIBUTED_SYSTEM: QuizQuestion[] = [
  {
    id: "frontend-as-distributed-system-1",
    post: "frontend-as-distributed-system",
    question: "카페 와이파이에 붙었지만 인증 페이지에 막혀 인터넷이 안 된다. navigator.onLine은 대개 어떤 값인가?",
    choices: [
      "false. 인터넷에 닿지 않으니까",
      "undefined",
      "true. 네트워크 인터페이스는 연결돼 있으니까",
      "요청을 보내 본 뒤에야 정해진다",
    ],
    answer: 2,
    explanation:
      "navigator.onLine은 인터페이스 연결 여부에 가까워서 true가 인터넷에 닿는다는 뜻은 아니다. 그래서 힌트로만 쓰고 실제 판단은 요청 결과로 한다.",
    anchor: "끊긴-걸-아는-방법은-생각보다-적다",
  },
  {
    id: "frontend-as-distributed-system-2",
    post: "frontend-as-distributed-system",
    question:
      "앱 코드가 fetch로 POST를 한 번만 보내 201을 받았는데 서버에는 같은 주문이 두 건 생겼다. 실험에서 확인한 원인은?",
    choices: [
      "React StrictMode가 effect를 두 번 실행해서",
      "재사용한 연결이 응답 전에 끊기자 Chromium이 같은 요청을 새 연결로 다시 보내서",
      "서버가 응답을 두 번 보내서",
      "CORS 사전 요청이 주문을 만들어서",
    ],
    answer: 1,
    explanation:
      "Chromium 141에서 keep-alive로 재사용한 연결이 응답 없이 끊기자 브라우저가 스스로 POST를 다시 보냈다. 서버가 처리했는지는 브라우저도 모른다. 멱등성 키를 실으면 서버가 같은 요청임을 알아보고 처음 응답을 돌려줘 주문이 한 건으로 끝났다.",
    anchor: "응답을-못-받았다고-처리되지-않은-건-아니다",
  },
  {
    id: "frontend-as-distributed-system-3",
    post: "frontend-as-distributed-system",
    question: "주문 버튼의 멱등성 키를 만드는 시점으로 알맞은 것은?",
    choices: [
      "사용자가 버튼을 누를 때 한 번 만들고, 재시도에는 같은 키를 쓴다",
      "fetch를 부를 때마다 새로 만든다",
      "페이지를 열 때 하나 만들어 모든 요청에 쓴다",
      "서버가 응답으로 준 키를 다음 요청에 쓴다",
    ],
    answer: 0,
    explanation:
      "재시도할 때 새 키를 만들면 서버는 다른 요청으로 보고 두 번 처리한다. 페이지 하나에 키 하나를 쓰면 서로 다른 주문까지 하나로 합쳐진다. 사용자 의도 하나에 키 하나다.",
    anchor: "응답을-못-받았다고-처리되지-않은-건-아니다",
  },
  {
    id: "frontend-as-distributed-system-4",
    post: "frontend-as-distributed-system",
    question:
      "좋아요를 누르고 곧바로 취소했다. 첫 요청의 응답이 늦게 도착해 응답을 받는 대로 화면에 반영하면 어떻게 끝나나?",
    choices: [
      "화면과 서버 모두 취소 상태",
      "화면과 서버 모두 좋아요 상태",
      "에러가 나서 화면이 되돌아간다",
      "화면은 좋아요, 서버는 취소 상태로 어긋난다",
    ],
    answer: 3,
    explanation:
      "서버는 도착 순서대로 처리해 마지막이 취소(v2)인데, 화면은 늦게 온 v1 응답이 덮어 좋아요로 끝난다. 응답의 버전을 비교해 더 높은 버전만 받으면 낡은 v1을 버려 둘이 맞는다.",
    anchor: "누르자마자-바꾼-화면을-서버-답과-맞추기",
  },
  {
    id: "frontend-as-distributed-system-5",
    post: "frontend-as-distributed-system",
    question: "탭 1에서 BroadcastChannel로 로그아웃 메시지를 보냈다. 탭 1의 onmessage는?",
    choices: [
      "자기 메시지도 받는다",
      "받지 않는다. 그래서 보낸 탭은 자기 상태를 직접 바꿔야 한다",
      "다른 탭이 모두 받은 뒤에 받는다",
      "storage 이벤트로 대신 받는다",
    ],
    answer: 1,
    explanation:
      "BroadcastChannel과 storage 이벤트 모두 보낸 쪽에는 알리지 않는다. 실험에서도 탭 2만 받았다. 보낸 탭은 직접 바꾸고 다른 탭은 듣고 바꾸도록 코드를 나눈다.",
    anchor: "탭-세-개는-노드-세-개다",
  },
  {
    id: "frontend-as-distributed-system-6",
    post: "frontend-as-distributed-system",
    question: "사용자 시계가 10분 빠를 때 방금 받은 300초짜리 토큰이 만료로 보이는 문제를 줄이는 방법이 아닌 것은?",
    choices: [
      "응답의 Date 헤더로 서버와의 시계 차이를 재서 보정한다",
      "서버가 남은 초(expires_in)를 주고 클라이언트는 단조 시계로 잰다",
      "만료 판단을 Date.now()로 더 자주 한다",
      "음수가 되는 상대 시간은 \"방금\"으로 고정한다",
    ],
    answer: 2,
    explanation:
      "틀린 시계로 더 자주 비교해도 결과는 같다. 서버 시각으로 차이를 보정하거나, 절대 시각 대신 남은 시간을 받아 사용자가 바꿀 수 없는 단조 시계로 재야 한다.",
    anchor: "사용자-시계는-믿을-수-없다",
  },
  {
    id: "frontend-as-distributed-system-7",
    post: "frontend-as-distributed-system",
    question: "배포 직후 \"Failed to fetch dynamically imported module\" 에러가 몰린다. 원인과 대응으로 알맞은 것은?",
    choices: [
      "CDN 장애다. CDN을 바꾼다",
      "새 코드의 버그다. 즉시 롤백한다",
      "옛 탭의 코드가 지워진 옛 청크를 찾는다. 옛 파일을 한동안 남기고, 버전 차이를 알아채면 다음 화면 이동 때 새로고침한다",
      "브라우저 캐시가 가득 찼다. 캐시를 비우라고 안내한다",
    ],
    answer: 2,
    explanation:
      "어제 연 탭은 어제의 파일 이름을 알고 있는데 배포로 그 파일이 사라졌다. 해시가 붙은 옛 파일은 새 파일과 충돌하지 않으니 남겨 두고, 버전 헤더로 새 배포를 알아채 안전한 순간에 새로고침한다.",
    anchor: "옛-코드와-새-서버가-함께-돈다",
  },
];
