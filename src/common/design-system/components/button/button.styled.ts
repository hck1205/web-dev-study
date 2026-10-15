import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius } from "../../tokens";
import type { ButtonSize, ButtonVariant } from "./button.type";

interface StyleProps {
  variant: ButtonVariant;
  size: ButtonSize;
}

const variants = {
  primary: css`
    background: ${color.accent};
    color: ${color.onAccent};
    border-color: ${color.accent};
    &:hover {
      background: ${color.accentHover};
      border-color: ${color.accentHover};
      color: ${color.onAccent};
    }
  `,
  secondary: css`
    background: ${color.surface};
    color: ${color.text};
    border-color: ${color.borderStrong};
    &:hover {
      background: ${color.surfaceHover};
      color: ${color.text};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${color.textMuted};
    border-color: transparent;
    &:hover {
      background: ${color.surfaceHover};
      color: ${color.text};
    }
  `,
};

const sizes = {
  md: css`
    min-height: 2.75rem;
    padding: 0 1.125rem;
    font-size: ${font.size.sm};
  `,
  lg: css`
    min-height: 3rem;
    padding: 0 1.5rem;
    font-size: ${font.size.base};
  `,
};

const base = ({ variant, size }: StyleProps) => css`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${radius.md};
  font-weight: ${font.weight.semibold};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background ${motion.fast},
    border-color ${motion.fast},
    color ${motion.fast};
  ${sizes[size]}
  ${variants[variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const forward = { shouldForwardProp: (prop: string) => prop !== "variant" && prop !== "size" };

export const ButtonRoot = styled("button", forward)<StyleProps>(base);
export const ButtonLinkRoot = styled(Link, forward)<StyleProps>(base);
