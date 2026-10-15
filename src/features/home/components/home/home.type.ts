import type { Category } from "@/features/posts";

export interface HomeCategory extends Category {
  count: number;
  href: string;
}
