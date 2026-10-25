import type { QuizQuestion } from "../types";

export const SPA_AUTH_TOKEN_STORAGE: QuizQuestion[] = [
  {
    id: "spa-auth-token-storage-1",
    post: "spa-auth-token-storage",
    question: "리프레시 토큰을 HttpOnly 쿠키에 두었다. 페이지에 XSS가 생겼을 때 막히는 것은?",
    choices: [
      "공격자 스크립트가 그 페이지에서 credentials를 포함해 API를 부르는 것",
      "공격자가 토큰 값을 읽어 자기 서버로 가져가 오래 쓰는 것",
      "공격자 스크립트가 메모리의 API 클라이언트 함수를 부르는 것",
      "XSS 자체가 실행되는 것",
    ],
    answer: 1,
    explanation:
      "HttpOnly는 document.cookie로 토큰을 읽지 못하게 해서 훔쳐 가는 것을 막는다. 페이지 안의 스크립트가 요청을 보내면 브라우저는 쿠키를 붙여 주므로 그 브라우저 안의 공격은 남는다. XSS 자체는 출력 인코딩과 CSP로 막는다.",
    anchor: "xss가-나면-어디에-두든-진다",
  },
  {
    id: "spa-auth-token-storage-2",
    post: "spa-auth-token-storage",
    question: "리프레시 토큰 회전과 재사용 감지를 쓰는 서버가, 이미 쓰고 버린 리프레시 토큰을 다시 받으면 그 가족 전체를 끊는 이유는?",
    choices: [
      "토큰 저장소 용량을 아끼려고",
      "버린 토큰은 서명이 바뀌어 검증할 수 없어서",
      "진짜 사용자와 탈취한 쪽 중 누가 먼저 썼는지 모르니, 이어진 토큰을 모두 무효로 만들어 탈취를 끊으려고",
      "액세스 토큰의 수명을 늘리려고",
    ],
    answer: 2,
    explanation:
      "같은 리프레시 토큰이 두 번 오면 두 사람이 그 토큰을 가졌다는 뜻이다. 가족 전체를 끊으면 공격자가 먼저 받아 간 새 토큰도 무효가 된다. 정상 클라이언트가 동시에 두 번 보내도 똑같이 보이므로 클라이언트에서 리프레시를 하나로 묶어야 한다.",
    anchor: "리프레시-토큰은-한-번-쓰면-버린다",
  },
  {
    id: "spa-auth-token-storage-3",
    post: "spa-auth-token-storage",
    question: "응답 인터셉터가 401마다 리프레시를 보내는 앱에서 요청 다섯 개가 동시에 만료됐다. 회전을 쓰는 서버에서 무슨 일이 생기나?",
    choices: [
      "리프레시가 다섯 번 나가고, 첫 번째 뒤의 요청이 재사용으로 걸려 가족이 끊기고 사용자가 로그아웃된다",
      "서버가 다섯 요청을 알아서 하나로 묶어 처리한다",
      "다섯 번 모두 성공하고 마지막 토큰만 남는다",
      "브라우저가 같은 주소의 동시 요청을 하나로 합쳐 보낸다",
    ],
    answer: 0,
    explanation:
      "다섯 요청이 같은 리프레시 토큰을 들고 가서 첫 번째만 성공하고 나머지는 이미 쓴 토큰이 된다. 실험에서도 리프레시 5번, 성공 0개로 끝났다. 진행 중인 리프레시 Promise를 하나 두고 나머지가 기다리게 하면 리프레시 1번에 5개 모두 성공한다.",
    anchor: "동시에-터지는-401을-하나로-묶는다",
  },
  {
    id: "spa-auth-token-storage-4",
    post: "spa-auth-token-storage",
    question: "리프레시 요청을 인터셉터가 걸린 같은 axios 인스턴스로 보내면 생길 수 있는 문제는?",
    choices: [
      "요청 헤더에 리프레시 토큰이 두 번 붙는다",
      "쿠키가 붙지 않는다",
      "응답이 캐시되어 옛 토큰을 받는다",
      "리프레시가 401을 받으면 인터셉터가 또 리프레시를 불러 반복된다",
    ],
    answer: 3,
    explanation:
      "리프레시 토큰이 만료되거나 무효일 때 리프레시 요청이 401을 받으면, 같은 인터셉터가 그걸 다시 리프레시하려 든다. 리프레시는 인터셉터 없는 별도 인스턴스로 보내고, 다시 보낸 요청에는 _retry 표시를 둬 한 번만 재시도한다.",
    anchor: "동시에-터지는-401을-하나로-묶는다",
  },
  {
    id: "spa-auth-token-storage-5",
    post: "spa-auth-token-storage",
    question: "탭 두 개가 동시에 리프레시를 보내 하나가 재사용으로 걸렸다. navigator.locks로 리프레시를 감싸면 둘 다 성공하는 이유는?",
    choices: [
      "잠금이 두 요청을 하나로 합쳐 서버에 한 번만 보낸다",
      "뒤 탭이 기다리는 동안 앞 탭의 응답이 리프레시 토큰 쿠키를 새것으로 바꿔 두어, 뒤 탭은 새 토큰으로 요청한다",
      "잠금을 잡은 탭만 쿠키를 보낼 수 있다",
      "Web Locks가 서버의 재사용 감지를 꺼 준다",
    ],
    answer: 1,
    explanation:
      "Web Locks는 같은 출처의 탭 사이에서 같은 이름의 잠금을 하나만 잡게 해 리프레시를 줄 세운다. 리프레시 토큰이 탭끼리 공유되는 쿠키라, 뒤 탭은 이미 바뀐 rt-2로 요청해 rt-3을 받았다. 요청은 두 번 나간다.",
    anchor: "탭이-여러-개면-리프레시도-다툰다",
  },
  {
    id: "spa-auth-token-storage-6",
    post: "spa-auth-token-storage",
    question: "BFF 패턴에서 브라우저가 들고 있는 것은?",
    choices: [
      "BFF 서버의 세션 쿠키만. OAuth 토큰은 BFF가 보관한다",
      "짧은 액세스 토큰과 BFF 세션 쿠키",
      "PKCE의 code_verifier와 리프레시 토큰",
      "리프레시 토큰만. 액세스 토큰은 BFF가 만든다",
    ],
    answer: 0,
    explanation:
      "BFF는 기밀 클라이언트로 토큰을 받아 세션 저장소에 두고, 브라우저에는 세션 쿠키만 준다. 그래서 XSS로 훔칠 토큰이 없다. 대신 서버와 세션 저장소를 운영해야 하고 쿠키 기반이라 CSRF 대비가 필요하다.",
    anchor: "브라우저에-토큰을-아예-두지-않는-방법",
  },
  {
    id: "spa-auth-token-storage-7",
    post: "spa-auth-token-storage",
    question: "프런트는 myapp.vercel.app, API는 api.mycompany.com이다. 크롬에서는 되는데 아이폰 사파리에서는 새로고침하면 로그인이 풀린다. 가장 근본적인 해결은?",
    choices: [
      "리프레시 토큰을 localStorage로 옮긴다",
      "액세스 토큰 수명을 일주일로 늘린다",
      "API를 프런트와 같은 사이트로 두거나 같은 출처 프록시·BFF를 둬서 쿠키가 서드파티가 되지 않게 한다",
      "쿠키에 SameSite=Lax를 준다",
    ],
    answer: 2,
    explanation:
      "두 도메인은 다른 사이트라 API의 리프레시 쿠키는 서드파티 쿠키가 되고, 사파리는 이를 기본으로 막는다. 같은 사이트나 같은 출처로 배치하면 제한과 상관없어진다. localStorage로 옮기거나 수명을 늘리면 보안이 나빠지고, Lax는 다른 사이트 요청에 쿠키를 붙이지 않아 오히려 더 안 된다.",
    anchor: "서드파티-쿠키-제한이-로그인을-깨는-자리",
  },
];
