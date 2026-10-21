import type { QuizQuestion } from "../types";

export const K8S_CRD: QuizQuestion[] = [
  {
    id: "k8s-crd-1",
    post: "k8s-crd",
    question: "`kubectl apply --validate=false`로 스키마에 없는 `spec.retentionDay`를 넣은 Backup을 저장했다. 저장된 객체는 어떻게 되나?",
    choices: [
      "retentionDay가 그대로 저장되고 컨트롤러가 읽는다",
      "retentionDay는 잘려 나가고 스키마가 아는 칸만 남는다",
      "저장은 되지만 Backup이 Invalid 상태로 표시된다",
      "API 서버가 retentionDays로 이름을 고쳐 저장한다",
    ],
    answer: 1,
    explanation:
      "구조적 스키마가 있는 CRD는 스키마에 없는 칸을 pruning으로 버린다. 검사를 끄면 거절되지 않을 뿐 오타 칸은 조용히 사라지고, 설정이 안 먹는 증상만 남는다.",
    anchor: "모르는-필드는-잘려-나간다",
  },
  {
    id: "k8s-crd-2",
    post: "k8s-crd",
    question: "status 서브리소스를 켠 CRD에서 컨트롤러가 본 경로로 status를 PATCH했더니 `patched (no change)`가 나왔다. 왜인가?",
    choices: [
      "status 스키마가 틀려서 검사에 걸렸다",
      "컨트롤러에게 backups 권한이 없다",
      "status 서브리소스를 켜면 본 경로의 status 변경은 무시되고 /status로 써야 한다",
      "resourceVersion이 달라서 409가 났다",
    ],
    answer: 2,
    explanation:
      "서브리소스를 켜면 본 경로로 보낸 status 변경은 버려지고 /status로 보낸 spec 변경도 버려진다. 오류 없이 조용히 무시되기 때문에 컨트롤러 개발 초기에 자주 헤매는 지점이다.",
    anchor: "status는-따로-쓰는-문-서브리소스",
  },
  {
    id: "k8s-crd-3",
    post: "k8s-crd",
    question: "`self.database == oldSelf.database` 규칙을 넣었는데 새 Backup을 만들 때는 아무 문제가 없었다. 이유로 맞는 것은?",
    choices: [
      "oldSelf를 쓰는 전이 규칙은 비교할 이전 값이 없는 생성 때 평가하지 않는다",
      "CEL 규칙은 수정 요청에만 적용된다",
      "생성 때는 database가 비어 있어서 규칙이 참이 된다",
      "kubectl apply는 CEL 규칙을 건너뛴다",
    ],
    answer: 0,
    explanation:
      "oldSelf를 참조하는 규칙은 전이 규칙이라 업데이트에서만 돈다. self만 쓰는 일반 규칙은 생성 때도 평가된다.",
    anchor: "필드-사이-규칙은-cel로",
  },
  {
    id: "k8s-crd-4",
    post: "k8s-crd",
    question: "CRD에 `estimated rule cost exceeds budget` 오류가 났다. 가장 먼저 할 일은?",
    choices: [
      "규칙을 검증 웹훅으로 옮긴다",
      "API 서버의 CEL 비용 한도를 늘린다",
      "규칙을 x-kubernetes-preserve-unknown-fields 칸으로 옮긴다",
      "규칙이 도는 배열과 문자열에 maxItems, maxLength 같은 상한을 둔다",
    ],
    answer: 3,
    explanation:
      "API 서버는 CRD를 받을 때 최악의 실행 비용을 어림하는데, 길이 제한 없는 배열과 문자열이 그 어림을 키운다. 실습에서도 maxItems와 maxLength를 붙이자 같은 규칙이 통과했다.",
    anchor: "필드-사이-규칙은-cel로",
  },
  {
    id: "k8s-crd-5",
    post: "k8s-crd",
    question: "v1alpha1(db 칸)과 v1(database 칸)을 함께 둔 CRD를 conversion strategy None으로 두고 v1alpha1 객체를 만들었다. 저장 버전이 v1이면 어떻게 되나?",
    choices: [
      "API 서버가 칸 이름을 추측해 database로 옮긴다",
      "apiVersion만 바뀌고 db 칸은 v1 스키마에 없어 잘려 나간다",
      "저장 버전이 다르면 생성 자체가 거절된다",
      "v1alpha1 모양 그대로 etcd에 저장된다",
    ],
    answer: 1,
    explanation:
      "None 전략은 apiVersion 글자만 바꾼다. 실습에서 v1으로 읽으니 기본값만 남았고 v1alpha1로 다시 읽으면 spec이 비어 있었다. 칸 모양이 다르면 변환 웹훅이 필요하다.",
    anchor: "버전을-두-개-두면",
  },
  {
    id: "k8s-crd-6",
    post: "k8s-crd",
    question: "`kubectl get backups.v1alpha1...`만 `StorageReadError ... conversion webhook failed`로 실패하고 v1 목록은 잘 나온다. 무엇을 먼저 보나?",
    choices: [
      "etcd 데이터가 깨졌으니 스냅숏에서 복구한다",
      "CRD의 printer columns 설정",
      "변환 웹훅 Pod와 Service 엔드포인트, 인증서와 caBundle",
      "kubectl 버전과 API 서버 버전 차이",
    ],
    answer: 2,
    explanation:
      "저장 버전(v1)으로 읽을 때는 변환이 없어 웹훅이 죽어도 멀쩡하다. 다른 버전으로 읽을 때만 웹훅이 필요하니, corrupt object라는 말과 달리 데이터가 아니라 웹훅을 본다.",
    anchor: "버전을-두-개-두면",
  },
  {
    id: "k8s-crd-7",
    post: "k8s-crd",
    question: "옛 저장 버전 v1alpha1을 CRD에서 빼려는데 `must remain in spec.versions until a storage migration...`으로 거절됐다. 올바른 순서는?",
    choices: [
      "모든 객체를 다시 써서 저장 버전으로 옮긴 뒤 storedVersions에서 v1alpha1을 지우고 버전을 뺀다",
      "storedVersions에서 v1alpha1을 먼저 지우고 버전을 뺀다",
      "CRD를 지우고 v1만 있는 CRD로 다시 만든다",
      "v1alpha1의 served를 false로 바꾸면 바로 뺄 수 있다",
    ],
    answer: 0,
    explanation:
      "etcd에 v1alpha1로 남은 객체가 있을 수 있어서 API 서버가 막는다. 객체를 읽어 다시 쓰면 현재 저장 버전으로 저장되고, 그다음 storedVersions를 정리해야 옛 버전을 뺄 수 있다. CRD를 지우는 건 모든 CR을 지우는 일이다.",
    anchor: "저장-버전-옮기기-storedversions",
  },
];
