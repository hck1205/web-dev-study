import type { QuizQuestion } from "../types";

export const K8S_AUDIT_LOGGING: QuizQuestion[] = [
  {
    id: "k8s-audit-logging-1",
    post: "k8s-audit-logging",
    question:
      "감사 정책 맨 끝에 `- level: Request`가 있고, 그 위에 Secret을 Metadata로 잡는 규칙이 있다. 두 규칙의 순서를 바꾸면 무엇이 달라지나?",
    choices: [
      "아무것도 달라지지 않는다. 더 구체적인 규칙이 항상 이긴다",
      "Secret 생성·수정 요청의 본문(값)이 감사 로그에 남는다",
      "Secret 요청이 아예 기록되지 않는다",
      "API 서버가 정책 파일을 거부하고 뜨지 않는다",
    ],
    answer: 1,
    explanation:
      "감사 정책은 위에서부터 처음 맞는 규칙 하나만 쓴다. 조건 없는 Request 규칙이 위로 가면 Secret 쓰기도 거기서 멈춰 요청 본문, 즉 base64로 된 값이 남는다. 구체성으로 고르는 방식이 아니다.",
    anchor: "위에서부터-처음-맞는-규칙-하나",
  },
  {
    id: "k8s-audit-logging-2",
    post: "k8s-audit-logging",
    question:
      "정책에 `resources: [{ group: \"\", resources: [\"pods\"] }]`를 RequestResponse로 걸었다. `kubectl exec`로 Pod에 들어간 기록은 어느 규칙을 따르나?",
    choices: [
      "pods 규칙을 따라 RequestResponse로 남는다",
      "exec는 감사 대상이 아니라 남지 않는다",
      "pods 규칙에 맞지 않고, 그 아래에서 처음 맞는 규칙을 따른다",
      "pods 규칙과 아래 규칙이 합쳐져 가장 높은 수준으로 남는다",
    ],
    answer: 2,
    explanation:
      "하위 리소스는 pods/exec처럼 합친 이름으로 맞춘다. 실습에서도 pods 규칙은 exec를 잡지 못했고 catch-all의 Metadata로 남았다. exec를 따로 다루려면 pods/exec나 */exec를 적는다.",
    anchor: "위에서부터-처음-맞는-규칙-하나",
  },
  {
    id: "k8s-audit-logging-3",
    post: "k8s-audit-logging",
    question: "대부분의 감사 정책이 `omitStages: [\"RequestReceived\"]`를 두는 이유는?",
    choices: [
      "RequestReceived 이벤트에는 결과가 없고, 같은 요청의 ResponseComplete가 그 내용을 모두 담기 때문에",
      "RequestReceived 단계에서 Secret 값이 노출되기 때문에",
      "RequestReceived를 남기면 요청이 거절되기 때문에",
      "watch 요청이 RequestReceived 없이는 끝나지 않기 때문에",
    ],
    answer: 0,
    explanation:
      "RequestReceived는 처리를 시작하기 전에 남겨서 응답 코드가 없다. 빼면 짧은 요청의 이벤트가 두 개에서 하나로 줄어 로그 양이 크게 준다. 오래 열린 요청은 ResponseStarted가 따로 남는다.",
    anchor: "요청-하나가-남기는-단계",
  },
  {
    id: "k8s-audit-logging-4",
    post: "k8s-audit-logging",
    question:
      "웹훅 백엔드(batch 모드)의 수집기가 30분 동안 죽어 있었다. 그동안 클러스터와 감사 기록은 어떻게 되나?",
    choices: [
      "모든 API 쓰기 요청이 실패한다",
      "API 서버가 이벤트를 메모리에 모두 쌓아 두었다가 수집기가 돌아오면 보낸다",
      "요청은 정상 처리되고, 재시도 끝에 포기한 이벤트는 사라지며 apiserver_audit_error_total이 는다",
      "API 서버가 자동으로 로그 백엔드로 바꿔 쓴다",
    ],
    answer: 2,
    explanation:
      "batch 모드는 요청을 막지 않는 대신, 보내지 못한 묶음을 재시도하다 버린다. 실습에서도 요청은 69ms에 끝났고 1분 반쯤 뒤 'Error in audit plugin webhook' 로그와 에러 메트릭이 남았다. 그래서 노드 파일 백엔드를 함께 켜 둔다.",
    anchor: "파일로-남길까-웹훅으로-보낼까",
  },
  {
    id: "k8s-audit-logging-5",
    post: "k8s-audit-logging",
    question:
      "감사 로그에서 403 응답인데 `authorization.k8s.io/decision`이 allow인 이벤트가 있다. 무엇을 뜻하나?",
    choices: [
      "로그가 손상됐다",
      "RBAC은 허용했지만 어드미션(웹훅, VAP 등)이 거절했다",
      "인증에 실패했다",
      "행세(impersonation) 권한이 없었다",
    ],
    answer: 1,
    explanation:
      "decision은 인가 단계의 판단이다. allow인데 403이면 그 뒤의 어드미션에서 막힌 것이고, RBAC 거절은 decision이 forbid로 남는다. 같은 403이라도 어디서 막혔는지 이렇게 가른다.",
    anchor: "지운-사람을-jq로-찾기",
  },
  {
    id: "k8s-audit-logging-6",
    post: "k8s-audit-logging",
    question:
      "관리자가 `kubectl delete cm feature-flags --as=jiwoo`로 ConfigMap을 지웠다. 감사 이벤트에는 어떻게 남나?",
    choices: [
      "user가 jiwoo로만 남아 관리자가 한 일인지 알 수 없다",
      "user에 관리자, impersonatedUser에 jiwoo가 함께 남는다",
      "impersonation 요청은 감사 대상에서 빠진다",
      "user에 관리자만 남고 jiwoo는 남지 않는다",
    ],
    answer: 1,
    explanation:
      "행세한 요청은 실제로 인증된 사람이 user에, 행세한 대상이 impersonatedUser에 남는다. 인가는 jiwoo의 권한으로 했지만 실제 행위자는 관리자다. 그래서 impersonate 권한을 가진 사람도 함께 점검한다.",
    anchor: "지운-사람을-jq로-찾기",
  },
  {
    id: "k8s-audit-logging-7",
    post: "k8s-audit-logging",
    question: "'일단 다 남기자'며 모든 요청을 RequestResponse로 남기는 정책의 문제로 가장 큰 것 두 가지를 고르면?",
    choices: [
      "API 서버 CPU가 줄고 로그가 너무 짧아진다",
      "Secret 값이 로그에 남고, 목록 읽기의 응답 본문까지 적혀 로그 양이 폭발한다",
      "RBAC 판단이 로그에서 빠지고 user가 남지 않는다",
      "watch 요청이 끊기고 Lease 갱신이 실패한다",
    ],
    answer: 1,
    explanation:
      "RequestResponse는 요청과 응답 본문을 모두 적어서 Secret의 base64 값이 그대로 남는다. 실습에서 ConfigMap 100개 목록 하나가 Metadata로는 837바이트, RequestResponse로는 14만 바이트였다. 읽기는 Metadata, 쓰기는 Request가 보통의 출발점이다.",
    anchor: "secret을-requestresponse로-남기면",
  },
];
