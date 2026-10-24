import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";

export const Lead = styled.p`
  margin: 0 0 ${space[8]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  line-height: ${font.leading.relaxed};
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 ${space[3]};
  align-items: center;
  padding: ${space[1]} 0;
  border-bottom: 1px solid ${color.border};

  > div {
    flex-basis: 100%;
    padding: ${space[4]} 0 ${space[2]};
  }
`;

export const GroupToggle = styled.button`
  display: inline-flex;
  gap: ${space[2]};
  align-items: center;
  min-height: 2.75rem;
  padding: 0 ${space[2]} 0 0;
  border: 0;
  border-radius: ${radius.md};
  background: transparent;
  color: ${color.text};
  font-family: inherit;
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${color.accent};
  }
`;

export const GroupCount = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.medium};
`;

export const GroupLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-left: auto;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  text-decoration: none;

  &:hover {
    color: ${color.accent};
    text-decoration: underline;
  }
`;

/** 그룹 안의 토픽 하나. 접혀 있고 제목 줄만 보인다 */
export const Section = styled.details`
  border-top: 1px solid ${color.border};

  > summary {
    display: flex;
    gap: ${space[2]};
    align-items: center;
    min-height: 2.75rem;
    color: ${color.text};
    font-weight: ${font.weight.semibold};
    cursor: pointer;
    list-style: none;
    overflow-wrap: anywhere;
  }
  > summary::-webkit-details-marker {
    display: none;
  }
  > summary::before {
    content: "▸";
    color: ${color.textSubtle};
  }
  &[open] > summary::before {
    content: "▾";
  }
  &[open] {
    padding-bottom: ${space[6]};
  }
`;

export const SectionTitle = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-bottom: ${space[2]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  text-decoration: none;

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
