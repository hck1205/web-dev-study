import type { QuizQuestion } from "../types";

export const LINUX_PACKAGE_MANAGEMENT: QuizQuestion[] = [
  {
    id: "linux-package-management-1",
    post: "linux-package-management",
    question: "서버의 /usr/bin/rsync가 어느 패키지에서 왔는지 알고 싶다. 어떤 도구에 묻는 것이 맞나?",
    choices: [
      "apt search rsync",
      "apt-cache policy rsync",
      "dpkg -S /usr/bin/rsync",
      "apt show rsync",
    ],
    answer: 2,
    explanation:
      "이미 설치된 파일과 패키지의 관계는 낮은 층인 dpkg가 기록하고 있다. dpkg -S가 파일 경로로 패키지를 찾는다. apt-cache policy는 저장소에서 받을 수 있는 버전을 보여 줄 뿐 파일 소유를 답하지 않는다.",
    anchor: "패키지-관리자는-두-층이다",
  },
  {
    id: "linux-package-management-2",
    post: "linux-package-management",
    question: "Ubuntu 기본 저장소는 http로 패키지를 받는다. 중간에서 .deb를 바꿔치기해도 설치되지 않는 이유는?",
    choices: [
      "apt가 .deb 파일마다 따로 붙은 GPG 서명을 확인하기 때문이다",
      "서명된 InRelease에 목록의 해시가, 목록에 .deb의 SHA256이 있어 해시 사슬이 맞지 않기 때문이다",
      "dpkg가 설치 전에 패키지 작성자에게 확인 요청을 보내기 때문이다",
      "Ubuntu 미러는 사실 모두 HTTPS로 자동 전환되기 때문이다",
    ],
    answer: 1,
    explanation:
      "apt는 저장소 꼭대기의 InRelease 하나만 서명을 확인하고, 거기서 해시를 따라 Packages와 각 .deb까지 검증한다. 파일 하나하나에 서명이 붙는 것은 RPM 쪽 방식이다.",
    anchor: "서명이-지키는-것과-apt-install이-하는-일",
  },
  {
    id: "linux-package-management-3",
    post: "linux-package-management",
    question: "서드파티 저장소 키가 만료됐는데 CI의 apt-get update는 종료 코드 0으로 끝났다. 무슨 일이 일어난 것인가?",
    choices: [
      "키가 만료돼도 apt는 서명 확인을 건너뛰고 새 목록을 받는다",
      "그 저장소만 갱신되지 않고 옛 목록을 그대로 쓴다는 경고(W)만 찍혔다",
      "apt가 자동으로 새 키를 받아 와 문제가 해결됐다",
      "다른 저장소의 키로 대신 확인해 통과했다",
    ],
    answer: 1,
    explanation:
      "서명 확인 실패는 오류가 아니라 경고로 처리되고 \"previous index files will be used\"로 옛 목록을 계속 쓴다. 그래서 몇 달 지난 목록으로 설치하다 404를 맞는다. --error-on=any를 붙이면 종료 코드가 100이 되어 실패로 잡힌다.",
    anchor: "서명이-지키는-것과-apt-install이-하는-일",
  },
  {
    id: "linux-package-management-4",
    post: "linux-package-management",
    question: "apt-key add 대신 signed-by로 키를 저장소에 묶으라고 바뀐 이유로 맞는 것은?",
    choices: [
      "signed-by가 서명 확인 속도를 빠르게 해서",
      "apt-key로 넣은 키는 모든 저장소에 유효해서, 서드파티 키 하나가 새면 공식 패키지를 사칭할 수 있어서",
      "apt-key는 RSA 키를 지원하지 않아서",
      "signed-by를 쓰면 HTTPS가 필요 없어져서",
    ],
    answer: 1,
    explanation:
      "전체 키링에 들어간 키는 어느 저장소의 서명이든 통과시킨다. signed-by는 키를 그 저장소에만 쓰게 해서 키가 새도 피해 범위가 그 저장소로 줄어든다.",
    anchor: "저장소-한-줄을-읽는다",
  },
  {
    id: "linux-package-management-5",
    post: "linux-package-management",
    question: "docker-ce를 29.8.x의 패치는 받되 29.9로는 넘어가지 않게 하고 싶다. 가장 맞는 방법은?",
    choices: [
      "apt-mark hold docker-ce",
      "apt-get upgrade 대신 apt full-upgrade를 쓴다",
      "/etc/apt/preferences.d에 Pin: version 5:29.8.* 를 둔다",
      "unattended-upgrades의 Allowed-Origins에 Docker 저장소를 넣는다",
    ],
    answer: 2,
    explanation:
      "hold는 지금 버전에서 꼼짝 못 하게 묶어서 29.8의 패치도 막는다. 버전 범위를 정하는 것은 pin이 한다. 우선순위를 1000 넘게 주면 더 높은 버전이 깔려 있을 때 다운그레이드까지 한다는 점도 알아 둔다.",
    anchor: "올라가면-안-되는-패키지를-묶는다",
  },
  {
    id: "linux-package-management-6",
    post: "linux-package-management",
    question: "Ubuntu 기본 설정의 unattended-upgrades에 대해 맞는 설명은?",
    choices: [
      "-updates 포켓과 모든 서드파티 저장소까지 매일 올린다",
      "보안 포켓만 올리고 서드파티 저장소는 대상이 아니다. 그래도 보안 패치에 든 DB 패키지는 재시작될 수 있다",
      "패키지를 올린 뒤 필요하면 기본으로 자동 재부팅한다",
      "apt-mark hold로 묶은 패키지도 보안 패치라면 올린다",
    ],
    answer: 1,
    explanation:
      "기본 Allowed-Origins에는 -security와 ESM 보안 포켓이 있고 -updates는 주석 처리되어 있다. 서드파티 저장소는 없다. 보안 패치 안의 패키지는 설치 스크립트가 서비스를 다시 띄우니 Package-Blacklist나 hold로 뺀다.",
    anchor: "자동-업데이트는-어디까지-올리나",
  },
  {
    id: "linux-package-management-7",
    post: "linux-package-management",
    question: "Dockerfile에서 rm -rf /var/lib/apt/lists/* 를 apt-get install과 같은 RUN에 두어야 하는 이유는?",
    choices: [
      "다른 RUN에서 지우면 앞 레이어에 들어간 목록이 이미지 크기에서 빠지지 않아서",
      "같은 RUN이 아니면 rm 명령이 권한 오류로 실패해서",
      "apt-get install이 목록을 지워야 설치를 끝내서",
      "목록이 남아 있으면 컨테이너가 시작할 때마다 apt update가 돌아서",
    ],
    answer: 0,
    explanation:
      "이미지 레이어는 쌓이기만 해서 뒤 레이어에서 지운 파일도 앞 레이어에는 남는다. 이 머신에서 목록은 53MB였다. update와 install을 묶는 것은 update 레이어만 캐시되어 옛 목록을 쓰는 문제도 함께 막는다.",
    anchor: "docker-이미지-안에서는-다르게-쓴다",
  },
];
