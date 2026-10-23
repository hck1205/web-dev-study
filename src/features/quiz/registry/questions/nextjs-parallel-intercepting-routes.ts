import type { QuizQuestion } from "../types";

export const NEXTJS_PARALLEL_INTERCEPTING_ROUTES: QuizQuestion[] = [
  {
    id: "nextjs-parallel-intercepting-routes-1",
    post: "nextjs-parallel-intercepting-routes",
    question: "피드에서 사진을 Link로 눌러 /photo/1로 갔는데도 children 칸에 피드가 그대로 남는 이유는?",
    choices: [
      "children 칸이 template이라서",
      "소프트 이동에서는 새 주소에 맞는 페이지가 없는 슬롯이 이전 내용을 유지해서",
      "children 칸의 default.js가 피드를 다시 그려서",
      "브라우저 bfcache가 피드를 복원해서",
    ],
    answer: 1,
    explanation:
      "소프트 내비게이션은 맞는 페이지가 있는 슬롯만 바꾸고 나머지 슬롯은 이전 상태를 유지한다. 그래서 modal 칸만 채워지고 피드가 남는다. default.js는 이전 상태를 알 수 없는 하드 내비게이션에서 쓰인다.",
    anchor: "슬롯은-이동-방식에-따라-다르게-채워진다",
  },
  {
    id: "nextjs-parallel-intercepting-routes-2",
    post: "nextjs-parallel-intercepting-routes",
    question: "Next 16에서 @modal 슬롯에 default.js 없이 빌드하면?",
    choices: [
      "빌드는 통과하고 새로고침할 때만 404가 난다",
      "빌드는 통과하고 슬롯이 자동으로 null을 그린다",
      "형제 슬롯이 그릴 페이지나 default가 없다는 에러로 빌드가 멈춘다",
      "슬롯이 children으로 합쳐진다",
    ],
    answer: 2,
    explanation:
      "16부터 엄격한 라우트 매칭이 기본이라 한 슬롯이 그리는 주소에 형제 슬롯의 페이지나 default가 없으면 빌드가 실패한다. 15까지는 빌드가 통과하고 새로고침 때 404가 났다. 보통 null을 돌려주는 default.js로 해결한다.",
    anchor: "슬롯은-이동-방식에-따라-다르게-채워진다",
  },
  {
    id: "nextjs-parallel-intercepting-routes-3",
    post: "nextjs-parallel-intercepting-routes",
    question: "app/feed/@modal/ 안에 /photo/[id]를 가로채는 폴더를 만들려면 이름을 어떻게 지어야 하나?",
    choices: ["(.)photo/[id]", "(..)(..)photo/[id]", "(...)feed/photo/[id]", "(..)photo/[id]"],
    answer: 3,
    explanation:
      "점 표시는 폴더가 아니라 라우트 세그먼트로 센다. @modal 슬롯은 세그먼트가 아니라서 세지 않으니 feed에서 한 레벨 위인 루트의 photo를 가리키는 (..)가 맞다. (.)를 쓰면 /feed/photo/[id]를 기다려서 가로채기가 일어나지 않는다.",
    anchor: "이동을-가로채는-폴더-이름",
  },
  {
    id: "nextjs-parallel-intercepting-routes-4",
    post: "nextjs-parallel-intercepting-routes",
    question: "같은 /photo/1 요청인데 서버가 피드 안 모달과 상세 페이지를 구분하는 단서는?",
    choices: [
      "소프트 이동의 RSC 요청에 실려 오는 Next-Url 헤더(현재 주소)",
      "Referer 헤더",
      "쿼리 문자열의 modal=1",
      "쿠키에 저장된 마지막 방문 주소",
    ],
    answer: 0,
    explanation:
      "라우터는 RSC payload를 요청할 때 Next-Url 헤더로 지금 보고 있는 주소를 보낸다. 서버는 그 출발지 안에 가로채는 폴더가 있으면 그걸 렌더링한다. 새로고침은 문서 요청이라 이 헤더가 없어 진짜 상세 페이지가 나온다.",
    anchor: "클릭할-때와-새로고침할-때-서버가-고르는-페이지",
  },
  {
    id: "nextjs-parallel-intercepting-routes-5",
    post: "nextjs-parallel-intercepting-routes",
    question: "모달이 열린 상태에서 메뉴의 /feed 링크를 눌렀더니 주소는 /feed인데 모달이 그대로다. 어떻게 고치나?",
    choices: [
      "@modal/default.js를 지운다",
      "모달 컴포넌트에서 useEffect로 주소를 감시해 직접 숨긴다",
      "null을 돌려주는 @modal/page.js(필요하면 catch-all)를 둔다",
      "Link에 prefetch={false}를 준다",
    ],
    answer: 2,
    explanation:
      "소프트 이동에서 modal 슬롯에 /feed에 맞는 페이지가 없으니 이전 모달을 유지한 것이다. default.js는 하드 내비게이션에서만 쓰인다. 그 주소에 맞는 null 페이지를 두면 슬롯이 비워진다. 실험에서도 @modal/page.js를 더하자 닫혔다.",
    anchor: "모달-코드와-닫는-방법",
  },
  {
    id: "nextjs-parallel-intercepting-routes-6",
    post: "nextjs-parallel-intercepting-routes",
    question: "대시보드의 @revenue 슬롯이 렌더링 중 에러를 던졌고 그 슬롯에 error.js만 있다. 응답은?",
    choices: [
      "팀 목록과 매출 에러 화면이 보이고 상태는 200",
      "팀 목록과 매출 에러 화면이 보이지만 상태는 500",
      "페이지 전체가 루트 error.js로 바뀐다",
      "매출 칸만 빈칸이고 에러는 로그에만 남는다",
    ],
    answer: 1,
    explanation:
      "슬롯의 error.js가 그 칸만 에러 화면으로 바꾸고 다른 슬롯은 정상으로 그려지지만, 스트리밍 전에 난 에러라 문서 상태는 500으로 나간다. 같은 슬롯에 loading.js를 두면 나머지가 먼저 스트리밍되어 상태가 200이 됐다.",
    anchor: "모달-말고-병렬-라우트가-쓰이는-곳",
  },
];
