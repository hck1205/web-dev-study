import type { QuizQuestion } from "../types";

export const LINUX_USERS_GROUPS_SUDO: QuizQuestion[] = [
  {
    id: "linux-users-groups-sudo-1",
    post: "linux-users-groups-sudo",
    question: "비밀번호 해시를 /etc/passwd에서 /etc/shadow로 옮긴 이유는?",
    choices: [
      "passwd 파일이 커지면 로그인이 느려져서",
      "passwd는 UID를 이름으로 바꾸려고 모든 사용자가 읽어야 하는 파일이라, 해시를 root와 shadow 그룹만 읽는 파일로 떼어 내려고",
      "shadow 파일은 암호화되어 저장되기 때문에",
      "해시 알고리즘을 yescrypt로 바꾸려면 파일 형식이 달라야 해서",
    ],
    answer: 1,
    explanation:
      "ls -l이나 id가 숫자를 이름으로 바꾸려면 누구나 /etc/passwd를 읽어야 한다. 거기에 해시가 있으면 누구나 가져가 오프라인 대입 공격을 할 수 있다. shadow도 평문 파일이지만 권한이 640(root:shadow)이라 일반 사용자는 못 읽는다.",
    anchor: "계정은-텍스트-파일-세-개에-적혀-있다",
  },
  {
    id: "linux-users-groups-sudo-2",
    post: "linux-users-groups-sudo",
    question: "퇴사자 kim(UID 1001)을 userdel로 지운 뒤 새 직원을 useradd로 만들었더니 kim이 남긴 파일의 주인이 새 직원이 됐다. 왜인가?",
    choices: [
      "userdel이 kim의 파일을 다음 계정에 넘기도록 설정되어 있어서",
      "새 직원의 기본 그룹이 kim 그룹과 같아서",
      "파일 시스템이 지운 사용자의 파일을 자동으로 root에게 넘기고, root가 새 직원에게 넘겨서",
      "useradd가 범위 안에서 가장 큰 UID 다음 번호를 주는데, kim이 가장 컸으므로 1001이 다시 나왔고 파일에는 숫자만 남아 있어서",
    ],
    answer: 3,
    explanation:
      "커널과 파일 시스템은 이름이 아니라 UID 숫자로 주인을 기억한다. 계정을 지워도 파일에는 1001이 남고, useradd는 가장 큰 UID 다음을 주므로 같은 번호가 재사용된다. 그래서 지우기 전에 find -uid로 그 UID의 파일을 정리한다.",
    anchor: "uid는-숫자라서-다시-쓰일-수-있다",
  },
  {
    id: "linux-users-groups-sudo-3",
    post: "linux-users-groups-sudo",
    question: "퇴사자 계정을 `usermod -L`로 잠갔는데 그 사람이 SSH로 계속 들어온다. 인증 방법과 상관없이 막으려면?",
    choices: [
      "usermod -e 1로 계정 만료일을 과거로 정한다",
      "passwd -d로 비밀번호를 지운다",
      "usermod -G ''로 보조 그룹을 모두 뺀다",
      "chage -M 0으로 비밀번호 최대 사용 일수를 0으로 정한다",
    ],
    answer: 0,
    explanation:
      "-L은 shadow 해시 앞에 !를 붙여 비밀번호 인증만 막는다. SSH 키 인증은 비밀번호를 보지 않아 통과한다. 계정 만료는 인증이 끝난 뒤 PAM account 단계에서 거절해서 키 로그인도 막는다. passwd -d는 오히려 비밀번호 없는 계정을 만든다.",
    anchor: "계정을-지우기-전에-잠그고-기다린다",
  },
  {
    id: "linux-users-groups-sudo-4",
    post: "linux-users-groups-sudo",
    question: "`sudo usermod -G docker jin`을 실행한 뒤 jin이 sudo를 쓸 수 없게 됐다. 이유는?",
    choices: [
      "docker 그룹은 sudo 그룹과 함께 가질 수 없다",
      "usermod를 실행하면 sudo 캐시가 지워진다",
      "-a 없이 -G를 쓰면 보조 그룹 목록을 통째로 바꿔서 sudo 그룹이 빠졌다",
      "그룹 변경은 재부팅 전까지 sudo에 반영되지 않는다",
    ],
    answer: 2,
    explanation:
      "usermod -G는 보조 그룹을 주어진 목록으로 바꾼다. 기존 sudo, adm이 빠지고 docker만 남는다. 추가하려면 항상 -aG를 쓴다. 그룹 변경은 재부팅이 아니라 다시 로그인하면 반영된다.",
    anchor: "useradd와-usermod에서-자주-밟는-것",
  },
  {
    id: "linux-users-groups-sudo-5",
    post: "linux-users-groups-sudo",
    question: "sudoers에 `dev ALL=(root) NOPASSWD: /usr/bin/find /var/log *`를 넣었다. 이 규칙이 위험한 이유는?",
    choices: [
      "NOPASSWD가 있으면 sudo 로그가 남지 않는다",
      "find의 -exec로 아무 프로그램이나 root로 실행할 수 있어 사실상 모든 명령을 허락한 것과 같다",
      "/var/log 아래 파일이 모두 dev 소유로 바뀐다",
      "와일드카드가 있으면 visudo가 문법 오류를 낸다",
    ],
    answer: 1,
    explanation:
      "허락한 명령이 다른 프로그램을 띄울 수 있으면 그걸로 셸을 얻는다. find -exec /bin/sh는 root 셸을 주고, 끝의 *가 그 인자까지 허락한다. NOPASSWD여도 sudo 로그는 남는다. 편집은 sudoedit으로, 명령은 인자까지 고정해 좁힌다.",
    anchor: "sudoers-문법과-visudo",
  },
  {
    id: "linux-users-groups-sudo-6",
    post: "linux-users-groups-sudo",
    question: "sshd 키 인증은 성공했는데 auth.log에 `Access denied for user dev by PAM account configuration`이 남고 로그인이 막혔다. PAM의 어느 단계가 막은 것인가?",
    choices: [
      "auth",
      "account",
      "password",
      "session",
    ],
    answer: 1,
    explanation:
      "auth는 누구인지 확인하는 단계라 키 인증으로 이미 통과했다. account는 이 계정이 지금 들어와도 되는지(만료 등)를 보는 단계로, 만료된 계정은 여기서 거절된다. password는 비밀번호 변경, session은 로그인 뒤 준비 단계다.",
    anchor: "pam이-인증-사이에-끼어든다",
  },
];
