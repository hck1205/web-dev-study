"use client";

import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { Frame, Main } from "./shell.styled";
import type { ShellProps } from "./shell.type";

export function Shell({ navItems, headerActions, children }: ShellProps) {
  return (
    <Frame>
      <SiteHeader items={navItems} actions={headerActions} />
      <Main>{children}</Main>
      <SiteFooter />
    </Frame>
  );
}
