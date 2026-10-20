import type { QuizQuestion } from "../types";

export const SERVICE_MESH: QuizQuestion[] = [
  {
    id: "service-mesh-1",
    post: "service-mesh",
    question: "istiod(컨트롤 플레인)가 몇 분 동안 죽었다. 가장 먼저 나타나는 증상에 가까운 것은?",
    choices: [
      "모든 서비스 간 요청이 즉시 503으로 실패한다",
      "기존 트래픽은 흐르지만 새로 뜬 Pod가 다른 프록시의 엔드포인트 목록에 들어가지 않는다",
      "사이드카가 모두 재시작된다",
      "mTLS가 꺼지고 평문으로 통신한다",
    ],
    answer: 1,
    explanation:
      "컨트롤 플레인은 요청 경로에 없어서 프록시는 마지막으로 받은 설정으로 계속 일한다. 대신 EDS 갱신과 인증서 갱신이 멈춰서 새 Pod 반영이 안 되고, 오래 가면 인증서 만료로 통신이 끊긴다.",
    anchor: "데이터-플레인과-컨트롤-플레인",
  },
  {
    id: "service-mesh-2",
    post: "service-mesh",
    question: "사이드카 iptables 규칙에서 프록시 자신(UID 1337)이 여는 연결을 RETURN시키는 이유는?",
    choices: [
      "프록시의 연결이 다시 15001로 돌아와 자기 자신에게 무한히 돌기 때문이다",
      "프록시는 root 권한이 없어서 REDIRECT를 쓸 수 없기 때문이다",
      "프록시의 연결은 UDP라 nat 테이블을 지나지 않기 때문이다",
      "conntrack 표가 꽉 차는 것을 막으려고",
    ],
    answer: 0,
    explanation:
      "앱의 연결을 받은 Envoy는 원래 목적지로 새 연결을 연다. 이 연결도 OUTPUT 체인을 지나므로 예외로 빼지 않으면 다시 15001로 돌아온다. 그래서 owner 매치로 프록시의 UID·GID를 건너뛴다.",
    anchor: "앱-모르게-끼어드는-iptables",
  },
  {
    id: "service-mesh-3",
    post: "service-mesh",
    question: "Istio를 막 설치했다. 사이드카가 없는 Pod가 평문 HTTP로 사이드카가 있는 Pod를 부르면 어떻게 되나?",
    choices: [
      "기본이 STRICT라 연결이 끊긴다",
      "사이드카가 자동으로 상대에게도 프록시를 붙인다",
      "기본이 PERMISSIVE라 평문 요청도 받아들인다",
      "istiod가 요청을 대신 암호화해 전달한다",
    ],
    answer: 2,
    explanation:
      "Istio의 기본 PeerAuthentication은 PERMISSIVE라서 평문과 mTLS를 모두 받는다. 도입 중간에 깨지지 않게 하려는 것이고, 평문을 막으려면 STRICT로 바꿔야 한다. STRICT에서는 실습처럼 평문 요청이 Empty reply로 끊긴다.",
    anchor: "인증서에-서비스-이름을-적는다",
  },
  {
    id: "service-mesh-4",
    post: "service-mesh",
    question: "앱 HTTP 클라이언트가 최대 3번 시도하고, 메시는 Istio 기본 재시도(2번)를 쓴다. 대상이 계속 503이면 대상이 받는 요청 수는?",
    choices: ["3번", "5번", "6번", "9번"],
    answer: 3,
    explanation:
      "Istio의 재시도 2번은 첫 시도를 빼고 센 값이라 사이드카는 한 번에 3번 보낸다. 앱의 시도 3번 각각이 3번이 되니 9번이다. 층마다 곱해지므로 재시도는 한 층에서만 한다.",
    anchor: "재시도가-곱해진다",
  },
  {
    id: "service-mesh-5",
    post: "service-mesh",
    question: "메시 환경에서 앱 로그엔 아무것도 없는 503이 났고, Envoy 접근 로그 플래그가 UC다. 먼저 의심할 것은?",
    choices: [
      "VirtualService의 호스트 이름 오타",
      "앱의 keep-alive 유휴 타임아웃이 프록시 연결 풀보다 짧아 막 닫히는 연결에 요청이 실렸다",
      "대상 Service에 엔드포인트가 하나도 없다",
      "DestinationRule의 동시 연결 상한을 넘었다",
    ],
    answer: 1,
    explanation:
      "UC는 업스트림이 연결을 끊었다는 뜻이다. 앱이 유휴 연결을 먼저 닫는데 프록시가 그 연결을 재사용하면 이렇게 된다. 호스트 오타는 NR, 엔드포인트 없음은 UH, 상한 초과는 UO로 찍힌다.",
    anchor: "메시가-있으면-로그를-다시-읽어야-한다",
  },
  {
    id: "service-mesh-6",
    post: "service-mesh",
    question: "Istio ambient 모드에서 ztunnel이 맡는 일은?",
    choices: [
      "HTTP 헤더 기반 라우팅과 재시도",
      "노드 단위 L4 처리: mTLS(HBONE)와 L4 인가",
      "Pod마다 하나씩 붙어 L4와 L7을 모두 처리",
      "쿠버네티스 API를 watch하며 xDS를 내려보내는 일",
    ],
    answer: 1,
    explanation:
      "ztunnel은 노드마다 하나 뜨는 L4 프록시로 mTLS 터널(HBONE)과 L4 정책만 한다. 재시도, 헤더 라우팅 같은 L7 기능은 필요한 서비스에만 둔 waypoint(Envoy)가 맡는다. xDS를 내려보내는 건 istiod다.",
    anchor: "사이드카-없이-메시를-만드는-방식",
  },
  {
    id: "service-mesh-7",
    post: "service-mesh",
    question: "keep-alive 연결을 재사용하는 실습에서 사이드카 평문과 mTLS의 지연 차이가 측정 오차 안이었던 이유는?",
    choices: [
      "Envoy가 mTLS를 하드웨어로 처리해서",
      "실습에서 mTLS가 실제로는 꺼져 있어서",
      "TLS 핸드셰이크는 연결당 처음 한 번뿐이고 이후 대칭키 암호화는 싸기 때문에",
      "mTLS가 HTTP/2를 강제해 더 빨라지기 때문에",
    ],
    answer: 2,
    explanation:
      "연결을 재사용하면 비싼 핸드셰이크가 처음에만 일어나고, 이후 요청은 대칭키 암호화만 한다. 그래서 지연 대부분은 TLS가 아니라 프록시 홉 두 개에서 나온다. 매번 새 연결을 여는 클라이언트라면 차이가 커진다.",
    anchor: "프록시-두-개가-더하는-시간",
  },
];
