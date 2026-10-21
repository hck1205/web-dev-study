import type { QuizQuestion } from "../types";

export const IAM_BASICS: QuizQuestion[] = [
  {
    id: "iam-basics-1",
    post: "iam-basics",
    question:
      "한 정책에 `shop-reports/*` GetObject Allow와 `shop-reports/finance/*` 전체 Deny가 있다. Allow 문장이 위에 있으면 finance 파일을 읽을 수 있나?",
    choices: [
      "읽을 수 있다. 위에서 처음 맞은 문장을 따른다",
      "읽을 수 없다. 순서와 상관없이 맞는 Deny가 하나라도 있으면 거부다",
      "읽을 수 있다. 더 구체적인 경로의 문장이 이긴다",
      "정책 Version에 따라 다르다",
    ],
    answer: 1,
    explanation:
      "IAM은 방화벽처럼 처음 맞는 규칙을 따르지 않는다. 관련된 모든 문장을 모아 명시적 Deny가 하나라도 맞으면 거부하고, 그다음에야 Allow를 본다.",
    anchor: "거부가-언제나-이긴다",
  },
  {
    id: "iam-basics-2",
    post: "iam-basics",
    question:
      "GetObject를 읽을 수 있던 alice가 쓰기 전용 역할을 AssumeRole로 빌렸다. 빌린 세션으로 같은 파일을 읽으면?",
    choices: [
      "읽힌다. 원래 권한에 역할 권한이 더해진다",
      "읽힌다. 세션 이름에 alice가 들어 있기 때문이다",
      "막힌다. 세션은 역할의 권한으로 갈아입어 alice 사용자 정책은 판정에 들어가지 않는다",
      "막힌다. 역할을 빌리면 모든 읽기가 금지된다",
    ],
    answer: 2,
    explanation:
      "역할을 빌린 세션의 주체는 assumed-role/... ARN이고, 판정에는 역할의 정책(과 세션 정책)만 쓰인다. 실습에서도 업로드는 되고 읽기는 403이 났다.",
    anchor: "역할을-빌리는-과정",
  },
  {
    id: "iam-basics-3",
    post: "iam-basics",
    question: "조직 SCP에 `s3:*` Allow를 넣었다. 아무 정책도 없는 사용자는 S3를 쓸 수 있나?",
    choices: [
      "쓸 수 있다. SCP가 계정 전체에 권한을 준다",
      "쓸 수 없다. SCP는 상한을 긋기만 하고 허락은 자격 증명 정책이나 자원 정책이 줘야 한다",
      "관리 계정에서만 쓸 수 있다",
      "읽기만 쓸 수 있다",
    ],
    answer: 1,
    explanation:
      "SCP, 권한 경계, 세션 정책은 교집합으로 작용하는 상한이다. 허락을 주는 겹이 비어 있으면 결과는 암묵적 거부다.",
    anchor: "정책이-여러-겹일-때",
  },
  {
    id: "iam-basics-4",
    post: "iam-basics",
    question:
      "계정 A의 역할 정책은 계정 B 버킷의 GetObject를 허락하는데 AccessDenied가 난다. 가장 먼저 의심할 것은?",
    choices: [
      "계정 B의 버킷 정책이 계정 A의 역할을 허락하지 않는다",
      "역할 이름에 대문자가 들어 있다",
      "버킷이 다른 리전에 있다",
      "역할의 MaxSessionDuration이 짧다",
    ],
    answer: 0,
    explanation:
      "같은 계정이면 한쪽 허락으로 충분할 때가 많지만, 계정을 넘으면 요청한 쪽의 자격 증명 정책과 자원 쪽의 자원 기반 정책이 모두 허락해야 한다.",
    anchor: "정책이-여러-겹일-때",
  },
  {
    id: "iam-basics-5",
    post: "iam-basics",
    question:
      "\"MFA가 false면 거부\"를 `Bool` 연산자로 Deny에 걸었다. 액세스 키로 CLI를 부르는 요청은 어떻게 되나?",
    choices: [
      "MFA가 없으니 Deny에 걸려 막힌다",
      "조건 키가 요청에 없어 조건이 거짓이 되고, Deny가 맞지 않아 빠져나갈 수 있다",
      "IAM이 자동으로 MFA를 요구한다",
      "Bool 연산자는 Deny에 쓸 수 없어 정책 저장이 실패한다",
    ],
    answer: 1,
    explanation:
      "장기 액세스 키 요청에는 aws:MultiFactorAuthPresent 키가 아예 없을 수 있고, 일반 연산자는 키가 없으면 거짓이다. 거부 조건에는 키가 없을 때도 참으로 보는 BoolIfExists를 쓴다.",
    anchor: "거부가-언제나-이긴다",
  },
  {
    id: "iam-basics-6",
    post: "iam-basics",
    question:
      "EC2에 역할을 잘 붙였는데 권한이 이상하게 다르게 동작한다. 가장 먼저 할 일은?",
    choices: [
      "인스턴스를 재부팅해 메타데이터를 새로 받는다",
      "역할 정책에 `*` 권한을 잠시 붙여 본다",
      "`aws sts get-caller-identity`로 실제 요청 주체를 확인한다",
      "IMDSv1을 다시 켠다",
    ],
    answer: 2,
    explanation:
      "SDK는 환경 변수와 ~/.aws/credentials를 메타데이터보다 먼저 찾는다. 누가 남겨 둔 장기 키가 있으면 역할 대신 그 키로 요청하니, 지금 누구로 요청하는지부터 본다.",
    anchor: "서버는-자격-증명을-어디서-받나",
  },
  {
    id: "iam-basics-7",
    post: "iam-basics",
    question: "태그를 비교하는 ABAC 정책을 쓸 때 꼭 함께 통제해야 하는 것은?",
    choices: [
      "정책의 Version 값",
      "자원과 주체의 태그를 붙이거나 바꾸는 권한",
      "리전별 엔드포인트",
      "CloudTrail 로그 보관 기간",
    ],
    answer: 1,
    explanation:
      "ABAC에서는 태그가 곧 권한이라, 태그를 마음대로 바꿀 수 있으면 스스로 권한을 넓힌다. CreateTags를 막거나 aws:RequestTag, aws:TagKeys 조건으로 쓸 수 있는 태그를 제한한다.",
    anchor: "역할로-묶을까-태그로-고를까",
  },
];
