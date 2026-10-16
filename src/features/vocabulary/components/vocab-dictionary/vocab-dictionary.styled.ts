import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, layout, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";
import type { WordStatus } from "../../atoms/vocab-progress";

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[5]};
  align-items: center;
  margin-bottom: ${space[6]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};

  strong {
    margin-left: ${space[1]};
    color: ${color.text};
    font-variant-numeric: tabular-nums;
  }
  a {
    margin-left: auto;
  }
`;

export const Toolbar = styled.div`
  display: grid;
  gap: ${space[3]};
  margin-bottom: ${space[6]};
`;

export const SearchInput = styled.input`
  width: 100%;
  min-height: 2.75rem;
  padding: 0 ${space[4]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};
  color: ${color.text};
  /* iOS가 입력 중에 화면을 확대하지 않도록 16px */
  font-size: 16px;

  &:focus {
    border-color: ${color.accent};
    outline: none;
  }
`;

/** 모바일에서는 가로로 밀어서 본다 */
export const ChipRow = styled.div`
  display: flex;
  gap: ${space[2]};
  margin: 0 calc(-1 * ${space[4]});
  padding: 0 ${space[4]};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet} {
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
`;

export const Jump = styled.nav`
  position: sticky;
  top: ${layout.header};
  z-index: 2;
  display: flex;
  gap: ${space[1]};
  margin: 0 calc(-1 * ${space[4]}) ${space[4]};
  padding: ${space[2]} ${space[4]};
  overflow-x: auto;
  border-bottom: 1px solid ${color.border};
  background: ${color.bg};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  a {
    display: inline-grid;
    flex: none;
    place-items: center;
    min-width: 2rem;
    height: 2rem;
    border-radius: ${radius.sm};
    color: ${color.textMuted};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.semibold};
    text-decoration: none;
  }
  a:hover {
    background: ${color.surfaceHover};
    color: ${color.accent};
  }
  ${media.tablet} {
    margin: 0 0 ${space[4]};
    padding: ${space[2]} 0;
  }
`;

export const Group = styled.section`
  scroll-margin-top: calc(${layout.header} + 3.5rem);

  & + & {
    margin-top: ${space[6]};
  }
`;

export const GroupTitle = styled.h2`
  margin: 0 0 ${space[2]};
  color: ${color.accent};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.extrabold};
`;

export const Rows = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${color.border};
  list-style: none;
`;

export const Row = styled.li`
  border-bottom: 1px solid ${color.border};
  animation: ${anim.fadeUp} 300ms ${anim.easing.out} both;
`;

export const RowLink = styled(Link)`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  gap: ${space[1]} ${space[2]};
  align-items: baseline;
  min-height: 3.5rem;
  padding: ${space[3]} ${space[2]};
  color: ${color.text};
  text-decoration: none;
  transition: background ${motion.fast};

  &:hover {
    background: ${color.surfaceHover};
  }
  ${media.tablet} {
    grid-template-columns: auto 10rem 3rem 2.5rem 1fr;
  }
`;

const statusColor: Record<WordStatus, string> = {
  new: color.border,
  due: color.warning,
  learning: color.info,
  mastered: color.success,
};

export const StatusDot = styled("span", omitProps("status"))<{ status: WordStatus }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: ${radius.full};
  background: ${({ status }) => statusColor[status]};
  transform: translateY(-0.1em);
`;

export const Word = styled.span`
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  letter-spacing: -0.01em;
`;

export const Pos = styled.span`
  color: ${color.textSubtle};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
`;

export const Level = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
`;

/** 모바일에서는 다음 줄 전체 폭으로 내려간다 */
export const Meaning = styled.span`
  grid-column: 2 / -1;
  color: ${color.textMuted};
  font-size: ${font.size.sm};

  ${media.tablet} {
    grid-column: auto;
  }
`;
