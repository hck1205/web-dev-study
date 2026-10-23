import styled from "@emotion/styled";
import { anim, color, font, radius, shadow, space, zIndex } from "@/common/design-system";

export const Root = styled.span`
  position: relative;
  display: inline;
`;

export const Word = styled.button`
  all: unset;
  cursor: help;
  border-bottom: 1.5px dotted ${color.series2};
  color: inherit;
  font: inherit;

  &:hover,
  &[aria-expanded="true"] {
    background: color-mix(in srgb, ${color.series2} 14%, transparent);
    border-bottom-style: solid;
  }
  &:focus-visible {
    outline: 2px solid ${color.accent};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const Tip = styled.span`
  position: absolute;
  left: 0;
  top: calc(100% + ${space[1]});
  z-index: ${zIndex.overlay};
  display: block;
  width: max-content;
  max-width: min(18rem, calc(100vw - 2rem));
  padding: ${space[2]} ${space[3]};
  border: 1px solid ${color.border};
  border-left: 3px solid ${color.series2};
  border-radius: ${radius.md};
  background: ${color.surface};
  box-shadow: ${shadow.md};
  color: ${color.text};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.regular};
  line-height: ${font.leading.normal};
  text-align: left;
  white-space: normal;
  animation: ${anim.fadeUp} 200ms ${anim.easing.out} both;
`;
