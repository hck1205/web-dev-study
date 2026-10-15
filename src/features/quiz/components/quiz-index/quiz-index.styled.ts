import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, motion, radius, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const Rows = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Row = styled("li", omitProps("depth"))<{ depth: number }>`
  padding-left: calc(${space[4]} * ${({ depth }) => depth});
  animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;

  & + & {
    margin-top: ${space[1]};
  }
`;

export const RowLink = styled(Link)`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  min-height: 2.75rem;
  padding: 0 ${space[3]};
  border-radius: ${radius.md};
  color: ${color.text};
  text-decoration: none;
  transition:
    background ${motion.fast},
    color ${motion.fast};

  svg {
    color: ${color.textSubtle};
    transition: transform ${motion.base};
  }

  &:hover {
    background: ${color.surfaceHover};
    color: ${color.accent};
  }
  &:hover svg {
    color: ${color.accent};
    transform: translateX(3px);
  }
`;

export const Label = styled.span`
  flex: 1;
  min-width: 0;
  font-weight: ${font.weight.semibold};
`;

export const Count = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
`;
