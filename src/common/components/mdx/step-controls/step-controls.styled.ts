import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { anim, color, font, motion, radius, space } from "@/common/design-system";

export const Root = styled.div`
  padding: ${space[3]};
  border-top: 1px solid ${color.border};
  background: ${color.bgSubtle};
`;

export const Track = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: ${space[3]};
`;

const fillUp = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

type SegmentState = "done" | "current" | "todo";

/** 칸 하나. 보이는 막대는 6px이지만 누르기 쉽게 버튼 높이를 넉넉히 둔다. */
export const Segment = styled("button", {
  shouldForwardProp: (prop) => prop !== "state" && prop !== "timing",
})<{ state: SegmentState; timing: number }>`
  position: relative;
  flex: 1;
  height: 1.25rem;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  &::before,
  i {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    height: 6px;
    margin-top: -3px;
    border-radius: ${radius.full};
  }
  &::before {
    background: ${color.border};
    transition: background ${motion.fast};
  }
  &:hover::before {
    background: ${color.borderStrong};
  }
  i {
    background: ${color.accent};
    transform-origin: left;
    transform: scaleX(${({ state }) => (state === "todo" ? 0 : 1)});
    transition: transform 420ms ${anim.easing.out};
    ${({ state }) =>
      state === "current" &&
      css`
        box-shadow: 0 0 10px ${color.accent};
      `}
    ${({ timing }) =>
      timing > 0 &&
      css`
        animation: ${fillUp} ${timing}ms linear both;
      `}
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;
`;

export const Counter = styled.span`
  margin-left: auto;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
`;

export const Button = styled("button", { shouldForwardProp: (prop) => prop !== "primary" })<{ primary?: boolean }>`
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
  transition:
    background ${motion.fast},
    transform ${motion.fast};

  &:hover:not(:disabled) {
    background: ${({ primary }) => (primary ? color.accentHover : color.surfaceHover)};
  }
  &:active:not(:disabled) {
    transform: scale(0.96);
  }
  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;
