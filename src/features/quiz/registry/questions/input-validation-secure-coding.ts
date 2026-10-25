import type { QuizQuestion } from "../types";

export const INPUT_VALIDATION_SECURE_CODING: QuizQuestion[] = [
  {
    id: "input-validation-secure-coding-1",
    post: "input-validation-secure-coding",
    question: "화면에서 가격을 못 바꾸게 막았는데도 음수 가격 주문이 들어온 이유는?",
    choices: [
      "DB가 음수를 자동으로 만들어서",
      "브라우저 버그 때문",
      "공격자는 브라우저를 건너뛰고 curl 등으로 서버에 직접 요청해, 클라이언트 검증 코드가 실행될 일이 없기 때문",
      "HTTPS가 값을 바꿔서"
    ],
    answer: 2,
    explanation:
      "클라이언트 검증은 UX를 위한 편의다. 서버 엔드포인트에 직접 요청을 보내면 그 검증은 거치지 않는다. 신뢰의 근거는 늘 서버 검증이어야 한다.",
    anchor: "클라이언트-검증은-친절이지-방어가-아니다",
  },
  {
    id: "input-validation-secure-coding-2",
    post: "input-validation-secure-coding",
    question: "입력 때 HTML 기준으로 한 번 정제해 저장하는 방식이 함정인 이유는?",
    choices: [
      "HTML 정제가 느려서",
      "DB가 HTML을 거부해서",
      "저장 공간을 더 써서",
      "나가는 자리마다 위험한 기호가 달라, CSV·SQL 등 다른 자리로 나갈 때 엉뚱하게 손질된 값이 나가고 그 자리의 위험은 못 막기 때문"
    ],
    answer: 3,
    explanation:
      "HTML의 <, SQL의 ', 셸의 ;처럼 출력 자리마다 위험이 다르다. 그래서 원본은 검증만 해서 저장하고, 인코딩은 쓰는 자리에서 그 자리에 맞게 한다.",
    anchor: "경계에서-한-번-출력에서-한-번",
  },
  {
    id: "input-validation-secure-coding-3",
    post: "input-validation-secure-coding",
    question: "수량 검증에서 공백 다듬기(정규화)를 모양 검사보다 먼저 해야 하는 이유는?",
    choices: [
      "검사 뒤에 정규화하면 정상 값이 떨어지거나, 보이지 않는 공백·제어 문자가 검사를 지나 살아남기 때문",
      "정규식이 공백을 지원하지 않아서",
      "순서는 상관없다",
      "성능 때문"
    ],
    answer: 0,
    explanation:
      "정규화 → 검증 순서여야 검사한 값과 실제로 쓰는 값이 같다. 거꾸로 하면 검사를 통과한 뒤에 값이 바뀌어 검증이 의미를 잃는다. 유니코드도 같은 이유로 먼저 정규화한다.",
    anchor: "허용-목록이-먼저다",
  },
  {
    id: "input-validation-secure-coding-4",
    post: "input-validation-secure-coding",
    question: "zod의 strictObject로 주문 스키마를 선언했을 때 price: -5000이 든 요청은 어떻게 되나?",
    choices: [
      "음수만 양수로 바뀐다",
      "price가 0으로 바뀌어 통과한다",
      "정의하지 않은 키라 unrecognized_keys로 거부된다",
      "price가 조용히 떨어지고 통과한다"
    ],
    answer: 2,
    explanation:
      "strictObject는 정의한 필드 외의 키를 거부한다. 일반 object라면 정의하지 않은 키를 조용히 떨군다. 가격은 서버가 DB에서 읽어야 할 값이라 요청에 있을 이유가 없다.",
    anchor: "스키마로-경계를-지킨다",
  },
  {
    id: "input-validation-secure-coding-5",
    post: "input-validation-secure-coding",
    question: "정규식 (a+)+$ 가 긴 'aaaa…!' 입력에서 서비스 거부가 되는 이유와 대응은?",
    choices: [
      "정규식 캐시 문제 / 캐시 끄기",
      "UTF-8 문제 / 인코딩 변경",
      "메모리 누수 / 서버 재시작",
      "중첩 수량자의 백트래킹이 지수적으로 늘어 요청 스레드를 묶는다 / 중첩 수량자 회피·선형 엔진(RE2)·입력 길이 상한"
    ],
    answer: 3,
    explanation:
      "실험에서 28자 입력에 2.7초가 걸렸다. 조금만 길어져도 몇 분이 된다. 정규식을 다시 쓰거나 선형 시간 엔진을 쓰고, 입력 길이에 상한을 둬서 막는다.",
    anchor: "입력이-만드는-고전-취약점들",
  },
  {
    id: "input-validation-secure-coding-6",
    post: "input-validation-secure-coding",
    question: "금지어 admin 검사를 전각 문자 ＡＤＭＩＮ이 지나칠 수 있는 이유는?",
    choices: [
      "정규화 없이 검사하면 다른 글자로 보지만, NFKC로 정규화하면 admin이 되어 다른 곳에서 admin으로 보일 수 있기 때문",
      "대소문자 비교 때문",
      "브라우저가 막아서",
      "전각 문자는 저장되지 않아서"
    ],
    answer: 0,
    explanation:
      "같은 글자를 적는 방법이 여럿이라, 검증 전에 유니코드 정규화(보통 NFKC)를 해야 한다. 키릴 а 같은 혼동 문자도 필요하면 따로 거른다.",
    anchor: "눈에-안-보이는-글자-유니코드",
  },
  {
    id: "input-validation-secure-coding-7",
    post: "input-validation-secure-coding",
    question: "음수 가격 버그를 설계로 아예 없애는 방법은?",
    choices: [
      "가격을 문자열로 받는다",
      "클라이언트에서 가격 칸을 숨긴다",
      "클라이언트는 무엇을 몇 개만 보내고, 가격과 합계는 서버가 DB에서 읽어 계산한다",
      "에러 메시지를 자세히 준다"
    ],
    answer: 2,
    explanation:
      "결정이 필요한 값을 클라이언트에게서 받지 않으면 검증할 일도 없다. 위험한 값을 애초에 받지 않는 API 설계가 검증보다 낫다.",
    anchor: "보안을-생각한-api-설계",
  },
];
