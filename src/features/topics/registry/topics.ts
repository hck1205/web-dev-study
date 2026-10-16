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
      { id: "algorithms", label: "Algorithms", description: "문제 풀이와 해설, 자료구조" },
      {
        id: "backend",
        label: "Backend",
        description: "서버 애플리케이션, API 설계",
        children: [{ id: "auth", label: "Auth", description: "로그인, 세션, 토큰, 권한 위임" }],
      },
      {
        id: "common",
        label: "Common",
        description: "분야에 상관없이 공통으로 쓰는 지식",
        children: [{ id: "git", label: "Git", description: "버전 관리, 브랜치, 협업 흐름" }],
      },
      { id: "computer-science", label: "Computer Science", description: "컴퓨터 과학 기초 이론" },
      { id: "database", label: "Database", description: "RDB, NoSQL, 쿼리와 인덱스" },
      {
        id: "frontend",
        label: "Frontend",
        description: "브라우저, 렌더링, React · Next.js",
        children: [
          { id: "architecture", label: "Architecture", description: "프런트엔드 구조 설계, 마이크로 프런트엔드" },
          { id: "javascript", label: "JavaScript", description: "언어와 런타임, 이벤트 루프, 메모리" },
          { id: "performance", label: "Performance", description: "웹 성능 지표, 로딩·렌더링 최적화" },
          { id: "react", label: "React", description: "렌더링 모델, 상태, 렌더링 전략" },
        ],
      },
      {
        id: "network",
        label: "Network",
        description: "HTTP, TCP/IP, DNS, 캐시, 보안",
        children: [{ id: "http", label: "HTTP", description: "메시지, 메서드, 상태 코드, 버전별 차이" }],
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
          { id: "kubernetes", label: "Kubernetes", description: "컨테이너 오케스트레이션" },
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
      { id: "system-design", label: "System Design", description: "대규모 시스템 설계" },
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
