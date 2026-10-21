import type { QuizQuestion } from "../types";

export const SD_MQ_REPLICATION: QuizQuestion[] = [
  {
    id: "sd-mq-replication-1",
    post: "sd-mq-replication",
    question: "메시지 큐가 아무 복제본에나 쓰는 쿼럼 방식 대신 파티션마다 리더 하나를 두는 주된 이유는?",
    choices: [
      "리더가 있어야 컨슈머가 메시지를 읽을 수 있어서",
      "리더 하나가 오프셋을 매기면 팔로워는 그 순서대로 붙이기만 해서, 오프셋 순서를 매번 합의할 필요가 없어서",
      "쿼럼 방식은 디스크를 쓰지 않아서",
      "리더 방식이 복제본을 더 적게 만들어서",
    ],
    answer: 1,
    explanation:
      "파티션 안에서는 오프셋 순서가 생명이다. 여러 대가 동시에 쓰기를 받으면 누가 오프셋 7인지 매번 맞춰야 하지만, 리더가 매기고 팔로워가 pull로 따라 붙이면 순서가 저절로 같아진다.",
    anchor: "파티션마다-리더-하나-나머지는-따라-쓴다",
  },
  {
    id: "sd-mq-replication-2",
    post: "sd-mq-replication",
    question: "ISR이 b1, b2, b3이고 LEO가 각각 7, 7, 5다. 컨슈머는 어디까지 읽을 수 있나?",
    choices: [
      "오프셋 6까지 (HW 7)",
      "오프셋 4까지 (HW 5)",
      "리더가 가진 데까지 전부",
      "b2가 가진 데까지",
    ],
    answer: 1,
    explanation:
      "하이 워터마크는 ISR 복제본 LEO의 최솟값이라 5다. 컨슈머에게는 그 앞인 오프셋 4까지만 보여 준다. 리더에만 있는 메시지를 읽게 하면 리더가 죽은 뒤 사라진 메시지를 처리한 셈이 될 수 있다.",
    anchor: "누가-제대로-따라오고-있나",
  },
  {
    id: "sd-mq-replication-3",
    post: "sd-mq-replication",
    question: "acks=1로 m7을 보내 성공 응답을 받았다. 팔로워가 m7을 가져가기 전에 리더가 죽고 b2가 새 리더가 됐다. m7은 어떻게 되나?",
    choices: [
      "b2가 옛 리더에게서 m7을 받아 와 남는다",
      "프로듀서가 자동으로 다시 보내 남는다",
      "돌아온 옛 리더가 m7을 새 리더에게 넘겨준다",
      "새 리더의 오프셋 7에 다른 메시지가 들어가고, 돌아온 옛 리더는 m7을 잘라 내서 사라진다",
    ],
    answer: 3,
    explanation:
      "프로듀서는 이미 성공을 들었으니 다시 보내지 않는다. 새 리더 b2는 m6에서 끝나 다음 메시지 m8을 오프셋 7에 붙이고, 돌아온 b1은 새 리더와 다른 꼬리를 잘라 낸다. 시뮬레이션에서 m7이 이렇게 사라졌다.",
    anchor: "성공-응답은-언제-주나-acks",
  },
  {
    id: "sd-mq-replication-4",
    post: "sd-mq-replication",
    question: "복제 계수 3, acks=all인데 min.insync.replicas를 기본값 1로 두었다. 어떤 위험이 있나?",
    choices: [
      "ISR이 리더 혼자로 줄어도 쓰기를 받아, 그때 리더가 죽으면 성공한 메시지를 잃을 수 있다",
      "브로커 하나만 재시작해도 쓰기가 멈춘다",
      "컨슈머가 하이 워터마크를 넘어 읽게 된다",
      "아무 위험도 없다. acks=all이면 항상 세 대가 받는다",
    ],
    answer: 0,
    explanation:
      "acks=all의 all은 지금 ISR의 전원이라, ISR이 리더 하나면 사실상 acks=1이다. min.insync.replicas를 2로 두면 ISR이 둘 미만일 때 NOT_ENOUGH_REPLICAS로 거절해 이 상황을 막는다. 쓰기가 멈추는 건 3으로 둘 때의 문제다.",
    anchor: "전원이-받아도-끝이-아니다-동기화-복제본이-줄어들-때",
  },
  {
    id: "sd-mq-replication-5",
    post: "sd-mq-replication",
    question: "ISR에 리더만 남은 채 리더가 죽었다. unclean 리더 선출을 켜 두었다면?",
    choices: [
      "옛 리더가 돌아올 때까지 파티션이 멈춘다",
      "뒤처진 팔로워가 리더가 되어 파티션은 바로 살아나지만, 그 차이만큼 성공한 메시지가 사라진다",
      "컨트롤러가 옛 리더의 디스크에서 메시지를 복구한다",
      "모든 팔로워가 처음부터 다시 복제해 잃는 것이 없다",
    ],
    answer: 1,
    explanation:
      "unclean 선출은 가용성을 위해 ISR 밖의 복제본을 리더로 올린다. 시뮬레이션에서 b2가 리더가 되며 m7~m14 여덟 건이 사라졌다. 끄면 반대로 데이터는 지키고 옛 리더가 돌아올 때까지 멈춘다.",
    anchor: "전원이-받아도-끝이-아니다-동기화-복제본이-줄어들-때",
  },
  {
    id: "sd-mq-replication-6",
    post: "sd-mq-replication",
    question: "메시지 복제에 과반 합의 대신 ISR 방식을 쓰면 얻는 것은?",
    choices: [
      "메타데이터 합의가 필요 없어진다",
      "리더 선출이 필요 없어진다",
      "f대의 고장을 2f+1벌이 아니라 f+1벌로 견딜 수 있다",
      "acks=1로도 메시지를 잃지 않는다",
    ],
    answer: 2,
    explanation:
      "ISR 전원이 받은 것만 확정하니 ISR 중 누가 리더가 돼도 확정된 메시지를 다 갖고 있다. 그래서 복제본 3벌로 2대 고장까지 견딘다. 대신 누가 ISR이고 리더인지라는 작은 메타데이터는 컨트롤러 쿼럼이 과반 합의로 지킨다.",
    anchor: "리더를-정하는-쪽은-누구인가",
  },
  {
    id: "sd-mq-replication-7",
    post: "sd-mq-replication",
    question: "돌아온 옛 리더가 새 리더와 어디서 갈라졌는지 정확히 찾게 해 주는 것은?",
    choices: [
      "레코드마다 적어 둔 leader epoch",
      "하이 워터마크만",
      "CRC 체크섬",
      "컨슈머 그룹의 커밋 오프셋",
    ],
    answer: 0,
    explanation:
      "리더가 바뀔 때마다 오르는 epoch를 레코드에 같이 적어 두면, 돌아온 복제본이 자기 마지막 epoch가 새 리더 기준으로 어디서 끝나는지 묻고 그 뒤를 잘라 낸다. 하이 워터마크 기준으로 자르던 예전 방식은 리더가 연달아 바뀔 때 복제본이 어긋날 수 있었다.",
    anchor: "성공-응답은-언제-주나-acks",
  },
];
