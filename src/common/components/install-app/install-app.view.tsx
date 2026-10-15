"use client";

import { useInstallApp } from "./install-app";
import { Hint, InstallButton } from "./install-app.styled";

/** 설치할 수 있는 환경에서만 보인다. 이미 앱으로 열었으면 아무것도 그리지 않는다. */
export function InstallApp() {
  const { mode, install } = useInstallApp();

  if (mode === "prompt") return <InstallButton onClick={install}>앱으로 설치</InstallButton>;
  if (mode === "ios") return <Hint>사파리 공유 버튼 → 홈 화면에 추가로 앱처럼 쓸 수 있다</Hint>;
  return null;
}
