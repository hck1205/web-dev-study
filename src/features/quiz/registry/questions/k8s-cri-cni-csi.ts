import type { QuizQuestion } from "../types";

export const K8S_CRI_CNI_CSI: QuizQuestion[] = [
  {
    id: "k8s-cri-cni-csi-1",
    post: "k8s-cri-cni-csi",
    question: "crictl이 `unknown service runtime.v1.RuntimeService`로 실패한다. 무엇을 먼저 의심하나?",
    choices: [
      "kubelet이 멈췄다",
      "CNI 설정 파일이 없다",
      "소켓 너머 containerd는 떠 있지만 CRI 플러그인이 로드되지 않았다",
      "이미지 레지스트리에 접근할 수 없다",
    ],
    answer: 2,
    explanation:
      "Unimplemented는 gRPC 서버는 있는데 그 서비스가 없다는 뜻이다. containerd 로그에서 failed to load plugin을 찾아 CRI 플러그인이 왜 빠졌는지 본다. 설정의 disabled_plugins에 cri가 남아 있는 경우도 흔하다.",
    anchor: "cri-kubelet과-런타임-사이의-grpc",
  },
  {
    id: "k8s-cri-cni-csi-2",
    post: "k8s-cri-cni-csi",
    question: "새로 만든 클러스터의 노드가 모두 NotReady이고 조건 메시지에 NetworkReady=false가 보인다. 가장 가능성 높은 원인은?",
    choices: [
      "/etc/cni/net.d에 CNI 설정 파일이 아직 없다",
      "kube-proxy가 iptables 규칙을 못 만들었다",
      "CoreDNS가 아직 뜨지 않았다",
      "노드의 컨테이너 런타임이 Docker가 아니다",
    ],
    answer: 0,
    explanation:
      "런타임은 CNI 설정을 못 읽으면 NetworkReady=false(cni plugin not initialized)를 보고하고 kubelet이 노드를 NotReady로 만든다. CNI 애드온 DaemonSet이 떠서 설정 파일을 쓰면 Ready가 된다.",
    anchor: "설정-파일이-없으면-노드가-notready가-된다",
  },
  {
    id: "k8s-cri-cni-csi-3",
    post: "k8s-cri-cni-csi",
    question: "체인 마지막 플러그인이 ADD에서 실패했는데 그 뒤 노드에 IP 기록과 hostPort DNAT가 남았다. 왜인가?",
    choices: [
      "ADD가 실패하면 런타임은 DEL을 부르지 않는다",
      "DEL은 역순이라 실패한 그 플러그인부터 부르고, 거기서 또 실패해 앞쪽 플러그인이 정리되지 않았다",
      "host-local은 DEL을 지원하지 않는다",
      "portmap 규칙은 노드를 재부팅해야 지워진다",
    ],
    answer: 1,
    explanation:
      "런타임은 ADD 실패 뒤 체인을 역순으로 DEL한다. 실습에서는 없는 firewall 플러그인이 DEL 첫 순서여서 bridge, portmap, bandwidth의 흔적이 남았다. 고친 설정으로 DEL을 다시 불러 정리한다.",
    anchor: "체인-중간이-실패하면-ip가-샌다",
  },
  {
    id: "k8s-cri-cni-csi-4",
    post: "k8s-cri-cni-csi",
    question: "external-provisioner가 시간 초과 뒤 같은 PVC로 CreateVolume을 다시 불러도 디스크가 두 개 생기지 않는 이유는?",
    choices: [
      "provisioner가 재시도 전에 DeleteVolume을 먼저 부른다",
      "API 서버가 같은 PV 생성을 막는다",
      "kubelet이 중복 디스크를 지운다",
      "CSI가 요청의 name을 멱등 키로 써서 같은 이름이면 같은 볼륨을 돌려준다",
    ],
    answer: 3,
    explanation:
      "CSI 스펙은 같은 name의 CreateVolume에 같은 결과를 돌려주라고 한다. 실습에서도 두 번 부르자 같은 volumeId가 나왔고, 크기만 바꾸면 AlreadyExists로 거절됐다.",
    anchor: "csi-컨트롤러-쪽과-노드-쪽",
  },
  {
    id: "k8s-cri-cni-csi-5",
    post: "k8s-cri-cni-csi",
    question: "PVC 이벤트에 persistentvolume-controller의 `Waiting for a volume to be created either by the external provisioner` 한 줄만 계속 보인다. 무엇을 확인하나?",
    choices: [
      "노드의 CNI 설정",
      "provisioner 사이드카가 떠 있는지, StorageClass의 provisioner 이름이 드라이버 이름과 같은지",
      "kube-scheduler 로그",
      "PVC의 accessModes가 ReadWriteMany인지",
    ],
    answer: 1,
    explanation:
      "PV 컨트롤러는 CSI 볼륨을 직접 만들지 못하고 외부 provisioner를 기다린다고만 알린다. 사이드카가 그 PVC를 집었다면 From이 드라이버 이름인 Provisioning 이벤트가 따라 나온다.",
    anchor: "사이드카가-쿠버네티스-쪽-일을-맡는다",
  },
  {
    id: "k8s-cri-cni-csi-6",
    post: "k8s-cri-cni-csi",
    question: "CSI의 NodeStageVolume과 NodePublishVolume을 나눈 이유로 맞는 것은?",
    choices: [
      "stage는 노드마다 한 번(포맷, 전역 마운트), publish는 Pod마다(bind mount) 하는 일이라서",
      "stage는 컨트롤러 Pod에서, publish는 노드에서 부르기 때문에",
      "stage는 블록 볼륨에만, publish는 파일시스템 볼륨에만 쓰여서",
      "stage는 읽기 전용, publish는 쓰기 가능 마운트라서",
    ],
    answer: 0,
    explanation:
      "같은 노드의 Pod 둘이 한 디스크를 쓰면 stage는 한 번, publish는 두 번이다. 드라이버가 STAGE_UNSTAGE_VOLUME을 광고할 때만 kubelet이 stage를 부른다.",
    anchor: "csi-컨트롤러-쪽과-노드-쪽",
  },
  {
    id: "k8s-cri-cni-csi-7",
    post: "k8s-cri-cni-csi",
    question: "쿠버네티스 1.24에서 dockershim이 제거된 뒤 깨질 가능성이 가장 큰 것은?",
    choices: [
      "docker build로 만든 이미지로 띄운 Pod",
      "Docker Hub에서 받는 이미지",
      "노드의 /var/run/docker.sock을 마운트해 이미지를 빌드하던 CI Pod",
      "Dockerfile의 HEALTHCHECK를 쓰지 않는 앱",
    ],
    answer: 2,
    explanation:
      "이미지는 OCI 표준이라 containerd와 CRI-O가 그대로 쓴다. 사라진 건 노드의 Docker Engine이라 docker.sock에 기대던 도구가 깨지고, kaniko나 BuildKit 같은 소켓 없는 빌드로 옮긴다.",
    anchor: "docker는-왜-빠졌나-dockershim",
  },
];
