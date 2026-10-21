import type { QuizQuestion } from "../types";

export const STRUCTURED_LOGGING: QuizQuestion[] = [
  {
    id: "structured-logging-1",
    post: "structured-logging",
    question: "로그 메시지를 'order 123 failed for kim'처럼 값을 섞은 문장으로 쓰면 생기는 문제는?",
    choices: [
      "JSON으로 직렬화할 수 없다",
      "같은 종류의 사건을 메시지로 묶을 수 없고, 값을 꺼내려면 문장을 잘라야 한다",
      "로그 레벨을 정할 수 없다",
      "Loki가 줄을 거부한다",
    ],
    answer: 1,
    explanation:
      "메시지는 고정된 짧은 문장으로 두고 바뀌는 값은 필드로 빼야 같은 사건끼리 묶고 필드로 거를 수 있다. 값이 문장에 섞이면 결국 grep과 awk로 칸을 세는 처음 문제로 돌아간다.",
    anchor: "한-줄에-담을-것",
  },
  {
    id: "structured-logging-2",
    post: "structured-logging",
    question: "redact로 user.email을 가려 뒀는데 Loki에 이메일이 남아 있었다. 실습에서 새어 나간 경로는?",
    choices: [
      "pino의 redact가 중첩 경로를 지원하지 않아서",
      "이메일이 쿼리 문자열로 들어와 req.url에 그대로 실렸기 때문에",
      "Loki가 레이블로 이메일을 붙였기 때문에",
      "trace_id에 이메일이 인코딩되어 있어서",
    ],
    answer: 1,
    explanation:
      "경로 지정 방식의 가리기는 정해 둔 자리만 지킨다. 같은 값이 URL이나 오류 메시지 같은 다른 자리로 들어오면 그대로 남는다. req serializer로 URL의 민감한 파라미터를 가려서 고쳤다.",
    anchor: "개인정보는-남기기-전에-가린다",
  },
  {
    id: "structured-logging-3",
    post: "structured-logging",
    question: "성공 요청 로그를 10%만 남기려 한다. Math.random() 대신 trace_id로 고르는 이유는?",
    choices: [
      "trace_id 계산이 더 빨라서",
      "여러 서비스가 같은 요청에 같은 결정을 내려, 남긴 요청을 처음부터 끝까지 따라갈 수 있어서",
      "무작위 값은 보안상 위험해서",
      "trace_id로 고르면 오류도 자동으로 남아서",
    ],
    answer: 1,
    explanation:
      "서비스마다 따로 무작위로 고르면 한 요청의 로그가 서비스마다 일부만 남아 이어 볼 수 없다. trace_id로 정하면 모두 같은 결정을 내린다. 오류와 느린 요청은 비율과 상관없이 따로 남긴다.",
    anchor: "다-남길-수-없을-때-고르는-법",
  },
  {
    id: "structured-logging-4",
    post: "structured-logging",
    question: "성공 요청만 10%로 샘플링한 로그의 줄 수로 오류율을 계산하면?",
    choices: [
      "정확한 오류율이 나온다",
      "오류율이 실제보다 열 배 가까이 부풀려진다",
      "오류율이 실제보다 10% 낮게 나온다",
      "Loki가 자동으로 보정한다",
    ],
    answer: 1,
    explanation:
      "오류는 전부 남고 성공은 10%만 남으니 분모가 크게 줄어 오류율이 부풀려진다. 세는 일은 지표에 맡기고, 로그에는 sample_rate를 필드로 남겨 필요할 때 거꾸로 곱한다.",
    anchor: "다-남길-수-없을-때-고르는-법",
  },
  {
    id: "structured-logging-5",
    post: "structured-logging",
    question: "OOMKilled로 끝난 Node.js 파드의 마지막 로그가 비어 있다. 가장 먼저 의심할 것은?",
    choices: [
      "Loki의 보관 기간이 끝났다",
      "로거가 버퍼를 두고 비동기로 쓰다가 SIGKILL로 버퍼째 사라졌다",
      "로그 레벨이 debug로 되어 있었다",
      "수집기가 JSON을 해석하지 못했다",
    ],
    answer: 1,
    explanation:
      "pino의 기본 출력은 버퍼를 두고 비동기로 쓴다. 커널이 SIGKILL로 죽이면 버퍼에 남은 줄은 쓰이지 못한다. 실습에서는 1만 줄 중 첫 줄만 남았다. 치명적 오류는 동기로 쓰거나 flush 후 종료한다.",
    anchor: "로그가-저장소까지-가는-길",
  },
  {
    id: "structured-logging-6",
    post: "structured-logging",
    question: "Loki에서 trace_id 하나로 로그를 찾을 때 더 빠른 쿼리는?",
    choices: [
      "{app=\"shop\"} | json | trace_id=\"c31261b4...\"",
      "{app=\"shop\"} |= \"c31261b4...\"",
      "{trace_id=\"c31261b4...\"}",
      "{app=~\".+\"} | json",
    ],
    answer: 1,
    explanation:
      "레이블로 스트림을 좁힌 뒤 단순 문자열 거르기를 먼저 하면 json 해석 없이 줄을 걸러 낸다. json 단계는 줄마다 비용이 드니 이미 걸러진 줄에만 쓰는 게 낫다. trace_id를 레이블로 두는 것은 스트림 폭증 때문에 피한다.",
    anchor: "jq와-logql로-묻기",
  },
  {
    id: "structured-logging-7",
    post: "structured-logging",
    question: "DB 계층, 서비스 계층, 컨트롤러가 같은 실패를 각각 error로 남기고 있다. 무엇이 문제인가?",
    choices: [
      "문제없다. 자세할수록 좋다",
      "실패 하나가 세 줄이 되어 오류 건수가 부풀고 같은 내용을 반복 저장한다. 처리하는 곳에서 한 번만 남긴다",
      "error 대신 fatal을 써야 한다",
      "계층마다 다른 trace_id가 붙는다",
    ],
    answer: 1,
    explanation:
      "같은 오류를 계층마다 찍으면 한 번의 실패가 여러 건처럼 보이고 비용도 늘어난다. 아래 계층은 오류를 감싸서 위로 던지고, 처리하는 곳에서 err 필드로 스택과 함께 한 번만 남긴다.",
    anchor: "로그를-다듬을-때-자주-하는-실수",
  },
];
