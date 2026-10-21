import type { QuizQuestion } from "../types";

export const PATTERN_MEMENTO: QuizQuestion[] = [
  {
    id: "pattern-memento-1",
    post: "pattern-memento",
    question:
      "도형 300개를 한꺼번에 옮기는 '자동 정렬'을 되돌려야 한다. 정렬 알고리즘을 거꾸로 돌릴 방법은 없다. 가장 알맞은 패턴은?",
    choices: [
      "누르기 직전의 상태를 떼어 두었다가 그대로 복원하는 메멘토",
      "명령마다 undo()를 짜는 커맨드",
      "정렬 방식을 갈아 끼우는 전략",
      "도형 객체를 공유하는 플라이웨이트",
    ],
    answer: 0,
    explanation:
      "커맨드로 되돌리려면 명령마다 역연산을 짜야 하는데 자동 정렬에는 역연산이 없다. 메멘토는 계산으로 되돌리지 않고 직전 모습을 통째로 기억했다가 붙이니, 무엇이 바뀌었는지 몰라도 되돌릴 수 있다.",
    anchor: "저장은-하되-안을-들여다보지-않는다",
  },
  {
    id: "pattern-memento-2",
    post: "pattern-memento",
    question: "메멘토 패턴에서 관리인(Caretaker)이 메멘토 안의 상태를 읽거나 고치지 못하게 하는 이유는?",
    choices: [
      "관리인은 메멘토를 직렬화할 수 없어서",
      "메모리를 아끼려고",
      "관리인이 원조자의 내부 구조에 묶이고, 저장된 상태를 고치면 저장한 적 없는 모습으로 복원되기 때문에",
      "메멘토는 항상 암호화되어 있어서",
    ],
    answer: 2,
    explanation:
      "실행 기록이 도형 배열 구조를 알면 저장 방식이 바뀔 때 함께 고쳐야 하고, 꾸러미를 직접 고치는 코드가 생기면 복원 결과를 믿을 수 없다. 그래서 꾸러미를 열 수 있는 쪽은 원조자 하나로 둔다.",
    anchor: "저장은-하되-안을-들여다보지-않는다",
  },
  {
    id: "pattern-memento-3",
    post: "pattern-memento",
    question: "const snapshot = { ...canvas } 로 저장한 뒤 canvas.shapes[0].x = 300을 했더니 되돌리기가 아무 효과가 없다. 원인은?",
    choices: [
      "스프레드 연산자는 객체를 복사하지 않아서",
      "얕은 복사라 snapshot.shapes가 원본과 같은 배열을 가리켜서",
      "x 값이 숫자라 복사되지 않아서",
      "canvas가 freeze되어 있어서",
    ],
    answer: 1,
    explanation:
      "스프레드는 맨 바깥 객체만 새로 만들고 안쪽 배열과 객체는 그대로 공유한다. 그래서 저장 뒤의 변경이 꾸러미에도 보인다. 저장할 때와 복원할 때 모두 원본과 공유하는 것이 없게 떼어 내야 한다.",
    anchor: "얕은-복사로-떼어-둔-꾸러미는-같이-바뀐다",
  },
  {
    id: "pattern-memento-4",
    post: "pattern-memento",
    question: "1만 행 표를 500번 고칠 때 매번 structuredClone으로 꾸러미를 남기던 것을 불변 업데이트로 바꾸면 무엇이 달라지나?",
    choices: [
      "이전 상태 객체를 그대로 꾸러미로 쓰고 바뀌지 않은 행은 공유해서 메모리와 시간이 크게 준다",
      "꾸러미가 원본과 함께 바뀌어 되돌리기가 망가진다",
      "메모리는 같지만 복원만 빨라진다",
      "행이 많을수록 불변 업데이트가 더 많은 메모리를 쓴다",
    ],
    answer: 0,
    explanation:
      "불변 업데이트는 바뀐 행과 그 배열만 새로 만들고 나머지 9,999행은 이전 상태와 공유한다. 실험에서 힙 증가가 약 660MB에서 약 40MB로, 시간은 100분의 1로 줄었다. 남은 비용은 행 배열을 매번 복사한 것이라 더 크면 영속 자료 구조를 쓴다.",
    anchor: "바뀐-곳만-새로-만들면-꾸러미가-싸진다",
  },
  {
    id: "pattern-memento-5",
    post: "pattern-memento",
    question:
      "localStorage에 저장한 주문서 초안이 배포 다음 날 'Cannot read properties of undefined (reading map)' 오류를 낸다. 근본적인 대책은?",
    choices: [
      "localStorage 대신 sessionStorage를 쓴다",
      "초안을 저장하지 않는다",
      "복원할 때 try...catch로 감싸기만 한다",
      "꾸러미에 형식 버전을 넣고, 버전별 변환 함수를 두고, 모르는 버전은 버린다",
    ],
    answer: 3,
    explanation:
      "메모리 속 메멘토와 달리 저장된 메멘토는 만든 코드와 여는 코드의 버전이 다를 수 있다. 버전을 보고 고쳐서 쓸지 버릴지 정해야 한다. try...catch만으로는 오류는 막아도 아는 옛 형식의 초안까지 잃는다.",
    anchor: "저장한-꾸러미를-지난-버전-코드가-열-때",
  },
  {
    id: "pattern-memento-6",
    post: "pattern-memento",
    question: "메멘토 내용을 숨기려고 TypeScript의 private 필드를 썼다. 실행 중 JSON.stringify(memento)를 하면?",
    choices: [
      "TypeError가 난다",
      "{}가 출력된다",
      "private 필드는 실행할 때 보통 속성이라 그대로 출력된다",
      "private 필드는 빈 문자열로 바뀐다",
    ],
    answer: 2,
    explanation:
      "TypeScript의 private은 컴파일할 때만 접근을 막고 실행할 때는 보통 속성이다. 실행 중에도 감추려면 자바스크립트의 # 필드나 모듈 밖으로 내보내지 않는 WeakMap을 쓴다.",
    anchor: "ts의-private은-꾸러미를-잠그지-못한다",
  },
];
