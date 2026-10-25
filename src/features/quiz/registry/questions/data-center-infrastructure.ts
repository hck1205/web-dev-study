import type { QuizQuestion } from "../types";

export const DATA_CENTER_INFRASTRUCTURE: QuizQuestion[] = [
  {
    id: "data-center-infrastructure-1",
    post: "data-center-infrastructure",
    question: "같은 리전의 가용 영역을 서로 떨어뜨리되 100km 안에 두는 이유로 가장 알맞은 것은?",
    choices: [
      "같은 전력망을 함께 쓰기 위해서",
      "재해가 번지지 않을 만큼 떨어뜨리면서도 AZ 사이 동기 복제가 가능한 지연을 지키려고",
      "같은 IP 대역을 나눠 쓰기 위해서",
      "법적으로 한 도시 안에 있어야 해서",
    ],
    answer: 1,
    explanation:
      "AZ끼리는 전력·냉각·네트워크를 공유하지 않아야 한 곳의 재해가 번지지 않는다. 그렇다고 너무 멀면 광섬유 왕복 지연이 커져 동기 복제가 느려진다. 100km면 왕복 1ms 정도라 이 둘의 타협이 된다.",
    anchor: "가용-영역은-건물인가",
  },
  {
    id: "data-center-infrastructure-2",
    post: "data-center-infrastructure",
    question: "같은 AZ에 있던 DB 복제본 두 대가 동시에 꺼졌다. 물리 구조로 볼 때 가장 그럴듯한 원인은?",
    choices: [
      "두 대가 같은 랙에 있어 ToR 스위치나 랙 PDU를 공유했다",
      "AZ ID와 AZ 이름이 계정마다 달라서",
      "PUE가 1.5를 넘어서",
      "두 대가 서로 다른 포드에 있어서",
    ],
    answer: 0,
    explanation:
      "같은 랙의 서버는 같은 ToR 스위치와 같은 PDU를 쓴다. 그 장비 하나가 망가지면 랙 전체가 함께 꺼진다. 소수의 핵심 노드는 분산 배치 그룹이나 랙 라벨로 서로 다른 랙에 둔다.",
    anchor: "랙-한-칸에-들어가는-것",
  },
  {
    id: "data-center-infrastructure-3",
    post: "data-center-infrastructure",
    question: "랙을 앞면끼리, 뒷면끼리 마주 보게 줄 세우는 이유는?",
    choices: [
      "케이블 길이를 줄이려고",
      "사람이 지나다닐 통로를 하나로 줄이려고",
      "찬 공기 통로와 뜨거운 공기 통로를 나눠 두 공기가 섞이지 않게 하려고",
      "랙마다 다른 전력 계통을 쓰게 하려고",
    ],
    answer: 2,
    explanation:
      "서버는 앞에서 찬 공기를 빨아들이고 뒤로 뜨거운 공기를 낸다. 앞면끼리 마주 보면 콜드 아일, 뒷면끼리 마주 보면 핫 아일이 생긴다. 두 공기가 섞이면 냉각기가 같은 일을 하는 데 전기를 더 쓴다.",
    anchor: "줄과-포드-그리고-바람의-길",
  },
  {
    id: "data-center-infrastructure-4",
    post: "data-center-infrastructure",
    question: "A·B 계통이 각각 10kW 정격인 랙에 서버를 채울 때, 실제로 계획할 수 있는 전력 한도에 가장 가까운 것은?",
    choices: [
      "두 계통을 합친 20kW",
      "두 계통을 합친 20kW의 80%인 16kW",
      "계통 하나인 10kW 전부",
      "계통 하나가 혼자 감당할 수 있는 10kW의 80%인 8kW",
    ],
    answer: 3,
    explanation:
      "한 계통이 끊기면 다른 계통이 랙 전체를 혼자 감당해야 하니 기준은 계통 하나다. 여기에 연속 부하 여유율 80%를 두면 8kW가 된다. 두 계통을 합쳐 계획하면 한쪽 정비 날 남은 계통이 과부하로 내려간다.",
    anchor: "전기가-랙까지-오는-길",
  },
  {
    id: "data-center-infrastructure-5",
    post: "data-center-infrastructure",
    question: "정전 순간 UPS가 필요한 이유로 가장 알맞은 것은?",
    choices: [
      "발전기가 정격 출력에 오르기까지 10초 안팎이 걸려 그 틈을 메워야 해서",
      "UPS가 발전기보다 오래 버텨서",
      "발전기는 냉각 장치에만 전기를 대서",
      "UPS가 전력망의 전압을 두 배로 올려서",
    ],
    answer: 0,
    explanation:
      "발전기는 시동부터 부하를 받기까지 시간이 걸린다. 그동안 서버가 꺼지지 않게 UPS 배터리가 끊김 없이 전기를 댄다. 배터리는 보통 수 분만 버티게 설계하고, 긴 정전은 발전기와 연료가 맡는다.",
    anchor: "전기가-랙까지-오는-길",
  },
  {
    id: "data-center-infrastructure-6",
    post: "data-center-infrastructure",
    question: "PUE가 낮다는 사실만으로 알 수 없는 것은?",
    choices: [
      "건물 전체 전력 중 IT 장비가 차지하는 비율",
      "냉각과 전력 변환 손실의 크기",
      "IT 장비가 실제로 일을 얼마나 효율적으로 하는지",
      "측정 기간의 전체 전력 대비 IT 전력",
    ],
    answer: 2,
    explanation:
      "PUE는 전체 전력을 IT 전력으로 나눈 값이라 IT 바깥의 손실만 말해 준다. 놀고 있는 서버를 많이 켜 두어도 IT 전력이 커지니 PUE는 오히려 좋아질 수 있다. 장비가 일을 효율적으로 하는지는 사용률로 따로 본다.",
    anchor: "전기를-얼마나-잘-쓰나-pue",
  },
  {
    id: "data-center-infrastructure-7",
    post: "data-center-infrastructure",
    question: "BMC를 서비스 네트워크가 아니라 분리된 관리망에만 두는 이유는?",
    choices: [
      "BMC가 서비스 트래픽을 느리게 만들어서",
      "BMC는 서버 전원·콘솔·펌웨어를 쥐고 있고 IPMI에 알려진 약점도 있어 뚫리면 OS 보안이 소용없어서",
      "BMC는 IPv6만 지원해서",
      "관리망이 있어야 PUE를 잴 수 있어서",
    ],
    answer: 1,
    explanation:
      "BMC는 OS와 상관없이 서버를 켜고 끄고 콘솔을 보고 설치 이미지를 꽂을 수 있다. IPMI 2.0은 원격에서 비밀번호 해시를 얻어 낼 수 있는 약점도 알려져 있다. 그래서 분리된 관리망에만 두고 기본 비밀번호와 IPMI over LAN을 정리한다.",
    anchor: "사람이-없는-데이터-센터",
  },
];
