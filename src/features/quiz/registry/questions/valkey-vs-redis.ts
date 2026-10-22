import type { QuizQuestion } from "../types";

export const VALKEY_VS_REDIS: QuizQuestion[] = [
  {
    id: "valkey-vs-redis-1",
    post: "valkey-vs-redis",
    question: "Valkey가 Redis의 어느 버전에서 갈라져 나왔고, 그 이유는 무엇인가?",
    choices: [
      "Redis 8.0에서, AGPLv3를 피하려고",
      "Redis 7.0에서, 단일 스레드 구조를 바꾸려고",
      "Redis 7.2.4에서, 7.4부터 RSALv2/SSPLv1로 바뀌는 라이선스 변경 때문에",
      "Redis 6.0에서, I/O 스레드 기능을 따로 개발하려고",
    ],
    answer: 2,
    explanation:
      "2024년 3월 Redis가 7.4부터 소스 공개 라이선스로 바꾼다고 발표하자 Linux Foundation이 마지막 BSD 버전인 7.2.4를 갈라 Valkey를 만들었다. AGPLv3는 그 뒤 2025년 Redis 8에서 추가된 선택지다.",
    anchor: "라이선스가-바뀐-2년",
  },
  {
    id: "valkey-vs-redis-2",
    post: "valkey-vs-redis",
    question:
      "Redis에서 Valkey로 바꾼 날부터 모니터링 대시보드의 '모드' 칸이 비어 나온다. 가장 먼저 의심할 것은?",
    choices: [
      "Valkey가 RESP 프로토콜을 쓰지 않는다",
      "스크립트가 INFO의 redis_mode를 읽는데 Valkey는 기본으로 server_mode라는 이름을 쓴다",
      "Valkey는 INFO 명령을 지원하지 않는다",
      "Valkey가 standalone 모드를 지원하지 않는다",
    ],
    answer: 1,
    explanation:
      "Valkey 9.0.6의 기본 INFO server에는 redis_mode 대신 server_mode가 나온다. 파싱을 고치거나 임시로 extended-redis-compatibility yes를 켜면 redis_mode가 돌아온다.",
    anchor: "두-서버에-같은-질문을-던지면",
  },
  {
    id: "valkey-vs-redis-3",
    post: "valkey-vs-redis",
    question: "Valkey 9.0.6의 INFO에 redis_version:7.2.4가 나오는 이유로 맞는 것은?",
    choices: [
      "버전 문자열로 기능을 고르는 옛 클라이언트가 Redis 7.2로 보고 정상 동작하게 하려고",
      "실제로 Redis 7.2.4 코드를 한 줄도 바꾸지 않아서",
      "빌드할 때 버전을 지정하지 않으면 기본값이 7.2.4라서",
      "Redis 7.2.4의 RDB 파일만 읽을 수 있어서",
    ],
    answer: 0,
    explanation:
      "Valkey는 호환을 위해 redis_version을 포크 시점 값으로 고정한다. 실제 버전은 valkey_version에 있으니 기능 판단은 그 값과 server_name으로 한다.",
    anchor: "두-서버에-같은-질문을-던지면",
  },
  {
    id: "valkey-vs-redis-4",
    post: "valkey-vs-redis",
    question:
      "원소 200만 개짜리 셋에 DEL을 보냈더니 Redis 7.0.15는 847ms 동안 멈췄고 Valkey 9.0.6은 5ms에 끝났다. 왜 그런가?",
    choices: [
      "Valkey는 셋을 디스크에 저장해서 지울 것이 적다",
      "Valkey는 DEL을 받으면 키를 지우지 않고 무시한다",
      "Redis 7.0은 I/O 스레드가 꺼져 있어서",
      "Valkey는 lazyfree-lazy-user-del 기본값이 yes라 메모리 반환을 백그라운드 스레드에 넘긴다",
    ],
    answer: 3,
    explanation:
      "Valkey 8.0부터 lazyfree 설정 기본값이 yes라서 DEL도 UNLINK처럼 동작한다. Redis는 기본값이 no라 메인 스레드가 직접 메모리를 돌려주는 동안 다른 요청을 모두 세운다. I/O 스레드는 명령 실행과 상관이 없다.",
    anchor: "같은-del인데-한쪽만-멈춘다",
  },
  {
    id: "valkey-vs-redis-5",
    post: "valkey-vs-redis",
    question:
      "Valkey 9.0.6이 저장한 dump.rdb를 Redis 7.0.15에 넣고 띄우면 어떻게 되나?",
    choices: [
      "정상으로 읽히지만 Valkey 전용 키만 빠진다",
      "Wrong signature 오류를 내고 프로세스가 종료된다",
      "AOF로 자동 변환해서 읽는다",
      "읽기 전용 모드로 뜬다",
    ],
    answer: 1,
    explanation:
      "Valkey 9.0은 파일 머리말을 VALKEY080으로 쓰고, Redis는 REDIS로 시작하는 파일만 안다. 그래서 Redis에서 Valkey로는 넘어가도 Valkey에서 Redis로 RDB를 되돌릴 수는 없다.",
    anchor: "rdb-파일은-한쪽으로만-넘어간다",
  },
  {
    id: "valkey-vs-redis-6",
    post: "valkey-vs-redis",
    question:
      "세션 데이터를 잃지 않고 Redis에서 Valkey로 옮기려 한다. 쓰기를 넘기기 직전에 확인할 것은?",
    choices: [
      "Valkey의 maxmemory가 Redis보다 큰지",
      "Valkey에 KEYS *를 보내 키 수가 같은지",
      "프라이머리의 master_repl_offset과 레플리카의 slave_repl_offset이 같아졌는지",
      "두 서버의 redis_version이 같은지",
    ],
    answer: 2,
    explanation:
      "쓰기를 잠깐 멈춘 뒤 복제 오프셋이 같아져야 Redis의 마지막 쓰기가 Valkey에 도착한 것이다. 그때 REPLICAOF NO ONE으로 승격하고 앱 주소를 바꾼다. KEYS *는 운영 서버를 멈출 수 있다.",
    anchor: "멈추지-않고-옮기는-순서",
  },
  {
    id: "valkey-vs-redis-7",
    post: "valkey-vs-redis",
    question:
      "분산 락 해제를 Lua 스크립트 대신 Valkey 9의 DELIFEQ로 바꾸면 생기는 대가는?",
    choices: [
      "락이 원자적으로 풀리지 않는다",
      "Redis 쪽에는 이 명령이 없어서 Redis로 돌아가거나 섞어 쓰기 어려워진다",
      "Valkey 클러스터에서 쓸 수 없다",
      "락에 만료 시간을 걸 수 없다",
    ],
    answer: 1,
    explanation:
      "7.2.4 이후 각자 더한 명령은 상대에게 없다. Redis 7.0.15에 DELIFEQ를 보내면 unknown command가 나고, Redis 8.4는 같은 일을 DELEX라는 다른 이름으로 한다. 선택지를 남기려면 공통 기능 안에서 코드를 짠다.",
    anchor: "2024년-뒤에-생긴-명령은-서로-모른다",
  },
];
