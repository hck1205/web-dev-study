import type { Track } from "./types";

/**
 * 직무별 경로. roadmap.sh의 역할 로드맵(frontend, backend, devops, computer-science)이 단원을 놓는 순서를 따라
 * 이 블로그의 로드맵을 엮는다. 글은 여전히 로드맵 하나에만 들어 있고, 경로는 그 로드맵들을 읽는 순서만 정한다.
 * 같은 로드맵이 여러 경로에 나와도 된다(인터넷, Git처럼 모두가 먼저 알아야 하는 것).
 */
export const TRACKS: Track[] = [
  {
    id: "frontend",
    label: "프런트엔드 개발자",
    description: "인터넷이 어떻게 도는지부터 HTML·CSS·자바스크립트, 프레임워크, 렌더링, 성능, 화면 설계까지.",
    source: "https://roadmap.sh/frontend",
    steps: [
      { label: "인터넷과 HTTP", roadmaps: ["foundations/network", "foundations/http"] },
      { label: "HTML과 CSS", roadmaps: ["frontend/html-css"] },
      { label: "접근성과 SEO", roadmaps: ["frontend/accessibility"] },
      {
        label: "자바스크립트",
        roadmaps: ["javascript/basics", "javascript/functions", "javascript/objects", "javascript/oop", "javascript/async", "javascript/browser"],
      },
      { label: "버전 관리", roadmaps: ["foundations/git"] },
      { label: "패키지와 개발 도구", roadmaps: ["foundations/tooling"] },
      { label: "프레임워크: React", roadmaps: ["frontend/react"] },
      { label: "TypeScript", roadmaps: ["javascript/typescript"] },
      { label: "렌더링 전략과 Next.js", roadmaps: ["frontend/rendering", "frontend/nextjs"] },
      { label: "웹 보안", roadmaps: ["security/web-attacks"] },
      { label: "성능", roadmaps: ["frontend/performance"] },
      { label: "테스트, 구조, 배포", roadmaps: ["frontend/architecture", "frontend/ui-ux"] },
      { label: "프런트엔드 시스템 디자인", roadmaps: ["frontend/system-design"] },
    ],
  },
  {
    id: "backend",
    label: "백엔드 개발자",
    description: "인터넷과 OS를 깔고, 관계형 DB와 API, 인증, 캐시, 보안, 테스트, 아키텍처, 메시징, 확장까지.",
    source: "https://roadmap.sh/backend",
    steps: [
      { label: "인터넷과 HTTP", roadmaps: ["foundations/network", "foundations/http"] },
      { label: "운영체제와 리눅스", roadmaps: ["foundations/programs", "foundations/linux"] },
      { label: "버전 관리", roadmaps: ["foundations/git"] },
      { label: "관계형 데이터베이스", roadmaps: ["database/sql", "database/modeling", "database/index", "database/transactions", "database/postgresql"] },
      { label: "API 설계", roadmaps: ["backend/api", "backend/graphql"] },
      { label: "인증과 인가", roadmaps: ["backend/auth"] },
      { label: "캐시", roadmaps: ["database/redis"] },
      { label: "웹 보안과 암호", roadmaps: ["security/web-attacks", "security/cryptography"] },
      { label: "테스트", roadmaps: ["backend/testing"] },
      { label: "런타임과 프레임워크", roadmaps: ["backend/runtime", "backend/spring"] },
      { label: "설계 원칙과 패턴", roadmaps: ["design-patterns"] },
      { label: "아키텍처", roadmaps: ["backend/architecture"] },
      { label: "메시지 브로커", roadmaps: ["backend/messaging"] },
      { label: "NoSQL과 검색 엔진", roadmaps: ["database/db-types", "database/mongodb", "database/elasticsearch"] },
      { label: "컨테이너", roadmaps: ["infra/docker"] },
      { label: "확장과 운영", roadmaps: ["database/scaling", "database/operations", "system-design/fundamentals", "system-design/concepts"] },
    ],
  },
  {
    id: "devops",
    label: "DevOps·인프라 엔지니어",
    description: "리눅스와 네트워크 위에 웹 서버, 컨테이너, 쿠버네티스, 클라우드, IaC, CI/CD, 관측, SRE를 쌓는다.",
    source: "https://roadmap.sh/devops",
    steps: [
      { label: "리눅스와 셸", roadmaps: ["foundations/linux"] },
      { label: "버전 관리", roadmaps: ["foundations/git"] },
      { label: "네트워크와 프로토콜", roadmaps: ["foundations/network", "foundations/http"] },
      { label: "웹 서버와 프록시", roadmaps: ["infra/nginx"] },
      { label: "컨테이너", roadmaps: ["infra/docker"] },
      { label: "클라우드 네트워킹", roadmaps: ["infra/cloud-network"] },
      { label: "클라우드", roadmaps: ["infra/cloud"] },
      { label: "IaC", roadmaps: ["infra/iac"] },
      { label: "CI/CD", roadmaps: ["infra/ci-cd"] },
      { label: "쿠버네티스", roadmaps: ["infra/kubernetes"] },
      { label: "관측", roadmaps: ["infra/observability"] },
      { label: "SRE와 장애 대응", roadmaps: ["infra/sre"] },
      { label: "인프라 보안", roadmaps: ["security/infra-security", "security/operations"] },
    ],
  },
  {
    id: "computer-science",
    label: "컴퓨터 과학 기초",
    description: "컴퓨터 구조와 프로그램 실행, 자료구조와 알고리즘, 설계 원칙, 시스템 디자인까지 직무와 상관없이 쓰는 기초.",
    source: "https://roadmap.sh/computer-science",
    steps: [
      { label: "컴퓨터 구조", roadmaps: ["foundations/computer-architecture"] },
      { label: "프로그램이 도는 법", roadmaps: ["foundations/programs"] },
      { label: "자료구조와 알고리즘", roadmaps: ["algorithms"] },
      { label: "설계 원칙과 디자인 패턴", roadmaps: ["design-patterns"] },
      { label: "시스템 디자인", roadmaps: ["system-design"] },
    ],
  },
];
