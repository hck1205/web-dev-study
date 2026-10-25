import type { ReactNode } from "react";
import { COURSES } from "@/features/roadmap/registry";

// 큰 로드맵 경로만 정적으로 만든다. (client page.tsx에서는 export할 수 없어 layout에 둔다)
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSES.map(({ id }) => ({ id }));
}

export default function CourseLayout({ children }: { children: ReactNode }) {
  return children;
}
