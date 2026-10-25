import type { QuizQuestion } from "../types";

export const RW_LINE_REDIS_AT_SCALE: QuizQuestion[] = [
  {
    id: "rw-line-redis-at-scale-1",
    post: "rw-line-redis-at-scale",
    question: "LINE이 Redis 기본 구성을 '1 Primary - 1 Replica'로 두면서 대신 투자한 것은?",
    choices: [
      "레플리카를 디스크 기반으로 바꾸는 것",
      "프라이머리 장애 뒤 노드가 하나만 남는 시간을 줄이도록 새 레플리카를 빨리 붙이는 것(클라우드는 오토 힐링)",
      "모든 쓰기를 동기 복제로 바꾸는 것",
      "Sentinel을 서비스마다 세 대씩 두는 것",
    ],
    answer: 1,
    explanation:
      "레플리카가 둘이면 승격 대상을 고르는 과정과 레플리카 사이 충돌 가능성이 생겨 하나만 둔다. 그 대신 승격 뒤 위험한 1노드 상태를 오래 두지 않으려고, 준비해 둔 장비나 클라우드 오토 힐링으로 레플리카를 다시 붙인다.",
    anchor: "레플리카를-하나만-두는-이유",
  },
  {
    id: "rw-line-redis-at-scale-2",
    post: "rw-line-redis-at-scale",
    question: "LINE 운영 글이 오토 힐링과 샤드 축소가 무중단이 되려면 꼭 필요하다고 강조한 것은?",
    choices: [
      "레플리카를 세 개 이상 두는 것",
      "모든 키에 TTL을 거는 것",
      "DNS 기반 엔드포인트와 클러스터 토폴로지 변경을 알아차리는 옵션 같은 클라이언트 설정",
      "AOF를 켜 두는 것",
    ],
    answer: 2,
    explanation:
      "서버 쪽 HA가 좋아도 클라이언트가 옛 주소를 들고 있거나 구성 변경을 따라가지 못하면 승격, 노드 교체, 축소가 장애가 된다. 그래서 캠페인을 준비하며 사내 클라이언트 설정 가이드를 늘리고 다듬었다.",
    anchor: "쓰지-않는-redis를-찾는-법",
  },
  {
    id: "rw-line-redis-at-scale-3",
    post: "rw-line-redis-at-scale",
    question: "req-shield가 캐시에 값이 있는데도 락을 쓰는 경우는?",
    choices: [
      "TTL이 설정한 비율만큼 지난 값이 조회될 때, 한 요청만 비동기로 미리 갱신하게 하려고",
      "캐시 값이 손상됐을 때 복구하려고",
      "모든 조회를 순서대로 처리하려고",
      "캐시 서버가 다운됐을 때 DB로 우회하려고",
    ],
    answer: 0,
    explanation:
      "캐시가 있으면 모두 기존 값으로 바로 응답하고, 락을 잡은 요청 하나만 비동기로 저장소에서 새 값을 가져와 갱신한다. 일정한 트래픽이 있는 한 캐시가 만료돼 비는 순간 자체가 오지 않는다.",
    anchor: "캐시가-비는-순간-백-명이-몰린다",
  },
  {
    id: "rw-line-redis-at-scale-4",
    post: "rw-line-redis-at-scale",
    question: "LINE의 부하 테스트에서 Spring @Cacheable의 sync=true가 sync=false보다 느렸던 이유로 글이 든 것은?",
    choices: [
      "sync=true가 캐시를 아예 쓰지 않아서",
      "Redis 서버가 sync 명령을 처리하느라",
      "TTL이 0으로 바뀌어서",
      "같은 인수의 동시 요청을 하나만 보내려고 spring-data-redis 2.7.17에서 synchronized를 쓰기 때문에",
    ],
    answer: 3,
    explanation:
      "sync=true는 동시 미스를 하나로 줄이지만 그 구현이 synchronized라 약 20%의 성능 저하가 났다고 글은 썼다. 3.0부터 ReentrantLock으로 바뀌었어도 현상은 같다고 했고, 캐시 제공자에 따라 sync를 지원하지 않기도 한다.",
    anchor: "부하-테스트가-보여-준-것과-synctrue의-값",
  },
  {
    id: "rw-line-redis-at-scale-5",
    post: "rw-line-redis-at-scale",
    question: "클러스터 전체에 96GB를 쓸 수 있는데 Redis Streams를 큐로 쓰자 4일 만에 한 노드에서 메모리 경고가 난 이유는?",
    choices: [
      "스트림이 메시지마다 다른 슬롯에 흩어져 저장돼서",
      "스트림은 이름이 키인 값 하나라 키 하나는 노드 하나에만 저장되므로, 모든 메시지가 한 샤드에 쌓여서",
      "XACK를 하지 않아 메시지가 두 배로 복제돼서",
      "레플리카가 메모리를 두 배로 써서",
    ],
    answer: 1,
    explanation:
      "Redis 클러스터는 키를 CRC16 mod 16384 슬롯으로 나누고 키 하나는 반드시 한 노드에 둔다. 96GB 계산은 데이터가 모든 샤드에 고르게 나뉜다는 가정이었는데, 스트림 하나는 한 샤드에만 산다. 큰 키는 확장·축소 때 장애와 싱글 스레드 지연도 부른다.",
    anchor: "스트림-하나가-노드-하나를-채웠다",
  },
  {
    id: "rw-line-redis-at-scale-6",
    post: "rw-line-redis-at-scale",
    question: "스트림을 여러 키로 나눌 때 이름에 해시 태그(예: retriever:{a}:1, retriever:{a}:2)를 넣으면 어떻게 되나?",
    choices: [
      "중괄호 안만 해시하므로 이름이 달라도 같은 슬롯에 모여, 나눈 효과가 사라진다",
      "슬롯이 더 고르게 흩어진다",
      "해시 태그가 있는 키는 레플리카에만 저장된다",
      "XREADGROUP을 쓸 수 없게 된다",
    ],
    answer: 0,
    explanation:
      "실제로 두 키 모두 CLUSTER KEYSLOT이 15495로 같았다. 여러 키를 한 명령으로 다루려고 해시 태그를 쓰는 습관이 있다면, 샤드에 흩어야 하는 스트림 키에는 일부러 빼야 한다.",
    anchor: "키-하나의-무게를-직접-재-보기",
  },
  {
    id: "rw-line-redis-at-scale-7",
    post: "rw-line-redis-at-scale",
    question: "샤드 6개에 무작위로 떨어지는 스트림 키 18개가 모든 샤드를 덮을 확률을 정확히 계산하면?",
    choices: [
      "약 95%",
      "100%",
      "약 78.5%",
      "약 50%",
    ],
    answer: 2,
    explanation:
      "포함-배제로 계산하면 약 78.5%이고, 무작위 시험으로도 비슷하게 나온다. 95%를 넘기려면 27개가 필요하다. LINE은 근사식으로 17.34개를 구해 18개를 만들었고, 실제 배치를 확인해 고르게 나뉜 것을 검증했다.",
    anchor: "스트림을-몇-개로-나눠야-모든-샤드에-닿나",
  },
];
