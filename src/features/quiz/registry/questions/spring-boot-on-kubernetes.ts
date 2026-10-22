import type { QuizQuestion } from "../types";

export const SPRING_BOOT_ON_KUBERNETES: QuizQuestion[] = [
  {
    id: "spring-boot-on-kubernetes-1",
    post: "spring-boot-on-kubernetes",
    question:
      "결제사 연동이 느려지자 모든 orders Pod가 재시작을 반복했다. liveness 프로브 경로로 가장 의심되는 것은?",
    choices: [
      "/actuator/health/liveness",
      "/livez",
      "/actuator/health",
      "/actuator/health/readiness",
    ],
    answer: 2,
    explanation:
      "/actuator/health는 결제사 같은 의존성 지표까지 합친 값이라 외부 하나가 DOWN이면 503이 된다. 여기에 liveness를 걸면 kubelet이 모든 Pod를 재시작하지만 원인이 바깥에 있어 낫지 않는다. liveness 그룹과 /livez는 기본으로 앱 자신의 LivenessState만 본다.",
    anchor: "결제사가-느려졌다고-pod를-죽이면-안-된다",
  },
  {
    id: "spring-boot-on-kubernetes-2",
    post: "spring-boot-on-kubernetes",
    question:
      "여러 Pod가 함께 쓰는 결제사 헬스 지표를 readiness 그룹에 include하면 결제사 장애 때 어떻게 되나?",
    choices: [
      "결제 API만 실패하고 나머지는 정상이다",
      "모든 Pod가 동시에 준비 안 됨이 되어 Service 뒤가 비고, 결제와 상관없는 요청까지 실패한다",
      "kubelet이 Pod를 하나씩 순서대로 재시작한다",
      "스프링이 자동으로 서킷 브레이커를 연다",
    ],
    answer: 1,
    explanation:
      "readiness 실패는 재시작이 아니라 엔드포인트에서 빼는 동작이다. 모든 Pod가 같은 외부 시스템을 보니 한꺼번에 빠지고, 받을 Pod가 없어 주문 조회까지 실패한다. 공유 의존성의 실패는 호출 코드의 타임아웃과 서킷 브레이커로 다룬다.",
    anchor: "결제사가-느려졌다고-pod를-죽이면-안-된다",
  },
  {
    id: "spring-boot-on-kubernetes-3",
    post: "spring-boot-on-kubernetes",
    question:
      "server.shutdown=graceful(기본값)인 앱에 5초 걸리는 요청이 처리 중일 때 SIGTERM을 보냈다. 직후에 온 새 요청과 처리 중이던 요청은 각각 어떻게 되나?",
    choices: [
      "둘 다 정상 응답을 받는다",
      "둘 다 즉시 끊긴다",
      "새 요청은 큐에 쌓였다가 종료 직전에 처리된다",
      "새 요청은 연결이 거부되고, 처리 중이던 요청은 끝까지 응답을 받는다",
    ],
    answer: 3,
    explanation:
      "우아한 종료는 새 연결을 그만 받고 처리 중인 요청이 끝나기를 기다린다. 실험에서 새 요청은 curl 종료 코드 7(연결 거부)이었고 처리 중이던 요청은 order 1 ok를 받았다. 새 요청이 거부되는 이 틈이 쿠버네티스에서 502로 보이는 이유다.",
    anchor: "sigterm을-받은-스프링이-하는-일",
  },
  {
    id: "spring-boot-on-kubernetes-4",
    post: "spring-boot-on-kubernetes",
    question:
      "502를 없애려고 preStop sleep 10초를 추가했다. terminationGracePeriodSeconds는 30, timeout-per-shutdown-phase는 30초 그대로다. SIGTERM 시점에 25초 더 걸리는 요청은?",
    choices: [
      "유예 시간이 preStop 시작부터 흐르므로 35초 시점에 끝날 요청이 30초에 SIGKILL로 끊긴다",
      "스프링이 30초를 기다려 주므로 정상 완료된다",
      "preStop 시간은 유예 시간에 포함되지 않으므로 정상 완료된다",
      "스프링이 Graceful shutdown aborted를 남기고 끊는다",
    ],
    answer: 0,
    explanation:
      "유예 타이머는 preStop이 시작될 때부터 흐른다. SIGTERM이 10초에 오고 요청은 35초에 끝나야 하는데 30초에 kubelet이 SIGKILL을 보낸다. 스프링 로그에는 아무것도 안 남으니 유예 시간을 preStop + 스프링 대기 + 여유로 늘려야 한다.",
    anchor: "포트가-닫히는-순간과-목록에서-빠지는-순간",
  },
  {
    id: "spring-boot-on-kubernetes-5",
    post: "spring-boot-on-kubernetes",
    question:
      "CPU requests만 0.5코어로 주고 limits는 없는 Pod에서 JDK 21이 보는 availableProcessors는?",
    choices: [
      "1 (0.5를 올림)",
      "노드의 전체 코어 수",
      "0.5",
      "항상 2",
    ],
    answer: 1,
    explanation:
      "requests는 cgroup의 cpu.shares(v2는 cpu.weight)가 되는데 JDK 19부터 JVM은 이 값을 코어 수 계산에 쓰지 않는다. 실험에서도 --cpu-shares만 준 컨테이너가 기계의 4코어를 다 봤다. 1로 올림하는 건 limits(quota)가 0.5코어일 때의 동작이다.",
    anchor: "jvm은-cpu-한도를-어떻게-읽나",
  },
  {
    id: "spring-boot-on-kubernetes-6",
    post: "spring-boot-on-kubernetes",
    question:
      "CPU limits 0.5코어에서 스프링 부트 시작이 10초 넘게 걸렸다. cpu.stat의 nr_throttled가 주기 108개 중 103개였다. 가장 알맞은 설명은?",
    choices: [
      "힙이 작아서 GC가 계속 돌았다",
      "디스크에서 jar를 읽는 속도가 느렸다",
      "시작 때 여러 스레드가 100ms 주기의 CPU 몫을 빨리 다 쓰고 남은 시간 동안 멈췄다",
      "readiness 프로브가 실패해서 다시 시작했다",
    ],
    answer: 2,
    explanation:
      "CPU 한도는 주기마다 쓸 수 있는 CPU 시간으로 걸린다. 클래스 로딩, JIT, GC가 동시에 돌면 몫을 금방 소진하고 그 주기의 나머지는 멈추는데, 측정에서 멈춘 시간만 6.29초였다. 2코어에서는 한 번도 멈추지 않았다.",
    anchor: "1코어에서-5초-05코어에서-10초",
  },
  {
    id: "spring-boot-on-kubernetes-7",
    post: "spring-boot-on-kubernetes",
    question:
      "레이어드 jar로 이미지를 나눴더니 코드 한 줄 수정 뒤 dependencies 층은 CACHED였다. 그런데도 배포마다 수십 MB가 새로 올라간다. 이 Dockerfile에서 원인은?",
    choices: [
      "spring-boot-loader 층이 매번 바뀐다",
      "앱 클래스까지 담는 CDS 아카이브를 이미지 안에서 매번 새로 만든다",
      "베이스 JRE 이미지를 매번 다시 받는다",
      "snapshot-dependencies 층이 항상 바뀐다",
    ],
    answer: 1,
    explanation:
      "application 층은 16.4kB만 바뀌었지만 마지막 RUN이 만드는 CDS 아카이브(36.7MB)는 앱 클래스를 담으므로 커밋마다 새로 생긴다. 시작 시간을 30~40% 줄이는 대가다. 이미지 받는 시간과 시작 시간 중 무엇이 더 중요한지 보고 고른다.",
    anchor: "이미지를-층으로-나눠-굽는다",
  },
];
