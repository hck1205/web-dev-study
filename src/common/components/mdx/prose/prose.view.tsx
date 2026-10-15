"use client";

import { Article } from "./prose.styled";
import type { ProseProps } from "./prose.type";

export function Prose({ children }: ProseProps) {
  return <Article>{children}</Article>;
}
