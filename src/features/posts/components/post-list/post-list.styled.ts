import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding: ${space[8]} 0 0;

  ${media.tablet} {
    padding-top: ${space[12]};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${space[4]};
  font-size: ${font.size["3xl"]};
  font-weight: ${font.weight.extrabold};
  letter-spacing: -0.03em;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
`;

export const List = styled.div`
  border-top: 1px solid ${color.border};
`;

export const Empty = styled.p`
  padding: ${space[12]} 0;
  color: ${color.textSubtle};
  text-align: center;
`;
