import type { QuizQuestion } from "../types";

export const NEXTJS_SELF_HOSTING_DEPLOYMENT: QuizQuestion[] = [
  {
    id: "nextjs-self-hosting-deployment-1",
    post: "nextjs-self-hosting-deployment",
    question: "output: \"standalone\"으로 빌드한 server.js를 그대로 띄웠더니 HTML은 나오는데 CSS와 JS가 404다. 왜 그럴까?",
    choices: [
      "standalone은 정적 파일을 CDN에서 주는 것을 전제로 .next/static과 public을 복사하지 않는다",
      "standalone은 Turbopack 빌드에서만 정적 파일을 만든다",
      "server.js는 개발 모드로 떠서 정적 파일을 메모리에서만 준다",
      "NODE_ENV를 production으로 주지 않으면 정적 파일 경로가 바뀐다",
    ],
    answer: 0,
    explanation:
      "standalone은 실행에 필요한 서버 파일만 추리고 .next/static과 public은 일부러 뺀다. 빌드 뒤에 두 폴더를 standalone 안으로 복사하면 server.js가 그대로 서빙하고, 해시가 붙은 파일에는 immutable 캐시 헤더가 붙는다.",
    anchor: "standalone은-필요한-파일만-추려-낸다",
  },
  {
    id: "nextjs-self-hosting-deployment-2",
    post: "nextjs-self-hosting-deployment",
    question: "같은 Docker 이미지를 스테이징과 운영에 올리고, 실행할 때 -e NEXT_PUBLIC_API_URL로 주소만 바꿨다. 브라우저가 여전히 빌드 때 주소로 요청한다. 이유는?",
    choices: [
      "컨테이너 환경 변수는 USER nextjs로 바꾸면 읽히지 않는다",
      "NEXT_PUBLIC_ 변수는 next build 때 브라우저 번들에 문자열로 박혀서 실행 때 바꿔도 소용없다",
      "standalone server.js는 환경 변수를 전혀 읽지 않는다",
      "NEXT_PUBLIC_ 변수는 ISR 캐시에 저장돼 캐시를 지워야 바뀐다",
    ],
    answer: 1,
    explanation:
      "NEXT_PUBLIC_로 시작하는 값은 빌드 때 클라이언트 JS 안의 문자열로 바뀐다. 이미 만들어진 번들은 실행 환경과 무관하다. 서버 코드는 동적 렌더링 안에서 process.env를 읽으면 실행 시점 값을 보니, 같은 이미지를 쓰려면 브라우저가 쓸 값을 서버에서 내려 주는 구조로 바꾼다.",
    anchor: "멀티-스테이지-dockerfile",
  },
  {
    id: "nextjs-self-hosting-deployment-3",
    post: "nextjs-self-hosting-deployment",
    question: "파드 세 개에서 ISR 페이지가 새로고침마다 옛 가격과 새 가격을 오간다. 가장 근본적인 해결은?",
    choices: [
      "revalidate 값을 1초로 줄인다",
      "로드 밸런서에 세션 고정(sticky session)을 켠다",
      "cacheHandler로 공유 저장소를 쓰고 cacheMaxMemorySize를 0으로 둬서 모든 파드가 같은 캐시를 보게 한다",
      "Edge 런타임으로 바꿔 캐시를 CDN에 둔다",
    ],
    answer: 2,
    explanation:
      "기본 ISR 캐시는 인스턴스마다 디스크와 메모리에 따로 있어서 갱신 요청을 받은 파드만 새 페이지를 준다. 공유 핸들러를 두면 한 파드에서 revalidateTag가 불려도 저장소가 하나라 모두 같은 결과를 본다. 세션 고정은 사용자별로 증상을 숨길 뿐이고, Edge 런타임은 ISR을 지원하지 않는다.",
    anchor: "서버가-여러-대면-기억도-함께-써야-한다",
  },
  {
    id: "nextjs-self-hosting-deployment-4",
    post: "nextjs-self-hosting-deployment",
    question: "공유 캐시 핸들러를 Redis에 붙이면서 항목을 JSON.stringify로 저장했더니 클라이언트 이동 때 segmentData.get is not a function 에러가 난다. 원인은?",
    choices: [
      "Redis는 1MB가 넘는 값을 저장하지 못한다",
      "캐시 키를 경로 이름으로 바꿔 저장했기 때문이다",
      "revalidateTag를 구현하지 않았기 때문이다",
      "캐시 항목에 Buffer와 Map이 들어 있어서 JSON으로 저장하면 되살릴 때 타입이 깨진다",
    ],
    answer: 3,
    explanation:
      "페이지 항목에는 RSC 데이터가 Buffer로, 세그먼트 데이터가 Map으로 들어 있다. JSON은 이 둘을 일반 객체로 바꿔 버리니 Map 메서드를 부르는 순간 에러가 난다. v8.serialize처럼 타입을 보존하는 방식이나 직접 변환 코드로 직렬화해야 한다.",
    anchor: "서버가-여러-대면-기억도-함께-써야-한다",
  },
  {
    id: "nextjs-self-hosting-deployment-5",
    post: "nextjs-self-hosting-deployment",
    question: "롤링 배포 중에 옛 버전 페이지를 열어 둔 사용자가 버튼을 누르면 Failed to find Server Action이 뜬다. deploymentId를 설정하면 무엇이 달라지나?",
    choices: [
      "클라이언트가 보낸 배포 ID가 서버와 다르면 클라이언트 이동 대신 전체 새로고침을 시킨다",
      "옛 서버 액션을 새 서버가 자동으로 번역해 실행한다",
      "배포가 끝날 때까지 새 서버가 요청을 받지 않는다",
      "서버 액션 암호화 키를 배포 ID로 바꿔 모든 빌드가 같은 키를 쓴다",
    ],
    answer: 0,
    explanation:
      "deploymentId를 주면 정적 파일 주소에 ?dpl=가 붙고 클라이언트 이동 요청에 배포 ID 헤더가 실린다. 서버는 자기 ID와 다르면 하드 내비게이션을 시켜 새 버전 자원을 받게 한다. 키를 맞추는 것은 NEXT_SERVER_ACTIONS_ENCRYPTION_KEY의 몫이고, 새로고침이라 컴포넌트 상태는 사라진다.",
    anchor: "서버가-여러-대면-기억도-함께-써야-한다",
  },
  {
    id: "nextjs-self-hosting-deployment-6",
    post: "nextjs-self-hosting-deployment",
    question: "output: \"export\"로 빌드했는데 revalidate = 3600을 적어 둔 상품 페이지가 에러 없이 빌드됐다. 배포 뒤 이 페이지는 어떻게 되나?",
    choices: [
      "브라우저가 한 시간마다 페이지를 다시 만든다",
      "빌드 때 한 번 구운 HTML이 그대로 나가고 다시 만들어지지 않는다",
      "Nginx가 revalidate 값을 읽어 캐시를 지운다",
      "첫 요청에서 빌드 서버로 재생성 요청을 보낸다",
    ],
    answer: 1,
    explanation:
      "정적 내보내기는 서버가 없으니 ISR을 지원하지 않는다. 요청을 읽는 Route Handler처럼 빌드가 멈추는 경우도 있지만 revalidate는 조용히 무시되고 HTML 파일 하나로 끝난다. 내용을 바꾸려면 다시 빌드해서 올려야 한다.",
    anchor: "정적-내보내기는-서버를-버리는-선택",
  },
  {
    id: "nextjs-self-hosting-deployment-7",
    post: "nextjs-self-hosting-deployment",
    question: "운영 로그에 서버 컴포넌트 에러의 digest 숫자만 남고 메시지가 보이지 않는다. instrumentation.ts에서 무엇을 하면 사용자 신고와 서버 로그를 잇기 쉬워지나?",
    choices: [
      "register에서 process.on('uncaughtException')만 등록한다",
      "runtime을 edge로 바꿔 에러 메시지를 브라우저로 보낸다",
      "onRequestError에서 에러 메시지와 함께 digest, 경로, 라우트 정보를 수집기로 보낸다",
      "NEXT_OTEL_FETCH_DISABLED=1을 줘서 fetch 스팬을 끈다",
    ],
    answer: 2,
    explanation:
      "프로덕션에서 서버 컴포넌트 에러는 브라우저에 digest만 전달된다. onRequestError는 서버가 잡은 에러마다 불리고 err.digest와 요청 경로, routePath, routeType을 함께 받으니, 이걸 남겨 두면 사용자가 본 digest로 서버 쪽 원인을 찾을 수 있다.",
    anchor: "instrumentationts로-서버-안을-들여다본다",
  },
];
