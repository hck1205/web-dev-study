import type { QuizQuestion } from "../types";

export const BASE64: QuizQuestion[] = [
  {
    id: "base64-1",
    post: "base64",
    question: "Base64가 3바이트를 정확히 4글자로 바꾸는 이유는?",
    choices: [
      "글자 하나가 6비트를 맡고, 24비트가 8비트 3개와 6비트 4개로 딱 나뉘어서",
      "4글자 단위로 체크섬을 붙이기 위해서",
      "UTF-8 글자가 최대 4바이트라서",
      "압축 효율이 4글자 단위에서 가장 좋아서",
    ],
    answer: 0,
    explanation:
      "글자 64개는 2의 6제곱이라 글자 하나가 6비트를 표현한다. 8과 6의 최소공배수가 24라서 3바이트를 모으면 6비트 조각 4개로 남김없이 나뉜다. 체크섬이나 압축과는 관계가 없다.",
    anchor: "3바이트가-4글자가-되는-과정",
  },
  {
    id: "base64-2",
    post: "base64",
    question: "문자열 \"M\" 한 글자(1바이트)를 Base64로 인코딩한 결과는?",
    choices: ["TQ=", "TWE=", "TQ==", "TWFu"],
    answer: 2,
    explanation:
      "8비트에 0을 4개 붙여 12비트를 만들면 글자 2개(T, Q)가 나오고, 데이터가 없는 두 자리는 =로 채운다. 남은 바이트가 2개일 때만 =가 하나 붙고, TWE=는 \"Ma\"의 결과다.",
    anchor: "모자란-바이트는-등호로-채운다",
  },
  {
    id: "base64-3",
    post: "base64",
    question: "JWT가 표준 Base64 대신 base64url을 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "base64url이 결과를 더 작게 압축해서",
      "표준 글자의 +, /, =가 URL에서 공백·경로 구분자·키값 구분자로 읽혀서",
      "base64url은 서명 없이도 내용을 바꿀 수 없게 해서",
      "base64url만 한글을 인코딩할 수 있어서",
    ],
    answer: 1,
    explanation:
      "폼 쿼리 문자열에서 +는 공백으로 읽히고, /는 경로를, =는 키와 값을 나눈다. base64url은 이 글자를 -와 _로 바꾸고 패딩을 빼서 URL에 그대로 넣을 수 있게 한다. 크기나 위변조 방지와는 상관없다.",
    anchor: "url에-넣으면-더하기와-슬래시가-말썽이다",
  },
  {
    id: "base64-4",
    post: "base64",
    question: "HTTP Basic 인증을 평문 HTTP로 쓰면 안 되는 이유는?",
    choices: [
      "Base64 디코딩에 서버 비밀 키가 필요해 서버 부하가 커서",
      "브라우저가 Basic 인증 헤더를 매번 다시 묻기 때문에",
      "Base64는 키 없이 누구나 되돌릴 수 있어서 비밀번호가 그대로 보이기 때문에",
      "Authorization 헤더는 HTTP/1.1에서 지원하지 않아서",
    ],
    answer: 2,
    explanation:
      "Basic bWF0dDpzZWNyZXQ=는 base64 -d 한 번이면 matt:secret으로 풀린다. Base64는 헤더에 안전하게 싣기 위한 포장일 뿐 암호화가 아니므로, 길에서 숨기는 일은 TLS가 맡아야 한다.",
    anchor: "인코딩은-자물쇠가-아니다",
  },
  {
    id: "base64-5",
    post: "base64",
    question: "브라우저에서 btoa(\"한\")을 실행하면 어떻게 되나?",
    choices: [
      "\"7ZWc\"를 돌려준다",
      "InvalidCharacterError 예외가 난다",
      "UTF-16 바이트로 바꿔 인코딩한다",
      "빈 문자열을 돌려준다",
    ],
    answer: 1,
    explanation:
      "btoa는 문자열의 글자 하나를 한 바이트로 보는데, 한은 코드 포인트가 255를 넘어서 예외를 던진다. 7ZWc를 얻으려면 TextEncoder로 UTF-8 바이트를 먼저 만들고 그 바이트를 인코딩해야 한다.",
    anchor: "브라우저의-btoa는-한글을-받지-못한다",
  },
  {
    id: "base64-6",
    post: "base64",
    question: "echo 'Man' | base64 의 결과가 TWFu가 아니라 TWFuCg==로 나온 이유는?",
    choices: [
      "coreutils가 MIME 규칙에 따라 줄 끝 표시를 붙여서",
      "echo가 붙인 줄바꿈 한 바이트까지 인코딩돼서",
      "터미널이 UTF-16으로 입력을 넘겨서",
      "base64 명령이 항상 4바이트 이상을 출력해서",
    ],
    answer: 1,
    explanation:
      "echo는 끝에 줄바꿈(0x0A)을 붙이고, 그 한 바이트가 Cg==가 됐다. echo -n으로 줄바꿈을 빼야 TWFu가 나온다. 쿠버네티스 Secret 같은 곳에 넣은 비밀번호가 안 맞을 때 먼저 의심할 부분이다.",
    anchor: "터미널에서-base64-다루기",
  },
  {
    id: "base64-7",
    post: "base64",
    question: "큰 이미지를 CSS 안에 data URL로 넣을 때의 단점이 아닌 것은?",
    choices: [
      "Base64 때문에 약 33% 커진다",
      "이미지가 CSS와 따로 캐시되지 않는다",
      "렌더링을 막는 CSS가 커져 첫 화면이 늦어진다",
      "이미지를 받으려고 요청이 하나 더 생긴다",
    ],
    answer: 3,
    explanation:
      "요청이 하나 줄어드는 것이 data URL의 유일한 이득이다. 대신 33% 커지고, 담긴 파일과 함께만 캐시되며, CSS에 넣으면 그 바이트를 다 받을 때까지 화면이 그려지지 않는다.",
    anchor: "data-url은-요청-하나를-아끼는-대신",
  },
];
