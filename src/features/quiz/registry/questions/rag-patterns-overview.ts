import type { QuizQuestion } from "../types";

export const RAG_PATTERNS_OVERVIEW: QuizQuestion[] = [
  {
    id: "rag-patterns-overview-1",
    post: "rag-patterns-overview",
    question: "세 RAG 방식을 '찾는다 / 잇는다 / 따져 본다'로 나눌 때 '잇는다'에 해당하는 동작은?",
    choices: [
      "질문과 의미가 가까운 청크 k개를 한 번 가져온다",
      "색인 때 뽑아 둔 개체와 관계를 따라가 여러 문서의 사슬을 모은다",
      "결과를 채점하고 모자라면 검색어를 바꿔 다시 찾는다",
      "모델을 사내 문서로 미세 조정한다",
    ],
    answer: 1,
    explanation:
      "GraphRAG는 문서 사이의 연결을 개체와 관계로 미리 뽑아 두고, 질문의 개체에서 관계를 따라가 근거를 잇는다. 가까운 청크를 한 번 찾는 건 기본 RAG, 채점하며 다시 찾는 건 에이전틱 RAG다.",
    anchor: "찾는다-잇는다-따져-본다",
  },
  {
    id: "rag-patterns-overview-2",
    post: "rag-patterns-overview",
    question: "실험에서 \"결제 실패율이 오르면 먼저 무엇을 보나?\"에 GraphRAG가 근거를 하나도 못 모은 이유는?",
    choices: [
      "그래프 탐색 깊이가 너무 얕아서",
      "벡터 인덱스가 꺼져 있어서",
      "답이 담긴 운영 메모가 개체 없는 문장이라 트리플이 되지 않았고, 질문에도 출발할 개체가 없어서",
      "모델 호출 예산이 다 떨어져서",
    ],
    answer: 2,
    explanation:
      "설명문이나 속성 문장은 트리플로 바뀌지 않아 그래프에 없다. 질문에 개체가 없으면 출발점도 못 잡는다. 그래서 실무 GraphRAG는 원문 청크 검색을 함께 두고 실패하면 넘긴다.",
    anchor: "숫자-뒤에-숨은-것",
  },
  {
    id: "rag-patterns-overview-3",
    post: "rag-patterns-overview",
    question: "Q4에서 에이전트는 정답 근거 3개를 모두 모았지만 stop=repeat로 멈췄다. 여기서 얻을 교훈은?",
    choices: [
      "근거를 모은 것과 답을 확인한 것은 다르며, 계획·평가가 틀리면 근거를 들고도 엉뚱하게 멈출 수 있다",
      "반복 검사는 쓸모없으니 끄는 게 낫다",
      "에이전트는 항상 GraphRAG보다 싸다",
      "근거 문서가 6개면 언제나 3개보다 정확하다",
    ],
    answer: 0,
    explanation:
      "계획 스텁이 '개발한 팀'을 몰라 사슬을 끝까지 읽지 못했고, 평가가 충분하다고 확인하지 못했다. 같은 근거를 그래프는 문서 3개, 호출 2번에 모았다.",
    anchor: "숫자-뒤에-숨은-것",
  },
  {
    id: "rag-patterns-overview-4",
    post: "rag-patterns-overview",
    question: "질문 대부분이 문서 한 곳에 답이 있는데 기본 RAG의 정답률이 낮다. 먼저 할 일은?",
    choices: [
      "곧바로 에이전틱 RAG로 바꾼다",
      "지식 그래프를 만든다",
      "청크 크기, 하이브리드 검색, 리랭킹, 메타데이터 필터로 검색 품질부터 고친다",
      "top-k를 100으로 올린다",
    ],
    answer: 2,
    explanation:
      "답이 한 곳에 있는 질문을 못 찾는 건 방식이 아니라 검색 품질 문제다. recall@k를 재 가며 검색을 고치는 게 싸고 효과가 크다. 그래프나 에이전트는 실패 모양이 멀티홉이나 외부 정보일 때 검토한다.",
    anchor: "질문-모양으로-고르기",
  },
  {
    id: "rag-patterns-overview-5",
    post: "rag-patterns-overview",
    question: "응답 예산 1초, 같은 모양의 3단계 관계 질문이 매일 반복된다. 가장 알맞은 선택은?",
    choices: [
      "기본 RAG에 k를 크게 준다",
      "미리 만든 지식 그래프로 경로 질의를 한다",
      "최대 10단계 에이전트 루프를 돌린다",
      "매번 웹 검색을 붙인다",
    ],
    answer: 1,
    explanation:
      "멀티홉 질문이 반복되면 연결을 색인 시점에 뽑아 두는 그래프가 질의마다 싸고 빠르다. 에이전트는 매번 여러 바퀴를 돌아 1초 예산을 넘기기 쉽고, 기본 RAG는 중간 문서를 놓친다.",
    anchor: "질문-모양으로-고르기",
  },
  {
    id: "rag-patterns-overview-6",
    post: "rag-patterns-overview",
    question: "여러 RAG 방식을 섞은 서비스에서 흔히 쓰는 구성은?",
    choices: [
      "모든 질문을 세 방식에 동시에 보내 다수결로 답한다",
      "싼 기본 RAG로 먼저 답해 보고, 평가가 모자랄 때만 그래프나 에이전트로 넘긴다",
      "항상 에이전트로 시작해 필요 없으면 기본 RAG로 돌아온다",
      "질문 길이로만 방식을 정한다",
    ],
    answer: 1,
    explanation:
      "대부분의 질문은 기본 RAG로 빠르게 끝나고, 어려운 질문만 비용을 더 쓴다. 라우팅 결정과 출처를 로그로 남겨 정확도와 비용을 함께 본다.",
    anchor: "질문-모양으로-고르기",
  },
];
