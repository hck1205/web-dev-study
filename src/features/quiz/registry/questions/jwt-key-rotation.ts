import type { QuizQuestion } from "../types";

export const JWT_KEY_ROTATION: QuizQuestion[] = [
  {
    id: "jwt-key-rotation-1",
    post: "jwt-key-rotation",
    question:
      "새 키를 JWKS에 올리는 동시에 새 키로 서명을 시작했다. 인증 서버 로그는 정상인데 검증 서비스들이 401을 낸다. 가장 그럴듯한 원인은?",
    choices: [
      "새 키의 곡선 종류가 옛 키와 달라서",
      "검증자가 캐시해 둔 옛 JWKS에 새 kid가 없어서",
      "토큰의 exp가 너무 짧아서",
      "JWKS 응답의 content-type이 잘못돼서",
    ],
    answer: 1,
    explanation:
      "검증자는 JWKS를 받아 캐시해 두고 그 사본으로 검증한다. 새 kid를 단 토큰이 캐시 갱신보다 먼저 도착하면 ERR_JWKS_NO_MATCHING_KEY가 나고, 인증 서버 쪽에는 아무 오류도 남지 않는다.",
    anchor: "새-키로-바로-서명하면-생기는-일",
  },
  {
    id: "jwt-key-rotation-2",
    post: "jwt-key-rotation",
    question:
      "jose의 createRemoteJWKSet 검증자가 모르는 kid를 만났는데 JWKS를 다시 받지 않고 실패했다. 왜 그럴까?",
    choices: [
      "마지막으로 JWKS를 받은 지 cooldownDuration(기본 30초)이 지나지 않아서",
      "jose는 모르는 kid를 만나면 절대 다시 받지 않아서",
      "응답의 Cache-Control max-age가 아직 남아 있어서",
      "timeoutDuration이 0으로 설정돼서",
    ],
    answer: 0,
    explanation:
      "jose는 모르는 kid를 만나면 다시 받지만, 가짜 kid로 JWKS 주소를 두드리는 걸 막으려고 마지막 요청 후 30초 동안은 참는다. 실습에서도 31초 뒤 다시 받아 회복했다. jose는 Cache-Control을 읽지 않는다.",
    anchor: "검증자는-jwks를-얼마나-들고-있나",
  },
  {
    id: "jwt-key-rotation-3",
    post: "jwt-key-rotation",
    question:
      "검증자 캐시 최대 10분, JWKS 앞 CDN max-age 10분이다. 새 키를 게시한 뒤 언제부터 새 키로 서명해야 안전한가?",
    choices: [
      "게시 직후",
      "5분 뒤",
      "최소 20분 뒤",
      "토큰 수명이 지난 뒤",
    ],
    answer: 2,
    explanation:
      "가장 오래 묵을 수 있는 사본은 CDN이 10분 묵힌 목록을 검증자가 받아 다시 10분 들고 있는 경우다. 두 캐시를 더한 시간이 지나야 모든 검증자가 새 키를 안다. 토큰 수명은 옛 키를 빼는 시점을 정할 때 쓴다.",
    anchor: "겹치는-기간을-두고-바꾼다",
  },
  {
    id: "jwt-key-rotation-4",
    post: "jwt-key-rotation",
    question:
      "서명 키가 유출돼 옛 키를 JWKS에서 즉시 뺐다. 그런데도 일부 서비스가 옛 키로 서명한 토큰을 통과시킨다. 무엇을 해야 하나?",
    choices: [
      "옛 키 토큰이 자연히 만료될 때까지 기다린다",
      "새 키를 하나 더 게시한다",
      "토큰의 alg를 바꿔 다시 발급한다",
      "CDN 캐시를 무효화하고 검증자 캐시를 reload나 재시작으로 비운다",
    ],
    answer: 3,
    explanation:
      "목록에서 뺀 키도 이미 받아 둔 검증자의 캐시에는 남아 있어서 캐시가 갱신될 때까지 통한다. 유출 상황에서는 그 시간이 공격자의 시간이니 CDN부터 검증자까지 사본을 직접 비운다.",
    anchor: "키가-샜을-때는-기다릴-수-없다",
  },
  {
    id: "jwt-key-rotation-5",
    post: "jwt-key-rotation",
    question: "노트북을 잃어버린 직원 한 명의 액세스 토큰만 막고 싶다. 알맞은 방법은?",
    choices: [
      "서명 키를 교체한다",
      "리프레시 토큰을 폐기하고, 즉시 막아야 하면 jti나 사용자 ID를 거부 목록에 넣는다",
      "JWKS 캐시 수명을 1초로 줄인다",
      "토큰 헤더의 kid를 바꾼다",
    ],
    answer: 1,
    explanation:
      "키 교체는 앞으로 발급할 토큰의 서명을 바꾸는 일이라 이미 나간 토큰을 골라 막지 못한다. 옛 키를 즉시 빼면 모든 사용자의 토큰이 함께 죽는다. 토큰 하나는 짧은 수명, 리프레시 토큰 폐기, 거부 목록으로 다룬다.",
    anchor: "키를-바꾼다고-토큰이-회수되지는-않는다",
  },
  {
    id: "jwt-key-rotation-6",
    post: "jwt-key-rotation",
    question:
      "HS256 검증자의 비밀을 새 값으로 통째로 바꿔 끼웠다. 옛 비밀로 서명한 토큰은 어떤 오류로 실패하고, 그게 왜 곤란한가?",
    choices: [
      "ERR_JWKS_NO_MATCHING_KEY라서 캐시 문제와 헷갈린다",
      "ERR_JWT_EXPIRED라서 시계 문제로 오해한다",
      "서명 검증 실패로 나와서 위조 토큰과 구별되지 않는다",
      "오류 없이 통과해서 보안 구멍이 된다",
    ],
    answer: 2,
    explanation:
      "실습에서 ERR_JWS_SIGNATURE_VERIFICATION_FAILED가 났다. 교체 때문인지 위조인지 오류만으로 가를 수 없으니, HS256도 kid를 붙이고 검증자가 kid로 여러 비밀을 고르게 해 겹치는 교체를 해야 한다.",
    anchor: "공유-비밀이면-교체가-왜-더-어려운가",
  },
  {
    id: "jwt-key-rotation-7",
    post: "jwt-key-rotation",
    question: "키 교체 직후 401이 늘었다. JWKS를 확인할 때 주의할 점은?",
    choices: [
      "검증자와 같은 경로(CDN, 프록시)로 받아 본다",
      "인증 서버에 직접 접속해 받아 본다",
      "브라우저에서 열어 본다",
      "kid 없이 받아 본다",
    ],
    answer: 0,
    explanation:
      "인증 서버에서 직접 받으면 새 목록이 보여도, 검증자는 CDN이 묵혀 둔 옛 목록을 받고 있을 수 있다. 같은 경로로 받고 Age 헤더로 캐시가 얼마나 묵었는지 본다.",
    anchor: "401이-몰려올-때-보는-곳",
  },
];
