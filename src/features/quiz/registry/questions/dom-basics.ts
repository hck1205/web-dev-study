import type { QuizQuestion } from "../types";

export const DOM_BASICS: QuizQuestion[] = [
  {
    id: "dom-basics-1",
    post: "dom-basics",
    question:
      "todo 클래스가 붙은 li 네 개에서 getElementsByClassName(\"todo\")로 받은 items를 for (let i = 0; i < items.length; i++)로 돌며 클래스를 지웠다. 몇 개가 지워지나?",
    choices: [
      "네 개 모두 지워진다",
      "두 개만 지워진다. 지울 때마다 목록이 줄어 인덱스가 밀린다",
      "하나도 지워지지 않는다. HTMLCollection은 읽기 전용이다",
      "첫 번째만 지워지고 에러가 난다",
    ],
    answer: 1,
    explanation:
      "getElementsByClassName은 DOM을 따라 바뀌는 live HTMLCollection을 준다. 클래스를 지운 요소가 목록에서 빠지며 뒤 항목이 당겨지므로 하나씩 건너뛰게 된다. querySelectorAll로 찍어 둔 목록을 돌거나 배열로 바꿔 돌면 모두 지워진다.",
    anchor: "찾는-방법마다-돌려주는-것이-다르다",
  },
  {
    id: "dom-basics-2",
    post: "dom-basics",
    question: "다음 중 DOM이 바뀌면 따라 바뀌는(live) 목록을 돌려주는 것은?",
    choices: [
      "document.querySelectorAll(\"li\")",
      "Array.from(list.children)",
      "list.childNodes",
      "[...document.getElementsByTagName(\"li\")]",
    ],
    answer: 2,
    explanation:
      "childNodes는 NodeList지만 live다. NodeList라는 이름만으로 static이라고 판단하면 틀린다. 찍어 둔 목록은 querySelectorAll이 돌려준 것뿐이고, Array.from이나 전개로 만든 배열은 그 순간의 복사본이다.",
    anchor: "찾는-방법마다-돌려주는-것이-다르다",
  },
  {
    id: "dom-basics-3",
    post: "dom-basics",
    question:
      "<input value=\"kim\">에 사용자가 lee를 입력했다. 그다음 getAttribute(\"value\")와 .value는 각각 무엇인가?",
    choices: ["kim, lee", "lee, lee", "kim, kim", "lee, kim"],
    answer: 0,
    explanation:
      "value 속성은 처음 값(defaultValue)으로 남고, 입력한 값은 value 프로퍼티에만 반영된다. 그래서 폼 값은 .value로 읽는다. 이 뒤에 속성을 바꿔도 이미 입력한 화면 값은 움직이지 않는다.",
    anchor: "속성과-프로퍼티는-다른-값이다",
  },
  {
    id: "dom-basics-4",
    post: "dom-basics",
    question: "상자 200개의 폭을 1px씩 늘릴 때 레이아웃이 가장 적게 일어나는 코드는?",
    choices: [
      "반복문 안에서 b.style.width = (b.offsetWidth + 1) + \"px\"",
      "반복문 안에서 getBoundingClientRect()로 폭을 읽고 바로 쓴다",
      "반복문 안에서 innerText를 읽어 확인한 뒤 폭을 쓴다",
      "먼저 200개의 offsetWidth를 모두 읽고, 그다음 반복문에서 폭만 쓴다",
    ],
    answer: 3,
    explanation:
      "쓰기는 표시만 남기고, 표시가 남은 상태에서 크기를 읽으면 그 자리에서 레이아웃을 강제한다. 번갈아 하면 200번, 먼저 다 읽고 한 번에 쓰면 1번이었다. innerText도 화면을 알아야 해서 레이아웃을 강제한다.",
    anchor: "dom을-바꾸면-화면은-나중에-바뀐다",
  },
  {
    id: "dom-basics-5",
    post: "dom-basics",
    question: "반복문에서 div 1,000개를 하나씩 append했다(크기는 읽지 않았다). 레이아웃은 몇 번 일어나나?",
    choices: [
      "1,000번. append마다 리플로가 일어난다",
      "한 번. 브라우저가 쓰기를 모아 두었다가 처리한다",
      "0번. DocumentFragment를 쓰지 않으면 화면에 나오지 않는다",
      "500번. 두 번에 한 번꼴로 묶인다",
    ],
    answer: 1,
    explanation:
      "넣기만 하고 크기를 읽지 않으면 브라우저는 다음 프레임에 한 번만 레이아웃을 한다. 리플로를 부르는 건 넣는 행위가 아니라 넣은 뒤 크기를 읽는 행위다. 매번 offsetHeight를 읽게 바꾸면 1,000번이 된다.",
    anchor: "dom을-바꾸면-화면은-나중에-바뀐다",
  },
  {
    id: "dom-basics-6",
    post: "dom-basics",
    question: "head 안의 스크립트에서 document.querySelector(\"#app\").textContent = \"hi\"가 TypeError를 내는 이유는?",
    choices: [
      "head에서는 querySelector를 쓸 수 없다",
      "#app이 head 안에 없어서 찾는 범위를 벗어났다",
      "파서가 아직 #app까지 읽지 않아 트리에 없으므로 null이 돌아왔다",
      "textContent는 body 안의 요소에만 쓸 수 있다",
    ],
    answer: 2,
    explanation:
      "파서는 위에서부터 트리를 만들다 스크립트를 만나면 멈추고 실행한다. 그 시점에는 아래 요소가 없어 querySelector가 null을 준다. defer, type=\"module\", DOMContentLoaded 중 하나로 실행 시점을 늦추면 된다.",
    anchor: "현장에서-이-구조를-만나는-순간",
  },
];
