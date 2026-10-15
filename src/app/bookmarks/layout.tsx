import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "즐겨찾기" };

export default function BookmarksLayout({ children }: { children: ReactNode }) {
  return children;
}
