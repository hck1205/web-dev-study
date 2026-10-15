import type { ReactNode } from "react";
import { FLAT_TOPICS } from "@/features/topics/registry";

// 토픽 트리의 모든 경로를 빌드 시점에 정적으로 생성한다. (client page.tsx에서는 export할 수 없어 layout에 둔다)
export const dynamicParams = false;

export function generateStaticParams() {
  return FLAT_TOPICS.map(({ path }) => ({ path }));
}

export default function TopicLayout({ children }: { children: ReactNode }) {
  return children;
}
