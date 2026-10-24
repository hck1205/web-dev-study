import type { QuizQuestion } from "../types";

export const HTML_MEDIA_EMBED: QuizQuestion[] = [
  {
    id: "html-media-embed-1",
    post: "html-media-embed",
    question:
      "video 안에 H.264 mp4, VP9 webm, AV1 mp4 순서로 source를 두었다. H.264를 못 트는 브라우저는 어떤 파일을 받나?",
    choices: [
      "세 파일을 모두 받아 보고 가장 작은 AV1을 고른다",
      "type으로 H.264를 건너뛰고, 처음 재생 가능한 VP9만 받는다",
      "첫 source가 실패하면 영상 전체를 포기한다",
      "마지막 source인 AV1을 고른다",
    ],
    answer: 1,
    explanation:
      "브라우저는 위에서부터 type을 보고 재생할 수 있을 것 같은 첫 source에서 멈춘다. 그래서 아래의 AV1은 더 작아도 보지 않는다. 순서가 곧 우선순위라 압축률 좋은 형식을 위에, 가장 널리 재생되는 형식을 아래에 둔다.",
    anchor: "video-하나에-파일-여러-개",
  },
  {
    id: "html-media-embed-2",
    post: "html-media-embed",
    question: "배경 영상에 autoplay loop만 적었더니 모바일에서 첫 프레임에 멈춰 있다. 가장 먼저 더할 것은?",
    choices: [
      "preload=\"auto\"",
      "controls",
      "poster",
      "muted와 playsinline",
    ],
    answer: 3,
    explanation:
      "자동 재생 정책은 소리 있는 재생을 사용자 상호작용 전에 막고 소리 없는 재생은 허락한다. iOS에서는 playsinline이 있어야 그 자리에서 재생된다. preload나 poster는 받는 양과 첫 모습만 바꿀 뿐 정책을 통과시키지 않는다.",
    anchor: "자동-재생은-브라우저가-허락해야-돈다",
  },
  {
    id: "html-media-embed-3",
    post: "html-media-embed",
    question: "페이지 로드 때 스크립트로 부른 video.play()가 실패하면 무엇이 일어나나?",
    choices: [
      "play()가 false를 돌려주고 끝난다",
      "브라우저가 자동으로 muted로 바꿔 재생한다",
      "play()가 돌려준 Promise가 NotAllowedError로 거부되고, 처리하지 않으면 Uncaught (in promise)가 찍힌다",
      "video 요소가 DOM에서 제거된다",
    ],
    answer: 2,
    explanation:
      "play()는 Promise를 돌려주고 정책에 막히면 NotAllowedError로 거부된다. 브라우저가 알아서 소리를 꺼 주지 않으니 catch에서 muted로 바꿔 다시 시도하거나 재생 버튼을 보여 준다.",
    anchor: "자동-재생은-브라우저가-허락해야-돈다",
  },
  {
    id: "html-media-embed-4",
    post: "html-media-embed",
    question:
      "width=\"560\" height=\"315\"를 적은 iframe에 CSS width: 100%; height: auto를 줬더니 높이가 150px 남짓이다. 왜 그럴까?",
    choices: [
      "iframe은 video·img와 달리 width·height 속성을 비율로 바꿔 쓰지 않아서",
      "iframe 안 문서가 아직 로드되지 않아 높이가 0에서 시작해서",
      "loading=\"lazy\"가 기본값이라 높이를 줄여 둬서",
      "height: auto는 iframe에서 무효라 속성 값 315px이 무시돼서",
    ],
    answer: 0,
    explanation:
      "video와 img는 width·height 속성을 aspect-ratio로 바꿔 쓰지만 iframe은 그렇지 않다. 그래서 height: auto면 기본 높이 150px로 돌아간다. 임베드 iframe에는 CSS aspect-ratio를 직접 줘서 자리를 잡는다.",
    anchor: "자리부터-잡아-두기",
  },
  {
    id: "html-media-embed-5",
    post: "html-media-embed",
    question: "자막 파일을 CDN으로 옮기고 CDN에 Access-Control-Allow-Origin도 켰는데 자막이 안 뜬다. 무엇을 빠뜨렸을까?",
    choices: [
      "track에 default 속성",
      "video 요소의 crossorigin 속성",
      "자막 파일 확장자를 .srt로 바꾸기",
      "track의 kind를 captions로 바꾸기",
    ],
    answer: 1,
    explanation:
      "다른 출처의 track은 CORS 요청으로 받는다. video에 crossorigin 속성이 없으면 CORS 헤더가 있어도 error가 난다. 실험에서도 crossorigin과 CORS 헤더가 함께 있을 때만 load가 났다.",
    anchor: "자막은-track과-webvtt로",
  },
  {
    id: "html-media-embed-6",
    post: "html-media-embed",
    question: "같은 출처 문서를 넣은 iframe에 sandbox=\"allow-scripts allow-same-origin\"을 줬다. 무엇이 문제인가?",
    choices: [
      "스크립트가 전혀 돌지 않는다",
      "iframe이 lazy로 로드되지 않는다",
      "안의 스크립트가 부모 문서에 접근해 sandbox 속성을 지우고 스스로 풀 수 있다",
      "allow 속성이 무시돼 전체 화면을 쓸 수 없다",
    ],
    answer: 2,
    explanation:
      "같은 출처로 취급되고 스크립트까지 돌면, iframe 안 코드가 부모에서 자기 iframe의 sandbox를 지우고 다시 불러올 수 있다. 그래서 같은 출처 문서에는 이 조합을 피하고 필요한 권한만 연다.",
    anchor: "남의-페이지를-넣는-iframe",
  },
  {
    id: "html-media-embed-7",
    post: "html-media-embed",
    question: "master.m3u8을 여러 브라우저에서 재생하려 한다. 분기 방법으로 알맞은 것은?",
    choices: [
      "userAgent에 Safari가 있으면 src에 넣고 아니면 재생하지 않는다",
      "모든 브라우저에서 video src에 m3u8을 그대로 넣는다",
      "m3u8을 mp4로 이름만 바꿔 넣는다",
      "canPlayType으로 HLS 직접 재생을 확인하고, 안 되면 MediaSource가 있는지 보고 hls.js 같은 라이브러리로 재생한다",
    ],
    answer: 3,
    explanation:
      "사파리는 HLS를 직접 틀지만 실험한 Chromium은 canPlayType에 빈 문자열을 돌려줬다. 이런 브라우저는 라이브러리가 조각을 받아 MSE로 넣어야 한다. 브라우저 이름이 아니라 기능으로 가르는 게 안전하다.",
    anchor: "파일-하나로-안-될-때-hls와-mse",
  },
];
