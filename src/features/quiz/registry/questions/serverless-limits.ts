import type { QuizQuestion } from "../types";

export const SERVERLESS_LIMITS: QuizQuestion[] = [
  {
    id: "serverless-limits-1",
    post: "serverless-limits",
    question: "클라이언트는 504를 받았는데 Lambda 로그에는 41초 만에 정상 종료한 기록만 있다. 먼저 의심할 것은?",
    choices: [
      "함수의 메모리가 부족해 응답을 버렸다",
      "앞단 API Gateway의 통합 시간 한도(기본 29초)가 먼저 끊었다",
      "함수의 시간 한도가 15분으로 너무 길다",
      "콜드 스타트 때문에 응답이 늦게 시작됐다",
    ],
    answer: 1,
    explanation:
      "시간 한도는 층마다 따로 걸리고 가장 짧은 값이 전체를 정한다. REST API는 29초에 504를 돌려주고 함수는 그걸 모른 채 끝까지 돌기 때문에 함수 로그에는 에러가 없다.",
    anchor: "시간-한도는-겹겹이-걸려-있다",
  },
  {
    id: "serverless-limits-2",
    post: "serverless-limits",
    question: "주문 10건을 처리하는 비동기 함수가 매번 7건째에서 시간 초과로 끊긴다. 자동 재시도가 두 번 더 일어나면 어떻게 되나?",
    choices: [
      "재시도가 끊긴 지점부터 이어서 처리해 10건이 모두 끝난다",
      "재시도는 시간 한도를 두 배로 늘려서 다시 돈다",
      "앞의 7건은 세 번씩 처리되고 뒤의 3건은 한 번도 처리되지 않는다",
      "첫 시도에서 처리한 7건이 롤백된다",
    ],
    answer: 2,
    explanation:
      "재시도는 같은 이벤트로 처음부터 다시 시작하고, 시간 한도는 핸들러를 중간에서 강제로 멈춘다. 그래서 앞부분 부작용만 반복된다. 일을 쪼개고 처리 기록으로 멱등하게 만들어야 한다.",
    anchor: "시간이-다-되면-중간에서-끊긴다",
  },
  {
    id: "serverless-limits-3",
    post: "serverless-limits",
    question: "동기 호출 한도가 6MiB인데 5MB PDF 업로드가 실패한다. 이유와 가장 알맞은 해결책은?",
    choices: [
      "base64 인코딩으로 3분의 4로 부풀어 한도를 넘는다. presigned URL로 S3에 직접 올리게 한다",
      "PDF는 압축이 안 되어서 실패한다. 함수에서 gzip을 켠다",
      "6MiB는 응답 한도일 뿐이다. 요청 한도는 1MB라서 비동기로 바꾼다",
      "함수 메모리가 작아서 실패한다. 메모리를 10GB로 늘린다",
    ],
    answer: 0,
    explanation:
      "바이너리는 base64로 바뀌며 3바이트가 4글자가 되니 6MiB 한도에 원본은 4.5MiB까지만 들어간다. 큰 파일은 함수가 서명된 주소만 만들고 브라우저가 S3로 바로 올리게 하면 크기와 시간 한도를 모두 피한다.",
    anchor: "6mb를-넘는-파일은-함수를-지나가지-않게-한다",
  },
  {
    id: "serverless-limits-4",
    post: "serverless-limits",
    question: "SQS를 소비하는 배치 함수가 몰릴 때마다 로그인 API가 429를 낸다. 가장 알맞은 조치는?",
    choices: [
      "로그인 함수의 시간 한도를 늘린다",
      "배치 함수의 메모리를 줄인다",
      "로그인 함수에 핑을 보내 데워 둔다",
      "로그인 함수에 예약 동시성을 걸고, 배치 쪽 이벤트 소스에 최대 동시성을 건다",
    ],
    answer: 3,
    explanation:
      "동시 실행 한도는 리전의 계정 전체가 나눠 쓰니 배치가 몫을 다 가져가면 다른 함수가 거절된다. 예약 동시성으로 로그인 몫을 지키고, 배치는 큐 소비 속도를 묶어도 메시지를 잃지 않는다.",
    anchor: "동시성은-계정-전체가-나눠-쓴다",
  },
  {
    id: "serverless-limits-5",
    post: "serverless-limits",
    question: "단일 스레드로 도는 Node 핸들러의 메모리를 1,769MB에서 3,538MB로 올렸다. 실험 결과에 가장 가까운 것은?",
    choices: [
      "시간이 절반으로 줄고 비용은 그대로다",
      "시간은 조금만 줄고 GB-초 비용은 거의 두 배가 된다",
      "시간도 비용도 그대로다",
      "메모리가 커져 콜드 스타트가 사라진다",
    ],
    answer: 1,
    explanation:
      "메모리에 비례해 CPU가 늘지만 스레드 하나로 도는 일은 두 번째 vCPU를 쓰지 못한다. 실험에서 392ms가 357ms로만 줄었고 GB-초는 0.677에서 1.233으로 늘었다. 1vCPU까지는 메모리를 올려도 비용이 거의 같았다.",
    anchor: "메모리-칸-하나가-cpu까지-정한다",
  },
  {
    id: "serverless-limits-6",
    post: "serverless-limits",
    question: "환경 10개가 각자 풀 크기 5로 DB에 붙었더니 연결이 거절됐다. PgBouncer를 앞에 두자 200개 클라이언트가 모두 성공했다. 대신 무엇을 지켜봐야 하나?",
    choices: [
      "PgBouncer의 cl_waiting과 대기 시간이 함수 시간 한도를 넘지 않는지",
      "DB의 max_connections를 200 이상으로 올렸는지",
      "함수의 /tmp 사용량",
      "함수의 풀 크기를 50으로 늘렸는지",
    ],
    answer: 0,
    explanation:
      "프록시는 DB 연결 몇 개를 돌려 쓰게 해서 거절을 대기로 바꾼다. 실험에서도 170개가 줄에서 기다렸다. 대기가 길어지면 결국 시간 초과로 실패하니 대기 지표를 보고 동시성 상한을 함께 건다.",
    anchor: "동시-실행-수만큼-db-연결이-생긴다",
  },
  {
    id: "serverless-limits-7",
    post: "serverless-limits",
    question: "업로드 파일을 /tmp에 저장하고 다음 요청에서 읽으려 했더니 자주 실패한다. 왜인가?",
    choices: [
      "/tmp는 읽기 전용이라서",
      "/tmp는 요청이 끝날 때마다 자동으로 비워져서",
      "/tmp는 실행 환경마다 따로 있고 환경이 새로 만들어지면 비어 있어서",
      "/tmp는 512MB를 넘으면 앞부분부터 지워져서",
    ],
    answer: 2,
    explanation:
      "같은 환경이 재사용되는 동안은 남지만, 다음 요청이 다른 동시 환경이나 새 환경으로 가면 파일이 없다. 여러 요청이 함께 봐야 하는 파일은 S3나 EFS에 둔다.",
    anchor: "tmp는-환경이-바뀌면-사라진다",
  },
];
