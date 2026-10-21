import type { QuizQuestion } from "../types";

export const API_STYLES_OVERVIEW: QuizQuestion[] = [
  {
    id: "api-styles-overview-1",
    post: "api-styles-overview",
    question: "REST, RPC, GraphQL을 한 갈래로, 웹훅·WebSocket·HTTP 스트리밍을 다른 갈래로 묶는 기준은?",
    choices: [
      "JSON을 쓰는지, 바이너리를 쓰는지",
      "대화를 클라이언트가 시작하는지, 무언가 생긴 쪽이 먼저 알리는지",
      "HTTP/1.1을 쓰는지, HTTP/2를 쓰는지",
      "공개 API인지, 내부 API인지",
    ],
    answer: 1,
    explanation:
      "요청-응답 쪽은 클라이언트가 묻고 서버가 한 번 답하고, 이벤트 기반 쪽은 소식이 생긴 쪽이 먼저 말한다. 형식이나 HTTP 버전은 각 갈래 안에서도 섞여 있다.",
    anchor: "누가-먼저-말을-거는가",
  },
  {
    id: "api-styles-overview-2",
    post: "api-styles-overview",
    question: "JSON-RPC 배치 요청에 id가 없는 호출이 섞여 있으면 응답은 어떻게 되나?",
    choices: [
      "그 호출 자리에 null이 들어간다",
      "배치 전체가 Invalid Request로 거절된다",
      "그 호출은 실행만 되고 응답 배열에서 빠진다",
      "그 호출만 실행되지 않는다",
    ],
    answer: 2,
    explanation:
      "id가 없는 요청은 notification이라 서버는 실행하되 답하지 않는다. 실습에서도 audit.log는 서버 로그에만 찍히고 응답 배열에는 a, b, c 세 개만 왔다.",
    anchor: "묻고-답하는-세-가지",
  },
  {
    id: "api-styles-overview-3",
    post: "api-styles-overview",
    question: "PG사의 결제 완료 결과를 앱 화면까지 가장 알맞게 전달하는 조합은?",
    choices: [
      "앱이 PG사 API를 1초마다 폴링한다",
      "PG사가 앱으로 직접 웹훅을 보낸다",
      "PG사가 우리 서버에 웹훅을 보내고, 우리 서버가 앱이 열어 둔 SSE로 알린다",
      "우리 서버와 PG사 사이에 WebSocket을 연결해 둔다",
    ],
    answer: 2,
    explanation:
      "앱은 고정된 주소가 없어서 남의 서버가 먼저 부를 수 없으니 웹훅은 서버 사이에서 받는다. 받은 결과는 서버에서 앱으로만 흐르니 열어 둔 스트림에 한 줄을 쓰면 된다.",
    anchor: "한-서비스가-여섯-가지를-다-쓴다",
  },
  {
    id: "api-styles-overview-4",
    post: "api-styles-overview",
    question: "서버에서만 소식이 오는 알림 배지를 WebSocket으로 만들면 생기기 쉬운 문제가 아닌 것은?",
    choices: [
      "메시지 규약과 재연결 코드를 직접 짜야 한다",
      "배포 때 모든 연결이 한꺼번에 다시 붙는다",
      "HTTP 캐시가 알림을 다른 사용자에게 돌려준다",
      "연결을 붙잡는 비용은 SSE와 비슷한데 얻는 게 적다",
    ],
    answer: 2,
    explanation:
      "WebSocket 프레임은 HTTP 캐시를 거치지 않으니 캐시가 알림을 섞는 일은 없다. 나머지는 실제로 생기는 비용이고, 서버에서만 오는 소식이라면 재연결과 이어 받기를 브라우저가 해 주는 SSE가 더 가볍다.",
    anchor: "잘못-골랐을-때-보이는-증상",
  },
  {
    id: "api-styles-overview-5",
    post: "api-styles-overview",
    question: "이벤트 기반 API를 쓸 때 거의 항상 함께 두어야 하는 것은?",
    choices: [
      "놓친 소식을 다시 받는 길(주기적 조회, 마지막 id부터 이어 받기)",
      "모든 이벤트를 XML로 보내는 규칙",
      "클라이언트마다 별도의 TCP 포트",
      "요청마다 새 WebSocket 연결",
    ],
    answer: 0,
    explanation:
      "웹훅은 재전송을 포기하면 유실되고, WebSocket과 스트리밍은 조용히 끊긴 사이의 소식을 놓친다. 그래서 웹훅에는 주기적인 맞춰 보기를, 스트림에는 이어 받기를 짝으로 둔다.",
    anchor: "여섯-가지를-같은-잣대로",
  },
  {
    id: "api-styles-overview-6",
    post: "api-styles-overview",
    question: "AI 추천 답변을 일반 요청-응답으로 두었을 때 나타나기 쉬운 증상은?",
    choices: [
      "PG사의 요청 수 제한에 걸린다",
      "빈 화면이 오래 보이고, 로드 밸런서 응답 시간 한도에 걸려 504가 나기도 한다",
      "GraphQL 쿼리 깊이 제한에 걸린다",
      "같은 답변이 두 번 저장된다",
    ],
    answer: 1,
    explanation:
      "답 전체가 만들어질 때까지 아무것도 보내지 않으니 사용자는 기다리기만 하고, 오래 걸리면 경로의 응답 시간 한도에 걸린다. 응답을 토큰 단위로 이어 쓰면 첫 글자가 바로 보인다.",
    anchor: "잘못-골랐을-때-보이는-증상",
  },
];
