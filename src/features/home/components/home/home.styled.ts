import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding: ${space[10]} 0 0;

  ${media.tablet} {
    padding-top: ${space[16]};
  }
`;

export const Intro = styled.header`
  margin-bottom: ${space[10]};

  h1 {
    font-size: ${font.size["3xl"]};
    font-weight: ${font.weight.extrabold};
    line-height: ${font.leading.tight};
    letter-spacing: -0.03em;
  }
  p {
    margin-top: ${space[3]};
    color: ${color.textMuted};
    font-size: ${font.size.lg};
    word-break: keep-all;
  }

  ${media.tablet} {
    margin-bottom: ${space[12]};

    h1 {
      font-size: ${font.size["4xl"]};
    }
  }
`;

export const Section = styled.section`
  & + & {
    margin-top: ${space[12]};
  }
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: ${space[2]};

  h2 {
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${color.textSubtle};
  }
  a {
    font-size: ${font.size.sm};
    font-weight: ${font.weight.medium};
    text-decoration: none;
  }
`;

export const PostList = styled.div`
  border-top: 1px solid ${color.border};
`;
