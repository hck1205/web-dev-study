import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { anim, color, font, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";
import type { MorphTone } from "./geometry-morph.type";

export const Stage = styled.div`
  padding: ${space[4]};
  background: ${color.bgSubtle};
`;

export const Svg = styled.svg`
  display: block;
  width: 100%;
  max-width: 26rem;
  height: auto;
  margin: 0 auto;
  overflow: visible;
`;

const toneColor: Record<MorphTone, string> = {
  series1: color.series1,
  series2: color.series2,
  series3: color.series3,
  accent: color.accent,
  muted: color.textSubtle,
  outline: color.borderStrong,
};

const shapeTone = (tone: MorphTone) =>
  tone === "outline"
    ? css`
        fill: none;
        stroke: ${toneColor.outline};
        stroke-dasharray: 6 5;
      `
    : css`
        fill: ${toneColor[tone]};
        fill-opacity: ${tone === "muted" ? 0.16 : 0.28};
        stroke: ${toneColor[tone]};
      `;

export const Shape = styled("polygon", omitProps("tone", "visible", "focused"))<{
  tone: MorphTone;
  visible: boolean;
  focused: boolean;
}>`
  stroke-width: ${({ focused }) => (focused ? 3.5 : 1.75)};
  stroke-linejoin: round;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition:
    opacity 500ms ${anim.easing.out},
    stroke-width 300ms ease,
    filter 300ms ease;
  ${({ tone }) => shapeTone(tone)}
  ${({ focused, tone }) =>
    focused &&
    css`
      filter: drop-shadow(0 0 6px ${toneColor[tone]});
    `}
`;

const labelSize = { sm: "13px", md: "17px", lg: "24px" };

export const Label = styled("text", omitProps("tone", "size"))<{ tone: MorphTone | "text"; size: "sm" | "md" | "lg" }>`
  fill: ${({ tone }) => (tone === "text" ? color.text : toneColor[tone])};
  font-family: ${font.sans};
  font-size: ${({ size }) => labelSize[size]};
  font-weight: ${font.weight.bold};
  text-anchor: middle;
  dominant-baseline: middle;
  paint-order: stroke;
  stroke: ${color.bgSubtle};
  stroke-width: 4px;
  stroke-linejoin: round;
  animation: ${anim.fadeUp} 420ms ${anim.easing.out} both;
`;
