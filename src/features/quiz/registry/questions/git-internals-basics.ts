import type { QuizQuestion } from "../types";

export const GIT_INTERNALS_BASICS: QuizQuestion[] = [
  {
    id: "git-internals-basics-1",
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
    id: "git-internals-basics-2",
    post: "git-internals-basics",
    question: "내용은 그대로 두고 파일 이름만 바꿔 커밋했다. 이 커밋으로 새로 생기는 객체는?",
    choices: [
      "새 blob과 새 commit",
      "새 tree와 새 commit",
      "새 blob, 새 tree, 새 commit",
      "새 commit 하나만",
    ],
    answer: 1,
    explanation:
      "파일 이름은 blob이 아니라 tree에 들어 있다. 내용이 같으니 blob은 기존 것을 그대로 가리키고, 이름이 바뀐 목록인 tree와 그 tree를 가리키는 commit만 새로 생긴다.",
    anchor: "객체-네-가지를-직접-열어-본다",
  },
  {
    id: "git-internals-basics-3",
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
  {
    id: "git-internals-basics-4",
    post: "git-internals-basics",
    question: "수십만 개 커밋이 있는 저장소에서도 git branch로 브랜치를 만드는 일이 순식간에 끝나는 이유는?",
    choices: [
      "브랜치를 만들 때 파일을 복사하지 않고 압축만 하기 때문에",
      "브랜치 생성은 서버에서 처리되기 때문에",
      "브랜치가 커밋 해시 하나를 적은 refs/heads 아래의 파일이기 때문에",
      "packfile이 브랜치마다 따로 있어서 미리 만들어 두기 때문에",
    ],
    answer: 2,
    explanation:
      "브랜치는 .git/refs/heads 아래에 커밋 해시 하나를 적은 41바이트짜리 파일이다. 브랜치를 만드는 건 이 파일 하나를 쓰는 일이라 저장소 크기와 상관없다. 파일 내용 복사는 일어나지 않는다.",
    anchor: "git-폴더가-저장소의-전부다",
  },
  {
    id: "git-internals-basics-5",
    post: "git-internals-basics",
    question: "PR을 squash 머지한 뒤 git branch -d feature/mul이 not fully merged로 거절됐다. 내용이 main과 같은지 확인하는 방법으로 맞는 것은?",
    choices: [
      "두 브랜치 끝 커밋의 해시가 같은지 비교한다",
      "git branch --merged main에 나오는지 본다",
      "두 브랜치의 커밋 메시지가 같은지 본다",
      "두 브랜치의 ^{tree} 해시가 같은지 비교한다",
    ],
    answer: 3,
    explanation:
      "squash 머지는 커밋 여러 개를 합친 새 커밋을 만들어서 커밋 해시도 다르고 --merged에도 나오지 않는다. tree 해시는 파일 내용만으로 정해지니 git rev-parse로 두 브랜치의 ^{tree}를 비교해 같으면 내용이 완전히 같다.",
    anchor: "현장에서-해시로-같은가를-확인하는-순간",
  },
];
