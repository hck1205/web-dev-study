import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
// atoms/theme의 index.ts는 클라이언트 전용(jotai)이라, 서버인 layout에서는 상수 파일만 직접 가져온다.
import { THEME_STORAGE_KEY } from "@/common/atoms/theme/constants";
import { SITE } from "@/common/config/site";
import { Shell } from "@/common/components/shell";
import { AppProviders } from "@/common/providers/app-providers";
import { SearchLauncher } from "@/features/search/components/search-launcher";
import { TOPIC_NAV } from "@/features/topics/registry";

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

// 상단 메뉴: 토픽 트리(ABC 순) + 고정 메뉴
const NAV_ITEMS = [...TOPIC_NAV, { id: "tags", label: "Tags", href: "/tags" }, { id: "labs", label: "Labs", href: "/labs/stack" }];

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
          <Shell navItems={NAV_ITEMS} headerActions={<SearchLauncher />}>{children}</Shell>
        </AppProviders>
      </body>
    </html>
  );
}
