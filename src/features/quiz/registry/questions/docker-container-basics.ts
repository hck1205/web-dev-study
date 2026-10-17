import type { QuizQuestion } from "../types";

export const DOCKER_CONTAINER_BASICS: QuizQuestion[] = [
  {
    id: "docker-container-basics-1",
    post: "docker-container-basics",
    question: "리눅스 컨테이너를 맥이나 윈도우에서 돌릴 때 Docker Desktop이 뒤에서 작은 리눅스 VM을 띄우는 이유는?",
    choices: [
      "이미지 레이어를 압축 해제하려면 리눅스 파일 시스템이 필요해서",
      "컨테이너는 게스트 커널 없이 호스트의 리눅스 커널을 함께 쓰는 프로세스라서",
      "레지스트리가 리눅스 클라이언트의 요청만 받아서",
      "cgroups 설정 파일을 저장할 곳이 필요해서",
    ],
    answer: 1,
    explanation:
      "VM은 게스트 OS가 자기 커널로 부팅하지만, 컨테이너는 호스트 커널 위에서 도는 평범한 프로세스다. 그래서 리눅스 컨테이너에는 리눅스 커널이 있어야 하고, 맥과 윈도우에서는 그 커널을 VM으로 빌려 온다.",
    anchor: "가상-머신은-커널까지-컨테이너는-그-위만",
  },
  {
    id: "docker-container-basics-2",
    post: "docker-container-basics",
    question: "Docker 기본 설정에서 컨테이너 안의 root(UID 0)는 호스트에서 어떻게 보이나?",
    choices: [
      "user namespace로 매핑되어 호스트에서는 일반 UID다",
      "호스트에는 존재하지 않는 가상의 사용자다",
      "호스트에서도 UID 0이다",
      "docker 그룹의 UID로 바뀐다",
    ],
    answer: 2,
    explanation:
      "Docker는 pid, net, mnt 같은 namespace는 컨테이너마다 새로 만들지만 user namespace는 기본으로 쓰지 않는다. 그래서 컨테이너 안 root는 호스트에서도 UID 0이고, capabilities와 seccomp로 막혀 있을 뿐이다. UID 매핑은 userns-remap이나 rootless 모드를 켜야 생긴다.",
    anchor: "프로세스마다-다른-세상을-보여-주는-namespace",
  },
  {
    id: "docker-container-basics-3",
    post: "docker-container-basics",
    question: "--memory 64m로 띄운 컨테이너가 메모리를 계속 늘리면 어떻게 되나?",
    choices: [
      "한도에 닿으면 다음 기간까지 멈췄다가 다시 돈다",
      "호스트의 남은 메모리를 빌려 쓰고 경고만 남긴다",
      "Docker 데몬이 SIGTERM을 보내 정상 종료시킨다",
      "커널 OOM killer가 SIGKILL로 죽이고 종료 코드 137과 OOMKilled: true가 남는다",
    ],
    answer: 3,
    explanation:
      "메모리는 빼앗을 수 없어서 cgroup 한도를 넘으면 커널이 그 안의 프로세스를 죽인다. 137은 128 + 9, 즉 SIGKILL이다. 기간마다 멈추는 건 CPU 한도(cpu.max)를 다 썼을 때의 throttling이다.",
    anchor: "쓸-수-있는-양을-묶는-cgroups",
  },
  {
    id: "docker-container-basics-4",
    post: "docker-container-basics",
    question: "컨테이너 안에서 고친 파일이 사라지는 시점은?",
    choices: [
      "docker rm으로 컨테이너를 지울 때",
      "docker stop으로 컨테이너를 멈출 때",
      "docker restart로 다시 시작할 때",
      "같은 이미지로 다른 컨테이너를 띄울 때",
    ],
    answer: 0,
    explanation:
      "변경은 copy-on-write로 그 컨테이너의 쓰기 레이어에 기록된다. 멈추거나 재시작해도 쓰기 레이어는 남아 있고, docker rm으로 컨테이너를 지울 때 함께 사라진다. 남아야 할 데이터는 볼륨에 둔다.",
    anchor: "이미지는-틀-컨테이너는-찍어-낸-것",
  },
  {
    id: "docker-container-basics-5",
    post: "docker-container-basics",
    question: "dockerd나 containerd를 재시작해도 돌고 있던 컨테이너가 죽지 않을 수 있는 이유는?",
    choices: [
      "runc가 컨테이너 프로세스의 부모로 계속 남아 있어서",
      "runc는 프로세스를 띄우고 끝나고, 컨테이너의 부모는 containerd-shim이라서",
      "컨테이너 프로세스가 커널 스레드로 바뀌어서",
      "dockerd가 재시작 전에 컨테이너 상태를 디스크에 저장해 두어서",
    ],
    answer: 1,
    explanation:
      "containerd는 컨테이너마다 shim을 하나 띄우고, shim이 runc로 프로세스를 만든 뒤 runc는 바로 종료한다. 이후 컨테이너 프로세스의 부모는 shim이라 위쪽 데몬이 재시작돼도 영향을 덜 받는다. runc가 계속 남아 있다는 건 흔한 오해다.",
    anchor: "docker-run-한-줄이-지나가는-길",
  },
  {
    id: "docker-container-basics-6",
    post: "docker-container-basics",
    question: "sh -c로 앱을 띄운 컨테이너에서 docker stop이 항상 10초쯤 걸리는 이유는?",
    choices: [
      "Docker가 종료 전에 쓰기 레이어를 디스크에 저장하느라",
      "재시작 정책이 no라서 종료를 한 번 더 확인하느라",
      "PID 1인 셸이 SIGTERM을 무시하고 전달하지도 않아서 타임아웃 뒤 SIGKILL로 끝나서",
      "SIGTERM이 컨테이너 namespace를 넘어가지 못해서",
    ],
    answer: 2,
    explanation:
      "커널은 PID 1에 시그널 기본 동작을 적용하지 않아서, 핸들러가 없으면 SIGTERM을 무시한다. 셸이 PID 1이면 앱은 신호를 못 받고, docker stop은 기본 10초를 기다린 뒤 SIGKILL을 보낸다. exec 형식으로 앱을 PID 1로 만들거나 --init으로 tini를 둔다.",
    anchor: "재시작-정책과-pid-1",
  },
  {
    id: "docker-container-basics-7",
    post: "docker-container-basics",
    question: "운영 배포에서 nginx:latest 대신 버전 태그나 다이제스트를 쓰는 이유로 가장 알맞은 것은?",
    choices: [
      "latest 태그는 다운로드 속도가 느려서",
      "latest는 마지막에 푸시된 이미지를 가리키는 움직이는 이름표라 받는 시점마다 내용이 달라질 수 있어서",
      "latest 태그는 공식 이미지에만 붙일 수 있어서",
      "다이제스트를 쓰면 이미지 크기가 줄어서",
    ],
    answer: 1,
    explanation:
      "latest는 최신을 보장하는 약속이 아니라 태그 없이 푸시할 때 붙는 기본 이름이다. 서버마다 받은 시점이 다르면 다른 이미지가 돌고, 롤백할 버전도 알 수 없다. 다이제스트는 매니페스트 내용의 해시라서 언제 받아도 같은 이미지가 온다.",
    anchor: "이미지-이름은-레지스트리부터-다이제스트까지",
  },
];
