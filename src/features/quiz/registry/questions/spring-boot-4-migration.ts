import type { QuizQuestion } from "../types";

export const SPRING_BOOT_4_MIGRATION: QuizQuestion[] = [
  {
    id: "spring-boot-4-migration-1",
    post: "spring-boot-4-migration",
    question:
      "3.5에서 deprecation 경고가 0개였는데 4.x로 올리자 com.fasterxml.jackson.databind 패키지가 없다는 오류가 났다. 왜 3.5에서는 경고가 없었나?",
    choices: [
      "컴파일러가 import 문은 검사하지 않기 때문에",
      "Jackson 2 API는 3.5 안에서 정상 API라 deprecated가 아니었고, 4.0에서 기본이 Jackson 3(tools.jackson)으로 바뀌었기 때문에",
      "3.5가 Jackson 3을 이미 쓰고 있었기 때문에",
      "-Xlint 옵션을 주지 않으면 Jackson 경고는 숨겨지기 때문에",
    ],
    answer: 1,
    explanation:
      "deprecation 경고는 그 버전 안에서 곧 사라질 API에만 붙는다. Jackson 2의 databind는 3.5에서 정상으로 쓰이던 라이브러리라 경고가 없었고, 4.0이 Jackson 3을 기본으로 바꾸면서 패키지가 tools.jackson이 됐다. 그래서 경고 0개는 필요조건일 뿐 충분조건이 아니다.",
    anchor: "35에서-먼저-경고를-본다",
  },
  {
    id: "spring-boot-4-migration-2",
    post: "spring-boot-4-migration",
    question: "4.x에서 spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration 설정이 있으면 어떤 문제가 생기나?",
    choices: [
      "컴파일 오류가 나서 바로 알 수 있다",
      "Boot가 새 이름으로 자동 변환해 준다",
      "클래스 이름이 org.springframework.boot.jdbc.autoconfigure로 바뀌어 문자열이 더 이상 그 자동 구성을 가리키지 않는다",
      "DataSource 자동 구성이 4.x에서 사라져 설정이 의미 없다",
    ],
    answer: 2,
    explanation:
      "4.0에서 자동 구성이 기술별 모듈로 쪼개지며 패키지가 org.springframework.boot.<모듈>로 시작하게 됐다. 문자열로 적은 클래스 이름은 컴파일러가 확인하지 않으니 저장소 전체를 검색해 고쳐야 한다.",
    anchor: "패키지가-옮겨-간-자동-구성-클래스",
  },
  {
    id: "spring-boot-4-migration-3",
    post: "spring-boot-4-migration",
    question:
      "properties migrator가 management.endpoints.enabled-by-default를 WARN이 아니라 ERROR로 보고했다. 무슨 뜻인가?",
    choices: [
      "대체 키의 값 타입이 달라 자동으로 옮길 수 없으니 사람이 뜻을 보고 고쳐야 한다",
      "키가 이름만 바뀌었고 값은 자동으로 옮겨졌다",
      "migrator가 키를 읽지 못해 애플리케이션 시작이 멈췄다",
      "그 키는 4.x에서도 그대로 쓸 수 있다",
    ],
    answer: 0,
    explanation:
      "WARN은 이름만 바뀐 키를 새 키로 임시로 옮겨 준 경우다. ERROR는 참·거짓이던 값이 management.endpoints.access.default처럼 none, read-only, unrestricted를 받는 키로 바뀌어 그대로 옮길 수 없다는 뜻이다. 앱은 뜨지만 그 설정은 적용되지 않는다.",
    anchor: "설정-키는-migrator가-찾는다",
  },
  {
    id: "spring-boot-4-migration-4",
    post: "spring-boot-4-migration",
    question:
      "4.x에서 TestRestTemplate import를 새 패키지로 고치고 @AutoConfigureTestRestTemplate도 붙였는데 NoClassDefFoundError: RestTemplateBuilder가 난다. 원인은?",
    choices: [
      "@SpringBootTest의 webEnvironment를 MOCK으로 둬서",
      "Jackson 3과 RestTemplate이 호환되지 않아서",
      "@MockitoBean과 TestRestTemplate을 함께 쓸 수 없어서",
      "RestTemplateBuilder가 든 spring-boot-restclient 모듈이 클래스패스에 없어서",
    ],
    answer: 3,
    explanation:
      "모듈이 쪼개지면서 TestRestTemplate은 spring-boot-resttestclient로, RestTemplateBuilder는 spring-boot-restclient로 나뉘었다. 둘 다 넣어야 한다. 새 코드라면 RestTestClient로 옮기는 것도 방법이다.",
    anchor: "테스트-쪽이-가장-많이-깨진다",
  },
  {
    id: "spring-boot-4-migration-5",
    post: "spring-boot-4-migration",
    question: "Boot 3.5에서 4.1로 올릴 때 4.0.x를 한 번 거치라고 권하는 이유로 가장 알맞은 것은?",
    choices: [
      "4.1은 Java 25 이상만 지원하기 때문에",
      "4.1이 4.0에서 deprecated된 클래스와 속성을 지웠으니 4.0에서 경고로 먼저 보고 고칠 수 있기 때문에",
      "Maven Central에 4.1이 3.5와 호환되는 버전만 올라와 있기 때문에",
      "properties migrator가 4.1에서는 동작하지 않기 때문에",
    ],
    answer: 1,
    explanation:
      "4.1 릴리스 노트는 4.0에서 deprecated된 것을 지웠다고 적는다. 4.0에서는 그것들이 경고로 보이니 거기서 정리하고 넘어가면 원인을 단계별로 가를 수 있다. 한 번에 뛰면 3.x 삭제, 4.0 변경, 4.1 삭제가 한꺼번에 터진다.",
    anchor: "40에서-바뀐-바닥",
  },
  {
    id: "spring-boot-4-migration-6",
    post: "spring-boot-4-migration",
    question: "OpenRewrite의 Boot 4 업그레이드 레시피를 돌린 뒤 꼭 해야 하는 일은?",
    choices: [
      "결과를 그대로 커밋한다. 레시피가 빌드까지 검증한다",
      "properties migrator를 지운다",
      "빌드와 테스트를 돌리고 diff를 검토한다. 의존성 버전 같은 판단은 틀릴 수 있다",
      "Jackson 2로 되돌린다",
    ],
    answer: 2,
    explanation:
      "직접 돌려 봤을 때 자바 코드의 패키지 이동과 어노테이션 교체는 맞았지만 pom.xml에는 4.0.x라는 문자열이 버전으로 들어가 빌드가 되지 않았다. 레시피는 반복 작업을 줄여 주지만 결과 확인은 사람이 빌드와 테스트로 한다.",
    anchor: "openrewrite에-맡겨-본-결과",
  },
  {
    id: "spring-boot-4-migration-7",
    post: "spring-boot-4-migration",
    question:
      "@GetMapping(path = \"/greet\", version = \"2\")를 두고 spring.mvc.apiversion.use.header=API-Version만 설정했다. 헤더 없이 /greet를 부르면?",
    choices: [
      "400 Bad Request가 난다",
      "가장 높은 버전인 2가 응답한다",
      "가장 낮은 버전이 응답한다",
      "404 Not Found가 난다",
    ],
    answer: 0,
    explanation:
      "버전을 읽을 곳만 정하고 기본 버전을 주지 않았으니 버전이 없는 요청은 400으로 막힌다. 없는 버전(예: 3)도 400이다. 헤더 없이 받으려면 spring.mvc.apiversion.default로 기본 버전을 정한다.",
    anchor: "40에서-새로-생긴-것-몇-가지",
  },
];
