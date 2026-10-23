import styled from "@emotion/styled";
import { color, font, motion, radius, space } from "@/common/design-system";

export const Root = styled.details`
  margin: 0 0 ${space[8]};
  border: 1px solid ${color.border};
  border-left: 4px solid ${color.series2};
  border-radius: ${radius.md};
  background: ${color.bgSubtle};
  transition: border-color ${motion.base};

  &[open] {
    border-color: color-mix(in srgb, ${color.series2} 40%, ${color.border});
  }
`;

export const Summary = styled.summary`
  display: flex;
  gap: ${space[2]};
  align-items: center;
  min-height: 2.75rem;
  padding: ${space[2]} ${space[4]};
  cursor: pointer;
  list-style: none;
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};

  &::-webkit-details-marker {
    display: none;
  }
  &::before {
    content: "▸";
    color: ${color.series2};
    transition: transform ${motion.base};
  }
  details[open] > &::before {
    transform: rotate(90deg);
  }

  span {
    color: ${color.textSubtle};
    font-weight: ${font.weight.regular};
  }
`;

export const Body = styled.div`
  padding: 0 ${space[4]} ${space[4]};
  color: ${color.text};
  font-size: 1rem;
  line-height: ${font.leading.relaxed};

  /* prose가 주는 큰 여백을 상자 안에서는 줄인다 */
  p {
    margin: 0 0 ${space[3]};
  }
  p:last-child {
    margin-bottom: 0;
  }
`;
