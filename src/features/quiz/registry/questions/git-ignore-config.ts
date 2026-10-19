import type { QuizQuestion } from "../types";

export const GIT_IGNORE_CONFIG: QuizQuestion[] = [
  {
    id: "git-ignore-config-1",
    post: "git-ignore-config",
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
    id: "git-ignore-config-2",
    post: "git-ignore-config",
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
    id: "git-ignore-config-3",
    post: "git-ignore-config",
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
    id: "git-ignore-config-4",
    post: "git-ignore-config",
    question: "global에 user.email=matt@example.com, 저장소 local에 user.email=matt@company.example이 있다. 이 저장소에서 커밋하면 어떤 이메일이 찍히나?",
    choices: [
      "matt@company.example",
      "matt@example.com",
      "둘 다 찍힌다",
      "설정이 겹쳐서 커밋이 거절된다",
    ],
    answer: 0,
    explanation:
      "Git은 system, global, local 순서로 설정을 읽고 값이 하나인 키는 나중에 읽은 값이 이긴다. 그래서 local 값이 쓰인다. 어느 파일에서 온 값인지는 git config --show-origin으로 확인한다.",
    anchor: "설정은-세-겹으로-쌓인다",
  },
  {
    id: "git-ignore-config-5",
    post: "git-ignore-config",
    question: "팀원마다 core.autocrlf를 다르게 써서 줄바꿈이 계속 섞인다. 가장 확실한 해결은?",
    choices: [
      "모두에게 core.autocrlf=false를 쓰라고 공지한다",
      "저장소에 .gitattributes를 두고 * text=auto eol=lf를 커밋한다",
      "git diff --ignore-cr-at-eol을 기본으로 켠다",
      "윈도우 사용자만 core.autocrlf=input을 쓴다",
    ],
    answer: 1,
    explanation:
      "core.autocrlf는 사람마다 켜는 개인 설정이라 한 명만 빠뜨려도 어긋난다. .gitattributes는 저장소에 커밋되어 모두에게 같은 규칙이 적용되고 개인 설정보다 우선한다. --ignore-cr-at-eol은 보기만 바꿀 뿐 저장되는 바이트는 그대로다.",
    anchor: "줄바꿈-문자가-diff-전체를-바꿀-때",
  },
  {
    id: "git-ignore-config-6",
    post: "git-ignore-config",
    question: "git ls-files -ci --exclude-standard는 무엇을 보여 주나?",
    choices: [
      "무시되는 untracked 파일 전체",
      "아직 add하지 않은 변경 파일",
      "추적 중인 파일 가운데 무시 규칙에 걸리는 것",
      ".gitignore 문법이 틀린 줄",
    ],
    answer: 2,
    explanation:
      "-c는 추적 중인 파일, -i는 무시 규칙에 걸리는 것만 고르라는 뜻이다. .gitignore를 나중에 넣은 저장소에서 잘못 추적되는 파일을 한 번에 찾고, git rm --cached로 인덱스에서 빼는 데 쓴다.",
    anchor: "현장에서-이-규칙들이-문제가-되는-순간",
  },
];
