import type { QuizQuestion } from "../types";

export const HABIT_FEATURES_PROGRESS_REMINDERS: QuizQuestion[] = [
  {
    id: "habit-features-progress-reminders-1",
    post: "habit-features-progress-reminders",
    question: "서울 사용자가 어제 오전 10시와 오늘 오전 8시에 공부했는데 연속 1일로 나온다. 가장 가능성이 큰 원인은?",
    choices: [
      "클라이언트 시계가 틀려서 기록 시각이 잘못 올라왔다",
      "서버가 타임스탬프를 UTC 날짜로 바꿔 세서, 두 기록이 UTC로 같은 날이 됐다",
      "오전 8시 기록이 서버에 아직 동기화되지 않았다",
      "연속 기록은 24시간 이상 차이가 나야 하루로 센다",
    ],
    answer: 1,
    explanation:
      "서울은 UTC보다 9시간 빠르다. 오전 10시는 UTC로 같은 날 01시, 다음 날 오전 8시는 UTC로 아직 전날 23시라 둘 다 같은 UTC 날짜가 된다. 사용자의 시간대로 날짜를 만들어야 한다.",
    anchor: "날짜는-사용자의-하루로-센다",
  },
  {
    id: "habit-features-progress-reminders-2",
    post: "habit-features-progress-reminders",
    question: "사용자 시간대를 '+09:00'이나 '-04:00' 같은 오프셋 대신 'America/New_York' 같은 IANA 이름으로 저장하는 이유는?",
    choices: [
      "문자열이 더 짧아 저장 공간을 아낀다",
      "오프셋은 브라우저에서 얻을 수 없기 때문이다",
      "서머타임처럼 날짜에 따라 오프셋이 바뀌는 규칙을 이름이 담고 있어서다",
      "IANA 이름을 쓰면 UTC 변환이 필요 없어진다",
    ],
    answer: 2,
    explanation:
      "뉴욕은 여름에 -4시간, 겨울에 -5시간이다. 오프셋을 고정하면 서머타임이 끝난 뒤 밤 늦은 기록이 다음 날로 넘어간다. 이름을 저장하면 Intl이나 시간대 데이터베이스가 그 날짜의 규칙을 적용한다.",
    anchor: "날짜는-사용자의-하루로-센다",
  },
  {
    id: "habit-features-progress-reminders-3",
    post: "habit-features-progress-reminders",
    question: "앱을 처음 열자마자 Notification.requestPermission()을 부르는 대신 앱 자체 안내를 먼저 띄우는 가장 큰 이유는?",
    choices: [
      "브라우저 권한은 한 번 거절되면 다시 물을 수 없어서, 원한다고 답한 사람에게만 써야 하기 때문이다",
      "브라우저 권한 창은 한국어를 지원하지 않기 때문이다",
      "앱 안내를 거치면 브라우저가 권한을 자동으로 허용해 주기 때문이다",
      "requestPermission은 서비스 워커 안에서만 부를 수 있기 때문이다",
    ],
    answer: 0,
    explanation:
      "denied가 되면 다시 불러도 창이 뜨지 않는다. 앱 안내에서 거절하면 브라우저 권한은 default로 남아 다음 기회가 있다. 또 사용자 동작 없이 부른 요청은 브라우저가 막거나 조용한 안내로 바꾼다.",
    anchor: "알림-권한은-한-번밖에-못-묻는다",
  },
  {
    id: "habit-features-progress-reminders-4",
    post: "habit-features-progress-reminders",
    question: "알림을 눌러 들어온 세션 수로 알림 효과를 재면 어떤 문제가 생기나?",
    choices: [
      "알림을 끈 사용자가 집계에서 빠져 효과가 작게 나온다",
      "푸시 서비스가 클릭을 기록하지 않아 숫자가 0이 된다",
      "세션 수는 리텐션과 같은 값이라 문제가 없다",
      "알림이 없어도 왔을 사람까지 세서 효과가 크게 부풀려진다",
    ],
    answer: 3,
    explanation:
      "알림을 받은 사람 중 상당수는 원래 그날 들어올 사람이었다. 알림을 아예 받지 않는 무작위 홀드아웃과 비교해야 순효과가 나온다. 권한 해제율과 앱 삭제율도 같이 본다.",
    anchor: "효과는-코호트로-알림은-홀드아웃으로-잰다",
  },
  {
    id: "habit-features-progress-reminders-5",
    post: "habit-features-progress-reminders",
    question: "10만 명 전체 순위표 대신 수십 명 단위 주간 리그와 내 위아래 몇 명만 보여 주는 이유는?",
    choices: [
      "Redis 정렬된 집합은 수십 명 이상을 담을 수 없어서다",
      "바로 위 사람과의 작은 거리가 보여야 대부분의 사용자에게 동기가 생기기 때문이다",
      "개인정보 보호법상 전체 순위를 보여 줄 수 없어서다",
      "1등과의 거리가 클수록 경쟁심이 커지기 때문이다",
    ],
    answer: 1,
    explanation:
      "전체 순위에서 중간 이하 사용자는 올라갈 길이 보이지 않아 동기가 생기지 않는다. 10점 차이의 바로 위 사람이 300점 차이의 1등보다 행동을 부른다. 주간 초기화는 매주 새로 시작할 기회를 준다.",
    anchor: "순위표는-아래쪽-사람을-생각해서-만든다",
  },
  {
    id: "habit-features-progress-reminders-6",
    post: "habit-features-progress-reminders",
    question: "10칸 중 2칸을 미리 찍어 준 쿠폰이 8칸짜리 빈 쿠폰보다 완주율이 높았던 실험이 보여 주는 것과, 그걸 온보딩에 바르게 쓰는 방법은?",
    choices: [
      "목표 기울기 효과다. 하지 않은 단계도 완료로 표시해 막대를 채워 둔다",
      "희소성 효과다. 체크리스트 칸 수를 줄여 보상을 드물게 만든다",
      "부여된 진행 효과다. 실제로 끝낸 첫 단계(가입)를 완료된 칸으로 보여 주며 시작한다",
      "손실 회피다. 체크리스트를 끝내지 않으면 계정이 지워진다고 알린다",
    ],
    answer: 2,
    explanation:
      "남은 칸 수가 같아도 이미 시작했다는 느낌이 완주를 돕는다. 온보딩에서는 가입처럼 이미 끝낸 일을 첫 칸으로 세는 데 쓴다. 하지 않은 일을 완료로 표시하는 건 거짓이다.",
    anchor: "진행-막대는-의미가-있어야-한다",
  },
  {
    id: "habit-features-progress-reminders-7",
    post: "habit-features-progress-reminders",
    question: "리마인더 발송 규칙에서 가장 먼저 걸러야 하는 경우로 글이 꼽은 것은?",
    choices: [
      "사용자 시간대 기준으로 오늘 이미 공부한 사람",
      "알림을 한 번도 열지 않은 사람",
      "주말에 가입한 사람",
      "연속 기록이 30일을 넘은 사람",
    ],
    answer: 0,
    explanation:
      "이미 한 사람에게 '공부할 시간이다'를 보내면 앱이 나를 모른다는 신호가 되고 알림 피로를 키운다. 이 판단은 연속 기록과 같은 날짜 함수를 써야 '오늘 이미 했는데 알림이 왔다'는 어긋남이 생기지 않는다.",
    anchor: "리마인더는-사용자가-정한-계획을-상기시키는-것이다",
  },
];
