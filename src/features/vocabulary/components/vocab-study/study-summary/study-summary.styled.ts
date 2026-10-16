import styled from "@emotion/styled";
import { anim, color, font, space } from "@/common/design-system";

export const Root = styled.section`
  animation: ${anim.fadeUp} 400ms ${anim.easing.out} both;
`;

export const Summary = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;
  margin: ${space[2]} auto ${space[4]};
`;

export const Ring = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);

  circle {
    fill: none;
    stroke-width: 10;
    stroke-linecap: round;
  }
  circle:first-of-type {
    stroke: ${color.border};
  }
  circle:last-of-type {
    stroke: ${color.success};
    stroke-dasharray: 1;
    stroke-dashoffset: var(--to);
    animation: ${anim.fillTo} 1100ms ${anim.easing.out} 200ms both;
  }
`;

export const RingLabel = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  gap: ${space[1]};
  align-items: baseline;
  justify-content: center;
  padding-top: 2.75rem;
  font-variant-numeric: tabular-nums;

  strong {
    font-size: ${font.size["3xl"]};
    font-weight: ${font.weight.extrabold};
    line-height: 1;
    animation: ${anim.pop} 500ms ${anim.easing.spring} 600ms both;
  }
  span {
    color: ${color.textSubtle};
  }
`;

export const Message = styled.p`
  max-width: 28rem;
  margin: 0 auto ${space[5]};
  color: ${color.textMuted};
  text-align: center;
  line-height: ${font.leading.normal};
  word-break: keep-all;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  justify-content: center;
  margin-bottom: ${space[8]};
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid ${color.border};
  list-style: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: ${space[3]};
  align-items: center;
  padding: ${space[3]} 0;
  border-bottom: 1px solid ${color.border};
  animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;

  a {
    color: ${color.text};
    font-weight: ${font.weight.bold};
    text-decoration: none;
  }
  a:hover {
    color: ${color.accent};
  }
  span:last-child {
    overflow: hidden;
    color: ${color.textMuted};
    font-size: ${font.size.sm};
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
