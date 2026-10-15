import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@/common/components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...mdxComponents, ...components };
}
