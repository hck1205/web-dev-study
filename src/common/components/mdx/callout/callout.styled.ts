import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";

export const Box = styled.aside<{ fg: string; bg: string }>`
  margin: ${space[6]} 0;
  padding: ${space[4]} ${space[5]};
  border: 1px solid color-mix(in srgb, ${({ fg }) => fg} 30%, transparent);
  border-radius: ${radius.md};
  background: ${({ bg }) => bg};
  color: ${color.text};
  font-size: 1rem;
  line-height: ${font.leading.normal};

  p {
    margin: ${space[1]} 0 0;
  }
`;

export const Title = styled.strong<{ fg: string }>`
  display: block;
  color: ${({ fg }) => fg};
  font-weight: ${font.weight.bold};
`;
