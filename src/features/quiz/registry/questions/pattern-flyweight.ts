import type { QuizQuestion } from "../types";

export const PATTERN_FLYWEIGHT: QuizQuestion[] = [
  {
    id: "pattern-flyweight-1",
    post: "pattern-flyweight",
    question: "지도 마커의 필드 중 플라이웨이트로 공유할 고유 상태에 해당하는 것은?",
    choices: [
      "매장 id",
      "위도와 경도",
      "사용자가 눌러서 선택됐는지 여부",
      "카테고리별 아이콘과 색",
    ],
    answer: 3,
    explanation:
      "고유 상태는 여러 객체가 똑같이 갖고 바뀌지 않는 부분이라 카테고리가 같으면 똑같은 아이콘과 색이 해당한다. id와 위치는 마커마다 다르고, 선택 여부는 상황에 따라 바뀌는 외부 상태라서 공유 객체에 넣으면 안 된다.",
    anchor: "바뀌지-않는-것과-바뀌는-것을-가른다",
  },
  {
    id: "pattern-flyweight-2",
    post: "pattern-flyweight",
    question: "클릭한 마커만 크게 보이려고 markers[0].style.size = 48을 실행했더니 같은 카테고리 마커가 전부 커졌다. 올바른 설계는?",
    choices: [
      "스타일을 마커마다 깊은 복사해서 쓴다",
      "선택 여부는 외부 상태로 보고 마커나 그리는 함수의 인자로 넘기며, 공유 스타일은 Object.freeze로 얼린다",
      "size를 바꾼 뒤 그리고 나서 다시 원래 값으로 돌린다",
      "공장의 풀을 비우고 다시 만든다",
    ],
    answer: 1,
    explanation:
      "공유 객체를 고치면 그 객체를 가리키는 모든 곳이 함께 바뀐다. 선택 여부처럼 마커마다 다른 값은 외부 상태라 그릴 때 인자로 넘긴다. 공유 객체를 얼려 두면 strict mode에서 같은 실수가 바로 TypeError로 드러난다. 깊은 복사는 공유를 포기하는 것이다.",
    anchor: "하나를-고쳤더니-전부-바뀌었다",
  },
  {
    id: "pattern-flyweight-3",
    post: "pattern-flyweight",
    question: "서버 응답으로 받은 마커 20만 개에 공유 스타일을 적용했더니 메모리가 크게 줄었는데, 코드에서 정의한 스타일을 {...style}로 복사하던 경우에는 효과가 훨씬 작았다. 이유는?",
    choices: [
      "JSON.parse가 만든 문자열은 내용이 같아도 따로 메모리를 차지하지만, 코드에 적은 문자열은 엔진이 이미 함께 쓰기 때문이다",
      "스프레드 연산자가 내부적으로 플라이웨이트를 적용하기 때문이다",
      "JSON.parse가 숫자를 문자열로 저장하기 때문이다",
      "GC가 스프레드로 만든 객체를 더 자주 수거하기 때문이다",
    ],
    answer: 0,
    explanation:
      "네트워크에서 읽은 값은 마커마다 새 문자열이라 아이콘 SVG가 20만 벌 생긴다. 코드에 적힌 문자열은 같은 것 하나를 엔진이 공유하니, 복사로 늘어난 건 객체 껍데기뿐이다. 그래서 효과는 중복이 어디서 오는지 재 보고 판단한다.",
    anchor: "줄어든-메모리를-재-본다",
  },
  {
    id: "pattern-flyweight-4",
    post: "pattern-flyweight",
    question: "스타일 키를 category:color:size로 만들었는데 관리자가 매장마다 색을 따로 정할 수 있어 풀이 매장 수만큼 커졌다. 이 상황을 바르게 설명한 것은?",
    choices: [
      "풀이 클수록 공유가 잘 되고 있다는 뜻이다",
      "Map 대신 배열을 쓰면 해결된다",
      "공유할 것이 거의 없는데 풀이 모든 객체를 붙잡고 있어 메모리 누수가 된다. 키 설계를 다시 보거나 WeakRef, LRU로 정리한다",
      "Object.freeze를 빼면 해결된다",
    ],
    answer: 2,
    explanation:
      "키 수가 객체 수에 가까우면 플라이웨이트가 아끼는 것은 없고 풀만 계속 자란다. 먼저 키 개수를 재서 패턴이 맞는 자리인지 본다. 키가 많지만 금방 안 쓰이게 된다면 WeakRef와 FinalizationRegistry나 크기 제한 LRU로 정리한다.",
    anchor: "풀이-끝없이-자랄-때",
  },
  {
    id: "pattern-flyweight-5",
    post: "pattern-flyweight",
    question: "자바에서 Integer c = 128, d = 128일 때 c == d가 false인 이유는?",
    choices: [
      "128은 int 범위를 넘기 때문이다",
      "Integer.valueOf가 -128부터 127까지만 캐시된 객체를 주고, 그 밖은 새 객체를 만들기 때문이다",
      "==는 항상 값을 비교하는데 오토박싱이 값을 바꾸기 때문이다",
      "JVM이 128 이상의 숫자는 문자열로 저장하기 때문이다",
    ],
    answer: 1,
    explanation:
      "오토박싱은 Integer.valueOf를 쓰고, valueOf는 작은 값에 대해 미리 만든 같은 객체를 돌려주는 플라이웨이트다. 범위 밖은 매번 새 객체라 참조 비교인 ==가 false가 된다. 값 비교는 equals로 해야 한다.",
    anchor: "엔진과-언어-안의-플라이웨이트",
  },
  {
    id: "pattern-flyweight-6",
    post: "pattern-flyweight",
    question: "플라이웨이트 팩토리와 캐시는 둘 다 키로 찾는 Map이다. 둘을 가르는 기준으로 맞는 것은?",
    choices: [
      "캐시는 메모리를 아끼고 플라이웨이트는 계산을 아낀다",
      "플라이웨이트는 항목을 절대 버릴 수 없다",
      "캐시는 결과를 버려도 다시 계산하면 되지만, 플라이웨이트는 여러 곳이 같은 객체를 동시에 가리키므로 불변이 전제다",
      "캐시는 싱글턴이고 플라이웨이트는 프로토타입이다",
    ],
    answer: 2,
    explanation:
      "캐시는 반복 계산을 피하려는 것이라 꺼낸 값을 버리거나 다시 만들어도 정확성에 문제가 없다. 플라이웨이트는 같은 상태의 객체를 한 벌로 줄이려는 것이고 여러 곳이 같은 참조를 쥐니 바뀌면 안 된다. 플라이웨이트도 WeakRef처럼 안 쓰는 항목을 정리할 수는 있다.",
    anchor: "캐시와-무엇이-다른가",
  },
];
