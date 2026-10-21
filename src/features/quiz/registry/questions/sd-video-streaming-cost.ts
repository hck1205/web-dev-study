import type { QuizQuestion } from "../types";

export const SD_VIDEO_STREAMING_COST: QuizQuestion[] = [
  {
    id: "sd-video-streaming-cost-1",
    post: "sd-video-streaming-cost",
    question: "MP4 파일 하나를 Range 요청으로 내려주는 방식과 비교해 HLS 같은 적응형 스트리밍이 주는 가장 큰 차이는?",
    choices: [
      "파일을 암호화하지 않아도 퍼 갈 수 없다",
      "조각을 받을 때마다 그때 회선에 맞는 화질을 고를 수 있다",
      "CDN 없이도 원본 요청이 줄어든다",
      "키프레임이 필요 없어 압축이 더 잘 된다",
    ],
    answer: 1,
    explanation:
      "파일 하나는 화질이 하나라 회선이 느려지면 멈추고 빨라져도 올라가지 못한다. HLS는 화질별로 몇 초짜리 조각을 만들어 두고 플레이어가 조각마다 화질을 고른다. 조각마다 키프레임이 필요해 압축은 오히려 조금 손해다.",
    anchor: "파일-하나를-통째로-보내면-생기는-일",
  },
  {
    id: "sd-video-streaming-cost-2",
    post: "sd-video-streaming-cost",
    question: "hls_time을 4로 줬는데 조각 길이가 4.8초, 3.2초로 들쭉날쭉하게 나왔다. 가장 그럴듯한 원인은?",
    choices: [
      "음성 비트레이트가 영상보다 높아서",
      "재생 목록의 TARGETDURATION을 5로 적어서",
      "키프레임 간격이 1.6초라 4초 지점에 키프레임이 없어서",
      "세 화질을 한 번에 인코딩해서",
    ],
    answer: 2,
    explanation:
      "조각은 키프레임에서만 잘린다. 48프레임(30fps에서 1.6초)마다 키프레임이 있으면 4초에 가장 가까운 경계인 4.8초에서 자르게 된다. 키프레임 간격을 조각 길이를 나눌 수 있는 값으로 고정하고 장면 전환 키프레임을 끈다.",
    anchor: "목록-두-겹과-4초짜리-조각",
  },
  {
    id: "sd-video-streaming-cost-3",
    post: "sd-video-streaming-cost",
    question: "사다리가 1080p(5.6Mbps), 720p(3.2Mbps), 360p(1.0Mbps)이고 플레이어는 잰 속도의 80% 안에서 고른다. 회선이 3Mbps로 안정된 시청자는 어떻게 되나?",
    choices: [
      "720p를 받는다",
      "1080p와 360p를 번갈아 받는다",
      "계속 멈춘다",
      "360p에 머문다. 2.4Mbps 안에 드는 화질이 360p뿐이라서다",
    ],
    answer: 3,
    explanation:
      "3Mbps의 80%는 2.4Mbps라 720p에 못 미치고 그 사이 화질이 없다. 본문 실험에서도 3Mbps로 회복한 뒤 끝까지 360p였다. 사다리 칸 사이가 넓으면 회선을 놀리게 되니 480p 같은 중간 칸을 둔다.",
    anchor: "회선에-맞춰-화질을-바꾸는-플레이어",
  },
  {
    id: "sd-video-streaming-cost-4",
    post: "sd-video-streaming-cost",
    question: "VOD 조각과 재생 목록에 줄 Cache-Control로 가장 알맞은 조합은?",
    choices: [
      "조각은 max-age=31536000, immutable, 목록은 짧은 max-age",
      "조각과 목록 모두 no-store",
      "조각은 짧은 max-age, 목록은 1년",
      "조각과 목록 모두 1년, 바뀌면 같은 이름으로 덮어쓴다",
    ],
    answer: 0,
    explanation:
      "다 만든 VOD 조각은 바뀌지 않으니 오래 캐시하고, 고칠 일이 생기면 새 이름으로 만든다. 목록은 화질 추가나 영상 내리기로 바뀔 수 있어 짧게 준다. 같은 이름을 덮어쓰면 엣지의 옛 사본과 어긋나 404가 난다.",
    anchor: "엣지가-조각을-들고-있으면",
  },
  {
    id: "sd-video-streaming-cost-5",
    post: "sd-video-streaming-cost",
    question: "엣지가 수백 곳일 때 엣지와 원본 사이에 중간 캐시(오리진 실드)를 두는 이유는?",
    choices: [
      "시청자와 엣지 사이 지연을 줄이려고",
      "엣지마다 한 번씩 오던 미스를 중간 캐시가 받아 원본 요청을 줄이려고",
      "조각을 암호화하려고",
      "플레이어가 화질을 고르게 하려고",
    ],
    answer: 1,
    explanation:
      "엣지 하나당 조각마다 한 번은 원본에 오니 엣지가 수백 곳이면 수백 번이다. 중간 캐시가 이 미스들을 받아 주고, 동시에 몰린 같은 키의 미스는 하나로 모아 원본에 한 번만 묻는다. 시청자 쪽 지연은 엣지가 맡는다.",
    anchor: "엣지가-조각을-들고-있으면",
  },
  {
    id: "sd-video-streaming-cost-6",
    post: "sd-video-streaming-cost",
    question: "하루 재생 5천만 번, 평균 6분, 평균 2.5Mbps일 때 평균 비트레이트를 1.5Mbps로 낮추면 전송 비용은?",
    choices: [
      "1Mbps만큼이니 약 10% 준다",
      "시청 시간이 같으니 변하지 않는다",
      "40% 준다",
      "60% 준다",
    ],
    answer: 2,
    explanation:
      "전송량은 재생 수 × 시청 시간 × 비트레이트에 비례한다. 비트레이트가 2.5에서 1.5로 40% 줄면 5,625TB가 3,375TB가 되어 비용도 40% 준다. 그래서 효율 좋은 코덱과 콘텐츠별 사다리가 비용 최적화의 큰 손잡이다.",
    anchor: "하루-수-페타바이트를-내보내는-값",
  },
  {
    id: "sd-video-streaming-cost-7",
    post: "sd-video-streaming-cost",
    question: "HLS 조각을 AES-128로 암호화했다. 이 보호의 무게가 실리는 곳은?",
    choices: [
      "조각 파일 이름을 짐작하기 어렵게 짓는 것",
      "조각 길이를 짧게 하는 것",
      "CDN의 캐시 수명",
      "목록에 적힌 키 주소를 내주는 서버의 권한 검사",
    ],
    answer: 3,
    explanation:
      "암호화한 조각은 키 없이는 열리지 않지만, 키는 목록에 적힌 주소에서 받는다. 키 서버가 로그인과 권한을 검사하지 않으면 누구나 키를 받아 풀 수 있다. 키를 기기 보호 영역 밖으로 꺼내지 못하게 하려면 DRM을 쓴다.",
    anchor: "남이-퍼-가지-못하게",
  },
];
