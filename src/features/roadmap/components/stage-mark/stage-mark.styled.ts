import styled from "@emotion/styled";
import { color, font, motion, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const Root = styled.span`
  display: inline-flex;
  gap: ${space[2]};
  align-items: center;
  flex-shrink: 0;
`;

/** 네 칸짜리 작은 막대. 단계만큼 칸이 찬다 */
export const Cells = styled.span`
  display: inline-grid;
  grid-template-columns: repeat(4, 6px);
  gap: 2px;
`;

export const Cell = styled("span", omitProps("filled", "stage"))<{ filled: boolean; stage: number }>`
  width: 6px;
  height: 12px;
  border-radius: 2px;
  background: ${({ filled, stage }) => (filled ? (stage >= 3 ? color.success : color.accent) : color.border)};
  transition: background ${motion.base};
`;

export const Label = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.medium};
  white-space: nowrap;
`;
