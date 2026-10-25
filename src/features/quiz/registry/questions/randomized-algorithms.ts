import type { QuizQuestion } from "../types";

export const RANDOMIZED_ALGORITHMS: QuizQuestion[] = [
  {
    id: "randomized-algorithms-1",
    post: "randomized-algorithms",
    question: "기준값을 세 값의 중앙값으로 고르는 퀵 정렬도 공격자가 고른 입력에서는 O(n²)이 될 수 있다. 무작위 기준값이 이 공격을 막는 이유는?",
    choices: [
      "무작위 기준값은 항상 정확한 중앙값을 고르기 때문이다",
      "확률이 입력이 아니라 알고리즘이 던지는 동전에 붙어서, 공격자가 미리 최악의 입력을 만들 수 없기 때문이다",
      "무작위 기준값을 쓰면 같은 값이 많은 입력도 빨라지기 때문이다",
      "무작위 기준값은 재귀 대신 반복문을 쓰게 만들기 때문이다",
    ],
    answer: 1,
    explanation:
      "고정 규칙은 그 규칙을 아는 사람이 거꾸로 이용할 수 있지만, 무작위 기준값은 어떤 입력에도 기대 시간이 O(n log n)이다. 같은 값이 많은 경우는 무작위로도 못 막아서 3-way 분할이 따로 필요하다.",
    anchor: "무작위-기준값이-약속하는-것",
  },
  {
    id: "randomized-algorithms-2",
    post: "randomized-algorithms",
    question: "피셔-예이츠에서 j를 0 ~ i가 아니라 매번 0 ~ n-1 전체에서 고르면 [1, 2, 3]을 섞을 때 어떻게 되나?",
    choices: [
      "여전히 공정하다. 바꾸는 횟수만 늘어날 뿐이다",
      "항상 원래 순서로 돌아온다",
      "같은 원소가 두 번 나오는 결과가 생긴다",
      "경우의 수가 27인데 순서는 6가지라 나누어떨어지지 않아 어떤 순서는 4/27, 어떤 순서는 5/27로 치우친다",
    ],
    answer: 3,
    explanation:
      "매번 n개 중에서 고르면 경우의 수가 n^n이 되는데 n!로 나누어떨어지지 않는다. 실측에서도 14.8%와 18.5%로 갈렸다. 피셔-예이츠는 선택지가 n, n-1, …, 1로 줄어 정확히 n!가지가 된다.",
    anchor: "그럴듯하지만-치우친-셔플",
  },
  {
    id: "randomized-algorithms-3",
    post: "randomized-algorithms",
    question: "sort(() => Math.random() - 0.5)로 [1, 2, 3]을 V8에서 많이 섞으면 결과는?",
    choices: [
      "원래 순서와 뒤집힌 순서가 30%대로 몰리고 나머지는 덜 나온다",
      "여섯 순서가 각각 16.7% 정도로 고르게 나온다",
      "정렬 함수가 예외를 던진다",
      "항상 정렬된 순서가 나온다",
    ],
    answer: 0,
    explanation:
      "정렬은 비교 결과가 일관된다고 가정하는데 매번 바뀌는 비교 함수가 그 가정을 깨서, 결과가 엔진의 정렬 구현 모양을 따라간다. 실측은 123이 37.4%, 321이 31.3%였다. 동전 결과 2^k가지를 6가지 순서에 고르게 나눌 수도 없다.",
    anchor: "그럴듯하지만-치우친-셔플",
  },
  {
    id: "randomized-algorithms-4",
    post: "randomized-algorithms",
    question: "저수지 샘플링(k개)에서 i번째 원소를 k/i 확률로 넣는 이유는?",
    choices: [
      "뒤에 온 원소일수록 최신이라 더 많이 남기려고",
      "저수지가 넘치지 않게 하려고",
      "그렇게 해야 이후 쫓겨나지 않을 확률 i/n과 곱해져 모든 원소가 끝에 남을 확률이 k/n으로 같아진다",
      "전체 개수 n을 추정하려고",
    ],
    answer: 2,
    explanation:
      "j번째 원소가 올 때 이미 있는 원소가 쫓겨날 확률은 1/j라 살아남을 확률을 i+1부터 n까지 곱하면 i/n이다. 여기에 들어올 확률 k/i를 곱하면 k/n이 된다. 전체 개수를 몰라도 공평하다.",
    anchor: "끝을-모르는-줄에서-k개-뽑기",
  },
  {
    id: "randomized-algorithms-5",
    post: "randomized-algorithms",
    question: "밀러-라빈 소수 판정과 무작위 퀵 정렬을 분류하면?",
    choices: [
      "밀러-라빈은 몬테카를로(시간은 정해져 있고 답이 작은 확률로 틀림), 무작위 퀵 정렬은 라스베이거스(답은 늘 맞고 시간이 무작위)다",
      "둘 다 라스베이거스 알고리즘이다",
      "밀러-라빈은 라스베이거스, 무작위 퀵 정렬은 몬테카를로다",
      "둘 다 몬테카를로 알고리즘이다",
    ],
    answer: 0,
    explanation:
      "라스베이거스는 틀린 답을 내지 않고 운에 따라 시간만 달라진다. 밀러-라빈은 한 번에 틀릴 확률이 1/4 이하이고 k번 반복하면 4^(-k) 이하로 줄어드는 몬테카를로다.",
    anchor: "답이-늘-맞는-무작위-가끔-틀리는-무작위",
  },
  {
    id: "randomized-algorithms-6",
    post: "randomized-algorithms",
    question: "운영 서버에서 PYTHONHASHSEED=0을 설정해 두면 어떤 위험이 생기나?",
    choices: [
      "문자열 해시가 느려진다",
      "딕셔너리 순서가 무작위로 바뀐다",
      "SipHash가 꺼지고 MD5가 쓰인다",
      "해시값이 실행마다 같아져 공격자가 같은 칸에 떨어지는 키를 미리 계산해 보내는 해시 충돌 공격을 다시 열어 준다",
    ],
    answer: 3,
    explanation:
      "시드 무작위화는 미리 계산한 충돌을 무력하게 만드는 장치다. 시드를 고정하면 재현은 쉬워지지만 공격자도 같은 해시를 계산할 수 있다. 테스트 재현용으로만 쓴다.",
    anchor: "해시-테이블을-노리는-입력",
  },
  {
    id: "randomized-algorithms-7",
    post: "randomized-algorithms",
    question: "6자리 인증 코드를 crypto.randomBytes로 만든 바이트에 % 1000000을 적용해 만들면 왜 문제인가?",
    choices: [
      "randomBytes는 예측 가능하기 때문이다",
      "% 연산은 음수를 만들기 때문이다",
      "원천 범위가 목표 범위로 나누어떨어지지 않아 일부 값이 더 자주 나오는 나머지 치우침이 생긴다",
      "randomBytes는 Node에서만 동작하기 때문이다",
    ],
    answer: 2,
    explanation:
      "바이트 하나에 % 100만 해도 0~55는 3/256, 56~99는 2/256 확률로 갈렸다. 원천이 CSPRNG여도 줄이는 방법이 치우치면 소용없다. crypto.randomInt처럼 범위를 넘는 값을 버리고 다시 뽑는 방식을 쓴다.",
    anchor: "mathrandom을-믿으면-안-되는-자리",
  },
];
