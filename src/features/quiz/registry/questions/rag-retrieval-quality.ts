import type { QuizQuestion } from "../types";

export const RAG_RETRIEVAL_QUALITY: QuizQuestion[] = [
  {
    id: "rag-retrieval-quality-1",
    post: "rag-retrieval-quality",
    question: "검색 결과가 kafka-lag(관련도 0), payment-error(2), idempotency(1) 순서로 나왔다. payment-error, kafka-lag, idempotency 순서일 때와 비교하면?",
    choices: [
      "recall@3과 nDCG@3이 모두 그대로다",
      "recall@3은 그대로이고 nDCG@3은 떨어진다",
      "recall@3도 떨어지고 nDCG@3도 떨어진다",
      "recall@3은 떨어지고 nDCG@3은 그대로다",
    ],
    answer: 1,
    explanation:
      "recall@3은 정답이 상위 3개 안에 들었는지만 보고 순서는 따지지 않는다. nDCG는 아래 순위일수록 이득을 작게 쳐서, 관련도 2인 문서가 2등으로 내려가면 0.964에서 0.659로 떨어진다.",
    anchor: "순위-하나에서-세-숫자-뽑기",
  },
  {
    id: "rag-retrieval-quality-2",
    post: "rag-retrieval-quality",
    question: "벡터 검색 점수는 0.1대, BM25 점수는 2~4 사이로 나온다. 두 점수를 그냥 더해 합치면 어떻게 되나?",
    choices: [
      "두 검색의 장점이 고르게 섞인다",
      "벡터 점수가 순위를 혼자 정한다",
      "BM25 점수가 순위를 혼자 정한다",
      "점수가 같아져서 순위가 무작위가 된다",
    ],
    answer: 2,
    explanation:
      "눈금이 열 배 넘게 다르면 큰 쪽이 합을 지배한다. 그래서 RRF는 점수를 버리고 순위만 써서 1/(k + 순위)를 더한다. 정규화한 가중합도 가능하지만 질문마다 점수 분포가 달라 가중치를 정하기 까다롭다.",
    anchor: "두-순위를-합치는-방법-rrf",
  },
  {
    id: "rag-retrieval-quality-3",
    post: "rag-retrieval-quality",
    question: "RRF(k=60)에서 rate-limit#0은 벡터 2등, BM25 3등이었고 어느 쪽에서도 1등이 아니었다. 그런데 최종 1위가 된 이유는?",
    choices: [
      "두 목록 모두에서 위쪽에 있어서 1/62와 1/63을 함께 받았기 때문이다",
      "BM25 점수가 가장 높았기 때문이다",
      "k가 60이라 3등 이하는 점수를 받지 못하기 때문이다",
      "벡터 점수에 가중치 2를 곱했기 때문이다",
    ],
    answer: 0,
    explanation:
      "RRF는 합의를 좋아한다. 한쪽에서만 1등인 문서는 1/61 하나만 받지만, 양쪽에 다 있는 문서는 두 값을 더 받는다. k가 크면 순위 사이 점수 차이가 작아서 한쪽 1등이 혼자 앞서 나가지 못한다.",
    anchor: "두-순위를-합치는-방법-rrf",
  },
  {
    id: "rag-retrieval-quality-4",
    post: "rag-retrieval-quality",
    question: "청크를 60자로 줄였더니 문서recall@3은 0.917에서 0.944로 올랐다. 그런데도 회귀 테스트가 실패한 이유는?",
    choices: [
      "청크 수가 늘어 검색이 느려졌기 때문이다",
      "MRR이 0.5 넘게 떨어졌기 때문이다",
      "프롬프트에 붙는 글이 두 배로 늘었기 때문이다",
      "답 문장을 통째로 담은 조각의 비율(답포함@3)이 0.944에서 0.5로 떨어졌기 때문이다",
    ],
    answer: 3,
    explanation:
      "작은 조각은 문서는 잘 찾아도 답 문장을 경계에서 자른다. 문서 단위 지표만 봤다면 좋아진 변경으로 보였을 것이다. 붙는 글은 오히려 줄었고 MRR은 0.014만 내려갔다.",
    anchor: "바꿀-때마다-시험을-다시-친다",
  },
  {
    id: "rag-retrieval-quality-5",
    post: "rag-retrieval-quality",
    question: "리랭커(크로스인코더)를 전체 문서에 바로 쓰지 않고 두 단계로 쓰는 이유는?",
    choices: [
      "크로스인코더는 질문과 문서를 함께 읽어서 문서 벡터를 미리 계산해 둘 수 없고, 후보마다 모델을 돌려야 하기 때문이다",
      "크로스인코더는 키워드 검색만 할 수 있기 때문이다",
      "크로스인코더는 바이인코더보다 덜 정확하기 때문이다",
      "크로스인코더는 메타데이터 필터를 지원하지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "바이인코더는 질문과 문서를 따로 벡터로 만들어 미리 계산할 수 있지만, 크로스인코더는 질문과 문서 쌍마다 모델을 돌린다. 그래서 빠른 검색으로 후보를 넉넉히 뽑고 리랭커로 상위 몇 개만 고른다. 1단계 후보에 정답이 없으면 리랭커도 살릴 수 없다.",
    anchor: "넉넉히-뽑고-다시-줄-세우기",
  },
  {
    id: "rag-retrieval-quality-6",
    post: "rag-retrieval-quality",
    question: "HyDE로 만든 가상 답을 어떻게 다뤄야 하나?",
    choices: [
      "가상 답을 프롬프트의 근거 문서로 함께 넣는다",
      "가상 답을 사용자에게 바로 보여 준다",
      "가상 답은 검색용 벡터를 만드는 데만 쓰고, 답은 검색된 진짜 문서로 쓴다",
      "가상 답을 색인에 새 문서로 추가한다",
    ],
    answer: 2,
    explanation:
      "가상 답은 문서와 생김새가 비슷한 검색어 역할만 한다. 내용은 모델이 문서 없이 지어낸 것이라 프롬프트에 넣으면 지어낸 내용이 근거처럼 섞인다.",
    anchor: "질문을-고쳐서-다시-묻기",
  },
  {
    id: "rag-retrieval-quality-7",
    post: "rag-retrieval-quality",
    question: "엔지니어가 '연봉 인상률 기준이 뭐야?'라고 물었다. 상위 3개를 뽑은 뒤 권한 없는 조각을 거르면 무엇이 문제인가?",
    choices: [
      "인사 문서가 그대로 프롬프트에 들어간다",
      "유출은 막지만 결과가 3개에서 2개로 줄고, 걸러질 문서가 많은 사용자일수록 결과가 비어 간다",
      "검색 속도가 두 배로 느려진다",
      "권한 있는 문서까지 함께 걸러진다",
    ],
    answer: 1,
    explanation:
      "뒤에서 거르면 프롬프트에는 안 들어가지만 top-k 자리를 권한 없는 조각이 먼저 차지한다. 권한 조건을 검색 안에서 함께 걸어야 허용된 조각 중에서 top-k를 채운다.",
    anchor: "권한-없는-조각은-검색-안에서-거른다",
  },
];
