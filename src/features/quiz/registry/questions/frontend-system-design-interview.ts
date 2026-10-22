import type { QuizQuestion } from "../types";

export const FRONTEND_SYSTEM_DESIGN_INTERVIEW: QuizQuestion[] = [
  {
    id: "frontend-system-design-interview-1",
    post: "frontend-system-design-interview",
    question: "프런트엔드 설계 면접에서 \"자동완성을 설계해 보세요\"를 받았을 때 가장 먼저 할 일에 가까운 것은?",
    choices: [
      "트라이와 캐시 계층으로 서버 구조를 그린다",
      "상태 관리 라이브러리를 고른다",
      "주 사용 기기, 결과에 보일 내용, 한국어 입력 지원 같은 환경을 묻고 화면을 스케치한다",
      "디바운스 시간을 정한다",
    ],
    answer: 2,
    explanation:
      "프런트엔드 면접은 사용자 기기 안을 확대해서 묻기 때문에 기기, 결과 모양, 입력 언어 같은 환경 질문이 답을 바꾼다. 서버 구조는 백엔드 면접의 질문이고, 라이브러리나 디바운스 값은 요구 사항이 정해진 뒤의 결정이다.",
    anchor: "45분-안에-무엇을-언제-말하나",
  },
  {
    id: "frontend-system-design-interview-2",
    post: "frontend-system-design-interview",
    question:
      "키 입력마다 요청하고 응답이 오면 바로 목록을 바꾸는 자동완성에서, 짧은 검색어일수록 서버가 늦게 답한다. \"react ho\"를 다 쳤을 때 화면에 남을 수 있는 목록은?",
    choices: [
      "항상 \"react ho\"의 결과",
      "가장 먼저 보낸 \"r\"의 결과",
      "아무것도 보이지 않는다",
      "모든 응답을 합친 목록",
    ],
    answer: 1,
    explanation:
      "응답은 도착한 순서대로 화면을 덮어쓰니 가장 늦게 온 응답이 이긴다. 실험에서는 가장 먼저 보낸 \"r\"의 응답이 911ms에 마지막으로 도착해 입력값과 다른 목록이 남았다.",
    anchor: "키를-누를-때마다-요청하면-생기는-일",
  },
  {
    id: "frontend-system-design-interview-3",
    post: "frontend-system-design-interview",
    question: "디바운스를 250ms로 걸었는데도 가끔 낡은 목록이 보인다. 가장 알맞은 보강은?",
    choices: [
      "디바운스를 1초로 늘린다",
      "다음 입력이 오면 앞 요청을 AbortController로 취소하거나, 응답의 검색어·번호를 비교해 낡은 응답을 버린다",
      "useMemo로 목록을 감싼다",
      "서버 응답을 압축한다",
    ],
    answer: 1,
    explanation:
      "디바운스는 요청 수를 줄일 뿐 순서를 보장하지 않아, 사용자가 잠깐 멈췄다 다시 치면 요청 둘이 겹칠 수 있다. 겹침은 취소나 번호 비교로 막는다. 디바운스를 늘리면 겹침이 줄 뿐 사라지지 않고 목록이 느려 보인다.",
    anchor: "줄이고-끊고-기억한다",
  },
  {
    id: "frontend-system-design-interview-4",
    post: "frontend-system-design-interview",
    question: "AbortController로 앞 요청을 취소했다. 서버에서는 무슨 일이 일어나나?",
    choices: [
      "서버가 받은 요청은 대개 계산을 끝까지 하고, 브라우저가 응답을 기다리지 않을 뿐이다",
      "서버의 계산이 즉시 멈춘다",
      "서버가 요청을 받기 전에 반드시 끊긴다",
      "서버가 409를 돌려준다",
    ],
    answer: 0,
    explanation:
      "취소는 브라우저 쪽에서 응답을 더 기다리지 않는 것이다. 이미 서버에 도착한 요청은 서버가 연결 종료를 따로 확인하지 않는 한 끝까지 처리된다. 그래서 서버 비용을 줄이는 건 취소보다 디바운스와 캐시 쪽이다.",
    anchor: "줄이고-끊고-기억한다",
  },
  {
    id: "frontend-system-design-interview-5",
    post: "frontend-system-design-interview",
    question: "키 입력마다 요청하는 자동완성에 \"리액트\"를 한글 입력기로 치면 어떤 일이 생기나?",
    choices: [
      "조합이 끝날 때 한 번만 input 이벤트가 온다",
      "한 글자가 끝날 때마다 한 번씩, 세 번 요청한다",
      "\"ㄹ\", \"리ㅇ\" 같은 조합 중간 글자로도 요청이 나간다",
      "조합 중에는 input 이벤트가 오지 않는다",
    ],
    answer: 2,
    explanation:
      "조합 중에도 input 이벤트가 isComposing=true로 계속 오고 값이 중간 글자로 바뀐다. 실험에서는 세 글자에 이벤트 여덟 번, 요청 일곱 번이 나갔다. 디바운스를 건 구현은 조합이 끝난 값으로 한 번만 요청했다.",
    anchor: "한글은-한-글자에-입력-이벤트가-여러-번-온다",
  },
  {
    id: "frontend-system-design-interview-6",
    post: "frontend-system-design-interview",
    question: "콤보박스 패턴에서 방향키로 목록을 움직일 때 포커스를 목록 항목으로 옮기지 않고 aria-activedescendant를 쓰는 이유는?",
    choices: [
      "목록 항목은 포커스를 받을 수 없어서",
      "포커스가 입력창에 남아야 사용자가 계속 타자를 칠 수 있어서",
      "aria-activedescendant가 더 빨리 렌더링돼서",
      "화면 낭독기가 option 역할을 읽지 못해서",
    ],
    answer: 1,
    explanation:
      "포커스를 목록으로 옮기면 입력창에서 벗어나 다음 글자를 칠 수 없다. 포커스는 입력창에 두고 aria-activedescendant로 지금 고른 줄을 보조 기술에 알린다. option은 화면 낭독기가 잘 읽는 역할이다.",
    anchor: "키보드와-화면-낭독기로도-고를-수-있어야-한다",
  },
  {
    id: "frontend-system-design-interview-7",
    post: "frontend-system-design-interview",
    question: "자동완성 응답에 요청한 검색어(q)를 그대로 다시 담아 달라고 API에 요구하는 이유는?",
    choices: [
      "로그를 남기기 위해서",
      "응답 크기를 늘려 캐시 적중률을 높이려고",
      "서버가 검색어를 정규화했는지 사용자에게 보여 주려고",
      "늦게 온 응답이 어느 검색어의 것인지 알아야 지금 입력값과 다를 때 버릴 수 있어서",
    ],
    answer: 3,
    explanation:
      "응답 순서는 보장되지 않으니 응답마다 어느 질문의 답인지 알아야 한다. 응답의 q를 지금 입력값과 비교하면 낡은 응답을 버릴 수 있다. 응답 모양은 화면이 필요로 하는 것으로 정한다.",
    anchor: "응답-모양은-화면이-정한다",
  },
];
