import styled from "@emotion/styled";
import { space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Grid = styled.div<{ single: boolean }>`
  display: grid;
  grid-template-columns: ${({ single }) => (single ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))")};
  gap: ${space[4]} ${space[3]};
  padding: ${space[4]};

  ${media.tablet} {
    grid-template-columns: ${({ single }) => (single ? "minmax(0, 22rem)" : "repeat(3, minmax(0, 1fr))")};
    justify-content: center;
  }
`;
