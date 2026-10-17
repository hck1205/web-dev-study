import type { QuizQuestion } from "../types";

export const GIT_BRANCH_MERGE: QuizQuestion[] = [
  {
    id: "git-branch-merge-1",
    post: "git-branch-merge",
    question: "git branch feature/coupon을 실행하면 저장소에서 실제로 일어나는 일은?",
    choices: [
      "현재 브랜치의 모든 커밋이 새 브랜치로 복사된다",
      "커밋 해시 하나를 적은 refs/heads/feature/coupon 파일이 생긴다",
      "작업 트리의 파일이 새 폴더에 복사된다",
      "HEAD가 새 브랜치를 가리키도록 바뀐다",
    ],
    answer: 1,
    explanation:
      "브랜치는 커밋 해시 하나를 담은 이름표라서, 만들 때 파일이나 커밋을 복사하지 않고 refs 파일 하나만 쓴다. 그래서 저장소 크기와 상관없이 순식간에 만들어진다. git branch는 만들기만 하고, 옮겨 가려면 git switch를 따로 해야 한다.",
    anchor: "브랜치는-커밋에-붙은-이름표다",
  },
  {
    id: "git-branch-merge-2",
    post: "git-branch-merge",
    question: "git merge가 새 커밋 없이 fast-forward로 끝나는 경우는?",
    choices: [
      "두 브랜치가 서로 다른 파일만 고쳤을 때",
      "충돌이 하나도 없을 때",
      "--no-ff 옵션을 붙였을 때",
      "현재 브랜치가 합칠 브랜치의 조상이라 따로 커밋이 없을 때",
    ],
    answer: 3,
    explanation:
      "현재 브랜치에서 합칠 브랜치 끝까지 커밋이 곧게 이어져 있으면 이름표만 앞으로 밀면 되므로 병합 커밋이 필요 없다. 서로 다른 파일만 고쳤더라도 양쪽에 각자 커밋이 있으면 갈라진 것이라 3-way 병합이 된다. --no-ff는 오히려 fast-forward를 막는다.",
    anchor: "브랜치는-커밋에-붙은-이름표다",
  },
  {
    id: "git-branch-merge-3",
    post: "git-branch-merge",
    question: "3-way 병합에서 두 브랜치 끝 말고 공통 조상까지 비교하는 이유는?",
    choices: [
      "어느 쪽이 그 줄을 바꿨는지 알아야 한쪽만 바꾼 곳을 자동으로 고를 수 있어서",
      "공통 조상의 커밋 메시지를 병합 커밋에 넣기 위해서",
      "병합 커밋의 첫 번째 부모를 정하기 위해서",
      "충돌이 나면 공통 조상으로 자동 되돌리기 위해서",
    ],
    answer: 0,
    explanation:
      "두 끝만 보면 줄이 다를 때 누가 추가했고 누가 지웠는지 알 수 없다. 공통 조상과 각각 비교하면 한쪽만 바꾼 줄은 그 변경을 고르고, 양쪽이 같은 곳을 다르게 바꾼 경우만 충돌로 남긴다. 첫 번째 부모는 병합을 실행한 브랜치로 정해진다.",
    anchor: "곧게-이어지지-않으면-세-스냅샷을-비교한다",
  },
  {
    id: "git-branch-merge-4",
    post: "git-branch-merge",
    question: "merge.conflictStyle을 zdiff3으로 바꾸면 충돌 블록에서 무엇이 달라지나?",
    choices: [
      "충돌이 나도 우리 쪽 내용이 자동으로 선택된다",
      "마커 대신 별도의 .orig 파일이 생긴다",
      "||||||| 아래에 공통 조상의 원래 내용이 함께 나온다",
      "충돌 난 파일을 인덱스에 자동으로 add한다",
    ],
    answer: 2,
    explanation:
      "diff3와 zdiff3는 ours와 theirs 사이에 공통 조상의 내용을 한 칸 더 보여 줘서 각자 무엇을 바꿨는지 읽을 수 있게 한다. zdiff3는 양쪽이 똑같이 바꾼 줄을 블록 밖으로 빼서 더 짧게 보여 주고, 2.35부터 쓸 수 있다. 어느 쪽도 해결을 대신해 주지는 않는다.",
    anchor: "같은-줄을-둘이-고쳤을-때",
  },
  {
    id: "git-branch-merge-5",
    post: "git-branch-merge",
    question: "충돌을 고친 파일에 git add를 하면 인덱스에서는 무슨 일이 일어나나?",
    choices: [
      "스테이지 2(ours)만 남고 나머지가 지워진다",
      "스테이지 1·2·3이 사라지고 해결한 내용이 스테이지 0으로 들어간다",
      "병합 커밋이 바로 만들어진다",
      "MERGE_HEAD가 지워져 병합이 취소된다",
    ],
    answer: 1,
    explanation:
      "충돌 중에는 인덱스에 공통 조상, ours, theirs가 스테이지 1·2·3으로 들어 있고, add하면 이것들이 해결본 하나(스테이지 0)로 바뀐다. Git은 이걸 보고 해결됐다고 판단할 뿐 마커가 남았는지는 검사하지 않는다. 병합 커밋은 그 뒤에 git commit으로 만든다.",
    anchor: "충돌-중에-git이-들고-있는-것",
  },
  {
    id: "git-branch-merge-6",
    post: "git-branch-merge",
    question: "PR을 squash merge로 합친 뒤 로컬에서 git branch -d로 그 브랜치를 지우려 하니 거부된다. 왜 그럴까?",
    choices: [
      "원격 브랜치가 아직 남아 있어서",
      "-d는 원격 브랜치에만 쓰는 옵션이라서",
      "squash merge가 실패해서 내용이 반영되지 않았기 때문에",
      "squash로 만든 커밋이 원래 브랜치 커밋과 부모로 이어지지 않아서",
    ],
    answer: 3,
    explanation:
      "squash merge는 변경을 모은 새 커밋 하나를 만들 뿐, 원래 브랜치의 커밋과 히스토리로 연결되지 않는다. Git은 그 커밋들이 현재 브랜치에서 닿는지로 병합 여부를 판단하니 내용이 다 들어갔어도 not fully merged라고 본다. 확인했다면 -D로 지운다.",
    anchor: "다-쓴-브랜치는-지운다",
  },
  {
    id: "git-branch-merge-7",
    post: "git-branch-merge",
    question: "detached HEAD 상태에서 커밋한 뒤 git switch main을 했다. 그 커밋은 어떻게 되나?",
    choices: [
      "커밋 객체는 남아 있고, 해시로 브랜치를 만들면 되살릴 수 있다",
      "switch하는 순간 커밋이 즉시 삭제된다",
      "main에 자동으로 병합된다",
      "다음 git push 때 원격에 함께 올라간다",
    ],
    answer: 0,
    explanation:
      "이름표가 없을 뿐 커밋은 저장소에 그대로 있고, Git이 떠날 때 경고와 함께 해시를 알려 준다. git branch 이름 해시로 이름표를 붙이면 살아나고, 해시를 놓쳤다면 reflog에서 찾는다. 오래 방치하면 reflog가 만료된 뒤 gc가 지운다.",
    anchor: "head가-브랜치를-떠나면",
  },
];
