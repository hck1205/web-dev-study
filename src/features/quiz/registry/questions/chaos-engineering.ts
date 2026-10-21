import type { QuizQuestion } from "../types";

export const CHAOS_ENGINEERING: QuizQuestion[] = [
  {
    id: "chaos-engineering-1",
    post: "chaos-engineering",
    question: "카오스 실험의 정상 상태 지표로 가장 알맞은 것은?",
    choices: [
      "서버의 CPU와 메모리 사용률",
      "사용자 쪽에서 본 성공률과 p99 응답 시간",
      "배포 횟수와 커밋 수",
      "로그에 찍힌 ERROR 줄 수",
    ],
    answer: 1,
    explanation:
      "고장을 넣으면 CPU 같은 내부 지표는 흔들리는 게 당연해서 사용자가 피해를 봤는지 알려 주지 않는다. 실험이 묻는 건 사용자 경험이 버티는지라서 성공률과 지연 분포처럼 사용자에게 보이는 지표를 쓴다.",
    anchor: "평소-모습부터-숫자로-적는다",
  },
  {
    id: "chaos-engineering-2",
    post: "chaos-engineering",
    question:
      "타임아웃 250ms를 건 클라이언트 앞에서 패킷 10%를 버렸더니 성공률은 100%인데 p99가 1.2초였다. 가장 먼저 의심할 것은?",
    choices: [
      "백엔드가 느려져서 응답을 늦게 보냈다",
      "재시도 횟수가 너무 많아서 요청이 몰렸다",
      "타임아웃이 연결이 맺어진 뒤에만 시간을 재서, SYN 재전송을 기다리는 동안 발동하지 않았다",
      "iptables 규칙이 응답 패킷까지 지연시켰다",
    ],
    answer: 2,
    explanation:
      "1초, 2초 같은 숫자는 SYN 재전송 간격과 맞아떨어진다. Node의 req.setTimeout은 소켓이 연결된 뒤에 시계를 켜서 연결 단계의 대기를 끊지 못한다. timeout 옵션이나 AbortSignal.timeout처럼 처음부터 재는 한도로 바꾸자 p99가 310ms로 내려왔다.",
    anchor: "패킷을-버렸더니-타임아웃이-안-걸렸다",
  },
  {
    id: "chaos-engineering-3",
    post: "chaos-engineering",
    question: "프로세스 종료 실험은 통과했는데 응답 없음(패킷 DROP) 실험에서 클라이언트가 멈췄다. 왜 결과가 다를까?",
    choices: [
      "죽은 프로세스는 연결을 바로 거부해 빨리 실패하지만, 대답이 없으면 타임아웃이 없을 때 커널이 2분 넘게 연결을 재시도하기 때문",
      "DROP 규칙은 백엔드 B로 가는 트래픽까지 막기 때문",
      "프로세스가 죽으면 클라이언트가 자동으로 재시작되기 때문",
      "응답 없음 실험에서는 DNS 조회가 실패하기 때문",
    ],
    answer: 0,
    explanation:
      "실험에서 죽은 A는 ECONNRESET으로 2ms 만에 실패했지만, 패킷을 버리자 타임아웃 없는 요청은 ETIMEDOUT까지 2분 13초를 기다렸다. 실제 장애에는 대답 없는 경우가 많아서 두 실험을 따로 해야 한다.",
    anchor: "프로세스가-죽었을-때와-응답이-사라졌을-때",
  },
  {
    id: "chaos-engineering-4",
    post: "chaos-engineering",
    question: "백엔드 A를 죽인 뒤 재시도 클라이언트는 모두 성공했지만 p50이 21ms에서 44ms로 늘었다. 다음에 붙일 장치로 가장 알맞은 것은?",
    choices: [
      "재시도 횟수를 다섯 번으로 늘린다",
      "죽은 대상을 기억하고 한동안 보내지 않는 서킷 브레이커나 아웃라이어 감지",
      "타임아웃을 없앤다",
      "백오프 시간을 늘린다",
    ],
    answer: 1,
    explanation:
      "모든 요청이 죽은 A를 먼저 두드리고 백오프를 기다린 뒤 B로 가서 느려졌다. 실패한 대상을 한동안 빼 두는 장치가 있으면 첫 시도부터 B로 간다. 재시도를 늘리거나 백오프를 키우면 오히려 더 느려진다.",
    anchor: "프로세스가-죽었을-때와-응답이-사라졌을-때",
  },
  {
    id: "chaos-engineering-5",
    post: "chaos-engineering",
    question: "멈춤 조건(stop condition)에 대한 설명으로 옳은 것은?",
    choices: [
      "가설과 같은 기준으로 잡아야 실험이 정확해진다",
      "사람이 대시보드를 보다가 판단해서 누르는 버튼이면 충분하다",
      "가설보다 느슨한, 사용자를 지키는 한계로 잡고 알림과 연결해 도구가 자동으로 고장을 거두게 한다",
      "프로덕션 실험에만 필요하고 스테이징에서는 필요 없다",
    ],
    answer: 2,
    explanation:
      "가설이 깨지는 건 배우는 일이지만 멈춤 조건을 넘는 건 사용자가 다치는 일이라 더 느슨하게 잡는다. AWS FIS의 stopConditions처럼 알람과 연결해 자동으로 멈추게 하고, 그 연결이 실제로 동작하는지 먼저 시험한다.",
    anchor: "멈춤-조건이-없는-실험은-장애다",
  },
  {
    id: "chaos-engineering-6",
    post: "chaos-engineering",
    question: "Chaos Mesh NetworkChaos에서 폭발 반경을 줄이는 설정으로 가장 직접적인 것은?",
    choices: [
      "mode: one과 레이블 셀렉터로 대상 파드를 하나로 좁히고 duration으로 시간을 제한한다",
      "latency 값을 크게 잡는다",
      "namespace를 지정하지 않는다",
      "correlation을 100으로 둔다",
    ],
    answer: 0,
    explanation:
      "반경을 줄이는 손잡이는 대상 수, 대상 트래픽, 시간, 강도다. mode: one과 셀렉터는 대상 수를, duration은 시간을 줄인다. latency를 키우는 건 반대로 강도를 높이는 일이다.",
    anchor: "폭발-반경은-작게-시작해-넓힌다",
  },
];
