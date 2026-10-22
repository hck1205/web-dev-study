import type { QuizQuestion } from "../types";

export const SPRING_BOOT_AUTO_CONFIGURATION: QuizQuestion[] = [
  {
    id: "spring-boot-auto-configuration-1",
    post: "spring-boot-auto-configuration",
    question: "spring-boot-starter-jdbc jar를 열어 보면 클래스 파일이 없다. 그런데도 DataSource가 자동으로 생기는 이유는?",
    choices: [
      "스타터가 끌고 온 자동 구성 모듈과 HikariCP가 클래스패스에 들어와 조건을 통과하기 때문에",
      "스타터 jar의 MANIFEST.MF가 DataSource를 등록하기 때문에",
      "Spring Framework가 JDBC 드라이버를 발견하면 기본으로 DataSource를 만들기 때문에",
      "컴포넌트 스캔이 의존성 jar 안까지 훑어 DataSource를 찾기 때문에",
    ],
    answer: 0,
    explanation:
      "스타터는 코드 없는 의존성 묶음이다. 실제로는 spring-boot-jdbc 같은 자동 구성 모듈과 HikariCP가 함께 들어오고, Hikari 클래스가 생겼으니 @ConditionalOnClass가 맞아 DataSource 설정이 켜진다. 컴포넌트 스캔은 내 패키지 아래만 본다.",
    anchor: "스타터-jar에는-코드가-없다",
  },
  {
    id: "spring-boot-auto-configuration-2",
    post: "spring-boot-auto-configuration",
    question: "내가 Greeter 타입의 @Bean myGreeter를 등록했더니 자동 구성의 greeter가 생기지 않았다. 조건 평가 리포트 어디에서 이유를 확인하나?",
    choices: [
      "Positive matches의 GreetingAutoConfiguration 항목",
      "Exclusions 섹션",
      "Negative matches의 GreetingAutoConfiguration#greeter 항목, found beans of type ... myGreeter",
      "Unconditional classes 섹션",
    ],
    answer: 2,
    explanation:
      "빈 메서드 단위로 @ConditionalOnMissingBean이 틀렸으니 Negative matches에 나오고, 어떤 이름의 빈 때문에 물러났는지까지 적힌다. Exclusions는 exclude로 직접 뺀 자동 구성만 보여 준다.",
    anchor: "내-빈을-두면-자동-구성이-물러난다",
  },
  {
    id: "spring-boot-auto-configuration-3",
    post: "spring-boot-auto-configuration",
    question:
      "application-prod.properties에 greeting.prefix=Hello(prod), 환경 변수 GREETING_PREFIX=FromEnv를 주고 prod 프로필로 띄웠다. 들어가는 값은?",
    choices: [
      "Hello(prod), 프로필 파일이 가장 구체적이라서",
      "FromEnv, OS 환경 변수가 설정 파일보다 우선순위가 높아서",
      "Hi, 기본 파일이 마지막에 읽혀서",
      "환경 변수 이름이 점 표기가 아니라 바인딩되지 않는다",
    ],
    answer: 1,
    explanation:
      "Boot의 출처 순서에서 OS 환경 변수는 설정 파일 전체보다 높다. 환경 변수는 점을 밑줄로 바꾸고 대문자로 쓴 이름으로 찾으므로 GREETING_PREFIX가 greeting.prefix에 그대로 들어간다. 명령줄 인자를 주면 그것이 다시 환경 변수를 이긴다.",
    anchor: "같은-키가-여러-곳에-있으면-누가-이기나",
  },
  {
    id: "spring-boot-auto-configuration-4",
    post: "spring-boot-auto-configuration",
    question: "사용자 @Configuration 클래스에 @ConditionalOnMissingBean을 달지 말라고 하는 이유는?",
    choices: [
      "사용자 설정에서는 이 어노테이션이 컴파일되지 않아서",
      "이 조건이 항상 참으로 평가돼서",
      "자동 구성이 모두 꺼져 버려서",
      "그 시점까지 등록된 빈 정의만 보고 판단하는데, 사용자 설정끼리는 처리 순서가 보장되지 않아서",
    ],
    answer: 3,
    explanation:
      "자동 구성은 사용자 설정이 모두 등록된 뒤에 처리되도록 보장되지만 사용자 설정 클래스끼리는 그렇지 않다. 그래서 같은 조건이 순서에 따라 다르게 판정될 수 있고, Boot 문서도 자동 구성 클래스에만 쓰라고 권한다.",
    anchor: "내-빈을-두면-자동-구성이-물러난다",
  },
  {
    id: "spring-boot-auto-configuration-5",
    post: "spring-boot-auto-configuration",
    question: "DataSource @Bean을 직접 만들었더니 spring.datasource.hikari.maximum-pool-size 설정이 먹지 않는다. 왜인가?",
    choices: [
      "자동 구성이 물러나면서 그 속성을 읽어 주던 코드도 함께 빠졌기 때문에",
      "Hikari는 환경 변수로만 설정할 수 있기 때문에",
      "직접 만든 빈은 프록시로 감싸지지 않기 때문에",
      "속성 이름의 대시 때문에 바인딩에 실패했기 때문에",
    ],
    answer: 0,
    explanation:
      "spring.datasource.hikari.*를 Hikari 객체에 넣는 일은 자동 구성 쪽 코드가 한다. 내 빈 때문에 @ConditionalOnMissingBean이 틀려 그 설정이 빠졌으니 속성도 읽히지 않는다. 내 @Bean 메서드에 @ConfigurationProperties(\"spring.datasource.hikari\")를 붙이면 다시 바인딩된다.",
    anchor: "내-빈을-두면-자동-구성이-물러난다",
  },
  {
    id: "spring-boot-auto-configuration-6",
    post: "spring-boot-auto-configuration",
    question: "사내 스타터를 Boot 2.x에서 3.x로 올렸더니 자동 구성이 통째로 사라졌다. 가장 먼저 의심할 것은?",
    choices: [
      "@ConditionalOnClass의 클래스 이름 오타",
      "자동 구성을 spring.factories의 EnableAutoConfiguration 키로만 등록해 두었는지",
      "application.properties의 인코딩",
      "컴포넌트 스캔 범위가 너무 넓은지",
    ],
    answer: 1,
    explanation:
      "2.7에서 AutoConfiguration.imports 파일이 생겼고, 3.0부터는 spring.factories의 EnableAutoConfiguration 키를 자동 구성 등록에 쓰지 않는다. 목록에서 빠지니 조건 평가조차 되지 않는다. imports 파일로 옮기면 된다.",
    anchor: "자동-구성-목록은-파일-한-장에-적혀-있다",
  },
  {
    id: "spring-boot-auto-configuration-7",
    post: "spring-boot-auto-configuration",
    question: "@ConfigurationProperties에 @NotBlank를 달고 값을 비워 띄우면 어떻게 되나? 그게 배포에서 좋은 이유는?",
    choices: [
      "빈 문자열이 들어가고 첫 요청에서 경고가 찍힌다. 장애가 빨리 보인다",
      "기본값으로 대체되어 정상 동작한다. 장애가 나지 않는다",
      "시작 단계에서 바인딩 오류로 멈춘다. 롤링 배포에서 새 파드가 준비되지 않아 옛 파드가 계속 트래픽을 받는다",
      "검증은 테스트에서만 동작하고 운영에서는 무시된다",
    ],
    answer: 2,
    explanation:
      "@Validated가 붙은 설정 객체는 바인딩할 때 검사해서, 어긋나면 Origin까지 적힌 오류로 시작을 멈춘다. 잘못된 설정으로 떴다가 요청 처리 중에 터지는 것보다 시작 단계에서 막히는 편이 배포를 안전하게 만든다.",
    anchor: "설정값을-타입으로-묶고-시작할-때-검사한다",
  },
];
