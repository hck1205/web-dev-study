import type { QuizQuestion } from "../types";

export const CSS_TYPOGRAPHY: QuizQuestion[] = [
  {
    id: "css-typography-1",
    post: "css-typography",
    question:
      'font-family: "Inter", "Noto Sans KR", sans-serif로 "Hello 안녕"을 그렸다. Inter는 설치돼 있고 한글 글리프가 없다. 어떻게 그려지나?',
    choices: [
      "Inter가 있으니 문단 전체를 Inter로 그리고 한글은 빈 네모로 나온다",
      "한글이 하나라도 있으면 문단 전체를 Noto Sans KR로 바꿔 그린다",
      "Hello는 Inter로, 안녕은 목록에서 한글 글리프를 가진 Noto Sans KR로 그린다",
      "sans-serif가 마지막에 있으니 브라우저 기본 글꼴로 모두 그린다",
    ],
    answer: 2,
    explanation:
      "브라우저는 요소가 아니라 글자마다 목록 앞에서부터 그 글리프를 가진 첫 글꼴을 고른다. 그래서 한 문단 안에서도 영문과 한글의 글꼴이 나뉜다. 일반 계열은 앞의 글꼴이 모두 그 글자를 갖지 않을 때만 쓰인다.",
    anchor: "글꼴-목록은-글자마다-다시-고른다",
  },
  {
    id: "css-typography-2",
    post: "css-typography",
    question:
      ".article에 line-height: 1.7을 줬는데, 그 안의 p에 font: 15px sans-serif를 쓰자 줄 간격이 좁아졌다. 왜 그럴까?",
    choices: [
      "font 단축 속성이 적지 않은 line-height를 초기값 normal로 되돌려서",
      "15px이 1.7보다 명시도가 높아서",
      "sans-serif 글꼴은 line-height를 지원하지 않아서",
      "단축 속성은 상속값을 무시하고 부모의 font-size만 가져와서",
    ],
    answer: 0,
    explanation:
      "font는 크기와 글꼴만 적어도 line-height, font-weight, font-variant 같은 하위 속성을 모두 초기값으로 되돌린다. 그래서 상속받던 1.7 대신 normal이 된다. 컴포넌트 안에서는 font-size, font-family 같은 개별 속성을 쓰는 편이 안전하다.",
    anchor: "font-한-줄이-줄-간격을-지운다",
  },
  {
    id: "css-typography-3",
    post: "css-typography",
    question:
      "16px 부모에 line-height: 150%를 주고 그 안에 32px 자식을 넣었다. 자식의 줄 높이와 결과로 맞는 것은?",
    choices: [
      "48px, 자식 크기에 맞게 다시 계산된다",
      "24px, 부모에서 계산된 값이 그대로 내려와 글자가 겹친다",
      "normal, 퍼센트는 상속되지 않는다",
      "32px, 줄 높이는 글자 크기보다 작아질 수 없다",
    ],
    answer: 1,
    explanation:
      "퍼센트와 em은 부모에서 먼저 픽셀로 계산된 결과(16 × 1.5 = 24px)가 상속된다. 자식 글자가 32px이면 줄이 모자라 겹친다. 단위 없는 1.5를 쓰면 비율이 내려가 자식에서 48px로 다시 계산된다.",
    anchor: "크기는-rem-줄-간격은-숫자로",
  },
  {
    id: "css-typography-4",
    post: "css-typography",
    question:
      "폭이 정해진 가로 flex 줄 안의 아이템에 긴 URL이 있다. overflow-wrap: break-word를 줬는데 여전히 줄 밖으로 넘친다. 가장 알맞은 해결은?",
    choices: [
      "word-break: keep-all을 추가한다",
      "white-space: nowrap을 준다",
      "text-overflow: ellipsis만 추가한다",
      "overflow-wrap: anywhere로 바꾸거나 아이템에 min-width: 0을 준다",
    ],
    answer: 3,
    explanation:
      "break-word는 줄을 그릴 때만 끊고 최소 너비 계산에는 URL 전체 길이를 쓴다. flex 아이템의 기본 min-width: auto가 그 최소 너비를 따르니 칸이 줄지 않는다. anywhere는 최소 너비에도 끊는 자리를 반영하고, min-width: 0은 그 하한 자체를 없앤다. keep-all은 오히려 끊을 자리를 줄인다.",
    anchor: "줄을-어디서-바꿀지-정하기",
  },
  {
    id: "css-typography-5",
    post: "css-typography",
    question:
      "한 줄 말줄임을 위해 overflow: hidden과 text-overflow: ellipsis를 줬는데 …이 나오지 않고 글이 두 줄로 내려간다. 빠진 것은?",
    choices: [
      "white-space: nowrap",
      "display: -webkit-box",
      "line-clamp: 1",
      "word-break: break-all",
    ],
    answer: 0,
    explanation:
      "한 줄 말줄임은 줄을 바꾸지 않기, 넘친 부분 숨기기, 숨긴 자리에 … 그리기 세 가지가 모두 있어야 한다. 줄바꿈이 허용되면 넘칠 일이 없어 말줄임도 생기지 않는다. -webkit-box와 line-clamp는 여러 줄 말줄임에 쓰는 방식이다.",
    anchor: "넘치는-글자를-말줄임으로",
  },
  {
    id: "css-typography-6",
    post: "css-typography",
    question:
      "버튼에 font-weight: 700을 줬는데 가변 폰트가 굵어지지 않는다. 상위 규칙에서 무엇을 먼저 의심해야 하나?",
    choices: [
      "font-synthesis: none",
      "font-variation-settings에 적힌 wght 값",
      "font-variant-numeric: tabular-nums",
      "letter-spacing의 음수 값",
    ],
    answer: 1,
    explanation:
      "font-variation-settings의 wght는 같은 축을 다루는 font-weight보다 우선한다. 그래서 위쪽에 wght 400이 적혀 있으면 아래에서 font-weight를 바꿔도 반영되지 않는다. font-synthesis는 굵은 파일이 없을 때 가짜 굵기를 만들지 말라는 설정이라 가변 폰트의 축 값과는 상관이 없다.",
    anchor: "굵기-기울임-숫자-모양",
  },
  {
    id: "css-typography-7",
    post: "css-typography",
    question: "댓글 작성자 이름이 어떤 언어로 들어올지 모르는 목록에서 이름 주변 숫자와 기호 배치가 뒤섞이지 않게 하려면?",
    choices: [
      "이름을 span으로 감싸고 direction: ltr을 준다",
      "text-align: right를 준다",
      "이름을 bdi로 감싸서 방향을 격리한다",
      "html 요소에 dir=\"rtl\"을 준다",
    ],
    answer: 2,
    explanation:
      "bdi는 안쪽 글자의 방향이 바깥 문장의 배치에 영향을 주지 않게 격리한다. 방향을 미리 모르는 사용자 입력에 맞는 도구다. direction을 고정하면 실제 방향과 어긋날 수 있고, 방향은 CSS보다 HTML로 정하는 편이 맞다.",
    anchor: "오른쪽에서-왼쪽으로-쓰는-글",
  },
];
