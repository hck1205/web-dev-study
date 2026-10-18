import type { QuizQuestion } from "../types";

export const GIT_REPO_ERRORS: QuizQuestion[] = [
  {
    id: "git-repo-errors-1",
    post: "git-repo-errors",
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
    id: "git-repo-errors-2",
    post: "git-repo-errors",
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
  {
    id: "git-repo-errors-3",
    post: "git-repo-errors",
    question: "git add가 index.lock: File exists로 실패한다. 가장 먼저 할 일은?",
    choices: [
      "rm -f .git/index.lock부터 실행한다",
      "git reset --hard로 저장소를 초기화한다",
      "pgrep -a git으로 돌고 있는 Git 프로세스가 있는지 확인한다",
      "저장소를 새로 clone한다",
    ],
    answer: 2,
    explanation:
      "index.lock은 인덱스를 바꾸는 동안 다른 프로세스가 끼어들지 못하게 잡는 잠금이다. IDE나 커밋 편집기가 아직 돌고 있는데 지우면 두 프로세스가 동시에 인덱스를 써서 망가질 수 있다. 돌고 있는 게 없을 때만 지운다.",
    anchor: "indexlock-파일이-있다며-아무것도-안-된다",
  },
  {
    id: "git-repo-errors-4",
    post: "git-repo-errors",
    question: "도커 컨테이너에 마운트한 소스에서 git status가 detected dubious ownership으로 거부된다. 바른 이해는?",
    choices: [
      "저장소가 깨졌다는 뜻이라 다시 clone해야 한다",
      "다른 사용자 소유의 저장소 설정이 내 권한으로 실행되는 걸 막는 장치다",
      "Git 버전이 너무 낮아서 생기는 오류다",
      "safe.directory '*'로 모두 푸는 것이 권장 방법이다",
    ],
    answer: 1,
    explanation:
      "Git 2.35.2부터 다른 사용자가 소유한 저장소에서는 명령을 거부한다. 남의 .git/config에 심은 훅 경로 같은 설정이 내 권한으로 실행되는 걸 막으려는 것이다. 믿을 수 있는 경로만 safe.directory에 추가하거나 소유자를 맞추고, '*'는 장치를 끄는 것과 같아 피한다.",
    anchor: "not-a-git-repository",
  },
  {
    id: "git-repo-errors-5",
    post: "git-repo-errors",
    question: "clone한 프로젝트의 vendor/lib가 비어 있고 git submodule status의 맨 앞이 -로 나온다. 알맞은 처리는?",
    choices: [
      "git submodule update --init --recursive를 실행한다",
      "vendor/lib 폴더를 지우고 다시 clone한다",
      "git pull --rebase를 한다",
      "vendor/lib에서 git switch main을 한다",
    ],
    answer: 0,
    explanation:
      "맨 앞의 -는 서브모듈을 아직 초기화하지 않았다는 표시다. 부모 저장소에는 경로와 커밋 기록만 있어서 일반 clone은 내용을 받지 않는다. update --init --recursive로 기록된 커밋을 꺼내고, 처음부터 clone --recurse-submodules를 써도 된다.",
    anchor: "서브모듈-폴더가-비어-있다",
  },
];
