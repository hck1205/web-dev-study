import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import type { StepState } from "./sequence-diagram.type";

export const Frame = styled.figure`
  margin: ${space[6]} 0;
  overflow: hidden;
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};

  /* 모바일: 본문 좌우 여백까지 펼쳐 그림을 최대한 크게 보여준다 */
  margin-left: calc(-1 * ${space[4]});
  margin-right: calc(-1 * ${space[4]});
  border-left: 0;
  border-right: 0;
  border-radius: 0;

  ${media.tablet} {
    margin-left: 0;
    margin-right: 0;
    border-left: 1px solid ${color.border};
    border-right: 1px solid ${color.border};
    border-radius: ${radius.lg};
  }
`;

export const Caption = styled.figcaption`
  padding: ${space[3]} ${space[4]};
  border-bottom: 1px solid ${color.border};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  padding: ${space[2]} 0;
  font-family: ${font.sans};
`;

export const Lifeline = styled.line`
  stroke: ${color.border};
  stroke-dasharray: 3 4;
`;

export const ActorBox = styled.rect`
  fill: ${color.bgSubtle};
  stroke: ${color.borderStrong};
`;

export const ActorText = styled.text`
  fill: ${color.text};
  font-size: 11px;
  font-weight: ${font.weight.bold};
  text-anchor: middle;
  dominant-baseline: central;
`;

const strokeBy = (state: StepState) =>
  state === "active" ? color.accent : state === "past" ? color.textSubtle : color.borderStrong;

export const Arrow = styled.path<{ state: StepState }>`
  fill: none;
  stroke: ${({ state }) => strokeBy(state)};
  stroke-width: ${({ state }) => (state === "active" ? 2.5 : 1.5)};
  opacity: ${({ state }) => (state === "ghost" ? 0.35 : 1)};
  transition:
    stroke 200ms ease,
    opacity 200ms ease;
`;

export const ArrowLabel = styled.text<{ state: StepState }>`
  fill: ${({ state }) => (state === "active" ? color.accent : color.textMuted)};
  font-size: 10px;
  font-weight: ${({ state }) => (state === "active" ? font.weight.bold : font.weight.medium)};
  opacity: ${({ state }) => (state === "ghost" ? 0.45 : 1)};
`;

export const Badge = styled.circle<{ state: StepState }>`
  fill: ${({ state }) => (state === "active" ? color.accent : color.surface)};
  stroke: ${({ state }) => strokeBy(state)};
  opacity: ${({ state }) => (state === "ghost" ? 0.5 : 1)};
`;

export const BadgeText = styled.text<{ state: StepState }>`
  fill: ${({ state }) => (state === "active" ? color.onAccent : color.textMuted)};
  font-size: 9px;
  font-weight: ${font.weight.bold};
  text-anchor: middle;
  dominant-baseline: central;
`;

export const MarkerPath = styled.path<{ state: StepState }>`
  fill: ${({ state }) => strokeBy(state)};
`;

export const Detail = styled.div`
  padding: ${space[4]};
  border-top: 1px solid ${color.border};

  h4 {
    margin: 0 0 ${space[2]};
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
    color: ${color.text};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
    font-size: ${font.size.base};
    line-height: ${font.leading.relaxed};
    word-break: keep-all;
  }
  pre {
    margin: ${space[3]} 0 0;
    padding: ${space[3]};
    overflow-x: auto;
    border: 1px solid ${color.codeBorder};
    border-radius: ${radius.md};
    background: ${color.codeBg};
    font-family: ${font.mono};
    font-size: 0.75rem;
    line-height: 1.6;
    white-space: pre;
  }
`;
