import type { QuizQuestion } from "../types";

export const GIT_REMOTE_COLLABORATION: QuizQuestion[] = [
  {
    id: "git-remote-collaboration-1",
    post: "git-remote-collaboration",
    question: "동료가 방금 원격 main에 푸시했는데, 내 git status는 여전히 \"Your branch is up to date with 'origin/main'\"이라고 한다. 왜 그럴까?",
    choices: [
      "git status는 원격 저장소에 직접 물어보지 않고 마지막 fetch 때 기록한 origin/main과 비교하기 때문이다",
      "동료의 푸시가 아직 원격에서 처리 중이기 때문이다",
      "origin/main은 원격 main과 실시간으로 동기화되지만 화면 갱신이 늦기 때문이다",
      "upstream이 설정되지 않아 비교 대상이 없기 때문이다",
    ],
    answer: 0,
    explanation:
      "origin/main은 마지막으로 fetch나 push를 했을 때 원격 main이 가리키던 커밋을 적어 둔 사진이다. fetch를 하기 전까지는 원격이 바뀌어도 그대로라서 ahead, behind 숫자도 옛 기준으로 나온다. upstream이 없으면 아예 비교 문구가 나오지 않는다.",
    anchor: "원격-추적-브랜치는-마지막으로-본-원격의-사진이다",
  },
  {
    id: "git-remote-collaboration-2",
    post: "git-remote-collaboration",
    question: "git fetch와 git pull의 차이로 옳은 것은?",
    choices: [
      "fetch는 내 브랜치까지 합치고, pull은 원격 추적 브랜치만 옮긴다",
      "fetch는 원격 추적 브랜치만 옮기고 내 브랜치는 그대로 두며, pull은 그 뒤에 merge나 rebase까지 한다",
      "fetch는 태그만, pull은 브랜치만 받아 온다",
      "둘은 같은 명령이고 pull은 fetch의 별칭이다",
    ],
    answer: 1,
    explanation:
      "fetch는 원격의 새 커밋을 받아 origin/main 같은 원격 추적 브랜치만 옮기기 때문에 언제 해도 안전하다. pull은 fetch에 이어 설정에 따라 merge나 rebase로 지금 브랜치에 합친다.",
    anchor: "fetch는-가져오기만-pull은-가져와서-합친다",
  },
  {
    id: "git-remote-collaboration-3",
    post: "git-remote-collaboration",
    question: "--force-with-lease만 쓰고 있었는데도 동료 커밋을 덮어쓰는 사고가 났다. 가장 그럴듯한 원인과 대책은?",
    choices: [
      "--force-with-lease는 원래 조건 없이 덮어쓰므로 --force로 바꿔야 한다",
      "원격 저장소가 lease를 지원하지 않아서다. SSH 대신 HTTPS를 써야 한다",
      "IDE의 백그라운드 fetch가 origin 추적 브랜치를 동료 커밋까지 옮겨 lease 조건이 맞아 버렸다. --force-if-includes를 함께 쓴다",
      "push.default가 simple이라서다. matching으로 바꿔야 한다",
    ],
    answer: 2,
    explanation:
      "값을 생략한 --force-with-lease는 원격 추적 브랜치가 가리키는 커밋을 기대값으로 쓴다. 백그라운드 fetch로 그 값이 몰래 갱신되면 본 적 없는 커밋도 덮어쓰게 된다. Git 2.30의 --force-if-includes는 그 커밋이 내 브랜치 reflog에 있는지까지 확인해 이 구멍을 막는다.",
    anchor: "강제-푸시는-남의-커밋을-지운다",
  },
  {
    id: "git-remote-collaboration-4",
    post: "git-remote-collaboration",
    question: "git tag -a v1.0.0 -m \"Release\" 후 git push만 했더니 원격에 태그가 없다. 왜 그런가?",
    choices: [
      "주석 태그는 원격으로 보낼 수 없어서다",
      "git push는 기본으로 브랜치만 보내고 태그는 따로 밀어야 해서다",
      "태그를 만든 커밋이 아직 원격에 없어서다",
      "가벼운 태그만 자동으로 올라가서다",
    ],
    answer: 1,
    explanation:
      "브랜치를 밀어도 태그는 함께 가지 않는다. git push origin v1.0.0으로 하나를 밀거나, --follow-tags로 밀고 있는 커밋에 닿는 주석 태그를 함께 보낸다. --follow-tags는 가벼운 태그는 보내지 않는다.",
    anchor: "태그는-따로-밀어야-올라간다",
  },
  {
    id: "git-remote-collaboration-5",
    post: "git-remote-collaboration",
    question: "포크로 기여할 때 내 포크의 main을 원본의 최신 상태로 맞추는 방법으로 가장 알맞은 것은?",
    choices: [
      "git fetch upstream 후 git merge --ff-only upstream/main, 그리고 git push origin main",
      "git pull origin main을 여러 번 반복한다",
      "포크를 지우고 매번 새로 포크한다",
      "git push upstream main --force로 원본을 내 포크에 맞춘다",
    ],
    answer: 0,
    explanation:
      "원본을 upstream으로 등록해 두고 받아 온 뒤, 내 main을 앞으로 옮기고 내 포크(origin)에 민다. 포크의 main에 직접 커밋하지 않으면 이 동기화는 늘 fast-forward로 끝난다. origin에서 pull해서는 원본의 새 커밋이 들어오지 않는다.",
    anchor: "포크에서-기여하기",
  },
  {
    id: "git-remote-collaboration-6",
    post: "git-remote-collaboration",
    question: "fetch --prune 없이 오래 쓰던 저장소에서 git branch -vv를 쳤더니 [origin/feature/coupon: gone]이 보인다. 무슨 뜻인가?",
    choices: [
      "로컬 브랜치의 커밋이 모두 사라졌다",
      "원격 브랜치에 아직 푸시하지 않은 커밋이 있다",
      "그 브랜치가 원격에서 강제 푸시로 덮어쓰였다",
      "upstream으로 정해 둔 원격 브랜치가 원격에서 지워졌다",
    ],
    answer: 3,
    explanation:
      "gone은 upstream으로 연결한 원격 브랜치가 더 이상 없다는 표시다. PR이 머지되고 원격 브랜치가 지워진 경우가 대부분이라 로컬 브랜치도 정리하면 된다. 로컬 커밋은 그대로 남아 있다.",
    anchor: "끝난-브랜치-지우고-정리하기",
  },
  {
    id: "git-remote-collaboration-7",
    post: "git-remote-collaboration",
    question: "CI에서 최신 코드만 빌드하면 되는데 저장소 히스토리가 매우 크다. 변경 파일 비교 같은 히스토리 작업은 없다. 가장 빠른 선택은?",
    choices: [
      "--filter=blob:none 부분 clone",
      "sparse-checkout만 켠 일반 clone",
      "--depth 1 얕은 clone",
      "git clone --mirror",
    ],
    answer: 2,
    explanation:
      "최신 커밋 하나만 필요하면 히스토리를 잘라 받는 얕은 clone이 가장 빠르다. 부분 clone은 커밋과 트리를 모두 받으니 히스토리 작업이 있을 때 낫고, sparse-checkout만으로는 받는 양이 아니라 꺼내는 양만 준다.",
    anchor: "큰-저장소를-빨리-받기",
  },
];
