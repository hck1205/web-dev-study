import type { QuizQuestion } from "../types";

export const BGP_BASICS: QuizQuestion[] = [
  {
    id: "bgp-basics-1",
    post: "bgp-basics",
    question: "BGP가 경로를 주고받을 때 TCP 179번 위에서 동작하는 이유로 가장 알맞은 것은?",
    choices: [
      "UDP는 방화벽에서 막히기 때문에",
      "TCP가 암호화를 제공하기 때문에",
      "바뀐 것만 보내는 방식이라 메시지가 빠짐없이 순서대로 도착한다는 보장이 필요해서",
      "TCP만 멀티캐스트를 지원해서",
    ],
    answer: 2,
    explanation:
      "BGP는 처음에 전체 경로를 보내고 이후엔 변경분만 보낸다. 그 전제를 TCP의 신뢰성과 순서 보장에 맡겼기 때문에 재전송이나 주기적 전체 전송을 직접 하지 않는다. TCP는 암호화를 해 주지 않는다.",
    anchor: "두-라우터가-이웃이-되는-과정",
  },
  {
    id: "bgp-basics-2",
    post: "bgp-basics",
    question: "FRR에서 eBGP 세션이 붙었는데 State/PfxRcd 칸에 숫자 대신 (Policy)가 보인다. 원인은?",
    choices: [
      "상대 AS 번호가 설정과 달라서",
      "eBGP 이웃에 in/out 정책(route-map)을 걸지 않아 RFC 8212 기본 동작으로 경로를 주고받지 않아서",
      "hold time이 맞지 않아서",
      "TCP 179번이 막혀서",
    ],
    answer: 1,
    explanation:
      "FRR은 정책 없이 붙은 eBGP 이웃과는 경로를 받지도 보내지도 않는다. 실수로 남의 경로를 흘리는 사고를 막는 기본값이다. 179번이 막혔다면 세션이 Active나 Connect에 머문다.",
    anchor: "두-라우터가-이웃이-되는-과정",
  },
  {
    id: "bgp-basics-3",
    post: "bgp-basics",
    question: "iBGP 라우터들이 서로 full mesh로 세션을 맺어야 하는(또는 경로 반사기를 두는) 이유는?",
    choices: [
      "iBGP는 AS_PATH를 바꾸지 않아서, 루프를 막으려고 iBGP로 받은 경로를 다른 iBGP 이웃에 넘기지 않기 때문에",
      "iBGP는 UDP를 써서 신뢰성이 낮기 때문에",
      "iBGP는 LOCAL_PREF를 전달하지 못해서",
      "eBGP와 달리 iBGP는 NEXT_HOP을 항상 바꾸기 때문에",
    ],
    answer: 0,
    explanation:
      "eBGP는 AS_PATH에 자기 번호가 있으면 버리는 방식으로 루프를 막지만 iBGP는 붙일 번호가 없다. 대신 받은 경로를 다른 iBGP 이웃에 넘기지 않으므로 모두가 직접 연결돼야 경로가 다 퍼진다. iBGP는 NEXT_HOP을 기본으로 바꾸지 않는다.",
    anchor: "ebgp와-ibgp는-규칙이-다르다",
  },
  {
    id: "bgp-basics-4",
    post: "bgp-basics",
    question: "상대 AS가 prepend로 AS_PATH를 세 배 길게 만들었는데도 내 라우터가 그 경로를 고른다. 가장 그럴듯한 이유는?",
    choices: [
      "MED가 더 낮아서",
      "ORIGIN이 IGP라서",
      "라우터 ID가 더 작아서",
      "그 경로에 내 AS 정책으로 더 높은 LOCAL_PREF를 줬기 때문에",
    ],
    answer: 3,
    explanation:
      "LOCAL_PREF는 AS_PATH 길이보다 앞 단계에서 비교된다. 실습에서도 LOCAL_PREF 200을 준 경로가 AS 세 개짜리 경로인데도 best (Local Pref)로 골라졌다. MED나 라우터 ID는 훨씬 뒤 단계다.",
    anchor: "같은-대역에-경로가-여럿이면-하나를-고른다",
  },
  {
    id: "bgp-basics-5",
    post: "bgp-basics",
    question: "주인이 198.51.100.0/24를 광고하는데 다른 AS가 198.51.100.0/25를 광고했다. BGP 표의 /24 최적 경로는 주인 쪽인데도 패킷이 다른 AS로 가는 이유는?",
    choices: [
      "BGP가 /25 쪽을 최적 경로로 다시 골라서",
      "/24와 /25는 별개의 목적지이고, 패킷은 커널 테이블에서 가장 길게 맞는 경로를 따르기 때문에",
      "/25 쪽 AS_PATH가 더 짧아서",
      "다른 AS가 LOCAL_PREF를 높게 보내서",
    ],
    answer: 1,
    explanation:
      "최적 경로 선택은 같은 대역 안에서만 일어나고 /25는 경쟁 없이 따로 채택된다. 커널은 최장 접두사 일치로 /25를 고른다. LOCAL_PREF는 AS 밖으로 전달되지 않는다.",
    anchor: "더-자세한-광고가-이기는-이유",
  },
  {
    id: "bgp-basics-6",
    post: "bgp-basics",
    question: "ROA가 198.51.100.0/24, maxLength 24, AS 65001이다. AS 65001이 198.51.100.0/25를 광고하면 ROV 판정은?",
    choices: ["Valid", "NotFound", "Invalid", "판정하지 않는다"],
    answer: 2,
    explanation:
      "덮는 ROA가 있고 AS도 맞지만 /25가 maxLength 24보다 작은 조각이라 Invalid다. 주인이라도 ROA를 고치지 않고 더 작은 조각을 광고하면 자기 광고가 버려진다.",
    anchor: "출처를-증명하는-rpki",
  },
  {
    id: "bgp-basics-7",
    post: "bgp-basics",
    question: "중간 장비가 멈춰 BGP 상대가 응답하지 않는다. 기본 설정에서 세션이 내려가기까지 오래 걸리는 이유와 대책으로 맞는 것은?",
    choices: [
      "hold time(기본 180초)이 끝나야 죽음을 알기 때문에, BFD를 붙여 빠르게 감지한다",
      "MRAI 때문에, MRAI를 0으로 바꾼다",
      "RPKI 검증이 오래 걸려서, RPKI를 끈다",
      "TCP 재전송이 무한히 반복돼서, TCP 대신 UDP를 쓰게 한다",
    ],
    answer: 0,
    explanation:
      "링크가 내려가지 않는 장애는 KEEPALIVE가 hold time 동안 끊겨야 알 수 있다. hold time을 마구 줄이기보다 가벼운 감지 패킷을 주고받는 BFD를 붙여 1초 안에 알게 한다.",
    anchor: "길이-바뀌면-왜-늦게-퍼지나",
  },
];
