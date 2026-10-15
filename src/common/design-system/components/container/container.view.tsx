"use client";

import { Box } from "./container.styled";
import type { ContainerProps } from "./container.type";

export function Container({ size = "wide", children, className }: ContainerProps) {
  return (
    <Box size={size} className={className}>
      {children}
    </Box>
  );
}
