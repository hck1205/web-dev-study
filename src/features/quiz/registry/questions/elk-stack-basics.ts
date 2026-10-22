import type { QuizQuestion } from "../types";

export const ELK_STACK_BASICS: QuizQuestion[] = [
  {
    id: "elk-stack-basics-1",
    post: "elk-stack-basics",
    question: "nginx 로그를 logs-nginx-default에 message 필드만 담아 넣었더니, 어젯밤 장애 시간대로 검색해도 그 로그가 안 나온다. 가장 그럴듯한 이유는?",
    choices: [
      "데이터 스트림은 하루가 지나야 검색되기 때문에",
      "기본 파이프라인이 @timestamp가 없으면 받은 시각을 넣어서, 로그가 찍힌 시각이 아니라 넣은 시각으로 저장됐기 때문에",
      "message 필드는 match_only_text라 검색되지 않기 때문에",
      "Kibana가 UTC로만 시간을 보여 주기 때문에",
    ],
    answer: 1,
    explanation:
      "logs@default-pipeline은 @timestamp가 없으면 _ingest.timestamp를 넣는다. 로그 시각으로 범위를 잡으면 걸리지 않으니, 파이프라인에서 로그의 시각을 date 프로세서로 @timestamp에 옮겨야 한다.",
    anchor: "로그는-데이터-스트림에-쌓인다",
  },
  {
    id: "elk-stack-basics-2",
    post: "elk-stack-basics",
    question: "dissect 파이프라인에 on_failure를 달아 두었다. 바이트 자리에 '-'가 온 줄에서 convert가 실패하면 어떻게 되나?",
    choices: [
      "그 문서는 버려지고 _bulk 응답에 오류가 난다",
      "실패한 프로세서만 건너뛰고 나머지 프로세서는 모두 돈다",
      "파이프라인 전체를 처음부터 다시 돌린다",
      "on_failure가 오류 표시를 남기고 문서는 들어가지만, 실패 뒤의 프로세서는 돌지 않는다",
    ],
    answer: 3,
    explanation:
      "실습에서 두 번째 convert가 실패하자 on_failure로 넘어가 error.message와 event.kind가 붙었고, 뒤의 convert·date·remove는 돌지 않아 _tmp와 받은 시각이 남았다. 문서는 잃지 않지만 오류 표시가 붙은 문서를 따로 찾아봐야 한다.",
    anchor: "넣기-전에-쪼갠다-ingest-pipeline",
  },
  {
    id: "elk-stack-basics-3",
    post: "elk-stack-basics",
    question: "_nodes/stats/ingest에서 파이프라인의 failed는 0인데 convert 프로세서의 failed는 1이다. 왜 이런 차이가 나나?",
    choices: [
      "통계가 아직 갱신되지 않아서",
      "convert는 실패해도 원래 값으로 되돌리기 때문에",
      "파이프라인 수준의 on_failure가 실패를 처리해서 파이프라인 전체로는 실패로 세지 않기 때문에",
      "simulate로 시험한 문서는 파이프라인 통계에서 빠지기 때문에",
    ],
    answer: 2,
    explanation:
      "on_failure가 받은 실패는 파이프라인 failed에 잡히지 않는다. 파이프라인 통계만 보면 실패가 없어 보이니, 프로세서 단위 failed나 event.kind: pipeline_error 문서 수에 알림을 건다.",
    anchor: "grok과-dissect-같은-일을-다른-비용으로",
  },
  {
    id: "elk-stack-basics-4",
    post: "elk-stack-basics",
    question: "인덱스 템플릿에 status_code를 long으로 적었는데도 ES|QL에서 'incompatible types' 오류가 계속 난다. 원인과 처리로 맞는 것은?",
    choices: [
      "템플릿은 새 backing index를 만들 때만 적용되니, 이미 keyword로 굳은 인덱스가 남아 있다. rollover 후 옛 인덱스가 지워지길 기다리거나 reindex하고, 그 사이엔 TO_LONG으로 질의한다",
      "템플릿 우선순위가 낮아서다. priority를 올리면 기존 인덱스의 매핑도 바뀐다",
      "ES|QL은 long 타입을 지원하지 않는다. KQL로 바꿔 묻는다",
      "ignore_malformed가 꺼져 있어서다. 켜면 기존 매핑이 long으로 바뀐다",
    ],
    answer: 0,
    explanation:
      "실습에서 템플릿을 고치고 rollover하자 새 인덱스는 long이 됐지만, 그 전에 keyword로 정해진 000002는 그대로 남아 질의가 깨졌다. 매핑은 이미 만든 인덱스에서 바꿀 수 없어서 새 인덱스와 보관 기간, reindex로 해결한다.",
    anchor: "인덱스마다-타입이-다르면-질의가-깨진다",
  },
  {
    id: "elk-stack-basics-5",
    post: "elk-stack-basics",
    question: "ILM 정책이 '30일마다 rollover, delete min_age 30d'이다. 가장 오래된 문서는 대략 얼마나 남나?",
    choices: [
      "정확히 30일",
      "15일 안팎",
      "rollover 주기와 상관없이 30일 이내",
      "60일 가까이",
    ],
    answer: 3,
    explanation:
      "rollover가 있는 정책에서 min_age는 넘긴 시각부터 센다. 실습에서도 rollover 직후 나이가 0초부터 다시 시작했다. 인덱스에 30일 동안 쌓인 뒤 넘기고 다시 30일 뒤에 지우니 첫 문서는 60일 가까이 남는다.",
    anchor: "ilm-넘기고-줄이고-지운다",
  },
  {
    id: "elk-stack-basics-6",
    post: "elk-stack-basics",
    question: "rollover 조건을 max_docs 5000으로 두고 2만 건을 연달아 넣었더니 인덱스 하나에 2만 건이 들어갔다. 이유는?",
    choices: [
      "max_docs는 데이터 스트림에서 동작하지 않아서",
      "ILM이 조건을 문서가 들어올 때가 아니라 정해진 주기마다 확인해서",
      "_bulk로 넣은 문서는 rollover 조건에서 빠져서",
      "max_primary_shard_size 조건이 max_docs보다 우선이라서",
    ],
    answer: 1,
    explanation:
      "ILM은 indices.lifecycle.poll_interval(기본 10분)마다 조건을 본다. 실습에서는 주기를 5초로 줄였는데도 다음 확인 때 2만 건이 된 상태에서 넘겼다. rollover 조건은 상한이 아니라 다음 확인 때 넘길지 판단하는 기준이다.",
    anchor: "ilm-넘기고-줄이고-지운다",
  },
  {
    id: "elk-stack-basics-7",
    post: "elk-stack-basics",
    question: "평범한 인덱스 app-logs-000001에 rollover가 들어간 ILM 정책을 붙였더니 explain에 step: ERROR가 떴다. 원인은?",
    choices: [
      "평범한 인덱스는 ILM을 쓸 수 없어서",
      "인덱스 이름이 -000001로 끝나서",
      "어느 이름으로 넘길지 알려 주는 index.lifecycle.rollover_alias가 없어서",
      "number_of_replicas가 0이라서",
    ],
    answer: 2,
    explanation:
      "데이터 스트림이 아닌 인덱스는 쓰기 별칭으로 넘기므로 rollover_alias 설정이 필요하다. 실습의 explain에도 그 설정이 비어 있다는 이유가 나왔다. 그대로 두면 인덱스 하나가 끝없이 커지니 only_errors로 정기 확인하고 고친 뒤 retry한다.",
    anchor: "ilm-넘기고-줄이고-지운다",
  },
];
