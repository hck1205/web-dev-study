import type { QuizQuestion } from "../types";

export const JS_RUNTIMES_NODE_DENO_BUN: QuizQuestion[] = [
  {
    id: "js-runtimes-node-deno-bun-1",
    post: "js-runtimes-node-deno-bun",
    question: "Node, Deno, Bun이 쓰는 자바스크립트 엔진을 바르게 묶은 것은?",
    choices: [
      "Node와 Deno는 V8, Bun은 JavaScriptCore를 쓴다",
      "셋 다 V8을 쓴다",
      "Node는 V8, Deno와 Bun은 JavaScriptCore를 쓴다",
      "Node는 JavaScriptCore, Deno와 Bun은 V8을 쓴다",
    ],
    answer: 0,
    explanation:
      "Node와 Deno는 구글 V8(크롬과 같은 엔진)을, Bun은 애플 사파리의 JavaScriptCore를 쓴다. 엔진이 시작 시간, 메모리, 최적화 특성을 좌우하지만 어느 쪽이 빠른지는 작업마다 달라 경향으로만 본다.",
    anchor: "엔진부터-다르다",
  },
  {
    id: "js-runtimes-node-deno-bun-2",
    post: "js-runtimes-node-deno-bun",
    question: "Deno의 기본 권한 모델이 공급망 공격 피해를 줄이는 방식은?",
    choices: [
      "설치하는 패키지를 모두 자동으로 서명 검증한다",
      "파일·네트워크·환경 접근이 기본 차단이라, 네트워크 권한을 안 주면 코드가 몰래 파일을 빼내 외부로 보낼 수 없다",
      "npm 패키지를 아예 실행하지 못하게 막는다",
      "모든 코드를 별도 프로세스로 격리한다",
    ],
    answer: 1,
    explanation:
      "Deno는 기본적으로 다 막혀 있고 필요한 것만 플래그로 연다. 파일 읽기 권한만 준 코드는 읽기는 되고 외부 접속은 막힌다. Node도 --permission으로 비슷한 모델을 제공하지만 더 늦게 나왔고 세부가 다르다.",
    anchor: "코드가-바깥에-손대려면-허락을-받는다",
  },
  {
    id: "js-runtimes-node-deno-bun-3",
    post: "js-runtimes-node-deno-bun",
    question: "런타임이 .ts 파일을 설정 없이 바로 실행한다는 것의 정확한 의미는?",
    choices: [
      "타입이 맞는지 검사한 뒤 실행한다",
      "타입스크립트를 모두 any로 바꿔 실행한다",
      "타입 표기만 떼어 내고 자바스크립트로 실행하며, 타입 검사는 하지 않는다",
      "tsconfig.json이 반드시 있어야 실행된다",
    ],
    answer: 2,
    explanation:
      "기본 방식은 type stripping으로 타입 표기만 제거해 실행하고 타입이 맞는지는 보지 않는다. 그래서 타입 검사는 tsc나 에디터가 따로 한다. enum처럼 런타임 코드를 만들어야 하는 전용 문법은 단순 제거로 안 돼 막히기도 한다.",
    anchor: "도마와-칼이-들어-있다",
  },
  {
    id: "js-runtimes-node-deno-bun-4",
    post: "js-runtimes-node-deno-bun",
    question: "라우팅 벤치마크에서 Bun이 몇 배 빠른데, 응답 전에 20ms를 기다리게 하자 세 런타임 차이가 거의 사라진 이유는?",
    choices: [
      "20ms 대기가 Bun의 최적화를 꺼서",
      "실제 서비스 시간의 대부분은 I/O 대기라, 런타임이 요청을 넘기는 시간은 전체의 작은 조각이기 때문에",
      "autocannon이 20ms 대기를 측정하지 못해서",
      "대기를 넣으면 세 런타임이 같은 엔진을 쓰게 되어서",
    ],
    answer: 1,
    explanation:
      "20ms 대기 하나로 처리량이 10분의 1로 떨어지고 차이가 묻혔다. 실제 서비스는 DB, 외부 API, 직렬화에 시간을 쓰고 대부분 I/O 대기다. 그래서 라우팅 벤치마크의 몇 배가 서비스의 몇 배로 이어지는 일은 드물다.",
    anchor: "벤치마크-숫자가-서비스에서-녹는-자리",
  },
  {
    id: "js-runtimes-node-deno-bun-5",
    post: "js-runtimes-node-deno-bun",
    question: "Request를 받아 Response를 돌려주는 웹 표준 fetch 서버로 짜 두면 좋은 점은?",
    choices: [
      "타입 검사가 자동으로 켜진다",
      "모든 런타임에서 메모리를 절반으로 줄여 준다",
      "npm 패키지를 쓰지 않아도 된다",
      "Cloudflare Workers 같은 엣지 런타임도 같은 모양을 따라, 런타임을 옮기기 쉬워진다",
    ],
    answer: 3,
    explanation:
      "WinterTC가 서버·엣지·서버리스에서 같은 Request/Response API를 쓰자는 방향이고, 엣지 런타임들이 이 모양을 따른다. 전용 API를 줄여 표준에 가깝게 짜면 이식이 쉽다. Deno serve와 Bun.serve가 이 함수를 바로 서빙한다.",
    anchor: "웹-표준-fetch로-서버를-짜면",
  },
  {
    id: "js-runtimes-node-deno-bun-6",
    post: "js-runtimes-node-deno-bun",
    question: "핵심 운영 서비스에 Bun을 넣기 전에 가장 조심해서 확인할 점은?",
    choices: [
      "Bun이 타입스크립트를 실행할 수 있는지",
      "구석진 node: API나 네이티브 애드온에서 예상 못 한 차이가 없는지, 실제 의존성과 부하로 검증했는지",
      "Bun이 V8을 쓰는지",
      "Bun이 웹 표준 fetch를 지원하는지",
    ],
    answer: 1,
    explanation:
      "Bun은 빠른 시작·설치·낮은 메모리가 장점이지만 역사가 짧아 구석진 node: API나 네이티브 애드온에서 차이가 날 수 있고 운영 사례가 얇다. 실제 의존성과 부하로 검증하고 Node로 되돌릴 길을 열어 둔다.",
    anchor: "운영에서-고를-때",
  },
];
