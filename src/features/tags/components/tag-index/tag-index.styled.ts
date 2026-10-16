import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TagChip = styled(Link, omitProps("company"))<{ company?: boolean }>`
  display: inline-flex;
  gap: ${space[2]};
  align-items: center;
  min-height: 2.5rem;
  padding: 0 ${space[4]};
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  color: ${color.text};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.medium};
  text-decoration: none;
  transition:
    border-color ${motion.fast},
    color ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    color: ${color.accent};
  }
  ${({ company }) =>
    company &&
    `
    border-color: ${color.accent};
    background: ${color.accentSoft};
    color: ${color.accent};
    font-weight: ${font.weight.semibold};
  `}
`;

export const Section = styled.section`
  margin-bottom: ${space[8]};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 ${space[3]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  letter-spacing: 0.04em;
`;

export const Count = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;
