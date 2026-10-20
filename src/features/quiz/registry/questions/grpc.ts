import type { QuizQuestion } from "../types";

export const GRPC: QuizQuestion[] = [
  {
    id: "grpc-1",
    post: "grpc",
    question: "쿠버네티스 ClusterIP Service 뒤의 gRPC 서버 Pod 세 개 중 하나만 CPU가 높다. 가장 그럴듯한 원인은?",
    choices: [
      "kube-proxy가 연결이 생길 때 한 번만 백엔드를 고르는데, 클라이언트가 HTTP/2 연결 하나로 모든 호출을 보낸다",
      "Protocol Buffers 파싱이 특정 Pod에서만 느리다",
      "gRPC는 기본으로 라운드 로빈을 쓰지만 Pod 수가 홀수라 어긋난다",
      "readiness probe가 나머지 Pod를 계속 빼고 있다",
    ],
    answer: 0,
    explanation:
      "ClusterIP는 L4라 TCP 연결 단위로 고르고, gRPC 채널은 연결 하나를 오래 쓴다. 고르는 순간이 한 번뿐이라 한 Pod가 전부 받는다. L7 프록시, 클라이언트 쪽 round_robin, max_connection_age로 호출 단위 분산을 만든다.",
    anchor: "연결이-오래-사니-로드-밸런서가-할-일이-없다",
  },
  {
    id: "grpc-2",
    post: "grpc",
    question: "Ingress의 HTTP 5xx 비율은 0%인데 gRPC 클라이언트 쪽에서는 NOT_FOUND와 INTERNAL 에러가 많이 보인다. 왜 이런 차이가 생기나?",
    choices: [
      "Ingress가 gRPC 에러를 자동으로 재시도해 성공시켰다",
      "gRPC 에러도 HTTP 상태는 200이고 결과가 grpc-status(trailers)로 오기 때문이다",
      "gRPC는 HTTP를 쓰지 않아 Ingress를 거치지 않는다",
      "클라이언트 라이브러리가 에러를 잘못 해석했다",
    ],
    answer: 1,
    explanation:
      "gRPC는 결과를 trailers의 grpc-status로 알리고 HTTP 상태는 거의 항상 200이다. 실습에서도 NOT_FOUND 응답의 :status가 200이었다. 에러율은 grpc-status를 읽는 프록시나 서버 인터셉터 지표로 봐야 한다.",
    anchor: "상태-코드는-http-200-안에-있다",
  },
  {
    id: "grpc-3",
    post: "grpc",
    question: "클라이언트가 500ms 기한으로 부른 호출이 DEADLINE_EXCEEDED로 끝났다. 서버 쪽에서는 무슨 일이 일어날 수 있나?",
    choices: [
      "서버는 기한을 모르니 끝까지 처리한다",
      "서버 프로세스가 강제로 종료된다",
      "기한이 grpc-timeout 헤더로 전달돼 서버 쪽 호출도 취소 상태가 되고, 서버는 남은 일을 그만둘 수 있다",
      "서버가 자동으로 같은 호출을 다시 실행한다",
    ],
    answer: 2,
    explanation:
      "기한은 요청 헤더로 서버에 전달되고 지나면 서버의 호출 객체도 취소된다. 실습에서 서버는 cancelled를 보고 작업을 건너뛰었다. 다음 서비스를 부를 때 남은 기한을 넘기면 호출 사슬 전체가 함께 멈춘다.",
    anchor: "기한을-넘기면-끊고-서버도-그만둔다",
  },
  {
    id: "grpc-4",
    post: "grpc",
    question: "Protocol Buffers 메시지에서 필드 이름을 바꾸는 것과 필드 번호를 바꾸는 것의 차이로 옳은 것은?",
    choices: [
      "둘 다 바이트가 달라지므로 둘 다 호환을 깬다",
      "이름은 바이트에 들어가지 않아 바꿔도 호환되지만, 번호를 바꾸면 옛 클라이언트가 값을 엉뚱한 필드로 읽는다",
      "번호는 자동으로 다시 매겨지므로 상관없다",
      "이름을 바꾸면 JSON과 달리 protobuf는 디코딩을 거부한다",
    ],
    answer: 1,
    explanation:
      "바이트에는 '번호와 타입' 1바이트와 값만 들어가고 이름은 없다. 그래서 번호가 곧 계약이다. 지운 필드의 번호는 reserved로 막아 다시 쓰지 않는다.",
    anchor: "26바이트로-줄어든-주문",
  },
  {
    id: "grpc-5",
    post: "grpc",
    question: "음수가 자주 들어가는 잔액 필드를 int32로 선언했다. -1은 몇 바이트로 인코딩되고, 어떻게 줄이나?",
    choices: [
      "4바이트, fixed32로 바꾼다",
      "1바이트, 바꿀 필요 없다",
      "2바이트, int64로 바꾼다",
      "10바이트, sint32로 바꾸면 지그재그 인코딩으로 1바이트가 된다",
    ],
    answer: 3,
    explanation:
      "int32의 음수는 64비트 2의 보수로 늘려 varint로 쓰니 항상 10바이트다. sint32는 0, -1, 1, -2를 0, 1, 2, 3으로 바꿔 작은 음수를 짧게 만든다. protoc로 인코딩하면 28 ff…01과 28 01로 차이가 보인다.",
    anchor: "26바이트로-줄어든-주문",
  },
  {
    id: "grpc-6",
    post: "grpc",
    question: "서버에 max_connection_age를 몇 분으로 설정하는 이유로 가장 알맞은 것은?",
    choices: [
      "메모리 누수를 막으려고",
      "연결을 주기적으로 새로 맺게 해 L4 로드 밸런서가 다시 백엔드를 고를 기회를 주려고",
      "TLS 인증서를 자주 바꾸려고",
      "스트림 수 상한을 늘리려고",
    ],
    answer: 1,
    explanation:
      "수명이 지난 연결에 서버가 GOAWAY를 보내면 클라이언트는 새 연결을 맺고, 그때 L4 로드 밸런서가 다시 고른다. 실습에서 1초 수명을 주자 채널 하나의 호출 300개가 세 서버에 108, 99, 93개로 나뉘었다. grace 시간 동안 진행 중인 호출은 끝낼 수 있어 실패가 없었다.",
    anchor: "연결이-오래-사니-로드-밸런서가-할-일이-없다",
  },
];
