import type { QuizQuestion } from "../types";

export const SD_OBJECT_STORAGE_DURABILITY: QuizQuestion[] = [
  {
    id: "sd-object-storage-durability-1",
    post: "sd-object-storage-durability",
    question: "디스크 고장률 1%에서 세 벌 복제의 내구성이 '수리 없음' 6개의 9에서 '24시간 안에 수리' 10개 넘는 9로 뛰는 이유는?",
    choices: [
      "수리하면 디스크 고장률 자체가 낮아져서",
      "데이터를 잃으려면 첫 고장 뒤 수리가 끝나기 전의 짧은 틈에 나머지 둘이 연달아 죽어야 해서",
      "수리 중에는 사본이 네 벌이 되어서",
      "24시간마다 백업을 따로 떠서",
    ],
    answer: 1,
    explanation:
      "수리가 빠르면 남은 사본이 위험에 노출되는 시간이 하루로 줄어든다. 그 하루 안에 두 장이 더 죽을 확률은 아주 작다. 수리가 7일로 늘면 9.0개로 떨어지니 수리 속도가 곧 내구성이다.",
    anchor: "세-벌을-두면-몇-개의-9가-나오나",
  },
  {
    id: "sd-object-storage-durability-2",
    post: "sd-object-storage-durability",
    question: "4+1 XOR 패리티로 저장한 객체에서 데이터 조각 둘을 동시에 잃으면?",
    choices: [
      "P로 두 조각을 모두 되살린다",
      "남은 조각의 순서를 바꿔 다시 계산하면 된다",
      "두 조각을 XOR한 값 하나만 알 수 있어서 되살릴 수 없다",
      "P를 두 번 XOR하면 된다",
    ],
    answer: 2,
    explanation:
      "P에서 남은 조각을 빼면 Dx ^ Dy만 남는다. 모르는 값 둘에 식 하나라 가를 수 없다. 둘을 견디려면 조각마다 다른 계수를 곱한 Q 같은 패리티가 하나 더 필요하다.",
    anchor: "둘을-잃어도-되살리려면",
  },
  {
    id: "sd-object-storage-durability-3",
    post: "sd-object-storage-durability",
    question: "세 벌 복제와 8+4 이레이저 코딩을 비교한 설명으로 틀린 것은?",
    choices: [
      "8+4는 디스크를 원본의 1.5배만 쓴다",
      "8+4는 아무 조각 넷을 잃어도 된다",
      "8+4는 평소 읽기에도 노드 여덟을 거쳐서 꼬리 지연이 길어진다",
      "8+4는 조각 하나를 수리할 때 사본 하나만 복사하면 되어 수리 트래픽이 작다",
    ],
    answer: 3,
    explanation:
      "이레이저 코딩은 조각 하나를 되살리려면 다른 조각 k개(8+4라면 여덟)를 읽어 계산해야 한다. 사본 하나를 복사하면 끝나는 건 복제 쪽이다. 수리 트래픽이 큰 것이 이레이저 코딩의 대가다.",
    anchor: "조각을-az에-나눠-두면",
  },
  {
    id: "sd-object-storage-durability-4",
    post: "sd-object-storage-durability",
    question: "4+2와 세 벌 복제는 둘 다 고장 둘을 견디는데, 같은 조건에서 4+2의 9 개수가 더 적게 나온 이유는?",
    choices: [
      "조각이 디스크 여섯 장에 걸쳐 있어서 셋이 겹쳐 죽을 경우의 수가 더 많아서",
      "패리티 계산에 오차가 있어서",
      "4+2는 수리를 하지 않아서",
      "조각이 작아서 디스크 고장률이 높아져서",
    ],
    answer: 0,
    explanation:
      "세 벌은 디스크 세 장 중 셋이, 4+2는 여섯 장 중 셋이 겹쳐 죽어야 잃는다. 후보 디스크가 많을수록 그런 조합이 많아진다. 그래서 내구성을 올리려면 m을 키우고, 공간을 맞추려면 k도 같이 키운다.",
    anchor: "무엇을-고를지-숫자로-비교한다",
  },
  {
    id: "sd-object-storage-durability-5",
    post: "sd-object-storage-durability",
    question: "체크섬을 읽을 때마다 검사하는데도 백그라운드 스크럽을 따로 돌리는 이유는?",
    choices: [
      "읽기 체크섬은 CRC라서 정확하지 않아서",
      "아무도 읽지 않는 객체는 사본이 차례로 썩어도 필요할 때까지 모르기 때문에",
      "스크럽이 디스크 고장률을 낮춰서",
      "스크럽을 하면 이레이저 코딩 조각이 줄어서",
    ],
    answer: 1,
    explanation:
      "체크섬은 읽을 때만 확인되는데 백업 객체는 몇 년씩 안 읽힌다. 그사이 사본이 하나씩 망가지면 정작 복원할 때 좋은 사본이 없다. 스크럽이 주기적으로 훑어서 아직 좋은 사본이 있을 때 고친다.",
    anchor: "디스크가-조용히-틀린-값을-줄-때",
  },
  {
    id: "sd-object-storage-durability-6",
    post: "sd-object-storage-durability",
    question: "사본 셋을 모두 같은 AZ의 서로 다른 디스크에 두었다. 이 배치의 가장 큰 위험은?",
    choices: [
      "읽기가 느려진다",
      "체크섬을 계산할 수 없다",
      "디스크 비용이 세 배가 넘는다",
      "AZ 하나의 전원이나 냉각 장애로 세 벌을 한꺼번에 못 읽거나 잃는다",
    ],
    answer: 3,
    explanation:
      "디스크가 달라도 같은 장애 도메인에 있으면 고장이 함께 온다. 사본은 서로 다른 AZ나 랙에 두어야 독립 고장이라는 가정에 가까워진다.",
    anchor: "같은-랙에-세-벌을-두면",
  },
  {
    id: "sd-object-storage-durability-7",
    post: "sd-object-storage-durability",
    question: "세 벌 복제와 체크섬, 스크럽을 다 갖췄는데도 막지 못하는 것은?",
    choices: [
      "디스크 한 장의 고장",
      "비트 하나가 뒤집힌 섹터",
      "사용자가 실수로 지우거나 랜섬웨어가 덮어쓴 객체",
      "랙 하나의 전원 장애",
    ],
    answer: 2,
    explanation:
      "복제는 지우기와 덮어쓰기도 충실히 세 벌에 반영한다. 사람의 실수와 공격에는 버전 관리나 Object Lock처럼 옛 상태를 남기는 장치가 따로 필요하다.",
    anchor: "현장에서-내구성이-깨지는-순간",
  },
];
