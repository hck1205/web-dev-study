import path from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { POSTS } from "./src/features/posts/registry/posts";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

// 백링크 플러그인에 넘길 글 목록 (직렬화 가능한 값만)
const backlinkPosts = POSTS.map(({ slug, title, keywords }) => ({ slug, title, keywords: keywords ?? [] }));

// Turbopack에서는 플러그인을 함수가 아닌 문자열(패키지 이름 또는 파일 경로)로 지정해야 한다.
// 상대 경로는 @next/mdx 패키지 기준으로 해석되므로 절대 경로로 넘긴다.
const remarkBacklinks = path.join(process.cwd(), "src/common/mdx-plugins/remark-backlinks/index.mjs");

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm", [remarkBacklinks, { posts: backlinkPosts }]],
    rehypePlugins: ["rehype-slug", "rehype-highlight"],
  },
});

export default withMDX(nextConfig);
