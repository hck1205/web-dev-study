import styled from "@emotion/styled";
import Link from "next/link";
import { media } from "@/common/styles/breakpoints";

// mobile-first: 기본값은 모바일, tablet/desktop에서 확장한다.
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0 max(1rem, env(safe-area-inset-right)) 0 max(1rem, env(safe-area-inset-left));
  border-bottom: 1px solid rgb(128 128 128 / 0.3);
  background: var(--bg, #fff);

  ${media.tablet} {
    gap: 1.25rem;
    padding: 0 1.5rem;
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  flex: none;
  align-items: center;
  min-height: 48px;
  font-weight: 700;
  text-decoration: none;
`;

// 메뉴가 많아져도 모바일에서 가로 스크롤로 접근할 수 있게 한다.
export const Nav = styled.nav`
  display: flex;
  flex: 1;
  gap: 0.25rem;
  overflow-x: auto;
  scrollbar-width: none;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavLink = styled(Link, { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 0.6rem;
  font-weight: ${({ active }) => (active ? 700 : 400)};
  text-decoration: none;
  border-bottom: 2px solid ${({ active }) => (active ? "currentColor" : "transparent")};
`;

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem max(1rem, env(safe-area-inset-right)) 4rem max(1rem, env(safe-area-inset-left));

  ${media.tablet} {
    max-width: 720px;
    padding: 2rem 1.5rem 5rem;
  }

  ${media.desktop} {
    max-width: 860px;
    padding: 2.5rem 2rem 6rem;
  }
`;
