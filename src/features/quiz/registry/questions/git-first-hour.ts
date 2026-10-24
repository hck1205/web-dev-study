import type { QuizQuestion } from "../types";

export const GIT_FIRST_HOUR: QuizQuestion[] = [
  {
    id: "git-first-hour-1",
    post: "git-first-hour",
    question: "GitHub가 몇 시간 장애가 났다. Git을 쓰는 팀원들이 그동안 할 수 있는 일은?",
    choices: [
      "아무것도 못 한다. 커밋은 서버에 기록되기 때문이다",
      "파일 수정만 할 수 있고 커밋은 장애가 끝난 뒤에 해야 한다",
      "커밋, 기록 보기, 비교, 브랜치를 모두 로컬에서 계속할 수 있다",
      "읽기 전용으로 기록만 볼 수 있다",
    ],
    answer: 2,
    explanation:
      "Git은 분산 버전 관리라 clone할 때 전체 기록이 각자의 컴퓨터에 복사되고, 커밋도 로컬 .git에 저장된다. 서버는 push와 pull로 주고받을 때만 필요하다. 커밋에 서버가 필요한 건 SVN 같은 중앙 집중형이다.",
    anchor: "git과-github는-다른-것이다",
  },
  {
    id: "git-first-hour-2",
    post: "git-first-hour",
    question: "새로 설치한 컴퓨터에서 첫 git commit이 Author identity unknown으로 실패했다. 무엇을 해야 하나?",
    choices: [
      "git config로 user.name과 user.email을 설정한다",
      "gh auth login으로 GitHub에 로그인한다",
      "ssh-keygen으로 SSH 키를 만든다",
      "git init을 다시 실행한다",
    ],
    answer: 0,
    explanation:
      "커밋에는 작성자의 이름과 이메일이 들어가는데 Git이 그걸 모른다는 뜻이다. 커밋은 로컬 작업이라 GitHub 로그인이나 SSH 키와는 상관이 없다. 이메일은 GitHub 계정 주소와 맞춰야 커밋이 계정에 연결된다.",
    anchor: "설치하고-나를-소개하기",
  },
  {
    id: "git-first-hour-3",
    post: "git-first-hour",
    question: "새 파일 notes.md를 만들고 git commit -am \"메모\"를 실행했다. notes.md는 어떻게 되나?",
    choices: [
      "-a 옵션 덕분에 함께 커밋된다",
      "커밋되지 않는다. -a는 이미 관리 중인 파일의 변경만 넣는다",
      "자동으로 .gitignore에 추가된다",
      "커밋이 실패하고 아무것도 기록되지 않는다",
    ],
    answer: 1,
    explanation:
      "-a는 이미 한 번 add해서 Git이 관리하는 파일의 변경만 스테이징한다. 새로 만든 파일은 Untracked 상태라 git add로 먼저 골라 줘야 한다. 다른 변경이 있으면 그것만 커밋된다.",
    anchor: "사진을-찍기-전에-고르는-단계",
  },
  {
    id: "git-first-hour-4",
    post: "git-first-hour",
    question: "HTTPS 주소로 push하며 GitHub 계정 비밀번호를 넣었더니 인증이 실패했다. 이유는?",
    choices: [
      "HTTPS 주소로는 push할 수 없고 clone만 된다",
      "비밀번호에 특수문자가 있으면 Git이 잘라 낸다",
      "user.email이 GitHub 계정과 달라서",
      "GitHub는 2021년 8월부터 Git 작업에 계정 비밀번호를 받지 않아서",
    ],
    answer: 3,
    explanation:
      "GitHub는 Git 작업의 비밀번호 인증을 없앴다. gh auth login이나 개인 액세스 토큰으로 HTTPS를 쓰거나, SSH 키를 등록하고 SSH 주소를 쓴다. user.email은 커밋 작성자 정보일 뿐 인증과는 관계가 없다.",
    anchor: "github에-저장소-만들고-인증하기",
  },
  {
    id: "git-first-hour-5",
    post: "git-first-hour",
    question: "첫 git push에서 The current branch main has no upstream branch가 나왔다. 무슨 뜻인가?",
    choices: [
      "내 main을 원격의 어느 브랜치와 짝지을지 아직 정하지 않았다",
      "원격 저장소에 main 브랜치를 만들 권한이 없다",
      "로컬에 커밋이 하나도 없다",
      "origin이라는 원격이 등록되지 않았다",
    ],
    answer: 0,
    explanation:
      "처음 push할 때는 로컬 브랜치와 원격 브랜치의 짝(upstream)을 한 번 정해야 한다. git push -u origin main으로 올리면서 짝을 지으면 이후에는 git push만 써도 된다. 권한 문제였다면 인증 오류가 났을 것이다.",
    anchor: "처음으로-push하기",
  },
  {
    id: "git-first-hour-6",
    post: "git-first-hour",
    question: "동료가 먼저 push한 뒤 내 push가 rejected (fetch first)로 거절됐다. 가장 알맞은 대응은?",
    choices: [
      "git push --force로 내 커밋을 올린다",
      "저장소를 지우고 다시 clone한 뒤 변경을 손으로 옮긴다",
      "git pull --rebase로 동료 커밋을 받아 내 커밋을 그 뒤에 붙인 뒤 push한다",
      "git commit --amend로 커밋을 고친 뒤 다시 push한다",
    ],
    answer: 2,
    explanation:
      "원격에 내가 모르는 커밋이 있어서 덮어쓰지 않게 막은 것이다. 먼저 받아서 합친 뒤 올리면 된다. --force는 동료의 커밋을 원격에서 지우고, amend는 원격 커밋이 없는 문제를 풀지 못한다.",
    anchor: "동료가-먼저-올렸을-때",
  },
];
