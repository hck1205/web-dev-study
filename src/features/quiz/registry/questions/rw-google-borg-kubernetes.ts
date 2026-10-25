import type { QuizQuestion } from "../types";

export const RW_GOOGLE_BORG_KUBERNETES: QuizQuestion[] = [
  {
    id: "rw-google-borg-kubernetes-1",
    post: "rw-google-borg-kubernetes",
    question: "Borg 논문이 프로덕션과 비프로덕션 작업을 같은 셀에 섞는 근거로 든 것은?",
    choices: [
      "비프로덕션 작업이 더 높은 우선순위를 가져서",
      "프로덕션 작업은 드문 급증에 대비해 많이 예약하지만 평소엔 덜 쓰고, 그 몫을 되찾아 배치를 돌리면 기계가 덜 들어서",
      "셀을 나누면 Paxos 저장소가 감당하지 못해서",
      "배치 작업은 컨테이너 없이 돌아서 간섭이 없어서",
    ],
    answer: 1,
    explanation:
      "대표 셀에서 프로덕션은 CPU의 약 70%를 할당받지만 약 60%만 쓴다. Borg는 쓰지 않는 예약분을 회수해 비프로덕션 작업을 돌리고, 둘을 다른 셀로 나누면 중앙값 셀에서 기계가 20~30% 더 필요했다고 적었다.",
    anchor: "서비스와-배치를-같은-기계에-섞는-이유",
  },
  {
    id: "rw-google-borg-kubernetes-2",
    post: "rw-google-borg-kubernetes",
    question: "쿠버네티스가 컨테이너가 하나뿐이어도 항상 Pod로 감싸는 이유로 Queue 글이 든 것은?",
    choices: [
      "Borg에서 최상위 애플리케이션 컨테이너를 alloc 밖에서도 돌릴 수 있게 한 게 불편의 원천이라 예외를 없앴다",
      "Pod가 없으면 컨테이너에 IP를 줄 수 없어서",
      "Docker가 단일 컨테이너 실행을 지원하지 않아서",
      "Pod가 있어야 컨테이너 이미지를 내려받을 수 있어서",
    ],
    answer: 0,
    explanation:
      "Borg는 alloc 밖에서도 애플리케이션 컨테이너를 돌리게 했는데 Queue 글은 이게 꽤 불편의 원천이었다고 썼다. 그래서 쿠버네티스는 모든 애플리케이션 컨테이너를 최상위 Pod 안에서 돌리게 정리했다. 모든 것을 같은 모양으로 다루려는 결정이다.",
    anchor: "가져온-것-alloc은-pod가-됐다",
  },
  {
    id: "rw-google-borg-kubernetes-3",
    post: "rw-google-borg-kubernetes",
    question: "Borg에서 기계의 IP 하나를 모든 작업이 나눠 쓰면서 생긴 문제가 아닌 것은?",
    choices: [
      "포트를 자원처럼 스케줄링해야 했다",
      "DNS 같은 표준 서비스를 자체 버전으로 바꿔야 했다",
      "IP만 다루던 도구를 IP:포트 쌍에 맞게 고쳐야 했다",
      "컨테이너마다 커널을 따로 띄워야 했다",
    ],
    answer: 3,
    explanation:
      "논문과 Queue 글은 포트 스케줄링, 포트를 미리 선언하고 받아들이기, Borglet의 포트 격리, 이름·RPC 시스템의 포트 처리, 자체 DNS와 도구 수정을 문제로 든다. 컨테이너는 호스트 커널을 함께 쓰니 커널을 따로 띄우는 일은 없다.",
    anchor: "버린-것-하나-기계-하나에-ip-하나",
  },
  {
    id: "rw-google-borg-kubernetes-4",
    post: "rw-google-borg-kubernetes",
    question: "애플리케이션이 Borg 태스크 번호로 데이터를 범위 샤딩하면 왜 위험했나?",
    choices: [
      "태스크 번호가 재시작마다 무작위로 바뀌어서",
      "번호가 1000을 넘으면 Borg가 작업을 거부해서",
      "롤링 업그레이드가 보통 번호 순서로 재시작해, 이웃한 범위를 맡은 태스크가 연달아 내려가 데이터를 못 쓸 수 있어서",
      "범위 샤딩은 Paxos 저장소에 기록되지 않아서",
    ],
    answer: 2,
    explanation:
      "Queue 글은 Borg의 작업 업데이트가 보통 번호 순서로 태스크를 재시작한다고 쓴다. 번호로 범위를 나눈 애플리케이션이면 인접한 범위가 동시에 비게 된다. 인프라의 업데이트 순서와 데이터 배치가 같은 번호에 묶인 탓이다.",
    anchor: "버린-것-둘-번호-매긴-작업-대신-레이블",
  },
  {
    id: "rw-google-borg-kubernetes-5",
    post: "rw-google-borg-kubernetes",
    question: "Service와 컨트롤러가 모두 app=web을 보는데, 이상한 Pod 하나의 레이블을 app=web-debug로 바꾸면?",
    choices: [
      "Pod가 바로 지워지고 새 Pod가 생긴다",
      "Service는 그 Pod로 트래픽을 보내지 않고, 컨트롤러는 모자란 하나를 새로 만들며, 격리된 Pod는 살아 있어 디버깅할 수 있다",
      "컨트롤러가 레이블을 원래대로 되돌린다",
      "Service가 오류를 내고 모든 Pod로의 트래픽을 멈춘다",
    ],
    answer: 1,
    explanation:
      "셀렉터에 걸리지 않으니 Service의 엔드포인트에서 빠지고, 컨트롤러는 관찰한 수가 원하는 수보다 적으니 하나를 만든다. Queue 글은 컨트롤러와 Pod를 떼어 놓은 덕에 Pod를 고아로 만들고 그 자리에서 디버깅할 수 있다고 설명했다.",
    anchor: "레이블로-문제-pod를-격리한다",
  },
  {
    id: "rw-google-borg-kubernetes-6",
    post: "rw-google-borg-kubernetes",
    question: "Queue 글이 설명한 쿠버네티스 API 서버의 자리는?",
    choices: [
      "Borgmaster처럼 모든 의미와 저장소를 한 프로세스에 둔다",
      "Omega처럼 클라이언트가 저장소를 직접 읽고 쓰게 한다",
      "구성 요소는 떼어 두되 모든 저장소 접근을 API 서버로 강제해 검증·기본값·버전 관리와 공통 정책을 지킨다",
      "저장소 없이 각 노드가 자기 상태만 들고 있게 한다",
    ],
    answer: 2,
    explanation:
      "쿠버네티스는 Omega처럼 구성 요소가 독립적으로 바뀔 수 있게 하면서, 저장소 접근을 중앙 API 서버로 모아 불변식과 정책을 강제하는 중간을 골랐다. Borgmaster는 단일체, Omega는 의미를 클라이언트로 밀어낸 구조였다.",
    anchor: "borgmaster-omega-그리고-api-서버",
  },
  {
    id: "rw-google-borg-kubernetes-7",
    post: "rw-google-borg-kubernetes",
    question: "Queue 글이 설정 문제에 대해 내린 결론은?",
    choices: [
      "설정에 계산을 넣지 말고 모든 값을 하드코딩한다",
      "튜링 완전한 설정 언어를 표준으로 만든다",
      "설정은 쿠버네티스가 아니라 각 애플리케이션이 알아서 한다",
      "프로그램으로 설정을 만드는 걸 인정하되, 데이터는 JSON·YAML 같은 데이터 전용 형식으로, 계산은 진짜 프로그래밍 언어로 나눈다",
    ],
    answer: 3,
    explanation:
      "설정 언어는 결국 튜링 완전해져 도구가 약한 언어로 계산을 옮겨 놓을 뿐이라고 Queue 글은 썼다. 그래서 계산과 데이터를 깨끗이 나누라고 권했다. 2016년 시점에도 구글이 좋은 답을 못 찾았다고 한 열린 문제다.",
    anchor: "구글도-아직-못-푼-문제",
  },
];
