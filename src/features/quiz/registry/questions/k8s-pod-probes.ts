import type { QuizQuestion } from "../types";

export const K8S_POD_PROBES: QuizQuestion[] = [
  {
    id: "k8s-pod-probes-1",
    post: "k8s-pod-probes",
    question: "readiness probe가 연속으로 실패하면 kubelet은 무엇을 하나?",
    choices: [
      "컨테이너를 재시작한다",
      "Pod를 다른 노드로 옮긴다",
      "컨테이너는 그대로 두고 Ready를 False로 바꿔 EndpointSlice에서 뺀다",
      "Deployment를 이전 버전으로 롤백한다",
    ],
    answer: 2,
    explanation:
      "readiness는 트래픽을 받아도 되는지를 묻는 프로브라 실패해도 재시작하지 않는다. Ready 조건이 False가 되면 EndpointSlice에서 ready=false가 되고 Service가 트래픽을 보내지 않는다. 재시작은 liveness와 startup이 실패했을 때의 일이다.",
    anchor: "세-프로브는-묻는-것이-다르다",
  },
  {
    id: "k8s-pod-probes-2",
    post: "k8s-pod-probes",
    question: "DB가 잠깐 느려졌을 뿐인데 API Pod 전체가 동시에 재시작됐다. 가장 먼저 의심할 설정은?",
    choices: [
      "liveness probe 엔드포인트가 DB를 확인하고 있다",
      "readiness probe의 successThreshold가 1이다",
      "terminationGracePeriodSeconds가 30초다",
      "startupProbe가 없다",
    ],
    answer: 0,
    explanation:
      "liveness가 공유 의존성을 보면 DB 지연이 모든 Pod의 liveness 실패가 되고, kubelet이 동시에 재시작한다. 재시작은 DB 문제를 고치지 못하고 새 연결을 몰아 부하를 키운다. liveness는 프로세스 자신의 멈춤만 확인하게 한다.",
    anchor: "liveness가-db를-보면-생기는-일",
  },
  {
    id: "k8s-pod-probes-3",
    post: "k8s-pod-probes",
    question: "liveness probe에 숫자를 하나도 적지 않았다. 계속 실패하면 대략 얼마 뒤에 재시작되나?",
    choices: [
      "1초",
      "약 30초 (10초 간격 × 3번 연속 실패)",
      "약 5분",
      "재시작하지 않는다",
    ],
    answer: 1,
    explanation:
      "기본값은 periodSeconds 10, failureThreshold 3, timeoutSeconds 1이다. 판정 시간은 대략 period × failureThreshold라서 30초쯤 연속으로 실패해야 재시작한다. 실패는 연속으로만 세기 때문에 중간에 한 번 성공하면 다시 0부터 센다.",
    anchor: "숫자-다섯-개가-판정-시간을-정한다",
  },
  {
    id: "k8s-pod-probes-4",
    post: "k8s-pod-probes",
    question: "기동에 90초 걸리는 앱이 CrashLoopBackOff를 반복한다. 가장 알맞은 처방은?",
    choices: [
      "liveness의 timeoutSeconds를 90으로 늘린다",
      "readiness probe를 지운다",
      "liveness의 successThreshold를 3으로 올린다",
      "startupProbe를 두고 period × failureThreshold를 최대 기동 시간보다 넉넉하게 잡는다",
    ],
    answer: 3,
    explanation:
      "뜨는 도중에 liveness 기본값에 걸려 죽는 것이다. startupProbe가 성공할 때까지는 liveness가 시작하지 않으니 기동 시간만큼 기다려 주면서, 뜬 뒤에는 빠른 감시를 유지할 수 있다. liveness의 successThreshold는 1만 허용되어 API 서버가 거절한다.",
    anchor: "느리게-뜨는-앱에는-startupprobe",
  },
  {
    id: "k8s-pod-probes-5",
    post: "k8s-pod-probes",
    question: "새 버전 배포가 READY 0/1인 새 Pod 하나에서 멈춰 있다(maxUnavailable 0). 옛 Pod들은 어떻게 되나?",
    choices: [
      "새 Pod가 Ready가 될 때까지 그대로 남아 트래픽을 받는다",
      "progressDeadlineSeconds가 지나면 자동으로 지워진다",
      "새 Pod와 함께 모두 재시작된다",
      "쿠버네티스가 자동으로 이전 ReplicaSet으로 롤백한다",
    ],
    answer: 0,
    explanation:
      "롤링 업데이트는 새 Pod가 Ready가 되어야 옛 Pod를 줄인다. 기한이 지나면 Progressing이 False, ProgressDeadlineExceeded로 표시되고 rollout status가 실패로 끝나지만 자동 롤백은 없다. rollout undo나 배포 도구로 되돌린다.",
    anchor: "배포-중에-readiness가-하는-일",
  },
  {
    id: "k8s-pod-probes-6",
    post: "k8s-pod-probes",
    question: "readiness 이벤트에 connection refused가 찍힌다. 무엇부터 확인하나?",
    choices: [
      "timeoutSeconds가 너무 짧은지",
      "앱이 프로브 포트에서 듣고 있는지, 127.0.0.1에만 바인딩하지 않았는지",
      "DB가 살아 있는지",
      "노드의 디스크가 찼는지",
    ],
    answer: 1,
    explanation:
      "connection refused는 Pod IP의 그 포트에서 아무도 듣지 않는다는 뜻이다. 포트 번호가 바뀌었거나 앱이 localhost에만 바인딩한 경우가 흔하다. 타임아웃이 문제라면 context deadline exceeded가 찍힌다.",
    anchor: "배포-중에-readiness가-하는-일",
  },
];
