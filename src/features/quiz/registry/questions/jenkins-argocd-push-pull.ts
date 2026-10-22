import type { QuizQuestion } from "../types";

export const JENKINS_ARGOCD_PUSH_PULL: QuizQuestion[] = [
  {
    id: "jenkins-argocd-push-pull-1",
    post: "jenkins-argocd-push-pull",
    question:
      "운영은 ArgoCD(selfHeal 켜짐)가 관리하는데, 장애 중 Jenkins 잡으로 운영에 helm upgrade를 했다. 몇 분 뒤 어떻게 되나?",
    choices: [
      "ArgoCD가 Jenkins의 변경을 git에 자동으로 커밋해 둔다",
      "새 이미지가 그대로 유지되고 ArgoCD는 경고만 띄운다",
      "ArgoCD가 git에 적힌 예전 이미지로 다시 맞춘다",
      "Helm 릴리스와 ArgoCD가 충돌해 둘 다 멈춘다",
    ],
    answer: 2,
    explanation:
      "ArgoCD가 관리하는 리소스의 원본은 git이다. 클러스터를 다른 도구가 바꾸면 OutOfSync가 되고, selfHeal이 켜져 있으면 git 상태로 되돌린다. ArgoCD는 클러스터 변경을 git에 거꾸로 써 주지 않는다.",
    anchor: "개발은-빨라야-하고-운영은-설명할-수-있어야-한다",
  },
  {
    id: "jenkins-argocd-push-pull-2",
    post: "jenkins-argocd-push-pull",
    question:
      "두 서비스의 Jenkins 잡이 같은 배포 저장소 main에 거의 동시에 태그 커밋을 푸시했다. 나중 잡이 '(fetch first)'로 거절됐을 때 가장 알맞은 처리는?",
    choices: [
      "git pull --rebase 후 다시 푸시한다",
      "git push --force로 덮어쓴다",
      "잡을 실패로 두고 사람이 손으로 커밋한다",
      "배포 저장소를 서비스마다 브랜치로 나눠 각자 force push한다",
    ],
    answer: 0,
    explanation:
      "원격 main이 다른 잡의 커밋만큼 앞서 있어서 fast-forward가 아니라 거절된 것이다. 서로 다른 줄을 고쳤다면 rebase가 충돌 없이 끝나고 재시도로 들어간다. --force를 쓰면 다른 서비스의 커밋이 지워져 ArgoCD가 그 서비스를 예전 태그로 되돌린다.",
    anchor: "태그-한-줄을-고치는-단계가-깨지는-곳",
  },
  {
    id: "jenkins-argocd-push-pull-3",
    post: "jenkins-argocd-push-pull",
    question: "pull 방식 운영 배포에서 Jenkins의 승격 잡이 초록색으로 끝났다. 이것이 뜻하는 것은?",
    choices: [
      "운영 Pod가 모두 새 이미지로 Healthy가 됐다",
      "ArgoCD가 새 커밋을 동기화했다",
      "운영 클러스터의 롤링 업데이트가 시작됐다",
      "배포 저장소에 태그를 바꾸는 PR이나 커밋이 만들어졌다",
    ],
    answer: 3,
    explanation:
      "pull 방식에서 Jenkins가 하는 일은 태그 한 줄을 바꾸는 커밋이나 PR까지다. 머지, ArgoCD 동기화, Health는 그 뒤의 일이라 결과는 ArgoCD 상태와 알림으로 확인한다.",
    anchor: "운영으로-올리는-pr",
  },
  {
    id: "jenkins-argocd-push-pull-4",
    post: "jenkins-argocd-push-pull",
    question: "staging에서 검증한 이미지와 운영에 나간 이미지가 같다고 보장하려면 승격 파일에 무엇을 적는 게 가장 확실한가?",
    choices: ["latest 태그", "이미지 digest", "커밋 SHA 태그", "빌드 번호 태그"],
    answer: 1,
    explanation:
      "태그는 같은 이름에 다른 이미지를 다시 푸시할 수 있어서 내용을 보장하지 못한다. digest는 이미지 매니페스트의 해시라 내용이 바뀌면 값도 바뀐다. 사람이 읽기 쉽게 PR 제목에는 태그를 함께 적는다.",
    anchor: "태그-대신-digest로-승격하기",
  },
  {
    id: "jenkins-argocd-push-pull-5",
    post: "jenkins-argocd-push-pull",
    question: "승격 머지 커밋을 되돌리려고 `git revert 4b418c2`를 쳤더니 'is a merge but no -m option was given'이 났다. 왜인가?",
    choices: [
      "머지 커밋은 부모가 둘이라 어느 쪽 기준으로 되돌릴지 정해야 해서",
      "운영 브랜치가 보호돼 있어서",
      "ArgoCD가 자동 동기화 중이라 revert를 막아서",
      "revert는 태그가 붙은 커밋에만 쓸 수 있어서",
    ],
    answer: 0,
    explanation:
      "머지 커밋은 머지 전 main과 승격 브랜치라는 두 부모를 가진다. `-m 1`로 첫 번째 부모 기준을 정하면 승격으로 들어온 변경만 되돌린다. 브랜치 보호는 푸시 때 걸리고 revert 명령 자체를 막지 않는다.",
    anchor: "되돌리는-길이-환경마다-다르다",
  },
  {
    id: "jenkins-argocd-push-pull-6",
    post: "jenkins-argocd-push-pull",
    question: "Jenkins가 탈취돼도 운영을 PR 없이 바꾸지 못하게 하려면 무엇을 확인해야 하나?",
    choices: [
      "Jenkins의 dev kubeconfig를 cluster-admin으로 바꾼다",
      "Jenkins에 운영 kubeconfig를 비상용으로만 둔다",
      "Jenkins가 가진 배포 저장소 토큰으로 운영 경로를 직접 푸시할 수 없는지",
      "ArgoCD의 폴링 주기를 늘린다",
    ],
    answer: 2,
    explanation:
      "운영 클러스터 자격 증명이 없어도 배포 저장소에 운영 경로를 직접 푸시할 수 있으면 공격자는 PR 없이 운영을 바꾼다. 운영 저장소를 나누거나 보호 규칙을 걸어 Jenkins 토큰으로는 PR만 열 수 있게 한다. 비상용 kubeconfig는 평소에도 Jenkins 안에 있으니 오히려 위험하다.",
    anchor: "자격-증명이-닿는-범위를-그려-본다",
  },
  {
    id: "jenkins-argocd-push-pull-7",
    post: "jenkins-argocd-push-pull",
    question: "Argo CD Image Updater를 기본 write-back 방식으로 쓰면 어떤 문제가 있나?",
    choices: [
      "레지스트리에 새 태그를 푸시해 버린다",
      "ArgoCD API로 파라미터를 바꿔서 git에 변경 기록이 남지 않는다",
      "Jenkins 잡을 다시 실행시킨다",
      "semver 태그를 읽지 못한다",
    ],
    answer: 1,
    explanation:
      "기본 write-back은 ArgoCD API로 Application의 파라미터를 바꾸는 방식이라 git이 원본이라는 약속이 깨진다. git 방식으로 바꾸면 봇이 배포 저장소에 커밋한다. 그래도 리뷰 없이 이미지가 바뀌니 운영보다는 dev에 맞는다.",
    anchor: "레지스트리를-보고-태그를-고치는-봇",
  },
];
