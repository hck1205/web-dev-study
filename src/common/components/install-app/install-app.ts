"use client";

import { useEffect, useState } from "react";
import type { BeforeInstallPromptEvent, InstallMode } from "./install-app.type";
import { isIos, isStandalone } from "./install-app.utils";

export function useInstallApp() {
  const [mode, setMode] = useState<InstallMode>("none");
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if (isStandalone()) return;
    if (isIos()) setMode("ios");

    const onPrompt = (event: Event) => {
      event.preventDefault(); // 브라우저 기본 배너 대신 우리 버튼에서 띄운다
      setDeferred(event as BeforeInstallPromptEvent);
      setMode("prompt");
    };
    const onInstalled = () => {
      setDeferred(null);
      setMode("none");
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    setDeferred(null);
    if (outcome === "accepted") setMode("none");
  };

  return { mode, install };
}
