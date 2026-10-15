import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { color, motion, radius, shadow, space } from "../../tokens";

const base = css`
  display: block;
  padding: ${space[5]};
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  color: inherit;
  text-decoration: none;
  transition:
    border-color ${motion.base},
    box-shadow ${motion.base},
    transform ${motion.base};
`;

export const CardBox = styled.div`
  ${base}
`;

export const CardLink = styled(Link)`
  ${base}

  &:hover {
    border-color: ${color.borderStrong};
    box-shadow: ${shadow.md};
    transform: translateY(-2px);
    color: inherit;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;
