import type { QuizQuestion } from "../types";

export const CROSS_PLATFORM_APPS: QuizQuestion[] = [
  {
    id: "cross-platform-apps-1",
    post: "cross-platform-apps",
    question: "Capacitor로 감싼 웹 앱이 웹(크롬)에서는 멀쩡한데 아이폰 앱에서만 레이아웃이 깨진다. 가장 먼저 의심할 곳은?",
    choices: [
      "iOS에서 화면을 그리는 WKWebView(WebKit)의 CSS 지원 차이",
      "Capacitor 플러그인의 Promise 처리 방식",
      "React Native의 Yoga 레이아웃 엔진",
      "Android System WebView의 버전",
    ],
    answer: 0,
    explanation:
      "하이브리드 앱의 화면은 OS의 웹뷰가 그리고, iOS에서는 사파리와 같은 WebKit 기반 WKWebView다. 그래서 웹에서 사파리 버그를 잡던 일이 앱에서도 그대로 남는다. Yoga는 React Native의 엔진이라 하이브리드와 상관없다.",
    anchor: "웹뷰-안에-웹-앱을-넣는-하이브리드",
  },
  {
    id: "cross-platform-apps-2",
    post: "cross-platform-apps",
    question: "React Native 옛 구조에서 제스처에 붙은 애니메이션이 한 박자 늦던 이유로 가장 맞는 것은?",
    choices: [
      "React Native가 DOM을 거쳐 화면을 그려서",
      "자바스크립트와 네이티브가 메시지를 JSON으로 직렬화해 비동기 큐로 주고받아서",
      "Dart를 런타임에 해석해서",
      "Hermes가 바이트코드를 쓰지 않아서",
    ],
    answer: 1,
    explanation:
      "옛 브리지는 메시지를 JSON으로 바꿔 큐에 넣고 나중에 꺼내는 비동기 방식이라 직렬화 비용과 대기가 쌓였다. 새 아키텍처의 JSI는 C++ 객체 참조를 직접 들고 부르게 해 이 비용을 없앴다. React Native는 DOM을 쓰지 않는다.",
    anchor: "react-native는-os-위젯에게-그리게-한다",
  },
  {
    id: "cross-platform-apps-3",
    post: "cross-platform-apps",
    question: "Flutter 앱이 iOS와 Android에서 픽셀 단위로 같은 화면을 내는 이유와 그 대가를 맞게 짝지은 것은?",
    choices: [
      "OS 웹뷰를 써서 / 플랫폼마다 CSS가 다르게 보인다",
      "OS 네이티브 위젯을 써서 / 브리지 직렬화 비용이 든다",
      "크로미움을 들고 가서 / 설치 용량이 100MB를 넘는다",
      "자체 엔진이 모든 픽셀을 칠해서 / OS의 새 위젯 모양을 직접 따라 그려야 한다",
    ],
    answer: 3,
    explanation:
      "Flutter는 OS 위젯을 빌리지 않고 Impeller 같은 자체 엔진으로 직접 그린다. 그래서 플랫폼 사이 화면이 같지만, OS가 새 위젯 모양을 내면 Flutter가 따라 그려 줄 때까지 기다려야 하고 접근성·입력 연결도 엔진이 맡는다.",
    anchor: "flutter는-자기-붓으로-모든-픽셀을-칠한다",
  },
  {
    id: "cross-platform-apps-4",
    post: "cross-platform-apps",
    question: "Electron 앱에서 nodeIntegration: true인 창에 사용자 입력이 HTML로 들어가 XSS가 생겼다. 웹의 XSS보다 위험한 이유는?",
    choices: [
      "쿠키가 HttpOnly여도 읽히기 때문이다",
      "CSP가 Electron에서는 동작하지 않기 때문이다",
      "페이지 스크립트가 require로 child_process를 불러 사용자 PC에서 명령을 실행할 수 있기 때문이다",
      "메인 프로세스가 같은 메모리를 공유해 바로 멈추기 때문이다",
    ],
    answer: 2,
    explanation:
      "렌더러가 Node.js 권한을 들고 있으면 XSS가 원격 코드 실행으로 커진다. 그래서 nodeIntegration은 Electron 5부터 꺼져 있고 contextIsolation과 샌드박스도 기본이 되었다. 메인과 렌더러는 메모리를 공유하지 않고, CSP는 Electron에서도 권장되는 방어다.",
    anchor: "electron-앱에서-xss가-원격-코드-실행이-되는-길",
  },
  {
    id: "cross-platform-apps-5",
    post: "cross-platform-apps",
    question: "contextIsolation과 sandbox를 모두 켰는데 프리로드에서 contextBridge.exposeInMainWorld(\"ipc\", ipcRenderer)를 했다. 무엇이 문제인가?",
    choices: [
      "contextBridge는 객체를 넘길 수 없어 앱이 시작하지 않는다",
      "페이지가 아무 채널이나 골라 메인 프로세스의 강한 기능을 부를 수 있다",
      "ipcRenderer가 동기로만 동작해 화면이 멈춘다",
      "프리로드가 페이지보다 늦게 실행되어 api가 undefined가 된다",
    ],
    answer: 1,
    explanation:
      "contextIsolation은 프리로드와 페이지의 자바스크립트 세계를 나눌 뿐이라, 프리로드가 강한 객체를 통째로 건네면 분리한 의미가 없어진다. 함수는 하는 일 하나씩 좁게 열고 채널 이름은 프리로드에서 고정한다. 프리로드는 페이지보다 먼저 실행된다.",
    anchor: "electron-앱에서-xss가-원격-코드-실행이-되는-길",
  },
  {
    id: "cross-platform-apps-6",
    post: "cross-platform-apps",
    question: "메인 프로세스에서 senderUrl.startsWith(\"https://app.example.com\")로 IPC 발신자를 검사했다. 어떤 주소가 잘못 통과하나?",
    choices: [
      "https://app.example.com.evil.io/",
      "http://app.example.com/",
      "https://evil.io/?u=https://app.example.com",
      "app://bundle/index.html",
    ],
    answer: 0,
    explanation:
      "앞부분 문자열만 같으면 통과하니 app.example.com.evil.io 같은 다른 도메인이 뚫린다. 주소를 URL로 파싱해 스킴과 호스트(포트 포함)를 통째로 비교해야 한다. 쿼리에 주소를 넣은 경우는 앞부분이 달라 startsWith에서도 걸러진다.",
    anchor: "electron-앱에서-xss가-원격-코드-실행이-되는-길",
  },
  {
    id: "cross-platform-apps-7",
    post: "cross-platform-apps",
    question: "Tauri 앱이 Windows에서는 멀쩡한데 Linux에서만 최신 CSS가 적용되지 않는다. 이유로 가장 맞는 것은?",
    choices: [
      "Tauri가 Linux에서는 크로미움을 따로 내려받기 때문이다",
      "Rust 백엔드가 CSS를 다시 컴파일하기 때문이다",
      "Tauri 2.0의 권한 설정이 CSS를 막기 때문이다",
      "Linux에서는 배포판마다 버전이 다른 WebKitGTK가 그리기 때문이다",
    ],
    answer: 3,
    explanation:
      "Tauri는 OS의 웹뷰를 빌려 Windows는 WebView2(크로미움), macOS는 WKWebView, Linux는 WebKitGTK가 그린다. 그래서 용량은 작지만 OS별 렌더링 차이를 챙겨야 하고, Linux는 배포판의 WebKitGTK 버전에 따라 지원 범위가 다르다.",
    anchor: "tauri는-os의-웹뷰를-빌린다",
  },
];
