import type { QuizQuestion } from "../types";

export const CPU_PIPELINING_BRANCH_PREDICTION: QuizQuestion[] = [
  {
    id: "cpu-pipelining-branch-prediction-1",
    post: "cpu-pipelining-branch-prediction",
    question: "5단계 파이프라인을 쓰면 명령어 하나의 처리 시간(지연)과 처리량은 어떻게 되나?",
    choices: [
      "지연이 1/5로 줄고 처리량은 그대로다",
      "지연과 처리량이 모두 그대로다",
      "지연은 크게 줄지 않지만 파이프가 차면 매 사이클 명령 하나가 끝나 처리량이 늘어난다",
      "지연은 늘고 처리량은 줄어든다",
    ],
    answer: 2,
    explanation:
      "명령 하나는 여전히 다섯 단계를 다 거친다. 대신 여러 명령이 서로 다른 단계에 겹쳐 있어서, 명령 다섯 개가 25사이클이 아니라 9사이클에 끝났다.",
    anchor: "다섯-단계를-겹쳐서-돌린다",
  },
  {
    id: "cpu-pipelining-branch-prediction-2",
    post: "cpu-pipelining-branch-prediction",
    question: "if (d[i] >= 128) s += d[i] 루프가 무작위 배열보다 정렬된 배열에서 다섯 배 넘게 빨랐다. 가장 큰 이유는?",
    choices: [
      "정렬된 배열은 캐시에 더 잘 들어가서",
      "정렬하면 128 이상인 값이 줄어서",
      "정렬된 배열은 컴파일러가 SIMD로 바꿔서",
      "정렬하면 분기 방향이 한동안 같아 예측이 거의 맞아서",
    ],
    answer: 3,
    explanation:
      "무작위 배열에서는 분기가 절반쯤 틀리고, 틀릴 때마다 추측 실행한 명령을 버리고 다시 가져온다. 배열 크기와 더하는 값은 같으니 캐시나 값의 개수 문제는 아니다.",
    anchor: "틀리면-버리고-다시-가져온다",
  },
  {
    id: "cpu-pipelining-branch-prediction-3",
    post: "cpu-pipelining-branch-prediction",
    question: "같은 함수를 gcc -O2로 컴파일하니 정렬 여부와 상관없이 1ns가 나왔다. 어셈블리에서 무엇이 바뀌었나?",
    choices: [
      "조건 점프 대신 cmov(조건부 이동)를 써서 예측할 분기가 사라졌다",
      "루프가 통째로 지워졌다",
      "배열을 미리 정렬하는 코드가 추가됐다",
      "분기 예측기를 끄는 명령이 들어갔다",
    ],
    answer: 0,
    explanation:
      "s + d[i]를 늘 계산해 두고 조건이 맞을 때만 cmovs로 옮기니 데이터에 따라 갈리는 점프가 없다. 대신 양쪽을 다 계산해 정렬된 경우(분기 0.88ns)보다는 조금 느렸다.",
    anchor: "분기를-없애는-방법",
  },
  {
    id: "cpu-pipelining-branch-prediction-4",
    post: "cpu-pipelining-branch-prediction",
    question: "2비트 포화 카운터 예측기가 '세 번 돌고 빠져나오는' 루프를 반복할 때 1비트 예측기보다 나은 점은?",
    choices: [
      "루프 안에서도 틀리지 않는다",
      "루프를 빠져나올 때 한 번 틀려도 예측을 바로 뒤집지 않아, 다음 루프의 첫 분기를 맞힌다",
      "처음 보는 분기도 늘 맞힌다",
      "번갈아 나오는 패턴을 완벽히 맞힌다",
    ],
    answer: 1,
    explanation:
      "카운터가 3에서 2로 한 칸만 내려가 여전히 '간다'로 예측한다. 1비트였다면 빠져나올 때와 다음 루프의 첫 분기에서 두 번 틀린다. 번갈아 패턴은 2비트 카운터도 매번 틀린다.",
    anchor: "분기-결과를-미리-맞힌다",
  },
  {
    id: "cpu-pipelining-branch-prediction-5",
    post: "cpu-pipelining-branch-prediction",
    question: "실수 배열의 합을 누산기 넷으로 나눴더니 3.7배 빨라졌다. 컴파일러가 이걸 자동으로 하지 않는 이유는?",
    choices: [
      "레지스터가 부족해서",
      "실수 덧셈은 파이프라인에 넣을 수 없어서",
      "부동소수점 덧셈은 순서를 바꾸면 반올림 결과가 달라질 수 있어서",
      "누산기를 나누면 분기가 생겨서",
    ],
    answer: 2,
    explanation:
      "부동소수점 덧셈은 결합 법칙이 정확히 성립하지 않으니 컴파일러는 순서를 바꾸지 않는다. -ffast-math로 허락하면 바꿀 수 있지만 결과가 마지막 자리에서 달라질 수 있다. 빨라진 이유는 서로 상관없는 덧셈 사슬 넷이 동시에 흘러서다.",
    anchor: "흐름이-끊기는-세-가지-경우",
  },
  {
    id: "cpu-pipelining-branch-prediction-6",
    post: "cpu-pipelining-branch-prediction",
    question: "Spectre 변종 1이 비밀 값을 알아내는 통로는?",
    choices: [
      "추측 실행의 결과가 레지스터에 그대로 남는다",
      "커널이 비밀 값을 로그에 남긴다",
      "분기 예측기의 표를 직접 읽는다",
      "추측 실행 중 비밀 값에 따라 캐시에 올라온 줄이 결과를 버린 뒤에도 남아, 읽는 시간으로 구분된다",
    ],
    answer: 3,
    explanation:
      "예측이 틀리면 레지스터와 메모리 결과는 버려지지만 캐시 상태는 되돌리지 않는다. 공격자는 array2의 줄마다 읽는 시간을 재서 빠른 줄로 비밀 바이트를 알아낸다.",
    anchor: "추측이-남긴-흔적을-읽는-공격-spectre",
  },
  {
    id: "cpu-pipelining-branch-prediction-7",
    post: "cpu-pipelining-branch-prediction",
    question: "빌드 서버에서 -O3 -march=native로 만든 바이너리가 운영 서버에서 Illegal instruction으로 죽었다. 원인과 대처로 맞는 것은?",
    choices: [
      "빌드 머신의 SIMD 명령(AVX-512 등)을 운영 CPU가 지원하지 않으니 -march=x86-64-v3처럼 목표 세대를 정해 빌드한다",
      "운영 서버의 메모리가 부족하니 스왑을 켠다",
      "-O3가 버그를 만드니 -O0으로 빌드한다",
      "분기 예측이 틀린 것이니 데이터를 정렬한다",
    ],
    answer: 0,
    explanation:
      "-march=native는 빌드한 머신의 명령어를 모두 쓰므로 더 오래된 CPU에서는 모르는 명령을 만나 죽는다. 두 머신의 lscpu 플래그를 비교하고, 배포용은 목표 세대를 정해 빌드한다.",
    anchor: "명령-하나로-값-여러-개를-계산한다",
  },
];
