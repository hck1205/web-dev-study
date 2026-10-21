import type { QuizQuestion } from "../types";

export const MICROSERVICES_DECOMPOSITION: QuizQuestion[] = [
  {
    id: "microservices-decomposition-1",
    post: "microservices-decomposition",
    question:
      "git 기록을 세어 보니 place-order.ts가 바뀐 5번 중 4번은 payments/charge.ts도 함께 바뀌었다. 지금 결제를 떼어 내면 어떻게 되나?",
    choices: [
      "결제 변경의 대부분이 주문 서비스와 함께 배포해야 하는 변경이 된다",
      "결제 서비스만 따로 배포할 수 있어 배포가 빨라진다",
      "주문 코드가 결제 코드를 import하지 못해 자연히 결합이 사라진다",
      "변경 결합도는 서비스 경계와 무관하다",
    ],
    answer: 0,
    explanation:
      "늘 함께 바뀌는 두 파일을 다른 서비스로 나누면 그 변경은 두 저장소, 두 PR, 두 배포가 된다. 먼저 모놀리스 안에서 주문과 결제 사이의 계약을 정리하거나 경계를 다른 곳에 긋는다.",
    anchor: "커밋-기록이-말해-주는-경계",
  },
  {
    id: "microservices-decomposition-2",
    post: "microservices-decomposition",
    question: "결제 테이블을 떼어 내기 전에 pg_trigger에서 payments_vip 트리거가 나왔다. 이게 가장 위험한 이유는?",
    choices: [
      "트리거가 있으면 테이블을 복사할 수 없어서",
      "트리거는 성능을 떨어뜨려서",
      "외래 키보다 지우기 어려워서",
      "코드 검색에 안 걸리는 업무 규칙이 DB 안에 있어서, 옮긴 뒤 아무도 모르게 사라질 수 있어서",
    ],
    answer: 3,
    explanation:
      "트리거 안의 규칙은 애플리케이션 코드를 grep해도 보이지 않는다. 새 서비스 DB로 옮기면서 트리거를 빠뜨리면 그 규칙이 조용히 없어지니, 떼어 내기 전에 코드로 옮겨 둔다.",
    anchor: "db가-말해-주는-경계",
  },
  {
    id: "microservices-decomposition-3",
    post: "microservices-decomposition",
    question: "모놀리스 깊은 곳의 정산 배치가 부르는 수수료 계산을 새 서비스로 옮기려 한다. 프록시로 가로챌 수 없을 때 쓰는 방법은?",
    choices: [
      "빅뱅 재작성",
      "브랜치 바이 앱스트랙션: 인터페이스를 세우고 그 뒤에서 구현을 바꾼다",
      "공유 DB를 그대로 두고 서비스만 띄운다",
      "긴 기능 브랜치에서 작업한 뒤 한 번에 머지한다",
    ],
    answer: 1,
    explanation:
      "스트랭글러 피그는 HTTP 입구에서 경로를 돌릴 때 잘 맞는다. 안쪽 기능은 호출부가 모두 인터페이스를 거치게 바꾼 뒤 설정으로 구현을 고르고, 단계마다 메인 브랜치에서 배포한다.",
    anchor: "코드는-추상화-뒤에서-갈아-끼운다",
  },
  {
    id: "microservices-decomposition-4",
    post: "microservices-decomposition",
    question: "병행 실행에서 1000건 중 482건의 수수료가 1원씩 달랐다(옛 418원, 새 417원). 다음 할 일로 가장 알맞은 것은?",
    choices: [
      "새 구현을 옛 구현과 똑같이 반올림하게 고친다",
      "1원 차이는 무시하고 새 구현으로 넘긴다",
      "어느 쪽이 계약상 맞는지 정산 담당자에게 확인하고, 그 답에 따라 새 구현을 고치거나 변경 사실을 알린다",
      "병행 실행을 끄고 테스트를 더 쓴다",
    ],
    answer: 2,
    explanation:
      "병행 실행은 옛 시스템의 숨은 동작을 드러내는 도구다. 옛 구현이 틀렸을 수도 있으니 무조건 맞추지 말고 업무상 정답을 확인한다. 무시하고 넘기면 수수료 합계가 482원 달라진다.",
    anchor: "옛것과-새것을-함께-돌려-본다",
  },
  {
    id: "microservices-decomposition-5",
    post: "microservices-decomposition",
    question: "병행 실행을 '결제 승인' 기능에 그대로 적용하면 생기는 문제는?",
    choices: [
      "부작용이 있어서 양쪽에서 실행하면 카드가 두 번 승인될 수 있다",
      "결과 비교가 불가능하다",
      "옛 구현이 느려진다",
      "아무 문제 없다",
    ],
    answer: 0,
    explanation:
      "값을 계산해 돌려주는 기능은 양쪽에서 돌려도 되지만, 쓰기나 외부 호출이 있는 기능은 두 번 일어난다. 새 쪽은 드라이런으로 부르거나 결과를 버리는 저장소에 쓰게 한다.",
    anchor: "옛것과-새것을-함께-돌려-본다",
  },
  {
    id: "microservices-decomposition-6",
    post: "microservices-decomposition",
    question: "대조 쿼리에서 값 비교에 <> 대신 IS DISTINCT FROM을 쓴 이유는?",
    choices: [
      "더 빠르게 실행돼서",
      "인덱스를 탈 수 있어서",
      "양쪽이 모두 NULL인 컬럼을 <>로 비교하면 결과가 NULL이 되어 다름도 같음도 잡히지 않아서",
      "FULL JOIN에서는 <>를 쓸 수 없어서",
    ],
    answer: 2,
    explanation:
      "approved_at처럼 NULL이 가능한 컬럼에서 <>는 NULL을 돌려줘 WHERE를 통과하지 못한다. IS DISTINCT FROM은 NULL을 하나의 값처럼 비교해서 한쪽만 NULL인 경우도 다르다고 잡는다.",
    anchor: "두-저장소가-어긋났는지-확인하기",
  },
  {
    id: "microservices-decomposition-7",
    post: "microservices-decomposition",
    question: "결제를 떼어 낸 뒤 주문 목록 API가 느려졌다. 추적을 보니 결제 서비스로 가는 짧은 호출이 50개 줄지어 있다. 알맞은 해결은?",
    choices: [
      "결제 서비스의 인스턴스를 늘린다",
      "결제 서비스에 ID 목록을 받는 일괄 조회 API를 만들거나, 필요한 필드만 이벤트로 받아 사본을 둔다",
      "주문 서비스가 결제 DB에 직접 접속해 조인한다",
      "타임아웃을 늘린다",
    ],
    answer: 1,
    explanation:
      "DB 조인 한 번이던 일이 네트워크 위의 N+1 호출이 됐다. 인스턴스를 늘려도 호출 횟수는 그대로라 지연은 줄지 않고, 남의 DB에 직접 붙으면 경계가 무너진다.",
    anchor: "떼어-냈는데-더-느려졌을-때",
  },
];
