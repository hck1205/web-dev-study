import type { QuizQuestion } from "../types";

export const BULLMQ_JOB_QUEUE: QuizQuestion[] = [
  {
    id: "bullmq-job-queue-1",
    post: "bullmq-job-queue",
    question:
      "작업마다 300ms씩 CPU를 쓰는 해시 계산을 concurrency: 3인 BullMQ 워커 하나로 처리했더니 6건에 약 1.8초가 걸렸다. 왜 그럴까?",
    choices: [
      "Redis가 한 번에 작업 하나만 꺼내 주기 때문이다",
      "자바스크립트가 스레드 하나에서 돌아서 계산 작업은 동시에 진행되지 않기 때문이다",
      "concurrency는 워커가 여러 대일 때만 적용되기 때문이다",
      "limiter를 설정하지 않으면 초당 처리량이 제한되기 때문이다",
    ],
    answer: 1,
    explanation:
      "concurrency는 한 프로세스가 작업 여러 개를 동시에 기다리게 할 뿐이라 I/O 대기에는 효과가 있지만 CPU 계산은 차례로 처리된다. 처리 함수를 파일로 빼서 샌드박스 프로세스로 돌리자 같은 6건이 775ms로 줄었다.",
    anchor: "concurrency는-기다리는-일에만-듣는다",
  },
  {
    id: "bullmq-job-queue-2",
    post: "bullmq-job-queue",
    question:
      "attempts: 4, backoff: { type: \"exponential\", delay: 1000 }인 작업이 계속 실패하다 네 번째에 성공했다. 실패 이벤트 핸들러에 알림을 걸어 두었다면 어떻게 되나?",
    choices: [
      "마지막에 성공했으니 알림은 한 번도 가지 않는다",
      "최종 실패가 아니므로 failed 이벤트 자체가 발생하지 않는다",
      "시도가 실패할 때마다 failed 이벤트가 와서 알림이 세 번 간다",
      "첫 실패 때 한 번만 알림이 간다",
    ],
    answer: 2,
    explanation:
      "failed 이벤트는 최종 실패가 아니라 시도마다 온다. 그래서 결국 성공한 작업에도 알림이 세 번 간다. 최종 실패만 알리려면 attemptsMade가 opts.attempts에 닿았는지 확인한다.",
    anchor: "실패한-작업은-언제-다시-오나",
  },
  {
    id: "bullmq-job-queue-3",
    post: "bullmq-job-queue",
    question:
      "우선순위 없이 넣은 영수증 작업 둘과 priority: 1로 넣은 환불 작업이 함께 기다린다. 워커는 무엇부터 처리하나?",
    choices: [
      "우선순위 없는 영수증 작업들을 먼저 처리한다",
      "priority: 1인 환불 작업을 가장 먼저 처리한다",
      "넣은 순서와 상관없이 무작위로 처리한다",
      "우선순위가 섞이면 BullMQ가 에러를 낸다",
    ],
    answer: 0,
    explanation:
      "BullMQ에서 우선순위 0은 가장 높음이 아니라 우선순위 없음이고, 우선순위 없는 작업이 먼저 나간다. 우선순위를 준 작업끼리만 숫자가 작은 쪽이 앞선다. 급한 작업을 앞세우려면 모든 작업에 우선순위를 주거나 큐를 나눈다.",
    anchor: "넣은-순서대로-나오지-않는-작업",
  },
  {
    id: "bullmq-job-queue-4",
    post: "bullmq-job-queue",
    question:
      "jobId: \"capture-8\"로 같은 작업을 두 번 넣었는데 두 번 다 실행됐다. 가장 그럴듯한 이유는?",
    choices: [
      "jobId는 대소문자를 구분하지 않아서 충돌을 못 찾았다",
      "jobId에 하이픈을 쓰면 중복 검사가 꺼진다",
      "deduplication 옵션 없이는 jobId가 중복을 막지 않는다",
      "removeOnComplete: true로 첫 작업이 끝나자마자 지워져 id가 다시 비었다",
    ],
    answer: 3,
    explanation:
      "jobId 중복 방지는 그 id의 작업 해시가 Redis에 남아 있는 동안만 통한다. 끝나자마자 지우면 같은 id를 다시 넣을 수 있다. 그래서 두 번 하면 안 되는 일은 처리 함수 안에서도 DB로 막는다.",
    anchor: "같은-작업을-두-번-넣지-않게",
  },
  {
    id: "bullmq-job-queue-5",
    post: "bullmq-job-queue",
    question:
      "큰 PDF를 몇 초씩 CPU로 그리는 워커 로그에 'Missing lock for job 1. moveToFinished'가 찍히고, 같은 영수증 메일이 두 통 갔다. 무슨 일이 일어났나?",
    choices: [
      "Redis가 재시작되면서 작업이 복제됐다",
      "이벤트 루프가 막혀 락을 연장하지 못했고, 다른 워커가 멈춘 작업으로 보고 다시 실행했다",
      "attempts 설정 때문에 성공한 작업이 한 번 더 재시도됐다",
      "limiter가 작업을 대기열로 되돌리면서 중복이 생겼다",
    ],
    answer: 1,
    explanation:
      "락 연장 타이머도 이벤트 루프에서 돌기 때문에 CPU 작업이 루프를 막으면 락이 만료된다. 다른 워커의 stalled 검사가 이 작업을 wait로 되돌려 다시 처리하고, 원래 워커는 뒤늦게 결과를 적으려다 락이 없다는 에러를 받는다. 샌드박스 프로세서와 멱등한 처리로 막는다.",
    anchor: "살아-있는데-죽었다고-본다",
  },
  {
    id: "bullmq-job-queue-6",
    post: "bullmq-job-queue",
    question: "배포 때 처리 중이던 작업을 잃지 않고 내려가려면 SIGTERM에서 무엇을 해야 하나?",
    choices: [
      "process.exit(0)으로 즉시 종료해 락을 바로 풀어 준다",
      "lockDuration을 0으로 바꿔 다른 워커가 곧바로 가져가게 한다",
      "worker.close()를 기다린 뒤 종료해, 새 작업은 받지 않고 처리 중인 작업은 끝낸다",
      "queue.obliterate()로 남은 작업을 지운다",
    ],
    answer: 2,
    explanation:
      "worker.close()는 새 작업을 받지 않고 처리 중인 작업이 끝날 때까지 기다린다. 핸들러 없이 바로 죽으면 작업이 active에 남아 락이 만료될 때까지 멈춰 있다가 다른 워커가 처음부터 다시 한다.",
    anchor: "배포할-때-하던-일을-마치고-내려가기",
  },
  {
    id: "bullmq-job-queue-7",
    post: "bullmq-job-queue",
    question: "캐시로 쓰던 Redis(maxmemory-policy allkeys-lru)에 BullMQ 큐를 함께 올리면 어떤 문제가 생기나?",
    choices: [
      "메모리가 찰 때 작업 해시나 락이 지워져 작업이 사라지거나 두 번 실행될 수 있다",
      "LRU 정책 때문에 오래된 작업부터 먼저 처리된다",
      "BullMQ가 연결을 거부하고 시작하지 않는다",
      "끝난 작업이 자동으로 지워져 removeOnComplete가 필요 없어진다",
    ],
    answer: 0,
    explanation:
      "큐의 데이터는 지워져도 되는 캐시가 아니라서 축출 정책은 noeviction이어야 한다. BullMQ는 연결할 때 이를 검사해 경고만 하고 동작은 계속하니, 경고를 놓치면 문제가 늦게 드러난다.",
    anchor: "끝난-작업이-redis-메모리를-먹는다",
  },
];
