import type { QuizQuestion } from "../types";

export const AGENT_FRAMEWORKS_COMPARISON: QuizQuestion[] = [
  {
    id: "agent-frameworks-comparison-1",
    post: "agent-frameworks-comparison",
    question:
      "직접 짠 스무 줄짜리 에이전트 루프에 아직 없는 것으로, 프레임워크를 검토하게 만드는 요구에 가장 가까운 것은?",
    choices: [
      "모델 출력이 답인지 도구 호출인지 가르기",
      "도구 결과를 대화에 붙여 다시 보내기",
      "사람 승인을 기다렸다가 서버 재시작 뒤에도 이어 가기",
      "걸음 수 상한으로 루프 멈추기",
    ],
    answer: 2,
    explanation:
      "대화 쌓기, 답과 도구 호출 구분, 도구 실행, 상한은 스무 줄 루프가 이미 한다. 상태 저장과 중단·재개처럼 루프가 다시 만들기 시작하는 기능이 프레임워크를 볼 신호다.",
    anchor: "직접-짠-루프가-이미-하는-일",
  },
  {
    id: "agent-frameworks-comparison-2",
    post: "agent-frameworks-comparison",
    question: "\"LangGraph와 LlamaIndex 중 무엇을 쓰나\"라는 질문이 어색한 이유는?",
    choices: [
      "둘은 주로 맡는 층이 달라서 검색 파이프라인을 도구로 붙여 함께 쓰는 경우가 많다",
      "둘은 같은 회사 제품이라 기능이 완전히 같다",
      "LlamaIndex는 파이썬만, LangGraph는 TypeScript만 지원한다",
      "LangGraph는 RAG를 금지한다",
    ],
    answer: 0,
    explanation:
      "LlamaIndex는 문서 로딩부터 검색까지의 RAG 파이프라인, LangGraph는 에이전트 흐름과 상태가 중심이다. 검색은 에이전트에게 도구 하나로 붙으니 서로 대체하기보다 겹쳐 쓴다.",
    anchor: "프레임워크마다-맡는-층이-다르다",
  },
  {
    id: "agent-frameworks-comparison-3",
    post: "agent-frameworks-comparison",
    question:
      "LangGraph 예제에서 interrupt_before=[\"tools\"]로 컴파일하고 InMemorySaver를 썼다. 운영에 그대로 내보내면 생기는 문제는?",
    choices: [
      "서버가 재시작되면 승인을 기다리던 대화 상태가 사라진다",
      "tools 노드가 영원히 실행되지 않는다",
      "체크포인트가 노드마다가 아니라 대화 끝에 한 번만 저장된다",
      "thread_id가 같으면 서로 다른 사용자의 대화가 합쳐지지 않는다",
    ],
    answer: 0,
    explanation:
      "InMemorySaver는 프로세스 메모리에만 저장해서 재시작하면 멈춰 있던 상태가 없어진다. 재개가 필요하면 SQLite나 PostgreSQL 같은 영속 체크포인터를 쓴다. 예제 출력에서 보듯 체크포인트는 노드가 끝날 때마다 쌓인다.",
    anchor: "langchain과-langgraph-체인에서-상태-그래프로",
  },
  {
    id: "agent-frameworks-comparison-4",
    post: "agent-frameworks-comparison",
    question:
      "승인을 기다리던 그래프를 다음 날 같은 thread_id로 이어 가 환불을 실행하려 한다. 이어 가기 전에 도구 쪽에서 해야 할 일은?",
    choices: [
      "체크포인트를 모두 지우고 처음부터 다시 돌린다",
      "주문 상태 같은 전제를 다시 확인하고, 멱등 키로 두 번 실행을 막는다",
      "temperature를 0으로 바꿔 같은 결정을 보장한다",
      "아무것도 하지 않는다. 체크포인트가 바깥 상태까지 저장한다",
    ],
    answer: 1,
    explanation:
      "체크포인트는 그래프의 상태만 저장하고 바깥 세상은 저장하지 않는다. 기다리는 사이 주문이 취소됐을 수 있으니 다시 확인하고, 재개나 재시도로 돈이 두 번 나가지 않게 멱등 키를 둔다.",
    anchor: "langchain과-langgraph-체인에서-상태-그래프로",
  },
  {
    id: "agent-frameworks-comparison-5",
    post: "agent-frameworks-comparison",
    question: "smolagents의 CodeAgent가 도구 호출을 파이썬 코드로 낼 때 반드시 함께 갖춰야 하는 것은?",
    choices: [
      "JSON 스키마 검증기",
      "네트워크와 파일 접근을 제한한 샌드박스 실행 환경",
      "벡터 데이터베이스",
      "그룹 채팅 관리자 에이전트",
    ],
    answer: 1,
    explanation:
      "코드로 행동하면 도구 여러 번과 값 전달을 한 번에 처리해 바퀴 수가 준다. 대신 모델이 쓴 임의 코드를 실행하므로 프롬프트 주입이 곧 코드 실행이 될 수 있어 샌드박스가 필수다.",
    anchor: "smolagents와-agno-가볍게-코드로-행동하기",
  },
  {
    id: "agent-frameworks-comparison-6",
    post: "agent-frameworks-comparison",
    question:
      "프레임워크를 업그레이드했더니 코드는 그대로인데 RAG 봇의 답 말투와 인용 방식이 바뀌었다. 가장 그럴듯한 원인과 대응은?",
    choices: [
      "모델 가중치가 바뀌었다. 대응할 방법이 없다",
      "벡터 인덱스가 손상됐다. 인덱스를 다시 만든다",
      "프레임워크가 넣는 기본 프롬프트가 바뀌었다. 실제 요청을 확인하고 내 템플릿을 명시적으로 넘긴다",
      "청크 크기가 자동으로 두 배가 됐다. 문서를 줄인다",
    ],
    answer: 2,
    explanation:
      "프레임워크는 기본 시스템 프롬프트, 검색 결과 서식 같은 것을 안쪽에서 넣는다. 업그레이드로 기본값이 바뀌면 내 코드가 같아도 답이 달라진다. 추적이나 요청 로깅으로 실제 요청을 보고, 중요한 프롬프트는 직접 넘긴다.",
    anchor: "추상화가-숨기는-프롬프트",
  },
  {
    id: "agent-frameworks-comparison-7",
    post: "agent-frameworks-comparison",
    question: "나중에 프레임워크를 바꿀 때 바뀌는 범위를 가장 많이 줄이는 설계는?",
    choices: [
      "도구 구현을 프레임워크 데코레이터 안에 직접 쓴다",
      "도구는 평범한 함수나 MCP 서버로, 프롬프트는 저장소 파일로, 업무 상태는 내 DB에 둔다",
      "업무 상태를 프레임워크의 메모리 클래스에만 저장한다",
      "추적을 그 회사의 클라우드 대시보드로만 남긴다",
    ],
    answer: 1,
    explanation:
      "잠김은 코드와 운영 두 겹이다. 도구, 프롬프트, 상태를 프레임워크 밖에 두고 얇은 어댑터로 연결하면 교체할 때 루프와 오케스트레이션 코드만 바뀐다. 나머지 보기는 모두 잠김을 키운다.",
    anchor: "잠김과-버전-변화-속도",
  },
];
