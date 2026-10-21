import type { QuizQuestion } from "../types";

export const SD_VIDEO_UPLOAD_TRANSCODING: QuizQuestion[] = [
  {
    id: "sd-video-upload-transcoding-1",
    post: "sd-video-upload-transcoding",
    question: "동영상 업로드를 API 서버가 받지 않고 서명된 주소로 저장소에 직접 올리게 하는 가장 큰 이유는?",
    choices: [
      "저장소가 API 서버보다 인코딩을 빨리 해서",
      "큰 바이트가 API 서버를 지나가지 않아 API 서버를 네트워크 대역폭이 아니라 요청 수 기준으로 늘릴 수 있어서",
      "서명된 주소를 쓰면 파일이 자동으로 압축되어서",
      "앱에 저장소 비밀 키를 넣어 배포하기 쉬워서",
    ],
    answer: 1,
    explanation:
      "하루 80TB가 들어오면 웹 서버가 바이트를 중계하는 순간 대수를 네트워크 카드가 정한다. 서명된 주소는 API 서버가 권한만 확인하고 바이트는 저장소로 바로 가게 한다. 비밀 키를 앱에 넣지 않으려고 쓰는 방법이기도 하다.",
    anchor: "파일은-저장소로-바로-보낸다",
  },
  {
    id: "sd-video-upload-transcoding-2",
    post: "sd-video-upload-transcoding",
    question: "서명에 경로, 만료 시각, 최대 크기, Content-Type을 넣었다. 사용자가 주소의 maxBytes 값을 10GB로 고쳐서 올리면?",
    choices: [
      "저장소가 고친 값을 믿고 10GB까지 받는다",
      "만료 시각이 지나지 않았으니 받는다",
      "저장소가 다시 계산한 서명이 주소의 서명과 달라 403으로 거절한다",
      "413으로 거절하지만 1GB까지는 저장된다",
    ],
    answer: 2,
    explanation:
      "저장소는 들어온 값으로 HMAC을 다시 계산해 주소의 서명과 비교한다. 서명에 들어간 값을 하나라도 바꾸면 지문이 달라져 SignatureDoesNotMatch가 난다. 무엇을 서명에 넣느냐가 무엇을 막느냐를 정한다.",
    anchor: "서명이-하는-일",
  },
  {
    id: "sd-video-upload-transcoding-3",
    post: "sd-video-upload-transcoding",
    question: "조각 업로드에서 응답이 유실돼 같은 번호의 조각을 다시 올리는 일이 생긴다. 서버는 어떻게 만들어야 하나?",
    choices: [
      "같은 번호를 다시 받으면 덮어써서 몇 번을 받아도 결과가 같게 한다",
      "같은 번호를 두 번 받으면 업로드 세션 전체를 취소한다",
      "같은 번호를 다시 받으면 뒤에 이어 붙인다",
      "재시도를 막기 위해 조각을 한 번에 하나씩만 받는다",
    ],
    answer: 0,
    explanation:
      "본문 실험에서도 끊기기 전에 출발한 2번 조각이 늦게 도착했고 클라이언트가 한 번 더 보냈다. 같은 번호는 덮어쓰게 해 두면 결과가 같다. 이어 붙이면 파일이 깨지고, 마무리 때 전체 해시 비교에서 걸린다.",
    anchor: "끊기면-처음부터-다시-올려야-할까",
  },
  {
    id: "sd-video-upload-transcoding-4",
    post: "sd-video-upload-transcoding",
    question: "작업자 4명으로 트랜스코딩 그래프를 돌렸더니 5초 이후 작업자들이 놀고 전체는 13.5초 걸렸다. 작업자를 100명으로 늘리면?",
    choices: [
      "작업이 100명에게 나뉘어 1초 안쪽으로 줄어든다",
      "거의 줄지 않는다. 혼자 13초 걸리는 1080p 인코딩이 임계 경로라서다",
      "작업자끼리 경쟁해서 오히려 두 배로 늘어난다",
      "음성 인코딩이 먼저 끝나 묶기를 바로 시작할 수 있다",
    ],
    answer: 1,
    explanation:
      "묶기는 1080p가 끝나야 시작하고 1080p는 하나의 작업이라 작업자를 늘려도 그대로다. 전체 시간은 그래프의 가장 긴 경로보다 짧아지지 않는다. 줄이려면 그 작업 자체를 GOP 단위로 쪼갠다.",
    anchor: "가장-긴-줄이-전체-시간을-정한다",
  },
  {
    id: "sd-video-upload-transcoding-5",
    post: "sd-video-upload-transcoding",
    question: "영상을 여러 조각으로 나눠 동시에 인코딩할 때 아무 시각에서나 자르지 않고 키프레임 경계에서 자르는 이유는?",
    choices: [
      "키프레임에서 자르면 파일 크기가 절반으로 준다",
      "음성 트랙이 키프레임에만 붙어 있어서",
      "키프레임 사이 프레임은 앞 프레임과의 차이만 저장해서 앞 프레임 없이는 그릴 수 없기 때문이다",
      "ffmpeg가 키프레임이 아닌 곳에서는 파일을 열지 못해서",
    ],
    answer: 2,
    explanation:
      "GOP는 혼자 그려지는 키프레임과 그 뒤 차이 프레임들의 묶음이다. 차이 프레임 중간에서 자르면 다음 조각의 첫 프레임들이 기준을 잃는다. 그래서 재인코딩 없이 자를 때는 키프레임 경계에서만 자른다.",
    anchor: "가장-긴-줄이-전체-시간을-정한다",
  },
  {
    id: "sd-video-upload-transcoding-6",
    post: "sd-video-upload-transcoding",
    question: "검사 단계에서 ffprobe가 `moov atom not found`를 냈다. 어떻게 처리하는 것이 맞나?",
    choices: [
      "작업자가 죽은 것이니 큐가 다시 내줄 때까지 기다린다",
      "더 센 기계에서 다섯 번까지 다시 돌린다",
      "1080p만 건너뛰고 나머지 화질은 만든다",
      "파일 자체가 잘린 것이라 재시도해도 같으니 바로 실패로 기록하고 사용자에게 알린다",
    ],
    answer: 3,
    explanation:
      "MP4의 목차가 없는 파일은 몇 번을 돌려도 열리지 않는 다시 해도 안 되는 실패다. 그래프 맨 앞에서 걸러 failed로 바꾸면 비싼 인코딩 기계를 낭비하지 않는다. 재시도는 작업자가 죽은 것처럼 일시적인 실패에만 쓴다.",
    anchor: "실패를-두-종류로-나눈다",
  },
];
