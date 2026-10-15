import type { CategoryId } from "../../registry";

export interface CategoryChip {
  id: CategoryId | "all";
  label: string;
  href: string;
  active: boolean;
  count: number;
}
