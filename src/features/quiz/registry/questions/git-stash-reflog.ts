import type { QuizQuestion } from "../types";

export const GIT_STASH_REFLOG: QuizQuestion[] = [
  {
    id: "git-stash-reflog-1",
    post: "git-stash-reflog",
    question: "git reset --hard HEAD~2로 커밋 두 개가 사라졌다. 되찾으려면 무엇부터 보나?",
    choices: [
      "git log --all",
      "git reflog",
      "git stash list",
      "git status",
    ],
    answer: 1,
    explanation:
      "reset은 이름표만 옮기고 커밋 객체는 남겨 둔다. 어느 브랜치에서도 닿지 않으니 git log에는 안 보이지만, reflog에는 reset 직전 위치(HEAD@{1})의 해시가 남아 있어 git branch rescue 해시로 살릴 수 있다. reflog는 로컬에만 있고 기본 설정에서 수십 일 뒤 만료된다.",
    anchor: "reset---hard-뒤에-사라진-커밋-찾기",
  },
  {
    id: "git-stash-reflog-2",
    post: "git-stash-reflog",
    question: "새 파일을 git add만 하고 커밋하기 전에 git reset --hard를 쳤다. 그 파일 내용을 찾을 수 있는 방법은?",
    choices: [
      "git reflog에서 그 파일의 줄을 찾는다",
      "git restore --staged로 되돌린다",
      "방법이 없다",
      "git fsck --lost-found로 dangling blob을 찾는다",
    ],
    answer: 3,
    explanation:
      "add하는 순간 내용이 blob으로 저장되지만, 커밋을 하지 않았으니 reflog에는 아무 기록이 없다. git fsck --lost-found는 어디에서도 가리키지 않는 객체를 찾아 주고, 거기 나온 dangling blob을 git show로 열면 내용이 나온다. 파일 이름은 tree에 있었던 정보라 함께 복구되지 않는다.",
    anchor: "reset---hard-뒤에-사라진-커밋-찾기",
  },
  {
    id: "git-stash-reflog-3",
    post: "git-stash-reflog",
    question: "git stash pop을 했는데 충돌이 났다. 그 stash 항목은 어떻게 되나?",
    choices: [
      "목록에 그대로 남아 있다",
      "pop이니까 목록에서 지워진다",
      "자동으로 새 브랜치로 옮겨진다",
      "충돌 난 파일만 빼고 나머지만 목록에 남는다",
    ],
    answer: 0,
    explanation:
      "pop은 적용이 성공했을 때만 항목을 지우고, 충돌이 나면 The stash entry is kept 메시지와 함께 남겨 둔다. 충돌을 풀고 나서 직접 git stash drop으로 지운다. 충돌을 피하려면 stash를 만든 커밋에서 새 브랜치로 적용하는 git stash branch를 쓴다.",
    anchor: "잠깐-치워-두기",
  },
  {
    id: "git-stash-reflog-4",
    post: "git-stash-reflog",
    question: "로그인 커밋 두 개를 main에 해 버렸다(푸시 전). feature/login으로 옮길 때 맞는 순서는?",
    choices: [
      "git branch feature/login을 먼저 하고, 그다음 main을 git reset --hard origin/main으로 되돌린다",
      "main을 먼저 reset --hard로 되돌리고 feature/login을 만든다",
      "git revert로 두 커밋을 되돌린 뒤 feature/login을 만든다",
      "git stash로 커밋을 치운 뒤 feature/login에서 pop한다",
    ],
    answer: 0,
    explanation:
      "이름표를 먼저 붙여야 두 커밋이 feature/login으로 닿는 상태로 남는다. 거꾸로 하면 커밋이 이름표 없이 떠서 reflog로 찾아야 한다. 푸시 전이니 revert처럼 반대 커밋을 쌓을 필요도 없다.",
    anchor: "엉뚱한-브랜치에-커밋했을-때",
  },
  {
    id: "git-stash-reflog-5",
    post: "git-stash-reflog",
    question: "legacy.js를 지운 커밋이 f7bd962다. 그 파일을 되살리는 명령으로 맞는 것은?",
    choices: [
      "git restore --source=f7bd962 -- legacy.js",
      "git restore --source=f7bd962~1 -- legacy.js",
      "git revert f7bd962 -- legacy.js",
      "git show f7bd962:legacy.js > legacy.js",
    ],
    answer: 1,
    explanation:
      "f7bd962는 파일을 지운 커밋이라 그 커밋의 스냅샷에는 legacy.js가 없다. 지우기 직전인 부모(f7bd962~1)에서 꺼내야 한다. --staged를 함께 주면 인덱스에도 올라간다.",
    anchor: "지운-파일을-히스토리에서-꺼내기",
  },
  {
    id: "git-stash-reflog-6",
    post: "git-stash-reflog",
    question: "server.js를 고치고 새 파일 notes.md를 만든 상태에서 옵션 없이 git stash push를 했다. notes.md는 어떻게 되나?",
    choices: [
      "server.js와 함께 stash에 들어간다",
      "삭제된다",
      "인덱스에 자동으로 올라간다",
      "untracked라 작업 트리에 그대로 남는다",
    ],
    answer: 3,
    explanation:
      "기본 stash는 추적 중인 파일의 변경만 치운다. 새 파일까지 치우려면 -u(--include-untracked)를 붙인다. 그대로 브랜치를 옮기면 notes.md가 따라와서 치웠는데 왜 남아 있나 하게 된다.",
    anchor: "잠깐-치워-두기",
  },
];
