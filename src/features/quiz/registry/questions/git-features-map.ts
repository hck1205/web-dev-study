import type { QuizQuestion } from "../types";

export const GIT_FEATURES_MAP: QuizQuestion[] = [
  {
    id: "git-features-map-1",
    post: "git-features-map",
    question: "main에서 feat/search를 따서 커밋 하나를 했다. 그동안 main에는 새 커밋이 없었다. main에서 `git merge feat/search`를 하면?",
    choices: [
      "부모가 둘인 병합 커밋이 생긴다",
      "충돌 확인을 위해 병합이 멈춘다",
      "main 이름표만 feat/search의 커밋으로 옮겨지는 fast-forward로 끝난다",
      "feat/search 브랜치가 지워진다",
    ],
    answer: 2,
    explanation:
      "main이 feat/search의 조상이라 갈라진 곳이 없으니 이름표만 앞으로 옮기면 된다. 실제 출력에도 Fast-forward가 찍히고 새 커밋은 생기지 않는다. 병합 커밋은 양쪽에 각자 커밋이 있어 갈라졌을 때 만들어진다.",
    anchor: "처음-손에-익는-셋",
  },
  {
    id: "git-features-map-2",
    post: "git-features-map",
    question: "`git describe`가 `v1.0.0-2-gd139e24`를 출력했다. 이 값이 뜻하는 것은?",
    choices: [
      "v1.0.0 태그에서 커밋 두 개 뒤인 d139e24 커밋이다",
      "v1.0.0의 두 번째 패치 버전이다",
      "v1.0.0 태그가 두 번 붙은 커밋이다",
      "d139e24 브랜치의 두 번째 태그다",
    ],
    answer: 0,
    explanation:
      "가장 가까운 annotated 태그, 그 뒤로 쌓인 커밋 수, g와 지금 커밋의 짧은 해시를 이은 값이다. 버전 번호가 아니라 위치 정보라서 빌드에 넣어 두면 운영 서버가 어느 커밋인지 바로 찾는다.",
    anchor: "배포를-시작하면",
  },
  {
    id: "git-features-map-3",
    post: "git-features-map",
    question: "main의 버그 수정을 release/1.0에 `git cherry-pick -x`로 가져왔다. 두 브랜치에 있는 그 수정 커밋은 어떤 관계인가?",
    choices: [
      "같은 커밋을 두 브랜치가 함께 가리킨다",
      "내용은 같지만 부모가 달라 해시가 다른 별개의 커밋이다",
      "release/1.0 쪽은 원본 커밋으로 가는 링크일 뿐이다",
      "main의 원본 커밋이 release/1.0으로 옮겨지고 main에서는 사라진다",
    ],
    answer: 1,
    explanation:
      "cherry-pick은 원본이 만든 변경을 지금 자리에 다시 적용해 새 커밋을 만든다. 부모가 다르니 해시도 다르고, -x는 원본 해시를 메시지에 남겨 추적할 단서를 줄 뿐이다. 원본은 main에 그대로 있다.",
    anchor: "히스토리를-다듬게-되면",
  },
  {
    id: "git-features-map-4",
    post: "git-features-map",
    question: "이미 원격에 올린 feat/tags를 `git rebase main`했더니 같은 메시지의 커밋이 두 개 보인다. 왜 그런가?",
    choices: [
      "rebase가 커밋을 복사만 하고 원본을 지우지 않는 버그다",
      "main에 같은 커밋이 이미 있었기 때문이다",
      "stash가 자동으로 커밋을 하나 더 만들었기 때문이다",
      "로컬 브랜치는 새로 만든 커밋으로 옮겨졌고, 원격 추적 브랜치는 옛 커밋을 그대로 가리키기 때문이다",
    ],
    answer: 3,
    explanation:
      "rebase는 같은 변경으로 새 커밋을 만들고 로컬 브랜치 이름표만 옮긴다. origin/feat/tags는 마지막으로 본 원격 위치라 옛 커밋에 남는다. 그래서 이 브랜치를 다시 올리려면 --force-with-lease로 강제 푸시해야 한다.",
    anchor: "히스토리를-다듬게-되면",
  },
  {
    id: "git-features-map-5",
    post: "git-features-map",
    question: "쓰기 권한이 없는 오픈소스 저장소에 버그 수정을 보내려 한다. 알맞은 순서는?",
    choices: [
      "원본을 clone해서 바로 원본의 main에 push한다",
      "원본을 fork하고, 내 포크를 clone해 브랜치를 밀고, 원본으로 PR을 연다",
      "원본을 clone하고 stash로 변경을 원본에 보낸다",
      "원본에 태그를 붙여 관리자에게 알린다",
    ],
    answer: 1,
    explanation:
      "권한이 없으니 원본에 직접 밀 수 없다. 내 계정 아래 포크(origin)에 브랜치를 밀고 원본(upstream)으로 PR을 열어 관리자가 합치게 한다. 포크는 원본을 자동으로 따라가지 않아서 upstream을 등록해 받아 맞춘다.",
    anchor: "팀에-들어가면-바로-쓰는-셋",
  },
  {
    id: "git-features-map-6",
    post: "git-features-map",
    question: "stash를 두 번 했다(먼저 실험, 다음에 리팩터). `git stash pop`을 한 번 하면 무엇이 나오나?",
    choices: [
      "나중에 넣은 리팩터",
      "먼저 넣은 실험",
      "둘이 합쳐진 변경",
      "무엇을 꺼낼지 묻는 화면이 뜬다",
    ],
    answer: 0,
    explanation:
      "stash는 스택이라 나중에 넣은 것이 stash@{0}이 되고, pop은 stash@{0}을 꺼낸다. 먼저 넣은 실험은 stash@{1}로 밀려 있다가 다음 pop에서 나온다. 헷갈리지 않게 -m으로 이름을 붙여 둔다.",
    anchor: "팀에-들어가면-바로-쓰는-셋",
  },
];
