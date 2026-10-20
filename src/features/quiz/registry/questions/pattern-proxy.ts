import type { QuizQuestion } from "../types";

export const PATTERN_PROXY: QuizQuestion[] = [
  {
    id: "pattern-proxy-1",
    post: "pattern-proxy",
    question: "생성자에서 300ms를 쓰는 렌더러가 대부분의 프로세스에서 한 번도 쓰이지 않는다. 부르는 쪽 코드를 고치지 않고 시작 시간을 줄이려면?",
    choices: [
      "렌더러를 싱글턴으로 바꾼다",
      "같은 인터페이스의 대리인을 주입하고, 첫 호출에서 진짜 렌더러를 만든다",
      "렌더러를 감싸는 데코레이터를 여러 겹 쌓는다",
      "렌더러 생성자를 async로 바꾼다",
    ],
    answer: 1,
    explanation:
      "가상 프록시는 진짜 객체와 같은 인터페이스를 구현하고 처음 불릴 때 진짜를 만든다. 비용은 첫 호출로 옮겨 가고, 한 번도 쓰지 않는 프로세스는 비용을 내지 않는다. 싱글턴은 개수를 줄일 뿐 생성 시점을 미루지 않는다.",
    anchor: "처음-부를-때-만든다",
  },
  {
    id: "pattern-proxy-2",
    post: "pattern-proxy",
    question: "비동기로 초기화하는 지연 프록시에서 `if (!this.real) this.real = await load()`로 썼더니 동시 요청 세 개에 load()가 세 번 불렸다. 고치는 방법은?",
    choices: [
      "await 대신 then을 쓴다",
      "load()를 동기 함수로 바꾼다",
      "인스턴스 대신 load()가 돌려준 Promise를 저장하고 모두 그것을 기다리게 한다",
      "요청마다 새 프록시를 만든다",
    ],
    answer: 2,
    explanation:
      "await에서 멈춘 사이 다른 호출도 this.real이 비어 있는 것을 보고 각자 초기화를 시작한다. Promise를 바로 저장하면 뒤의 호출은 진행 중인 초기화를 함께 기다린다. 실패한 Promise는 비워 다시 시도할 수 있게 한다.",
    anchor: "처음-부를-때-만든다",
  },
  {
    id: "pattern-proxy-3",
    post: "pattern-proxy",
    question: "자바스크립트 Proxy의 get 함정에서 `t[prop]` 대신 `Reflect.get(t, prop, receiver)`로 넘기는 이유는?",
    choices: [
      "getter 안의 this를 프록시로 유지해 그 안의 속성 읽기도 가로채려고",
      "Reflect.get이 더 빠르기 때문에",
      "t[prop]은 심볼 속성을 읽지 못하기 때문에",
      "Reflect.get을 쓰지 않으면 Proxy 생성이 실패하기 때문에",
    ],
    answer: 0,
    explanation:
      "t[prop]으로 넘기면 getter가 원본을 this로 실행해서 getter 안에서 읽은 속성이 프록시를 우회한다. receiver를 넘기면 this가 프록시로 남는다. Vue 3가 getter 안의 의존성까지 추적하는 방법이다.",
    anchor: "언어가-내장한-대리인-proxy-객체",
  },
  {
    id: "pattern-proxy-4",
    post: "pattern-proxy",
    question: "Vue 3에서 `const state = reactive(raw)` 뒤에 `raw.count++`를 하면 화면은 어떻게 되나?",
    choices: [
      "즉시 다시 그려진다",
      "다음 tick에 다시 그려진다",
      "에러가 난다",
      "다시 그려지지 않는다. 원본 변경은 set 함정을 지나지 않기 때문이다",
    ],
    answer: 3,
    explanation:
      "reactive는 원본의 Proxy를 돌려주고, 변경 감지는 Proxy의 set 함정에서만 일어난다. 원본을 직접 바꾸면 값은 바뀌지만 장부를 보고 effect를 다시 실행하는 일이 없다. 다음에 프록시로 바꿀 때 값이 건너뛰어 그려진다.",
    anchor: "vue-3의-reactive는-대리인이-장부를-적는-것이다",
  },
  {
    id: "pattern-proxy-5",
    post: "pattern-proxy",
    question: "Spring 빈 안에서 `this.saveOrder()`로 부른 @Transactional 메서드에 트랜잭션이 걸리지 않는 이유는?",
    choices: [
      "@Transactional은 public 메서드에만 붙일 수 있어서",
      "트랜잭션은 빈을 감싼 프록시가 처리하는데, 내부 호출의 this는 프록시가 아닌 진짜 빈이라서",
      "같은 클래스 안에서는 트랜잭션이 중첩될 수 없어서",
      "saveOrder가 먼저 컴파일되어서",
    ],
    answer: 1,
    explanation:
      "Spring AOP 프록시는 바깥에서 들어온 호출만 가로채고 진짜 빈에 넘긴다. 진짜 빈 안에서 this로 부른 호출은 프록시를 지나지 않는다. 메서드를 다른 빈으로 옮겨 프록시를 거치게 하는 것이 가장 단순한 해결이다.",
    anchor: "대리인을-건너뛰는-호출",
  },
  {
    id: "pattern-proxy-6",
    post: "pattern-proxy",
    question: "ORM이 지연 로딩으로 돌려준 연관 엔티티를 주문 100건마다 읽었더니 쿼리가 101번 나갔다. 무엇이 일어난 것인가?",
    choices: [
      "프록시마다 처음 필드를 읽을 때 SELECT를 보내는 N+1 문제",
      "트랜잭션 격리 수준이 너무 높아서 생긴 재시도",
      "캐싱 프록시의 TTL이 지나서 생긴 재조회",
      "커넥션 풀이 고갈되어 생긴 재연결",
    ],
    answer: 0,
    explanation:
      "지연 로딩된 연관은 id만 가진 가상 프록시이고, 다른 필드를 처음 읽을 때 쿼리를 보낸다. 목록 조회 1번에 프록시 100개가 각자 1번씩 쿼리를 보내 101번이 된다. 필요한 연관은 fetch join이나 배치 로딩으로 미리 가져온다.",
    anchor: "orm이-건네준-가짜-엔티티",
  },
];
