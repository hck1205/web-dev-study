import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Frame = styled.figure`
  margin: ${space[6]} 0;
  overflow: hidden;
  border: 1px solid ${color.border};
  background: ${color.surface};
  margin-left: calc(-1 * ${space[4]});
  margin-right: calc(-1 * ${space[4]});
  border-left: 0;
  border-right: 0;

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
  border-top: 1px solid ${color.border};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  word-break: keep-all;
`;

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
