import type { QuizQuestion } from "../types";

export const DOCKER_LOCAL_DEV_WORKFLOW: QuizQuestion[] = [
  {
    id: "docker-local-dev-workflow-1",
    post: "docker-local-dev-workflow",
    question:
      "Dockerfile에 COPY . . 로 소스를 넣고 컨테이너를 띄웠다. 편집기에서 src/server.js를 저장해도 응답이 그대로인 가장 근본적인 이유는?",
    choices: [
      "node가 캐시를 써서",
      "컨테이너가 보는 파일은 빌드 시점에 이미지 레이어에 구워진 복사본이라서",
      "포트 게시가 빠져서",
      ".dockerignore가 src를 막아서",
    ],
    answer: 1,
    explanation:
      "COPY로 넣은 소스는 이미지 레이어의 복사본이라 호스트 파일을 고쳐도 컨테이너는 모른다. 바인드 마운트나 compose watch로 파일이 들어오는 길을 따로 만들어야 하고, 그다음에 감시 도구가 다시 읽어야 반영된다.",
    anchor: "한-줄-고칠-때마다-이미지를-굽는-루프",
  },
  {
    id: "docker-local-dev-workflow-2",
    post: "docker-local-dev-workflow",
    question:
      "volumes에 ./:/app 과 /app/node_modules 두 줄을 둔 개발 환경에서 package.json에 패키지를 추가하고 이미지를 다시 구웠는데 Cannot find module이 계속 난다. 무엇을 해야 하나?",
    choices: [
      "호스트에서 npm install을 한다",
      "바인드 마운트를 읽기 전용으로 바꾼다",
      "docker compose up -V로 익명 볼륨을 새로 만들어 이미지 내용으로 채운다",
      "NODE_ENV를 development로 바꾼다",
    ],
    answer: 2,
    explanation:
      "이름 없이 경로만 쓴 /app/node_modules는 익명 볼륨이라 이미지를 다시 구워도 기존 볼륨이 다시 붙어 옛 의존성이 보인다. --renew-anon-volumes(-V)로 새로 만들어야 한다. 호스트에서 설치하면 맥에서 빌드한 네이티브 모듈이 섞일 수 있어 오히려 문제를 키운다.",
    anchor: "소스를-바인드-마운트로-꽂으면-생기는-일",
  },
  {
    id: "docker-local-dev-workflow-3",
    post: "docker-local-dev-workflow",
    question:
      "윈도 WSL2에서 프로젝트를 /mnt/c/work/api 에 두고 바인드 마운트했더니 개발 서버가 파일 변경을 전혀 알아채지 못한다. 가장 확실한 해결은?",
    choices: [
      "프로젝트를 WSL 안의 리눅스 파일 시스템(예: ~/projects)으로 옮긴다",
      "max_user_watches를 올린다",
      "컨테이너를 privileged로 띄운다",
      "compose 파일의 version을 올린다",
    ],
    answer: 0,
    explanation:
      "윈도 파일 시스템(/mnt/c)의 변경은 리눅스 쪽에 inotify 이벤트로 오지 않아 감시 도구가 놓친다. 폴링으로 버틸 수도 있지만 CPU를 더 쓰니, 프로젝트를 WSL 리눅스 파일 시스템에 두는 것이 확실하다. max_user_watches는 감시 수 상한 문제라 이 증상과는 다르다.",
    anchor: "파일-감시가-컨테이너-안까지-오지-않을-때",
  },
  {
    id: "docker-local-dev-workflow-4",
    post: "docker-local-dev-workflow",
    question: "compose watch 규칙에서 package-lock.json에 거는 action으로 알맞은 것은?",
    choices: [
      "sync: 파일만 컨테이너로 복사한다",
      "sync+restart: 복사하고 컨테이너를 재시작한다",
      "ignore: 감시하지 않는다",
      "rebuild: 이미지를 다시 굽고 컨테이너를 갈아 끼운다",
    ],
    answer: 3,
    explanation:
      "lock 파일이 바뀌면 이미지 안의 node_modules 자체가 달라져야 하므로 이미지를 다시 구워야 한다. lock 파일만 복사하면 의존성 설치는 일어나지 않아 컨테이너에는 여전히 옛 패키지가 있다.",
    anchor: "compose-watch-복사할-것과-다시-구울-것을-나눈다",
  },
  {
    id: "docker-local-dev-workflow-5",
    post: "docker-local-dev-workflow",
    question:
      "개발 이미지와 운영 이미지를 Dockerfile.dev와 Dockerfile 두 파일로 나누는 대신 한 파일에 dev·prod 스테이지를 두고 target으로 고르는 가장 큰 이유는?",
    choices: [
      "이미지 크기가 무조건 작아져서",
      "base 스테이지를 함께 써서 Node 버전과 lock 파일이 두 이미지에서 어긋나지 않아서",
      "target을 쓰면 빌드 캐시가 필요 없어서",
      "운영 이미지에도 디버거가 들어가서",
    ],
    answer: 1,
    explanation:
      "두 파일로 나누면 베이스 이미지 버전이나 시스템 패키지가 시간이 지나며 따로 바뀐다. 한 파일에서 base를 공유하면 차이는 dev와 prod 스테이지에 적은 것뿐이다. 디버거 같은 개발 도구는 dev 스테이지에만 있어 운영 이미지에는 들어가지 않는다.",
    anchor: "개발용과-운영용-이미지를-target으로-나눈다",
  },
  {
    id: "docker-local-dev-workflow-6",
    post: "docker-local-dev-workflow",
    question:
      "컨테이너에서 node --inspect src/server.js 로 띄우고 ports에 9229:9229를 게시했지만 VS Code가 붙지 못한다. 원인과 안전한 고침은?",
    choices: [
      "9229는 예약 포트다. 다른 포트를 쓴다",
      "디버거는 컨테이너에서 못 쓴다. 호스트에서 돌린다",
      "인스펙터가 컨테이너의 127.0.0.1에서만 기다린다. 컨테이너 안은 0.0.0.0으로 열고 호스트 게시는 127.0.0.1:9229:9229로 좁힌다",
      "인스펙터가 0.0.0.0에서 기다린다. 컨테이너 안을 127.0.0.1로 바꾼다",
    ],
    answer: 2,
    explanation:
      "--inspect의 기본 주소는 127.0.0.1이고 컨테이너 안의 루프백은 컨테이너 자신이라 게시한 포트로 들어온 연결이 닿지 않는다. 컨테이너 안은 0.0.0.0으로 열되, 인증 없는 디버거가 네트워크에 노출되지 않도록 호스트 쪽 게시는 루프백으로 제한한다.",
    anchor: "컨테이너-안-프로세스에-디버거-붙이기",
  },
  {
    id: "docker-local-dev-workflow-7",
    post: "docker-local-dev-workflow",
    question:
      "테스트를 컨테이너 안에서 돌리며 Testcontainers도 쓰려고 /var/run/docker.sock을 마운트했다. 공유 CI 러너에서 이 방식이 문제인 이유는?",
    choices: [
      "소켓을 마운트한 컨테이너는 호스트 root와 같은 권한을 얻기 때문이다",
      "소켓을 마운트하면 테스트가 느려지기 때문이다",
      "Testcontainers는 소켓을 지원하지 않기 때문이다",
      "Ryuk가 동작하지 않기 때문이다",
    ],
    answer: 0,
    explanation:
      "Docker 소켓에 접근할 수 있으면 호스트 루트를 마운트한 컨테이너를 띄울 수 있으니 사실상 호스트 root다. 여러 팀이 쓰는 러너에서는 테스트를 러너에서 직접 돌리고 Testcontainers만 러너의 Docker를 쓰게 하는 편이 안전하다.",
    anchor: "테스트도-같은-이미지로-돌린다",
  },
];
