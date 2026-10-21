import type { QuizQuestion } from "../types";

export const LINUX_FILES_PERMISSIONS: QuizQuestion[] = [
  {
    id: "linux-files-permissions-1",
    post: "linux-files-permissions",
    question:
      "index.html은 -rw-r--r--인데 nginx가 403과 함께 \"(13: Permission denied)\"를 남긴다. 가장 먼저 의심할 것은?",
    choices: [
      "index.html에 실행 권한(x)이 없다",
      "nginx 워커 사용자가 상위 디렉터리 중 하나를 지나갈 x 권한이 없다",
      "파일 크기가 너무 커서 nginx가 거부했다",
      "umask가 022라서 다른 사용자가 읽지 못한다",
    ],
    answer: 1,
    explanation:
      "파일을 열려면 경로의 모든 상위 디렉터리에 x가 있어야 한다. Ubuntu 21.04 이후 홈 디렉터리는 750이라 www-data가 들어가지 못한다. 정적 파일을 읽는 데 파일의 x는 필요 없다.",
    anchor: "경로의-모든-칸을-지나야-파일에-닿는다",
  },
  {
    id: "linux-files-permissions-2",
    post: "linux-files-permissions",
    question: "권한이 ---r--r--인 파일을 소유자 본인이 읽으려 하면 어떻게 되나?",
    choices: [
      "그룹과 나머지 칸에 r이 있으니 읽을 수 있다",
      "소유자는 언제나 읽을 수 있다",
      "소유자 칸이 골라지고 거기에 r이 없어서 거부된다",
      "커널이 세 칸을 OR로 합쳐 r--로 판단한다",
    ],
    answer: 2,
    explanation:
      "커널은 프로세스가 주인이면 소유자 칸 하나만 고르고, 다른 칸은 보지 않는다. 세 칸을 합쳐서 판단한다는 건 흔한 오해다.",
    anchor: "커널은-세-칸-중-하나만-고른다",
  },
  {
    id: "linux-files-permissions-3",
    post: "linux-files-permissions",
    question: "umask가 111인 셸에서 touch로 새 파일을 만들면 권한은?",
    choices: ["555", "666", "644", "000"],
    answer: 1,
    explanation:
      "umask는 빼기가 아니라 요청 & ~umask로 비트를 지운다. touch는 666을 요청하는데 거기엔 원래 x 비트가 없으니 지울 것이 없어 666이 된다.",
    anchor: "새-파일의-권한은-umask가-깎는다",
  },
  {
    id: "linux-files-permissions-4",
    post: "linux-files-permissions",
    question:
      "/tmp처럼 1777인 디렉터리에서 bob이 alice의 파일을 rm 하면 \"Operation not permitted\"가 난다. 이유는?",
    choices: [
      "파일 자체가 alice만 쓸 수 있는 권한이라서",
      "디렉터리에 w 권한이 없어서",
      "sticky 비트가 있으면 파일 주인이나 디렉터리 주인만 지울 수 있어서",
      "setgid 비트가 그룹이 다른 사용자의 삭제를 막아서",
    ],
    answer: 2,
    explanation:
      "보통은 디렉터리에 w만 있으면 파일 권한과 상관없이 지울 수 있다. sticky 비트가 여기에 주인만 지울 수 있다는 조건을 붙이고, 그래서 에러도 EACCES가 아니라 EPERM이다.",
    anchor: "세-개의-특수-비트",
  },
  {
    id: "linux-files-permissions-5",
    post: "linux-files-permissions",
    question:
      "setfacl로 bob에게 읽기를 준 파일에 배포 스크립트가 chmod 600을 했다. getfacl에 user:bob:r-- #effective:---가 보인다. 무슨 일이 일어났나?",
    choices: [
      "chmod가 ACL 항목을 모두 지웠다",
      "chmod가 그룹 칸 대신 ACL mask를 ---로 바꿔 bob의 항목이 무력해졌다",
      "bob의 그룹 목록이 갱신되지 않았다",
      "ACL은 600 권한에서만 동작한다",
    ],
    answer: 1,
    explanation:
      "ACL이 있으면 ls의 그룹 칸은 mask를 뜻하고, chmod는 그 mask를 바꾼다. 항목은 남아 있지만 effective 권한이 사라져 bob은 읽지 못한다.",
    anchor: "한-사람만-더-허락하는-acl",
  },
  {
    id: "linux-files-permissions-6",
    post: "linux-files-permissions",
    question:
      "usermod -aG deploy bob을 했는데 bob이 이미 열어 둔 셸에서는 여전히 Permission denied다. 무엇을 확인하나?",
    choices: [
      "/proc/<PID>/status의 Groups 줄. 그룹 목록은 로그인할 때 프로세스에 들어간다",
      "/etc/group 파일이 저장됐는지",
      "파일의 umask",
      "deploy 그룹의 GID가 1000 이상인지",
    ],
    answer: 0,
    explanation:
      "id bob은 설정 파일을 읽어 새 그룹을 보여 주지만, 떠 있는 프로세스는 옛 목록을 갖고 있다. 다시 로그인하거나 newgrp, 서비스는 재시작해야 반영된다.",
    anchor: "그룹에-넣었는데-여전히-거부된다",
  },
  {
    id: "linux-files-permissions-7",
    post: "linux-files-permissions",
    question:
      "큰 PVC를 붙이고 fsGroup을 준 Pod가 ContainerCreating에서 몇 분씩 머문다. 가장 그럴듯한 원인과 대처는?",
    choices: [
      "이미지가 커서 그렇다. 이미지를 줄인다",
      "kubelet이 볼륨의 모든 파일 그룹을 재귀로 바꾸고 있다. fsGroupChangePolicy: OnRootMismatch를 쓴다",
      "runAsUser가 root라서 그렇다. runAsNonRoot를 켠다",
      "sticky 비트 때문에 마운트가 늦다. chmod -t를 한다",
    ],
    answer: 1,
    explanation:
      "기본 정책인 Always는 마운트할 때마다 볼륨 안 파일 전체의 그룹을 바꾼다. OnRootMismatch는 최상위 디렉터리가 이미 맞으면 이 작업을 건너뛴다.",
    anchor: "컨테이너에서는-숫자가-맞아야-한다",
  },
];
