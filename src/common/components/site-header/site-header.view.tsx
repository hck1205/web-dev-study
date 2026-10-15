"use client";

import { CloseIcon, Container, IconButton, MenuIcon } from "@/common/design-system";
import { ThemeToggle } from "../theme-toggle";
import { useSiteHeader } from "./site-header";
import { Bar, Brand, BrandMark, DesktopNav, MobileOnly, MobilePanel, NavLink, Root } from "./site-header.styled";

export function SiteHeader() {
  const { navItems, menuOpen, toggleMenu } = useSiteHeader();

  return (
    <Root>
      <Container>
        <Bar>
          <Brand href="/">
            <BrandMark>W</BrandMark>
            web-dev-study
          </Brand>

          <DesktopNav aria-label="주요 메뉴">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.href} active={item.active}>
                {item.label}
              </NavLink>
            ))}
          </DesktopNav>

          <ThemeToggle />
          <MobileOnly>
            <IconButton label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} onClick={toggleMenu}>
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </MobileOnly>
        </Bar>

        {menuOpen && (
          <MobileOnly>
            <MobilePanel aria-label="모바일 메뉴">
              {navItems.map((item) => (
                <NavLink key={item.label} href={item.href} active={item.active}>
                  {item.label}
                </NavLink>
              ))}
            </MobilePanel>
          </MobileOnly>
        )}
      </Container>
    </Root>
  );
}
