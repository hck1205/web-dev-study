import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { anim, color, font, motion, radius, space } from "@/common/design-system";

export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} 0;
  align-items: center;
  padding: ${space[4]};
  font-family: ${font.mono};
  font-size: 0.8125rem;
  line-height: 1.5;
  word-break: break-all;
`;

export const Base = styled.span`
  color: ${color.textSubtle};
`;

export const Sep = styled.span`
  padding: 0 ${space[1]};
  color: ${color.textSubtle};
`;

/** 조각을 눌러볼 수 있다는 걸 알려주는 한 번의 반짝임 */
const hint = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 transparent; }
  50% { box-shadow: 0 0 0 3px ${color.accentSoft}; border-color: ${color.accent}; }
`;

export const Chip = styled("button", {
  shouldForwardProp: (prop) => !["active", "intro", "order"].includes(prop),
})<{ active: boolean; intro: boolean; order: number }>`
  ${({ intro, order }) =>
    intro &&
    css`
      animation: ${hint} 700ms ${anim.easing.out} ${order * 180}ms;
    `}
  ${({ active }) =>
    active &&
    css`
      animation: ${anim.pop} 320ms ${anim.easing.out};
    `}
  padding: ${space[1]} ${space[2]};
  min-height: 2.25rem;
  border: 1px solid ${({ active }) => (active ? color.accent : color.border)};
  border-radius: ${radius.sm};
  background: ${({ active }) => (active ? color.accentSoft : color.bgSubtle)};
  color: ${({ active }) => (active ? color.accent : color.text)};
  font: inherit;
  cursor: pointer;
  text-align: left;
  transition:
    background ${motion.fast},
    border-color ${motion.fast};

  &:hover {
    border-color: ${color.accent};
  }
`;

export const Detail = styled.div`
  animation: ${anim.fadeUp} 300ms ${anim.easing.out};
  padding: ${space[4]};
  border-top: 1px solid ${color.border};

  h4 {
    display: flex;
    flex-wrap: wrap;
    gap: ${space[2]};
    align-items: center;
    margin: 0 0 ${space[2]};
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
    color: ${color.text};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
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

export const Required = styled.span`
  padding: 0.0625rem 0.5rem;
  border-radius: ${radius.full};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
`;

export const Hint = styled.p`
  padding: 0 ${space[4]} ${space[3]};
  margin: 0;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;
