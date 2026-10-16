import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "어휘" };

export default function VocabularyLayout({ children }: { children: ReactNode }) {
  return children;
}
