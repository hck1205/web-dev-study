/** Chromium 계열만 보내는 설치 이벤트. 표준 DOM 타입에 아직 없다. */
export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

/** prompt: 설치 버튼을 보여 줄 수 있다 / ios: 사파리 공유 메뉴로 안내 / none: 이미 설치했거나 지원하지 않는다 */
export type InstallMode = "prompt" | "ios" | "none";
