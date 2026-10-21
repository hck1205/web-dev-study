import type { QuizQuestion } from "../types";

export const SCALING_HORIZONTAL_VERTICAL: QuizQuestion[] = [
  {
    id: "scaling-horizontal-vertical-1",
    post: "scaling-horizontal-vertical",
    question: "Node 서버를 vCPU 4개에서 8개짜리로 바꿨는데 처리량이 그대로다. 가장 그럴듯한 이유는?",
    choices: [
      "프로세스 하나가 JS를 한 스레드에서 돌려 코어 하나만 쓰고 있어서",
      "메모리가 부족해서",
      "로드 밸런서가 요청을 나누지 않아서",
      "8코어 인스턴스는 클럭이 더 낮아서",
    ],
    answer: 0,
    explanation:
      "Node 프로세스 하나는 JS 코드를 한 스레드에서 돌리므로 코어가 늘어도 쓰지 못한다. 실습에서 프로세스 하나는 초당 194건에서 멈췄고 프로세스를 늘리자 처리량이 올랐다. cluster나 PM2로 코어 수만큼 프로세스를 띄워야 한다.",
    anchor: "키워도-쓰지-못하는-자원",
  },
  {
    id: "scaling-horizontal-vertical-2",
    post: "scaling-horizontal-vertical",
    question: "서버를 두 대로 늘린 뒤 '로그인이 자꾸 풀린다'는 신고가 들어온다. 근본적인 해결책은?",
    choices: [
      "서버를 다시 한 대로 줄인다",
      "세션 만료 시간을 늘린다",
      "세션을 Redis 같은 공유 저장소로 옮기거나 서명된 토큰을 쓴다",
      "로드 밸런서를 라운드 로빈에서 최소 연결로 바꾼다",
    ],
    answer: 2,
    explanation:
      "세션이 각 서버 메모리에 있어서 다른 서버로 간 요청은 세션을 찾지 못한다. 세션을 서버 밖에 두면 어느 서버든 같은 세션을 읽는다. 스티키 세션은 서버가 내려가면 세션이 함께 사라지는 임시방편이다.",
    anchor: "늘리려면-상태를-밖으로-빼야-한다",
  },
  {
    id: "scaling-horizontal-vertical-3",
    post: "scaling-horizontal-vertical",
    question: "같은 이미지로 앱 서버 세 대를 띄웠더니 매일 리포트 메일이 세 통씩 간다. 무엇이 원인인가?",
    choices: [
      "메일 서버의 재시도",
      "서버마다 같은 예약 작업이 돌고 있다",
      "로드 밸런서의 헬스 체크",
      "DB 복제 지연",
    ],
    answer: 1,
    explanation:
      "예약 작업도 서버 안에 숨은 상태다. 대수만큼 같은 cron이 돌아 같은 일을 여러 번 한다. 예약 작업을 별도 워커 하나로 빼거나 분산 락, 리더 선출로 한 대에서만 실행하게 한다.",
    anchor: "늘리려면-상태를-밖으로-빼야-한다",
  },
  {
    id: "scaling-horizontal-vertical-4",
    post: "scaling-horizontal-vertical",
    question: "작업의 90%만 병렬로 나눌 수 있다면 서버를 무한히 늘렸을 때 최대 몇 배까지 빨라지나?",
    choices: ["9배", "90배", "무한히 빨라진다", "10배"],
    answer: 3,
    explanation:
      "암달의 법칙에서 최대 배수는 1 / (1 − p)다. 나눌 수 없는 10%는 서버를 늘려도 줄지 않으므로 1 / 0.1 = 10배가 끝이다. 확장성을 높이려면 직렬 구간 자체를 줄여야 한다.",
    anchor: "늘린-만큼-빨라지지-않는다-암달의-법칙",
  },
  {
    id: "scaling-horizontal-vertical-5",
    post: "scaling-horizontal-vertical",
    question: "보편 확장성 법칙(USL)이 암달의 법칙과 달리 설명하는 현상은?",
    choices: [
      "노드를 늘리면 처리량이 꼭짓점을 지나 오히려 줄어드는 것",
      "직렬 구간 때문에 처리량에 천장이 생기는 것",
      "노드 수에 비례해 처리량이 느는 것",
      "노드가 하나일 때의 처리량",
    ],
    answer: 0,
    explanation:
      "USL은 노드끼리 상태를 맞추는 비용(β)을 더하는데, 이 비용은 노드 수의 제곱으로 자라 처리량을 꺾는다. 공유 카운터 실험에서 일꾼을 늘릴수록 처리량이 줄었다. 천장 자체는 암달의 법칙으로도 설명된다.",
    anchor: "맞추는-비용까지-세면-보편-확장성-법칙",
  },
  {
    id: "scaling-horizontal-vertical-6",
    post: "scaling-horizontal-vertical",
    question: "DB를 앱 서버처럼 쉽게 수평 확장하기 어려운 가장 큰 이유는?",
    choices: [
      "DB 소프트웨어 라이선스 때문에",
      "DB는 로드 밸런서 뒤에 둘 수 없어서",
      "쓰기는 한 곳에서 순서를 정해야 해서 그 자체가 직렬 구간이기 때문에",
      "DB는 메모리를 많이 써서",
    ],
    answer: 2,
    explanation:
      "쓰기의 순서와 일관성을 지키려면 한 곳이 결정해야 하므로 쓰기 경로는 직렬 구간이 된다. 그래서 DB는 수직 확장으로 오래 버티고, 읽기는 복제본으로 나누고, 마지막에 샤딩한다.",
    anchor: "층마다-늘리기-쉬운-정도가-다르다",
  },
];
