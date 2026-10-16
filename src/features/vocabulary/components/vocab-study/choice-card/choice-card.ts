"use client";

import { useEffect, useRef } from "react";
import { vocabHref } from "../../../registry";

/** 답을 고르면 다음 버튼에 포커스를 두어 Enter로 바로 넘어가게 한다. */
export function useChoiceCard(word: string, revealed: boolean) {
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!revealed) return;
    nextRef.current?.focus({ preventScroll: true });
    nextRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [revealed]);

  return { nextRef, href: vocabHref(word) };
}
