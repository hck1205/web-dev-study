import type { Topic } from "./types";

// 토픽을 추가하는 방법: 아래 트리에 항목을 추가하면 된다. 순서는 신경 쓰지 않아도 라벨 ABC 순으로 자동 정렬된다.
// 하위 메뉴는 children에 같은 구조로 중첩한다. 메뉴, 라우트(/topics/...), 홈 화면이 모두 이 트리에서 만들어진다.
export const TOPICS: Topic[] = [
  {
    id: "programming",
    label: "Programming",
    description: "개발과 컴퓨터 과학 전반",
    children: [
      { id: "ai", label: "AI", description: "머신러닝, LLM, 에이전트" },
      {
        id: "algorithms",
        label: "Algorithms",
        description: "문제 풀이와 해설, 자료구조",
        children: [
          { id: "system-design", label: "For System Design", description: "블룸 필터, HyperLogLog, 지오해시, 쿼드트리, 머클 트리, Raft, OT·CRDT 등 대규모 시스템의 알고리즘" },
        ],
      },
      {
        id: "backend",
        label: "Backend",
        description: "서버 애플리케이션, API 설계",
        children: [
          { id: "api", label: "API Design", description: "페이지네이션, 멱등성, 속도 제한, 배치 처리" },
          { id: "architecture", label: "Architecture", description: "모놀리스, 마이크로서비스, 레이어드, 헥사고날, CQRS, 이벤트 소싱" },
          { id: "auth", label: "Auth", description: "로그인, 세션, 토큰, 권한 위임" },
          { id: "messaging", label: "Messaging", description: "이벤트 기반 구조, Kafka, RabbitMQ, 전달 보장" },
        ],
      },
      {
        id: "common",
        label: "Common",
        description: "분야에 상관없이 공통으로 쓰는 지식",
        children: [{ id: "git", label: "Git", description: "버전 관리, 브랜치, 협업 흐름" }],
      },
      { id: "computer-science", label: "Computer Science", description: "컴퓨터 과학 기초 이론" },
      {
        id: "design-patterns",
        label: "Design Patterns",
        description: "GoF 디자인 패턴 23가지: 생성, 구조, 행위",
        children: [
          { id: "behavioral", label: "Behavioral", description: "객체가 일을 나누고 소통하는 방식: 전략, 옵저버, 커맨드, 상태 등" },
          { id: "creational", label: "Creational", description: "객체를 만드는 방법: 싱글턴, 팩토리, 빌더, 프로토타입" },
          { id: "structural", label: "Structural", description: "객체를 조립하는 방법: 어댑터, 데코레이터, 프록시, 퍼사드 등" },
        ],
      },
      {
        id: "in-practice",
        label: "In Practice",
        description: "이론이 실제 개발과 운영에서 쓰이는 순간: 장애 대응, 디버깅, 설계 판단",
      },
      {
        id: "database",
        label: "Database",
        description: "RDB, NoSQL, 쿼리와 인덱스",
        children: [
          { id: "db-types", label: "DB Types", description: "관계형, 키-값, 문서, 컬럼, 그래프, 시계열 등 DB 종류별 장단점과 쓰임새" },
          { id: "postgresql", label: "PostgreSQL", description: "설치부터 내부 구조, 운영, 튜닝, 백업까지" },
          { id: "redis", label: "Redis", description: "인메모리 자료구조 저장소, 캐시, 메모리 관리" },
          { id: "sql", label: "SQL", description: "SQL 문법, 인덱스, 쿼리 튜닝, 테이블 설계, 트랜잭션" },
          { id: "sqld", label: "SQLD", description: "SQLD(SQL 개발자) 시험 범위를 주제별로" },
        ],
      },
      {
        id: "frontend",
        label: "Frontend",
        description: "브라우저, 렌더링, React · Next.js",
        children: [
          { id: "architecture", label: "Architecture", description: "프런트엔드 구조 설계, 마이크로 프런트엔드" },
          {
            id: "javascript",
            label: "JavaScript",
            description: "언어와 런타임, 이벤트 루프, 메모리",
            children: [
              { id: "basics", label: "Basics", description: "변수, 스코프, 호이스팅, 타입, 비교" },
              { id: "functions", label: "Functions", description: "함수 형태, 클로저, 고차 함수, 커링, 메모이제이션" },
              { id: "objects", label: "Objects & Arrays", description: "배열 메서드, 구조 분해, 복사와 불변성, 최신 문법" },
              { id: "oop", label: "this & OOP", description: "this, call·apply·bind, 프로토타입, 클래스, strict mode" },
              { id: "async", label: "Async", description: "콜백, Promise, async/await, 실행 순서" },
              { id: "browser", label: "Browser & DOM", description: "DOM, 이벤트 전파와 위임, 디바운스, 저장소" },
            ],
          },
          { id: "performance", label: "Performance", description: "웹 성능 지표, 로딩·렌더링 최적화" },
          { id: "react", label: "React", description: "렌더링 모델, 상태, 렌더링 전략" },
          { id: "rendering", label: "Rendering", description: "CSR, SSR, SSG·ISR, 하이드레이션, 스트리밍, 서버 컴포넌트" },
        ],
      },
      {
        id: "network",
        label: "Network",
        description: "HTTP, TCP/IP, DNS, 캐시, 보안",
        children: [
          { id: "cloud", label: "Cloud Networking", description: "VPC, 서브넷과 라우트 테이블, 보안 그룹, VPC 연결, CDN" },
          { id: "http", label: "HTTP", description: "메시지, 메서드, 상태 코드, 버전별 차이" },
          { id: "infrastructure", label: "Infrastructure", description: "VLAN, VPN, 로드 밸런서, SDN과 오버레이" },
          { id: "performance", label: "Performance", description: "대역폭과 지연, 트래픽 셰이핑과 QoS" },
          { id: "layers", label: "OSI · TCP/IP", description: "OSI 7계층과 TCP/IP 4계층, 계층별 프로토콜과 장비" },
        ],
      },
      {
        id: "os",
        label: "OS",
        description: "프로세스, 스레드, 메모리, 파일 시스템",
        children: [{ id: "linux", label: "Linux", description: "Ubuntu 기준 리눅스 운영, 네트워크, 방화벽" }],
      },
      {
        id: "server-infra",
        label: "Server/Infra",
        description: "컨테이너, 배포, 운영",
        children: [
          { id: "docker", label: "Docker", description: "컨테이너 이미지와 실행" },
          { id: "cloud", label: "Cloud", description: "서버리스의 한계와 콜드 스타트, 클라우드 비용" },
          { id: "iac", label: "IaC", description: "Terraform, Ansible로 인프라와 네트워크를 코드로" },
          { id: "observability", label: "Observability", description: "지표, 로그, 분산 추적, 알림, SLO와 에러 예산" },
          { id: "sre", label: "SRE", description: "재해 복구, 백업, 장애 조치, 멀티 리전, 카오스 엔지니어링, 장애 대응과 포스트모템" },
          { id: "nginx", label: "Nginx", description: "웹 서버, 리버스 프록시, 로드 밸런싱" },
          {
            id: "kubernetes",
            label: "Kubernetes",
            description: "컨테이너 오케스트레이션",
            children: [
              { id: "pod", label: "Pod", description: "Pod의 구조, 생명주기, 프로브, 리소스, 스케줄링, 장애 대응" },
              { id: "helm", label: "Helm", description: "차트, 템플릿, values, 릴리스 관리, 배포 흐름" },
              { id: "networking", label: "Networking", description: "Service, CNI, NetworkPolicy, 클러스터 DNS, 서비스 메시" },
              { id: "config", label: "Config & Storage", description: "ConfigMap, Secret, PV와 PVC" },
              { id: "eks", label: "EKS", description: "AWS의 관리형 쿠버네티스: 노드 그룹, VPC CNI, IAM 연동" },
              { id: "foundation", label: "Foundation", description: "API 오브젝트, 레이블, 컨트롤 루프, kubectl과 선언형 관리, kubeconfig" },
              { id: "operations", label: "Operations", description: "노드 유지보수, 클러스터 업그레이드, 인증서, etcd 백업" },
              { id: "platform", label: "Platform", description: "CRD와 오퍼레이터, CRI·CNI·CSI, GPU와 배치 스케줄링" },
              { id: "security", label: "Security", description: "RBAC, ServiceAccount, SecurityContext, Pod Security, 어드미션, 감사 로그" },
              { id: "workloads", label: "Workloads", description: "Namespace, Deployment, StatefulSet, DaemonSet, Job, HPA·VPA, PDB" },
            ],
          },
          {
            id: "ci-cd",
            label: "CI/CD",
            description: "빌드·테스트·배포 자동화",
            children: [
              { id: "argocd", label: "ArgoCD", description: "GitOps 방식의 쿠버네티스 배포" },
              { id: "jenkins", label: "Jenkins", description: "파이프라인 기반 빌드 서버" },
            ],
          },
        ],
      },
      { id: "security", label: "Security", description: "웹 보안, 브라우저 보안 정책, 공격과 방어" },
      {
        id: "system-design",
        label: "System Design",
        description: "대규모 시스템 설계",
        children: [
          { id: "fundamentals", label: "기초부터 차근차근", description: "서버 한 대에서 수백만 사용자까지, 어림 계산, 면접 진행법" },
          { id: "case-studies", label: "설계 사례", description: "URL 단축기, 채팅, 뉴스 피드, 결제, 증권 거래소 같은 실제 시스템을 처음부터 설계하기" },
        ],
      },
      { id: "ui-ux", label: "UI/UX", description: "사용자가 기다리고 고르고 되돌리는 순간의 화면 설계" },
    ],
  },
  {
    id: "self-development",
    label: "자기개발",
    description: "개발 밖에서 성장하기 위한 기록",
    children: [
      {
        id: "english",
        label: "English",
        description: "영어 학습",
        children: [{ id: "vocabulary", label: "어휘", description: "고급 영어 어휘 사전과 학습", href: "/vocabulary" }],
      },
      { id: "ideas", label: "아이디어", description: "떠오른 생각과 만들고 싶은 것들" },
      { id: "history", label: "역사", description: "지난 일에서 배우는 이야기" },
      { id: "humanities", label: "인문학", description: "사람과 삶, 생각하는 법" },
      { id: "math", label: "수학", description: "정리와 증명, 손으로 따라가 보는 수학" },
      { id: "science", label: "과학", description: "자연 현상과 그 원리" },
    ],
  },
];
