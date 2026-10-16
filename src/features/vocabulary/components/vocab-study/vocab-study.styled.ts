import styled from "@emotion/styled";
import { anim, color, font, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";

export const Setup = styled.section`
  display: grid;
  gap: ${space[6]};
  justify-items: start;
  animation: ${anim.fadeUp} 400ms ${anim.easing.out} both;
`;

export const SetupStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[5]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};

  strong {
    margin-left: ${space[1]};
    color: ${color.text};
    font-variant-numeric: tabular-nums;
  }
`;

export const Field = styled.div`
  width: 100%;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${space[2]};
  }
`;

export const FieldLabel = styled.p`
  margin: 0 0 ${space[2]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
`;

export const Modes = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  gap: ${space[2]};

  ${media.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ModeButton = styled("button", omitProps("selected"))<{ selected: boolean }>`
  display: grid;
  gap: ${space[1]};
  align-content: start;
  min-height: 5.5rem;
  padding: ${space[3]};
  border: 1px solid ${({ selected }) => (selected ? color.accent : color.border)};
  border-radius: ${radius.lg};
  background: ${({ selected }) => (selected ? color.accentSoft : color.surface)};
  color: ${color.text};
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color ${motion.fast},
    background ${motion.fast},
    transform ${motion.fast};

  strong {
    color: ${({ selected }) => (selected ? color.accent : color.text)};
  }
  span {
    color: ${color.textMuted};
    font-size: ${font.size.xs};
    line-height: ${font.leading.snug};
    word-break: keep-all;
  }
  &:hover {
    border-color: ${color.accent};
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const Playing = styled.section`
  display: grid;
  gap: ${space[3]};
`;

export const ProgressRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;

  strong {
    color: ${color.text};
  }
`;

export const Bar = styled.div`
  height: 6px;
  margin-bottom: ${space[2]};
  overflow: hidden;
  border-radius: ${radius.full};
  background: ${color.border};
`;

export const BarFill = styled.i`
  display: block;
  height: 100%;
  background: ${color.accent};
  transform-origin: left;
  transition: transform 480ms ${anim.easing.out};
`;
