import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import { THEME_STORAGE_KEY } from "@/common/atoms/theme/constants";
import { Shell } from "@/common/components/shell";
import { AppProviders } from "@/common/providers/app-providers";
import { TOPIC_NAV } from "@/features/topics/registry";

export const metadata: Metadata = {
  title: { default: "web-dev-study", template: "%s · web-dev-study" },
  description: "개발하며 공부한 것들을 기록하는 블로그",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

// 상단 메뉴: 토픽 트리(ABC 순) + 고정 메뉴
const NAV_ITEMS = [...TOPIC_NAV, { id: "labs", label: "Labs", href: "/labs/stack" }];

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
          <Shell navItems={NAV_ITEMS}>{children}</Shell>
        </AppProviders>
      </body>
    </html>
  );
}
