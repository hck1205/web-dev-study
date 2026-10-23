"use client";

import { useEasyModeToggle } from "./easy-mode-toggle";
import { Root } from "./easy-mode-toggle.styled";

/** 헤더의 쉬운 모드 토글 */
export function EasyModeToggle() {
  const { easy, label, toggle } = useEasyModeToggle();

  return (
    <Root type="button" on={easy} aria-pressed={easy} aria-label={label} title={label} onClick={toggle}>
      쉽게
    </Root>
  );
}
