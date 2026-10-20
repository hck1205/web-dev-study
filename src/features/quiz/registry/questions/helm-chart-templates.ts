import type { QuizQuestion } from "../types";

export const HELM_CHART_TEMPLATES: QuizQuestion[] = [
  {
    id: "helm-chart-templates-1",
    post: "helm-chart-templates",
    question: "helm install이 `yaml: line 6: did not find expected key`로 실패했다. 템플릿 파일 6번째 줄은 멀쩡해 보인다. 먼저 무엇을 하나?",
    choices: [
      "helm template --debug로 렌더링 결과를 출력해 결과물의 6번째 줄을 본다",
      "values.yaml의 6번째 줄을 고친다",
      "kubectl describe로 Pod 이벤트를 본다",
      "helm rollback으로 이전 리비전으로 돌린다",
    ],
    answer: 0,
    explanation:
      "YAML 파싱 오류의 줄 번호는 템플릿이 아니라 렌더링이 끝난 결과물 기준이다. --debug를 붙이면 파싱에 실패한 텍스트를 그대로 보여 주므로 들여쓰기가 어디서 어긋났는지 바로 보인다.",
    anchor: "공백을-지우는-하이픈",
  },
  {
    id: "helm-chart-templates-2",
    post: "helm-chart-templates",
    question: "`{{ template \"app.labels\" . | nindent 4 }}`가 `wrong type for value; expected string` 오류를 낸다. 이유는?",
    choices: [
      "nindent는 숫자 4를 받을 수 없어서",
      "template은 결과를 바로 출력하는 동작이라 파이프가 결과가 아니라 넘길 인자 쪽에 걸리기 때문에",
      "_helpers.tpl은 template으로 부를 수 없기 때문에",
      "app.labels 조각에 define이 빠졌기 때문에",
    ],
    answer: 1,
    explanation:
      "template은 결과를 문자열로 돌려주지 않으니 뒤에 함수를 이어 붙일 수 없다. 엔진은 `. | nindent 4`를 조각에 넘길 인자로 읽어서 nindent가 최상위 객체를 받는다. 결과를 가공하려면 include를 쓴다.",
    anchor: "조각을-만드는-define-가져다-쓰는-include",
  },
  {
    id: "helm-chart-templates-3",
    post: "helm-chart-templates",
    question: "`{{ .Values.cacheEnabled | default true }}`로 쓴 차트에 --set cacheEnabled=false를 줬다. 결과는?",
    choices: [
      "false가 들어간다",
      "렌더링 오류가 난다",
      "true가 들어간다",
      "빈 문자열이 들어간다",
    ],
    answer: 2,
    explanation:
      "default는 nil뿐 아니라 false, 0, 빈 문자열도 비어 있다고 보고 기본값으로 바꾼다. 그래서 끌 수 없는 스위치가 된다. 불리언 기본값은 values.yaml에 적어 둔다.",
    anchor: "값이-없을-때-값이-틀린-타입일-때",
  },
  {
    id: "helm-chart-templates-4",
    post: "helm-chart-templates",
    question: "ConfigMap data에 `PORT: {{ .Values.port }}`를 넣었다. helm lint는 통과했는데 install이 실패한다. 왜인가?",
    choices: [
      "lint는 values 파일을 읽지 않기 때문에",
      "PORT라는 키 이름이 예약어이기 때문에",
      "렌더링 때 숫자가 문자열로 자동 변환되지 않아 템플릿 엔진이 멈추기 때문에",
      "lint는 YAML 문법까지만 보고, ConfigMap data가 문자열만 받는다는 스키마 검사는 API 서버가 하기 때문에",
    ],
    answer: 3,
    explanation:
      "렌더링 결과 `PORT: 8080`은 YAML로는 올바른 숫자라 lint를 통과한다. API 서버가 ConfigMap.data에 숫자나 불리언을 받으면 거절한다. 문자열 자리에는 `| quote`를 붙인다.",
    anchor: "값이-없을-때-값이-틀린-타입일-때",
  },
  {
    id: "helm-chart-templates-5",
    post: "helm-chart-templates",
    question: "`{{- range .Values.hosts }}` 안에서 `{{ .Release.Name }}`을 썼더니 can't evaluate field Release 오류가 났다. 어떻게 고치나?",
    choices: [
      "`{{ $.Release.Name }}`으로 바꾼다",
      "range를 with로 바꾼다",
      "`{{ include \"Release.Name\" . }}`으로 바꾼다",
      "values.yaml에 Release 키를 추가한다",
    ],
    answer: 0,
    explanation:
      "range와 with 안에서는 점이 현재 원소로 바뀌므로 문자열 원소에는 Release 필드가 없다. $는 템플릿이 시작할 때의 최상위 객체를 끝까지 가리킨다.",
    anchor: "조건과-반복-그리고-바뀌는-점",
  },
  {
    id: "helm-chart-templates-6",
    post: "helm-chart-templates",
    question: "ConfigMap 값만 바꿔 helm upgrade를 했는데 Pod가 새 설정을 읽지 않는다. 차트에서 흔히 쓰는 해결책은?",
    choices: [
      "ConfigMap에 helm.sh/resource-policy: keep을 단다",
      "ConfigMap 내용을 sha256sum으로 해시해 Pod 템플릿 어노테이션에 넣는다",
      "helm upgrade에 --reuse-values를 준다",
      "ConfigMap 이름에 리비전 번호를 붙이지 않는다",
    ],
    answer: 1,
    explanation:
      "Pod 템플릿이 그대로면 Deployment는 롤아웃하지 않는다. 내용 해시를 어노테이션에 넣으면 내용이 바뀔 때만 Pod 템플릿이 바뀌어 새 Pod가 뜬다.",
    anchor: "설정이-바뀌면-pod를-다시-띄우게-하기",
  },
];
