import styled from "@emotion/styled";
import { color, font, motion, radius, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const Root = styled.div`
  display: grid;
  gap: ${space[1]};
`;

export const Track = styled.div`
  display: flex;
  height: 8px;
  overflow: hidden;
  border-radius: ${radius.full};
  background: ${color.border};
`;

const fills: Record<number, string> = { 1: color.info, 2: color.accent, 3: color.success, 4: color.success };

/** 단계별로 색이 다른 칸. 4단계는 3단계와 같은 색에 더 진하게 */
export const Fill = styled("div", omitProps("stage", "ratio"))<{ stage: number; ratio: number }>`
  width: ${({ ratio }) => ratio * 100}%;
  background: ${({ stage }) => fills[stage]};
  opacity: ${({ stage }) => (stage === 4 ? 1 : stage === 3 ? 0.75 : 0.9)};
  transition: width ${motion.base};
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-variant-numeric: tabular-nums;
`;
