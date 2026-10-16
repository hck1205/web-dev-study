"use client";

import { useSpeech } from "../../hooks/use-speech";
import { Button, Wave } from "./speak-button.styled";
import type { SpeakButtonProps } from "./speak-button.type";

/** 누르면 영어 발음을 들려준다. 읽는 동안 소리 물결이 움직인다. */
export function SpeakButton({ text, label = "발음 듣기", slow = false, size = "md" }: SpeakButtonProps) {
  const { supported, speaking, speak } = useSpeech();
  if (!supported) return null;

  return (
    <Button
      type="button"
      size={size}
      speaking={speaking}
      aria-label={label}
      title={label}
      onClick={(event) => {
        event.stopPropagation();
        speak(text, slow ? 0.75 : 0.9);
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5 6 9H2v6h4l5 4V5z" />
        <Wave d="M15.5 8.5a5 5 0 0 1 0 7" speaking={speaking} />
        <Wave d="M19 5a10 10 0 0 1 0 14" speaking={speaking} delay />
      </svg>
    </Button>
  );
}
