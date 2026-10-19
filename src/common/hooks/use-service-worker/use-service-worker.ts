"use client";

import { useEffect } from "react";

/**
 * 프로덕션에서만 /sw.js 를 등록한다. 개발 중에는 캐시가 수정 사항을 가리지 않게 등록하지 않는다.
 * 주소에 빌드 ID를 붙여 배포마다 새 워커로 바뀌게 한다(워커가 이 값으로 캐시 이름을 짓고 이전 캐시를 지운다).
 */
export function useServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register(`/sw.js?v=${process.env.NEXT_PUBLIC_BUILD_ID}`).catch(() => {
      // 등록에 실패해도 사이트는 그대로 동작한다.
    });
  }, []);
}
