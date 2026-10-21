import type { QuizQuestion } from "../types";

export const IDS_IPS: QuizQuestion[] = [
  {
    id: "ids-ips-1",
    post: "ids-ips",
    question: "SPAN 포트에 연결한 IDS가 SQL 인젝션 경보를 냈다. 그 요청은 어떻게 됐나?",
    choices: [
      "IDS가 패킷을 버려서 서버에 닿지 않았다",
      "IDS가 RST를 보내 연결을 끊었다",
      "방화벽이 경보를 받아 자동으로 차단했다",
      "원본은 이미 서버에 닿아 처리됐고, IDS는 복사본을 보고 알렸을 뿐이다",
    ],
    answer: 3,
    explanation:
      "IDS는 스위치가 만든 복사본을 보기 때문에 원래 트래픽의 길목에 있지 않다. 경보를 낼 때는 원본이 이미 서버에 도착했다. 막으려면 길목에 서는 IPS가 필요하다.",
    anchor: "길목에-서느냐-옆에서-보느냐",
  },
  {
    id: "ids-ips-2",
    post: "ids-ips",
    question: "경로 조작을 잡으려고 http.uri에 content:\"../\"를 걸었는데 /static/../../etc/passwd 요청에 울리지 않았다. 왜인가?",
    choices: [
      "http.uri는 응답 URI만 보기 때문에",
      "Suricata가 URI를 정규화해 /etc/passwd로 정리한 뒤라 ../가 남아 있지 않아서",
      "nocase를 빼먹어서",
      "점(.)은 content에 쓸 수 없는 문자라서",
    ],
    answer: 1,
    explanation:
      "http.uri는 디코딩하고 경로를 정리한 값이라 ../ 흔적이 사라진다. 실습에서도 http.uri 규칙은 조용했고 http.uri.raw 규칙만 울렸다. 무엇을 보려는지에 따라 버퍼를 고른다.",
    anchor: "공격-트래픽을-만들어-돌려-보기",
  },
  {
    id: "ids-ips-3",
    post: "ids-ips",
    question: "이동 평균과 표준편차로 이상을 찾는 탐지기가, 큰 튐 직후의 두 번째 공격을 놓쳤다. 이유로 가장 알맞은 것은?",
    choices: [
      "첫 번째 튐이 기준선 창에 들어가 표준편차를 키워 기준이 높아졌기 때문이다",
      "시그니처가 없어서",
      "표준편차는 항상 0이라서",
      "window가 너무 길어서 검사를 시작하지 못했기 때문이다",
    ],
    answer: 0,
    explanation:
      "튀는 값이 기준선 계산에 섞이면 평균과 표준편차가 함께 커져 다음 이상치를 정상으로 본다. 실습의 두 번째 테스트에서 120이 잡히지 않은 이유다. 그래서 튀는 값을 기준선에서 빼거나 시그니처와 함께 쓴다.",
    anchor: "이름표로-찾기-평소와-다른-것-찾기",
  },
  {
    id: "ids-ips-4",
    post: "ids-ips",
    question: "FORWARD 체인에 --queue-bypass 없이 NFQUEUE 규칙을 걸었는데 Suricata가 죽었다. 어떻게 되나?",
    choices: [
      "검사 없이 모든 트래픽이 통과한다",
      "커널이 자동으로 Suricata를 다시 띄운다",
      "큐에 받는 쪽이 없어 패킷이 버려지고 그 길의 트래픽이 모두 끊긴다",
      "drop 규칙에 걸린 패킷만 버려진다",
    ],
    answer: 2,
    explanation:
      "NFQUEUE의 기본 동작은 받는 쪽이 없으면 패킷을 버리는 fail-closed다. 실습에서도 Suricata를 띄우기 전 요청이 시간 초과로 끝났다. --queue-bypass를 주면 통과시키는 fail-open이 된다.",
    anchor: "길목에-세워서-막기",
  },
  {
    id: "ids-ips-5",
    post: "ids-ips",
    question: "\"10초에 SYN 30개\"로 포트 스캔을 잡는 규칙이 부하 테스트 중 136번 울렸다. 근본 원인은?",
    choices: [
      "threshold 타입이 limit이 아니라서",
      "부하 테스트 도구가 SYN 플래그를 잘못 설정해서",
      "HOME_NET이 비어 있어서",
      "규칙이 SYN 개수만 세고 서로 다른 포트 수는 세지 않아서",
    ],
    answer: 3,
    explanation:
      "경보의 목적지 포트가 전부 80이었다. 연결마다 SYN을 새로 보내는 정상 부하도 같은 개수를 채운다. 서비스 포트를 빼거나 서로 다른 포트 수를 세는 도구에 맡긴다.",
    anchor: "울리면-안-될-때-울린다",
  },
  {
    id: "ids-ips-6",
    post: "ids-ips",
    question: "인터넷에서 오는 HTTPS 요청의 URI까지 검사하려면 네트워크 IDS를 어디에 두어야 하나?",
    choices: [
      "TLS가 끝나는 로드 밸런서 뒤, 평문 HTTP가 흐르는 구간",
      "인터넷 게이트웨이 바로 앞",
      "로드 밸런서 앞의 퍼블릭 서브넷",
      "어디에 둬도 TLS 안의 URI는 볼 수 있다",
    ],
    answer: 0,
    explanation:
      "암호화 구간에서는 SNI, 인증서 같은 메타데이터만 보인다. 내용은 TLS를 푼 뒤에만 볼 수 있어서 로드 밸런서 뒤에 둔다. 앱까지 다시 암호화된다면 WAF나 호스트 기반 탐지로 옮겨 간다.",
    anchor: "어디에-세울까",
  },
  {
    id: "ids-ips-7",
    post: "ids-ips",
    question: "SQL 인젝션 경보의 같은 흐름 http 이벤트에 status 404가 찍혀 있다. 어떻게 읽나?",
    choices: [
      "IPS가 요청을 막아서 404가 됐다",
      "공격 시도는 있었지만 그 경로가 없어 실패했을 가능성이 크다",
      "데이터가 유출됐다는 뜻이다",
      "IDS가 패킷을 다 못 받았다는 뜻이다",
    ],
    answer: 1,
    explanation:
      "404는 서버가 직접 돌려준 응답이라 요청이 서버까지 갔지만 그 경로가 없었다는 뜻이다. 200에 평소보다 큰 응답이라면 실제로 데이터가 나갔을 수 있어 우선순위를 올린다. IPS가 막았다면 응답 자체가 없다.",
    anchor: "현장에서-ids-경보를-받았을-때",
  },
];
