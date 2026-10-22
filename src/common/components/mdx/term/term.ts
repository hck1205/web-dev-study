"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useGetEasyMode } from "@/common/atoms/easy-mode";

/** 쉬운 모드에서만 풀이를 보여 준다. 누르면 열리고, 밖을 누르거나 Esc로 닫힌다 */
export function useTerm() {
  const easy = useGetEasyMode();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return { easy, open, toggle: () => setOpen((value) => !value), rootRef, tipId: `term-${id}` };
}
