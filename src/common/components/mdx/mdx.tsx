import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { Callout } from "./callout";
import { MdxTable } from "./mdx-table";
import { Prose } from "./prose";

// 서버 컴포넌트로 유지한다 ("use client" 금지).
// Next.js가 page에 넘기는 params/searchParams가 클라이언트 컴포넌트로 직렬화되면
// 페이지가 동적 렌더링으로 바뀌므로, children만 넘겨 props를 걸러낸다.
function MdxWrapper({ children }: { children?: ReactNode }) {
  return <Prose>{children}</Prose>;
}

export const mdxComponents: MDXComponents = {
  wrapper: MdxWrapper,
  table: MdxTable,
  Callout,
};
