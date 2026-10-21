import type { QuizQuestion } from "../types";

export const ROLLING_DEPLOYMENT: QuizQuestion[] = [
  {
    id: "rolling-deployment-1",
    post: "rolling-deployment",
    question:
      "nginx 기본 설정 뒤의 서버 네 대를 1초 간격으로 내렸다 올렸더니, 새 버전이 모두 헬스 체크를 통과했는데도 몇 초 동안 모든 요청이 `no live upstreams` 502였다. 왜 그런가?",
    choices: [
      "새 버전의 /health가 거짓으로 200을 줬기 때문에",
      "내릴 때 생긴 실패로 각 서버가 max_fails=1, fail_timeout=10s에 걸려 10초씩 제외됐고, 네 대가 모두 제외 상태가 됐기 때문에",
      "keepalive 연결 수가 모자랐기 때문에",
      "nginx가 reload 중이었기 때문에",
    ],
    answer: 1,
    explanation:
      "nginx 오픈 소스는 실제 요청이 실패하면 그 서버를 fail_timeout 동안 고르지 않는다. 배포 속도가 그 시간보다 빠르면 제외된 서버가 쌓이고, 살아난 서버도 nginx는 모른다. 로드 밸런서에서 먼저 빼고 내리거나 배치 간격을 늘린다.",
    anchor: "기본값-max_fails가-서버를-10초씩-가둔다",
  },
  {
    id: "rolling-deployment-2",
    post: "rolling-deployment",
    question: "max_fails=0으로 둔 채 서버를 차례로 죽였더니 GET 부하는 실패가 0인데 POST 부하는 502가 45건 났다. 이유는?",
    choices: [
      "POST는 본문이 있어서 더 느리기 때문에",
      "nginx는 이미 백엔드에 보낸 POST를 다음 서버로 다시 보내지 않기 때문에",
      "POST는 keepalive를 쓰지 않기 때문에",
      "GET 응답은 nginx가 캐시해서 보냈기 때문에",
    ],
    answer: 1,
    explanation:
      "proxy_next_upstream 기본값은 에러가 나면 다음 서버로 다시 보내지만, 멱등하지 않은 요청은 이미 보낸 뒤라면 다시 보내지 않는다. 처리 도중 서버가 죽으면 GET은 재시도로 가려지고 POST는 502가 된다.",
    anchor: "재시도가-get은-숨기고-post는-못-숨긴다",
  },
  {
    id: "rolling-deployment-3",
    post: "rolling-deployment",
    question: "앱이 SIGTERM을 받으면 처리 중인 요청을 끝내고 내려가도록 고쳤다. 그런데도 기본 nginx 설정에서 롤링 배포가 무너졌다. 무엇이 빠졌나?",
    choices: [
      "SIGKILL을 함께 보내는 것",
      "앱을 내리기 전에 로드 밸런서에서 먼저 빼는 것",
      "헬스 체크 간격을 늘리는 것",
      "새 버전을 더 빨리 띄우는 것",
    ],
    answer: 1,
    explanation:
      "앱이 포트를 닫은 뒤 nginx가 새 연결을 시도하면 Connection refused를 받고 그것도 실패로 센다. 로드 밸런서가 모르는 사이에 내려가면 정상 종료도 장애다. 빼기, 드레이닝, 종료 순서를 지킨다.",
    anchor: "정상-종료만으로는-모자란-이유",
  },
  {
    id: "rolling-deployment-4",
    post: "rolling-deployment",
    question: "롤링 배포 중에만 브라우저에서 새 API 경로가 404를 받는 일이 생긴다. 가장 알맞은 대응은?",
    choices: [
      "새 API를 부르는 화면은 그 API가 모든 서버에 깔린 다음 배포에서 내보낸다",
      "배포 중에는 로드 밸런서의 keepalive를 끈다",
      "404를 받으면 브라우저가 자동으로 재시도하게 한다",
      "배치 크기를 한 대로 줄인다",
    ],
    answer: 0,
    explanation:
      "v2 서버가 준 화면이 같은 순간 아직 v1인 서버로 API를 부르면 그 경로가 없다. 배치 크기를 줄이면 섞이는 시간이 오히려 길어진다. API는 먼저 깔고 그걸 쓰는 화면은 다음 배포로 나눈다.",
    anchor: "섞여-있는-몇-초-동안",
  },
  {
    id: "rolling-deployment-5",
    post: "rolling-deployment",
    question: "서버 세 대가 피크 때 2.5대분의 일을 하고 있다. 한 대씩 롤링 배포하면 어떻게 되며 무엇을 하나?",
    choices: [
      "한 대를 빼도 두 대가 충분히 버티니 그대로 한다",
      "남은 두 대로 피크를 못 버티니, 피크를 피하거나 새 서버를 먼저 더 띄우는 surge로 시작한다",
      "배치를 세 대로 늘려 빨리 끝낸다",
      "헬스 체크를 끄면 된다",
    ],
    answer: 1,
    explanation:
      "배치 크기는 빠진 서버를 뺀 나머지가 피크를 감당하는지로 정한다. 두 대는 2000 대 2500으로 모자라다. 먼저 한 대를 더 띄우거나 부하가 낮은 시간에 배포한다.",
    anchor: "몇-대씩-바꿀까",
  },
  {
    id: "rolling-deployment-6",
    post: "rolling-deployment",
    question: "배포 시간대 nginx 에러 로그에 `upstream prematurely closed connection`이 많이 찍혔다. 무엇을 뜻하나?",
    choices: [
      "모든 서버가 fail_timeout으로 제외됐다",
      "처리 중인 요청이 남아 있는데 서버를 내렸다",
      "새 버전이 헬스 체크에 실패했다",
      "nginx 워커 수가 부족하다",
    ],
    answer: 1,
    explanation:
      "응답 헤더를 받기 전에 백엔드가 연결을 끊었다는 뜻이다. 드레이닝 시간이 짧거나 앱의 정상 종료가 처리 중인 요청을 기다리지 않는다. 모든 서버가 제외된 경우는 no live upstreams로 찍힌다.",
    anchor: "현장에서-롤링-배포를-의심하는-순간",
  },
];
