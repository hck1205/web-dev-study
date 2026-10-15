import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { anim, color, font, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  font-family: ${font.sans};
`;

export const Grid = styled.path`
  fill: none;
  stroke: ${color.border};
  stroke-width: 0.75;
  stroke-dasharray: 2 4;
`;

export const Edge = styled.line`
  stroke: ${color.borderStrong};
  stroke-width: 1;
  animation: ${anim.fadeUp} 400ms ${anim.easing.out};
`;

export const Dot = styled("circle", omitProps("dim", "focus", "intro", "order"))<{ dim: boolean; focus: boolean; intro: boolean; order: number }>`
  stroke: ${color.surface};
  stroke-width: 2;
  opacity: ${({ dim }) => (dim ? 0.3 : 1)};
  transform-box: fill-box;
  transform-origin: center;
  transition:
    opacity 300ms ease,
    r 300ms ease,
    filter 300ms ease;
  ${({ focus }) =>
    focus &&
    css`
      filter: drop-shadow(0 0 5px ${color.accent});
    `}
  ${({ intro, order }) =>
    intro &&
    css`
      animation: ${anim.pop} 520ms ${anim.easing.spring} ${order * 60}ms backwards;
    `}
`;

export const Label = styled("text", omitProps("dim", "focus", "intro", "order"))<{ dim: boolean; focus: boolean }>`
  fill: ${color.text};
  font-size: 10.5px;
  font-weight: ${({ focus }) => (focus ? font.weight.bold : font.weight.medium)};
  opacity: ${({ dim }) => (dim ? 0.35 : 1)};
  paint-order: stroke;
  stroke: ${color.surface};
  stroke-width: 3px;
  stroke-linejoin: round;
  transition: opacity 300ms ease;
`;

export const Query = styled.path`
  fill: ${color.text};
  stroke: ${color.surface};
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  filter: drop-shadow(0 2px 4px rgb(0 0 0 / 0.25));
  animation: ${anim.dropIn} 520ms ${anim.easing.spring};
`;

export const Ring = styled.circle`
  fill: none;
  stroke: ${color.text};
  stroke-width: 1.5;
  transform-box: fill-box;
  transform-origin: center;
  animation: ${anim.ripple} 1200ms ${anim.easing.out} forwards;
`;

/** 질문에서 이웃까지, 경로의 한 칸 등 그려지며 나타나는 선 */
export const Link = styled.path`
  fill: none;
  stroke: ${color.text};
  stroke-width: 1.5;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: ${anim.draw} 500ms ${anim.easing.out} forwards;
`;

export const Range = styled.circle`
  fill: ${color.accentSoft};
  fill-opacity: 0.5;
  stroke: ${color.accent};
  stroke-width: 1.5;
  stroke-dasharray: 4 3;
  transform-box: fill-box;
  transform-origin: center;
  animation: ${anim.pop} 600ms ${anim.easing.out};
`;

export const Hop = styled.circle`
  fill: ${color.accent};
  stroke: ${color.surface};
  stroke-width: 2;
  opacity: 0;
  filter: drop-shadow(0 0 4px ${color.accent});
  animation: ${anim.travel} 500ms ${anim.easing.inOut} forwards;
`;

export const Arrow = styled.path`
  fill: none;
  stroke: ${color.textMuted};
  stroke-width: 1.5;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: ${anim.draw} 600ms ${anim.easing.out} forwards;
`;

export const Head = styled.path`
  fill: ${color.textMuted};
`;

export const Legend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[4]};
  margin: 0;
  padding: ${space[3]} ${space[4]};
  border-top: 1px solid ${color.border};
  list-style: none;
  color: ${color.textMuted};
  font-size: ${font.size.sm};

  li {
    display: inline-flex;
    gap: ${space[2]};
    align-items: center;
  }
`;

export const Swatch = styled("span", omitProps("tone"))<{ tone: string }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: ${({ tone }) => tone};
`;

export const Say = styled.p`
  margin: 0;
  padding: ${space[4]};
  border-top: 1px solid ${color.border};
  color: ${color.text};
  line-height: ${font.leading.relaxed};
  word-break: keep-all;
  animation: ${anim.fadeUp} 300ms ${anim.easing.out};
`;
