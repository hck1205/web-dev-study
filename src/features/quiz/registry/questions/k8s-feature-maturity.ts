import type { QuizQuestion } from "../types";

export const K8S_FEATURE_MATURITY: QuizQuestion[] = [
  {
    id: "k8s-feature-maturity-1",
    post: "k8s-feature-maturity",
    question: "1.30 클러스터에서 1.28에 나온 beta API(admissionregistration.k8s.io/v1beta1)로 매니페스트를 보냈더니 no matches for kind 에러가 났다. 왜인가?",
    choices: [
      "beta 기능의 feature gate가 기본으로 꺼져 있어서",
      "1.24부터 새로 나온 beta API 버전은 기본으로 꺼져 있어서",
      "beta API는 1.30에서 모두 제거돼서",
      "kubectl 버전이 서버보다 높아서",
    ],
    answer: 1,
    explanation:
      "feature gate와 API 버전은 스위치가 따로다. beta 기능의 gate는 기본으로 켜지지만, 1.24부터 새로 나온 beta API 버전은 runtime-config로 켜야 경로가 생긴다. 1.22 이전에 나온 beta API만 예외로 켜져 있었다.",
    anchor: "기능의-단계와-api의-단계는-따로-간다",
  },
  {
    id: "k8s-feature-maturity-2",
    post: "k8s-feature-maturity",
    question: "resizePolicy를 넣은 Pod가 created로 만들어졌는데 다시 읽어 보니 그 필드가 비어 있다. 무엇을 먼저 의심하나?",
    choices: [
      "그 기능의 feature gate가 꺼져 있어 API 서버가 필드를 버렸다",
      "strict 검증이 필드를 지웠다",
      "kubelet이 필드를 지웠다",
      "resourceVersion 충돌로 일부만 저장됐다",
    ],
    answer: 0,
    explanation:
      "gate가 꺼진 기능의 필드는 에러 없이 조용히 버려진다. 그래서 apply가 성공했다고 필드가 들어간 것이 아니다. 클러스터 버전에서 그 기능의 단계와 관련 컴포넌트의 gate를 확인한다.",
    anchor: "feature-gate를-켜고-끄기",
  },
  {
    id: "k8s-feature-maturity-3",
    post: "k8s-feature-maturity",
    question: "batch/v1beta1이 제거된 1.25로 올렸다. 그 버전으로 만들어 두었던 CronJob은 어떻게 되나?",
    choices: [
      "업그레이드 중에 etcd에서 지워진다",
      "남아 있지만 더 이상 Job을 만들지 않는다",
      "batch/v1으로 읽히며 계속 돈다. 옛 버전으로 보내는 매니페스트만 막힌다",
      "kubectl convert를 돌리기 전까지 읽을 수 없다",
    ],
    answer: 2,
    explanation:
      "객체는 저장 버전으로 한 벌만 있고 API 버전은 그걸 보는 창이라, 창 하나가 닫혀도 새 버전으로 그대로 보인다. 막히는 것은 사라진 버전으로 요청하는 매니페스트, Helm 릴리스 기록, 옛 클라이언트다.",
    anchor: "이미-돌고-있는-객체는-괜찮다",
  },
  {
    id: "k8s-feature-maturity-4",
    post: "k8s-feature-maturity",
    question: "apiserver_requested_deprecated_apis 지표로 폐기 API 호출을 발견했다. 누가 불렀는지 알려면 어디를 보나?",
    choices: [
      "kubelet 로그",
      "같은 지표의 removed_release 라벨",
      "etcd의 revision 기록",
      "감사 로그에서 k8s.io/deprecated 어노테이션이 붙은 이벤트의 user와 userAgent",
    ],
    answer: 3,
    explanation:
      "지표는 어떤 group·version·resource가 요청됐고 언제 사라지는지만 알려 주고, 호출자는 없다. 감사 이벤트에는 k8s.io/deprecated와 k8s.io/removed-release가 붙으니 그 이벤트의 사용자와 클라이언트 정보로 범인을 찾는다. 지표는 API 서버가 재시작하면 지워진다는 점도 기억한다.",
    anchor: "누가-아직-옛-api를-부르나",
  },
  {
    id: "k8s-feature-maturity-5",
    post: "k8s-feature-maturity",
    question: "extensions/v1beta1 Deployment를 kubectl convert로 apps/v1으로 바꿨다. 결과를 그대로 쓰면 생기는 문제는?",
    choices: [
      "selector가 빠져서 apply가 실패한다",
      "progressDeadlineSeconds와 revisionHistoryLimit에 옛 기본값인 int32 최대값이 박힌다",
      "apiVersion이 apps/v1beta2로 바뀐다",
      "Pod 템플릿의 이미지가 지워진다",
    ],
    answer: 1,
    explanation:
      "convert는 옛 버전의 기본값(마감 없음, 리비전 무한 보관, maxSurge 1)을 그대로 적는다. apps/v1 기본값을 원하면 그 필드를 지우거나 고친다. selector는 템플릿 라벨로 채워 주니 빠지지 않는다.",
    anchor: "kubectl-convert로-옮기기",
  },
  {
    id: "k8s-feature-maturity-6",
    post: "k8s-feature-maturity",
    question: "업그레이드 직후 kube-apiserver가 unrecognized feature gate 에러로 뜨지 않는다. 원인은?",
    choices: [
      "예전에 설정에 넣어 둔 feature gate가 새 버전에서 이름째 사라졌다",
      "beta API를 runtime-config로 켜 두었다",
      "kubelet이 API 서버보다 두 마이너 낮다",
      "pluto가 제거된 API를 찾았다",
    ],
    answer: 0,
    explanation:
      "기능이 GA가 되면 gate는 켜진 채 잠기고, 폐기 기간이 지나면 이름 자체가 없어진다. 없어진 이름을 주면 컴포넌트가 시작하지 못한다. 업그레이드 전에 설정의 gate 목록을 새 버전 목록과 대조한다.",
    anchor: "feature-gate를-켜고-끄기",
  },
];
