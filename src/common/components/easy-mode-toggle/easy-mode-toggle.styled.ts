import styled from "@emotion/styled";
import { color, font, motion, radius, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

/** 글자 두 자짜리 토글. 켜지면 강조색으로 채워진다 */
export const Root = styled("button", omitProps("on"))<{ on: boolean }>`
  display: inline-flex;
  gap: ${space[1]};
  align-items: center;
  flex-shrink: 0;
  height: 2.75rem;
  padding: 0 ${space[3]};
  border: 1px solid ${({ on }) => (on ? color.accent : color.border)};
  border-radius: ${radius.full};
  background: ${({ on }) => (on ? color.accentSoft : "transparent")};
  color: ${({ on }) => (on ? color.accent : color.textMuted)};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  white-space: nowrap;
  cursor: pointer;
  transition:
    background ${motion.fast},
    color ${motion.fast},
    border-color ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    color: ${color.accent};
  }
`;
