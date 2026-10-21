import type { QuizQuestion } from "../types";

export const SD_LOAD_BALANCER_STATELESS: QuizQuestion[] = [
  {
    id: "sd-load-balancer-stateless-1",
    post: "sd-load-balancer-stateless",
    question: "웹 서버 두 대 앞에 라운드 로빈 로드 밸런서를 붙였더니 로그인이 한 번 걸러 한 번씩 풀린다. 원인은?",
    choices: [
      "쿠키의 HttpOnly 옵션 때문에 브라우저가 쿠키를 안 보내서",
      "세션이 로그인을 받은 서버의 메모리에만 있어서 다른 서버는 그 세션 번호를 몰라서",
      "로드 밸런서가 쿠키를 지워서",
      "DB가 세션 테이블을 잠가서",
    ],
    answer: 1,
    explanation:
      "로그인한 web1의 메모리에만 세션이 생겼고, 라운드 로빈이 다음 요청을 web2로 보내면 web2는 그 번호를 처음 본다. 그래서 정확히 한 번 걸러 401이 났다. 쿠키는 매번 잘 전달되고 있었다.",
    anchor: "로그인했는데-한-번씩-풀린다",
  },
  {
    id: "sd-load-balancer-stateless-2",
    post: "sd-load-balancer-stateless",
    question: "세션 고정(sticky session)으로 이 문제를 풀었을 때 남는 약점으로 알맞은 것은?",
    choices: [
      "세션 쿠키를 암호화할 수 없다",
      "로드 밸런서가 HTTPS를 처리하지 못한다",
      "고정된 서버가 죽거나 배포로 내려가면 그 사용자들의 세션이 사라진다",
      "모든 요청마다 Redis 왕복이 하나 더 붙는다",
    ],
    answer: 2,
    explanation:
      "세션 고정은 상태를 빼낸 것이 아니라 같은 서버로 계속 보내는 것이라, 그 서버가 사라지면 세션도 함께 사라진다. 새 서버를 붙여도 기존 손님이 옛 서버에 묶여 부하가 고르게 퍼지지 않는다. Redis 왕복은 공유 저장소 방식의 비용이다.",
    anchor: "상태를-빼내는-세-가지-방법",
  },
  {
    id: "sd-load-balancer-stateless-3",
    post: "sd-load-balancer-stateless",
    question: "웹 서버가 세 대인데 '매일 밤 12시 쿠폰 발송' 작업을 웹 서버 코드에 넣어 두었다. 어떤 일이 생기나?",
    choices: [
      "쿠폰이 세 번 나간다",
      "로드 밸런서가 한 서버만 골라 실행한다",
      "세 서버가 자동으로 나눠서 1/3씩 보낸다",
      "Redis가 중복을 알아서 막는다",
    ],
    answer: 0,
    explanation:
      "서버마다 같이 도는 예약 작업도 숨은 상태다. 로드 밸런서는 들어오는 요청만 나눌 뿐 서버 안에서 스스로 도는 작업은 모른다. 웹 서버 밖 한 곳에서 돌리거나 실행 전에 락을 잡아야 한다.",
    anchor: "세션-말고도-숨은-상태가-있다",
  },
  {
    id: "sd-load-balancer-stateless-4",
    post: "sd-load-balancer-stateless",
    question: "헬스 체크를 1초 간격, 2회 연속 실패 시 제외로 설정했다. web1을 끈 직후 일부 요청이 502로 실패한 이유는?",
    choices: [
      "세션이 web1에 있어서",
      "DB 연결이 끊겨서",
      "502는 클라이언트 쪽 오류라 서버와 관계없다",
      "로드 밸런서가 web1이 죽은 걸 알아챌 때까지 라운드 로빈 차례가 web1에 계속 돌아가서",
    ],
    answer: 3,
    explanation:
      "알아채는 데 걸리는 시간은 대략 검사 간격 × 실패 기준 횟수다. 그 사이에도 web1 차례가 오면 연결이 거부되고 로드 밸런서는 502를 돌려준다. 세션은 Redis에 있었기 때문에 로그인은 풀리지 않았다.",
    anchor: "서버-하나가-죽는-순간",
  },
  {
    id: "sd-load-balancer-stateless-5",
    post: "sd-load-balancer-stateless",
    question: "로드 밸런서가 연결 실패 시 다른 서버로 재시도하게 할 때, 결제 POST까지 재시도하면 안 되는 이유는?",
    choices: [
      "POST는 로드 밸런서를 지나갈 수 없어서",
      "같은 요청이 두 번 처리되면 결제가 두 번 될 수 있어서",
      "재시도하면 세션이 사라져서",
      "POST는 헬스 체크를 통과하지 못해서",
    ],
    answer: 1,
    explanation:
      "재시도는 두 번 보내도 결과가 같은 요청에만 안전하다. 첫 서버가 처리를 마친 뒤 응답만 못 보냈을 수도 있어서 결제를 다시 보내면 중복 결제가 된다. nginx도 기본값으로는 POST를 다음 서버로 넘기지 않는다.",
    anchor: "서버-하나가-죽는-순간",
  },
  {
    id: "sd-load-balancer-stateless-6",
    post: "sd-load-balancer-stateless",
    question: "서버 세 대가 각각 CPU 70%로 돌고 있다. 한 대가 빠지면 나머지 두 대는 대략 얼마가 되나?",
    choices: [
      "70% 그대로",
      "약 85%",
      "약 105%",
      "약 140%",
    ],
    answer: 2,
    explanation:
      "세 대가 나눠 받던 210%만큼의 일을 두 대가 나누면 한 대당 105%다. 그래서 서버 수는 평소가 아니라 한 대가 빠져도 버틸 수 있는지로 정한다.",
    anchor: "몇-대에-어떻게-나뉘나-직접-돌려-보기",
  },
];
