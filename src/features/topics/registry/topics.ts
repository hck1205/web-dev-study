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
      { id: "backend", label: "Backend", description: "서버 애플리케이션, API 설계" },
      { id: "common", label: "Common", description: "분야에 상관없이 공통으로 쓰는 지식" },
      { id: "computer-science", label: "Computer Science", description: "컴퓨터 과학 기초 이론" },
      { id: "database", label: "Database", description: "RDB, NoSQL, 쿼리와 인덱스" },
      { id: "frontend", label: "Frontend", description: "브라우저, 렌더링, React · Next.js" },
      { id: "network", label: "Network", description: "HTTP, TCP/IP, DNS, 캐시, 보안" },
      { id: "os", label: "OS", description: "프로세스, 스레드, 메모리, 파일 시스템" },
      { id: "server-infra", label: "Server/Infra", description: "Docker, CI/CD, 배포, 관측성" },
      { id: "system-design", label: "System Design", description: "대규모 시스템 설계" },
    ],
  },
  {
    id: "self-development",
    label: "자기개발",
    description: "개발 밖에서 성장하기 위한 기록",
    children: [
      { id: "english", label: "English", description: "영어 학습" },
      { id: "ideas", label: "아이디어", description: "떠오른 생각과 만들고 싶은 것들" },
      { id: "history", label: "역사", description: "지난 일에서 배우는 이야기" },
      { id: "humanities", label: "인문학", description: "사람과 삶, 생각하는 법" },
    ],
  },
];
