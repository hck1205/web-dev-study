import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius } from "@/common/design-system";

export const Label = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-flex;
  gap: 0.375rem;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.625rem;
  border: 1px solid ${color.accent};
  border-radius: ${radius.sm};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  letter-spacing: 0.02em;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background ${motion.fast},
    color ${motion.fast};

  &::before {
    content: "";
    width: 0.375rem;
    height: 0.375rem;
    border-radius: ${radius.full};
    background: currentColor;
  }

  &:hover {
    background: ${color.accent};
    color: ${color.onAccent};
  }
`;
