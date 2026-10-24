import type { QuizQuestion } from "../types";

export const SOLID_PRINCIPLES: QuizQuestion[] = [
  {
    id: "solid-principles-1",
    post: "solid-principles",
    question:
      "영수증(CS팀)과 정산(재무팀)이 같은 비공개 계산 메서드를 쓴다. 재무팀 요청으로 그 메서드를 고쳤더니 영수증 금액이 틀어졌다. 어떤 원칙을 어긴 것이고 어떻게 고치나?",
    choices: [
      "개방-폐쇄. 계산 메서드를 인터페이스로 바꾼다",
      "단일 책임. 바꾸라고 하는 액터가 다르니 영수증과 정산 계산을 따로 둔다",
      "리스코프 치환. 정산 클래스를 영수증 클래스의 하위 클래스로 만든다",
      "인터페이스 분리. 계산 메서드를 public으로 연다",
    ],
    answer: 1,
    explanation:
      "SRP의 책임은 변경을 요구하는 액터 기준이다. 지금은 같은 계산처럼 보여도 서로 다른 팀의 이유로 바뀌는 코드를 하나로 합치면, 한쪽 요청이 다른 쪽 결과를 조용히 바꾼다. 함께 바뀌어야 하는 상품 합계 같은 부분만 공유한다.",
    anchor: "단일-책임-바꾸라고-하는-사람이-하나여야-한다",
  },
  {
    id: "solid-principles-2",
    post: "solid-principles",
    question:
      "결제 수단을 if로 나누던 구조를 Payment 인터페이스와 구현 파일로 바꿨다. 간편결제를 하나 더할 때 실제로 줄어드는 것은?",
    choices: [
      "바뀐 줄 수",
      "등록 코드를 포함한 모든 수정",
      "이미 잘 돌던 기존 파일을 여는 횟수",
      "테스트 코드의 양",
    ],
    answer: 2,
    explanation:
      "실험에서 if 구조는 파일 다섯 개에 한 줄씩, 인터페이스 구조는 새 파일 하나와 등록 표 한 줄을 바꿨고 줄 수는 오히려 늘었다. OCP가 줄이는 건 기존 결제·환불·정산 파일을 여는 일이다. 무엇을 고를지 정하는 등록 코드는 여전히 고친다.",
    anchor: "개방-폐쇄-새-기능은-새-코드로-붙인다",
  },
  {
    id: "solid-principles-3",
    post: "solid-principles",
    question:
      "Square가 Rectangle을 상속해 setWidth가 높이도 함께 바꾼다. 너비 5, 높이 4로 설정하고 넓이 20을 기대하던 함수에 Square를 넘기면 16이 나온다. 무엇이 문제인가?",
    choices: [
      "Square의 area 계산이 틀렸다",
      "타입 검사가 하위 클래스를 막지 못한 컴파일러 문제다",
      "Rectangle이 약속한 '너비를 바꾸면 너비만 바뀐다'는 동작을 Square가 깨서 대신 쓸 수 없다",
      "setHeight를 먼저 불러야 한다",
    ],
    answer: 2,
    explanation:
      "LSP는 타입 이름이 아니라 약속한 동작에 대한 원칙이다. Square는 메서드를 모두 갖고 있어 타입은 맞지만 후행 조건을 약하게 만들었다. 값을 바꾸지 않는 불변 도형이라면 이런 위반이 생기지 않는다.",
    anchor: "리스코프-치환-대신-들어가도-약속을-지켜야-한다",
  },
  {
    id: "solid-principles-4",
    post: "solid-principles",
    question: "같은 인터페이스를 구현한 여러 클래스 중 LSP를 어기는 구현을 테스트로 잡는 방법은?",
    choices: [
      "구현마다 서로 다른 단위 테스트를 쓴다",
      "인터페이스가 약속하는 동작을 계약 테스트 하나로 쓰고 모든 구현에 똑같이 돌린다",
      "타입 검사를 strict 모드로 켠다",
      "구현 클래스에 final을 붙인다",
    ],
    answer: 1,
    explanation:
      "타입 검사는 메서드가 있는지만 본다. 저장한 것을 그대로 돌려준다는 약속을 테스트로 쓰고 모든 구현에 돌리면, 10개로 자르는 구현과 save에서 예외를 던지는 읽기 전용 구현이 실패로 드러난다.",
    anchor: "리스코프-치환-대신-들어가도-약속을-지켜야-한다",
  },
  {
    id: "solid-principles-5",
    post: "solid-principles",
    question:
      "주문 취소 테스트용 가짜 저장소를 만들었더니 쓰지도 않는 리포트·검색 메서드가 없다고 컴파일 오류가 난다. ISP에 따라 고치는 방법은?",
    choices: [
      "가짜 저장소에 빈 메서드를 모두 채운다",
      "PostgreSQL 구현 클래스를 네 개로 쪼갠다",
      "취소 유스케이스가 OrderReader & OrderWriter처럼 필요한 모양만 받게 인터페이스를 나눈다",
      "인터페이스를 지우고 구체 클래스를 직접 받는다",
    ],
    answer: 2,
    explanation:
      "ISP는 쓰는 쪽이 쓰지 않는 메서드에 의존하지 않게 하라는 것이다. 쪼개는 건 쓰는 쪽이 보는 인터페이스이고, 실제 구현 클래스는 여러 인터페이스를 모두 구현해도 된다. 그러면 리포트 시그니처가 바뀌어도 취소 쪽은 영향을 받지 않는다.",
    anchor: "인터페이스-분리-쓰지-않는-메서드에-매이지-않게",
  },
  {
    id: "solid-principles-6",
    post: "solid-principles",
    question: "`constructor(private db: PgClient)`처럼 구체 클래스를 생성자로 받는 서비스에 대한 설명으로 맞는 것은?",
    choices: [
      "DI도 DIP도 지켰다",
      "DI는 했지만 정책이 여전히 PostgreSQL 쪽을 import하니 DIP는 아니다",
      "DIP는 지켰지만 DI는 아니다",
      "스프링 컨테이너를 쓰지 않았으니 둘 다 아니다",
    ],
    answer: 1,
    explanation:
      "DI는 필요한 객체를 바깥에서 받는 기법이고, DIP는 정책 쪽이 정한 추상에 세부가 맞추도록 의존 방향을 뒤집는 원칙이다. 구체 클래스를 받으면 소스 의존 방향은 그대로다. 반대로 컨테이너 없이 main에서 손으로 조립해도 DIP는 지킬 수 있다.",
    anchor: "의존성-역전-정책이-도구에-매이지-않게",
  },
  {
    id: "solid-principles-7",
    post: "solid-principles",
    question: "DIP를 지키려고 만든 저장소 인터페이스는 어디에 두는 게 맞나?",
    choices: [
      "PostgreSQL 어댑터와 같은 infra 폴더",
      "그 인터페이스를 쓰는 정책 쪽 모듈(domain, application)",
      "공용 utils 패키지",
      "어디에 둬도 import 방향은 같다",
    ],
    answer: 1,
    explanation:
      "정책이 '나는 이런 모양이 필요하다'고 정하고 세부가 그 모양을 구현해야 import 화살표가 정책 쪽을 향한다. 인터페이스를 infra 폴더에 두면 정책이 여전히 DB 쪽 패키지를 import하게 된다.",
    anchor: "의존성-역전-정책이-도구에-매이지-않게",
  },
];
