import type { QuizQuestion } from "../types";

export const GIT_HOOKS: QuizQuestion[] = [
  {
    id: "git-hooks-1",
    post: "git-hooks",
    question: "팀이 공들여 만든 pre-commit 훅이 어떤 팀원에게는 적용되지 않았다. .git/hooks에 예제 파일만 있었다. 가장 그럴듯한 이유는?",
    choices: [
      ".git/hooks 안은 추적 대상이 아니라 커밋·clone에 포함되지 않기 때문",
      "그 팀원의 Git 버전이 훅을 지원하지 않기 때문",
      "pre-commit은 원래 서버에서만 도는 훅이기 때문",
      "훅 파일 확장자가 .sample이어야 실행되기 때문",
    ],
    answer: 0,
    explanation:
      ".git/ 폴더 안은 Git이 관리하는 데이터라 추적되지 않아 커밋·푸시·clone에 들어가지 않는다. clone만으로 남의 스크립트가 자동 실행되면 위험하니 일부러 그렇게 설계됐다. 공유하려면 저장소 안 폴더에 훅을 두고 각자 연결해야 한다.",
    anchor: "githooks는-왜-같이-올라가지-않나",
  },
  {
    id: "git-hooks-2",
    post: "git-hooks",
    question: "pre-commit 훅에서 작업 폴더 파일을 그대로 검사하는 대신 git diff --cached로 스테이징된 것만 보는 이유는?",
    choices: [
      "작업 폴더 검사가 git diff --cached보다 느리기 때문",
      "커밋되는 건 인덱스의 내용인데 작업 폴더에는 스테이징 안 한 변경이 섞여 결과와 실제 커밋이 어긋나기 때문",
      "작업 폴더 파일은 훅에서 읽을 수 없기 때문",
      "git diff --cached만 종료 코드를 돌려주기 때문",
    ],
    answer: 1,
    explanation:
      "커밋에 들어가는 건 스테이징 영역(인덱스)의 내용이다. git add -p로 일부만 올린 파일을 작업 폴더 기준으로 검사하면 검사와 실제 커밋이 어긋나고, 포매터가 고친 뒤 다시 add하면 올리지 않으려던 부분까지 커밋된다.",
    anchor: "pre-commit은-스테이징된-것만-본다",
  },
  {
    id: "git-hooks-3",
    post: "git-hooks",
    question: "로컬 훅으로 커밋 규칙을 강제하는 것만으로 충분하지 않은 결정적 이유는?",
    choices: [
      "로컬 훅은 느려서 큰 저장소에서 쓸 수 없다",
      "로컬 훅은 Python으로만 짤 수 있다",
      "git commit --no-verify 한 줄로 건너뛸 수 있고, 설정 안 했거나 다른 클라이언트면 아예 안 돈다",
      "로컬 훅은 한 번에 하나만 등록할 수 있다",
    ],
    answer: 2,
    explanation:
      "--no-verify(또는 -n)로 pre-commit·commit-msg를, 푸시에서 pre-push를 건너뛸 수 있고, core.hooksPath를 설정 안 했거나 웹·다른 클라이언트에서 커밋하면 애초에 돌지 않는다. 그래서 꼭 지킬 규칙은 CI와 서버 훅에서 다시 검사한다.",
    anchor: "--no-verify-한-줄이면-끝난다",
  },
  {
    id: "git-hooks-4",
    post: "git-hooks",
    question: "pre-receive 훅과 update 훅의 차이로 맞는 것은?",
    choices: [
      "pre-receive는 로컬에서, update는 서버에서 돈다",
      "pre-receive는 푸시 한 번에 한 번 돌며 실패 시 그 푸시 전체가 반영 안 되고, update는 ref마다 돌며 실패 시 그 ref만 거절된다",
      "둘 다 ref마다 돌지만 pre-receive가 먼저 돈다는 것 외에 차이가 없다",
      "update는 반영된 뒤에 돌아 결과를 바꾸지 못한다",
    ],
    answer: 1,
    explanation:
      "pre-receive는 푸시 한 번에 한 번 돌며 표준 입력으로 모든 ref 변경을 받고, 실패하면 그 푸시의 ref가 하나도 반영되지 않는다. update는 ref마다 한 번 돌아 실패하면 그 ref만 거절된다. 그래서 '통째로 받거나 버리기'는 pre-receive, 브랜치별 규칙은 update가 맞다.",
    anchor: "서버-훅-건너뛸-수-없는-마지막-문",
  },
  {
    id: "git-hooks-5",
    post: "git-hooks",
    question: "husky 9는 훅을 공유하기 위해 내부적으로 무엇을 하나?",
    choices: [
      "커밋할 때마다 서버에서 훅을 내려받아 실행한다",
      ".git/hooks 폴더를 저장소에 강제로 커밋한다",
      "core.hooksPath를 .husky/_로 바꾸고 prepare 스크립트가 npm install 때 이 설정을 되살린다",
      "Git을 패치해 훅 검사를 끈다",
    ],
    answer: 2,
    explanation:
      "husky는 core.hooksPath를 .husky/_로 바꾸고 그 안에 진입 스크립트를 두며, package.json의 prepare 스크립트가 npm install마다 이 설정을 되살린다. 그래서 clone 후 npm install만 하면 훅이 연결된다. HUSKY=0으로 끌 수도 있다.",
    anchor: "팀이-같은-훅을-쓰게-하는-방법",
  },
  {
    id: "git-hooks-6",
    post: "git-hooks",
    question: "브랜치를 바꾼 뒤 잠금 파일 변경을 알리는 post-checkout 훅을 저장소 안 .githooks에 넣었더니, feat 브랜치에서 main으로 넘어갈 때는 메시지가 안 나왔다. 왜일까?",
    choices: [
      "post-checkout은 main 브랜치에서는 돌지 않도록 막혀 있다",
      "Git이 체크아웃이 끝난 뒤의 훅 폴더를 보는데, main에는 그 훅 파일이 없어서 실행할 게 없었다",
      "post-checkout은 파일 체크아웃에서만 돈다",
      "훅 파일에 실행 권한이 main에서만 사라진다",
    ],
    answer: 1,
    explanation:
      "저장소 안에 훅을 두면 브랜치마다 훅이 달라질 수 있다. main에 그 훅 파일이 커밋돼 있지 않으면, main으로 넘어간 뒤의 작업 폴더에는 훅이 없어 실행되지 않는다. 훅 변경은 기본 브랜치에 먼저 넣는 게 안전하다.",
    anchor: "post-checkout은-결과를-바꾸지-못한다",
  },
  {
    id: "git-hooks-7",
    post: "git-hooks",
    question: "터미널에서는 훅이 잘 도는데 GUI 클라이언트나 IDE에서 커밋하면 command not found가 난다. 가장 흔한 원인은?",
    choices: [
      "GUI 앱은 셸 설정 파일을 읽지 않고 시작해 nvm 등으로 깐 node·npx를 PATH에서 못 찾는다",
      "GUI 앱은 훅을 지원하지 않는다",
      "훅 파일의 shebang이 GUI에서만 무시된다",
      "core.hooksPath가 GUI에서 자동으로 초기화된다",
    ],
    answer: 0,
    explanation:
      "GUI 앱은 로그인 셸 설정(.zshrc 등)을 읽지 않고 시작해서 nvm으로 설치한 node·npx의 경로를 PATH에 담지 못한다. husky는 이를 위해 ~/.config/husky/init.sh를 먼저 읽어 PATH를 보강할 수 있게 한다.",
    anchor: "훅이-미움받지-않게-운영하기",
  },
];
