import type { QuizQuestion } from "../types";

export const DOCKER_NETWORK_VOLUME: QuizQuestion[] = [
  {
    id: "docker-network-volume-1",
    post: "docker-network-volume",
    question: "앱 컨테이너에서 localhost:5432로 다른 컨테이너의 Postgres에 접속하면 ECONNREFUSED가 나는 이유는?",
    choices: [
      "Postgres 컨테이너에 -p 5432:5432를 주지 않아서",
      "ufw가 5432 포트를 막고 있어서",
      "컨테이너 안의 localhost는 앱 컨테이너 자신의 루프백이라서",
      "기본 브리지는 TCP 연결을 허용하지 않아서",
    ],
    answer: 2,
    explanation:
      "컨테이너마다 네트워크 네임스페이스가 따로 있어서 localhost는 그 컨테이너 자신을 가리킨다. 앱 컨테이너의 5432에는 아무도 듣고 있지 않으니 바로 거절된다. -p는 호스트 바깥에서 들어오는 길을 여는 옵션이라 컨테이너끼리 통신과는 상관없다.",
    anchor: "컨테이너-안의-localhost는-컨테이너-자신이다",
  },
  {
    id: "docker-network-volume-2",
    post: "docker-network-volume",
    question: "사용자 정의 브리지 네트워크에서는 컨테이너 이름으로 접속되는데 기본 bridge에서는 안 되는 이유는?",
    choices: [
      "사용자 정의 네트워크에만 Docker 내장 DNS(127.0.0.11)가 붙기 때문에",
      "기본 bridge는 /etc/hosts를 읽지 않기 때문에",
      "기본 bridge의 컨테이너는 서로 IP로도 통신할 수 없기 때문에",
      "컨테이너 이름은 overlay 네트워크에서만 쓰이기 때문에",
    ],
    answer: 0,
    explanation:
      "사용자 정의 네트워크의 컨테이너는 resolv.conf에 내장 DNS 127.0.0.11이 들어가고, 이 DNS가 같은 네트워크의 컨테이너 이름을 IP로 풀어 준다. 기본 bridge 컨테이너끼리는 IP로는 통신되지만 이름 해석은 레거시 --link로만 됐다.",
    anchor: "이름으로-찾아가는-사용자-정의-브리지",
  },
  {
    id: "docker-network-volume-3",
    post: "docker-network-volume",
    question: "ufw에서 5432를 막았는데도 docker run -p 5432:5432 postgres로 띄운 DB에 인터넷에서 접속되는 이유는?",
    choices: [
      "Docker가 설치되면 ufw가 자동으로 꺼지기 때문에",
      "게시 포트로 온 패킷은 PREROUTING에서 DNAT되어 ufw 규칙이 있는 INPUT이 아니라 FORWARD로 가기 때문에",
      "docker-proxy가 iptables보다 먼저 패킷을 받기 때문에",
      "Postgres가 자체 방화벽을 꺼 두기 때문에",
    ],
    answer: 1,
    explanation:
      "DOCKER 체인의 DNAT이 목적지를 컨테이너 IP로 바꾸면 그 패킷은 호스트 것이 아니라서 FORWARD로 간다. ufw의 허용·차단 규칙은 INPUT 쪽에 있어 적용되지 않는다. 바깥에 열 필요가 없으면 -p 127.0.0.1:5432:5432처럼 루프백에 게시한다.",
    anchor: "-p-한-줄이-만드는-것",
  },
  {
    id: "docker-network-volume-4",
    post: "docker-network-volume",
    question: "리눅스에서 --add-host=host.docker.internal:host-gateway를 줬는데도 호스트의 서비스에 연결이 거부된다. 가장 먼저 의심할 것은?",
    choices: [
      "host-gateway가 리눅스에서 지원되지 않는다",
      "컨테이너의 /etc/resolv.conf가 비어 있다",
      "-p 옵션을 주지 않았다",
      "호스트 서비스가 127.0.0.1에만 묶여 있어 docker0 주소(172.17.0.1)로 온 연결을 받지 않는다",
    ],
    answer: 3,
    explanation:
      "host.docker.internal은 호스트의 브리지 게이트웨이 주소로 풀리므로, 패킷은 172.17.0.1로 도착한다. 서비스가 루프백에만 묶여 있으면 거절된다. 이 트래픽은 INPUT을 지나니 ufw에서 docker0를 허용해야 할 수도 있다.",
    anchor: "컨테이너에서-호스트로-가는-길",
  },
  {
    id: "docker-network-volume-5",
    post: "docker-network-volume",
    question: "-v 없이 postgres:16 컨테이너를 띄웠다가 docker rm 후 다시 띄우니 빈 DB가 나왔다. 실제로 일어난 일은?",
    choices: [
      "데이터가 쓰기 레이어에 있어서 디스크에서 완전히 지워졌다",
      "이미지의 VOLUME 선언 때문에 익명 볼륨에 남아 있지만, 새 컨테이너가 다른 익명 볼륨을 받았다",
      "Postgres가 시작할 때마다 데이터 디렉터리를 초기화한다",
      "docker rm이 이미지의 레이어까지 지웠다",
    ],
    answer: 1,
    explanation:
      "Postgres 이미지는 데이터 경로에 VOLUME을 선언해 두어서 -v 없이도 익명 볼륨이 생긴다. docker rm은 그 볼륨을 지우지 않지만, 새 컨테이너는 새 익명 볼륨을 받으니 빈 DB처럼 보인다. 예전 데이터는 docker volume ls -f dangling=true에서 주인 없는 볼륨으로 보인다.",
    anchor: "docker-rm-하면-데이터가-왜-사라지나",
  },
  {
    id: "docker-network-volume-6",
    post: "docker-network-volume",
    question: "docker run -v \"$PWD\":/app node:22 npm install 뒤 호스트에서 node_modules를 지울 수 없다. 원인과 해결로 맞는 것은?",
    choices: [
      "컨테이너가 root(UID 0)로 파일을 만들어서다. --user \"$(id -u):$(id -g)\"로 돌린다",
      "바인드 마운트는 항상 읽기 전용이라서다. :rw를 붙인다",
      "named volume을 써야 호스트에서 지울 수 있다",
      "Ubuntu의 AppArmor가 막아서다. :Z를 붙인다",
    ],
    answer: 0,
    explanation:
      "컨테이너와 호스트는 같은 커널을 쓰고 파일 주인을 숫자 UID로 기록하므로, 컨테이너의 root가 만든 파일은 호스트에서도 root 소유다. 컨테이너를 호스트 사용자 UID로 돌리거나 chown으로 되돌린다. :z·:Z는 SELinux 라벨 옵션이라 Ubuntu와는 관계가 없다.",
    anchor: "바인드-마운트와-uid",
  },
  {
    id: "docker-network-volume-7",
    post: "docker-network-volume",
    question: "돌고 있는 Postgres의 볼륨을 임시 컨테이너와 tar로 바로 백업하면 생길 수 있는 문제는?",
    choices: [
      "tar가 볼륨 경로를 찾지 못한다",
      "백업 파일의 소유자가 모두 root로 바뀐다",
      "쓰는 도중의 파일이 섞여 일관성이 깨진 사본이 될 수 있다",
      "볼륨이 읽기 전용으로 바뀌어 DB가 멈춘다",
    ],
    answer: 2,
    explanation:
      "DB가 계속 파일을 쓰는 중에 복사하면 서로 다른 시점의 파일이 섞일 수 있다. 그래서 컨테이너를 멈추고 뜨거나, pg_dump 같은 논리 백업을 쓰는 편이 안전하다. alpine의 tar는 UID를 숫자 그대로 보존하므로 소유자 문제는 생기지 않는다.",
    anchor: "볼륨을-tar로-백업하고-되살리기",
  },
];
