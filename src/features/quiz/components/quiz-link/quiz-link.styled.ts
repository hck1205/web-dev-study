import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";

export const Root = styled(Link)`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  min-height: 3rem;
  padding: 0 ${space[4]};
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.bgSubtle};
  color: ${color.text};
  text-decoration: none;
  transition:
    border-color ${motion.base},
    background ${motion.base};

  svg {
    color: ${color.accent};
    transition: transform ${motion.base};
  }

  &:hover {
    border-color: ${color.accent};
    background: ${color.accentSoft};
    color: ${color.text};
  }
  &:hover svg {
    transform: translateX(3px);
  }
`;

export const Title = styled.span`
  flex: 1;
  font-weight: ${font.weight.semibold};
`;

export const Meta = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;
