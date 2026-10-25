import type { QuizQuestion } from "../types";

export const RW_SHOPIFY_MODULAR_MONOLITH: QuizQuestion[] = [
  {
    id: "rw-shopify-modular-monolith-1",
    post: "rw-shopify-modular-monolith",
    question: "Shopify가 2015년에 데이터베이스를 샤딩한 뒤에도 회복력을 잃었다고 한 이유는?",
    choices: [
      "샤드마다 복제본이 없어서",
      "코드 곳곳이 모든 샤드를 도는 동작을 해서, 샤드 하나만 죽어도 그 동작이 플랫폼 전체에서 멈췄기 때문이다",
      "샤드 키를 가게 ID가 아닌 주문 ID로 잡아서",
      "샤드 수가 너무 적어서",
    ],
    answer: 1,
    explanation:
      "Pods 글은 Sharding.with_each_shard 같은 코드를 예로 든다. 데이터를 나눠도 요청이나 작업이 여러 샤드를 함께 건드리면 장애 영향 범위는 여전히 전체다. 그래서 작업 단위를 Pod 하나에 묶었다.",
    anchor: "샤드로-나눴더니-회복력을-잃었다",
  },
  {
    id: "rw-shopify-modular-monolith-2",
    post: "rw-shopify-modular-monolith",
    question: "Shopify의 Pod에서 장애 격리를 실제로 만드는 규칙은?",
    choices: [
      "앱 서버를 Pod마다 따로 둔다",
      "Pod마다 다른 데이터센터를 쓴다",
      "웹 요청과 지연 작업 하나가 Pod 하나에만 닿게 하고, Pod를 넘나드는 동작을 허용하지 않는다",
      "모든 Pod가 하나의 Redis를 공유한다",
    ],
    answer: 2,
    explanation:
      "앱 서버, 잡 워커, 로드 밸런서는 공유하지만 한 번에 Pod 하나하고만 이야기한다. 요청 하나에 Pod 하나만 살아 있으면 되니, 한 Pod의 저장소 장애가 다른 Pod의 가게로 번지지 않는다.",
    anchor: "가게-묶음마다-데이터-저장소를-따로-둔-pod",
  },
  {
    id: "rw-shopify-modular-monolith-3",
    post: "rw-shopify-modular-monolith",
    question: "가게를 다른 Pod로 옮길 때 컷오버 직전에 Redis 기반 다중 읽기·단일 쓰기 락의 쓰기 몫을 잡는 이유는?",
    choices: [
      "binlog를 더 빨리 읽으려고",
      "라우팅 표를 캐시에서 지우려고",
      "대상 Pod의 MySQL을 잠그려고",
      "그 가게에 쓰는 요청과 작업이 하나도 돌고 있지 않음을 보장해 마지막 이벤트까지 빠짐없이 옮기려고",
    ],
    answer: 3,
    explanation:
      "가게에 묶인 모든 작업 단위가 읽기 몫을 들고 돌기 때문에, 쓰기 몫을 잡았다는 건 그 가게를 고치는 작업이 없다는 뜻이다. 그때 binlog 좌표를 끝점으로 적고 남은 이벤트를 적용한 뒤 라우팅 표를 바꾼다.",
    anchor: "가게를-pod-사이로-옮기기",
  },
  {
    id: "rw-shopify-modular-monolith-4",
    post: "rw-shopify-modular-monolith",
    question: "2019년 글이 마이크로서비스 대신 모듈러 모놀리스를 고른 이유로 든 것이 아닌 것은?",
    choices: [
      "Ruby가 마이크로서비스를 지원하지 않는다",
      "서비스마다 테스트·배포 파이프라인과 인프라를 따로 유지해야 한다",
      "서비스 사이 호출은 네트워크를 건너 지연이 늘고 신뢰성이 떨어진다",
      "여러 서비스에 걸친 리팩터링은 의존하는 서비스를 모두 고치고 배포를 맞춰야 한다",
    ],
    answer: 0,
    explanation:
      "글은 마이크로서비스가 겪던 문제를 풀겠지만 다른 문제 묶음을 가져온다고 봤다. 파이프라인과 인프라 비용, 네트워크 호출, 배포 조율이 그 예다. 언어가 지원하지 않는다는 이유는 없다.",
    anchor: "코드는-쪼개지-않기로-했다",
  },
  {
    id: "rw-shopify-modular-monolith-5",
    post: "rw-shopify-modular-monolith",
    question: "Shopify가 호출 그래프 도구 Wedge 대신 Packwerk를 만든 이유는?",
    choices: [
      "Wedge가 오픈소스가 아니어서",
      "호출 그래프는 잡음이 많고 상속이 끼면 호출 주인이 애매했으며, 전체 테스트를 돌려야 해 한 시간 넘게 걸렸기 때문이다",
      "Packwerk가 런타임에 모든 메서드 호출을 기록하기 때문이다",
      "Rails Engine에서는 Wedge가 돌지 않아서",
    ],
    answer: 1,
    explanation:
      "Packwerk는 메서드 호출을 무시하고 정적 상수 참조만 본다. 개발자가 직접 쓴 참조라 애매함이 적고, 큰 코드베이스를 몇 분 만에 분석해 PR 단계에서 위반을 막을 수 있었다.",
    anchor: "호출-그래프에서-상수-참조로-packwerk",
  },
  {
    id: "rw-shopify-modular-monolith-6",
    post: "rw-shopify-modular-monolith",
    question: "2020년 글이 공개 인터페이스만 만들고 의존 그래프를 무시했을 때 생겼다고 한 일은?",
    choices: [
      "테스트가 빨라졌다",
      "순환 의존이 자동으로 사라졌다",
      "인터페이스가 기존 제어 흐름에 한 겹 더 얹은 간접층이 되어 나쁜 설계가 더 넓게 퍼졌다",
      "컴포넌트 수가 줄었다",
    ],
    answer: 2,
    explanation:
      "의존 방향을 바로잡지 않은 채 인터페이스만 두면 문제가 있는 설계가 인터페이스 클래스로 새어 나가 고치기 더 어려워진다. 그래서 의존 그래프를 함께 보고, 책임을 옮기거나 발행·구독으로 제어를 뒤집어 순환을 없앴다.",
    anchor: "2020년에-고쳐-쓴-것들",
  },
  {
    id: "rw-shopify-modular-monolith-7",
    post: "rw-shopify-modular-monolith",
    question: "2024년 회고에서 Packwerk 위반을 0으로 만든 패키지만 올려 부팅했을 때 일어난 일과 그 이유는?",
    choices: [
      "바로 부팅됐다. 위반 0이면 분리가 보장된다",
      "Sorbet 타입 오류가 났다",
      "Packwerk가 위반을 다시 만들어 냈다",
      "부팅에 실패했다. Packwerk는 Zeitwerk가 읽는 상수만 보고 초기화 코드나 require로 읽는 코드 같은 의존은 보지 못하기 때문이다",
    ],
    answer: 3,
    explanation:
      "정적 상수 참조만 보는 도구라 상수로 참조되지 않는 의존이 빠진다. Shopify는 초기화 코드를 엔진으로 옮기고 그 패키지만 따로 테스트하는 CI 단계를 만든 뒤에야 분리를 믿었다. 그래서 돌아가는 코드를 진척의 기준으로 삼았다.",
    anchor: "2024년의-회고-이름이-아니라-돌아가는-코드로",
  },
];
