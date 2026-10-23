import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const IntroMeta = styled.p`
  margin: 0;
  color: ${color.textMuted};
  line-height: ${font.leading.normal};
`;

export const Sources = styled.div`
  width: 100%;
  padding-top: ${space[5]};
  border-top: 1px solid ${color.border};

  p {
    margin: 0 0 ${space[2]};
    color: ${color.textSubtle};
    font-size: ${font.size.sm};
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
