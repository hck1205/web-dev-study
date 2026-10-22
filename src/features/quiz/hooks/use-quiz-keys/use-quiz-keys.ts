"use client";

import { useEffect } from "react";
import type { UseQuizKeysOptions } from "./use-quiz-keys.type";

/** 1~5로 보기를 고르고, 정답 공개 후 Enter로 다음 문제로 간다. 입력창·대화상자 안에서는 무시한다. */
export function useQuizKeys({ enabled, revealed, choiceCount, onPick, onNext }: UseQuizKeysOptions) {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true'], [role='dialog']")) return;

      if (!revealed) {
        const number = Number(event.key);
        if (Number.isInteger(number) && number >= 1 && number <= choiceCount) {
          event.preventDefault();
          onPick(number - 1);
        }
        return;
      }

      // 버튼·링크에 포커스가 있으면 Enter는 그 요소가 처리한다.
      if (event.key === "Enter" && !target?.closest("button, a")) {
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, revealed, choiceCount, onPick, onNext]);
}
