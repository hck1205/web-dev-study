import styled from "@emotion/styled";
import { anim, color, font, radius, shadow, space } from "@/common/design-system";
import { omitProps } from "@/common/styles/omit-props";

/** 3D로 뒤집히는 카드. 움직임 줄이기 설정에서는 글로벌 스타일이 전환을 즉시 끝낸다 */
export const Card = styled.div`
  perspective: 1200px;
  cursor: pointer;
  animation: ${anim.slideIn} 420ms ${anim.easing.out} both;

  &:focus-visible {
    outline: 2px solid ${color.accent};
    outline-offset: 4px;
    border-radius: ${radius.xl};
  }
`;

export const Face = styled("div", omitProps("flipped"))<{ flipped: boolean }>`
  position: relative;
  display: grid;
  min-height: 18rem;
  transform-style: preserve-3d;
  transform: rotateY(${({ flipped }) => (flipped ? 180 : 0)}deg);
  transition: transform 600ms ${anim.easing.inOut};

  & > * {
    grid-area: 1 / 1;
  }
`;

const side = `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.25rem;
  border-radius: 20px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  text-align: center;
`;

export const Front = styled.div`
  ${side}
  border: 1px solid ${color.border};
  background: ${color.surface};
  box-shadow: ${shadow.lg};
`;

export const Back = styled.div`
  ${side}
  border: 1px solid ${color.accent};
  background: ${color.accentSoft};
  box-shadow: ${shadow.lg};
  transform: rotateY(180deg);
`;

export const Word = styled.p`
  margin: 0;
  font-size: ${font.size["4xl"]};
  font-weight: ${font.weight.extrabold};
  letter-spacing: -0.02em;
`;

export const Ipa = styled.p`
  display: flex;
  gap: ${space[2]};
  align-items: center;
  margin: ${space[2]} 0 0;
  color: ${color.textMuted};
  font-family: ${font.mono};
`;

export const Hint = styled.p`
  margin: ${space[6]} 0 0;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;

export const Meaning = styled.p`
  margin: 0 0 ${space[4]};
  font-size: ${font.size.xl};
  font-weight: ${font.weight.bold};
  word-break: keep-all;
`;

export const Sentence = styled.p`
  margin: 0;
  line-height: ${font.leading.normal};
`;

export const Translation = styled.p`
  margin: ${space[2]} 0 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  word-break: keep-all;
`;

export const Judge = styled("div", omitProps("visible"))<{ visible: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space[3]};
  margin-top: ${space[4]};
  opacity: ${({ visible }) => (visible ? 1 : 0.35)};
  transition: opacity 300ms ease;
`;

export const JudgeButton = styled("button", omitProps("tone"))<{ tone: "danger" | "success" }>`
  display: inline-flex;
  gap: ${space[2]};
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  border: 1px solid ${({ tone }) => (tone === "danger" ? color.danger : color.success)};
  border-radius: ${radius.lg};
  background: ${({ tone }) => (tone === "danger" ? color.dangerSoft : color.successSoft)};
  color: ${({ tone }) => (tone === "danger" ? color.danger : color.success)};
  font: inherit;
  font-weight: ${font.weight.bold};
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
  &:active:not(:disabled) {
    transform: scale(0.97);
  }
  kbd {
    font-family: ${font.mono};
    font-size: ${font.size.xs};
    opacity: 0.7;
  }
`;
