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
    id: "git-troubleshooting-4",
    post: "git-troubleshooting",
    question: "GitHub에서 README를 넣어 만든 저장소에 로컬에서 따로 git init한 프로젝트를 pull하자 refusing to merge unrelated histories가 났다. 원인은?",
    choices: [
      "원격 브랜치 이름이 master라서",
      "두 히스토리에 공통 조상 커밋이 없어서",
      "로컬에 커밋하지 않은 변경이 있어서",
      "pull.rebase 설정이 없어서",
    ],
    answer: 1,
    explanation:
      "원격의 Initial commit과 로컬의 첫 커밋은 각자 따로 시작한 뿌리라 공통 조상이 없다. Git 2.9부터 이런 머지는 기본으로 막고, 정말 합칠 때만 --allow-unrelated-histories로 허락한다.",
    anchor: "refusing-to-merge-unrelated-histories",
  },
  {
    id: "git-troubleshooting-5",
    post: "git-troubleshooting",
    question: "git stash pop 도중 충돌이 났다. 이때 그 stash는 어떻게 되나?",
    choices: [
      "충돌과 상관없이 바로 지워진다",
      "충돌 난 파일만 빼고 지워진다",
      "stash가 자동으로 새 브랜치가 된다",
      "지워지지 않고 남아 있어서 다시 꺼낼 수 있다",
    ],
    answer: 3,
    explanation:
      "pop은 충돌이 나면 stash를 지우지 않고 The stash entry is kept라고 알려 준다. 잘못 풀었으면 파일을 되돌리고 다시 pop하면 되고, 다 풀었으면 git stash drop으로 직접 지운다.",
    anchor: "stash-pop에서-충돌이-났다",
  },
];
