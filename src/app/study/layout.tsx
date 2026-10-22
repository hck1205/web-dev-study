import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "오늘 할 일" };

export default function StudyLayout({ children }: { children: ReactNode }) {
  return children;
}
