import type { QuizQuestion } from "../types";

export const GITHUB_PULL_REQUEST_FLOW: QuizQuestion[] = [
  {
    id: "github-pull-request-flow-1",
    post: "github-pull-request-flow",
    question: "PR 본문에 Closes #12를 적었고 PR이 develop 브랜치로 머지됐다. 저장소의 기본 브랜치는 main이다. 이슈 #12는?",
    choices: [
      "머지되는 순간 닫힌다",
      "열린 채로 남는다. 닫는 키워드는 기본 브랜치로 머지될 때만 동작한다",
      "PR 제목에도 같은 키워드가 있어야 닫힌다",
      "develop에서 CI가 통과하면 닫힌다",
    ],
    answer: 1,
    explanation:
      "Closes, Fixes 같은 키워드는 PR이 저장소의 기본 브랜치로 머지될 때만 이슈를 닫는다. develop으로 머지하면 연결은 보이지만 이슈는 열려 있다. 그런 팀은 main으로 가는 릴리스 PR에서 닫히게 하거나 손으로 닫는다.",
    anchor: "이슈에서-브랜치를-딴다",
  },
  {
    id: "github-pull-request-flow-2",
    post: "github-pull-request-flow",
    question: "draft PR에 대한 설명으로 옳은 것은?",
    choices: [
      "draft PR에서는 CI가 돌지 않는다",
      "draft PR은 승인이 하나 있으면 머지할 수 있다",
      "draft PR은 머지할 수 없고 CODEOWNERS 리뷰어에게 리뷰 요청이 자동으로 가지 않는다",
      "draft PR은 fork에서만 열 수 있다",
    ],
    answer: 2,
    explanation:
      "draft는 아직 덜 됐다는 신호라 머지 버튼이 막히고 코드 오너에게 자동 리뷰 요청이 가지 않는다. CI는 돌기 때문에 방향과 빌드를 일찍 확인할 수 있다. 준비가 끝나면 Ready for review로 바꾼다.",
    anchor: "덜-됐을-때-여는-draft-pr",
  },
  {
    id: "github-pull-request-flow-3",
    post: "github-pull-request-flow",
    question: "리뷰어의 suggestion을 Commit suggestion 버튼으로 반영한 뒤, 로컬에서 바로 커밋해 push했더니 rejected가 났다. 왜인가?",
    choices: [
      "suggestion 커밋은 GitHub 서버에서 만들어져 로컬에는 없는 커밋이 원격에 생겼기 때문에",
      "suggestion을 반영하면 브랜치가 잠기기 때문에",
      "리뷰어가 승인하기 전에는 push할 수 없기 때문에",
      "suggestion 커밋은 다른 브랜치로 올라가기 때문에",
    ],
    answer: 0,
    explanation:
      "버튼으로 반영한 suggestion은 원격 브랜치에 바로 커밋된다. 로컬은 그 커밋을 모르니 push가 덮어쓰기로 보여 거절된다. 먼저 git pull로 받아 온 뒤 이어서 작업한다.",
    anchor: "리뷰-코멘트를-받고-고치는-동안",
  },
  {
    id: "github-pull-request-flow-4",
    post: "github-pull-request-flow",
    question: "리뷰가 진행 중인 PR에서 커밋을 rebase로 정리하고 강제 푸시하면 생기는 문제로 가장 알맞은 것은?",
    choices: [
      "CI 결과가 영구히 사라진다",
      "PR이 자동으로 닫힌다",
      "다른 PR까지 모두 다시 리뷰를 받아야 한다",
      "리뷰어가 지난번 이후 바뀐 것만 보기 어려워지고 줄 코멘트가 Outdated로 접힌다",
    ],
    answer: 3,
    explanation:
      "강제 푸시로 커밋이 바뀌면 리뷰어가 비교하던 기준 커밋이 사라져 반영한 부분만 골라 보기 어려워진다. 사라진 줄의 코멘트는 Outdated로 접힌다. 리뷰 중에는 커밋을 더하고, 꼭 필요하면 --force-with-lease를 쓴다.",
    anchor: "리뷰-중에는-히스토리를-다시-쓰지-않는다",
  },
  {
    id: "github-pull-request-flow-5",
    post: "github-pull-request-flow",
    question: "커밋 세 개짜리 PR을 Rebase and merge로 합쳤다. main에 남는 모습은?",
    choices: [
      "세 커밋이 원래 해시 그대로 들어가고 머지 커밋이 하나 생긴다",
      "세 커밋의 변경을 합친 커밋 하나만 들어간다",
      "세 커밋이 내용은 같지만 새 해시로 main 끝에 한 줄로 놓이고 머지 커밋은 없다",
      "세 커밋이 원래 해시 그대로 main 끝에 놓인다",
    ],
    answer: 2,
    explanation:
      "rebase는 커밋을 main 끝에 다시 만들기 때문에 부모가 바뀌어 해시가 새로 나온다. 머지 커밋 없이 한 줄 히스토리가 된다. 해시를 그대로 두고 머지 커밋을 만드는 건 merge commit, 하나로 합치는 건 squash다.",
    anchor: "머지-버튼의-세-가지-선택지",
  },
  {
    id: "github-pull-request-flow-6",
    post: "github-pull-request-flow",
    question: "squash로 머지된 브랜치에서 작업을 이어 가다 main을 합치자 내가 쓴 코드끼리 충돌이 났다. 가장 알맞은 대응은?",
    choices: [
      "git merge -X ours main으로 내 쪽을 이기게 한다",
      "최신 main에서 새 브랜치를 따고 머지 뒤에 만든 커밋만 cherry-pick한다",
      "main의 squash 커밋을 revert한 뒤 다시 합친다",
      "git branch -d로 브랜치를 지우고 다시 만든다",
    ],
    answer: 1,
    explanation:
      "squash 커밋은 내 커밋들과 내용만 같은 다른 커밋이라 Git은 내 커밋이 아직 main에 없다고 본다. 그래서 같은 내용끼리 충돌한다. squash된 브랜치는 버리고 새 브랜치에 새 커밋만 옮긴다. 같은 이유로 -d는 not fully merged로 거절된다.",
    anchor: "squash-뒤에-같은-브랜치로-이어-가면",
  },
  {
    id: "github-pull-request-flow-7",
    post: "github-pull-request-flow",
    question: "fork에서 연 PR의 CI에서 배포 미리보기 단계가 비밀 값이 없어 실패했다. 왜 이런가?",
    choices: [
      "fork PR로 도는 워크플로에는 원본 저장소의 Secrets가 전달되지 않아서",
      "fork 저장소에는 GitHub Actions를 쓸 수 없어서",
      "기여자가 Allow edits by maintainers를 끄지 않아서",
      "PR이 draft 상태라서",
    ],
    answer: 0,
    explanation:
      "누구나 fork PR을 열 수 있으니 그 코드가 배포 키를 빼 가지 못하게 Secrets를 주지 않고 GITHUB_TOKEN도 읽기 전용으로 준다. 그래서 비밀 값이 필요한 단계가 실패하는 건 정상이다. maintainer edit 옵션은 메인테이너가 fork 브랜치에 커밋할 수 있게 하는 설정이다.",
    anchor: "권한이-없는-저장소에는-fork로-기여한다",
  },
];
