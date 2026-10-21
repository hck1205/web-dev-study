import type { QuizQuestion } from "../types";

export const CDN_EDGE_ANYCAST: QuizQuestion[] = [
  {
    id: "cdn-edge-anycast-1",
    post: "cdn-edge-anycast",
    question: "서울과 프랑크푸르트에서 같은 CDN 도메인을 조회했더니 IP가 같은데 양쪽 다 ping이 몇 ms다. 어떻게 가능할까?",
    choices: [
      "DNS 캐시가 잘못된 IP를 돌려주고 있다",
      "같은 대역을 여러 PoP가 BGP로 광고하는 애니캐스트라서 각자 가까운 PoP가 답한다",
      "ping이 ICMP라서 실제 서버까지 가지 않는다",
      "CDN이 IP를 사용자마다 NAT로 바꿔 준다",
    ],
    answer: 1,
    explanation:
      "애니캐스트는 같은 IP를 여러 위치에서 광고하고, 라우터가 각자 좋은 경로의 위치로 보낸다. 그래서 주소는 같아도 실제로 답하는 PoP는 사용자마다 다르다.",
    anchor: "같은-ip가-여러-도시에-있다",
  },
  {
    id: "cdn-edge-anycast-2",
    post: "cdn-edge-anycast",
    question: "서울 사용자가 서울 PoP가 있는데도 도쿄 PoP로 간다. 가장 그럴듯한 이유는?",
    choices: [
      "도쿄가 물리적으로 더 가깝게 계산됐다",
      "CDN의 캐시가 서울에 없어서 도쿄로 넘겼다",
      "사용자 통신사의 BGP가 정책과 AS 경로 길이로 도쿄 쪽 경로를 더 좋게 본다",
      "브라우저가 PoP를 무작위로 고른다",
    ],
    answer: 2,
    explanation:
      "BGP는 킬로미터를 모르고 로컬 선호도, AS 경로 길이 같은 기준으로 길을 고른다. 그 통신사가 CDN과 서울에서 직접 연결되어 있지 않으면 도쿄 경로가 이길 수 있고, 보통 피어링으로 해결한다.",
    anchor: "라우터가-고르는-가까움",
  },
  {
    id: "cdn-edge-anycast-3",
    post: "cdn-edge-anycast",
    question: "애니캐스트 주소로 TCP 연결을 유지하던 중 경로가 다른 PoP로 바뀌었다. 무슨 일이 생기나?",
    choices: [
      "새 PoP가 연결 상태를 넘겨받아 그대로 이어 간다",
      "새 PoP가 모르는 연결의 패킷이라 RST를 보내 연결이 끊긴다",
      "패킷이 두 PoP에 복제되어 중복 응답이 온다",
      "DNS TTL이 끝날 때까지 이전 PoP로 계속 간다",
    ],
    answer: 1,
    explanation:
      "연결 상태는 처음 맺은 PoP의 서버에만 있다. 실습에서도 경로를 지운 직후 다음 패킷이 NRT에 닿았고 Connection reset by peer가 났다. 그래서 긴 연결을 쓰는 서비스는 재연결 로직을 둔다.",
    anchor: "경로가-바뀌면-tcp-연결은-어디로-가나",
  },
  {
    id: "cdn-edge-anycast-4",
    post: "cdn-edge-anycast",
    question: "DNS 방식 CDN에서 사내 DNS를 모두 미국 리졸버로 보내는 회사의 서울 직원이 미국 엣지를 받는다. 왜 그럴까?",
    choices: [
      "CDN 네임서버는 사용자가 아니라 리졸버의 위치를 보고 엣지를 고르기 때문이다",
      "미국 엣지의 캐시 적중률이 더 높아서다",
      "애니캐스트 경로가 미국으로 잡혀서다",
      "TLS 인증서가 미국에서 발급돼서다",
    ],
    answer: 0,
    explanation:
      "DNS 방식은 질의를 보낸 리졸버의 IP로 위치를 짐작한다. 리졸버가 멀면 엉뚱한 엣지를 받고, 리졸버가 EDNS Client Subnet으로 사용자 대역을 실어 보내면 이 문제가 줄어든다.",
    anchor: "dns로-엣지를-골라-주는-방식",
  },
  {
    id: "cdn-edge-anycast-5",
    post: "cdn-edge-anycast",
    question: "PoP가 300곳인 CDN에서 배포 직후 오리진으로 요청이 몰린다. 오리진 실드를 켜면 무엇이 달라지나?",
    choices: [
      "엣지 캐시가 꺼지고 모든 요청이 실드로 간다",
      "엣지의 미스가 실드에서 한 번 더 모여 오리진은 실드의 미스만 받는다",
      "오리진의 TLS 핸드셰이크가 생략된다",
      "사용자가 가까운 PoP 대신 실드에 직접 접속한다",
    ],
    answer: 1,
    explanation:
      "엣지마다 캐시가 따로라 같은 객체의 첫 미스가 PoP 수만큼 오리진에 갈 수 있다. 실드가 그 미스를 받아 자기 사본으로 답하고 동시 요청도 합쳐서, 오리진 요청이 실드의 미스로 줄어든다.",
    anchor: "엣지에서-오리진까지-한-번-더-모은다",
  },
  {
    id: "cdn-edge-anycast-6",
    post: "cdn-edge-anycast",
    question: "CDN을 붙였는데도 오리진이 직접 공격받고 있다. 먼저 고칠 것은?",
    choices: [
      "Cache-Control의 max-age를 늘린다",
      "오리진의 보안 그룹을 CDN 사업자의 IP 대역만 허용하게 바꾼다",
      "엣지 IP 몇 개를 방화벽 허용 목록에 고정한다",
      "DNS TTL을 줄인다",
    ],
    answer: 1,
    explanation:
      "오리진의 공인 주소가 열려 있으면 공격자는 CDN을 거치지 않고 오리진을 친다. CDN 대역만 허용하거나 오리진을 사설 망에 둬야 한다. 엣지 IP는 바뀌니 몇 개를 고정하는 방식은 어느 날 정상 트래픽까지 막는다.",
    anchor: "cdn-앞단에서-흔히-하는-실수",
  },
];
