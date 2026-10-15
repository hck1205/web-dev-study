import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
