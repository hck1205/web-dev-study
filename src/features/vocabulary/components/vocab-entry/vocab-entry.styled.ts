import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { anim, color, font, radius, space } from "@/common/design-system";

export const Head = styled.div`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  margin: calc(-1 * ${space[4]}) 0 ${space[3]};
`;

export const Ipa = styled.span`
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: ${font.size.lg};
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  margin-bottom: ${space[6]};
`;

export const Meaning = styled.p`
  margin: 0 0 ${space[2]};
  font-size: ${font.size["2xl"]};
  font-weight: ${font.weight.bold};
  line-height: ${font.leading.snug};
  word-break: keep-all;
  animation: ${anim.fadeUp} 400ms ${anim.easing.out} both;
`;

export const Definition = styled.p`
  margin: 0 0 ${space[5]};
  color: ${color.textMuted};
  font-style: italic;
  line-height: ${font.leading.normal};
`;

export const Explanation = styled.p`
  margin: 0;
  line-height: ${font.leading.relaxed};
  word-break: keep-all;
`;

export const Section = styled.section`
  margin-top: ${space[8]};
`;

export const SectionTitle = styled.h2`
  margin: 0 0 ${space[3]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  letter-spacing: 0.04em;
`;

export const ExampleList = styled.ol`
  display: grid;
  gap: ${space[3]};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Example = styled.li`
  padding: ${space[4]};
  border: 1px solid ${color.border};
  border-radius: ${radius.lg};
  background: ${color.surface};
  animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
`;

export const ExampleText = styled.div`
  display: flex;
  gap: ${space[3]};
  align-items: flex-start;
  justify-content: space-between;

  p {
    margin: 0;
    font-size: ${font.size.lg};
    line-height: ${font.leading.normal};
  }
`;

export const Translation = styled.p`
  margin: ${space[2]} 0 0;
  color: ${color.textMuted};
  line-height: ${font.leading.normal};
  word-break: keep-all;
`;

export const Note = styled.p`
  margin: ${space[3]} 0 0;
  padding: ${space[2]} ${space[3]};
  border-left: 3px solid ${color.accent};
  border-radius: ${radius.sm};
  background: ${color.bgSubtle};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};
  word-break: keep-all;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
`;

const chip = css`
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  color: ${color.text};
  font-size: ${font.size.sm};
  text-decoration: none;
`;

export const WordChip = styled.span`
  ${chip}
`;

/** 사전에 있는 단어로 가는 칩 */
export const WordLink = styled(Link)`
  ${chip}
  border-color: ${color.accent};
  color: ${color.accent};

  &:hover {
    background: ${color.accentSoft};
  }
`;

export const Confusable = styled.div`
  & + & {
    margin-top: ${space[3]};
  }
  strong {
    font-size: ${font.size.lg};
  }
  p {
    margin: ${space[1]} 0 0;
    color: ${color.textMuted};
    line-height: ${font.leading.normal};
    word-break: keep-all;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${space[3]};
  align-items: center;
  justify-content: space-between;
  margin-top: ${space[12]};
  padding-top: ${space[5]};
  border-top: 1px solid ${color.border};

  a:not([class]) {
    color: ${color.accent};
    font-weight: ${font.weight.semibold};
    text-decoration: none;
  }
`;
