"use client";

import { Badge } from "@/common/design-system";
import { DIFFICULTY_LABELS } from "../../registry";
import type { DifficultyBadgeProps } from "./difficulty-badge.type";
import { DIFFICULTY_TONE } from "./difficulty-badge.utils";

/** 알고리즘 문제 난이도 배지 (Easy / Medium / Hard) */
export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  return <Badge tone={DIFFICULTY_TONE[difficulty]}>{DIFFICULTY_LABELS[difficulty]}</Badge>;
}
