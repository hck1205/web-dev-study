"use client";

import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { Frame, Main } from "./shell.styled";
import type { ShellProps } from "./shell.type";

export function Shell({ navItems, children }: ShellProps) {
  return (
    <Frame>
      <SiteHeader items={navItems} />
      <Main>{children}</Main>
      <SiteFooter />
    </Frame>
  );
}
