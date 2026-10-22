import type { QuizQuestion } from "../types";

export const CIS_BENCHMARK_KUBE_BENCH: QuizQuestion[] = [
  {
    id: "cis-benchmark-kube-bench-1",
    post: "cis-benchmark-kube-bench",
    question: "kube-bench가 API 서버의 --profiling 항목을 판정하는 방법으로 맞는 것은?",
    choices: [
      "API 서버의 /debug/pprof에 직접 요청을 보내 응답을 본다",
      "노드에서 ps -ef로 kube-apiserver 명령줄을 읽고 --profiling 값을 비교한다",
      "etcd에 저장된 API 서버 설정 객체를 읽는다",
      "kubectl get --raw /configz 결과를 파싱한다",
    ],
    answer: 1,
    explanation:
      "항목마다 적힌 audit 셸 명령을 돌려 그 출력에서 플래그를 찾고 기대값과 비교한다. 플래그 항목은 대부분 프로세스 목록을 grep하는 한 줄이라 실제 동작을 시험하지 않는다.",
    anchor: "kube-bench가-한-항목을-판정하는-법",
  },
  {
    id: "cis-benchmark-kube-bench-2",
    post: "cis-benchmark-kube-bench",
    question:
      "kwok으로 띄운 클러스터에서 1.1절(파일 권한) 항목이 무더기로 FAIL이 났다. JSON 출력의 actual_value가 빈 문자열이라면 가장 그럴듯한 원인은?",
    choices: [
      "파일 권한이 777로 너무 넓다",
      "kube-bench를 root가 아닌 사용자로 실행했다",
      "점검하는 경로에 파일이 없어서 stat 출력이 비었다",
      "벤치마크 판이 너무 최신이다",
    ],
    answer: 2,
    explanation:
      "audit은 파일이 있을 때만 stat을 찍는데, kubeadm 경로의 파일이 없으니 출력이 비고 기대한 permissions가 없어 FAIL이 된다. k3s나 RKE2처럼 경로가 다른 배포판은 전용 벤치마크 판을 골라야 이런 거짓 FAIL을 피한다.",
    anchor: "기본값으로-띄운-컨트롤-플레인을-재-보면",
  },
  {
    id: "cis-benchmark-kube-bench-3",
    post: "cis-benchmark-kube-bench",
    question:
      "스케줄러 명령줄에 --bind-address=0.0.0.0 뒤에 --bind-address=127.0.0.1이 함께 있다. 무슨 일이 일어나나?",
    choices: [
      "스케줄러는 127.0.0.1에서 듣지만 kube-bench는 0.0.0.0을 읽어 FAIL로 적는다",
      "스케줄러가 플래그 중복으로 시작하지 못한다",
      "스케줄러는 0.0.0.0에서 듣고 kube-bench는 PASS로 적는다",
      "두 주소 모두에서 듣는다",
    ],
    answer: 0,
    explanation:
      "컴포넌트의 플래그 파서는 같은 플래그가 두 번 오면 뒤의 값을 쓰고, kube-bench는 처음 만난 값을 읽는다. 순서가 반대면 PASS인데 위험하게 도는 경우도 생기므로 고친 뒤 ss나 curl로 실제 동작을 확인하고 중복 플래그를 지운다.",
    anchor: "점검기는-첫-번째-플래그를-읽는다",
  },
  {
    id: "cis-benchmark-kube-bench-4",
    post: "cis-benchmark-kube-bench",
    question: "API 서버에 --anonymous-auth=false를 그냥 넣었을 때 생길 수 있는 장애는?",
    choices: [
      "kubectl 사용자가 모두 403을 받는다",
      "ServiceAccount 토큰이 전부 무효가 된다",
      "etcd와의 연결이 끊긴다",
      "인증서 없이 /livez를 부르는 프로브와 로드 밸런서 헬스 체크가 401을 받아 API 서버가 재시작되거나 빠진다",
    ],
    answer: 3,
    explanation:
      "kubeadm의 API 서버 프로브와 외부 로드 밸런서는 인증 없이 /livez, /readyz를 부른다. 익명을 통째로 끄면 401이 나고 프로브가 실패한다. AuthenticationConfiguration의 anonymous conditions로 헬스 체크 경로만 익명으로 남기는 방법이 있다.",
    anchor: "고치면-클러스터가-멈추는-항목",
  },
  {
    id: "cis-benchmark-kube-bench-5",
    post: "cis-benchmark-kube-bench",
    question: "kubelet 설정에서 10250 포트로 아무 컨테이너에서나 명령을 실행당하는 위험을 막는 조합은?",
    choices: [
      "readOnlyPort: 10255와 rotateCertificates: true",
      "authentication.anonymous.enabled: false와 authorization.mode: Webhook",
      "seccompDefault: true와 podPidsLimit",
      "NodeRestriction 어드미션 플러그인만 켜기",
    ],
    answer: 1,
    explanation:
      "kubelet 기본값은 익명 요청을 받고 인가가 AlwaysAllow라서 exec 같은 API가 열려 있다. 익명을 끄고 인가를 Webhook으로 바꾸면 API 서버의 SubjectAccessReview로 권한을 확인한다. NodeRestriction은 kubelet 자격 증명이 API 서버에서 고칠 수 있는 범위를 좁히는 것이라 kubelet API 자체를 지키지는 않는다.",
    anchor: "노드-쪽은-kubelet-설정-파일에서",
  },
  {
    id: "cis-benchmark-kube-bench-6",
    post: "cis-benchmark-kube-bench",
    question: "kube-bench에 --skip 1.2.1을 주고 실행하면 그 항목은 결과에 어떻게 남나?",
    choices: [
      "결과에서 완전히 사라진다",
      "PASS로 바뀐다",
      "INFO로 바뀌어 남는다",
      "FAIL로 남지만 종료 코드에서 빠진다",
    ],
    answer: 2,
    explanation:
      "건너뛴 항목은 INFO로 바뀌어 결과에 남는다. 예외로 둔 항목이 기록에서도 보이게 하려는 동작이라, 예외 목록을 --skip으로 관리하면서 근거를 함께 적어 두면 된다.",
    anchor: "클러스터-안에서-job으로-돌리기",
  },
];
