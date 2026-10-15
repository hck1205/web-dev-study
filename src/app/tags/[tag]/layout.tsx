import type { ReactNode } from "react";
import { ALL_TAGS } from "@/features/posts";

// 글에 쓰인 모든 태그 페이지를 빌드 시점에 정적으로 생성한다.
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_TAGS.map(({ slug }) => ({ tag: slug }));
}

export default function TagLayout({ children }: { children: ReactNode }) {
  return children;
}
