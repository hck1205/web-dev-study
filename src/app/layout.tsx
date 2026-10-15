import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import { THEME_STORAGE_KEY } from "@/common/atoms/theme/constants";
import { Shell } from "@/common/components/shell";
import { AppProviders } from "@/common/providers/app-providers";

export const metadata: Metadata = {
  title: { default: "web-dev-study", template: "%s · web-dev-study" },
  description: "웹 개발, 네트워크, 인프라, 알고리즘 등 CS 전반을 공부하며 정리하는 공간",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

// 첫 페인트 전에 저장된 테마를 적용해 화면 깜빡임(FOUC)을 막는다.
const themeScript = `try{var t=JSON.parse(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}));if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <AppProviders>
          <Shell>{children}</Shell>
        </AppProviders>
      </body>
    </html>
  );
}
