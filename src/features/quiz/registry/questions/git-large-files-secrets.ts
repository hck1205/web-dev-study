import type { QuizQuestion } from "../types";

export const GIT_LARGE_FILES_SECRETS: QuizQuestion[] = [
  {
    id: "git-large-files-secrets-1",
    post: "git-large-files-secrets",
    question: ".env를 .gitignore에 추가했는데 고칠 때마다 git status에 M .env가 나온다. 원인과 해결로 옳은 것은?",
    choices: [
      ".gitignore 파일이 커밋되지 않아서다. .gitignore를 커밋하면 된다",
      "패턴 앞에 /를 붙이지 않아서다",
      "이미 추적 중인 파일이라서다. git rm --cached .env로 추적을 끊고 커밋한다",
      "core.autocrlf 설정 때문이다",
    ],
    answer: 2,
    explanation:
      ".gitignore는 아직 추적하지 않는 파일에만 적용된다. 한 번 커밋된 파일은 규칙과 상관없이 계속 추적되므로 --cached로 인덱스에서만 빼고 커밋한다. 이 커밋을 받은 다른 사람의 디스크에서는 파일이 지워진다는 것도 알려 둔다.",
    anchor: "gitignore에-적었는데-계속-추적된다",
  },
  {
    id: "git-large-files-secrets-2",
    post: "git-large-files-secrets",
    question: "공개 저장소에 비밀 키가 든 커밋을 푸시했다. 가장 먼저 할 일은?",
    choices: [
      "git filter-repo로 히스토리에서 지우고 강제 푸시한다",
      "저장소를 비공개로 바꾼다",
      ".gitignore에 .env를 추가한다",
      "키를 발급한 곳에서 폐기하고 새 키를 발급한다",
    ],
    answer: 3,
    explanation:
      "히스토리를 지워도 이미 clone한 사람, 포크, CI 캐시, PR 화면 등에 남아 있을 수 있어 키는 안전해지지 않는다. 그래서 키 폐기가 먼저이고 히스토리 정리는 그다음이다. .gitignore는 앞으로의 실수를 막을 뿐이다.",
    anchor: "비밀-값이-든-env를-커밋했다",
  },
  {
    id: "git-large-files-secrets-3",
    post: "git-large-files-secrets",
    question: "120MB짜리 dump.sql을 커밋하고 커밋을 두 개 더 쌓았다. 마지막에 dump.sql을 지우는 커밋을 하나 더 만들어 푸시하면?",
    choices: [
      "마지막 커밋에 파일이 없으니 푸시된다",
      "Git이 지운 파일의 blob은 자동으로 빼고 보낸다",
      "덤프가 든 커밋도 함께 가니 여전히 거절된다",
      "50MB 경고만 나오고 푸시된다",
    ],
    answer: 2,
    explanation:
      "푸시는 원격에 없는 커밋 전체와 그 커밋들이 가리키는 객체를 보낸다. 덤프를 담은 커밋이 히스토리에 남아 있으면 그 blob도 함께 가니 거절된다. 아직 푸시 전이고 마지막 커밋이면 amend로, 아니면 git-filter-repo로 히스토리에서 빼야 한다.",
    anchor: "큰-파일을-커밋해서-푸시가-안-된다",
  },
  {
    id: "git-large-files-secrets-4",
    post: "git-large-files-secrets",
    question: "한 글자도 안 고친 파일이 diff에 통째로 바뀐 것으로 나오고, git diff | cat -A에서 지워진 줄 끝에만 ^M이 보인다. 원인은?",
    choices: [
      "파일 인코딩이 UTF-8에서 EUC-KR로 바뀌었다",
      "실행 권한이 바뀌었다",
      "대소문자만 다른 파일 이름이 생겼다",
      "줄바꿈이 CRLF에서 LF로 바뀌었다",
    ],
    answer: 3,
    explanation:
      "^M은 CR 문자다. 지워진 줄에는 CR이 있고 새 줄에는 없으니 줄바꿈만 CRLF에서 LF로 바뀐 것이다. git diff --ignore-cr-at-eol로 보면 차이가 사라지고, 저장소에 .gitattributes를 두어 규칙을 통일한다.",
    anchor: "줄바꿈-때문에-파일-전체가-바뀌었다고-나온다",
  },
  {
    id: "git-large-files-secrets-5",
    post: "git-large-files-secrets",
    question: "맥에서 Button.tsx를 button.tsx로 이름만 바꿨는데 git status에 아무것도 안 나온다. 알맞은 처리는?",
    choices: [
      "git mv Button.tsx button.tsx로 Git에 이름 변경을 알린다",
      "core.ignorecase를 전역으로 true로 바꾼다",
      "git add .을 한 번 더 한다",
      "아무것도 안 해도 리눅스 CI에서는 알아서 맞춰진다",
    ],
    answer: 0,
    explanation:
      "macOS와 윈도우의 기본 파일 시스템은 대소문자를 구분하지 않아서 Git이 같은 파일로 본다. git mv로 직접 알려야 R로 기록되고, 그대로 두면 대소문자를 구분하는 리눅스 CI에서 import가 깨진다.",
    anchor: "대소문자만-바꾼-파일-이름이-반영되지-않는다",
  },
  {
    id: "git-large-files-secrets-6",
    post: "git-large-files-secrets",
    question: "큰 파일을 막는 pre-commit 훅이 파일 크기를 git cat-file -s \":경로\"로 읽는 이유는?",
    choices: [
      "작업 트리 파일보다 읽기 빠르기 때문에",
      "실제로 커밋될 인덱스의 내용을 검사해야 하기 때문에",
      "압축된 크기를 봐야 GitHub 제한과 맞기 때문에",
      "untracked 파일까지 함께 검사하려고",
    ],
    answer: 1,
    explanation:
      ":경로는 인덱스에 올라간 버전을 가리킨다. 커밋은 작업 트리가 아니라 인덱스를 찍으니 검사도 인덱스를 봐야 정확하다. cat-file -s가 주는 값은 압축 전 크기다.",
    anchor: "들어간-뒤보다-들어가기-전에-막는-편이-싸다",
  },
];
