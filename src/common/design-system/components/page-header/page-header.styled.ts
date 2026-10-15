import styled from "@emotion/styled";
import { media } from "@/common/styles/breakpoints";
import { color, font, space } from "../../tokens";

export const Root = styled.header`
  padding-top: ${space[8]};
  margin-bottom: ${space[6]};

  ${media.tablet} {
    padding-top: ${space[12]};
    margin-bottom: ${space[8]};
  }
`;

export const Eyebrow = styled.div`
  margin-bottom: ${space[3]};
  color: ${color.textSubtle};
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
  line-height: ${font.leading.tight};
  letter-spacing: -0.03em;
  text-wrap: balance;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
`;

export const Lead = styled.p`
  margin-top: ${space[2]};
  color: ${color.textMuted};
  word-break: keep-all;
`;
