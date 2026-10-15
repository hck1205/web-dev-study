import type { QuizQuestion } from "../types";

export const TOKEN_LOGIN: QuizQuestion[] = [
  {
    id: "token-login-1",
    post: "token-login",
    question: "JWT의 payload에 대한 설명으로 맞는 것은?",
    choices: [
      "서버의 비밀 키로 암호화되어 있어 서버만 읽을 수 있다",
      "BASE64URL로 인코딩만 되어 있어 누구나 디코딩해서 읽을 수 있다",
      "서명(signature) 부분 안에 숨겨져 있다",
      "만료 시간이 지나면 클라이언트에서 자동으로 지워진다",
    ],
    answer: 1,
    explanation:
      "JWT는 암호화가 아니라 서명으로 무결성만 보장한다. header와 payload는 단순 인코딩이라 누구나 읽을 수 있으니 비밀번호나 민감한 개인정보를 넣으면 안 된다.",
    anchor: "jwt-뜯어보기",
  },
  {
    id: "token-login-2",
    post: "token-login",
    question: "공격자가 payload의 role을 user에서 admin으로 바꾸고 서명은 그대로 붙여 보냈다. 서버가 서명을 제대로 검증한다면?",
    choices: [
      "바뀐 role에 따라 관리자 요청으로 처리한다",
      "서명을 다시 계산하면 붙어 온 값과 달라서 거절한다",
      "헤더의 alg가 none으로 바뀌어 서명 검사를 건너뛴다",
      "만료 시간만 확인하고 통과시킨다",
    ],
    answer: 1,
    explanation:
      "서버는 받은 header와 payload로 서명을 다시 계산해 붙어 온 서명과 비교한다. payload가 한 글자만 달라도 서명이 완전히 달라지고, 비밀 키가 없으면 맞는 서명을 만들 수 없다.",
    anchor: "내용을-바꾸면-어떻게-될까",
  },
  {
    id: "token-login-3",
    post: "token-login",
    question: "HS256 대신 RS256 같은 비대칭 서명을 고르는 가장 큰 이유는?",
    choices: [
      "토큰 길이가 더 짧아진다",
      "payload가 암호화되어 내용이 숨겨진다",
      "검증하는 서비스는 공개 키만 가지면 되어, 그 키로는 토큰을 만들 수 없다",
      "만료 시간 검사가 필요 없어진다",
    ],
    answer: 2,
    explanation:
      "HS256은 검증하는 쪽도 같은 비밀 키를 가지므로 토큰을 만들 수도 있다. RS256은 발급 서버만 개인 키로 서명하고 나머지는 공개 키로 검증만 해서, 검증하는 서비스가 많아도 키 유출 위험이 늘지 않는다.",
    anchor: "비밀-키-하나냐-열쇠-한-쌍이냐",
  },
  {
    id: "token-login-4",
    post: "token-login",
    question: "JWT 방식에서 로그아웃(무효화)을 보완하는 일반적인 방법은?",
    choices: [
      "액세스 토큰 수명을 길게 잡는다",
      "액세스 토큰은 짧게, 서버가 관리하는 리프레시 토큰을 로그아웃 때 폐기한다",
      "payload에 logout: true를 넣어 다시 발급한다",
      "요청마다 서버의 비밀 키를 바꾼다",
    ],
    answer: 1,
    explanation:
      "서버가 상태를 갖지 않는 JWT는 발급한 토큰을 바로 거둬들이기 어렵다. 액세스 토큰을 짧게 두고 리프레시 토큰을 폐기하면, 길어야 액세스 토큰 수명만큼만 더 통한다. 즉시 막아야 하면 jti deny list나 토큰 버전을 쓴다.",
    anchor: "한-번-준-토큰은-되돌리기-어렵다",
  },
  {
    id: "token-login-5",
    post: "token-login",
    question: "Refresh Token Rotation에서 이미 한 번 쓴 리프레시 토큰이 다시 들어오면 어떻게 하는 게 좋은가?",
    choices: [
      "평소처럼 새 토큰을 발급한다",
      "탈취를 의심하고 그 사용자의 토큰 계열을 모두 폐기한다",
      "액세스 토큰의 만료만 조금 연장해 준다",
      "아무 응답도 하지 않고 무시한다",
    ],
    answer: 1,
    explanation:
      "로테이션은 리프레시 토큰을 쓸 때마다 새것으로 바꾸고 이전 것을 폐기한다. 폐기된 토큰이 다시 쓰였다면 누군가 복사해 둔 것이니, 정상 사용자도 다시 로그인하게 하더라도 계열 전체를 끊는 편이 안전하다.",
    anchor: "한-번-준-토큰은-되돌리기-어렵다",
  },
  {
    id: "token-login-6",
    post: "token-login",
    question: "JWT를 검증할 때 서버가 해야 할 일로 가장 알맞은 것은?",
    choices: [
      "토큰 헤더의 alg 값에 맞춰 검증 방식을 고른다",
      "허용할 알고리즘을 코드에 고정하고 서명과 exp·iss·aud를 함께 확인한다",
      "디코딩해서 올바른 JSON이면 통과시킨다",
      "서명만 맞으면 클레임은 보지 않는다",
    ],
    answer: 1,
    explanation:
      "헤더의 alg를 믿으면 alg: none이나 알고리즘 혼동 공격에 당할 수 있다. 서명 외에도 만료(exp), 발급자(iss), 대상(aud)을 확인해야 다른 서비스용 토큰이 통하는 일을 막는다.",
    anchor: "jwt에서-자주-나오는-구멍",
  },
];
