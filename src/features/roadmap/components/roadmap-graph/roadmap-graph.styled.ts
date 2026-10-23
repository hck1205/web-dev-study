import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, motion, radius, shadow, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";
import type { GraphNodeState } from "./roadmap-graph.type";

/** 열린 길 위로 점선이 흘러 내려간다 */
const flow = keyframes`
  from { stroke-dashoffset: 28; }
  to { stroke-dashoffset: 0; }
`;

export const Root = styled.div`
  position: relative;
  display: grid;
  gap: ${space[10]};
  padding: ${space[2]} 0 ${space[4]};
`;

/** 한 층은 한 줄. 줄이 접히면 같은 층 카드 사이로 선이 지나가니 접지 않고 칸을 나눠 쓴다 */
export const Layer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: ${space[2]};

  ${media.tablet} {
    gap: ${space[3]};
  }
`;

export const Edges = styled.svg`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: visible;
  pointer-events: none;
`;

export const EdgeLine = styled("path", omitProps("met", "dim", "lit", "kind"))<{ met: boolean; dim: boolean; lit: boolean; kind: "requires" | "order" }>`
  fill: none;
  stroke: ${({ met, lit }) => (lit ? color.accent : met ? color.success : color.borderStrong)};
  stroke-width: ${({ lit }) => (lit ? 2.5 : 1.75)};
  stroke-dasharray: 1;
  opacity: ${({ dim }) => (dim ? 0.18 : 1)};
  transition:
    opacity ${motion.base},
    stroke ${motion.base};
  animation: ${anim.draw} 800ms ${anim.easing.inOut} both;
`;

export const EdgeFlow = styled("path", omitProps("dim"))<{ dim: boolean }>`
  fill: none;
  stroke: ${color.success};
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 2 12;
  opacity: ${({ dim }) => (dim ? 0 : 0.9)};
  animation: ${flow} 1.2s linear infinite;
  transition: opacity ${motion.base};
`;

const nodeStates: Record<GraphNodeState, ReturnType<typeof css>> = {
  done: css`
    border-color: ${color.success};
    background: ${color.successSoft};
  `,
  progress: css`
    border-color: ${color.info};
  `,
  next: css`
    border-color: ${color.accent};
    box-shadow: 0 0 0 4px ${color.accentSoft};
  `,
  todo: css`
    opacity: 0.72;
  `,
};

export const NodeLink = styled(Link, omitProps("state", "dim"))<{ state: GraphNodeState; dim: boolean }>`
  position: relative;
  display: grid;
  align-content: start;
  gap: ${space[1]};
  flex: 1 1 0;
  min-width: 0;
  max-width: 11.5rem;
  min-height: 2.75rem;
  padding: ${space[2]};
  border: 1.5px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  color: ${color.text};
  text-decoration: none;
  animation: ${anim.pop} 420ms ${anim.easing.spring} both;
  transition:
    border-color ${motion.base},
    box-shadow ${motion.base},
    opacity ${motion.base},
    transform ${motion.base};

  ${({ state }) => nodeStates[state]}
  ${({ dim }) =>
    dim &&
    css`
      opacity: 0.35;
    `}

  &:hover,
  &:focus-visible {
    opacity: 1;
    box-shadow: ${shadow.md};
    transform: translateY(-2px);
  }

  ${media.tablet} {
    padding: ${space[3]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`;

export const NodeLabel = styled.strong`
  font-size: ${font.size.xs};
  word-break: keep-all;

  ${media.tablet} {
    font-size: ${font.size.sm};
  }
  font-weight: ${font.weight.bold};
  line-height: ${font.leading.snug};
  overflow-wrap: anywhere;
`;

export const NodeSub = styled.span`
  display: none;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};

  ${media.tablet} {
    display: block;
  }
`;

export const NodeBar = styled.span`
  display: block;
  height: 4px;
  overflow: hidden;
  border-radius: ${radius.full};
  background: ${color.border};

  i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: ${color.success};
    transition: width ${motion.base};
  }
`;

export const NextBadge = styled.span`
  position: absolute;
  top: -0.6rem;
  right: ${space[2]};
  padding: 0 ${space[2]};
  border-radius: ${radius.full};
  background: ${color.accent};
  color: ${color.onAccent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  line-height: 1.25rem;
`;

export const Legend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[4]};
  margin: 0 0 ${space[3]};
  padding: 0;
  list-style: none;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};

  li {
    display: inline-flex;
    gap: ${space[1]};
    align-items: center;
  }
  svg {
    flex-shrink: 0;
  }
`;
