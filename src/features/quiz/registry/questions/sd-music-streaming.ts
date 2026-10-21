import type { QuizQuestion } from "../types";

export const SD_MUSIC_STREAMING: QuizQuestion[] = [
  {
    id: "sd-music-streaming-1",
    post: "sd-music-streaming",
    question: "1억 곡을 160kbps, 5분 길이로 한 벌씩 저장하고 곡당 메타데이터가 700바이트라면 음원과 메타데이터는 각각 얼마쯤인가?",
    choices: ["60TB와 7GB", "600TB와 70GB", "6PB와 700GB", "600GB와 70MB"],
    answer: 1,
    explanation:
      "곡 하나는 160,000 × 300 ÷ 8 = 6MB라서 1억 곡이면 600TB다. 메타데이터는 1억 × 700B = 70GB로, 둘은 크기가 네 자리 가까이 차이 나서 처음부터 다른 저장소에 둔다.",
    anchor: "600tb와-70gb는-어디서-나왔나",
  },
  {
    id: "sd-music-streaming-2",
    post: "sd-music-streaming",
    question: "재생 요청을 받은 웹 서버가 음원 파일을 직접 보내지 않고 서명된 CDN 주소를 돌려주는 이유로 가장 알맞은 것은?",
    choices: [
      "웹 서버는 권한만 판단하고, 큰 전송은 사용자 가까운 엣지가 맡게 하려고",
      "서명된 주소를 쓰면 음원이 자동으로 암호화되기 때문에",
      "CDN은 Range 요청을 처리하지 못해서 웹 서버가 대신 잘라야 하므로",
      "웹 서버가 파일을 보내면 HTTPS를 쓸 수 없어서",
    ],
    answer: 0,
    explanation:
      "웹 서버는 이 사용자가 이 곡을 들어도 되는지만 판단하고, 그 판단을 만료 시각과 서명이 붙은 주소로 넘긴다. 파일은 엣지가 보내니 웹 서버가 큰 전송에 묶이지 않는다. 서명은 위조를 막을 뿐 파일을 암호화하지는 않는다.",
    anchor: "재생-버튼부터-첫-소리까지",
  },
  {
    id: "sd-music-streaming-3",
    post: "sd-music-streaming",
    question: "6,000,000바이트 파일에 `Range: bytes=7000000-`을 요청하면 서버는 어떻게 답하나?",
    choices: [
      "200 OK와 파일 전체",
      "206 Partial Content와 빈 본문",
      "416 Range Not Satisfiable과 `Content-Range: bytes */6000000`",
      "404 Not Found",
    ],
    answer: 2,
    explanation:
      "요청한 시작 위치가 파일 크기보다 뒤라 줄 수 있는 구간이 없다. 서버는 416과 함께 전체 크기를 `bytes */6000000`으로 알려 준다. 플레이어가 파일 크기를 잘못 알고 있을 때 이런 응답이 쌓인다.",
    anchor: "곡을-조각으로-받는다",
  },
  {
    id: "sd-music-streaming-4",
    post: "sd-music-streaming",
    question: "재생목록에 곡을 넣은 직후 목록을 다시 열었더니 방금 넣은 곡이 안 보인다. 리더-팔로워 구조에서 가장 흔한 해결책은?",
    choices: [
      "팔로워를 더 늘린다",
      "재생목록 테이블을 샤딩한다",
      "캐시 수명을 늘린다",
      "쓴 직후 몇 초 동안은 그 사용자의 읽기를 리더로 보낸다",
    ],
    answer: 3,
    explanation:
      "팔로워는 리더의 변경 기록을 조금 늦게 따라오니, 쓴 직후 팔로워에서 읽으면 옛 목록이 보인다. 방금 쓴 사용자만 잠시 리더에서 읽게 하면 이 지연이 가려진다. 팔로워를 늘리는 건 읽기 부하를 나눌 뿐 지연을 없애지 않는다.",
    anchor: "곡-정보와-재생목록은-sql에-둔다",
  },
  {
    id: "sd-music-streaming-5",
    post: "sd-music-streaming",
    question: "재생 이벤트 7건(p1, p2 12초, p3, p1, p4 30초, p3, p5 29.999초)을 30초 이상만, playId 중복 없이 세면 몇 회인가?",
    choices: ["7회", "5회", "3회", "4회"],
    answer: 2,
    explanation:
      "p1과 p3의 두 번째 이벤트는 재전송과 재처리로 생긴 중복이라 건너뛰고, 12초와 29.999초 재생은 기준에 못 미쳐 빠진다. 남는 것은 p1, p3, p4의 3회다. 그냥 세면 7회가 되어 정산이 두 배 넘게 부풀려진다.",
    anchor: "재생-한-번이-정산서의-한-줄이-되기까지",
  },
  {
    id: "sd-music-streaming-6",
    post: "sd-music-streaming",
    question: "메타 DB의 리더가 죽었을 때 이 설계에서 사용자가 겪는 일로 가장 알맞은 것은?",
    choices: [
      "재생 중인 곡이 바로 멈춘다",
      "재생은 계속되고 재생목록 수정만 잠시 실패한다",
      "검색 결과가 모두 사라진다",
      "오프라인으로 받은 곡의 키가 무효가 된다",
    ],
    answer: 1,
    explanation:
      "소리는 CDN에서 오고 곡 정보 읽기는 팔로워와 캐시가 받으니 재생은 영향이 없다. 쓰기만 리더로 가기 때문에 팔로워가 승격되는 동안 재생목록 수정이 실패한다. 쓰기와 재생이 다른 길로 가서 장애가 번지지 않는다.",
    anchor: "곡-정보와-재생목록은-sql에-둔다",
  },
  {
    id: "sd-music-streaming-7",
    post: "sd-music-streaming",
    question: "오프라인으로 받은 곡을 구독이 끝난 뒤에는 못 듣게 하려면 무엇이 필요한가?",
    choices: [
      "파일 이름을 무작위로 바꿔 저장한다",
      "곡을 낮은 음질로만 내려받게 한다",
      "암호화된 파일과 기기에 묶인 만료 있는 키, 그리고 주기적인 온라인 갱신",
      "재생할 때마다 CDN에 Range 요청을 보낸다",
    ],
    answer: 2,
    explanation:
      "파일은 암호화해 두고, 기기에 묶인 키에 만료를 붙여 주기적으로 온라인에서 갱신하게 한다. 갱신할 때 구독이 끝났으면 키를 내주지 않는다. 재생마다 CDN에 묻는 방식은 오프라인 재생이라는 목적과 맞지 않는다.",
    anchor: "지하철에서도-들리게-내려받기와-drm",
  },
];
