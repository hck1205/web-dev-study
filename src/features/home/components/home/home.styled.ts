import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

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
    color: ${color.textSubtle};
    font-size: ${font.size.sm};
    font-weight: ${font.weight.bold};
    letter-spacing: 0.06em;
  }
  a {
    font-size: ${font.size.sm};
    font-weight: ${font.weight.medium};
    text-decoration: none;
  }
`;
