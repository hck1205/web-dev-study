import type { QuizQuestion } from "../types";

export const RW_GOOGLE_SPANNER_TRUETIME: QuizQuestion[] = [
  {
    id: "rw-google-spanner-truetime-1",
    post: "rw-google-spanner-truetime",
    question: "TrueTime의 TT.now()가 일반적인 시각 함수와 다른 점은?",
    choices: [
      "원자시계 값을 그대로 돌려줘서 오차가 0이다",
      "실제 시각이 반드시 들어 있는 [earliest, latest] 구간을 돌려줘 오차 폭을 드러낸다",
      "논리 시계라서 실제 시각과 상관없이 늘 1씩 커진다",
      "가장 가까운 데이터센터의 시각을 돌려준다",
    ],
    answer: 1,
    explanation:
      "TT.now()는 값 하나가 아니라 구간을 주고, 호출한 순간의 실제 시각이 그 안에 있다고 보장한다. 구간 폭의 절반이 ε이다. 원자시계와 GPS를 쓰지만 오차가 0인 것은 아니어서 2012년 논문 기준 ε은 약 1~7ms였다.",
    anchor: "시각을-구간으로-돌려주는-api",
  },
  {
    id: "rw-google-spanner-truetime-2",
    post: "rw-google-spanner-truetime",
    question: "코디네이터가 커밋 시각 s를 TT.now().latest 이상으로 잡은 뒤 TT.after(s)가 참이 될 때까지 결과를 공개하지 않는 이유는?",
    choices: [
      "Paxos 복제가 끝났는지 확인하려고",
      "다른 리더의 리스가 끝나기를 기다리려고",
      "s가 실제 커밋 시각보다 앞서게 해서, 그 뒤 시작한 트랜잭션이 반드시 더 큰 시각을 받게 하려고",
      "잠금 충돌을 줄이려고",
    ],
    answer: 2,
    explanation:
      "커밋 대기가 끝나면 s는 확실히 과거가 된다. 그 결과를 본 뒤 시작한 트랜잭션은 latest 규칙 때문에 s보다 큰 시각을 받아 외부 일관성이 지켜진다. 대기는 Paxos 통신과 겹쳐 진행되지만 목적은 복제 확인이 아니다.",
    anchor: "시각을-정하고-그-시각이-지나갈-때까지-기다린다",
  },
  {
    id: "rw-google-spanner-truetime-3",
    post: "rw-google-spanner-truetime",
    question: "2012년 논문 기준으로 ε이 조회 주기마다 약 1ms에서 7ms 사이를 오가는 이유는?",
    choices: [
      "데몬이 30초마다 마스터에 묻고, 그 사이에는 최악 흐름 초당 200마이크로초를 가정해 ε을 키우기 때문이다",
      "GPS 위성이 30초마다 신호를 끊기 때문이다",
      "원자시계가 7ms마다 초기화되기 때문이다",
      "리더 리스가 10초라서 그 사이에 시각이 흔들리기 때문이다",
    ],
    answer: 0,
    explanation:
      "30초 동안 초당 200마이크로초씩 흐른다고 보면 6ms, 마스터까지 통신 지연 1ms를 더하면 7ms다. 다시 물으면 1ms로 떨어지니 톱니 모양이 된다. 평균 오차 한계는 대부분 4ms였다.",
    anchor: "gps와-원자시계-그리고-30초마다-묻기",
  },
  {
    id: "rw-google-spanner-truetime-4",
    post: "rw-google-spanner-truetime",
    question: "Eric Brewer의 2017년 글에 따르면 Spanner의 높은 가용성을 만든 가장 큰 요인은?",
    choices: [
      "TrueTime이 네트워크 분할을 감지해 막아 주기 때문이다",
      "최종 일관성으로 분할 중에도 양쪽에서 쓰기를 받기 때문이다",
      "Paxos 대신 2단계 커밋만 쓰기 때문이다",
      "Google이 직접 운영하는 사설 글로벌 네트워크와 오랜 운영 개선으로 분할 자체가 드물기 때문이다",
    ],
    answer: 3,
    explanation:
      "Brewer는 TrueTime이 CA에 거의 도움이 안 된다고 적었다. Spanner는 엄밀히 CP라서 분할 중에는 일관성을 지키고 가용성을 내준다. 다만 사설 네트워크와 경로 이중화, 변경 범위 관리 덕분에 분할이 드물어 5 나인 이상의 가용성을 냈다.",
    anchor: "truetime이-cap을-이긴-것은-아니다",
  },
  {
    id: "rw-google-spanner-truetime-5",
    post: "rw-google-spanner-truetime",
    question: "리더가 몰린 존을 경고 없이 죽인 실험에서 처리량이 약 10초 뒤에야 회복한 이유는?",
    choices: [
      "TrueTime의 ε이 10초로 커져서",
      "Paxos 리더 리스가 10초라서, 죽은 리더의 리스가 끝나야 새 리더를 뽑을 수 있어서",
      "MinNextTS가 10초마다만 올라가서",
      "클라이언트가 10초마다 멤버십을 갱신해서",
    ],
    answer: 1,
    explanation:
      "리더 리스는 기본 10초이고 리스 구간이 겹치지 않아야 하므로, 죽은 리더의 리스가 끝나야 새 리더가 뽑힌다. 리더를 미리 넘기라고 알린 경우에는 3~4%만 떨어졌다. MinNextTS의 기본 주기는 8초로 읽기 쪽 이야기다.",
    anchor: "숫자로-본-비용",
  },
  {
    id: "rw-google-spanner-truetime-6",
    post: "rw-google-spanner-truetime",
    question: "Spanner에서 읽기 전용 트랜잭션과 스냅숏 읽기가 리더가 아닌 복제본에서도 돌 수 있는 근거는?",
    choices: [
      "복제본마다 안전 시각을 들고 있어서, 읽으려는 시각이 그 이하면 그 복제본의 데이터가 충분히 최신이라고 판단할 수 있다",
      "모든 복제본이 동기적으로 같은 데이터를 갖기 때문이다",
      "읽기 전용 트랜잭션은 최종 일관성만 보장하기 때문이다",
      "복제본이 매 읽기마다 리더에게 확인하기 때문이다",
    ],
    answer: 0,
    explanation:
      "시각이 단조 증가하고 Paxos 쓰기가 순서대로 적용되니, 복제본은 적용한 쓰기 중 가장 큰 시각과 prepare 중인 트랜잭션을 보고 안전 시각을 계산한다. 그 이하 시각의 읽기는 잠금 없이 그 복제본에서 답할 수 있다. 그래서 스냅숏 읽기 처리량이 복제본 수에 거의 비례해 늘었다.",
    anchor: "읽기는-잠금-없이-아무-복제본에서",
  },
  {
    id: "rw-google-spanner-truetime-7",
    post: "rw-google-spanner-truetime",
    question: "원자시계와 사설 네트워크가 없는 팀이 Spanner에서 가져오기 좋은 습관은?",
    choices: [
      "서버 시각으로 이벤트 순서를 정하고 커밋 때 몇 ms씩 기다린다",
      "모든 트랜잭션을 여러 리전에 걸쳐 2단계 커밋으로 처리한다",
      "같이 바뀌는 행을 같은 샤드 키 아래 두어 분산 트랜잭션을 예외로 만들고, 서버 시계는 순서의 근거로 쓰지 않는다",
      "NTP를 끄고 로컬 시계만 쓴다",
    ],
    answer: 2,
    explanation:
      "오차 한계를 보장할 수 없는 시계로 기다리면 기다림이 아무것도 증명하지 못한다. 대신 F1의 디렉터리처럼 키 설계로 한 사용자의 일을 한 곳에 모으고, 순서는 DB가 주는 커밋 순서나 시퀀스로 정한다.",
    anchor: "원자시계가-없는-팀이-가져올-것",
  },
];
