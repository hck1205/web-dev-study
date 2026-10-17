import type { QuizQuestion } from "../types";

export const GIT_TROUBLESHOOTING: QuizQuestion[] = [
  {
    id: "git-troubleshooting-1",
    post: "git-troubleshooting",
    question: "이미 푸시한 커밋을 amend한 뒤 push가 (non-fast-forward)로 거절됐다. hint대로 git pull을 하면 어떻게 되나?",
    choices: [
      "원격의 옛 커밋과 내 새 커밋이 머지되어 같은 변경이 두 번 보이는 히스토리가 된다",
      "amend가 취소되고 원래 커밋으로 돌아간다",
      "Git이 amend를 알아보고 자동으로 강제 푸시한다",
      "충돌 없이 깔끔하게 한 줄 히스토리가 된다",
    ],
    answer: 0,
    explanation:
      "amend는 해시가 다른 새 커밋을 만든다. 그 상태로 pull하면 옛 커밋과 새 커밋이 머지되어 히스토리가 지저분해진다. 혼자 쓰는 브랜치라면 --force-with-lease로 덮어쓰고, 공유 브랜치라면 히스토리를 고치지 않는다.",
    anchor: "이미-푸시한-커밋-메시지가-틀렸다",
  },
  {
    id: "git-troubleshooting-2",
    post: "git-troubleshooting",
    question: "detached HEAD 상태에서 만든 커밋을 그대로 두고 main으로 돌아왔다. 그 커밋을 되찾는 가장 확실한 방법은?",
    choices: [
      "git fetch로 원격에서 다시 받는다",
      "git reflog에서 그 커밋의 해시를 찾아 git branch로 이름표를 붙인다",
      "git stash pop으로 꺼낸다",
      "이미 지워졌으니 다시 작성해야 한다",
    ],
    answer: 1,
    explanation:
      "브랜치가 가리키지 않을 뿐 커밋은 저장소에 남아 있고, HEAD가 움직인 기록인 reflog에 해시가 있다. 그 해시에 브랜치를 붙이면 다시 보인다. 원격에는 푸시한 적이 없으니 fetch로는 찾을 수 없다.",
    anchor: "detached-head에서-만든-커밋이-사라졌다",
  },
  {
    id: "git-troubleshooting-3",
    post: "git-troubleshooting",
    question: ".env를 .gitignore에 추가했는데 고칠 때마다 git status에 M .env가 나온다. 원인과 해결로 옳은 것은?",
    choices: [
      ".gitignore 파일이 커밋되지 않아서다. .gitignore를 커밋하면 된다",
      "패턴 앞에 /를 붙이지 않아서다",
      "이미 추적 중인 파일이라서다. git rm --cached .env로 추적을 끊고 커밋한다",
      "core.autocrlf 설정 때문이다",
    ],
    answer: 2,
    explanation:
      ".gitignore는 아직 추적하지 않는 파일에만 적용된다. 한 번 커밋된 파일은 규칙과 상관없이 계속 추적되므로 --cached로 인덱스에서만 빼고 커밋한다. 이 커밋을 받은 다른 사람의 디스크에서는 파일이 지워진다는 것도 알려 둔다.",
    anchor: "gitignore에-적었는데-계속-추적된다",
  },
  {
    id: "git-troubleshooting-4",
    post: "git-troubleshooting",
    question: "공개 저장소에 비밀 키가 든 커밋을 푸시했다. 가장 먼저 할 일은?",
    choices: [
      "git filter-repo로 히스토리에서 지우고 강제 푸시한다",
      "저장소를 비공개로 바꾼다",
      ".gitignore에 .env를 추가한다",
      "키를 발급한 곳에서 폐기하고 새 키를 발급한다",
    ],
    answer: 3,
    explanation:
      "히스토리를 지워도 이미 clone한 사람, 포크, CI 캐시, PR 화면 등에 남아 있을 수 있어 키는 안전해지지 않는다. 그래서 키 폐기가 먼저이고 히스토리 정리는 그다음이다. .gitignore는 앞으로의 실수를 막을 뿐이다.",
    anchor: "비밀-값이-든-env를-커밋했다",
  },
  {
    id: "git-troubleshooting-5",
    post: "git-troubleshooting",
    question: "merge 중 pnpm-lock.yaml에서 충돌이 났다. 권장하는 처리는?",
    choices: [
      "package.json 충돌을 먼저 풀고, 락파일은 한쪽 것을 가져온 뒤 pnpm install로 다시 만든다",
      "충돌 표시를 지우며 양쪽 줄을 모두 남긴다",
      "락파일을 지우고 커밋해 CI가 만들게 한다",
      "git merge --abort 후 의존성 업데이트를 포기한다",
    ],
    answer: 0,
    explanation:
      "락파일은 도구가 계산한 결과라 수천 줄을 손으로 섞으면 존재하지 않는 조합이 생기기 쉽다. 원하는 버전은 package.json에서 정하고 락파일은 패키지 관리자가 다시 만들게 한다. 락파일을 지우면 모든 의존성이 새로 풀려 의도치 않은 업그레이드가 섞인다.",
    anchor: "pnpm-lockyaml에서-충돌이-났다",
  },
  {
    id: "git-troubleshooting-6",
    post: "git-troubleshooting",
    question: "fetch 중 cannot lock ref 'refs/remotes/origin/feature/login': 'refs/remotes/origin/feature' exists 오류가 났다. 가장 알맞은 해결은?",
    choices: [
      ".git/refs/heads 폴더를 통째로 지운다",
      "git fetch --prune으로 원격에서 사라진 origin/feature를 지운 뒤 받는다",
      "로컬 feature 브랜치를 강제 푸시한다",
      "git gc --aggressive로 압축한다",
    ],
    answer: 1,
    explanation:
      "ref 이름은 파일 경로로 저장되므로 origin/feature 파일이 있으면 origin/feature/ 폴더를 만들 수 없다. 원격에서는 feature가 지워졌는데 내 저장소에 낡은 원격 추적 브랜치가 남아 생긴 일이라 prune으로 정리하면 된다. 로컬 브랜치 폴더를 지우면 내 작업을 잃는다.",
    anchor: "cannot-lock-ref-오류가-난다",
  },
  {
    id: "git-troubleshooting-7",
    post: "git-troubleshooting",
    question: "git status가 fatal: index file corrupt를 낸다. 커밋과 작업 폴더 파일을 잃지 않고 고치는 방법은?",
    choices: [
      "git reset --hard HEAD",
      "저장소를 지우고 다시 clone한다",
      "깨진 .git/index를 치우고 git reset으로 HEAD 기준 인덱스를 다시 만든다",
      "git commit --amend로 인덱스를 덮어쓴다",
    ],
    answer: 2,
    explanation:
      "인덱스는 다음 커밋에 들어갈 내용의 목록일 뿐이라 지우고 다시 만들 수 있다. 기본 --mixed인 git reset은 인덱스만 HEAD에 맞추고 작업 폴더는 건드리지 않는다. --hard는 커밋하지 않은 변경까지 지우니 이 상황에 맞지 않는다.",
    anchor: "index-file-corrupt",
  },
];
