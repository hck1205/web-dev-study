import type { QuizQuestion } from "../types";

export const WEB_WORKERS: QuizQuestion[] = [
  {
    id: "web-workers-1",
    post: "web-workers",
    question: "100만 개 정렬을 워커로 옮겼더니 전체 시간은 781ms에서 769ms로 거의 같았다. 그래도 옮길 가치가 있는 이유는?",
    choices: [
      "워커는 다른 CPU 명령어를 써서 다음부터 빨라진다",
      "워커에서 정렬하면 결과를 복사하지 않아도 된다",
      "그동안 메인 스레드가 비어 있어 화면이 그려지고 입력이 처리된다",
      "워커 안의 긴 작업은 브라우저가 자동으로 쪼개 준다",
    ],
    answer: 2,
    explanation:
      "워커는 계산을 빠르게 하는 도구가 아니라 메인 스레드를 비워 두는 도구다. 측정에서도 그려진 프레임이 1개에서 47개로 늘었다. 결과는 여전히 메시지로 복사되어 돌아온다.",
    anchor: "워커는-자기-이벤트-루프를-가진-다른-스레드다",
  },
  {
    id: "web-workers-2",
    post: "web-workers",
    question: "Point 클래스 인스턴스를 postMessage로 워커에 보낸 뒤 워커에서 point.len()을 부르면 어떻게 되나?",
    choices: [
      "프로토타입이 없는 평범한 객체로 복제되어 len이 없으니 TypeError가 난다",
      "postMessage가 DataCloneError를 던진다",
      "정상으로 동작한다. 구조화된 복제는 클래스까지 복사한다",
      "메인 스레드의 메서드를 원격으로 호출한다",
    ],
    answer: 0,
    explanation:
      "구조화된 복제는 클래스 인스턴스의 필드만 남기고 프로토타입은 버린다. 그래서 instanceof는 false가 되고 메서드는 사라진다. DataCloneError는 함수 자체를 보낼 때 난다.",
    anchor: "메시지는-복사된다",
  },
  {
    id: "web-workers-3",
    post: "web-workers",
    question: "worker.postMessage({ buffer }, [buffer]) 다음 줄에서 buffer를 읽는 코드가 아무 값도 얻지 못한다. 이유는?",
    choices: [
      "postMessage가 비동기라 아직 전송이 끝나지 않아서",
      "두 번째 인자로 넘긴 버퍼는 소유권이 워커로 옮겨져 보낸 쪽 버퍼가 떨어져 나가 byteLength가 0이 되어서",
      "워커가 버퍼를 받은 뒤 지워서",
      "ArrayBuffer는 한 번 읽으면 비워지는 구조라서",
    ],
    answer: 1,
    explanation:
      "transfer 목록에 넣은 객체는 복사 없이 받는 쪽으로 옮겨지고 원본은 비워진다. 그 덕분에 64MB도 몇 ms 안에 건너간다. 양쪽이 계속 써야 한다면 복사하거나 SharedArrayBuffer를 쓴다.",
    anchor: "큰-버퍼는-복사하지-않고-넘긴다",
  },
  {
    id: "web-workers-4",
    post: "web-workers",
    question: "평범한 페이지에서 typeof SharedArrayBuffer가 \"undefined\"다. 무엇이 필요한가?",
    choices: [
      "워커를 type: \"module\"로 만든다",
      "HTTPS로만 서비스한다",
      "Permissions-Policy에서 shared-memory를 허용한다",
      "문서에 COOP same-origin과 COEP require-corp를 함께 보내 교차 출처 격리 상태로 만든다",
    ],
    answer: 3,
    explanation:
      "공유 메모리로 정밀한 타이머를 만들 수 있어 스펙터 같은 부채널 공격에 쓰일 수 있기 때문에, 브라우저는 교차 출처 격리된 페이지에서만 생성자를 준다. 그러려면 COOP와 COEP 두 헤더가 모두 필요하다.",
    anchor: "같은-메모리를-함께-보는-sharedarraybuffer",
  },
  {
    id: "web-workers-5",
    post: "web-workers",
    question: "워커 네 개가 공유 Int32Array의 0번 칸을 v[0]++로 100만 번씩 올렸더니 400만이 아니라 3,889,816이 됐다. 원인과 해결로 맞는 것은?",
    choices: [
      "Int32Array가 넘쳐서다. BigInt64Array로 바꾼다",
      "워커가 일찍 종료되어서다. terminate를 늦게 부른다",
      "읽기·더하기·쓰기가 한 동작이 아니라 갱신이 사라진 것이다. Atomics.add로 원자적으로 올린다",
      "메인 스레드가 중간에 값을 덮어써서다. Atomics.wait로 메인 스레드를 재운다",
    ],
    answer: 2,
    explanation:
      "두 워커가 같은 값을 읽어 각자 1을 더해 쓰면 한 번이 사라진다. Atomics.add는 세 단계를 끊김 없이 처리해 정확히 400만이 됐다. Atomics.wait는 메인 스레드에서 호출할 수 없다.",
    anchor: "같은-메모리를-함께-보는-sharedarraybuffer",
  },
  {
    id: "web-workers-6",
    post: "web-workers",
    question: "postMessage 위에 RPC 층을 만들 때 요청마다 번호를 붙이는 이유는?",
    choices: [
      "구조화된 복제가 번호 없는 객체를 보내지 못해서",
      "요청을 여러 개 보냈을 때 답이 다른 순서로 와도 어느 요청의 답인지 짝을 맞추려고",
      "워커가 메시지를 받은 순서대로만 처리하게 하려고",
      "번호가 있어야 Transferable로 넘길 수 있어서",
    ],
    answer: 1,
    explanation:
      "메시지는 이벤트로 따로 도착하므로 요청과 답을 잇는 정보가 없다. 번호로 콜백을 찾아 한 번만 부르고 지우면 순서가 바뀌거나 같은 답이 두 번 와도 안전하다. 워커가 죽으면 남은 요청을 타임아웃이나 error 이벤트로 끝내야 한다.",
    anchor: "postmessage를-함수-호출처럼-감싸기",
  },
  {
    id: "web-workers-7",
    post: "web-workers",
    question: "클릭 한 번에 DOM 노드 수천 개를 만들어 붙이는 핸들러가 300ms 긴 작업을 만든다. 맞는 접근은?",
    choices: [
      "작업을 50ms보다 작게 쪼개고 scheduler.yield나 setTimeout으로 중간중간 양보한다",
      "핸들러 전체를 Web Worker로 옮긴다",
      "SharedWorker로 옮겨 여러 탭이 나눠 처리하게 한다",
      "Service Worker에서 DOM을 미리 만들어 둔다",
    ],
    answer: 0,
    explanation:
      "DOM은 메인 스레드만 만질 수 있어 워커로 옮길 수 없다. 이런 일은 쪼개서 사이사이 입력과 렌더링이 끼어들게 한다. scheduler.yield는 크롬 계열 129부터라 없으면 setTimeout으로 물러선다.",
    anchor: "워커가-답이-아닐-때",
  },
];
