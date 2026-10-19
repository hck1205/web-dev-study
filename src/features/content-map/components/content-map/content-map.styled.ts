import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, space } from "@/common/design-system";

export const Lead = styled.p`
  margin: 0 0 ${space[8]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  line-height: ${font.leading.relaxed};
`;

export const Section = styled.section`
  margin-bottom: ${space[10]};
`;

export const SectionTitle = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-bottom: ${space[2]};
  color: ${color.text};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  text-decoration: none;
  overflow-wrap: anywhere;

  &:hover {
    color: ${color.accent};
  }
`;

export const PostList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid ${color.border};
`;

export const PostRow = styled.li`
  padding: ${space[3]} 0;
  border-bottom: 1px solid ${color.border};
`;

export const PostLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  color: ${color.text};
  font-weight: ${font.weight.semibold};
  line-height: ${font.leading.snug};
  text-decoration: none;
  transition: color ${motion.fast};

  &:hover {
    color: ${color.accent};
  }
`;

export const Related = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[3]};
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;

export const RelatedLabel = styled.li`
  color: ${color.textSubtle};
`;

export const RelatedLink = styled(Link)`
  color: ${color.textMuted};
  text-decoration: underline;
  text-decoration-color: ${color.border};
  text-underline-offset: 3px;

  &:hover {
    color: ${color.accent};
    text-decoration-color: ${color.accent};
  }
`;
