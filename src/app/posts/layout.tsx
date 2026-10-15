import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "글" };

export default function PostsLayout({ children }: { children: ReactNode }) {
  return children;
}
