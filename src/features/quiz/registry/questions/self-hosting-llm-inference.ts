import type { QuizQuestion } from "../types";

export const SELF_HOSTING_LLM_INFERENCE: QuizQuestion[] = [
  {
    id: "self-hosting-llm-inference-1",
    post: "self-hosting-llm-inference",
    question:
      "8B 모델을 4비트로 양자화해 가중치를 16GB에서 4.5GB로 줄였다. 그런데 8K 토큰 요청 16개를 동시에 받으니 여전히 GPU 메모리가 모자랐다. 왜 그럴까?",
    choices: [
      "양자화한 모델은 실행할 때 다시 16비트로 풀려서 메모리를 그대로 쓰기 때문이다",
      "KV 캐시는 요청과 토큰마다 쌓이는데 가중치 양자화로는 줄지 않아 17GB 넘게 남기 때문이다",
      "4비트 모델은 동시 요청을 받을 수 없기 때문이다",
      "GPU 메모리는 모델 크기와 상관없이 항상 90%를 쓰기 때문이다",
    ],
    answer: 1,
    explanation:
      "Llama 3.1 8B 구조에서 KV 캐시는 토큰당 128KiB라 8K 요청 16개면 약 17.2GB다. 가중치를 줄여도 이 부분은 그대로라서, KV 캐시를 FP8로 저장하거나 최대 길이를 줄이는 방법을 따로 쓴다.",
    anchor: "gpu-메모리는-가중치와-kv-캐시로-나뉜다",
  },
  {
    id: "self-hosting-llm-inference-2",
    post: "self-hosting-llm-inference",
    question:
      "4비트 양자화에서 가중치 전체에 배율 하나를 쓰지 않고 32개나 128개씩 묶어 배율을 따로 두는 이유는?",
    choices: [
      "묶음마다 배율을 두면 파일 크기가 더 작아지기 때문이다",
      "GPU가 32개 단위로만 계산할 수 있기 때문이다",
      "큰 값 하나가 칸 폭을 넓혀 나머지 작은 값들이 대부분 0으로 뭉개지는 걸 막기 위해서다",
      "배율이 많을수록 계산 속도가 빨라지기 때문이다",
    ],
    answer: 2,
    explanation:
      "실험에서 이상치 하나를 넣자 배율 하나짜리는 평균 오차가 93%로 치솟았고, 32개 묶음은 10%를 지켰다. 묶음 배율은 오히려 가중치당 약 0.5비트를 더 쓰지만 정확도를 지키는 대가다.",
    anchor: "4비트로-줄이면-무엇을-잃나",
  },
  {
    id: "self-hosting-llm-inference-3",
    post: "self-hosting-llm-inference",
    question:
      "여러 요청을 한 묶음으로 계산하면 요청 하나의 속도는 거의 그대로인데 전체 처리량이 크게 오른다. 가장 근본적인 이유는?",
    choices: [
      "토큰 생성은 매 단계 가중치 전체를 메모리에서 읽는 것이 병목이고, 한 번 읽을 때 여러 요청을 함께 계산할 수 있기 때문이다",
      "묶으면 GPU 클럭이 자동으로 올라가기 때문이다",
      "묶음 안의 요청들이 서로의 답을 재사용하기 때문이다",
      "배칭하면 출력 토큰 수가 줄어들기 때문이다",
    ],
    answer: 0,
    explanation:
      "디코딩 단계는 계산보다 메모리 대역폭이 병목이라, 한 요청만 처리하면 대역폭 ÷ 가중치 크기가 상한이다. 가중치를 한 번 읽어 여러 요청의 토큰을 함께 계산하면 읽는 양은 같고 결과는 여러 개가 나온다.",
    anchor: "한-요청씩-처리하면-gpu가-논다",
  },
  {
    id: "self-hosting-llm-inference-4",
    post: "self-hosting-llm-inference",
    question:
      "PagedAttention이 처리량을 올리는 방식으로 맞는 것은?",
    choices: [
      "어텐션 계산을 생략해 토큰을 더 빨리 만든다",
      "KV 캐시를 디스크에 저장해 GPU 메모리를 비운다",
      "모델 가중치를 페이지 단위로 나눠 필요한 층만 GPU에 올린다",
      "KV 캐시를 작은 블록으로 나눠 필요한 만큼만 붙여 주므로 낭비가 줄고 동시 요청을 더 받을 수 있다",
    ],
    answer: 3,
    explanation:
      "예전에는 요청의 최대 길이만큼 KV 캐시를 미리 잡아 두어 실제로 쓰지 않는 공간이 많았다. 블록 단위로 할당하면 낭비가 크게 줄고, 남는 공간만큼 묶음에 요청을 더 넣는다. 같은 프롬프트 앞부분을 공유하는 프리픽스 캐싱도 여기서 나온다.",
    anchor: "pagedattention은-kv-캐시를-페이지로-나눈다",
  },
  {
    id: "self-hosting-llm-inference-5",
    post: "self-hosting-llm-inference",
    question:
      "시간당 2달러 GPU가 꽉 차면 초당 1,500토큰을 내지만, 하루 평균으로는 초당 150토큰만 만든다. 이 상황에 대한 판단으로 알맞은 것은?",
    choices: [
      "GPU 단가가 같으니 백만 토큰당 비용도 사용량과 상관없이 같다",
      "백만 토큰당 약 0.37달러에서 3.70달러로 열 배가 된다. 들쭉날쭉한 사용량이면 API가 쌀 수 있다",
      "사용량이 적을수록 GPU가 덜 닳아서 직접 띄우는 쪽이 항상 싸다",
      "처리량은 비용과 관계가 없다",
    ],
    answer: 1,
    explanation:
      "GPU는 놀아도 시간당 비용이 나가니, 한 시간에 만든 토큰 수로 나눈 단가는 사용률에 반비례한다. 하루 종일 채울 수 있는 일괄 처리일수록 직접 띄우는 게 유리하고, 적고 들쭉날쭉한 사용량이면 쓴 만큼 내는 API가 싸다.",
    anchor: "api보다-싸지는-지점",
  },
  {
    id: "self-hosting-llm-inference-6",
    post: "self-hosting-llm-inference",
    question:
      "Ollama로 테스트할 때는 요약이 좋았는데, 같은 이름의 모델을 vLLM에 올리니 답이 달라졌다. 먼저 확인할 것은?",
    choices: [
      "vLLM이 OpenAI 호환이 아니라서 생기는 문제이니 SDK를 바꾼다",
      "GPU 드라이버를 최신으로 올린다",
      "양자화 여부(4비트 GGUF와 BF16 원본), 채팅 템플릿, 기본 샘플링 값이 같은지 본다",
      "요청을 동시에 더 많이 보내 본다",
    ],
    answer: 2,
    explanation:
      "Ollama의 기본 태그는 보통 4비트 GGUF이고 vLLM은 원본을 올렸을 수 있어 사실상 다른 모델이다. 채팅 템플릿과 temperature 같은 기본값도 엔진마다 달라 답이 바뀐다. 비교할 때는 이 셋을 맞춘다.",
    anchor: "직접-띄운-서버에서-받는-제보",
  },
];
