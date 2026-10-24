import type { QuizQuestion } from "../types";

export const MONGODB_REPLICA_SET_SHARDING: QuizQuestion[] = [
  {
    id: "mongodb-replica-set-sharding-1",
    post: "mongodb-replica-set-sharding",
    question:
      "w: 1로 쓰고 성공 응답을 받은 주문이 프라이머리 교체 뒤 사라졌다. 그 주문은 어디서 찾을 수 있나?",
    choices: [
      "새 프라이머리의 oplog에 남아 있다가 자동으로 다시 적용된다",
      "옛 프라이머리가 돌아와 롤백하면서 dbpath 아래 rollback 폴더에 BSON 파일로 남긴다",
      "config 서버의 changelog 컬렉션에 남는다",
      "어디에도 남지 않는다",
    ],
    answer: 1,
    explanation:
      "옛 프라이머리는 새 프라이머리와의 공통 지점 이후의 자기 쓰기를 되돌리고 그 문서를 rollback 파일로 남긴다. MongoDB가 자동으로 되살리지 않아서 사람이 bsondump로 확인하고 다시 넣어야 한다.",
    anchor: "성공-응답을-받은-주문이-사라지는-장면",
  },
  {
    id: "mongodb-replica-set-sharding-2",
    post: "mongodb-replica-set-sharding",
    question: "w: \"majority\", wtimeout: 3000으로 쓴 요청이 WriteConcernFailed로 끝났다. 이 문서의 상태로 맞는 것은?",
    choices: [
      "쓰기가 거절돼서 어느 멤버에도 없다",
      "세컨더리에만 적용되고 프라이머리에는 없다",
      "프라이머리에는 적용돼 있고, 과반에 퍼졌는지 3초 안에 확인하지 못했을 뿐이다",
      "트랜잭션처럼 자동으로 되돌려졌다",
    ],
    answer: 2,
    explanation:
      "wtimeout은 확인을 기다리는 시간이지 쓰기를 취소하지 않는다. 실험에서도 local 읽기로는 보이고 majority 읽기로는 안 보였다. 나중에 복제되면 남고, 그 전에 프라이머리가 바뀌면 롤백된다.",
    anchor: "성공-응답을-받은-주문이-사라지는-장면",
  },
  {
    id: "mongodb-replica-set-sharding-3",
    post: "mongodb-replica-set-sharding",
    question: "프라이머리, 세컨더리, 아비터(PSA) 구성에서 세컨더리가 죽으면 어떻게 되나?",
    choices: [
      "프라이머리는 유지되지만 데이터 노드가 하나뿐이라 majority 쓰기를 확인할 수 없다",
      "과반을 잃어 프라이머리가 세컨더리로 내려간다",
      "아비터가 데이터를 받아 majority 쓰기가 계속 된다",
      "아무 영향이 없다",
    ],
    answer: 0,
    explanation:
      "프라이머리와 아비터 두 표로 선출 과반은 남는다. 하지만 majority 쓰기는 데이터를 가진 멤버가 받아야 해서 끝나지 않는다. 이 때문에 PSA는 기본 write concern이 w:1로 잡히고 롤백 위험이 따라온다.",
    anchor: "아비터가-과반을-망가뜨리는-경우",
  },
  {
    id: "mongodb-replica-set-sharding-4",
    post: "mongodb-replica-set-sharding",
    question: "점검으로 하루 동안 꺼 두었던 세컨더리가 RECOVERING에서 넘어오지 않고 로그에 too stale이 찍힌다. 원인은?",
    choices: [
      "세컨더리의 우선순위가 0이라서",
      "꺼져 있는 동안 프라이머리의 oplog가 한 바퀴 돌아 마지막 적용 지점이 지워졌기 때문이다",
      "read concern이 local이라서",
      "밸런서가 그 세컨더리의 청크를 옮겼기 때문이다",
    ],
    answer: 1,
    explanation:
      "oplog는 고정 크기라 오래된 항목부터 지워진다. 창보다 오래 멈춰 있으면 따라올 수 없어 초기 동기화가 필요하다. rs.printReplicationInfo()로 창을 확인하고 필요하면 replSetResizeOplog로 키운다.",
    anchor: "세컨더리가-따라올-수-있는-시간-oplog-창",
  },
  {
    id: "mongodb-replica-set-sharding-5",
    post: "mongodb-replica-set-sharding",
    question: "재시도 가능한 쓰기(retryWrites=true)가 막아 주지 못하는 것은?",
    choices: [
      "장애 조치 중 insertOne이 두 번 적용되는 것",
      "프라이머리 교체 때 단건 업데이트가 네트워크 오류로 끝나는 것",
      "w:1로 성공 응답을 받은 쓰기가 나중에 롤백되는 것",
      "같은 요청이 두 번 도착했을 때 서버가 중복을 알아보는 것",
    ],
    answer: 2,
    explanation:
      "재시도는 응답을 못 받았을 때 같은 트랜잭션 번호로 한 번 다시 보내는 장치라, 단건 쓰기의 중복 적용과 일시적 실패를 막는다. 성공 응답 뒤의 롤백은 write concern의 문제라 재시도와 상관없다. updateMany 같은 다건 쓰기도 대상이 아니다.",
    anchor: "재시도-가능한-쓰기가-막아-주는-것",
  },
  {
    id: "mongodb-replica-set-sharding-6",
    post: "mongodb-replica-set-sharding",
    question:
      "청크 6개가 shA에서 shB로 옮겨졌는데 shA에 직접 붙어 세면 문서 수가 그대로다. mongos로 세면 정상이다. 왜 그런가?",
    choices: [
      "청크 이동이 실패해서 롤백됐다",
      "shA의 통계가 아직 갱신되지 않았을 뿐 문서는 지워졌다",
      "옮긴 범위의 원본이 고아 문서로 남아 있고, 범위 삭제기가 기본 15분 뒤에 지우며, mongos는 지도를 보고 고아 문서를 걸러 준다",
      "shB가 문서를 복사만 하고 소유권은 shA에 남아 있다",
    ],
    answer: 2,
    explanation:
      "청크 이동은 커밋으로 소유권을 바꾼 뒤에도 진행 중인 쿼리를 위해 원본을 바로 지우지 않는다. 그동안 샤드에 직접 붙어 세거나 덤프하면 고아 문서까지 나온다. 실험에서 shA를 직접 덤프하자 orders_range가 40,000건으로 나왔다.",
    anchor: "밸런서가-청크를-옮기는-과정",
  },
  {
    id: "mongodb-replica-set-sharding-7",
    post: "mongodb-replica-set-sharding",
    question: "{ status: 1 }로 샤딩한 주문 컬렉션에서 jumbo 청크가 생겼다. 근본적인 해결책은?",
    choices: [
      "split 명령으로 paid 청크를 반으로 나눈다",
      "청크 크기를 더 작게 줄인다",
      "밸런서를 더 자주 돌린다",
      "refineCollectionShardKey로 키 뒤에 _id 같은 필드를 덧붙이거나 reshardCollection으로 다른 키로 다시 나눈다",
    ],
    answer: 3,
    explanation:
      "청크는 샤드 키 값 사이로만 나눌 수 있어서, paid 하나에 몰린 문서는 아무리 해도 쪼갤 수 없다. 실험에서도 split이 경계 키라며 거절됐다. 원인이 키라서 키를 바꿔야 한다.",
    anchor: "쪼갤-수-없는-jumbo-청크",
  },
];
