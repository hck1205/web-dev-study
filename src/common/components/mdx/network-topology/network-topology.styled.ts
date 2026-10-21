import styled from "@emotion/styled";
import { anim, color, font, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";
import type { ZoneTone } from "./network-topology.type";

export const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  padding: ${space[2]} 0;
  font-family: ${font.sans};
  overflow: visible;
`;

const ZONE_STROKE: Record<ZoneTone, string> = {
  neutral: color.borderStrong,
  public: color.series3,
  private: color.series1,
  edge: color.series2,
};

const withZone = omitProps("tone", "active");

export const ZoneRect = styled("rect", withZone)<{ tone: ZoneTone; active: boolean }>`
  fill: ${({ tone }) => ZONE_STROKE[tone]};
  fill-opacity: ${({ active }) => (active ? 0.12 : 0.05)};
  stroke: ${({ tone }) => ZONE_STROKE[tone]};
  stroke-width: ${({ active }) => (active ? 2 : 1.25)};
  stroke-dasharray: 6 4;
  transition:
    fill-opacity 300ms ease,
    stroke-width 300ms ease;
`;

export const ZoneLabel = styled("text", withZone)<{ tone: ZoneTone; active: boolean }>`
  fill: ${({ tone }) => (tone === "neutral" ? color.textMuted : ZONE_STROKE[tone])};
  font-size: 10px;
  font-weight: ${font.weight.bold};
`;

const withState = omitProps("active", "dim");

export const NodeGroup = styled("g", withState)<{ active: boolean; dim: boolean }>`
  opacity: ${({ dim }) => (dim ? 0.42 : 1)};
  filter: ${({ active }) => (active ? `drop-shadow(0 0 5px ${color.accent})` : "none")};
  transition:
    opacity 300ms ease,
    filter 300ms ease;
`;

export const NodeBox = styled("rect", withState)<{ active: boolean; dim: boolean }>`
  fill: ${({ active }) => (active ? color.accentSoft : color.surface)};
  stroke: ${({ active }) => (active ? color.accent : color.borderStrong)};
  stroke-width: ${({ active }) => (active ? 1.75 : 1)};
  transition:
    fill 300ms ease,
    stroke 300ms ease;
`;

export const Icon = styled("path", withState)<{ active: boolean; dim: boolean }>`
  fill: none;
  stroke: ${({ active }) => (active ? color.accent : color.textMuted)};
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const NodeLabel = styled.text`
  fill: ${color.text};
  font-size: 11px;
  font-weight: ${font.weight.bold};
  dominant-baseline: central;
`;

export const NodeSub = styled.text`
  fill: ${color.textSubtle};
  font-family: ${font.mono};
  font-size: 8.5px;
  dominant-baseline: central;
`;

export const Line = styled("path", omitProps("dashed", "dim"))<{ dashed?: boolean; dim: boolean }>`
  fill: none;
  stroke: ${color.textSubtle};
  stroke-width: 1.4;
  stroke-dasharray: ${({ dashed }) => (dashed ? "5 4" : "none")};
  opacity: ${({ dim }) => (dim ? 0.35 : 0.9)};
  transition: opacity 300ms ease;
`;

export const LinkLabel = styled.text`
  fill: ${color.textMuted};
  font-size: 9.5px;
  font-weight: ${font.weight.semibold};
  text-anchor: middle;
  dominant-baseline: central;
  paint-order: stroke;
  stroke: ${color.surface};
  stroke-width: 4px;
  stroke-linejoin: round;
`;

/** 이번 단계 경로가 홉마다 차례로 그려진다 */
export const HopPath = styled("path", omitProps("blocked"))<{ blocked: boolean }>`
  fill: none;
  stroke: ${({ blocked }) => (blocked ? color.danger : color.accent)};
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: ${anim.draw} var(--hop-ms) ${anim.easing.out} var(--hop-delay) forwards;
`;

export const Packet = styled("circle", omitProps("blocked"))<{ blocked: boolean }>`
  fill: ${({ blocked }) => (blocked ? color.danger : color.accent)};
  stroke: ${color.surface};
  stroke-width: 2;
  filter: drop-shadow(0 0 4px ${({ blocked }) => (blocked ? color.danger : color.accent)});
`;

export const PacketTag = styled.text`
  fill: ${color.onAccent};
  font-family: ${font.mono};
  font-size: 9px;
  font-weight: ${font.weight.bold};
  text-anchor: middle;
  dominant-baseline: central;
`;

export const PacketTagBox = styled("rect", omitProps("blocked"))<{ blocked: boolean }>`
  fill: ${({ blocked }) => (blocked ? color.danger : color.accent)};
`;

export const Ripple = styled.circle`
  fill: none;
  stroke: ${color.accent};
  stroke-width: 2;
  transform-box: fill-box;
  transform-origin: center;
  animation: ${anim.ripple} 900ms ${anim.easing.out} both;
`;

/** 막힌 자리에 X가 튀어나오며 흔들린다 */
export const Blocked = styled.g`
  transform-box: fill-box;
  transform-origin: center;
  animation:
    ${anim.pop} 350ms ${anim.easing.spring} both,
    ${anim.shake} 400ms ${anim.easing.out} 350ms;

  circle {
    fill: ${color.danger};
    stroke: ${color.surface};
    stroke-width: 2;
  }
  path {
    stroke: ${color.onAccent};
    stroke-width: 2.2;
    stroke-linecap: round;
  }
`;

/** 단계 없는 그림: 연결선을 따라 점이 계속 흐른다 */
export const Flow = styled.circle`
  fill: ${color.accent};
  filter: drop-shadow(0 0 3px ${color.accent});
  opacity: 0;
  animation: ${anim.travel} 2400ms ${anim.easing.inOut} infinite;
`;
