import styled from "@emotion/styled";
import { media } from "@/common/styles/breakpoints";

export const Box = styled.aside<{ accent: string }>`
  margin: 1.25rem 0;
  padding: 0.75rem 1rem;
  border-left: 4px solid ${({ accent }) => accent};
  border-radius: 0 8px 8px 0;
  background: rgb(128 128 128 / 0.1);

  ${media.tablet} {
    padding: 1rem 1.25rem;
  }

  p {
    margin: 0.25rem 0 0;
  }
`;

export const Title = styled.strong<{ accent: string }>`
  color: ${({ accent }) => accent};
`;
