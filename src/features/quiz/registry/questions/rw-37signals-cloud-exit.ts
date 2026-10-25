import type { QuizQuestion } from "../types";

export const RW_37SIGNALS_CLOUD_EXIT: QuizQuestion[] = [
  {
    id: "rw-37signals-cloud-exit-1",
    post: "rw-37signals-cloud-exit",
    question: "DHH가 클라우드가 잘 맞는다고 인정한 두 경우로 맞는 것은?",
    choices: [
      "트래픽이 적은 단순한 앱으로 막 시작할 때, 그리고 부하가 아주 들쭉날쭉할 때",
      "데이터가 많을 때, 그리고 보안이 중요할 때",
      "운영팀이 클 때, 그리고 하드웨어를 직접 고를 때",
      "Kubernetes를 쓸 때, 그리고 컨테이너를 쓸 때",
    ],
    answer: 0,
    explanation:
      "첫 글은 클라우드가 스펙트럼의 두 끝, 즉 아주 단순하고 트래픽이 적은 앱과 부하가 크게 튀는 서비스에서 뛰어나다고 쓴다. HEY 출시 때 3주 만에 30만 명이 가입한 경험을 예로 든다. 37signals는 지금 두 조건 어디에도 해당하지 않는다고 판단했다.",
    anchor: "클라우드가-잘하는-두-끝",
  },
  {
    id: "rw-37signals-cloud-exit-2",
    post: "rw-37signals-cloud-exit",
    question: "37signals의 '5년 700만 달러' 계산에서 랙·전력·대역폭 비용 72만 달러를 다시 볼 필요가 있는 이유는?",
    choices: [
      "실제로는 클라우드 비용에 이미 포함되어 있어서",
      "Deft가 무료로 제공하기로 해서",
      "클라우드를 떠나지 않아도 이미 내던 돈이라, 새로 드는 비용으로 보면 절감액이 더 커지기 때문에",
      "5년이 아니라 1년만 내면 되는 돈이라서",
    ],
    answer: 2,
    explanation:
      "37signals는 랙 8개를 이미 빌려 쓰고 있었고 새 장비를 그 안에 넣었다. 2024년 글은 그래서 절감이 처음 추정보다 커졌다고 쓴다. 반대로 랙이 없는 회사는 이 비용을 새로 내야 한다.",
    anchor: "230만-달러를-84만-달러로-바꾸는-계산",
  },
  {
    id: "rw-37signals-cloud-exit-3",
    post: "rw-37signals-cloud-exit",
    question: "2023년 6월 앱을 모두 옮긴 뒤에도 클라우드 청구서가 바로 줄지 않은 이유는?",
    choices: [
      "데이터 반출 비용이 한꺼번에 청구되어서",
      "1년 이상 미리 약정해 둔 할인 계약이 끝날 때까지 비용이 계속 나갔기 때문에",
      "새 서버의 전기요금이 클라우드 청구서에 함께 나와서",
      "옮긴 앱이 다시 클라우드로 돌아갔기 때문에",
    ],
    answer: 1,
    explanation:
      "클라우드 가격을 낮추는 방법이 약정이었고, 약정 기간에는 쓰지 않아도 돈을 낸다. S3는 2021년에 맺은 4년 약정 때문에 2025년 여름까지 남았다. 약정은 할인이면서 떠날 수 있는 가장 이른 날을 정한다.",
    anchor: "청구서가-줄어든-순서",
  },
  {
    id: "rw-37signals-cloud-exit-4",
    post: "rw-37signals-cloud-exit",
    question: "37signals가 자체 하드웨어로 옮기며 Kubernetes 대신 Kamal을 쓴 이유로 가장 알맞은 것은?",
    choices: [
      "컨테이너를 버리고 서버에 직접 설치하려고",
      "Kubernetes가 MySQL을 지원하지 않아서",
      "벤더 지원 Kubernetes를 자기 장비에서 돌리는 안이 비싸고 복잡해서, 컨트롤 플레인 없이 Docker 위에서 배포만 하는 도구를 택했다",
      "Kamal이 서버 장애 시 자동으로 다른 곳에 다시 띄워 줘서",
    ],
    answer: 2,
    explanation:
      "개발 블로그는 처음 생각한 벤더 지원 Kubernetes가 비싸고 운영이 복잡했다고 쓴다. 컨테이너는 그대로 두고 오케스트레이터만 뺐다. Kamal은 명령형 도구라 Kubernetes처럼 죽은 컨테이너를 자동으로 다른 서버에 옮겨 주지 않는다.",
    anchor: "kubernetes를-내려놓은-이유",
  },
  {
    id: "rw-37signals-cloud-exit-5",
    post: "rw-37signals-cloud-exit",
    question: "Kamal 배포에서 새 버전으로 트래픽이 넘어가는 시점은?",
    choices: [
      "이미지가 레지스트리에 올라간 직후",
      "새 컨테이너가 GET /up(헬스 체크)에 200 OK로 답한 뒤",
      "이전 컨테이너를 멈춘 직후",
      "모든 서버에서 이미지를 내려받기 전",
    ],
    answer: 1,
    explanation:
      "공식 문서에 따르면 kamal-proxy는 새 컨테이너가 /up에 200 OK로 답할 때 트래픽을 그쪽으로 돌리고, 그다음에 이전 컨테이너를 멈춘다. 그래서 새 버전이 뜨지 못하면 요청은 이전 버전에 남는다.",
    anchor: "kamal-배포-한-번에-일어나는-일",
  },
  {
    id: "rw-37signals-cloud-exit-6",
    post: "rw-37signals-cloud-exit",
    question: "S3에서 수십억 개 객체를 옮길 때 Jeremy Daer가 가장 큰 일로 꼽은 것은?",
    choices: [
      "데이터센터에 하드디스크를 직접 들고 가는 일",
      "복사 자체보다, 빠진 것과 남는 것을 맞추는 대조와 검증",
      "AWS에 반출 비용을 먼저 내는 일",
      "모든 앱을 멈추고 며칠 동안 다운타임을 두는 일",
    ],
    answer: 1,
    explanation:
      "그는 복사가 일의 중심처럼 보이지만 진짜 큰일은 대조와 검증이었다고 말한다. 목록은 인벤토리 보고서로 받고, rclone으로 체크섬을 맞췄다. 이중 쓰기로 멈추지 않고 옮겼고 전송은 10일이 안 걸렸다.",
    anchor: "s3의-10페타바이트는-마지막에",
  },
  {
    id: "rw-37signals-cloud-exit-7",
    post: "rw-37signals-cloud-exit",
    question: "클라우드 비용이 37signals의 10분의 1인 작은 회사가 같은 계산을 할 때 가장 먼저 넣어야 할 항목은?",
    choices: [
      "새 서버의 CPU 클럭",
      "CDN 업체 이름",
      "이 일 때문에 늘어나는 운영 인력의 인건비",
      "Kubernetes 버전",
    ],
    answer: 2,
    explanation:
      "37signals의 계산에는 운영팀이 그대로라 인건비 칸이 없다. 절감액이 작은 회사라면 사람 한 명만 더 뽑아도 같은 공식에서 손해가 된다. 그래서 인건비와 이미 가진 시설부터 넣고 계산한다.",
    anchor: "우리-서비스의-계산을-해-보려면",
  },
];
