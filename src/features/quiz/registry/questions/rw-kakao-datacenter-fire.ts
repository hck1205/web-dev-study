import type { QuizQuestion } from "../types";

export const RW_KAKAO_DATACENTER_FIRE: QuizQuestion[] = [
  {
    id: "rw-kakao-datacenter-fire-1",
    post: "rw-kakao-datacenter-fire",
    question: "정부 조사 결과가 꼽은, 카카오의 대기(Standby) 시스템이 제대로 동작하지 못한 핵심 원인은?",
    choices: [
      "다른 데이터센터에 서버가 한 대도 없었다",
      "대기 서버를 동작 서버로 바꾸는 운영 및 관리 도구가 판교 안에서만 이중화돼 있었다",
      "다른 데이터센터의 네트워크가 화재로 함께 끊겼다",
      "데이터 백업이 없어 대기 서버에 데이터가 없었다",
    ],
    answer: 1,
    explanation:
      "카카오는 판교를 Active, 다른 센터를 Standby로 두었지만, 대기를 동작으로 바꾸는 권한 관리 기능인 운영 및 관리 도구가 판교 안에서만 이중화돼 있었다. 판교가 꺼지자 넘기는 손잡이도 같이 꺼졌다. 다른 데이터센터에도 서버는 있었다.",
    anchor: "서버는-네-곳에-있었는데",
  },
  {
    id: "rw-kakao-datacenter-fire-2",
    post: "rw-kakao-datacenter-fire",
    question: "UPS로 전원을 이중화했는데도 판교의 서버가 꺼진 이유로 정부 자료에 맞는 것은?",
    choices: [
      "한전 전력이 끊겨서 UPS가 충전되지 않았다",
      "UPS가 처음부터 한 대뿐이었다",
      "일부 UPS가 배터리와 완전히 분리되지 않은 공간에 있어 화재 열기로 함께 멈췄고, 이후 살수를 위해 전체 전력을 끊었다",
      "카카오가 서버 보호를 위해 스스로 전원을 내렸다",
    ],
    answer: 2,
    explanation:
      "이중화는 두 경로가 따로 고장 난다는 가정에서 효과가 있다. 같은 공간의 UPS가 같은 원인으로 동시에 멈추자 그 UPS들에서 전원을 받던 서버는 꺼졌고, 물을 뿌려야 하는 상황에서 구역별 차단이 어려워 건물 전체 전력이 차단됐다.",
    anchor: "건물-전기가-내려가기까지",
  },
  {
    id: "rw-kakao-datacenter-fire-3",
    post: "rw-kakao-datacenter-fire",
    question: "ZooKeeper 3대를 데이터센터 A에 2대, B에 1대 두었다. A가 통째로 꺼지면?",
    choices: [
      "B의 1대가 과반이 아니라서 쿼럼을 잃는다",
      "B의 1대가 리더가 되어 정상 동작한다",
      "꺼진 2대가 투표에서 빠지므로 1대로도 과반이다",
      "A가 꺼지든 B가 꺼지든 항상 동작한다",
    ],
    answer: 0,
    explanation:
      "쿼럼은 전체 구성원의 과반, 3대면 2대가 살아 있어야 한다. 두 곳에 나누면 많은 쪽이 꺼질 때 남은 쪽이 과반이 아니다. 그래서 카카오는 쿼럼 구성 요소를 최소 세 가용 구역에 나눠야 한다고 정리했다.",
    anchor: "클러스터마다-다르게-무너졌다",
  },
  {
    id: "rw-kakao-datacenter-fire-4",
    post: "rw-kakao-datacenter-fire",
    question: "카카오의 깃허브는 데이터센터 간 Active-Standby였는데 승격에 3~4시간이 걸렸다. 발표가 적은 이유로 맞는 것은?",
    choices: [
      "대기 쪽 데이터가 일주일 전 백업이라 복원이 오래 걸렸다",
      "Elasticsearch unassigned shard 문제와 LDAP 전환 절차가 겹쳤고, failover 테스트를 Dev에서만 해 봤다",
      "깃허브 라이선스가 판교 서버에 묶여 있었다",
      "네트워크 대역폭이 부족해 저장소를 다시 내려받았다",
    ],
    answer: 1,
    explanation:
      "매뉴얼상 10분이던 승격이 실제로는 ES 샤드 문제와 LDAP 전환에 UI로 권한을 얻는 절차가 겹쳐 길어졌다. 발표는 Prod 단계에서 모의 훈련을 해 본 적이 없었다고 적었다. 운영 환경에서 넘겨 보지 않은 대기는 넘길 때만 드러나는 문제를 안고 있다.",
    anchor: "손잡이가-불난-건물-안에-있었다",
  },
  {
    id: "rw-kakao-datacenter-fire-5",
    post: "rw-kakao-datacenter-fire",
    question: "데이터센터를 넘긴 직후 DB에 병목이 생긴 이유와 카카오가 세운 대책의 짝으로 맞는 것은?",
    choices: [
      "넘긴 쪽 DB가 읽기 전용이라서 — DB를 Active-Active로 바꾼다",
      "GSLB가 트래픽을 반만 넘겨서 — GSLB를 늘린다",
      "로그 수집이 몰려서 — 로그를 끈다",
      "로그인·동기화 같은 무거운 요청이 빈 캐시로 몰려서 — 웜업으로 요청을 점진적으로 늘리고 클라이언트 재요청 규칙을 정한다",
    ],
    answer: 3,
    explanation:
      "넘긴 직후 초기 트래픽은 자원을 많이 쓰는 요청이고 캐시는 비어 있다. 카카오는 병목 구간을 100% 이상 받을 수 있게 두고, 웜업으로 요청을 시간에 나눠 늘리고, 재요청 규칙으로 셀프 디도스를 막는 대책을 냈다.",
    anchor: "넘어가도-끝이-아니었다",
  },
  {
    id: "rw-kakao-datacenter-fire-6",
    post: "rw-kakao-datacenter-fire",
    question: "Redis RHA의 failover 데몬이 전면 장애 때 오히려 문제가 된 이유는?",
    choices: [
      "데몬이 판교에만 있어서 같이 꺼졌다",
      "데몬이 너무 빨리 failover해서 데이터가 갈라졌다",
      "네트워크 순단 같은 일시적 장애에 전면 전환하지 않게 막는 로직이 진짜 전면 장애 때 필요한 failover를 방해했다",
      "데몬 설정이 Redis 클러스터용이라 RHA에 맞지 않았다",
    ],
    answer: 2,
    explanation:
      "평소의 짧은 순단에 괜히 넘어가지 않게 만든 보호 장치가, 데이터센터 하나가 통째로 사라진 상황에서는 넘어가야 할 때 넘어가지 못하게 했다. 보호 로직은 전면 장애 시나리오에서도 기대대로 도는지 시험해야 한다.",
    anchor: "클러스터마다-다르게-무너졌다",
  },
  {
    id: "rw-kakao-datacenter-fire-7",
    post: "rw-kakao-datacenter-fire",
    question: "리전 하나에서 도는 작은 서비스가 이 사고에서 가장 먼저 가져올 점검으로 이 글이 권하는 것은?",
    choices: [
      "곧바로 두 번째 리전에 같은 구성을 하나 더 만든다",
      "배포·코드·이미지 레지스트리·비밀 값·SSO·모니터링 같은 복구 도구가 서비스와 같은 장애 영역에만 있는지 확인한다",
      "모든 구성 요소를 세 리전에 Active-Active로 둔다",
      "자체 데이터센터를 짓는다",
    ],
    answer: 1,
    explanation:
      "카카오는 데이터센터가 네 곳이었지만 복구 도구가 판교에 묶여 오래 멈췄다. 개수를 늘리기 전에 다른 곳에서 서비스를 다시 세울 수 있는 경로가 살아 있는지부터 본다. 모든 것을 세 곳에 두는 것은 규모와 비용이 맞을 때의 선택이다.",
    anchor: "데이터센터가-한-곳뿐인-우리-팀이라면",
  },
];
