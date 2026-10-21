import type { QuizQuestion } from "../types";

export const CLOUD_COST_OPTIMIZATION: QuizQuestion[] = [
  {
    id: "cloud-cost-optimization-1",
    post: "cloud-cost-optimization",
    question: "인스턴스 수와 종류는 그대로인데 EC2 항목 비용이 크게 늘었다. 사용 유형별로 나눴을 때 가장 먼저 의심할 줄은?",
    choices: [
      "BoxUsage (인스턴스 시간)",
      "NatGateway-Bytes, DataTransfer-Regional-Bytes 같은 EC2-Other 항목",
      "Lambda-GB-Second",
      "TimedStorage-ByteHrs (S3 보관)",
    ],
    answer: 1,
    explanation:
      "인스턴스 요금이 그대로라면 늘어난 돈은 EC2-Other에 묶인 NAT 처리 요금, AZ 사이 전송, EBS 같은 곳에서 나온다. 서버 목록만 봐서는 보이지 않으니 사용 유형별로 나눠 봐야 한다.",
    anchor: "청구서는-위에서부터-읽는다",
  },
  {
    id: "cloud-cost-optimization-2",
    post: "cloud-cost-optimization",
    question: "프라이빗 서브넷의 로그 수집기가 같은 리전 S3로 하루 800GB를 보낸다. 비용을 가장 크게 줄이는 방법은?",
    choices: [
      "S3 게이트웨이 엔드포인트를 만들어 S3 트래픽이 NAT를 건너뛰게 한다",
      "NAT 게이트웨이를 AZ마다 하나씩 더 만든다",
      "S3 버킷을 다른 리전으로 옮긴다",
      "로그 수집기를 퍼블릭 서브넷의 더 큰 인스턴스로 바꾼다",
    ],
    answer: 0,
    explanation:
      "같은 리전 S3로의 전송 자체는 무료이고, 돈은 NAT가 처리한 바이트에서 나온다. 게이트웨이 엔드포인트는 요금이 없고 라우트 테이블에서 더 구체적인 경로로 이겨 NAT를 건너뛰게 한다.",
    anchor: "데이터가-지나가는-길에-요금소가-있다",
  },
  {
    id: "cloud-cost-optimization-3",
    post: "cloud-cost-optimization",
    question: "AZ c의 API 서버가 AZ a의 Redis 프라이머리를 부를 때 생기는 비용으로 맞는 것은?",
    choices: [
      "같은 VPC라서 비용이 없다",
      "받는 쪽에서만 GB당 요금이 붙는다",
      "사설 IP를 쓰면 AZ를 건너도 무료다",
      "AZ를 건너는 데이터에 보내는 쪽과 받는 쪽 양방향으로 GB당 요금이 붙는다",
    ],
    answer: 3,
    explanation:
      "같은 VPC라도 AZ를 건너는 트래픽은 방향마다 GB당 요금이 붙는다. 같은 AZ의 레플리카에서 읽거나 같은 존을 우선하는 라우팅으로 줄이되, 한 AZ에 몰려 가용성을 잃지 않게 한다.",
    anchor: "데이터가-지나가는-길에-요금소가-있다",
  },
  {
    id: "cloud-cost-optimization-4",
    post: "cloud-cost-optimization",
    question: "CPU 평균이 8%인 서버를 한 단계 작은 크기로 바꿨더니 밤마다 배치가 실패한다. 무엇을 놓쳤나?",
    choices: [
      "약정 할인을 먼저 걸지 않았다",
      "평균만 보고 2주 이상의 최댓값이나 p95, 메모리 지표를 보지 않았다",
      "Graviton으로 바꾸지 않았다",
      "스팟 인스턴스로 바꾸지 않았다",
    ],
    answer: 1,
    explanation:
      "평균은 낮아도 밤마다 배치에서 90%를 찍는 서버가 있다. 크기를 맞출 때는 충분한 기간의 최댓값을 보고, 기본 지표에 없는 메모리는 에이전트로 따로 확인해야 한다.",
    anchor: "크기를-맞추고-나서-약정을-건다",
  },
  {
    id: "cloud-cost-optimization-5",
    post: "cloud-cost-optimization",
    question: "Savings Plans 약정 금액은 어떤 기준으로 정하는 것이 맞나?",
    choices: [
      "지난 몇 달 동안 가장 적게 쓴 시간대의 바닥 사용량",
      "지난달 최대 사용량",
      "지난달 평균 사용량에 20%를 더한 값",
      "다음 해 예상 최대 사용량",
    ],
    answer: 0,
    explanation:
      "약정은 쓰지 않아도 돈을 내니 늘 쓰는 바닥에만 건다. 그보다 위의 변동은 온디맨드와 오토스케일링, 중단돼도 되는 부분은 스팟으로 받는다. 매달 사용률과 적용률을 보고 조정한다.",
    anchor: "크기를-맞추고-나서-약정을-건다",
  },
  {
    id: "cloud-cost-optimization-6",
    post: "cloud-cost-optimization",
    question: "스팟 노드 그룹에 인스턴스 타입을 하나만 지정했더니 가끔 노드가 한꺼번에 사라지고 다시 뜨지도 않는다. 가장 알맞은 개선은?",
    choices: [
      "회수 알림 시간을 10분으로 늘린다",
      "스팟 최고 입찰가를 온디맨드의 두 배로 올린다",
      "비슷한 크기의 여러 타입과 여러 AZ를 지정하고 price-capacity-optimized 전략과 온디맨드 바닥을 둔다",
      "스팟 노드에 DB 프라이머리를 옮겨 상태를 유지한다",
    ],
    answer: 2,
    explanation:
      "타입 하나에 의존하면 그 용량 풀이 모자랄 때 한꺼번에 회수된다. 여러 타입과 AZ로 풀을 넓히고 회수 가능성이 낮은 풀을 고르는 전략을 쓰며, 온디맨드를 일부 섞어 스팟이 다 빠져도 서비스가 서 있게 한다. 회수 알림은 2분으로 고정이다.",
    anchor: "스팟은-2분-뒤에-뺏길-수-있다",
  },
  {
    id: "cloud-cost-optimization-7",
    post: "cloud-cost-optimization",
    question: "팀별 쇼백 리포트에서 '태그 없음'이 36%로 가장 크다. 이 상태가 문제인 이유는?",
    choices: [
      "태그 없는 자원은 요금이 두 배로 매겨지기 때문이다",
      "주인이 없는 비용은 아무도 줄이지 않아 쇼백이 의미를 잃기 때문이다",
      "Cost Explorer가 태그 없는 비용을 보여 주지 않기 때문이다",
      "태그가 없으면 Savings Plans가 적용되지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "비용을 줄이려면 그 비용의 주인이 있어야 한다. 태그 없는 몫이 크면 다들 자기 것이 아니라고 생각한다. IaC 기본 태그와 조직 태그 정책으로 강제하고, NAT 같은 공유 인프라는 나누는 규칙을 따로 정한다.",
    anchor: "태그가-없으면-누구-돈인지-모른다",
  },
];
