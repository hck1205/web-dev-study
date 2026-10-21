import type { QuizQuestion } from "../types";

export const COLD_STARTS: QuizQuestion[] = [
  {
    id: "cold-starts-1",
    post: "cold-starts",
    question: "바쁜 시간대인데도 콜드 스타트가 줄줄이 생겼다. 가장 그럴듯한 이유는?",
    choices: [
      "트래픽이 많으면 플랫폼이 환경을 더 빨리 버리기 때문이다",
      "동시에 들어온 요청 수가 따뜻한 환경 수를 넘어 새 환경이 필요했기 때문이다",
      "핸들러 안의 코드가 길어서 매번 init을 다시 돌리기 때문이다",
      "메모리를 너무 크게 잡아 환경을 재사용하지 못하기 때문이다",
    ],
    answer: 1,
    explanation:
      "실행 환경 하나는 한 번에 요청 하나만 처리한다. 동시에 온 요청이 지금 쉬고 있는 환경 수보다 많으면 그 차이만큼 새 환경을 만들어야 하니 한가할 때가 아니어도 콜드 스타트가 난다.",
    anchor: "웜과-콜드는-같은-코드가-다른-길을-탄다",
  },
  {
    id: "cold-starts-2",
    post: "cold-starts",
    question: "로컬 측정에서 AWS SDK를 불러오는 핸들러를 esbuild로 묶었더니 import가 줄었다. minify까지 했을 때 거의 변화가 없었던 이유는?",
    choices: [
      "minify가 코드를 지워 SDK가 동작하지 않았기 때문이다",
      "Node는 minify된 파일을 캐시하지 않기 때문이다",
      "파일 크기는 줄었지만 V8이 파싱하고 실행할 코드의 양은 그대로이기 때문이다",
      "묶은 파일은 이미 minify되어 있었기 때문이다",
    ],
    answer: 2,
    explanation:
      "묶기는 파일 1,600개를 찾고 여는 비용을 없애서 효과가 있었다. minify는 공백과 이름을 줄일 뿐 실행해야 하는 모듈 초기화 코드는 같아서 init 시간이 거의 그대로였다.",
    anchor: "묶음-크기와-import가-init을-정한다",
  },
  {
    id: "cold-starts-3",
    post: "cold-starts",
    question: "평균 Duration은 40ms로 멀쩡한데 p99가 튄다. 콜드 스타트인지 확인하려면 무엇을 보나?",
    choices: [
      "REPORT 줄의 Init Duration 칸이 붙은 호출 수와 그 값",
      "Max Memory Used가 Memory Size에 가까운지",
      "Billed Duration이 Duration보다 짧은지",
      "함수의 동시성 한도 설정",
    ],
    answer: 0,
    explanation:
      "Init Duration은 콜드 스타트였던 호출에만 붙는다. Duration에는 init이 들어가지 않아 평균만 보면 보이지 않으니, Logs Insights에서 count(@initDuration)을 세어 비율과 분포를 본다.",
    anchor: "로그-한-줄에서-콜드-스타트-찾기",
  },
  {
    id: "cold-starts-4",
    post: "cold-starts",
    question: "5분마다 핑을 보내 함수를 데우고 있는데, 동시 요청 10개가 몰릴 때 콜드 스타트가 거의 줄지 않았다. 왜인가?",
    choices: [
      "핑은 $LATEST에만 효과가 있기 때문이다",
      "핑 간격이 너무 길어 환경이 매번 버려지기 때문이다",
      "핑 요청은 init을 건너뛰기 때문이다",
      "핑 하나는 환경 하나만 살려 두니 나머지 요청은 새 환경을 만들어야 하기 때문이다",
    ],
    answer: 3,
    explanation:
      "핑이 지켜 주는 건 환경 하나뿐이라 동시 요청 10개 중 9개는 여전히 콜드 스타트다. 핑이 그 환경을 쓰는 순간 요청이 오면 10개 모두 콜드가 되기도 한다.",
    anchor: "핑으로-데우기가-기대만큼-안-되는-이유",
  },
  {
    id: "cold-starts-5",
    post: "cold-starts",
    question: "SnapStart를 켠 함수에서 init 단계에 UUID 생성기의 시드를 정해 두면 어떤 문제가 생길 수 있나?",
    choices: [
      "복원할 때마다 init이 다시 돌아 콜드 스타트가 길어진다",
      "복원된 여러 환경이 같은 상태를 이어받아 같은 ID를 낼 수 있다",
      "스냅숏 크기가 커져 발행이 실패한다",
      "프로비저닝된 동시성이 자동으로 꺼진다",
    ],
    answer: 1,
    explanation:
      "SnapStart는 init을 발행할 때 한 번만 돌리고 그 상태를 모든 환경에 복사한다. 고유해야 하는 값과 네트워크 연결은 핸들러 안이나 복원 훅에서 새로 만들어야 한다.",
    anchor: "snapstart는-init이-끝난-순간을-사진으로-찍는다",
  },
  {
    id: "cold-starts-6",
    post: "cold-starts",
    question: "초당 50건, 요청 하나 1.2초인 함수에 30% 여유를 두고 프로비저닝된 동시성을 잡으면 몇 개인가?",
    choices: ["20개", "60개", "78개", "65개"],
    answer: 2,
    explanation:
      "동시 실행 수는 초당 요청 수에 처리 시간(초)을 곱한 50 × 1.2 = 60이다. 여기에 30% 여유를 곱하면 78이 된다. 처리 시간을 줄이면 필요한 환경 수도 같은 비율로 준다.",
    anchor: "미리-만들어-둘까-빨리-만들까",
  },
];
