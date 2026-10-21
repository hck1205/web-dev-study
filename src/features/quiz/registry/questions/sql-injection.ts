import type { QuizQuestion } from "../types";

export const SQL_INJECTION: QuizQuestion[] = [
  {
    id: "sql-injection-1",
    post: "sql-injection",
    question: "username 자리에 admin' -- 를 넣었을 때 인증이 우회되는 원리는?",
    choices: [
      "서버가 admin 계정의 비밀번호를 캐시해 둬서",
      "따옴표가 문자열을 닫고 -- 가 뒤의 비밀번호 조건을 주석 처리해서",
      "DB가 admin 이라는 이름을 특별히 취급해서",
      "-- 가 SQL에서 OR 연산자로 해석돼서",
    ],
    answer: 1,
    explanation:
      "문자열을 이어 붙인 쿼리에서 입력의 따옴표가 username 문자열을 닫고, -- 뒤가 전부 주석이 되어 AND password 조건이 사라진다. where 절에 username='admin' 만 남아 비밀번호 검사 없이 관리자 행이 돌아온다.",
    anchor: "이어-붙인-문자열은-코드가-된다",
  },
  {
    id: "sql-injection-2",
    post: "sql-injection",
    question: "파라미터 바인딩($1, $2)이 SQL 주입을 막는 핵심 메커니즘은?",
    choices: [
      "값에 들어온 따옴표를 모두 이스케이프해서",
      "쿼리 구조를 먼저 파싱해 확정한 뒤 값을 데이터로만 끼워서",
      "쿼리를 암호화해서 전송하기 때문에",
      "DB가 바인딩된 쿼리를 더 빠르게 실행해서",
    ],
    answer: 1,
    explanation:
      "자리표시자가 담긴 템플릿과 값을 따로 보내면, DB가 템플릿을 먼저 파싱해 구조를 확정한 뒤 값을 데이터로만 끼운다. 그래서 값 안의 따옴표나 주석 기호가 문법이 아니라 글자가 된다. 실험에서 admin' -- 를 바인딩하니 그런 이름의 사용자를 찾다 빈 결과가 나왔다.",
    anchor: "파라미터-바인딩이-코드와-데이터를-가른다",
  },
  {
    id: "sql-injection-3",
    post: "sql-injection",
    question: "응답에 쿼리 결과가 전혀 드러나지 않는 엔드포인트에서 pg_sleep을 쓰는 공격은?",
    choices: [
      "UNION 기반 주입",
      "시간 기반 블라인드 주입",
      "저장형 주입",
      "식별자 주입",
    ],
    answer: 1,
    explanation:
      "조건이 참일 때만 pg_sleep으로 응답을 지연시켜 시간으로 한 비트씩 알아내는 것이 시간 기반 블라인드 주입이다. 실험에서 관리자 비밀번호 첫 글자가 S라는 조건이 참일 때만 2006ms, 거짓일 때 1ms가 걸려 글자를 특정했다.",
    anchor: "화면에-아무것도-안-떠도-시간으로-캔다",
  },
  {
    id: "sql-injection-4",
    post: "sql-injection",
    question: "정렬 컬럼을 ORDER BY $1 로 바인딩했는데 정렬이 안 되는 이유는?",
    choices: [
      "$1 이 컬럼 이름이 아니라 문자열 상수로 취급되기 때문",
      "PostgreSQL이 ORDER BY에서 바인딩을 금지하기 때문",
      "정렬에는 인덱스가 반드시 필요하기 때문",
      "$1 이 항상 NULL로 바인딩되기 때문",
    ],
    answer: 0,
    explanation:
      "바인딩은 값 자리만 막는다. 컬럼 이름 같은 식별자는 구조라서 자리표시자로 넘길 수 없고, $1에 'price'를 넣으면 컬럼이 아니라 문자열 상수로 들어가 모든 행이 같은 값으로 정렬돼 순서가 안 바뀐다. 식별자는 허용 목록이나 format('%I')로 다룬다.",
    anchor: "바인딩으로-못-막는-자리-식별자",
  },
  {
    id: "sql-injection-5",
    post: "sql-injection",
    question: "PostgreSQL의 format('%I', ...)가 식별자 주입을 막는 방식은?",
    choices: [
      "식별자를 파라미터로 바인딩한다",
      "식별자를 큰따옴표로 감싸고 내부 따옴표를 두 배로 만들어 하나의 이름으로 묶는다",
      "식별자를 해시 값으로 치환한다",
      "식별자에서 공백을 모두 제거한다",
    ],
    answer: 1,
    explanation:
      "%I는 식별자 규칙에 맞게 큰따옴표로 감싸고 내부 따옴표를 두 배로 만든다. 실험에서 weird\";DROP 이 \"weird\"\";DROP\" 하나의 식별자가 되어 세미콜론도 DROP도 문법이 아니라 식별자 글자가 됐다.",
    anchor: "바인딩으로-못-막는-자리-식별자",
  },
  {
    id: "sql-injection-6",
    post: "sql-injection",
    question: "애플리케이션 DB 역할을 최소 권한으로 좁히면 주입 방어에 어떻게 기여하나?",
    choices: [
      "주입 자체가 발생하지 않게 막는다",
      "주입이 뚫려도 역할에 없는 권한은 쓸 수 없어 피해가 거기서 멈춘다",
      "쿼리 실행 속도를 높인다",
      "바인딩을 자동으로 적용해 준다",
    ],
    answer: 1,
    explanation:
      "최소 권한은 뚫렸을 때의 피해를 가두는 심층 방어다. 실험에서 products만 읽는 역할로 users를 노린 UNION은 permission denied, DROP TABLE은 must be owner로 막혔다. 바인딩이 1차 방어, 최소 권한이 2차 방어다.",
    anchor: "최소-권한으로-피해를-가둔다",
  },
  {
    id: "sql-injection-7",
    post: "sql-injection",
    question: "ORM을 쓰는데도 SQL 주입이 생길 수 있는 가장 흔한 경로는?",
    choices: [
      "findOne 같은 기본 메서드를 쓸 때",
      "raw·queryRawUnsafe 같은 탈출구에 사용자 값을 문자열로 이어 붙일 때",
      "마이그레이션을 실행할 때",
      "커넥션 풀을 설정할 때",
    ],
    answer: 1,
    explanation:
      "ORM 기본 메서드는 바인딩을 쓰지만, raw나 queryRawUnsafe, query(문자열) 같은 탈출구에 사용자 값을 이어 붙이면 그대로 뚫린다. 성능 때문에 손으로 쓴 raw 쿼리에 파라미터를 문자열로 박아 넣는 게 흔한 실수다. raw 쿼리에도 바인딩 파라미터를 넘겨야 한다.",
    anchor: "실제로-sql-주입을-만나는-순간",
  },
];
