import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { anim, color, font, motion, radius, shadow, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";
import type { ChoiceState } from "./choice-card.type";

export const Root = styled.article`
  padding: ${space[5]};
  border: 1px solid ${color.border};
  border-radius: ${radius.xl};
  background: ${color.surface};
  box-shadow: ${shadow.md};
  animation: ${anim.slideIn} 420ms ${anim.easing.out} both;
`;

export const PromptLabel = styled.p`
  margin: 0 0 ${space[3]};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  letter-spacing: 0.08em;
`;

export const Prompt = styled.div`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  min-height: 3.5rem;
  margin-bottom: ${space[5]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const PromptWord = styled.p`
  margin: 0;
  color: ${color.text};
  font-size: ${font.size["3xl"]};
  font-weight: ${font.weight.extrabold};
  letter-spacing: -0.02em;
`;

export const Sentence = styled.p`
  margin: 0;
  color: ${color.text};
  font-size: ${font.size.lg};
  line-height: ${font.leading.normal};
`;

export const Translation = styled.p`
  margin: ${space[2]} 0 0;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  word-break: keep-all;
`;

export const Choices = styled.ol`
  display: grid;
  gap: ${space[2]};
  margin: 0;
  padding: 0;
  list-style: none;

  & > li {
    animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
  }
`;

const states: Record<ChoiceState, ReturnType<typeof css>> = {
  idle: css`
    &:hover {
      border-color: ${color.accent};
      background: ${color.accentSoft};
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

export const Choice = styled("button", omitProps("state"))<{ state: ChoiceState }>`
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
  word-break: keep-all;
  cursor: ${({ state }) => (state === "idle" ? "pointer" : "default")};
  transition:
    border-color ${motion.base},
    background ${motion.base},
    opacity ${motion.base};
  ${({ state }) => states[state]}
`;

export const Mark = styled("span", omitProps("state"))<{ state: ChoiceState }>`
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

  ${({ state }) =>
    (state === "correct" || state === "wrong") &&
    css`
      border-color: transparent;
      background: ${state === "correct" ? color.success : color.danger};
      color: ${color.onAccent};
      animation: ${anim.pop} 420ms ${anim.easing.spring};
    `}
`;

export const Feedback = styled("div", omitProps("correct"))<{ correct: boolean }>`
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
  strong {
    color: ${color.text};
  }
`;

export const Verdict = styled("strong", omitProps("correct"))<{ correct: boolean }>`
  color: ${({ correct }) => (correct ? color.success : color.danger)} !important;
`;

export const Footer = styled.div`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  justify-content: space-between;
  margin-top: ${space[4]};

  a {
    color: ${color.accent};
    font-size: ${font.size.sm};
    text-decoration: none;
  }
`;
