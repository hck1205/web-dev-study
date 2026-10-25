import type { QuizQuestion } from "../types";

export const WEB_ACCESSIBILITY: QuizQuestion[] = [
  {
    id: "web-accessibility-1",
    post: "web-accessibility",
    question: "흰 배경에 #777777 본문 글자를 쓰면 대비가 4.47:1이 나온다. WCAG AA 판정은?",
    choices: [
      "반올림하면 4.5이므로 통과",
      "큰 글자 기준 3:1을 넘으니 본문도 통과",
      "회색은 대비 기준의 예외라 판정하지 않는다",
      "4.5:1에 못 미치므로 본문 글자로는 탈락",
    ],
    answer: 3,
    explanation:
      "본문 글자는 4.5:1 이상이어야 하고 기준은 반올림하지 않는다. 3:1은 24px 이상이거나 약 18.66px 이상 굵은 큰 글자에만 적용된다. 흰 배경에서는 4.54:1이 나오는 #767676이 통과하는 가장 밝은 회색이다.",
    anchor: "대비-비율을-직접-계산한다",
  },
  {
    id: "web-accessibility-2",
    post: "web-accessibility",
    question: "순수한 빨강 #ff0000 글자가 흰 배경에서 3.99:1밖에 안 나오는 이유로 가장 알맞은 것은?",
    choices: [
      "상대 휘도에서 가장 큰 가중치를 갖는 초록 성분이 0이라서",
      "빨강은 감마 보정을 하지 않아서",
      "흰색의 상대 휘도가 1보다 작아서",
      "빨강이 비텍스트 대비 기준으로 계산돼서",
    ],
    answer: 0,
    explanation:
      "상대 휘도는 0.2126R + 0.7152G + 0.0722B라 초록의 무게가 가장 크다. 빨강은 R만 1이라 휘도가 0.2126에 그쳐 흰색과의 비율이 1.05 ÷ 0.2626으로 3.99가 된다. 모든 채널은 같은 방식으로 감마를 풀어 계산한다.",
    anchor: "대비-비율을-직접-계산한다",
  },
  {
    id: "web-accessibility-3",
    post: "web-accessibility",
    question: "꾸밈용 배경 사진에 alt 속성을 아예 빼면 어떤 일이 생길 수 있나?",
    choices: [
      "alt=\"\"와 똑같이 처리되어 아무 일도 없다",
      "브라우저가 사진을 표시하지 않는다",
      "스크린리더에 따라 파일 이름을 소리 내어 읽는다",
      "검색 엔진이 페이지를 색인하지 않는다",
    ],
    answer: 2,
    explanation:
      "빈 alt는 읽지 말라는 뜻이라 접근성 트리에서 빠지지만, alt 속성이 없으면 이름이 없는 그림이 되어 스크린리더가 파일 이름 같은 것을 읽기도 한다. 꾸밈 그림도 alt=\"\"로 명시해야 한다.",
    anchor: "그림에-붙이는-말",
  },
  {
    id: "web-accessibility-4",
    post: "web-accessibility",
    question: "이메일 칸 옆에 빨간 글자로 오류를 띄웠는데 스크린리더 사용자가 듣지 못한다. 가장 알맞은 수정은?",
    choices: [
      "오류 글자를 더 진한 빨강으로 바꾼다",
      "칸에 aria-invalid=\"true\"를 주고 오류 문구를 aria-describedby로 이은 뒤 그 칸으로 포커스를 옮긴다",
      "제출 버튼을 오류가 없어질 때까지 disabled로 둔다",
      "오류 문구에 title 속성을 붙인다",
    ],
    answer: 1,
    explanation:
      "aria-invalid는 칸의 상태를 잘못됨으로, aria-describedby는 오류 문구를 그 칸의 설명으로 만든다. 포커스가 칸에 가면 이름, 상태, 설명이 차례로 읽힌다. 비활성 버튼은 포커스조차 받지 않아 왜 못 누르는지 알 수 없게 만든다.",
    anchor: "틀렸다는-걸-모두에게-알리기",
  },
  {
    id: "web-accessibility-5",
    post: "web-accessibility",
    question: "axe-core 검사에서 위반이 0개 나왔다. 이 결과만으로는 알 수 없는 것은?",
    choices: [
      "모든 img에 alt 속성이 있는지",
      "입력칸에 레이블이나 placeholder가 있는지",
      "글자 대비가 계산 가능한 곳에서 기준을 넘는지",
      "div로 만든 가입 버튼을 키보드로 누를 수 있는지",
    ],
    answer: 3,
    explanation:
      "자동 검사는 속성이 있는지와 대비 숫자는 잘 잡지만, 클릭 핸들러만 있는 div가 키보드로 동작하는지, alt 내용이 맞는지, 포커스 순서가 맞는지는 판단하지 못한다. 그래서 키보드와 스크린리더로 직접 써 보는 확인이 필요하다.",
    anchor: "자동-검사가-잡는-것과-못-잡는-것",
  },
  {
    id: "web-accessibility-6",
    post: "web-accessibility",
    question: "NVDA를 켠 사용자에게 페이지의 한 글자 단축키 K가 동작하지 않는다. 이유는?",
    choices: [
      "탐색 모드에서는 NVDA가 K를 다음 링크로 이동하는 데 먼저 쓰기 때문에",
      "NVDA가 자바스크립트를 끄기 때문에",
      "keydown 이벤트는 스크린리더가 켜지면 발생하지 않기 때문에",
      "단축키에 aria-keyshortcuts를 붙이지 않았기 때문에",
    ],
    answer: 0,
    explanation:
      "NVDA와 JAWS는 웹 페이지에서 탐색 모드로 동작하며 H, K 같은 글자 키를 제목·링크 이동에 쓴다. 키가 페이지까지 오지 않으니 단축키는 조합키로 만들고 같은 기능을 버튼으로도 제공한다. 입력칸에 포커스가 가면 포커스 모드로 바뀌어 키가 전달된다.",
    anchor: "스크린리더를-직접-켜-본다",
  },
  {
    id: "web-accessibility-7",
    post: "web-accessibility",
    question: "카드에 height: 48px; overflow: hidden을 줬더니 1.4.12 텍스트 간격을 적용했을 때 한 줄이 잘렸다. 가장 알맞은 수정은?",
    choices: [
      "line-height를 1로 고정해 간격 변경을 막는다",
      "overflow: hidden을 overflow: scroll로 바꾼다",
      "height 대신 min-height: 48px로 두어 내용이 늘어날 자리를 남긴다",
      "글자 크기를 px로 고정한다",
    ],
    answer: 2,
    explanation:
      "고정 높이는 사용자가 줄 간격이나 자간을 넓힐 때 내용을 자른다. min-height로 바꾸면 기본 높이는 유지하면서 필요한 만큼 늘어난다. 간격 변경을 막거나 px로 고정하는 것은 사용자의 조정을 무력화하는 쪽이다.",
    anchor: "확대해도-읽혀야-한다",
  },
];
