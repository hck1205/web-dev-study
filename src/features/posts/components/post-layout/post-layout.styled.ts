import styled from "@emotion/styled";
import { color, font, layout, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding-top: ${space[8]};

  ${media.tablet} {
    padding-top: ${space[12]};
  }
`;

export const Header = styled.header`
  margin-bottom: ${space[8]};

  ${media.desktop} {
    margin-bottom: ${space[10]};
  }
`;

// 제목·목차(모바일)·본문을 한 칼럼으로 묶어 같은 왼쪽 선에 정렬한다.
export const Column = styled.div`
  min-width: 0;
  max-width: ${layout.narrow};
  margin: 0 auto;
  width: 100%;

  ${media.desktop} {
    margin: 0;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[3]};
  align-items: center;
  margin-bottom: ${space[4]};
`;

export const Crumbs = styled.nav`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};

  a {
    color: ${color.accent};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: ${font.size["3xl"]};
  font-weight: ${font.weight.extrabold};
  line-height: ${font.leading.tight};
  letter-spacing: -0.03em;
  text-wrap: balance;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
  ${media.desktop} {
    font-size: ${font.size["5xl"]};
  }
`;

export const Summary = styled.p`
  margin-top: ${space[4]};
  color: ${color.textMuted};
  font-size: ${font.size.lg};
  line-height: ${font.leading.normal};
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[3]};
  align-items: center;
  margin-top: ${space[5]};
  padding-top: ${space[4]};
  border-top: 1px solid ${color.border};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;

// desktop: 본문 + 우측 목차 레일 / 모바일·태블릿: 한 칼럼
export const Grid = styled.div`
  display: grid;
  align-items: start;

  ${media.desktop} {
    grid-template-columns: minmax(0, ${layout.narrow}) ${layout.toc};
    gap: ${space[12]};
    justify-content: center;
  }
`;

export const Body = styled.div`
  min-width: 0;
`;

export const MobileToc = styled.details`
  margin-bottom: ${space[6]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.bgSubtle};

  summary {
    min-height: 2.75rem;
    padding: 0 ${space[4]};
    display: flex;
    align-items: center;
    font-size: ${font.size.sm};
    font-weight: ${font.weight.semibold};
    cursor: pointer;
  }
  nav {
    padding: 0 ${space[4]} ${space[3]};
  }

  ${media.desktop} {
    display: none;
  }
`;

export const DesktopToc = styled.aside`
  display: none;

  ${media.desktop} {
    display: block;
    position: sticky;
    top: 5rem;
    max-height: calc(100dvh - 7rem);
    overflow-y: auto;
  }
`;

export const TocTitle = styled.p`
  margin-bottom: ${space[3]};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
`;

export const TocList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TocLink = styled.a<{ active: boolean; level: 2 | 3 }>`
  display: block;
  padding: ${space[1]} 0 ${space[1]} ${({ level }) => (level === 3 ? space[4] : space[3])};
  border-left: 2px solid ${({ active }) => (active ? color.accent : color.border)};
  color: ${({ active }) => (active ? color.accent : color.textMuted)};
  font-size: ${font.size.sm};
  font-weight: ${({ active }) => (active ? font.weight.semibold : font.weight.regular)};
  line-height: ${font.leading.snug};
  text-decoration: none;

  &:hover {
    color: ${color.text};
  }
`;
