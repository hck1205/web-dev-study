import type { QuizQuestion } from "../types";

export const HELM_VALUES_SECRETS: QuizQuestion[] = [
  {
    id: "helm-values-secrets-1",
    post: "helm-values-secrets",
    question: "레플리카 3으로 설치한 릴리스를 `helm upgrade --set image.tag=1.27.1`로 업그레이드했더니 레플리카가 1이 됐다. 이유는?",
    choices: [
      "--set이 replicaCount를 자동으로 초기화하는 옵션이기 때문이다",
      "값을 하나라도 주면 지난 리비전의 사용자 값을 버리고 차트 기본값 위에 이번 값만 얹기 때문이다",
      "Deployment 컨트롤러가 이미지가 바뀌면 레플리카를 1로 줄이기 때문이다",
      "helm upgrade는 항상 --reset-values로 동작하기 때문이다",
    ],
    answer: 1,
    explanation:
      "Helm은 업그레이드에 아무 값도 없을 때만 지난 값을 다시 쓴다. 값이 하나라도 있으면 차트 기본값에서 다시 시작해 replicaCount: 1이 된다. 환경 값은 파일로 매번 넘기는 게 안전하다.",
    anchor: "업그레이드-때-지난-값은-어디로-가나",
  },
  {
    id: "helm-values-secrets-2",
    post: "helm-values-secrets",
    question: "`-f values-prod.yaml`로 ingress.hosts의 host만 바꿨는데 렌더링 결과에서 paths가 사라졌다. 왜인가?",
    choices: [
      "목록은 원소끼리 합치지 않고 덮는 쪽 목록으로 통째로 바뀌기 때문이다",
      "-f 파일은 맵을 합치지 않기 때문이다",
      "paths 키가 null로 들어갔기 때문이다",
      "values.schema.json이 paths를 지웠기 때문이다",
    ],
    answer: 0,
    explanation:
      "values 병합에서 맵은 깊이 합쳐지지만 목록은 통째로 교체된다. 목록을 덮을 때는 원소의 필드를 전부 다시 적거나, 차트를 만들 때 목록 대신 맵으로 받는다.",
    anchor: "맵은-합쳐지고-목록은-통째로-바뀐다",
  },
  {
    id: "helm-values-secrets-3",
    post: "helm-values-secrets",
    question: "values 파일에 따옴표 없이 `tag: 1.10`을 적었더니 ImagePullBackOff가 난다. 무엇이 일어났나?",
    choices: [
      "Helm이 태그 앞에 v를 붙였다",
      "레지스트리가 1.10 태그를 지웠다",
      "YAML이 1.10을 실수로 읽어 1.1로 렌더링됐다",
      "--set과 -f가 충돌해 태그가 비었다",
    ],
    answer: 2,
    explanation:
      "values 파일은 YAML이라 따옴표 없는 1.10은 실수가 되고 템플릿에는 1.1로 찍힌다. --set은 이 경우 문자열로 남기지만 values 파일은 다르다. 숫자처럼 생긴 문자열은 따옴표로 감싼다.",
    anchor: "values-파일-안의-숫자는-실수가-된다",
  },
  {
    id: "helm-values-secrets-4",
    post: "helm-values-secrets",
    question: "새 차트 버전에 metrics 기본값이 추가됐다. `--reuse-values`로 업그레이드하자 nil pointer 오류가 났다. 가장 알맞은 대응은?",
    choices: [
      "--force를 붙인다",
      "릴리스를 지우고 다시 설치한다",
      "--wait를 붙인다",
      "--reset-then-reuse-values로 새 차트 기본값과 지난 사용자 값을 함께 쓴다",
    ],
    answer: 3,
    explanation:
      "--reuse-values는 차트 기본값까지 지난 리비전 것을 써서 새 차트에만 있는 기본값을 못 본다. Helm 3.14에 생긴 --reset-then-reuse-values는 기본값은 새 차트에서, 사용자 값은 지난 리비전에서 가져온다.",
    anchor: "업그레이드-때-지난-값은-어디로-가나",
  },
  {
    id: "helm-values-secrets-5",
    post: "helm-values-secrets",
    question: "SOPS로 암호화한 secrets.prod.yaml을 복호화해 helm upgrade -f로 넘겼다. 이 방식에서 여전히 남는 위험은?",
    choices: [
      "git 저장소에 비밀번호가 평문으로 남는다",
      "복호화된 값이 Helm 릴리스 기록 Secret에 사용자 값으로 저장돼 helm get values로 보인다",
      "SOPS가 키 이름까지 암호화해서 diff를 볼 수 없다",
      "CI가 복호화 키 없이도 값을 읽을 수 있다",
    ],
    answer: 1,
    explanation:
      "SOPS는 git에 있는 파일만 지킨다. Helm에 넘어간 값은 릴리스 기록에 그대로 들어가니 그 네임스페이스의 Secret을 읽을 수 있는 사람은 값을 본다. Helm 기록에 남기지 않으려면 ESO나 Sealed Secrets로 Secret을 따로 만든다.",
    anchor: "비밀-값을-values에-평문으로-두면",
  },
  {
    id: "helm-values-secrets-6",
    post: "helm-values-secrets",
    question: "lookup으로 기존 비밀번호를 유지하는 차트를 ArgoCD로 배포했더니 동기화마다 비밀번호가 바뀐다. 왜인가?",
    choices: [
      "ArgoCD가 helm template으로 렌더링해서 lookup이 항상 빈 값을 돌려주기 때문이다",
      "ArgoCD가 Secret을 매번 지우고 다시 만들기 때문이다",
      "randAlphaNum이 ArgoCD에서만 다른 시드를 쓰기 때문이다",
      "lookup은 다른 네임스페이스만 조회할 수 있기 때문이다",
    ],
    answer: 0,
    explanation:
      "lookup은 클러스터에 붙은 install, upgrade, --dry-run=server에서만 실제 리소스를 읽는다. helm template과 기본 dry-run에서는 빈 값이라 매번 새 무작위 값이 나온다. GitOps에서는 existingSecret이나 ESO로 값을 넣는다.",
    anchor: "lookup은-helm-template에서-비어-있다",
  },
];
