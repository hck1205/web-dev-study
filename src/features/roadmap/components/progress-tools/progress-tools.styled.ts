import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;
`;

export const Message = styled.p`
  flex-basis: 100%;
  margin: 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const HiddenInput = styled.input`
  display: none;
`;
