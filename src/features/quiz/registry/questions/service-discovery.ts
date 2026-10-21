import type { QuizQuestion } from "../types";

export const SERVICE_DISCOVERY: QuizQuestion[] = [
  {
    id: "service-discovery-1",
    post: "service-discovery",
    question: "클라이언트 측 디스커버리의 단점에 가장 가까운 것은?",
    choices: [
      "요청마다 중간 로드 밸런서를 한 번 더 거쳐 느려진다",
      "인스턴스를 고르는 정책을 호출자가 바꿀 수 없다",
      "호출자마다 레지스트리를 읽고 고르는 라이브러리가 언어별로 필요하다",
      "레지스트리가 필요 없어서 목록이 쉽게 낡는다",
    ],
    answer: 2,
    explanation:
      "클라이언트 측은 호출자가 목록을 받아 직접 고르므로 중간 홉이 없고 정책도 자유롭다. 대신 그 로직이 호출자 프로세스 안에 있어야 해서 언어마다 같은 라이브러리를 갖춰야 한다. 중간 홉이 생기는 건 서버 측 방식이다.",
    anchor: "목록을-누가-들고-있나",
  },
  {
    id: "service-discovery-2",
    post: "service-discovery",
    question: "etcd에 TTL 5초 임대로 등록한 인스턴스가 OOM으로 갑자기 죽었다. 목록에서는 언제 빠지나?",
    choices: [
      "죽는 순간 etcd가 프로세스 종료를 감지해 바로 지운다",
      "마지막 keepalive 이후 최대 TTL(5초)이 지나 임대가 만료될 때",
      "누군가 etcdctl del로 지울 때까지 남는다",
      "호출자가 연결에 실패하는 순간 지워진다",
    ],
    answer: 1,
    explanation:
      "etcd는 프로세스를 보지 않고 임대 갱신만 본다. keepalive가 끊기면 TTL이 지나 임대가 만료되고 묶인 키가 함께 지워지며, 그 사이 최대 TTL만큼은 죽은 주소가 목록에 남는다. 정상 종료 때는 lease revoke로 바로 지우는 게 좋다.",
    anchor: "살아-있는-동안만-남는-등록",
  },
  {
    id: "service-discovery-3",
    post: "service-discovery",
    question: "임대 keepalive만으로는 부족하고 헬스 체크가 따로 필요한 이유는?",
    choices: [
      "keepalive는 TCP가 아니라 UDP라서 유실되기 쉽다",
      "프로세스가 살아 있어도 DB 연결이 끊겨 요청을 처리하지 못할 수 있다",
      "헬스 체크가 있어야 레지스트리가 Raft 과반을 유지한다",
      "keepalive는 1분 이상 간격으로만 보낼 수 있다",
    ],
    answer: 1,
    explanation:
      "임대는 프로세스가 살아 있다는 것만 알려 준다. 모든 요청에 500을 주는 인스턴스도 keepalive는 잘 보낸다. 실제로 일할 수 있는지는 레지스트리가 직접 묻는 헬스 체크(쿠버네티스의 readiness)로 본다.",
    anchor: "살아-있다는-것과-일할-수-있다는-것",
  },
  {
    id: "service-discovery-4",
    post: "service-discovery",
    question: "DNS 레코드 TTL이 0인데도 자바 서비스만 30초 동안 옛 IP로 연결한다. 가장 유력한 원인은?",
    choices: [
      "JVM이 InetAddress 캐시에 성공한 조회를 기본 30초 동안 들고 있다",
      "DNS 서버가 TTL 0을 30초로 바꿔서 준다",
      "리눅스 커널이 ARP 캐시로 IP를 30초 고정한다",
      "TTL 0이면 리졸버가 응답을 무시한다",
    ],
    answer: 0,
    explanation:
      "JVM은 OS와 별도로 InetAddress 캐시를 두고, 보안 관리자가 없으면 성공한 조회를 30초 캐시한다. 실습에서도 처음 조회 시각에서 정확히 30초 뒤에 새 주소가 나왔다. networkaddress.cache.ttl로 줄인다.",
    anchor: "dns로-찾으면-캐시가-끼어든다",
  },
  {
    id: "service-discovery-5",
    post: "service-discovery",
    question: "DNS 캐시를 5초로 줄였는데도 HTTP 클라이언트가 계속 드레이닝 중인 옛 서버로 요청한다. 왜 그런가?",
    choices: [
      "SRV 레코드에는 포트가 없어서",
      "부정 캐시가 새 주소를 막고 있어서",
      "이미 열린 keep-alive 연결은 DNS를 다시 보지 않고 연결된 주소로 계속 보내서",
      "Consul이 TTL 0을 줘서 캐시가 안 돼서",
    ],
    answer: 2,
    explanation:
      "연결 풀은 한 번 연결하면 상대 주소가 고정이라 DNS가 바뀌어도 그 연결을 계속 쓴다. 옛 서버가 살아 있으면 끊기지도 않는다. 그래서 연결 풀에 최대 수명을 두어 주기적으로 새로 열게 한다.",
    anchor: "dns로-찾으면-캐시가-끼어든다",
  },
  {
    id: "service-discovery-6",
    post: "service-discovery",
    question: "인스턴스가 레지스트리 목록에 들어왔다 빠졌다를 반복한다(flapping). 먼저 손볼 것은?",
    choices: [
      "레지스트리 서버 수를 5대에서 3대로 줄인다",
      "DNS TTL을 0으로 바꾼다",
      "호출자의 재시도 횟수를 늘린다",
      "TTL이나 헬스 체크 기준을 조금 느슨하게 하고, 빼는 기준과 넣는 기준을 다르게 둔다",
    ],
    answer: 3,
    explanation:
      "GC 정지나 순간 부하로 한 번 늦은 응답에 빠지는 건 기준이 너무 빡빡해서다. 빠졌다 들어오기를 반복하면 남은 인스턴스에 부하가 몰린다. 연속 실패 횟수와 연속 성공 횟수를 따로 두어 안정시킨다.",
    anchor: "목록이-틀렸을-때-생기는-증상",
  },
];
