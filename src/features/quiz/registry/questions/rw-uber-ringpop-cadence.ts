import type { QuizQuestion } from "../types";

export const RW_UBER_RINGPOP_CADENCE: QuizQuestion[] = [
  {
    id: "rw-uber-ringpop-cadence-1",
    post: "rw-uber-ringpop-cadence",
    question: "Cadence 문서가 타이머 서비스와 큐로 업무 흐름을 엮는 방식의 약점으로 꼽은 것은?",
    choices: [
      "DB를 계속 훑어야 해서 느리다",
      "큐는 메시지를 7일만 보관한다",
      "타이머를 1분 단위로만 쓸 수 있다",
      "큐 시스템과 DB 사이에 트랜잭션으로 묶인 갱신이 대개 없어 오류가 나기 쉽다",
    ],
    answer: 3,
    explanation:
      "문서는 큐와 타이머 방식이 DB를 계속 훑지 않아 더 잘 확장되지만, 큐와 DB 사이 갱신이 한 트랜잭션이 아니라서 프로그래밍 모델이 복잡하고 오류가 나기 쉽다고 적었다. DB를 계속 훑는 것은 첫 번째 방식(DB 중심)의 약점이다.",
    anchor: "콜백의-늪과-상태-표-훑기",
  },
  {
    id: "rw-uber-ringpop-cadence-2",
    post: "rw-uber-ringpop-cadence",
    question: "Cadence 서버와 워커의 역할 분담으로 옳은 것은?",
    choices: [
      "워커가 워크플로·액티비티 코드를 실행하고, 서버는 히스토리와 타이머, 작업 목록을 쥔다",
      "서버가 워크플로 코드를 직접 실행하고 워커는 결과만 저장한다",
      "워커가 히스토리를 자기 디스크에 저장한다",
      "Matching 서비스가 워크플로 코드를 컴파일한다",
    ],
    answer: 0,
    explanation:
      "토폴로지 문서에 따르면 서버는 워크플로 코드를 돌리지 않는다. 워커가 결정 작업을 받아 코드를 돌리고 결정을 돌려주며, 서버의 History가 사건을 쌓고 타이머를 쥐고 Matching이 작업을 워커와 짝짓는다. 그래서 서버는 워크플로 코드의 언어를 제약하지 않는다.",
    anchor: "코드는-일꾼이-돌리고-상태는-서버가-쥔다",
  },
  {
    id: "rw-uber-ringpop-cadence-3",
    post: "rw-uber-ringpop-cadence",
    question: "히스토리 재생 중에 워크플로 코드가 ExecuteActivity(A)에 닿으면 무슨 일이 일어나나?",
    choices: [
      "액티비티 A를 다시 실행하고 새 결과로 덮어쓴다",
      "A가 멱등한지 검사한 뒤 실행 여부를 정한다",
      "A를 다시 실행하지 않고 히스토리에 기록된 A의 결과를 돌려준다",
      "재생을 멈추고 사람의 승인을 기다린다",
    ],
    answer: 2,
    explanation:
      "비결정성 오류 문서는 재생 중에는 액티비티, 타이머, 자식 워크플로를 다시 실행하지 않는다고 적었다. 기록된 결과로 지역 변수를 되살리고 다음 줄로 넘어가, 히스토리 끝에서 앞 워커가 멈춘 자리에 닿는다.",
    anchor: "다른-일꾼이-이어받을-때-재생",
  },
  {
    id: "rw-uber-ringpop-cadence-4",
    post: "rw-uber-ringpop-cadence",
    question: "1시간 타이머를 기다리는 워크플로가 있을 때, B 하나만 실행하던 자리를 B와 C를 나란히 실행하게 바꿔 배포하면 어떤 오류가 나나?",
    choices: [
      "결정 누락(missing decision)",
      "추가 결정(extra decision)",
      "결정 불일치(decision mismatch)",
      "오류가 나지 않는다",
    ],
    answer: 1,
    explanation:
      "히스토리에는 그 결정 작업에서 B 하나만 예약됐는데 재생한 코드는 B와 C 둘을 예약하려 한다. 문서는 이 경우를 추가 결정으로 분류했다. B를 C로 바꾸면 불일치, 타이머 줄을 지우면 누락이다.",
    anchor: "같은-순서로-같은-일을-시켜야-한다",
  },
  {
    id: "rw-uber-ringpop-cadence-5",
    post: "rw-uber-ringpop-cadence",
    question: "워크플로 코드에서 time.Now() 대신 workflow.Now()를 써야 하는 이유는?",
    choices: [
      "workflow.Now()가 더 정밀해서",
      "workflow.Now()는 UTC만 돌려줘서",
      "time.Now()는 Go에서 지원 중단돼서",
      "재생할 때도 같은 값을 돌려줘야 코드가 같은 결정을 내리기 때문에",
    ],
    answer: 3,
    explanation:
      "워크플로 코드는 몇 번을 다시 돌려도 같은 결정을 내려야 히스토리와 맞출 수 있다. time.Now()는 재생할 때마다 다른 시각을 줘 분기가 달라질 수 있다. 그래서 시각, 잠자기, 스레드는 Cadence API를 쓰고 바깥 호출은 액티비티로 뺀다.",
    anchor: "같은-순서로-같은-일을-시켜야-한다",
  },
  {
    id: "rw-uber-ringpop-cadence-6",
    post: "rw-uber-ringpop-cadence",
    question: "버전 표시 없이 비결정적 변경을 배포한 뒤 그냥 되돌리기도 어려운 이유로 문서가 든 것은?",
    choices: [
      "되돌리면 히스토리가 지워져서",
      "일부 워크플로는 이미 새 코드로 진행해, 되돌리면 막혔던 쪽은 살지만 새로 진행한 쪽이 막혀서",
      "Cadence는 이전 바이너리를 저장하지 않아서",
      "롤백하면 워크플로 ID가 바뀌어서",
    ],
    answer: 1,
    explanation:
      "배포 뒤 어떤 워크플로는 새 코드로 결정을 내렸고 어떤 워크플로는 막혔다. 되돌리면 앞쪽이 새로 막힌다. 문서는 바이너리 체크섬과 결정 시각으로 갈래를 나누거나 리셋으로 이전 지점에서 새 가지를 뻗으라고 권한다.",
    anchor: "코드를-바꿀-때-쓰는-도구들",
  },
  {
    id: "rw-uber-ringpop-cadence-7",
    post: "rw-uber-ringpop-cadence",
    question: "Cadence가 같은 워크플로 ID로 열린 워크플로를 하나만 허용해도 액티비티를 멱등하게 만들어야 하는 이유는?",
    choices: [
      "액티비티는 재시도 정책에 따라, 또는 완료 보고를 잃으면 다시 실행될 수 있어서",
      "워크플로 ID가 도메인마다 겹칠 수 있어서",
      "Cadence는 액티비티 결과를 저장하지 않아서",
      "자식 워크플로가 같은 액티비티를 공유해서",
    ],
    answer: 0,
    explanation:
      "ID 보장은 워크플로 단위다. 액티비티는 실패하면 재시도되고, 워커가 끝냈다는 보고를 잃으면 서버는 다시 맡길 수 있다. 결제 같은 바깥 호출은 여전히 멱등 키나 중복 검사가 필요하다.",
    anchor: "워크플로-하나의-크기에도-끝이-있다",
  },
];
