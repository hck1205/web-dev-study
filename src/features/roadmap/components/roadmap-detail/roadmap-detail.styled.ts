import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, motion, radius, shadow, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";

export const Summary = styled.div`
  display: grid;
  gap: ${space[3]};
  margin-bottom: ${space[6]};
`;

export const Requirements = styled.p`
  margin: 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};

  a {
    color: ${color.accent};
  }
`;

export const Rows = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
  }
`;

const rowBase = `
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${space[1]} ${space[3]};
  align-items: center;
  min-height: 2.75rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};
  color: ${color.text};
  text-decoration: none;
`;

export const PostLink = styled(Link, omitProps("isNext"))<{ isNext: boolean }>`
  ${rowBase}
  border-color: ${({ isNext }) => (isNext ? color.accent : color.border)};
  box-shadow: ${({ isNext }) => (isNext ? `0 0 0 3px ${color.accentSoft}` : "none")};
  transition:
    border-color ${motion.fast},
    box-shadow ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    box-shadow: ${shadow.sm};
  }
`;

export const Order = styled.span`
  grid-row: span 2;
  align-self: start;
  width: 1.75rem;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
  text-align: right;
`;

export const TitleRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;

  strong {
    font-weight: ${font.weight.semibold};
    line-height: ${font.leading.snug};
  }
`;

export const NextTag = styled.span`
  padding: 0 ${space[2]};
  border-radius: ${radius.full};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  line-height: 1.5rem;
`;

export const PostSummary = styled.span`
  display: none;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};

  ${media.tablet} {
    display: block;
  }
`;

export const RoadmapLink = styled(Link)`
  ${rowBase}
  grid-template-columns: 1fr;
  gap: ${space[2]};
  padding: ${space[4]};
  border-radius: ${radius.lg};
  transition:
    border-color ${motion.base},
    box-shadow ${motion.base};

  &:hover {
    border-color: ${color.borderStrong};
    box-shadow: ${shadow.md};
  }

  h3 {
    margin: 0;
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
    font-size: ${font.size.sm};
  }
`;

export const RoadmapMeta = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;

export const CheckpointLink = styled(Link, omitProps("passed"))<{ passed: boolean }>`
  ${rowBase}
  grid-template-columns: auto 1fr auto;
  border-style: dashed;
  border-color: ${({ passed }) => (passed ? color.success : color.borderStrong)};
  background: ${({ passed }) => (passed ? color.successSoft : color.bgSubtle)};

  &:hover {
    border-style: solid;
  }

  strong {
    font-weight: ${font.weight.semibold};
  }
  small {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
  }
`;

export const Flag = styled.span`
  width: 1.75rem;
  text-align: center;
  font-size: ${font.size.base};
`;
