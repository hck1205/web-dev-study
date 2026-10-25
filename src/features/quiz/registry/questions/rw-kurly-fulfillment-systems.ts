import type { QuizQuestion } from "../types";

export const RW_KURLY_FULFILLMENT_SYSTEMS: QuizQuestion[] = [
  {
    id: "rw-kurly-fulfillment-systems-1",
    post: "rw-kurly-fulfillment-systems",
    question: "컬리 OMS가 자사 쇼핑몰인 컬리몰도 B2B 고객사처럼 다루는 이유로 가장 알맞은 것은?",
    choices: [
      "컬리몰의 주문량이 가장 적어서",
      "한 판매처에 강하게 결합되면 판매처가 늘어날 때 불리한 구조가 되어서",
      "컬리몰이 별도 법인이라 법적으로 분리해야 해서",
      "컬리몰 주문은 OMS를 거치지 않아서",
    ],
    answer: 1,
    explanation:
      "OMS는 판매처마다 다른 주문을 풀필먼트가 이해하는 주문으로 바꾸는 번역 층이다. 가장 큰 고객인 자사 몰에 맞춘 지름길을 만들면 외부 판매처를 받을 때 걸림돌이 되므로, 컬리몰도 바깥 고객처럼 연동한다.",
    anchor: "주문을-통역하는-oms",
  },
  {
    id: "rw-kurly-fulfillment-systems-2",
    post: "rw-kurly-fulfillment-systems",
    question: "OMS의 공유 캐시 규칙으로 맞는 것은?",
    choices: [
      "어느 서비스든 캐시에 쓰고 읽을 수 있다",
      "캐시에 없으면 실패를 돌려준다",
      "그 데이터를 맡은 서비스만 캐시에 쓰고, 나머지는 읽기만 하며, 없거나 늦으면 담당 서비스를 직접 부른다",
      "operation API만 캐시에 쓴다",
    ],
    answer: 2,
    explanation:
      "데이터 소유권을 분명히 하려고 쓰기는 담당 서비스만 한다. 캐시 미스나 연결 타임아웃이 나면 담당 서비스를 직접 호출해 데이터를 받는다.",
    anchor: "묻지-말고-게시판을-봐",
  },
  {
    id: "rw-kurly-fulfillment-systems-3",
    post: "rw-kurly-fulfillment-systems",
    question: "공유 캐시를 믿고 다른 서비스 사양을 최소로 낮춘 구조에서 컬리가 꼽은 가장 큰 위험과 대응은?",
    choices: [
      "캐시 데이터가 오래됨 / TTL을 0으로",
      "캐시가 고장 나면 트래픽이 최소 사양 서비스들로 그대로 몰림 / 오토스케일을 보수적으로 잡고 캐시 클러스터를 둘로 나눔",
      "서비스 수가 너무 많아짐 / 서비스를 하나로 합침",
      "캐시 비용이 커짐 / 캐시를 없앰",
    ],
    answer: 1,
    explanation:
      "캐시가 장애 전파를 끊는 대신 새 단일 장애 지점이 된다. 컬리는 예전 지표를 기준으로 오토스케일 여유를 두고, 데이터 성격과 영향도를 따져 캐시 클러스터를 두 개로 나눴다.",
    anchor: "묻지-말고-게시판을-봐",
  },
  {
    id: "rw-kurly-fulfillment-systems-4",
    post: "rw-kurly-fulfillment-systems",
    question: "새 배송 시스템 전환에서 컬리몰·TOMS가 요청을 나눠 보내는 1안 대신, 새 시스템이 같은 토픽을 함께 구독하는 2안을 고른 이유는?",
    choices: [
      "2안이 물량을 더 정확하게 나눠서",
      "Kafka가 1안을 지원하지 않아서",
      "새 시스템이 기존 시스템보다 빨라서",
      "고칠 시스템과 협업 조직이 늘지 않고, 기존 시스템에도 모든 요청이 있어 롤백을 자체적으로 할 수 있어서",
    ],
    answer: 3,
    explanation:
      "1안은 물량은 정확하지만 보내는 쪽 시스템을 여럿 고쳐야 하고 롤백에 다른 부서의 도움이 필요하다. 2안은 새 시스템이 전부 받되 켜 둔 지역만 처리하므로 지역 토글만 되돌리면 롤백이 된다.",
    anchor: "같은-토픽을-함께-듣는-새-시스템",
  },
  {
    id: "rw-kurly-fulfillment-systems-5",
    post: "rw-kurly-fulfillment-systems",
    question: "두 배송 시스템을 동시에 운영하는 동안 권역 데이터를 복제하고 수정하지 않기로 한 이유는?",
    choices: [
      "같은 주소를 두 시스템이 다른 권역으로 판단하면 현장 운영이 혼란스럽고 롤백이 어려워져서",
      "권역 데이터가 너무 커서 복제가 오래 걸려서",
      "SaaS 계약상 권역을 바꿀 수 없어서",
      "새 시스템에 권역 기능이 없어서",
    ],
    answer: 0,
    explanation:
      "권역은 컬리넥스트마일이 지역을 관리하는 오프라인 단위라, 시스템이 바뀌어도 현장은 같은 답을 받아야 한다. 판단 로직이 달라 권역이 갈리면 새 시스템은 기존 판단을 따르고 차이를 로그로 남겼다.",
    anchor: "같은-토픽을-함께-듣는-새-시스템",
  },
  {
    id: "rw-kurly-fulfillment-systems-6",
    post: "rw-kurly-fulfillment-systems",
    question: "배송 시스템 전환의 다섯 단계 가운데 '전체 센터의 50%' 단계에서 주로 찾으려 한 문제는?",
    choices: [
      "초기 기능 결함",
      "센터마다 다른 운영 정책",
      "물량 증가에 따른 성능 이슈",
      "현장 인원의 교육 부족",
    ],
    answer: 2,
    explanation:
      "단계마다 다른 위험을 드러내도록 범위를 골랐다. 소규모 지역은 기능 결함, 센터 3곳은 센터 사이 정책 차이, 50%는 물량과 성능을 보는 단계였고, 이를 넘으면 사실상 전환이 끝난 것으로 봤다.",
    anchor: "다섯-단계를-3주에",
  },
  {
    id: "rw-kurly-fulfillment-systems-7",
    post: "rw-kurly-fulfillment-systems",
    question: "컬리 입고 시스템이 RetryableTopic에서 sameIntervalTopicReuseStrategy를 SINGLE_TOPIC으로 지정한 이유는?",
    choices: [
      "재시도 간격을 지수적으로 늘리려고",
      "지정하지 않으면 기본값 때문에 재시도 토픽이 144개 생겨 클러스터에 부하를 주고 몇 번째 재시도인지 보기 어려워서",
      "DLT를 없애려고",
      "메시지 이중 직렬화를 막으려고",
    ],
    answer: 1,
    explanation:
      "10분 간격 144번 재시도를 기본값 MULTIPLE_TOPICS로 두면 재시도마다 토픽이 생긴다고 글은 설명했다. 이중 직렬화는 재시도용 KafkaTemplate을 따로 만들어 푼 별개의 문제다.",
    anchor: "바깥에서-들어오는-입고-아웃박스와-재시도-토픽",
  },
];
