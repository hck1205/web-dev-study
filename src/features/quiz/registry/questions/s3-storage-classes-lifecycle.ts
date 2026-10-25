import type { QuizQuestion } from "../types";

export const S3_STORAGE_CLASSES_LIFECYCLE: QuizQuestion[] = [
  {
    id: "s3-storage-classes-lifecycle-1",
    post: "s3-storage-classes-lifecycle",
    question: "평균 20KB인 로그 객체 천만 개를 Standard에서 Standard-IA로 옮기면 월 보관 요금은 어떻게 되나?",
    choices: [
      "IA 단가가 절반 가까이 싸니 거의 절반으로 준다",
      "128KB 최소 과금 때문에 오히려 세 배 넘게 오르고, 전환 요청 요금도 따로 낸다",
      "작은 객체는 IA에서 무료로 보관된다",
      "변화가 없다. IA는 꺼낼 때만 요금이 다르다",
    ],
    answer: 1,
    explanation:
      "IA는 128KB 미만 객체도 128KB로 쳐서 받는다. 계산하면 월 4.39달러가 15.26달러가 되고, 객체 1,000개당 전환 요금으로 100달러를 더 낸다. 작은 객체는 등급을 옮기기보다 묶어서 수를 줄인다.",
    anchor: "작은-객체를-ia로-옮기면-오히려-비싸진다",
  },
  {
    id: "s3-storage-classes-lifecycle-2",
    post: "s3-storage-classes-lifecycle",
    question: "버전 관리를 켠 버킷에서 버전 ID 없이 DELETE를 보냈다. 실제로 일어나는 일은?",
    choices: [
      "모든 버전이 영구히 지워진다",
      "현재 버전만 지워지고 이전 버전이 현재 버전이 된다",
      "요청이 거절된다",
      "삭제 마커가 현재 버전으로 생기고, 이전 버전들은 그대로 남아 요금을 낸다",
    ],
    answer: 3,
    explanation:
      "버전 관리 버킷에서 단순 DELETE는 삭제 마커를 쌓을 뿐 데이터를 지우지 않는다. GET은 404가 나지만 이전 버전은 남아 있어서, 마커를 버전 ID로 지우면 되살릴 수 있다.",
    anchor: "버전-관리를-켜면-삭제가-바뀐다",
  },
  {
    id: "s3-storage-classes-lifecycle-3",
    post: "s3-storage-classes-lifecycle",
    question: "aws s3 ls --summarize의 합계는 100GB인데 청구서의 보관 용량은 600GB다. 가장 먼저 의심할 것은?",
    choices: [
      "이전 버전과 끝나지 않은 멀티파트 업로드 조각",
      "CloudFront 캐시 용량",
      "버킷 정책이 너무 길다",
      "객체 메타데이터의 크기",
    ],
    answer: 0,
    explanation:
      "ls 합계는 현재 버전만 센다. 이전 버전과 합쳐지지 않은 멀티파트 조각은 목록에 보이지 않지만 보관 요금을 낸다. NoncurrentVersionExpiration과 AbortIncompleteMultipartUpload 규칙으로 정리한다.",
    anchor: "미완료-멀티파트-조각은-보이지-않는-곳에서-돈을-낸다",
  },
  {
    id: "s3-storage-classes-lifecycle-4",
    post: "s3-storage-classes-lifecycle",
    question: "감사 요청이 오면 하루 안에만 주면 되는 3년치 로그를 둘 등급과, 장애 분석에 바로 읽어야 하는 지난달 로그를 둘 등급의 짝으로 알맞은 것은?",
    choices: [
      "둘 다 Deep Archive",
      "3년치는 Standard, 지난달은 Deep Archive",
      "3년치는 Deep Archive, 지난달은 Standard-IA나 Glacier Instant Retrieval",
      "둘 다 Glacier Flexible Retrieval Expedited",
    ],
    answer: 2,
    explanation:
      "Deep Archive는 복원에 12~48시간이 걸리지만 보관이 가장 싸서 하루 안에 주면 되는 장기 보관에 맞다. 바로 읽어야 하는 데이터는 밀리초 안에 읽히는 IA나 Glacier IR에 둔다.",
    anchor: "glacier에서-꺼내는-데는-시간이-걸린다",
  },
  {
    id: "s3-storage-classes-lifecycle-5",
    post: "s3-storage-classes-lifecycle",
    question: "Object Lock Compliance 모드로 3년 보존을 건 객체 버전에 대해 맞는 설명은?",
    choices: [
      "루트 사용자는 언제든 지울 수 있다",
      "s3:BypassGovernanceRetention 권한이 있으면 지울 수 있다",
      "보존 기간을 줄이는 것은 되고 늘리는 것은 안 된다",
      "루트를 포함해 누구도 기간 전에 지우거나 기간을 줄일 수 없고, 늘리는 것만 된다",
    ],
    answer: 3,
    explanation:
      "Compliance 모드는 기간이 끝나기 전에는 아무도 우회할 수 없다. 우회 권한으로 풀 수 있는 것은 Governance 모드다. 잘못 걸면 그 기간 요금을 피할 수 없으니 짧게 시험하고 늘린다.",
    anchor: "지울-수-없게-잠그기-object-lock",
  },
  {
    id: "s3-storage-classes-lifecycle-6",
    post: "s3-storage-classes-lifecycle",
    question: "Intelligent-Tiering에 128KB보다 작은 객체를 넣으면 어떻게 되나?",
    choices: [
      "모니터링하지 않고 모니터링 요금도 없이 늘 Frequent 층에 머문다",
      "128KB로 쳐서 모니터링 요금을 받는다",
      "30일 뒤 자동으로 Deep Archive로 간다",
      "업로드가 거절된다",
    ],
    answer: 0,
    explanation:
      "작은 객체는 모니터링 대상에서 빠져 요금이 없지만 아래 층으로 내려가지도 않는다. 결국 Standard와 같은 셈이라, 작은 객체가 많은 버킷에서는 Intelligent-Tiering으로 아끼는 돈이 거의 없다.",
    anchor: "intelligent-tiering이-알아서-옮겨-주는-것",
  },
  {
    id: "s3-storage-classes-lifecycle-7",
    post: "s3-storage-classes-lifecycle",
    question: "Glacier IR로 옮긴 지 30일 만에 Deep Archive로 다시 옮기는 수명 주기 규칙의 문제는?",
    choices: [
      "Deep Archive로는 수명 주기로 옮길 수 없다",
      "Glacier IR의 최소 보관 기간 90일 중 남은 60일 요금을 한 번에 낸다",
      "객체가 Standard로 되돌아간다",
      "복원 신청이 자동으로 걸린다",
    ],
    answer: 1,
    explanation:
      "싼 등급에는 최소 보관 기간이 있어서 그 전에 옮기거나 지우면 남은 기간 요금이 청구된다. 다음 전환 날짜는 앞 등급의 최소 기간을 채우게 잡는다.",
    anchor: "수명-주기-규칙-한-장을-뜯어본다",
  },
];
