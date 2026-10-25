import type { QuizQuestion } from "../types";

export const CLAIM_CHECK_SEQUENTIAL_CONVOY: QuizQuestion[] = [
  {
    id: "claim-check-sequential-convoy-1",
    post: "claim-check-sequential-convoy",
    question: "200KiB 이미지를 JSON 메시지에 넣었더니 256KiB 한도에 걸렸다. 왜일까?",
    choices: [
      "JSON 키 이름이 길어서",
      "base64로 바꾸면 3바이트가 4글자가 되어 크기가 약 4/3배로 늘어서",
      "큐가 메시지를 압축하지 못해서",
      "메시지 헤더가 본문만큼 커서",
    ],
    answer: 1,
    explanation:
      "204,800바이트가 base64로 273,068글자가 되어 262,144바이트 한도를 넘는다. JSON 키는 몇십 바이트에 불과하다. 한도를 올리기보다 본문을 저장소로 빼는 편이 다음 문제를 막는다.",
    anchor: "메시지-크기-한도는-시스템마다-다르다",
  },
  {
    id: "claim-check-sequential-convoy-2",
    post: "claim-check-sequential-convoy",
    question: "클레임 체크에서 같은 객체 키에 새 본문을 덮어쓰면 생기는 문제는?",
    choices: [
      "S3가 덮어쓰기를 거부한다",
      "메시지 크기가 다시 커진다",
      "늦게 처리되는 옛 메시지가 새 본문을 읽어 메시지와 본문의 시점이 어긋난다",
      "수명 규칙이 동작하지 않는다",
    ],
    answer: 2,
    explanation:
      "참조는 키만 가리키므로 그 사이 내용이 바뀌면 옛 메시지는 새 본문을 읽는다. 키를 매번 새로 만들거나 내용 해시를 키로 쓰면 이 문제가 없다. 순서가 필요한 메시지라면 키에 버전을 넣는다.",
    anchor: "짐은-맡기고-번호표만-보낸다",
  },
  {
    id: "claim-check-sequential-convoy-3",
    post: "claim-check-sequential-convoy",
    question: "클레임 객체의 수명 규칙을 7일로 두었다. DLQ에서 10일째에 고친 메시지를 되돌려 보내면?",
    choices: [
      "메시지가 존재하지 않는 객체를 가리켜 처리할 수 없다",
      "S3가 DLQ에 있는 메시지의 객체는 자동으로 보존한다",
      "되돌려 보낼 때 객체가 다시 만들어진다",
      "메시지 보관 기간이 객체 수명을 따라 7일로 줄어든다",
    ],
    answer: 0,
    explanation:
      "참조가 메시지보다 먼저 죽는 경쟁이다. 수명은 원래 큐 보관 기간, DLQ 보관 기간, 사람이 고치는 시간까지 더한 것보다 길게 둔다. 객체를 못 찾는 메시지는 재시도해도 같으니 바로 DLQ로 보내고 알림을 건다.",
    anchor: "맡긴-짐은-누가-언제-치우나",
  },
  {
    id: "claim-check-sequential-convoy-4",
    post: "claim-check-sequential-convoy",
    question: "SSE-KMS로 암호화한 클레임 버킷에서 컨슈머가 메시지는 받는데 본문을 읽을 때 AccessDenied가 난다. 가장 먼저 볼 것은?",
    choices: [
      "큐의 가시성 타임아웃",
      "메시지 그룹 ID",
      "버킷의 수명 규칙",
      "컨슈머 역할에 그 KMS 키의 kms:Decrypt 권한이 있는지",
    ],
    answer: 3,
    explanation:
      "본문이 메시지 밖으로 나가면 큐 권한과 버킷 권한이 따로 필요하고, KMS 키를 쓰면 키 사용 권한도 따로 필요하다. s3:GetObject만 있으면 복호화 단계에서 막힌다.",
    anchor: "맡긴-짐에-자물쇠를-채운다",
  },
  {
    id: "claim-check-sequential-convoy-5",
    post: "claim-check-sequential-convoy",
    question: "Kafka에서 처리에 실패한 메시지를 재시도 토픽으로 보내고 원래 파티션은 계속 읽는다. 키별 순서는 어떻게 되나?",
    choices: [
      "재시도 토픽이 원래 순서를 기억해 둔다",
      "같은 키의 뒷 메시지가 실패한 메시지를 앞질러 처리되어 순서가 깨진다",
      "다른 키의 순서만 깨지고 같은 키는 지켜진다",
      "파티션이 자동으로 멈춰 순서가 지켜진다",
    ],
    answer: 1,
    explanation:
      "실패한 메시지가 줄에서 빠지는 순간 같은 키의 다음 메시지가 먼저 반영된다. 직접 돌려 본 예에서도 배송됨 뒤에 재시도된 결제됨이 반영되어 상태가 뒤로 갔다. 키별 버전 확인이나 키 격리로 막는다.",
    anchor: "재시도와-dlq가-순서를-깨는-길",
  },
  {
    id: "claim-check-sequential-convoy-6",
    post: "claim-check-sequential-convoy",
    question: "SQS FIFO 큐에서 한 메시지 그룹의 메시지가 계속 실패하다가 maxReceiveCount를 넘었다. 그 뒤 그 그룹은?",
    choices: [
      "영원히 멈춘다",
      "큐 전체가 멈춘다",
      "실패한 메시지가 DLQ로 옮겨지면서 그룹이 풀리고, 뒷 메시지가 실패한 메시지 없이 처리된다",
      "실패한 메시지가 그룹 맨 뒤로 다시 들어간다",
    ],
    answer: 2,
    explanation:
      "FIFO는 실패한 메시지가 지워지기 전까지 그룹을 막아 순서를 지킨다. 하지만 DLQ로 옮겨지는 순간 줄이 풀려 그 키의 순서가 깨진다. DLQ로 가는 길이 순서를 깨는 길이라, 그 키를 격리하고 뒷 메시지를 주차하는 장치를 둔다.",
    anchor: "재시도와-dlq가-순서를-깨는-길",
  },
  {
    id: "claim-check-sequential-convoy-7",
    post: "claim-check-sequential-convoy",
    question: "판매자 ID를 키로 쓰는 토픽에서 대형 판매자 한 곳이 파티션 하나를 막고 있다. 파티션 수를 두 배로 늘리면?",
    choices: [
      "핫 키는 여전히 한 파티션에 있어 가장 바쁜 파티션의 처리 시간은 줄지 않는다",
      "핫 키의 메시지가 두 파티션으로 나뉘어 절반으로 줄어든다",
      "모든 파티션의 처리 시간이 같아진다",
      "컨슈머가 핫 키를 자동으로 쪼갠다",
    ],
    answer: 0,
    explanation:
      "키는 해시로 파티션 하나에 정해지므로 파티션을 늘려도 핫 키는 한 줄에 남는다. 게다가 파티션 수를 바꾸면 키의 파티션이 바뀌어 순서가 깨질 수 있다. 순서가 필요한 단위로 키를 좁히거나 큰 키를 따로 떼어 낸다.",
    anchor: "한-키가-줄-전체를-막을-때",
  },
];
