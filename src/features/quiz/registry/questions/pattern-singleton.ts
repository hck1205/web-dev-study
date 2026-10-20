import type { QuizQuestion } from "../types";

export const PATTERN_SINGLETON: QuizQuestion[] = [
  {
    id: "pattern-singleton-1",
    post: "pattern-singleton",
    question: "Next.js 개발 서버에서 파일을 저장할 때마다 DB 연결이 늘어나다 too many clients 에러가 났다. 모듈 최상위에 new Pool()이 한 줄뿐일 때 가장 그럴듯한 원인은?",
    choices: [
      "Pool의 max 값이 너무 작아서",
      "개발 서버가 바뀐 모듈을 다시 평가하면서 풀을 새로 만들고, 이전 풀은 연결을 쥔 채 남아서",
      "요청마다 import가 실행되어 풀이 새로 만들어져서",
      "PostgreSQL이 개발 모드에서는 연결을 재사용하지 않아서",
    ],
    answer: 1,
    explanation:
      "모듈은 한 번 평가되고 캐시되지만, 개발 서버는 파일이 바뀌면 그 모듈을 다시 평가한다. 그래서 new Pool()이 다시 실행되고 이전 풀은 소켓을 연 채 남는다. import는 요청마다 다시 실행되지 않는다.",
    anchor: "자바스크립트에서는-모듈이-이미-하나다",
  },
  {
    id: "pattern-singleton-2",
    post: "pattern-singleton",
    question: "앱이 설정한 싱글턴 값을 플러그인이 undefined로 읽는다. 에러는 없다. 먼저 확인해 볼 것은?",
    choices: [
      "싱글턴의 생성자가 private인지",
      "getInstance가 async인지",
      "같은 패키지가 node_modules에 두 벌 깔려 있는지",
      "플러그인이 setTimeout 안에서 값을 읽는지",
    ],
    answer: 2,
    explanation:
      "모듈 캐시의 키는 해석된 파일 경로라서 같은 패키지가 두 벌이면 클래스도 인스턴스도 두 개가 된다. npm ls나 pnpm why로 몇 벌 깔렸는지 보고 버전을 맞추거나 overrides로 하나로 고정한다.",
    anchor: "같은-모듈이-두-번-로드되는-경우",
  },
  {
    id: "pattern-singleton-3",
    post: "pattern-singleton",
    question: "비동기로 초기화하는 싱글턴에 동시에 두 호출이 들어와도 인스턴스를 하나만 만들려면?",
    choices: [
      "초기화가 끝난 인스턴스를 변수에 캐시한다",
      "초기화 Promise를 바로 캐시해서 뒤의 호출이 같은 Promise를 기다리게 한다",
      "자바스크립트는 단일 스레드라 아무것도 하지 않아도 된다",
      "getInstance 안에서 setTimeout으로 호출을 늦춘다",
    ],
    answer: 1,
    explanation:
      "인스턴스를 캐시하면 await 하는 사이에 들어온 두 번째 호출도 비어 있는 변수를 보고 또 만든다. 만드는 중인 Promise를 바로 저장하면 두 호출이 같은 초기화를 기다린다. 실패하면 캐시를 비워 다음 호출이 다시 시도하게 한다.",
    anchor: "비동기-초기화에서는-둘이-만들어진다",
  },
  {
    id: "pattern-singleton-4",
    post: "pattern-singleton",
    question: "분당 3회 제한을 메모리의 싱글턴 카운터로 만들고 파드 두 개에 배포했다. 어떻게 될까?",
    choices: [
      "파드마다 따로 세서 실제로는 최대 6회까지 통과한다",
      "싱글턴이라 두 파드가 같은 카운터를 공유한다",
      "두 번째 파드는 싱글턴을 만들지 못해 시작에 실패한다",
      "로드 밸런서가 한 파드로만 보내서 정확히 3회가 된다",
    ],
    answer: 0,
    explanation:
      "싱글턴이 보장하는 하나는 프로세스 범위다. 파드나 워커마다 카운터가 따로 있으니 제한이 서버 수만큼 늘어난다. 여러 프로세스가 같이 봐야 하는 숫자는 Redis 같은 공유 저장소에서 센다.",
    anchor: "프로세스-하나에-하나일-뿐이다",
  },
  {
    id: "pattern-singleton-5",
    post: "pattern-singleton",
    question: "싱글턴 기능 플래그를 쓰는 테스트가 실행 순서에 따라 깨진다. 근본적인 해결에 가장 가까운 것은?",
    choices: [
      "테스트를 항상 같은 순서로 돌리게 설정한다",
      "afterEach마다 모든 싱글턴의 reset()을 부른다",
      "테스트를 병렬로 돌리지 않는다",
      "함수가 플래그를 직접 찾아가지 않고 바깥에서 넘겨받게 바꾼다",
    ],
    answer: 3,
    explanation:
      "원인은 함수가 전역 객체를 몰래 꺼내 쓰는 데 있다. 의존성을 인자로 받으면 테스트마다 새 가짜를 넣을 수 있어 상태가 새지 않는다. reset()은 싱글턴이 늘 때마다 챙길 목록이 늘어나는 응급처치다.",
    anchor: "테스트가-순서에-따라-깨진다",
  },
  {
    id: "pattern-singleton-6",
    post: "pattern-singleton",
    question: "자바의 이중 검사 잠금 싱글턴에서 필드에 volatile이 빠지면 생기는 문제는?",
    choices: [
      "인스턴스가 가비지 컬렉션으로 사라진다",
      "synchronized 블록에 아무도 들어가지 못한다",
      "다른 스레드가 생성자가 덜 끝난 객체의 참조를 볼 수 있다",
      "getInstance가 항상 null을 돌려준다",
    ],
    answer: 2,
    explanation:
      "객체 생성과 참조 대입의 순서가 재배치될 수 있어서, 잠금 밖의 1차 검사에서 덜 만들어진 객체를 볼 수 있다. volatile이 이 재배치를 막는다. 더 단순하게는 holder 관용구나 enum 싱글턴을 쓴다.",
    anchor: "다른-언어는-어떻게-막나",
  },
];
