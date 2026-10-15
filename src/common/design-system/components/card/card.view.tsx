"use client";

import { CardBox, CardLink } from "./card.styled";
import type { CardProps } from "./card.type";

export function Card({ href, children, className }: CardProps) {
  if (href) {
    return (
      <CardLink href={href} className={className}>
        {children}
      </CardLink>
    );
  }
  return <CardBox className={className}>{children}</CardBox>;
}
