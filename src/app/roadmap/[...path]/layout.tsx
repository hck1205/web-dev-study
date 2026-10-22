import type { ReactNode } from "react";
import { CHECKPOINTS, FLAT_ROADMAPS } from "@/features/roadmap/registry";

// 로드맵과 관문 경로만 정적으로 만든다. (client page.tsx에서는 export할 수 없어 layout에 둔다)
export const dynamicParams = false;

export function generateStaticParams() {
  return [...FLAT_ROADMAPS.map(({ path }) => ({ path })), ...CHECKPOINTS.map(({ id }) => ({ path: id.split("/") }))];
}

export default function RoadmapDetailLayout({ children }: { children: ReactNode }) {
  return children;
}
