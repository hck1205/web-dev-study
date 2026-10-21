import type { QuizQuestion } from "../types";

export const EXTERNAL_SECRETS: QuizQuestion[] = [
  {
    id: "external-secrets-1",
    post: "external-secrets",
    question: "ExternalSecret의 STATUS, READY, LAST SYNC 칸이 모두 비어 있고 Secret도 생기지 않았다. 먼저 볼 곳은?",
    choices: [
      "remoteRef.property 오타",
      "ESO 컨트롤러 Pod가 떠 있는지",
      "Secret의 ownerReferences",
      "kubelet의 동기화 주기",
    ],
    answer: 1,
    explanation:
      "상태 칸은 컨트롤러가 채운다. 키 오타나 권한 문제라면 SecretSyncedError 같은 이유가 찍히지만, 칸이 아예 비어 있으면 일하는 쪽이 없다는 뜻이라 컨트롤러부터 본다.",
    anchor: "세-객체가-나눠-맡는-일",
  },
  {
    id: "external-secrets-2",
    post: "external-secrets",
    question: "저장소에서 비밀번호를 바꾸고 ESO가 Secret도 바꿨는데 앱은 옛 값을 쓴다. 앱이 환경 변수로 값을 받는다면 왜 그런가?",
    choices: [
      "환경 변수는 컨테이너가 뜰 때 한 번만 읽혀서 Pod를 재시작해야 바뀐다",
      "refreshInterval이 아직 지나지 않았다",
      "ESO가 환경 변수는 동기화하지 않는다",
      "deletionPolicy가 Retain이라서",
    ],
    answer: 0,
    explanation:
      "Secret이 이미 새 값이면 ESO의 일은 끝난 것이다. 환경 변수와 subPath는 실행 중인 컨테이너에 반영되지 않으니 재시작해야 하고, 그래서 옛 값을 막기 전에 재시작까지 끝내는 순서로 교체한다.",
    anchor: "refreshinterval은-앱까지-걸리는-시간이-아니다",
  },
  {
    id: "external-secrets-3",
    post: "external-secrets",
    question: "ExternalSecret 500개를 refreshInterval 1m으로 두면 생기기 쉬운 문제는?",
    choices: [
      "Secret이 immutable로 바뀐다",
      "kubelet이 Secret 볼륨을 갱신하지 못한다",
      "저장소 API 호출이 한 달 2천만 건을 넘어 요금과 호출 한도에 걸린다",
      "ExternalSecret이 CreatedOnce로 바뀐다",
    ],
    answer: 2,
    explanation:
      "500 × 하루 1440번 × 30일이면 2160만 번을 부른다. 주기는 1시간 안팎으로 두고 교체할 때만 어노테이션을 바꿔 강제 동기화하는 편이 낫다.",
    anchor: "refreshinterval은-앱까지-걸리는-시간이-아니다",
  },
  {
    id: "external-secrets-4",
    post: "external-secrets",
    question: "creationPolicy: Owner로 만든 Secret이 있는데 배포 도구에서 그 ExternalSecret이 빠졌다. Secret은 어떻게 되나?",
    choices: [
      "deletionPolicy가 Retain이라 남는다",
      "ESO가 마지막 값으로 고정한다",
      "저장소의 키도 함께 지워진다",
      "ExternalSecret이 주인이라 가비지 컬렉터가 Secret도 지운다",
    ],
    answer: 3,
    explanation:
      "Owner 정책은 Secret에 ExternalSecret을 ownerReference로 적으므로 주인이 사라지면 쿠버네티스가 Secret을 지운다. deletionPolicy는 저장소에서 키가 사라졌을 때의 동작이라 이 경우와 상관없다.",
    anchor: "만들어진-secret의-주인은-누구인가",
  },
  {
    id: "external-secrets-5",
    post: "external-secrets",
    question: "Secrets Manager가 30분간 장애일 때 새로 뜨는 Pod에 대한 설명으로 맞는 것은?",
    choices: [
      "ESO 방식과 CSI 드라이버 방식 모두 Pod가 뜨지 못한다",
      "ESO 방식은 etcd의 Secret으로 뜨지만, CSI 드라이버 방식은 볼륨을 붙이지 못해 시작이 막힌다",
      "ESO는 장애 중 Secret을 지워서 Pod가 뜨지 못한다",
      "CSI 드라이버는 캐시가 있어서 항상 뜬다",
    ],
    answer: 1,
    explanation:
      "ESO는 읽기에 실패해도 만들어 둔 Secret을 지우지 않으니 kubelet은 API 서버에서 값을 읽어 Pod를 띄운다. CSI 드라이버는 Pod가 뜰 때마다 저장소를 불러 저장소가 Pod 시작 경로에 들어온다.",
    anchor: "저장소가-죽으면-무슨-일이-생기나",
  },
  {
    id: "external-secrets-6",
    post: "external-secrets",
    question: "모든 팀이 넓은 IAM 권한의 ClusterSecretStore 하나를 함께 쓸 때 RBAC만으로 막을 수 없는 위험은?",
    choices: [
      "ESO 컨트롤러가 재시작된다",
      "Secret이 base64로 저장된다",
      "다른 팀의 비밀 키 이름을 remoteRef에 적어 자기 네임스페이스로 꺼낼 수 있다",
      "refreshInterval이 무시된다",
    ],
    answer: 2,
    explanation:
      "RBAC는 ExternalSecret을 만들 수 있는지만 보고 그 안의 키 이름은 보지 않는다. store의 conditions로 쓸 수 있는 네임스페이스를 좁히고 저장소 쪽 권한도 팀 경로로 제한해야 한다.",
    anchor: "clustersecretstore를-열어-두면-생기는-구멍",
  },
  {
    id: "external-secrets-7",
    post: "external-secrets",
    question: "외부 저장소 없이 git만으로 비밀 값을 관리하려 할 때 맞는 선택과 그 운영 포인트는?",
    choices: [
      "ESO, refreshInterval을 짧게 둔다",
      "Sealed Secrets, 컨트롤러의 봉인 키를 백업한다",
      "Secrets Store CSI Driver, syncSecret을 켠다",
      "ClusterSecretStore, conditions를 비운다",
    ],
    answer: 1,
    explanation:
      "Sealed Secrets는 클러스터 컨트롤러의 키로만 풀리는 SealedSecret을 git에 둔다. 그 키를 잃으면 모든 SealedSecret을 다시 만들어야 하니 키 백업이 핵심이다. ESO와 CSI 드라이버는 외부 저장소를 전제로 한다.",
    anchor: "csi-드라이버-sealed-secrets-sops와-나눠-보기",
  },
];
