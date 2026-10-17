import type { QuizQuestion } from "../types";

export const GIT_REBASE: QuizQuestion[] = [
  {
    id: "git-rebase-1",
    post: "git-rebase",
    question: "git rebase main을 하고 나면 내 커밋들의 해시가 모두 바뀐다. 가장 직접적인 이유는?",
    choices: [
      "rebase가 커밋 메시지를 자동으로 다시 쓰기 때문에",
      "rebase가 작성자(author) 정보를 지우기 때문에",
      "부모 커밋이 main 끝으로 바뀌어 다른 커밋 객체가 되기 때문에",
      "rebase는 SHA-256으로 해시를 다시 계산하기 때문에",
    ],
    answer: 2,
    explanation:
      "rebase는 커밋을 들어 옮기는 게 아니라 각 커밋의 변경을 새 받침 위에 다시 적용해 새 커밋을 만든다. 커밋 해시에는 부모 해시가 들어가니 내용이 같아도 해시가 달라진다. 작성자와 작성 시각은 원래 값이 그대로 남는다.",
    anchor: "rebase는-커밋을-새로-만든다",
  },
  {
    id: "git-rebase-2",
    post: "git-rebase",
    question: "feature 브랜치를 main 위로 rebase하다 충돌이 났다. 이때 git checkout --ours 파일은 어느 쪽 내용을 고르나?",
    choices: [
      "지금 다시 적용하려는 내 feature 커밋",
      "main 쪽(새 받침) 내용",
      "공통 조상의 내용",
      "rebase를 시작하기 전 작업 트리의 내용",
    ],
    answer: 1,
    explanation:
      "rebase 중 HEAD는 새 받침 위에 하나씩 쌓아 가는 쪽이라 ours가 main, theirs가 다시 적용 중인 내 커밋이다. merge와 정반대라서 습관적으로 --ours를 고르면 내 변경을 버리게 된다. 공통 조상은 스테이지 1에 따로 있다.",
    anchor: "다시-적용하다-충돌이-나면",
  },
  {
    id: "git-rebase-3",
    post: "git-rebase",
    question: "interactive rebase에서 fixup이 squash와 다른 점은?",
    choices: [
      "합쳐지는 커밋의 메시지를 버리고 위 커밋의 메시지만 남긴다",
      "커밋을 위가 아니라 아래 커밋에 합친다",
      "변경 내용은 버리고 메시지만 합친다",
      "합친 뒤 자동으로 강제 푸시한다",
    ],
    answer: 0,
    explanation:
      "squash와 fixup은 모두 바로 위 커밋에 변경을 합친다. squash는 두 메시지를 합쳐 편집하게 하고, fixup은 합쳐지는 쪽 메시지를 버린다. git commit --fixup으로 만든 커밋은 --autosquash가 대상 바로 아래로 옮겨 fixup으로 바꿔 준다.",
    anchor: "커밋을-고르고-합치고-고쳐-쓰기",
  },
  {
    id: "git-rebase-4",
    post: "git-rebase",
    question: "git rebase --onto main feature/api feature/ui는 어떤 커밋을 옮기나?",
    choices: [
      "feature/api와 feature/ui의 모든 커밋",
      "main에서 feature/api까지의 커밋",
      "feature/api의 마지막 커밋 하나",
      "feature/api 다음부터 feature/ui 끝까지의 커밋",
    ],
    answer: 3,
    explanation:
      "--onto 뒤가 새 받침이고, 두 번째 인자(feature/api)에서 닿는 커밋은 목록에서 뺀다. 그래서 feature/api..feature/ui에 해당하는 커밋만 main 위로 다시 쌓인다. 아래 브랜치가 squash로 합쳐졌거나 버려졌을 때 위 브랜치만 옮기는 데 쓴다.",
    anchor: "브랜치-일부만-다른-곳으로",
  },
  {
    id: "git-rebase-5",
    post: "git-rebase",
    question: "내가 공유 브랜치를 rebase해서 강제 푸시했고, 그 위에 작업하던 팀원이 평소처럼 merge로 pull했다. 팀원 히스토리는 어떻게 되나?",
    choices: [
      "옛 커밋이 자동으로 지워지고 새 커밋만 남는다",
      "pull이 항상 거부되어 아무 일도 일어나지 않는다",
      "내용이 같은 커밋이 옛 해시와 새 해시로 두 벌씩 남는다",
      "팀원의 커밋이 사라진다",
    ],
    answer: 2,
    explanation:
      "팀원 저장소에는 옛 커밋과 그 위의 작업이, 원격에는 새로 만든 커밋이 있어서 merge하면 같은 내용의 커밋이 두 벌 생긴다. 다시 푸시하면 옛 커밋이 되살아난다. 팀원은 git pull --rebase로 받으면 fork-point로 옛 커밋을 빼고 자기 커밋만 옮길 수 있다.",
    anchor: "공유한-커밋은-다시-쓰지-않는다",
  },
  {
    id: "git-rebase-6",
    post: "git-rebase",
    question: "rebase를 마친 뒤 커밋 하나가 빠진 걸 알았다. 가장 빠른 복구 방법은?",
    choices: [
      "git rebase --abort",
      "git reset --hard ORIG_HEAD (또는 reflog의 rebase 직전 위치)",
      "git revert HEAD",
      "git pull --rebase",
    ],
    answer: 1,
    explanation:
      "rebase는 원래 커밋을 지우지 않고 브랜치만 옮기므로, 직전 위치를 담은 ORIG_HEAD나 reflog의 브랜치@{1}로 reset하면 rebase 전으로 돌아간다. --abort는 rebase가 진행 중일 때만 쓸 수 있다. revert는 변경을 거꾸로 하는 새 커밋을 만들 뿐 빠진 커밋을 되돌려 주지 않는다.",
    anchor: "rebase를-잘못했을-때",
  },
  {
    id: "git-rebase-7",
    post: "git-rebase",
    question: "feature/api 위에 feature/ui를 쌓아 두고 feature/ui에서 rebase할 때 --update-refs를 붙이면?",
    choices: [
      "중간에 걸린 feature/api 이름표도 새 커밋 위치로 함께 옮겨 준다",
      "원격 브랜치까지 자동으로 강제 푸시한다",
      "병합 커밋을 지우지 않고 그대로 다시 만든다",
      "feature/api의 커밋은 옮기지 않고 건너뛴다",
    ],
    answer: 0,
    explanation:
      "그냥 rebase하면 API 커밋도 새로 만들어지지만 feature/api 이름표는 옛 커밋에 남아 두 벌이 된다. 2.38부터 있는 --update-refs는 옮긴 커밋을 가리키던 다른 브랜치 이름표도 새 위치로 옮긴다. 병합 커밋을 다시 만드는 건 --rebase-merges가 하는 일이다.",
    anchor: "쌓아-올린-브랜치를-한꺼번에",
  },
];
