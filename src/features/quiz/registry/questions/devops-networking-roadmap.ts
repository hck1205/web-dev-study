import type { QuizQuestion } from "../types";

export const DEVOPS_NETWORKING_ROADMAP: QuizQuestion[] = [
  {
    id: "devops-networking-roadmap-1",
    post: "devops-networking-roadmap",
    question: "로드 밸런서 뒤에서 502가 났는데 그 시각의 앱 로그가 비어 있다. 가장 먼저 내릴 수 있는 판단은?",
    choices: [
      "앱이 요청을 처리하다가 예외를 삼켰다",
      "브라우저가 요청을 보내지 않았다",
      "요청이 앱 프로세스까지 오지 않았고, 앞단 프록시가 502를 만들었다",
      "DNS가 잘못된 주소를 돌려줬다",
    ],
    answer: 2,
    explanation:
      "502는 앞단 프록시가 뒤에서 제대로 된 응답을 받지 못했을 때 스스로 만드는 코드다. 앱 로그가 비어 있으면 뒤쪽 연결이 거절됐거나 끊겨 요청이 앱에 닿지 않은 것이다. DNS가 틀렸다면 로드 밸런서 접근 로그에도 요청이 남지 않는다.",
    anchor: "이-증상이면-이-글부터",
  },
  {
    id: "devops-networking-roadmap-2",
    post: "devops-networking-roadmap",
    question: "배포와 상관없이 하루에 몇 건씩 502가 섞인다. ALB 뒤의 Node.js 서버라면 무엇을 먼저 의심하나?",
    choices: [
      "앱의 keep-alive 유휴 시간이 로드 밸런서보다 짧아 서버가 먼저 연결을 닫는다",
      "드레이닝 없이 서버를 빼고 있다",
      "VXLAN 오버레이가 MTU를 깎는다",
      "CoreDNS의 ndots 설정이 질의를 늘린다",
    ],
    answer: 0,
    explanation:
      "ALB는 유휴 연결을 기본 60초 동안 재사용하는데 Node.js의 keepAliveTimeout 기본값은 5초다. 로드 밸런서가 재사용하려던 연결을 앱이 막 닫으면 그 요청 하나가 502가 된다. 드레이닝 문제라면 배포 시각에 몰려서 난다.",
    anchor: "이-증상이면-이-글부터",
  },
  {
    id: "devops-networking-roadmap-3",
    post: "devops-networking-roadmap",
    question: "Pod 안에서 클러스터 안 이름과 바깥 이름이 모두 한꺼번에 풀리지 않기 시작했다. 가장 먼저 볼 곳은?",
    choices: [
      "바깥 공용 리졸버의 장애",
      "최근에 건 이그레스 기본 거부 NetworkPolicy가 53번을 열었는지",
      "CDN 엣지의 캐시 TTL",
      "로드 밸런서의 세션 고정 설정",
    ],
    answer: 1,
    explanation:
      "Pod는 모든 이름을 CoreDNS에게 묻기 때문에 그 길 하나가 막히면 안쪽 이름과 바깥 이름이 함께 죽는다. 이그레스 기본 거부를 걸고 DNS를 허용하지 않은 것이 흔한 원인이다. 바깥 리졸버 장애라면 클러스터 안 서비스 이름은 계속 풀린다.",
    anchor: "이-증상이면-이-글부터",
  },
  {
    id: "devops-networking-roadmap-4",
    post: "devops-networking-roadmap",
    question: "curl -w 출력이 connect=0.0001 tls=0.0045 ttfb=0.3052였다. 어디를 봐야 하나?",
    choices: [
      "TCP 연결 경로. connect 값이 가장 작아서 이상하다",
      "TLS 인증서. 4.5ms는 너무 길다",
      "대역폭. 회선을 늘려야 한다",
      "앱이나 그 뒤의 의존성. TLS가 끝난 뒤 첫 바이트까지 약 300ms가 걸렸다",
    ],
    answer: 3,
    explanation:
      "curl의 시각은 요청 시작부터의 누적값이라 빼서 읽는다. ttfb에서 tls를 빼면 약 300ms로, 연결과 핸드셰이크가 끝난 뒤 서버가 응답을 만드는 데 쓴 시간이다. 네트워크 구간은 합쳐도 5ms가 안 된다.",
    anchor: "느리다는-말을-숫자-셋으로",
  },
  {
    id: "devops-networking-roadmap-5",
    post: "devops-networking-roadmap",
    question: "증상 문장으로 처음 펼 글을 고르는 규칙 표에서 [\"502\"] 규칙을 [\"502\", \"배포\"] 규칙보다 위에 두면 어떻게 되나?",
    choices: [
      "배포 중 502도 전부 [\"502\"] 규칙에 먼저 걸려 드레이닝 글로 가지 않는다",
      "두 규칙이 함께 맞아 글 두 개를 돌려준다",
      "아무 영향이 없다. 더 구체적인 규칙이 자동으로 이긴다",
      "배포라는 단어가 없는 502만 잘못 분류된다",
    ],
    answer: 0,
    explanation:
      "규칙은 위에서부터 보고 처음 맞는 규칙에서 멈춘다. 그래서 넓은 규칙이 위에 있으면 아래의 구체적인 규칙은 영영 쓰이지 않는다. 방화벽 규칙이 위에서부터 읽히는 것과 같은 이유로, 구체적인 규칙을 위에 둔다.",
    anchor: "증상-문장에서-첫-글-고르기",
  },
  {
    id: "devops-networking-roadmap-6",
    post: "devops-networking-roadmap",
    question: "목차상 SDN을 장비 칸 바로 뒤가 아니라 맨 마지막에 읽는 이유로 이 글이 든 것은?",
    choices: [
      "SDN은 클라우드에서만 쓰여서 온프레미스를 다 본 뒤에 읽는다",
      "VPC와 Pod 네트워크를 먼저 겪은 뒤에 보면 그것들이 모두 오버레이였다는 게 보여 앞 칸이 한 번에 묶인다",
      "SDN은 보안 장치라서 보안 칸 다음에 와야 한다",
      "SDN 글이 가장 쉬워서 쉬어 가는 칸으로 둔다",
    ],
    answer: 1,
    explanation:
      "VXLAN과 컨트롤러 구조는 VPC 내부와 Flannel·Calico 같은 CNI가 실제로 쓰는 방식이다. 클라우드와 컨테이너 칸을 먼저 읽어 두면 SDN 글에서 앞의 장면들이 같은 원리로 정리된다. 개념상으로는 VLAN 다음이지만 읽는 순서는 마지막이 낫다.",
    anchor: "열-칸은-서로-기대고-있다",
  },
];
