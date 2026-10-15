import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

// Turbopack에서는 플러그인을 함수가 아닌 문자열 이름으로 지정해야 한다.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug", "rehype-highlight"],
  },
});

export default withMDX(nextConfig);
