import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, layout, motion, radius, shadow, zIndex } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Root = styled.header`
  position: sticky;
  top: 0;
  z-index: ${zIndex.header};
  border-bottom: 1px solid ${color.border};
  background: color-mix(in srgb, ${color.bg} 88%, transparent);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
`;

export const Bar = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  height: ${layout.header};
`;

export const Brand = styled(Link)`
  display: inline-flex;
  gap: 0.625rem;
  align-items: center;
  margin-right: auto;
  min-height: 2.75rem;
  color: ${color.text};
  font-weight: ${font.weight.extrabold};
  font-size: ${font.size.lg};
  letter-spacing: -0.03em;
  text-decoration: none;

  &:hover {
    color: ${color.text};
  }
`;

// 모바일: 햄버거 패널 / tablet 이상: 가로 메뉴
export const DesktopNav = styled.nav`
  display: none;

  ${media.tablet} {
    display: flex;
    gap: 0.25rem;
    margin-right: 0.5rem;
  }
`;

export const MobileOnly = styled.div`
  display: contents;

  ${media.tablet} {
    display: none;
  }
`;

const navItemStyle = `
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  min-height: 2.5rem;
  padding: 0 0.875rem;
  border: 0;
  cursor: pointer;
  font-family: inherit;
`;

export const NavLink = styled(Link, { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  ${navItemStyle}
  border-radius: ${radius.md};
  background: ${({ active }) => (active ? color.accentSoft : "transparent")};
  color: ${({ active }) => (active ? color.accent : color.textMuted)};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  text-decoration: none;
  transition:
    background ${motion.fast},
    color ${motion.fast};

  &:hover {
    background: ${({ active }) => (active ? color.accentSoft : color.surfaceHover)};
    color: ${({ active }) => (active ? color.accent : color.text)};
  }
`;

export const NavButton = styled("button", { shouldForwardProp: (prop) => prop !== "active" && prop !== "open" })<{
  active: boolean;
  open: boolean;
}>`
  ${navItemStyle}
  border-radius: ${radius.md};
  background: ${({ active, open }) => (active || open ? color.accentSoft : "transparent")};
  color: ${({ active, open }) => (active || open ? color.accent : color.textMuted)};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};

  &:hover {
    background: ${({ active, open }) => (active || open ? color.accentSoft : color.surfaceHover)};
    color: ${({ active, open }) => (active || open ? color.accent : color.text)};
  }
  svg {
    transition: transform ${motion.fast};
    transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  z-index: ${zIndex.overlay};
  min-width: 17rem;
  max-height: min(32rem, calc(100dvh - 6rem));
  padding: 0.5rem;
  overflow-y: auto;
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  box-shadow: ${shadow.lg};
`;

export const PanelAll = styled(Link)`
  display: flex;
  align-items: center;
  min-height: 2.5rem;
  margin-bottom: 0.25rem;
  padding: 0 0.75rem;
  border-bottom: 1px solid ${color.border};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  letter-spacing: 0.04em;
  text-decoration: none;

  &:hover {
    color: ${color.accent};
  }
`;

export const MobilePanel = styled.nav`
  max-height: calc(100dvh - ${layout.header} - 1rem);
  padding: 0.5rem 0 1rem;
  overflow-y: auto;
  border-top: 1px solid ${color.border};
`;
