import type { QuizQuestion } from "../types";

export const DISTRIBUTED_LOCK: QuizQuestion[] = [
  {
    id: "distributed-lock-1",
    post: "distributed-lock",
    question:
      "3초짜리 Redis 락을 잡은 워커 A가 GC로 4초 멈춘 사이 B가 락을 잡고 결과를 저장했다. 깨어난 A가 쓰기를 하면?",
    choices: [
      "Redis가 A의 명령을 거절하므로 쓰기가 막힌다",
      "A는 락을 잃은 줄 모르고 DB에 그대로 써서 B의 결과를 덮을 수 있다",
      "A의 락이 자동으로 다시 연장되어 B의 락이 무효가 된다",
      "DB가 두 쓰기를 자동으로 합친다",
    ],
    answer: 1,
    explanation:
      "Redis는 만료 시간이 지나 키를 지웠을 뿐이고, 멈춘 프로세스는 깨어나서 다음 줄을 그대로 실행한다. DB는 락을 모르니 늦은 쓰기를 받아들인다. 이걸 막으려면 저장소가 펜싱 토큰으로 늦은 쓰기를 거절해야 한다.",
    anchor: "락을-쥔-줄-알았던-워커",
  },
  {
    id: "distributed-lock-2",
    post: "distributed-lock",
    question: "락 갱신(워치독)을 넣어도 처음 장면의 GC 멈춤 문제가 해결되지 않는 이유는?",
    choices: [
      "PEXPIRE가 원자적이지 않아서",
      "갱신 주기가 너무 짧아서",
      "갱신을 보내는 스레드도 같은 프로세스 안에 있어 프로세스 전체가 멈추면 갱신도 멈추기 때문에",
      "Redis가 갱신 요청을 무시해서",
    ],
    answer: 2,
    explanation:
      "갱신은 작업이 TTL보다 오래 걸리는 문제를 풀 뿐이다. GC처럼 모든 스레드가 서면 갱신도 못 보내 락이 만료된다. 갱신이 0을 돌려주면 하던 일을 멈추는 코드도 함께 필요하다.",
    anchor: "만료-시간은-짧아도-길어도-문제다",
  },
  {
    id: "distributed-lock-3",
    post: "distributed-lock",
    question:
      "펜싱 번호를 검사하는 UPDATE를 WHERE fence < $token으로 썼더니 락 주인의 두 번째 쓰기가 실패한다. 왜인가?",
    choices: [
      "첫 쓰기가 fence를 자기 번호로 바꿔서 같은 번호의 두 번째 쓰기가 조건을 통과하지 못하기 때문에",
      "번호가 매번 자동으로 올라가서",
      "트랜잭션이 커밋되지 않아서",
      "fence 열에 인덱스가 없어서",
    ],
    answer: 0,
    explanation:
      "저장소는 본 가장 큰 번호보다 작은 번호만 거절하면 된다. 같은 번호는 같은 락 주인이니 받아야 한다. 그래서 조건은 fence <= $token이고, 늦게 온 33번은 34가 기록된 뒤라 UPDATE 0이 된다.",
    anchor: "늦게-온-쓰기를-저장소가-거절하게",
  },
  {
    id: "distributed-lock-4",
    post: "distributed-lock",
    question:
      "Redis 프라이머리에 락을 잡고 OK를 받았는데, 곧 장애 조치가 일어난 뒤 다른 워커도 같은 락을 잡았다. 원인은?",
    choices: [
      "Sentinel이 모든 키를 지우고 승격하기 때문에",
      "락 키의 TTL이 장애 조치 때 0으로 바뀌기 때문에",
      "레플리카는 SET NX를 지원하지 않기 때문에",
      "복제가 비동기라 락이 레플리카에 가기 전에 프라이머리가 죽어, 승격된 레플리카에는 락이 없기 때문에",
    ],
    answer: 3,
    explanation:
      "프라이머리는 쓰기를 받자마자 OK를 주고 복제는 나중에 보낸다. 복제가 닿기 전에 죽으면 새 프라이머리에는 그 쓰기가 없다. 재현에서도 승격된 레플리카의 GET이 nil이었고 다른 워커가 OK를 받았다.",
    anchor: "장애-조치-한-번에-락이-사라진다",
  },
  {
    id: "distributed-lock-5",
    post: "distributed-lock",
    question:
      "redis-cli SET으로 락을 잡고, 별도의 redis-cli WAIT 1 500을 실행했더니 레플리카가 멈춰 있는데도 1이 나왔다. 왜인가?",
    choices: [
      "WAIT는 레플리카 수만 세고 복제 여부는 보지 않기 때문에",
      "WAIT는 그 연결이 마지막으로 한 쓰기를 기준으로 기다리는데, 새 연결은 쓴 게 없어 바로 돌아오기 때문에",
      "멈춘 레플리카도 ACK를 보내기 때문에",
      "타임아웃 500ms가 지나면 항상 1을 돌려주기 때문에",
    ],
    answer: 1,
    explanation:
      "WAIT는 호출한 클라이언트의 마지막 쓰기 오프셋까지 레플리카가 받았는지 센다. 다른 연결에서 부르면 기다릴 쓰기가 없으니 연결된 레플리카 수를 바로 돌려준다. SET과 WAIT를 같은 연결에서 보내니 0이 나왔다.",
    anchor: "장애-조치-한-번에-락이-사라진다",
  },
  {
    id: "distributed-lock-6",
    post: "distributed-lock",
    question: "etcd 락이 Redis 한 대의 SET NX 락보다 정확성 면에서 나은 점으로 가장 알맞은 것은?",
    choices: [
      "프로세스가 멈춰도 락이 절대 넘어가지 않는다",
      "TTL이 필요 없다",
      "과반 기록이라 리더가 바뀌어도 성공한 락이 사라지지 않고, 생성 리비전을 펜싱 토큰으로 쓸 수 있다",
      "쓰기가 Redis보다 빠르다",
    ],
    answer: 2,
    explanation:
      "etcd도 임대 기반이라 멈춘 쪽의 락은 넘어간다. 실제로 멈춘 프로세스는 깨어나서 session expired를 받았다. 차이는 합의로 쓰기가 사라지지 않는다는 점과, 전역 단조 증가하는 리비전으로 저장소가 늦은 쓰기를 거절할 수 있다는 점이다.",
    anchor: "합의-시스템-위의-락",
  },
  {
    id: "distributed-lock-7",
    post: "distributed-lock",
    question: "하루 한 번만 돌아야 하는 정산이 가끔 두 번 돈다. 분산 락을 더 강하게 만들기 전에 먼저 검토할 것은?",
    choices: [
      "Redlock으로 바꾼다",
      "정산 결과 테이블의 날짜 기본 키처럼 DB 제약으로 중복을 막을 수 있는지 본다",
      "TTL을 1시간으로 늘린다",
      "크론을 서버 한 대에서만 돌린다",
    ],
    answer: 1,
    explanation:
      "깨지면 데이터가 틀리는 일은 락보다 저장소가 판정하게 하는 편이 단단하다. 날짜 기본 키, 멱등성 키, 조건부 UPDATE로 중복을 막으면 락이 깨져도 결과가 틀리지 않는다. TTL을 늘리면 죽은 워커 때문에 오래 멈추고, 서버 한 대는 그 서버가 죽으면 끝이다.",
    anchor: "락이-지키려는-것이-효율인가-정확성인가",
  },
];
