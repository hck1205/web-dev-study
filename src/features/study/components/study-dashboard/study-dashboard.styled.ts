import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, motion, radius, shadow, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Stats = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${space[2]};
  margin: 0 0 ${space[6]};

  ${media.tablet} {
    gap: ${space[3]};
  }

  div {
    padding: ${space[3]};
    border: 1px solid ${color.border};
    border-radius: ${radius.md};
    background: ${color.surface};
  }
  dt {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.medium};
  }
  dd {
    margin: ${space[1]} 0 0;
    font-size: ${font.size.lg};
    font-weight: ${font.weight.bold};
    font-variant-numeric: tabular-nums;
  }
  dd small {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
    font-weight: ${font.weight.regular};
  }
`;

export const Step = styled.section`
  display: grid;
  gap: ${space[3]};
  padding: ${space[5]};
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;

  & + & {
    margin-top: ${space[4]};
  }

  h2 {
    display: flex;
    gap: ${space[2]};
    align-items: center;
    margin: 0;
    font-size: ${font.size.lg};
    font-weight: ${font.weight.bold};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
    font-size: ${font.size.sm};
    line-height: ${font.leading.normal};
  }
`;

export const StepNumber = styled.span`
  display: inline-grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${radius.full};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-size: ${font.size.sm};
`;

export const Minutes = styled.span`
  margin-left: auto;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.regular};
`;

export const List = styled.ul`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ItemLink = styled(Link)`
  display: grid;
  gap: ${space[1]};
  min-height: 2.75rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  color: ${color.text};
  text-decoration: none;
  transition:
    border-color ${motion.fast},
    box-shadow ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    box-shadow: ${shadow.sm};
  }
  strong {
    font-size: ${font.size.sm};
    font-weight: ${font.weight.semibold};
    line-height: ${font.leading.snug};
  }
  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
`;

export const Side = styled.section`
  margin-top: ${space[8]};

  h2 {
    margin: 0 0 ${space[3]};
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
  }
`;

export const RoadmapRow = styled(Link)`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${space[1]} ${space[3]};
  align-items: center;
  min-height: 2.75rem;
  padding: ${space[2]} 0;
  color: ${color.text};
  text-decoration: none;
  border-bottom: 1px solid ${color.border};

  &:hover {
    color: ${color.accent};
  }
  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
    font-variant-numeric: tabular-nums;
  }
  & > div {
    grid-column: 1 / -1;
  }
`;
