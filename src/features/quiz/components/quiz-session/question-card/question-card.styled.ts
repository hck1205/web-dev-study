import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { anim, color, font, motion, radius, shadow, space } from "@/common/design-system";
import type { ChoiceState } from "./question-card.type";
import { omitProps } from "@/common/styles/omit-props";

const noState = omitProps("state", "correct");

export const Root = styled.article`
  padding: ${space[5]};
  border: 1px solid ${color.border};
  border-radius: ${radius.xl};
  background: ${color.surface};
  box-shadow: ${shadow.md};
  animation: ${anim.slideIn} 420ms ${anim.easing.out} both;
`;

export const Numbering = styled.p`
  margin: 0 0 ${space[2]};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  letter-spacing: 0.08em;
`;

export const Question = styled.h2`
  margin: 0 0 ${space[5]};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  line-height: ${font.leading.snug};
  letter-spacing: -0.01em;
`;

export const ChoiceList = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
  }
`;

const choiceStates: Record<ChoiceState, ReturnType<typeof css>> = {
  idle: css`
    &:hover {
      border-color: ${color.accent};
      background: ${color.accentSoft};
      transform: translateY(-1px);
    }
    &:active {
      transform: scale(0.99);
    }
  `,
  correct: css`
    border-color: ${color.success};
    background: ${color.successSoft};
    color: ${color.success};
    animation: ${anim.glow} 700ms ${anim.easing.out};
  `,
  wrong: css`
    border-color: ${color.danger};
    background: ${color.dangerSoft};
    animation: ${anim.shake} 420ms ${anim.easing.out};
  `,
  dim: css`
    opacity: 0.5;
  `,
};

export const Choice = styled("button", noState)<{ state: ChoiceState }>`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  width: 100%;
  min-height: 3rem;
  padding: ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  color: ${color.text};
  font: inherit;
  text-align: left;
  cursor: ${({ state }) => (state === "idle" ? "pointer" : "default")};
  transition:
    border-color ${motion.base},
    background ${motion.base},
    opacity ${motion.base},
    transform ${motion.fast};

  ${({ state }) => choiceStates[state]}
`;

const markStates: Record<ChoiceState, ReturnType<typeof css>> = {
  idle: css``,
  dim: css``,
  correct: css`
    border-color: ${color.success};
    background: ${color.success};
    color: ${color.onAccent};
    animation: ${anim.pop} 420ms ${anim.easing.spring};
  `,
  wrong: css`
    border-color: ${color.danger};
    background: ${color.danger};
    color: ${color.onAccent};
    animation: ${anim.pop} 420ms ${anim.easing.spring};
  `,
};

export const Mark = styled("span", noState)<{ state: ChoiceState }>`
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid ${color.borderStrong};
  border-radius: ${radius.full};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  font-variant-numeric: tabular-nums;

  ${({ state }) => markStates[state]}
`;

export const ChoiceText = styled.span`
  flex: 1;
  min-width: 0;
  line-height: ${font.leading.snug};
`;

export const Explanation = styled("div", noState)<{ correct: boolean }>`
  margin-top: ${space[5]};
  padding: ${space[4]};
  border-left: 3px solid ${({ correct }) => (correct ? color.success : color.danger)};
  border-radius: ${radius.md};
  background: ${color.bgSubtle};
  animation: ${anim.fadeUp} 400ms ${anim.easing.out} both;

  p {
    margin: ${space[2]} 0 0;
    color: ${color.textMuted};
    line-height: ${font.leading.normal};
  }
`;

export const Verdict = styled("strong", noState)<{ correct: boolean }>`
  color: ${({ correct }) => (correct ? color.success : color.danger)};
  font-weight: ${font.weight.bold};
`;

export const Related = styled.dl`
  display: grid;
  gap: ${space[1]};
  margin: ${space[4]} 0 0;
  font-size: ${font.size.sm};

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${space[2]};
  }
  dt {
    flex: none;
    color: ${color.textSubtle};
  }
  dd {
    margin: 0;
  }
  a {
    color: ${color.accent};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  justify-content: flex-end;
  margin-top: ${space[4]};
`;

export const KeyHint = styled.kbd`
  display: none;
  padding: 0.125rem 0.375rem;
  border: 1px solid ${color.border};
  border-radius: ${radius.sm};
  color: ${color.textSubtle};
  font-family: ${font.mono};
  font-size: ${font.size.xs};

  @media (hover: hover) and (pointer: fine) {
    display: inline-block;
  }
`;
