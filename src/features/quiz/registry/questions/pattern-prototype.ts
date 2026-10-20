import type { QuizQuestion } from "../types";

export const PATTERN_PROTOTYPE: QuizQuestion[] = [
  {
    id: "pattern-prototype-1",
    post: "pattern-prototype",
    question: "편집기의 복제 기능에서 switch(shape.kind) 대신 shape.clone()을 부르게 바꾸면 얻는 것은?",
    choices: [
      "새 도형이 자기 clone()만 구현하면 복제 기능을 고치지 않아도 된다",
      "복제가 항상 깊은 복사가 된다",
      "도형 클래스를 하나로 합칠 수 있다",
      "복제한 객체가 원본과 같은 id를 갖는다",
    ],
    answer: 0,
    explanation:
      "편집기는 구체 클래스를 모른 채 clone()만 부르니, 도형이 늘어도 분기가 늘지 않는다. 얼마나 깊게 복사할지, id를 새로 받을지는 각 클래스가 clone() 안에서 정한다.",
    anchor: "복사할-줄-아는-건-객체-자신이다",
  },
  {
    id: "pattern-prototype-2",
    post: "pattern-prototype",
    question: "linked = Object.create(base)로 만든 뒤 base.variant를 바꾸면 linked.variant는 어떻게 되나?",
    choices: [
      "만들 때 복사한 예전 값이 그대로 남는다",
      "바뀐 값이 보인다. linked는 base를 복사하지 않고 연결만 했기 때문이다",
      "undefined가 된다",
      "TypeError가 난다",
    ],
    answer: 1,
    explanation:
      "프로토타입 체인은 복사가 아니라 위임이다. linked에 없는 속성은 base에 물어보니 base가 바뀌면 linked에서도 바뀐 값이 보인다. 프로토타입 패턴의 clone()은 반대로 독립된 사본을 만든다.",
    anchor: "자바스크립트의-프로토타입과는-다른-이야기",
  },
  {
    id: "pattern-prototype-3",
    post: "pattern-prototype",
    question: "{ ...defaults }로 만든 설정에 headers.authorization을 넣었더니 다음 사용자 설정에도 토큰이 들어 있었다. 원인은?",
    choices: [
      "펼침 연산자가 깊은 복사를 해서",
      "authorization 헤더가 전역 변수라서",
      "펼침 연산자는 첫 층만 복사해 headers 객체를 원본과 같이 쓰기 때문에",
      "JSON 직렬화가 일어나서",
    ],
    answer: 2,
    explanation:
      "펼침 연산자와 Object.assign은 한 층만 복사하고 안쪽 객체는 참조만 복사한다. 사본의 headers를 고치면 원본 defaults의 headers가 바뀐다. 안쪽을 고칠 거라면 structuredClone처럼 깊게 복사해야 한다.",
    anchor: "얕은-복사가-기본값을-오염시킨다",
  },
  {
    id: "pattern-prototype-4",
    post: "pattern-prototype",
    question: "JSON.parse(JSON.stringify(x))로 복사했을 때 에러 없이 조용히 생기는 문제는?",
    choices: [
      "Date가 문자열이 되고 Map과 Set이 빈 객체가 된다",
      "숫자가 문자열로 바뀐다",
      "배열 순서가 섞인다",
      "중첩 객체가 원본과 참조를 공유한다",
    ],
    answer: 0,
    explanation:
      "JSON에는 Date, Map, Set을 나타낼 방법이 없어서 문자열과 빈 객체로 바뀌고 undefined 필드는 사라진다. 에러가 나지 않으니 나중에 getTime is not a function 같은 에러로 드러난다. BigInt와 순환 참조에서만 바로 에러가 난다.",
    anchor: "깊은-복사-도구마다-잃어버리는-것",
  },
  {
    id: "pattern-prototype-5",
    post: "pattern-prototype",
    question: "#id 비공개 필드를 가진 클래스 인스턴스를 Object.assign(Object.create(proto), obj)로 복사한 뒤 메서드를 부르면?",
    choices: [
      "정상 동작한다",
      "메서드가 없어서 is not a function 에러가 난다",
      "메서드는 있지만 #id를 읽다가 TypeError가 난다",
      "원본 객체의 #id를 같이 쓴다",
    ],
    answer: 2,
    explanation:
      "프로토타입을 이어 붙였으니 메서드는 찾지만, 생성자를 거치지 않아 #id 비공개 필드는 사본에 없다. 그래서 Cannot read private member 에러가 난다. 클래스에 clone()을 두고 생성자를 거쳐 만들어야 한다.",
    anchor: "클래스-인스턴스는-스스로-복제해야-한다",
  },
  {
    id: "pattern-prototype-6",
    post: "pattern-prototype",
    question: "측정 결과로 볼 때 프로토타입 복제가 새로 만드는 것보다 확실히 빨랐던 경우는?",
    choices: [
      "블록 2,000개짜리 문서를 structuredClone으로 통째로 복사할 때",
      "파일을 읽고 정규식을 컴파일해 둔 필터를 복제하며 컴파일된 부분은 같이 쓸 때",
      "작은 객체를 JSON으로 왕복할 때",
      "모든 필드를 깊게 복사할 때",
    ],
    answer: 1,
    explanation:
      "객체 그래프 전체를 새로 할당하면 복제도 재생성만큼 비싸고, structuredClone은 JSON 재파싱보다 느렸다. 비싼 준비를 한 번 끝낸 원형에서 바뀌지 않는 무거운 부분은 같이 쓰고 바뀌는 부분만 복사할 때 차이가 컸다.",
    anchor: "복제가-정말-빠른가",
  },
];
