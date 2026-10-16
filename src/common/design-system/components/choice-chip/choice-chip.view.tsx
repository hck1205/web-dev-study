"use client";

import { Count, Root } from "./choice-chip.styled";
import type { ChoiceChipProps } from "./choice-chip.type";

/** 여러 개 중 하나를 고르는 필터 칩. 눌린 상태를 aria-pressed로 알린다. */
export function ChoiceChip({ selected, children, count, ...rest }: ChoiceChipProps) {
  return (
    <Root type="button" aria-pressed={selected} selected={selected} {...rest}>
      {children}
      {count !== undefined && <Count>{count}</Count>}
    </Root>
  );
}
