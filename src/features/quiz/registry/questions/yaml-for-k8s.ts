import type { QuizQuestion } from "../types";

export const YAML_FOR_K8S: QuizQuestion[] = [
  {
    id: "yaml-for-k8s-1",
    post: "yaml-for-k8s",
    question: "ConfigMap에 `COUNTRY: NO`를 넣었더니 서버가 'cannot unmarshal bool'로 거절했다. 가장 알맞은 수정은?",
    choices: [
      "값을 \"NO\"처럼 따옴표로 감싼다",
      "kubectl apply에 --validate=false를 준다",
      "data 대신 binaryData에 넣는다",
      "파일 맨 위에 %YAML 1.2 지시문을 넣는다",
    ],
    answer: 0,
    explanation:
      "kubectl은 YAML 1.1 규칙으로 따옴표 없는 NO를 false로 읽어 JSON으로 보낸다. 따옴표를 붙이면 무조건 문자열이다. --validate는 모르는 필드 검사라 타입 오류와 상관없고, 지시문을 넣어도 kubectl의 파서 규칙은 바뀌지 않는다.",
    anchor: "쿠버네티스는-어느-규칙으로-읽나",
  },
  {
    id: "yaml-for-k8s-2",
    post: "yaml-for-k8s",
    question: "`kubectl apply --dry-run=client`는 통과한 매니페스트가 실제 적용에서 타입 오류를 낸다. 왜 그런가?",
    choices: [
      "client dry-run은 YAML 문법조차 검사하지 않는다",
      "client dry-run은 YAML을 JSON으로 바꾸는 데까지만 하고, 타입 검사는 서버가 구조체에 넣을 때 한다",
      "서버가 YAML 1.2로 다시 파싱해서 결과가 달라진다",
      "client dry-run은 캐시된 이전 버전 파일을 읽는다",
    ],
    answer: 1,
    explanation:
      "서버는 YAML을 보지 못하고 kubectl이 바꾼 JSON만 받는다. 그 JSON을 Go 구조체에 넣는 순간 타입이 검사되므로 --dry-run=server부터 오류가 난다. 들여쓰기 같은 문법 오류는 client 단계에서도 잡힌다.",
    anchor: "쿠버네티스는-어느-규칙으로-읽나",
  },
  {
    id: "yaml-for-k8s-3",
    post: "yaml-for-k8s",
    question: "볼륨의 `defaultMode: 644`가 'must be a number between 0 and 0777 (octal)'로 거절됐다. 무엇이 문제인가?",
    choices: [
      "644는 문자열로 읽혀서 타입이 맞지 않는다",
      "쿠버네티스는 파일 권한으로 644를 허용하지 않는다",
      "0이 없어 10진수 644로 읽혔고, 0777(511)보다 크다. 0644로 써야 한다",
      "defaultMode는 ConfigMap 볼륨에서 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "YAML 1.1에서 0으로 시작해야 8진수다. 0644는 10진수 420으로 저장되고, 644는 그냥 10진수 644라 범위를 넘는다. 범위 안에 드는 10진수라면 오류 없이 엉뚱한 권한이 될 수도 있다.",
    anchor: "8진수가-오히려-필요한-곳",
  },
  {
    id: "yaml-for-k8s-4",
    post: "yaml-for-k8s",
    question: "ConfigMap에 셸 스크립트를 넣었는데 Pod에서 실행하면 명령이 전부 한 줄로 붙어 있다. 무엇을 의심하나?",
    choices: [
      "블록 스칼라를 >(folded)로 써서 줄바꿈이 공백으로 접혔다",
      "|-를 써서 끝의 줄바꿈이 사라졌다",
      "ConfigMap은 여러 줄 값을 지원하지 않는다",
      "스크립트 첫 줄의 #!이 YAML 주석으로 처리됐다",
    ],
    answer: 0,
    explanation:
      ">는 줄바꿈을 공백으로 접는다. 스크립트나 설정 파일처럼 줄이 의미 있는 내용은 |로 써야 한다. |-는 마지막 줄바꿈만 지우니 명령이 붙지는 않는다.",
    anchor: "여러-줄-문자열-막대와-꺾쇠",
  },
  {
    id: "yaml-for-k8s-5",
    post: "yaml-for-k8s",
    question: "Namespace와 ConfigMap을 한 파일에 넣고 apply했는데 ConfigMap만 생겼고 오류도 없었다. 원인으로 가장 그럴듯한 것은?",
    choices: [
      "Namespace는 dry-run에서만 만들어진다",
      "두 문서 사이의 ---가 빠져 맵 하나로 합쳐졌고, 중복된 키를 뒤의 값이 덮었다",
      "kubectl은 한 파일에서 첫 리소스를 건너뛴다",
      "ConfigMap이 Namespace보다 먼저 정렬되어 Namespace 생성이 취소됐다",
    ],
    answer: 1,
    explanation:
      "---가 없으면 apiVersion, kind, metadata가 한 맵에 두 번씩 나온다. kubectl의 YAML→JSON 변환은 중복 키를 오류 없이 뒤의 값으로 덮고, 서버는 합쳐진 JSON만 받는다. yamllint의 key-duplicates 규칙이 이걸 잡는다.",
    anchor: "대시-세-개로-문서를-나눈다",
  },
  {
    id: "yaml-for-k8s-6",
    post: "yaml-for-k8s",
    question: "kubectl이 'yaml: line 8: did not find expected '-' indicator'를 냈는데 8번 줄은 멀쩡하다. 어디를 보나?",
    choices: [
      "파일 인코딩. UTF-8 BOM이 있으면 이 오류가 난다",
      "8번 줄의 값에 따옴표를 붙인다",
      "API 서버 버전. 오래된 서버가 이 오류를 낸다",
      "그 근처 목록 항목 안의 들여쓰기. 파서는 항목을 읽던 위치를 보고해서 틀린 줄은 한두 줄 아래일 수 있다",
    ],
    answer: 3,
    explanation:
      "이 메시지는 목록 항목(-)을 기대한 자리에 어긋난 들여쓰기가 왔다는 뜻이다. 실습에서도 틀린 줄은 9번째 ports였고 오류는 8번째 줄을 가리켰다. 메시지 종류로 범위를 좁힌 뒤 위아래 줄의 칸 수를 맞춰 본다.",
    anchor: "들여쓰기-오류는-한-줄-앞을-가리킨다",
  },
  {
    id: "yaml-for-k8s-7",
    post: "yaml-for-k8s",
    question: "labels 아래 app: web을 들여쓰지 않아 labels가 비고 metadata.app이 생겼다. 이 실수를 서버가 거절하게 만드는 것은?",
    choices: [
      "--dry-run=client",
      "--validate=false",
      "서버 측 필드 검증(--validate=strict, 기본값). 모르는 필드 metadata.app을 거절한다",
      "kubectl apply --force",
    ],
    answer: 2,
    explanation:
      "문법상으로는 맞는 YAML이라 파서는 통과한다. 서버 측 strict 검증이 'unknown field \"metadata.app\"'으로 거절해 준다. --validate=warn이나 false로 낮추면 라벨 없는 리소스가 그대로 만들어진다.",
    anchor: "들여쓰기-오류는-한-줄-앞을-가리킨다",
  },
];
