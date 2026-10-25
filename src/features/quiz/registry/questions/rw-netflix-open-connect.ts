import type { QuizQuestion } from "../types";

export const RW_NETFLIX_OPEN_CONNECT: QuizQuestion[] = [
  {
    id: "rw-netflix-open-connect-1",
    post: "rw-netflix-open-connect",
    question: "넷플릭스가 요청 시점에 채우는 보통 CDN 대신 한가한 시간에 미리 밀어 넣는 방식을 쓸 수 있었던 이유로 자료가 든 것은?",
    choices: [
      "넷플릭스 영상은 HTTP가 아닌 별도 프로토콜로 전송되어서",
      "정해진, 한정된 카탈로그라 무엇이 많이 보일지 미리 예측할 수 있어서",
      "ISP가 넷플릭스 트래픽에 요금을 받지 않아서",
      "OCA가 모든 콘텐츠를 영구 저장해 갱신이 필요 없어서",
    ],
    answer: 1,
    explanation:
      "2021년 보고서는 넷플릭스가 정해진 카탈로그를 가져 콘텐츠를 미리 배치할 수 있다고 적었다. 무엇이 요청될지 알 수 없는 콘텐츠라면 이 방식은 통하지 않는다. OCA는 날마다 갱신을 받으니 영구 저장도 아니다.",
    anchor: "남의-cdn-대신-직접-만든-이유",
  },
  {
    id: "rw-netflix-open-connect-2",
    post: "rw-netflix-open-connect",
    question: "ISP 건물 안의 OCA가 디스크에 영화 파일을 다 갖고 있는데 AWS와의 연결이 끊겼다. 배포 안내서에 따르면 어떻게 되나?",
    choices: [
      "OCA는 트래픽 전송을 멈춘다",
      "OCA가 스스로 회원 권한을 확인하며 계속 보낸다",
      "OCA가 IX의 OCA로 요청을 모두 넘긴다",
      "아무 영향이 없다. OCA는 독립 서버다",
    ],
    answer: 0,
    explanation:
      "요구 사항 표에 AWS 연결을 잃으면 OCA가 전송을 멈춘다고 적혀 있다. 누가 무엇을 어디서 받을지는 AWS의 제어 평면이 정하고, OCA는 보고와 전송만 한다. OCA에는 회원 데이터가 없어서 스스로 권한을 확인할 수도 없다.",
    anchor: "재생-버튼을-누르면-결정은-aws-전송은-oca",
  },
  {
    id: "rw-netflix-open-connect-3",
    post: "rw-netflix-open-connect",
    question: "ISP가 망 안 OCA에는 /22를, 같은 블록의 /24는 피어링으로 광고했다. 그 /24 가입자의 영상은 어디서 오나?",
    choices: [
      "AS 경로가 짧은 망 안 OCA에서",
      "지리적으로 가장 가까운 OCA에서",
      "더 구체적인 /24를 받은 피어링 쪽에서",
      "두 곳에서 반씩 나눠서",
    ],
    answer: 2,
    explanation:
      "선택 순서의 첫 기준이 가장 구체적인 경로다. AS 경로 길이나 거리는 그 뒤에야 본다. 그래서 안내서는 OCA에 가장 구체적인 경로를 광고하라고 권한다.",
    anchor: "어느-oca로-보낼지-정하는-순서",
  },
  {
    id: "rw-netflix-open-connect-4",
    post: "rw-netflix-open-connect",
    question: "이미 잘 돌고 있는 OCA 여러 대 중 한 대에만 먼저 MED 값을 붙였다. 안내서가 위험하다고 경고한 이유는?",
    choices: [
      "MED가 붙은 장비는 IPv6를 받지 못해서",
      "MED가 없는 장비는 0으로 취급돼, 그 사이 MED를 붙인 장비보다 앞서 트래픽을 가져가서",
      "넷플릭스가 MED를 무시해서 아무 효과가 없어서",
      "MED를 붙이면 BGP 세션이 끊겨서",
    ],
    answer: 1,
    explanation:
      "넷플릭스는 MED가 없으면 0으로 보고, 0은 0보다 큰 MED보다 앞선다. 한 장비에만 MED를 붙이면 나머지 장비가 트래픽을 모두 가져갈 수 있다. 그래서 모든 장비의 모든 세션에 동시에 바꿔야 한다.",
    anchor: "어느-oca로-보낼지-정하는-순서",
  },
  {
    id: "rw-netflix-open-connect-5",
    post: "rw-netflix-open-connect",
    question: "같은 클러스터의 OCA #1이 밤에 영화 A를 받았다. OCA #2는 영화 A를 어디서 받으려 하나?",
    choices: [
      "트랜짓으로 넷플릭스 채우기 사이트에서",
      "다음 날 저녁 피크에 첫 요청이 왔을 때 오리진에서",
      "IX의 OCA에서만",
      "같은 클러스터의 OCA #1에서",
    ],
    answer: 3,
    explanation:
      "클러스터이거나 같은 서브넷이면 피어 채우기를 한다. 가장 효율적인 방법이라 바깥 대신 OCA #1에서 받는다. 그다음 선택지는 BGP 경로표에서 보이는 다른 OCA에서 받는 계층 채우기다.",
    anchor: "한가한-시간에-미리-채운다",
  },
  {
    id: "rw-netflix-open-connect-6",
    post: "rw-netflix-open-connect",
    question: "두 대짜리 매니페스트 클러스터에서 ISP가 넷플릭스에 알리지 않고 OCA 한 대를 다른 사이트로 옮겼다. 생길 수 있는 문제로 안내서가 든 것은?",
    choices: [
      "트래픽이 엉뚱한 사이트로 가고 채우기가 비효율적이 되며 특정 장비에 부하가 몰린다",
      "옮긴 장비가 기존 이름과 지표를 그대로 유지해 혼란이 생긴다",
      "다른 장비의 콘텐츠가 모두 지워진다",
      "BGP 세션이 자동으로 다른 ISP와 맺어진다",
    ],
    answer: 0,
    explanation:
      "클러스터는 공간의 일부에 같은 인기작을, 나머지에 서로 다른 작품을 나눠 담는 한 대의 큰 서버처럼 동작한다. 한 대를 말없이 빼면 그 배치가 깨진다. 옮긴 장비는 새 장비로 취급돼 이름과 지표가 새로 시작되고, 다음 채우기 창 이후에야 다시 전송할 수 있다.",
    anchor: "같은-사이트의-oca는-한-대처럼",
  },
  {
    id: "rw-netflix-open-connect-7",
    post: "rw-netflix-open-connect",
    question: "새로 설치한 OCA가 켜져 있고 BGP도 맺어졌는데 아직 가입자에게 영상을 보내지 않는다. 가장 그럴듯한 이유는?",
    choices: [
      "OCA는 첫 저녁 피크가 지나야 켜진다",
      "ISP가 직접 전송을 켜야 하는데 잊었다",
      "개통 검사를 모두 통과하고 충분히 덜어 낼 만큼 채워져야 넷플릭스 운영팀이 전송을 켠다",
      "OCA는 IPv6 주소가 있어야만 전송한다",
    ],
    answer: 2,
    explanation:
      "길들이기 기간에 인터페이스, 연결, 채우기, BGP 검사가 돌고 약 24시간마다 결과가 메일로 온다. 모든 검사를 통과하고 콘텐츠가 충분히 채워져야 넷플릭스가 전송을 켠다. 덜 채운 장비에 트래픽을 보내면 대부분이 다시 바깥으로 나가기 때문이다.",
    anchor: "트래픽을-받기-전에-통과해야-하는-검사",
  },
];
