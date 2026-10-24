import type { QuizQuestion } from "../types";

export const TRANSFORMER_ATTENTION_KV_CACHE: QuizQuestion[] = [
  {
    id: "transformer-attention-kv-cache-1",
    post: "transformer-attention-kv-cache",
    question:
      "붙이는 문서를 1만 토큰에서 2만 토큰으로 늘렸더니 첫 토큰 시간은 크게 늘었는데 초당 출력 토큰은 거의 그대로였다. 가장 맞는 설명은?",
    choices: [
      "늘어난 일이 입력 전체를 계산하는 프리필에 몰렸고, 한 토큰씩 쓰는 디코드는 크게 달라지지 않았다",
      "출력 토큰은 캐시에서 바로 나오므로 입력 길이와 무관하다",
      "디코드는 입력 길이의 제곱에 비례하므로 원래 느렸다",
      "서버가 긴 요청을 우선순위가 낮은 큐로 보냈다",
    ],
    answer: 0,
    explanation:
      "첫 토큰 시간은 거의 프리필 시간이고, 프리필은 입력 토큰 전체의 K·V를 계산하므로 입력이 늘면 같이 는다. 디코드는 토큰 하나씩 가중치와 KV 캐시를 읽는 단계라 입력이 늘면 조금 느려질 뿐 크게 달라지지 않는다.",
    anchor: "첫-토큰과-그다음-토큰은-다른-일을-한다",
  },
  {
    id: "transformer-attention-kv-cache-2",
    post: "transformer-attention-kv-cache",
    question:
      "시스템 프롬프트 맨 앞에 초 단위 현재 시각을 넣었더니 cache_read_input_tokens가 늘 0이다. 왜 뒤의 긴 규칙과 문서까지 캐시가 안 맞나?",
    choices: [
      "캐시는 시스템 프롬프트 전체를 하나의 값으로만 비교하기 때문이다",
      "시각 문자열은 토크나이저가 처리하지 못해 캐시를 끈다",
      "토큰의 K·V는 앞의 모든 토큰에 따라 정해지므로, 앞에서 한 토큰이 달라지면 그 뒤 전부의 K·V가 달라진다",
      "캐시 수명이 1초라서 시각이 바뀌면 만료된다",
    ],
    answer: 2,
    explanation:
      "층을 지날 때마다 앞 토큰들의 정보가 섞이므로 같은 글자라도 앞부분이 다르면 K·V가 다르다. 그래서 캐시는 앞에서부터 같은 구간까지만 맞고, 맨 앞이 바뀌면 전부 새로 계산한다. 바뀌는 값은 캐시 표시 뒤로 옮긴다.",
    anchor: "프롬프트-캐싱은-kv-캐시를-요청-사이에-남겨-두는-것",
  },
  {
    id: "transformer-attention-kv-cache-3",
    post: "transformer-attention-kv-cache",
    question:
      "32층, KV 헤드 8개, 헤드 차원 128인 모델의 KV 캐시를 16비트로 저장한다. 8192 토큰 요청 하나의 KV 캐시 크기는?",
    choices: ["128MiB", "256MiB", "4GiB", "1GiB"],
    answer: 3,
    explanation:
      "2 × 32 × 8 × 128 × 2바이트 = 토큰당 131,072바이트(128KiB)이고, 8192 토큰을 곱하면 1,073,741,824바이트, 정확히 1GiB다. K와 V 두 개를 저장한다는 2를 빼먹으면 512MiB로 틀리기 쉽다.",
    anchor: "kv-캐시는-몇-gb인가",
  },
  {
    id: "transformer-attention-kv-cache-4",
    post: "transformer-attention-kv-cache",
    question: "Llama 3가 GQA(grouped-query attention)를 쓰는 가장 큰 이유는?",
    choices: [
      "쿼리 헤드 여러 개가 K·V 헤드를 같이 써서 KV 캐시 크기를 줄이기 위해",
      "어텐션 계산을 길이의 제곱에서 선형으로 바꾸기 위해",
      "위치 정보를 넣기 위해",
      "학습 데이터의 중복을 제거하기 위해",
    ],
    answer: 0,
    explanation:
      "GQA는 쿼리 헤드 넷이 K·V 헤드 하나를 공유하게 해서 Llama 3 8B의 KV 캐시를 멀티헤드 대비 4분의 1로 줄였다. 점수 계산의 n² 성질은 그대로이고, 위치 정보는 RoPE가 맡는다.",
    anchor: "kv-캐시는-몇-gb인가",
  },
  {
    id: "transformer-attention-kv-cache-5",
    post: "transformer-attention-kv-cache",
    question: "FlashAttention에 대한 설명으로 맞는 것은?",
    choices: [
      "어텐션을 근사해 계산량을 n²에서 n으로 줄인다",
      "결과는 똑같이 정확하고, 점수 행렬을 타일로 나눠 온칩 메모리에서 처리해 메모리 읽기·쓰기를 줄인다",
      "KV 캐시를 디스크로 옮겨 GPU 메모리를 아낀다",
      "앞부분이 같은 요청 사이에서 KV 캐시를 재사용한다",
    ],
    answer: 1,
    explanation:
      "FlashAttention은 정확한 어텐션을 계산하되 n × n 점수 행렬을 통째로 GPU 메모리에 만들지 않고 타일 단위로 계산하고 버린다. 계산량이 아니라 메모리 왕복을 줄이는 기법이다. 요청 사이 재사용은 프롬프트 캐싱이다.",
    anchor: "길이가-두-배면-어텐션은-네-배",
  },
  {
    id: "transformer-attention-kv-cache-6",
    post: "transformer-attention-kv-cache",
    question:
      "같은 앞부분으로 요청이 1분 간격으로 하루 종일 온다. Anthropic API 기준으로 어떤 캐시 수명이 맞나?",
    choices: [
      "1시간. 수명이 길수록 항상 싸다",
      "캐시를 쓰지 않는다. 쓰기 요금 때문에 손해다",
      "5분. 읽을 때마다 수명이 다시 시작되므로 늘 살아 있고, 쓰기 단가가 1시간(2배)보다 싸다(1.25배)",
      "요청마다 새 캐시를 쓰도록 수명을 0으로 둔다",
    ],
    answer: 2,
    explanation:
      "캐시를 읽으면 수명이 처음부터 다시 시작되니 5분 안쪽 간격의 요청이 계속 오면 5분 캐시가 끊기지 않는다. 1시간 수명은 쓰기가 2배라 이 경우 이득이 없다. 요청이 두 번만 와도 1.25 + 0.1로 캐시 없는 2보다 싸다.",
    anchor: "프롬프트-캐싱은-kv-캐시를-요청-사이에-남겨-두는-것",
  },
  {
    id: "transformer-attention-kv-cache-7",
    post: "transformer-attention-kv-cache",
    question:
      "긴 문서 20개를 넣고 질문했더니 가운데쯤 문서에 있던 답을 자주 놓친다. 글에서 권한 대응으로 가장 알맞은 것은?",
    choices: [
      "컨텍스트 창이 더 큰 모델로 바꾸면 해결된다",
      "temperature를 높여 다양한 문서를 보게 한다",
      "문서를 두 번씩 반복해 넣는다",
      "관련 조각만 골라 넣고, 중요한 내용은 앞이나 질문 가까이에 둔다",
    ],
    answer: 3,
    explanation:
      "긴 입력에서는 앞과 끝의 정보를 더 잘 쓰고 가운데를 놓치는 경향이 보고됐다. 소프트맥스 가중치가 관련 없는 토큰에도 흩어지기 때문에, 넣는 양을 줄이고 중요한 것을 눈에 띄는 위치에 두는 쪽이 낫다. 창을 키우는 것만으로는 해결되지 않고 비용과 지연만 는다.",
    anchor: "긴-컨텍스트는-다-읽지만-고르게-보지는-않는다",
  },
];
