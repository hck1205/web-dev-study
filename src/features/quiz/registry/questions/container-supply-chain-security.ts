import type { QuizQuestion } from "../types";

export const CONTAINER_SUPPLY_CHAIN_SECURITY: QuizQuestion[] = [
  {
    id: "container-supply-chain-security-1",
    post: "container-supply-chain-security",
    question:
      "digest 6aa6에 서명한 뒤 누군가 같은 태그 app:1.0으로 새 이미지를 올렸다. cosign verify ... app:1.0은 어떻게 되나?",
    choices: [
      "서명이 태그에 붙어 있으므로 새 이미지도 통과한다",
      "레지스트리가 서명된 태그의 덮어쓰기를 거부해서 이전 이미지가 그대로 나온다",
      "태그가 새 digest를 가리키고 그 digest에는 서명이 없어서 no signatures found로 실패한다",
      "서명은 통과하지만 경고가 한 줄 붙는다",
    ],
    answer: 2,
    explanation:
      "서명은 태그가 아니라 digest에 붙는다. 태그만 새 digest로 옮겨 갔으니 그 digest에서는 서명을 찾지 못한다. 그래서 확인과 실행을 같게 하려면 매니페스트에 digest를 적는다.",
    anchor: "누가-만들었나-서명",
  },
  {
    id: "container-supply-chain-security-2",
    post: "container-supply-chain-security",
    question:
      "node:22-alpine 스캔의 HIGH 취약점이 모두 usr/local/lib/node_modules/npm/ 아래에서 나왔다. 가장 효과적인 대응은?",
    choices: [
      "멀티 스테이지 빌드로 실행 단계에 npm이 없는 베이스를 써서 그 패키지를 아예 빼는 것",
      "npm audit fix를 이미지 안에서 돌리는 것",
      "--severity CRITICAL로만 스캔해 결과를 줄이는 것",
      "모든 CVE를 .trivyignore에 넣는 것",
    ],
    answer: 0,
    explanation:
      "그 취약점은 앱이 아니라 이미지에 딸려 온 npm CLI의 의존성이다. 앱은 런타임에 npm을 쓰지 않으니 실행 이미지에서 빼면 줄들이 통째로 사라진다. 결과를 숨기는 방법은 위험을 줄이지 않는다.",
    anchor: "알려진-취약점-걸러-내기",
  },
  {
    id: "container-supply-chain-security-3",
    post: "container-supply-chain-security",
    question: "키리스 서명을 검증할 때 --certificate-identity-regexp '.*'로 걸면 생기는 문제는?",
    choices: [
      "검증 속도가 느려진다",
      "같은 OIDC 발급자를 쓰는 아무 저장소의 서명이나 통과한다",
      "인증서가 만료되어 항상 실패한다",
      "Rekor 로그를 확인하지 않게 된다",
    ],
    answer: 1,
    explanation:
      "키리스에서 신뢰의 근거는 인증서에 적힌 신원(워크플로 경로)과 발급자다. 신원을 아무 값이나 받으면 GitHub Actions를 쓰는 누구의 서명이든 통과한다. 저장소와 워크플로, 가능하면 태그까지 좁힌다.",
    anchor: "누가-만들었나-서명",
  },
  {
    id: "container-supply-chain-security-4",
    post: "container-supply-chain-security",
    question:
      "허용 레지스트리 규칙을 i.startsWith('registry.example.com')으로 썼다. 어떤 이미지가 의도와 달리 통과하나?",
    choices: [
      "registry.example.com/shop/api@sha256:...",
      "nginx:1.27-alpine",
      "docker.io/library/nginx",
      "registry.example.com.evil.io/api@sha256:...",
    ],
    answer: 3,
    explanation:
      "끝의 /가 없으면 registry.example.com으로 시작하는 다른 도메인도 맞는다. startsWith('registry.example.com/')로 경로 구분자까지 넣어야 한다. nginx처럼 레지스트리를 생략한 이름은 docker.io라서 원래대로 막힌다.",
    anchor: "클러스터-입구에서-거르기",
  },
  {
    id: "container-supply-chain-security-5",
    post: "container-supply-chain-security",
    question:
      "ImagePolicyWebhook을 defaultAllow: true로 켠 상태에서 정책 서버가 죽었다. 처음 보는 이미지로 Pod를 만들면?",
    choices: [
      "정책 서버가 응답하지 않아 그대로 허용된다",
      "API 서버가 재시작된다",
      "connection refused로 거절된다",
      "denyTTL이 지날 때까지 대기한다",
    ],
    answer: 0,
    explanation:
      "defaultAllow: true는 서버에 닿지 못하면 허용하는 fail-open 설정이라, 정책 서버만 멈추면 검사가 사라진다. false로 바꾸면 거절되지만 정책 서버 장애가 Pod 생성 장애가 되므로 이중화가 필요하다. 이미 판정한 이미지는 TTL 동안 캐시된 결과를 쓴다.",
    anchor: "클러스터-입구에서-거르기",
  },
  {
    id: "container-supply-chain-security-6",
    post: "container-supply-chain-security",
    question: "새 OpenSSL 취약점이 발표된 날, 빌드마다 SBOM을 저장해 둔 팀이 할 수 있는 일은?",
    choices: [
      "모든 이미지를 자동으로 다시 빌드한다",
      "이미지를 다시 받아 풀지 않고 SBOM만 검색하거나 재스캔해 영향받는 이미지를 찾는다",
      "취약점이 있는 이미지에 서명을 취소한다",
      "SBOM이 취약점을 자동으로 패치한다",
    ],
    answer: 1,
    explanation:
      "SBOM은 이미지 안의 패키지와 버전 목록이라, 그 패키지와 버전을 쓰는 이미지를 바로 찾을 수 있다. trivy sbom처럼 스캐너에 SBOM을 넣어 다시 스캔할 수도 있다. SBOM은 목록일 뿐 고치지는 않는다.",
    anchor: "이미지에-무엇이-들었나-sbom",
  },
];
