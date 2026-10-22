import type { AppliedQuestion } from "./types";

export const INFRA_APPLIED: AppliedQuestion[] = [
  {
    id: "infra-01",
    posts: ["docker-container-basics", "linux-namespaces-cgroups", "k8s-pod-resources", "k8s-in-place-resize"],
    prompt:
      "자바 앱 Pod가 배포 직후 몇 분마다 종료 코드 137로 죽는다. 컨테이너 안에서 free를 치면 노드 메모리 64GB가 보이고 limits는 2Gi다. 무엇이 어긋났고, limits를 올릴 때 Pod 전체를 다시 띄우지 않을 방법은 있나.",
    points: [
      "컨테이너는 호스트 커널을 함께 쓰는 프로세스라 free는 네임스페이스로 가려지지 않은 노드 값을 보여 주고, 런타임이 limits를 모르면 힙을 노드 기준으로 잡는다.",
      "limits는 cgroup의 memory.max로 내려가고 넘으면 커널이 OOM kill을 하므로 137은 SIGKILL이며, cgroup 파일의 memory.events에서 oom_kill 횟수를 직접 읽는다.",
      "requests는 스케줄러가, limits는 커널이 읽으니 두 값의 관계가 QoS 클래스를 정하고 노드 압박 때 쫓겨나는 순서도 정한다.",
      "1.35부터 GA인 in-place resize는 resize 하위 리소스로 limits를 바꾸되, 메모리 줄이기는 resizePolicy에 따라 재시작이 필요할 수 있고 Deployment 템플릿과는 따로 논다.",
    ],
  },
  {
    id: "infra-02",
    posts: ["dockerfile-image-layers", "build-caching", "github-actions-docker-ecr", "container-supply-chain-security"],
    prompt:
      "GitHub Actions에서 Docker 이미지 빌드가 코드 한 줄을 고쳐도 12분 걸린다. 매번 npm install이 다시 돌고, 운영에는 latest 태그가 나간다. 빌드 시간과 배포 신뢰성을 함께 고치려면 어디를 바꾸나.",
    points: [
      "레이어 캐시는 처음 바뀐 줄에서 끊기므로 package.json과 lockfile만 먼저 COPY해 의존성 설치 레이어를 살리고, .dockerignore로 보내는 것부터 줄인다.",
      "CI 러너는 잡마다 빈 머신이라 buildx 캐시를 Actions 캐시나 레지스트리에 두어야 레이어 캐시가 다음 잡에서도 잡힌다.",
      "캐시 키에는 lockfile 해시를 넣고 restore-keys 부분 일치는 보조로만 쓴다. 해시에 빠진 입력이 틀린 적중을 만든다.",
      "태그는 이름표고 digest가 내용이니 커밋 SHA 태그로 올리고 digest로 고정하며, 올린 이미지는 스캔과 cosign 서명 검증을 어드미션에서 건다.",
      "AWS 자격 증명은 오래 사는 키 대신 OIDC로 역할을 잠깐 빌리고 신뢰 정책의 sub 조건으로 브랜치를 좁힌다.",
    ],
  },
  {
    id: "infra-03",
    posts: ["docker-network-volume", "ports-and-sockets", "docker-compose"],
    prompt:
      "compose로 띄운 Node 앱이 localhost:5432로 Postgres에 붙으려다 ECONNREFUSED를 낸다. 호스트에서 docker ps에 0.0.0.0:3000->3000이 보이는데 브라우저도 연결 거부다. 두 증상의 원인을 각각 짚고 compose 파일에서 무엇을 고치나.",
    points: [
      "컨테이너 안의 localhost는 컨테이너 자신이라 같은 compose 네트워크의 서비스 이름으로 붙어야 내장 DNS가 풀어 준다.",
      "앱이 127.0.0.1에만 bind하면 -p가 만든 DNAT으로 패킷이 와도 받을 소켓이 없으니 0.0.0.0에 듣게 한다. 로컬에선 되고 Docker에선 안 되는 전형이다.",
      "depends_on만으로는 Postgres가 준비되기 전에 앱이 뜨므로 healthcheck와 condition: service_healthy로 시작 순서를 잡는다.",
      "데이터는 named volume에 두고 down -v는 그 볼륨까지 지우니 한 글자 차이를 운영 스크립트에서 막는다.",
    ],
  },
  {
    id: "infra-04",
    posts: ["docker-commands-workflow", "linux-processes-signals", "k8s-pod-lifecycle", "k8s-pod-basics"],
    prompt:
      "docker stop이 매번 정확히 10초 걸리고, 같은 이미지를 쿠버네티스에 올리니 롤링 배포 때 요청이 끊긴다. CMD는 셸 형식 sh -c node server.js다. 그리고 kubectl run으로 띄운 Pod는 죽은 뒤 돌아오지 않는다. 무엇이 일어나고 있나.",
    points: [
      "stop은 SIGTERM을 보내고 10초를 센 뒤 SIGKILL을 보내는데, 셸 형식이면 PID 1이 sh라서 SIGTERM을 자식에 넘기지 않아 node는 신호를 못 받는다.",
      "PID 1은 기본 시그널 처리가 없어 SIGTERM을 그냥 넘기고 좀비도 거둬야 하므로 exec 형식이나 init 프로세스를 쓴다. 종료 코드 143은 TERM, 137은 KILL이다.",
      "쿠버네티스는 preStop 다음 SIGTERM, terminationGracePeriodSeconds 뒤 SIGKILL 순이고 엔드포인트 제거와 겹치게 preStop에 sleep을 둔다.",
      "직접 만든 Pod는 아무도 다시 살려 주지 않으니 Deployment에 맡기고, restartPolicy와 CrashLoopBackOff의 10초에서 5분까지 늘어나는 대기는 kubelet 쪽 동작이다.",
    ],
  },
  {
    id: "infra-05",
    posts: ["docker-network-drivers", "vlan-basics", "router-vs-switch"],
    prompt:
      "macvlan으로 띄운 컨테이너가 사무실 다른 PC에서는 ping이 되는데 호스트 자신에서는 안 된다. 같은 스위치의 트렁크 포트에서 VLAN 20을 태그해 쓰는 중이고, 어느 날 사무실 망 전체가 느려지며 스위치 램프가 미친 듯 깜빡였다. 두 일을 각각 설명하라.",
    points: [
      "macvlan은 부모 인터페이스 아래 다른 MAC으로 컨테이너를 LAN에 직접 세우고 커널이 부모와 자식 사이 트래픽을 막으므로 호스트에서만 안 닿고, 호스트에 macvlan shim을 하나 더 두면 풀린다.",
      "802.1Q 태그는 부모 쪽 VLAN 인터페이스(eth0.20)에서 벗겨져야 하고 네이티브 VLAN과 섞이면 태그 없는 프레임이 엉뚱한 망으로 간다.",
      "스위치는 봉투를 뜯지 않고 MAC으로만 넘기므로 같은 VLAN이면 L2로 닿고 다른 VLAN이면 라우터를 거쳐야 한다.",
      "L2 고리는 TTL이 없어 브로드캐스트 스톰이 되고 STP가 포트를 차단해 끊어야 한다. L3 고리는 TTL로 끝난다.",
    ],
  },
  {
    id: "infra-06",
    posts: ["nginx-basics", "nginx-reverse-proxy", "nginx-https-performance", "logging-tools-overview"],
    prompt:
      "nginx 뒤의 앱에서 사용자는 504를 받는데 앱 로그엔 같은 요청이 200으로 남아 있다. 같은 날 10MB 업로드는 413이 났다. 어느 층에서 무엇이 끊겼고 어떤 로그와 설정을 보나.",
    points: [
      "504는 proxy_read_timeout 안에 업스트림 응답이 안 온 것이고 앱은 그 뒤 끝내서 200을 남긴 것이다. 502는 연결 자체가 실패한 자리다.",
      "error.log의 upstream timed out 줄과 access.log의 $upstream_response_time을 먼저 보고, 증상마다 먼저 여는 로그가 프록시, 앱, 프로세스 순으로 다르다.",
      "413은 client_max_body_size 기본 1MB에 막힌 것이고, 버퍼링과 proxy_cache는 켠 채로 두되 흘려보낼 응답만 끈다.",
      "설정은 nginx -t로 확인한 뒤 reload로 적용하고, server와 location이 골라지는 순서를 알아야 어느 블록이 요청을 받았는지 안다.",
    ],
  },
  {
    id: "infra-07",
    posts: ["vpc-basics", "vpc-subnets-route-tables", "security-groups-nacl", "network-flow-logs"],
    prompt:
      "프라이빗 서브넷 인스턴스에서 apt update가 멈추는데 같은 서브넷의 다른 인스턴스는 된다. NACL에는 아웃바운드 80, 443만 열어 두었다. 어디부터 보고 어떤 줄이 범인을 가리키나.",
    points: [
      "서브넷 성격은 라우트 테이블이 정하므로 0.0.0.0/0이 NAT 게이트웨이를 가리키는지, 대상이 사라져 blackhole이 됐는지 먼저 본다.",
      "NACL은 상태를 기억하지 않아 응답이 돌아오는 임시 포트 인바운드를 열어야 하고, 보안 그룹은 연결을 기억하니 아웃바운드만 열려 있으면 응답이 온다.",
      "두 인스턴스가 다르면 보안 그룹이 다르거나 NAT 게이트웨이 AZ가 다른 것이고, 공인 IP는 인스턴스 안에 없고 IGW의 1:1 NAT에 있다.",
      "흐름 로그의 REJECT 줄에서 출발지, 목적지, 포트를 읽어 어느 방화벽이 막았는지 가리고, NAT 뒤에서는 주소가 바뀌니 ENI별로 본다.",
    ],
  },
  {
    id: "infra-08",
    posts: ["vpc-peering-transit-privatelink", "terraform-network-iac", "terraform-modules-tfvars", "k8s-project-structure"],
    prompt:
      "인수한 회사의 VPC와 우리 VPC가 둘 다 10.0.0.0/16이라 피어링이 안 된다. 당장은 서비스 세 개만 서로 부르면 되고, 앞으로 환경이 셋 더 늘어난다. 무엇을 고르고 코드 구조를 어떻게 바꾸나.",
    points: [
      "피어링은 대역이 겹치면 라우트를 놓을 자리가 없고 전이도 안 되므로, 서비스 몇 개만이면 PrivateLink 인터페이스 엔드포인트로 겹치는 VPC 사이에서도 잇는다.",
      "VPC가 많아지면 Transit Gateway 허브와 라우트 테이블로 망을 나누고, 셋 중 무엇을 고를지는 전이성과 대역 겹침과 비용으로 정한다.",
      "주소 계획은 cidrsubnet으로 코드에 먼저 적고 환경별 tfvars와 state를 나눠 같은 모듈에 다른 대역을 준다. 디렉터리 복사는 어긋남을 만든다.",
      "저장소는 terraform, k8s, .github 폴더로 읽는 사람을 나누고 환경이 늘면 Kustomize overlay나 Helm values로 간다. 보안 그룹 설명 한 줄 수정이 교체로 나오는 함정은 plan 기호로 잡는다.",
    ],
  },
  {
    id: "infra-09",
    posts: ["load-balancer-basics", "load-balancing-algorithms", "rolling-deployment", "canary-release"],
    prompt:
      "서버 넷 중 하나가 느려졌는데 라운드 로빈이라 그 서버 앞에 줄이 쌓여 p99가 튄다. 롤링 배포 때는 nginx가 서버를 전부 빼 버려 502가 쏟아졌고, 카나리 5%에서는 지표가 들쭉날쭉해 판단이 안 된다. 셋을 어떻게 고치나.",
    points: [
      "라운드 로빈은 느린 서버에도 같은 몫을 주니 least-conn이나 P2C로 바꾸고, 로드 밸런서 여럿이 같은 서버로 몰리는 현상은 P2C가 덜하다.",
      "nginx 수동 헬스 체크는 max_fails 기본 1과 fail_timeout 10초라 내리는 순간의 실패로 서버가 갇히니, 빼기 전에 드레이닝하고 헬스 체크 게이트를 통과한 뒤 다시 넣는다.",
      "GET은 재시도로 가려지고 POST는 실패로 드러나므로 실패 수는 메서드별로 세고 배치 크기를 정한다.",
      "작은 비율은 증거가 적어 통계 잡음이 크다. 요청 단위와 사용자 단위 분할을 구분하고 지표 기준으로 승격과 중단을 자동화한다.",
    ],
  },
  {
    id: "infra-10",
    posts: ["sdn-vxlan-overlay", "layer-mtu-fragmentation", "k8s-cni-pod-network", "vpn-ipsec-wireguard"],
    prompt:
      "노드를 넘는 Pod 사이 통신에서 작은 요청은 되는데 큰 응답만 멈춘다. CNI는 VXLAN 모드이고 노드 하나는 WireGuard 터널 뒤에 있다. 원인과 확인 순서는.",
    points: [
      "VXLAN은 50바이트를 덧씌우니 Pod 인터페이스 MTU가 언더레이보다 작아야 하고, 터널이 한 겹 더면 또 그만큼 줄어든다.",
      "DF가 켜진 큰 패킷은 ICMP가 막히면 조용히 사라져 블랙홀이 된다. ping -M do -s로 경로 MTU를 찾고 MSS 클램핑이나 CNI MTU 설정으로 고친다.",
      "노드를 넘을 때만 안 되면 UDP 4789와 노드 캡처에서 캡슐화된 패킷을 보고, 끼어든 MASQUERADE 규칙이 출발지를 바꾸지 않는지 본다.",
      "WireGuard는 AllowedIPs가 라우팅과 방화벽을 겸하니 Pod 대역이 거기 들어 있는지와 터널 MTU를 함께 본다.",
    ],
  },
  {
    id: "infra-11",
    posts: ["cilium-ebpf", "k8s-kube-proxy-modes", "iptables-nat", "k8s-service-types"],
    prompt:
      "Service 2만 개 클러스터에서 새 연결의 첫 패킷이 느리고 kube-proxy 규칙 갱신이 수십 초 걸린다. 게다가 NodePort 뒤 앱 로그에 클라이언트 IP가 전부 노드 주소다. nftables, IPVS, Cilium 중 무엇을 고르고 IP 문제는 어떻게 푸나.",
    points: [
      "iptables 모드는 체인을 위에서부터 훑어 첫 패킷 지연과 갱신 비용이 규칙 수에 비례하고, nftables 모드는 맵 하나로 조회해 규모에 덜 흔들린다. IPVS는 밀려났다.",
      "Cilium은 소켓 단계에서 Service를 풀어 kube-proxy 자체를 빼고 identity로 정책을 건다.",
      "ClusterIP는 어느 장치에도 없는 주소라 DNAT 규칙으로만 존재하고, conntrack이 기억하는 동안 규칙은 다시 읽히지 않는다.",
      "NodePort는 다른 노드의 Pod로 보내며 SNAT을 하니 externalTrafficPolicy: Local로 바꾸되 헬스 체크 포트와 엔드포인트 없는 노드의 REJECT를 감안한다.",
    ],
  },
  {
    id: "infra-12",
    posts: ["k8s-architecture", "k8s-controllers-reconcile", "k8s-api-objects", "k8s-labels-selectors"],
    prompt:
      "kubectl apply는 configured를 찍었는데 새 Pod가 안 생기고 오히려 옆 팀 앱의 Pod 수가 줄었다. 이벤트도 조용하다. 부품 중 어디가 멈췄는지, 아니면 무엇이 남의 것을 가져갔는지 어떤 순서로 좁히나.",
    points: [
      "모든 부품은 API 서버하고만 이야기하고 각자 자기 오브젝트만 보니 Deployment, ReplicaSet, Pod 중 어느 단계가 비었는지 get으로 끊어 본다.",
      "generation과 observedGeneration이 다르면 컨트롤러가 아직 안 본 것이고, 컨트롤러 매니저는 Lease 하나로 리더를 정하니 리더 상태와 로그를 본다.",
      "셀렉터가 넓으면 ReplicaSet이 남의 Pod를 입양해 개수를 맞추고 새 Pod를 만들지 않는다. 옆 팀 Pod가 줄어든 이유가 여기 있다.",
      "컨트롤러는 이벤트가 아니라 상태를 보고 멱등하게 움직이므로 409를 만나면 다시 읽고, Deployment 셀렉터는 바꿀 수 없어 새로 만들어야 한다.",
    ],
  },
  {
    id: "infra-13",
    posts: ["kubectl-apply-ssa", "argocd-basics", "k8s-hpa", "k8s-vpa"],
    prompt:
      "HPA가 6으로 늘린 replicas가 ArgoCD 동기화나 동료의 kubectl apply 뒤 3으로 돌아가 서비스가 느려진다. requests를 자동으로 잡으려고 VPA도 같은 CPU에 걸어 두었다. 무엇이 서로를 흔들고 어디를 고치나.",
    points: [
      "클라이언트 apply는 last-applied, 파일, 현재 상태의 3방향 비교라 파일의 replicas: 3이 이기고, 서버 쪽 apply는 필드 주인이 HPA면 충돌을 낸다. 매니페스트에서 replicas를 뺀다.",
      "ArgoCD selfHeal은 git과 다른 것을 되돌리니 replicas를 ignoreDifferences로 비켜 주고 Synced와 Healthy를 따로 읽는다.",
      "HPA는 desired = ceil(현재 × 현재값/목표)이고 분모가 requests라서 VPA가 requests를 바꾸면 사용률이 흔들려 둘이 서로를 밀고 당긴다.",
      "줄일 때는 5분 안정화 창이 걸리고 requests가 없으면 TARGETS가 unknown으로 남아 아예 늘지 않는다.",
    ],
  },
  {
    id: "infra-14",
    posts: ["kubeconfig-contexts", "k8s-audit-logging", "cis-benchmark-kube-bench", "k8s-certifications"],
    prompt:
      "누군가 운영 네임스페이스의 Deployment를 지웠는데 감사 로그가 꺼져 있어 누군지 모른다. kube-bench를 돌리니 audit-log-path 항목이 FAIL이다. 범인을 찾을 수 있게 만들고 같은 사고를 막는 순서를 세워라.",
    points: [
      "감사 정책은 위에서부터 처음 맞는 규칙 하나를 고르니 delete 동사를 Metadata 수준으로 남기고 Secret은 RequestResponse로 남기지 않는다. jq로 verb와 user를 뽑는다.",
      "kube-bench는 ps와 stat 출력으로 플래그를 판정하므로 API 서버 매니페스트에 audit 플래그를 넣어 PASS로 바꾸되 중복 플래그는 첫 값만 읽는 착시가 있다.",
      "사고 경로는 터미널 하나의 use-context가 다른 터미널의 명령도 운영으로 보내는 kubeconfig 구조이고, 터미널별 KUBECONFIG와 프롬프트 표시로 막는다.",
      "실기 시험에서 문제마다 컨텍스트 전환부터 치는 습관이 운영에서도 같은 사고를 막는다.",
    ],
  },
  {
    id: "infra-15",
    posts: ["k8s-pod-scheduling", "k8s-node-autoscaling-karpenter", "k8s-pod-disruption-budget", "k8s-node-maintenance"],
    prompt:
      "노드 drain이 끝없이 재시도하고, 동시에 HPA가 늘린 Pod는 Pending이다. Karpenter가 돌고 있는데 노드가 안 붙는다. 세 현상을 어떻게 연결하고 무엇부터 푸나.",
    points: [
      "drain은 eviction API를 쓰고 PDB의 ALLOWED DISRUPTIONS가 0이면 429를 돌려줘 재시도만 한다. minAvailable이 replicas와 같거나 준비 안 된 Pod가 있으면 영원히 멈춘다.",
      "FailedScheduling 메시지에서 taint, affinity, 자원 중 무엇에 걸렸는지 읽는다. topologySpread나 anti-affinity 제약은 노드를 더해도 못 푸는 경우가 있다.",
      "Karpenter는 Pending Pod의 requests와 제약을 보고 인스턴스를 고르므로 제약이 맞지 않으면 노드를 만들지 않고 로그에 이유를 남긴다. PDB는 consolidation도 막는다.",
      "drain을 멈춰 세우는 Pod 세 종류와 포기하게 하는 플래그를 알고, NoExecute taint는 PDB를 건너뛰니 마지막 수단으로 둔다.",
    ],
  },
  {
    id: "infra-16",
    posts: ["k8s-pod-probes", "spring-boot-on-kubernetes", "health-checks", "k8s-deployment"],
    prompt:
      "결제사 API가 느려지자 결제 서비스 Pod 전부가 차례로 재시작했고, 다음 배포에서는 새 버전이 Ready가 안 돼 롤아웃이 멈췄다. 프로브와 배포 설정을 어떻게 다시 짜나.",
    points: [
      "liveness가 외부 의존성을 보면 의존성 장애가 전체 재시작으로 번진다. liveness는 프로세스 자체만, 의존성은 readiness나 요청 단위 실패로 다룬다.",
      "공유 의존성을 깊은 검사로 물으면 서버 전부가 한꺼번에 빠지니 얕은 검사와 요청 단위 실패로 장애 범위를 줄인다.",
      "Spring Boot 액추에이터는 liveness와 readiness 그룹을 따로 두고, 느린 시작은 startupProbe가 덮으며 숫자 다섯 개가 판정 시간을 정한다.",
      "배포 중 readiness 실패는 maxSurge와 maxUnavailable 선 안에서 새 Pod를 트래픽에서 빼고 progressDeadlineSeconds가 지나면 멈춘 배포로 표시된다.",
    ],
  },
  {
    id: "infra-17",
    posts: ["k8s-pod-multicontainer", "k8s-job-cronjob", "k8s-daemonset", "centralized-logging-pipeline"],
    prompt:
      "로그 수집 사이드카를 붙인 뒤 CronJob이 끝나지 않고 Running으로 남고, 수집기 DaemonSet은 control-plane 노드와 새로 taint를 건 노드에서 사라졌다. 로그 저장소가 멈춘 밤에는 로그가 통째로 빠졌다. 무엇을 바꾸나.",
    points: [
      "일반 컨테이너 사이드카는 메인이 끝나도 계속 돌아 Job이 Completed가 안 되니 init 자리에 restartPolicy: Always를 둔 네이티브 사이드카로 바꾼다.",
      "CronJob은 놓친 회차를 몰아 돌리지 않고 마지막 하나만 돌리므로 두 번 돌아도 괜찮게 만들고 backoffLimit과 ttlSecondsAfterFinished를 챙긴다.",
      "DaemonSet은 노드 수가 replicas이고 toleration이 자동으로 붙지만 control-plane taint와 나중에 건 taint는 따로 toleration을 줘야 한다.",
      "수집기는 노드마다 하나면 사이드카가 필요 없을 수 있고, 저장소 장애 때는 수집기 버퍼 크기가 유실량을 정한다.",
    ],
  },
  {
    id: "infra-18",
    posts: ["k8s-configmap", "helm-chart-templates", "yaml-for-k8s", "kustomize-basics"],
    prompt:
      "ConfigMap을 고쳤는데 Pod가 옛 값을 쓴다. 환경 변수로 넣은 값과 subPath로 꽂은 파일 둘 다다. 차트에서 COUNTRY: NO를 넣은 뒤로는 API 서버가 거절하고, helm lint는 렌더링 줄 번호만 가리킨다. 무엇이 어디서 멈추나.",
    points: [
      "환경 변수는 컨테이너가 뜰 때 한 번만 읽히고 subPath 파일은 끝까지 그대로다. 볼륨 전체 마운트만 늦게 바뀐다.",
      "롤아웃을 일으키려면 Helm은 checksum 어노테이션을 템플릿에 넣고 Kustomize는 configMapGenerator의 해시 이름을 쓴다.",
      "YAML 1.1은 NO를 false로 읽으니 따옴표로 감싸고, 8진수 권한과 블록 스칼라도 같은 함정이다. kubectl은 타입이 맞지 않으면 거절한다.",
      "템플릿은 YAML이 아니라 텍스트를 찍으므로 helm template으로 렌더링한 결과의 줄 번호를 보고 nindent와 하이픈 공백 처리를 맞춘다.",
    ],
  },
  {
    id: "infra-19",
    posts: ["k8s-secret", "helm-values-secrets", "gitops-argocd-vs-flux", "external-secrets"],
    prompt:
      "GitOps로 옮기면서 values.yaml의 DB 비밀번호가 git 히스토리에 남았다. 외부 저장소로 옮긴 뒤에는 값을 바꿔도 앱이 10분째 옛 값을 쓴다. 어떻게 정리하나.",
    points: [
      "Secret은 base64일 뿐 암호가 아니고 etcd에도 평문이라 저장 시 암호화와 list 권한까지 챙기는 RBAC이 먼저다.",
      "git에는 SOPS로 암호화하거나 ESO와 Sealed Secrets로 원본을 밖에 두고 참조만 둔다. ArgoCD와 Flux는 비밀 값을 두는 방식이 다르다.",
      "샌 값은 새 값 발급, 앱 전환, 옛 값 폐기 순으로 교체하고 히스토리 rewrite로는 풀지 않는다.",
      "ESO의 refreshInterval은 Secret까지의 시간이지 앱까지가 아니므로 Secret이 바뀐 뒤 Pod 재시작이 따로 필요하고, 만들어진 Secret의 주인은 ExternalSecret이다.",
    ],
  },
  {
    id: "infra-20",
    posts: ["k8s-pv-pvc", "k8s-storageclass-snapshots", "velero-backup", "backup-strategy"],
    prompt:
      "노드 장애 뒤 Postgres Pod가 Pending이고 이벤트에 볼륨 존 불일치가 보인다. 매일 VolumeSnapshot을 찍고 있으니 안심하라는 말이 있는데 맞나. 복구 설계를 어떻게 세우나.",
    points: [
      "존에 묶인 디스크는 다른 존 노드로 못 가니 WaitForFirstConsumer로 노드가 정해진 뒤 디스크를 만들고, 접근 모드는 Pod가 아니라 노드를 센다.",
      "스냅샷은 같은 스토리지 안에 있어 백업이 아니다. 세 벌, 두 매체, 한 곳은 밖이라는 3-2-1과 불변 백업, 복원 테스트가 있어야 백업이다.",
      "Velero는 API로 객체를 묶어 다른 네임스페이스나 클러스터로 되살리고 볼륨은 클라우드 스냅샷, CSI 데이터 이동, 파일 시스템 백업 중 고른다.",
      "StorageClass는 만든 뒤 고칠 수 없고 Retain과 Delete 회수 정책이 PVC 삭제 때 디스크 운명을 정한다.",
    ],
  },
  {
    id: "infra-21",
    posts: ["k8s-coredns", "k8s-network-policy", "k8s-statefulset", "devops-networking-roadmap"],
    prompt:
      "기본 거부 NetworkPolicy를 건 네임스페이스에서 외부 API 호출이 가끔 5초씩 늦거나 아예 이름이 안 풀리고, StatefulSet의 kafka-0.kafka 같은 이름도 안 풀린다. 어디서부터 펴고 무엇으로 확인하나.",
    points: [
      "Pod에서만 이름이 안 풀리면 CoreDNS부터 보고 NetworkPolicy로 넘어가는 순서가 증상별 첫 글이다.",
      "기본 거부는 kube-system CoreDNS로 가는 UDP와 TCP 53까지 막으니 egress 허용 규칙을 더해야 한다. 정책은 허용 목록이고 양쪽 모두 허용돼야 연결된다.",
      "ndots:5는 질의를 여덟 개로 불리고, 가끔 5초는 A와 AAAA 동시 질의가 DNAT conntrack 삽입 경쟁에서 하나 버려져 timeout을 기다리는 것이다. conntrack -S의 insert_failed와 NodeLocal DNSCache로 확인하고 줄인다.",
      "Pod마다 붙는 DNS 이름은 headless Service가 있어야 만들어지니 serviceName과 clusterIP: None을 본다.",
    ],
  },
  {
    id: "infra-22",
    posts: ["kubernetes-ingress", "gateway", "k8s-gateway-api", "reverse-proxy-lb-api-gateway"],
    prompt:
      "ingress-nginx가 은퇴해 Gateway API로 옮긴다. 어노테이션으로 헤더 기반 분기와 90/10 분할, 속도 제한을 쓰고 있었다. 옮길 때 무엇이 깨지고 무엇을 먼저 보나.",
    points: [
      "어노테이션에 쌓인 동작은 표준이 아니라 HTTPRoute의 헤더 매치와 weight로 다시 적어야 하고, 속도 제한처럼 없는 것은 게이트웨이 층을 따로 둘지 정한다.",
      "Gateway API는 GatewayClass, Gateway, HTTPRoute로 역할을 나누고 CRD는 번들 채널로 따로 설치하며 라우트 종류마다 성숙도가 다르다.",
      "붙었는지는 status의 Accepted와 ResolvedRefs로 읽고 다른 네임스페이스 참조는 ReferenceGrant가 막는다. 가중치 합이 모자라면 비는 몫이 생긴다.",
      "TLS를 어디서 끝낼지와 502, 503, 504, 429를 만든 층을 가리는 법은 리버스 프록시, 로드 밸런서, 게이트웨이 세 겹의 역할 차이에서 나온다.",
    ],
  },
  {
    id: "infra-23",
    posts: ["service-mesh", "distributed-tracing", "otel-collector-pipeline", "observability-basics"],
    prompt:
      "메시를 들인 뒤 어떤 장애에서 요청 하나가 백엔드에 27번 닿았고, trace를 보면 중간 서비스에서 끊긴다. 느린 요청만 골라 저장하고 싶은데 Collector를 노드마다 하나 둔 상태다. 왜 그렇고 어떻게 고치나.",
    points: [
      "사이드카 재시도와 앱 재시도가 홉마다 곱해져 3 × 3 × 3이 된다. 재시도는 한 층에서만 하고 예산을 둔다.",
      "사이드카는 헤더를 전파해 주지 않으니 앱이 traceparent를 다음 호출에 넘겨야 한다. 한 번 끊기면 그 뒤는 다른 trace가 된다.",
      "꼬리 샘플링은 trace 전체를 봐야 하므로 에이전트 뒤에 게이트웨이를 두고 trace ID로 게이트웨이를 고르는 load_balancing exporter를 쓴다.",
      "메시가 있으면 로그의 출발지 IP와 지연에 프록시 홉이 끼어 다시 읽어야 하고, 지표의 튄 점에서 exemplar로 trace와 로그로 건너간다.",
    ],
  },
  {
    id: "infra-24",
    posts: ["k8s-security-context", "seccomp-apparmor", "k8s-pod-security-admission", "falco-runtime-security"],
    prompt:
      "네임스페이스를 restricted로 올리자 nginx가 뜨지 않는다. 올린 뒤에도 공격자가 컨테이너 안에서 셸을 띄우는 것은 막지 못한다는 지적이 있다. 순서와 역할을 어떻게 나누나.",
    points: [
      "PSA는 dry-run과 warn 라벨로 먼저 위반을 보고 enforce로 올린다. 경고는 Deployment에, 거절은 Pod에 나오므로 롤아웃이 조용히 멈춘다.",
      "readOnlyRootFilesystem이면 nginx가 쓰는 캐시와 pid 경로에 emptyDir을 열어 줘야 하고, non-root는 1024 아래 포트를 못 열어 포트를 바꾸거나 capability를 더한다.",
      "seccomp 기본 프로필은 위험한 시스템 콜을 막을 뿐 허용된 execve로 셸을 띄우는 것은 막지 않는다. 앱 전용 허용 목록은 strace와 SCMP_ACT_LOG로 만든다.",
      "막는 장치와 알아채는 장치는 다르다. Falco는 eBPF 이벤트로 셸 실행과 민감 파일 읽기를 규칙으로 잡고 예외로 소음을 줄인다.",
    ],
  },
  {
    id: "infra-25",
    posts: ["k8s-rbac", "k8s-serviceaccount-tokens", "eks-cluster-basics", "k8s-admission-control"],
    prompt:
      "개발팀에 edit ClusterRole을 줬는데 보안 검토에서 이걸로 클러스터 관리자까지 갈 수 있다고 한다. EKS에서 Pod가 S3를 읽어야 하는 요구도 있다. 권한을 어떻게 설계하나.",
    points: [
      "edit은 Pod 생성 권한이 있어 다른 ServiceAccount로 Pod를 띄워 그 토큰으로 행세할 수 있다. escalate, bind, impersonate 동사와 함께 can-i --list로 감사한다.",
      "Pod의 토큰은 TokenRequest로 Pod에 묶이고 audience로 받는 쪽을 정하니 필요 없는 Pod는 automountServiceAccountToken을 끈다.",
      "Pod의 AWS 권한은 IRSA나 Pod Identity로 OIDC 토큰과 IAM 역할을 묶고 자격 증명을 Secret에 두지 않는다. 사람의 kubectl은 access entry로 IAM과 RBAC을 잇는다.",
      "어떤 ServiceAccount를 쓸 수 있는지는 ValidatingAdmissionPolicy나 Kyverno로 네임스페이스 단위로 막되 웹훅의 failurePolicy가 장애를 부를 수 있다.",
    ],
  },
  {
    id: "infra-26",
    posts: ["helm-basics", "helm-release-lifecycle", "helm-dependencies-oci-gitops", "argocd-basics"],
    prompt:
      "운영에서 helm upgrade가 another operation is in progress로 막혔고, 다른 앱은 helm history에 아무것도 없다. 하위 차트에 추가한 CRD는 upgrade를 해도 안 바뀐다. 각각 무슨 상태이고 어떻게 푸나.",
    points: [
      "릴리스 기록은 클러스터 안 Secret에 리비전별로 있고 pending 상태가 남으면 잠기니 그 리비전을 rollback하거나 Secret을 정리한다. 롤백도 새 리비전이다.",
      "history가 비는 앱은 ArgoCD가 차트를 렌더링만 해서 apply하기 때문이다. 기록은 git 커밋과 ArgoCD 리비전에 있고 sync wave와 hook이 순서를 맡는다.",
      "CRD는 처음 install 때만 설치되므로 upgrade로는 갱신되지 않고 따로 apply해야 한다. 훅은 릴리스 밖에서 돈다.",
      "부모 values는 하위 차트 이름 아래로 흘러가고 차트 버전과 앱 버전은 따로 올리며 OCI 레지스트리에 둔다.",
    ],
  },
  {
    id: "infra-27",
    posts: ["k8s-certificates-pki", "k8s-cluster-upgrade", "k8s-feature-maturity", "k8s-etcd-backup"],
    prompt:
      "kubeadm 클러스터를 1.31에서 1.33으로 올리려 한다. 업그레이드 전날 무엇을 확인하고 어떤 순서로 하며, 되돌릴 수 있는 범위는 어디까지인가.",
    points: [
      "한 번에 한 마이너씩, 컨트롤 플레인 다음 노드 순으로 두 번 올린다. kubelet이 API 서버보다 앞서면 안 된다는 버전 차이 규칙에서 순서가 나온다.",
      "사라진 API를 Warning 헤더, 지표, 감사 로그, pluto로 먼저 찾아 kubectl convert로 옮긴다. 이미 저장된 객체는 괜찮지만 매니페스트와 컨트롤러가 깨진다.",
      "check-expiration으로 인증서 만료일을 보고 kubeadm upgrade가 갱신하는 것과 kubelet이 CSR로 스스로 갱신하는 것을 구분한다.",
      "etcd 스냅숏을 먼저 뜨고, 복원은 과거로 돌아가 watch가 조용히 틀리니 --bump-revision을 쓴다. 되돌리기는 결국 etcd 복원뿐이라 좁다.",
    ],
  },
  {
    id: "infra-28",
    posts: ["k8s-operators", "k8s-crd", "k8s-namespace", "kubectl-essentials"],
    prompt:
      "오퍼레이터를 지운 뒤 그 CR과 네임스페이스가 Terminating에서 며칠째 멈춰 있다. CRD도 지우자는 의견과 finalizer를 손으로 떼자는 의견이 있다. 무엇이 붙잡고 있고 어느 쪽이 맞나.",
    points: [
      "finalizer는 삭제를 붙잡는 표시이고 오퍼레이터가 바깥 리소스를 치운 뒤 떼 주는데, 오퍼레이터가 없으면 아무도 떼지 않는다.",
      "CRD를 지우면 CR이 모두 사라지니 순서가 거꾸로이고, 손으로 finalizer를 patch하면 바깥 리소스가 고아로 남는 대가가 있다.",
      "네임스페이스 Terminating은 남은 리소스와 finalizer를 보고, 집계 API가 죽어 discovery가 실패해도 멈춘다.",
      "get -o jsonpath로 metadata.finalizers를 읽고 describe로 이벤트를 모아 보는 명령이 첫 단계다. 기록을 읽는 명령과 노드까지 가는 명령은 다르다.",
    ],
  },
  {
    id: "infra-29",
    posts: ["k8s-api-aggregation-schedulers", "k8s-batch-kueue", "k8s-gpu-dra", "local-k8s-kind-minikube"],
    prompt:
      "학습 Job 둘이 GPU 8장 노드에서 각각 4장씩 잡고 서로 기다리며 멈췄다. 고친 스케줄링 정책을 실제 GPU 없이 검증하고 싶다. 어떻게 풀고 어디서 시험하나.",
    points: [
      "기본 스케줄러는 Pod 하나씩 놓아 교착이 생기니 Kueue의 ClusterQueue 몫과 cohort, 또는 PodGroup gang 정책으로 다 같이 뜨거나 아예 안 뜨게 한다.",
      "GPU는 디바이스 플러그인이 정수로 알리고 오버커밋이 없으며 requests와 limits가 같아야 한다. 조건 기반 요청은 DRA의 ResourceClaim으로 적는다.",
      "두 번째 스케줄러나 프로필로 배치 성향을 바꾸고 schedulerName으로 고른다.",
      "kwok은 kubelet 없이 노드 100개를 수 초에 띄우니 스케줄링과 DRA 할당 검증에 맞고, 실제로 컨테이너가 돌아야 하면 kind를 쓴다.",
    ],
  },
  {
    id: "infra-30",
    posts: ["k8s-cri-cni-csi", "k8s-pod-troubleshooting", "k8s-deploy-pipeline-eks", "k8s-learning-roadmap"],
    prompt:
      "새 노드가 NotReady이고 그 노드로 간 Pod는 ContainerCreating에서 멈춘다. 다른 노드의 Pod는 ImagePullBackOff다. CI는 초록색이었다. 상태별로 어디를 보고, 파이프라인은 무엇을 놓쳤나.",
    points: [
      "CNI 설정 파일이 없으면 kubelet이 NotReady를 보고하고, ContainerCreating은 CNI ADD나 볼륨 마운트 실패이니 describe 이벤트와 crictl, kubelet 로그를 본다.",
      "ImagePullBackOff는 태그 오타, 레지스트리 인증, 네트워크 셋 중 하나이고 ECR 토큰 만료와 노드 역할 권한부터 확인한다.",
      "rollout status를 기다리지 않는 CI는 apply만 성공하고 끝나므로 초록색이 배포 성공을 뜻하지 않는다.",
      "STATUS마다 먼저 볼 곳이 다르고 이벤트 정렬에 함정이 있다. 증상에서 처음 펼 글을 고르는 순서가 로드맵에 있다.",
    ],
  },
  {
    id: "infra-31",
    posts: ["jenkins-pipeline-basics", "jenkins-on-kubernetes", "jenkins-argocd-push-pull", "ci-cd-basics"],
    prompt:
      "Jenkins 빌드가 Pending에서 20분 멈추고, 가끔 실패하는 테스트 때문에 머지가 막힌다. 운영 배포는 Jenkins가 운영 클러스터에 직접 kubectl apply하는데 감사에서 지적받았다. 어떻게 바꾸나.",
    points: [
      "파드 에이전트 Pending은 podTemplate의 requests, 노드 자원, 이미지 풀, jnlp 접속 순으로 좁힌다.",
      "플레이키 테스트는 격리와 재시도 한도로 다루고 머지 큐로 합치는 주기를 정한다. DORA 네 숫자로 파이프라인을 잰다.",
      "운영은 ArgoCD pull로 바꿔 Jenkins 자격 증명이 운영 클러스터에 닿지 않게 하고 경계는 git PR과 digest 승격으로 긋는다.",
      "docker 소켓 없이 이미지를 만들고 빈 디스크 빌드의 캐시를 따로 두며 컨트롤러는 JCasC로 코드에 둔다.",
    ],
  },
  {
    id: "infra-32",
    posts: ["rollback-strategy", "feature-flags", "blue-green-deployment", "release-cutover-hypercare"],
    prompt:
      "새 버전이 컬럼 이름을 바꾸는 마이그레이션과 함께 나갔고 장애가 났다. rollout undo를 쳤더니 더 심해졌다. 무엇을 잘못했고, 다음 큰 전환에서 되돌릴 수 있게 만들려면 무엇을 준비하나.",
    points: [
      "코드는 돌아왔는데 스키마는 안 돌아가 옛 코드가 새 스키마를 못 읽는다. 스키마, 큐 메시지, 부작용은 되돌릴 수 없으니 이럴 땐 롤 포워드다.",
      "코드 경로는 피처 플래그 킬 스위치로 즉시 끄되 설정이 서버에 닿는 폴링 지연과 플래그 서비스 장애 때 기본값을 알고 쓴다.",
      "블루그린은 DB가 한 벌뿐이라 스키마 호환이 전제이고, 되돌리기가 빠른 조건은 옛 벌을 남겨 두고 데이터 형식이 같은 동안이다.",
      "컷오버는 되돌리기 시간에서 거꾸로 마감을 계산하고 돌아올 수 없는 지점 앞에 숫자 게이트를 두며, 끝나는 날이 정해진 하이퍼케어로 지킨다.",
    ],
  },
  {
    id: "infra-33",
    posts: ["iac-basics", "terraform-basics", "ansible-network-automation", "network-config-cicd"],
    prompt:
      "콘솔에서 급하게 연 보안 그룹 규칙이 사흘 뒤 동료의 apply에서 사라졌고, 서버마다 sysctl이 달라 장애 재현이 안 된다. 어떤 도구를 어디에 두고 파이프라인을 어떻게 짜나.",
    points: [
      "Terraform은 코드, state, 실제를 맞대 plan하니 코드 밖 변경은 drift로 지워진다. import로 코드에 데려오고 refresh-only로 감지한다.",
      "서버 안 설정은 Terraform이 들어가지 못하므로 Ansible의 멱등 모듈로 맞추고 --check --diff로 먼저 본다. 두 번째 실행은 아무것도 바꾸지 않아야 한다.",
      "PR에서 plan을 만들어 저장하고 그 plan만 apply하며 plan과 apply 권한을 나눈다. 변경 창도 코드로 정한다.",
      "되돌리기는 git revert부터이고, 선언형 수렴과 조정 루프라는 생각이 손으로 고친 서버를 없앤다.",
    ],
  },
  {
    id: "infra-34",
    posts: ["serverless-limits", "cold-starts", "cloud-cost-optimization"],
    prompt:
      "엑셀 내보내기를 Lambda로 옮겼더니 큰 고객은 504를 받고, 트래픽이 몰리면 RDS가 too many connections로 쓰러지며, 첫 요청은 2초 걸린다. 청구서도 상시 서버보다 늘었다. 서버리스를 유지할지 어떻게 판단하나.",
    points: [
      "함수는 15분까지 돌지만 앞의 API Gateway가 29초에 끊으니 긴 일은 비동기로 돌리고 결과는 S3 같은 곳에 둔다. 6MB 넘는 파일은 함수를 지나가지 않게 한다.",
      "동시 실행 수만큼 DB 연결이 생기므로 연결 프록시를 두거나 동시성 한도를 건다.",
      "콜드 스타트는 microVM, 런타임 init, 핸들러 밖 코드가 차례로 더해진다. 번들을 줄이고 지연 import를 하며 프로비저닝된 동시성이나 SnapStart로 미리 만든다.",
      "손익은 호출 수와 실행 시간으로 계산하고 꾸준한 트래픽이면 상시 서버가 싸다. NAT 처리 요금처럼 바이트에 붙는 요금도 청구서 위에서부터 읽는다.",
    ],
  },
  {
    id: "infra-35",
    posts: ["monitoring-basics", "metrics-types", "prometheus-basics", "grafana-dashboards"],
    prompt:
      "앱이 죽었는데 대시보드는 조용했고, 살린 뒤 p90 그래프는 실제보다 23% 낮다. ServiceMonitor를 추가한 새 서비스는 아예 타겟에 없다. 세 가지를 각각 어디서 고치나.",
    points: [
      "프로세스가 멈추면 앱 지표는 비니 up과 absent, 바깥에서 두드리는 blackbox 탐침이 잡는다. 안에서 세기와 밖에서 두드리기를 같이 둔다.",
      "히스토그램은 칸 경계로 분위수를 어림하므로 버킷을 지연 분포에 맞추고, 서머리는 정확하지만 합칠 수 없다. 레이블 하나가 scrape를 수십 배 키운다.",
      "ServiceMonitor는 라벨 셀렉터와 네임스페이스 셀렉터를 거쳐 relabel 설정이 되므로 라벨 하나 어긋나면 대상이 조용히 빠진다.",
      "패널은 $__rate_interval을 쓰고 변수 All은 =~로 받으며 대시보드는 코드로 둔다. 질문 하나에 패널 하나다.",
    ],
  },
  {
    id: "infra-36",
    posts: ["sli-slo", "error-budgets", "alerting", "on-call"],
    prompt:
      "새벽 알림이 주 15건인데 대부분 CPU 80%이고, 온콜 한 사람이 석 달 만에 그만뒀다. 배포는 금요일마다 멈춘다. SLO를 기준으로 알림과 온콜을 다시 짜라.",
    points: [
      "증상인 가용성과 지연 SLI에 걸고 원인인 CPU는 대시보드로 보낸다. 사람을 깨우는 값과 티켓으로 보낼 값을 가른다.",
      "SLO는 28일 굴러가는 창으로 두고 에러 예산 소진 속도를 여러 창 여러 속도로 울리며 for와 창이 더해진 시점을 promtool로 잰다.",
      "예산이 남았으면 배포하고 바닥이면 멈추는 정책을 숫자로 적어 금요일 배포도 예산으로 정한다.",
      "Alertmanager로 묶고 누르고 런북 링크를 달며, 페이지 기록으로 알림 피로를 세고 에스컬레이션과 교대표로 한 사람에게 몰리지 않게 한다.",
    ],
  },
  {
    id: "infra-37",
    posts: ["debugging-with-logs", "elk-stack-basics", "grafana-tempo-tracing", "structured-logging"],
    prompt:
      "결제가 두 번 됐다는 문의가 왔다. 로그 저장소에서 trace_id로 찾으려니 인덱스마다 필드 타입이 달라 질의가 깨지고, Tempo에서는 그 trace가 검색에 안 나온다. 어떻게 추적하나.",
    points: [
      "증상이 남은 서비스에서 첫 줄을 찾고 trace_id로 세 서비스의 로그를 한 줄로 세운다. 시계가 틀린 로그는 span ID로 순서를 맞춘다.",
      "로그가 JSON 한 줄에 trace_id 필드를 갖고 있어야 이 추적이 가능하고 개인정보는 남기기 전에 가린다.",
      "Elasticsearch는 컴포넌트 템플릿으로 타입을 못 박고 데이터 스트림에 쌓아야 인덱스마다 타입이 달라 질의가 깨지는 일을 막는다.",
      "Tempo는 trace ID 조회는 bloom 필터로 되지만 TraceQL 검색은 최근 30초가 빠지고 크기 한도에 걸린 span은 버려진다. 재현은 한 사람만 debug 레벨을 켜서 한다.",
    ],
  },
  {
    id: "infra-38",
    posts: ["network-monitoring", "tcp-connection-lifecycle", "linux-network-tuning", "nat-traversal"],
    prompt:
      "대역폭 그래프는 평평한데 배포 직후 연결이 1초 단위로 늦고 가끔 응답이 없다. 인터페이스 drop은 0이고, NAT 게이트웨이 뒤 수백 개 Pod가 같은 외부 API를 부른다. 어떤 카운터를 보나.",
    points: [
      "인터페이스가 0이어도 qdisc에서 버려지고 재전송 비율이 잃어버린 패킷의 영수증이다. node_exporter 누적값을 rate로 바꿔 본다.",
      "accept 큐가 넘치면 SYN이 소리 없이 사라져 1초 재전송이 생기니 ss -ltn의 Recv-Q와 ListenOverflows, somaxconn을 본다. CLOSE_WAIT가 쌓이면 앱 버그다.",
      "TIME_WAIT와 conntrack은 개수를 한도와 같이 보고, 컨테이너 안 sysctl은 호스트와 다르니 네임스페이스 안에서 읽는다.",
      "주소 하나를 수백 클라이언트가 나누면 NAT 포트가 고갈되고 그 증상은 오류가 아니라 처리량 붕괴로 먼저 나타난다.",
    ],
  },
  {
    id: "infra-39",
    posts: ["failover", "disaster-recovery", "multi-region", "cdn-edge-anycast"],
    prompt:
      "경영진이 리전 장애에도 1분 안에 복구하고 데이터는 0 손실이어야 한다고 한다. 지금은 매일 밤 pg_dump 한 벌을 같은 리전에 둔다. 무엇을 숫자로 되묻고 단계를 어떻게 올리나.",
    points: [
      "RPO는 마지막으로 바깥에 나간 기록이 정하고 RTO는 감지, 승격, 전환의 합이다. 매일 덤프는 RPO가 하루이고 같은 리전은 재해에 같이 사라진다.",
      "리전 사이 동기 복제는 빛의 속도가 바닥이라 커밋마다 수십 ms를 더하니 0 손실과 1분은 비용과 지연으로 맞바꾼다. 쓰기 주인을 한 리전에 두는 액티브-패시브부터 간다.",
      "빨리 감지하면 잘못 감지하고 펜싱이 없으면 옛 프라이머리가 살아 스플릿 브레인이 된다. 비동기 복제는 응답한 쓰기를 잃는다.",
      "사용자는 애니캐스트와 DNS로 가까운 리전에 보내되 경로가 바뀌면 TCP 연결이 끊기는 것을 감안하고, DR 네 단계의 비용과 RTO를 나란히 놓고 고른다.",
    ],
  },
  {
    id: "infra-40",
    posts: ["production-incidents", "postmortems", "chaos-engineering"],
    prompt:
      "재고 서비스가 느려지자 상품 API가 멈춰 40분 장애가 났다. 서버 숫자는 내내 멀쩡했다. 대응 중 무엇을 먼저 했어야 하고, 뒤에 무엇을 남기며, 같은 종류의 약점을 미리 찾으려면 어떻게 하나.",
    points: [
      "원인보다 완화가 먼저다. 의존성을 끊거나 타임아웃을 걸어 사용자 피해를 멈추고 지휘자와 역할을 나눠 정해진 간격으로 다음 시각을 적어 공유한다.",
      "타임라인은 로그에서 뽑고 비난 없는 문장으로 쓰며 다섯 번의 왜가 놓치는 가지를 기여 요인으로 다시 본다. 후속 조치는 담당자와 날짜가 있어야 닫힌다.",
      "정상 상태를 숫자로 적고 고장 하나를 작은 폭발 반경에 넣어 가설을 시험한다. 연결 단계를 재지 않는 타임아웃 같은 약점이 이때 드러난다.",
      "멈춤 조건이 없는 실험은 장애이고, 게임 데이에는 사람과 절차도 함께 실험한다.",
    ],
  },
];
