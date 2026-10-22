import type { QuizQuestion } from "../types";

export const SPRING_CLOUD_VS_KUBERNETES: QuizQuestion[] = [
  {
    id: "spring-cloud-vs-kubernetes-1",
    post: "spring-cloud-vs-kubernetes",
    question:
      "스프링 MSA를 쿠버네티스로 옮길 때 대개 앱 안에 남겨 두는 것은?",
    choices: [
      "Eureka 클라이언트",
      "Spring Cloud Config 클라이언트",
      "Resilience4j 서킷 브레이커와 타임아웃",
      "Ribbon 같은 클라이언트 측 로드 밸런서",
    ],
    answer: 2,
    explanation:
      "등록·조회, 연결 분산, 설정 배포는 Service·DNS, kube-proxy, ConfigMap이 대신한다. 저쪽이 느릴 때 기다릴지 끊을지는 부르는 쪽만 판단할 수 있어서 서킷 브레이커와 타임아웃은 앱이나 메시에 남는다.",
    anchor: "서킷-브레이커가-앱에-남는-이유",
  },
  {
    id: "spring-cloud-vs-kubernetes-2",
    post: "spring-cloud-vs-kubernetes",
    question:
      "재고 서비스 두 대 중 한 대만 500을 돌려준다. 창 10건, 임계 50%인 서비스 단위 서킷 브레이커는 어떻게 됐나?",
    choices: [
      "고장 난 인스턴스만 골라 차단했다",
      "실패율이 25% 근처에 머물러 끝까지 닫혀 있었다",
      "실패율이 50%에 닿아 열리면서 멀쩡한 인스턴스까지 차단했다",
      "LoadBalancer가 고장 난 인스턴스를 자동으로 목록에서 뺐다",
    ],
    answer: 2,
    explanation:
      "라운드 로빈이 두 인스턴스에 번갈아 보내니 창이 성공 5, 실패 5로 차며 50%가 됐다. 브레이커는 서비스 단위라 열리면 19211도 부르지 않는다. 인스턴스 하나를 빼는 일은 readiness나 아웃라이어 감지 같은 다른 계층이 맡아야 한다.",
    anchor: "두-대-중-한-대만-망가졌을-때",
  },
  {
    id: "spring-cloud-vs-kubernetes-3",
    post: "spring-cloud-vs-kubernetes",
    question:
      "configtree로 읽은 order.max-qty 파일을 실행 중에 25에서 30으로 바꿨다. /config는 무엇을 돌려주나?",
    choices: [
      "30. configtree는 파일을 감시한다",
      "25. 스프링은 시작할 때 읽은 값을 들고 있다",
      "오류. 파일이 바뀌면 바인딩이 깨진다",
      "다음 요청부터 30, 이전 요청은 25",
    ],
    answer: 1,
    explanation:
      "바인딩된 값은 시작 시점에 정해진다. 쿠버네티스가 마운트된 파일을 갱신해도 앱은 모르므로 보통 ConfigMap 해시를 Pod 템플릿에 넣어 롤링 재시작한다. 재시작 없이 바꿔야 하는 값은 리로드 기능이나 별도 저장소로 다룬다.",
    anchor: "설정은-파일로-받는다",
  },
  {
    id: "spring-cloud-vs-kubernetes-4",
    post: "spring-cloud-vs-kubernetes",
    question:
      "반열림에서 시험 호출 2건을 허용했는데, 고장 인스턴스가 남아 있는 동안 회로가 계속 다시 열린다. 이유는?",
    choices: [
      "반열림에서는 실패 한 건만 나와도 무조건 다시 열리기 때문에",
      "시험 2건이 라운드 로빈으로 정상·고장 인스턴스에 하나씩 가서 실패율 50%가 되기 때문에",
      "대기 시간 5초가 지나지 않았기 때문에",
      "반열림 호출은 폴백으로만 처리되기 때문에",
    ],
    answer: 1,
    explanation:
      "반열림도 시험 호출의 실패율로 판정한다. 두 건 중 하나가 고장 인스턴스로 가면 50%로 임계에 닿는다. 고장 인스턴스가 빠지거나 고쳐져야 두 건 모두 성공해 닫힌다.",
    anchor: "반열림에서-다시-걸리는-이유",
  },
  {
    id: "spring-cloud-vs-kubernetes-5",
    post: "spring-cloud-vs-kubernetes",
    question:
      "주문 서비스의 readiness 그룹에 circuitBreakers 헬스 지표를 넣었다. 재고 서비스가 느려지면 무슨 일이 생기나?",
    choices: [
      "재고를 부르는 요청만 실패한다",
      "주문 Pod들이 거의 동시에 준비 안 됨이 되어 Service 뒤가 비고, 재고와 무관한 기능까지 실패한다",
      "kubelet이 주문 Pod를 재시작해 회로가 초기화된다",
      "재고 서비스 Pod가 엔드포인트에서 빠진다",
    ],
    answer: 1,
    explanation:
      "같은 의존성을 보는 Pod들은 함께 회로가 열리고, readiness가 실패하면 모두 엔드포인트에서 빠진다. readiness는 그 Pod 혼자만의 문제를 보는 곳이다. 재시작은 liveness의 동작이라 이 경우와 다르다.",
    anchor: "회로가-열렸다고-pod를-빼면-안-된다",
  },
  {
    id: "spring-cloud-vs-kubernetes-6",
    post: "spring-cloud-vs-kubernetes",
    question:
      "재고 서비스가 3초씩 걸리는데 RestClient 읽기 타임아웃이 1초다. 서킷 브레이커가 열리기 전까지 각 요청은 얼마나 걸렸나?",
    choices: ["약 3초", "약 1초", "약 1ms", "약 5초"],
    answer: 1,
    explanation:
      "타임아웃이 1초에 호출을 끊어 각 요청이 1,003~1,009ms에 폴백으로 끝났다. 열린 뒤에는 호출 자체를 하지 않아 1ms 안팎이 됐다. 타임아웃이 없었다면 판정에 필요한 호출마다 3초씩 스레드가 묶였다.",
    anchor: "느려지면-타임아웃이-먼저다",
  },
  {
    id: "spring-cloud-vs-kubernetes-7",
    post: "spring-cloud-vs-kubernetes",
    question:
      "쿠버네티스에서 Eureka를 그대로 두고 함께 쓰면 배포 중에 생기기 쉬운 문제는?",
    choices: [
      "Pod IP가 Eureka에 등록되지 않는다",
      "종료 중인 Pod가 Eureka 목록에는 남아 있어 요청이 그쪽으로 간다",
      "Service DNS가 Eureka 주소로 바뀐다",
      "Eureka가 readiness 프로브를 대신 실패시킨다",
    ],
    answer: 1,
    explanation:
      "쿠버네티스는 종료가 시작되면 바로 엔드포인트에서 빼지만, Eureka는 등록 취소나 리스 만료(기본 90초)까지 인스턴스를 남긴다. 목록이 두 벌이 되어 어긋나므로 옮길 때는 한쪽으로 정한다.",
    anchor: "이름으로-부르는-두-가지-방법",
  },
];
