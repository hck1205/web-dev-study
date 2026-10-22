import type { QuizQuestion } from "../types";

export const SSH_IN_PRACTICE: QuizQuestion[] = [
  {
    id: "ssh-in-practice-1",
    post: "ssh-in-practice",
    question: "ProxyJump로 배스천을 건너 앱 서버에 붙을 때, 앱 서버와의 사용자 인증은 어디서 이루어지나?",
    choices: [
      "배스천이 내 키를 받아서 대신 인증한다",
      "배스천에 저장해 둔 개인 키로 인증한다",
      "노트북과 앱 서버 사이에서, 배스천이 이어 준 채널 안에서 직접 인증한다",
      "배스천과 앱 서버가 서로 신뢰 관계를 맺어 인증 없이 들어간다",
    ],
    answer: 2,
    explanation:
      "ProxyJump는 배스천에 direct-tcpip 채널로 TCP만 이어 달라고 하고, 그 안에서 노트북이 앱 서버와 키 교환과 인증을 처음부터 다시 한다. 배스천은 암호문만 옮기니 키를 복사하거나 agent를 넘길 필요가 없다.",
    anchor: "배스천을-건너-들어간다",
  },
  {
    id: "ssh-in-practice-2",
    post: "ssh-in-practice",
    question: "`ssh -N -L 18961:127.0.0.1:8080 app`에서 127.0.0.1:8080은 어느 컴퓨터의 주소인가?",
    choices: [
      "노트북 자신",
      "터널의 끝인 app 서버에서 본 127.0.0.1, 즉 app 자신",
      "배스천",
      "SOCKS 프록시가 고르는 아무 주소",
    ],
    answer: 1,
    explanation:
      "-L의 목적지는 원격 sshd가 연결을 맺는 주소라서 원격에서 본 주소로 해석된다. 그래서 app의 127.0.0.1에서만 열린 관리 페이지를 노트북의 18961번으로 볼 수 있다.",
    anchor: "터널-세-가지--l--r--d",
  },
  {
    id: "ssh-in-practice-3",
    post: "ssh-in-practice",
    question: "agent에 키 일곱 개가 올라가 있고 맞는 키는 마지막이다. 접속하니 `Too many authentication failures`가 난다. 가장 알맞은 해결은?",
    choices: [
      "서버의 MaxAuthTries를 100으로 올린다",
      "ssh-agent를 끄고 비밀번호 로그인을 켠다",
      "known_hosts에서 그 호스트 줄을 지운다",
      "config에 그 호스트의 IdentityFile과 IdentitiesOnly yes를 적는다",
    ],
    answer: 3,
    explanation:
      "ssh가 agent의 키를 차례로 내밀다가 서버가 센 실패가 MaxAuthTries(기본 6)에 먼저 닿았다. 호스트별로 쓸 키만 내밀게 하면 처음 시도에 맞는 키가 나간다. 서버 한도를 올리는 건 대입 공격에 문을 넓히는 일이다.",
    anchor: "키는-ed25519로-passphrase는-agent에게",
  },
  {
    id: "ssh-in-practice-4",
    post: "ssh-in-practice",
    question: "sshd_config 본문에 `PasswordAuthentication no`를 썼는데 `sshd -T`가 yes를 보여 준다. 이유로 가장 그럴듯한 것은?",
    choices: [
      "맨 위 Include로 먼저 읽힌 sshd_config.d의 파일에 yes가 있어서, 처음 얻은 값이 이겼다",
      "sshd는 마지막 값을 쓰는데 파일 끝에 yes가 또 있다",
      "reload를 하지 않아서 sshd -T가 옛 값을 보여 준다",
      "PasswordAuthentication은 PAM이 켜져 있으면 무시된다",
    ],
    answer: 0,
    explanation:
      "sshd는 같은 옵션의 처음 값을 쓰고, Ubuntu의 기본 파일은 맨 위에서 sshd_config.d/*.conf를 Include한다. cloud-init이 만든 50-cloud-init.conf의 yes가 먼저 읽히면 본문의 no는 무시된다. sshd -T는 파일을 새로 읽어 계산하므로 reload와 상관없다.",
    anchor: "sshd_config를-단단하게",
  },
  {
    id: "ssh-in-practice-5",
    post: "ssh-in-practice",
    question: "배스천에서 `ssh -A`(agent 포워딩)를 쓰지 말라고 하는 이유는?",
    choices: [
      "개인 키 파일이 배스천의 디스크에 복사되기 때문이다",
      "접속 속도가 크게 느려지기 때문이다",
      "배스천의 root가 내가 접속해 있는 동안 내 agent 소켓으로 다른 서버에 서명을 받을 수 있기 때문이다",
      "known_hosts 검사가 꺼지기 때문이다",
    ],
    answer: 2,
    explanation:
      "-A를 켜면 배스천의 /tmp 아래에 agent 소켓이 생기고, 그 소켓을 열 수 있는 사람은 내 키로 서명을 받을 수 있다. 키 파일이 복사되지는 않지만 접속해 있는 동안은 내 이름으로 다른 서버에 들어갈 수 있다. 그래서 배스천은 ProxyJump로 건넌다.",
    anchor: "agent-포워딩을-쉽게-켜지-않는다",
  },
  {
    id: "ssh-in-practice-6",
    post: "ssh-in-practice",
    question: "맞는 키로 접속했는데 거절되고, 서버 로그에 `Authentication refused: bad ownership or modes for directory`가 찍혔다. 무엇을 고치나?",
    choices: [
      "서버의 호스트 키를 새로 만든다",
      "홈 디렉터리와 .ssh, authorized_keys가 남이 쓸 수 없게 권한을 줄인다",
      "MaxAuthTries를 올린다",
      "authorized_keys에 from= 옵션을 지운다",
    ],
    answer: 1,
    explanation:
      "StrictModes가 켜져 있으면 sshd는 authorized_keys와 그 위 디렉터리를 남이 쓸 수 있는지 검사하고, 그렇다면 키를 받지 않는다. 남이 쓸 수 있으면 authorized_keys를 바꿔치기할 수 있어서다. chmod go-w ~, chmod 700 ~/.ssh, chmod 600 authorized_keys로 맞춘다.",
    anchor: "permission-denied-publickey를-만났을-때",
  },
  {
    id: "ssh-in-practice-7",
    post: "ssh-in-practice",
    question: "배포 스크립트가 같은 서버에 짧은 ssh 명령을 수십 번 보내서 느리다. 연결을 열어 두고 재사용하게 하는 설정은?",
    choices: [
      "ServerAliveInterval",
      "StrictHostKeyChecking accept-new",
      "ForwardAgent yes",
      "ControlMaster auto와 ControlPersist",
    ],
    answer: 3,
    explanation:
      "ControlMaster는 첫 연결을 마스터로 열어 두고 뒤의 접속이 그 위에 채널만 열게 한다. 실습에서 ProxyJump를 거친 열 번 접속이 4.07초에서 0.47초로 줄었다. ServerAliveInterval은 끊김을 막는 설정이지 재사용과는 상관없다.",
    anchor: "느리고-자주-끊길-때",
  },
];
