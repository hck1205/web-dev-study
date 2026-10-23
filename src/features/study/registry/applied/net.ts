import type { AppliedQuestion } from "./types";

export const NET_APPLIED: AppliedQuestion[] = [
  {
    id: "net-01",
    posts: ["tcp-connection-lifecycle", "linux-network-tuning", "ports-and-sockets", "linux-namespaces-cgroups"],
    prompt:
      "이벤트 오픈 직후 Pod로 뜬 API 서버에 가끔 정확히 1초, 3초 늦게 붙는 연결이 생긴다. CPU는 한가하고 앱 로그에는 오류가 없다. 노드에서 somaxconn을 4096으로 올렸는데도 그대로다. 무엇이 범인이고 어디서 확인하나.",
    points: [
      "accept 큐가 차면 커널은 SYN을 버리고 클라이언트가 1초 뒤 재전송해서야 붙으니, 지연이 1초 단위로 뭉친다.",
      "큐 길이는 listen() backlog와 somaxconn 중 작은 값이라 Node나 nginx가 쓰는 511이 그대로 상한이 되고, ss -ltn의 LISTEN 줄에서 Send-Q가 실제 길이, Recv-Q가 지금 선 수다.",
      "Pod는 네트워크 네임스페이스가 따로라서 노드의 somaxconn은 Pod 안에 미치지 않고, securityContext.sysctls로 넣어야 한다.",
      "nstat이나 netstat -s의 listen overflow 카운터가 오르는지로 확정하고, 큐를 늘리는 건 기다릴 자리를 늘릴 뿐이라 꾸준한 초과는 서버를 늘리거나 앞단에서 제한한다.",
    ],
  },
  {
    id: "net-02",
    posts: ["timeouts", "osi-in-practice", "tcp-connection-lifecycle", "nginx-reverse-proxy"],
    prompt:
      "ALB 뒤의 Node 서버에서 트래픽이 적은 새벽에만 하루 몇 건씩 502가 난다. 앱 로그에는 그 요청이 아예 없고, 재현도 안 된다. 어디가 어긋났고 어떤 값을 어떻게 고치나.",
    points: [
      "Node의 keepAliveTimeout 기본 5초가 ALB의 idle timeout 60초보다 짧아서 앱이 먼저 유휴 연결을 닫고, 그 FIN이 닿기 전에 LB가 요청을 실으면 앱 커널이 RST로 답해 502가 된다.",
      "앱 로그가 비어 있는 이유는 요청이 앱 코드에 도달하지 못하고 커널 수준에서 거절됐기 때문이고, 패킷으로 보면 RST가 앱 쪽에서 먼저 나온다.",
      "안쪽(앱)의 keep-alive 유휴 시간을 바깥(LB, nginx upstream keepalive_timeout)보다 길게, 예를 들어 65초로 두면 닫는 순서가 바뀌어 사라진다.",
      "같은 모양이 nginx와 앱 사이에서도 나며, nginx upstream의 keepalive는 연결 상한이 아니라 남겨 두는 유휴 연결 수라는 점까지 같이 본다.",
    ],
  },
  {
    id: "net-03",
    posts: ["tcp-connection-lifecycle", "linux-systemd-systemctl", "linux-network-tuning", "ports-and-sockets"],
    prompt:
      "systemd로 띄운 API 서버가 며칠 뒤 Too many open files를 내며 새 연결을 못 받는다. ss로 보니 CLOSE_WAIT 상태가 수천 개 쌓여 있다. 원인은 어느 쪽에 있고, 임시 조치와 근본 조치는 무엇인가.",
    points: [
      "CLOSE_WAIT는 상대가 FIN을 보냈는데 내 앱이 close()를 안 부른 상태라 커널이 아니라 내 코드의 버그이고, ss -tnp의 users 칸으로 pid와 fd를 찾는다.",
      "소켓 하나가 fd 하나를 쥐므로 쌓이면 프로세스 fd 한도에 닿고, systemd 서비스라면 그 한도는 ulimit이 아니라 유닛의 LimitNOFILE이다.",
      "LimitNOFILE을 올리는 건 시간을 버는 임시 조치이고, 응답을 끝까지 읽지 않거나 에러 경로에서 소켓을 닫지 않는 코드를 고쳐야 멈춘다.",
      "TIME_WAIT 수천 개는 정상이고 60초 뒤 사라지지만, CLOSE_WAIT는 앱이 닫기 전까지 영원히 남는다는 차이로 둘을 가른다.",
    ],
  },
  {
    id: "net-04",
    posts: ["layer-mtu-fragmentation", "layer-ip-routing-icmp", "packet-encapsulation", "network-troubleshooting-by-layer"],
    prompt:
      "VPN으로 붙은 사용자만 로그인은 되는데 대시보드의 큰 JSON 응답이 영영 안 온다. 서버에서 curl localhost는 멀쩡하다. 왜 큰 응답만 멈추고, 어떤 명령으로 확인하며, 어디를 고치나.",
    points: [
      "VPN 터널 헤더만큼 안쪽 MTU가 줄어 있어서 작은 패킷은 통과하고 MTU를 넘는 패킷만 걸리는 PMTU 블랙홀이다.",
      "DF가 켜진 패킷이 크기를 넘으면 라우터가 ICMP Fragmentation Needed를 돌려줘야 하는데 방화벽이 ICMP를 막으면 보내는 쪽이 줄일 줄 몰라 재전송만 반복한다.",
      "tracepath로 경로 MTU를 재고, ping -M do -s 크기로 어느 크기부터 안 가는지 이분으로 좁힌다.",
      "ICMP를 열 수 없다면 라우터나 VPN 끝에서 MSS 클램핑으로 TCP가 처음부터 작은 세그먼트를 쓰게 하거나 인터페이스 MTU를 낮춘다.",
    ],
  },
  {
    id: "net-05",
    posts: ["layer-ip-addressing", "layer-ip-routing-icmp", "docker-network-drivers"],
    prompt:
      "회사 VPN을 붙이면 옆자리 동료는 사내 서버 172.17.5.10에 붙는데 내 노트북만 안 되고, Docker를 끄면 된다. 왜 그런지 라우팅 규칙으로 설명하고, 팀 전체에 재발하지 않게 하려면 무엇을 바꾸나.",
    points: [
      "Docker 기본 브리지가 172.17.0.0/16을 잡고 있어서 VPN이 준 172.16.0.0/12보다 프리픽스가 길고, 최장 접두사 일치 규칙으로 패킷이 docker0로 들어가 사라진다.",
      "ip route get 172.17.5.10으로 어느 장치로 나가는지 바로 확인할 수 있다.",
      "dockerd의 default-address-pools를 사내망과 겹치지 않는 대역으로 바꾸면 팀 전체에서 재발하지 않는다.",
      "망을 새로 만들 때는 앞으로 이을 VPN, VPC, 쿠버네티스 Pod 대역까지 적어 두고 겹치지 않게 나눈다.",
    ],
  },
  {
    id: "net-06",
    posts: ["k8s-coredns", "dns", "iptables-nat", "udp-and-quic"],
    prompt:
      "Pod 하나에서 외부 결제 API 호출이 가끔 정확히 5초씩 늦는다. HTTP 구간이 아니라 이름 풀이에서 시간이 사라지고, CoreDNS 로그에는 이름 하나에 질의가 여덟 줄씩 찍힌다. 두 숫자의 정체와 고치는 방법을 말하라.",
    points: [
      "resolv.conf의 search 세 줄과 ndots:5 때문에 점이 다섯 개 미만인 바깥 이름은 search를 먼저 다 돌고 마지막에 그대로 묻는다.",
      "DNS는 UDP라 답이 사라져도 재전송이 없고, 리졸버가 timeout 5초를 기다린 뒤 다음 서버나 다음 칸으로 넘어가서 5초 단위 지연이 된다.",
      "kube-dns는 가상 IP라서 질의가 DNAT을 타고, 같은 순간 A와 AAAA 두 질의가 conntrack 항목을 두고 경쟁하면 한쪽이 버려진다.",
      "이름을 FQDN(끝에 점)으로 쓰거나 dnsConfig로 ndots를 낮추고, NodeLocal DNSCache로 노드 안에서 캐시하고 TCP로 올리면 사라진다.",
    ],
  },
  {
    id: "net-07",
    posts: ["dns", "hosts-file", "what-happens-google-com", "curl-for-debugging"],
    prompt:
      "서버를 옮기고 A 레코드를 바꿨다. 휴대폰은 새 서버가 뜨는데 내 노트북은 한 시간째 옛 서버다. 전파를 기다려야 하나, 아니면 바꾸기 전에 할 수 있던 일이 있었나.",
    points: [
      "전파가 아니라 캐시다. 리졸버는 TTL이 끝날 때까지 옛 답을 들고 있고, 바꾸기 며칠 전 TTL을 60초처럼 짧게 내렸다가 바꾸면 시차가 줄어든다.",
      "노트북은 리졸버 외에 브라우저 DNS 캐시, OS 캐시, 열려 있는 keep-alive 연결까지 옛 IP를 붙잡고 있어서 리졸버가 갱신돼도 늦는다.",
      "hosts 파일은 nsswitch의 files가 dns보다 앞이라 DNS보다 먼저 읽히니, 테스트용으로 적어 둔 줄이 남아 있으면 영영 옛 서버다.",
      "바꾸기 전에 curl --resolve 이름:443:새IP로 새 서버가 Host와 인증서까지 제대로 답하는지 확인하면 DNS를 건드리지 않고 검증할 수 있다.",
    ],
  },
  {
    id: "net-08",
    posts: ["proxy-reverse-proxy", "nginx-reverse-proxy", "k8s-service-types"],
    prompt:
      "앱 로그의 클라이언트 IP가 전부 로드 밸런서나 노드 주소로 찍혀서 IP별 요청 제한이 무용지물이다. 서버 앞에는 CDN, L4 LB, nginx, 그리고 NodePort Service가 있다. 진짜 IP를 어디서 어떻게 복원하고, 무엇을 믿으면 안 되나.",
    points: [
      "리버스 프록시는 새 연결을 열어 앱에 붙으니 소켓 원격 주소는 늘 프록시이고, 원래 주소는 X-Forwarded-For 같은 헤더로만 전달된다.",
      "X-Forwarded-For는 왼쪽이 멀고 오른쪽이 가까우니 오른쪽부터 내가 믿는 프록시 대역을 건너뛰고 처음 나오는 모르는 주소를 고르고, 가장 왼쪽은 사용자가 지어낼 수 있다.",
      "nginx는 proxy_set_header로 헤더를 넘기고 set_real_ip_from에는 0.0.0.0/0이 아니라 CDN과 LB 대역만 적는다.",
      "NodePort의 기본 externalTrafficPolicy: Cluster는 응답 경로를 맞추려고 SNAT을 하므로 노드 주소가 찍히고, Local로 바꾸면 보존되지만 Pod 없는 노드는 헬스 체크로 빼야 한다.",
      "헤더를 못 붙이는 L4 LB 뒤라면 PROXY protocol로 원 주소를 연결 앞에 실어 보낸다.",
    ],
  },
  {
    id: "net-09",
    posts: ["server-sent-events", "realtime-communication", "nginx-reverse-proxy", "http-message"],
    prompt:
      "주문 상태 알림을 SSE로 만들었다. 로컬에서는 1초마다 오던 이벤트가 nginx 뒤에 배포하자 몇 초 동안 조용하다가 한꺼번에 몰려온다. 가끔은 끊긴 뒤 다시 붙지도 않는다. 원인을 층별로 나눠 말하고 무엇을 고치나.",
    points: [
      "nginx는 기본으로 업스트림 응답을 버퍼에 모았다가 보내니 끝나지 않는 스트림은 버퍼가 찰 때까지 안 나가고, proxy_buffering off나 앱의 X-Accel-Buffering: no 헤더로 끈다.",
      "gzip 미들웨어나 CDN도 같은 이유로 스트림을 붙잡으니 버퍼링을 껐는데도 몰리면 그다음 후보다.",
      "길이를 모르는 본문은 chunked로 가는데 proxy_read_timeout 60초 안에 바이트가 없으면 nginx가 끊고, 하트비트 주석을 그보다 짧게 보내거나 read timeout을 늘린다.",
      "EventSource는 끊기면 Last-Event-ID를 들고 다시 붙지만 204 같은 응답에는 영영 포기하니, 재연결이 안 되면 응답 코드와 Content-Type부터 본다.",
    ],
  },
  {
    id: "net-10",
    posts: ["websocket-deep-dive", "long-polling", "realtime-communication", "timeouts"],
    prompt:
      "채팅 서비스에서 켜 두고 딴 일을 하면 정확히 1분 뒤 메시지가 안 오고, 서버를 두 대로 늘리자 메시지가 반만 간다. 롱 폴링으로 돌아가자는 의견도 있다. 각 증상의 원인과, 롱 폴링을 고른다면 대기 시간을 어떻게 정하나.",
    points: [
      "nginx의 proxy_read_timeout 기본 60초 동안 바이트가 없으면 연결을 끊으니, 그보다 짧은 간격(예: 25초)으로 ping을 보내 유휴를 깨거나 한도를 늘린다.",
      "죽은 연결은 스스로 알려 주지 않으니 서버가 ping을 보내고 pong이 없으면 끊어서 정리한다.",
      "서버 A에 붙은 사람의 메시지를 서버 B의 사람은 받을 수 없으니 Redis Pub/Sub 같은 버스로 fan-out하고, 놓치면 안 되는 메시지는 기록이 남는 Streams를 쓴다.",
      "롱 폴링의 붙잡는 시간은 경로에서 가장 짧은 한도(nginx 60초, ALB 60초 등)보다 넉넉히 짧은 20~30초로 잡고, 클라이언트 요청 타임아웃은 그보다 길게, 커서로 틈을 메운다.",
    ],
  },
  {
    id: "net-11",
    posts: ["http-caching-cdn", "cdn-edge-anycast", "proxy-reverse-proxy"],
    prompt:
      "CDN을 앞에 붙였더니 어떤 사용자가 다른 사람의 주문 내역을 봤다는 신고가 들어왔고, 동시에 로그에서 모든 사용자 IP가 몇 개의 주소로 바뀌었다. 배포 직후에는 오리진이 한꺼번에 몰리기도 했다. 세 증상을 각각 설명하고 고쳐라.",
    points: [
      "로그인 사용자 응답을 Cache-Control: private나 no-store 없이 내보내면 공유 캐시가 저장해 다른 사람에게 돌려주니, 개인화 응답에는 private를 주고 쿠키나 Authorization에 따라 Vary를 건다.",
      "CDN 엣지가 새 연결로 오리진에 붙어서 소켓 주소가 엣지가 되고, 믿는 프록시 목록에 CDN 대역을 넣지 않으면 X-Forwarded-For를 안 읽어 엣지 주소가 남는다.",
      "같은 TTL로 캐시된 응답이 한꺼번에 만료되면 모든 엣지가 동시에 오리진을 치는 스탬피드가 나니, stale-while-revalidate로 옛 사본을 주며 갱신하거나 오리진 실드로 엣지 요청을 한 번 더 모은다.",
      "파일 이름에 해시를 넣은 정적 자원은 immutable로 영원히 캐시하고, HTML은 짧게 두어 배포 뒤 옛 화면과 흰 화면을 함께 막는다.",
    ],
  },
  {
    id: "net-12",
    posts: ["cors", "http-status-codes", "http-methods", "local-custom-domain"],
    prompt:
      "프런트 개발자가 평소엔 되다가 가끔만 CORS 에러가 난다고 한다. 서버 쪽 확인 결과 그 순간 500이 났고, PUT 요청은 아예 서버에 도착하지도 않았다. 왜 이런 모양이 나오고, 로컬 개발 환경은 어떻게 꾸며야 이런 문제를 미리 보나.",
    points: [
      "CORS는 서버가 아니라 브라우저가 응답을 읽을지 정하므로 에러 핸들러가 허락 헤더 없이 500을 돌려주면 브라우저는 상태 코드 대신 CORS 실패로 보고한다.",
      "PUT이나 JSON POST는 OPTIONS preflight가 먼저 가고, 인증 미들웨어가 OPTIONS에 401을 주면 실제 요청은 보내지지도 않으니 CORS 처리를 인증보다 앞에 둔다.",
      "Access-Control-Allow-Origin은 출처 하나 또는 *이고 쿠키를 보내려면 *를 쓸 수 없으니 요청의 Origin을 목록과 대조해 그대로 돌려준다.",
      "localhost 포트만 바꾸는 로컬 개발은 출처와 쿠키 규칙이 배포와 달라서 이런 문제가 안 보이니, app.matt.test와 api.matt.test처럼 hosts와 mkcert로 배포와 같은 모양을 만든다.",
    ],
  },
  {
    id: "net-13",
    posts: ["https-tls", "proxy-reverse-proxy", "curl-for-debugging", "network-troubleshooting-by-layer"],
    prompt:
      "새 인증서를 올린 뒤 브라우저에서는 열리는데 서버의 cron 스크립트 curl만 unable to get local issuer certificate로 실패한다. 반대로 사내 PC에서는 브라우저는 되는데 터미널 도구만 막히는 경우도 있다. 두 경우의 원인은 무엇이고 -k를 쓰면 안 되는 이유는.",
    points: [
      "서버가 중간 인증서를 함께 보내지 않으면 브라우저는 캐시나 AIA로 메꿔 통과시키기도 하지만 curl은 체인을 못 만들어 실패하니, openssl s_client로 서버가 보내는 체인을 확인하고 fullchain을 올린다.",
      "사내망은 프록시가 TLS를 열어 보며 즉석 인증서를 내밀고 회사 루트를 PC 신뢰 목록에 깔아 두는데, 터미널 도구는 자기 인증서 묶음을 써서 그 루트를 모른다.",
      "-k는 검증을 통째로 끄는 것이라 가로채기를 못 알아보니, --cacert로 믿을 루트를 더하거나 Ubuntu 시스템 신뢰 목록에 넣어 curl, apt, wget이 함께 믿게 한다.",
      "curl -v에서 어느 줄에서 멈췄는지로 TLS 단계 실패임을 먼저 확정하고, 그다음에 체인과 신뢰 목록으로 내려간다.",
    ],
  },
  {
    id: "net-14",
    posts: ["garbage-collection", "linux-namespaces-cgroups", "virtual-memory-paging", "linux-performance-triage"],
    prompt:
      "limits 512Mi인 Node Pod가 OOMKilled로 죽는데 로그에 heap out of memory가 한 줄도 없고, 죽기 몇 분 전부터 응답이 심하게 느렸다. 같은 코드를 노트북에서 돌리면 멀쩡하다. 무엇이 일어났고 무엇을 어떤 순서로 보나.",
    points: [
      "힙 한도는 런타임이 지키고 컨테이너 한도는 커널 cgroup이 지키므로, V8이 힙 한도에 닿기 전에 cgroup의 memory.max를 넘으면 런타임 로그 없이 SIGKILL로 죽는다.",
      "죽기 전 느려진 건 한도 안에서 파일 페이지가 계속 밀려나 major fault로 다시 읽는 thrashing이고, 스왑 없이도 생긴다.",
      "dmesg나 journalctl -k에 Memory cgroup out of memory가 남고 어느 cgroup이 어느 한도에 걸렸는지 적혀 있으니 거기서 출발한다.",
      "힙 상한을 컨테이너 한도보다 낮게 두어 OOM 전에 GC가 더 자주 돌게 하거나 한도를 올리고, Pod 안의 free는 노드 전체 메모리를 보여 주니 cgroup 파일을 읽는다.",
    ],
  },
  {
    id: "net-15",
    posts: ["deadlocks", "connection-pool", "thread-safety", "postgres-connections-pg-hba"],
    prompt:
      "주문 API가 며칠에 한 번씩 멈춘다. 헬스 체크는 타임아웃이고 CPU는 0%, 메모리도 멀쩡하며 재시작하면 한동안 괜찮다. DB 쪽에서는 세션 여러 개가 idle in transaction으로 멈춰 있다. 어떤 구조가 이 모양을 만들고, 어떻게 확인하고 고치나.",
    points: [
      "요청이 풀에서 연결을 빌려 트랜잭션을 연 채 헬퍼가 풀에서 하나 더 빌리려 하면, 풀 크기만큼 동시에 오는 순간 서로 쥔 연결이 풀리길 기다리는 고리가 된다.",
      "락이 아닌 자원도 Coffman 네 조건을 채우면 데드락이고, DB에서는 pg_stat_activity의 idle in transaction 세션이 그 증거다.",
      "트랜잭션 안에서는 같은 연결 하나를 끝까지 넘겨 쓰고 풀에서 다시 빌리지 않으며, 연결 대기에 connectionTimeoutMillis 같은 한도를 걸어 영원히 기다리지 않게 한다.",
      "반대로 연결 객체 하나를 요청끼리 공유하면 B의 INSERT가 A의 ROLLBACK에 같이 지워지니, 요청마다 빌리고 돌려주는 풀이 정답이다.",
    ],
  },
  {
    id: "net-16",
    posts: ["race-conditions", "thread-safety", "http-methods", "html-form-http"],
    prompt:
      "선착순 쿠폰이 한 사람에게 두 번 적용됐고, 주문 완료 화면에서 새로고침한 사용자의 주문이 두 개 생겼다. 서버는 Node 단일 스레드다. 두 사고를 각각 설명하고, 서버와 클라이언트 양쪽에서 막는 방법을 말하라.",
    points: [
      "싱글 스레드라도 await 사이에 다른 요청이 끼어들어 SELECT로 확인한 사실이 UPDATE 시점에 낡아 있는 check-then-act 경쟁이 생긴다.",
      "확인과 행동을 한 문장(UPDATE ... WHERE used = false)이나 유니크 제약, SELECT FOR UPDATE로 원자적으로 묶어야 틈이 사라진다.",
      "POST는 멱등이 아니라 새로고침이나 네트워크 재시도에서 두 번 처리되니, 폼 제출 뒤에는 303으로 GET으로 돌리는 PRG를 쓴다.",
      "클라이언트가 만든 Idempotency-Key를 재시도에도 같은 값으로 보내고 서버가 그 키로 중복을 걸러야 모바일 재시도까지 막는다.",
    ],
  },
  {
    id: "net-17",
    posts: ["backpressure", "tcp-reliability-congestion", "websocket-deep-dive", "nginx-reverse-proxy"],
    prompt:
      "실시간 시세를 WebSocket으로 뿌리는 서버의 메모리가 느린 모바일 클라이언트가 늘수록 커지다 죽는다. 같은 서버 앞의 nginx는 멀쩡하다. 어디에 무엇이 쌓이는지 층별로 설명하고 어떤 신호로 보내는 쪽을 늦추나.",
    points: [
      "받는 쪽이 느리면 TCP 수신 창이 0까지 줄어 커널 송신 버퍼가 차고, 그 위의 앱 버퍼에 보내지 못한 메시지가 쌓인다.",
      "WebSocket의 bufferedAmount가 바로 그 쌓인 양이라 문턱을 넘으면 보내기를 멈추거나 오래된 시세를 버리거나 연결을 끊는 식으로 백프레셔를 건다.",
      "Node 스트림의 write()가 false를 돌려주면 drain까지 멈추는 것이 같은 신호이고, 무시하면 버퍼만 끝없이 자란다.",
      "nginx가 멀쩡한 건 기본 버퍼링으로 느린 클라이언트를 대신 상대해 앱을 풀어 주기 때문인데, 스트림에는 그 버퍼링을 꺼야 하므로 앱이 스스로 조절해야 한다.",
    ],
  },
  {
    id: "net-18",
    posts: ["linux-processes-signals", "linux-performance-triage", "page-cache-disk-io", "virtual-memory-paging"],
    prompt:
      "API가 느리다는 알림을 받고 서버에 들어가니 load average는 8인데 CPU는 절반 넘게 논다. 밤마다 백업이 돈다고 한다. 1분 안에 어떤 명령을 어떤 순서로 치고, 어느 칸을 보면 범인이 가려지나.",
    points: [
      "load average는 CPU 대기뿐 아니라 D 상태로 I/O를 기다리는 프로세스도 세니, ps의 STAT에서 D를 찾고 wchan으로 무엇을 기다리는지 본다.",
      "vmstat의 b 열과 wa 비율, iostat -x의 await와 %util로 디스크가 넘치는지 보고, pidstat -d로 누가 쓰는지 잡는다.",
      "백업이 더러운 페이지를 한꺼번에 쌓으면 dirty_ratio 문턱에서 쓰는 프로세스 자신이 write() 안에서 멈추고, fsync를 부르는 DB는 앞에 줄 선 쓰기를 기다린다.",
      "메모리가 모자라면 파일 페이지가 밀려나 major fault로 다시 읽는 thrashing이 함께 오니 sar -B나 perf의 major-faults도 같이 본다.",
      "PSI(/proc/pressure/io)로 기다린 시간을 한 숫자로 확인하면 CPU 문제가 아니라는 걸 빨리 확정할 수 있다.",
    ],
  },
  {
    id: "net-19",
    posts: ["linux-systemd-systemctl", "linux-processes-signals", "bash-scripting", "linux-namespaces-cgroups"],
    prompt:
      "systemd 서비스로 띄운 앱이 재시작할 때마다 정확히 90초가 걸리고, 컨테이너로 옮긴 뒤에는 좀비 프로세스가 쌓여 새 프로세스를 못 만든다. 배포 스크립트는 종료 코드 137을 찍는다. 세 숫자가 말하는 것을 각각 풀고 고쳐라.",
    points: [
      "90초는 TimeoutStopSec 기본값이라 앱이 SIGTERM을 무시하고 SIGKILL까지 기다린 것이고, 답은 TimeoutStopSec을 줄이는 게 아니라 앱에 SIGTERM 핸들러를 넣는 것이다.",
      "137은 128+9라 SIGKILL로 죽었다는 뜻이고 OOM이거나 강제 종료이며, 143이면 SIGTERM이다.",
      "컨테이너에는 systemd가 없어 PID 1이 앱 자신이고 부모 잃은 자식을 거둘 일이 없으니, tini 같은 init을 PID 1로 두거나 앱이 SIGCHLD를 처리해 좀비를 거둔다.",
      "systemctl stop은 cgroup 안 모든 프로세스에 시그널을 보내므로 호스트에서는 고아가 안 생겼지만, 컨테이너에서는 그 역할을 아무도 안 한다.",
    ],
  },
  {
    id: "net-20",
    posts: ["linux-files-permissions", "linux-namespaces-cgroups", "aws-ec2-ubuntu-server-setup", "linux-processes-signals"],
    prompt:
      "/home/alice/site에 둔 정적 파일을 nginx로 띄우자 파일은 644인데 403이 난다. 같은 사이트를 컨테이너 볼륨으로 옮기자 이번엔 Permission denied로 쓰기가 안 된다. 커널이 무엇을 어떤 순서로 검사하는지로 두 경우를 설명하라.",
    points: [
      "경로의 모든 디렉터리에 x가 있어야 안으로 들어갈 수 있는데 홈 디렉터리가 750이라 www-data로 낮춰 띄운 nginx 워커가 /home/alice를 지나지 못한다.",
      "커널은 프로세스 UID가 소유자인지, 그룹인지, 나머지인지 중 한 칸만 고르고 그 칸의 비트만 보니 그룹에 넣어도 그룹 칸이 비어 있으면 거부된다.",
      "컨테이너는 이름이 아니라 숫자 UID로 검사하고 user namespace로 안의 root가 밖에서는 다른 UID가 되니, 볼륨 소유 UID를 맞추거나 fsGroup으로 그룹을 맞춘다.",
      "nginx 마스터는 root로 떠서 포트를 열고 워커를 낮은 권한으로 띄우는 구조라 에러 로그에 어느 UID가 거부됐는지가 그대로 남는다.",
      "서버를 꾸릴 때 사이트는 /var/www 같은 전용 경로에 두고 앱은 루프백에만 묶어 nginx만 닿게 하면 권한과 노출 문제가 같이 줄어든다.",
    ],
  },
  {
    id: "net-21",
    posts: ["iptables-basics", "ssh-in-practice", "aws-ec2-ubuntu-server-setup", "ipv6-basics"],
    prompt:
      "원격 EC2에서 방화벽을 손보다가 SSH가 끊겨 콘솔로 들어갔다. 다시 할 때 잠기지 않게 하려면 어떤 순서로 하고, IPv6까지 막혔는지 어떻게 확인하며, 애초에 22번을 열지 않는 방법은 무엇인가.",
    points: [
      "먼저 ESTABLISHED,RELATED 허용과 SSH 허용 규칙을 넣은 뒤에 INPUT 정책을 DROP으로 바꾸고, 적용 뒤 새 세션으로 붙어 보고 나서 iptables-persistent로 저장한다.",
      "ufw도 같은 함정이라 ufw enable 전에 allow OpenSSH를 먼저 넣고, 보안 그룹은 22번을 내 IP /32에만 연다.",
      "iptables 규칙은 IPv4에만 적용되고 IPv6는 ip6tables로 따로 막아야 하며, ICMPv6까지 막으면 이웃 찾기가 깨져 IPv6 자체가 죽는다.",
      "SSM Session Manager를 쓰면 인바운드 22번 없이 셸에 들어가고 접속 기록도 남으니 포트를 아예 안 여는 쪽이 낫다.",
      "접속이 안 될 때는 known_hosts 경고, Permission denied (publickey), 타임아웃을 구분해 키 문제인지 방화벽 DROP인지 가른다.",
    ],
  },
  {
    id: "net-22",
    posts: ["iptables-nat", "layer-ip-routing-icmp", "iptables-basics", "ports-and-sockets"],
    prompt:
      "집 서버에서 공유기 포트 포워딩으로 8080을 컨테이너 앱에 넘겼는데 밖에서 안 붙는다. 서버 안에서 curl 127.0.0.1:8080은 된다. NAT 경로를 패킷 순서대로 따라가며 어디서 끊길 수 있는지 점검 순서를 말하라.",
    points: [
      "앱이 127.0.0.1에만 바인딩되어 있으면 외부 인터페이스로 온 패킷은 그 소켓에 닿지 않으니 ss -ltn의 Local Address가 0.0.0.0인지부터 본다.",
      "DNAT은 PREROUTING에서 첫 패킷만 보고 conntrack이 기억하므로 nat 규칙이 맞아도 FORWARD 체인 정책이 DROP이면 거기서 버려진다.",
      "ip_forward가 0이면 커널이 라우터 노릇을 안 해서 DNAT된 패킷이 넘어가지 않으니 sysctl net.ipv4.ip_forward를 확인한다.",
      "같은 망 안에서 공인 주소로 접속하면 응답이 NAT를 거치지 않고 직접 돌아가 버려지는 헤어핀 문제라 SNAT이 함께 필요하다.",
      "conntrack -L과 iptables -t nat -L -v의 패킷 카운터가 어느 줄에서 오르고 멈추는지가 끊긴 자리를 가리킨다.",
    ],
  },
  {
    id: "net-23",
    posts: ["network-troubleshooting-by-layer", "iptables-basics", "tcp-connection-lifecycle", "upper-layers-session-presentation-app"],
    prompt:
      "접속이 안 된다는 신고 셋이 들어왔다. 하나는 Connection refused가 바로 뜨고, 하나는 2분 넘게 기다리다 타임아웃이며, 하나는 wrong version number다. 각각 어느 층에서 무엇이 일어난 것이고, 그다음 칠 명령은 무엇인가.",
    points: [
      "refused는 상대 커널이 SYN에 RST로 답한 것이라 호스트까지는 닿았고 그 포트를 아무도 안 듣는 것이니, 서버에서 ss -ltn과 바인딩 주소를 본다.",
      "타임아웃은 SYN이 버려져 재전송만 반복된 것이라 방화벽 DROP이나 경로 문제이고, tracepath나 mtr로 어디까지 가는지 본 뒤 iptables 카운터를 본다.",
      "wrong version number는 TCP까지 맺어지고 TLS로 말을 걸었는데 상대가 평문으로 답한 것이라, https로 평문 포트에 붙었거나 그 반대이니 포트와 스킴을 맞춘다.",
      "같은 에러 문구가 다른 층에서 나올 수 있으니 curl -v가 어느 줄에서 멈췄는지로 층을 먼저 고정한 뒤 그 층부터 아래로 내려간다.",
      "명령을 서버 안에서 치면 중간 장비를 하나도 안 지나니, 어디서 치는지에 따라 무엇을 검증한 것인지가 달라진다.",
    ],
  },
  {
    id: "net-24",
    posts: ["packet-capture-tcpdump", "http-status-codes", "nginx-reverse-proxy", "linux-grep-awk-sed"],
    prompt:
      "nginx 앞단에서 502가 드문드문 나고 error.log에는 Connection reset by peer가 있다. 앱 팀은 자기 로그에 그 요청이 없다고 한다. 로그로 규모를 재고 패킷으로 누구 책임인지 가르는 방법을 순서대로 말하라.",
    points: [
      "access.log에서 grep ' 502 '처럼 공백을 포함해 상태 코드 자리만 세고, awk로 시각과 upstream 주소별로 묶어 특정 서버나 시간대에 몰리는지 본다.",
      "502는 앱이 아니라 프록시가 뒤쪽 응답이 이상할 때 만드는 코드라 앱 로그에 없는 게 당연하고, 504였다면 응답이 늦은 것이다.",
      "프록시가 있으면 연결이 두 개이니 서버에서 tcpdump -i any로 바깥 연결과 앱 연결을 함께 찍고 RST가 어느 쪽에서 먼저 나오는지 본다.",
      "RST의 출발지가 앱 포트이면 앱 프로세스나 커널(backlog 넘침, 읽지 않고 close)이고, 중간이면 LB 유휴 타임아웃이나 방화벽이다.",
      "no live upstreams가 찍히면 max_fails로 서버가 빠진 것이고 proxy_next_upstream이 무엇을 실패로 치는지까지 본다.",
    ],
  },
  {
    id: "net-25",
    posts: ["osi-in-practice", "curl-for-debugging", "load-balancer-basics", "network-layers-overview"],
    prompt:
      "배포 스크립트의 curl 헬스 체크는 통과했는데 사용자는 503을 봤고, 로드 밸런서의 헬스 체크도 초록인데 그 서버는 DB가 끊겨 있었다. 헬스 체크가 무엇을 놓쳤고 어느 층까지 물어야 하며 배포 때 502를 없애려면 무엇을 더 하나.",
    points: [
      "curl은 응답을 받기만 하면 종료 코드 0이라 -f가 없으면 503도 성공이고, 스크립트에는 -f와 타임아웃을 꼭 건다.",
      "L4 헬스 체크는 TCP 연결만 맺어 보는데 커널이 SYN-ACK를 대신 보내니 앱이 멈춰 있거나 DB가 끊겨도 통과하고, L7 체크는 /healthz가 의존성까지 확인한 뒤 200을 줘야 한다.",
      "어느 층의 체크인지 알면 어느 장애를 못 보는지가 정해지고, 로드 밸런서와 방화벽도 L4인지 L7인지에 따라 보는 깊이가 다르다.",
      "배포 때는 서버를 먼저 헬스 체크에서 빼고 처리 중인 연결이 끝나길 기다리는 드레이닝을 한 뒤 내려야 502가 안 섞인다.",
    ],
  },
  {
    id: "net-26",
    posts: ["dhcp", "layer-link-ethernet-arp", "first-page-from-power-on", "networking-essentials-map"],
    prompt:
      "회의실에 누가 꽂은 공유기 하나가 층 전체의 주소를 바꿔 버렸다. 왜 가짜 서버가 이기는지 패킷 순서로 설명하고, 노트북 하나가 망에 붙어 첫 페이지를 받기까지 어느 단계에서 이 사고가 끼어드는지, 스위치에서 막는 방법까지 말하라.",
    points: [
      "DISCOVER는 브로드캐스트라 같은 L2의 모든 서버가 받고, 클라이언트는 먼저 온 OFFER를 믿으니 가까운 가짜 서버가 이긴다.",
      "가짜 서버가 게이트웨이와 DNS까지 자기로 주면 ARP로 묻는 게이트웨이 MAC부터 다른 곳을 가리켜 그 뒤 DNS, TCP, TLS가 전부 엉뚱한 길로 간다.",
      "첫 페이지까지의 순서는 DHCP 네 번, ARP, DNS, TCP, TLS, HTTP이고 사고는 맨 앞 칸에서 끼어들어 뒤 칸이 모두 오염된다.",
      "스위치의 DHCP 스누핑으로 신뢰 포트에서 온 OFFER만 통과시키고, 클라이언트에서는 ip neigh와 dhcp 로그의 서버 ID로 누가 답했는지 확인한다.",
    ],
  },
  {
    id: "net-27",
    posts: ["tcp-reliability-congestion", "latency-bandwidth-throughput", "traffic-shaping-qos"],
    prompt:
      "1Gbps 회선에서 바다 건너 리전으로 백업을 올리는데 몇십 Mbps에서 멈춘다. 같은 도시 서버로는 회선 끝까지 나온다. 회선을 10Gbps로 올리자는 제안이 있다. 숫자로 반박하고 실제로 효과 있는 손잡이를 말하라.",
    points: [
      "처리량 상한은 창 크기 나누기 왕복 시간이라, 왕복 200ms에 창 4MB면 160Mbps가 최대이고 대역폭을 올려도 창이 그대로면 그대로다.",
      "대역폭 지연 곱만큼 창이 커져야 길을 채우는데 손실 한 번에 CUBIC이 창을 0.7배로 줄이고 다시 키우는 데 왕복이 여러 번 걸려 먼 곳일수록 회복이 느리다.",
      "ss -ti로 cwnd, rtt, retrans를 읽어 창이 작은지 손실이 있는지 가르고, 통신사 폴리싱이 넘치는 패킷을 버려 재전송을 만드는지도 의심한다.",
      "수신 버퍼 상한(rmem_max, wmem_max)을 BDP에 맞게 올리거나 BBR로 바꾸거나 병렬 스트림으로 나누는 쪽이 회선 증설보다 먼저다.",
    ],
  },
  {
    id: "net-28",
    posts: ["tcp-reliability-congestion", "http-versions", "udp-and-quic", "youtube-url-to-video"],
    prompt:
      "작은 응답을 주는 API가 요청마다 정확히 40ms씩 늦고, HTTP/2로 바꿨더니 손실 많은 모바일 망에서는 오히려 HTTP/1.1보다 느려졌다는 측정이 나왔다. 두 현상의 원인과, 큰 서비스가 두 번째 방문부터 QUIC으로 넘어가는 이유를 이어서 설명하라.",
    points: [
      "40ms는 Nagle이 작은 두 번째 조각을 ACK 올 때까지 붙잡고 상대의 지연 ACK는 40ms를 기다리는 조합이라 TCP_NODELAY나 한 번의 write로 모아 보내면 사라진다.",
      "HTTP/2는 연결 하나에 스트림을 다중화해 HTTP 줄 막힘은 없앴지만 TCP가 순서를 지키느라 패킷 하나가 빠지면 모든 스트림이 기다리고, HTTP/1.1은 연결 6개가 따로 놀아 손실이 하나에만 미친다.",
      "QUIC은 UDP 위에 스트림마다 독립된 순서를 두어 손실이 그 스트림만 막고 핸드셰이크도 TLS와 합쳐 왕복을 줄인다.",
      "브라우저는 첫 응답의 Alt-Svc로 h3를 알게 되어 두 번째 방문부터 UDP 443으로 가고, 그래서 UDP를 막은 망에서는 다시 TCP로 떨어진다.",
    ],
  },
  {
    id: "net-29",
    posts: ["udp-and-quic", "backpressure", "iptables-nat", "linux-network-tuning"],
    prompt:
      "UDP로 지표를 받는 수집 서버가 보내는 쪽은 전부 성공인데 받은 수가 10%도 안 된다. NAT 뒤의 에이전트는 서버가 보내는 응답을 가끔 못 받고, 노드 로그에는 table full이 찍힌다. 세 가지 손실의 자리를 각각 짚어라.",
    points: [
      "UDP는 수신 버퍼가 차면 커널이 조용히 버리고 보내는 쪽은 성공으로 알며, nstat의 UdpRcvbufErrors와 ss -u의 드롭 수가 증거다.",
      "읽기 루프를 빠르게 하거나 SO_RCVBUF를 rmem_max 상한 안에서 키우거나 SO_REUSEPORT로 소켓을 나누는 것이 처방이고, 버퍼는 시간만 벌 뿐 소비가 느리면 결국 버려진다.",
      "NAT와 방화벽은 UDP 흐름을 30초 안팎만 기억하므로 그 뒤 서버가 보낸 패킷은 갈 곳을 잃고, 에이전트가 주기적으로 패킷을 보내 항목을 살려 둬야 한다.",
      "nf_conntrack: table full은 conntrack 표가 꽉 차 새 흐름을 버리는 것이라 nf_conntrack_max를 올리거나 UDP 타임아웃을 줄이고, 이 값은 네임스페이스가 아니라 노드에서만 바꿀 수 있다.",
    ],
  },
  {
    id: "net-30",
    posts: ["logic-gates-alu", "json-crud-http", "http-methods", "base64"],
    prompt:
      "주문 ID를 64비트 정수로 바꾸자 프런트에서 끝자리가 바뀐 ID로 조회해 404가 나고, 아바타를 JSON에 Base64로 넣자 응답이 눈에 띄게 커졌다. 수정 API는 PUT인데 빠진 필드가 기본값으로 덮인다는 신고도 있다. 세 문제의 원인과 설계 수정안을 말하라.",
    points: [
      "자바스크립트 숫자는 2의 53제곱을 넘으면 정수를 정확히 못 담으니 큰 ID는 문자열로 보내고, 32비트 ID나 2038년 같은 넘침도 같은 부류의 함정이다.",
      "Base64는 3바이트를 4글자로 바꿔 33% 커지고 양쪽이 큰 문자열을 메모리에 들어야 하니 파일은 multipart로 바이트 그대로 보내거나 별도 URL로 준다.",
      "PUT은 자원 전체를 바꾸는 약속이라 빠진 필드는 기본값이 되는 게 맞고, 일부만 고치려면 PATCH(Merge Patch에서 null은 지우라는 뜻)를 쓴다.",
      "동시에 고치는 경우는 ETag와 If-Match로 412를 돌려주고, 204 응답에는 본문이 없어 res.json()이 터지니 상태 코드를 먼저 본다.",
    ],
  },
  {
    id: "net-31",
    posts: ["cpu-cache-hierarchy", "cpu-pipelining-branch-prediction", "race-conditions"],
    prompt:
      "워커 스레드 네 개로 카운터를 나눠 세는 코드가 스레드 하나보다 느리고, 같은 배열을 걸러 더하는 루프는 입력을 정렬만 했는데 다섯 배 빨라졌다. CPU 안에서 무엇이 일어난 것이고 코드는 어떻게 바꾸나.",
    points: [
      "코어마다 캐시 사본을 맞추는 MESI 때문에 다른 변수라도 같은 64바이트 캐시 라인에 있으면 서로 무효화하며 줄을 서는 false sharing이 생기고, 카운터를 라인 단위로 떼어 놓거나 워커마다 따로 세고 마지막에 더한다.",
      "Atomics.add 같은 원자적 연산도 캐시 라인을 코어끼리 주고받느라 몇 배 느리니 공유 자체를 줄이는 쪽이 먼저다.",
      "무작위 데이터의 조건 분기는 예측이 절반쯤 틀려 파이프라인을 비우고 다시 채우는 비용을 매번 내고, 정렬하면 한동안 같은 방향이라 거의 다 맞힌다.",
      "핫 루프에서는 정렬하거나 분기 없는 식(cmov, 비트 마스크)으로 바꾸되 측정으로 확인된 곳에만 하고, 행 순서 순회처럼 캐시 라인을 끝까지 쓰는 배치가 먼저다.",
    ],
  },
  {
    id: "net-32",
    posts: ["cpu-instruction-cycle", "linux-processes-signals", "bash-scripting", "virtual-memory-paging"],
    prompt:
      "컨테이너가 종료 코드 139로 죽었고 커널 로그에 segfault at 10 ip ... sp ... error 4 한 줄이 남았다. 재현은 안 된다. 이 한 줄에서 무엇까지 알아낼 수 있고, 어떤 순서로 죽은 명령어를 찾나.",
    points: [
      "139는 128+11이라 SIGSEGV로 죽은 것이고, 커널이 잘못된 주소 접근을 막아 보낸 시그널이라 핸들러가 없으면 그 자리에서 끝난다.",
      "segfault at 10은 0x10 주소를 읽으려 했다는 뜻이라 널 포인터에서 16바이트 떨어진 필드 접근이 유력하고, error 4는 사용자 모드 읽기 실패를 뜻한다.",
      "ip는 죽은 명령어의 주소라 바이너리 로드 주소를 빼고 objdump나 addr2line으로 함수와 줄을 찾고, sp와 스택 프레임의 복귀 주소로 호출 경로를 거슬러 간다.",
      "가상 주소 공간에 매핑되지 않은 페이지를 만지면 page fault가 segfault로 바뀌는 것이라 0 근처 주소는 늘 널 역참조를 먼저 의심한다.",
    ],
  },
  {
    id: "net-33",
    posts: ["git-internals-basics", "git-branch-merge", "git-undo", "git-large-files-secrets"],
    prompt:
      "PR을 squash로 합친 뒤 git branch -d가 not fully merged라며 거절하고, 같은 날 .env가 커밋된 걸 발견해 revert로 지웠다는 보고가 올라왔다. 두 판단이 왜 틀렸거나 부족한지 Git이 무엇을 저장하는지로 설명하고 올바른 처리를 말하라.",
    points: [
      "Git은 합쳐짐을 내용이 아니라 커밋 조상 관계로 판단하고, squash는 새 커밋 하나를 만들어 원래 커밋은 main의 조상이 아니니 -D로 지우되 tree 해시를 비교해 내용이 같은지 확인한다.",
      "revert는 반대 변경을 담은 새 커밋이라 비밀 값이 든 옛 커밋은 히스토리에 그대로 남아 누구나 꺼낼 수 있다.",
      "먼저 키를 폐기하고 새로 발급한 뒤 git filter-repo로 그 파일을 모든 커밋에서 빼고 강제 푸시하며, 팀원은 clone을 새로 받아야 옛 객체가 다시 섞이지 않는다.",
      "병합 커밋을 revert하면 나중에 같은 브랜치를 다시 합칠 때 되돌린 변경이 들어오지 않으니 revert를 revert해야 한다는 함정도 같은 원리다.",
    ],
  },
  {
    id: "net-34",
    posts: ["git-remote-collaboration", "git-stacked-prs", "git-rebase", "git-troubleshooting"],
    prompt:
      "세 층으로 쌓은 stacked PR의 맨 아래가 squash로 합쳐졌다. 위 두 브랜치를 main 위로 옮기려는데 충돌이 나고, 푸시는 fetch first로 거절된다. 명령 순서와 강제 푸시를 안전하게 하는 조건을 말하라.",
    points: [
      "squash로 아래 층 커밋이 main에 없는 새 커밋이 됐으니 git rebase --onto main 아래브랜치 위브랜치로 아래 층 커밋을 빼고 위층 커밋만 옮긴다.",
      "층이 여럿이면 꼭대기에서 rebase --update-refs 한 번으로 중간 브랜치 이름표까지 같이 옮긴다.",
      "rebase는 커밋을 새로 만들어 해시가 바뀌므로 원격과 갈라져 거절되는 게 정상이고, 동료 커밋을 덮지 않도록 --force-with-lease에 --force-if-includes를 붙인다.",
      "IDE의 자동 fetch가 원격 추적 브랜치를 앞당기면 lease 조건이 헛되이 통과하는데, --force-if-includes가 그 커밋을 내 reflog에서 본 적 있는지까지 확인한다.",
      "잘못 옮겼으면 ORIG_HEAD나 reflog로 돌아가면 되니 rebase 자체는 되돌릴 수 있다.",
    ],
  },
  {
    id: "net-35",
    posts: ["git-staging-area", "git-ignore-config", "git-tips-advanced"],
    prompt:
      "pre-commit 훅이 console.log를 잡는데도 커밋에 들어왔고, .gitignore에 적은 config.local이 계속 diff에 나오며, 윈도우 동료의 PR은 손대지 않은 파일 전체가 바뀐 것으로 보인다. 세 문제가 Git의 어느 구역과 설정에서 생기는지 설명하고 고쳐라.",
    points: [
      "커밋되는 건 작업 트리가 아니라 인덱스라 add -p로 일부만 올렸을 때 훅이 작업 트리를 검사하면 빠져나가니, 훅은 git diff --cached로 인덱스를 검사해야 한다.",
      ".gitignore는 추적하지 않는 파일에만 듣고 이미 추적 중인 파일은 git rm --cached로 인덱스에서 내려야 하며, 지난 커밋에는 그대로 남는다.",
      "CRLF와 LF가 섞이면 모든 줄이 바뀐 것으로 보이니 .gitattributes에 eol을 고정해 저장소 규칙으로 두고 개인 core.autocrlf에 기대지 않는다.",
      "훅은 .git 안에 있어 clone되지 않으니 팀 규칙은 core.hooksPath나 도구로 공유하고, 설정은 system, global, local 세 겹이라 --show-origin으로 어디서 온 값인지 본다.",
    ],
  },
  {
    id: "net-36",
    posts: ["git-stash-reflog", "git-repo-errors", "git-troubleshooting"],
    prompt:
      "IDE가 멈춰 강제로 끈 뒤 git add가 index.lock이 있다며 거부하고, 급한 마음에 reset --hard를 쳤더니 커밋 두 개가 사라졌으며, stash pop에서는 충돌이 났다. 무엇을 지워도 되고 무엇은 되찾을 수 있는지 순서대로 말하라.",
    points: [
      "index.lock은 인덱스를 고치는 동안의 잠금 파일이라 다른 Git 프로세스가 없는 걸 확인한 뒤 지워도 되지만, objects나 refs 아래 파일은 손대지 않는다.",
      "reset --hard는 이름표를 옮길 뿐 커밋 객체는 남아 있으니 git reflog에서 이전 HEAD 해시를 찾아 reset --hard 해시로 돌아온다.",
      "stash pop 충돌은 stash가 지워지지 않고 남으니 충돌을 풀고 add한 뒤 stash drop하거나, 되돌리려면 restore로 작업 트리를 비우고 stash를 다시 적용한다.",
      "add만 하고 커밋하지 않은 파일이나 drop한 stash도 객체로 남아 있어 git fsck --unreachable로 찾을 수 있지만 gc 전까지만 가능하다.",
    ],
  },
  {
    id: "net-37",
    posts: ["git-branching-strategy", "git-undo", "git-tips-advanced", "git-features-map"],
    prompt:
      "릴리스 날 develop에는 덜 된 기능이 쌓여 있는데 운영 핫픽스를 내보내야 한다. Git Flow와 트렁크 기반 각각에서 어디서 고치고 어느 방향으로 돌려보내는지, 합친 기능을 급히 빼야 할 때 revert가 왜 위험한지 말하라.",
    points: [
      "Git Flow는 main에서 hotfix 브랜치를 따서 main과 develop 양쪽에 합치고, release 브랜치의 수정은 cherry-pick -x로 develop에 돌려보내며 한 방향으로만 흐르게 정한다.",
      "트렁크 기반은 덜 된 기능이 main에 들어가되 피처 플래그로 꺼져 있어 핫픽스도 평소 PR과 같은 길을 가고, 배포와 출시를 떼어 놓는 게 전제다.",
      "병합 커밋을 revert하면 내용만 되돌리고 조상 관계는 남아서 다시 합칠 때 그 변경이 들어오지 않으니, 끌 때는 플래그로 끄거나 revert를 revert한다.",
      "무엇을 고를지는 배포 주기가 정하고, 상황별로 어떤 기능을 꺼낼지(cherry-pick, revert, bisect, worktree)를 그래프 하나 위에서 생각한다.",
    ],
  },
  {
    id: "net-38",
    posts: ["git-merge-conflict", "git-rebase", "dependency-hell"],
    prompt:
      "main을 rebase할 때마다 pnpm-lock.yaml에서 충돌이 나고, 같은 충돌을 커밋마다 다시 푼다. 락파일 충돌을 손으로 고쳐도 되나, 같은 충돌을 두 번 풀지 않는 방법은 무엇이며 zdiff3는 무엇을 보여 주나.",
    points: [
      "lockfile은 사람이 합치는 파일이 아니라 결정의 기록이니 충돌 마커를 지우고 package.json 기준으로 다시 설치해 재생성한 뒤 add한다.",
      "rebase는 커밋을 하나씩 다시 적용하므로 같은 자리의 충돌이 커밋마다 반복되고, rerere를 켜 두면 한 번 푼 해결을 기억해 자동으로 다시 적용한다.",
      "zdiff3는 양쪽 변경 사이에 공통 조상을 함께 보여 주고 같은 줄은 블록 밖으로 빼서 각자 무엇을 바꿨는지 읽히게 하며, 충돌 중 인덱스에는 조상·ours·theirs 세 스테이지가 들어 있다.",
      "범위를 넓게 쓴 의존성은 설치 때마다 다른 버전을 고를 수 있어 충돌과 유령 의존성을 키우니 lockfile을 커밋하고 CI는 npm ci처럼 lockfile 그대로 설치한다.",
    ],
  },
  {
    id: "net-39",
    posts: ["semantic-versioning", "dependency-hell", "git-branching-strategy"],
    prompt:
      "아무도 코드를 안 고쳤는데 CI가 빨갛다. 의존성 1.5.0이 1.5.1로 올라 날짜 출력 형식이 바뀌었고, 다른 패키지는 0.3.4에서 0.4.0으로는 안 올라갔다. package.json에는 둘 다 캐럿이다. 왜 이런 일이 생기고 팀의 릴리스 규칙은 어떻게 두나.",
    points: [
      "캐럿은 가장 왼쪽 0이 아닌 숫자를 고정하니 ^1.4.2는 2.0.0 미만을 다 받지만 ^0.3.4는 0.4.0 미만까지만 받아 0.x에서 한 칸 좁아진다.",
      "패치 버전은 동작을 바꾸지 않는다는 약속이지만 기본값이나 출력 형식 변경을 패치로 낸 쪽이 약속을 어긴 것이고, 범위는 바람이지 결정이 아니다.",
      "lockfile을 커밋하고 CI에서 npm ci로 lockfile 그대로 설치하면 아무도 안 고친 날 버전이 바뀌는 일이 사라진다.",
      "자기 패키지를 낼 때는 Conventional Commits로 변경 종류를 적고 Changesets 같은 도구가 버전을 올리며 main에 SemVer 태그를 찍어 사람이 숫자를 고르지 않게 한다.",
    ],
  },
  {
    id: "net-40",
    posts: ["git-tips-advanced", "git-branch-merge", "git-internals-basics", "git-features-map"],
    prompt:
      "200개 커밋 사이 어딘가에서 성능이 두 배 나빠졌다. 머지 커밋이 많고 중간에는 빌드가 깨진 커밋도 있다. 작업 중인 브랜치를 건드리지 않고 범인을 자동으로 찾는 순서와, 찾은 뒤 어느 PR인지 확인하는 방법을 말하라.",
    points: [
      "git bisect run에 종료 코드를 내는 스크립트를 주면 반씩 잘라 여덟 번 안팎에 찾고, 빌드가 깨진 커밋은 exit 125로 skip하며 good/bad 대신 fast/slow 같은 이름도 쓸 수 있다.",
      "머지 커밋이 많으면 bisect start --first-parent로 main의 머지 커밋만 따라가 어느 PR이 범인인지부터 좁힌다.",
      "worktree로 다른 폴더에 브랜치를 꺼내 두면 지금 작업 트리와 node_modules를 건드리지 않고 bisect를 돌릴 수 있다.",
      "찾은 커밋이 어느 PR로 들어왔는지는 log --first-parent나 --ancestry-path로 보고, 두 커밋의 내용이 같은지는 커밋 해시가 아니라 tree 해시로 비교한다.",
    ],
  },
];
