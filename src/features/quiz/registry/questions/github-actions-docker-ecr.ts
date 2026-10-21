import type { QuizQuestion } from "../types";

export const GITHUB_ACTIONS_DOCKER_ECR: QuizQuestion[] = [
  {
    id: "github-actions-docker-ecr-1",
    post: "github-actions-docker-ecr",
    question: "configure-aws-credentials 스텝에서 'Not authorized to perform sts:AssumeRoleWithWebIdentity'가 났다. 먼저 볼 곳은?",
    choices: [
      "역할에 붙은 권한 정책에 ecr:PutImage가 있는지",
      "역할의 신뢰 정책 sub·aud 조건이 이 잡의 토큰과 맞는지",
      "저장소 secrets에 AWS_ACCESS_KEY_ID가 있는지",
      "ECR 저장소가 IMMUTABLE인지",
    ],
    answer: 1,
    explanation:
      "이 메시지는 역할을 빌리는 단계에서 신뢰 정책 조건이 맞지 않았다는 뜻이다. 권한 정책은 역할을 빌린 뒤에야 따지므로 ecr 권한과는 상관이 없다.",
    anchor: "신뢰-정책의-sub-조건이-문을-정한다",
  },
  {
    id: "github-actions-docker-ecr-2",
    post: "github-actions-docker-ecr",
    question: "잘 되던 OIDC 인증이 빌드 잡에 environment: production을 붙인 뒤로 실패한다. 이유는?",
    choices: [
      "environment가 있으면 OIDC 토큰의 수명이 짧아져서",
      "environment secrets가 저장소 secrets를 덮어써서",
      "토큰의 sub가 ref 모양에서 environment:production 모양으로 바뀌어서",
      "environment를 쓰면 id-token 권한이 자동으로 빠져서",
    ],
    answer: 2,
    explanation:
      "잡에 environment가 붙으면 sub가 repo:org/repo:environment:production이 된다. 신뢰 정책이 ref:refs/heads/main에 맞춰져 있으면 더는 맞지 않아 역할을 빌리지 못한다.",
    anchor: "신뢰-정책의-sub-조건이-문을-정한다",
  },
  {
    id: "github-actions-docker-ecr-3",
    post: "github-actions-docker-ecr",
    question: "쿠버네티스 매니페스트의 이미지를 계속 shop-api:latest로 두고 새 이미지를 푸시하면 어떻게 되나?",
    choices: [
      "Deployment가 자동으로 새 이미지를 감지해 롤링 업데이트한다",
      "Pod 템플릿 문자열이 그대로라 롤링 업데이트가 일어나지 않는다",
      "ECR이 이전 latest 이미지를 자동으로 다른 태그로 옮긴다",
      "kubectl apply가 태그 충돌 오류를 낸다",
    ],
    answer: 1,
    explanation:
      "롤링 업데이트는 Pod 템플릿이 바뀌어야 시작되는데 이미지 문자열이 같으면 템플릿도 같다. 어느 커밋이 떠 있는지 알 수 없고 되돌릴 이름도 없어서 SHA 태그를 쓴다.",
    anchor: "태그는-커밋-sha로-붙인다",
  },
  {
    id: "github-actions-docker-ecr-4",
    post: "github-actions-docker-ecr",
    question: "멀티 스테이지 Dockerfile을 러너에서 빌드할 때 cache-to에 mode=max를 쓰는 이유는?",
    choices: [
      "최종 이미지에 남지 않는 빌드 스테이지 레이어까지 캐시하려고",
      "캐시를 ECR에 저장하려고",
      "캐시 용량 한도를 없애려고",
      "이미지를 여러 아키텍처로 빌드하려고",
    ],
    answer: 0,
    explanation:
      "기본값 min은 최종 이미지의 레이어만 내보내서 의존성을 받는 빌드 스테이지가 매번 다시 돈다. max는 중간 스테이지까지 남기는 대신 캐시 용량을 더 쓴다.",
    anchor: "buildx-캐시를-actions-캐시에-둔다",
  },
  {
    id: "github-actions-docker-ecr-5",
    post: "github-actions-docker-ecr",
    question: "배포 잡에 cancel-in-progress: true를 걸면 생길 수 있는 문제는?",
    choices: [
      "배포가 한 번도 실행되지 않는다",
      "가장 오래된 커밋만 배포된다",
      "OIDC 토큰이 재사용된다",
      "kubectl apply 도중에 취소돼 리소스 일부만 바뀐 채로 남는다",
    ],
    answer: 3,
    explanation:
      "새 실행이 들어오면 돌던 배포가 중간에 끊긴다. 빌드는 결과를 버리면 되지만 배포는 반쯤 바뀐 상태를 사람이 정리해야 해서, 배포 잡은 고정 그룹에 cancel-in-progress를 false로 둔다.",
    anchor: "같은-브랜치-배포가-겹칠-때-concurrency",
  },
  {
    id: "github-actions-docker-ecr-6",
    post: "github-actions-docker-ecr",
    question: "actionlint가 run에 쓴 github.event.head_commit.message를 경고하는 이유는?",
    choices: [
      "커밋 메시지는 러너에서 읽을 수 없는 값이라서",
      "셸이 받기 전에 문자열로 치환돼 메시지 안의 명령이 실행될 수 있어서",
      "커밋 메시지가 secrets로 가려져서",
      "head_commit은 pull_request 이벤트에만 있어서",
    ],
    answer: 1,
    explanation:
      "${{ }}는 실행 전에 치환되므로 따옴표와 명령을 넣은 커밋 메시지가 스크립트의 일부가 된다. 외부 값은 env로 환경 변수에 담고 셸 변수로 읽어야 한다.",
    anchor: "푸시하기-전에-actionlint로-걸러-낸다",
  },
  {
    id: "github-actions-docker-ecr-7",
    post: "github-actions-docker-ecr",
    question: "'Could not load credentials from any providers'와 함께 id-token 권한 안내가 찍혔다. 가장 가능성 높은 원인은?",
    choices: [
      "잡의 permissions에 id-token: write가 빠졌다",
      "ECR 저장소가 다른 리전에 있다",
      "역할의 권한 정책에 ecr:GetAuthorizationToken이 없다",
      "IMMUTABLE 저장소에 같은 태그를 올렸다",
    ],
    answer: 0,
    explanation:
      "토큰을 요청하려면 잡에 id-token: write가 있어야 한다. 잡 단위 permissions를 따로 적으면 워크플로 맨 위 설정을 덮어써서 이 권한이 빠지기 쉽다.",
    anchor: "실패한-잡-로그에서-먼저-볼-줄",
  },
];
