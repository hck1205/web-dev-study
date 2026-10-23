import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "로드맵" };

export default function RoadmapLayout({ children }: { children: ReactNode }) {
  return children;
}
