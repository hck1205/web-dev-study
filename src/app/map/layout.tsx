import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "글 지도" };

export default function MapLayout({ children }: { children: ReactNode }) {
  return children;
}
