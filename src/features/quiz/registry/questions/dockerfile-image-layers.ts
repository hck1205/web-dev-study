import type { QuizQuestion } from "../types";

export const DOCKERFILE_IMAGE_LAYERS: QuizQuestion[] = [
  {
    id: "dockerfile-image-layers-1",
    post: "dockerfile-image-layers",
    question: "다음 중 이미지 크기가 줄지 않는 Dockerfile 작성 방식은?",
    choices: [
      "같은 RUN 안에서 apt-get install 후 /var/lib/apt/lists를 지운다",
      "COPY --chown으로 복사하면서 소유자를 정한다",
      "apt-get install을 한 RUN에서 하고, 다음 RUN에서 캐시를 지운다",
      "멀티 스테이지 빌드로 결과물만 마지막 스테이지에 복사한다",
    ],
    answer: 2,
    explanation:
      "레이어는 위에 쌓이기만 해서, 다음 RUN에서 파일을 지워도 앞 레이어에는 그대로 남고 whiteout 표시만 생긴다. 설치와 정리는 같은 RUN 안에서 해야 그 레이어에 캐시가 들어가지 않는다.",
    anchor: "명령-하나가-레이어-한-장",
  },
  {
    id: "dockerfile-image-layers-2",
    post: "dockerfile-image-layers",
    question: "COPY . . 다음에 RUN npm ci가 오는 Dockerfile에서 소스 파일 하나만 고쳐 다시 빌드하면?",
    choices: [
      "COPY . . 의 캐시가 깨지고, 부모 레이어가 바뀐 npm ci도 다시 실행된다",
      "npm ci 명령 문자열이 같으니 npm ci는 캐시를 쓴다",
      "COPY는 파일 수정 시각만 보므로 캐시를 그대로 쓴다",
      "package-lock.json이 그대로라 전체가 캐시된다",
    ],
    answer: 0,
    explanation:
      "COPY는 복사할 파일 내용의 체크섬을 보므로 소스 한 줄만 바뀌어도 캐시가 깨진다. 캐시는 부모 레이어가 같아야 맞기 때문에 그 아래 줄은 명령이 같아도 전부 다시 돈다. 그래서 의존성 목록을 먼저 복사해 설치하고 소스는 마지막에 복사한다.",
    anchor: "캐시는-처음-바뀐-줄에서-끊긴다",
  },
  {
    id: "dockerfile-image-layers-3",
    post: "dockerfile-image-layers",
    question: "CMD node dist/server.js(셸 형식)를 CMD [\"node\", \"dist/server.js\"](exec 형식)로 바꾸면 무엇이 달라지나?",
    choices: [
      "환경 변수 $PORT가 자동으로 펼쳐진다",
      "node가 PID 1이 되어 docker stop의 SIGTERM을 직접 받는다",
      "ENTRYPOINT가 무시된다",
      "이미지 레이어가 하나 줄어든다",
    ],
    answer: 1,
    explanation:
      "셸 형식은 /bin/sh -c로 감싸 실행돼 셸이 PID 1이 되고, 셸은 SIGTERM을 앱에 넘기지 않아 stop이 10초 뒤 SIGKILL로 끝난다. exec 형식은 앱을 바로 실행한다. 대신 셸을 거치지 않으니 변수 확장은 오히려 안 된다.",
    anchor: "entrypoint와-cmd-exec-형식과-셸-형식",
  },
  {
    id: "dockerfile-image-layers-4",
    post: "dockerfile-image-layers",
    question: "빌드 중 사설 npm 레지스트리 토큰이 필요하다. 이미지와 기록에 남기지 않는 방법은?",
    choices: [
      "ARG NPM_TOKEN으로 받아서 쓴다",
      "ENV NPM_TOKEN으로 넣고 마지막 줄에서 unset한다",
      ".npmrc를 COPY하고 다음 RUN에서 지운다",
      "RUN --mount=type=secret으로 그 RUN 동안만 파일로 마운트한다",
    ],
    answer: 3,
    explanation:
      "ARG와 ENV 값은 docker history나 이미지 설정에서 보일 수 있고, COPY한 파일은 다음 줄에서 지워도 앞 레이어에 남는다. secret 마운트는 그 RUN 동안만 파일로 보이고 레이어에 들어가지 않는다.",
    anchor: "buildkit-캐시-마운트와-여러-아키텍처-빌드",
  },
  {
    id: "dockerfile-image-layers-5",
    post: "dockerfile-image-layers",
    question: "멀티 스테이지 빌드에서 최종 이미지에 들어가는 것은?",
    choices: [
      "모든 스테이지의 레이어를 합친 것",
      "마지막 스테이지와, 그 스테이지가 COPY --from으로 가져온 파일",
      "첫 번째 스테이지의 레이어 전체",
      "--target으로 고르지 않으면 빌드 스테이지까지 전부",
    ],
    answer: 1,
    explanation:
      "최종 이미지는 마지막 스테이지뿐이고, 앞 스테이지에서 쓴 컴파일러나 devDependencies는 버려진다. 필요한 결과물만 COPY --from으로 가져온다. --target은 특정 스테이지까지만 빌드할 때 쓰는 옵션이다.",
    anchor: "빌드-도구는-두고-결과만-옮기는-멀티-스테이지-빌드",
  },
  {
    id: "dockerfile-image-layers-6",
    post: "dockerfile-image-layers",
    question: "node:22-alpine으로 바꾸자 네이티브 모듈 설치가 실패하거나 소스 컴파일로 오래 걸리기 시작했다. 가장 그럴듯한 원인은?",
    choices: [
      "Alpine은 C 라이브러리로 glibc 대신 musl을 써서 glibc용 미리 빌드된 바이너리가 돌지 않아서",
      "Alpine에는 Node 런타임이 들어 있지 않아서",
      "Alpine 이미지는 arm64를 지원하지 않아서",
      "Alpine은 npm ci를 지원하지 않아서",
    ],
    answer: 0,
    explanation:
      "glibc용으로 빌드된 네이티브 모듈과 manylinux 휠은 musl에서 돌지 않는다. musl용 빌드가 없으면 설치할 때 소스에서 컴파일하게 되고 컴파일러가 필요해진다. 그래서 기본은 Debian slim으로 두고 Alpine은 의존성을 확인한 뒤 고른다.",
    anchor: "베이스-이미지-slim-alpine-distroless",
  },
  {
    id: "dockerfile-image-layers-7",
    post: "dockerfile-image-layers",
    question: "쿠버네티스에서 runAsNonRoot: true를 켰더니 USER node인 이미지가 뜨지 않는다. 어떻게 고치나?",
    choices: [
      "USER 줄을 지우고 root로 실행한다",
      "HEALTHCHECK를 추가한다",
      "USER 1000:1000처럼 숫자 UID로 지정한다",
      "EXPOSE로 1024 이상 포트를 선언한다",
    ],
    answer: 2,
    explanation:
      "kubelet은 이미지의 사용자가 root가 아닌지 확인해야 하는데, 이름만 있으면 UID를 알 수 없어서 컨테이너를 띄우지 않는다. 숫자 UID로 적으면 검사를 통과한다. 쿠버네티스는 HEALTHCHECK를 무시하고, EXPOSE는 문서 역할뿐이다.",
    anchor: "root가-아닌-사용자로-상태는-healthcheck로",
  },
];
