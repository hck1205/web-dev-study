import type { QuizQuestion } from "../types";

export const K8S_POD_RESOURCES: QuizQuestion[] = [
  {
    id: "k8s-pod-resources-1",
    post: "k8s-pod-resources",
    question: "노드 CPU 사용률이 10%인데 새 Pod가 Insufficient cpu로 Pending이다. 왜 그럴까?",
    choices: [
      "kubelet이 CPU 사용률을 잘못 보고했다",
      "스케줄러는 실제 사용량이 아니라 이미 놓인 Pod들의 requests 합으로 남은 자리를 계산한다",
      "CPU limits 합이 100%를 넘었다",
      "노드의 CPU가 스로틀링되고 있다",
    ],
    answer: 1,
    explanation:
      "스케줄러는 allocatable에서 requests 합을 뺀 값에 새 Pod의 requests가 들어가는지만 본다. 실제 사용률이 낮아도 requests가 크게 잡혀 있으면 자리가 없다. limits 합은 오버커밋이 허용되어 스케줄링에 쓰이지 않는다.",
    anchor: "자리가-없으면-pending이다",
  },
  {
    id: "k8s-pod-resources-2",
    post: "k8s-pod-resources",
    question: "resources에 limits(cpu 500m, memory 512Mi)만 적고 requests는 비웠다. QoS 클래스는?",
    choices: ["BestEffort", "Burstable", "Guaranteed", "클래스가 붙지 않는다"],
    answer: 2,
    explanation:
      "requests를 비우면 API 서버가 limits와 같은 값으로 채운다. CPU와 메모리 모두 requests와 limits가 같아지므로 Guaranteed다. 반대로 사이드카 하나라도 아무것도 안 적으면 Pod 전체가 Burstable이 된다.",
    anchor: "qos-클래스는-두-숫자의-관계로-정해진다",
  },
  {
    id: "k8s-pod-resources-3",
    post: "k8s-pod-resources",
    question: "CPU limits 500m인 멀티스레드 앱의 평균 사용량은 300m인데 p99 지연이 튄다. 가장 그럴듯한 원인은?",
    choices: [
      "스레드들이 100ms 주기의 quota 50ms를 주기 초반에 다 써서 나머지 시간 동안 멈춘다",
      "메모리가 부족해 스왑을 쓰고 있다",
      "requests가 limits보다 낮아서 스케줄러가 CPU를 빼앗는다",
      "liveness probe가 너무 자주 돈다",
    ],
    answer: 0,
    explanation:
      "CFS quota는 모든 스레드의 합이라 스레드 네 개면 50ms를 12.5ms 만에 쓰고 87.5ms를 멈춘다. 평균 사용량은 낮게 보여도 순간 버스트가 잘린다. cpu.stat의 nr_throttled나 throttled_periods 메트릭으로 확인한다.",
    anchor: "cpu-limits를-넘으면-멈춰-세운다",
  },
  {
    id: "k8s-pod-resources-4",
    post: "k8s-pod-resources",
    question: "컨테이너가 마지막 로그를 아무 에러 없이 남긴 채 재시작했고 Last State가 OOMKilled, Exit Code 137이다. 맞는 설명은?",
    choices: [
      "kubelet이 유예 시간 초과로 SIGTERM을 보냈다",
      "노드 메모리가 모자라 kubelet이 Pod를 Evicted 처리했다",
      "앱이 스스로 종료 코드 137을 반환했다",
      "컨테이너가 자기 메모리 limits를 넘어 커널이 SIGKILL로 죽였다",
    ],
    answer: 3,
    explanation:
      "메모리는 회수할 방법이 없어서 limits를 넘으면 커널 OOM killer가 SIGKILL(128+9=137)을 보낸다. 프로세스는 로그를 남길 틈이 없다. Evicted는 노드 전체 압박 때의 일로, Pod가 Failed로 끝나고 다른 노드에 새로 만들어진다.",
    anchor: "메모리-limits를-넘으면-죽인다",
  },
  {
    id: "k8s-pod-resources-5",
    post: "k8s-pod-resources",
    question: "limits 2Gi인 JVM 앱이 메모리가 남는데도 OutOfMemoryError를 낸다. 무엇을 의심하나?",
    choices: [
      "컨테이너 limits가 너무 크다",
      "JVM 기본 최대 힙이 컨테이너 한도의 25%라서 힙이 512MiB에 묶여 있다",
      "CPU 스로틀링 때문에 GC가 돌지 못한다",
      "LimitRange가 힙 크기를 제한한다",
    ],
    answer: 1,
    explanation:
      "컨테이너를 인식하는 JVM은 MaxRAMPercentage 기본값 25%로 힙을 잡는다. 75% 정도로 올리되, 메타스페이스·스레드 스택·다이렉트 버퍼 몫을 남겨야 커널의 OOMKilled로 넘어가지 않는다.",
    anchor: "런타임은-limits를-모를-수-있다",
  },
  {
    id: "k8s-pod-resources-6",
    post: "k8s-pod-resources",
    question: "Deployment의 DESIRED는 3인데 CURRENT가 2이고 Pending Pod도 없다. 어디부터 보나?",
    choices: [
      "ReplicaSet의 FailedCreate 이벤트와 ResourceQuota의 Used·Hard",
      "스케줄러 로그의 FailedScheduling",
      "kubelet의 OOM 기록",
      "Service의 EndpointSlice",
    ],
    answer: 0,
    explanation:
      "ResourceQuota를 넘는 Pod는 어드미션에서 거절되어 Pod 객체조차 생기지 않는다. 그래서 Pod 목록에는 흔적이 없고, ReplicaSet 이벤트에 exceeded quota 메시지가 남는다. FailedScheduling은 Pod가 만들어진 뒤 노드를 못 찾을 때의 일이다.",
    anchor: "네임스페이스-단위로-기본값과-한도-걸기",
  },
];
