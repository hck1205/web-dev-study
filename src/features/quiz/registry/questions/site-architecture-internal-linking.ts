import type { QuizQuestion } from "../types";

export const SITE_ARCHITECTURE_INTERNAL_LINKING: QuizQuestion[] = [
  {
    id: "site-architecture-internal-linking-1",
    post: "site-architecture-internal-linking",
    question: "주소가 /posts/p1 로 짧은데 홈에서 일곱 번 눌러야 닿는 글이 있다. 검색 엔진 관점에서 이 글은 어떤 페이지인가?",
    choices: [
      "슬래시가 하나뿐이라 얕은 페이지로 본다",
      "sitemap에 있으면 깊이와 상관없이 홈과 같은 중요도로 본다",
      "주소를 /p1 으로 더 줄이면 해결된다",
      "링크로 멀어서 깊은 페이지이고, 늦게 발견되며 덜 중요하게 보일 수 있다",
    ],
    answer: 3,
    explanation:
      "검색 엔진이 신경 쓰는 건 슬래시 수가 아니라 홈에서 링크를 몇 번 건너는지인 클릭 깊이다. 주소를 줄여도 링크 구조가 그대로면 깊이는 변하지 않는다.",
    anchor: "url의-깊이와-클릭-깊이는-다르다",
  },
  {
    id: "site-architecture-internal-linking-2",
    post: "site-architecture-internal-linking",
    question: "파일 이름으로 한글 슬러그를 만드는 정적 사이트에서, 눈에는 같은 주소인데 404가 나거나 사본이 생겼다. 가장 그럴듯한 원인은?",
    choices: [
      "같은 글자가 NFC와 NFD로 서로 다르게 정규화되어 퍼센트 인코딩 바이트가 달라졌다",
      "한글은 URL에 쓸 수 없어서 브라우저가 지운다",
      "구글이 한글 주소를 영어로 번역해서 색인한다",
      "하이픈 대신 밑줄을 써서 그렇다",
    ],
    answer: 0,
    explanation:
      "한글 주소는 UTF-8 퍼센트 인코딩으로 오가는데, 조합형(NFC)과 분해형(NFD)은 같은 글자라도 바이트가 다르다. macOS 파일 이름이 분해형으로 들어오는 경우가 있어 슬러그를 만들 때 normalize(\"NFC\")를 거쳐야 한다.",
    anchor: "슬러그를-정하는-규칙",
  },
  {
    id: "site-architecture-internal-linking-3",
    post: "site-architecture-internal-linking",
    question: "링크 그래프에서 최소 클릭 깊이를 구할 때 깊이 우선 탐색(DFS) 대신 너비 우선 탐색(BFS)을 쓰는 이유는?",
    choices: [
      "DFS는 순환하는 링크에서 반드시 무한 루프에 빠진다",
      "BFS는 가까운 페이지부터 넓혀 가서 처음 닿은 깊이가 곧 최소 클릭 수다",
      "BFS가 메모리를 항상 덜 쓴다",
      "DFS는 외부 링크까지 따라간다",
    ],
    answer: 1,
    explanation:
      "BFS는 깊이 1을 모두 본 뒤 깊이 2로 넘어가므로 먼저 기록된 깊이가 최단 거리다. DFS는 먼저 파고든 긴 길의 깊이를 적을 수 있어, 홈에서 바로 가는 링크가 있는 페이지도 2로 나오는 식의 오답이 생긴다. 방문 표시를 하면 DFS도 무한 루프는 피한다.",
    anchor: "홈에서-몇-번-눌러야-닿나",
  },
  {
    id: "site-architecture-internal-linking-4",
    post: "site-architecture-internal-linking",
    question: "카드 전체를 누를 수 있게 div에 onClick={() => router.push(...)}를 걸었다. 크롤러 입장에서 무엇이 문제인가?",
    choices: [
      "렌더링 전에는 안 보이지만 구글봇이 렌더링한 뒤에는 따라간다",
      "router.push는 서버 요청을 보내지 않아 페이지가 404가 된다",
      "렌더링한 DOM에도 href가 없어 크롤러가 그 주소를 링크로 발견하지 못한다",
      "onClick 링크는 nofollow로 취급되어 신호만 전달하지 않는다",
    ],
    answer: 2,
    explanation:
      "구글은 href가 있는 a 요소만 링크로 따라가고 클릭은 하지 않는다. 렌더링해도 DOM에 주소가 없으니 발견할 방법이 없다. 제목을 a href로 두고 클릭 영역을 카드 전체로 넓히는 게 맞다.",
    anchor: "링크가-하나도-없는-페이지",
  },
  {
    id: "site-architecture-internal-linking-5",
    post: "site-architecture-internal-linking",
    question: "글 목록에 '다음' 링크만 두었더니 글이 늘수록 오래된 글이 깊어진다. 가장 알맞은 대응은?",
    choices: [
      "번호 페이지네이션과 주제 허브로 다른 길을 만들고, 각 쪽은 자기 자신을 canonical로 둔다",
      "rel=\"prev\"와 rel=\"next\"를 추가해 쪽 사이 관계를 알린다",
      "2쪽 이후의 canonical을 모두 1쪽으로 지정한다",
      "오래된 글을 sitemap에서 빼서 새 글에 크롤을 몰아준다",
    ],
    answer: 0,
    explanation:
      "번호 링크와 허브가 있으면 글이 늘어도 깊이가 함께 늘지 않는다. 구글은 rel=prev/next를 쓰지 않는다고 밝혔고, 2쪽 이후 canonical을 1쪽으로 몰면 그 쪽에만 있는 글로 가는 길이 무시될 수 있다.",
    anchor: "목록을-고치면-깊이가-줄어든다",
  },
  {
    id: "site-architecture-internal-linking-6",
    post: "site-architecture-internal-linking",
    question: "로그인·장바구니 페이지로 가는 내부 링크에 rel=\"nofollow\"를 달면 중요한 페이지로 신호가 더 모일까?",
    choices: [
      "모인다. nofollow 링크 몫이 나머지 링크로 다시 나뉜다",
      "모인다. 단 링크가 100개를 넘을 때만 효과가 있다",
      "모이지 않는다. 오히려 그 페이지가 색인에서 즉시 빠진다",
      "모이지 않는다. nofollow 링크도 몫으로 셈해지고 그 몫은 사라진다",
    ],
    answer: 3,
    explanation:
      "구글은 오래전부터 nofollow 링크도 신호를 나누는 몫으로 셈하고 그 몫을 다른 링크로 옮기지 않는다고 설명해 왔다. 색인할 필요 없는 페이지는 noindex로 다루고, 중요한 페이지는 허브와 본문 링크를 더 받게 구조를 바꾼다.",
    anchor: "앵커-텍스트는-링크된-페이지의-설명이다",
  },
  {
    id: "site-architecture-internal-linking-7",
    post: "site-architecture-internal-linking",
    question: "데스크톱에서는 분류 메뉴를 펼쳐 두고, 모바일에서는 메뉴 버튼을 눌러야 API로 불러와 그린다. 색인에는 어떤 영향이 있나?",
    choices: [
      "데스크톱 구글봇이 메뉴를 보니 영향이 없다",
      "모바일 우선 색인이라 스마트폰 구글봇이 본 HTML에 분류 링크가 없어 구조에서 빠진 것처럼 된다",
      "CSS로 감춘 링크와 똑같이 취급되어 문제없다",
      "메뉴 API를 robots.txt로 막지 않는 한 영향이 없다",
    ],
    answer: 1,
    explanation:
      "구글은 스마트폰 구글봇이 본 페이지를 기준으로 색인하고 버튼을 누르지 않는다. CSS로 접은 링크는 HTML에 있어 따라가지만, 아예 그리지 않은 링크는 없는 링크다.",
    anchor: "모바일-화면에-없는-링크",
  },
];
