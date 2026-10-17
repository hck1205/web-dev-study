import type { QuizQuestion } from "../types";

export const REDIS_BASICS: QuizQuestion[] = [
  {
    id: "redis-basics-1",
    post: "redis-basics",
    question: "Redis가 명령을 메인 스레드 하나에서 실행해도 빠른 이유로 가장 알맞은 것은?",
    choices: [
      "명령마다 새 스레드를 만들어 병렬로 처리하기 때문에",
      "명령이 대부분 µs 단위로 끝나고, 락과 문맥 전환 비용이 없기 때문에",
      "모든 응답을 디스크에 미리 계산해 두기 때문에",
      "클라이언트 연결을 한 번에 하나만 받기 때문에",
    ],
    answer: 1,
    explanation:
      "데이터가 메모리에 있고 명령이 단순한 자료구조 연산이라 하나가 몇 µs면 끝난다. 스레드가 하나라 락을 잡거나 스레드를 바꾸는 비용도 없다. 연결은 epoll로 수많은 소켓을 한 스레드가 함께 다룬다.",
    anchor: "명령은-한-줄로-서서-하나씩-실행된다",
  },
  {
    id: "redis-basics-2",
    post: "redis-basics",
    question: "키가 100만 개인 운영 Redis에서 KEYS *를 실행하면 어떻게 되나?",
    choices: [
      "백그라운드 스레드에서 돌아서 다른 요청에는 영향이 없다",
      "I/O 스레드를 켜 두었다면 다른 명령과 병렬로 실행된다",
      "모든 키를 훑는 동안 다른 클라이언트의 명령이 전부 기다린다",
      "결과가 커서로 나뉘어 조금씩 돌아온다",
    ],
    answer: 2,
    explanation:
      "명령은 메인 스레드에서 한 번에 하나씩 실행되므로, 모든 키를 훑는 KEYS가 도는 동안 뒤의 명령은 전부 줄을 선다. I/O 스레드는 네트워크 읽기와 쓰기만 나눠 맡아서 이 문제를 풀지 못한다. 커서로 나눠 훑는 것은 SCAN이다.",
    anchor: "느린-명령-하나가-모두를-세운다",
  },
  {
    id: "redis-basics-3",
    post: "redis-basics",
    question: "필드가 100만 개인 해시를 지울 때 DEL 대신 UNLINK를 쓰는 이유는?",
    choices: [
      "UNLINK는 키를 바로 떼어 내고 메모리 반환은 백그라운드 스레드에 맡기기 때문에",
      "UNLINK는 레플리카에서만 지우기 때문에",
      "DEL은 TTL이 있는 키를 지우지 못하기 때문에",
      "UNLINK는 지운 키를 나중에 되살릴 수 있기 때문에",
    ],
    answer: 0,
    explanation:
      "큰 키를 DEL로 지우면 메모리를 하나하나 돌려주는 동안 메인 스레드가 멈춘다. 글의 예에서는 0.5초가 걸렸다. UNLINK는 키 공간에서만 바로 빼고 실제 해제는 bio_lazy_free 스레드가 해서 명령이 금방 끝난다.",
    anchor: "느린-명령-하나가-모두를-세운다",
  },
  {
    id: "redis-basics-4",
    post: "redis-basics",
    question: "SET lock:order:7 token NX EX 10 대신 SETNX와 EXPIRE를 따로 보내면 생기는 문제는?",
    choices: [
      "두 명령의 응답 형식이 달라서 파싱할 수 없다",
      "SETNX는 문자열 값을 저장하지 못한다",
      "EXPIRE가 키를 즉시 지워 락이 잡히지 않는다",
      "두 명령 사이에 워커가 죽으면 만료가 없는 락이 영원히 남는다",
    ],
    answer: 3,
    explanation:
      "SETNX만 성공하고 EXPIRE를 보내기 전에 프로세스가 죽으면 그 락은 만료 없이 남아 아무도 잡지 못한다. SET에 NX와 EX를 함께 주면 한 명령이라 그 틈이 없다. 풀 때도 내 토큰인지 확인하고 지우는 일을 Lua로 원자적으로 한다.",
    anchor: "문자열-값-카운터-락",
  },
  {
    id: "redis-basics-5",
    post: "redis-basics",
    question: "TTL이 300초 남은 캐시 키에 EX 없이 SET으로 값만 다시 쓰면 어떻게 되나?",
    choices: [
      "남은 TTL 300초가 그대로 유지된다",
      "TTL이 사라져 키가 만료되지 않는다",
      "키가 즉시 삭제된다",
      "에러가 나고 값이 바뀌지 않는다",
    ],
    answer: 1,
    explanation:
      "SET은 기존 만료 시간을 지우고 새 값을 쓴다. 그래서 TTL이 -1이 되고 그 키는 누가 지울 때까지 남는다. 만료를 유지하려면 6.0부터 생긴 KEEPTTL 옵션을 주거나 EX를 다시 준다.",
    anchor: "만료-시간을-다루는-명령",
  },
  {
    id: "redis-basics-6",
    post: "redis-basics",
    question: "재고가 0보다 클 때만 1을 빼는 작업을 원자적으로 하려면 무엇이 가장 알맞나?",
    choices: [
      "파이프라인으로 HGET과 HINCRBY를 함께 보낸다",
      "MULTI 안에서 HGET 결과를 보고 HINCRBY를 실행한다",
      "읽기와 판단, 쓰기를 한 번에 하는 Lua 스크립트를 쓴다",
      "HGET 후 응용 서버에서 판단하고 HINCRBY를 보낸다",
    ],
    answer: 2,
    explanation:
      "Lua 스크립트는 서버 안에서 하나의 명령처럼 실행되므로 읽은 값으로 판단하고 쓰는 과정에 다른 명령이 끼어들지 않는다. 파이프라인은 왕복만 줄일 뿐 원자적이지 않고, MULTI는 결과가 EXEC 뒤에야 나와 중간 값으로 분기할 수 없다.",
    anchor: "여러-명령을-묶는-세-가지-방법",
  },
  {
    id: "redis-basics-7",
    post: "redis-basics",
    question: "Redis를 주 데이터베이스로 쓰기 어려운 이유로 맞지 않는 것은?",
    choices: [
      "데이터가 전부 메모리에 있어야 해서 용량 대비 비싸다",
      "비동기 복제라 장애 조치 때 응답한 쓰기가 사라질 수 있다",
      "보조 인덱스나 조인 같은 임의 질의가 없다",
      "명령 하나하나가 원자적으로 실행되지 않는다",
    ],
    answer: 3,
    explanation:
      "Redis의 명령 하나는 한 스레드에서 끝까지 실행되므로 원자적이다. 주 저장소로 어려운 이유는 메모리 비용, RDB·AOF 설정과 비동기 복제에 따른 유실 가능성, 키 조회 외의 질의가 약하다는 데 있다.",
    anchor: "주-저장소로-쓰기-전에-따져-볼-것",
  },
];
