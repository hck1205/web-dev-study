import type { QuizQuestion } from "../types";

export const EXPLAINABLE_AI_SHAP_LIME: QuizQuestion[] = [
  {
    id: "explainable-ai-shap-lime-1",
    post: "explainable-ai-shap-lime",
    question: "모델 전체에서는 부채 비율의 중요도가 1위인데, 한 거절 고객의 SHAP 값은 소득이 가장 컸다. 어떻게 해석해야 하나?",
    choices: [
      "SHAP 계산이 틀렸으니 순열 중요도를 믿어야 한다",
      "전역 중요도와 지역 설명은 다른 질문에 답하므로 둘 다 맞을 수 있다",
      "과적합 때문에 두 결과가 어긋난 것이다",
      "배경 데이터가 너무 작아서 생긴 오류다",
    ],
    answer: 1,
    explanation:
      "전역 중요도는 모델이 대체로 무엇을 보는지, 지역 설명은 이 예측이 왜 나왔는지를 말한다. 이 고객은 소득이 평균에서 크게 벗어나 있어서 소득의 몫이 컸다. 거절 사유는 지역 설명으로 안내한다.",
    anchor: "평균-63에서-이-고객의-2까지",
  },
  {
    id: "explainable-ai-shap-lime-2",
    post: "explainable-ai-shap-lime",
    question: "SHAP 값의 효율성 성질이 보장하는 것은?",
    choices: [
      "특징별 몫을 모두 더하면 이 예측과 기준값의 차이와 정확히 같다",
      "특징 수와 상관없이 계산 시간이 일정하다",
      "몫이 큰 특징을 바꾸면 실제 결과도 바뀐다",
      "상관된 특징끼리는 몫이 항상 같다",
    ],
    answer: 0,
    explanation:
      "섀플리 값은 예측과 기준값(배경 평균)의 차이를 특징에 남김없이 나눠 준다. 글에서도 몫의 합 -0.6128에 평균 0.6336을 더하면 예측 0.0208이 정확히 나왔다. 인과나 계산 시간에 대한 보장은 아니다.",
    anchor: "기여를-공정하게-나누는-방법-섀플리-값",
  },
  {
    id: "explainable-ai-shap-lime-3",
    post: "explainable-ai-shap-lime",
    question: "특징이 30개인 모델에 정확한 섀플리 값 계산 대신 Tree SHAP이나 Kernel SHAP을 쓰는 가장 큰 이유는?",
    choices: [
      "정확한 계산은 확률이 아니라 로그 오즈만 낼 수 있어서",
      "정확한 계산은 배경 데이터를 쓸 수 없어서",
      "부분집합이 2의 30제곱, 약 10억 개라 모두 평가할 수 없어서",
      "정확한 계산은 트리 모델에만 쓸 수 있어서",
    ],
    answer: 2,
    explanation:
      "정확한 섀플리 값은 모든 부분집합의 예측을 구해야 해서 특징 수에 지수적으로 비싸진다. Kernel SHAP은 부분집합을 뽑아 추정하고, Tree SHAP은 트리 구조로 다항 시간에 계산한다. 정확 계산은 모델 종류를 가리지 않는다.",
    anchor: "특징이-많아지면-계산이-폭발한다",
  },
  {
    id: "explainable-ai-shap-lime-4",
    post: "explainable-ai-shap-lime",
    question: "LIME을 num_samples=100으로 돌렸더니 같은 고객에 대해 실행할 때마다 소득 계수의 부호까지 바뀌었다. 가장 적절한 조치는?",
    choices: [
      "num_features를 줄인다",
      "표본 수를 늘리고 random_state와 커널 폭을 고정한 뒤 score도 함께 본다",
      "discretize_continuous를 끄면 무작위성이 사라진다",
      "블랙박스 모델을 다시 학습한다",
    ],
    answer: 1,
    explanation:
      "LIME은 무작위로 만든 주변 표본에 선형 모델을 맞추기 때문에 표본이 적으면 결과가 크게 흔들린다. 표본을 5000개로 늘리자 순위가 거의 안정됐다. score(R²)가 낮으면 근사 자체가 맞지 않으니 계수를 믿기 어렵다.",
    anchor: "같은-고객에-대한-두-설명이-다른-이유",
  },
  {
    id: "explainable-ai-shap-lime-5",
    post: "explainable-ai-shap-lime",
    question: "소득과 상관계수 0.993인 카드 한도 열을 추가했더니 소득의 순열 중요도가 4분의 1로 줄었다. 왜 그런가?",
    choices: [
      "카드 한도가 정답 규칙에서 소득보다 중요해서",
      "모델 정확도가 크게 떨어져서",
      "순열 중요도는 학습 데이터에서 계산해서",
      "소득을 섞어도 카드 한도가 같은 정보를 들고 있어 정확도가 별로 안 떨어져서",
    ],
    answer: 3,
    explanation:
      "순열 중요도는 한 열을 섞었을 때의 성능 하락을 재는데, 상관된 열이 정보를 대신 공급하면 하락이 작게 나온다. 카드 한도는 정답 규칙에 없는데도 중요하게 나왔다. 상관된 특징은 묶어서 섞거나 빼고 다시 학습해 확인한다.",
    anchor: "비슷한-특징-둘이-공을-나눠-갖는다",
  },
  {
    id: "explainable-ai-shap-lime-6",
    post: "explainable-ai-shap-lime",
    question: "SHAP에서 카드 한도가 거절에 크게 기여했다고 나왔다. 고객에게 '카드 한도를 올리면 승인된다'고 안내하면 안 되는 이유는?",
    choices: [
      "SHAP은 모델이 그 특징으로 점수를 얼마나 바꿨는지를 말할 뿐 실제 인과를 말하지 않아서",
      "SHAP 값은 음수일 때만 의미가 있어서",
      "카드 한도는 범주형 특징이라 SHAP이 계산되지 않아서",
      "규제상 SHAP 값을 고객에게 보여 줄 수 없어서",
    ],
    answer: 0,
    explanation:
      "설명은 모델을 설명하지 세상을 설명하지 않는다. 카드 한도를 올리면 모델 점수는 오르겠지만 상환 능력은 그대로다. 바꿀 수 있는 변화를 안내하려면 반사실 설명을, 진짜 효과를 알려면 실험이나 인과 추론을 쓴다.",
    anchor: "설명은-원인이-아니다",
  },
];
