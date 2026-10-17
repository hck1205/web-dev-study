import type { QuizQuestion } from "../types";

export const GIT_INTERNALS_BASICS: QuizQuestion[] = [
  {
    id: "git-internals-basics-1",
    post: "git-internals-basics",
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
    id: "git-internals-basics-2",
    post: "git-internals-basics",
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
    id: "git-internals-basics-3",
    post: "git-internals-basics",
    question: "두 커밋 사이에 README.md 내용이 바뀌지 않았다면 저장소에는 README.md가 어떻게 저장되나?",
    choices: [
      "커밋마다 파일 전체가 새로 복사된다",
      "두 번째 커밋에는 빈 변경분(diff)만 기록된다",
      "두 번째 커밋의 tree에서 README.md 항목이 빠진다",
      "두 커밋의 tree가 같은 blob 하나를 가리킨다",
    ],
    answer: 3,
    explanation:
      "blob의 이름은 내용의 해시라서 내용이 같으면 같은 객체가 된다. 그래서 커밋은 매번 전체 스냅샷이지만 바뀌지 않은 파일은 지난 커밋과 같은 blob을 가리켜 중복 저장되지 않는다. tree에서 항목을 빼면 그 파일이 삭제된 것으로 해석된다.",
    anchor: "객체-네-가지를-직접-열어-본다",
  },
  {
    id: "git-internals-basics-4",
    post: "git-internals-basics",
    question: "git commit --amend로 커밋 메시지만 고쳤는데 커밋 해시가 바뀌었다. 왜 그럴까?",
    choices: [
      "amend는 항상 작업 트리의 모든 변경을 함께 넣기 때문에",
      "메시지도 커밋 객체의 내용이라 해시 계산에 들어가기 때문에",
      "amend가 부모 커밋까지 새로 만들기 때문에",
      "해시는 커밋한 시각만으로 정해지기 때문에",
    ],
    answer: 1,
    explanation:
      "커밋 해시는 tree, 부모, 작성자와 커미터, 메시지를 모두 담은 커밋 객체의 해시다. 메시지가 바뀌면 다른 객체가 되니 amend는 같은 부모 위에 새 커밋을 만들고 브랜치를 옮긴다. 그래서 이미 푸시한 커밋을 amend하면 원격과 어긋난다.",
    anchor: "올리지-않을-파일은-gitignore로",
  },
  {
    id: "git-internals-basics-5",
    post: "git-internals-basics",
    question: "이미 커밋해 둔 config.local을 .gitignore에 추가했는데도 계속 변경으로 잡힌다. 맞는 해결은?",
    choices: [
      ".gitignore 맨 위로 그 줄을 옮긴다",
      "git clean -fd로 파일을 지운다",
      "git rm --cached config.local 후 커밋한다",
      "git check-ignore로 무시 상태를 켠다",
    ],
    answer: 2,
    explanation:
      ".gitignore는 추적하지 않는 파일에만 적용되고, 이미 추적 중인 파일은 계속 변경이 잡힌다. git rm --cached로 인덱스에서만 빼고 커밋하면 디스크의 파일은 남기고 추적을 멈춘다. 지난 커밋에는 여전히 남아 있다는 것도 기억해야 한다.",
    anchor: "올리지-않을-파일은-gitignore로",
  },
  {
    id: "git-internals-basics-6",
    post: "git-internals-basics",
    question: ".gitignore에 `logs/`와 `!logs/keep.log`를 차례로 적었는데 keep.log가 계속 무시된다. 이유는?",
    choices: [
      "폴더 자체를 무시하면 Git이 그 안으로 들어가지 않아 !로 되살릴 수 없다",
      "!는 전역 무시 파일에서만 동작한다",
      "!는 반드시 무시 패턴보다 위에 적어야 한다",
      ".log 확장자는 Git이 항상 무시한다",
    ],
    answer: 0,
    explanation:
      "부모 폴더가 무시되면 Git은 그 폴더를 아예 훑지 않아서 안의 파일을 !로 다시 포함할 수 없다. `logs/*`처럼 폴더가 아니라 폴더 안의 내용을 무시하면 `!logs/keep.log`가 동작한다. 왜 무시되는지는 git check-ignore -v로 확인한다.",
    anchor: "올리지-않을-파일은-gitignore로",
  },
  {
    id: "git-internals-basics-7",
    post: "git-internals-basics",
    question: "Git이 blob 해시를 계산할 때 SHA-1에 넣는 값은?",
    choices: [
      "파일 이름과 파일 내용",
      "\"blob 바이트수\" 다음 널 문자, 그리고 파일 내용",
      "파일 내용과 수정 시각",
      "파일 내용을 압축한 zlib 데이터",
    ],
    answer: 1,
    explanation:
      "blob 해시는 `blob <바이트 수>\\0` 헤더 뒤에 내용을 이어 붙인 바이트의 SHA-1이다. 파일 이름은 tree에 들어가고 시각은 어디에도 들어가지 않아서, 같은 내용이면 누구의 컴퓨터에서든 같은 해시가 나온다. 바이트 수는 글자 수가 아니라 UTF-8 길이다.",
    anchor: "해시는-내용에서-나온다",
  },
];
