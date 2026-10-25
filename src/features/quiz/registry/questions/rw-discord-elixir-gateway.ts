import type { QuizQuestion } from "../types";

export const RW_DISCORD_ELIXIR_GATEWAY: QuizQuestion[] = [
  {
    id: "rw-discord-elixir-gateway-1",
    post: "rw-discord-elixir-gateway",
    question: "2017년 디스코드 글에서 큰 길드의 이벤트 하나를 퍼뜨리는 데 0.9~2.1초가 걸린 직접적인 이유는?",
    choices: [
      "send/2 한 번이 30~70μs였고, 접속한 세션마다 한 번씩 보냈기 때문에",
      "길드 상태를 DB에서 매번 다시 읽었기 때문에",
      "WebSocket 연결마다 TLS 핸드셰이크를 다시 했기 때문에",
      "Erlang GC가 이벤트마다 전체 힙을 복사했기 때문에",
    ],
    answer: 0,
    explanation:
      "보내는 쪽 프로세스가 스케줄에서 내려지는 탓에 send/2 한 번이 30~70μs였고, 3만 명에게 보내면 0.9~2.1초가 된다. 그동안 길드는 다른 메시지를 처리하지 못해 대기열이 쌓였다. GC 문제는 2023년 Manifold offload에서 나온 다른 이야기다.",
    anchor: "25명을-위한-설계가-3만-명을-만났다",
  },
  {
    id: "rw-discord-elixir-gateway-2",
    post: "rw-discord-elixir-gateway",
    question: "디스코드가 이벤트마다 프로세스를 새로 띄워 보내기를 맡기는 방법을 버린 이유는?",
    choices: [
      "Erlang에서 프로세스를 띄우는 비용이 너무 커서",
      "각 이벤트가 다른 시점에 스케줄돼 클라이언트가 기대는 이벤트 순서가 깨질 수 있어서",
      "노드 사이 네트워크 트래픽이 두 배가 돼서",
      "세션 프로세스가 여러 발신자를 구분하지 못해서",
    ],
    answer: 1,
    explanation:
      "글은 Erlang에서 프로세스가 싸다는 점은 인정하면서도, 이벤트마다 다른 시점에 스케줄되면 순서(linearizability)가 깨질 수 있다고 적었다. 디스코드 클라이언트는 그 순서에 기대고 있었다. 그래서 Manifold는 PID를 해시해 같은 세션이 늘 같은 경로를 타게 했다.",
    anchor: "25명을-위한-설계가-3만-명을-만났다",
  },
  {
    id: "rw-discord-elixir-gateway-3",
    post: "rw-discord-elixir-gateway",
    question: "Manifold가 보내기를 나누면서도 세션별 메시지 순서를 지킬 수 있는 이유는?",
    choices: [
      "모든 메시지에 전역 일련번호를 붙여 받는 쪽에서 정렬해서",
      "모든 세션을 길드와 같은 노드로 옮겨서",
      "메시지를 보낼 때마다 받는 쪽의 확인을 기다려서",
      "파티셔너가 PID를 phash2로 해시해 같은 PID는 늘 같은 워커를 거치게 해서",
    ],
    answer: 3,
    explanation:
      "같은 PID는 늘 같은 워커로 가고, 각 구간은 Erlang의 send/2가 순서를 지킨다. 그래서 README는 send/2의 순서 보장을 그대로 유지한다고 적었다. 확인을 기다리거나 일련번호로 정렬하는 방식은 쓰지 않았다.",
    anchor: "노드마다-한-번만-보낸다-manifold",
  },
  {
    id: "rw-discord-elixir-gateway-4",
    post: "rw-discord-elixir-gateway",
    question: "세션 50만 개가 길드 5개씩 해시 링을 조회할 때, ETS로 옮긴 뒤에도 17.5초가 걸린 이유는?",
    choices: [
      "ETS가 디스크에 데이터를 저장해서",
      "ETS 쓰기에 잠금이 걸려서",
      "큰 링 데이터를 ETS에서 꺼낼 때마다 복사해서 한 번에 약 7μs가 들어서",
      "링을 쥔 프로세스가 여전히 모든 요청에 답해서",
    ],
    answer: 2,
    explanation:
      "ETS는 넣고 꺼낼 때 데이터를 복사하고, 링이 커서 복사 비용이 대부분이었다. 그래서 복사 없이 읽는 공유 상수 힙(mochiglobal, FastGlobal)으로 조회를 0.3μs, 전체를 750ms로 줄였다. 대가는 값이 바뀔 때 최대 1초의 모듈 컴파일이다.",
    anchor: "해시-링을-복사하지-않고-읽기",
  },
  {
    id: "rw-discord-elixir-gateway-5",
    post: "rw-discord-elixir-gateway",
    question: "노드 조회를 빠르게 고친 뒤 길드 레지스트리가 무너진 과정을 바르게 설명한 것은?",
    choices: [
      "느린 조회가 하던 역압이 사라져 세션들이 레지스트리 10개로 몰렸고, 타임아웃된 요청이 대기열에 남은 채 재시도가 쌓였다",
      "레지스트리 코드에 메모리 누수가 있었다",
      "서킷 브레이커가 열려 모든 요청이 거절됐다",
      "Manifold 파티셔너가 레지스트리로 메시지를 잘못 보냈다",
    ],
    answer: 0,
    explanation:
      "느린 조회가 사실상 레지스트리를 보호하고 있었다. 보호가 사라지자 세션들이 몰렸고, 타임아웃 뒤에도 요청이 대기열에 남아 일을 만들었다. 세션 메일박스가 부풀며 VM이 메모리 부족으로 죽었고, 디스코드는 서킷 브레이커 대신 세마포어로 상한을 넘는 호출을 바로 거절했다.",
    anchor: "빨라지자-다른-곳에-몰렸다",
  },
  {
    id: "rw-discord-elixir-gateway-6",
    post: "rw-discord-elixir-gateway",
    question: "2023년 디스코드가 큰 서버에서 연결의 약 90%를 수동으로 바꿔 팬아웃을 90% 줄였는데도 버틸 수 있는 서버 크기가 약 3배만 늘었다고 한 이유는?",
    choices: [
      "릴레이를 아직 도입하지 않아서",
      "수동 연결도 결국 모든 메시지를 받기 때문에",
      "일의 총량이 접속자 수의 제곱으로 늘어서, 일이 10분의 1이 되면 사람 수는 그 제곱근만큼만 늘릴 수 있어서",
      "음성 상태 관리가 길드에 남아서",
    ],
    answer: 2,
    explanation:
      "활동량과 이벤트 하나의 팬아웃 비용이 모두 접속자 수에 비례하니 일은 제곱으로 는다. 일을 10분의 1로 줄이면 같은 일로 감당할 사람 수는 10의 제곱근, 약 3배 늘 뿐이다. 그래서 릴레이로 팬아웃을 여러 프로세스에 나눴다.",
    anchor: "2023년-접속자-100만-명이-넘는-서버-하나",
  },
  {
    id: "rw-discord-elixir-gateway-7",
    post: "rw-discord-elixir-gateway",
    question: "2026년 글에서 gRPC 요청 처리 시간의 75%가 추적 컨텍스트 풀기였을 때 디스코드가 쓴 해결은?",
    choices: [
      "추적을 API 서비스에서만 하고 Elixir에서는 끄기",
      "표본 비율을 100%로 올려 판단을 없애기",
      "컨텍스트를 JSON 대신 바이너리로 바꾸기",
      "traceparent의 마지막 플래그 바이트만 먼저 읽어 표본이 아니면 풀지 않기",
    ],
    answer: 3,
    explanation:
      "표본 비율이 1%도 안 돼서 대부분의 풀기는 기록하지 말라는 답만 얻었다. 마지막 바이트의 가장 낮은 비트가 sampled 플래그이니, 그 비트가 0이면 나머지를 풀지 않고 버렸다. 그것으로 CPU 사용량이 정상으로 돌아왔다.",
    anchor: "2026년-퍼뜨리는-길을-추적하기",
  },
];
