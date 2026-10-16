import styled from "@emotion/styled";
import { omitProps } from "@/common/styles/omit-props";
import { color, font, motion, radius, space } from "../../tokens";

export const Root = styled("button", omitProps("selected"))<{ selected: boolean }>`
  display: inline-flex;
  gap: ${space[2]};
  align-items: center;
  min-height: 2.25rem;
  padding: 0 ${space[3]};
  border: 1px solid ${({ selected }) => (selected ? color.accent : color.border)};
  border-radius: ${radius.full};
  background: ${({ selected }) => (selected ? color.accentSoft : color.surface)};
  color: ${({ selected }) => (selected ? color.accent : color.textMuted)};
  font-size: ${font.size.sm};
  font-weight: ${({ selected }) => (selected ? font.weight.semibold : font.weight.medium)};
  white-space: nowrap;
  cursor: pointer;
  transition:
    border-color ${motion.fast},
    background ${motion.fast},
    color ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    color: ${color.accent};
  }
`;

export const Count = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-variant-numeric: tabular-nums;
`;
