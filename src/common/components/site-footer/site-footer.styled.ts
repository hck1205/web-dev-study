import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const Root = styled.footer`
  margin-top: ${space[16]};
  padding: ${space[8]} 0 ${space[12]};
  border-top: 1px solid ${color.border};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[6]};
  justify-content: space-between;
`;
