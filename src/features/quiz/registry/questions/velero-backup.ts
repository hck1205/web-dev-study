import type { QuizQuestion } from "../types";

export const VELERO_BACKUP: QuizQuestion[] = [
  {
    id: "velero-backup-1",
    post: "velero-backup",
    question: "EKS에서 shop 네임스페이스 하나만 어제 상태로 되살리고 싶다. Velero가 etcd 스냅숏보다 맞는 이유는?",
    choices: [
      "Velero는 etcd 바이트를 더 빠르게 복사하기 때문",
      "API 서버에 객체를 물어 JSON으로 묶어 두므로 네임스페이스 단위로 뜨고 되살릴 수 있고, EKS는 etcd에 접근할 수 없기 때문",
      "Velero 백업은 클러스터 전체의 한 순간을 정확히 잡기 때문",
      "Velero는 더 낮은 쿠버네티스 버전으로도 복원할 수 있기 때문",
    ],
    answer: 1,
    explanation:
      "etcd 스냅숏은 키공간 전체를 되돌려 다른 네임스페이스의 변경까지 잃고, 관리형 클러스터에서는 뜰 수조차 없다. Velero는 한 시점을 보장하지 않고 더 낮은 버전으로의 복원도 지원하지 않는다.",
    anchor: "etcd-스냅숏과-무엇이-다른가",
  },
  {
    id: "velero-backup-2",
    post: "velero-backup",
    question: "새 DR 클러스터에 Velero를 깔고 운영과 같은 버킷·prefix를 BSL로 붙였더니 운영 백업 목록이 보인다. 왜 그런가?",
    choices: [
      "Velero가 운영 클러스터의 API 서버에 직접 접속하기 때문",
      "etcd 데이터가 버킷에 함께 들어 있기 때문",
      "버킷을 진실의 원천으로 삼아, 버킷에 있는 백업을 클러스터의 Backup 객체로 동기화하기 때문",
      "두 클러스터가 같은 velero 네임스페이스를 공유하기 때문",
    ],
    answer: 2,
    explanation:
      "Velero는 버킷의 올바른 백업 파일에 맞춰 Backup 객체를 만들고, 파일이 없어진 Completed 객체는 지운다. 그래서 복원하는 쪽은 ReadOnly로 붙여 실수로 지우거나 덮어쓰지 않게 한다.",
    anchor: "백업이-쌓이는-곳-backupstoragelocation",
  },
  {
    id: "velero-backup-3",
    post: "velero-backup",
    question: "velero backup create가 'submitted successfully'를 찍었는데 STATUS가 계속 New다. 먼저 볼 것은?",
    choices: [
      "velero 서버 Pod가 떠 있는지와 그 로그",
      "백업 버킷의 Object Lock 설정",
      "kopia 저장소 비밀번호",
      "대상 네임스페이스의 PDB",
    ],
    answer: 0,
    explanation:
      "CLI는 Backup 객체를 만들 뿐이고 실제 작업은 서버의 BackupController가 한다. New에서 움직이지 않으면 서버가 없거나 죽어 있는 경우가 대부분이라 kubectl -n velero get pods와 로그부터 본다.",
    anchor: "백업-하나-그리고-매일-밤의-스케줄",
  },
  {
    id: "velero-backup-4",
    post: "velero-backup",
    question: "--schedule=\"0 18 * * *\"로 만든 Velero 스케줄은 한국 시각으로 언제 도나?",
    choices: [
      "매일 18시",
      "매일 09시",
      "매일 06시",
      "매일 03시",
    ],
    answer: 3,
    explanation:
      "--schedule은 UTC 기준이라 18시 UTC는 한국 시각(UTC+9) 03시다. 헷갈리면 CRON_TZ=Asia/Seoul을 앞에 붙여 지역 시각으로 적을 수 있다.",
    anchor: "백업-하나-그리고-매일-밤의-스케줄",
  },
  {
    id: "velero-backup-5",
    post: "velero-backup",
    question: "EBS 볼륨을 쓰는 앱을 다른 리전의 DR 클러스터에서 되살려야 한다. 볼륨 백업 방식으로 가장 맞는 것은?",
    choices: [
      "VolumeSnapshotLocation의 EBS 스냅숏만 쓴다",
      "볼륨은 백업하지 않고 객체만 뜬다",
      "CSI 스냅숏을 찍고 --snapshot-move-data로 데이터를 BSL 버킷으로 옮긴다",
      "hostPath로 마운트해 파일 시스템 백업을 쓴다",
    ],
    answer: 2,
    explanation:
      "EBS 스냅숏은 리전과 계정에 묶여 다른 리전에서 쓸 수 없다. 데이터 이동은 스냅숏으로 한 시점을 잡은 뒤 데이터를 버킷으로 옮겨 일관성과 독립성을 함께 얻는다. hostPath 볼륨은 FSB가 지원하지 않는다.",
    anchor: "볼륨을-백업하는-세-가지-길",
  },
  {
    id: "velero-backup-6",
    post: "velero-backup",
    question: "Velero로 복원했는데 남아 있던 Deployment가 백업 내용으로 바뀌지 않았고 Warnings에 already exists가 찍혔다. 왜 그런가?",
    choices: [
      "기본 --existing-resource-policy가 none이라 이미 있는 객체는 덮어쓰지 않고 건너뛰기 때문",
      "Deployment는 Velero가 복원하지 않는 리소스이기 때문",
      "namespace-mappings를 주지 않으면 복원이 실패하기 때문",
      "백업이 PartiallyFailed였기 때문",
    ],
    answer: 0,
    explanation:
      "Velero 복원은 기본적으로 파괴적이지 않아 같은 이름의 객체가 있으면 건너뛰고 경고를 남긴다. 백업 내용으로 고치려면 --existing-resource-policy update를 준다.",
    anchor: "다른-이름으로-되살리기",
  },
  {
    id: "velero-backup-7",
    post: "velero-backup",
    question: "--namespace-mappings shop:shop-test로 테스트 복원을 했다. 그대로 두면 위험할 수 있는 것은?",
    choices: [
      "PVC가 원래 네임스페이스에 만들어진다",
      "Secret이 복원되지 않는다",
      "ConfigMap 속 서비스 주소나 Ingress 호스트처럼 값 안에 박힌 이름은 바뀌지 않아 운영 리소스를 가리키거나 가로챌 수 있다",
      "Pod가 운영 노드에 스케줄되지 않는다",
    ],
    answer: 2,
    explanation:
      "매핑은 객체의 namespace 필드만 바꾼다. 값 안의 web.shop.svc 같은 주소, ClusterRoleBinding의 subjects, Ingress 호스트는 그대로라 Ingress는 빼고 복원하고 설정값을 확인한다.",
    anchor: "다른-이름으로-되살리기",
  },
];
