import type { QuizQuestion } from "../types";

export const FUNCTIONAL_PROGRAMMING_BASICS: QuizQuestion[] = [
  {
    id: "functional-programming-basics-1",
    post: "functional-programming-basics",
    question:
      "합계·개수·최댓값을 한 for 문에서 함께 계산하는 리포트에 `if (취소) continue;`를 `total +=` 아래에 넣었다. 무엇이 틀어지나?",
    choices: [
      "개수와 최댓값에서만 빠지고 합계에는 취소 주문이 들어간다",
      "취소 주문이 모든 계산에서 빠진다",
      "반복문이 첫 취소 주문에서 끝난다",
      "합계에서만 빠지고 개수에는 들어간다",
    ],
    answer: 0,
    explanation:
      "continue는 그 아래 줄만 건너뛰니 이미 실행된 total += 는 취소 주문도 더한다. 여러 계산이 한 반복문의 줄 순서에 묶여 있어서 생긴 버그이고, 거르기를 첫 단계로 빼면 모든 계산이 같은 입력을 보게 된다.",
    anchor: "변수-세-개가-한-반복문을-나눠-쓴다",
  },
  {
    id: "functional-programming-basics-2",
    post: "functional-programming-basics",
    question: "다음 중 선언형(declarative) 방식에 가장 가까운 것은?",
    choices: [
      "인덱스 변수를 만들고 조건마다 합계 변수를 고치는 for 문",
      "while 문으로 배열 끝까지 돌며 결과 배열에 push한다",
      "`SELECT SUM(total) FROM orders WHERE status <> 'cancelled'`",
      "forEach 안에서 바깥 변수에 값을 더한다",
    ],
    answer: 2,
    explanation:
      "선언형은 결과가 무엇인지를 적고 어떤 순서로 처리할지는 엔진에 맡긴다. forEach로 바깥 변수를 고치는 건 반복문을 메서드로 바꿔 썼을 뿐 여전히 명령형이다.",
    anchor: "어떻게-대신-무엇을-쓴다",
  },
  {
    id: "functional-programming-basics-3",
    post: "functional-programming-basics",
    question:
      "메서드가 있는 Cart 클래스 인스턴스를 postMessage로 워커에 보냈다. 워커에서 `data.total()`을 부르면?",
    choices: [
      "프로토타입까지 복제되어 정상 동작한다",
      "structured clone이 데이터 속성만 복사해 total이 없으니 TypeError가 난다",
      "DataCloneError가 나서 메시지가 보내지지 않는다",
      "total이 undefined를 돌려준다",
    ],
    answer: 1,
    explanation:
      "structured clone과 JSON은 자기 속성의 값만 옮기고 프로토타입은 따라가지 않는다. 그래서 받은 쪽은 평범한 객체를 받고, 메서드를 부르면 TypeError다. 데이터와 계산 함수를 떼어 두면 어느 경계를 지나도 같은 함수로 계산할 수 있다.",
    anchor: "데이터와-동작을-떼어-두면-생기는-일",
  },
  {
    id: "functional-programming-basics-4",
    post: "functional-programming-basics",
    question:
      "`const c = Object.freeze({ retry: 3, endpoints: { api: \"/api\" } })` 뒤에 sloppy 모드에서 `c.endpoints.api = \"/x\"`를 하면?",
    choices: [
      "TypeError가 난다",
      "조용히 무시되고 \"/api\"가 남는다",
      "c 전체가 새 객체로 바뀐다",
      "값이 \"/x\"로 바뀐다",
    ],
    answer: 3,
    explanation:
      "Object.freeze는 겉 객체의 속성 칸만 얼리고 안쪽 객체까지 얼리지는 않는다. 그래서 endpoints 안의 값은 그대로 바뀐다. TypeError는 strict 모드에서 얼린 칸 자체에 대입할 때 난다.",
    anchor: "자바스크립트가-함수형을-강제하지-않는-곳",
  },
  {
    id: "functional-programming-basics-5",
    post: "functional-programming-basics",
    question: "원소 100만 개 배열을 꼬리 재귀로 더하는 함수를 Node 22와 Bun(JavaScriptCore)에서 돌리면?",
    choices: [
      "둘 다 꼬리 호출 최적화로 끝까지 더한다",
      "Node는 RangeError가 나고 Bun은 결과를 돌려준다",
      "둘 다 RangeError가 난다",
      "Node는 결과를 돌려주고 Bun은 RangeError가 난다",
    ],
    answer: 1,
    explanation:
      "proper tail calls는 ES2015 명세에 있지만 V8은 구현하지 않았고 JavaScriptCore는 구현했다. 그래서 크롬과 Node.js 대상 코드는 깊이를 모르는 데이터에 재귀를 쓰지 않는다.",
    anchor: "자바스크립트가-함수형을-강제하지-않는-곳",
  },
  {
    id: "functional-programming-basics-6",
    post: "functional-programming-basics",
    question: "`rows.map((r) => r.price).map((p) => p.replace(...))`에서 에러가 났는데 스택 첫 줄에 함수 이름이 없다. 가장 좋은 대책은?",
    choices: [
      "체인을 하나의 reduce로 합친다",
      "try/catch로 각 람다를 감싸 에러를 삼킨다",
      "단계 함수에 이름을 붙여 넘긴다 (`map(stripComma)`)",
      "화살표 함수 대신 bind를 쓴다",
    ],
    answer: 2,
    explanation:
      "이름 없는 람다는 스택에 파일의 줄·열 번호로만 남아서 같은 줄의 어느 단계인지 짐작해야 한다. 이름을 붙이면 `at stripComma`처럼 첫 줄에 단계 이름이 찍힌다. reduce 하나로 합치면 오히려 읽기 어려워진다.",
    anchor: "함수형으로-쓰면-비싸지는-곳",
  },
];
