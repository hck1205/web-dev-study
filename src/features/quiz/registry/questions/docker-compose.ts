import type { QuizQuestion } from "../types";

export const DOCKER_COMPOSE: QuizQuestion[] = [
  {
    id: "docker-compose-1",
    post: "docker-compose",
    question: "depends_on에 db를 조건 없이 적었는데도 web이 ECONNREFUSED로 죽는 이유는?",
    choices: [
      "depends_on은 서비스 이름을 DNS에 등록하지 않기 때문에",
      "조건 없는 depends_on은 db 컨테이너가 시작된 것만 보고, 접속을 받을 준비가 됐는지는 기다리지 않기 때문에",
      "depends_on은 docker compose run에서만 동작하기 때문에",
      "db에 ports를 게시하지 않았기 때문에",
    ],
    answer: 1,
    explanation:
      "이름만 적으면 시작 순서만 정해서, Postgres가 초기화 중일 때 web이 접속을 시도할 수 있다. condition: service_healthy와 db의 healthcheck를 짝으로 써야 준비될 때까지 기다린다. 같은 네트워크의 서비스끼리는 ports 없이도 닿는다.",
    anchor: "up-한-번에-일어나는-순서",
  },
  {
    id: "docker-compose-2",
    post: "docker-compose",
    question: "프로젝트 디렉터리의 .env에 API_KEY=abc를 적었다. compose.yaml에서 따로 쓰지 않았다면 web 컨테이너 안에서 API_KEY는?",
    choices: [
      "abc로 들어 있다",
      "env_file을 쓴 서비스에만 들어 있다",
      "모든 서비스에 자동으로 들어 있다",
      "들어 있지 않다. .env는 compose.yaml의 ${…} 보간에만 쓰인다",
    ],
    answer: 3,
    explanation:
      ".env는 Compose가 compose.yaml을 읽을 때 ${VAR} 자리를 채우는 데만 쓴다. 컨테이너에 넣으려면 environment에서 ${API_KEY}로 꺼내거나 env_file로 파일을 지정해야 한다. env_file은 지정한 파일을 넣을 뿐 .env를 자동으로 넣지 않는다.",
    anchor: "env는-컨테이너에-들어가지-않는다",
  },
  {
    id: "docker-compose-3",
    post: "docker-compose",
    question: "compose.yaml에서 web의 환경 변수를 바꾼 뒤 적용하려면?",
    choices: [
      "docker compose up -d를 다시 실행한다",
      "docker compose restart web을 실행한다",
      "docker compose exec web을 실행한다",
      "docker compose logs -f web을 실행한다",
    ],
    answer: 0,
    explanation:
      "up은 설정이 바뀐 서비스의 컨테이너만 골라 새로 만든다. restart는 같은 컨테이너를 껐다 켤 뿐이라 바뀐 설정이 반영되지 않는다. 새 이미지를 pull한 뒤에도 up -d를 해야 바뀐다.",
    anchor: "매일-쓰는-명령",
  },
  {
    id: "docker-compose-4",
    post: "docker-compose",
    question: "운영 서버에서 docker compose down -v를 실행하면 생기는 일은?",
    choices: [
      "컨테이너만 지우고 네트워크와 볼륨은 남는다",
      "이미지까지 모두 지운다",
      "컨테이너와 네트워크에 더해 선언한 볼륨까지 지워 DB 데이터가 사라진다",
      "external: true로 선언한 볼륨까지 지운다",
    ],
    answer: 2,
    explanation:
      "down은 컨테이너와 기본 네트워크만 지우지만 -v를 붙이면 compose.yaml에 선언한 볼륨과 익명 볼륨까지 지운다. 이미지는 --rmi를 줘야 지워지고, external 볼륨은 Compose가 관리하지 않아 건드리지 않는다. 쓰기 전에는 pg_dump로 덤프를 떠 둔다.",
    anchor: "down과-down--v는-한-글자-차이다",
  },
  {
    id: "docker-compose-5",
    post: "docker-compose",
    question: "nginx에 proxy_pass http://web:3000;을 그대로 적었더니 web을 다시 빌드해 띄운 뒤 502가 난다. 이유는?",
    choices: [
      "Compose가 web의 서비스 이름을 바꿔서",
      "nginx가 시작할 때 한 번 푼 web의 옛 IP를 계속 써서",
      "web이 3000 포트를 게시하지 않아서",
      "Docker 내장 DNS가 재시작 중이라서",
    ],
    answer: 1,
    explanation:
      "nginx는 proxy_pass에 적은 이름을 시작할 때 풀고 그 IP를 유지한다. web 컨테이너가 다시 만들어져 IP가 바뀌면 사라진 주소로 보내게 된다. resolver 127.0.0.11과 변수를 쓰면 요청 때마다 다시 이름을 푼다.",
    anchor: "요청-하나가-서비스를-건너가는-길",
  },
  {
    id: "docker-compose-6",
    post: "docker-compose",
    question: "compose.override.yaml을 두고 운영 서버에서 docker compose -f compose.yaml -f compose.prod.yaml up -d를 실행했다. override 파일은?",
    choices: [
      "항상 마지막에 합쳐진다",
      "compose.prod.yaml보다 먼저 합쳐진다",
      "-f를 직접 지정했으므로 읽지 않는다",
      "ports 키만 합쳐진다",
    ],
    answer: 2,
    explanation:
      "compose.override.yaml은 -f 없이 up할 때만 자동으로 합쳐진다. -f로 파일을 지정하면 그 파일들만 읽으므로, 운영에서는 이렇게 개발용 바인드 마운트와 포트를 빼낸다.",
    anchor: "개발과-운영을-파일로-나누기",
  },
  {
    id: "docker-compose-7",
    post: "docker-compose",
    question: "web의 healthcheck가 계속 실패해 unhealthy가 됐다. restart: unless-stopped인 Compose는 어떻게 하나?",
    choices: [
      "상태만 unhealthy로 표시하고 컨테이너를 다시 띄우지 않는다",
      "즉시 컨테이너를 재시작한다",
      "retries 횟수만큼 재시작한 뒤 멈춘다",
      "의존하는 proxy까지 함께 재시작한다",
    ],
    answer: 0,
    explanation:
      "Docker Engine과 Compose는 unhealthy를 보고 컨테이너를 다시 띄우지 않는다. restart 정책은 프로세스가 종료됐을 때만 동작한다. 멈춘 프로세스를 자동으로 살리려면 쿠버네티스의 liveness probe 같은 오케스트레이터가 필요하다.",
    anchor: "up-한-번에-일어나는-순서",
  },
];
