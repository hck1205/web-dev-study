"use client";

import { useShell } from "./shell";
import { Brand, Header, Main, Nav, NavLink } from "./shell.styled";
import type { ShellProps } from "./shell.type";

export function Shell({ children }: ShellProps) {
  const { navItems } = useShell();

  return (
    <>
      <Header>
        <Brand href="/">web-dev-study</Brand>
        <Nav aria-label="주요 메뉴">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} active={item.active}>
              {item.label}
            </NavLink>
          ))}
        </Nav>
      </Header>
      <Main>{children}</Main>
    </>
  );
}
