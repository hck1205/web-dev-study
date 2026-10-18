import type { QuizQuestion } from "../types";

export const GIT_MERGE_CONFLICT: QuizQuestion[] = [
  {
    id: "git-merge-conflict-1",
    post: "git-merge-conflict",
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
    id: "git-merge-conflict-2",
    post: "git-merge-conflict",
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
    id: "git-merge-conflict-3",
    post: "git-merge-conflict",
    question: "충돌 블록에서 <<<<<<< HEAD와 ======= 사이에 있는 내용은?",
    choices: [
      "합쳐 들어오는 브랜치(feature/tax)의 내용",
      "공통 조상의 내용",
      "지금 서 있는 브랜치(main)의 내용",
      "Git이 자동으로 합친 결과",
    ],
    answer: 2,
    explanation:
      "HEAD 쪽, 즉 병합을 시작할 때 서 있던 브랜치(ours)의 내용이 위에 온다. ======= 아래부터 >>>>>>> feature/tax까지가 합쳐 오는 쪽(theirs)이고, 공통 조상은 diff3나 zdiff3 형식에서 ||||||| 아래에 나온다.",
    anchor: "같은-줄을-둘이-고쳤을-때",
  },
  {
    id: "git-merge-conflict-4",
    post: "git-merge-conflict",
    question: "rerere를 켜 둔 저장소에서 같은 충돌이 다시 나자 Resolved 'cart.js' using previous resolution이 나왔다. 그다음 할 일은?",
    choices: [
      "아무것도 안 해도 병합 커밋이 이미 만들어졌다",
      "결과를 확인하고 git add cart.js로 해결을 표시한다",
      "git rerere forget으로 기록을 지워야 커밋할 수 있다",
      "git merge --continue 전에 rerere를 끈다",
    ],
    answer: 1,
    explanation:
      "rerere는 지난번에 푼 내용을 파일에 채워 줄 뿐 add는 하지 않아서 status는 UU 그대로다. 내용을 확인하고 직접 add한 뒤 커밋한다. 기억한 해결이 틀렸을 때만 rerere forget으로 지운다.",
    anchor: "같은-충돌을-두-번-풀지-않게",
  },
  {
    id: "git-merge-conflict-5",
    post: "git-merge-conflict",
    question: "브랜치를 2주 동안 main과 합치지 않고 작업하다 한 번에 합쳤더니 충돌이 쏟아졌다. 다음부터 충돌을 줄이는 방법으로 가장 알맞은 것은?",
    choices: [
      "병합할 때 항상 --ff-only를 쓴다",
      "충돌이 난 파일은 git checkout --theirs로 통째로 가져온다",
      "merge.conflictStyle을 zdiff3로 바꾼다",
      "브랜치를 짧게 쪼개고, 오래 가면 main을 자주 받아 와 충돌을 조금씩 푼다",
    ],
    answer: 3,
    explanation:
      "충돌은 갈라져 있는 기간과 같은 파일을 고친 사람 수에 비례해 커진다. 브랜치를 며칠 안에 합칠 크기로 쪼개고 main을 자주 받아 오면 충돌이 나도 하루치만 풀면 된다. zdiff3는 충돌을 읽기 쉽게 할 뿐 수를 줄이지는 않는다.",
    anchor: "충돌을-덜-만드는-습관",
  },
];
