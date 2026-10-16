"use client";

import { useEffect } from "react";
import type { UseStudyKeysOptions } from "./use-study-keys.type";

/** 숫자로 고르고, 스페이스로 뒤집고, Enter로 넘긴다. 입력창·대화상자 안에서는 무시한다. */
export function useStudyKeys({ enabled, onNumber, onFlip, onNext }: UseStudyKeysOptions) {
  useEffect(() => {
    if (!enabled) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true'], [role='dialog']")) return;

      const number = Number(event.key);
      if (Number.isInteger(number) && number >= 1 && number <= 4) {
        event.preventDefault();
        onNumber(number - 1);
      } else if (event.key === " " && onFlip) {
        event.preventDefault();
        onFlip();
      } else if (event.key === "Enter" && onNext && !target?.closest("button, a")) {
        event.preventDefault();
        onNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, onNumber, onFlip, onNext]);
}
