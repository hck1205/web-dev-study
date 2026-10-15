"use client";

import Link from "next/link";
import { useShell } from "./shell";
import { Brand, Header, Main } from "./shell.styled";
import type { ShellProps } from "./shell.type";

export function Shell({ children }: ShellProps) {
  const { navItems } = useShell();

  return (
    <>
      <Header>
        <Brand href="/">web-dev-study</Brand>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </Header>
      <Main>{children}</Main>
    </>
  );
}
