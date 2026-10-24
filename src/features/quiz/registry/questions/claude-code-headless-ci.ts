import type { QuizQuestion } from "../types";

export const CLAUDE_CODE_HEADLESS_CI: QuizQuestion[] = [
  {
    id: "claude-code-headless-ci-1",
    post: "claude-code-headless-ci",
    question:
      "허용 규칙 없이 claude -p \"버그를 고쳐 줘\" --output-format json을 돌렸더니 종료 코드 0, subtype success였다. 그런데 파일은 그대로다. 무슨 일이 일어났나?",
    choices: [
      "모델이 버그가 없다고 판단했다",
      "확인이 필요한 Edit와 Bash 호출이 물을 사람이 없어 거부됐고, 모델은 못 고쳤다고 말로 보고했다",
      "--output-format json에서는 파일 수정이 항상 꺼진다",
      "세션 저장이 켜져 있어 수정이 다음 실행으로 미뤄졌다",
    ],
    answer: 1,
    explanation:
      "비대화형에서는 확인 창을 띄울 수 없어 허용되지 않은 호출이 거부되지만 실행은 성공으로 끝난다. 그래서 종료 코드만 보지 말고 permission_denials와 실제 diff를 함께 본다.",
    anchor: "권한은-출발-전에-정한다",
  },
  {
    id: "claude-code-headless-ci-2",
    post: "claude-code-headless-ci",
    question: "--max-budget-usd 0.0005로 돌렸는데 결과의 total_cost_usd가 0.0021이었다. 이 결과가 알려 주는 것은?",
    choices: [
      "상한이 무시되는 버그다",
      "비용 집계가 다른 세션의 비용까지 더했다",
      "상한은 호출 도중에 끊지 않고, 호출이 끝난 뒤 누적 비용을 보고 더 진행하지 않는 방식이라 마지막 호출만큼 넘친다",
      "상한은 출력 토큰에만 적용된다",
    ],
    answer: 2,
    explanation:
      "실행은 error_max_budget_usd로 종료 코드 1을 냈지만 첫 호출 비용은 이미 상한을 넘었다. 상한은 여유를 두고 잡고, 정확한 통제는 API 키 사용량 한도로 한 겹 더 건다.",
    anchor: "멈출-자리를-정한다-바퀴-수와-비용-상한",
  },
  {
    id: "claude-code-headless-ci-3",
    post: "claude-code-headless-ci",
    question: "--output-format stream-json을 파싱하는 코드를 짤 때 업데이트에 깨지지 않으려면?",
    choices: [
      "모든 줄을 하나의 JSON 배열로 합쳐 파싱한다",
      "이벤트 순서가 늘 같다고 가정하고 줄 번호로 읽는다",
      "필요한 type(system init, assistant, user, result)만 골라 처리하고 모르는 type은 무시한다",
      "--verbose를 빼서 이벤트 수를 줄인다",
    ],
    answer: 2,
    explanation:
      "실제 출력에는 active_goal, autocompact_state, task_summary처럼 버전에 따라 생기는 이벤트가 섞여 있었다. 모르는 type을 무시해야 새 이벤트가 생겨도 깨지지 않는다. -p에서 stream-json은 --verbose가 있어야 동작한다.",
    anchor: "결과를-받는-모양-세-가지",
  },
  {
    id: "claude-code-headless-ci-4",
    post: "claude-code-headless-ci",
    question:
      "외부 기여자의 PR에도 리뷰를 돌리려고 pull_request_target으로 바꾸고 PR head를 체크아웃해 claude -p를 실행하려 한다. 가장 큰 위험은?",
    choices: [
      "PR이 넣은 .claude/settings.json의 훅이 신뢰 확인 없이 러너에서 실행되어 비밀 값이 빠져나갈 수 있다",
      "포크 PR은 diff를 만들 수 없어서 리뷰가 비게 된다",
      "pull_request_target에서는 Node를 설치할 수 없다",
      "모델 비용이 두 배로 청구된다",
    ],
    answer: 0,
    explanation:
      "-p는 작업 폴더 신뢰 확인을 건너뛰고, 훅은 모델이 아니라 클라이언트가 실행한다. pull_request_target은 비밀 값과 쓰기 토큰을 든 채 돌기 때문에 남의 코드를 체크아웃하면 가장 위험한 조합이 된다. 기본 pull_request는 포크에 비밀 값을 주지 않아 안전하게 실패한다.",
    anchor: "남의-pr-브랜치에서-돌릴-때",
  },
  {
    id: "claude-code-headless-ci-5",
    post: "claude-code-headless-ci",
    question: "리뷰 작업이 error_max_turns로 실패했다. CI의 재시도 정책으로 맞는 것은?",
    choices: [
      "성공할 때까지 즉시 무한 재시도한다",
      "같은 자리에서 또 걸릴 가능성이 높으니 재시도하지 않고 상한이나 작업 크기를 조정한다",
      "--permission-mode를 bypassPermissions로 바꿔 재시도한다",
      "세션 저장을 켜고 재시도하면 이어서 끝까지 간다",
    ],
    answer: 1,
    explanation:
      "상한 실패는 같은 조건으로 다시 돌리면 같은 자리에서 걸리고 비용만 두 번 든다. 재시도는 api_error_status가 429나 5xx인 일시적인 오류에만 간격을 두고 한두 번 한다.",
    anchor: "실패와-재시도",
  },
  {
    id: "claude-code-headless-ci-6",
    post: "claude-code-headless-ci",
    question: "--json-schema로 verdict를 받아 PR 댓글을 단다. 이 값을 어디까지 믿어야 하나?",
    choices: [
      "스키마로 검증됐으니 approve면 자동 병합해도 된다",
      "모양은 고정되지만 내용이 맞다는 보장은 아니라서 사람이 읽는 댓글로만 쓰고 자동 승인·병합은 하지 않는다",
      "스키마를 쓰면 프롬프트 주입이 불가능해진다",
      "verdict는 무작위라서 아예 쓰지 않는다",
    ],
    answer: 1,
    explanation:
      "structured_output은 스키마에 맞는 모양으로 오지만 줄 번호가 틀리거나 문제를 지어낼 수 있다. diff 안의 글이 지시처럼 작동할 수도 있으니 결과로 PR을 자동으로 합치거나 막지 않는다.",
    anchor: "답의-모양을-json-schema로-고정한다",
  },
  {
    id: "claude-code-headless-ci-7",
    post: "claude-code-headless-ci",
    question: "CI 로그에 \"Warning: no stdin data received in 3s\"가 매번 찍히고 실행이 3초씩 늦다. 고치는 방법은?",
    choices: [
      "--verbose를 붙인다",
      "넘길 입력이 없으면 < /dev/null로 표준 입력을 닫아 준다",
      "--output-format text로 바꾼다",
      "--max-turns를 늘린다",
    ],
    answer: 1,
    explanation:
      "-p는 파이프 입력을 받을 수 있어서 표준 입력이 열려 있으면 잠깐 기다린다. CI처럼 열린 채 비어 있는 환경에서는 < /dev/null을 붙여 기다림과 경고를 없앤다. 넘길 diff가 있으면 파이프로 준다.",
    anchor: "-p는-한-번-묻고-끝나는-실행이다",
  },
];
