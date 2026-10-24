import type { QuizQuestion } from "../types";

export const FRONTEND_HOSTING_PLATFORMS: QuizQuestion[] = [
  {
    id: "frontend-hosting-platforms-1",
    post: "frontend-hosting-platforms",
    question: "Vite SPA를 GitHub Pages에 올렸더니 /settings에서 새로고침할 때만 404가 난다. 원인으로 가장 알맞은 것은?",
    choices: [
      "GitHub Pages가 JS 파일을 막아서",
      "/settings는 브라우저 라우터가 바꾼 주소라 서버에 그 파일이 없어서",
      "HTTPS 인증서가 아직 발급되지 않아서",
      "빌드할 때 /settings 페이지가 서버 렌더링되어서",
    ],
    answer: 1,
    explanation:
      "링크로 이동할 때는 History API가 주소만 바꾸고 서버에 묻지 않는다. 새로고침하면 브라우저가 서버에 /settings를 요청하는데 정적 호스팅에는 그 파일이 없다. 파일이 없으면 index.html을 200으로 내주는 폴백 규칙이 필요하다.",
    anchor: "새로고침하면-404가-나는-이유",
  },
  {
    id: "frontend-hosting-platforms-2",
    post: "frontend-hosting-platforms",
    question: "SPA 폴백을 '없는 경로는 전부 index.html'로 걸었다. 지워진 /assets/old.js를 요청하면 어떻게 되나?",
    choices: [
      "404가 나서 브라우저가 자동으로 새 파일을 찾는다",
      "CDN이 원본에서 새 JS를 받아 대신 내준다",
      "요청이 무한히 리다이렉트된다",
      "index.html이 200으로 와서 브라우저가 HTML을 JS로 실행하려다 실패한다",
    ],
    answer: 3,
    explanation:
      "폴백이 모든 경로에 걸리면 없는 JS에도 HTML이 성공 응답으로 간다. 브라우저는 MIME 타입 오류를 내고, CDN은 이 HTML을 JS 주소에 캐시할 수도 있다. 그래서 정적 파일 폴더는 폴백에서 빼고 404가 나게 한다.",
    anchor: "새로고침하면-404가-나는-이유",
  },
  {
    id: "frontend-hosting-platforms-3",
    post: "frontend-hosting-platforms",
    question: "해시가 붙은 JS에는 max-age=31536000, immutable을 주면서 index.html에는 no-cache를 주는 이유는?",
    choices: [
      "HTML은 파일 크기가 커서 캐시하면 메모리를 많이 쓴다",
      "immutable은 HTML에 쓸 수 없는 지시어라서",
      "HTML이 해시 파일 이름을 담고 있어서 길게 캐시하면 새 배포가 사용자에게 닿지 않는다",
      "CDN은 HTML을 캐시하지 못한다",
    ],
    answer: 2,
    explanation:
      "해시 파일은 내용이 바뀌면 이름이 바뀌니 같은 이름은 영원히 같은 내용이다. HTML은 어떤 이름의 JS를 받을지 알려 주는 목록이라, 오래 캐시하면 옛 목록이 옛 JS를 계속 가리킨다. 그래서 HTML은 매번 서버에 확인하게 한다.",
    anchor: "해시-파일은-오래-html은-짧게",
  },
  {
    id: "frontend-hosting-platforms-4",
    post: "frontend-hosting-platforms",
    question: "배포 직후 탭을 오래 열어 둔 사용자만 화면 이동 시 ChunkLoadError를 겪는다. 가장 근본적인 대응 묶음은?",
    choices: [
      "옛 해시 파일을 한동안 남기고, 청크 로드 실패를 잡아 한 번만 새로고침한다",
      "모든 JS에 no-store를 붙여 캐시를 끈다",
      "코드 스플리팅을 없애고 JS를 한 파일로 합친다",
      "CDN 캐시를 배포마다 전부 무효화한다",
    ],
    answer: 0,
    explanation:
      "열린 탭은 옛 HTML이 가리키는 옛 청크 이름을 들고 있는데 새 배포가 그 파일을 지워서 생긴다. 옛 파일을 남기면 요청이 성공하고, 실패를 잡아 새로고침하면 새 이름을 받는다. 캐시를 끄거나 무효화해도 지워진 파일은 돌아오지 않는다.",
    anchor: "배포-직후-하얀-화면",
  },
  {
    id: "frontend-hosting-platforms-5",
    post: "frontend-hosting-platforms",
    question: "SSR 함수를 엣지 런타임으로 옮겼더니 오히려 응답이 느려졌다. DB는 서울 리전 한 곳에 있다. 이유로 가장 알맞은 것은?",
    choices: [
      "엣지 함수는 콜드 스타트가 리전 함수보다 길어서",
      "엣지는 사용자 가까이 있어도 DB와 멀어서 쿼리마다 긴 왕복이 붙어서",
      "엣지에서는 HTML을 스트리밍할 수 없어서",
      "엣지 함수는 HTTPS를 쓰지 못해서",
    ],
    answer: 1,
    explanation:
      "엣지 함수는 시작이 빠르지만 사용자 근처에서 돈다. 요청 하나에 쿼리가 여러 번이면 엣지와 DB 리전 사이 왕복이 그만큼 쌓인다. DB를 읽는 일은 DB와 같은 리전의 함수에 두고, 엣지는 DB가 필요 없는 가벼운 판단에 쓴다.",
    anchor: "함수가-늦게-깨어나는-순간",
  },
  {
    id: "frontend-hosting-platforms-6",
    post: "frontend-hosting-platforms",
    question: "배포 플랫폼에서 NEXT_PUBLIC_API_URL 값을 바꿨는데 화면에는 여전히 옛 주소로 요청한다. 이유는?",
    choices: [
      "브라우저가 환경 변수를 localStorage에 캐시해서",
      "NEXT_PUBLIC_ 변수는 서버에서만 읽혀서",
      "CDN이 환경 변수를 엣지에 따로 저장해서",
      "NEXT_PUBLIC_ 값은 빌드할 때 JS 번들에 문자열로 박혀서 다시 빌드해야 바뀐다",
    ],
    answer: 3,
    explanation:
      "NEXT_PUBLIC_, VITE_ 같은 접두사 변수는 빌드 시점에 값이 코드에 들어간다. 그래서 값을 바꾸면 다시 빌드해야 하고, 같은 값이 누구나 내려받는 파일에 실리니 비밀을 넣으면 안 된다. 런타임에 바꿔야 하면 서버에서 설정을 내려 준다.",
    anchor: "환경-변수가-번들에-박히는-순간",
  },
  {
    id: "frontend-hosting-platforms-7",
    post: "frontend-hosting-platforms",
    question: "서울 리전 ACM에서 발급한 인증서가 CloudFront 배포의 인증서 목록에 보이지 않는다. 이유는?",
    choices: [
      "CloudFront는 Let's Encrypt 인증서만 쓸 수 있어서",
      "인증서에 CAA 레코드가 없어서",
      "CloudFront는 us-east-1 리전의 ACM 인증서만 쓸 수 있어서",
      "apex 도메인 인증서는 CloudFront에서 쓸 수 없어서",
    ],
    answer: 2,
    explanation:
      "CloudFront는 전 세계 엣지에 배포되는 서비스라 인증서를 us-east-1 리전의 ACM에서만 가져온다. 다른 리전에서 발급한 인증서는 목록에 뜨지 않는다. CAA는 발급 단계에서 CA를 제한하는 DNS 레코드로, 이미 발급된 인증서의 목록 표시와는 상관없다.",
    anchor: "도메인과-https",
  },
];
