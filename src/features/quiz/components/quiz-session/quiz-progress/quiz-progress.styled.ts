import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { anim, color, font, radius, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const Root = styled.div`
  margin-bottom: ${space[5]};
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space[2]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;

  strong {
    color: ${color.text};
    font-weight: ${font.weight.bold};
  }
`;

export const Bar = styled.div`
  display: flex;
  gap: 3px;
  height: 6px;
`;

type SegmentState = "todo" | "current" | "correct" | "wrong";

const fills: Record<SegmentState, ReturnType<typeof css>> = {
  todo: css`
    &::after {
      transform: scaleX(0);
    }
  `,
  current: css`
    &::after {
      background: ${color.accent};
      transform: scaleX(0.5);
    }
  `,
  correct: css`
    &::after {
      background: ${color.success};
    }
  `,
  wrong: css`
    &::after {
      background: ${color.danger};
      animation: ${anim.shake} 360ms ${anim.easing.out};
    }
  `,
};

export const Segment = styled("span", omitProps("state"))<{ state: SegmentState }>`
  position: relative;
  flex: 1;
  overflow: hidden;
  border-radius: ${radius.full};
  background: ${color.border};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    transform-origin: left;
    transition:
      transform 480ms ${anim.easing.out},
      background 240ms ease;
  }

  ${({ state }) => fills[state]}
`;
