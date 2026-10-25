import type { QuizQuestion } from "../types";

export const CODE_REVIEW_PRACTICES: QuizQuestion[] = [
  {
    id: "code-review-practices-1",
    post: "code-review-practices",
    question: "코드 리뷰 피라미드에서 리뷰어가 가장 먼저, 가장 오래 봐야 하는 층을 위에 두는 이유는?",
    choices: [
      "위층일수록 코드 줄 수가 많아서",
      "위층(API, 구현)이 틀리면 아래층을 다듬어도 다시 짜야 하고, 아래층(스타일)은 도구가 볼 수 있어서",
      "위층은 작성자가 직접 확인할 수 없어서",
      "아래층은 CI가 이미 실패시킨 PR에만 해당해서",
    ],
    answer: 1,
    explanation:
      "API 모양이나 구현이 틀리면 그 아래의 테스트, 문서, 스타일을 아무리 고쳐도 다시 손대야 한다. 반대로 포맷과 린트는 바꾸기 싸고 기계가 판단할 수 있어 CI에 넘긴다.",
    anchor: "위에서부터-읽는-피라미드",
  },
  {
    id: "code-review-practices-2",
    post: "code-review-practices",
    question:
      "for (let i = 0; i + size <= orders.length; i += size) 로 주문 237건을 100건씩 보내면 무슨 일이 생기나?",
    choices: [
      "마지막 묶음이 37건으로 정상 전송된다",
      "세 번째 반복에서 slice가 에러를 낸다",
      "i가 200일 때 조건이 거짓이 되어 마지막 37건이 빠진다",
      "무한 루프가 된다",
    ],
    answer: 2,
    explanation:
      "200 + 100 <= 237이 거짓이라 반복이 두 번으로 끝난다. i < orders.length로 바꾸면 slice가 남은 만큼만 잘라 마지막 37건도 보낸다. 무한 루프는 size가 0일 때의 문제다.",
    anchor: "구현이-맞는가",
  },
  {
    id: "code-review-practices-3",
    post: "code-review-practices",
    question:
      "쿠폰 API가 findUnique로 usedAt을 읽고 비어 있으면 update하는 구조다. 테스트는 모두 통과한다. 리뷰에서 막아야 하는 이유는?",
    choices: [
      "동시에 온 두 요청이 모두 usedAt이 비어 있는 것을 읽고 둘 다 통과할 수 있어서",
      "findUnique가 update보다 느려서",
      "update가 usedAt을 덮어써서 날짜가 바뀌어서",
      "400 대신 404를 돌려줘야 해서",
    ],
    answer: 0,
    explanation:
      "읽고 나서 쓰는 사이에 다른 요청이 끼어들 수 있는 check-then-act 경쟁이다. usedAt IS NULL 조건을 붙인 update 한 번으로 묶고 바뀐 행 수를 보면 DB가 한 번만 허락한다. 한 번에 하나씩 보내는 단위 테스트로는 드러나지 않는다.",
    anchor: "두-번째-pr-쿠폰을-쓰는-api",
  },
  {
    id: "code-review-practices-4",
    post: "code-review-practices",
    question: "PR의 테스트가 200건을 넣고 API가 두 번 불렸는지만 확인한다. 리뷰어가 짚어야 할 점은?",
    choices: [
      "테스트가 mock을 쓰므로 통합 테스트로 바꿔야 한다",
      "200이 100의 배수라 마지막 묶음이 빠지는 버그가 드러나지 않으니 배수가 아닌 길이와 빈 입력 같은 경계값이 필요하다",
      "테스트 이름이 영어가 아니다",
      "호출 횟수 대신 내부 함수 호출 순서를 확인해야 한다",
    ],
    answer: 1,
    explanation:
      "테스트가 있다는 것보다 무엇을 확인하는지가 중요하다. 배수 입력만으로는 경계 버그가 숨는다. 내부 호출 순서까지 고정하면 오히려 리팩터링 때마다 깨지는 테스트가 된다.",
    anchor: "테스트가-행동을-확인하나",
  },
  {
    id: "code-review-practices-5",
    post: "code-review-practices",
    question: "리뷰 코멘트에 issue (blocking), nitpick (non-blocking) 같은 등급을 붙이는 가장 큰 효과는?",
    choices: [
      "GitHub이 blocking 코멘트가 있으면 자동으로 머지를 막는다",
      "코멘트 수를 줄일 수 있다",
      "작성자가 무엇을 꼭 고쳐야 하는지 알고, 리뷰어는 막는 이유를 설명할 수 있는지 스스로 점검한다",
      "AI 리뷰어가 코멘트를 분류할 수 있다",
    ],
    answer: 2,
    explanation:
      "등급은 사람 사이의 약속이지 GitHub 기능이 아니다. 무엇이 합치기 전에 필수인지 밝혀 작성자의 우선순위를 정해 주고, blocking을 붙이려면 이유가 있어야 해서 취향을 막는 코멘트가 준다.",
    anchor: "코멘트에-등급을-붙인다",
  },
  {
    id: "code-review-practices-6",
    post: "code-review-practices",
    question: "리뷰에서 두 방법이 비슷하게 괜찮고, 데이터도 스타일 가이드도 없다. 어떻게 정하나?",
    choices: [
      "더 경력이 많은 사람의 의견을 따른다",
      "작성자의 선택을 따르고, 리뷰어는 non-blocking으로 의견만 남긴다",
      "두 방법을 모두 구현해 비교할 때까지 PR을 멈춘다",
      "AI 리뷰어에게 물어 정한다",
    ],
    answer: 1,
    explanation:
      "사실과 데이터, 팀의 관례가 먼저이고, 둘 다 없이 비슷한 대안이라면 코드를 쓰고 책임지는 작성자의 선택을 따른다. 취향이라고 밝힌 non-blocking 의견이 리뷰어의 좋은 양보다.",
    anchor: "의견이-갈릴-때",
  },
  {
    id: "code-review-practices-7",
    post: "code-review-practices",
    question: "AI 리뷰어를 도입할 때 가장 알맞은 위치는?",
    choices: [
      "사람 리뷰를 대신해 AI 승인만으로 합친다",
      "사람 리뷰가 끝난 뒤 마지막 확인으로 둔다",
      "사람보다 먼저 도는 자동 검사로 두고, 작성자가 결과를 정리한 뒤 사람이 승인한다",
      "스타일 검사만 맡기고 다른 지적은 숨긴다",
    ],
    answer: 2,
    explanation:
      "AI 리뷰는 diff 안의 패턴화된 실수를 잘 잡지만 요구사항이나 다른 서비스와의 일관성 같은 diff 밖 맥락은 모르고, 틀린 지적도 섞인다. CI처럼 먼저 돌려 반복 작업을 덜고 승인과 책임은 사람이 진다.",
    anchor: "ai-리뷰는-어디까지-믿나",
  },
];
