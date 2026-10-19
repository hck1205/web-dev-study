import type { QuizQuestion } from "../types";

export const GIT_UNDO: QuizQuestion[] = [
  {
    id: "git-undo-1",
    post: "git-undo",
    question: "git reset --soft HEAD~1을 하면 마지막 커밋의 변경은 어디에 남나?",
    choices: [
      "어디에도 남지 않고 사라진다",
      "작업 트리에만 남고 인덱스에서는 빠진다",
      "stash 목록에 자동으로 저장된다",
      "인덱스에 staged 상태로 남는다",
    ],
    answer: 3,
    explanation:
      "--soft는 브랜치 이름표만 옮기고 인덱스와 작업 트리는 건드리지 않아서, 취소한 커밋의 변경이 staged로 남는다. 기본값인 --mixed는 인덱스까지 되돌려 변경이 작업 트리에만 남고, --hard는 작업 트리까지 바꿔 변경이 사라진다.",
    anchor: "reset은-무엇을-어디까지-옮기나",
  },
  {
    id: "git-undo-2",
    post: "git-undo",
    question: "이미 푸시해서 팀원이 받아 간 잘못된 커밋을 되돌릴 때 revert를 쓰는 이유는?",
    choices: [
      "히스토리를 고쳐 쓰지 않고 반대 커밋을 앞에 쌓아서 그냥 푸시할 수 있으니까",
      "revert가 reset보다 실행 속도가 빨라서",
      "revert는 커밋 객체를 저장소에서 완전히 지워 주니까",
      "revert를 쓰면 충돌이 절대 나지 않아서",
    ],
    answer: 0,
    explanation:
      "reset으로 공유된 커밋을 지우면 원격과 갈라져 강제 푸시가 필요하고, 그 커밋을 받은 사람들의 히스토리와 어긋난다. revert는 변경을 거꾸로 적용한 새 커밋을 만들어 브랜치가 앞으로만 움직이니 평소처럼 푸시하면 된다. 원래 커밋은 히스토리에 그대로 남는다.",
    anchor: "푸시한-커밋은-반대-커밋으로-되돌린다",
  },
  {
    id: "git-undo-3",
    post: "git-undo",
    question: "병합을 git revert -m 1로 되돌린 뒤, 브랜치를 고쳐서 다시 병합했더니 처음 들어왔던 변경이 돌아오지 않았다. 어떻게 해야 할까?",
    choices: [
      "같은 병합을 --no-ff로 한 번 더 한다",
      "-m 2로 다시 revert한다",
      "다시 병합하기 전에 그 revert 커밋을 revert한다",
      "브랜치를 지우고 같은 이름으로 다시 만든다",
    ],
    answer: 2,
    explanation:
      "revert는 히스토리가 아니라 내용만 되돌려서, 처음 병합된 커밋들은 여전히 main의 조상이다. 다시 병합하면 그 이후에 생긴 커밋만 들어오고 revert로 빠진 변경은 그대로 빠져 있다. 재병합 전에 revert 커밋을 되돌려(2.43부터는 Reapply 메시지) 변경을 되살린다.",
    anchor: "병합을-revert하면-다시-합칠-때-함정이-있다",
  },
  {
    id: "git-undo-4",
    post: "git-undo",
    question: "Stripe 라이브 키가 든 .env를 커밋해서 푸시했다. 가장 먼저 할 일은?",
    choices: [
      "git revert로 그 커밋을 되돌린다",
      "git rm --cached .env 후 .gitignore에 추가한다",
      "서비스 대시보드에서 그 키를 폐기하고 새로 발급한다",
      "git filter-repo로 히스토리에서 .env를 지운다",
    ],
    answer: 2,
    explanation:
      "푸시된 키는 이미 클론, 포크, CI 로그, 수집 봇에 복사됐을 수 있어서 히스토리를 지워도 회수할 수 없다. 그래서 키 교체가 먼저다. revert나 rm은 옛 커밋에 키를 남기니, 교체한 뒤 filter-repo 같은 도구로 히스토리를 다시 쓰고 팀원 클론까지 정리한다.",
    anchor: "비밀-값을-커밋했을-때",
  },
  {
    id: "git-undo-5",
    post: "git-undo",
    question: "server.js를 실수로 git add했다. 파일의 변경은 그대로 두고 커밋 대상에서만 빼려면?",
    choices: [
      "git restore server.js",
      "git restore --staged server.js",
      "git reset --hard",
      "git clean -f server.js",
    ],
    answer: 1,
    explanation:
      "restore --staged는 인덱스만 HEAD 내용으로 되돌려 add를 취소하고 파일의 변경은 작업 트리에 남긴다. 옵션 없는 git restore는 작업 트리의 변경을 버리는 명령이라 되살릴 수 없다.",
    anchor: "add한-것을-내린다",
  },
  {
    id: "git-undo-6",
    post: "git-undo",
    question: "빌드 찌꺼기를 지우려고 git clean을 쓰려 한다. 먼저 해야 할 일은?",
    choices: [
      "git clean -x로 무시된 파일까지 한 번에 지운다",
      "git stash로 untracked 파일을 치운다",
      "git clean -n(-nd)으로 무엇이 지워질지 미리 본다",
      "git restore .로 작업 트리를 되돌린다",
    ],
    answer: 2,
    explanation:
      "git clean이 지운 파일은 휴지통에 가지 않고 Git도 저장해 두지 않아 되살릴 수 없다. 그래서 -n으로 미리 보고 확인한 뒤 -fd로 지운다. -x는 .env와 node_modules까지 쓸어 가니 거의 쓸 일이 없다.",
    anchor: "파일에서-고친-것을-버린다",
  },
];
