import type { QuizQuestion } from "../types";

export const RW_NETFLIX_CHAOS_ENGINEERING: QuizQuestion[] = [
  {
    id: "rw-netflix-chaos-engineering-1",
    post: "rw-netflix-chaos-engineering",
    question: "Simian Army 시절 Chaos Monkey가 평일 업무 시간에만 돌았던 이유로 문서가 든 것은?",
    choices: [
      "업무 시간에는 트래픽이 적어서 피해가 작기 때문에",
      "AWS API가 주말에는 느려서",
      "문제가 생겼을 때 사람이 깨어 있어 대응하고 배울 수 있게 하려고",
      "야간에는 배포가 몰려 충돌이 나서",
    ],
    answer: 2,
    explanation:
      "문서는 대부분의 앱이 동료 인스턴스가 사라져도 버티게 설계됐지만, 예외적인 경우에 대응하고 배울 사람이 곁에 있도록 업무 시간에만 돈다고 적었다. 장애를 새벽 3시 호출로 알기보다 출근한 뒤에 먼저 겪자는 것이다. 트래픽 크기는 문서가 든 이유가 아니다.",
    anchor: "원숭이-무리가-맡은-일",
  },
  {
    id: "rw-netflix-chaos-engineering-2",
    post: "rw-netflix-chaos-engineering",
    question: "2016년판 Chaos Monkey에서 평균 종료 간격 μ를 5로 둔 그룹은 평일마다 어떤 확률로 종료가 예약되나?",
    choices: ["0.2", "0.5", "5", "1/6"],
    answer: 0,
    explanation:
      "평일마다 그룹마다 앞면 확률 p = 1 ÷ μ인 동전을 던지니 μ=5면 0.2다. 종료 간격은 기하 분포를 따르고 평균이 μ가 된다. 1/6은 하루 여섯 번 돌던 Simian Army 시절의 실행당 확률 계산에서 나온 숫자다.",
    anchor: "확률-하나로-정하는-끄는-날",
  },
  {
    id: "rw-netflix-chaos-engineering-3",
    post: "rw-netflix-chaos-engineering",
    question: "Chaos Monkey가 장애 확인기에 물었는데 확인 자체가 오류로 실패했다. 코드는 어떻게 하나?",
    choices: [
      "장애가 없는 것으로 보고 계속 진행한다",
      "안전한 쪽으로 기울어 그 종료를 하지 않는다",
      "목줄을 자동으로 풀고 즉시 끈다",
      "다음 날로 종료를 미뤄 다시 예약한다",
    ],
    answer: 1,
    explanation:
      "term.go는 장애 확인이 실패하면 안전한 쪽을 택해 끄지 않는다는 주석과 함께 멈춘다. 추적기 기록이 실패해도 끄지 않는다. 확실하지 않으면 끄지 않는 것이 이 도구의 기본 성격이다.",
    anchor: "서버-하나를-끄기-전에-확인하는-것들",
  },
  {
    id: "rw-netflix-chaos-engineering-4",
    post: "rw-netflix-chaos-engineering",
    question: "공개판 Chaos Monkey를 설치하고 설정 파일을 하나도 바꾸지 않았다. 무슨 일이 일어나나?",
    choices: [
      "모든 계정에서 평균 이틀마다 인스턴스를 끈다",
      "test 계정에서만 인스턴스를 끈다",
      "업무 시간마다 한 시간 간격으로 인스턴스를 끈다",
      "아무것도 끄지 않는다. 꺼짐, 목줄, 일정 꺼짐, 빈 계정 목록이 기본값이다",
    ],
    answer: 3,
    explanation:
      "기본값은 enabled = false, leashed = true, schedule_enabled = false, accounts = []다. 넷 다 바꿔야 실제로 인스턴스가 꺼진다. 다만 장애 확인기 같은 플러그인은 빈 구현이라 목줄을 풀기 전에 직접 채워야 한다.",
    anchor: "서버-하나를-끄기-전에-확인하는-것들",
  },
  {
    id: "rw-netflix-chaos-engineering-5",
    post: "rw-netflix-chaos-engineering",
    question: "ChAP가 카나리 그룹 사용자에게만 북마크 호출 실패를 주입하려고 쓰는 방법은?",
    choices: [
      "북마크 서비스 인스턴스를 Chaos Monkey로 모두 끈다",
      "Zuul 필터가 그 사용자의 요청에 라우팅 헤더와 장애 헤더를 붙이고, 공통 라이브러리가 그 표시를 보고 호출을 실패시킨다",
      "DNS에서 북마크 서비스의 레코드를 지운다",
      "북마크 서비스 코드에 실험용 분기를 넣어 다시 배포한다",
    ],
    answer: 1,
    explanation:
      "Zuul 필터가 사용자 1%씩을 기준·카나리 그룹에 넣고, 카나리 그룹 요청에 api → api-canary 라우팅과 북마크 호출 실패 표시를 붙인다. 요청이 시스템을 지나며 표시를 들고 가고, FIT가 공통 라이브러리에서 그 호출만 실패시킨다. 인스턴스를 끄면 모든 사용자가 영향을 받아 대조군 비교가 안 된다.",
    anchor: "사용자-1에게만-장애를-주는-실험",
  },
  {
    id: "rw-netflix-chaos-engineering-6",
    post: "rw-netflix-chaos-engineering",
    question: "Chaos Monkey의 enabled, leashed 값을 etcd나 Consul로 바꿔 비상 스위치로 쓰려 한다. 문서가 경고한 함정은?",
    choices: [
      "etcd 값은 다음 날부터만 반영된다",
      "Consul은 leashed 값을 지원하지 않는다",
      "설정 파일에 같은 값이 있으면 파일이 이기므로, 파일에서 그 값을 빼 두어야 한다",
      "동적 설정을 쓰면 MySQL이 필요 없어진다",
    ],
    answer: 2,
    explanation:
      "배포 문서는 설정 파일이 동적 저장소보다 우선한다고 적었다. 파일에 enabled가 적혀 있으면 etcd에서 값을 내려도 바뀌지 않는다. 비상 스위치는 막상 내려야 할 때 안 먹히면 소용이 없으니 미리 확인해 둔다.",
    anchor: "문서대로-깔아-보면-보이는-운영-부담",
  },
  {
    id: "rw-netflix-chaos-engineering-7",
    post: "rw-netflix-chaos-engineering",
    question: "Monocle 실험에서 Hystrix 명령에 약 900ms 지연을 넣자 스레드 풀 거절이 치솟았다. 논문이 찾은 원인과 해법은?",
    choices: [
      "스레드 풀이 너무 커서 메모리가 부족했다. 풀을 줄였다",
      "폴백이 없어서 오류가 났다. 폴백을 추가했다",
      "타임아웃이 스레드 풀 크기에 비해 너무 높아 스레드가 오래 묶였다. 타임아웃을 실제 P99에 맞춰 낮췄다",
      "Eureka가 죽은 인스턴스를 돌려줬다. 하트비트 간격을 줄였다",
    ],
    answer: 2,
    explanation:
      "느린 호출이 높은 타임아웃까지 스레드를 붙잡아 풀이 꽉 찼고, 새 요청은 거절돼 한동안 무조건 폴백이 나갔다. 설정된 타임아웃이 지표의 P99 지연보다 훨씬 높았으니 해법은 타임아웃을 낮추는 것이었다. 풀 크기가 같아도 각 호출이 오래 기다리면 처리량이 줄어든다.",
    anchor: "무엇을-실험할지-기계가-고른다",
  },
];
