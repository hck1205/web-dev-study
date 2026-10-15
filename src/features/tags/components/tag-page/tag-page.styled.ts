import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding: ${space[8]} 0 0;

  ${media.tablet} {
    padding-top: ${space[12]};
  }
`;

export const Back = styled.p`
  margin-bottom: ${space[3]};
  font-size: ${font.size.sm};

  a {
    color: ${color.textMuted};
    text-decoration: none;
  }
  a:hover {
    color: ${color.accent};
  }
`;

export const Title = styled.h1`
  font-size: ${font.size["3xl"]};
  font-weight: ${font.weight.extrabold};
  letter-spacing: -0.03em;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
`;

export const Lead = styled.p`
  margin: ${space[2]} 0 ${space[6]};
  color: ${color.textMuted};
`;

export const Count = styled.strong`
  color: ${color.text};
`;

export const List = styled.div`
  border-top: 1px solid ${color.border};
`;
