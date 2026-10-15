import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { anim, color, font, radius, space } from "@/common/design-system";
import type { StepState } from "./sequence-diagram.type";

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

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Arrow = styled.path<{ state: StepState }>`
  fill: none;
  /* 현재 단계 화살표(화살촉 포함)는 선이 다 그려진 뒤에 나타난다 */
  animation: ${({ state }) => (state === "active" ? appear : "none")} 150ms 450ms backwards;
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

/* ---- 현재 단계 강조 애니메이션 ---- */

/** 현재 단계 선이 출발점에서 도착점으로 그려진다 */
export const DrawPath = styled.path`
  fill: none;
  stroke: ${color.accent};
  stroke-width: 2.5;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: ${anim.draw} 500ms ${anim.easing.out} forwards;
`;

/** 메시지(점)가 화살표를 따라 날아간다 */
export const Packet = styled.circle`
  fill: ${color.accent};
  stroke: ${color.surface};
  stroke-width: 2;
  animation: ${anim.travel} 650ms ${anim.easing.inOut} forwards;
`;

/** 단계 번호에서 물결이 퍼진다 */
export const Ripple = styled.circle`
  fill: none;
  stroke: ${color.accent};
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  animation: ${anim.ripple} 900ms ${anim.easing.out} forwards;
`;

export const DetailBody = styled.div`
  animation: ${anim.fadeUp} 300ms ${anim.easing.out};
`;
