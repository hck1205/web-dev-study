import type { QuizQuestion } from "../types";

export const NEXTJS_CACHING_LAYERS: QuizQuestion[] = [
  {
    id: "nextjs-caching-layers-1",
    post: "nextjs-caching-layers",
    question: "generateMetadata, layout, page가 같은 URL을 cache: \"no-store\"로 fetch한다. 요청 한 번에 API는 몇 번 불릴까?",
    choices: [
      "세 번. no-store는 캐시를 쓰지 말라는 뜻이라서",
      "한 번. 같은 렌더링 안의 같은 GET fetch는 하나로 합쳐져서",
      "0번. 빌드 때 받은 값을 쓰니까",
      "두 번. generateMetadata는 따로 렌더링되어서",
    ],
    answer: 1,
    explanation:
      "요청 메모이제이션은 한 렌더링 안에서 URL과 옵션이 같은 GET fetch를 한 번만 보낸다. no-store는 요청 사이에 저장하지 말라는 뜻이라 이 동작과 상관없다. 다음 요청에서는 다시 한 번 나간다.",
    anchor: "요청-하나-안에서만-쓰는-메모",
  },
  {
    id: "nextjs-caching-layers-2",
    post: "nextjs-caching-layers",
    question: "같은 주소를 curl로 요청하면 새 가격이 오는데 사용자는 새로고침 전까지 옛 가격을 본다. 어느 층이 원인인가?",
    choices: [
      "데이터 캐시",
      "전체 라우트 캐시",
      "브라우저 메모리의 클라이언트 캐시",
      "요청 메모이제이션",
    ],
    answer: 2,
    explanation:
      "curl이 새 값을 받으면 서버 쪽 층은 이미 맞다. 남은 건 그 탭이 Link 이동으로 받아 둔 RSC payload이고, 새로고침이 이 층을 비운다. 요청 메모이제이션은 요청 하나 안에서만 사는 메모라 요청을 넘어 옛 값을 남기지 않는다.",
    anchor: "값이-안-바뀔-때-어디부터-의심하나",
  },
  {
    id: "nextjs-caching-layers-3",
    post: "nextjs-caching-layers",
    question: "관리자가 가격을 저장한 그 화면에서 바로 새 가격을 봐야 한다. 서버 액션 안에서 무엇을 부르는 게 맞나?",
    choices: [
      "updateTag",
      "revalidateTag(tag, \"max\")",
      "router.refresh",
      "아무것도 부르지 않아도 된다",
    ],
    answer: 0,
    explanation:
      "updateTag는 태그를 즉시 만료하고 액션 응답에 새 데이터로 다시 그린 화면을 실어 보내 read-your-own-writes를 보장한다. revalidateTag(\"max\")는 옛 값을 주면서 뒤에서 갱신해 응답에 새 화면을 싣지 않는다. router.refresh는 캐시를 지우지 않는다.",
    anchor: "값을-바꾼-뒤-무엇을-부르나",
  },
  {
    id: "nextjs-caching-layers-4",
    post: "nextjs-caching-layers",
    question: "데이터 캐시에 옛 가격이 있는 상태에서 클라이언트가 router.refresh()를 부르면?",
    choices: [
      "데이터 캐시가 비워지고 새 가격이 나온다",
      "현재 라우트를 다시 받지만 서버 캐시가 옛 값이라 옛 가격이 나온다",
      "클라이언트 캐시만 비우고 서버에는 요청하지 않는다",
      "모든 사용자의 화면이 새로 그려진다",
    ],
    answer: 1,
    explanation:
      "router.refresh는 현재 라우트를 서버에서 다시 렌더링해 받을 뿐 캐시를 무효화하지 않는다. 서버가 데이터 캐시의 옛 값으로 렌더링하니 결과도 옛 가격이다. 서버 사본을 지우려면 재검증 함수를 먼저 불러야 한다.",
    anchor: "값을-바꾼-뒤-무엇을-부르나",
  },
  {
    id: "nextjs-caching-layers-5",
    post: "nextjs-caching-layers",
    question: "기본 설정에서 동적 페이지 /memo를 Link로 다시 방문할 때와 브라우저 뒤로 가기로 돌아올 때의 차이는?",
    choices: [
      "둘 다 서버에 다시 묻는다",
      "둘 다 받아 둔 payload를 쓴다",
      "Link 재방문은 받아 둔 것을 쓰고 뒤로 가기는 서버에 묻는다",
      "Link 재방문은 서버에 다시 묻고 뒤로 가기는 받아 둔 것을 쓴다",
    ],
    answer: 3,
    explanation:
      "Next 15부터 staleTimes.dynamic 기본값이 0이라 동적 페이지는 Link로 다시 들어가면 매번 서버에 묻는다. 뒤로·앞으로 가기는 스크롤과 화면을 지키려고 받아 둔 것을 그대로 쓴다. 실험에서도 뒤로 가기에서는 API 호출이 늘지 않았다.",
    anchor: "브라우저-메모리의-사본-클라이언트-캐시",
  },
  {
    id: "nextjs-caching-layers-6",
    post: "nextjs-caching-layers",
    question: "\"use cache\" 함수 안에서 cookies()로 사용자 id를 읽으려 한다. 어떻게 해야 하나?",
    choices: [
      "그대로 읽으면 쿠키 값이 캐시 키에 자동으로 들어간다",
      "unstable_noStore를 먼저 부르면 읽을 수 있다",
      "바깥에서 읽어 인자로 넘긴다. 안에서는 요청 API를 쓸 수 없다",
      "cacheLife를 seconds로 주면 읽을 수 있다",
    ],
    answer: 2,
    explanation:
      "\"use cache\" 범위 안에서는 cookies, headers, searchParams를 읽을 수 없고 next-request-in-use-cache 에러가 난다. 캐시 키는 인자와 클로저 변수로 만들어지므로 요청 값은 바깥에서 읽어 인자로 넘기면 그 값별로 항목이 나뉜다.",
    anchor: "cache-components를-켜면-무엇이-바뀌나",
  },
  {
    id: "nextjs-caching-layers-7",
    post: "nextjs-caching-layers",
    question: "next start를 두 대 띄우고 A에서 revalidateTag를 불렀다. 추가 설정이 없으면 B는?",
    choices: [
      "B도 자동으로 무효화된다",
      "B는 계속 옛 값을 준다. 무효화는 받은 인스턴스에서만 일어난다",
      "B는 다음 배포 때까지 에러를 낸다",
      "B는 요청마다 새로 렌더링한다",
    ],
    answer: 1,
    explanation:
      "기본 캐시는 인스턴스마다 따로 있어서 무효화도 호출을 받은 인스턴스에만 적용된다. 캐시 핸들러의 updateTags로 공유 저장소에 무효화를 쓰고 refreshTags로 요청 전에 읽어야 인스턴스끼리 맞는다.",
    anchor: "실패하거나-서버가-여러-대일-때",
  },
];
