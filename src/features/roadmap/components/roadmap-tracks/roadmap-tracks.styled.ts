import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, radius, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
`;

export const Intro = styled.p`
  margin: ${space[3]} 0 ${space[2]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};

  a {
    color: ${color.textSubtle};
  }
`;

export const Steps = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: ${space[4]} 0 0;
  padding: 0 0 0 ${space[8]};
  list-style: none;
`;

/** 단계를 세로선 하나로 잇는다. 다 읽은 단계까지 초록, 지금 할 단계는 강조색 */
export const Step = styled("li", omitProps("reached", "current", "last"))<{ reached: boolean; current: boolean; last: boolean }>`
  position: relative;
  padding: ${space[3]};
  border: 1px solid ${({ current }) => (current ? color.accent : color.border)};
  border-radius: ${radius.md};
  background: ${color.surface};
  box-shadow: ${({ current }) => (current ? `0 0 0 3px ${color.accentSoft}` : "none")};
  animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;

  &::before {
    content: "";
    position: absolute;
    top: 1.45rem;
    bottom: calc(-1 * ${space[2]} - 1.45rem);
    left: calc(-1 * ${space[8]} + 0.7rem);
    width: 3px;
    border-radius: 2px;
    background: ${({ reached }) => (reached ? color.success : color.border)};
    display: ${({ last }) => (last ? "none" : "block")};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.95rem;
    left: calc(-1 * ${space[8]} + 0.7rem + 1.5px);
    width: 1rem;
    height: 1rem;
    transform: translateX(-50%);
    border: 3px solid ${({ reached, current }) => (current ? color.accent : reached ? color.success : color.borderStrong)};
    border-radius: 50%;
    background: ${({ reached, current }) => (current ? color.accentSoft : reached ? color.success : color.bg)};
    box-shadow: ${({ current }) => (current ? `0 0 0 5px ${color.accentSoft}` : "none")};
  }
`;

export const StepHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;
  margin-bottom: ${space[2]};

  h3 {
    margin: 0;
    font-size: ${font.size.base};
    font-weight: ${font.weight.semibold};
  }
`;

export const StepNumber = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
`;

export const NextTag = styled.span`
  padding: 0 ${space[2]};
  border-radius: ${radius.full};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  line-height: 1.5rem;
`;

export const RoadmapLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]};
  margin: ${space[2]} 0 0;
  padding: 0;
  list-style: none;
`;

export const RoadmapLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0 ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  color: ${color.text};
  font-size: ${font.size.sm};
  text-decoration: none;

  &:hover {
    border-color: ${color.accent};
    color: ${color.accent};
  }
`;

export const StepMeta = styled.p`
  margin: ${space[1]} 0 0;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;
