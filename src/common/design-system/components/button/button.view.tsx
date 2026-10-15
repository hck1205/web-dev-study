"use client";

import { ButtonLinkRoot, ButtonRoot } from "./button.styled";
import type { ButtonProps } from "./button.type";

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", children } = props;

  if (props.href !== undefined) {
    const { variant: _v, size: _s, children: _c, href, ...rest } = props;
    return (
      <ButtonLinkRoot href={href} variant={variant} size={size} {...rest}>
        {children}
      </ButtonLinkRoot>
    );
  }

  const { variant: _v, size: _s, children: _c, href: _h, ...rest } = props;
  return (
    <ButtonRoot variant={variant} size={size} {...rest}>
      {children}
    </ButtonRoot>
  );
}
