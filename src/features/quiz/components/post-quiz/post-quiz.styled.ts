import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const Root = styled.div`
  display: grid;
  gap: ${space[3]};
`;

export const Note = styled.p`
  margin: 0;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;
