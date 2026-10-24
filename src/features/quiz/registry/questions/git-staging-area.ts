import type { QuizQuestion } from "../types";

export const GIT_STAGING_AREA: QuizQuestion[] = [
  {
    id: "git-staging-area-1",
    post: "git-staging-area",
    question: "app.js를 git add한 뒤 한 줄을 더 고치고 바로 git commit하면 커밋에는 무엇이 들어가나?",
    choices: [
      "마지막으로 저장한 파일 내용 전체",
      "아무것도 들어가지 않고 커밋이 실패한다",
      "git add를 했던 시점의 내용만",
      "add한 내용과 나중 수정이 충돌 표시와 함께",
    ],
    answer: 2,
    explanation:
      "git add는 그 순간의 내용을 blob으로 저장하고 인덱스가 그걸 가리키게 할 뿐이고, 커밋은 작업 트리가 아니라 인덱스를 찍는다. 나중에 고친 한 줄은 작업 트리에만 남아서 git status에 같은 파일이 staged와 unstaged 양쪽에 나온다.",
    anchor: "파일은-세-구역을-오간다",
  },
  {
    id: "git-staging-area-2",
    post: "git-staging-area",
    question: "옵션 없이 git diff를 치면 무엇과 무엇을 비교하나?",
    choices: [
      "작업 트리와 인덱스",
      "인덱스와 HEAD 커밋",
      "작업 트리와 HEAD 커밋",
      "HEAD 커밋과 그 부모 커밋",
    ],
    answer: 0,
    explanation:
      "git diff는 아직 add하지 않은 변경, 즉 작업 트리와 인덱스의 차이를 보여 준다. 지금 커밋하면 들어갈 변경은 git diff --staged(인덱스와 HEAD)로, 둘을 합친 차이는 git diff HEAD로 본다.",
    anchor: "파일은-세-구역을-오간다",
  },
  {
    id: "git-staging-area-3",
    post: "git-staging-area",
    question: "git status -s 출력에서 app.js 앞에 MM이 보인다. 지금 git commit을 하면 어떻게 되나?",
    choices: [
      "add한 시점의 내용만 커밋되고, 그 뒤에 고친 내용은 작업 트리에 남는다",
      "두 번의 수정이 모두 커밋된다",
      "충돌 상태라 커밋이 거절된다",
      "마지막 수정만 커밋되고 add한 내용은 사라진다",
    ],
    answer: 0,
    explanation:
      "첫 글자는 인덱스와 HEAD, 둘째 글자는 작업 트리와 인덱스의 차이다. MM은 add한 뒤에 또 고쳤다는 뜻이고, 커밋은 인덱스를 찍으니 나중 수정은 빠진다. 충돌 중인 파일은 UU로 나온다.",
    anchor: "파일의-상태는-두-글자로-읽는다",
  },
  {
    id: "git-staging-area-4",
    post: "git-staging-area",
    question: "새로 만든 util.js와 고친 app.js가 있다. git commit -a -m \"작업\"을 하면 커밋에 들어가는 것은?",
    choices: [
      "util.js와 app.js 둘 다",
      "app.js의 변경만",
      "util.js만",
      "아무것도 들어가지 않는다",
    ],
    answer: 1,
    explanation:
      "-a는 이미 추적 중인 파일의 변경을 모두 add하고 커밋한다. 한 번도 add하지 않은 untracked 파일은 넣지 않으니 util.js는 git add로 따로 올려야 한다.",
    anchor: "파일은-세-구역을-오간다",
  },
  {
    id: "git-staging-area-5",
    post: "git-staging-area",
    question: "console.log가 든 app.js를 add한 뒤 에디터에서 그 줄을 지우고 저장했다. 다시 add하지 않고 커밋하면?",
    choices: [
      "작업 트리에서 지웠으니 console.log는 커밋에 안 들어간다",
      "Git이 차이를 감지해 자동으로 다시 add한다",
      "인덱스에 남은 console.log가 그대로 커밋된다",
      "커밋이 MM 상태라서 항상 실패한다",
    ],
    answer: 2,
    explanation:
      "커밋은 작업 트리가 아니라 인덱스를 찍는다. add한 시점의 내용이 인덱스에 남아 있으니 console.log가 들어간다. 그래서 pre-commit 훅은 디스크 파일이 아니라 git diff --cached로 인덱스를 검사해야 한다.",
    anchor: "커밋-직전에-인덱스를-보는-습관",
  },
  {
    id: "git-staging-area-6",
    post: "git-staging-area",
    question: "어떤 함수가 처음 생긴 커밋을 찾으려 한다. 가장 알맞은 명령은?",
    choices: [
      "git log --stat",
      "git show HEAD~3:app.js",
      "git log --author=함수이름",
      "git log -S\"함수이름(\"",
    ],
    answer: 3,
    explanation:
      "-S는 그 문자열이 나오는 횟수가 바뀐 커밋, 즉 처음 생기거나 사라진 커밋만 찾는다. --author는 작성자로 거르는 옵션이고, 줄 안에서 값만 바뀐 경우까지 찾으려면 정규식으로 diff를 훑는 -G를 쓴다.",
    anchor: "커밋하고-히스토리를-읽는-명령",
  },
  {
    id: "git-staging-area-7",
    post: "git-staging-area",
    question: "feature 브랜치는 README를 건드린 적이 없는데, git diff main..feature에 README 줄이 지워진 것으로 나온다. 왜 그럴까?",
    choices: [
      "feature 브랜치가 rebase되면서 README 변경이 사라졌다",
      "인덱스에 README 삭제가 스테이징되어 있다",
      "main이 갈라진 뒤 README에 넣은 줄이 feature 끝에는 없어서, 두 끝을 비교하면 지운 것처럼 보인다",
      "..는 merge base부터 비교하므로 main의 변경이 거꾸로 나온다",
    ],
    answer: 2,
    explanation:
      "diff의 ..는 두 브랜치 끝을 그대로 비교한다. 그래서 main이 그 사이에 한 변경이 feature가 되돌린 것처럼 나온다. merge base부터 브랜치가 실제로 한 일만 보려면 ...를 쓴다.",
    anchor: "git-diff에-무엇과-무엇을-넣느냐",
  },
];
