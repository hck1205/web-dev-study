import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding: ${space[8]} 0 0;

  ${media.tablet} {
    padding-top: ${space[12]};
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[2]};
  margin-bottom: ${space[4]};
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
  letter-spacing: -0.03em;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
`;

export const Lead = styled.p`
  margin-top: ${space[2]};
  color: ${color.textMuted};
`;

export const Section = styled.section`
  margin-top: ${space[8]};
`;

export const List = styled.div`
  border-top: 1px solid ${color.border};
`;

export const Empty = styled.p`
  padding: ${space[10]} 0;
  color: ${color.textSubtle};
  text-align: center;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: ${space[4]};
`;
