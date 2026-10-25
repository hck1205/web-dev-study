import type { QuizQuestion } from "../types";

export const JS_MAP_SET_WEAK: QuizQuestion[] = [
  {
    id: "js-map-set-weak-1",
    post: "js-map-set-weak",
    question: "행 객체를 키로 checked[row] = true를 했더니 다른 행도 체크된 것으로 나온다. 이유는?",
    choices: [
      "객체 키 자리의 값은 문자열로 바뀌는데, 평범한 객체는 모두 '[object Object]'가 되어 한 칸을 같이 써서",
      "객체는 같은 모양의 객체를 같은 키로 보기 때문에",
      "checked 객체가 프로토타입에서 true를 물려받아서",
      "객체 키는 마지막에 넣은 값 하나만 기억해서",
    ],
    answer: 0,
    explanation:
      "객체의 속성 키는 문자열이나 심볼뿐이라 다른 값은 String()을 거친다. 평범한 객체는 전부 '[object Object]'가 되니 모든 행이 한 칸을 공유한다. 객체 자체를 키로 쓰려면 Map을 쓴다.",
    anchor: "객체의-키는-결국-문자열이다",
  },
  {
    id: "js-map-set-weak-2",
    post: "js-map-set-weak",
    question: "JSON.parse로 만든 { \"__proto__\": { \"isAdmin\": true } }를 Object.assign({}, obj)로 복사했다. 결과 객체는?",
    choices: [
      "__proto__라는 자기 속성이 그대로 복사된다",
      "키 목록은 비어 있는데, 프로토타입이 바뀌어 isAdmin이 true로 읽힌다",
      "TypeError가 나서 복사되지 않는다",
      "JSON.parse 단계에서 이미 __proto__ 키가 지워져 빈 객체다",
    ],
    answer: 1,
    explanation:
      "JSON.parse는 __proto__를 평범한 자기 속성으로 만들지만, Object.assign은 대입을 하므로 __proto__ setter가 불려 새 객체의 프로토타입이 바뀐다. 사용자 입력이 키가 되는 사전에서는 Object.create(null)이나 Map을 쓴다.",
    anchor: "__proto__와-물려받은-이름들",
  },
  {
    id: "js-map-set-weak-3",
    post: "js-map-set-weak",
    question: "grid.set([1, 2], \"벽\") 후 grid.get([1, 2])가 undefined를 준다. 왜인가?",
    choices: [
      "Map은 배열을 키로 받지 않아서",
      "배열 키는 문자열 \"1,2\"로 바뀌어 저장되어서",
      "Map은 객체 키를 참조로 비교하는데, [1, 2]를 쓸 때마다 새 배열이 생겨서",
      "get은 set 직후 같은 작업 안에서는 값을 돌려주지 않아서",
    ],
    answer: 2,
    explanation:
      "Map은 SameValueZero로 키를 비교하고, 객체와 배열은 참조가 같아야 같은 키다. 내용이 같아도 새로 만든 배열은 다른 키다. 값으로 비교되는 복합 키가 필요하면 문자열로 잇거나 중첩 Map을 쓴다.",
    anchor: "map은-키를-있는-그대로-비교한다",
  },
  {
    id: "js-map-set-weak-4",
    post: "js-map-set-weak",
    question: "키가 계속 들어오고 오래된 키는 delete로 빼는 사전에서 객체가 Map보다 훨씬 느렸다. 가장 그럴듯한 이유는?",
    choices: [
      "객체는 키를 넣을 때마다 전체를 정렬해서",
      "Map은 키를 미리 컴파일해 두어서",
      "객체의 delete가 프로토타입 체인 전체를 지워서",
      "V8이 키가 고정된 객체에 쓰는 숨은 클래스 최적화를 버리고 느린 사전 모드로 바꿔서",
    ],
    answer: 3,
    explanation:
      "V8은 속성 이름이 정해진 객체를 숨은 클래스로 다뤄 빠르게 읽지만, 키가 계속 바뀌고 delete가 섞이면 사전 모드로 바꾼다. Map은 처음부터 키가 자주 바뀌는 해시 표로 만들어졌다. 측정에서 객체는 1초가 넘었고 Map은 0.2초대였다.",
    anchor: "얼마나-빠른가",
  },
  {
    id: "js-map-set-weak-5",
    post: "js-map-set-weak",
    question: "WeakMap에 node를 키로, { owner: node }를 값으로 넣었다. node가 화면에서 지워지고 다른 참조가 없어지면?",
    choices: [
      "값이 키를 가리키고 있어서 둘 다 계속 남는다",
      "키와 값이 함께 치워질 수 있다. 값에서 키로 가는 참조는 키를 살리는 근거가 아니다",
      "값만 남고 키만 치워진다",
      "WeakMap.clear()를 불러야 치워진다",
    ],
    answer: 1,
    explanation:
      "WeakMap의 항목은 키가 살아 있을 때만 값도 사는 에페메론 규칙을 따른다. 값이 키를 다시 가리켜도 키를 살려 두지 못해서, 5만 개 노드 실험에서 Map은 26.9MB를 붙잡았고 WeakMap은 대부분 비웠다. WeakMap에는 clear 메서드가 없다.",
    anchor: "weakmap은-키를-붙잡지-않는다",
  },
  {
    id: "js-map-set-weak-6",
    post: "js-map-set-weak",
    question: "WeakMap에 size와 keys()가 없는 이유는?",
    choices: [
      "GC가 언제 도는지가 프로그램 결과로 새어 나와 실행마다, 엔진마다 다른 값을 내지 않게 하려고",
      "구현이 어려워 아직 표준에 넣지 못해서",
      "키가 원시값일 수 있어 셀 수 없어서",
      "성능 때문에 Map에서만 제공해서",
    ],
    answer: 0,
    explanation:
      "항목이 사라지는 시점은 GC가 정하니 size나 순회를 허용하면 같은 코드의 결과가 GC 타이밍에 따라 달라진다. 키를 들고 있어야만 get할 수 있게 하면 결과가 항상 같다. 세거나 돌아야 하는 캐시라면 크기 제한을 둔 Map을 쓴다.",
    anchor: "셀-수도-돌-수도-없는-이유",
  },
  {
    id: "js-map-set-weak-7",
    post: "js-map-set-weak",
    question: "JSON.stringify({ m: new Map([[\"a\", 1]]) })의 결과는?",
    choices: [
      "{\"m\":[[\"a\",1]]}",
      "{\"m\":{\"a\":1}}",
      "{\"m\":{}}",
      "TypeError가 난다",
    ],
    answer: 2,
    explanation:
      "JSON.stringify는 열거 가능한 자기 속성만 적는데 Map의 데이터는 내부 슬롯에 있어 에러 없이 빈 객체가 된다. [...map]으로 [키, 값] 배열을 보내고 new Map(배열)로 되살리면 키 타입과 순서가 지켜진다.",
    anchor: "json으로-보내면-빈-객체가-된다",
  },
];
