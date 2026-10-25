import type { QuizQuestion } from "../types";

export const RW_NETFLIX_CLOUD_MICROSERVICES: QuizQuestion[] = [
  {
    id: "rw-netflix-cloud-microservices-1",
    post: "rw-netflix-cloud-microservices",
    question: "Eureka 문서가 서비스끼리 부르는 중간 계층을 ELB 뒤에 두지 않은 이유로 든 것은?",
    choices: [
      "ELB가 HTTP/2를 지원하지 않아서",
      "중간 계층 서비스가 바깥에 드러나고 보안 그룹의 이점을 잃어서",
      "ELB 비용이 Eureka 서버보다 비싸서",
      "ELB는 한 리전 안에서만 동작해서",
    ],
    answer: 1,
    explanation:
      "문서는 AWS에 중간 계층용 로드 밸런서가 없었고, 중간 계층을 ELB 뒤에 두면 바깥에 노출되고 보안 그룹의 이점을 잃는다고 설명한다. 그래서 호출하는 쪽이 목록을 받아 직접 고르는 방식을 택했다. 비용이나 프로토콜은 문서가 든 이유가 아니다.",
    anchor: "서버가-오고-가는-곳에서-서로를-찾기",
  },
  {
    id: "rw-netflix-cloud-microservices-2",
    post: "rw-netflix-cloud-microservices",
    question: "인스턴스 1,000대가 기본 설정(30초 갱신, 비율 0.85)으로 등록된 Eureka 서버가 지난 1분에 갱신을 1,200번 받았다. 서버는 어떻게 동작하나?",
    choices: [
      "갱신이 끊긴 인스턴스를 즉시 모두 목록에서 뺀다",
      "90초를 기다린 뒤 갱신이 없는 인스턴스를 뺀다",
      "기준 1,700보다 적으니 만료를 멈추고 지금 목록을 지킨다",
      "다른 존의 Eureka에서 목록을 새로 받아 덮어쓴다",
    ],
    answer: 2,
    explanation:
      "기준은 1,000 × (60 ÷ 30) × 0.85 = 1,700이고, 받은 갱신이 이보다 많아야 만료를 허락한다. 1,200이면 자기 보호 모드로 들어가 아무도 쫓아내지 않는다. 네트워크가 갈라졌을 때 멀쩡한 인스턴스가 무더기로 빠지는 걸 막으려는 장치다.",
    anchor: "네트워크가-갈라질-때-목록을-지우지-않는다",
  },
  {
    id: "rw-netflix-cloud-microservices-3",
    post: "rw-netflix-cloud-microservices",
    question: "넷플릭스 2016년 공지가 시스템을 그대로 AWS로 옮기는 지게차(forklift) 방식을 택하지 않은 이유로 든 것은?",
    choices: [
      "데이터센터의 문제와 한계까지 함께 옮겨지기 때문에",
      "AWS가 기존 서버 이미지를 지원하지 않아서",
      "그대로 옮기면 비용이 더 들어서",
      "결제 데이터를 옮기는 것이 법으로 금지돼 있어서",
    ],
    answer: 0,
    explanation:
      "공지는 지게차 방식이 가장 쉽지만 데이터센터의 문제와 한계를 그대로 가져간다고 적었다. 그래서 클라우드 네이티브로 거의 모든 기술을 다시 만들었고 7년이 걸렸다. 비용 절감은 주된 이유가 아니었다고 따로 밝혔다.",
    anchor: "7년이-걸린-이전",
  },
  {
    id: "rw-netflix-cloud-microservices-4",
    post: "rw-netflix-cloud-microservices",
    question: "Zuul 2가 연결 풀을 호스트마다, 이벤트 루프마다 따로 만들어서 생기는 부작용은?",
    choices: [
      "요청 하나가 여러 스레드를 오가며 처리된다",
      "필터에서 블로킹해도 안전해진다",
      "재시도가 불가능해진다",
      "Zuul 인스턴스와 이벤트 루프가 많으면 원본 서버 하나에 걸리는 최소 연결 수가 커진다",
    ],
    answer: 3,
    explanation:
      "요청을 한 스레드에서 끝내려고 루프마다 풀을 두니, Zuul 수 × 루프 수만큼 연결이 원본 서버에 붙을 수 있다. 문서는 연결 풀을 설정할 때 이걸 염두에 두라고 한다. 반대로 이벤트 루프 위에서 돌기 때문에 필터 안의 블로킹은 절대 하면 안 된다.",
    anchor: "모든-요청이-지나는-앞문",
  },
  {
    id: "rw-netflix-cloud-microservices-5",
    post: "rw-netflix-cloud-microservices",
    question: "넷플릭스가 Hystrix에서 세마포어 대신 의존성별 스레드 풀을 기본으로 고른 이유와 가장 가까운 것은?",
    choices: [
      "스레드 풀이 세마포어보다 언제나 빠르기 때문에",
      "다른 팀이 만든 블랙박스 클라이언트 라이브러리를 믿을 수 없어, 호출한 쪽이 타임아웃 때 떠날 수 있어야 해서",
      "세마포어는 자바에서 지원되지 않아서",
      "스레드 풀은 메모리를 쓰지 않아서",
    ],
    answer: 1,
    explanation:
      "애플리케이션 하나가 수십 개의 라이브러리를 거쳐 호출했고, 그 라이브러리는 계속 바뀌고 속을 알 수 없었다. 별도 스레드에서 돌려야 호출한 스레드가 기다리기를 그만두고 돌아설 수 있다. 비용은 90번째 백분위수 3ms, 99번째 9ms로 측정됐으니 언제나 빠른 것도 아니다.",
    anchor: "느린-의존성-하나가-전체를-세운다",
  },
  {
    id: "rw-netflix-cloud-microservices-6",
    post: "rw-netflix-cloud-microservices",
    question: "중앙값 5ms인 명령에 10ms 창으로 요청 합치기를 켰다. 그런데 이 명령은 한 스레드의 반복문에서 차례로만 불린다. 어떻게 되나?",
    choices: [
      "묶을 요청이 없어 이득은 없고, 반복마다 창 시간을 기다리는 병목이 된다",
      "모든 요청이 하나로 묶여 호출 수가 크게 준다",
      "지연이 5ms에서 2.5ms로 준다",
      "요청 합치기는 반복문에서 자동으로 꺼진다",
    ],
    answer: 0,
    explanation:
      "요청 합치기는 동시에 몰리는 요청이 많을 때만 이득이다. 차례로 부르면 묶을 상대가 없고, 각 호출이 창이 닫힐 때까지 기다리니 문서가 경고한 대로 큰 병목이 된다. 동시에 수십, 수백 개가 들어오는 명령에만 켠다.",
    anchor: "끊긴-뒤에-돌려줄-것과-묶어서-보낼-것",
  },
  {
    id: "rw-netflix-cloud-microservices-7",
    post: "rw-netflix-cloud-microservices",
    question: "Hystrix README가 유지보수 모드로 가며 밝힌 방향 전환을 가장 잘 설명한 것은?",
    choices: [
      "서킷 브레이커를 쓰지 않고 재시도만 늘리기로 했다",
      "모든 격리를 서비스 메시에 맡기기로 했다",
      "미리 정한 설정 대신 실시간 성능에 반응하는 적응형 방식, 예를 들어 적응형 동시성 한도로 옮겨 갔다",
      "Hystrix 2.0을 새로 만들기로 했다",
    ],
    answer: 2,
    explanation:
      "README는 관심이 실시간 성능에 반응하는 적응형 구현으로 옮겨 갔다고 적고 concurrency-limits를 예로 들었다. 사람이 정한 요청 수 기준이나 풀 크기는 오토스케일링과 지연 변화에 금방 낡기 때문이다. 새 내부 프로젝트에는 resilience4j 같은 활발한 오픈소스를 쓴다고 했다.",
    anchor: "새-기능을-넣지-않기로-한-부품들",
  },
];
