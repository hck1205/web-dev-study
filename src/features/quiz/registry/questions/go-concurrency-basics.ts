import type { QuizQuestion } from "../types";

export const GO_CONCURRENCY_BASICS: QuizQuestion[] = [
  {
    id: "go-concurrency-basics-1",
    post: "go-concurrency-basics",
    question:
      "고루틴에서 버퍼 없는 채널로 결과를 보내고, 호출한 쪽은 select로 결과와 10ms 타임아웃을 기다린다. 결과가 50ms 뒤에 오면 그 고루틴은 어떻게 되나?",
    choices: [
      "타임아웃이 나면 런타임이 고루틴을 함께 종료한다",
      "결과를 버리고 정상 종료한다",
      "받을 쪽이 사라져 보내기에서 영원히 멈추고 남는다",
      "send on closed channel 패닉이 난다",
    ],
    answer: 2,
    explanation:
      "버퍼 없는 채널은 받는 쪽이 와야 보내기가 끝난다. 호출한 쪽은 타임아웃으로 이미 떠났으니 고루틴은 chan send에서 멈춘 채 남고, 요청마다 하나씩 쌓인다. 채널을 닫은 적이 없으니 패닉은 나지 않는다.",
    anchor: "고루틴-수가-줄지-않는다",
  },
  {
    id: "go-concurrency-basics-2",
    post: "go-concurrency-basics",
    question: "고루틴 200개가 time.Sleep으로 기다릴 때와 커널에서 막히는 시스템 콜로 기다릴 때 OS 스레드 수가 다른 이유는?",
    choices: [
      "time.Sleep은 런타임이 고루틴을 치워 두지만, 막히는 시스템 콜은 스레드(M)째로 묶여서 런타임이 새 스레드를 띄운다",
      "time.Sleep은 GOMAXPROCS를 줄이고 시스템 콜은 늘리기 때문이다",
      "시스템 콜은 고루틴마다 새 프로세스를 만들기 때문이다",
      "차이가 없다. 두 경우 모두 스레드가 고루틴 수만큼 생긴다",
    ],
    answer: 0,
    explanation:
      "채널, 타이머, 네트워크에서 기다리는 고루틴은 스레드를 붙잡지 않는다. 커널 안에서 막히는 시스템 콜은 그 스레드가 같이 멈추므로 런타임이 P를 다른 M에 넘기고, 그래서 실험에서 스레드가 203개까지 늘었다.",
    anchor: "고루틴은-스레드-위에서-돌아가는-작은-일감이다",
  },
  {
    id: "go-concurrency-basics-3",
    post: "go-concurrency-basics",
    question: "CPU 한도 1.5코어 컨테이너에서 Go 1.24로 빌드한 서비스의 GOMAXPROCS가 노드 CPU 수로 잡혔다. 어떤 문제가 생기기 쉬운가?",
    choices: [
      "고루틴을 만들 수 없게 된다",
      "P가 너무 많아 할당량을 짧은 시간에 다 쓰고 남은 주기 동안 멈추는 CPU 스로틀링으로 꼬리 지연이 튄다",
      "GC가 꺼진다",
      "채널 버퍼가 자동으로 커진다",
    ],
    answer: 1,
    explanation:
      "Go 1.25 전에는 GOMAXPROCS 기본값이 호스트 CPU 수였다. 동시에 도는 스레드가 한도보다 많으면 CFS 할당량을 빨리 소진해 주기마다 멈춘다. 1.25 이상(go.mod도 1.25 이상)이면 런타임이 cgroup 한도를 따르고, 그 전이면 automaxprocs나 환경 변수로 맞춘다.",
    anchor: "고루틴은-스레드-위에서-돌아가는-작은-일감이다",
  },
  {
    id: "go-concurrency-basics-4",
    post: "go-concurrency-basics",
    question: "close한 뒤 값이 하나 남아 있는 채널에서 두 번 받으면 무엇이 나오나?",
    choices: [
      "두 번 다 패닉",
      "첫 번째는 패닉, 두 번째는 0, false",
      "두 번 다 영원히 기다린다",
      "첫 번째는 남은 값과 true, 두 번째는 0과 false",
    ],
    answer: 3,
    explanation:
      "닫힌 채널도 남은 값은 그대로 꺼내 준다. 비고 나면 기다리지 않고 0값과 false를 바로 준다. 패닉이 나는 건 닫힌 채널에 보낼 때다.",
    anchor: "채널은-주고받는-순간-만나는-자리다",
  },
  {
    id: "go-concurrency-basics-5",
    post: "go-concurrency-basics",
    question:
      "errgroup.WithContext로 가격 조회와 재고 조회를 동시에 시작했는데 가격 조회가 20ms에 에러를 냈다. ctx.Done()을 보고 있던 재고 조회는 어떻게 되나?",
    choices: [
      "끝까지 실행되고 Wait가 두 에러를 모두 돌려준다",
      "context canceled로 바로 돌아오고, Wait는 가격 조회의 첫 에러를 돌려준다",
      "context deadline exceeded로 돌아온다",
      "errgroup이 재고 조회 고루틴을 강제로 죽인다",
    ],
    answer: 1,
    explanation:
      "errgroup은 첫 에러가 나면 묶음 context를 취소하고, 그 context를 보던 고루틴은 Canceled를 받는다. 마감이 지난 게 아니므로 DeadlineExceeded가 아니다. 취소는 협조적이라 ctx.Done()을 보지 않는 코드는 멈추지 않는다.",
    anchor: "context로-취소를-아래까지-전한다",
  },
  {
    id: "go-concurrency-basics-6",
    post: "go-concurrency-basics",
    question: "작업 시간이 [100, 1, 1, 1, 1]ms일 때 워커를 2개에서 10개로 늘리면 전체 시간은?",
    choices: [
      "약 10ms로 줄어든다",
      "약 52ms로 줄어든다",
      "100ms에서 줄지 않는다",
      "워커가 늘어 오히려 늘어난다",
    ],
    answer: 2,
    explanation:
      "워커 2개일 때 이미 100ms짜리 작업을 한 워커가 맡고 나머지를 다른 워커가 끝내서 전체는 100ms다. 동시성은 기다림을 겹칠 뿐 가장 긴 작업 하나의 길이를 줄이지 못한다.",
    anchor: "동시에-몇-개까지-돌릴지-정한다",
  },
  {
    id: "go-concurrency-basics-7",
    post: "go-concurrency-basics",
    question: "go test -race로 테스트가 통과했다. 이 코드에 데이터 경합이 없다고 말할 수 있나?",
    choices: [
      "그렇다. 레이스 디텍터는 코드를 정적으로 모두 분석한다",
      "아니다. 실행된 접근만 보므로 테스트가 지나지 않은 동시 경로의 경합은 놓친다",
      "그렇다. -race는 경합을 자동으로 고쳐 준다",
      "아니다. -race는 맵 경합만 찾는다",
    ],
    answer: 1,
    explanation:
      "레이스 디텍터는 실행 중 메모리 접근을 기록해 순서가 정해지지 않은 접근을 찾는다. 실행되지 않은 경로는 보지 못하므로 동시 경로를 지나는 테스트와 부하 테스트가 있어야 한다. 경합을 찾으면 종료 코드 66으로 CI를 멈춘다.",
    anchor: "레이스-디텍터는-실행된-경로만-본다",
  },
];
