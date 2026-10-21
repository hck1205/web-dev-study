import type { QuizQuestion } from "../types";

export const DDOS_PROTECTION: QuizQuestion[] = [
  {
    id: "ddos-protection-1",
    post: "ddos-protection",
    question:
      "입력 트래픽 그래프가 회선 용량에서 평평하게 잘렸고 서버 CPU는 한가하다. 앱 로그에도 에러가 거의 없다. 가장 먼저 의심할 것은?",
    choices: [
      "앱의 DB 연결 풀이 부족하다",
      "L7 요청 폭주로 앱이 느려졌다",
      "회선을 채우는 볼륨형 공격이라 서버 앞단에서 막아야 한다",
      "SYN 쿠키가 꺼져 있다",
    ],
    answer: 2,
    explanation:
      "bps가 회선 용량에서 잘리고 CPU가 한가하면 패킷이 서버에 닿기 전에 회선에서 버려지고 있다는 뜻이다. 이때 서버 커널 설정이나 앱 튜닝은 효과가 없고, 회선보다 굵은 엣지나 스크러빙, ISP에 맡겨야 한다.",
    anchor: "내-지표에서-어느-쪽인지-가른다",
  },
  {
    id: "ddos-protection-2",
    post: "ddos-protection",
    question: "SYN 큐가 가득 찼을 때 SYN 쿠키가 정상 사용자를 접속시킬 수 있는 이유는?",
    choices: [
      "큐에서 가장 오래된 항목을 지우고 그 자리에 넣기 때문에",
      "연결 정보를 SYN-ACK의 시퀀스 번호에 담아 보내고 큐에는 저장하지 않기 때문에",
      "위조된 출발지 IP를 찾아 차단하기 때문에",
      "accept 큐를 SYN 큐로 빌려 쓰기 때문에",
    ],
    answer: 1,
    explanation:
      "쿠키는 주소, 포트, 시간 조각을 비밀값과 함께 해시해 시퀀스 번호로 보내고 아무것도 저장하지 않는다. 정상 클라이언트가 그 번호 + 1로 ACK하면 다시 계산해 연결을 만든다. 오래된 항목을 지우는 방식이 아니라서 큐는 계속 찬 채로 남는다.",
    anchor: "syn-쿠키는-줄-없이-기억한다",
  },
  {
    id: "ddos-protection-3",
    post: "ddos-protection",
    question:
      "backlog 8인 서버에 응답 없는 SYN 40개를 보낸 뒤 tcp_syncookies=0으로 같은 실험을 했다. 정상 클라이언트에게는 어떤 일이 생겼나?",
    choices: [
      "SYN이 버려져 재전송을 거듭하다 7.1초 만에 접속했다",
      "쿠키를 받아 바로 접속했다",
      "RST를 받고 즉시 연결 거부 오류가 났다",
      "커널이 backlog를 자동으로 늘려 바로 접속했다",
    ],
    answer: 0,
    explanation:
      "쿠키를 끄면 큐가 찬 동안 오는 SYN을 버리고 ReqQFullDrop이 오른다(실측 37). 클라이언트는 1초에서 두 배씩 늘려 SYN을 다시 보내니 7초 무렵에야 접속했다. RST가 오는 게 아니라 아무 답이 없어서 기다리는 것이다.",
    anchor: "큐를-직접-채워-본-결과",
  },
  {
    id: "ddos-protection-4",
    post: "ddos-protection",
    question: "타임스탬프 옵션을 끈 클라이언트가 SYN 쿠키를 거쳐 연결했다. 서버의 ss -ti에서 무엇이 달라지나?",
    choices: [
      "rtt 값이 0으로 나온다",
      "연결이 ESTAB가 아니라 SYN-RECV로 남는다",
      "혼잡 제어 알고리즘이 reno로 바뀐다",
      "wscale 항목이 빠져 받는 창이 64KB로 묶인다",
    ],
    answer: 3,
    explanation:
      "쿠키는 윈도 스케일과 SACK 정보를 타임스탬프의 남는 비트에 숨기는데, 타임스탬프가 없으면 숨길 곳이 없다. 실측에서도 wscale 항목이 사라졌다. 연결 자체는 정상으로 맺어지니 상태는 ESTAB다.",
    anchor: "쿠키가-잃어버리는-것",
  },
  {
    id: "ddos-protection-5",
    post: "ddos-protection",
    question: "nginx location에 limit_req를 걸고 return 200으로 시험했더니 12건이 모두 200이었다. 왜 그런가?",
    choices: [
      "burst 값이 12보다 커서",
      "return이 rewrite 단계에서 응답을 끝내 preaccess 단계의 limit_req가 돌지 않아서",
      "limit_req_status를 적지 않아서",
      "$binary_remote_addr가 로컬 주소를 세지 않아서",
    ],
    answer: 1,
    explanation:
      "nginx는 요청을 단계별로 처리하고, return은 limit_req보다 앞선 rewrite 단계에서 응답을 끝낸다. 그래서 제한을 시험하려면 proxy_pass처럼 콘텐츠 단계까지 가는 location이 필요하다. limit_req_status는 거절할 때 상태 코드만 바꾼다.",
    anchor: "요청은-정상처럼-생겼다",
  },
  {
    id: "ddos-protection-6",
    post: "ddos-protection",
    question:
      "CDN을 앞에 뒀는데 엣지 지표는 조용하고 오리진 회선만 꽉 찼다. 무엇을 먼저 의심하고 어떻게 막나?",
    choices: [
      "CDN 캐시 히트율이 낮다. 캐시 수명을 늘린다",
      "오토스케일링 최대치가 낮다. 최대치를 올린다",
      "오리진 IP가 샜다. IP를 바꾸고 CDN 대역만 받도록 DROP 규칙으로 잠근다",
      "SYN 쿠키가 꺼져 있다. tcp_syncookies=2로 둔다",
    ],
    answer: 2,
    explanation:
      "엣지가 조용한데 오리진이 맞고 있으면 공격이 엣지를 건너뛰었다는 뜻이다. 오리진 IP를 바꾸고 보안 그룹이나 iptables로 CDN 대역만 허용하며, DROP을 써서 직접 오는 연결은 타임아웃만 보게 한다. 서버를 늘려도 같은 회선 뒤라 효과가 없다.",
    anchor: "오리진-ip가-새면-앞단은-소용없다",
  },
];
