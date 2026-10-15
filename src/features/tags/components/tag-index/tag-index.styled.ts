import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding: ${space[8]} 0 0;

  ${media.tablet} {
    padding-top: ${space[12]};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${space[6]};
  font-size: ${font.size["3xl"]};
  font-weight: ${font.weight.extrabold};
  letter-spacing: -0.03em;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TagChip = styled(Link)`
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
`;

export const Count = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;

export const Empty = styled.p`
  padding: ${space[10]} 0;
  color: ${color.textSubtle};
`;
