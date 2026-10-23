import type { QuizQuestion } from "../types";

export const TWELVE_FACTOR_APP: QuizQuestion[] = [
  {
    id: "twelve-factor-app-1",
    post: "twelve-factor-app",
    question: "이미지에 스테이징 .env가 들어 있고, 운영 매니페스트에는 DATABASE_URL만 넣었다. node --env-file=.env로 시작하는 앱은 운영에서 어떻게 동작하나?",
    choices: [
      ".env 값이 환경 변수보다 우선해서 DB까지 스테이징에 붙는다",
      "DB는 운영에 붙고, 빠진 REDIS_URL과 PAYMENT_MODE는 스테이징 값으로 조용히 채워진다",
      "빠진 값이 있으니 앱이 시작하지 못하고 죽는다",
      "--env-file은 운영 모드에서 무시되어 빠진 값은 undefined가 된다",
    ],
    answer: 1,
    explanation:
      "환경 변수로 넣은 값은 파일보다 우선하므로 DB는 운영으로 붙는다. 빠뜨린 값은 이미지 안 파일의 스테이징 값으로 채워져 에러 없이 잘못 동작한다. 설정을 이미지에서 빼고 시작할 때 검사하면 이런 경우 아예 뜨지 않는다.",
    anchor: "스테이징에서-확인한-이미지가-운영에서-결제를-못-받는다",
  },
  {
    id: "twelve-factor-app-2",
    post: "twelve-factor-app",
    question: "설정을 이미지에 굽지 않고 릴리스 단계에서 붙이는 가장 큰 이유는?",
    choices: [
      "이미지 크기를 줄이기 위해",
      "스테이징에서 확인한 바로 그 이미지를 운영에 그대로 승격하고, 이전 릴리스로 되돌리기 쉽게 하려고",
      "환경 변수가 파일보다 빨리 읽히기 때문에",
      "쿠버네티스가 이미지 안의 설정 파일을 읽지 못하기 때문에",
    ],
    answer: 1,
    explanation:
      "환경마다 다시 빌드하면 확인한 바이트와 올라간 바이트가 달라진다. 이미지는 한 번 만들고 설정만 환경마다 붙이면 같은 것을 승격할 수 있고, 릴리스 ID로 되돌리기도 쉽다. 비밀 값이 레이어에 남는 문제도 함께 피한다.",
    anchor: "빌드-릴리스-실행을-섞지-않는다",
  },
  {
    id: "twelve-factor-app-3",
    post: "twelve-factor-app",
    question: "매니페스트에 PORT를 value: \"\"로 남겨 두었다. 설정 검사에서 env.PORT || 8080을 쓰면 생기는 문제는?",
    choices: [
      "빈 문자열이 기본값 8080으로 바뀌어 실수가 드러나지 않는다",
      "Node가 빈 환경 변수를 거부해서 시작하지 못한다",
      "PORT가 0으로 설정되어 임의의 포트에 붙는다",
      "문제없다. 빈 값은 원래 없는 것과 같다",
    ],
    answer: 0,
    explanation:
      "빈 문자열은 없는 값이 아니라 잘못 넣은 값이다. ||를 쓰면 빈 값이 기본값으로 바뀌어 넘어가고, Number(\"\")는 0이라 범위 검사를 해야 잡힌다. 없을 때만 기본값을 주려면 undefined인지 따로 본다.",
    anchor: "설정은-코드-밖에-둔다",
  },
  {
    id: "twelve-factor-app-4",
    post: "twelve-factor-app",
    question: "12요소는 설정을 환경 변수로 넣으라고 하지만, 지금 비밀 값에는 파일 마운트나 비밀 저장소를 권하는 이유는?",
    choices: [
      "환경 변수는 길이 제한이 있어 긴 키를 넣을 수 없어서",
      "환경 변수는 /proc, 자식 프로세스, 크래시 리포트, 평문 매니페스트 등으로 새기 쉬워서",
      "쿠버네티스가 Secret을 환경 변수로 넣는 기능을 없애서",
      "환경 변수는 컨테이너가 재시작될 때마다 지워지기 때문에",
    ],
    answer: 1,
    explanation:
      "환경 변수는 같은 사용자의 다른 프로세스나 자식 프로세스, 에러 리포터 등 생각보다 많은 곳에 보인다. 코드와 분리해 배포마다 주입한다는 원칙은 그대로 두고 전달 수단만 파일이나 저장소로 바꾼다.",
    anchor: "환경-변수가-맞지-않게-된-것들",
  },
  {
    id: "twelve-factor-app-5",
    post: "twelve-factor-app",
    question: "SIGTERM 처리기를 둔 서버도 롤링 배포 중 잠깐 연결 거절이 생겼다. 원인과 대응으로 맞는 것은?",
    choices: [
      "SIGTERM 처리기가 진행 중인 요청을 끊어서 생긴다. 처리기를 지운다",
      "server.close() 뒤에도 엔드포인트 제거가 반영되기 전까지 새 요청이 들어온다. preStop에 짧은 sleep을 둔다",
      "유예 시간이 너무 길어서 생긴다. terminationGracePeriodSeconds를 0으로 둔다",
      "Node가 SIGTERM을 받으면 포트를 바로 다른 프로세스에 넘기기 때문이다",
    ],
    answer: 1,
    explanation:
      "쿠버네티스는 SIGTERM과 엔드포인트 제거를 동시에 시작하고, 로드 밸런서와 kube-proxy가 이를 반영하는 데 몇 초가 걸린다. 그 사이 닫힌 서버로 온 요청이 거절된다. preStop에서 잠깐 기다려 빠질 시간을 번 뒤에 SIGTERM을 받게 한다.",
    anchor: "언제-죽여도-괜찮아야-한다",
  },
  {
    id: "twelve-factor-app-6",
    post: "twelve-factor-app",
    question: "큐 워커가 OOM으로 SIGKILL을 맞아도 작업을 잃지 않으려면 무엇이 필요한가?",
    choices: [
      "SIGKILL 처리기에서 작업을 큐에 되돌린다",
      "작업을 확인(ack)하기 전까지 큐에 남게 하고, 다시 실행돼도 결과가 같게 만든다",
      "terminationGracePeriodSeconds를 충분히 길게 잡는다",
      "워커를 StatefulSet으로 띄운다",
    ],
    answer: 1,
    explanation:
      "SIGKILL은 잡을 수 없어서 처리기가 돌 기회가 없다. 확인 전까지 작업이 큐에 남으면 다른 워커가 다시 받고, 작업이 멱등하면 두 번 돌아도 문제가 없다. 깔끔한 종료는 이때 재처리를 줄이는 최적화가 된다.",
    anchor: "언제-죽여도-괜찮아야-한다",
  },
  {
    id: "twelve-factor-app-7",
    post: "twelve-factor-app",
    question: "앱이 컨테이너 안의 /var/log/app.log에 로그를 쓰면 생기는 문제가 아닌 것은?",
    choices: [
      "kubectl logs에 아무것도 보이지 않는다",
      "디스크가 차면 Pod가 축출될 수 있다",
      "Pod가 사라지면 로그도 같이 사라진다",
      "같은 Deployment의 다른 Pod가 그 파일에 함께 써서 줄이 섞인다",
    ],
    answer: 3,
    explanation:
      "컨테이너 파일 시스템은 Pod마다 따로라서 다른 Pod가 같은 파일에 쓰지 않는다. 나머지는 실제로 생기는 문제다. 로그는 stdout으로 흘려보내고 수집과 보관은 실행 환경이 맡게 한다.",
    anchor: "로그는-흘려보내기만-한다",
  },
];
