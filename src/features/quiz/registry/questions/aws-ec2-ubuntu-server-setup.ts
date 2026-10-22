import type { QuizQuestion } from "../types";

export const AWS_EC2_UBUNTU_SERVER_SETUP: QuizQuestion[] = [
  {
    id: "aws-ec2-ubuntu-server-setup-1",
    post: "aws-ec2-ubuntu-server-setup",
    question: "80과 443을 한 번에 열겠다고 보안 그룹에 `80-443`, `0.0.0.0/0` 규칙을 넣었다. 어떤 문제가 있나?",
    choices: [
      "443은 범위 끝이라 열리지 않는다",
      "IPv6 요청만 허용된다",
      "보안 그룹은 범위를 지원하지 않아 규칙이 무시된다",
      "81~442 사이의 포트까지 모두 세상에 열린다",
    ],
    answer: 3,
    explanation:
      "포트 범위는 양 끝을 포함한 그 사이 전부다. 80과 443만 열려면 규칙을 두 줄로 나눠야 한다. 범위 하나로 적으면 그 사이 포트에서 뜨는 프로세스가 모두 바깥에 노출된다.",
    anchor: "띄우기-전에-정하는-것들",
  },
  {
    id: "aws-ec2-ubuntu-server-setup-2",
    post: "aws-ec2-ubuntu-server-setup",
    question: "sudoers 파일을 visudo -c로 검사하지 않고 문법이 틀린 채 /etc/sudoers.d/에 넣으면 어떻게 될 수 있나?",
    choices: [
      "그 파일만 무시되고 나머지는 정상이다",
      "sudo가 설정을 읽지 못해 다른 계정의 sudo까지 막힐 수 있다",
      "다음 재부팅 때 자동으로 고쳐진다",
      "해당 사용자만 root가 된다",
    ],
    answer: 1,
    explanation:
      "sudo는 설정 파일 전체를 읽다가 문법 오류를 만나면 실패할 수 있어서, ubuntu 계정의 sudo까지 쓸 수 없게 된다. 그러면 Session Manager나 볼륨을 떼어 고치는 수밖에 없다. 그래서 visudo -cf로 검사를 통과한 파일만 넣는다.",
    anchor: "첫-접속과-계정-정리",
  },
  {
    id: "aws-ec2-ubuntu-server-setup-3",
    post: "aws-ec2-ubuntu-server-setup",
    question: "Ubuntu의 unattended-upgrades 기본 설정이 자동으로 까는 것은?",
    choices: [
      "-security(와 ESM 보안) 저장소의 업데이트",
      "-updates를 포함한 모든 업데이트",
      "-proposed 저장소의 업데이트",
      "커널 업데이트와 자동 재부팅",
    ],
    answer: 0,
    explanation:
      "50unattended-upgrades의 Allowed-Origins에서 -security와 ESM 보안 저장소만 켜져 있고 -updates는 주석이다. 자동 재부팅(Automatic-Reboot)도 기본으로 꺼져 있어서, 재부팅이 필요하면 /var/run/reboot-required를 보고 정한다.",
    anchor: "보안-패치는-매일-저절로",
  },
  {
    id: "aws-ec2-ubuntu-server-setup-4",
    post: "aws-ec2-ubuntu-server-setup",
    question: "메모리 1GiB 인스턴스에서 배포 중 빌드를 돌리다 앱이 죽고 Out of memory 로그가 남았다. 스왑 파일을 만들면 무엇이 달라지나?",
    choices: [
      "메모리가 2배로 빨라진다",
      "빌드가 메모리를 쓰지 않게 된다",
      "순간적으로 넘친 메모리를 디스크로 밀어 OOM으로 죽는 대신 느려진다",
      "OOM killer가 영구히 꺼진다",
    ],
    answer: 2,
    explanation:
      "스왑이 있으면 오래 안 쓴 메모리를 디스크로 밀어 순간 초과를 받아 낸다. 느려지지만 프로세스가 죽지는 않는다. 근본 해결은 빌드를 CI로 옮기고, 스왑 사용이 계속 높으면 인스턴스를 키우는 것이다.",
    anchor: "메모리-1gib-서버에는-스왑을-둔다",
  },
  {
    id: "aws-ec2-ubuntu-server-setup-5",
    post: "aws-ec2-ubuntu-server-setup",
    question: "원격 서버에서 ufw allow OpenSSH 없이 sudo ufw enable을 쳤다. 어떻게 되나?",
    choices: [
      "보안 그룹이 22번을 허용하므로 아무 문제가 없다",
      "ufw가 SSH를 자동으로 감지해 허용한다",
      "지금 세션까지 즉시 끊기고 ufw는 다시 꺼진다",
      "기본 인바운드가 거부라 새 SSH 접속이 막힌다",
    ],
    answer: 3,
    explanation:
      "ufw의 기본 인바운드 정책은 거부라, 허용 규칙이 없으면 보안 그룹을 통과한 SSH도 OS에서 막힌다. 지금 세션은 conntrack 덕분에 잠시 살아 있을 수 있지만 새 접속은 안 된다. Session Manager나 직렬 콘솔로 들어가 ufw disable로 되돌린다.",
    anchor: "ufw는-켜기-전에-ssh부터-연다",
  },
  {
    id: "aws-ec2-ubuntu-server-setup-6",
    post: "aws-ec2-ubuntu-server-setup",
    question: "logrotate에 delaycompress를 켰다. 첫 회전 직후 디렉터리에 보이는 것은?",
    choices: [
      "app.log와 app.log.1.gz",
      "app.log와 압축되지 않은 app.log.1",
      "app.log.gz 하나",
      "app.log만 남고 이전 로그는 지워진다",
    ],
    answer: 1,
    explanation:
      "delaycompress는 바로 직전 회전 파일의 압축을 다음 회전 때로 미룬다. 그래서 첫 회전 뒤에는 app.log.1이 그대로 있고, 다음 회전에서 app.log.2.gz가 된다. 직전 파일을 아직 쓰고 있을 수 있는 프로그램을 배려하는 옵션이다.",
    anchor: "로그가-디스크를-채우지-않게",
  },
  {
    id: "aws-ec2-ubuntu-server-setup-7",
    post: "aws-ec2-ubuntu-server-setup",
    question: "IMDSv2를 필수로 두면 SSRF 공격에 강해지는 이유는?",
    choices: [
      "메타데이터 주소가 바뀌어서",
      "자격 증명을 받으려면 먼저 PUT으로 받은 세션 토큰을 헤더에 붙여야 해서",
      "인스턴스 역할을 쓸 수 없게 돼서",
      "모든 메타데이터 요청이 HTTPS로 암호화돼서",
    ],
    answer: 1,
    explanation:
      "IMDSv1은 GET 한 번으로 임시 자격 증명이 나와서 단순한 SSRF로도 키를 가져갈 수 있었다. IMDSv2는 PUT으로 토큰을 받고 그 토큰을 헤더에 붙여야 하고, hop limit으로 토큰이 인스턴스 밖으로 나가는 것도 막는다. 주소는 그대로 169.254.169.254다.",
    anchor: "서버-밖에서-지켜보고-서버-밖에-남긴다",
  },
];
