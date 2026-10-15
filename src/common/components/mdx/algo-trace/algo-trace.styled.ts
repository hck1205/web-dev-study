import styled from "@emotion/styled";
import { color, font, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Frame = styled.figure`
  margin: ${space[6]} 0;
  overflow: hidden;
  border: 1px solid ${color.border};
  background: ${color.surface};
  margin-left: calc(-1 * ${space[4]});
  margin-right: calc(-1 * ${space[4]});
  border-left: 0;
  border-right: 0;

  ${media.tablet} {
    margin-left: 0;
    margin-right: 0;
    border-left: 1px solid ${color.border};
    border-right: 1px solid ${color.border};
    border-radius: ${radius.lg};
  }
`;

export const Caption = styled.figcaption`
  padding: ${space[3]} ${space[4]};
  border-bottom: 1px solid ${color.border};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const Stage = styled.div`
  padding: ${space[5]} ${space[4]} ${space[4]};
`;

export const Cells = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
`;

export const CellWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[1]};
`;

export const Cell = styled.div<{ state: "idle" | "current" | "found" }>`
  display: grid;
  place-items: center;
  min-width: 2.75rem;
  height: 2.75rem;
  padding: 0 ${space[2]};
  border: 2px solid
    ${({ state }) => (state === "current" ? color.accent : state === "found" ? color.success : color.borderStrong)};
  border-radius: ${radius.md};
  background: ${({ state }) =>
    state === "current" ? color.accentSoft : state === "found" ? color.successSoft : color.bgSubtle};
  color: ${color.text};
  font-family: ${font.mono};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  transition:
    background ${motion.base},
    border-color ${motion.base};
`;

export const Index = styled.span`
  color: ${color.textSubtle};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
`;

export const Pointer = styled.span<{ visible: boolean }>`
  height: 1rem;
  color: ${color.accent};
  font-size: ${font.size.sm};
  line-height: 1;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const Memory = styled.div`
  margin-top: ${space[5]};
  padding: ${space[3]};
  border: 1px dashed ${color.borderStrong};
  border-radius: ${radius.md};
`;

export const MemoryTitle = styled.p`
  margin: 0 0 ${space[2]};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  min-height: 2.25rem;
`;

export const Chip = styled.span`
  padding: ${space[1]} ${space[3]};
  border-radius: ${radius.full};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-family: ${font.mono};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
`;

export const Empty = styled.span`
  align-self: center;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;

export const Say = styled.p`
  margin: 0;
  padding: ${space[4]};
  border-top: 1px solid ${color.border};
  color: ${color.text};
  line-height: ${font.leading.relaxed};
  word-break: keep-all;
`;
