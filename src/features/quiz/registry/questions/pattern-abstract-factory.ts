import type { QuizQuestion } from "../types";

export const PATTERN_ABSTRACT_FACTORY: QuizQuestion[] = [
  {
    id: "pattern-abstract-factory-1",
    post: "pattern-abstract-factory",
    question: "STORAGE_DRIVER=local, QUEUE_DRIVER=sqs로 배포했더니 워커가 ENOENT를 낸다. 추상 팩토리로 막는 방법은?",
    choices: [
      "워커에 재시도를 붙여 파일이 생길 때까지 기다린다",
      "저장소와 큐를 한 벌로 만드는 팩토리를 두고, 값 하나(INFRA)로 한 벌을 통째로 고르게 한다",
      "저장소를 싱글턴으로 만들어 모든 파드가 같이 쓰게 한다",
      "큐 메시지에 파일 내용을 통째로 넣는다",
    ],
    answer: 1,
    explanation:
      "로컬 디스크와 공유 큐는 서로 다른 가정을 가진 조합이라 파드 경계에서 끊긴다. 한 벌로 고르게 하면 그런 조합이 존재하지 않는다. 싱글턴은 프로세스마다 하나일 뿐이라 다른 파드의 디스크를 보게 해 주지 못한다.",
    anchor: "따로-고르면-섞인다",
  },
  {
    id: "pattern-abstract-factory-2",
    post: "pattern-abstract-factory",
    question: "추상 팩토리에 createCache()라는 제품을 새로 추가하면 어떤 일이 생기나?",
    choices: [
      "새 구체 팩토리 파일 하나만 추가하면 된다",
      "클라이언트 코드만 고치면 된다",
      "인터페이스가 바뀌어 모든 구체 팩토리를 고쳐야 한다",
      "아무것도 고치지 않아도 런타임에 자동으로 채워진다",
    ],
    answer: 2,
    explanation:
      "추상 팩토리는 새 제품군을 더하기는 쉽고 새 제품 종류를 더하기는 어렵다. 생성 메서드 하나가 늘면 AWS, 로컬, 테스트용 등 모든 구체 팩토리가 그 메서드를 구현해야 한다. 그래서 제품 목록이 굳은 뒤에 들이는 편이 낫다.",
    anchor: "새-벌은-쉽고-새-제품은-어렵다",
  },
  {
    id: "pattern-abstract-factory-3",
    post: "pattern-abstract-factory",
    question: "knex({ client: \"mssql\" })로 바꾸면 쿼리의 LIMIT이 TOP으로, 자동 증가 열이 identity로 함께 바뀐다. 이걸 추상 팩토리로 설명하면?",
    choices: [
      "client 값이 쿼리, 스키마, 컬럼 컴파일러를 한 벌로 만드는 방언별 Client를 고르기 때문이다",
      "knex가 실행할 때마다 DB에 문법을 물어보기 때문이다",
      "모든 방언의 문법을 하나의 switch로 처리하기 때문이다",
      "SQL 표준이라 모든 DB에서 같은 문장이 나오기 때문이다",
    ],
    answer: 0,
    explanation:
      "knex의 Client는 queryCompiler, schemaCompiler, columnCompiler 같은 생성 메서드를 갖고, 방언별 하위 클래스가 이를 재정의한다. 설정의 client 한 줄이 구체 팩토리를 고르니 제품들이 늘 같은 방언으로 맞춰진다. 접속 없이 toString()만으로도 차이가 보인다.",
    anchor: "라이브러리-속의-추상-팩토리",
  },
  {
    id: "pattern-abstract-factory-4",
    post: "pattern-abstract-factory",
    question: "팩토리 메서드와 추상 팩토리의 차이로 옳은 것은?",
    choices: [
      "팩토리 메서드는 제품 여러 개를, 추상 팩토리는 제품 하나를 만든다",
      "둘은 함께 쓸 수 없다",
      "추상 팩토리는 상속만, 팩토리 메서드는 조합만 쓴다",
      "팩토리 메서드는 메서드 하나를 하위 클래스가 재정의하고, 추상 팩토리는 제품군을 만드는 객체를 통째로 바꾼다",
    ],
    answer: 3,
    explanation:
      "팩토리 메서드는 제품 하나를 상속으로 바꾸고, 추상 팩토리는 짝 맞는 제품 여러 개를 만드는 객체를 넘겨받아 바꾼다. 실제로는 추상 팩토리의 각 생성 메서드가 팩토리 메서드로 구현되는 경우가 많아 함께 쓰인다.",
    anchor: "팩토리-메서드와-무엇이-다른가",
  },
  {
    id: "pattern-abstract-factory-5",
    post: "pattern-abstract-factory",
    question: "저장소와 큐의 짝이 안 맞는 설정을 배포 직후에 잡으려면 무엇을 두는 게 좋은가?",
    choices: [
      "저장소 단위 테스트를 더 많이 쓴다",
      "고른 한 벌로 쓰고, 큐로 보내고, 받은 참조를 다시 읽는 왕복 점검을 시작 과정과 readiness probe에 둔다",
      "에러가 나면 로그만 남기고 계속 진행한다",
      "워커를 API와 같은 파드에서만 띄운다",
    ],
    answer: 1,
    explanation:
      "짝이 안 맞는 문제는 프로세스 경계를 넘을 때 드러나서 단위 테스트로는 잘 잡히지 않는다. 시작할 때 왕복을 한 번 해 보고, 통과해야 readiness가 성공하게 하면 잘못된 파드가 트래픽을 받기 전에 멈춘다.",
    anchor: "배포-전에-한-벌을-확인한다",
  },
];
