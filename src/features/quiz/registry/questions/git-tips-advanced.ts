import type { QuizQuestion } from "../types";

export const GIT_TIPS_ADVANCED: QuizQuestion[] = [
  {
    id: "git-tips-advanced-1",
    post: "git-tips-advanced",
    question: "good과 bad 사이에 커밋이 1,000개 있다. git bisect로 범인을 찾는 데 대략 몇 번 테스트하나?",
    choices: ["약 10번", "약 100번", "약 500번", "약 32번"],
    answer: 0,
    explanation:
      "bisect는 테스트할 때마다 후보를 절반으로 줄이는 이진 탐색이라 log₂1000, 즉 10번 안팎이면 하나만 남는다. 500번은 하나씩 확인할 때의 평균이고, 32번은 제곱근에 가까운 값이라 관계가 없다.",
    anchor: "200개-커밋을-여덟-번-만에-좁힌다",
  },
  {
    id: "git-tips-advanced-2",
    post: "git-tips-advanced",
    question: "git bisect run에 넘긴 스크립트가 빌드가 깨진 커밋에서 exit 125로 끝나면 어떻게 되나?",
    choices: [
      "그 커밋을 bad로 판정한다",
      "그 커밋을 skip하고 다른 커밋을 고른다",
      "bisect 전체를 멈춘다",
      "그 커밋을 good으로 판정한다",
    ],
    answer: 1,
    explanation:
      "bisect run은 종료 코드 0을 good, 125를 skip, 그 밖의 1~127을 bad로 본다. 128 이상이면 bisect 자체를 멈춘다. 빌드가 안 되는 커밋을 bad로 처리하면 엉뚱한 커밋을 범인으로 지목하니 125로 건너뛰게 만든다.",
    anchor: "테스트-스크립트로-bisect를-자동으로-돌린다",
  },
  {
    id: "git-tips-advanced-3",
    post: "git-tips-advanced",
    question: "git cherry-pick A..B를 실행했다. 어떤 커밋들이 들어오나?",
    choices: [
      "A부터 B까지 모두",
      "A와 B 두 개만",
      "A는 빼고 A 다음부터 B까지",
      "B는 빼고 A부터 B 직전까지",
    ],
    answer: 2,
    explanation:
      "A..B는 B에서 닿을 수 있지만 A에서는 닿을 수 없는 커밋이라 A 자신은 빠진다. A까지 포함하려면 A^..B처럼 A의 부모부터 센다. 범위 cherry-pick에서 가장 자주 틀리는 부분이다.",
    anchor: "커밋-하나만-가져오는-cherry-pick",
  },
  {
    id: "git-tips-advanced-4",
    post: "git-tips-advanced",
    question: "feature 브랜치 작업 중에 git worktree add ../hotfix release/1.0을 했다. 이미 다른 worktree에서 release/1.0을 꺼내 둔 상태라면?",
    choices: [
      "두 폴더가 같은 브랜치를 함께 쓰며 자동으로 동기화된다",
      "release/1.0의 복사본 브랜치가 자동으로 만들어진다",
      "기존 worktree가 지워지고 새 폴더로 옮겨진다",
      "이미 다른 worktree에서 쓰는 브랜치라며 거부한다",
    ],
    answer: 3,
    explanation:
      "브랜치 하나는 한 작업 폴더에서만 꺼낼 수 있다. 두 곳에서 같은 브랜치를 움직이면 한쪽의 작업 폴더가 브랜치와 어긋나기 때문이다. 새 브랜치가 필요하면 -b로 만들어 꺼낸다.",
    anchor: "브랜치를-바꾸지-않고-다른-폴더에서-일한다",
  },
  {
    id: "git-tips-advanced-5",
    post: "git-tips-advanced",
    question: "포매터가 따옴표와 세미콜론까지 바꾼 커밋 때문에 git blame이 쓸모없어졌다. 가장 알맞은 대응은?",
    choices: [
      "그 커밋 해시를 .git-blame-ignore-revs에 적고 blame.ignoreRevsFile로 지정한다",
      "git blame -w를 쓴다",
      "포매팅 커밋을 revert한다",
      "git blame -L로 범위를 줄인다",
    ],
    answer: 0,
    explanation:
      "-w는 공백만 바뀐 변경을 무시하므로 따옴표나 세미콜론이 바뀐 줄에는 효과가 없다. 해당 커밋을 blame에서 건너뛰게 하면 그 이전 커밋이 보이고, GitHub의 blame 화면도 같은 파일을 인식한다. revert하면 포매팅을 되돌릴 뿐 문제를 풀지 못한다.",
    anchor: "이-줄은-누가-왜-바꿨나",
  },
  {
    id: "git-tips-advanced-6",
    post: "git-tips-advanced",
    question: "이미 코드에서 사라진 함수 호출이 언제 지워졌는지 찾고 싶다. 가장 알맞은 명령은?",
    choices: [
      "git blame으로 그 줄을 찾는다",
      "git log -S \"호출 문자열\"로 그 문자열의 개수가 바뀐 커밋을 찾는다",
      "git grep으로 현재 코드에서 찾는다",
      "git shortlog -sn으로 작성자를 본다",
    ],
    answer: 1,
    explanation:
      "blame과 grep은 지금 있는 줄만 다루니 이미 지워진 코드는 찾지 못한다. pickaxe 옵션 -S는 문자열이 생기거나 사라진 커밋을 찾아 준다. 같은 줄 안의 수정까지 잡으려면 정규식으로 diff를 거르는 -G를 쓴다.",
    anchor: "코드가-생기고-사라진-커밋을-찾는다",
  },
  {
    id: "git-tips-advanced-7",
    post: "git-tips-advanced",
    question: "접근할 수 없는 저장소에 커밋 두 개를 작성자와 메시지까지 그대로 넘기려 한다. 받는 쪽이 git format-patch로 만든 파일을 적용할 때 알맞은 명령은?",
    choices: [
      "git apply로 적용한다. 작성자와 메시지까지 커밋으로 만들어 준다",
      "git am으로 적용한다. 패치마다 원래 작성자와 메시지를 살린 커밋이 생긴다",
      "git cherry-pick에 패치 파일 경로를 준다",
      "git apply --check로 적용한다. 적용하면서 충돌도 표시해 준다",
    ],
    answer: 1,
    explanation:
      "format-patch 파일은 메일 형식이라 작성자, 메시지, diff가 들어 있고 git am이 이를 읽어 커밋으로 다시 만든다. git apply는 diff만 작업 트리에 적용하고 커밋하지 않으며, --check는 아무것도 바꾸지 않고 적용 가능 여부만 알려 준다.",
    anchor: "커밋을-파일로-주고받는-format-patch와-am",
  },
];
