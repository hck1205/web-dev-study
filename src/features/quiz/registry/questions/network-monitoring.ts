import type { QuizQuestion } from "../types";

export const NETWORK_MONITORING: QuizQuestion[] = [
  {
    id: "network-monitoring-1",
    post: "network-monitoring",
    question:
      "연결이 가끔 3초씩 걸리는데 앱 로그에는 아무 흔적이 없다. 서버에서 가장 먼저 볼 숫자는?",
    choices: [
      "인터페이스의 송신 바이트 수",
      "TcpExtListenOverflows와 LISTEN 소켓의 Recv-Q·Send-Q",
      "TIME_WAIT 소켓 수",
      "CPU 사용률",
    ],
    answer: 1,
    explanation:
      "accept 큐가 차면 커널이 SYN을 조용히 버리고 클라이언트는 1초, 2초 뒤에 재전송해서 몇 초가 사라진다. 앱은 그 연결을 받은 적이 없어 로그가 없다. 바이트 수나 CPU는 이 상황에서 평온하게 보일 수 있다.",
    anchor: "accept-큐가-넘치면-syn이-소리-없이-사라진다",
  },
  {
    id: "network-monitoring-2",
    post: "network-monitoring",
    question:
      "tc의 tbf 큐에서 패킷 5천여 개가 버려졌는데 ip -s link의 TX dropped는 0이다. 왜 그런가?",
    choices: [
      "ip -s link는 재부팅 후 초기화되기 때문에",
      "tbf가 버린 패킷은 재전송되어 결국 성공했으므로 세지 않는다",
      "qdisc는 드라이버에 넘기기 전 단계라 그 버림은 인터페이스 카운터가 아니라 tc -s qdisc에 남는다",
      "veth에서는 TX 카운터가 동작하지 않기 때문에",
    ],
    answer: 2,
    explanation:
      "보내기 전 큐(qdisc)에서 버린 패킷은 드라이버가 세는 인터페이스 카운터에 잡히지 않는다. 그래서 인터페이스 카운터가 깨끗해도 tc -s qdisc를 따로 봐야 한다.",
    anchor: "인터페이스가-0이어도-큐에서-버려진다",
  },
  {
    id: "network-monitoring-3",
    post: "network-monitoring",
    question: "내 서버의 인터페이스 카운터에 버림이 없는데도 재전송 비율을 따로 보는 이유는?",
    choices: [
      "재전송은 경로 중간이나 상대 쪽에서 잃어버린 패킷까지 결과로 남기기 때문에",
      "재전송 수가 대역폭을 정확히 알려 주기 때문에",
      "재전송은 TIME_WAIT 수와 항상 같기 때문에",
      "인터페이스 카운터는 TCP 패킷을 세지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "내 카운터는 내 서버에서 버린 것만 센다. 스위치나 클라우드 라우터, 상대 서버에서 잃어버린 패킷은 TCP가 다시 보내야 하니 재전송 횟수로 드러난다. 그래서 보낸 조각 대비 비율로 바꿔 평소와 비교한다.",
    anchor: "재전송은-잃어버린-패킷의-영수증",
  },
  {
    id: "network-monitoring-4",
    post: "network-monitoring",
    question:
      "blackbox의 DNS 검사로 느린 리졸버를 잡으려고 probe_dns_lookup_time_seconds > 0.2 알림을 걸었는데, 질의마다 250ms가 걸려도 울리지 않는다. 이유는?",
    choices: [
      "for 기간이 너무 짧아서",
      "DNS 프로버는 UDP라서 시간을 재지 않는다",
      "그 지표는 target 주소를 IP로 바꾸는 시간이고, 질의 응답 시간은 probe_dns_duration_seconds{phase=\"request\"}에 있다",
      "Prometheus가 0.2 같은 소수 비교를 지원하지 않아서",
    ],
    answer: 2,
    explanation:
      "probe_dns_lookup_time_seconds는 모든 프로버에 붙는, target 자체를 풀이한 시간이라 target이 IP면 거의 0이다. DNS 서버가 답한 시간은 request 단계 지표에 있다. 알림을 만들면 일부러 장애를 만들어 실제로 울리는지 확인해야 한다.",
    anchor: "알림은-손실과-실패에-건다",
  },
  {
    id: "network-monitoring-5",
    post: "network-monitoring",
    question:
      "카운터 샘플이 1000, 1300, 60, 360(10초 간격)으로 들어왔다. Prometheus의 rate 방식으로 계산한 초당 증가량에 가장 가까운 것은? (구간 끝 보정은 무시)",
    choices: ["-21.3", "12", "22", "36"],
    answer: 2,
    explanation:
      "1300에서 60으로 줄어든 곳은 재시작으로 보고 60을 증가분으로 더한다. 300 + 60 + 300 = 660을 30초로 나누면 22다. 그냥 빼기만 하면 음수가 나와 그래프가 바닥을 뚫는다.",
    anchor: "누적값을-속도로-바꾸는-rate",
  },
  {
    id: "network-monitoring-6",
    post: "network-monitoring",
    question: "SNMP로 10Gbit/s 회선의 트래픽을 수집할 때 ifOutOctets 대신 ifHCOutOctets를 쓰는 이유는?",
    choices: [
      "ifHCOutOctets만 SNMPv3 암호화를 지원해서",
      "32비트 카운터는 꽉 찬 10Gbit/s에서 약 3.4초 만에 한 바퀴 돌아 수집 간격 사이에 몇 번 돌았는지 알 수 없어서",
      "ifOutOctets는 수신 바이트만 세서",
      "ifHCOutOctets가 패킷 수까지 함께 알려 줘서",
    ],
    answer: 1,
    explanation:
      "2의 32제곱 바이트는 약 4.3GB라 10Gbit/s에서 3.4초면 넘친다. 한 바퀴 돈 것을 리셋으로 오인하면 증가량을 적게 센다. 64비트 HC 카운터는 이 문제가 사실상 없다.",
    anchor: "스위치와-라우터는-snmp로-묻는다",
  },
  {
    id: "network-monitoring-7",
    post: "network-monitoring",
    question: "probe_success == 0 알림만 걸어 둔 상태에서 blackbox_exporter 프로세스가 죽으면 어떻게 되나?",
    choices: [
      "probe_success가 0이 되어 모든 대상에 알림이 울린다",
      "Prometheus가 마지막 값 1을 계속 유지해 정상으로 보인다",
      "probe_success 시계열이 아예 사라져서 알림이 울리지 않는다",
      "blackbox가 재시작될 때까지 Prometheus도 멈춘다",
    ],
    answer: 2,
    explanation:
      "blackbox가 죽으면 probe 결과 자체가 수집되지 않아 시계열이 비고, == 0 조건에 맞는 값이 없으니 조용하다. up{job=\"blackbox\"} == 0이나 absent()로 감시 장치 자신을 함께 감시한다.",
    anchor: "현장에서-그래프를-펼치는-순서",
  },
];
