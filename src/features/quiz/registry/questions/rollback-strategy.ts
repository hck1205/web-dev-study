import type { QuizQuestion } from "../types";

export const ROLLBACK_STRATEGY: QuizQuestion[] = [
  {
    id: "rollback-strategy-1",
    post: "rollback-strategy",
    question: "새 버전 배포 직후 에러가 오르는데 원인은 아직 모른다. 일반적으로 먼저 고려할 것은?",
    choices: [
      "원인을 찾아 고친 버전을 바로 내보낸다",
      "로그를 더 모은 뒤 판단한다",
      "마지막으로 잘 돌던 버전으로 롤백한다",
      "서버를 늘려 부하를 나눈다",
    ],
    answer: 2,
    explanation:
      "롤백은 이미 검증된 결과물로 돌아가는 일이라 몇 분이면 끝나고, 원인을 몰라도 피해를 멈출 수 있다. 롤 포워드는 원인 파악과 수정, 리뷰, 파이프라인 시간이 다 들어가고 급한 수정이 두 번째 장애를 부르기도 한다.",
    anchor: "롤백할까-고쳐서-내보낼까",
  },
  {
    id: "rollback-strategy-2",
    post: "rollback-strategy",
    question: "v2와 함께 `ALTER TABLE orders RENAME COLUMN amount TO total_amount`가 나갔다. 앱만 v1로 롤백하면?",
    choices: [
      "PostgreSQL이 옛 이름을 별칭으로 남겨 두어 정상 동작한다",
      "v1의 INSERT가 column \"amount\" does not exist로 실패한다",
      "rollout undo가 스키마도 함께 되돌린다",
      "v1이 새 컬럼 이름을 자동으로 찾아 쓴다",
    ],
    answer: 1,
    explanation:
      "rollout undo는 Pod 템플릿만 되돌리고 DB는 그대로다. 이름이 바뀐 뒤에는 옛 컬럼이 없으니 v1이 실패한다. 새 컬럼을 더하기만 하는 확장 단계를 먼저 두면 롤백한 v1도 동작한다.",
    anchor: "롤백했더니-db가-맞지-않는다",
  },
  {
    id: "rollback-strategy-3",
    post: "rollback-strategy",
    question: "선물 메시지 컬럼을 더한 v2를 롤백하면서 down 마이그레이션(DROP COLUMN)을 돌렸다. 무엇이 문제인가?",
    choices: [
      "v2가 떠 있던 동안 고객이 쓴 메시지가 함께 사라진다",
      "DROP COLUMN은 PostgreSQL에서 지원되지 않는다",
      "옛 코드가 새 컬럼 때문에 실패한다",
      "아무 문제 없다. down은 롤백을 위해 있는 것이다",
    ],
    answer: 0,
    explanation:
      "down은 대개 DROP이라 그 사이 쌓인 데이터를 지운다. 실습에서 메시지 두 건이 사라졌고 다시 up해도 돌아오지 않았다. 컬럼 추가는 옛 코드가 무시하면 되므로 운영에서는 스키마를 앞으로만 가게 하는 팀이 많다.",
    anchor: "down-마이그레이션이-지우는-것",
  },
  {
    id: "rollback-strategy-4",
    post: "rollback-strategy",
    question: "메시지의 amount 형식을 숫자에서 객체로 바꾸는 변경을 롤백에 안전하게 내보내는 순서는?",
    choices: [
      "생산자를 먼저 바꾸고 소비자를 나중에 바꾼다",
      "생산자와 소비자를 같은 배포에서 동시에 바꾼다",
      "큐를 비운 뒤 생산자만 바꾼다",
      "두 형식을 모두 읽는 소비자를 먼저 배포하고, 그다음 생산자를 바꾼다",
    ],
    answer: 3,
    explanation:
      "생산자를 롤백해도 큐에 들어간 새 형식 메시지는 남는다. 소비자가 두 형식을 먼저 읽을 수 있어야 어느 쪽을 롤백해도 실패하지 않는다. 실습에서 옛 소비자는 새 형식 메시지를 읽지 못해 실패했다.",
    anchor: "큐에-남은-새-형식의-메시지",
  },
  {
    id: "rollback-strategy-5",
    post: "rollback-strategy",
    question: "SLO 99.9%인 서비스에서 배포 직후 에러율이 4.8%다. burn rate는 얼마인가?",
    choices: ["4.8", "14.4", "48", "0.48"],
    answer: 2,
    explanation:
      "burn rate는 에러율을 허용 에러율(1 - SLO = 0.1%)로 나눈 값이라 4.8 / 0.1 = 48이다. 구글 SRE 워크북이 바로 대응할 기준으로 드는 14.4를 크게 넘는다.",
    anchor: "사람보다-먼저-되돌리게-하기",
  },
  {
    id: "rollback-strategy-6",
    post: "rollback-strategy",
    question: "자동 롤백 스크립트가 되돌릴 리비전을 \"현재 번호 - 1\"로 계산한다. 무엇이 문제인가?",
    choices: [
      "리비전 번호는 0부터 시작해서 계산이 틀린다",
      "앞서 롤백이 있었다면 직전 번호가 나쁜 버전일 수 있다",
      "kubectl은 --to-revision을 지원하지 않는다",
      "리비전 번호는 무작위로 매겨진다",
    ],
    answer: 1,
    explanation:
      "되돌리기도 새 리비전을 만들어서 번호 순서가 곧 안정 순서는 아니다. 실제 도구는 배포를 시작할 때 마지막으로 안정적이던 리비전을 따로 기록해 두고 그곳으로 돌아간다.",
    anchor: "사람보다-먼저-되돌리게-하기",
  },
  {
    id: "rollback-strategy-7",
    post: "rollback-strategy",
    question: "새 버전이 새 환경 변수를 요구해 ConfigMap을 바꾸고 배포했다. rollout undo가 설정까지 되돌리게 하려면?",
    choices: [
      "revisionHistoryLimit을 0으로 둔다",
      "ConfigMap을 직접 kubectl edit으로 고친다",
      "내용 해시를 붙인 새 이름의 ConfigMap을 만들어 템플릿이 그 이름을 가리키게 한다",
      "ConfigMap을 Secret으로 바꾼다",
    ],
    answer: 2,
    explanation:
      "rollout undo는 Pod 템플릿만 되돌린다. 설정 이름에 내용 해시를 붙여 새로 만들면(configMapGenerator) 템플릿이 다른 ConfigMap을 가리키게 되어 되돌릴 때 옛 설정을 다시 가리킨다. revisionHistoryLimit을 0으로 두면 되돌릴 기록 자체가 없다.",
    anchor: "되돌리기가-실패하는-자리",
  },
];
