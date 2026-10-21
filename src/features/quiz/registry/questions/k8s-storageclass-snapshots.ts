import type { QuizQuestion } from "../types";

export const K8S_STORAGECLASS_SNAPSHOTS: QuizQuestion[] = [
  {
    id: "k8s-storageclass-snapshots-1",
    post: "k8s-storageclass-snapshots",
    question: "운영 중인 StorageClass의 parameters에서 IOPS를 올리려고 patch했더니 field is immutable로 거절됐다. 이미 있는 디스크의 IOPS를 올리는 방법은?",
    choices: [
      "StorageClass를 지우고 같은 이름으로 다시 만든다",
      "PV의 spec.csi.volumeAttributes를 직접 고친다",
      "VolumeAttributesClass를 만들고 PVC의 volumeAttributesClassName을 바꾼다",
      "allowVolumeExpansion을 켜고 PVC 크기를 늘린다",
    ],
    answer: 2,
    explanation:
      "StorageClass의 parameters는 이미 만든 디스크와 섞이지 않게 바꿀 수 없다. 기존 디스크의 바꿀 수 있는 속성은 1.34에 GA가 된 VolumeAttributesClass로 바꾸고, 드라이버가 ControllerModifyVolume으로 그 자리에서 고친다.",
    anchor: "storageclass는-한-번-만들면-고칠-수-없다",
  },
  {
    id: "k8s-storageclass-snapshots-2",
    post: "k8s-storageclass-snapshots",
    question: "is-default-class 어노테이션이 붙은 StorageClass가 둘일 때, class를 적지 않은 새 PVC는 어떻게 되나?",
    choices: [
      "가장 최근에 만든 기본 class를 받는다",
      "API 서버가 PVC 생성을 거절한다",
      "이름순으로 앞선 class를 받는다",
      "class 없이 Pending으로 남는다",
    ],
    answer: 0,
    explanation:
      "기본 class를 갈아타는 동안 끊김이 없게 둘 이상을 허용하고, 그때는 가장 최근 것을 쓴다. 실습에서도 나중에 만든 Retain class가 조용히 선택됐으니 기본 class는 하나만 둔다.",
    anchor: "storageclass는-한-번-만들면-고칠-수-없다",
  },
  {
    id: "k8s-storageclass-snapshots-3",
    post: "k8s-storageclass-snapshots",
    question: "새 노드 그룹에서만 PVC가 error generating accessibility requirements: no available topology found로 실패한다. 먼저 볼 것은?",
    choices: [
      "StorageClass의 reclaimPolicy",
      "PVC의 접근 모드",
      "VolumeSnapshotClass의 deletionPolicy",
      "그 노드들에 CSI 노드 플러그인 DaemonSet이 떠서 CSINode에 드라이버가 등록됐는지",
    ],
    answer: 3,
    explanation:
      "provisioner는 CSINode에 등록된 드라이버의 토폴로지 키로 디스크를 만들 곳을 정한다. taint 때문에 노드 플러그인이 안 뜨면 등록이 없어 이 메시지가 나오니 kubectl get csinode의 DRIVERS 칸을 본다.",
    anchor: "프로비저너가-디스크를-만드는-길",
  },
  {
    id: "k8s-storageclass-snapshots-4",
    post: "k8s-storageclass-snapshots",
    question: "VolumeSnapshotContent는 생겼는데 READYTOUSE가 계속 false다. 원인으로 가장 가능성이 낮은 것은?",
    choices: [
      "드라이버 Pod에 csi-snapshotter 사이드카가 없다",
      "snapshot-controller가 설치돼 있지 않다",
      "VolumeSnapshotClass의 driver가 PVC를 만든 드라이버와 다르다",
      "드라이버에 스냅샷을 만들 클라우드 권한이 없다",
    ],
    answer: 1,
    explanation:
      "Content를 만드는 게 snapshot-controller라서, Content가 있다면 컨트롤러는 동작한 것이다. 그다음 단계인 CreateSnapshot 호출은 사이드카와 드라이버 몫이라 사이드카, class의 driver, 권한을 본다.",
    anchor: "스냅샷은-crd와-컨트롤러-둘이-만든다",
  },
  {
    id: "k8s-storageclass-snapshots-5",
    post: "k8s-storageclass-snapshots",
    question: "restoreSize가 1Gi인 스냅샷으로 512Mi PVC를 만들면 어떻게 되나?",
    choices: [
      "512Mi로 잘라서 복원한다",
      "자동으로 1Gi로 늘려 만든다",
      "requested volume size가 스냅샷보다 작다는 ProvisioningFailed와 함께 Pending에 머문다",
      "API 서버가 PVC 생성 자체를 거절한다",
    ],
    answer: 2,
    explanation:
      "복원할 PVC는 스냅샷의 restoreSize 이상이어야 하고, provisioner가 이를 확인해 이벤트로 남긴다. 더 크게 복원하는 것은 되므로 요청 크기를 restoreSize 이상으로 고친다.",
    anchor: "스냅샷에서-되살리기",
  },
  {
    id: "k8s-storageclass-snapshots-6",
    post: "k8s-storageclass-snapshots",
    question: "운영 네임스페이스의 스냅샷으로 staging 네임스페이스에 PVC를 만들고 싶다. 1.37 기준 정식 기능만으로 하는 방법은?",
    choices: [
      "dataSource에 namespace 필드를 적는다",
      "Retain으로 남긴 스냅샷의 snapshotHandle로 VolumeSnapshotContent를 만들고 staging의 VolumeSnapshot과 짝지운다",
      "ReferenceGrant만 만들면 dataSource가 다른 네임스페이스를 본다",
      "VolumeSnapshot을 kubectl edit으로 staging 네임스페이스로 옮긴다",
    ],
    answer: 1,
    explanation:
      "dataSource는 같은 네임스페이스만 보고, dataSourceRef와 ReferenceGrant로 넘나드는 CrossNamespaceVolumeDataSource는 아직 알파다. 그래서 관리자가 스토리지의 스냅샷 ID로 Content를 미리 만들어 대상 네임스페이스에 연결한다.",
    anchor: "스냅샷에서-되살리기",
  },
  {
    id: "k8s-storageclass-snapshots-7",
    post: "k8s-storageclass-snapshots",
    question: "데이터와 WAL을 다른 볼륨에 둔 DB를 볼륨별 VolumeSnapshot으로 따로 찍으면 생길 수 있는 문제는?",
    choices: [
      "두 스냅샷의 시점이 어긋나 데이터에는 있고 WAL에는 없는 변경이 담길 수 있다",
      "두 번째 스냅샷이 첫 번째를 덮어쓴다",
      "WAL 볼륨은 스냅샷을 찍을 수 없다",
      "스냅샷이 원본 PVC를 잠가 DB가 멈춘다",
    ],
    answer: 0,
    explanation:
      "볼륨마다 찍는 순간이 몇 초씩 달라 함께 복원하면 DB가 설명할 수 없는 조합이 된다. 1.36에 GA가 된 VolumeGroupSnapshot은 라벨로 고른 PVC들을 스토리지가 한 시점에 찍는다.",
    anchor: "여러-볼륨을-같은-순간에-찍기",
  },
];
