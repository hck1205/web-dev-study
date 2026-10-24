import type { QuizQuestion } from "../types";

export const MULTI_TENANCY_ISOLATION: QuizQuestion[] = [
  {
    id: "multi-tenancy-isolation-1",
    post: "multi-tenancy-isolation",
    question: "한 테넌트가 내보내기 작업 50개를 걸어 다른 테넌트의 조회까지 느려졌다. 요청 수 제한만으로 이걸 막기 어려운 이유는?",
    choices: [
      "요청 수 제한은 IP 단위로만 걸 수 있기 때문이다",
      "오래 도는 작업은 요청 수가 적어도 자원을 오래 붙잡아서 동시 실행 수 한도가 따로 필요하기 때문이다",
      "요청 수 제한을 걸면 다른 테넌트의 요청도 함께 막히기 때문이다",
      "내보내기 작업은 HTTP가 아니라서 게이트웨이를 거치지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "1분에 5개만 허용해도 30분짜리 작업이면 금방 수십 개가 동시에 돈다. 무거운 작업은 테넌트별 동시 실행 수를 함께 묶어야 공유 커넥션과 워커가 남는다.",
    anchor: "시끄러운-이웃을-묶어-두는-한도",
  },
  {
    id: "multi-tenancy-isolation-2",
    post: "multi-tenancy-isolation",
    question: "RLS 정책을 켰는데 앱에서 모든 테넌트의 주문이 다 보인다. 가장 먼저 의심할 것은?",
    choices: [
      "인덱스가 tenant_id로 시작하지 않는다",
      "정책에 WITH CHECK를 빼먹었다",
      "앱이 테이블 주인이나 슈퍼유저 계정으로 붙어 있다",
      "세션 변수 이름에 점(.)이 들어 있다",
    ],
    answer: 2,
    explanation:
      "테이블 주인은 FORCE ROW LEVEL SECURITY 없이는 정책을 건너뛰고, 슈퍼유저와 BYPASSRLS 역할은 항상 건너뛴다. 인덱스는 속도 문제이고 WITH CHECK는 쓰기에만 관여한다.",
    anchor: "행-수준-보안만-믿으면-안-되는-이유",
  },
  {
    id: "multi-tenancy-isolation-3",
    post: "multi-tenancy-isolation",
    question: "커넥션 풀을 쓰는 앱에서 테넌트 세션 변수를 SET 대신 set_config(..., true)로 트랜잭션마다 거는 이유는?",
    choices: [
      "트랜잭션이 끝나면 값이 사라져 다음 요청에 앞 테넌트 값이 남지 않기 때문이다",
      "SET은 RLS 정책에서 읽을 수 없기 때문이다",
      "set_config가 SET보다 빠르기 때문이다",
      "SET은 슈퍼유저만 실행할 수 있기 때문이다",
    ],
    answer: 0,
    explanation:
      "세션 SET은 커넥션에 남아서, 다음 요청이 설정을 빠뜨리면 앞 요청의 테넌트 데이터가 보인다. 세 번째 인자 true는 값을 트랜잭션 범위로 묶고, PgBouncer 트랜잭션 모드에서도 안전하다.",
    anchor: "행-수준-보안만-믿으면-안-되는-이유",
  },
  {
    id: "multi-tenancy-isolation-4",
    post: "multi-tenancy-isolation",
    question: "정책에 current_setting('app.tenant_id', true)::bigint만 썼더니 RESET 뒤 쿼리가 에러로 터졌다. 왜일까?",
    choices: [
      "RESET하면 RLS가 꺼지기 때문이다",
      "한 번 설정했던 변수는 RESET 뒤 NULL이 아니라 빈 문자열이 되어 bigint로 바꿀 수 없기 때문이다",
      "두 번째 인자 true는 변수가 없으면 에러를 내라는 뜻이기 때문이다",
      "bigint 대신 int로 바꿔야 하기 때문이다",
    ],
    answer: 1,
    explanation:
      "세션에서 한 번 설정된 변수는 RESET이나 SET LOCAL 트랜잭션이 끝난 뒤 빈 문자열이 된다. NULLIF(..., '')로 NULL로 바꾸면 테넌트가 없을 때 에러 대신 0줄이 나온다.",
    anchor: "공유-테이블의-경계를-db가-지키게-하기",
  },
  {
    id: "multi-tenancy-isolation-5",
    post: "multi-tenancy-isolation",
    question: "테넌트 ID를 어디서 가져오는 것이 가장 안전한가?",
    choices: [
      "클라이언트가 보낸 X-Tenant-Id 헤더",
      "요청 본문의 tenantId 필드",
      "서브도메인(acme.example.com)",
      "서버가 검증한 토큰의 클레임이나 서버 세션",
    ],
    answer: 3,
    explanation:
      "헤더나 본문 값은 숫자 하나만 바꿔 남의 테넌트로 들어갈 수 있다. 서브도메인은 화면을 고르는 힌트일 뿐이고, 서명이 검증된 토큰이나 세션에서 꺼낸 뒤 구성원인지 확인해야 한다.",
    anchor: "테넌트-id가-요청을-따라가게-하기",
  },
  {
    id: "multi-tenancy-isolation-6",
    post: "multi-tenancy-isolation",
    question: "공유 테이블의 기본 키를 (tenant_id, id)로 잡아 두면 나중에 테넌트를 다른 셀로 옮길 때 도움이 되는 이유는?",
    choices: [
      "행 필터 복제에서 UPDATE·DELETE를 넘기려면 필터 열이 복제 식별자에 들어 있어야 하기 때문이다",
      "tenant_id가 기본 키에 있으면 RLS가 필요 없어지기 때문이다",
      "기본 키가 두 열이면 시퀀스가 겹치지 않기 때문이다",
      "PostgreSQL은 기본 키 첫 열로만 발행을 만들 수 있기 때문이다",
    ],
    answer: 0,
    explanation:
      "발행에 WHERE (tenant_id = 1) 같은 행 필터를 걸고 UPDATE·DELETE까지 복제하려면 그 열이 복제 식별자(보통 기본 키)에 포함돼야 한다. 시퀀스 충돌은 기본 키 모양과 별개로 따로 풀어야 한다.",
    anchor: "큰-고객을-따로-떼어-내기",
  },
  {
    id: "multi-tenancy-isolation-7",
    post: "multi-tenancy-isolation",
    question: "워커 100개를 세 테넌트가 10, 50, 80개씩 원할 때 최대-최소 공정 몫으로 나누면?",
    choices: ["33, 33, 34", "10, 45, 45", "10, 50, 40", "8, 38, 54"],
    answer: 1,
    explanation:
      "적게 원하는 테넌트에게 원하는 10을 먼저 다 주고, 남은 90을 나머지 둘에게 똑같이 45씩 나눈다. 둘 다 45보다 많이 원하니 더 나눌 것이 없다.",
    anchor: "시끄러운-이웃을-묶어-두는-한도",
  },
];
