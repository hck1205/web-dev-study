import type { QuizQuestion } from "../types";

export const RW_STACK_OVERFLOW_FEW_SERVERS: QuizQuestion[] = [
  {
    id: "rw-stack-overflow-few-servers-1",
    post: "rw-stack-overflow-few-servers",
    question: "2016년 Stack Overflow는 웹 서버 한 대로도 돌아간 적이 있다고 했다. 그런데도 운영용 웹 서버를 아홉 대 둔 이유로 원문이 든 것은?",
    choices: [
      "사이트마다 전용 서버가 필요해서",
      "롤링 빌드, 헤드룸, 이중화를 위해서",
      "SQL Server 연결 수 제한을 나누려고",
      "CloudFlare가 최소 서버 수를 요구해서",
    ],
    answer: 1,
    explanation:
      "원문은 웹 계층을 넉넉히 둔 이유로 rolling builds, headroom, redundancy를 든다. 배포 중 몇 대를 빼도, 갑자기 몰려도, 한두 대가 죽어도 버티게 하려는 것이다. 앱은 멀티테넌트라 사이트마다 서버를 따로 두지 않았다.",
    anchor: "웹-서버-아홉-대가-모든-사이트를-띄운다",
  },
  {
    id: "rw-stack-overflow-few-servers-2",
    post: "rw-stack-overflow-few-servers",
    question: "웹 서버마다 메모리 캐시가 있을 때, Redis 값을 지우기 전에 pub/sub으로 무효화 알림부터 보내면 생길 수 있는 문제는?",
    choices: [
      "알림 메시지가 Redis 메모리를 가득 채운다",
      "모든 서버가 동시에 SQL Server로 몰려 DB가 멈춘다",
      "알림을 받은 서버가 아직 남은 옛 값을 Redis에서 다시 가져와 계속 보여 준다",
      "Redis가 같은 키에 대한 PUBLISH를 거부한다",
    ],
    answer: 2,
    explanation:
      "원문은 순서를 바꾸면 경쟁이 생겨 옛 값을 다시 가져오는 일이 생긴다고 쓴다. 메모리를 비운 서버가 Redis에 물었을 때 아직 지워지지 않은 값이 있으면 그걸 다시 담는다. 그래서 Redis에서 먼저 지우고 그다음 알린다.",
    anchor: "캐시는-세-층-지우라는-신호는-redis로",
  },
  {
    id: "rw-stack-overflow-few-servers-3",
    post: "rw-stack-overflow-few-servers",
    question: "Stack Overflow가 Q&A 페이지의 출력 캐시(페이지 전체 캐시)를 끊은 가장 큰 이유는?",
    choices: [
      "질문 대부분이 2주 안에 고르게 읽혀 적중률이 낮고, 메모리와 GC 비용만 컸다",
      "Redis에 페이지를 넣기엔 네트워크가 느렸다",
      "CloudFlare가 이미 모든 페이지를 캐시하고 있었다",
      "SQL Server의 CPU가 부족해 캐시를 채울 수 없었다",
    ],
    answer: 0,
    explanation:
      "2019년 글은 질문의 약 80%가 2주마다 한 번씩 읽힌다고 쓴다. 다시 쓰이지 않는 페이지가 메모리를 차지하고 가비지 컬렉션 비용을 늘려서 출력 캐시를 뺐다. SQL Server CPU는 오히려 5~10%로 여유가 많았다.",
    anchor: "캐시하지-않기로-한-것",
  },
  {
    id: "rw-stack-overflow-few-servers-4",
    post: "rw-stack-overflow-few-servers",
    question: "태그 엔진, Elasticsearch, 웹소켓을 웹 앱 밖으로 뺀 방식이 업무 단위 마이크로서비스와 다른 점으로 가장 알맞은 것은?",
    choices: [
      "팀마다 서비스를 하나씩 맡기려고 나눴다",
      "질문·답변·사용자 기능을 각각 다른 서비스로 옮겼다",
      "데이터베이스를 서비스마다 하나씩 따로 두려고 나눴다",
      "업무 기능이 아니라 태그 계산·검색·오래 붙는 연결처럼 자원 모양이 다른 일만 뺐다",
    ],
    answer: 3,
    explanation:
      "자료에서 업무 코드는 웹 앱 하나에 남아 있다. 따로 돈 것은 태그 교집합 계산, 전문 검색, 동시 연결 50만 개 같은 다른 성격의 일이다. 팀이나 도메인 경계로 나누는 마이크로서비스와는 분리 기준이 다르다.",
    anchor: "sql로-하기엔-비싼-일만-따로-뺐다",
  },
  {
    id: "rw-stack-overflow-few-servers-5",
    post: "rw-stack-overflow-few-servers",
    question: "모놀리스를 롤링 배포할 때 Stack Overflow가 마이그레이션을 코드보다 먼저, 멱등하게 돌리고 삭제는 다음 배포로 미룬 이유는?",
    choices: [
      "SQL Server가 배포 중에는 쓰기를 막기 때문에",
      "배포 중 옛 코드와 새 코드가 함께 돌아서 스키마가 두 버전 모두와 맞아야 하기 때문에",
      "마이그레이션을 되돌리는 것이 금지되어 있기 때문에",
      "웹 서버 아홉 대가 각자 다른 DB를 쓰기 때문에",
    ],
    answer: 1,
    explanation:
      "원문에 따르면 배포 중에도 아홉 대 중 보통 일곱 대가 요청을 받으므로, 한동안 두 버전이 섞여 돈다. 그래서 스키마는 양쪽과 맞게 늘리고, 지우는 변경은 다음 배포에서 한다. 되돌리기가 금지된 건 아니고 드물게 쓸 뿐이다.",
    anchor: "하나를-하루-몇-번씩-배포하는-법",
  },
  {
    id: "rw-stack-overflow-few-servers-6",
    post: "rw-stack-overflow-few-servers",
    question: "클라우드에서 운영하는 팀이 Stack Overflow처럼 요청 하나에 캐시를 수십 번 부르는 설계를 그대로 가져오면 가장 먼저 부딪힐 수 있는 문제는?",
    choices: [
      "Redis가 pub/sub을 지원하지 않는다",
      "클라우드에서는 메모리 캐시를 쓸 수 없다",
      "원문이 전제한 같은 LAN의 짧은 왕복(약 0.17ms)보다 지연이 커서 호출 수만큼 응답이 느려진다",
      "SQL Server 라이선스 때문에 캐시 계층을 둘 수 없다",
    ],
    answer: 2,
    explanation:
      "2019년 글은 LAN에서 Redis 왕복이 0.17ms였다고 쓰고, 클라우드 지연은 보통 더 높으니 직접 재 보라고 경고한다. 왕복 시간이 몇 배가 되면 요청당 호출 수가 그대로 응답 시간에 곱해진다.",
    anchor: "작은-팀이-이-연재에서-가져올-것",
  },
  {
    id: "rw-stack-overflow-few-servers-7",
    post: "rw-stack-overflow-few-servers",
    question: "2025년 Stack Overflow가 공개 사이트를 클라우드로 옮길 때 가장 먼저 부하 테스트부터 한 이유로 회사 블로그가 든 것은?",
    choices: [
      "클라우드 요금이 요청 수에 따라 매겨져서 미리 계산해야 했다",
      "앱이 짧은 응답 시간과 서버 이름 같은 데이터센터 전제를 코드 곳곳에 담고 있어서, 그대로 돌아갈지 알 수 없었다",
      "Redis를 없애고 SQL Server만으로 버틸 수 있는지 확인하려고",
      "Kubernetes가 웹 서버를 아홉 대 이상 띄울 수 없어서",
    ],
    answer: 1,
    explanation:
      "글은 30ms를 넘는 응답이 사이트 전체에 문제를 일으킬 수 있을 만큼 지연을 가정했고, 서버 이름부터 지연까지 가정이 코드에 많았다고 쓴다. 그래서 운영과 같은 환경에서 부하 테스트를 돌려 느린 곳을 고쳤다. Redis는 없앤 게 아니라 관리형 Memorystore로 옮겼다.",
    anchor: "2025년-데이터센터를-떠나다",
  },
];
