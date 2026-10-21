import type { QuizQuestion } from "../types";

export const JS_CLOSURES: QuizQuestion[] = [
  {
    id: "js-closures-1",
    post: "js-closures",
    question:
      "`const a = makeCounter(); const b = makeCounter(); a.increment(); a.increment();` 뒤에 `a.get()`과 `b.get()`은? (makeCounter는 지역 변수 count를 0으로 두고 increment, get을 돌려준다)",
    choices: ["2와 2", "2와 0", "0과 0", "2와 undefined"],
    answer: 1,
    explanation:
      "makeCounter를 호출할 때마다 새 Environment Record가 생기고, 돌려준 함수들은 자기 호출의 Record를 가리킨다. 그래서 a와 b의 count는 서로 다른 칸이다.",
    anchor: "호출이-끝나도-상자는-남는다",
  },
  {
    id: "js-closures-2",
    post: "js-closures",
    question: "`let price = 1000; const show = () => price; price = 2000;` 뒤에 `show()`는?",
    choices: [
      "1000. 클로저는 만들 때의 값을 복사해 둔다",
      "undefined. price가 다시 대입되며 연결이 끊긴다",
      "ReferenceError",
      "2000. 클로저는 변수 자체를 가리킨다",
    ],
    answer: 3,
    explanation:
      "클로저가 기억하는 건 값의 사진이 아니라 변수 칸이다. 그래서 나중에 대입한 2000을 읽는다. 같은 스코프의 클로저들은 같은 칸을 공유한다.",
    anchor: "값이-아니라-변수를-잡는다",
  },
  {
    id: "js-closures-3",
    post: "js-closures",
    question: "`for (var i = 0; i < 3; i++) fns.push(() => i);` 뒤에 `fns.map((f) => f())`는?",
    choices: ["[3, 3, 3]", "[0, 1, 2]", "[2, 2, 2]", "[undefined, undefined, undefined]"],
    answer: 0,
    explanation:
      "var i는 함수 스코프에 하나뿐이라 세 함수가 같은 칸을 잡고, 부를 때는 반복이 끝나 3이다. let이었다면 반복마다 새 칸이 생겨 [0, 1, 2]가 된다.",
    anchor: "반복문-안에서-만든-함수",
  },
  {
    id: "js-closures-4",
    post: "js-closures",
    question:
      "`useEffect(() => { setInterval(() => setCount(count + 1), 1000); }, [])`로 만든 타이머가 1에서 멈춘다. 가장 정확한 원인은?",
    choices: [
      "클로저가 count 값을 복사해 두었기 때문이다",
      "setInterval이 한 번만 실행되기 때문이다",
      "렌더링마다 새 count가 생기는데 콜백은 첫 렌더링의 count를 계속 가리키기 때문이다",
      "React가 interval 안의 setState를 무시하기 때문이다",
    ],
    answer: 2,
    explanation:
      "함수 컴포넌트는 렌더링마다 호출되어 그때마다 새 count 칸이 생긴다. 의존성이 []라 effect는 한 번만 돌고, 그때 만든 콜백은 렌더링 1의 count 0을 계속 읽어 setCount(1)만 반복한다.",
    anchor: "react-컴포넌트에서-오래된-값을-보는-이유",
  },
  {
    id: "js-closures-5",
    post: "js-closures",
    question:
      "웹소켓 구독 effect 안의 콜백에서 최신 props를 읽어야 하지만, props가 바뀔 때마다 연결을 다시 맺고 싶지는 않다. 알맞은 방법은?",
    choices: [
      "의존성 배열에 props를 넣는다",
      "useEffectEvent로 감싼 함수에서 props를 읽는다 (또는 ref에 최신 값을 담는다)",
      "exhaustive-deps 경고를 끄고 의존성을 비운다",
      "콜백을 useCallback으로 감싸고 의존성을 비운다",
    ],
    answer: 1,
    explanation:
      "의존성에 넣으면 값이 바뀔 때마다 effect가 정리되고 다시 돌아 연결도 다시 맺는다. useEffectEvent로 감싼 함수는 effect를 다시 돌리지 않고도 최신 렌더링 값을 본다. 경고를 끄거나 의존성을 비우면 오래된 값을 읽게 된다.",
    anchor: "react-컴포넌트에서-오래된-값을-보는-이유",
  },
  {
    id: "js-closures-6",
    post: "js-closures",
    question: "클로저로 상태를 숨긴 카운터와 #private 필드를 쓴 클래스를 각각 10만 개 만들 때의 차이로 맞는 것은?",
    choices: [
      "클로저 쪽은 인스턴스마다 메서드 함수가 새로 생겨 메모리를 더 쓴다",
      "클래스 쪽은 인스턴스마다 메서드를 복사해 메모리를 더 쓴다",
      "둘 다 메서드를 프로토타입에서 공유해 차이가 없다",
      "클로저 쪽은 GC가 수거하지 못해 계속 늘어난다",
    ],
    answer: 0,
    explanation:
      "클로저 방식은 호출마다 increment와 get 함수 객체를 새로 만든다. 클래스는 메서드를 프로토타입 하나에 두고 공유해서, 측정에서 약 19MB 대 4MB로 차이가 났다. 대신 클로저 방식은 this에 기대지 않아 메서드를 떼어 넘겨도 깨지지 않는다.",
    anchor: "클로저로-만드는-것들",
  },
  {
    id: "js-closures-7",
    post: "js-closures",
    question: "V8에서 클로저가 바깥 변수를 들고 있는 방식에 대한 설명으로 맞는 것은?",
    choices: [
      "바깥 함수의 지역 변수를 전부 힙에 남긴다",
      "클로저마다 쓰는 변수를 따로 복사해 둔다",
      "변수는 항상 스택에 있고 클로저는 스택 주소를 기억한다",
      "안쪽 함수가 쓰는 변수만 Context에 두고, 같은 스코프의 클로저들은 그 Context를 공유한다",
    ],
    answer: 3,
    explanation:
      "V8은 파싱할 때 안쪽 함수가 쓰는 바깥 변수를 찾아 그것만 힙의 Context에 둔다. 같은 스코프의 클로저들은 Context 하나를 같이 써서, 한 클로저가 쓰는 큰 데이터를 다른 클로저가 붙잡아 둘 수 있다.",
    anchor: "엔진이-실제로-남기는-것",
  },
];
