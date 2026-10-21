import type { QuizQuestion } from "../types";

export const DOCKER_COMMANDS_WORKFLOW: QuizQuestion[] = [
  {
    id: "docker-commands-workflow-1",
    post: "docker-commands-workflow",
    question:
      "CMD [\"node\", \"app.js\"]로 띄운 컨테이너를 docker stop 하면 매번 10초가 걸리고 종료 코드가 137이다. 앱에는 SIGTERM 핸들러가 없다. 왜 그럴까?",
    choices: [
      "exec 형식이라 셸이 시그널을 가로챘기 때문이다",
      "node가 PID 1이라 커널이 SIGTERM의 기본 동작(종료)을 적용하지 않아 무시됐기 때문이다",
      "메모리 한도에 걸려 OOM killer가 죽였기 때문이다",
      "dockerd가 SIGTERM 대신 SIGINT를 보냈기 때문이다",
    ],
    answer: 1,
    explanation:
      "PID 1에는 시그널 기본 동작이 적용되지 않아서, 핸들러가 없는 node는 SIGTERM을 무시하고 10초 뒤 SIGKILL(128 + 9 = 137)을 맞는다. exec 형식이라 셸은 끼어 있지 않고, OOM이었다면 OOMKilled가 true로 남는다.",
    anchor: "stop-sigterm을-보내고-10초를-센다",
  },
  {
    id: "docker-commands-workflow-2",
    post: "docker-commands-workflow",
    question: "앞 문제의 컨테이너를 --init으로 다시 띄우고 docker stop 했다. 앱 코드는 그대로다. 어떻게 끝날까?",
    choices: [
      "곧바로 끝나고 종료 코드는 143이다",
      "곧바로 끝나고 종료 코드는 0이다",
      "여전히 10초 뒤 137로 끝난다",
      "tini가 시그널을 삼켜서 컨테이너가 계속 돈다",
    ],
    answer: 0,
    explanation:
      "tini가 PID 1이 되어 SIGTERM을 node에 넘기고, node는 평범한 프로세스라 기본 동작대로 바로 죽는다. 그래서 128 + 15 = 143이다. 정리 코드가 돌아 0으로 끝나려면 앱에 SIGTERM 핸들러가 있어야 한다.",
    anchor: "stop-sigterm을-보내고-10초를-센다",
  },
  {
    id: "docker-commands-workflow-3",
    post: "docker-commands-workflow",
    question:
      "컨테이너가 계속 재시작한다. docker inspect를 보니 exit=137, oom=true이고 docker logs는 비어 있다. 가장 알맞은 해석은?",
    choices: [
      "앱이 로그를 파일에 쓰고 있어서 원인을 알 수 없다",
      "누군가 docker stop을 반복해서 쳤다",
      "메모리 한도에 걸려 커널이 SIGKILL로 죽였고, 앱은 로그를 남길 틈이 없었다",
      "앱이 스스로 에러를 내고 종료 코드 137로 나갔다",
    ],
    answer: 2,
    explanation:
      "137은 SIGKILL로 죽었다는 뜻이고 OOMKilled가 true면 그 SIGKILL을 보낸 건 메모리 한도다. OOM은 앱이 출력할 틈 없이 끝나서 로그가 비는 경우가 많으니 docker events의 oom 줄과 함께 본다. stop 타임아웃이었다면 oom=false로 남는다.",
    anchor: "계속-재시작하거나-포트가-대답하지-않을-때",
  },
  {
    id: "docker-commands-workflow-4",
    post: "docker-commands-workflow",
    question:
      "-p 18253:8080으로 띄운 컨테이너에 curl localhost:18253을 치면 Connection reset by peer가 난다. 컨테이너 안에서 wget localhost:8080은 응답한다. 무엇을 고쳐야 하나?",
    choices: [
      "-p의 순서를 8080:18253으로 바꾼다",
      "ufw에서 18253 포트를 연다",
      "-p 127.0.0.1:18253:8080으로 루프백에만 게시한다",
      "앱이 127.0.0.1이 아니라 0.0.0.0에서 듣도록 바꾼다",
    ],
    answer: 3,
    explanation:
      "게시된 포트까지는 docker-proxy가 받지만, 앱이 컨테이너 자기 루프백에만 묶여 있으면 eth0로 들어온 연결을 받을 프로세스가 없어 reset이 난다. 안에서만 응답한다는 게 그 증거다. -p 순서가 틀렸다면 아예 연결 거부(Couldn't connect)가 난다.",
    anchor: "계속-재시작하거나-포트가-대답하지-않을-때",
  },
  {
    id: "docker-commands-workflow-5",
    post: "docker-commands-workflow",
    question:
      "서버 두 대가 같은 me/app:1.0을 pull했는데 서로 다른 코드가 돈다. 다음 배포부터 이런 일을 막는 가장 확실한 방법은?",
    choices: [
      "pull 전에 docker image prune을 돌린다",
      "배포 설정에 태그 대신 이미지 다이제스트(@sha256:…)를 적는다",
      "태그를 latest로 통일한다",
      "docker pull에 --quiet를 붙인다",
    ],
    answer: 1,
    explanation:
      "태그는 같은 이름으로 다시 push하면 새 매니페스트로 옮겨 가는 이름표라서, 언제 받았느냐에 따라 내용이 다르다. 다이제스트는 매니페스트 내용의 해시라 바뀌지 않으니 어느 서버에서 언제 받아도 같은 이미지가 온다. latest는 오히려 가장 자주 옮겨 가는 태그다.",
    anchor: "push와-pull-레지스트리는-태그를-옮길-수-있다",
  },
  {
    id: "docker-commands-workflow-6",
    post: "docker-commands-workflow",
    question:
      "로그를 보려고 docker attach로 붙었다가 Ctrl+C를 눌렀더니 --init으로 띄운 서버가 Exited (130)이 됐다. 왜 그럴까?",
    choices: [
      "attach는 기본으로 CLI가 받은 SIGINT를 컨테이너 PID 1에 넘기기 때문이다",
      "attach를 끊으면 컨테이너의 표준 입력이 닫혀 앱이 끝나기 때문이다",
      "Ctrl+C가 docker stop과 같은 명령이기 때문이다",
      "attach는 exec와 달리 새 셸을 PID 1로 바꿔 띄우기 때문이다",
    ],
    answer: 0,
    explanation:
      "attach의 --sig-proxy 기본값이 true라 Ctrl+C의 SIGINT가 PID 1에 전달되고, 128 + 2 = 130으로 끝난다. 컨테이너를 살려 두고 빠지려면 Ctrl+P, Ctrl+Q를 쓰고, 로그만 볼 거면 docker logs -f를 쓴다.",
    anchor: "exec와-attach는-다른-문으로-들어간다",
  },
  {
    id: "docker-commands-workflow-7",
    post: "docker-commands-workflow",
    question:
      "테스트용 컨테이너를 -v /data로 띄웠다가 docker rm -f로 지우기를 반복했더니 docker volume ls에 해시 이름 볼륨이 쌓였다. 이유와 정리 방법으로 맞는 것은?",
    choices: [
      "rm -f가 볼륨을 잠가 두기 때문이고, 데몬을 재시작하면 지워진다",
      "이름 붙인 볼륨이라 남는 것이고, docker system prune으로만 지울 수 있다",
      "익명 볼륨은 rm에 -v를 붙여야 같이 지워지고, 남은 것은 docker volume prune으로 정리한다",
      "볼륨은 이미지에 속해서 docker rmi로 이미지를 지워야 사라진다",
    ],
    answer: 2,
    explanation:
      "이름 없이 붙인 볼륨(익명 볼륨)은 docker rm만으로는 지워지지 않고 -v를 붙여야 함께 지워진다. Docker 23부터 docker volume prune은 기본으로 익명 볼륨만 지우고 이름 붙인 볼륨은 남긴다.",
    anchor: "rm과-prune-지우면-무엇이-같이-사라지나",
  },
];
