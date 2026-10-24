import type { QuizQuestion } from "../types";

export const NEXTJS_SERVER_ACTIONS_SECURITY: QuizQuestion[] = [
  {
    id: "nextjs-server-actions-security-1",
    post: "nextjs-server-actions-security",
    question: "삭제 버튼을 관리자 화면에서만 보여 준다. deletePost 서버 액션 안에 권한 검사가 없어도 될까?",
    choices: [
      "된다. 버튼이 없으면 액션 ID를 알 수 없다",
      "된다. 관리자 레이아웃이 비로그인 사용자를 막아 준다",
      "안 된다. 액션은 공개 POST 엔드포인트라 화면을 거치지 않고 직접 부를 수 있다",
      "안 된다. 다만 Origin 검사가 권한까지 대신 확인해 준다",
    ],
    answer: 2,
    explanation:
      "\"use server\" 함수는 빌드 때 공개 POST 엔드포인트가 되고 액션 ID는 클라이언트 번들에 들어 있어 누구나 읽을 수 있다. 레이아웃은 액션 호출 경로에 없다. Origin 검사는 교차 사이트 요청만 막을 뿐 권한을 보지 않는다.",
    anchor: "next가-막아-주지-않는-것",
  },
  {
    id: "nextjs-server-actions-security-2",
    post: "nextjs-server-actions-security",
    question: "curl로 Origin 헤더 없이 서버 액션을 호출하면 어떻게 되나?",
    choices: [
      "통과한다. 직접 만든 요청엔 피해자 쿠키가 없어 CSRF가 아니라고 보기 때문이다",
      "403으로 막힌다",
      "Origin이 없으면 Host 헤더로 대신 비교해 막는다",
      "본문 크기 검사에서 막힌다",
    ],
    answer: 0,
    explanation:
      "Next는 Origin이 없는 요청을 경고만 남기고 통과시킨다. 브라우저는 교차 사이트 POST에 Origin을 붙이므로 CSRF는 막히지만, 공격자가 자기 쿠키로 직접 보내는 요청은 막지 못한다. 그래서 액션 안의 인증과 인가가 필요하다.",
    anchor: "next가-대신-막아-주는-것",
  },
  {
    id: "nextjs-server-actions-security-3",
    post: "nextjs-server-actions-security",
    question: "로컬에서는 되던 서버 액션이 리버스 프록시 뒤에 배포하자 모두 500을 낸다. 로그에 'does not match origin header'가 있다. 원인은?",
    choices: [
      "액션 ID가 배포마다 바뀌어서",
      "본문이 1MB를 넘어서",
      "클로저 암호화 키가 달라서",
      "프록시가 Host를 내부 주소로 바꾸고 X-Forwarded-Host를 넘기지 않아 Origin과 달라져서",
    ],
    answer: 3,
    explanation:
      "Next는 Origin의 호스트를 X-Forwarded-Host, 없으면 Host와 비교한다. 프록시가 Host를 바꾸면 정상 요청도 다른 출처로 보인다. 프록시 설정을 고치거나 serverActions.allowedOrigins에 도메인을 적는다. 액션 ID 문제라면 Failed to find Server Action이 난다.",
    anchor: "next가-대신-막아-주는-것",
  },
  {
    id: "nextjs-server-actions-security-4",
    post: "nextjs-server-actions-security",
    question: "allowedOrigins에 \"*.com\"을 적으면 Next 16.4.1에서 어떻게 동작하나?",
    choices: [
      "패턴이 너무 넓어 Next가 거절하므로 아무것도 허용되지 않는다",
      "두 칸짜리 패턴이라 막지 않아 evil.com 같은 모든 .com 도메인이 허용된다",
      "com 최상위 도메인 자체만 허용된다",
      "빌드 에러가 난다",
    ],
    answer: 1,
    explanation:
      "와일드카드 검사는 패턴이 \"*\"나 \"**\" 한 칸뿐일 때만 거절하고, \"*\"는 한 칸을 맞춘다. 그래서 \"*.com\"은 evil.com과 맞는다. 허용 목록에는 구체적인 도메인을 적는다.",
    anchor: "next가-대신-막아-주는-것",
  },
  {
    id: "nextjs-server-actions-security-5",
    post: "nextjs-server-actions-security",
    question: "Docker 이미지 하나를 스테이징과 운영에 쓰는데 운영 컨테이너에 준 NEXT_PUBLIC_API_URL이 반영되지 않는다. 이유는?",
    choices: [
      "NEXT_PUBLIC_ 값은 빌드할 때 번들에 문자열로 박혀서 실행 시점 값을 읽지 않는다",
      "컨테이너 환경 변수는 Next가 읽지 못한다",
      ".env.production이 컨테이너 변수보다 우선해서",
      "서버 컴포넌트에서만 읽을 수 있어서",
    ],
    answer: 0,
    explanation:
      "Next는 빌드할 때 process.env.NEXT_PUBLIC_X를 값으로 바꿔 클라이언트 번들에 넣는다. 그래서 이미지를 만든 환경의 값으로 굳는다. 런타임에 바뀌어야 하는 공개 설정은 서버에서 읽어 내려 준다. 접두사 없는 변수는 서버가 실행 시점에 읽는다.",
    anchor: "비밀이-브라우저로-새는-길",
  },
  {
    id: "nextjs-server-actions-security-6",
    post: "nextjs-server-actions-security",
    question: "인라인 서버 액션이 붙잡은 쿠폰 코드는 HTML에 어떻게 실리나?",
    choices: [
      "평문으로 숨은 입력에 실린다",
      "아예 실리지 않고 서버 세션에 저장된다",
      "빌드마다 바뀌는 키로 암호화된 값이 숨은 입력에 실린다",
      "쿠키로 따로 보내진다",
    ],
    answer: 2,
    explanation:
      "붙잡힌 값은 호출 때 서버로 돌아와야 해서 브라우저에 실리지만 Next가 암호화한다. 실험 HTML에 평문은 없고 암호문만 있었다. 그래도 암호화에만 기대지 말고 비밀은 붙잡지 않으며, 여러 인스턴스는 같은 NEXT_SERVER_ACTIONS_ENCRYPTION_KEY를 쓴다.",
    anchor: "next가-대신-막아-주는-것",
  },
  {
    id: "nextjs-server-actions-security-7",
    post: "nextjs-server-actions-security",
    question: "서버 액션을 try/catch로 감싸고 그 안에서 redirect()를 불렀더니 이동하지 않는다. 왜일까?",
    choices: [
      "서버 액션에서는 redirect를 쓸 수 없어서",
      "redirect는 예외를 던져 흐름을 끊는데 catch가 그 예외를 삼켜서",
      "redirect 전에 revalidatePath를 불러야 해서",
      "redirect는 Route Handler에서만 동작해서",
    ],
    answer: 1,
    explanation:
      "redirect는 내부적으로 예외를 던져 이동을 알린다. try 안에서 부르면 catch가 그걸 잡아 이동이 사라진다. redirect는 try 밖에서 부르고, 재검증은 그보다 먼저 부른다.",
    anchor: "바꾼-뒤의-마무리",
  },
];
