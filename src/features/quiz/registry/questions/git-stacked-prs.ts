import type { QuizQuestion } from "../types";

export const GIT_STACKED_PRS: QuizQuestion[] = [
  {
    id: "git-stacked-prs-1",
    post: "git-stacked-prs",
    question: "feat/cart-api 위에 쌓은 feat/cart-ui PR의 base를 실수로 main으로 열었다. 리뷰어 화면에는 무엇이 보이나?",
    choices: [
      "화면 커밋 하나만 보인다",
      "아래 두 층의 커밋까지 main..feat/cart-ui 전체가 보인다",
      "GitHub이 base를 자동으로 feat/cart-api로 바꿔 준다",
      "충돌이 나서 PR을 열 수 없다",
    ],
    answer: 1,
    explanation:
      "PR이 보여 주는 커밋은 base에는 없고 head에만 있는 커밋, 즉 base..head다. base가 main이면 아래 층 커밋까지 모두 들어가 리뷰어는 다시 큰 PR을 보게 된다. 그래서 위 층 PR은 base를 바로 아래 층 브랜치로 지정한다.",
    anchor: "브랜치를-세-층으로-쌓는다",
  },
  {
    id: "git-stacked-prs-2",
    post: "git-stacked-prs",
    question: "아래 층 feat/cart-model에 리뷰 반영 커밋을 더했다. 꼭대기 feat/cart-ui에서 `git rebase --update-refs feat/cart-model`을 하면 무엇이 달라지나?",
    choices: [
      "feat/cart-ui만 옮겨지고 feat/cart-api는 옛 커밋에 남는다",
      "feat/cart-model이 feat/cart-ui 끝으로 옮겨진다",
      "feat/cart-api 이름표도 다시 만든 커밋으로 함께 옮겨진다",
      "모든 층이 하나의 커밋으로 합쳐진다",
    ],
    answer: 2,
    explanation:
      "--update-refs는 rebase 범위 안에 걸린 브랜치 이름표를 다시 만든 커밋으로 함께 옮긴다. 할 일 목록에 update-ref 줄이 들어가고, rebase가 끝날 때 한꺼번에 옮겨진다. 옵션 없이 하면 가운데 브랜치가 옛 커밋에 남아 git branch -f로 손으로 옮겨야 한다.",
    anchor: "아래-층을-고치면-위층이-옛-커밋에-매달린다",
  },
  {
    id: "git-stacked-prs-3",
    post: "git-stacked-prs",
    question: "맨 아래 PR을 squash로 합친 뒤 위 층에서 `git rebase main`을 하면 첫 커밋부터 add/add 충돌이 난다. 왜 그런가?",
    choices: [
      "squash 커밋이 아래 층 커밋들과 해시도 변경 단위도 달라 patch-id로 건너뛰지 못하기 때문",
      "main이 보호 브랜치라 rebase를 거부하기 때문",
      "--update-refs를 켜면 squash 커밋을 인식하지 못하기 때문",
      "위 층 브랜치의 upstream이 지워졌기 때문",
    ],
    answer: 0,
    explanation:
      "rebase는 옮길 커밋의 patch-id가 upstream에 이미 있으면 건너뛴다. squash 커밋은 여러 커밋의 변경을 합친 것이라 어느 커밋과도 지문이 맞지 않아, 이미 main에 있는 내용을 처음부터 다시 적용하려다 충돌한다. rebase merge로 합쳤다면 커밋 단위가 유지돼 건너뛴다.",
    anchor: "맨-아래-pr이-squash로-합쳐지면",
  },
  {
    id: "git-stacked-prs-4",
    post: "git-stacked-prs",
    question: "위 상황에서 이미 들어간 아래 층 커밋은 빼고 위 층 커밋만 main 위로 옮기는 명령은?",
    choices: [
      "git rebase --onto feat/cart-model main feat/cart-ui",
      "git merge --squash feat/cart-ui",
      "git rebase --reapply-cherry-picks main",
      "git rebase --onto main feat/cart-model feat/cart-ui",
    ],
    answer: 3,
    explanation:
      "--onto 새받침 옛받침 브랜치는 옛받침 다음부터 브랜치 끝까지만 새받침 위로 옮긴다. 옛받침을 아래 층 끝으로 주면 squash로 들어간 커밋은 목록에서 빠진다. 첫 번째 보기는 인자 순서가 바뀌어 엉뚱한 곳으로 옮긴다.",
    anchor: "맨-아래-pr이-squash로-합쳐지면",
  },
  {
    id: "git-stacked-prs-5",
    post: "git-stacked-prs",
    question: "#102(base: feat/cart-model)가 먼저 승인돼 #101보다 먼저 Merge 버튼을 눌렀다. 어떻게 되나?",
    choices: [
      "#101과 #102가 함께 main에 들어간다",
      "API 커밋이 main이 아니라 feat/cart-model에 들어가고 #101의 diff가 커진다",
      "GitHub이 순서가 틀렸다며 병합을 거부한다",
      "#102의 base가 자동으로 main으로 바뀐 뒤 합쳐진다",
    ],
    answer: 1,
    explanation:
      "PR은 자기 base 브랜치로 합쳐진다. #102의 base는 feat/cart-model이라 API 커밋이 그 브랜치에 들어가고, main에는 아무것도 들어가지 않는다. 그래서 스택은 승인 순서와 상관없이 맨 아래부터 합친다.",
    anchor: "합치는-순서와-층마다-도는-ci",
  },
  {
    id: "git-stacked-prs-6",
    post: "git-stacked-prs",
    question: "워크플로에 `on: pull_request: branches: [main]`이 있다. 스택의 위 층 PR에서 CI가 돌지 않는 이유는?",
    choices: [
      "branches 필터가 head 브랜치 이름에 적용되기 때문",
      "draft PR에서는 Actions가 절대 돌지 않기 때문",
      "branches 필터가 PR의 base 브랜치에 적용되기 때문",
      "강제 푸시한 브랜치는 CI 대상에서 빠지기 때문",
    ],
    answer: 2,
    explanation:
      "pull_request 이벤트의 branches 필터는 PR이 합쳐질 base 브랜치를 본다. 위 층 PR은 base가 아래 층 브랜치라 조건에 맞지 않는다. 스택을 쓰면 필터를 빼거나 모든 base를 허용해야 층마다 검사가 돈다.",
    anchor: "합치는-순서와-층마다-도는-ci",
  },
];
