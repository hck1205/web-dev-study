import type { QuizQuestion } from "../types";

export const SD_AD_CLICK_EXACTLY_ONCE: QuizQuestion[] = [
  {
    id: "sd-ad-click-exactly-once-1",
    post: "sd-ad-click-exactly-once",
    question: "소비자가 결과를 DB에 더한 직후, Kafka에 오프셋을 커밋하기 전에 죽었다. 다시 뜨면 어떻게 되나?",
    choices: [
      "그 묶음을 건너뛰어 숫자가 모자란다",
      "Kafka가 결과를 되돌려 정확해진다",
      "같은 묶음을 다시 읽어 한 번 더 더해 숫자가 부푼다",
      "DB가 중복을 알아보고 무시한다",
    ],
    answer: 2,
    explanation:
      "Kafka에는 이전 오프셋이 남아 있으니 같은 묶음을 다시 받는다. DB는 이미 더했다는 걸 모르고 또 더한다. 실험에서 ad001이 8에서 11이 됐다. 이게 최소 한 번의 모습이다.",
    anchor: "오프셋을-언제-저장하나",
  },
  {
    id: "sd-ad-click-exactly-once-2",
    post: "sd-ad-click-exactly-once",
    question: "결과와 오프셋을 같은 DB의 한 트랜잭션에 썼다. 재시작할 때 책갈피는 어디서 읽어야 하나?",
    choices: [
      "그 DB에 함께 저장한 오프셋",
      "Kafka에 마지막으로 커밋된 오프셋",
      "토픽의 맨 처음",
      "토픽의 맨 끝",
    ],
    answer: 0,
    explanation:
      "결과와 짝이 맞는 책갈피는 같은 트랜잭션으로 저장한 DB 쪽에만 있다. Kafka에 따로 커밋한 오프셋은 결과와 어긋날 수 있다. 그래서 DB에서 읽어야 커밋 직전에 죽어도 정확히 이어 간다.",
    anchor: "오프셋을-언제-저장하나",
  },
  {
    id: "sd-ad-click-exactly-once-3",
    post: "sd-ad-click-exactly-once",
    question: "click_id를 10분 동안 기억해 거르는데, 오프라인이던 앱이 700초 뒤에 같은 클릭을 또 보냈다. 결과는?",
    choices: [
      "중복으로 걸러진다",
      "이미 잊은 뒤라 한 번 더 센다. 이런 건 하루치 대사가 잡는다",
      "늦은 이벤트로 따로 빠진다",
      "Kafka가 같은 메시지로 판단해 버린다",
    ],
    answer: 1,
    explanation:
      "기억 기간이 600초라 700초 뒤에 온 재전송은 처음 보는 번호로 취급된다. 기간을 늘리면 메모리가 늘어나니, 기간을 넘는 드문 중복은 원본을 click_id로 다시 세는 대사에서 바로잡는다.",
    anchor: "클릭마다-번호를-붙여-거른다",
  },
  {
    id: "sd-ad-click-exactly-once-4",
    post: "sd-ad-click-exactly-once",
    question: "DB 구간을 분산 트랜잭션 없이 정확하게 만드는 방법으로 알맞은 것은?",
    choices: [
      "결과를 두 번 보내 둘 중 큰 값을 쓴다",
      "결과를 '3을 더하라'로 보내되 재시도를 끈다",
      "Kafka의 acks를 all로 바꾼다",
      "칸의 값 자체를 버전과 함께 쓰고, 더 새 버전일 때만 덮어쓴다",
    ],
    answer: 3,
    explanation:
      "값 자체를 쓰면 같은 결과를 몇 번 받아도 같다. 순서가 뒤바뀌어 옛 값이 나중에 와도 버전 비교로 막는다. acks는 프로듀서와 브로커 사이 이야기라 DB 쪽 중복과는 관계가 없다.",
    anchor: "더하지-말고-덮어쓰면",
  },
  {
    id: "sd-ad-click-exactly-once-5",
    post: "sd-ad-click-exactly-once",
    question: "집계 노드 상태를 스냅샷으로 뜰 때 그 순간의 오프셋을 함께 적어야 하는 이유는?",
    choices: [
      "스냅샷 파일 크기를 줄이려고",
      "복구할 때 그 상태가 어디까지 반영한 것인지 알아야 그 다음부터 한 번만 다시 읽을 수 있어서",
      "Kafka가 오프셋 없는 스냅샷을 거부해서",
      "오프셋이 있어야 노드 번호를 알 수 있어서",
    ],
    answer: 1,
    explanation:
      "상태와 책갈피가 짝이 맞아야 스냅샷을 불러온 뒤 그 책갈피부터 읽어 사이 구간을 정확히 한 번 반영한다. 짝이 어긋나면 그 사이를 두 번 세거나 빠뜨린다.",
    anchor: "메모리에-있던-칸은-스냅샷으로-지킨다",
  },
  {
    id: "sd-ad-click-exactly-once-6",
    post: "sd-ad-click-exactly-once",
    question: "람다 아키텍처 대신 카파 아키텍처로 다시 계산하는 주된 이유는?",
    choices: [
      "다시 계산이 항상 더 빨라서",
      "원본 저장소가 필요 없어서",
      "집계 규칙을 스트림 코드 한 벌로만 유지하면 돼서",
      "실시간 노드에서 다시 계산까지 함께 처리해서",
    ],
    answer: 2,
    explanation:
      "람다는 스트림과 배치 두 벌의 코드가 같은 규칙을 지켜야 해서, 한쪽만 고치면 결과가 영영 안 맞는다. 카파는 원본을 같은 스트림 코드에 다시 흘려 넣는다. 다시 계산용 노드는 실시간 노드와 따로 띄운다.",
    anchor: "다시-계산하는-길을-하나로-둔다",
  },
  {
    id: "sd-ad-click-exactly-once-7",
    post: "sd-ad-click-exactly-once",
    question: "몰리는 광고의 키를 4조각으로 쪼개 나눠 센 뒤 더하는 방식이 그대로는 통하지 않는 집계는?",
    choices: ["클릭 수 합계", "고유 사용자 수", "1분 최대 클릭 수", "클릭 건수"],
    answer: 1,
    explanation:
      "합계, 건수, 최댓값은 조각별 결과를 합쳐도 맞다. 고유 사용자 수는 같은 사용자가 여러 조각에 나타날 수 있어 그냥 더하면 부푼다. 조각마다 HyperLogLog처럼 합칠 수 있는 구조를 만들거나, 사용자 번호로 쪼갠다.",
    anchor: "광고-하나에-클릭이-몰리면",
  },
];
