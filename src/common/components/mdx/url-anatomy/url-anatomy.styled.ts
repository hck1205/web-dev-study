import styled from "@emotion/styled";
import { color, font, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Frame = styled.figure`
  margin: ${space[6]} 0;
  overflow: hidden;
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  margin-left: calc(-1 * ${space[4]});
  margin-right: calc(-1 * ${space[4]});
  border-left: 0;
  border-right: 0;
  border-radius: 0;

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
  border-bottom: 1px solid ${color.border};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

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

export const Chip = styled.button<{ active: boolean }>`
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
