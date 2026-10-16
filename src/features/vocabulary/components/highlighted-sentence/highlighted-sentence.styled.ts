import styled from "@emotion/styled";
import { color, font, radius } from "@/common/design-system";

export const Hit = styled.mark`
  padding: 0 0.15em;
  border-radius: ${radius.sm};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-weight: ${font.weight.bold};
`;

export const Blank = styled.span`
  display: inline-block;
  min-width: 4em;
  border-bottom: 2px solid ${color.accent};
  line-height: 1.2;
`;
