import type { QuizQuestion } from "../types";

export const PWA_INSTALL_OFFLINE: QuizQuestion[] = [
  {
    id: "pwa-install-offline-1",
    post: "pwa-install-offline",
    question: "안드로이드 크롬에서 \"홈 화면에 추가\"한 아이콘을 눌렀더니 주소창이 있는 탭으로 열렸다. 가장 먼저 의심할 것은?",
    choices: [
      "서비스 워커가 캐시 우선 전략을 쓰지 않는다",
      "사이트가 HTTP/2를 쓰지 않는다",
      "매니페스트가 없거나 display가 standalone 같은 앱 창 값이 아니다",
      "theme_color가 지정되지 않았다",
    ],
    answer: 2,
    explanation:
      "창 모양은 매니페스트의 display가 정한다. 매니페스트를 못 읽었거나 display가 browser면 북마크처럼 탭으로 열린다. theme_color는 색만 바꾸고 창 모양과는 관계없다.",
    anchor: "매니페스트-한-장이-정하는-것",
  },
  {
    id: "pwa-install-offline-2",
    post: "pwa-install-offline",
    question: "분석을 위해 start_url을 \"/\"에서 \"/?source=pwa\"로 바꿨더니 기존 설치와 다른 앱처럼 취급될 수 있다. 이를 막는 방법은?",
    choices: [
      "매니페스트에 id를 고정해 둔다",
      "scope를 \"/?source=pwa\"로 맞춘다",
      "short_name을 바꾸지 않는다",
      "서비스 워커의 캐시 이름을 그대로 둔다",
    ],
    answer: 0,
    explanation:
      "크롬은 앱을 id로 구분하고, id가 없으면 start_url을 대신 쓴다. 그래서 start_url이 바뀌면 다른 앱이 될 수 있다. 처음부터 id를 정해 두면 start_url을 바꿔도 같은 앱으로 남는다.",
    anchor: "매니페스트-한-장이-정하는-것",
  },
  {
    id: "pwa-install-offline-3",
    post: "pwa-install-offline",
    question: "beforeinstallprompt 이벤트를 다루는 방법으로 옳은 것은?",
    choices: [
      "페이지가 뜨자마자 prompt()를 불러 설치 창을 띄운다",
      "preventDefault로 기본 안내를 막고 이벤트를 저장했다가, 사용자의 클릭 안에서 prompt()를 부른다",
      "사파리와 파이어폭스에서도 같은 이벤트가 오니 분기 없이 쓴다",
      "userChoice가 dismissed여도 같은 이벤트로 다시 prompt()를 부를 수 있다",
    ],
    answer: 1,
    explanation:
      "prompt()는 사용자 동작 안에서 불러야 하고, 이벤트 하나로 한 번만 쓸 수 있다. 이 이벤트는 크롬 계열에만 있어서 iOS에서는 홈 화면에 추가하는 방법을 안내해야 한다.",
    anchor: "설치-버튼은-브라우저가-허락할-때만-뜬다",
  },
  {
    id: "pwa-install-offline-4",
    post: "pwa-install-offline",
    question: "오프라인 폴백을 만들 때 fetch 핸들러에서 request.mode === \"navigate\"인 요청만 다루는 이유는?",
    choices: [
      "navigate 요청만 서비스 워커가 가로챌 수 있어서",
      "이미지와 스크립트는 HTTPS가 아니어서",
      "Cache Storage에는 HTML만 저장할 수 있어서",
      "이미지나 API 요청까지 오프라인 HTML로 바꾸면 엉뚱한 응답이 들어가서",
    ],
    answer: 3,
    explanation:
      "navigate는 페이지 이동 요청이다. 모든 요청을 오프라인 페이지로 바꾸면 이미지 자리나 JSON을 기대하는 코드에 HTML이 들어간다. 서비스 워커는 하위 자원 요청도 가로챌 수 있지만 폴백은 페이지 이동에만 거는 게 맞다.",
    anchor: "오프라인에서-열리게-하는-최소한",
  },
  {
    id: "pwa-install-offline-5",
    post: "pwa-install-offline",
    question: "iOS 사용자에게 웹 푸시를 보내려고 한다. 꼭 필요한 조건은?",
    choices: [
      "사용자가 웹 앱을 홈 화면에 추가하고, 그 앱 안에서 사용자 동작에 맞춰 권한을 받는다",
      "사파리 탭에서 페이지가 뜰 때 바로 requestPermission()을 부른다",
      "userVisibleOnly를 false로 줘서 조용한 푸시로 보낸다",
      "서버가 기기와 웹소켓 연결을 계속 유지한다",
    ],
    answer: 0,
    explanation:
      "iOS는 16.4부터 웹 푸시를 지원하지만 홈 화면에 추가한 웹 앱에서만 된다. 권한도 사용자 동작에 맞춰 물어야 한다. 웹 푸시는 푸시 서비스가 배달하므로 서버가 기기와 직접 연결을 붙잡지 않는다.",
    anchor: "푸시-알림이-오는-길",
  },
  {
    id: "pwa-install-offline-6",
    post: "pwa-install-offline",
    question: "푸시 서비스에 메시지를 보냈더니 410 응답이 돌아왔다. 서버가 할 일은?",
    choices: [
      "같은 구독으로 몇 분 뒤 다시 보낸다",
      "VAPID 키를 새로 만들어 다시 서명한다",
      "만료되었거나 권한이 거둬진 구독이니 저장소에서 지운다",
      "본문을 4KB 아래로 줄여 다시 보낸다",
    ],
    answer: 2,
    explanation:
      "404나 410은 그 구독이 더 이상 유효하지 않다는 뜻이다. 지우지 않으면 보낼 때마다 실패가 쌓인다. 다시 보내도 같은 결과가 나오고, 크기 초과는 다른 오류로 돌아온다.",
    anchor: "푸시-알림이-오는-길",
  },
  {
    id: "pwa-install-offline-7",
    post: "pwa-install-offline",
    question: "새 버전을 배포했는데 설치한 PWA에서만 옛 화면이 오래 남는다. 가장 그럴듯한 이유는?",
    choices: [
      "매니페스트의 display가 standalone이라 서비스 워커가 꺼져 있어서",
      "앱 창이 오래 살아 있어 옛 서비스 워커가 계속 맡고, 새 워커가 waiting 상태로 기다려서",
      "설치한 앱은 HTTP 캐시를 쓰지 않아서",
      "iOS가 매니페스트를 매일 다시 읽어서",
    ],
    answer: 1,
    explanation:
      "새 워커는 옛 워커가 맡은 창이 모두 닫혀야 활성화된다. 홈 화면 앱은 운영체제가 창을 오래 남겨 두기도 해서 이 대기가 길어진다. 대기 중인 워커를 감지해 업데이트 알림을 띄우고, 앱이 다시 보일 때 registration.update()로 확인을 앞당긴다.",
    anchor: "새-버전을-알리는-방법",
  },
];
