import type { QuizQuestion } from "../types";

export const CSS_FLEXBOX_GRID: QuizQuestion[] = [
  {
    id: "css-flexbox-grid-1",
    post: "css-flexbox-grid",
    question:
      "600px 컨테이너에 basis 200, 300, 400px 아이템을 grow 0, shrink 1로 두었다. 첫 아이템의 최종 너비는?",
    choices: ["100px", "133.33px", "200px", "166.67px"],
    answer: 1,
    explanation:
      "모자란 300px을 shrink × basis 비율, 즉 2:3:4로 나눠 뺀다. 첫 아이템은 66.67px이 줄어 133.33px이다. shrink 값만 보고 똑같이 100px씩 빼면 작은 아이템이 너무 빨리 줄어든다.",
    anchor: "아이템-크기가-정해지는-순서",
  },
  {
    id: "css-flexbox-grid-2",
    post: "css-flexbox-grid",
    question:
      "\"짧음\"과 긴 문장이 든 두 아이템에 flex: 1을 줬더니 정확히 반씩 나뉘었다. flex: auto였다면 어땠을까?",
    choices: [
      "똑같이 반씩 나뉜다. 둘 다 grow 1이라서",
      "긴 문장 쪽이 더 넓다. 각자 내용 크기에서 출발해 남는 공간만 나눠서",
      "짧은 쪽이 더 넓다. 남는 공간을 더 많이 받아서",
      "늘어나지 않고 내용 크기 그대로 있다",
    ],
    answer: 1,
    explanation:
      "flex: 1은 1 1 0%라 0에서 출발해 전체를 1:1로 나눈다. flex: auto는 1 1 auto라 내용 폭에서 출발해 남는 공간만 1:1로 나누므로 긴 쪽이 더 넓다.",
    anchor: "flex-1은-1-1-0다",
  },
  {
    id: "css-flexbox-grid-3",
    post: "css-flexbox-grid",
    question:
      "flex: 1인 제목 칸 안의 nowrap 텍스트에 text-overflow: ellipsis를 줬는데 말줄임표 없이 넘친다. 가장 직접적인 해결책은?",
    choices: [
      "제목 칸에 flex-shrink: 10을 준다",
      "제목 칸에 overflow: clip을 준다",
      "제목 칸에 min-width: 0을 준다",
      "컨테이너에 flex-wrap: wrap을 준다",
    ],
    answer: 2,
    explanation:
      "flex 아이템의 min-width 초깃값 auto는 내용의 최소 크기라서 nowrap 텍스트 폭 아래로 줄지 않는다. min-width: 0으로 내리면 줄어들고 안쪽 말줄임표가 생긴다. shrink를 키워도 최소 크기 제한은 그대로이고, overflow: clip은 스크롤 컨테이너를 만들지 않아 최소 크기를 0으로 바꾸지 못한다.",
    anchor: "줄어들지-않는-아이템과-min-width-0",
  },
  {
    id: "css-flexbox-grid-4",
    post: "css-flexbox-grid",
    question:
      "500px flex-wrap 컨테이너에 flex: 1 1 200px 카드 세 장을 넣었더니 둘째 줄 카드가 500px로 늘어났다. 이유는?",
    choices: [
      "flex는 줄마다 따로 공간을 나눠서, 혼자 남은 카드가 그 줄의 남는 공간을 다 가져가서",
      "flex-wrap이 마지막 줄에 align-content: stretch를 적용해서",
      "200px 기준 크기가 줄바꿈 뒤에는 무시되어서",
      "카드의 min-width가 auto라서",
    ],
    answer: 0,
    explanation:
      "flex는 1차원이라 줄을 바꿔도 줄끼리 칸을 맞추지 않는다. 둘째 줄의 카드는 혼자서 남는 300px을 모두 받는다. 행과 열을 함께 맞추려면 grid의 repeat(auto-fill, minmax(200px, 1fr))가 맞다.",
    anchor: "줄을-바꾸면-마지막-줄이-늘어난다",
  },
  {
    id: "css-flexbox-grid-5",
    post: "css-flexbox-grid",
    question:
      "grid-template-columns: 1fr 1fr인데 한 열에 줄바꿈 없는 코드 블록이 있어 그 열이 거의 전부를 차지한다. 어떻게 고치나?",
    choices: [
      "1fr 대신 50% 50%를 쓴다",
      "열을 minmax(0, 1fr)로 바꾼다",
      "grid-auto-flow: dense를 준다",
      "코드 블록에 width: 100%를 준다",
    ],
    answer: 1,
    explanation:
      "1fr은 minmax(auto, 1fr)이라 최솟값이 내용의 최소 크기다. 최솟값을 0으로 내리면 정확히 나뉘고, 넘친 코드는 pre의 overflow: auto로 스크롤된다.",
    anchor: "grid는-트랙을-먼저-정한다",
  },
  {
    id: "css-flexbox-grid-6",
    post: "css-flexbox-grid",
    question:
      "1000px 컨테이너에 repeat(auto-fit, minmax(200px, 1fr))로 카드 두 장을 놓았다. 계산된 열 너비는?",
    choices: [
      "200px 200px 200px 200px 200px",
      "200px 200px",
      "500px 500px 0px 0px 0px",
      "333px 333px 333px",
    ],
    answer: 2,
    explanation:
      "트랙은 다섯 개가 만들어지지만 auto-fit은 빈 트랙을 0으로 접고, 카드가 든 두 트랙이 남은 공간을 1fr로 나눠 500px씩 갖는다. auto-fill이었다면 빈 트랙이 200px씩 남는다.",
    anchor: "auto-fill과-auto-fit",
  },
  {
    id: "css-flexbox-grid-7",
    post: "css-flexbox-grid",
    question:
      "grid-template-areas로 사이드바를 본문보다 앞에 보이게 했지만 HTML에서는 본문 뒤에 있다. 키보드 사용자에게 생기는 일은?",
    choices: [
      "Tab 순서도 화면 순서를 따라 사이드바로 먼저 간다",
      "사이드바에는 포커스가 가지 않는다",
      "스크린 리더만 화면 순서를 따르고 Tab은 HTML 순서를 따른다",
      "Tab 이동과 스크린 리더 모두 HTML 순서를 따라, 본문 링크를 다 지난 뒤에야 사이드바로 간다",
    ],
    answer: 3,
    explanation:
      "grid 배치와 order는 화면 위치만 바꾸고 HTML 순서는 그대로다. 포커스 이동과 읽기 순서는 HTML을 따르므로 화면과 어긋난다. 읽는 순서가 의미를 가지면 HTML 순서를 화면 순서와 맞춘다.",
    anchor: "영역에-이름-붙이기",
  },
];
