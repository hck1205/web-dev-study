import styled from "@emotion/styled";
import { anim, color, font, radius, shadow, space } from "@/common/design-system";

export const Root = styled.section`
  display: grid;
  gap: ${space[4]};
`;

export const Counter = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
  font-variant-numeric: tabular-nums;
`;

export const Card = styled.article`
  display: grid;
  gap: ${space[4]};
  padding: ${space[5]};
  border: 1px solid ${color.border};
  border-radius: ${radius.xl};
  background: ${color.surface};
  box-shadow: ${shadow.md};
  animation: ${anim.slideIn} 420ms ${anim.easing.out} both;
`;

export const Kind = styled.p`
  display: flex;
  gap: ${space[2]};
  align-items: center;
  margin: 0;
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  letter-spacing: 0.08em;

  a {
    color: ${color.textSubtle};
    font-weight: ${font.weight.regular};
    letter-spacing: 0;
    text-decoration: none;
  }
  a:hover {
    color: ${color.accent};
  }
`;

export const Question = styled.h2`
  margin: 0;
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  line-height: ${font.leading.snug};
  overflow-wrap: anywhere;
`;

export const Hint = styled.p`
  margin: 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const Answer = styled.div`
  padding: ${space[4]};
  border-radius: ${radius.md};
  background: ${color.bgSubtle};
  color: ${color.text};
  font-size: ${font.size.sm};
  line-height: ${font.leading.relaxed};
  white-space: pre-line;
  animation: ${anim.fadeUp} 300ms ${anim.easing.out} both;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
`;

export const Done = styled.div`
  display: grid;
  gap: ${space[4]};
  animation: ${anim.fadeUp} 400ms ${anim.easing.out} both;

  h2 {
    margin: 0;
    font-size: ${font.size.xl};
    font-weight: ${font.weight.bold};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
    line-height: ${font.leading.normal};
  }
  ul {
    margin: 0;
    padding-left: ${space[5]};
  }
  li + li {
    margin-top: ${space[1]};
  }
  a {
    color: ${color.text};
  }
  a:hover {
    color: ${color.accent};
  }
`;
