import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";

export const Root = styled.section`
  display: grid;
  gap: ${space[5]};
  margin-top: ${space[10]};
  padding: ${space[5]};
  border: 1px solid ${color.border};
  border-radius: ${radius.xl};
  background: ${color.bgSubtle};
`;

export const Head = styled.div`
  display: grid;
  gap: ${space[2]};

  h2 {
    margin: 0;
    font-size: ${font.size.lg};
    font-weight: ${font.weight.bold};
  }
`;

export const Crumbs = styled.nav`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};

  a {
    color: ${color.textMuted};
    text-decoration: none;
  }
  a:hover {
    color: ${color.accent};
  }
`;

export const Position = styled.p`
  margin: 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const Stages = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StageButton = styled("button", omitProps("active", "done"))<{ active: boolean; done: boolean }>`
  display: grid;
  gap: ${space[1]};
  width: 100%;
  min-height: 2.75rem;
  padding: ${space[3]};
  border: 1px solid ${({ done }) => (done ? color.success : color.border)};
  border-radius: ${radius.md};
  background: ${({ done }) => (done ? color.successSoft : color.surface)};
  color: ${color.text};
  text-align: left;
  cursor: pointer;
  transition:
    border-color ${motion.fast},
    background ${motion.fast},
    transform ${motion.fast};

  &:hover {
    border-color: ${({ done }) => (done ? color.success : color.accent)};
  }
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }

  strong {
    display: flex;
    gap: ${space[2]};
    align-items: center;
    font-size: ${font.size.sm};
    font-weight: ${font.weight.semibold};
  }
  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
    line-height: ${font.leading.snug};
  }
`;

export const StepNumber = styled("i", omitProps("done"))<{ done: boolean }>`
  display: inline-grid;
  place-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: ${radius.full};
  background: ${({ done }) => (done ? color.success : color.border)};
  color: ${({ done }) => (done ? color.onAccent : color.textMuted)};
  font-size: ${font.size.xs};
  font-style: normal;
  font-weight: ${font.weight.bold};
`;

export const Explain = styled.div`
  display: grid;
  gap: ${space[2]};

  h3 {
    margin: 0;
    font-size: ${font.size.base};
    font-weight: ${font.weight.semibold};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
    font-size: ${font.size.sm};
    line-height: ${font.leading.normal};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 7rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};
  color: ${color.text};
  font: inherit;
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};
  resize: vertical;

  &:focus {
    outline: 2px solid ${color.accent};
    outline-offset: 1px;
  }
`;

export const ExplainActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;

  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
  }
`;

export const Compare = styled.details`
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};

  summary {
    padding: ${space[3]};
    cursor: pointer;
    font-size: ${font.size.sm};
    font-weight: ${font.weight.medium};
  }
  div {
    padding: 0 ${space[3]} ${space[3]};
    color: ${color.textMuted};
    font-size: ${font.size.sm};
    line-height: ${font.leading.normal};
  }
`;

export const Neighbors = styled.div`
  display: grid;
  gap: ${space[2]};

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const NeighborLink = styled(Link, omitProps("side"))<{ side: "prev" | "next" }>`
  display: grid;
  gap: ${space[1]};
  min-height: 2.75rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};
  color: ${color.text};
  text-align: ${({ side }) => (side === "next" ? "right" : "left")};
  text-decoration: none;
  transition: border-color ${motion.fast};

  &:hover {
    border-color: ${color.accent};
  }
  small {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
  }
  strong {
    font-size: ${font.size.sm};
    font-weight: ${font.weight.semibold};
    line-height: ${font.leading.snug};
  }
`;

export const Review = styled.p`
  margin: 0;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;

/** "지금 단계:"와 단계 표시가 한 덩어리로 줄바꿈되게 묶는다 */
export const StageLine = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[2]};
  align-items: center;
`;
