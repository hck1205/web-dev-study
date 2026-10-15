"use client";

import { Root } from "./icon-button.styled";
import type { IconButtonProps } from "./icon-button.type";

export function IconButton({ label, children, ...rest }: IconButtonProps) {
  return (
    <Root type="button" aria-label={label} title={label} {...rest}>
      {children}
    </Root>
  );
}
