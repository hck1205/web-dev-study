import styled from "@emotion/styled";
import { color, font, motion, radius, space } from "@/common/design-system";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;
  padding: ${space[3]};
  border-top: 1px solid ${color.border};
  background: ${color.bgSubtle};
`;

export const Counter = styled.span`
  margin-left: auto;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
`;

export const Button = styled.button<{ primary?: boolean }>`
  min-width: 2.75rem;
  min-height: 2.75rem;
  padding: 0 ${space[4]};
  border: 1px solid ${({ primary }) => (primary ? color.accent : color.borderStrong)};
  border-radius: ${radius.md};
  background: ${({ primary }) => (primary ? color.accent : color.surface)};
  color: ${({ primary }) => (primary ? color.onAccent : color.text)};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  cursor: pointer;
  transition: background ${motion.fast};

  &:hover:not(:disabled) {
    background: ${({ primary }) => (primary ? color.accentHover : color.surfaceHover)};
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
