import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius } from "../../tokens";

const base = css`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: ${radius.sm};
  background: ${color.bgSubtle};
  color: ${color.textMuted};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.medium};
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
`;

export const TagText = styled.span`
  ${base}
`;

// 링크 태그는 카드 전체를 덮는 링크(z-index 0) 위에서 눌릴 수 있도록 relative로 올린다.
export const TagLink = styled(Link)`
  ${base}
  position: relative;
  z-index: 1;
  transition:
    background ${motion.fast},
    color ${motion.fast};

  &:hover {
    background: ${color.accentSoft};
    color: ${color.accent};
  }
`;
