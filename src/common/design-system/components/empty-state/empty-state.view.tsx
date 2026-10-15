"use client";

import { Root } from "./empty-state.styled";
import type { EmptyStateProps } from "./empty-state.type";

/** "아직 글이 없습니다" 같은 빈 상태 안내 */
export function EmptyState({ children }: EmptyStateProps) {
  return <Root>{children}</Root>;
}
