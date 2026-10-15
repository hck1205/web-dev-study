import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Topics" };

export default function TopicsLayout({ children }: { children: ReactNode }) {
  return children;
}
