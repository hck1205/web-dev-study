import styled from "@emotion/styled";
import { anim, color, font } from "@/common/design-system";

export const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  font-family: ${font.sans};
`;

export const Box = styled.rect`
  fill: ${color.bgSubtle};
  stroke: ${color.borderStrong};
`;

export const NodeLabel = styled.text`
  fill: ${color.text};
  font-size: 12px;
  font-weight: ${font.weight.bold};
  text-anchor: middle;
`;

export const NodeSub = styled.text`
  fill: ${color.textSubtle};
  font-size: 9.5px;
  text-anchor: middle;
`;

export const Line = styled.path<{ dashed?: boolean }>`
  fill: none;
  stroke: ${color.textSubtle};
  stroke-width: 1.5;
  stroke-dasharray: ${({ dashed }) => (dashed ? "5 4" : "none")};
`;

export const EdgeLabel = styled.text`
  fill: ${color.accent};
  font-size: 10px;
  font-weight: ${font.weight.semibold};
  text-anchor: middle;
  dominant-baseline: central;
  /* 글자 뒤에 배경색 테두리를 둘러 선과 겹쳐도 읽히게 한다 */
  paint-order: stroke;
  stroke: ${color.surface};
  stroke-width: 5px;
  stroke-linejoin: round;
`;

export const Head = styled.path`
  fill: ${color.textSubtle};
`;

/** 화살표를 따라 흘러가는 점. --dx, --dy 로 이동 거리, animation-delay 로 엇갈리게 출발한다. */
export const Flow = styled.circle`
  fill: ${color.accent};
  filter: drop-shadow(0 0 3px ${color.accent});
  opacity: 0;
  animation: ${anim.travel} 2400ms ${anim.easing.inOut} infinite;
`;
