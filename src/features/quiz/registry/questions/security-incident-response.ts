import type { QuizQuestion } from "../types";

export const SECURITY_INCIDENT_RESPONSE: QuizQuestion[] = [
  {
    id: "security-incident-response-1",
    post: "security-incident-response",
    question: "AWS가 공개 저장소에서 내 액세스 키를 찾아 노출 알림을 보내고 격리용 관리형 정책을 붙였다. 이제 해야 할 일은?",
    choices: [
      "AWS가 막았으니 다음 근무일에 히스토리만 정리한다",
      "키를 직접 끄고, 그 키로 만든 다른 키·사용자·리소스를 CloudTrail에서 찾아 함께 막는다",
      "정책이 붙었으니 키를 바로 삭제해 흔적을 없앤다",
      "계정 전체의 CloudTrail을 꺼서 공격자가 로그를 보지 못하게 한다",
    ],
    answer: 1,
    explanation:
      "그 정책은 일부 위험한 동작만 막고 키를 끄지 않는다. 막히기 전에 공격자가 만든 두 번째 키나 인스턴스는 그대로 남으니 직접 끄고 파생된 자격 증명을 따라가야 한다. 키를 바로 삭제하기보다 비활성화하는 편이 되돌릴 수 있고 기록도 남는다.",
    anchor: "30분-사이에-일어난-일",
  },
  {
    id: "security-incident-response-2",
    post: "security-incident-response",
    question: "유출된 키를 Inactive로 바꾼 뒤에도 같은 IAM 사용자에게 모두 거부 정책을 붙이는 이유는?",
    choices: [
      "Inactive 상태는 몇 분 뒤 자동으로 다시 Active가 되어서",
      "거부 정책이 있어야 CloudTrail에 기록이 남아서",
      "그 키로 이미 받은 임시 자격 증명은 만료 전까지 살아 있고, 권한은 호출 때마다 사용자 정책으로 판정되기 때문에",
      "키를 끄면 정상 배포가 멈추니 대신 쓸 정책이 필요해서",
    ],
    answer: 2,
    explanation:
      "GetSessionToken으로 받은 임시 자격 증명은 원래 키를 꺼도 만료 전까지 쓸 수 있다. 그 세션의 권한은 호출할 때마다 사용자에게 붙은 정책으로 판정되므로, 모두 거부 정책을 붙이면 그 세션까지 막힌다. Inactive가 저절로 풀리지는 않는다.",
    anchor: "격리-더-번지지-않게-증거는-남기고",
  },
  {
    id: "security-incident-response-3",
    post: "security-incident-response",
    question: "CloudTrail에서 유출된 키 ID로만 검색했더니 RunInstances 한 건만 보였다. 무엇을 놓쳤을 가능성이 가장 큰가?",
    choices: [
      "공격자가 CreateAccessKey로 만든 새 키로 한 호출은 유출된 키 검색에 나오지 않는다",
      "CloudTrail은 RunInstances 말고는 기록하지 않는다",
      "읽기 전용 호출이 검색 결과를 가렸다",
      "공격자는 항상 키 하나만 쓰므로 놓친 것은 없다",
    ],
    answer: 0,
    explanation:
      "공격자는 들킨 키가 막힐 때를 대비해 새 키를 만들어 두곤 한다. 그 새 키로 한 일은 새 키의 ID로 다시 검색해야 보이고, 거기서 또 만든 것이 있으면 계속 따라가야 한다. lookup-events가 리전마다 따로 본다는 점도 함께 놓치기 쉽다.",
    anchor: "식별-진짜-사고인가-어디까지인가",
  },
  {
    id: "security-incident-response-4",
    post: "security-incident-response",
    question: "침해된 리눅스 서버에서 `ls -l /proc/15867/exe`가 `(deleted)`로 끝났다. 전원을 내리면 안 되는 이유는?",
    choices: [
      "deleted 표시는 파일 시스템이 깨졌다는 뜻이라 재부팅하면 디스크가 손상된다",
      "디스크에서는 지워졌지만 프로세스가 열고 있어 지금은 /proc에서 꺼낼 수 있고, 전원을 내리면 영영 사라진다",
      "전원을 내리면 공격자에게 자동으로 알림이 간다",
      "deleted 파일은 재부팅 뒤 /tmp로 복원되어 증거가 섞인다",
    ],
    answer: 1,
    explanation:
      "프로세스가 열고 있는 동안 커널은 지워진 파일의 내용을 놓지 않아서 /proc/PID/exe로 복사할 수 있다. 메모리에만 남은 증거는 전원을 내리는 순간 사라지기 때문에 휘발성 순서대로 먼저 모은다. 네트워크를 먼저 끊으면 피해를 막으면서 전원은 켜 둘 수 있다.",
    anchor: "서버를-바로-끄지-않는-이유",
  },
  {
    id: "security-incident-response-5",
    post: "security-incident-response",
    question: "침해된 EC2의 보안 그룹을 규칙 없는 격리용 그룹으로 바꿨는데 공격자의 셸 연결이 한동안 살아 있었다. 왜인가?",
    choices: [
      "보안 그룹 변경은 인스턴스를 재부팅해야 적용되어서",
      "격리용 그룹에도 기본 아웃바운드 허용이 남아 있어서",
      "보안 그룹은 상태를 기억하는 방화벽이라 이미 추적 중인 연결은 규칙을 바꿔도 바로 끊기지 않아서",
      "보안 그룹은 인바운드만 막고 아웃바운드는 막을 수 없어서",
    ],
    answer: 2,
    explanation:
      "보안 그룹은 stateful이라 규칙을 바꿔도 이미 추적 중인 연결은 한동안 유지될 수 있다. 상태를 기억하지 않는 네트워크 ACL에 거부 규칙을 더하면 기존 연결도 바로 막힌다. 오토스케일링 그룹에서 먼저 떼어 내지 않으면 인스턴스가 종료되어 증거가 사라지는 것도 함께 챙긴다.",
    anchor: "격리-더-번지지-않게-증거는-남기고",
  },
  {
    id: "security-incident-response-6",
    post: "security-incident-response",
    question: "석 달 전에 시작된 침입을 오늘 발견했다. 복구할 때 어제 백업으로 되돌리면 무엇이 문제인가?",
    choices: [
      "어제 백업은 암호화되어 있지 않아서",
      "백업은 데이터만 담고 설정은 담지 않아서",
      "침입 이후의 백업이라 공격자가 심어 둔 출입구도 함께 돌아온다",
      "백업에서 되돌리면 CloudTrail 기록이 지워져서",
    ],
    answer: 2,
    explanation:
      "깨끗한 상태로 되돌리려면 식별 단계에서 찾은 최초 침입 시각보다 앞선 백업이어야 한다. 침입 뒤의 백업에는 공격자의 계정이나 백도어가 그대로 들어 있다. 그래서 복구 뒤에도 찾은 흔적으로 탐지 규칙을 만들어 한동안 지켜본다.",
    anchor: "복구-깨끗한-상태로-되돌리고-지켜본다",
  },
  {
    id: "security-incident-response-7",
    post: "security-incident-response",
    question: "포스트모템에서 근본 원인을 \"개발자가 키를 커밋했다\"로 적었다. 이 분석의 문제는?",
    choices: [
      "보안 사고에는 포스트모템을 쓰지 않는 것이 원칙이라서",
      "실수가 사고가 되기까지의 다른 구멍(오래 사는 키, 넓은 권한, 열린 리전, 늦은 탐지)을 놓쳐 후속 조치가 사람 교육 하나로 끝난다",
      "근본 원인은 항상 클라우드 회사 쪽에 있기 때문에",
      "커밋한 사람의 이름을 적지 않아서",
    ],
    answer: 1,
    explanation:
      "사람의 실수는 거의 늘 생기므로, 그 실수가 사고로 번지게 한 여러 겹의 구멍을 찾아야 한다. 오래 사는 키, CI 키의 넓은 권한, 막지 않은 리전, 비밀 값 검사 부재, 결제 알림뿐인 탐지가 각각 후속 조치가 된다. 비난 없이 쓰는 것도 이 때문이다.",
    anchor: "교훈-왜-키가-저장소에-있었나",
  },
];
