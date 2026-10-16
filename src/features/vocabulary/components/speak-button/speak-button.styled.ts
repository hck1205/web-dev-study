import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { color, motion, radius } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

const sizes = { sm: "2.25rem", md: "2.75rem" };

export const Button = styled("button", omitProps("size", "speaking"))<{ size: "sm" | "md"; speaking: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-grid;
  flex: none;
  place-items: center;
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  border: 1px solid ${({ speaking }) => (speaking ? color.accent : color.border)};
  border-radius: ${radius.full};
  background: ${({ speaking }) => (speaking ? color.accentSoft : color.surface)};
  color: ${({ speaking }) => (speaking ? color.accent : color.textMuted)};
  cursor: pointer;
  transition:
    border-color ${motion.fast},
    color ${motion.fast},
    background ${motion.fast},
    transform ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    color: ${color.accent};
  }
  &:active {
    transform: scale(0.92);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
`;

export const Wave = styled("path", omitProps("speaking", "delay"))<{ speaking: boolean; delay?: boolean }>`
  ${({ speaking, delay }) =>
    speaking &&
    css`
      animation: ${pulse} 700ms ease-in-out infinite ${delay ? "180ms" : "0ms"};
    `}
`;
