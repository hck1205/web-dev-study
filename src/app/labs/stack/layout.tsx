import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Labs" };

export default function StackLayout({ children }: { children: ReactNode }) {
  return children;
}
