import type { QuizQuestion } from "../types";

export const RENDERING_PERFORMANCE_OPTIMIZATION: QuizQuestion[] = [
  {
    id: "rendering-performance-optimization-1",
    post: "rendering-performance-optimization",
    question:
      "줄 2만 개짜리 목록에서 body에 클래스를 붙여 모든 줄의 padding을 바꾸면 125ms가 걸렸다. 같은 목록에서 줄 하나의 배경색만 바꾸면 어떻게 되나?",
    choices: [
      "DOM이 같으니 거의 똑같이 125ms 정도 걸린다",
      "레이아웃은 그대로 하고 스타일 계산만 줄어든다",
      "스타일 계산은 요소 1개만 하고 레이아웃은 일어나지 않는다",
      "페인트를 다시 하지 않아서 화면이 바뀌지 않는다",
    ],
    answer: 2,
    explanation:
      "비용은 DOM 크기와 변경이 건드리는 범위의 곱이라, 줄 하나에 붙인 클래스는 그 요소의 스타일만 다시 계산하게 한다. 배경색은 크기와 위치에 영향이 없어서 레이아웃도 0회였다.",
    anchor: "한-줄의-클래스가-몇-개의-요소를-깨우나",
  },
  {
    id: "rendering-performance-optimization-2",
    post: "rendering-performance-optimization",
    question:
      "카드 하나의 글자를 바꿀 때 레이아웃 범위(전체 객체 수)가 24003에서 8로 줄어든 설정은?",
    choices: ["contain: content", "contain: strict와 고정 높이", "will-change: transform", "position: relative"],
    answer: 1,
    explanation:
      "contain: content는 레이아웃을 격리해도 카드 크기가 바뀔 가능성이 남아 브라우저가 여전히 문서 전체를 확인했다. 크기까지 약속한 strict여야 카드가 레이아웃의 경계가 된다. 대신 크기를 정하지 않으면 높이가 0이 된다.",
    anchor: "레이아웃이-번지는-걸-contain으로-막는다",
  },
  {
    id: "rendering-performance-optimization-3",
    post: "rendering-performance-optimization",
    question: "카드마다 content-visibility: auto만 걸었더니 스크롤할수록 스크롤바 길이가 변하고 위치가 튄다. 어떻게 고치나?",
    choices: [
      "contain-intrinsic-size로 그리기 전의 예상 크기를 준다",
      "content-visibility: hidden으로 바꾼다",
      "카드에 display: none을 주고 스크롤할 때 보여 준다",
      "will-change: contents를 추가한다",
    ],
    answer: 0,
    explanation:
      "렌더링을 건너뛴 요소는 내용 없이 크기가 계산되어 문서 높이가 실제보다 작게 잡힌다. contain-intrinsic-size: auto 120px처럼 예상 크기를 주면 높이가 실제와 비슷해지고, auto 덕분에 한 번 그린 카드의 크기를 기억한다.",
    anchor: "화면-밖은-아예-그리지-않는다",
  },
  {
    id: "rendering-performance-optimization-4",
    post: "rendering-performance-optimization",
    question: "가상화한 목록에서 줄의 key로 배열 인덱스를 쓰면 생기는 문제는?",
    choices: [
      "스크롤할 때 보이는 줄 범위 계산이 틀어진다",
      "브라우저의 찾기(Ctrl+F)가 동작하지 않게 된다",
      "DOM에 남는 줄 수가 점점 늘어난다",
      "스크롤할 때 입력값 같은 컴포넌트 상태가 다른 줄로 옮겨 붙는다",
    ],
    answer: 3,
    explanation:
      "가상 목록에서 인덱스는 화면의 몇 번째 칸이 되기 쉬워서, 스크롤로 데이터가 바뀌어도 같은 컴포넌트가 재사용되며 상태가 따라간다. 데이터의 고유 id를 key로 쓴다. 찾기가 안 되는 건 key와 상관없이 가상화 자체의 대가다.",
    anchor: "1만-줄을-다-만들지-않는다",
  },
  {
    id: "rendering-performance-optimization-5",
    post: "rendering-performance-optimization",
    question:
      "위젯 100개가 각자 부모 폭을 읽고 자기 높이를 쓴다. 반복문은 없는데 레이아웃이 100번 일어났다. 가장 알맞은 처방은?",
    choices: [
      "쓰기를 DocumentFragment로 감싼다",
      "읽기는 모아서 먼저, 쓰기는 그 뒤에 몰아서 하도록 단계를 나눈다",
      "각 위젯의 쓰기를 setTimeout(0)으로 미룬다",
      "모든 위젯에 will-change: height를 건다",
    ],
    answer: 1,
    explanation:
      "앞 위젯의 쓰기가 남긴 표시 때문에 다음 위젯의 읽기가 레이아웃을 강제로 부른다. 읽기와 쓰기를 rAF에서 단계로 나누는 스케줄러로 레이아웃이 1회가 됐다. 쓰기만 미루는 setTimeout은 읽기와 쓰기가 여전히 섞일 수 있다.",
    anchor: "여러-컴포넌트가-각자-크기를-잴-때",
  },
  {
    id: "rendering-performance-optimization-6",
    post: "rendering-performance-optimization",
    question: "카드 200장에 큰 box-shadow를 넣었더니 스크롤 중 메인 스레드의 Paint는 그대로인데 끊김이 생겼다. 비용은 어디서 늘었나?",
    choices: [
      "레이아웃이 매 스크롤마다 다시 일어나서",
      "스타일 계산이 그림자 수만큼 늘어서",
      "그리기 명령을 픽셀로 바꾸는 래스터에서 넓은 흐림을 계산해서",
      "합성 스레드가 카드마다 층을 새로 만들어서",
    ],
    answer: 2,
    explanation:
      "그리기 명령 목록의 길이는 거의 같아 Paint는 2~3ms로 비슷했지만, RasterTask 합은 15.4ms에서 198.0ms로 늘었다. 스크롤할 때 새로 보이는 영역을 래스터해야 하니 정적인 페이지도 이 비용을 낸다.",
    anchor: "그림-효과는-래스터에서-값을-치른다",
  },
  {
    id: "rendering-performance-optimization-7",
    post: "rendering-performance-optimization",
    question: "requestIdleCallback 콜백 안에서 하기에 가장 알맞지 않은 일은?",
    choices: [
      "모아 둔 분석 이벤트를 묶어서 보내기",
      "목록의 DOM을 다시 그려 넣기",
      "다음 화면에서 쓸 데이터를 미리 가공하기",
      "오래된 로컬 캐시 항목 정리하기",
    ],
    answer: 1,
    explanation:
      "idle 콜백은 프레임을 그린 뒤 남는 시간에 돌아서, 여기서 DOM을 바꾸면 다음 프레임에 스타일과 레이아웃 비용을 떠넘긴다. DOM 변경은 rAF에서 하고 idle 콜백에는 계산과 전송처럼 화면과 상관없는 일을 둔다.",
    anchor: "급하지-않은-일은-한가할-때",
  },
];
