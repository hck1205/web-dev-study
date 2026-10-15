import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

// 블로그 글 목록의 한 줄. 모바일은 세로, tablet 이상은 날짜 칼럼 + 본문.
export const Root = styled.article`
  position: relative;
  display: grid;
  gap: ${space[1]};
  padding: ${space[5]} 0;
  border-bottom: 1px solid ${color.border};

  ${media.tablet} {
    grid-template-columns: 9rem minmax(0, 1fr);
    gap: ${space[6]};
    padding: ${space[6]} 0;
  }
`;

export const Date = styled.time`
  padding-top: 0.25rem;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
`;

export const Body = styled.div`
  min-width: 0;
`;

export const Title = styled.h3`
  font-size: ${font.size.xl};
  font-weight: ${font.weight.bold};
  line-height: ${font.leading.snug};
  letter-spacing: -0.02em;
`;

// 제목 링크가 항목 전체를 클릭 영역으로 덮는다.
export const TitleLink = styled(Link)`
  color: ${color.text};
  text-decoration: none;
  transition: color ${motion.fast};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
  ${Root}:hover & {
    color: ${color.accent};
  }
`;

export const Summary = styled.p`
  display: -webkit-box;
  margin-top: ${space[2]};
  overflow: hidden;
  color: ${color.textMuted};
  font-size: ${font.size.base};
  line-height: ${font.leading.normal};
  word-break: keep-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[3]};
  align-items: center;
  margin-top: ${space[3]};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;
