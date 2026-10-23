import type { QuizQuestion } from "../types";

export const BROWSER_DEVTOOLS_DEBUGGING: QuizQuestion[] = [
  {
    id: "browser-devtools-debugging-1",
    post: "browser-devtools-debugging",
    question: "수량 버튼을 빠르게 누르면 합계가 가끔 이전 값으로 돌아간다. Network 패널의 Waterfall에서 무엇을 확인하면 원인을 가장 빨리 좁힐 수 있나?",
    choices: [
      "요청마다 DNS Lookup 구간이 있는지",
      "응답이 요청한 순서대로 끝났는지",
      "Size 칸에 (disk cache)가 보이는지",
      "Disable cache를 켜면 증상이 사라지는지",
    ],
    answer: 1,
    explanation:
      "나중에 보낸 요청보다 먼저 보낸 요청이 늦게 끝나면, 마지막에 받은 옛 응답이 화면을 덮어쓰는 경쟁 상태다. 서버 계산이 아니라 프런트엔드가 옛 응답을 버리지 않은 문제로 범위가 좁혀진다. DNS나 캐시는 순서 문제와 관계가 적다.",
    anchor: "network-패널-요청이-몇-번-어떤-순서로-오갔나",
  },
  {
    id: "browser-devtools-debugging-2",
    post: "browser-devtools-debugging",
    question: "console.log(cart)로 찍은 뒤 cart.qty를 3으로 바꿨다. 나중에 그 로그를 펼쳤더니 qty가 3으로 보인다. 왜 그런가?",
    choices: [
      "콘솔은 객체의 참조를 남기고, 펼치는 순간의 값을 읽어 보여 주기 때문이다",
      "console.log는 비동기로 실행되어 다음 줄이 먼저 끝나기 때문이다",
      "cart가 const로 선언되어 값이 고정되지 않았기 때문이다",
      "크롬이 로그를 찍을 때 structuredClone으로 사본을 만들기 때문이다",
    ],
    answer: 0,
    explanation:
      "요약 줄은 찍는 순간의 모습이지만 펼친 내용은 펼칠 때 평가된다. 그 순간의 값을 남기려면 JSON.stringify나 structuredClone으로 사본을 찍거나 중단점에서 멈춰 본다. console.log가 다음 줄보다 늦게 실행되는 것은 아니다.",
    anchor: "콘솔에-찍힌-객체는-펼치는-순간의-값이다",
  },
  {
    id: "browser-devtools-debugging-3",
    post: "browser-devtools-debugging",
    question: "열 번에 한 번 나는 버그를 그 한 번에만 멈춰 세우고 싶다. 가장 알맞은 도구는?",
    choices: [
      "일반 줄 중단점",
      "로그포인트",
      "Pause on caught exceptions",
      "조건부 중단점",
    ],
    answer: 3,
    explanation:
      "조건부 중단점은 식이 참일 때만 멈춘다. 늦게 온 응답일 때처럼 버그가 나는 상황을 조건으로 주면 된다. 로그포인트는 멈추지 않고 값만 찍고, 일반 중단점은 매번 멈춰 재현을 방해한다.",
    anchor: "원하는-순간에만-멈추는-중단점들",
  },
  {
    id: "browser-devtools-debugging-4",
    post: "browser-devtools-debugging",
    question: "await 뒤의 applyTotal에서 멈췄는데 실제 콜 스택에는 클릭 핸들러가 없다. 그런데도 크롬 Call Stack에 onClick이 보이는 이유는?",
    choices: [
      "await는 콜 스택을 비우지 않고 그대로 유지하기 때문이다",
      "소스맵이 원래 호출 순서를 기록해 두기 때문이다",
      "크롬이 비동기 작업을 예약한 순간의 스택을 기억해 두었다가 구분선 아래에 이어 붙이기 때문이다",
      "applyTotal이 onClick 안에서 동기적으로 불렸기 때문이다",
    ],
    answer: 2,
    explanation:
      "await 뒤의 코드는 응답이 온 뒤 빈 스택에서 마이크로태스크로 실행된다. 비동기 스택 트레이스는 예약 시점의 스택을 붙여 보여 주는 개발자 도구의 기능이다. 소스맵은 위치를 되돌릴 뿐 호출 경로를 기록하지 않는다.",
    anchor: "await-너머의-호출-경로",
  },
  {
    id: "browser-devtools-debugging-5",
    post: "browser-devtools-debugging",
    question: "Timing 탭에서 Waiting for server response 구간이 유독 길다. 먼저 볼 곳은?",
    choices: [
      "서버 처리와 그 앞의 프록시·CDN",
      "같은 출처로 동시에 나간 요청 수",
      "응답의 content-encoding 압축 여부",
      "DNS 캐시",
    ],
    answer: 0,
    explanation:
      "이 구간은 요청을 다 보낸 뒤 첫 바이트가 오기까지라 서버 처리와 왕복이 합쳐져 있다. 연결 수나 우선순위는 Queueing·Stalled에, 압축은 Content Download에 드러난다.",
    anchor: "network-패널-요청이-몇-번-어떤-순서로-오갔나",
  },
  {
    id: "browser-devtools-debugging-6",
    post: "browser-devtools-debugging",
    question: "Performance 녹화에서 클릭 하나가 280ms 긴 작업이 됐고 그 안에 보라색 Layout 막대가 수십 번 반복된다. 가장 그럴듯한 원인은?",
    choices: [
      "이미지가 너무 커서 디코딩이 오래 걸린다",
      "반복문에서 스타일 쓰기와 offsetHeight 읽기를 번갈아 해 레이아웃이 매번 강제된다",
      "서비스 워커가 요청을 가로채 응답이 늦다",
      "가비지 컬렉션이 레이아웃 중간마다 돈다",
    ],
    answer: 1,
    explanation:
      "쓰기는 레이아웃을 무효로 만들고, 그 뒤의 읽기는 최신 값을 주려고 그 자리에서 레이아웃을 계산한다. 번갈아 하면 반복 횟수만큼 Layout이 쌓이고 Forced reflow 경고가 붙는다. 읽기를 먼저 모으고 쓰기를 나중에 모으면 사라진다.",
    anchor: "읽고-쓰기를-번갈아-하면-레이아웃이-반복된다",
  },
  {
    id: "browser-devtools-debugging-7",
    post: "browser-devtools-debugging",
    question: "아이폰 크롬에서만 화면이 깨진다는 문의가 왔다. 디버깅 방향으로 옳은 것은?",
    choices: [
      "데스크톱 크롬 기기 모드에서 아이폰을 고르면 같은 엔진으로 재현된다",
      "안드로이드 기기를 chrome://inspect로 연결해 본다",
      "iOS 크롬은 블링크 엔진이라 데스크톱 크롬과 결과가 같다",
      "iOS의 모든 브라우저는 웹킷을 쓰니, 웹 속성을 켜고 맥 사파리 개발자용 메뉴로 기기에 붙는다",
    ],
    answer: 3,
    explanation:
      "iOS에서는 크롬도 웹킷 엔진을 쓰므로 사실상 사파리 엔진의 문제다. 기기 모드는 화면 크기와 터치만 흉내 내고 엔진은 데스크톱 크롬 그대로라 재현이 안 될 수 있다. 실제 기기에 맥 사파리 개발자 도구를 붙여 본다.",
    anchor: "휴대폰에서만-나는-버그",
  },
];
