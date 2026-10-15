"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** 한 번에 하나만 열리는 드롭다운. 바깥 클릭·Esc로 닫는다. */
export function useDropdown() {
  const rootRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (openId === null) return;

    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpenId(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenId(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openId]);

  // 참조가 안정적이어야 useEffect 의존성으로 안전하게 쓸 수 있다.
  const toggle = useCallback((id: string) => setOpenId((current) => (current === id ? null : id)), []);
  const close = useCallback(() => setOpenId(null), []);

  return { rootRef, openId, toggle, close };
}
