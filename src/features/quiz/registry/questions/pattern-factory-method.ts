import type { QuizQuestion } from "../types";

export const PATTERN_FACTORY_METHOD: QuizQuestion[] = [
  {
    id: "pattern-factory-method-1",
    post: "pattern-factory-method",
    question: "GoF 팩토리 메서드 패턴에서 상위 클래스(Creator)가 하는 일로 가장 알맞은 것은?",
    choices: [
      "모든 구체 제품 클래스를 import해서 switch로 골라 만든다",
      "제품 인터페이스만 알고 흐름을 진행하며, 생성 순간에만 재정의 가능한 메서드를 부른다",
      "제품 객체를 하나만 만들어 전역으로 공유한다",
      "기존 객체를 복제해서 새 제품을 만든다",
    ],
    answer: 1,
    explanation:
      "Creator는 send() 같은 흐름을 쥐고, 무엇을 만들지는 하위 클래스가 재정의한 팩토리 메서드에 맡긴다. switch로 골라 만드는 함수는 심플 팩토리이고, 하나만 공유하는 것은 싱글턴, 복제는 프로토타입이다.",
    anchor: "new가-박힌-자리를-메서드로-바꾼다",
  },
  {
    id: "pattern-factory-method-2",
    post: "pattern-factory-method",
    question: "Integer.valueOf나 List.of 같은 정적 팩토리 메서드가 GoF 팩토리 메서드와 다른 점은?",
    choices: [
      "정적 팩토리 메서드는 객체를 만들지 않는다",
      "정적 팩토리 메서드는 항상 새 객체를 만든다",
      "정적 팩토리 메서드에는 상속으로 생성을 바꿔 끼우는 구조가 없다",
      "정적 팩토리 메서드는 인터페이스를 돌려줄 수 없다",
    ],
    answer: 2,
    explanation:
      "정적 팩토리 메서드는 이름을 붙이고 캐시된 객체나 하위 타입을 돌려줄 수 있는 관용구다. 하지만 하위 클래스가 재정의해서 제품을 바꾸는 구조는 없다. 그 구조가 GoF 팩토리 메서드의 핵심이다.",
    anchor: "이름이-비슷한-세-가지",
  },
  {
    id: "pattern-factory-method-3",
    post: "pattern-factory-method",
    question: "for...of가 배열, Set, Map, 문자열을 모두 같은 코드로 돌 수 있는 이유를 팩토리 메서드로 설명하면?",
    choices: [
      "각 컬렉션이 [Symbol.iterator]()로 자기 반복자를 만들어 주고, for...of는 next()만 부르기 때문이다",
      "for...of가 내부에서 컬렉션 종류를 instanceof로 판별하기 때문이다",
      "모든 컬렉션이 내부적으로 배열로 바뀌기 때문이다",
      "for...of가 length 속성으로 인덱스를 돌기 때문이다",
    ],
    answer: 0,
    explanation:
      "[Symbol.iterator]()가 컬렉션마다 다른 반복자를 만드는 팩토리 메서드다. for...of는 무엇을 도는지 모르고 반복자 인터페이스인 next()만 쓴다. Set과 Map에는 인덱스가 없으니 length로 도는 방식으로는 설명되지 않는다.",
    anchor: "매일-쓰는-팩토리-메서드",
  },
  {
    id: "pattern-factory-method-4",
    post: "pattern-factory-method",
    question: "채널별 팩토리 표를 satisfies Record<ChannelKind, () => Channel>로 선언하면 얻는 이점은?",
    choices: [
      "실행 속도가 빨라진다",
      "ChannelKind에 새 종류를 넣고 팩토리를 빠뜨리면 컴파일 에러로 알려 준다",
      "런타임에 모르는 문자열이 들어와도 자동으로 막아 준다",
      "팩토리 함수가 한 번만 실행되게 한다",
    ],
    answer: 1,
    explanation:
      "satisfies는 표가 모든 종류를 채웠는지 컴파일 시점에 검사한다. if 사슬은 분기를 빠뜨려도 조용히 지나가지만 표는 빠진 키를 에러로 드러낸다. 다만 바깥에서 들어오는 문자열은 런타임에 따로 확인해야 한다.",
    anchor: "상속-대신-함수를-넘기면",
  },
  {
    id: "pattern-factory-method-5",
    post: "pattern-factory-method",
    question: "factories[kind]()로 만든 팩토리에 사용자가 kind로 \"toString\"을 보냈다. 어떤 일이 생기고 어떻게 막나?",
    choices: [
      "undefined라서 항상 TypeError가 나므로 따로 막을 필요가 없다",
      "자바스크립트가 자동으로 무시한다",
      "kind를 소문자로 바꾸면 해결된다",
      "Object.prototype의 함수가 불려 엉뚱한 값이 나오므로 Object.hasOwn이나 Map으로 확인한다",
    ],
    answer: 3,
    explanation:
      "일반 객체는 프로토타입에서 toString, constructor를 물려받아 factories[\"toString\"]이 함수로 찾아진다. 에러 대신 엉뚱한 함수가 실행된다. Object.hasOwn으로 자기 속성인지 확인하거나 Map, Object.create(null)을 쓴다.",
    anchor: "모르는-채널은-시작할-때-막는다",
  },
  {
    id: "pattern-factory-method-6",
    post: "pattern-factory-method",
    question: "같은 채널 분기 if문이 네 파일에 복사돼 있다. 새 채널을 추가할 때 생기는 문제를 가리키는 말과 해결 방향은?",
    choices: [
      "산탄총 수술. 생성을 한곳에 모으고 기능은 Channel 인터페이스만 쓰게 한다",
      "순환 의존. 파일을 하나로 합친다",
      "과잉 설계. 분기를 모두 지운다",
      "전역 상태. 채널을 싱글턴으로 만든다",
    ],
    answer: 0,
    explanation:
      "변경 하나가 여러 파일의 수정을 요구하는 냄새를 산탄총 수술이라 한다. 하나를 빠뜨리면 그 경로만 조용히 동작하지 않는다. 생성을 팩토리 한곳에 모으면 새 채널은 그 한 곳에 추가하는 것으로 끝난다.",
    anchor: "채널-하나를-추가할-때-고치는-곳",
  },
];
