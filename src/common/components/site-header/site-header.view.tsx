"use client";

import { ChevronDownIcon, CloseIcon, Container, IconButton, MenuIcon } from "@/common/design-system";
import { NavTree } from "../nav-tree";
import { ThemeToggle } from "../theme-toggle";
import { useSiteHeader } from "./site-header";
import {
  Bar,
  Brand,
  Dropdown,
  DropdownPanel,
  DesktopNav,
  MobileOnly,
  MobilePanel,
  NavButton,
  NavLink,
  PanelAll,
  Root,
} from "./site-header.styled";
import type { SiteHeaderProps } from "./site-header.type";

export function SiteHeader({ items, actions }: SiteHeaderProps) {
  const { dropdown, menuOpen, toggleMenu, closeMenu, entries } = useSiteHeader(items);

  return (
    <Root>
      <Container>
        <Bar>
          <Brand href="/">
            web-dev-study
          </Brand>

          <DesktopNav aria-label="주요 메뉴" ref={dropdown.rootRef}>
            {entries.map(({ item, active }) =>
              item.children?.length ? (
                <Dropdown key={item.id}>
                  <NavButton
                    type="button"
                    active={active}
                    open={dropdown.openId === item.id}
                    aria-expanded={dropdown.openId === item.id}
                    aria-haspopup="true"
                    onClick={() => dropdown.toggle(item.id)}
                  >
                    {item.label}
                    <ChevronDownIcon size={16} />
                  </NavButton>
                  {dropdown.openId === item.id && (
                    <DropdownPanel>
                      {item.href && <PanelAll href={item.href}>{item.label} 전체 보기</PanelAll>}
                      <NavTree nodes={item.children} onNavigate={dropdown.close} />
                    </DropdownPanel>
                  )}
                </Dropdown>
              ) : (
                <NavLink key={item.id} href={item.href ?? "#"} active={active}>
                  {item.label}
                </NavLink>
              ),
            )}
          </DesktopNav>

          {actions}
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
              <NavTree nodes={items} onNavigate={closeMenu} />
            </MobilePanel>
          </MobileOnly>
        )}
      </Container>
    </Root>
  );
}
