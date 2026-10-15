"use client";

import { TagLink, TagText } from "./tag.styled";
import type { TagProps } from "./tag.type";

/** 해시태그. 항상 "#"가 앞에 붙는다. */
export function Tag({ href, children, className, onClick }: TagProps) {
  if (href) {
    return (
      <TagLink href={href} className={className} onClick={onClick}>
        #{children}
      </TagLink>
    );
  }
  return <TagText className={className}>#{children}</TagText>;
}
