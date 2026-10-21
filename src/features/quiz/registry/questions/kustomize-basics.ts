import type { QuizQuestion } from "../types";

export const KUSTOMIZE_BASICS: QuizQuestion[] = [
  {
    id: "kustomize-basics-1",
    post: "kustomize-basics",
    question:
      "운영 overlay에 commonLabels를 추가해 apply했더니 Deployment는 거절되고 Service 엔드포인트가 비었다. 원인은?",
    choices: [
      "commonLabels가 Service와 Deployment의 셀렉터에도 라벨을 넣었기 때문",
      "commonLabels가 네임스페이스를 바꿨기 때문",
      "ConfigMap 해시가 바뀌어 Pod가 재시작했기 때문",
      "Service는 라벨을 가질 수 없기 때문",
    ],
    answer: 0,
    explanation:
      "commonLabels는 metadata뿐 아니라 spec.selector와 Service selector에도 들어간다. Deployment 셀렉터는 immutable이라 거절되고, Service 셀렉터만 바뀌어 새 라벨이 없는 기존 Pod를 고르지 못한다. labels에 includeSelectors: false로 붙여야 한다.",
    anchor: "라벨-한-줄이-셀렉터를-바꾼다",
  },
  {
    id: "kustomize-basics-2",
    post: "kustomize-basics",
    question:
      "JSON 패치로 /spec/template/spec/containers/0/env/-에 값을 더해 왔는데, base에서 사이드카를 앞으로 옮긴 뒤 앱에 설정이 안 먹는다. 왜 그런가?",
    choices: [
      "JSON 패치는 base가 바뀌면 무시되기 때문",
      "env는 JSON 패치로 고칠 수 없기 때문",
      "0번이 사이드카를 가리키게 되어 값이 사이드카에 붙었기 때문",
      "Kustomize가 컨테이너 순서를 무작위로 섞기 때문",
    ],
    answer: 2,
    explanation:
      "JSON 패치는 목록을 위치로 가리킨다. 순서가 바뀌어도 경로는 유효해서 에러 없이 다른 컨테이너에 붙는다. 이름으로 찾는 전략적 병합 패치로 바꾸거나 test 연산으로 0번의 이름을 확인한다.",
    anchor: "위치로-찾아-바꾸는-패치",
  },
  {
    id: "kustomize-basics-3",
    post: "kustomize-basics",
    question: "전략적 병합 패치에 컨테이너 api의 env 하나만 적었다. 렌더링 결과로 맞는 것은?",
    choices: [
      "containers 목록이 api 하나로 통째로 바뀐다",
      "api의 env가 패치에 적은 하나만 남는다",
      "패치가 에러로 거절된다",
      "다른 컨테이너는 그대로이고 api의 env에서 같은 이름의 값만 바뀐다",
    ],
    answer: 3,
    explanation:
      "전략적 병합 패치는 컨테이너와 env 목록을 name 키로 찾아 합친다. 적지 않은 컨테이너와 다른 env는 그대로 남는다. 키가 정해지지 않은 args 같은 목록은 통째로 바뀐다.",
    anchor: "이름으로-찾아-합치는-패치",
  },
  {
    id: "kustomize-basics-4",
    post: "kustomize-basics",
    question: "target의 name을 오타 낸 JSON 패치가 있다. kubectl kustomize를 실행하면?",
    choices: [
      "no resource matches 에러로 멈춘다",
      "에러 없이 성공하고 패치는 아무 데도 적용되지 않는다",
      "가장 비슷한 이름의 리소스에 적용된다",
      "모든 Deployment에 적용된다",
    ],
    answer: 1,
    explanation:
      "target은 조건에 맞는 리소스 모두에 거는 셀렉터라 맞는 것이 없어도 성공한다. metadata.name으로 대상을 찾는 전략적 병합 패치는 대상이 없으면 실패하는 것과 다르다. 그래서 렌더링 결과에서 값이 바뀌었는지 확인한다.",
    anchor: "패치가-아무-데도-안-붙을-때",
  },
  {
    id: "kustomize-basics-5",
    post: "kustomize-basics",
    question: "configMapGenerator로 만든 설정 값을 바꿔 apply하면 일어나는 일로 맞는 것은?",
    choices: [
      "같은 ConfigMap이 고쳐지고 Pod는 그대로다",
      "옛 ConfigMap이 지워지고 새 ConfigMap이 같은 이름으로 생긴다",
      "해시가 붙은 새 ConfigMap이 생기고 Deployment가 롤아웃되며 옛 ConfigMap은 남는다",
      "Deployment는 바뀌지 않고 kubelet이 파일만 갱신한다",
    ],
    answer: 2,
    explanation:
      "내용이 바뀌면 해시가 바뀌어 이름이 바뀌고, 그 이름을 참조하는 Pod 템플릿이 바뀌어 롤아웃된다. 옛 ConfigMap은 남아서 rollout undo로 설정까지 되돌릴 수 있지만, 쌓인 것은 prune으로 정리해야 한다.",
    anchor: "내용이-바뀌면-이름이-바뀌는-generator",
  },
  {
    id: "kustomize-basics-6",
    post: "kustomize-basics",
    question:
      "개발 overlay에 디버그 사이드카 component를 넣자, test 연산을 건 overlay의 JSON 패치가 실패했다. 이유로 가장 알맞은 것은?",
    choices: [
      "component의 패치가 overlay의 패치보다 먼저 적용되어 컨테이너 순서가 바뀌었기 때문",
      "component는 JSON 패치와 함께 쓸 수 없기 때문",
      "component가 resources로 들어가 base를 덮었기 때문",
      "test 연산은 component가 있으면 항상 실패하기 때문",
    ],
    answer: 0,
    explanation:
      "component는 불러온 overlay 안에서 overlay 자신의 패치보다 먼저 실행된다. 실습에서는 전략적 병합 패치로 더한 사이드카가 목록 맨 앞에 들어가 0번이 바뀌었고, test가 그걸 잡았다.",
    anchor: "켜고-끄는-조각-component",
  },
];
