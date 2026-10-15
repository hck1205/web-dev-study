import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, layout, motion, radius, zIndex } from "@/common/design-system";
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

export const BrandMark = styled.span`
  display: inline-grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: ${radius.md};
  background: ${color.accent};
  color: ${color.onAccent};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.extrabold};
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

export const NavLink = styled(Link, { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
  padding: 0 0.875rem;
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

export const MobilePanel = styled.nav`
  display: grid;
  gap: 0.25rem;
  padding: 0.5rem 0 1rem;
  border-top: 1px solid ${color.border};

  a {
    min-height: 3rem;
    font-size: ${font.size.base};
  }
`;
