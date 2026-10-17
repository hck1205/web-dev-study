import type { QuizQuestion } from "../types";

export const GIT_BRANCHING_STRATEGY: QuizQuestion[] = [
  {
    id: "git-branching-strategy-1",
    post: "git-branching-strategy",
    question: "Git Flow에서 운영 버그를 고칠 hotfix 브랜치를 develop이 아니라 main에서 따는 이유는?",
    choices: [
      "develop에는 hotfix 브랜치를 만들 권한이 없어서",
      "develop에는 아직 출시하면 안 되는 기능이 섞여 있어서",
      "main에서 따야 충돌이 절대 나지 않아서",
      "develop은 태그를 붙일 수 없어서",
    ],
    answer: 1,
    explanation:
      "main은 출시된 코드만 담고 있어서 거기서 고치면 수정 하나만 내보낼 수 있다. develop에서 고치면 반쯤 만든 기능까지 같이 나간다. 대신 고친 hotfix를 develop에도 합쳐야 다음 릴리스에서 버그가 되살아나지 않는다.",
    anchor: "git-flow로-핫픽스-내보내기",
  },
  {
    id: "git-branching-strategy-2",
    post: "git-branching-strategy",
    question: "Git Flow로 hotfix를 main과 develop에 각각 --no-ff로 합쳤다. develop에서 git describe를 쳤더니 v1.4.1이 아니라 v1.4.0 기준으로 나온다. 왜 그럴까?",
    choices: [
      "v1.4.1이 가벼운 태그라서 describe가 무시한다",
      "develop에 합칠 때 태그가 지워졌다",
      "v1.4.1은 main의 머지 커밋에 붙어 있고, 그 커밋은 develop의 조상이 아니다",
      "describe는 항상 첫 번째 태그만 보여 준다",
    ],
    answer: 2,
    explanation:
      "hotfix 브랜치의 커밋은 두 브랜치 모두에 들어갔지만, v1.4.1 태그는 main 쪽 머지 커밋에 붙었다. develop은 그 머지 커밋을 포함하지 않으니 가장 가까운 태그가 v1.4.0이 된다. Git Flow에서 버전 태그는 main에만 있다.",
    anchor: "git-flow로-핫픽스-내보내기",
  },
  {
    id: "git-branching-strategy-3",
    post: "git-branching-strategy",
    question: "트렁크 기반 개발에서 아직 덜 만든 기능을 main에 합치면서도 사용자에게 보이지 않게 하는 방법은?",
    choices: [
      "기능이 끝날 때까지 별도 장기 브랜치에 둔다",
      "main에 합친 뒤 배포를 멈춘다",
      "커밋 메시지에 WIP를 붙인다",
      "피처 플래그로 꺼 둔 채 합친다",
    ],
    answer: 3,
    explanation:
      "피처 플래그는 코드는 배포하되 설정값으로 기능을 꺼 두는 장치라서 배포와 출시를 떼어 놓는다. 장기 브랜치는 트렁크 기반이 피하려는 것이고, 배포를 멈추면 다른 수정도 못 나간다. 다 켠 뒤에는 플래그와 옛 코드를 지운다.",
    anchor: "트렁크-기반-개발은-하루에도-여러-번-합친다",
  },
  {
    id: "git-branching-strategy-4",
    post: "git-branching-strategy",
    question: "PR을 squash and merge로 합친 뒤 원격 브랜치가 지워진 상태에서 로컬 브랜치를 git branch -d로 지우려 하면 어떻게 되나?",
    choices: [
      "main에 생긴 커밋이 브랜치 커밋과 다른 커밋이라 not fully merged로 거부될 수 있다",
      "squash된 커밋과 해시가 같으니 바로 지워진다",
      "브랜치의 커밋이 main에서도 함께 지워진다",
      "Git이 자동으로 rebase한 뒤 지운다",
    ],
    answer: 0,
    explanation:
      "squash는 변경을 합친 새 커밋 하나를 main에 만들 뿐, 브랜치의 커밋은 main의 조상이 되지 않는다. 그래서 Git은 머지됐다고 알아보지 못한다. 내용이 들어간 걸 확인했다면 -D로 지우고, 그 브랜치에서 작업을 이어 가지 않는다.",
    anchor: "pr을-합치는-세-가지-버튼",
  },
  {
    id: "git-branching-strategy-5",
    post: "git-branching-strategy",
    question: "merge commit 방식으로 PR을 합쳐 온 저장소에서 bisect가 PR 안의 빌드 깨진 중간 커밋 때문에 헤맨다. 어떻게 하면 PR 단위로 먼저 좁힐 수 있나?",
    choices: [
      "git bisect skip을 모든 커밋에 쓴다",
      "git bisect start --first-parent로 main의 머지 커밋만 따라간다",
      "squash로 히스토리를 다시 쓴다",
      "git log --oneline으로 직접 고른다",
    ],
    answer: 1,
    explanation:
      "Git 2.29부터 있는 --first-parent는 머지 커밋의 첫 부모, 즉 main이 걸어온 길만 따라가서 PR 하나를 한 단계로 본다. 범인 PR을 찾은 뒤 그 안에서 다시 좁히면 된다. 히스토리를 다시 쓰는 건 공유 브랜치에서 하지 않는다.",
    anchor: "pr을-합치는-세-가지-버튼",
  },
  {
    id: "git-branching-strategy-6",
    post: "git-branching-strategy",
    question: "지난 태그 v1.4.0 이후 커밋이 fix 두 개와 feat(cart)!: drop legacy coupon API 하나다. SemVer와 Conventional Commits 규칙에 따른 다음 버전은?",
    choices: ["1.4.1", "1.5.0", "1.4.2", "2.0.0"],
    answer: 3,
    explanation:
      "콜론 앞의 !는 호환을 깨는 변경이라는 표시라 메이저를 올린다. fix만 있었다면 1.4.1, feat가 있었다면 1.5.0이 됐을 것이다. 가장 큰 변경 하나가 올릴 자리를 정한다.",
    anchor: "버전-번호와-태그",
  },
  {
    id: "git-branching-strategy-7",
    post: "git-branching-strategy",
    question: "트렁크 기반이나 GitLab Flow에서 말하는 upstream first는 무엇인가?",
    choices: [
      "릴리스 브랜치에서 먼저 고치고 main은 나중에 맞춘다",
      "원격 upstream 저장소에 먼저 푸시하고 로컬에 커밋한다",
      "수정을 main에 먼저 넣고 필요한 릴리스 브랜치로 cherry-pick한다",
      "포크보다 원본 저장소의 PR을 먼저 리뷰한다",
    ],
    answer: 2,
    explanation:
      "main에 먼저 넣어야 다음 버전에서 수정이 빠지는 일이 없다. 릴리스 브랜치에는 cherry-pick -x로 복사해 원본 해시를 남긴다. Git Flow는 반대로 release에서 고치고 develop으로 돌려보내는데, 어느 쪽이든 한 방향으로만 흐르게 정한다.",
    anchor: "릴리스-브랜치의-수정은-cherry-pick으로-돌려보낸다",
  },
];
