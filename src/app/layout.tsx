import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Shell } from "@/components/Shell";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: { default: "web-dev-study", template: "%s · web-dev-study" },
  description: "웹 개발, 네트워크, 인프라, 알고리즘 등 CS 전반을 공부하는 공간",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
