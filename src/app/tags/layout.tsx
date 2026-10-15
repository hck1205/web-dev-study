import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "태그" };

export default function TagsLayout({ children }: { children: ReactNode }) {
  return children;
}
