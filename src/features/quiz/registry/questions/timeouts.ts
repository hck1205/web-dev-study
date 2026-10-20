import type { QuizQuestion } from "../types";

export const TIMEOUTS: QuizQuestion[] = [
  {
    id: "timeouts-1",
    post: "timeouts",
    question: "앱에서 connect 타임아웃을 걸지 않고, SYN을 조용히 버리는 서버에 연결하면 어떻게 되나?",
    choices: [
      "RST를 받고 바로 실패한다",
      "read 타임아웃이 대신 적용되어 곧 끊긴다",
      "커널이 SYN을 여러 번 다시 보내다가 2분 넘게 지나서야 실패한다",
      "응답이 올 때까지 영원히 기다린다",
    ],
    answer: 2,
    explanation:
      "대답이 없으면 커널이 tcp_syn_retries 등에 따라 SYN을 다시 보내며 기다린다. 실습에서는 134초 뒤에 실패했다. RST로 바로 끝나는 건 포트에 듣는 프로세스가 없을 때다.",
    anchor: "연결이-안-될-때는-커널이-2분-넘게-기다린다",
  },
  {
    id: "timeouts-2",
    post: "timeouts",
    question: "read 타임아웃을 1초로 걸었는데, 0.5초마다 1바이트씩 보내는 서버의 응답이 10초 동안 끊기지 않았다. 왜인가?",
    choices: [
      "read 타임아웃은 두 번 읽는 사이 간격을 재서, 데이터가 올 때마다 다시 시작되기 때문이다",
      "read 타임아웃은 응답 헤더를 받은 뒤에는 꺼지기 때문이다",
      "서버가 keep-alive를 켜 두었기 때문이다",
      "1초보다 짧은 값은 무시되기 때문이다",
    ],
    answer: 0,
    explanation:
      "많은 라이브러리와 nginx의 proxy_read_timeout은 소켓이 조용한 시간을 잰다. 조각이 계속 오면 끊을 수 없으니, 사용자가 기다리는 시간을 지키려면 처음부터 재는 전체 한도를 따로 건다.",
    anchor: "읽기-타임아웃은-전체-시간이-아니다",
  },
  {
    id: "timeouts-3",
    post: "timeouts",
    question: "nginx가 proxy_read_timeout으로 504를 돌려준 뒤, 뒤의 앱과 DB에서는 무슨 일이 일어나나?",
    choices: [
      "nginx가 앱에 취소 신호를 보내 작업이 바로 멈춘다",
      "앱은 연결이 닫힌 걸 감지해 멈추는 코드가 없으면 끝까지 일하고, DB 쿼리도 계속 돈다",
      "앱은 멈추지만 DB 쿼리는 자동으로 취소된다",
      "앱도 같은 시각에 자기 타임아웃이 끝나 함께 멈춘다",
    ],
    answer: 1,
    explanation:
      "타임아웃은 기다리던 쪽이 연결을 닫는 것뿐이다. 실습에서 앱은 연결이 닫힌 뒤에도 일을 끝냈고, PostgreSQL은 결과를 보내려는 순간에야 클라이언트가 없다는 걸 알았다.",
    anchor: "앞에서-포기해도-뒤에서는-계속-일한다",
  },
  {
    id: "timeouts-4",
    post: "timeouts",
    question: "게이트웨이 한도 5초, 주문 서비스가 재고 서비스를 3초 한도로 2번까지 시도한다. 무엇이 문제인가?",
    choices: [
      "문제없다. 3초가 5초보다 짧다",
      "재고 서비스의 한도가 없어서 문제다",
      "게이트웨이 한도가 너무 짧아서 정상 요청도 잘린다",
      "주문 서비스의 최악 시간이 6초라서, 게이트웨이가 포기한 뒤에도 주문 서비스가 일할 수 있다",
    ],
    answer: 3,
    explanation:
      "안쪽의 최악 시간은 한도에 시도 횟수를 곱하고 백오프 대기까지 더한 값이다. 이 값이 바깥 한도보다 짧아야 바깥이 포기한 뒤 안쪽이 헛일을 하지 않는다.",
    anchor: "바깥이-안쪽보다-길어야-한다",
  },
  {
    id: "timeouts-5",
    post: "timeouts",
    question: "데드라인 전파에서 받은 쪽이 남은 시간이 0 이하인 요청을 받았을 때 할 일은?",
    choices: [
      "자기 기본 한도로 다시 시간을 잡고 일을 한다",
      "일을 시작하지 않고 바로 실패를 돌려준다",
      "바깥에 데드라인 연장을 요청한다",
      "실패로 처리하고 즉시 재시도한다",
    ],
    answer: 1,
    explanation:
      "바깥은 이미 포기했으니 일을 해도 받을 사람이 없다. 바로 실패를 돌려준다. 데드라인을 넘긴 실패는 다시 보내도 시간이 더 없으니 재시도 대상도 아니다.",
    anchor: "남은-시간을-넘겨주는-데드라인-전파",
  },
  {
    id: "timeouts-6",
    post: "timeouts",
    question: "서버마다 시계가 조금씩 어긋나 있을 때 데드라인을 넘기는 방법으로 더 안전한 것은?",
    choices: [
      "남은 시간(상대값)을 넘긴다",
      "절대 시각을 넘긴다",
      "아무것도 넘기지 않고 계층마다 고정 한도를 쓴다",
      "절대 시각과 남은 시간 중 더 긴 쪽을 쓴다",
    ],
    answer: 0,
    explanation:
      "절대 시각은 받는 서버의 시계 차이만큼 틀어진다. 남은 시간은 네트워크를 건너는 시간만큼 조금 넉넉해질 뿐 시계 차이의 영향을 받지 않아서 gRPC도 이 방식을 쓴다.",
    anchor: "남은-시간을-넘겨주는-데드라인-전파",
  },
  {
    id: "timeouts-7",
    post: "timeouts",
    question: "ALB 뒤의 Node 앱에서 하루 몇 건씩 502가 나고 앱 로그에는 그 요청이 없다. 가장 먼저 맞춰 볼 설정은?",
    choices: [
      "ALB의 idle timeout을 5초로 줄인다",
      "앱의 requestTimeout을 늘린다",
      "앱의 keepAliveTimeout을 ALB idle timeout보다 길게 잡는다",
      "nginx의 proxy_read_timeout을 늘린다",
    ],
    answer: 2,
    explanation:
      "앱이 먼저 놀고 있는 연결을 닫으면, 닫히는 순간 ALB가 그 연결에 요청을 실어 502가 난다. 항상 앞단이 먼저 닫도록 앱 쪽 keep-alive 한도를 더 길게 둔다.",
    anchor: "keep-alive-유휴-시간이-어긋나면-생기는-502",
  },
];
