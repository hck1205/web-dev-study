import type { QuizQuestion } from "../types";

export const TRAFFIC_SHAPING_QOS: QuizQuestion[] = [
  {
    id: "traffic-shaping-qos-1",
    post: "traffic-shaping-qos",
    question: "같은 10Mbps 한도를 폴리싱과 셰이핑으로 걸었더니 받은 양은 비슷한데 폴리싱 쪽 재전송이 훨씬 많았다. 이유는?",
    choices: [
      "폴리싱은 패킷을 큐에 오래 붙잡아 두어 타임아웃이 나서",
      "폴리싱은 넘친 패킷을 바로 버려서, TCP가 손실을 보고 다시 보내기 때문에",
      "셰이핑이 재전송된 패킷을 걸러 내서",
      "폴리싱은 ACK만 골라 버려서",
    ],
    answer: 1,
    explanation:
      "셰이퍼는 넘친 패킷을 큐에서 기다리게 해 지연으로 신호를 주고, 폴리서는 버려서 손실로만 신호를 준다. 실험에서 폴리싱 쪽은 보낸 양의 약 24%가 버려져 다시 보내졌다. 그만큼 앞 구간 회선을 낭비한다.",
    anchor: "셰이핑은-기다리게-하고-폴리싱은-버린다",
  },
  {
    id: "traffic-shaping-qos-2",
    post: "traffic-shaping-qos",
    question: "10Mbps 병목의 큐를 400ms에서 20ms로 얕게 줄이면 다운로드 중에 어떤 변화가 생기나?",
    choices: [
      "다운로드 속도가 크게 떨어지고 ping은 그대로다",
      "다운로드 속도는 거의 같고 ping이 크게 줄어든다",
      "둘 다 그대로다",
      "패킷 손실이 사라진다",
    ],
    answer: 1,
    explanation:
      "깊은 큐는 처리량을 늘리지 않고 같은 줄의 모든 패킷을 늦출 뿐이다. 실험에서 두 경우 모두 9.57Mbps였지만 ping은 194ms에서 41ms로 줄었다. 이 현상이 bufferbloat이다.",
    anchor: "큐가-깊으면-지연이-된다",
  },
  {
    id: "traffic-shaping-qos-3",
    post: "traffic-shaping-qos",
    question: "집 회선 업로드가 10Mbps일 때 공유기에서 셰이핑 속도를 9Mbps로 조금 낮게 잡는 이유는?",
    choices: [
      "남는 1Mbps를 관리 트래픽용으로 비워 두려고",
      "공유기 CPU 부하를 줄이려고",
      "큐가 통신사 모뎀이 아니라 내가 관리하는 공유기에 생기게 하려고",
      "TCP 헤더 크기만큼 빼 주려고",
    ],
    answer: 2,
    explanation:
      "내 장비가 회선보다 빠르게 내보내면 실제 줄은 앞의 통신사 장비에 생기고, 그 큐의 순서와 깊이는 바꿀 수 없다. 조금 낮게 셰이핑하면 병목이 내 장비로 와서 fq_codel이나 HTB로 줄을 관리할 수 있다.",
    anchor: "큐가-깊으면-지연이-된다",
  },
  {
    id: "traffic-shaping-qos-4",
    post: "traffic-shaping-qos",
    question: "HTB에서 보장 3Mbps, ceil 10Mbps인 클래스가 혼자 트래픽을 보내면 대략 얼마나 쓰나?",
    choices: ["3Mbps", "6.5Mbps", "10Mbps 가까이", "0Mbps, 다른 클래스가 올 때까지 기다린다"],
    answer: 2,
    explanation:
      "rate는 보장 속도이고, 다른 클래스가 놀고 있으면 ceil까지 빌려 쓸 수 있다. 실험에서도 혼자 보낸 흐름이 9.44Mbps를 썼다. 다른 클래스가 오면 보장 몫으로 돌아간다.",
    anchor: "몫을-나누는-htb",
  },
  {
    id: "traffic-shaping-qos-5",
    post: "traffic-shaping-qos",
    question: "HTB 트리를 걸었는데 아무 효과가 없고 트래픽이 제한 없이 나간다. 가장 먼저 확인할 것은?",
    choices: [
      "htb default 클래스를 지정했는지",
      "DSCP 표시가 붙어 있는지",
      "혼잡 제어가 BBR인지",
      "MTU가 1500인지",
    ],
    answer: 0,
    explanation:
      "default를 지정하지 않으면 어느 필터에도 걸리지 않은 패킷은 클래스를 거치지 않고 바로 나간다. tc -s qdisc의 direct_packets_stat이 늘고 있으면 이 경우다. 필터가 기대한 트래픽을 잡는지도 tc -s class로 함께 본다.",
    anchor: "몫을-나누는-htb",
  },
  {
    id: "traffic-shaping-qos-6",
    post: "traffic-shaping-qos",
    question: "서버가 음성 패킷에 DSCP EF를 붙여 보냈는데 공용 인터넷 건너편에서 우선 처리되지 않는다. 가장 그럴듯한 이유는?",
    choices: [
      "EF는 TCP에만 쓸 수 있어서",
      "관리하지 않는 망은 DSCP를 믿지 않고 무시하거나 지우기 때문에",
      "tos 0xb8이 잘못된 값이라서",
      "DSCP는 IPv6에서만 동작해서",
    ],
    answer: 1,
    explanation:
      "DSCP는 누구나 붙일 수 있는 표시라 경계 밖의 망은 신뢰하지 않는다. 공용 인터넷과 대부분의 클라우드 망은 무시하거나 0으로 지운다. 사내망이나 계약한 회선처럼 경계 안에서만 쓰고, 입구에서 바깥 표시를 지우고 다시 붙인다.",
    anchor: "패킷에-표시를-붙이는-dscp",
  },
  {
    id: "traffic-shaping-qos-7",
    post: "traffic-shaping-qos",
    question: "리눅스에서 들어오는 다운로드를 5Mbps로 셰이핑하려면?",
    choices: [
      "eth0 root에 tbf를 건다",
      "ingress에서 mirred로 ifb 장치에 돌리고 ifb의 나가는 문에 tbf를 건다",
      "DSCP를 CS1로 바꾼다",
      "TCP 수신 버퍼를 5MB로 줄인다",
    ],
    answer: 1,
    explanation:
      "qdisc는 나가는 문에서 동작하므로 root에 거는 tbf는 업로드만 제한한다. 들어오는 패킷은 ifb로 돌려 그 장치의 나가는 문에서 줄 세우고, 늦어진 ACK를 본 보내는 쪽 TCP가 속도를 맞춘다. 실험에서 다운로드가 4.7Mbps로 묶였다.",
    anchor: "들어오는-트래픽은-줄-세울-수-없다",
  },
];
