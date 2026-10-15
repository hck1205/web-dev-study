import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  display: grid;
  gap: ${space[5]};
  padding: ${space[8]} 0 0;

  ${media.tablet} {
    padding-top: ${space[12]};
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
  color: ${color.textMuted};
`;

export const CardTitle = styled.h2`
  margin-bottom: ${space[3]};
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
`;

export const Output = styled.pre`
  margin: ${space[3]} 0;
  padding: ${space[4]};
  overflow-x: auto;
  border: 1px solid ${color.codeBorder};
  border-radius: ${radius.md};
  background: ${color.codeBg};
  font-family: ${font.mono};
  font-size: ${font.size.sm};
`;

export const Status = styled.p`
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;
