"use client";

import { useEffect } from "react";

/** 프로덕션에서만 /sw.js 를 등록한다. 개발 중에는 캐시가 수정 사항을 가리지 않게 등록하지 않는다. */
export function useServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // 등록에 실패해도 사이트는 그대로 동작한다.
    });
  }, []);
}
