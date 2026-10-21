import type { QuizQuestion } from "../types";

export const K8S_PV_PVC: QuizQuestion[] = [
  {
    id: "k8s-pv-pvc-1",
    post: "k8s-pv-pvc",
    question: "5Gi를 요청한 PVC가 10Gi PV에 묶였다. kubectl get pvc의 CAPACITY와 남는 5Gi는 어떻게 되나?",
    choices: [
      "CAPACITY는 5Gi이고 남는 5Gi는 다른 PVC가 쓸 수 있다",
      "CAPACITY는 10Gi이고 PV는 쪼개지지 않으니 남는 공간은 다른 PVC가 쓸 수 없다",
      "크기가 달라서 묶이지 않고 Pending에 남는다",
      "PV가 자동으로 5Gi로 줄어든다",
    ],
    answer: 1,
    explanation:
      "PVC와 PV는 일대일로 묶이고 PV는 나뉘지 않는다. 그래서 PVC는 PV의 실제 크기 10Gi를 보여 주고 남는 공간은 묶인 PVC만 쓴다. PV 컨트롤러가 조건에 맞는 PV 중 가장 작은 것을 고르는 이유이기도 하다.",
    anchor: "미리-만든-pv에-pvc가-묶이는-과정",
  },
  {
    id: "k8s-pv-pvc-2",
    post: "k8s-pv-pvc",
    question: "EBS 같은 블록 디스크용 StorageClass에 volumeBindingMode: WaitForFirstConsumer를 쓰는 이유는?",
    choices: [
      "디스크 생성 비용을 아끼려고 Pod가 Ready가 된 뒤에 만든다",
      "PVC가 여러 노드에서 동시에 붙을 수 있게 하려고",
      "스케줄러가 Pod의 노드를 고른 뒤 그 노드의 존에 디스크를 만들게 하려고",
      "PVC를 지울 때 디스크를 남기려고",
    ],
    answer: 2,
    explanation:
      "EBS는 한 가용 영역에만 만들어지고 같은 존의 노드에만 붙는다. Immediate면 Pod가 갈 곳을 모른 채 디스크를 만들어 다른 존에 생길 수 있다. WaitForFirstConsumer는 selected-node가 정해진 뒤 그 존에 만든다.",
    anchor: "노드가-정해진-뒤에-디스크를-만든다",
  },
  {
    id: "k8s-pv-pvc-3",
    post: "k8s-pv-pvc",
    question: "노드 교체 중 Postgres Pod가 0/2 nodes are available: 1 node(s) had volume node affinity conflict로 Pending이다. 먼저 의심할 것은?",
    choices: [
      "PV가 묶인 존에 Pod를 받을 수 있는 노드가 없다",
      "PVC의 접근 모드가 RWX가 아니다",
      "StorageClass의 reclaimPolicy가 Delete다",
      "노드의 CPU requests가 모자라다",
    ],
    answer: 0,
    explanation:
      "PV의 nodeAffinity가 디스크의 존으로 묶여 있어서 다른 존의 노드는 자원이 남아도 걸러진다. 그 존의 노드가 cordon됐거나 없어진 것이다. 존마다 노드 그룹을 나눠 오토스케일러가 그 존에 노드를 띄울 수 있게 한다.",
    anchor: "디스크가-다른-존에-있으면-pod가-못-간다",
  },
  {
    id: "k8s-pv-pvc-4",
    post: "k8s-pv-pvc",
    question: "회수 정책이 Retain인 PV에 묶인 PVC를 지우고 같은 이름으로 다시 만들었다. 무슨 일이 일어나나?",
    choices: [
      "같은 이름이니 옛 PV에 다시 묶여 데이터가 그대로 보인다",
      "Retain이라 PVC 삭제 자체가 거절된다",
      "옛 PV가 자동으로 Available로 돌아가 다시 묶인다",
      "옛 PV는 Released로 남고 claimRef의 uid가 달라 묶이지 않으며, 새 PVC는 다른 빈 PV나 새 디스크에 묶인다",
    ],
    answer: 3,
    explanation:
      "Released PV의 claimRef에는 지워진 PVC의 uid가 남아 있어 같은 이름의 새 PVC를 다른 객체로 본다. 실습에서도 새 PVC가 빈 pv-spare-10g에 묶였다. 되찾으려면 PV의 claimRef를 지우고 PVC에 volumeName으로 지정한다.",
    anchor: "pvc를-지우면-디스크는-어떻게-되나",
  },
  {
    id: "k8s-pv-pvc-5",
    post: "k8s-pv-pvc",
    question: "RWO PVC 하나를 쓰는 Deployment를 롤링 업데이트했더니 새 Pod가 Multi-Attach error로 ContainerCreating에 멈췄다. 알맞은 대처는?",
    choices: [
      "PVC의 accessModes를 ReadWriteMany로 바꾸면 EBS가 공유된다",
      "replicas를 늘려 새 Pod가 먼저 Ready가 되게 한다",
      "strategy를 Recreate로 바꾸거나 StatefulSet으로 옮겨 옛 Pod가 디스크를 먼저 놓게 한다",
      "pvc-protection 파이널라이저를 떼어 낸다",
    ],
    answer: 2,
    explanation:
      "디스크가 옛 Pod의 노드에 붙어 있는 동안 다른 노드의 새 Pod는 붙일 수 없고, 롤링 업데이트는 새 Pod가 Ready가 돼야 옛 Pod를 내리니 서로 기다린다. Recreate는 옛 Pod를 먼저 내린다. EBS는 RWX를 지원하지 않는다.",
    anchor: "현장에서-볼륨-때문에-pod가-안-뜰-때",
  },
  {
    id: "k8s-pv-pvc-6",
    post: "k8s-pv-pvc",
    question: "PVC를 50Gi로 늘렸는데 spec은 50Gi, status.capacity는 20Gi에서 멈춰 있고 ExternalExpanding 이벤트만 남는다. 무엇을 봐야 하나?",
    choices: [
      "PVC를 다시 20Gi로 줄였다가 늘린다",
      "디스크를 키울 CSI 드라이버(resizer)가 동작하는지와 클라우드 권한을 본다",
      "StatefulSet의 volumeClaimTemplates를 고친다",
      "PV의 회수 정책을 Retain으로 바꾼다",
    ],
    answer: 1,
    explanation:
      "확장은 CSI 드라이버의 resizer가 클라우드 디스크를 키우고 노드에서 파일 시스템까지 늘려야 끝난다. ExternalExpanding은 그 외부 컨트롤러를 기다린다는 뜻이다. PVC 크기는 줄일 수 없어서 줄이는 요청은 거절된다.",
    anchor: "용량-늘리기",
  },
];
