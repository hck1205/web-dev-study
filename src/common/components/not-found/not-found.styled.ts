import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const Links = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[3]};
  margin: ${space[4]} 0 0;
  font-size: ${font.size.sm};

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: ${color.accent};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
