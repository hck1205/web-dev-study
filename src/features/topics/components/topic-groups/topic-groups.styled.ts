import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";

export const Group = styled.section`
  & + & {
    margin-top: ${space[8]};
  }
`;

export const GroupTitle = styled.h2`
  margin-bottom: ${space[3]};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  letter-spacing: -0.02em;

  a {
    color: ${color.text};
    text-decoration: none;
  }
  a:hover {
    color: ${color.accent};
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TopicLink = styled(Link)`
  display: inline-flex;
  gap: ${space[2]};
  align-items: center;
  min-height: 2.5rem;
  padding: 0 ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  color: ${color.textMuted};
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
