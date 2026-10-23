import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, motion, radius, shadow, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";

export const Section = styled.section`
  margin-top: ${space[8]};

  h2 {
    margin: 0 0 ${space[3]};
    font-size: ${font.size.lg};
    font-weight: ${font.weight.bold};
  }
`;

export const Tiers = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${space[2]};
  margin: 0;

  ${media.tablet} {
    gap: ${space[3]};
  }
`;

export const TierCard = styled.div`
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};

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

export const NextList = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: next;

  li {
    animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
  }
`;

export const NextLink = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${space[1]} ${space[3]};
  align-items: baseline;
  min-height: 2.75rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};
  color: ${color.text};
  text-decoration: none;
  transition:
    border-color ${motion.fast},
    box-shadow ${motion.fast};

  &::before {
    counter-increment: next;
    content: counter(next);
    grid-row: span 2;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: ${radius.full};
    background: ${color.accentSoft};
    color: ${color.accent};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    line-height: 1.6rem;
    text-align: center;
    align-self: center;
  }
  &:hover {
    border-color: ${color.accent};
    box-shadow: ${shadow.sm};
  }

  strong {
    font-weight: ${font.weight.semibold};
    line-height: ${font.leading.snug};
  }
  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
  }
`;

export const Cards = styled.ol`
  display: grid;
  gap: ${space[3]};
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
  }
`;

export const RoadmapCard = styled(Link, omitProps("locked"))<{ locked: boolean }>`
  display: grid;
  gap: ${space[3]};
  height: 100%;
  padding: ${space[4]};
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  color: ${color.text};
  text-decoration: none;
  opacity: ${({ locked }) => (locked ? 0.72 : 1)};
  transition:
    border-color ${motion.base},
    box-shadow ${motion.base},
    transform ${motion.base},
    opacity ${motion.base};

  &:hover {
    border-color: ${color.borderStrong};
    box-shadow: ${shadow.md};
    transform: translateY(-2px);
    opacity: 1;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

export const CardHead = styled.div`
  display: flex;
  gap: ${space[2]};
  align-items: center;

  h3 {
    flex: 1;
    margin: 0;
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
  }
`;

export const CardDescription = styled.p`
  margin: 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};
`;

export const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[3]};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;

export const Legend = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[4]};
  margin: ${space[3]} 0 0;
  padding: 0;
  list-style: none;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};

  li {
    display: flex;
    gap: ${space[1]};
    align-items: center;
  }
  i {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }
`;

export const SectionHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${space[3]};

  h2 {
    margin: 0;
  }
  div {
    display: flex;
    gap: ${space[2]};
  }
`;
