import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";

export const List = styled.ul<{ nested?: boolean }>`
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ nested }) =>
    nested &&
    `
    margin-left: ${space[4]};
    padding-left: ${space[2]};
    border-left: 1px solid ${color.border};
  `}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const NodeLink = styled(Link, { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  min-height: 2.75rem;
  padding: 0 ${space[3]};
  border-radius: ${radius.md};
  background: ${({ active }) => (active ? color.accentSoft : "transparent")};
  color: ${({ active }) => (active ? color.accent : color.text)};
  font-size: ${font.size.sm};
  font-weight: ${({ active }) => (active ? font.weight.semibold : font.weight.medium)};
  text-decoration: none;
  transition: background ${motion.fast};

  &:hover {
    background: ${({ active }) => (active ? color.accentSoft : color.surfaceHover)};
    color: ${({ active }) => (active ? color.accent : color.text)};
  }
`;

export const NodeLabel = styled.span<{ active: boolean }>`
  flex: 1;
  padding: 0 ${space[3]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
`;

export const Toggle = styled.button<{ expanded: boolean }>`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: ${radius.md};
  background: transparent;
  color: ${color.textSubtle};
  cursor: pointer;

  &:hover {
    background: ${color.surfaceHover};
    color: ${color.text};
  }
  svg {
    transition: transform ${motion.fast};
    transform: rotate(${({ expanded }) => (expanded ? "180deg" : "0deg")});
  }
`;
