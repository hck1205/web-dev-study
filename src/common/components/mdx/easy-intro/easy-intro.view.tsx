"use client";

import { useEasyIntro } from "./easy-intro";
import { Body, Root, Summary } from "./easy-intro.styled";
import type { EasyIntroProps } from "./easy-intro.type";

/**
 * 글 맨 위의 "쉽게 말하면" 상자. 초·중학생도 따라올 수 있는 말로 글 전체를 미리 보여 준다.
 * 헤더의 쉬운 모드가 켜져 있으면 펼친 채로 시작한다.
 */
export function EasyIntro({ children }: EasyIntroProps) {
  const { open, toggle } = useEasyIntro();

  return (
    <Root open={open} onToggle={(event) => toggle((event.currentTarget as HTMLDetailsElement).open)}>
      <Summary>
        쉽게 말하면 <span>· 어려우면 여기부터</span>
      </Summary>
      <Body>{children}</Body>
    </Root>
  );
}
