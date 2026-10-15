import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { anim, color, font, motion, radius, space } from "@/common/design-system";

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
  ${({ state }) =>
    state === "current"
      ? css`
          animation: ${anim.pop} 350ms ${anim.easing.out};
        `
      : state === "found"
        ? css`
            color: ${color.success};
            animation: ${anim.glow} 900ms ${anim.easing.out};
          `
        : ""}
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
  animation: ${anim.bounce} 600ms ${anim.easing.out};
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

export const Chip = styled.span<{ motion?: "enter" | "leave" }>`
  overflow: hidden;
  white-space: nowrap;
  ${({ motion: m }) =>
    m === "enter"
      ? css`
          animation: ${anim.dropIn} 380ms ${anim.easing.out};
        `
      : m === "leave"
        ? css`
            animation: ${anim.liftOut} 520ms ${anim.easing.out} forwards;
          `
        : ""}
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
  animation: ${anim.fadeUp} 300ms ${anim.easing.out};
  margin: 0;
  padding: ${space[4]};
  border-top: 1px solid ${color.border};
  color: ${color.text};
  line-height: ${font.leading.relaxed};
  word-break: keep-all;
`;
