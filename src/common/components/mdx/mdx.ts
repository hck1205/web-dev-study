import type { MDXComponents } from "mdx/types";
import { Callout } from "./callout";
import { MdxTable } from "./mdx-table";

// MDX 본문에서 쓸 수 있는 컴포넌트. wrapper(글 레이아웃)는 루트 mdx-components.tsx에서 연결한다.
export const mdxComponents: MDXComponents = {
  table: MdxTable,
  Callout,
};
