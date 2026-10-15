import styled from "@emotion/styled";
import { media } from "@/common/styles/breakpoints";
import { layout, space } from "../../tokens";

export const Box = styled.div<{ size: "narrow" | "wide" }>`
  width: 100%;
  max-width: ${({ size }) => layout[size]};
  margin: 0 auto;
  padding-left: max(${space[4]}, env(safe-area-inset-left));
  padding-right: max(${space[4]}, env(safe-area-inset-right));

  ${media.tablet} {
    padding-left: ${space[6]};
    padding-right: ${space[6]};
  }
  ${media.desktop} {
    padding-left: ${space[8]};
    padding-right: ${space[8]};
  }
`;
