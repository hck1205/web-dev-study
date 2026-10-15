import type { BadgeTone } from "@/common/design-system";
import type { Difficulty } from "../../registry";

export const DIFFICULTY_TONE: Record<Difficulty, BadgeTone> = {
  easy: "success",
  medium: "warning",
  hard: "danger",
};
