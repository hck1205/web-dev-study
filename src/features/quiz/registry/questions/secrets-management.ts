import type { QuizQuestion } from "../types";

export const SECRETS_MANAGEMENT: QuizQuestion[] = [
  {
    id: "secrets-management-1",
    post: "secrets-management",
    question:
      "`.env`를 커밋했다가 다음 커밋에서 지웠다. `gitleaks dir .`은 깨끗하다고 하는데 `gitleaks git .`은 값을 찾았다. 왜 이렇게 갈리나?",
    choices: [
      "dir 모드는 .gitignore에 적힌 파일을 일부러 건너뛰기 때문이다",
      "dir 모드는 지금 파일만 보고, git 모드는 모든 커밋의 변경 내용을 보기 때문이다",
      "git 모드는 원격 저장소까지 내려받아 검사하기 때문이다",
      "dir 모드는 엔트로피 검사를 하지 않기 때문이다",
    ],
    answer: 1,
    explanation:
      "지운 파일은 작업 트리에는 없지만 그 파일을 올린 커밋의 트리에는 그대로 남는다. 작업 트리만 보는 검사는 이걸 놓치고, 히스토리 전체를 훑어야 커밋 해시까지 짚어 낸다.",
    anchor: "지운-커밋에도-남아-있다",
  },
  {
    id: "secrets-management-2",
    post: "secrets-management",
    question:
      "앱에 DB 비밀번호를 환경 변수로 넣었다. 다른 사용자 계정(nobody)으로 할 수 있는 일은?",
    choices: [
      "/proc/<pid>/environ을 읽어 비밀번호를 본다",
      "ps eww로 환경 변수를 본다",
      "환경 변수는 볼 수 없지만, 명령줄 인자로 넘겼다면 ps로 볼 수 있다",
      "아무것도 볼 수 없다. /proc는 root만 읽는다",
    ],
    answer: 2,
    explanation:
      "/proc/<pid>/environ은 권한이 0400이라 주인과 root만 읽고, 다른 사용자에게는 Permission denied가 난다. 반면 명령줄 인자인 cmdline은 기본적으로 모든 사용자가 읽을 수 있어 --db-password 같은 인자는 ps에 그대로 보인다.",
    anchor: "환경-변수는-생각보다-많이-보인다",
  },
  {
    id: "secrets-management-3",
    post: "secrets-management",
    question:
      "CI가 등록된 비밀 값을 로그에서 `***`로 가려 준다. 그런데도 로그에 토큰이 남는 경우는?",
    choices: [
      "스크립트가 토큰을 base64로 바꿔 출력했을 때",
      "토큰을 환경 변수로 받았을 때",
      "토큰 길이가 너무 길 때",
      "잡이 실패로 끝났을 때",
    ],
    answer: 0,
    explanation:
      "마스킹은 등록된 값과 똑같은 문자열만 바꾼다. base64나 JSON 이스케이프처럼 모양이 바뀐 값은 다른 문자열이라 그대로 찍히니, 실행 중에 만든 값은 ::add-mask::로 직접 등록하고 set -x 같은 출력을 끈다.",
    anchor: "ci-로그와-이미지",
  },
  {
    id: "secrets-management-4",
    post: "secrets-management",
    question:
      "Vault에서 TTL 20초, max_ttl 40초인 lease를 받고 10초 뒤 `-increment=1h`로 갱신했다. 결과는?",
    choices: [
      "남은 10초에 1시간이 더해진다",
      "max_ttl 때문에 갱신이 거부되고 lease가 즉시 회수된다",
      "남은 상한인 30초로 잘리고, 그 뒤에는 자동으로 회수된다",
      "1시간으로 늘어나고 max_ttl도 함께 늘어난다",
    ],
    answer: 2,
    explanation:
      "increment는 지금부터의 새 TTL을 요청하는 값이고, 발급 시점부터의 max_ttl을 넘을 수 없다. 실습에서 경고와 함께 30s로 잘렸고 그 뒤 DB 역할이 사라졌다. 그래서 오래 도는 앱은 max_ttl 전에 새 자격 증명을 빌려야 한다.",
    anchor: "빌려준-비밀에는-기한이-있다",
  },
  {
    id: "secrets-management-5",
    post: "secrets-management",
    question:
      "Vault의 PostgreSQL 역할 생성 SQL에 `VALID UNTIL '{{expiration}}'`을 함께 넣는 이유로 가장 알맞은 것은?",
    choices: [
      "Vault가 비밀번호를 무작위로 만들려면 꼭 필요하다",
      "Vault가 회수하지 못하는 상황에서도 DB가 스스로 계정을 만료시키게 하려고",
      "SELECT 권한을 주려면 만료 시각이 있어야 한다",
      "lease를 갱신할 때 DB 쪽 시간이 자동으로 늘어나게 하려고",
    ],
    answer: 1,
    explanation:
      "Vault는 lease가 끝나면 역할을 지우지만, Vault가 죽어 있으면 회수가 늦어진다. DB에 만료 시각을 함께 걸어 두면 그때도 계정이 스스로 막히는 이중 안전장치가 된다.",
    anchor: "쓸-때마다-새로-만드는-비밀번호",
  },
  {
    id: "secrets-management-6",
    post: "secrets-management",
    question:
      "쿠버네티스 Pod가 Vault에 로그인할 때 저장해 둔 비밀 없이 신원을 증명하는 방법은?",
    choices: [
      "Vault root 토큰을 Secret으로 만들어 마운트한다",
      "Pod IP를 Vault 허용 목록에 넣는다",
      "ServiceAccount 토큰을 보내고 Vault가 TokenReview로 클러스터에 확인한다",
      "이미지에 Vault 토큰을 빌드 시크릿으로 넣는다",
    ],
    answer: 2,
    explanation:
      "kubelet이 넣어 주는 ServiceAccount 토큰은 수명이 짧고 자동으로 교체된다. Vault는 이 토큰을 TokenReview API로 확인해 정책이 붙은 토큰을 내주니, 사람이 관리할 첫 비밀(secret zero)이 남지 않는다.",
    anchor: "저장소에-들어가려면-무엇을-내미나",
  },
  {
    id: "secrets-management-7",
    post: "secrets-management",
    question: "결제 API 키가 유출됐다는 연락을 받았다. 가장 먼저 할 일은?",
    choices: [
      "git filter-repo로 히스토리에서 값을 지우고 강제 푸시한다",
      "옛 키를 즉시 폐기해 모든 요청을 막는다",
      "새 키를 발급해 앱에 배포하고, 새 키로 도는 걸 확인한 뒤 옛 키를 폐기한다",
      "gitleaks로 저장소를 검사해 유출 경로부터 찾는다",
    ],
    answer: 2,
    explanation:
      "옛 키부터 끊으면 결제가 멈추고, 히스토리 정리나 원인 조사를 먼저 하면 그동안 키가 살아 있다. 새 키로 교체한 뒤 옛 키를 폐기하고, 그다음에 피해 범위와 유출 경로를 찾고 히스토리를 정리한다.",
    anchor: "키가-샜다는-연락을-받았을-때",
  },
];
